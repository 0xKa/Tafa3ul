using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Post;

public class CreateCommentDto
{
    [Required]
    [StringLength(1000)]
    public string Content { get; set; } = string.Empty;
}
