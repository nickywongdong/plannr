using Microsoft.EntityFrameworkCore;
using Domain.Entities.UniqueSession;

namespace PlannrWebAPI.Infrastructure;

public class UniqueSessionDbContext(DbContextOptions<UniqueSessionDbContext> options) : DbContext(options)
{
    public DbSet<UniqueSession> UniqueSessions => Set<UniqueSession>();
}