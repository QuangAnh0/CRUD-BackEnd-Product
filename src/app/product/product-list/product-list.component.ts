import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../sevice/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.productService.getAll().subscribe(products => {
      this.product=products;
    })
  }

}
