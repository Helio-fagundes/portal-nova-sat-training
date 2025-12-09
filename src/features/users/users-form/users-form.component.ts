import { Component } from '@angular/core';
import { HeaderComponent } from "../../../widgets/layout/header/header.component";
import { NavbarComponent } from "../../../widgets/layout/navbar/navbar.component";
import { UsersServiceService } from '../service/usersService.service';
import { UsersInterface} from '../interface/UsersInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-form',
  imports: [HeaderComponent, NavbarComponent, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {

  newUser = {
    name: 'torres',
    email: 'teste@teste.com',
    password: '12345'
  }

  listaUsuarios: UsersInterface[] = [];

  constructor(public userService: UsersServiceService){}


  getListaUsuarios(): void{
    this.userService.get().subscribe((user) => this.listaUsuarios = user)
  }

  postAdicionarUsuarios(): void{
    this.userService.post(this.newUser).subscribe({
      next: (response) => {
        console.log('Post criado com sucesso', response);
        this.newUser = {name: '', email: '', password: ''};
      },
      error: (error) => {
        console.log('o post não foi criado', error);
      }
    })
  }

  deleteUsuario(id: string): void{
    this.userService.delete(id).subscribe({
      next: (response) => {
        console.log('Usuário deletado com sucesso', response);
      },
      error: (error) => {
        console.log('Erro ao deletar o usuário', error);
      }
    })
  }

  putUsuario(id: string): void{
    const updatedData = {
      name: 'Nome Atualizado',
      email: 'helioemvezdisso32@gmail.com',
      password: 'hallo32K@'
    };
    this.userService.path(id, updatedData).subscribe({
      next: (response) => {
        console.log('Usuário atualizado com sucesso', response);
      },
      error: (error) => {
        console.log('Erro ao atualizar o usuário', error);
      }
    });
  }
}
