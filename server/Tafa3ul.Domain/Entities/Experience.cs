using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Entities;

public class Experience : BaseDomainObject
{
    public Guid ProfileId { get; set; }
    public Profile Profile { get; set; } = null!;

    [StringLength(150)]
    public string JobTitle { get; set; } = string.Empty;
    [StringLength(150)]
    public string Company { get; set; } = string.Empty;

    public bool IsCurrentlyWorkingHere { get; set; }

    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }

    [StringLength(1000)]
    public string? Description { get; set; }
}

