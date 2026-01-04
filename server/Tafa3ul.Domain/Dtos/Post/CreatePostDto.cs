using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Post;

public class CreatePostDto
{
    [Required]
    [StringLength(2000)]
    public string Content { get; set; } = string.Empty;
}