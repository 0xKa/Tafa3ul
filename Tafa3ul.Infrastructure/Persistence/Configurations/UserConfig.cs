using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Tafa3ul.API.Entities;

namespace Tafa3ul.API.Data.Configurations
{
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasIndex(x => x.Username).IsUnique();
            builder.Property(x => x.Username).IsRequired().HasMaxLength(50);
            builder.Property(x => x.PasswordHash).IsRequired();

        }
    }
}
