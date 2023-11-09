using Microsoft.EntityFrameworkCore;

namespace PlannrWebAPI;

// TODO: Create connection with CosmosDB
public class PlannrDbContext : DbContext
{
    /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    => optionsBuilder.UseCosmos(
        "https://localhost:8081",
        "",
        databaseName: "");*/
}
