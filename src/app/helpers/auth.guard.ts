import { LoginService } from './../views/login/login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';




@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.loginService.userSubject.value;
    if (currentUser != null) {
        return true;
    }


    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
