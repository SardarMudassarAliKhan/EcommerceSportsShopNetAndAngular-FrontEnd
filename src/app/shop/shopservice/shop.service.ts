import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map, of } from 'rxjs';
import { Product } from '../../shared/models/product';
import { Brand } from '../../shared/models/brand';
import { Type } from '../../shared/models/type';
import { Pagination } from '../../shared/models/pagination';
import { ShopParams } from '../../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl= environment.apiUrl;
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  pagination?: Pagination<Product[]>;
  shopParams = new ShopParams();

  constructor(private http: HttpClient) { }

  getProducts() :  Observable<Pagination<Product[]>>{
    debugger;
    let params = new HttpParams();

    if (this.shopParams.brandId > 0) params = params.append('brandId', this.shopParams.brandId);
    if (this.shopParams.typeId) params = params.append('typeId', this.shopParams.typeId);
    params = params.append('sort', this.shopParams.sort);
    params = params.append('pageIndex', this.shopParams.pageIndex);
    params = params.append('pageSize', this.shopParams.pageSize);
    if (this.shopParams.search) params = params.append('search', this.shopParams.search);

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params}).pipe(
      map(response => {
        this.pagination = response;
        return response;
      })
    )
  }

  getProduct(id: number) {
    const product = this.products.find(p => p.id === id);
    if (product !== undefined) return of(product);
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }

  getShopParams() {
    return this.shopParams;
  }

  getBrands() {
    if (this.brands.length > 0) return of(this.brands);
    return this.http.get<Brand[]>(this.baseUrl + 'Products/brands').pipe(
      map(brands => this.brands = brands)
    );
  }

  getTypes() {
    if (this.types.length > 0) return of(this.types);
    return this.http.get<Type[]>(this.baseUrl + 'Products/types').pipe(
      map(types => this.types = types)
    );
  }
}
