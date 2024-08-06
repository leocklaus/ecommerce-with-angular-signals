import { Component, computed, inject, WritableSignal } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { CartProduct } from '../../shared/types/product';
import {MatTableModule} from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, MatIconModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartService = inject(CartService);
  cartItems:WritableSignal<CartProduct[]> = this.cartService.cart;

  cardTotal = computed(()=> {
    return this.cartItems().reduce((acc, product) => acc + (product.quantity * product.product.price), 0);
  })

  router = inject(Router);


  changeQty(productId: number, qty:string){
    Number(qty) == 0 ? 
      this.deleteItem(productId) : 
      this.cartService.updateProduct(productId, Number(qty));
  }

  deleteItem(productId:number){
    this.cartService.removeProduct(productId);
  }

  checkOut(){
    this.router.navigate(["/"]);
    this.cartService.checkout();
  }

}
