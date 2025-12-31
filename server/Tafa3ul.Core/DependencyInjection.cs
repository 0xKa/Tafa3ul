using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Tafa3ul.Core.Security;
using Tafa3ul.Core.UserProfile;

namespace Tafa3ul.Core;

public static class DependencyInjection
{
    public static IServiceCollection AddCore(
        this IServiceCollection services, IConfiguration configuration)
    {
        services.Configure<JwtSettings>(configuration.GetSection("Jwt"));
        services.AddScoped<AuthService>();
        services.AddScoped<UserProfileService>();

        return services;
    }
}
