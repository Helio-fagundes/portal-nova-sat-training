import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/layout/navbar/navbar.component';
import { HeaderComponent } from "../../shared/layout/header/header.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    NavbarComponent,
    HeaderComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
