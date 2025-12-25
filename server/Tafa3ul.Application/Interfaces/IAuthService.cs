using Tafa3ul.Application.DTOs;
using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Application.Interfaces
{
    public interface IAuthService
    {
        Task<User?> RegisterAsync(UserRegisterDto userDto);
        Task<TokenResponseDto?> LoginAsync(UserLoginDto userDto);
        Task<TokenResponseDto?> RefreshTokensAsync(RefreshTokenRequestDto requestDto);
    }
}
