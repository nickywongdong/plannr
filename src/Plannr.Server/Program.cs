using Microsoft.EntityFrameworkCore;
using PlannrWebAPI.Endpoints;
using PlannrWebAPI.Infrastructure;
using PlannrWebAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddTransient<IUniqueSessionService, UniqueSessionService>();

// CORS
var AllowedSpecificOrigins = "_PlannrAllowedSpecificOrigins";
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

// Using in memory db for now
builder.Services.AddDbContext<UniqueSessionDbContext>(options =>
{
    var path = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
    options.UseInMemoryDatabase("UniqueSessions");
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// uniquesession endpoints
app.MapUniqueSessions();

app.UseCors(AllowedSpecificOrigins);

app.UseHttpsRedirection();

app.Run();
