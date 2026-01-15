import { User } from './../interface/User';
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {UiComponentPopup} from '../../../shared/popus/ui/ui.component';
import {ButtonThemeToggleComponent} from '../../../shared/button-theme-toggle/button-theme-toggle.component';

@Component({
  selector: 'app-ui',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    UiComponentPopup,
    ButtonThemeToggleComponent,
  ],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent {

  constructor(public router: Router,
              public authService: AuthService,
  ) {
  }

  protected toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
  protected menuIsOpen: Boolean = false;
  protected popupRegisterToggle: boolean = false;
  protected popupLoginToggle: boolean = false;
  protected popupErrorToggle: boolean = false;
  protected popupEmailExistsToggle: boolean = false;

  user: User = {
    name: '',
    email: '',
    password: ''
  };

register() {
  this.authService.register(this.user).subscribe({
    next: (response) => {
        this.popupRegisterToggle = true;
        this.menuIsOpen = !this.menuIsOpen;
    },
    error: (error) => {
      if (error.status === 409) {
        this.popupEmailExistsToggle = true;
      } else {
        this.popupErrorToggle = true;
      }
    }
  });
}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        localStorage.setItem('auth_token', response.token);
        this.popupLoginToggle = true;
      },
      error: (error) => {
        this.popupErrorToggle = true;
      }
    });
  }

  onConfirmedPopup() {
    if (this.popupLoginToggle) {
      this.popupLoginToggle = false;
      this.router.navigate(['/home']);
    }

    if (this.popupRegisterToggle) {
      this.popupRegisterToggle = false;
    }

    if(this.popupErrorToggle){
      this.popupErrorToggle = false;
    }

    if (this.popupEmailExistsToggle) {
      this.popupEmailExistsToggle = false;
    }
  }

   verifyTheme(){
    return document.documentElement.classList.contains('dark');
}

}
