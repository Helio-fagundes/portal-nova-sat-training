import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {delay, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor(private router: Router) {}

  login(email:String, password:String): Observable<String> {
    const fakeUser = {
      email: 'teste@teste.com',
      password: '123456'
    }

    if(email === fakeUser.email && password === fakeUser.password) {
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substring(2);
      localStorage.setItem(this.TOKEN_KEY, fakeToken);
      console.log("LocalStorage foi escrito!");
      return of(fakeToken).pipe(delay(1000));
    }
    return throwError(() => new Error('Credenciais inválidas'));
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

