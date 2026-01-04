using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Api.WebRequestDtos;

public class CreatePostRequest
{
    [Required]
    [StringLength(2000)]
    public string Content { get; set; } = string.Empty;

    public IFormFile? Image { get; set; }
}