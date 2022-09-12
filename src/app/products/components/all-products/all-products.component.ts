import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProdArr: any[] = [];
  allCatgsArr: any[] = [];
  loadIng : boolean = false;
  cartProducts:any[] = [];
  constructor( private _prodServ:ProductsService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.loadIng = true;
    this._prodServ.getAllProducts().subscribe((res:any) => {
      this.allProdArr = res;
      this.loadIng = false;
    } , error => {
      this.loadIng = false;
      alert(error);
    });
  }
  getCategories() {
    this.loadIng = true;
    this._prodServ.getAllCategories().subscribe((res:any) => {
      this.allCatgsArr = res;
      this.loadIng = false;
    } , error => {
      this.loadIng = false;
      alert(error);
    });
  }
  filterCategory(event:any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsCategory(value)
    /* if(value == 'all') {
      this.getProducts()
    }else {
      this.getProductsCategory(value);
    } */
  }
  getProductsCategory(keyword:string){
    this.loadIng = true;
    this._prodServ.getProductsByCategory(keyword).subscribe((res:any) => {
      this.loadIng = false;
      this.allProdArr = res;
    });
  }

  addToCart(event:any){
    // console.log(event);
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert("Product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
      }
    } else{
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
    // localStorage.setItem("cart" , JSON.stringify(event) )
  }
}
