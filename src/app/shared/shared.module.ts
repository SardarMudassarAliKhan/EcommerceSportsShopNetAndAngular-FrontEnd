import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppBasketSummaryComponent } from './app-basket-summary/app-basket-summary.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    PagerComponent,
    PagingHeaderComponent,
    AppBasketSummaryComponent,
    OrderTotalsComponent,
    TextInputComponent
  ],
  imports: [
    PaginationModule.forRoot(),
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule.forRoot(),
    BsDropdownModule
  ],
  exports: [
    PaginationModule,
    PagerComponent,
    PagingHeaderComponent,
    CarouselModule,
    AppBasketSummaryComponent,
    OrderTotalsComponent,
    TextInputComponent,
    FormsModule,
  ]

})
export class SharedModule { }
