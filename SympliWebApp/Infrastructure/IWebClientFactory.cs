using SympliWebApp.Infrastructure;

namespace SympliWebApp.Infrastructure
{
    public interface IWebClientFactory
    {
        IWebClient Create();
    }
}