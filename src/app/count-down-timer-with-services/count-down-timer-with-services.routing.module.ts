import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerWithServicesComponent } from './count-down-timer-with-services.component';

const routes: Routes = [
    {
        path: '',
        component: CountDownTimerWithServicesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownTimerWithServicesRoutingModule { }
