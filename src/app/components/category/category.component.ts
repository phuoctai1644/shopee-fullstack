import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listCategories()
  }
  listCategories() {
    this.productService.getCategoryList().subscribe(
      data => this.categories = data
    )
  }

}
