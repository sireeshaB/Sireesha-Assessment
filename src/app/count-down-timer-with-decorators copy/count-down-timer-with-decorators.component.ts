

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-with-decorators',
  templateUrl: './count-down-timer-with-decorators.component.html',
  styleUrls: ['./count-down-timer-with-decorators.component.sass']
})
export class CountDownTimerWithDecoratorsComponent{

  constructor() { }
  // @ViewChild('displayTimer') displayTimer:any;
  timerObj: any;
  timestamps:any;
  btnClickCount: any;
  getTimerValue(event:any) {
    console.log('countdown timer component receving timer value ', event);
    this.timerObj = event;
    this.timestamps = this.timerObj.timestamps;
    this.btnClickCount = this.timerObj.btnClickCount;
    console.log('countdown timer component receving timestamps ', this.timestamps);
  }
}
