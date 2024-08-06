import { computed, Injectable, OnDestroy, signal } from '@angular/core';
import { CartProduct, Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  cart = signal<CartProduct[]>([]);

  addProduct(newProduct:CartProduct):void{
    this.cart.update(products => {
      let product:CartProduct[] = products.filter(p => p.product.id == newProduct.product.id);
      if(product.length){
        let filteredProducts:CartProduct[] = products.filter(p => p.product.id !== newProduct.product.id);
        newProduct.quantity += product[0].quantity;
        return [...filteredProducts, newProduct];
      }
      console.log(this.cart())
      return [...products, newProduct];
    })
  }

  removeProduct(productId:number):void{
    this.cart.update(products => {
      let filteredProducts:CartProduct[] = products.filter(p => p.product.id !== productId);
      return [...filteredProducts];
    })
  }

  updateProduct(productId:number, productQty:number):void{
    this.cart.update(products => products.map(
      p => p.product.id == productId? { product: p.product, quantity: productQty }: p
    ))
  }

  checkout(){
    this.cart.set([]);
  }


}
