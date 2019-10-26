import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CarParkComponent } from './car-park/car-park.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'car-park', component: CarParkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
