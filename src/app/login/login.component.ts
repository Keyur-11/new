import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input } from '@angular/core';
import {FormBuilder ,FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder ,private http :HttpClient ,private router:Router){}
  @Input() User_name: string = "";
  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      phone:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupusers")
    .subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.phone === this.loginForm.value.Phone && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong!!")
    })
  }
}
