import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/layout/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    NavbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
