using System.ComponentModel.DataAnnotations;

namespace Tafa3ul.Domain.Dtos.Auth;

public class UserLoginDto
{
    [Required]
    [MinLength(3)]
    public string Username { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
}
