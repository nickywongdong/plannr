using Microsoft.EntityFrameworkCore;
using Plannr.SharedModels;

namespace PlannrWebAPI.Infrastructure;

public class UniqueSessionDbContext(DbContextOptions<UniqueSessionDbContext> options) : DbContext(options)
{
    public DbSet<UniqueSession> UniqueSessions => Set<UniqueSession>();
}