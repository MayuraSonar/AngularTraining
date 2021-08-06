import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, interval, of, from } from 'rxjs';
import { take, map, filter, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxjsObservables';
  observable$: any;
  mySubject$: any;


  ngOnInit() {

    // from method:
    console.log('Observable from array!!');
    const months = from(['jan', 'feb', 'march', 'april']);
    const subscribe = months.subscribe(val => console.log(val));
    const name = 'SoftwareEngineering Department';
    console.log(name);
    const Department = from(name);
    const data = Department.subscribe(val => console.log(val));

    // mergeMap
  }

 
}

