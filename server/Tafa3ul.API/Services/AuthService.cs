using Tafa3ul.API.Entities;
using Tafa3ul.API.Models;
using Tafa3ul.API.Services.Interfaces;

namespace Tafa3ul.API.Services
{
    public class AuthService() : IAuthService
    {
        public Task<string> LoginAsync(UserDto userDto)
        {
            throw new NotImplementedException();
        }

        public Task<User?> RegisterAsync(UserDto userDto)
        {
            throw new NotImplementedException();
        }
    }
}
