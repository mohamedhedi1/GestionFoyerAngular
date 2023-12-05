import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bloc } from '../../models/bloc';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  URL = "http://localhost:9090/bloc"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  addBloc(idfoyer: number, bloc: Bloc) {
    return this.http.post<Bloc>(`${this.URL}/addBloc/${idfoyer}`, bloc, this.httpOptions);
  }

  getBlocById(id: number) {
    return this.http.get<Bloc>(`${this.URL}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching bloc by ID:', error);
        return throwError(error);
      })
    );
  }

  getAll() {
    return this.http.get<Bloc[]>(this.URL);
  }

  updateBloc(bloc: Bloc) {
    return this.http.put(this.URL + '/updateBloc', bloc, this.httpOptions);
  }

  deleteBloc(id: number) {
    let URL2 = this.URL + "/" + id;
    return this.http.delete<Bloc>(URL2, this.httpOptions);
  }
}
