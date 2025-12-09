import { Component, output } from '@angular/core';
import { RouterLink } from "@angular/router";
import {ButtonThemeToggleComponent} from '../../../shared/button-theme-toggle/button-theme-toggle.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  clicked = output<void>();

}
