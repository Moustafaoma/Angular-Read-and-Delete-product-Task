import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-master-order',
  templateUrl: './master-order.component.html',
  styleUrls: ['./master-order.component.css']
})
export class MasterOrderComponent {
  Category:ICategory[];
  selectedId:number=0
  Total:number=0
  constructor(){
    this.Category=[

      {
      id:1,
      name:"smartphones"
      },
      {
        id:2,
        name:"laptops"
      },
      {
        id:3,
        name:"fragrances"
      },
      {
        id:4,
        name:"skincare"
      },
      {
        id:5,
        name:"groceries"
      },
      {
        id:6,
        name:"home-decoration"
      }
      
            ];


  }
  OnTotalPrice(price:number){
this.Total=price;
  }
}
