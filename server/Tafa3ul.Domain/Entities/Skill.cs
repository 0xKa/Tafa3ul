using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Entities;

public class Skill : BaseDomainObject
{
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    public ICollection<ProfileSkill> ProfileSkills { get; set; } = [];
}

public class ProfileSkill
{
    public Guid Id { get; set; }

    public Guid ProfileId { get; set; }
    public Profile Profile { get; set; } = null!;

    public Guid SkillId { get; set; }
    public Skill Skill { get; set; } = null!;

    public byte? YearsOfExperience { get; set; }
}
