# Sympli App

This project is built with .net core 3.1

## Getting Started
Please build the solution before running.

## Notes

### The project is an MVC app using C# and jquery.  
### For demonstration purpose Mocking(MOQ) and Typescript is used.
### InMemoryCaching is leveraged of for this app.
### For demo purpose have show an example to remove tight coupling in code with introduction of abstract factory for cleaner code and to make sure non-virtual methods can be mocked.
### Dependency injection is leveraged from .net core and no external packages were used.
### Logging is not used extensively and is leveraged from .net core but is not configured with any logging provider hence does not have writing to file option. Is more for writing to console.
### The use of regex is avoided and extraction of links is built on a logic of looking through anchor links and extracting the fields form th
### For resillency and fault tolerance the circuit breaker pattern could have been used with proper Circuit breaker policy. Reference [here] (https://docs.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/implement-circuit-breaker-pattern)



