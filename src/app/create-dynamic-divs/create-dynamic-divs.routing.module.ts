import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDynamicDivsComponent } from './create-dynamic-divs.component';

const routes: Routes = [
  {
    path: '',
    component: CreateDynamicDivsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDynamicDivsRoutingModule { }
