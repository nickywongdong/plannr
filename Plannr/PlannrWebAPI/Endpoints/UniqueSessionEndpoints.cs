using Microsoft.AspNetCore.Http.HttpResults;
using Plannr.SharedModels;
using PlannrWebAPI.Services;

namespace PlannrWebAPI.Endpoints;

public static class UniqueSessionEndpoints
{
    public static void MapUniqueSessions(this IEndpointRouteBuilder builder)
    {
        builder.MapGroup("/api/uniquesessions")
            .MapUniqueSessionsApi()
            .WithTags("UniqueSession Endpoints")
            .WithOpenApi();
    }

    public static RouteGroupBuilder MapUniqueSessionsApi(this RouteGroupBuilder group)
    {
        group.MapGet("/{id}", GetUniqueSession).WithName("GetUniqueSession");

        group.MapPost("/", CreateUniqueSession)
            .AddEndpointFilter(async (efiContext, next) =>
            {
                /* validation example:
                 * var param = efiContext.GetArgument<UniqueSessionDto>(0);

                var validationErrors = Utilities.IsValid(param);

                if (validationErrors.Count != 0)
                {
                    return Results.ValidationProblem(validationErrors);
                }*/

                return await next(efiContext);
            });

        group.MapPut("/{id}", UpdateUniqueSession);
        group.MapDelete("/{id}", DeleteUniqueSession);

        return group;
    }

    // get unique session by id
    public static async Task<Results<Ok<UniqueSession>, NotFound>> GetUniqueSession(Guid id, IUniqueSessionService uniqueSessionService)
    {
        var uniqueSessions = await uniqueSessionService.Find(id);

        if (uniqueSessions != null)
        {
            return TypedResults.Ok(uniqueSessions);
        }

        return TypedResults.NotFound();
    }

    // create unique session
    public static async Task<Created<UniqueSession>> CreateUniqueSession(IUniqueSessionService uniqueSessionService)
    {
        var newUniqueSession = new UniqueSession
        {
            Id = Guid.NewGuid(),
            UniqueLink = Guid.NewGuid().ToString(),
            IsExpired = false
        };

        await uniqueSessionService.Add(newUniqueSession);

        return TypedResults.Created($"/uniquesessions/v1/{newUniqueSession.Id}", newUniqueSession);
    }

    // update uniquesession
    public static async Task<Results<Created<UniqueSession>, NotFound>> UpdateUniqueSession(UniqueSession uniqueSession, IUniqueSessionService uniqueSessionService)
    {
        var existingUniqueSession = await uniqueSessionService.Find(uniqueSession.Id);

        if (existingUniqueSession != null)
        {
            existingUniqueSession.UniqueLink = uniqueSession.UniqueLink;
            existingUniqueSession.IsExpired = uniqueSession.IsExpired;

            await uniqueSessionService.Update(existingUniqueSession);

            return TypedResults.Created($"/uniquesessions/v1/{existingUniqueSession.Id}", existingUniqueSession);
        }

        return TypedResults.NotFound();
    }

    // delete uniquesession
    public static async Task<Results<NoContent, NotFound>> DeleteUniqueSession(Guid id, IUniqueSessionService uniqueSessionService)
    {
        var uniqueSession = await uniqueSessionService.Find(id);

        if (uniqueSession != null)
        {
            await uniqueSessionService.Remove(uniqueSession);
            return TypedResults.NoContent();
        }

        return TypedResults.NotFound();
    }
}