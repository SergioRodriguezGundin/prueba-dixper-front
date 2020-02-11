import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import { UsersComponent } from '../../views/users/users.component';
import { ProfileComponent } from '../../views/profile/profile.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
