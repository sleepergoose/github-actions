﻿namespace WebApi.Dtos
{
    public class UserLoginDto
    {
        public required string Email { get; init; }
        public required string Password { get; init; }
    }
}
