import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import { UsersComponent } from 'src/app/views/users/users.component';
import { ProfileComponent } from 'src/app/views/profile/profile.component';
import { ScoreGuard } from 'src/app/services/guards/score-guard.service';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', canActivate: [ScoreGuard], component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
