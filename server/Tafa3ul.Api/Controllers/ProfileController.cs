using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Tafa3ul.Core.Posts;
using Tafa3ul.Core.UserProfile;
using Tafa3ul.Domain.Dtos.Post;
using Tafa3ul.Domain.Dtos.Profile;

namespace Tafa3ul.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class ProfileController
    (UserProfileService profileService, PostService postService) : ControllerBase
{
    private Guid UserId => GetAuthenticatedUserId();

    [HttpPost]
    public async Task<IActionResult> CreateOrUpdateProfile(CreateProfileDto dto)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        var profile = await profileService.CreateOrUpdateProfileAsync(userId, dto);
        return Ok(ProfileResponseDto.FromEntity(profile));
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAllProfiles
        ([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        if (page < 1) page = 1;
        if (pageSize < 1 || pageSize > 100) pageSize = 10;

        var (profiles, totalCount) = await profileService.GetAllProfilesAsync(page, pageSize);

        return Ok(new
        {
            //apply given method to each profile, return enumerable with json objects
            data = profiles.Select(ProfileResponseDto.FromEntity),
            page,
            pageSize,
            totalCount,
            totalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
        });
    }

    [HttpGet("me")]
    public async Task<IActionResult> GetMyProfile()
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        var profile = await profileService.GetProfileByUserIdAsync(userId);
        if (profile == null)
            return NotFound(new { message = "Profile not found" });

        return Ok(ProfileResponseDto.FromEntity(profile));
    }

    [HttpGet("user/{user_id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetProfileByUserId(Guid user_id)
    {
        var profile = await profileService.GetProfileByUserIdAsync(user_id);
        if (profile == null)
            return NotFound(new { message = "Profile not found" });

        return Ok(ProfileResponseDto.FromEntity(profile));
    }

    [HttpGet("user/{user_id}/posts")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsByUserId(Guid user_id, [FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        if (page < 1) page = 1;
        if (pageSize < 1 || pageSize > 100) pageSize = 10;

        var (posts, totalCount) = await postService.GetPostsByUserIdAsync(user_id, page, pageSize);

        return Ok(new
        {
            data = posts.Select(PostResponseDto.FromEntity),
            page,
            pageSize,
            totalCount,
            totalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
        });
    }

    [HttpGet("{profile_id}/posts")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostsByProfileId(Guid profile_id, [FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        if (page < 1) page = 1;
        if (pageSize < 1 || pageSize > 100) pageSize = 10;

        var (posts, totalCount) = await postService.GetPostsByProfileIdAsync(profile_id, page, pageSize);

        return Ok(new
        {
            data = posts.Select(PostResponseDto.FromEntity),
            page,
            pageSize,
            totalCount,
            totalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
        });
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteProfile()
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        var deleted = await profileService.DeleteProfileAsync(userId);
        if (!deleted)
            return NotFound(new { message = "Profile not found" });

        return NoContent();
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadProfilePicture(IFormFile file)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        if (file == null || file.Length == 0)
            return BadRequest(new { message = "No file uploaded" });

        string[] allowedExtensions = [".jpg", ".jpeg", ".png"];
        string extension = Path.GetExtension(file.FileName).ToLowerInvariant();

        if (!allowedExtensions.Contains(extension))
            return BadRequest(new { message = "Invalid file type" });

        var path = await profileService.UpdateProfileImageAsync(file.OpenReadStream(), extension, userId);

        if (string.IsNullOrEmpty(path))
            return StatusCode(500, new { message = "Error saving profile picture." });

        return Ok(new { savedImageUrl = path });
    }

    [HttpPut("experience")]
    public async Task<IActionResult> AddOrUpdateExperience(ExperienceDto dto)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var experience = await profileService.AddOrUpdateExperienceAsync(userId, dto);
            return Ok(new
            {
                experience.Id,
                experience.JobTitle,
                experience.Company,
                experience.StartDate,
                experience.EndDate,
                experience.IsCurrentlyWorkingHere,
                experience.Description
            });
        }
        catch (InvalidOperationException ex)
        {
            return NotFound(new { message = ex.Message });
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    [HttpDelete("experience/{exp_id}")]
    public async Task<IActionResult> DeleteExperience(Guid exp_id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var deleted = await profileService.DeleteExperienceAsync(userId, exp_id);
            if (!deleted)
                return NotFound(new { message = "Experience not found" });

            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    [HttpPut("education")]
    public async Task<IActionResult> AddOrUpdateEducation(EducationDto dto)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var education = await profileService.AddOrUpdateEducationAsync(userId, dto);
            return Ok(new
            {
                education.Id,
                education.Institution,
                education.Degree,
                education.FieldOfStudy,
                education.StartDate,
                education.EndDate,
                education.IsCurrentlyStudyingHere,
                education.Description
            });
        }
        catch (InvalidOperationException ex)
        {
            return NotFound(new { message = ex.Message });
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    [HttpDelete("education/{edu_id}")]
    public async Task<IActionResult> DeleteEducation(Guid edu_id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var deleted = await profileService.DeleteEducationAsync(userId, edu_id);
            if (!deleted)
                return NotFound(new { message = "Education not found" });

            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    [HttpPut("skill")]
    public async Task<IActionResult> AddOrUpdateSkill(ProfileSkillDto dto)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });
        try
        {
            var profileSkill = await profileService.AddOrUpdateSkillAsync(userId, dto);
            return Ok(new
            {
                profileSkill.Id,
                profileSkill.SkillId,
                skillName = profileSkill.Skill?.Name,
                profileSkill.YearsOfExperience
            });
        }
        catch (InvalidOperationException ex)
        {
            return NotFound(new { message = ex.Message });
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    [HttpDelete("skill/{profile_skill_id}")]
    public async Task<IActionResult> DeleteSkill(Guid profile_skill_id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });
        try
        {
            var deleted = await profileService.DeleteSkillAsync(userId, profile_skill_id);
            if (!deleted)
                return NotFound(new { message = "Skill not found" });
            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    private Guid GetAuthenticatedUserId()
    {
        //return Guid.Parse("019b6dd3-30bd-77d4-a1f8-3f248ada5690"); //temp
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return Guid.TryParse(userIdClaim, out var userId) ? userId : Guid.Empty;
    }

}

