import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CartProduct, Product } from '../../shared/types/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  id!: string;
  product!:Product;
  qty = signal(0);
  cartService = inject(CartService);

  constructor(private productService:ProductsService, private route:ActivatedRoute){

    this.id = this.route.snapshot.paramMap.get("id") as string;

    this.productService.getProductById(this.id)
      .subscribe(p => this.product = p);
  }

  addQty(){
    this.qty.update(value => value + 1);
  }

  reduceQty(){
    if(this.qty() <=0) return;
    this.qty.update(value => value - 1);
  }

  addProduct(){
    const cartProduct:CartProduct = {
      product: this.product,
      quantity: this.qty()
    }
    this.cartService.addProduct(cartProduct);
  }

}
