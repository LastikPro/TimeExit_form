namespace Domain.Models
{
    public static class Constants
    {
#if DEBUG
        public const string DefaultConnection = "Server = PC1; Database=Start;User ID = sa; Password=connect;Integrated Security = True";
#else
        public const string DefaultConnection =
            "Server=SP-VL;Database=Start01Bd;Persist Security Info=True;User ID=xxxx;Password=xxxxxx";
#endif
    }
}
