import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor() {}

  addItemToBasket()
  {
    console.log('Add to basket clicked');
  }
}
