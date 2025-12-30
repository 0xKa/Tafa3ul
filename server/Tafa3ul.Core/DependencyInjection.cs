using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Tafa3ul.Core.Security;

namespace Tafa3ul.Core;

public static class DependencyInjection
{
    public static IServiceCollection AddCore(
        this IServiceCollection services, IConfiguration configuration)
    {
        services.Configure<JwtSettings>(configuration.GetSection("Jwt"));
        services.AddScoped<AuthService>();

        return services;
    }
}
