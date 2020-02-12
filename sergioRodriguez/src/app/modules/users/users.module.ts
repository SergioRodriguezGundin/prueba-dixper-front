import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

/* Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from 'src/app/redux/reducers/users.reducer';
import { UsersEffects } from 'src/app/redux/effects/users.effects';

/* Views */
import { ProfileComponent } from 'src/app/views/profile/profile.component';
import { UsersComponent } from 'src/app/views/users/users.component';

/* Components */
import { DetailUserComponent } from 'src/app/components/detail-user/detail-user.component';
import { RepositoryComponent } from 'src/app/components/repository/repository.component';
import { ResumeRepositoryComponent } from 'src/app/components/resume-repository/resume-repository.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CardUserComponent } from 'src/app/components/card-user/card-user.component';

/* Api (Services) */
import { GithubService } from 'src/app/services/api/github.service';
import { LoadingComponent } from 'src/app/components/common/loading/loading.component';
import { EmptyStateComponent } from 'src/app/components/common/empty-state/empty-state.component';
import { ErrorComponent } from 'src/app/components/common/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([
      UsersEffects
    ])
  ],
  declarations: [
    ProfileComponent,
    UsersComponent,
    DetailUserComponent,
    RepositoryComponent,
    ResumeRepositoryComponent,
    SearchComponent,
    CardUserComponent,
    LoadingComponent,
    EmptyStateComponent,
    ErrorComponent
  ],
  providers: [GithubService]
})
export class UsersModule { }