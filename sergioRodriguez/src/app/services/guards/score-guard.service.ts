import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import * as fromUsers from 'src/app/redux/reducers';
import { BaseGithubUser } from 'src/app/redux/models/user.model';
import { getUserByLogin } from 'src/app/services/helpers/userOperations';

@Injectable()
export class ScoreGuard implements CanActivate {
  private user: BaseGithubUser;

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(select(fromUsers.getGithubUsers), map((users: BaseGithubUser[]) => {
      if (typeof users !== 'undefined' && users !== null && users.length > 0) {
        this.user = getUserByLogin(users, route.params['id'])
        return (this.user.score >= 30) ? true : false;
      }
      this.router.navigate(['home']);
    }), take(1));
  }
}
