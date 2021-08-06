import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.css']
})
export class ParentHookComponent implements OnInit {
  employee = {
    id: 23,
    name: 'Mayura',
    location: 'Bangalore'
  };
ShowChild = true;
counter = 0;
increment() {
    this.counter++;
  }

decrement() {
    this.counter--;
  }
constructor() { }

ngOnInit() {
  console.log('PARENT INIT');
  }

  UpdateDetails() {
    this.employee = {
      id: 45,
      name: 'Sumit',
      location: 'Pune'
    };
  }

  Hidshow() {
    this.ShowChild = !this.ShowChild;
  }
  ngAfterViewInit() {
    console.log('5. PARENT get executed after ngAfterContentChecked => AfterViewInit ');
  }
}
