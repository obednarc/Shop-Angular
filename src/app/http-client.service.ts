import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./shop/products/Product";

const BASE_URL = 'http://localhost:8080/api';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${BASE_URL}/products`) //odwrocone apostrofy, tam gdzie tylda na klawiaturze
  }

  removeProduct(id: number) {
    return this.httpClient.delete(`${BASE_URL}/products/remove/${id}`)
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${BASE_URL}/products/single/${id}`)
  }

  saveProduct(product: Product) {
    return this.httpClient.post(`${BASE_URL}/products/save`, JSON.stringify(product), HTTP_OPTIONS);
  }


}
