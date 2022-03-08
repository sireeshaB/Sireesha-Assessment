import { Component} from '@angular/core';
import { CountDownTimerService } from '../count-down-timer-with-services.service';

@Component({
  selector: 'app-count-down-display-timer',
  templateUrl: './count-down-display-timer.component.html',
  styleUrls: ['./count-down-display-timer.component.sass']
})
export class CountDownDisplayTimerComponent {
  timer:any;
  clearInt:any;
  constructor(private countDownTimerService: CountDownTimerService) {}
  ngOnInit() {
    this.countDownTimerService.getTimerObj().subscribe((res) => {
      console.log(res);
      this.getTimerData(res);
    });
  }
  getTimerData(data:any) {
    if (data?.text === 'pause') {
      console.log('pause timer received ', this.timer);
      this.clearInt ? clearInterval(this.clearInt) : '';
    } else if(data?.text === 'send'){ 
      this.timer = data.value;
    } else  if(data?.text === 'start'){
      this.clearInt = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          console.log('clearing interval when value becomes 0');
          clearInterval(this.clearInt);
          this.timer = 0;
          // let obj= {"text": 'send', "value": 0, "btnClickCount": { "startCount": 0, "pauseCount": 0, "value": 0 }, "timestamps": []}
          // this.countDownTimerService.setTimerObj(obj);
          this.countDownTimerService.setButtonText('Start');
        }
      }, 1000);
    } else if(data?.text === 'reset') {
      this.timer = data.value;
    }
  }
}
