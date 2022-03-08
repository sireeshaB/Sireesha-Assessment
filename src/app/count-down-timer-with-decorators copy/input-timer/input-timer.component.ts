import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.sass']
})
export class InputTimerComponent implements OnInit {
  @Output() timerValue = new EventEmitter<Object>();
  timer:any;
  btnText = 'Start';
  startClickCount = 0;
  pauseClickCount = 0;
  dateList:any = [];
  date:any;
  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
    // this.timer = 1000;
  }
  sendTimerValue(value:any, text:any, count:any) {
    // sending timer value in eventemiter with text
    console.log('input timer value ', value);
    let dispText='';
    if (text !== 'reset' && text !== 'send') {
      this.date=new Date();
      dispText = (text === 'start' ? 'Started at' : 'Paused at');
      let latest_date = this.datepipe.transform(this.date, 'dd-MM-yyyy h:mm:ss  a');
      console.log('latest_date ', latest_date);
      this.dateList.push(`${dispText} ${latest_date}`);
    }
    let obj= {"text": text, "value": value, "btnClickCount": { "startCount": this.startClickCount, "pauseCount": this.pauseClickCount, "value": value, }, "timestamps": this.dateList}
    this.timerValue.emit(obj);
    // this.btnClicksObj.emit(btnClicks);
  }
  resetTimer(){
    // making timer value 0
    this.timer = '';
    this.startClickCount = 0;
    this.pauseClickCount = 0;
    this.dateList = [];
    this.btnText = 'Start';
    this.sendTimerValue(this.timer, 'reset', 0);
  }
  startTimer() {
    // check whether it is number or not
    if (this.btnText === 'Start') {
      console.log('start clicked');
      this.btnText = 'Pause';
      ++this.startClickCount;
      this.sendTimerValue(this.timer, 'start', this.startClickCount);
    } else {
      console.log('pause clicked');
      this.btnText = 'Start';
      ++this.pauseClickCount;
      this.sendTimerValue(this.timer, 'pause', this.pauseClickCount);
    }

  }

}
