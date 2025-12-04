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

  post(postData: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, postData);
  };
}
