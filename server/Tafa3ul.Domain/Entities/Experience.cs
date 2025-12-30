namespace Tafa3ul.Domain.Entities;

public class Experience : BaseDomainObject
{
    public Guid ProfileId { get; set; }
    public Profile Profile { get; set; } = null!;

    public string JobTitle { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;

    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }

    public string? Description { get; set; }
}

