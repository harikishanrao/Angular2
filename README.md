# AngularServices

### Angular 2 Services and Dependency Injection: 
Angular Services are the classes which are independent from any particular component. We can share logic or data to across the component. By using Services the code is easy to test, debug and reuse. In simple we can say as, Services are used to  create components and can be shared across the entire application.

### Dependency Injection: 
A coding pattern in which a class receives the instances of objects it needs (called dependencies) from an external source rather than creating them itself.

### Steps to Create a service: 
1) Create the Service class.
2) Define the metadata with a decorator.
3) Import what we need.

### How to Register a service
To Register a service we need to register a provider. Provider is the code that can  create or return the service. To register a provider we define the same in component  or Angular module metadata.  
providers: [EmployeeService] --> here this is the name where we have the service class and be defined in the @component of app.component.ts

Please note if we register a service in angular module (Root Component) then it will  be injectable everywhere in the  application.  we can register a service with in the   component level also, so that we can use the service with in the component only.

### Benefits of using services in angular: 
1) We dont have hard coded data in individual components. (we can fetch data from
 service when ever needed)
2) Data Fetch logic is seperated into Service.
3) Reusable code.
4) The logic is written in only service with out disturbing the other code. 
 
 Dependency injection can be done in angular is by using constructor (its in typescript)
 
