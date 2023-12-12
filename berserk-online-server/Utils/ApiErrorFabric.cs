﻿using berserk_online_server.ApiErrors;
using berserk_online_server.ApiErrors.Authentication;
using berserk_online_server.ApiErrors.Decks;
using berserk_online_server.ApiErrors.Rooms;

namespace berserk_online_server.Utils
{
    public enum ApiErrorType
    {
        InvalidEmail = 1,
        InvalidPassword,
        UserAlreadyExists,
        NotFound,
        ArgumentsMissing,
        InvalidFileName,
        RememberMeLost,
        InvalidToken,
        EmailNotConfirmed,
        DeckAlreadyExists,
        NoAccess,
        RoomIsFull,
        RoomAlreadyExists,
        InvalidFormat
    }
    public static class ApiErrorFabric
    {
        public static ApiError Create(ApiErrorType errorType, object? ctx = null)
        {
            switch (errorType)
            {
                case ApiErrorType.InvalidEmail:
                    return new InvalidEmail(ctx);
                case ApiErrorType.InvalidPassword:
                    return new InvalidPassword(ctx);
                case ApiErrorType.UserAlreadyExists:
                    return new UserAlreadyExists(ctx);
                case ApiErrorType.NotFound:
                    return new NotFound(ctx);
                case ApiErrorType.ArgumentsMissing:
                    return new ArgumentsMissing(ctx);
                case ApiErrorType.InvalidFileName:
                    return new InvalidFileName(ctx);
                case ApiErrorType.RememberMeLost:
                    return new RememberMeLost(ctx);
                case ApiErrorType.InvalidToken:
                    return new InvalidToken(ctx);
                case ApiErrorType.EmailNotConfirmed:
                    return new EmailNotConfirmed(ctx);
                case ApiErrorType.DeckAlreadyExists:
                    return new DeckAlreadyExists(ctx);
                case ApiErrorType.NoAccess:
                    return new NoAccess(ctx);
                case ApiErrorType.RoomIsFull:
                    return new RoomIsFull(ctx);
                case ApiErrorType.RoomAlreadyExists:
                    return new RoomAlreadyExists(ctx);
                case ApiErrorType.InvalidFormat:
                    return new InvalidFormat(ctx);
            }
            throw new NotImplementedException();
        }
    }
}
