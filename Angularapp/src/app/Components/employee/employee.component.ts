import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  months = ['jan', 'feb', 'March', 'April', 'May', 'June', 'July'];
  todaydate = new Date();
  jsonvalue = {name: 'Alex', age: 34, address: { a1: 'Paris', a2: 'France'}};
  public showData = false;
  public btnname: any = 'show';
  public ID: string;

  searchText: any;
  emp: Employee[];

   constructor(private activateroute: ActivatedRoute, private router: Router, private service: EmployeeService) {

     this.emp = [{
      id: 1,
      name: 'Mayura',
      location: 'pune',
      Gender: 'Female',
      isActive: true
    },
    {
      id: 2,
      name: 'Sam',
      location: 'mumbai',
      Gender: 'Male',
      isActive: false
    },
    {
      id: 3,
      name: 'Swathi',
      location: 'hyderabad',
      Gender: 'Female',
      isActive: true
    }
    ];
   }


   public getemployees(): any {
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
   }


   public trackByEmployee(ID: any): any {
     return this.ID;
   }
public toggel(): void {
  this.showData = !this.showData;
  if (this.showData) {
    this.btnname = 'Hide';
  } else {
    this.btnname = 'Show';
  }
}
  ngOnInit() {

  }


}





