import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []
  
  private baseUrl: string = 'http://localhost:8080/api/products'
  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetReponseProduct>(this.baseUrl).pipe(
      map(res => res._embedded.products)
    )
  }
}

interface GetReponseProduct {
  _embedded: {
    products: Product[]
  }
}
