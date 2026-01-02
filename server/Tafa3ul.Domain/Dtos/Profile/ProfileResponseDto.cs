using Tafa3ul.Domain.Entities;
using ProfileEntity = Tafa3ul.Domain.Entities.Profile;

namespace Tafa3ul.Domain.Dtos.Profile;

public class ProfileResponseDto
{
    public Guid Id { get; init; }
    public Guid UserId { get; init; }
    public string FirstName { get; init; } = string.Empty;
    public string LastName { get; init; } = string.Empty;
    public string FullName { get; init; } = string.Empty;
    public string? Company { get; init; }
    public string? Website { get; init; }
    public string? Country { get; init; }
    public string? Location { get; init; }
    public string? Bio { get; init; }
    public SocialMediaDto? Social { get; init; }
    public List<ProfileSkillResponseDto> Skills { get; init; } = [];
    public List<ExperienceResponseDto> Experiences { get; init; } = [];
    public List<EducationResponseDto> Educations { get; init; } = [];
    public ProfileUserDto? User { get; init; }
    public DateTime CreatedAt { get; init; }
    public DateTime UpdatedAt { get; init; }

    public static ProfileResponseDto FromEntity(ProfileEntity profile)
    {
        return new ProfileResponseDto
        {
            Id = profile.Id,
            UserId = profile.UserId,
            FirstName = profile.FirstName,
            LastName = profile.LastName,
            FullName = profile.FullName,
            Company = profile.Company,
            Website = profile.Website,
            Country = profile.Country,
            Location = profile.Location,
            Bio = profile.Bio,
            Social = profile.Social == null ? null : new SocialMediaDto
            {
                LinkedIn = profile.Social.LinkedIn,
                GitHub = profile.Social.GitHub,
                Twitter = profile.Social.Twitter,
                Facebook = profile.Social.Facebook,
                Instagram = profile.Social.Instagram,
                YouTube = profile.Social.YouTube,
                TikTok = profile.Social.TikTok
            },
            Skills = profile.Skills?.Select(ProfileSkillResponseDto.FromEntity).ToList() ?? [],
            Experiences = profile.Experiences?.Select(ExperienceResponseDto.FromEntity).ToList() ?? [],
            Educations = profile.Educations?.Select(EducationResponseDto.FromEntity).ToList() ?? [],
            User = profile.User == null ? null : new ProfileUserDto
            {
                Id = profile.User.Id,
                Username = profile.User.Username,
                Email = profile.User.Email
            },
            CreatedAt = profile.CreatedAt,
            UpdatedAt = profile.UpdatedAt
        };
    }
}

public class ProfileSkillResponseDto
{
    public Guid Id { get; init; }
    public Guid SkillId { get; init; }
    public string? SkillName { get; init; }
    public byte? YearsOfExperience { get; init; }

    public static ProfileSkillResponseDto FromEntity(ProfileSkill profileSkill)
    {
        return new ProfileSkillResponseDto
        {
            Id = profileSkill.Id,
            SkillId = profileSkill.SkillId,
            SkillName = profileSkill.Skill?.Name,
            YearsOfExperience = profileSkill.YearsOfExperience
        };
    }
}

public class ExperienceResponseDto
{
    public Guid Id { get; init; }
    public string JobTitle { get; init; } = string.Empty;
    public string Company { get; init; } = string.Empty;
    public DateOnly StartDate { get; init; }
    public DateOnly? EndDate { get; init; }
    public bool IsCurrentlyWorkingHere { get; init; }
    public string? Description { get; init; }

    public static ExperienceResponseDto FromEntity(Experience experience)
    {
        return new ExperienceResponseDto
        {
            Id = experience.Id,
            JobTitle = experience.JobTitle,
            Company = experience.Company,
            StartDate = experience.StartDate,
            EndDate = experience.EndDate,
            IsCurrentlyWorkingHere = experience.IsCurrentlyWorkingHere,
            Description = experience.Description
        };
    }
}

public class EducationResponseDto
{
    public Guid Id { get; init; }
    public string Institution { get; init; } = string.Empty;
    public string Degree { get; init; } = string.Empty;
    public string FieldOfStudy { get; init; } = string.Empty;
    public DateOnly StartDate { get; init; }
    public DateOnly? EndDate { get; init; }
    public bool IsCurrentlyStudyingHere { get; init; }
    public string? Description { get; init; }

    public static EducationResponseDto FromEntity(Education education)
    {
        return new EducationResponseDto
        {
            Id = education.Id,
            Institution = education.Institution,
            Degree = education.Degree,
            FieldOfStudy = education.FieldOfStudy,
            StartDate = education.StartDate,
            EndDate = education.EndDate,
            IsCurrentlyStudyingHere = education.IsCurrentlyStudyingHere,
            Description = education.Description
        };
    }
}

public class ProfileUserDto
{
    public Guid Id { get; init; }
    public string Username { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
}
