import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foyer } from '../../models/foyer';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  URL = "http://localhost:9090/foyer"
  constructor(private http: HttpClient) { }

  httpOtions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  AddFoyer(foyer : Foyer) {
    return this.http.post<Foyer>(this.URL+"/addFoyer", foyer, this.httpOtions)

  }
  getFoyerById(id:number){
    return this.http.get<Foyer>(`${this.URL}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching user by ID:', error);
        return throwError(error);
      })
    );
  }
getall(){
  return this.http.get<Foyer[]>(this.URL);
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
