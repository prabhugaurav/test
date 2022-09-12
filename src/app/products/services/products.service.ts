import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // fakeProdUrl = "https://fakestoreapi.com/";

  constructor( private httpClnt:HttpClient ) { }
  getAllProducts() {
    return this.httpClnt.get(environment.basefakeApi + 'products');
  }
  getAllCategories() {
    return this.httpClnt.get(environment.basefakeApi + 'products/categories');
  }
  getProductsByCategory(keyword:string) {
    return this.httpClnt.get(environment.basefakeApi + 'products/category/' + keyword);
  }
  getProductById(id:any) {
    return this.httpClnt.get(environment.basefakeApi + 'products/' + id);
  }

}
