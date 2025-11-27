import { User } from './../interface/User';
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

  user: User = {
  name: '',
  email: '',
  password: ''
};

  constructor(public authService: AuthService,
              public router: Router) {
  }

  protected toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  protected menuIsOpen: Boolean = false;

  validationName(name: string): any{
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{4,}$/;
    switch(name.length > 0){
      case name === ' ':
        Swal.fire('Error','o nome não pode ser nulo ou vazio', 'warning')
        return false;
      case name.length < 4:
        Swal.fire('Error','o nome não pode conter menos que 4 digitos', 'warning')
        return false;
      case (!regexName.test(name)):
        Swal.fire('Error','o nome não pode conter caracteres especias ou numeros', 'warning')
        return false;
    }
    return true;
  }

  validationEmail(email: string): any{
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch(email.length > 0){
      case email === ' ':
        Swal.fire('Error','o email não pode ser nulo ou vazio', 'warning')
        return false;
      case email.length < 5:
        Swal.fire('Error','o email precisa ter no minimo 5 digitos', 'warning')
        return false;
      case (!regexEmail.test(email)):
      Swal.fire('Error','email está invalido, confira o email e coloque um email valido', 'warning')
      return false;
    }
    return true;
  }

  validationPassword(password: string): any{
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    switch(password.length > 0){
      case password === ' ':
        Swal.fire('Error','a senha não pode ser vazia ou nula', 'warning')
        return false;
      case password.length < 8:
        Swal.fire('Error','a senha precisa ter no minimo 8 digitos', 'warning')
        return false;

      case (!regexSenha.test(password)):
        Swal.fire('Error','a senha é invalida, porfavor, coloque uma senha valida', 'warning')
        return false;
    }
    return true;
  }



  addUser(){
    const isNameValid = this.validationName(this.user.name);
    const isEmailValid = this.validationEmail(this.user.email);
    const isPasswordValid = this.validationPassword(this.user.password);

    if(isNameValid && isEmailValid && isPasswordValid){
      this.authService.addUser(this.user);
        Swal.fire('Usuário Criado', 'O usuário foi criado com sucesso!', 'success')
        this.menuIsOpen = !this.menuIsOpen;
    }
  }

  login() {
    const isEmailValid = this.validationEmail(this.user.email);
    const isPasswordValid = this.validationPassword(this.user.password);

    if(isEmailValid && isPasswordValid){
      this.authService.login(this.user.email, this.user.password)
        Swal.fire('Conectado', 'Credencias corretas, Bom Trabalho!', 'success')
        this.router.navigate(['/home']);
    }
  }
}
