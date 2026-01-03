using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Entities;

public class PostComment : BaseDomainObject
{
    public Guid PostId { get; set; }
    public Post Post { get; set; } = null!;
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    [Required]
    [StringLength(1000)]
    public string Content { get; set; } = string.Empty;
}
