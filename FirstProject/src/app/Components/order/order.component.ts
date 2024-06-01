import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticDataService } from 'src/app/Services/static-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges , OnInit {
  // products:IProduct[]
  FilteredList:IProduct[]=[];
  // category:ICategory[]
  OrderPrice:number=0
  @Input() SendedId:number=0
  @Output() totalPrice:EventEmitter<number>       
  constructor(private router:Router,private staticData:StaticDataService){
    

              this.totalPrice=new EventEmitter<number>()
  }
  ngOnInit(): void {
   this.FilteredList=this.staticData.getAllProducts()
  }
  
  Buy(count: any, price: number,product: IProduct) {
    const quantity = Number(count);
    if (quantity <= product.stock && quantity > 0) {
      this.OrderPrice += quantity * product.price;
      product.stock -= quantity; 
    this.totalPrice.emit(this.OrderPrice)  
    }

  }
  ngOnChanges(): void {
    this.FilterByCategory();
  }
FilterByCategory(){

this.FilteredList= this.staticData.getProductsByCategoryId(this.SendedId)
}

  OpenProdDetails(pid:number){
    this.router.navigateByUrl('/order/'+pid)
  }
  deleteById(pid:number){
    this.staticData.deleteProduct(pid)
  }
}

