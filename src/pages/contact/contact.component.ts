import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/layout/navbar/navbar.component';
import { HeaderComponent } from "../../shared/layout/header/header.component";

@Component({
  selector: 'app-contact',
  imports: [
    NavbarComponent,
    HeaderComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
