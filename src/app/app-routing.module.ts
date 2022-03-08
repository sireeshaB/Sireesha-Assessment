import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { 
    path: 'count-down-timer-decorators',
    loadChildren: () => import('./count-down-timer-with-decorators/count-down-timer-with-decorators.module').then(m => m.CountDownTimerWithDecoratorsModule)
  },
  { 
    path: 'loading-dynamic-elements',
    loadChildren: () => import('./create-dynamic-divs/create-dynamic-divs.module').then(m => m.CreateDynamicDivsModule)
  },
  { 
    path: 'count-down-timer-services',
    loadChildren: () => import('./count-down-timer-with-services/count-down-timer-with-services.module').then(m => m.CountDownTimerWithServicesModule)
  },
  // {path: 'home', component: HomeComponent},
  // { path: 'students',component: StudentsComponent },
  // { path: 'products',component: ProductsComponent },
  // { path: 'count-down-timer-decorators',component: CountDownTimerWithDecoratorsComponent },
  // { path: 'input-timer', component:InputTimerComponent },
  // {path: '', redirectTo: '/home',pathMatch: 'full',component: HomeComponent}
  
  // { path: '**',component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
