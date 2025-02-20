import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "products/:id",
        component: ProductComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];
