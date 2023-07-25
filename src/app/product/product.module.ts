import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './product-list/star/star.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { HighlightDirective } from '../shared/highlight.directive';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    StarComponent,
    ReviewsComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
