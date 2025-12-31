using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Profile;

public class ProfileSkillDto
{
    [Required]
    [StringLength(100)]
    public string SkillName { get; set; } = string.Empty;

    public byte? YearsOfExperience { get; set; }
}