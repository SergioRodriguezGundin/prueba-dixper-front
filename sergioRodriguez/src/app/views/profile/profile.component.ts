import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select} from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import * as usersActions from 'src/app/redux/actions/users.actions';
import * as fromUsers from 'src/app/redux/reducers';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { BaseGithubUser } from 'src/app/redux/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private selectedUserSubscription: Subscription
  public selectedUser$: Observable<BaseGithubUser>;
  public user: BaseGithubUser;
  public name: string;
  public resumeRepositories: any = {
    resumeRepositories: 12,
    size: 23,
    forks: 45
  };
  constructor( private store: Store<AppState>, private actRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('id');
      this.store.dispatch(new usersActions.GetUserGithub(this.name));
      this.selectedUser$ = this.store.pipe(select(fromUsers.getSelectedUser), map((user: BaseGithubUser) => user));
      this.selectedUserSubscription = this.store.pipe(select(fromUsers.getSelectedUser)).subscribe((user: BaseGithubUser) => {
        if (typeof user !== 'undefined' && user !== null) {
          this.user = user
        }
      });
    })
  }

  ngOnDestroy(): void {
    this.selectedUserSubscription.unsubscribe();
  }
}
