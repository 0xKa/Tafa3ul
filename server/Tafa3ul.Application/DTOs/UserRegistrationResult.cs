using Tafa3ul.Domain.Entities;

namespace Tafa3ul.Application.DTOs;

public class UserRegistrationResult
{
    public bool Success { get; set; }
    public User? User { get; set; }
    public string? ConflictField { get; set; }
}

