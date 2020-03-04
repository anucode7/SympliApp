namespace SympliWebApp.Infrastructure
{
	public class SystemWebClientFactory : IWebClientFactory
	{
		public IWebClient Create()
		{
			return new SystemWebClient();
		}
	}
}
