import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input } from '@angular/core';
import {FormBuilder ,FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm =this.formBuilder.group({
    Phone:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  constructor(private formBuilder : FormBuilder ,private authService:AuthService ,private router:Router ,private messageService : MessageService){}
  get Phone(){
    return this.loginForm.controls['Phone'];
  }
  get password(){
    return this.loginForm.controls['password'];
  }
  ngOnInit(): void {
   
  }
  login(){
    const {Phone ,password } =this.loginForm.value;
    this.authService.getUserByPhone(Phone as string).subscribe(
      response =>{
        const user = response.find((a:any)=>{
               return a.Phone === this.loginForm.value.Phone && a.password === this.loginForm.value.password;
             });
             if(user){
               this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Loggin  successfully' });
               sessionStorage.setItem('Phone' , Phone as string);
               this.loginForm.reset();
               this.router.navigate(['dashboard'])
             }else{
              this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'User not Found or Invalide password' });
               
             }
           },err=>{
            this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Something went wrong' });
            
           })
          }   
    // this.http.get<any>("http://localhost:3000/signupusers")
    // .subscribe(res=>{
    //   console.log("value of phone no:", this.loginForm.value.password)
    //   console.log("login details",this.loginForm.value.Phone)
    //   const user = res.find((a:any)=>{
  
    //     return a.Phone === this.loginForm.value.Phone && a.password === this.loginForm.value.password;
    //   });
    //   if(user){
    //     alert("Login Success");
    //     this.loginForm.reset();
    //     this.router.navigate(['dashboard'])
    //   }else{
    //     alert("User not found");
    //   }
    // },err=>{
    //   alert("Something went wrong!!")
    // })
  }

