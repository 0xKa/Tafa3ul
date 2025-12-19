using Tafa3ul.API.Entities;
using Tafa3ul.API.Models;

namespace Tafa3ul.API.Services.Interfaces
{
    public interface IAuthService
    {
        Task<User?> RegisterAsync(UserDto userDto);
        Task<string> LoginAsync(UserDto userDto);

    }
}
