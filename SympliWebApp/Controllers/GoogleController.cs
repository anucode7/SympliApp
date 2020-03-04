using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using SympliWebApp.Models;
using SympliWebApp.Models.ServiceModel;
using SympliWebApp.Services;

namespace SympliWebApp.Controllers
{
    public class GoogleController : Controller
    {
        private readonly ISearchCountService _searchCountService;
        private IMemoryCache _cache;
        private ILogger _logger;

        public GoogleController(ISearchCountService searchCountService, IMemoryCache memorycache, ILogger logger)
        {
            _searchCountService = searchCountService;
            _cache = memorycache;
            _logger = logger;
        }

        // GET
        public ActionResult Index()
        {
            var model = new SearchViewModel
            {
                SearchEngine = PopulateSearchEngine()
            };
            ModelState.Clear();
            return View(model);
        }

        public IEnumerable<SelectListItem> PopulateSearchEngine()
        {
            return Enum.GetValues(typeof(Engine))
                .Cast<Engine>()
                .Select(e => new SelectListItem
                {
                    Value = ((int)e).ToString(),
                    Text = e.ToString()
                });
        }

        [HttpPost]
        public ActionResult SeoResult([FromBody] SearchViewModel model)
        {

            if (ModelState.IsValid && model != null)
            {
                int count;
                string cacheKey = $"{model.SearchEngine}{model.SearchText}";
                if (!_cache.TryGetValue(cacheKey, out count))
                {
                    var request = new SearchRequest
                    {
                        Engine = model.SelectedSearchEngine,
                        SEOText = model.SeoText,
                        SearchText = model.SearchText
                    };
                    var cacheEntryoptions = new MemoryCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(60));
                    count = _searchCountService.SeoResult(request);
                    _cache.Set(cacheKey, count, cacheEntryoptions);
                }
                return Json(string.Concat("The seo results for today are :", count));
            }
            return BadRequest(ModelState);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}