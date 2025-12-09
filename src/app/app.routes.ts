import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {ContactComponent} from '../pages/contact/contact.component';
import {AboutComponent} from '../pages/about/about.component';
import { CreateCardComponentComponent } from '../features/createCards/ui/create-card-component.component';
import {UiComponent} from '../features/login/ui/ui.component';
import {AuthGuard} from '../features/login/guard/auth.guard';
import { UsersFormComponent } from '../features/users/users-form/users-form.component';

export const routes: Routes = [
  {path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'about', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersFormComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'newsat', component: CreateCardComponentComponent, canActivate: [AuthGuard]},
  {path: 'login', component: UiComponent},
  {path: '**', redirectTo: 'login'}
];
