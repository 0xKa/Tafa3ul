using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Tafa3ul.Data.Persistence;

namespace Tafa3ul.Data;

public static class DependencyInjection
{
    public static IServiceCollection AddData(
        this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<Tafa3ulDbContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

        return services;
    }
}
