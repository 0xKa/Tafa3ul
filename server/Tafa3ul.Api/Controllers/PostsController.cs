using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Tafa3ul.Api.WebRequestDtos;
using Tafa3ul.Core.Posts;
using Tafa3ul.Domain.Dtos.Post;

namespace Tafa3ul.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
//[Authorize]
public class PostsController(PostService postService) : ControllerBase
{
    private Guid UserId => GetAuthenticatedUserId();

    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> CreatePost([FromForm] CreatePostRequest request)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized();

        Stream? imageStream = null;
        string? imageExtension = null;

        if (request.Image != null && request.Image.Length > 0)
        {
            string[] allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
            imageExtension = Path.GetExtension(request.Image.FileName).ToLowerInvariant();

            if (!allowedExtensions.Contains(imageExtension))
                return BadRequest("Invalid image file type. Allowed: " + string.Join(", ", allowedExtensions));

            imageStream = request.Image.OpenReadStream();
        }

        var dto = new CreatePostDto { Content = request.Content };
        var post = await postService.CreatePostAsync(userId, dto, imageStream, imageExtension);
        return CreatedAtAction(nameof(GetPostById), new { id = post.Id }, PostResponseDto.FromEntity(post));
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<IActionResult> GetPostById(Guid id)
    {
        var post = await postService.GetPostByIdAsync(id);
        if (post == null)
            return NotFound("Post not found");

        return Ok(PostResponseDto.FromEntity(post));
    }


    private Guid GetAuthenticatedUserId()
    {
        return Guid.Parse("019b6dd3-30bd-77d4-a1f8-3f248ada5690"); //temp

        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        return Guid.TryParse(userIdClaim, out var userId) ? userId : Guid.Empty;
    }
}


