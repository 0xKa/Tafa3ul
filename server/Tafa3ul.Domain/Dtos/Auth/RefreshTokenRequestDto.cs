namespace Tafa3ul.Domain.Dtos.Auth;

public class RefreshTokenRequestDto
{
    public Guid UserId { get; set; }
    public required string RefreshToken { get; set; }
}
