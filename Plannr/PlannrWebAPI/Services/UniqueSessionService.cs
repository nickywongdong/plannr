using Microsoft.EntityFrameworkCore;
using Plannr.SharedModels;
using PlannrWebAPI.Infrastructure;

namespace PlannrWebAPI.Services;

public class UniqueSessionService(UniqueSessionDbContext dbContext) : IUniqueSessionService
{
    private readonly UniqueSessionDbContext _dbContext = dbContext;

    public async ValueTask<UniqueSession?> Find(Guid id)
    {
        return await _dbContext.UniqueSessions.FindAsync(id);
    }

    public async Task<List<UniqueSession>> GetAll()
    {
        return await _dbContext.UniqueSessions.ToListAsync();
    }

    public async Task Add(UniqueSession uniqueSession)
    {
        await _dbContext.UniqueSessions.AddAsync(uniqueSession);

        if (await _dbContext.SaveChangesAsync() > 0)
            Console.WriteLine("Log", $"New unique session has been created: {uniqueSession.UniqueLink}");
    }

    public async Task Update(UniqueSession uniqueSession)
    {
        _dbContext.UniqueSessions.Update(uniqueSession);
        await _dbContext.SaveChangesAsync();
    }

    public async Task Remove(UniqueSession uniqueSession)
    {
        _dbContext.UniqueSessions.Remove(uniqueSession);
        await _dbContext.SaveChangesAsync();
    }
}