import { Component, computed, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  cartService = inject(CartService);
  cartQty = computed(()=> {
    console.log("computou")
    return this.cartService.cart().reduce((acc, item)=> acc + item.quantity, 0)
  })

}
