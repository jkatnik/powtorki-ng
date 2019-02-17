import { EchoComponent } from './../echo/echo.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../not-found/not-found.component';
import { TeamComponent } from './../team/team.component';

const routes: Routes = [
  {
    path: '',
    component: EchoComponent
  },
  {
    path: 'team',
    component: TeamComponent
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
