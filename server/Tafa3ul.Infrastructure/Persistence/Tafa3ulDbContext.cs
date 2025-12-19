using Microsoft.EntityFrameworkCore;
using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Infrastructure.Persistence
{
    public class Tafa3ulDbContext(DbContextOptions<Tafa3ulDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(Tafa3ulDbContext).Assembly);

        }

    }
}
