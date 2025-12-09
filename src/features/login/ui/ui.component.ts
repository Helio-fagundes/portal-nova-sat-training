import { User } from './../interface/User';
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {UiComponentPopup} from '../../../shared/popus/ui/ui.component';
import {UsersServiceService} from '../../users/service/usersService.service';
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

  user: User = {
  name: '',
  email: '',
  password: ''
};

  constructor(public authService: AuthService,
              public router: Router,
              public userService: UsersServiceService) {
  }

  protected toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
  protected menuIsOpen: Boolean = false;
  protected popupRegisterToggle: boolean = false;
  protected popupLoginToggle: boolean = false;
  protected popupErrorToggle: boolean = false;
  protected popupEmailExistsToggle: boolean = false;

  verifyTheme(){
    return document.documentElement.classList.contains('dark');
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

  validationName(name: string): any{
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{4,}$/;
    switch(name.length > 0){
      case name === ' ':
        return false;
      case name.length < 4:
        return false;
      case (!regexName.test(name)):
        return false;
    }
    return true;
  }

  validationEmail(email: string): any{
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch(email.length > 0){
      case email === ' ':
        return false;
      case email.length < 5:
        return false;
      case (!regexEmail.test(email)):
      return false;
    }
    return true;
  }

  validationPassword(password: string): any{
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    switch(password.length > 0){
      case password === ' ':
        return false;
      case password.length < 8:
        return false;
      case (!regexSenha.test(password)):
        return false;
    }
    return true;
  }

  addUser() {
    const isNameValid = this.validationName(this.user.name);
    const isEmailValid = this.validationEmail(this.user.email);
    const isPasswordValid = this.validationPassword(this.user.password);

    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      this.popupErrorToggle = true;
      return;
    }

    this.userService.getByEmail(this.user.email).subscribe({
      next: (users) => {
        if (users.length > 0) {
          this.popupEmailExistsToggle = true;
          return;
        }

        this.authService.addUser(this.user);
        this.popupRegisterToggle = true;
        this.menuIsOpen = false;
      },
      error: (err) => {
        console.error('Erro ao buscar email', err);
        this.popupErrorToggle = true;
      }
    });
  }


  login() {
    const isEmailValid = this.validationEmail(this.user.email);
    const isPasswordValid = this.validationPassword(this.user.password);

    if (!isEmailValid || !isPasswordValid) {
      this.popupErrorToggle = true;
      return;
    }

    this.authService.login(this.user.email, this.user.password).subscribe({
      next: () => {
        this.popupLoginToggle = true;
      },
      error: () => {
        this.popupErrorToggle = true;
      }
    });
  }


}
