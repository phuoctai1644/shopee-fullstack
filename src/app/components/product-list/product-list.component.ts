import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  currentCategoryName: string = 'electronics'
  
  constructor(private productService: ProductService, 
              private route: ActivatedRoute) { }
    
  ngOnInit(): void {

    console.log('app initalize')
    this.route.paramMap.subscribe(param => {
      this.listProducts()
    })
  }

  listProducts() {
    const hasCategoryName: boolean = this.route.snapshot.paramMap.has('name')

    console.log(hasCategoryName)

    if (hasCategoryName) {
      this.currentCategoryName = String(this.route.snapshot.paramMap.get('name'))
    } else {
      this.currentCategoryName = 'electronics'
    }

    this.productService.getProductList(this.currentCategoryName).subscribe(
      data => this.products = data
    )
  }

}
