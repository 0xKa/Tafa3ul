using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Tafa3ul.API.Entities;
using Tafa3ul.API.Models;

namespace Tafa3ul.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

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
                return Unauthorized("Invalid username");

            if (new PasswordHasher<User>().VerifyHashedPassword(user, user.PasswordHash, userDto.Password) == PasswordVerificationResult.Failed)
                return Unauthorized("Invalid password");

            string token = "success";
            return Ok(token);
        }
    }
}
