import { Component, Input, OnChanges } from '@angular/core';
import { CountDownTimerService } from '../count-down-timer-with-services.service';

@Component({
  selector: 'app-count-down-display-buttons-click-count',
  templateUrl: './count-down-display-buttons-click-count.component.html',
  styleUrls: ['./count-down-display-buttons-click-count.component.sass']
})
export class CountDownDisplayButtonsClickCountComponent{
  constructor(private countDownTimerService: CountDownTimerService) {}
  clickCount: any;
  // ngOnChanges() {
  //   // this.clickCount = this.btnClickCountObj;
  // }
  ngOnInit() {
    this.countDownTimerService.getTimerObj().subscribe((res) => {
      console.log(res);
      this.clickCount = res.btnClickCount;
      console.log(res.btnClickCount);
    });
  }

}
