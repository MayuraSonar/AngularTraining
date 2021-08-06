import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  empName: string;
  constructor(private design: DesignService) {
    this.design.empName.subscribe(res => {
      this.empName = res;
    });
   }

  ngOnInit() {
    
  }
  onChange(empname)
  {
    this.design.empName.next(empname.value);
  }
}
