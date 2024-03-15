import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ShopComponent } from './shop/shop.component';
import { TestErrorComponent } from './core/test-error/test-error.component';

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
