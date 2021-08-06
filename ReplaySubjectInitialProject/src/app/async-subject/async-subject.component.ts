import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  AsyncVideoEmit: any;
 

  constructor(private design: DesignService) { }

  ngOnInit() {
    this.design.AsyncVideoEmit.subscribe(res => {
      this.AsyncVideoEmit = res;
    });
  
  }
  OnVideoAdd(videodata)
  {
    this.design.AsyncVideoEmit.next(videodata);
  
  }

  OnComplete()
  {
    this.design.AsyncVideoEmit.complete();
  }
}
