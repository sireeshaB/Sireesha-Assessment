import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerWithDecoratorsComponent } from './count-down-timer-with-decorators.component';

const routes: Routes = [
    {
        path: '',
        component: CountDownTimerWithDecoratorsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownTimerWithDecoratorsRoutingModule { }
