import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { CountDownTimerWithDecoratorsRoutingModule } from './count-down-timer-with-decorators.routing.module';
import { DisplayButtonsClickCountComponent } from './display-buttons-click-count/display-buttons-click-count.component';
import { DisplayTimerLogsComponent } from './display-timer-logs/display-timer-logs.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { InputTimerComponent } from './input-timer/input-timer.component';
import { CountDownTimerWithDecoratorsComponent } from './count-down-timer-with-decorators.component';


@NgModule({
  declarations: [
      DisplayTimerComponent,
      DisplayButtonsClickCountComponent,
      DisplayTimerLogsComponent,
      InputTimerComponent,
      CountDownTimerWithDecoratorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountDownTimerWithDecoratorsRoutingModule
  ],
  providers: [DatePipe]
})
export class CountDownTimerWithDecoratorsModule { }
