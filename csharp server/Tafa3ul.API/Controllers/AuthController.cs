using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Tafa3ul.API.Entities;
using Tafa3ul.API.Models;

namespace Tafa3ul.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppSettings _appSettings;

        public AuthController(IOptions<AppSettings> options)
        {
            _appSettings = options.Value;
        }

        // Demo-only in?memory user store
        public static User user = new User();

        [HttpPost("register")]
        public ActionResult<User> Register(UserDto dto)
        {
            var hashPassword = new PasswordHasher<User>().HashPassword(user, dto.Password);

            user.Username = dto.Username;
            user.PasswordHash = hashPassword;

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult Login(UserDto userDto)
        {
            if (user.Username != userDto.Username)
            {
                return Unauthorized("Invalid username");
            }

            var result = new PasswordHasher<User>()
                .VerifyHashedPassword(user, user.PasswordHash, userDto.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Invalid password");
            }

            var token = CreateToken(user);
            return Ok(new { token });
        }

        private string CreateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)
            };

            var keyBytes = Encoding.UTF8.GetBytes(_appSettings.JwtSettings.Token);
            var key = new SymmetricSecurityKey(keyBytes);
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expires = DateTime.UtcNow.AddMinutes(_appSettings.JwtSettings.ExpirationMinutes);

            var token = new JwtSecurityToken(
                issuer: _appSettings.JwtSettings.Issuer,
                audience: _appSettings.JwtSettings.Audience,
                claims: claims,
                expires: expires,
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}