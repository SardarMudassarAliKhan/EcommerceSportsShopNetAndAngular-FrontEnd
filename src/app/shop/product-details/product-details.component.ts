import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ShopService } from '../shopservice/shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product?: Product;
  quantity = 1;
  quantityInBasket = 0;

  constructor(private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    public bcService: BreadcrumbService
    ) {
    this.bcService.set('@productDetails', '');
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
      },
      error: error => console.log(error)
    })
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    this.quantity--;
  }
}
