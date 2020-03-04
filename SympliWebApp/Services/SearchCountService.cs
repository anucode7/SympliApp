using System;
using System.Collections.Generic;
using SympliWebApp.Models.ServiceModel;
using Microsoft.Extensions.Configuration;
using SympliWebApp.Infrastructure;

namespace SympliWebApp.Services
{
    public class SearchCountService : ISearchCountService
    {
        private readonly IWebClientFactory _clientFactory;
        private readonly IConfiguration _configuration;

        public SearchCountService(IConfiguration configuration, IWebClientFactory clientFactory)
        {
            _configuration = configuration;
            _clientFactory = clientFactory;
        }

        public int SeoResult(SearchRequest request)
        {
            using (var client = _clientFactory.Create())
            {
                var url = _configuration[string.Concat(request.Engine, ":Url")];
                var size = _configuration[string.Concat(request.Engine, ":Size")] ?? "100";
                if (!string.IsNullOrEmpty(url))
                {
                    var html = client.DownloadString(string.Concat(url, request.SearchText, "&num=", size));
                    return ExtractLinks(html.ToLower(), request.SEOText);
                }
                throw new Exception("Error");
            }
        }

        public int ExtractLinks(string rawCode, string seoText)
        {
            var customLinks = new List<string>();
            rawCode = rawCode.ToLower();
            var startSequence = "<a href=\"";
            var endSequence = "\"";
            while (rawCode.IndexOf("<a href", StringComparison.Ordinal) != -1)
            {
                var start = rawCode.IndexOf(startSequence, StringComparison.Ordinal) + startSequence.Length;
                var end = rawCode.IndexOf(endSequence, start, StringComparison.Ordinal);
                if (end > start)
                {
                    var link = rawCode.Substring(start, end - start);
                    if (link != string.Empty)
                        if (link.Contains(seoText))
                            customLinks.Add(link);
                }

                rawCode = rawCode.Substring(end + endSequence.Length);
            }
            return customLinks.Count;
        }
    }
}