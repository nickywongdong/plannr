using Domain.Entities.UniqueSession;

namespace PlannrWebAPI.Services;

public interface IUniqueSessionService
{
    Task<List<UniqueSession>> GetAll();

    ValueTask<UniqueSession?> Find(Guid id);

    Task Add(UniqueSession uniqueSession);

    Task Update(UniqueSession uniqueSession);

    Task Remove(UniqueSession uniqueSession);
}