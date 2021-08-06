import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class DemoChildComponent implements OnInit {
counter = 45;
message: string;
employee:Employee[]=[
  {id:1,name:'Mayura',location:'Bangalore'},
  {id:2,name:'Mayura',location:'Bangalore'},
  {id:3,name:'Mayura',location:'Bangalore'},

  {id:26,name:'Mayura',location:'Bangalore'}
];
  constructor() {
    console.log('child constructor!!');
  }

  increasecounterByOne() {
  this.counter++;
  this.message = `Counter value is ${this.counter}`;
  }
  decreasecounterbyOne() {
    this.counter--;
    this.message = `Counter value is ${this.counter}`;
    }
  ngOnInit() {
  }

}
