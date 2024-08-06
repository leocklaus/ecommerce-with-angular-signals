import { Component, signal } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { Product } from '../../shared/types/product';
import { ProductsService } from '../../shared/services/products.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardComponent, MatPaginatorModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

products = signal<Product[]>([]);

totalItems = 30;
pageSize = 10;
currentPage = 0;

constructor(private productsService:ProductsService){
  this.getProducts(this.currentPage, this.pageSize);
}

pageChanged(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.getProducts(this.currentPage, this.pageSize);
}

getProducts(currentPage: number, pageSize: number): void{
  this.productsService.getProducts(this.currentPage + 1, this.pageSize)
  .subscribe(p => {
    this.products.set(p);
  });
}


}
