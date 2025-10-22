import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  waitingRequest: boolean = false;

  constructor(
    private userSevice:UserService,
    private toastService:ToastrService,
    private router:Router
  ){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  submit(){
    this.waitingRequest = true;
    this.userSevice.login(this.loginForm.value.username,this.loginForm.value.password).subscribe({
        next: () => this.router.navigate(["/"]),
        error: (error) => {
          if(error.status==401){
            this.toastService.error("Usuário ou senha incorreto.");
          }else{
            this.toastService.error("Ocorreu um erro no servidor, tente novamente mais tarde.");
          }
          this.waitingRequest = false;
        }
      }
    );
  }

}
