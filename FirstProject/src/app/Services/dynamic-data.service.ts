import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private httpClient:HttpClient) { 


  }
  getAllUsers():Observable<any>{
    return this.httpClient.get(`http://localhost:2000/users`)

  }
  getUserById(cid:number):Observable<any>{
    return this.httpClient.get(`http://localhost:2000/users/${cid}`)

  }
  delteUser(cid:number):Observable<void>{
let res= this.httpClient.delete<void>(`http://localhost:2000/users/${cid}`)   
return res;
  }

}
