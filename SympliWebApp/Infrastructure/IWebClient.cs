using System;

namespace SympliWebApp.Infrastructure
{
    public interface IWebClient : IDisposable
    {
        string DownloadString(string address);
    }
}
