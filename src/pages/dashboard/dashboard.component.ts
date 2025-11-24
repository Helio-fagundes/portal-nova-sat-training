import { Component } from '@angular/core';
import {NavbarComponent} from '../../widgets/layout/navbar/navbar.component';
import { HeaderComponent } from "../../widgets/layout/header/header.component";
import {CardListComponentComponent} from "../../features/createAndListCards/card-list-component/card-list-component.component";

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
