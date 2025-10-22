import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  username:string | null = localStorage.getItem('username');
  isAdmin:boolean = localStorage.getItem('role') == "ADMIN";

  constructor(private userService:UserService){}

  logout(){
    this.userService.logout();
  }
}
