using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Profile;

public class EducationDto
{
    public Guid? Id { get; set; }

    [Required]
    [StringLength(150)]
    public string Institution { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string Degree { get; set; } = string.Empty;

    [Required]
    [StringLength(100)]
    public string FieldOfStudy { get; set; } = string.Empty;

    [Required]
    public DateOnly StartDate { get; set; }
    public DateOnly? EndDate { get; set; }

    [StringLength(500)]
    public string? Description { get; set; }
}
