import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonThemeToggleComponent} from '../shared/button-theme-toggle/button-theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonThemeToggleComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }
}
