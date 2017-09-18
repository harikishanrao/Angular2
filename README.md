
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
 
 ### Code Flow
 
 1) In app.component.ts file add a provider in the @Component Directive i.e. 
	@Component({
	selector: 'app-root',
	template: `<h1>Abc Company </h1>
             <employee-list></employee-list>
             <employee-details></employee-details>`,
 ## providers: [EmployeeService]
 
2) Create a Service class  so that it should be like a reusalbe compnent named as `employee.service.ts` 

3) We need to add Injectable to the service and import it from '@angular/core'

4) In 'employee-list.component.ts' import `employee.service.ts` class file, so that the service we have written can be used in this `employee-list.component.ts` class

5) In `employee-list.component.ts` class create a constructor 

6) Create ngOnInit life cycle Hook  (OnInit: Perform component initialization, retrive data. Here we can retrive the data from backend servers. ( Called once the component is initialized)
-------------------------------------------------------------------------------

# Steps to execute the application

###  `npm install`
###  `ng serve -o`
###  Application will be opened in the browser with port 4200 i.e. `http://localhost:4200/`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

