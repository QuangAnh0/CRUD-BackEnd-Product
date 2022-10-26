import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
const api_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(api_URL + '/product');
  }
  findProductById(id:number){
    return this.http.get<Product>(`${api_URL}/product/${id}`)
  }
  saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(api_URL+'/product',product)
  }
  deleteProduct(id:number| undefined):Observable<Product>{
    return this.http.delete<Product>(`${api_URL}/product/${id}`);
  }

  editProduct(id: number | undefined, product: Product):Observable<Product>{
    return this.http.put<Product>(`${api_URL}/product/${id}`,product)
  }
}
