import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SideNavComponent } from '../side-nav/side-nav.component';
import {ShopiiService} from '../shared/shopii.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  products :any
  sideNavStatus: boolean = false;
  constructor(private shopii: ShopiiService ){}
  ngOnInit(): void {
     this.shopii.getproduct().subscribe(data =>{
      this.products = data ;
     })
  }
}
