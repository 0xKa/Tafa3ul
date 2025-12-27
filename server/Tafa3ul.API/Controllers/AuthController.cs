using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tafa3ul.Application.DTOs;
using Tafa3ul.Application.Interfaces;

namespace Tafa3ul.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IAuthService authService) : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok("Auth controller is working!");

        [HttpPost("register")]
        public async Task<ActionResult<UserRegisterResponseDto>> Register(UserRegisterRequestDto dto)
        {
            var response = await authService.RegisterAsync(dto);

            if (response.ConflictField == "Username")
                return Conflict("Username already exists");
            if (response.ConflictField == "Email")
                return Conflict("Email already exists");
            if (response.User == null)
                return BadRequest("Registration failed");

            var user = response.User;

            var responseDto = new UserRegisterResponseDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Role = user.Role.ToString(),
                CreatedAt = user.CreatedAt
            };
            return CreatedAtAction(nameof(Register), new { id = user.Id }, responseDto);

        }

        [HttpPost("login")]
        public async Task<ActionResult<TokenResponseDto>> Login(UserLoginDto userDto)
        {
            var result = await authService.LoginAsync(userDto);

            if (result == null)
                return Unauthorized("Invalid username or password");

            return Ok(result);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<TokenResponseDto>> RefreshToken(RefreshTokenRequestDto tokenRequest)
        {
            var result = await authService.RefreshTokensAsync(tokenRequest);
            if (result == null || result.AccessToken == null || result.RefreshToken == null)
                return Unauthorized("Invalid token");
            return Ok(result);
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

        [Authorize(Roles = "Admin,User")]
        [HttpGet("user-and-admin")]
        public async Task<IActionResult> UserAndAdmin()
        {
            return Ok("User and Admin controller is working!");
        }


    }
}
