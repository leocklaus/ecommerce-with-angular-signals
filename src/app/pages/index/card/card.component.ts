import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() product!:Product;

  constructor(private router:Router){}

  buy(id: number){
    this.router.navigate(['/products', id])
  }

}
