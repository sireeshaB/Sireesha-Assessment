import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { CommonModule } from '@angular/common';
import { StudentsService } from './students/students.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountDownTimerWithDecoratorsModule } from './count-down-timer-with-decorators/count-down-timer-with-decorators.module';
import { FormsModule } from '@angular/forms';
import { CreateDynamicDivsModule } from './create-dynamic-divs/create-dynamic-divs.module';
import { CountDownTimerWithServicesModule } from './count-down-timer-with-services/count-down-timer-with-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    StudentsModule,
    ProductsModule,
    FormsModule,
    CountDownTimerWithDecoratorsModule,
    CreateDynamicDivsModule,
    CountDownTimerWithServicesModule
  ],
  providers: [
    ProductsService,
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
