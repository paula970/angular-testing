import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomanNumberComponent } from './roman-number/roman-number.component';



const routes: Routes = [
  { path: '', redirectTo: '/RomanNumber', pathMatch: 'full' },
  {
    path: 'RomanNumber',
    component: RomanNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
