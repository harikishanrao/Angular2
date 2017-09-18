import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-details',
    template: `<h2> Employee Details </h2>
                <ul *ngFor = " let employee of EmployeeDetail" > 
                    <li>
                      
                        {{ employee.id}} 
                        {{ employee.name}} 
                        {{ employee.gender}} 
                      
                    </li>
                 </ul>
               `,
})

export class EmployeeDetails implements OnInit{
    EmployeeDetail = [];
    constructor (private _employeeDetail : EmployeeService ){}
    ngOnInit(){
        this.EmployeeDetail = this._employeeDetail.getEmployees();
    }

}