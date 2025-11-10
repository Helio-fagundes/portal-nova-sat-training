import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ParentDataComponent} from './components/parent-data/parent-data.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ParentDataComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal-nova-sat-training';
  job = "Programador";

  protected onTrabalhoChanged() {
    console.log("onTrabalhoChanged");
  }
}
