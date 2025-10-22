import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm!: FormGroup;
  waitingRequest: boolean = false;


  constructor(private userService:UserService, private toastService:ToastrService){
    this.userForm = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required]),
      confirmPassword: new FormControl("",[Validators.required]),
      role: new FormControl("",[Validators.required])
    })
  }

  create(){
    if(this.userForm.value.password == this.userForm.value.confirmPassword){
      this.waitingRequest = true;
      this.userService.register(this.userForm.value).subscribe({
        next: () => {
          this.toastService.success("Usuário cadastrado com sucesso.");
          this.userForm.reset();
          this.userForm.patchValue({
            role : ""
          })
          this.waitingRequest = false;      
        },
        error: (response:HttpErrorResponse) => {
          if(response.error == "This username is already in use."){
            this.toastService.error("Esse nome de usuário já está em uso, tente outro.");
          }else{
            this.toastService.error("Erro ao cadastrar usuário.");
          }
          this.waitingRequest = false;      
        }
      });
    }else{
      this.toastService.error("O campo de senha e confirmar senha devem ser iguais.");
    }
    
  }
}
