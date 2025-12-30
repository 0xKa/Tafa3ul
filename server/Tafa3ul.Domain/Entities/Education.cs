using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Entities;

public class Education : BaseDomainObject
{
    public Guid ProfileId { get; set; }
    public Profile Profile { get; set; } = null!;
    [StringLength(150)]
    public string Institution { get; set; } = string.Empty;
    [StringLength(100)]
    public string Degree { get; set; } = string.Empty;
    [StringLength(100)]
    public string FieldOfStudy { get; set; } = string.Empty;
    public bool IsCurrentlyStudyingHere { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    [StringLength(500)]
    public string? Description { get; set; }
}
