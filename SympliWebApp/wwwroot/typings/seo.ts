///<reference path="../typings/_definition/jquery/jquery.ts" />
///<reference path="../typings/SearchViewModel.ts" />

"use strict";
let txtSearch = document.getElementById("txtSearch");
let txtSeo = document.getElementById("txtSeo");
let ddlEngine = document.getElementById("ddlEngine");
let form = $("#formSeo");
let result = $("#divResult");

class Seo {
	selectedEngine: any;
	seoText: any;
	searchText: any;

	getSeoResults() {
		if ($("#formSeo").valid()) {
			this.seoText = (txtSeo as HTMLInputElement);
			this.searchText = (txtSearch as HTMLInputElement);
			this.selectedEngine = (ddlEngine as HTMLSelectElement).options[(ddlEngine as HTMLSelectElement).selectedIndex]
				.textContent;
			const data = new SearchViewModel();
			data.searchText = this.searchText.value;
			data.seoText = this.seoText.value;
			data.searchEngine = null;
			data.selectedSearchEngine = this.selectedEngine;
			//var data = `{"SearchText":"${this.searchText.value}","SeoText":"${this.seoText.value}","SelectedSearchEngine":"${this.selectedEngine}"}`;
			$.ajax({
				type: "POST",
				url: "/Google/SeoResult",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: data => {
					result.text(data);
				},
				error: () => { result.text("Error in fetching data, try later"); }
			});
		}
	}
}

let seoSearch = new Seo();
window.onload = () => {
	onSearchClick();
};

function onSearchClick() {
	document.getElementById("btnSubmit").addEventListener("click",
		event => {
			event.preventDefault();
			seoSearch.getSeoResults();
		});
}