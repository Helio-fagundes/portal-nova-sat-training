import { Injectable } from '@angular/core';
import { UsersInterface } from '../interface/UsersInterface';
import {Observable, map, catchError, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = '/users';

  get(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(this.apiUrl);
  }

  getById(id: string): Observable<UsersInterface> {
    return this.http.get<UsersInterface>(`${this.apiUrl}/${id}`);
  }

  getByEmail(email: string): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(`${this.apiUrl}/email/${email}`)
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            return of([]);
          }
          throw err;
        })
      );
  }

  getByName(name: string): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(this.apiUrl).pipe(
      map((usuarios: UsersInterface[]) =>
        usuarios.filter((x) =>
          x.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }

  post(user: any): Observable<UsersInterface> {
    return this.http.post<UsersInterface>(this.apiUrl, user);
  }

  patch(id: string, user: any): Observable<UsersInterface> {
    return this.http.patch<UsersInterface>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
