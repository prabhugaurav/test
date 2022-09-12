import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any = {};
  loadIng : boolean = false;
  constructor(private route:ActivatedRoute, private _prodServ:ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loadIng = true;
    this._prodServ.getProductById(this.id).subscribe(res => {
      this.loadIng = false;
      this.data = res;
    },error => {
      this.loadIng = false;
      alert(error);
    });
  }

}
