namespace Plannr.SharedModels;

public class UniqueSession
{
    public Guid Id { get; set; }
    public string? UniqueLink { get; set; }
    public bool IsExpired { get; set; }
}
