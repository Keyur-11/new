import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { RewardHistoryComponent } from './reward-history/reward-history.component';
import { ChanllengesComponent } from './chanllenges/chanllenges.component';
import { StoreComponent } from './store/store.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '',redirectTo:'index',pathMatch:'full'},
  {path: 'index', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path:'signup' ,component:SignUpComponent},
  {path:'dashboard' ,component:DashboardComponent ,canActivate:[authGuard]},
  {path:'reward-history' ,component:RewardHistoryComponent ,canActivate:[authGuard]},
  {path:'challenges' ,component:ChanllengesComponent ,canActivate:[authGuard]},
  {path:'store' ,component:StoreComponent ,canActivate:[authGuard]}
  // {path:'market' ,component:ChanllengesComponent ,canActivate:[authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
