namespace Tafa3ul.API;

public sealed class JwtSettings
{
    public string Token { get; init; } = string.Empty;
    public string Issuer { get; init; } = string.Empty;
    public string Audience { get; init; } = string.Empty;
    public int ExpirationMinutes { get; init; }
    public int RefreshTokenExpirationDays { get; init; }
}