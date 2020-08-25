import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from './authorize.service';
import { tap } from 'rxjs/operators';
import { ApplicationPaths, QueryParameterNames } from './api-authorization.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private authorize: AuthorizeService, private router: Router) {
  }
  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authorize.isAuthenticated()
        .pipe(tap(isAuthenticated => this.handleAuthorization(isAuthenticated)));
  }

  private handleAuthorization(isAuthenticated: boolean) {
    if (!isAuthenticated) {
      this.router.navigateByUrl("authentication/login?returnUrl=%2Fauthentication%2Flogin")
    }
  }
}
