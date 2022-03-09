import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CountDownTimerService } from '../count-down-timer-with-services.service';
@Component({
  selector: 'app-count-down-input-timer',
  templateUrl: './count-down-input-timer.component.html',
  styleUrls: ['./count-down-input-timer.component.sass']
})
export class CountDownInputTimerComponent{
  timer:any;
  btnText = 'Start';
  startClickCount = 0;
  pauseClickCount = 0;
  dateList:any = [];
  date:any;
  displayTime:any;
  disableInput: boolean = false;
  constructor(private datepipe: DatePipe, private countDownTimerService: CountDownTimerService) { }

  ngOnInit() {
    this.countDownTimerService.getButtonText().subscribe((txt) => {
      this.btnText = txt;
      this.disableInput = false;
      if(this.btnText === 'Start') {
        setTimeout(()=> {
          this.resetTimer();
        }, 1000);
      }
    });
  }
  sendTimerValue(value:any, text:any) {
    this.btnText === 'Start';
    console.log('sendtimervalue changes btntext to start');
    let obj= {"text": text, "value": value, "btnClickCount": { "startCount": 0, "pauseCount": 0, "value": value }, "timestamps": []};
    this.countDownTimerService.setTimerObj(obj);
  }
  formatTimeObj(value:any, text:any) {
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
    let obj= {"text": text, "value": value, "btnClickCount": { "startCount": this.startClickCount, "pauseCount": this.pauseClickCount, "value": value }, "timestamps": this.dateList};
    return obj;
  }
  resetTimer(){
    this.disableInput = false;
    // making timer value 0
    this.timer = '';
    this.startClickCount = 0;
    this.pauseClickCount = 0;
    this.dateList = [];
    this.btnText = 'Start';
    let obj = this.formatTimeObj(this.timer, 'reset');
    console.log('obj ',obj);
    this.countDownTimerService.setTimerObj(obj);
  }
  startTimer() {
    this.disableInput = true;
    // check whether it is number or not
    if (this.btnText === 'Start') {
      console.log('start clicked');
      this.btnText = 'Pause';
      ++this.startClickCount;
      let obj = this.formatTimeObj(this.timer, 'start');
      delete obj['value'];
      console.log('obj ',obj);
      this.countDownTimerService.setTimerObj(obj);
    } else {
      console.log('pause clicked');
      this.btnText = 'Start';
      ++this.pauseClickCount;
      let obj = this.formatTimeObj(this.timer, 'pause');
      console.log('obj ',obj);
      this.countDownTimerService.setTimerObj(obj);
      // this.sendTimerValue(this.timer, 'pause', this.pauseClickCount);
    }
  }

}
