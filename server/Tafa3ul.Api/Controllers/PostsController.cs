using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Tafa3ul.Api.WebRequestDtos;
using Tafa3ul.Core.Posts;
using Tafa3ul.Domain.Dtos.Post;

namespace Tafa3ul.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class PostsController(PostService postService) : ControllerBase
{
    private Guid UserId => GetAuthenticatedUserId();

    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> CreatePost([FromForm] CreatePostRequest request)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        Stream? imageStream = null;

        if (request.Image != null && request.Image.Length > 0)
        {
            // MIME-type validation (better than extension)
            var allowedTypes = new[]
            {
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif"
        };

            if (!allowedTypes.Contains(request.Image.ContentType))
                return BadRequest(new { message = "Invalid image type" });

            imageStream = request.Image.OpenReadStream();
        }

        var dto = new CreatePostDto
        {
            Content = request.Content.Trim()
        };

        var post = await postService.CreatePostAsync(userId, dto, imageStream);

        return CreatedAtAction(
            nameof(GetPostById),
            new { id = post.Id },
            PostResponseDto.FromEntity(post)
        );
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPostById(Guid id)
    {
        var post = await postService.GetPostByIdAsync(id);
        if (post == null)
            return NotFound(new { message = "Post not found" });

        return Ok(PostResponseDto.FromEntity(post));
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<IActionResult> GetAllPosts(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? search = null)
    {
        if (page < 1) page = 1;
        if (pageSize < 1 || pageSize > 100) pageSize = 10;

        var (posts, totalCount) = await postService.GetAllPostsAsync(page, pageSize, search);

        return Ok(new
        {
            data = posts.Select(PostResponseDto.FromEntity),
            page,
            pageSize,
            totalCount,
            totalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
        });
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePost(Guid id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var deleted = await postService.DeletePostAsync(userId, id);
            if (!deleted)
                return NotFound(new { message = "Post not found" });

            return NoContent();
        }
        catch (UnauthorizedAccessException)
        {
            return Forbid();
        }
    }

    [HttpPut("like/{id}")]
    public async Task<IActionResult> LikePost(Guid id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var post = await postService.LikePostAsync(userId, id);
            return Ok(PostResponseDto.FromEntity(post));
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPut("unlike/{id}")]
    public async Task<IActionResult> UnlikePost(Guid id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var post = await postService.UnlikePostAsync(userId, id);
            return Ok(PostResponseDto.FromEntity(post));
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost("comment/{post_id}")]
    public async Task<IActionResult> AddComment(Guid post_id, CreateCommentDto dto)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var comment = await postService.AddCommentAsync(userId, post_id, dto);
            return Ok(PostCommentResponseDto.FromEntity(comment));
        }
        catch (InvalidOperationException ex)
        {
            return NotFound(new { message = ex.Message });
        }
    }

    [HttpDelete("comment/{post_id}/{comment_id}")]
    public async Task<IActionResult> DeleteComment(Guid post_id, Guid comment_id)
    {
        var userId = UserId;
        if (userId == Guid.Empty)
            return Unauthorized(new { message = "User not authenticated" });

        try
        {
            var deleted = await postService.DeleteCommentAsync(userId, post_id, comment_id);
            if (!deleted)
                return NotFound(new { message = "Comment not found" });

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


