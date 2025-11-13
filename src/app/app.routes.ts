import {Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {ContactComponent} from '../pages/contact/contact.component';
import {AboutComponent} from '../pages/about/about.component';
import { CreateCardComponentComponent } from '../features/create-card-component/create-card-component.component';

export const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'newsat', component: CreateCardComponentComponent},
  {path: '**', redirectTo: 'home'}
];
