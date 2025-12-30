namespace Tafa3ul.Application;

public static class Utils
{
    public static string Capitalize(string value) =>
        string.IsNullOrWhiteSpace(value) ? value : char.ToUpper(value[0]) + value[1..].ToLower();

}
