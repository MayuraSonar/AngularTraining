import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  empName: string;
  constructor(private design: DesignService) {
    this.design.empName.subscribe(res => {
      this.empName = res;
    });
   }

  ngOnInit() {

  }
  onChange(empname) {
    console.log(empname.value);
    this.design.empName.next(empname.value);
  }
}
// observer.next(1);
//@Output ()
