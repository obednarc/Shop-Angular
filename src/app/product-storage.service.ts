import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  private products: Product[] = [
    {id: 1, name: 'Produkt 1', price: 10.00, quantity: 1000, available: true},
    {id: 2, name: 'Produkt 2', price: 250.00, quantity: 300, available: false},
    {id: 3, name: 'Produkt 3', price: 55.00, quantity: 35, available: true},
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  removeProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    this.products.splice(productIndex, 1);
  }

  private idCount: number = 4;  //bo mamy juz 3 id powyzej podane

  saveProduct(product: Product) {
    if (product.id) {
      const productIndex = this.products.findIndex(p => p.id === product.id);
      this.products[productIndex] = product;
    } else {
      product.id = this.idCount;
      this.products.push(product);
      this.idCount++;
    }
  }

  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    return {...this.products[productIndex]};
  }


}
