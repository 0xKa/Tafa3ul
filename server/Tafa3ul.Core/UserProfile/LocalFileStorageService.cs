using Microsoft.AspNetCore.Hosting;
using SixLabors.ImageSharp;
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
