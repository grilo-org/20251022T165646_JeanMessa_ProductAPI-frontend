
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../../types/login-response.type';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly APIURL:string = environment.apiUrl + "/user";

  constructor(private httpClient:HttpClient,private router:Router){}
  
  login(username:string,password:string){
    return this.httpClient.post<LoginResponse>(this.APIURL+"/login",{username,password}).pipe(
      tap((value) => {
        localStorage.setItem("auth-token",value.token);
        localStorage.setItem("username",value.username);
        localStorage.setItem("role",value.role);
      })
    );
  }

  register(userData: FormData){
    return this.httpClient.post(this.APIURL+"/register",userData,{ responseType: 'text' });
  }

  logout(){
    localStorage.removeItem('auth-token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    this.router.navigate(["/login"])
  }

}
