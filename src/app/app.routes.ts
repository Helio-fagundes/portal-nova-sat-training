import {Routes} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ParentDataComponent} from './components/parent-data/parent-data.component';
import {AboutComponent} from './pages/about/about.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'about', component: AboutComponent}
];
