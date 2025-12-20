using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Tafa3ul.Application.DTOs;
using Tafa3ul.Application.Interfaces;
using Tafa3ul.Domain.Entities;

namespace Tafa3ul.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IAuthService authService) : ControllerBase
    {


        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDto dto)
        {
            var user = await authService.RegisterAsync(dto);

            if (user == null)
                return BadRequest("Username already exists");

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserDto userDto)
        {
            var token = await authService.LoginAsync(userDto);

            if (token == null)
                return Unauthorized("Invalid username or password");

            return Ok(token);
        }

        

    }
}
