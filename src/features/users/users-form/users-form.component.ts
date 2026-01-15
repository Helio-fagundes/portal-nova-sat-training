import { ToggleMenuService } from './../service/ToggleMenuService';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../../widgets/layout/header/header.component";
import { NavbarComponent } from "../../../widgets/layout/navbar/navbar.component";
import { UsersServiceService } from '../service/usersService.service';
import { UsersInterface} from '../interface/UsersInterface';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from "../users-list/users-list.component";
import { FormsModule } from "@angular/forms";
import { UiComponentPopup } from "../../../shared/popus/ui/ui.component";
import { ValidationUtils } from '../../../utils/ValidationUtils';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-users-form',
  imports: [HeaderComponent, NavbarComponent, CommonModule, UsersListComponent, FormsModule, UiComponentPopup],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {
  user: UsersInterface = {
    id: '',
    name: '',
    email: '',
    password: ''
  };

  protected popupPostCreated: boolean = false;
  protected popupPostError: boolean = false;
  public menuIsOpen: boolean = false;
  public menuIsOpenUsers: boolean = false;


  showPopup(){

    if(this.popupPostCreated){
      this.popupPostCreated = false;
    }

    if(this.popupPostError){
      this.popupPostError = false;
    }

  }

  listaUsuarios: UsersInterface[] = [];

  constructor(public userService: UsersServiceService,
              public toggleMenuService: ToggleMenuService
  ){}

  toggleMenu() {
      this.toggleMenuService.toggleMenu();
    }

  getListaUsuarios(): void{
    this.userService.get().subscribe((user) => this.listaUsuarios = user)
  }

  async postAdicionarUsuarios(): Promise<void>{

    if (!this.user.name || !this.user.email || !this.user.password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if(!ValidationUtils.validationEmail(this.user.email)){
      alert('Email inválido. Por favor, insira um email válido.');
      return;
    }

    if(!ValidationUtils.validationPassword(this.user.password)){
      alert('Senha inválida. A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
      return;
    }

    if(!ValidationUtils.validationName(this.user.name)){
      alert('Nome inválido. O nome deve ter pelo menos 4 caracteres e não conter números ou caracteres especiais.');
      return;
    }
    const users = await firstValueFrom(this.userService.getByEmail(this.user.email));
    if (users && users.length > 0) {
      alert('Email já existe! Por favor, use outro email.');
      return;
    }

    const userToCreate = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password
    };

    this.userService.post(userToCreate).subscribe({
      next: (response) => {
        console.log('Post criado com sucesso', response);

        this.user = { id: '', name: '', email: '', password: '' };

        this.toggleMenuService.toggleMenu();
        this.popupPostCreated = true;
      },
      error: (error) => {
        console.log('o post não foi criado', error);
        this.popupPostError = true;
      }
  });
}
}

