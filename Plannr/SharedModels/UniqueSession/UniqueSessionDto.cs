namespace Plannr.SharedModels;
public class UniqueSessionDto
{
    public string UniqueLink { get; set; } = string.Empty;
    public bool IsExpired { get; set; }
}