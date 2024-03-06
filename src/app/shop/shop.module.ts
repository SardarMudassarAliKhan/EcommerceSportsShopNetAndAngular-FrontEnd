import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  ]
})
export class ShopModule { }
