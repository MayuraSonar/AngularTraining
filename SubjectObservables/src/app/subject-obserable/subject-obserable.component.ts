import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-subject-obserable',
  templateUrl: './subject-obserable.component.html',
  styleUrls: ['./subject-obserable.component.css']
})
export class SubjectObserableComponent implements OnInit,OnDestroy {
  empName: string;
  constructor(private service: DesignService) { 
    this.service.empName.subscribe(res => {
      this.empName = res;
    });

  }

  ngOnInit() {
    this.service.exclusive.next(true);
  }
  ngOnDestroy()
  {
    this.service.exclusive.next(false);
  }
}
