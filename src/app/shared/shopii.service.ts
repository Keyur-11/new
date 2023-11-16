import { Injectable, OnInit } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShopiiService implements OnInit {
  product_url!: "http://localhost:3000/products";
  constructor(private http: HttpClient) { }
   
  getproduct(): Observable <any>{
    return this.http.get(this.product_url);
  }
  ngOnInit(): void {
    
  }
}
