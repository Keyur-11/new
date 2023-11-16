import { Component,OnInit } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import {RewardsService} from '../shared/rewards.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideNavStatus: boolean = false;
  reward_data:any;
  public RecycledItems =0 ;
  public Coins = 0;
  constructor(private Reward: RewardsService){}
  ngOnInit(){
        this.Reward.getrewards().subscribe(data =>{
          this.reward_data =data;
          this.findSum(this.reward_data)
        });
    };
    // findSum(reward_data : any){
    //   for(let i =0;i<reward_data.Coin_Earned.length; i++)
    //   {
    //     this.Coins+= Number(reward_data[i].Coin_Earned);
    //     console.log("Coins",this.Coins)
    //     this.Recycled_tems+= Number(reward_data[i].Recycled_items);
    //     console.log("Recycled Items",this.Recycled_tems)

    //   }
    // }
    findSum(reward_data: any) {
      Object.keys(reward_data).forEach((key) => {
        this.Coins += Number(reward_data[key].Coin_Earned);
        console.log("Coins", this.Coins);
    
        this.RecycledItems += Number(reward_data[key].Recycled_items);
        console.log("Recycled Items", this.RecycledItems);
      });
    }
    
   

}
