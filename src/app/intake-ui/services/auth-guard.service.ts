import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAuth(state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAuth(state);
  }

  private checkAuth(state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    if(currentUser){
      currentUser.expireTime = new Date(currentUser.expireTime);
    }

    if (currentUser && currentUser.isAuthenticated && new Date().getTime() < currentUser.expireTime.getTime()) {
      return true;
    } else {
      // alert("Your token has expired, please login to continue.")
      this.router.navigate(['/login']);
      return false;
    }
  }

}
