using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Entities;

public class Post : BaseDomainObject
{
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    [Required]
    [StringLength(2000)]
    public string Content { get; set; } = string.Empty;

    [StringLength(255)]
    public string? ImageUrl { get; set; }

    public int LikesCount { get; set; }
    public int CommentsCount { get; set; }

    public ICollection<PostLike> Likes { get; set; } = [];
    public ICollection<PostComment> Comments { get; set; } = [];
}