import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  exclusive = false;
  constructor(private design: DesignService) { }

  ngOnInit() {
    this.design.exclusive.subscribe(res => {
      this.exclusive = res;
    });
  }
  ngOnDestroy() {
   // this.design.exclusive.unsubscribe();
  }
}
