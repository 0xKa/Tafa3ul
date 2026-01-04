using Microsoft.AspNetCore.Hosting;

namespace Tafa3ul.Core.UserProfile;

public class LocalFileStorageService(IWebHostEnvironment env)
{
    private readonly IWebHostEnvironment _env = env;

    public async Task<string> SaveProfileImageAsync(
        Stream fileStream,
        string extension,
        Guid userId)
    {
        if (string.IsNullOrEmpty(_env.WebRootPath))
            throw new InvalidOperationException("wwwroot is not configured.");

        var folder = Path.Combine(_env.WebRootPath, "profile-images");

        if (!Directory.Exists(folder))
            Directory.CreateDirectory(folder);

        var fileName = $"{userId}{extension}";
        var path = Path.Combine(folder, fileName);

        using var fs = new FileStream(path, FileMode.Create);
        await fileStream.CopyToAsync(fs);

        return $"/profile-images/{fileName}";
    }

    public async Task<string> SavePostImageAsync(
        Stream fileStream,
        string extension,
        Guid postId)
    {
        if (string.IsNullOrEmpty(_env.WebRootPath))
            throw new InvalidOperationException("wwwroot is not configured.");

        var folder = Path.Combine(_env.WebRootPath, "post-images");

        if (!Directory.Exists(folder))
            Directory.CreateDirectory(folder);

        var fileName = $"{postId}{extension}";
        var path = Path.Combine(folder, fileName);

        using var fs = new FileStream(path, FileMode.Create);
        await fileStream.CopyToAsync(fs);

        return $"/post-images/{fileName}";
    }
}
