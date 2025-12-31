using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Profile;

public class ExperienceDto
{
    public Guid? Id { get; set; }
    [Required]
    [StringLength(150)]
    public string JobTitle { get; set; } = string.Empty;
    [Required]
    [StringLength(150)]
    public string Company { get; set; } = string.Empty;
    [Required]
    public DateOnly StartDate { get; set; }
    public DateOnly? EndDate { get; set; }
    [StringLength(500)]
    public string? Description { get; set; }
}
