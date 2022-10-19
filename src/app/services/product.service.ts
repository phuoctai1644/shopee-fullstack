import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl: string = 'https://fakestoreapi.com/products'
  private categoryUrl: string = 'https://fakestoreapi.com/products/categories'

  constructor(private httpClient: HttpClient) {}

  getProductList(categoryName: string): Observable<Product[]> {
    const searchUrl = `${this.productUrl}/category/${categoryName}`

    return this.getProducts(searchUrl)
  }

  getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(searchUrl)
  } 

  getCategoryList(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.categoryUrl)
  }
}

