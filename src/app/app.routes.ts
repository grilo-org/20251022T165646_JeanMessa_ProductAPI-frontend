import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CreateUserComponent } from './pages/create-user.component/create-user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuardService],
        data:{
            requireNotAuthenticated: true
        }
    },
    {
        path: "",
        component: ProductsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "produtos",
        component: ProductsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "produtos/cadastro",
        component: CreateProductsComponent,
        canActivate: [AuthGuardService],
        data:{
            requireAdmin: true
        }
    },
    {
        path: "produtos/editar/:id",
        component: EditProductComponent,
        canActivate: [AuthGuardService],
        data:{
            requireAdmin: true
        }
    },
    {
        path: "usuario/cadastro",
        component: CreateUserComponent,
        canActivate: [AuthGuardService],
        data:{
            requireAdmin: true
        }
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
