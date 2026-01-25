using Microsoft.AspNetCore.Hosting;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Formats.Webp;
using SixLabors.ImageSharp.Processing;

namespace Tafa3ul.Core.UserProfile;

public class LocalFileStorageService(IWebHostEnvironment env)
{
    private readonly IWebHostEnvironment _env = env;

    public async Task<string> SaveProfileImageAsync(Stream fileStream, Guid userId)
    {
        if (string.IsNullOrEmpty(_env.WebRootPath))
            throw new InvalidOperationException("wwwroot is not configured.");

        string folderName = "profile-images";
        var folder = Path.Combine(_env.WebRootPath, folderName);
        Directory.CreateDirectory(folder);

        var fileName = $"{userId}.webp";
        var path = Path.Combine(folder, fileName);

        using var image = await Image.LoadAsync(fileStream);

        image.Mutate(x => x.Resize(new ResizeOptions
        {
            Size = new Size(256, 256),
            Mode = ResizeMode.Crop
        }));

        await image.SaveAsync(path, new WebpEncoder
        {
            Quality = 80,
            FileFormat = WebpFileFormatType.Lossy
        });

        return $"/{folderName}/{fileName}";
    }

    public async Task<string> SavePostImageAsync(Stream fileStream, Guid postId)
    {
        if (string.IsNullOrEmpty(_env.WebRootPath))
            throw new InvalidOperationException("wwwroot is not configured.");

        var folder = Path.Combine(_env.WebRootPath, "post-images");
        Directory.CreateDirectory(folder);

        var fileName = $"{postId}.jpg";
        var path = Path.Combine(folder, fileName);

        using var image = await Image.LoadAsync(fileStream);

        // Resize only if too large (keep aspect ratio)
        image.Mutate(x => x.Resize(new ResizeOptions
        {
            Mode = ResizeMode.Max,
            Size = new Size(1080, 1080)
        }));

        await image.SaveAsync(path, new JpegEncoder
        {
            Quality = 85
        });

        return $"/post-images/{fileName}";
    }

    public Task<bool> DeleteProfileImageAsync(Guid userId)
    {
        if (string.IsNullOrEmpty(_env.WebRootPath))
            throw new InvalidOperationException("wwwroot is not configured.");

        var folderName = "profile-images";
        var folder = Path.Combine(_env.WebRootPath, folderName);
        var fileName = $"{userId}.webp";
        var path = Path.Combine(folder, fileName);

        if (!File.Exists(path))
            return Task.FromResult(false);

        File.Delete(path);
        return Task.FromResult(true);
    }

    public Task<bool> DeletePostImageAsync(Guid postId)
    {
        if (string.IsNullOrEmpty(_env.WebRootPath))
            throw new InvalidOperationException("wwwroot is not configured.");
        var folder = Path.Combine(_env.WebRootPath, "post-images");
        var fileName = $"{postId}.jpg";
        var path = Path.Combine(folder, fileName);
        if (!File.Exists(path))
            return Task.FromResult(false);
        File.Delete(path);
        return Task.FromResult(true);
    }

}
