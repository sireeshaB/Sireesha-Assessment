import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-timer-logs',
  templateUrl: './display-timer-logs.component.html',
  styleUrls: ['./display-timer-logs.component.sass']
})
export class DisplayTimerLogsComponent implements OnChanges {
  @Input() timestamps: any;
  allTimeStamps: any;
  ngOnChanges() {
      // console.log('timestamps received ', this.timestamps);
      this.allTimeStamps = this.timestamps;
  }

}
