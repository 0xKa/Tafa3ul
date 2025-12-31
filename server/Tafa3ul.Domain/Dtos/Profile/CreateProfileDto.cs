using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Profile;

public class CreateProfileDto
{
    [Required]
    [StringLength(50)]
    public string FirstName { get; set; } = string.Empty;
    [Required]
    [StringLength(50)]
    public string LastName { get; set; } = string.Empty;

    [StringLength(100)]
    public string? Company { get; set; }
    [StringLength(255)]
    public string? Website { get; set; }
    [StringLength(100)]
    public string? Country { get; set; }
    [StringLength(100)]
    public string? Location { get; set; }
    [StringLength(500)]
    public string? Bio { get; set; }

    public SocialMediaDto? Social { get; set; }
}
