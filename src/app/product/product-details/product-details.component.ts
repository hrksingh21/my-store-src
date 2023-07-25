import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(private route:ActivatedRoute, private ps:ProductService, private router: Router){}

  id!:number
  product!:Product;
  productCount!: number;

  ngOnInit() : void{
    this.route.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));
      this.ps.getProductById(this.id).subscribe(product =>{
        this.product = product;
      })
    })
    this.ps.getProducts().subscribe(products =>{
      this.productCount = products.length;
    })
  }

  goBack(): void{
    this.router.navigate(['/products']);
  }

  goPrevious(): void{
    this.id--;
    if(this.id<1){
      this.id = this.productCount;
    }
    this.router.navigate(['/products',this.id]);
  }
  goNext(): void{
    this.id++;
    if(this.id>this.productCount){
      this.id = 1;
    }
    this.router.navigate(['/products',this.id]);
  }
}
