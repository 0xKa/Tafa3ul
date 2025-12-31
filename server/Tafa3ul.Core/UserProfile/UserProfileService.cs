using Microsoft.EntityFrameworkCore;
using Tafa3ul.Data.Persistence;
using Tafa3ul.Domain.Dtos.Profile;
using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Core.UserProfile;

public class UserProfileService(Tafa3ulDbContext context)
{
    public async Task<Profile> CreateOrUpdateProfileAsync(Guid userId, CreateProfileDto dto)
    {
        var profile = await context.Profiles
            .Include(p => p.Social)
            .FirstOrDefaultAsync(p => p.UserId == userId);

        if (profile == null)
        {
            profile = new Profile
            {
                UserId = userId,
                FirstName = dto.FirstName.Trim(),
                LastName = dto.LastName.Trim(),
                Company = dto.Company?.Trim(),
                Website = dto.Website?.Trim(),
                Country = dto.Country?.Trim(),
                Location = dto.Location?.Trim(),
                Bio = dto.Bio?.Trim()
            };
            context.Profiles.Add(profile);
        }
        else
        {
            profile.FirstName = dto.FirstName.Trim();
            profile.LastName = dto.LastName.Trim();
            profile.Company = dto.Company?.Trim();
            profile.Website = dto.Website?.Trim();
            profile.Country = dto.Country?.Trim();
            profile.Location = dto.Location?.Trim();
            profile.Bio = dto.Bio?.Trim();
        }

        UpdateSocialAccounts(profile, dto.Social);
        await context.SaveChangesAsync();

        return profile;
    }

    public async Task<Profile?> GetProfileByUserIdAsync(Guid userId)
    {
        return await context.Profiles
            .Include(p => p.User)
            .Include(p => p.Social)
            .Include(p => p.Skills).ThenInclude(ps => ps.Skill)
            .Include(p => p.Experiences)
            .Include(p => p.Educations)
            .FirstOrDefaultAsync(p => p.UserId == userId);
    }

    public async Task<(List<Profile> Profiles, int TotalCount)>
        GetAllProfilesAsync(int page, int pageSize)
    {

        var profiles = await context.Profiles
            .Include(p => p.User)
            .Include(p => p.Social)
            .Include(p => p.Skills).ThenInclude(ps => ps.Skill)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        var totalCount = await context.Profiles.CountAsync();
        return (profiles, totalCount);
    }

    public async Task<bool> DeleteProfileAsync(Guid userId)
    {
        var profile = await context.Profiles
            .Include(p => p.Skills)
            .Include(p => p.Experiences)
            .Include(p => p.Educations)
            .Include(p => p.Social)
            .FirstOrDefaultAsync(p => p.UserId == userId);

        if (profile == null)
            return false;

        context.Profiles.Remove(profile);
        await context.SaveChangesAsync();
        return true;
    }

    public async Task<Experience> AddOrUpdateExperienceAsync(Guid userId, ExperienceDto dto)
    {
        var profile = await context.Profiles
            .Include(p => p.Experiences)
            .FirstOrDefaultAsync(p => p.UserId == userId)
            ?? throw new InvalidOperationException("Profile not found");

        Experience experience;
        if (dto.Id.HasValue && dto.Id != Guid.Empty)
        {
            // update existing experience
            experience = await context.Experiences.FindAsync(dto.Id.Value)
                ?? throw new InvalidOperationException("Experience not found");

            if (experience.ProfileId != profile.Id)
                throw new UnauthorizedAccessException("You don't have permission to update this experience");

            UpdateExperienceEntity(experience, dto);
        }
        else
        {
            // create new experience
            experience = new Experience
            {
                ProfileId = profile.Id
            };
            UpdateExperienceEntity(experience, dto);
            context.Experiences.Add(experience);
        }

        await context.SaveChangesAsync();
        return experience;
    }

    public async Task<bool> DeleteExperienceAsync(Guid userId, Guid experienceId)
    {
        var experience = await context.Experiences
            .Include(e => e.Profile)
            .FirstOrDefaultAsync(e => e.Id == experienceId);

        if (experience == null)
            return false;

        if (experience.Profile.UserId != userId)
            throw new UnauthorizedAccessException("You don't have permission to delete this experience");

        context.Experiences.Remove(experience);
        return await context.SaveChangesAsync() > 0;
    }

    public async Task<Education> AddOrUpdateEducationAsync(Guid userId, EducationDto dto)
    {
        var profile = await context.Profiles
            .Include(p => p.Educations)
            .FirstOrDefaultAsync(p => p.UserId == userId);

        if (profile == null)
            throw new InvalidOperationException("Profile not found");

        Education education;
        if (dto.Id.HasValue && dto.Id != Guid.Empty)
        {
            education = await context.Educations.FindAsync(dto.Id.Value)
                ?? throw new InvalidOperationException("Education not found");

            if (education.ProfileId != profile.Id)
                throw new UnauthorizedAccessException("You don't have permission to update this education");

            UpdateEducationEntity(education, dto);
        }
        else
        {
            education = new Education
            {
                ProfileId = profile.Id
            };
            UpdateEducationEntity(education, dto);
            context.Educations.Add(education);
        }

        await context.SaveChangesAsync();
        return education;
    }

    public async Task<bool> DeleteEducationAsync(Guid userId, Guid educationId)
    {
        var education = await context.Educations
            .Include(e => e.Profile)
            .FirstOrDefaultAsync(e => e.Id == educationId);

        if (education == null)
            return false;

        if (education.Profile.UserId != userId)
            throw new UnauthorizedAccessException("You don't have permission to delete this education");

        context.Educations.Remove(education);
        await context.SaveChangesAsync();
        return true;
    }

    private static void UpdateExperienceEntity(Experience entity, ExperienceDto dto)
    {
        entity.JobTitle = dto.JobTitle.Trim();
        entity.Company = dto.Company.Trim();
        entity.StartDate = dto.StartDate;
        entity.EndDate = dto.EndDate;

        entity.IsCurrentlyWorkingHere =
            dto.EndDate == null || dto.EndDate >= DateOnly.FromDateTime(DateTime.UtcNow);

        entity.Description = dto.Description?.Trim();
    }

    private static void UpdateEducationEntity(Education entity, EducationDto dto)
    {
        entity.Institution = dto.Institution.Trim();
        entity.Degree = dto.Degree.Trim();
        entity.FieldOfStudy = dto.FieldOfStudy.Trim();
        entity.StartDate = dto.StartDate;
        entity.EndDate = dto.EndDate;
        entity.IsCurrentlyStudyingHere =
            dto.EndDate == null || dto.EndDate >= DateOnly.FromDateTime(DateTime.UtcNow);
        entity.Description = dto.Description?.Trim();
    }

    private static void UpdateSocialAccounts(Profile profile, SocialMediaDto? socialDto)
    {
        if (socialDto == null)
            return;

        profile.Social ??= new SocialMediaAccounts
        {
            ProfileId = profile.Id
        };

        profile.Social.LinkedIn = socialDto.LinkedIn?.Trim();
        profile.Social.GitHub = socialDto.GitHub?.Trim();
        profile.Social.Twitter = socialDto.Twitter?.Trim();
        profile.Social.Facebook = socialDto.Facebook?.Trim();
        profile.Social.Instagram = socialDto.Instagram?.Trim();
        profile.Social.YouTube = socialDto.YouTube?.Trim();
        profile.Social.TikTok = socialDto.TikTok?.Trim();
    }
}
