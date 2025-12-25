using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        public async Task<ActionResult<User>> Register(UserRegisterDto dto)
        {
            if (!ModelState.IsValid) 
                return Ok(ModelState);

            var user = await authService.RegisterAsync(dto);

            if (user == null)
                return BadRequest("Username already exists");

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLoginDto userDto)
        {
            var token = await authService.LoginAsync(userDto);

            if (token == null)
                return Unauthorized("Invalid username or password");

            return Ok(token);
        }

        [Authorize]
        [HttpGet("auth-only")]
        public async Task<IActionResult> AuthOnly()
        {
            return Ok("Auth controller is working!");
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("admin-only")]
        public async Task<IActionResult> AdminOnly()
        {
            return Ok("Admin controller is working!");
        }

        [Authorize(Roles = "Guest")]
        [HttpGet("guest-only")]
        public async Task<IActionResult> GuestOnly()
        {
            return Ok("Guest controller is working!");
        }

        [Authorize(Roles ="Admin,User")]
        [HttpGet("user-and-admin")]
        public async Task<IActionResult> UserAndAdmin()
        {
            return Ok("User and Admin controller is working!");
        }


    }
}
