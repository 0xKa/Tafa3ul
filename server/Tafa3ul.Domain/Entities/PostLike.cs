namespace Tafa3ul.Domain.Entities;

public class PostLike
{
    public Guid Id { get; set; }
    public Guid PostId { get; set; }
    public Post Post { get; set; } = null!;
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;
    public DateTime LikedAt { get; set; }
}
