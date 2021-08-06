import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-meun',
  templateUrl: './meun.component.html',
  styleUrls: ['./meun.component.css']
})
export class MeunComponent implements OnInit {
  exclusive;
  constructor(private design: DesignService) { }

  ngOnInit() {
    this.design.exclusive.subscribe(res => {
      this.exclusive = res;
    });
  }

}
