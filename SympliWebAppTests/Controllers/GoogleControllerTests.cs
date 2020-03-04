using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Microsoft.Extensions.Caching.Memory;
using SympliWebApp.Services;
using SympliWebApp.Models;
using SympliWebApp.Models.ServiceModel;

namespace SympliWebApp.Controllers.Tests
{
    [TestClass()]
    public class GoogleControllerTests
    {
		private Mock<IMemoryCache> mockCache = new Mock<IMemoryCache>();
		private Mock<ISearchCountService> mockService = new Mock<ISearchCountService>();
		private Mock<ILogger<GoogleController>> mockLogger = new Mock<ILogger<GoogleController>>();

		[TestInitialize]
		public void TestSetup()
		{
			mockService = new Mock<ISearchCountService>();
			mockCache = new Mock<IMemoryCache>();
		}

		[TestMethod]
		public void Index_OnCall_ReturnsView()
		{
			//Arrange
			var controller = new GoogleController(mockService.Object, mockCache.Object,mockLogger.Object);
			//Act 
			var result = controller.Index();
			Assert.IsInstanceOfType(result, typeof(ViewResult));
		}

		[TestMethod]
		public void Index_View_LoadsEngineForDropDown()
		{
			//Arrange
			var controller = new GoogleController(mockService.Object, mockCache.Object,mockLogger.Object);
			//Act 
			//Act 
			var result = controller.Index();
			var model = (result as ViewResult).Model;
			Assert.IsInstanceOfType(model, typeof(SearchViewModel));
		}

		[TestMethod]
		public void SeoResult_ModelInvalid_LoadsEngineForDropDown()
		{
			// Arrange
			var controller = new GoogleController(mockService.Object, mockCache.Object, mockLogger.Object);
			// Act
			var result = controller.SeoResult(null);
			// Assert
			Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
		}

		[TestMethod]
		public void SeoResult_Modelvalid_ReturnsString()
		{
			// Arrange 
			var controller = new GoogleController(mockService.Object, mockCache.Object,mockLogger.Object);
			var model = new SearchRequest
			{
				SearchText = "test",
				Engine = "Google",
				SEOText = "test"
			};
			mockService.Setup(x => x.SeoResult(model)).Returns(1);
			// Act
			var result = controller.SeoResult(null);
			// Assert
			Assert.IsInstanceOfType(result, typeof(BadRequestObjectResult));
		}

		[TestMethod]
		public void PopulateSearchEngine_OnCall_ReturnsOptions()
		{
			//Arrange
			var controller = new GoogleController(mockService.Object, mockCache.Object,mockLogger.Object);
			//Act
			var result = controller.PopulateSearchEngine();
			//Assert
			Assert.IsNotNull(result);
		}
	}
}