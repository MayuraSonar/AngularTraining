import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  empName: string;
  constructor(public service: DesignService) {
    this.service.empName.subscribe(res => {
      this.empName = res;
    });
   }

  ngOnInit() {
  }

}
