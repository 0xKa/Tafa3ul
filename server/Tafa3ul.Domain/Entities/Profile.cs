using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Entities;

public class Profile : BaseDomainObject
{
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    [StringLength(50)]
    public string FirstName { get; set; } = string.Empty;
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

    public SocialMediaAccounts? Social { get; set; }
    public ICollection<ProfileSkill> Skills { get; set; } = [];
    public ICollection<Experience> Experiences { get; set; } = [];
    public ICollection<Education> Educations { get; set; } = [];

    public string FullName => $"{FirstName} {LastName}";
}
