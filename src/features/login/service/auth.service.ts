import {Injectable, output} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, catchError, delay, map, Observable, of, throwError} from 'rxjs';
import { User } from '../interface/User';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {UsersServiceService} from '../../users/service/usersService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor(private router: Router,
              private userService: UsersServiceService) {}

  addUser(user: User): void {
    this.userService.getByEmail(user.email).subscribe({
      next: (users) => {
        if (users.length > 0) {
          console.error('Email já existe!');
          return;
        }

        this.userService.post(user).subscribe({
          next: (response) => {
            console.log('Usuário criado:', response);
          },
          error: (error) => {
            console.error('Erro ao criar usuário:', error);
          }
        });
      },
      error: (error) => {
        console.error('Erro ao buscar email:', error);
      }
    });
  }

  getUsers(): Observable<User[]>{
    return this.userService.get();
  }

  login(email: string, password: string): Observable<string> {
    return this.getUsers().pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substring(2);
          localStorage.setItem(this.TOKEN_KEY, fakeToken);
          return fakeToken;
        }

        throw new Error('Credenciais inválidas');
      }),
      catchError(() => throwError(() => new Error('Credenciais inválidas')))
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

