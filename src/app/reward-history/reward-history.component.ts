import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../shared/rewards.service';
@Component({
  selector: 'app-reward-history',
  templateUrl: './reward-history.component.html',
  styleUrls: ['./reward-history.component.css']
})
export class RewardHistoryComponent implements OnInit {
  reward_data:any;
  sideNavStatus: boolean = false;
  constructor(private Reward: RewardsService){}
  ngOnInit(){
        this.Reward.getrewards().subscribe(data =>{
          this.reward_data =data;
          
        });
    };
    
  }


