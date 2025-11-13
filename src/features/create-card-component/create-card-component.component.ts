import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/layout/navbar/navbar.component";
import { HeaderComponent } from "../../shared/layout/header/header.component";

@Component({
  selector: 'app-create-card-component',
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './create-card-component.component.html',
  styleUrl: './create-card-component.component.css'
})
export class CreateCardComponentComponent {

}
