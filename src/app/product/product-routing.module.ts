import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes : Routes = [
  {path : 'products', component : ProductListComponent, title : 'MyStore | Products'},
  {path : 'products/:id', component : ProductDetailsComponent,
    children:[{
      path:'reviews',component: ReviewsComponent
    }]

  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
