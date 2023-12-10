import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';
import { Foyer } from '../models/foyer';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  URL = "http://localhost:9090/reservations"
  constructor(private http: HttpClient) { }

  httpOtions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  AddReservation(id : string,cin:string) {
    
    return this.http.post<any>(this.URL+"/"+ id+"/"+cin, this.httpOtions)

  }
  deleteReservation(cin:string){
    return this.http.post<any>(this.URL+"/annulerReservation/"+cin, this.httpOtions)

  }
  getFoyerById(id:number){
    return this.http.get<Foyer>(`${this.URL}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching user by ID:', error);
        return throwError(error);
      })
    );
  }
  getall(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.URL}/getAll`).pipe(
      catchError((error) => {
        console.error('Error fetching foyers:', error);
        return throwError(error);
      })
    );
  }
  
  updateFoyer(foyer : Foyer){
    //let id = foyer.id;
    return this.http.put(this.URL +'/updateFoyer', foyer,this.httpOtions);
  }
  deleteFoyer(id: number) {
    let URL2 = this.URL + "/" + id;
    return this.http.delete<Foyer>(URL2,this.httpOtions)
  }
}
