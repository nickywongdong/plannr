using Microsoft.EntityFrameworkCore;
using PlannrWebAPI.Infrastructure;
using PlannrWebAPI.Endpoints;
using PlannrWebAPI.Services;
using Microsoft.Extensions.Logging;

var AllowedSpecificOrigins = "_PlannrAllowedSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedSpecificOrigins,
        policy =>
        {
            policy
                .WithOrigins("https://localhost:7096")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.AddTransient<IUniqueSessionService, UniqueSessionService>();
builder.Services.AddDbContext<UniqueSessionDbContext>(options =>
{
    var path = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
    options.UseInMemoryDatabase("UniqueSessions");
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// uniquesession endpoints
app.MapUniqueSessions();

app.UseCors(AllowedSpecificOrigins);

app.Run();

public partial class Program
{ }