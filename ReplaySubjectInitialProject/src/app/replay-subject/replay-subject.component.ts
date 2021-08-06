import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  // subscription Mode
  subscribeuser2 = false;

  // user Subscription
  subscriptionuser2: Subscription;
// List Data

  User1List = [
    'Angular 1',
    'C#'
  ];

  User2List = [

  ];
  User3List = [

  ];
  constructor(private design: DesignService) { }

  ngOnInit() {
    this.design.videoEmit.subscribe(res => {
      this.User1List.push(res);
    });
  }
  OnVideoAdd(video) {
    this.design.videoEmit.next(video);


  }

  user2subscribe() {
    if (this.subscribeuser2) {
      this.subscriptionuser2.unsubscribe();
    } else {
     this.subscriptionuser2 = this.design.videoEmit.subscribe(res => {
        this.User2List.push(res);
      });
    }
    this.subscribeuser2 = !this.subscribeuser2;
  }

}
