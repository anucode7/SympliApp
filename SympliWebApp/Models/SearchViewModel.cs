using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SympliWebApp.Models
{
    public class SearchViewModel
    {
        [Required]
        [StringLength(80)]
        [Display(Name = "Search Text:")]
        public string SearchText { get; set; }

        public string SelectedSearchEngine { get; set; }

        [Display(Name = "Search Engine:")] public IEnumerable<SelectListItem> SearchEngine { get; set; }

        [Required]
        [StringLength(80)]
        [Display(Name = "Seo Text ranking (eg. company name):")]
        public string SeoText { get; set; }
    }
}