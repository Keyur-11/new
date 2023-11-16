import { Component,OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean =false;

   list =[
    {
     number:'1',
     name:'Home',
     icon:'fa-solid fa-house',
     a:'/dashboard',
    },
  {
    number:'2',
    name:'Market Place',
    icon:'fa-sharp fa-solid fa-store',
    a:'/',
  },
{
    number:'3',
    name:'Reward History',
    icon:'fa-solid fa-clock-rotate-left',
    a:'/reward-history',
},

{
  number:'4',
  name:'Challenges',
  icon:'fa-thin fa-clock-rotate-left',
  a:'/challenges',
},
{
  number:'5',
  name:'Settings',
  icon:'fa-solid fa-gear',
  a:'/dashboard',
},
{
  number:'6',
  name:'Help & feedback',
  icon:'fa-thin fa-square-question',
  a:'/dashboard',
}
]
  

  // constructor(){}
  ngOnInit():void {

  }
}
