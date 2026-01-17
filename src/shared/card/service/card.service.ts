import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Cards} from '../interface/cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = '/sat';
  private cardsSource = new BehaviorSubject<Cards[]>([]);
  cards$ = this.cardsSource.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cards[]> {
    return this.http.get<Cards[]>(this.apiUrl);
  }

  getByNumber(numberPaIc: number): Observable<Cards> {
    return this.http.get<Cards>(`${this.apiUrl}/${numberPaIc}`);
  }

  create(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
