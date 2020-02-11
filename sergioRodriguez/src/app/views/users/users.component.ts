import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as usersActions from '../../redux/actions/users.actions';
import * as fromUsers from '../../redux/reducers/users.reducer';
import { BaseGithubUser } from 'src/app/redux/models/user.model';
import { AppState } from 'src/app/redux/app.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<BaseGithubUser[]>;
  public loadingUsers$: Observable<boolean>;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(fromUsers.getGithubUsers), map((users: BaseGithubUser[]) => users));
    this.loadingUsers$ = this.store.pipe(select(fromUsers.getLoadingGithubUsers), map((loading: boolean) => loading));
  }

  public getUserToSearch(user: string) {
    this.store.dispatch( new usersActions.GetUsersGithub(user));
  }
}
