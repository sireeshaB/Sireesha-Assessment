

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
  pauseTimer: any;
  btnText: any;
  getTimerValue(event:any) {
    console.log('countdown timer component receving timer value ', event);
    this.timerObj = event;
    this.timestamps = this.timerObj.timestamps;
    this.btnClickCount = this.timerObj.btnClickCount;
    console.log('countdown timer component receving timestamps ', this.timestamps);
    this.pauseTimer = '';
  }
  pauseTimerCalled(event:any) {
    console.log('pauseTimerCalled ', event);
    this.pauseTimer = event;
    this.btnClickCount = event.btnClickCount;
  }
  getBtnText(event:any) {
    console.log('received button text in main component ', event);
    this.btnText = event;
  }
}
