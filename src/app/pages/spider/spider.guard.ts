import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpiderGuard implements CanActivate {
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // console.log('canActivate called', state);
    return true;
  }
  public canDeactivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // console.log('canDeactivate called');
    return true;
  }
  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        console.log('canActivateChild called');
        return true;
  }
}
