# SympliApp

This project is built with .net core 3.1

## Getting Started
Please build the solution before running.

## Notes

<ul>
<li> The project is an MVC app using C# and jquery.  </li> 
<li> For demonstration purpose Mocking(MOQ) and Typescript is used.</li> 
<li> InMemoryCaching is leveraged of for this app.</li> 
<li> For demo purpose have show an example to remove tight coupling in code with introduction of abstract factory for cleaner code and to make sure non-virtual methods can be mocked.</li> 
<li> Dependency injection is leveraged from .net core and no external packages were used.</li> 
<li> Logging is not used extensively and is leveraged from .net core but is not configured with any logging provider hence does not have writing to file option. Is more for writing to console.</li> 
<li> The use of regex is avoided and extraction of links is built on a logic of looking through anchor links and extracting the fields from the search engine response file. The motivation was more readable and testable code.
<li> For resillency and fault tolerance the circuit breaker pattern could have been used with proper Circuit breaker policy. Reference [here] (https://docs.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/implement-circuit-breaker-pattern)
</ul>


