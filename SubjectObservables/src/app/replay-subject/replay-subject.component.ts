import { Component, OnInit, OnDestroy } from '@angular/core';
import { DesignService } from '../design.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit, OnDestroy {
  // subscription
  user2Subscription: Subscription;
// List Data
  User1List = [
    'Angular 1',
    'C#'
  ];
  User2List = [];
// subscribermode

subscribeuser2 = false;

  constructor(private design: DesignService) {
    this.design.videoEmit.subscribe(res => {
      this.User1List.push(res);
    });

   }
// subscritpion:unsubscribe
  ngOnInit() {

  }
  OnVideoAdd(video) {
    this.design.videoEmit.next(video);

  }
  user2subscribe() {
    if (this.subscribeuser2) {
      this.user2Subscription.unsubscribe();
    } else {
     this.user2Subscription = this.design.videoEmit.subscribe(res => {
        this.User2List.push(res);
      });
      }

    this.subscribeuser2 = !this.subscribeuser2;
  }

  ngOnDestroy() {

  }
}
