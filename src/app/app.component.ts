import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: `<h1>Abc Company </h1>
             <employee-list></employee-list>
             <employee-details></employee-details>`,
  providers: [EmployeeService]
})
export class AppComponent {
}
