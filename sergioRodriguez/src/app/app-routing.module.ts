import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  }, { 
    path: 'users',
    loadChildren: () => import(`./modules/users/users.module`).then(m => m.UsersModule)
  }, {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
