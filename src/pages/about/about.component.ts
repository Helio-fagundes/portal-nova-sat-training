import { Component } from '@angular/core';
import {NavbarComponent} from '../../widgets/layout/navbar/navbar.component';
import { HeaderComponent } from "../../widgets/layout/header/header.component";

@Component({
  selector: 'app-about',
  imports: [
    NavbarComponent,
    HeaderComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
