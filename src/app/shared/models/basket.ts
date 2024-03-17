
import cuid from 'cuid';

export interface Basket {
  id: string;
  items: BasketItem[];
  deliveryMethodId?: any;
  clientSecret?: any;
  paymentIntentId?: any;
  shippingPrice: number;
}
export interface BasketItem {
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
  id: number;
}

export class Basket implements Basket {
  id= cuid();
  items: BasketItem[] = [];
  shippingPrice = 0;

  constructor() {
    this.id = cuid();
  }
}

export interface BasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
