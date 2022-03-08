import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.sass']
})
export class InputTimerComponent implements OnInit {
  @Output() timerValue = new EventEmitter<Object>();
  @Output() pauseTimer = new EventEmitter<any>();
  @Input() btnChangeText: any;
  timer: any;
  btnText = 'Start';
  startClickCount = 0;
  pauseClickCount = 0;
  dateList:any = [];
  date:any;
  displayTime:any;
  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
    // this.timer = 1000;
    this.displayTime = this.timer;
    console.log('btn text received in input timer ', this.btnChangeText);
    this.btnText = this.btnChangeText;
  }
  sendTimerValue(value:any, text:any) {
    // this.displayTime = this.timer;
    let obj= {"text": text, "value": value, "btnClickCount": { "startCount": this.startClickCount, "pauseCount": this.pauseClickCount, "value": value }, "timestamps": this.dateList}
    this.timerValue.emit(obj);
  }
  formatTimeObj(value:any, text:any) {
    // sending timer value in eventemiter with text
    console.log('input timer value ', value);
    console.log('input timer text in formatTimeObj', text);
    let dispText='';
    if (text !== 'reset' && text !== 'send') {
      this.date=new Date();
      dispText = (text === 'start' ? 'Started at' : 'Paused at');
      let latest_date = this.datepipe.transform(this.date, 'dd-MM-yyyy h:mm:ss  a');
      console.log('latest_date ', latest_date);
      this.dateList.push(`${dispText} ${latest_date}`);
    }
    let obj= {"text": text, "value": value, "btnClickCount": { "startCount": this.startClickCount, "pauseCount": this.pauseClickCount, "value": value }, "timestamps": this.dateList};
    return obj;
    // this.timerValue.emit(obj);
  }
  resetTimer(){
    // making timer value 0
    this.timer = '';
    this.startClickCount = 0;
    this.pauseClickCount = 0;
    this.dateList = [];
    this.btnText = 'Start';
    let obj = this.formatTimeObj(this.timer, 'reset');
    console.log('obj ',obj);
    this.timerValue.emit(obj);
  }
  startTimer() {
    // check whether it is number or not
    if (this.btnText === 'Start') {
      console.log('start clicked');
      this.btnText = 'Pause';
      ++this.startClickCount;
      let obj = this.formatTimeObj(this.timer, 'start');
      delete obj['value'];
      console.log('obj ',obj);
      this.timerValue.emit(obj);
    } else {
      console.log('pause clicked');
      this.btnText = 'Start';
      ++this.pauseClickCount;
      let obj = this.formatTimeObj(this.timer, 'pause');
      console.log('in pause timer obj ',obj);
      this.pauseTimer.emit(obj);
      // this.sendTimerValue(this.timer, 'pause', this.pauseClickCount);
    }

  }
  ngOnChanges() {
    
  }
  ngAfterContentInit() {
    console.log('btn text received in input timer onchanges', this.btnChangeText);
    this.btnText = this.btnChangeText;
  }
}
