using SympliWebApp.Models.ServiceModel;

namespace SympliWebApp.Services
{
	public interface ISearchCountService
	{
		int SeoResult(SearchRequest request);
	}
}