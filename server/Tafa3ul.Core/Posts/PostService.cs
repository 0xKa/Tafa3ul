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
}
