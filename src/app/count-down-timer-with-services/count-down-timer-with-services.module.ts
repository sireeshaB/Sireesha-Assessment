import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountDownDisplayButtonsClickCountComponent } from './count-down-display-buttons-click-count/count-down-display-buttons-click-count.component';
import { CountDownDisplayTimerLogsComponent } from './count-down-display-timer-logs/count-down-display-timer-logs.component';
import { CountDownDisplayTimerComponent } from './count-down-display-timer/count-down-display-timer.component';
import { CountDownInputTimerComponent } from './count-down-input-timer/count-down-input-timer.component';
import { CountDownTimerWithServicesComponent } from './count-down-timer-with-services.component';
import { CountDownTimerWithServicesRoutingModule } from './count-down-timer-with-services.routing.module';
import { CountDownTimerService } from './count-down-timer-with-services.service';

@NgModule({
  declarations: [
    CountDownTimerWithServicesComponent,
    CountDownInputTimerComponent,
    CountDownDisplayTimerComponent,
    CountDownDisplayTimerLogsComponent,
    CountDownDisplayButtonsClickCountComponent
  ],
  imports: [
    CommonModule,
    CountDownTimerWithServicesRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CountDownTimerService
  ]
})
export class CountDownTimerWithServicesModule { }
