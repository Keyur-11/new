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
      Phone:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupusers")
    .subscribe(res=>{
      console.log("value of phone no:", this.loginForm.value.password)
      console.log("login details",this.loginForm.value.Phone)
      const user = res.find((a:any)=>{
  
        return a.Phone === this.loginForm.value.Phone && a.password === this.loginForm.value.password;
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
