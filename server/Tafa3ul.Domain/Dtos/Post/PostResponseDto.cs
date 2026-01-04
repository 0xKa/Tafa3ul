using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Domain.Dtos.Post;

public class PostResponseDto
{
    public Guid Id { get; init; }
    public Guid UserId { get; init; }
    public string Content { get; init; } = string.Empty;
    public string? ImageUrl { get; init; }
    public int LikesCount { get; init; }
    public int CommentsCount { get; init; }
    public List<PostLikeResponseDto> Likes { get; init; } = [];
    public List<PostCommentResponseDto> Comments { get; init; } = [];
    public PostUserDto? User { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime UpdatedAt { get; init; }

    public static PostResponseDto FromEntity(Entities.Post post)
    {
        return new PostResponseDto
        {
            Id = post.Id,
            UserId = post.UserId,
            Content = post.Content,
            ImageUrl = post.ImageUrl,
            LikesCount = post.LikesCount,
            CommentsCount = post.CommentsCount,
            Likes = post.Likes?.Select(PostLikeResponseDto.FromEntity).ToList() ?? [],
            Comments = post.Comments?.Select(PostCommentResponseDto.FromEntity).ToList() ?? [],
            User = post.User == null ? null : new PostUserDto
            {
                Id = post.User.Id,
                Username = post.User.Username
            },
            CreatedAt = post.CreatedAt,
            UpdatedAt = post.UpdatedAt
        };
    }
}

public class PostLikeResponseDto
{
    public Guid Id { get; init; }
    public Guid UserId { get; init; }
    public PostUserDto? User { get; init; }
    public DateTime LikedAt { get; init; }

    public static PostLikeResponseDto FromEntity(PostLike like)
    {
        return new PostLikeResponseDto
        {
            Id = like.Id,
            UserId = like.UserId,
            User = like.User == null ? null : new PostUserDto
            {
                Id = like.User.Id,
                Username = like.User.Username
            },
            LikedAt = like.LikedAt
        };
    }
}

public class PostCommentResponseDto
{
    public Guid Id { get; init; }
    public Guid UserId { get; init; }
    public string Content { get; init; } = string.Empty;
    public PostUserDto? User { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime UpdatedAt { get; init; }

    public static PostCommentResponseDto FromEntity(PostComment comment)
    {
        return new PostCommentResponseDto
        {
            Id = comment.Id,
            UserId = comment.UserId,
            Content = comment.Content,
            User = comment.User == null ? null : new PostUserDto
            {
                Id = comment.User.Id,
                Username = comment.User.Username
            },
            CreatedAt = comment.CreatedAt,
            UpdatedAt = comment.UpdatedAt
        };
    }
}

public class PostUserDto
{
    public Guid Id { get; init; }
    public string Username { get; init; } = string.Empty;
}
