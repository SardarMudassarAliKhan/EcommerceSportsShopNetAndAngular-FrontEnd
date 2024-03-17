import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppBasketSummaryComponent } from './app-basket-summary/app-basket-summary.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
@NgModule({
  declarations: [
    PagerComponent,
    PagingHeaderComponent,
    AppBasketSummaryComponent,
    OrderTotalsComponent
  ],
  imports: [
    PaginationModule.forRoot(),
    CommonModule,
    RouterModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagerComponent,
    PagingHeaderComponent,
    CarouselModule,
    AppBasketSummaryComponent,
    OrderTotalsComponent
  ]

})
export class SharedModule { }
