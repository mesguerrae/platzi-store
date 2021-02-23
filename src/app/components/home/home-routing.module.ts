import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routess: Routes = [
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routess)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
