import { computed, Injectable, signal } from '@angular/core';
import { CartProduct, Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart = signal<CartProduct[]>([]);
  cartQty = computed(()=> this.cart().length);

  addProduct(newProduct:CartProduct):void{
    this.cart.update(products => {
      let product:CartProduct[] = products.filter(p => p.product.id == newProduct.product.id);
      if(product){
        let filteredProducts:CartProduct[] = products.filter(p => p.product.id !== newProduct.product.id);
        newProduct.quantity += product[0].quantity;
        return [...filteredProducts, newProduct];
      }
      return [...products, newProduct];
    })
  }

  removeProduct(productId:number):void{
    this.cart.update(products => {
      let filteredProducts:CartProduct[] = products.filter(p => p.product.id !== productId);
      return [...filteredProducts];
    })
  }

}
