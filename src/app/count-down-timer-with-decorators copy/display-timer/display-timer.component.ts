import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.sass']
})
export class DisplayTimerComponent implements OnInit {
  @Input() timer:any;
  timerValue:any;
  timerText: any;
  clearInt:any;
  prevTimer: any;
  @ViewChild('displayTimer')displayTimer:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log('timer ', this.timer);
    this.timerValue = this.timer?.value;
    this.timerText = this.timer?.text;
    // if (localStorage.getItem('pause') && localStorage.getItem('pause') === 'true') {
    //   console.log('display timer ', this.displayTimer);
    //   localStorage.setItem('timerValue', this.timerValue);
    //   console.log('setting pause timer value ', this.timerValue);
    // }
    if(this.timerText === 'start') {
      console.log('setting interval');
      this.clearInt = setInterval(() => {
        if (this.timerValue >= 0) {
          this.timerValue--;
        } else {
          console.log('clearing interval when value becomes 0');
          clearInterval(this.clearInt);
        }
      }, 1000);
    } else if(this.timerText === 'pause') {
      console.log('clear interval');
      console.log('this.timerValue ', this.timerValue);
      clearInterval(this.clearInt);
      console.log('this.timerValue ', this.timerValue);
      // this.timerValue = this.prevTimer;
    }
  }

}
