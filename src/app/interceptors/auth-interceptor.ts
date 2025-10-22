import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authToken = localStorage.getItem("auth-token");
  const userService = inject(UserService);
  const toastService = inject(ToastrService);

  if(authToken){
    const authenticatedRequest = request.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken
      }
    })

    return next(authenticatedRequest).pipe(
      catchError(error => {
        if (error.status === 401) {
          toastService.error("Sua sessão expirou.")
          userService.logout();
        }
        return throwError(() => error);
      })
    );
  }

  return next(request);
};
