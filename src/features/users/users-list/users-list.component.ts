import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../../../widgets/layout/header/header.component";
import {NavbarComponent} from "../../../widgets/layout/navbar/navbar.component";
import {UsersInterface} from '../interface/UsersInterface';
import {UsersServiceService} from '../service/usersService.service';
import { CommonModule } from '@angular/common';
import {SearchUserComponent} from '../../../shared/search-user/search-user.component';

import { Subject, debounceTime } from 'rxjs';
import { ToggleMenuService } from '../service/ToggleMenuService';

@Component({
  selector: 'app-users-list',
  imports: [
    FormsModule,
    HeaderComponent,
    NavbarComponent,
    ReactiveFormsModule,
    CommonModule,
    SearchUserComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  public menuIsOpen = true;

  protected currentPage = 1;
  protected limit = 10;
  listaUsuarios: UsersInterface[] = [];
  allUsers: UsersInterface[] = [];
  showEditUserPopup = false;
  editingUserId: string = '';

  newUser: UsersInterface = {
    id: '',
    name: '',
    email: '',
    password: ''
  };

  private searchSubject = new Subject<string>();

  constructor(public userService: UsersServiceService,
              public toggleMenuService: ToggleMenuService
  ) {}

  toggleMenu() {
    this.toggleMenuService.toggleMenu();
  }

  ngOnInit() {
    this.loadUsers();

    this.searchSubject
      .pipe(debounceTime(1000))
      .subscribe(value => {
        this.getUsersByName(value);
      });
  }

   loadUsers() {
    this.userService.get().subscribe(users => {
      this.allUsers = users;
      this.updatePagination();
    });
  }

  updatePagination(){
    const startIndex = (this.currentPage - 1) * this.limit;
    const endIndex = startIndex + this.limit;

    this.listaUsuarios = this.allUsers.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if(this.currentPage * this.limit < this.allUsers.length){
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  keyDownFunction(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  getUsersByName(name: string): void {
  if (!name) {
    this.currentPage = 1;
    this.loadUsers();
    return;
  }

  this.userService.getByName(name).subscribe(users => {
    this.allUsers = users;
    this.currentPage = 1;
    this.updatePagination();
  });
}

  editUser(id: string, user: UsersInterface): void {
    this.showEditUserPopup = true;
    const name = this.newUser.name;
    const email = this.newUser.email;
    const password = this.newUser.password;

    if (!name || !email || !password) return;

    const updatedUser = { ...user, name, email, password };

    this.userService.path(id, updatedUser).subscribe(() => {
      const index = this.allUsers.findIndex(u => u.id === user.id);
      this.allUsers[index] = updatedUser;
      this.updatePagination();
      this.showEditUserPopup = false;
    });
}

  deleteUser(id: string): void {
  if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

  this.userService.delete(id).subscribe(() => {
    this.allUsers = this.allUsers.filter(u => u.id !== id);
    this.updatePagination();
  });
}

openEditUser(user: UsersInterface) {
  this.showEditUserPopup = true;
  this.editingUserId = user.id;

  this.newUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    password: ''
  };
}

submitEditUser() {
  const updatedUser = { ...this.newUser };

  this.userService.path(this.editingUserId, updatedUser).subscribe(() => {
    const index = this.allUsers.findIndex(u => u.id === this.editingUserId);
    this.allUsers[index] = updatedUser;

    this.updatePagination();
    this.showEditUserPopup = false;
  });
}
}
