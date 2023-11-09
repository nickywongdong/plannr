using Plannr.SharedModels;

namespace PlannrWebAPI;

public static class Utilities
{
    public static Dictionary<string, string[]> IsValid(UniqueSessionDto uniqueSession)
    {
        Dictionary<string, string[]> errors = [];

        if (string.IsNullOrEmpty(uniqueSession.UniqueLink))
        {
            errors.TryAdd("uniquesession.uniquelink.errors", ["Unique Link is empty"]);
        }

        return errors;
    }
}