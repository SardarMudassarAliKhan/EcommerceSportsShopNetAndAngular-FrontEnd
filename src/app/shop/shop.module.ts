import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ShopRoutingModule,
    RouterModule
  ],
  exports: [
    ShopComponent,
    RouterModule
  ]
})
export class ShopModule { }
