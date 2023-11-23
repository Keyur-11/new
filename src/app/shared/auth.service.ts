import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl= 'http://localhost:3000';
  constructor(private Http: HttpClient) { }
  
   signUp(userDetails: User){
    return this.Http.post(`${this.baseUrl}/signupusers`,userDetails);
   }
   getUserByPhone(Phone:string) : Observable<User[]>{
    return this.Http.get<User[]>(`${this.baseUrl}/signupusers?Phone =$(Phone)`)
   }
}

