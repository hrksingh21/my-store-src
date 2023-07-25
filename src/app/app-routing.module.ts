import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyCalcComponent } from './my-calc/my-calc.component';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
  {path : 'home', component : HomeComponent, title : 'MyStore | Home'},
  {path: 'products', loadChildren: 
                () => import('./product/product.module')
                      .then(m => m.ProductModule)},
  {path : 'profile', component : ProfileComponent, title : 'MyStore | Profile'},
  {path : 'calc', component : MyCalcComponent, title : 'MyStore | Calculator'},
  {path: ' ', redirectTo : '/home', pathMatch : 'full'},
  //{path : '**' , component : PageNotFoundComponent}
  //{path: '**', redirectTo : 'products'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
