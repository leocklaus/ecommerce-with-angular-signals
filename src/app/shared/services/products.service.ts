import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  getProducts(currentPage: number, pageSize:number){
    return this.http.get<Product[]>(this.baseUrl + "/products?_page=" + currentPage + "&_per_page=" + pageSize)
      .pipe(
        take(1)
      )
  }

  getProductById(id: string){
    return this.http.get<Product>(this.baseUrl + "/products/" + id)
      .pipe(
        take(1)
      )
  }

}
