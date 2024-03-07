import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagerComponent,
    PagingHeaderComponent
  ],
  imports: [
    PaginationModule.forRoot(),
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PaginationModule,
    PagerComponent,
    PagingHeaderComponent
  ]

})
export class SharedModule { }
