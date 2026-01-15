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
  private ApiUrl = 'http://localhost:8080/auth';

  constructor(private router: Router,
              private userService: UsersServiceService,
              private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.ApiUrl}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.ApiUrl}/login`, { email, password });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}

