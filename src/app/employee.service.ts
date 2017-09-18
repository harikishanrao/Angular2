import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeService {
   getEmployees(){
   return [
       {"id" : 1, "name": "Hari", "gender": "Male"},
       {"id" : 2, "name": "Raju", "gender": "Male"},
       {"id" : 3, "name": "krit", "gender": "FeMale"},
       {"id" : 4, "name": "Keerthi", "gender": "FeMale"},
       {"id" : 5, "name": "Krishna", "gender": "Male"},
     ]
   }

    }

