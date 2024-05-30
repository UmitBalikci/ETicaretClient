import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracats/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kağıt",
    //   stock: 200,
    //   price: 25
    // }).subscribe();

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Silgi",
    //   stock: 300,
    //   price: 5
    // }).subscribe();
    

    // this.httpClientService.put({
    //   controller: "products"
    // }, {
    //   id : "37b282cb-5606-42bb-8f52-08daf273dc7c",
    //   name : "Kokulu silgi",
    //   stock: 3,
    //   price : 50
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "ee0327bf-6252-48ac-47eb-08daf2786036").subscribe();
    
    // this.httpClientService.get({
    //   // baseUrl: "https://jsonplaceholder.typicode.com",
    //   // controller: "posts"
    //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data => console.log(data));
    
  }

}
