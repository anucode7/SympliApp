using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Moq;
using SympliWebApp.Infrastructure;
using Microsoft.Extensions.Configuration;
using SympliWebApp.Models.ServiceModel;

namespace SympliWebApp.Services.Tests
{
	[TestClass()]
    public class SearchCountServiceTests
    {
		private readonly Mock<IWebClientFactory> _mockClient = new Mock<IWebClientFactory>();
		private readonly Mock<IConfiguration> _mockConfiguration = new Mock<IConfiguration>();

		[TestMethod]
		public void ExtractLinks_NoMatchingLink_CountZero()
		{
			//Arrange
			var mockRawCode = "<a href=\" / url ? q = https ://sympli.com.au/wps/portal/six/find-records&amp\"";
			var seoText = "https ://sympli.com.au/";
			//Act
			var service = new SearchCountService(_mockConfiguration.Object, _mockClient.Object);
			var result = service.ExtractLinks(mockRawCode, seoText);
			//Assert
			Assert.AreEqual(1, result);
		}

		[TestMethod]
		public void ExtractLinks_MatchingLink_CountMoreThenZero()
		{
			//Arrange			
			var mockRawCode = "<div class=\"kCrYT\"><a href=\" / url ? q = https ://www.sympli.com.au/&amp;sa=U&amp;ved=2ahUKEwjXiLvsg_7nAhUBJrkGHVpQB80QFjANegQIZBAB&amp;usg=AOvVaw3sEevXa8tpdavcxQZPqtsi\">";
			var seoText = "sympli.com.au";
			//Act
			var service = new SearchCountService(_mockConfiguration.Object, _mockClient.Object);
			var result = service.ExtractLinks(mockRawCode, seoText);
			//Assert
			Assert.AreEqual(1, result);
		}

		[TestMethod]
		public void SeoResult_NoEngineURl_ThrowException()
		{
			//Arrange       
			var mockSearchRequest = new SearchRequest
			{
				Engine = "Google",
				SearchText = "abcd",
				SEOText = "abc"
			};
			//Act           
			var service = new SearchCountService(_mockConfiguration.Object, _mockClient.Object);
			//Assert
			Assert.ThrowsException<Exception>(() => service.SeoResult(mockSearchRequest));
		}

		[TestMethod]
		public void SeoResult_ValidRequest_ReturnsInt()
		{
			//Arrange       
			var mockRawCode = "<a href=\" / url ? q = https ://abc.com.au/wps/portal/six/find-records&amp\"";
			_mockConfiguration.SetupGet(m => m["Google:Url"]).Returns("howdoimockgoogleLOL");
			_mockConfiguration.SetupGet(m => m["Google:Size"]).Returns("100");
			var mockSystemWebClient = new Mock<IWebClient>();
			mockSystemWebClient.Setup(x => x.DownloadString("howdoimockgoogleLOLabcd&num=100")).Returns(mockRawCode);		
			var text = _mockClient.Setup(x => x.Create()).Returns(mockSystemWebClient.Object);
			var mockSearchRequest = new SearchRequest
			{
				Engine = "Google",
				SearchText = "abcd",
				SEOText = "abc"
			};
			//Act           
			var mockService = new SearchCountService(_mockConfiguration.Object, _mockClient.Object);
			//Assert
			Assert.AreEqual(1, mockService.SeoResult(mockSearchRequest));
		}
	}
}

