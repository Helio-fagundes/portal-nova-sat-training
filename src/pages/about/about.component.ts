import { Component } from '@angular/core';
import {NavbarComponent} from '../../widgets/layout/navbar/navbar.component';
import { HeaderComponent } from "../../widgets/layout/header/header.component";
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    NavbarComponent,
    HeaderComponent,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  verifyTheme(){
    if (localStorage.getItem('theme') == 'dark') {
      return true;
    }
    return false;
  }

}
