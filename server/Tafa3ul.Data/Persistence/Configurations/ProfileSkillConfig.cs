using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Data.Persistence.Configurations;

internal class ProfileSkillConfig : IEntityTypeConfiguration<ProfileSkill>
{
    public void Configure(EntityTypeBuilder<ProfileSkill> builder)
    {

        builder.HasOne(ps => ps.Profile)
            .WithMany(p => p.Skills)
            .HasForeignKey(ps => ps.ProfileId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(ps => ps.Skill)
            .WithMany(s => s.ProfileSkills)
            .HasForeignKey(ps => ps.SkillId)
            .OnDelete(DeleteBehavior.Restrict);

    }
}
