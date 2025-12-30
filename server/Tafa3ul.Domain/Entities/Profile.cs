namespace Tafa3ul.Domain.Entities;

public class Profile : BaseDomainObject
{
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;

    public string? Company { get; set; }
    public string? Website { get; set; }
    public string? Country { get; set; }
    public string? Location { get; set; }
    public string? Bio { get; set; }


    //public ICollection<Skill> Skills { get; set; } = [];
    public string FullName => $"{FirstName} {LastName}";
}
