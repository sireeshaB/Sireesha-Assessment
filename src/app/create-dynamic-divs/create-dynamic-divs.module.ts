import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CreateDynamicDivsComponent } from './create-dynamic-divs.component';
import { CreateDynamicDivsRoutingModule } from './create-dynamic-divs.routing.module';

@NgModule({
  declarations: [
    CreateDynamicDivsComponent
  ],
  imports: [
    CommonModule,
    CreateDynamicDivsRoutingModule,
    InfiniteScrollModule,
    NgbModule
  ]
})
export class CreateDynamicDivsModule { }
