namespace WebApi.Dtos
{
    public class RegisteredUserDto
    {
        public int Id { get; set; } = 1;
        public string Name { get; set; } = "Lewis Carroll";
        public Guid Token { get; set; }

        public RegisteredUserDto()
        {
            Token = Guid.NewGuid();
        }
    }
}
