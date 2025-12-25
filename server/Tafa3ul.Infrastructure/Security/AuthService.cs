using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Tafa3ul.Application.DTOs;
using Tafa3ul.Application.Interfaces;
using Tafa3ul.Domain.Entities;
using Tafa3ul.Infrastructure.Persistence;

namespace Tafa3ul.Infrastructure.Security
{
    public class AuthService(Tafa3ulDbContext context, IOptions<JwtSettings> options) : IAuthService
    {
        private readonly JwtSettings _jwtSettings = options.Value;

        public async Task<User?> RegisterAsync(UserRegisterDto userDto)
        {
            if (await context.Users.AnyAsync(u => u.Username == userDto.Username))
                return null;

            User user = new();
            var hashPassword = new PasswordHasher<User>().HashPassword(user, userDto.Password);

            user.Username = userDto.Username.Trim();
            user.PasswordHash = hashPassword;
            user.Email = userDto.Email.Trim().ToLowerInvariant();
            user.Role = userDto.Role;

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return user;
        }

        public async Task<string?> LoginAsync(UserLoginDto userDto)
        {
            User? user = await context.Users.FirstOrDefaultAsync(u => u.Username == userDto.Username);
            if (user is null)
                return null;

            if (new PasswordHasher<User>()
                .VerifyHashedPassword(user, user.PasswordHash, userDto.Password)
                == PasswordVerificationResult.Failed)
                return null;

            return CreateToken(user);
        }

        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new(ClaimTypes.Name, user.Username),
                new(ClaimTypes.Name, user.Id.ToString())
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_jwtSettings.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var expires = DateTime.UtcNow.AddMinutes(_jwtSettings.ExpirationMinutes);

            var tokenDescriptor = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: expires,
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }


    }
}
