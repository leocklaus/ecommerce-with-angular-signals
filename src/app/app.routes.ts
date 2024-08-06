import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "products/:id",
        component: ProductComponent
    }
];
