import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchoComponent } from '../echo/echo.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { TeamComponent } from '../team/team.component';
import { LoginFormComponent } from '../login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: EchoComponent
  }, {
    path: 'team',
    component: TeamComponent
  }, {
    path: 'login',
    component: LoginFormComponent
  }, {
    path: 'echo',
    redirectTo: ''
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
