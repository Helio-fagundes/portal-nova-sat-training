import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ui',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent {

  email = '';
  password = '';

  constructor(public authService: AuthService,
              public router: Router) {
  }

  protected toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  protected menuIsOpen: Boolean = false;

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (token) => {
        Swal.fire('Conectado', 'Credencias corretas, Bom Trabalho!', 'success')
        this.router.navigate(['/home']);
      },
      error: () => {
        Swal.fire('Autenticação', 'Credenciais incorretas', 'error');
      }
    });
  }

}
