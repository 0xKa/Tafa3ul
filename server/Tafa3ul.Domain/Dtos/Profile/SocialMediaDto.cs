using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Profile;

public class SocialMediaDto
{
    [Url]
    [StringLength(255)]
    public string? YouTube { get; set; }
    [Url]
    [StringLength(255)]
    public string? Twitter { get; set; }
    [Url]
    [StringLength(255)]
    public string? Facebook { get; set; }
    [Url]
    [StringLength(255)]
    public string? LinkedIn { get; set; }

    [Url]
    [StringLength(255)]
    public string? Instagram { get; set; }
    [Url]
    [StringLength(255)]
    public string? GitHub { get; set; }
    [Url]
    [StringLength(255)]
    public string? TikTok { get; set; }
}
