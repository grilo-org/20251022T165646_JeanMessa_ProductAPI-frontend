import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router:Router, private toastService:ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    const authToken = localStorage.getItem('auth-token');
    const role = localStorage.getItem('role');
    const requireAdmin = route.data['requireAdmin'];
    const requireNotAuthenticated = route.data['requireNotAuthenticated'];

    if(!requireNotAuthenticated){

      if(authToken){

        if(!requireAdmin || (requireAdmin && role == "ADMIN")){
          return true;
        }else{
          this.toastService.error("Você não tem permissão para acessar essa página.")
          this.router.navigate(["/"]);
          return false;
        }

      }else{
        this.router.navigate(["/login"]);
        return false;
      }

    }else{

      if(!authToken){
        return true;
      }else{
        this.router.navigate(["/"]);
        return true;
      }

    }

  }
}
