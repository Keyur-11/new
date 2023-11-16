import { Component,OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean =false;
  // @Output() Login = new EventEmitter<string>();
  // LoginStatus:string = "";
  
 constructor(){}
  ngOnInit(): void {
    
  }
  sideNavToggle(){
   this.menuStatus = !this.menuStatus;
   this.sideNavToggled.emit(this.menuStatus);

  }

}
