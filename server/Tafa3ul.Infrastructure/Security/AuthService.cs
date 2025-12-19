using Tafa3ul.Application.DTOs;
using Tafa3ul.Application.Interfaces;
using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Infrastructure.Security
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
