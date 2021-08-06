import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  empName: string;
  constructor(private design: DesignService) {
    this.design.empName.subscribe(res => {
      this.empName = res;
    });
   }

  ngOnInit() {
    this.design.exclusive.next(true);
   // this.design.empName.next(true);
  }
  ngOnDestroy() {
   this.design.exclusive.next(false);
  }
}
