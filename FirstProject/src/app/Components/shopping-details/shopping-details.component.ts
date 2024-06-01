import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';
import { ActivatedRoute } from '@angular/router';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {
userId:number=0
user:any
constructor(private activateRoute:ActivatedRoute,private dynamicData:DynamicDataService,private router:Router){}
  ngOnInit(): void {
    this.userId=Number (this.activateRoute.snapshot.paramMap.get("id"));
this.dynamicData.getUserById(this.userId).subscribe((u)=>{
  this.user=u
})
  }
  OpenUserDetails(uid:number){

    
    this.router.navigateByUrl('/Shopping/'+uid)
  }
  
}
