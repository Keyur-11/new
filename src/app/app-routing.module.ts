import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { RewardHistoryComponent } from './reward-history/reward-history.component';
import { ChanllengesComponent } from './chanllenges/chanllenges.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path: '',redirectTo:'index',pathMatch:'full'},
  {path: 'index', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path:'signup' ,component:SignUpComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'reward-history' ,component:RewardHistoryComponent},
  {path:'challenges' ,component:ChanllengesComponent},
  {path:'store' ,component:StoreComponent}
  // {path:'market' ,component:ChanllengesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
