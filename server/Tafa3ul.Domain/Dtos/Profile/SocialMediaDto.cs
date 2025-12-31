using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Profile;

public class SocialMediaDto
{
    [StringLength(255)]
    public string? YouTube { get; set; }
    [StringLength(255)]
    public string? Twitter { get; set; }
    [StringLength(255)]
    public string? Facebook { get; set; }
    [StringLength(255)]
    public string? LinkedIn { get; set; }

    [StringLength(255)]
    public string? Instagram { get; set; }
    [StringLength(255)]
    public string? GitHub { get; set; }
    [StringLength(255)]
    public string? TikTok { get; set; }
}
