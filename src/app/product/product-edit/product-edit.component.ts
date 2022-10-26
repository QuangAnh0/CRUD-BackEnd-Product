import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../model/product";
import {ProductService} from "../../sevice/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  sub:Subscription;
  product:Product={
    id:0,
    name:"name",
    price:0,
    description:"",
  }
  id:number|undefined;
  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }
  getProduct(id: number){
    this.productService.findProductById(id).
    subscribe(product =>{
      this.product = product;
    });
  }

  updateProduct(){
    this.productService.editProduct(this.product.id, this.product).subscribe(()=>{
      this.router.navigate(['/']);
    });
    // this.router.navigateByUrl("/");

  }

  ngOnInit(): void {
  }

}
