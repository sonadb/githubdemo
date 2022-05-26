import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]=[{
    id:1, name:"abc",address:"Mumbai", title:"Developer"
  },
  {
    id:2, name:"pqr",address:"Mumbai", title:"Developer"
  },
  {
    id:3, name:"xyz",address:"Pune", title:"Architect"
  },
  {
    id:4, name:"jkl",address:"Bangalore", title:"Manager"
  }];
  constructor() { }

  getAllEmployees():Employee[]{
    return this.employees;
  }

  getEmployeeByName(name : string): Employee{
    let emp = new Employee();

    this.employees.forEach(employee => {
      if(employee.name == name){
        emp = employee;
      }      
    });
    return emp;
  }
}
