import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticDataService } from 'src/app/Services/static-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  recivedId:number=0;
  product:IProduct|null=null
constructor(private activateRoute:ActivatedRoute,private staticData:StaticDataService){}
  ngOnInit(): void {
    this.recivedId=Number (this.activateRoute.snapshot.paramMap.get('id'));
this.product=this.staticData.getProductbyId(this.recivedId);
  }
 
}
