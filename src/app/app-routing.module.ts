import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ShopComponent } from './shop/shop.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { AuthGuard } from './core/Guard/auth.guard.guard';

const routes: Routes = [
 {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
    data: {breadcrumb: 'Shop'}
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then(mod => mod.CoreModule),
    data: {breadcrumb: 'Core'}
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    canActivate: [AuthGuard],
    data: {breadcrumb: 'Basket'}
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
    canActivate: [AuthGuard],
    data: {breadcrumb: 'Checkout'}
  },
  {
    path : 'account',
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
    data: {breadcrumb: "Account"}
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
