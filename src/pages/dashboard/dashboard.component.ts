import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/layout/navbar/navbar.component';
import { HeaderComponent } from "../../shared/layout/header/header.component";
import {CardListComponentComponent} from '../../features/card-list-component/card-list-component.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    NavbarComponent,
    HeaderComponent,
    CardListComponentComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
