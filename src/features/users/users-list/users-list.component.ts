import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "../../../widgets/layout/header/header.component";
import {NavbarComponent} from "../../../widgets/layout/navbar/navbar.component";
import {UsersInterface} from '../interface/UsersInterface';
import {UsersServiceService} from '../service/usersService.service';
import { CommonModule } from '@angular/common';
import {SearchUserComponent} from '../../../shared/search-user/search-user.component';

import { Subject, debounceTime } from 'rxjs';

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

  protected popupPostCreated = false;
  protected popupPostError = false;
  public menuIsOpen = false;

  listaUsuarios: UsersInterface[] = [];

  private searchSubject = new Subject<string>();

  constructor(public userService: UsersServiceService) {}

  ngOnInit() {
    this.getListaUsuarios();

    this.searchSubject
      .pipe(debounceTime(1500))
      .subscribe(value => {
        this.getUsersByName(value);
      });
  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  getListaUsuarios(): void {
    this.userService.get().subscribe(user => this.listaUsuarios = user);
  }

  keyDownFunction(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  getUsersByName(name: string): void {
    this.userService.getByName(name)
      .subscribe(user => this.listaUsuarios = user);
  }
}
