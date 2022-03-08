import { Component } from '@angular/core';
import { CountDownTimerService } from '../count-down-timer-with-services.service';

@Component({
  selector: 'app-count-down-display-timer-logs',
  templateUrl: './count-down-display-timer-logs.component.html',
  styleUrls: ['./count-down-display-timer-logs.component.sass']
})
export class CountDownDisplayTimerLogsComponent {
  constructor(private countDownTimerService: CountDownTimerService) {}
  timestamps: any;
  allTimeStamps: any;
  ngOnInit() {
    this.countDownTimerService.getTimerObj().subscribe((res) => {
      console.log(res);
      this.allTimeStamps = res.timestamps;
    });
  }
}
