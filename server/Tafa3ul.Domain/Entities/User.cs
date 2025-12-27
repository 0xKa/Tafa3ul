using Tafa3ul.Domain.Enums;

namespace Tafa3ul.Domain.Entities
{
    public class User : BaseDomainObject
    {
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public UserRole Role { get; set; } = UserRole.User;

        public string? RefreshToken { get; set; }
        public DateTime? RefreshTokenExpiryTime { get; set; }


        public string FullName => $"{FirstName} {LastName}";

    }
}
