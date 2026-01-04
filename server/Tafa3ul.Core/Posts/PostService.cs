using Microsoft.EntityFrameworkCore;
using Tafa3ul.Core.UserProfile;
using Tafa3ul.Data.Persistence;
using Tafa3ul.Domain.Dtos.Post;
using Tafa3ul.Domain.Entities;
namespace Tafa3ul.Core.Posts;

public class PostService(Tafa3ulDbContext context, LocalFileStorageService fileStorageService)
{
    public async Task<Post> CreatePostAsync(Guid userId, CreatePostDto dto, Stream? imageStream = null, string? imageExtension = null)
    {
        var post = new Post
        {
            UserId = userId,
            Content = dto.Content.Trim()
        };

        context.Posts.Add(post);
        await context.SaveChangesAsync();

        if (imageStream != null && !string.IsNullOrEmpty(imageExtension))
        {
            post.ImageUrl = await fileStorageService.SavePostImageAsync(imageStream, imageExtension, post.Id);
            await context.SaveChangesAsync();
        }

        return await GetPostByIdAsync(post.Id) ?? post;
    }

    public async Task<Post?> GetPostByIdAsync(Guid postId)
    {
        return await context.Posts
            .Include(p => p.User)
            .Include(p => p.Likes).ThenInclude(l => l.User)
            .Include(p => p.Comments).ThenInclude(c => c.User)
            .FirstOrDefaultAsync(p => p.Id == postId);
    }

    public async Task<(List<Post> Posts, int TotalCount)> GetAllPostsAsync(int page, int pageSize)
    {
        var posts = await context.Posts
            .Include(p => p.User)
            .Include(p => p.Likes).ThenInclude(l => l.User)
            .Include(p => p.Comments).ThenInclude(c => c.User)
            .OrderByDescending(p => p.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        var totalCount = await context.Posts.CountAsync();
        return (posts, totalCount);
    }

    public async Task<(List<Post> Posts, int TotalCount)> GetPostsByUserIdAsync(Guid userId, int page, int pageSize)
    {
        var posts = await context.Posts
            .Include(p => p.User)
            .Include(p => p.Likes).ThenInclude(l => l.User)
            .Include(p => p.Comments).ThenInclude(c => c.User)
            .Where(p => p.UserId == userId)
            .OrderByDescending(p => p.CreatedAt)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        var totalCount = await context.Posts.CountAsync(p => p.UserId == userId);
        return (posts, totalCount);
    }

    public async Task<(List<Post> Posts, int TotalCount)> GetPostsByProfileIdAsync(Guid profileId, int page, int pageSize)
    {
        var profile = await context.Profiles.FindAsync(profileId);
        if (profile == null)
            return ([], 0);

        return await GetPostsByUserIdAsync(profile.UserId, page, pageSize);
    }

    public async Task<bool> DeletePostAsync(Guid userId, Guid postId)
    {
        var post = await context.Posts
            .Include(p => p.Likes)
            .Include(p => p.Comments)
            .FirstOrDefaultAsync(p => p.Id == postId);

        if (post == null)
            return false;

        if (post.UserId != userId)
            throw new UnauthorizedAccessException("You don't have permission to delete this post");

        context.Posts.Remove(post);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<Post> LikePostAsync(Guid userId, Guid postId)
    {
        var post = await context.Posts
            .Include(p => p.Likes)
            .FirstOrDefaultAsync(p => p.Id == postId)
            ?? throw new InvalidOperationException("Post not found");

        var existingLike = post.Likes.FirstOrDefault(l => l.UserId == userId);
        if (existingLike != null)
            throw new InvalidOperationException("You have already liked this post");

        var like = new PostLike
        {
            PostId = postId,
            UserId = userId,
            LikedAt = DateTime.UtcNow
        };

        context.PostLikes.Add(like);
        post.LikesCount++;
        await context.SaveChangesAsync();

        return await GetPostByIdAsync(postId) ?? post;
    }

    public async Task<Post> UnlikePostAsync(Guid userId, Guid postId)
    {
        var post = await context.Posts
            .Include(p => p.Likes)
            .FirstOrDefaultAsync(p => p.Id == postId)
            ?? throw new InvalidOperationException("Post not found");

        var like = post.Likes.FirstOrDefault(l => l.UserId == userId)
            ?? throw new InvalidOperationException("You have not liked this post");

        context.PostLikes.Remove(like);
        post.LikesCount = Math.Max(0, post.LikesCount - 1);
        await context.SaveChangesAsync();

        return await GetPostByIdAsync(postId) ?? post;
    }

    public async Task<PostComment> AddCommentAsync(Guid userId, Guid postId, CreateCommentDto dto)
    {
        var post = await context.Posts.FindAsync(postId)
            ?? throw new InvalidOperationException("Post not found");

        var comment = new PostComment
        {
            PostId = postId,
            UserId = userId,
            Content = dto.Content.Trim()
        };

        context.PostComments.Add(comment);
        post.CommentsCount++;
        await context.SaveChangesAsync();

        return await context.PostComments
            .Include(c => c.User)
            .FirstAsync(c => c.Id == comment.Id);
    }

    public async Task<bool> DeleteCommentAsync(Guid userId, Guid postId, Guid commentId)
    {
        var comment = await context.PostComments
            .Include(c => c.Post)
            .FirstOrDefaultAsync(c => c.Id == commentId && c.PostId == postId);

        if (comment == null)
            return false;

        if (comment.UserId != userId && comment.Post.UserId != userId)
            throw new UnauthorizedAccessException("You don't have permission to delete this comment");

        var post = comment.Post;
        context.PostComments.Remove(comment);
        post.CommentsCount = Math.Max(0, post.CommentsCount - 1);
        await context.SaveChangesAsync();
        return true;
    }
}
