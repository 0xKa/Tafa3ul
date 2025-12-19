using Microsoft.Extensions.DependencyInjection;
using Tafa3ul.Application.Interfaces;

namespace Tafa3ul.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        //services.AddScoped<AuthService>();

        return services;
    }
}
