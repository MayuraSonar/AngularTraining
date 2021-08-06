import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child-hook',
  templateUrl: './child-hook.component.html',
  styleUrls: ['./child-hook.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildHookComponent implements OnInit, DoCheck {
@Input() newValue: number;
@Input() emp: any;
currentValue: number;
previousValue: number;
FirstChange: boolean;
  constructor() { }
  ngDoCheck() {
    console.log('1.DO Check executed');
    console.log(this.newValue);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('Something has changed in OnChnageMethod!!');
  //   this.currentValue = changes.newValue.currentValue;
  //   this.previousValue = changes.newValue.previousValue;
  //   this.FirstChange = changes.newValue.firstChange;
  // }
  ngOnInit() {
    console.log('2.I CHILD get execute once in a lifeCylce=>ONNIT', this.newValue);
  }
  ngAfterContentChecked() {
    console.log(' 4.I get executed after AfterContent Init =>ContentChecked');
  }
ngAfterContentInit(): void {
 console.log('3.I get executed after ngChange,ngInit and DoCheck=>AfterContentInit');

}
ngAfterViewInit() {
  console.log('5. get executed after ngAfterContentChecked => AfterViewInit ');
}
ngAfterViewChecked() {
  console.log('6.I get executed after NgAfter Init=> afterViewChecked');
}
ngOnDestroy(): void {
  console.log('Child Component got Destroyed!!');
  
}
}
