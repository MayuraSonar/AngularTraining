import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  empName: string;
  constructor(private design: DesignService) {
    this.design.empName.subscribe(res => {
      this.empName = res;
    });
   }
  ngOnInit() {
  }

}
