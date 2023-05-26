using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dtos;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login(UserLoginDto dto)
        {
            var user = new RegisteredUserDto();

            user.Name = dto.Email;

            return Ok(user);
        }
    }
}
