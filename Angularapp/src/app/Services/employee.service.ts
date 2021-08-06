import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emp: Employee[];

constructor() { }

  public getEmployees(): any {
  this.emp = [{
    id: 1,
    name: 'mayura',
    location: 'pune',
    Gender: 'Female',
    isActive: true
  },
  {
    id: 2,
    name: 'sam',
    location: 'mumbai',
    Gender: 'Male',
    isActive: false
  },
  {
    id: 3,
    name: 'swathi',
    location: 'hyderabad',
    Gender: 'Female',
    isActive: true
  },

  {
    id: 4,
    name: 'john',
    location: 'pune',
    Gender: 'Female',
    isActive: true
  },
  {
    id: 5,
    name: 'smit',
    location: 'pune',
    Gender: 'Male',
    isActive: true
  }
  ];

  return this.emp;

}

public getEmployeebyID(id: number) {
  this.emp = this.getEmployees();
  return this.emp.find(x => x.id === id);

}
}
