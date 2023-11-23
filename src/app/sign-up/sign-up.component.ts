import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../interfaces/auth';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  implements OnInit{
  // public signupForm !: FormGroup;
  constructor(private FormBuilder:FormBuilder , private messageService : MessageService,private router:Router ,private authService : AuthService ) {}
  signupForm =this.FormBuilder.group({
    username:['',[Validators.required ,Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
    Phone: ['',[Validators.required ,Validators.minLength(10),Validators.maxLength(10)]],
    password: ['',[Validators.required ,Validators.minLength(5)]]

   }
   )
  ngOnInit(): void {
   
  }
  get Username(){
    return this.signupForm.controls['username']
  } 
  get phone_no(){
    return this.signupForm.controls['Phone']
  }
  get password(){
    return this.signupForm.controls['password']
    
  }
 signUp()
 {
      const postData ={...this.signupForm.value};
      this.authService.signUp(postData as User).subscribe(
        Response =>{
          
          this.signupForm.reset();
          // this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Register successfully' });
          this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Register successfully' });
          this.router.navigate(['login'])
        },err=>{
          this.messageService.clear();
          this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'Invalid Something' });
              }
              )
//    this.http.post<any>("http://localhost:3000/signupusers",this.signupForm.value)
//    .subscribe(res=>{
//     alert("Signup Successfull")
//     this.signupForm.reset();
//     this.router.navigate(['login'])
//    },err=>{
//     alert("Something went wrong")
//    })

 }
}
