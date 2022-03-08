import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSortDirective } from '../directives/sortable.directive';
import { StudentsRoutingModule } from './students-routing.module';

import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [
    StudentsComponent,
    AppSortDirective
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
