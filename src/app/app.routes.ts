import {Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {ContactComponent} from '../pages/contact/contact.component';
import {AboutComponent} from '../pages/about/about.component';
import { CreateCardComponentComponent } from '../features/createAndListCards/create-card-component/create-card-component.component';
import {UiComponent} from '../features/login/ui/ui.component';
import {AuthGuard} from '../features/login/guard/auth.guard';

export const routes: Routes = [
  {path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'newsat', component: CreateCardComponentComponent, canActivate: [AuthGuard]},
  {path: 'login', component: UiComponent},
  {path: '**', redirectTo: 'login'}
];
