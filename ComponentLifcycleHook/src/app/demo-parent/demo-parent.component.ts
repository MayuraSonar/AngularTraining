import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ViewChildren, QueryList } from '@angular/core';
import { DemoChildComponent } from '../demo-child/demo-child.component';
import { ChangeColorDirective } from '../change-color.directive';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent implements OnInit {
@ViewChild(DemoChildComponent, {static: true}) child: DemoChildComponent;
@ViewChild(ChangeColorDirective, {static: true}) colordirective: ChangeColorDirective;
@ViewChildren(DemoChildComponent) children: QueryList<Employee>;
emp1: Employee[];
  constructor() {
    console.log('Parent Consrtuctor!!');
  }

  increment() {
    this.child.increasecounterByOne();

  }

  decrement() {
    this.child.decreasecounterbyOne();

  }

  ngOnInit() {
    console.log('View Child', this.child.counter);
    console.log('PArent OnNIT Component:', this.children);
  }
  ngAfterViewInit() {
  console.log('PArent Component:', this.children);

  this.children.forEach(emp => console.log(emp));
  }

  Changecolor(color: string) {
  this.colordirective.changeBackGroundColor(color);

  }
}
