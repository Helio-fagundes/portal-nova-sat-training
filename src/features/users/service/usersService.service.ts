import { User } from './../../login/interface/User';
import { Injectable } from '@angular/core';
import { UsersInterface} from '../interface/UsersInterface';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

constructor(private http: HttpClient) { }

private apiUrl = '/users';

  get(): Observable<UsersInterface[]>{
    return this.http.get<UsersInterface[]>(this.apiUrl);
    };

  getById(id: string): Observable<UsersInterface>{
    return this.http.get<UsersInterface>(`${this.apiUrl}/${id}`);
  }

  getByEmail(email: string): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(`${this.apiUrl}?email=${email}`);
  }

  post(user: User): Observable<UsersInterface[]>{
    return this.http.post<any>(this.apiUrl, user);
  };

  path(id: string, user: User): Observable<UsersInterface[]>{
    return this.http.patch<any>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
