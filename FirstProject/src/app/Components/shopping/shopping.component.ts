import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  users: any[] = [];

  constructor(private router:Router,private dynamicData: DynamicDataService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dynamicData.getAllUsers().subscribe(
      (c) => {
        this.users = c;
      },
      (error) => {
        console.error('Error fetching carts:', error);
      }
    );
  }
 
 Delete(id:number){
  this.dynamicData.delteUser(id).subscribe(()=>this.dynamicData.getAllUsers().subscribe((u)=>this.users=u))

 }
 usersTrackby(index:number,user:any){
return user.id
 } 
  
  getById(id:number){
    this.dynamicData.getUserById(id);
  }
  OpenUserDetails(uid:number){

    
    this.router.navigateByUrl('/Shopping/'+uid)
  }

}
