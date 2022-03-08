import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.sass']
})
export class DisplayTimerComponent {
  @Input() timer:any;
  @Input() pauseTimer:any
  timerValue:any;
  timerText: any;
  clearInt:any;
  prevTimer: any; 
  @Output() changeBtnText = new EventEmitter<any>();
  ngOnChanges() {
    if (this.pauseTimer?.text === 'pause') {
      console.log('pause timer received ', this.timerValue);
      this.clearInt ? clearInterval(this.clearInt) : '';
    } else if(this.timer?.text === 'send'){ 
      this.timerValue = this.timer.value;
    } else  if(this.timer?.text === 'start'){
      this.clearInt = setInterval(() => {
        if (this.timerValue > 0) {
          this.timerValue--;
        } else {
          console.log('clearing interval when value becomes 0');
          clearInterval(this.clearInt);
          this.timerValue = 0;
          this.changeBtnText.emit('Start');
        }
      }, 1000);
    } else if(this.timer?.text === 'reset') {
      this.clearInt ? clearInterval(this.clearInt) : '';
      this.timerValue = this.timer.value;
    } else {
      this.changeBtnText.emit('Start');
    }
    //  else if(this.timer?.text === 'reset'){
    //   this.timerValue = '';
    // }
}

}
