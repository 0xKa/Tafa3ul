using Tafa3ul.Application.DTOs;

namespace Tafa3ul.Application.Interfaces
{
    public interface IAuthService
    {
        Task<UserRegistrationResult> RegisterAsync(UserRegisterRequestDto userDto);
        Task<TokenResponseDto?> LoginAsync(UserLoginDto userDto);
        Task<TokenResponseDto?> RefreshTokensAsync(RefreshTokenRequestDto requestDto);
    }
}
