import { Injectable, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RewardsService {
   rewards :{
     id:string[],
     Date:string[],
     Recycled_items:string[],
     Location:string[],
     Coin_Earned:string[]

   } ={
      id :[],
      Date : [],
      Recycled_items : [],
      Location: [],
      Coin_Earned: []
   }
   rewards_url= "http://localhost:3000/rewards";
  constructor(private http:HttpClient) { }
  
   getrewards(): Observable<any>{
    console.log("In get reward function")
     return this.http.get(this.rewards_url)
   }
   setrewards(): Observable<any> {
    return this.http.post(this.rewards_url,this.rewards)
   }
}
