import { Injectable } from '@angular/core';
import { Universite } from '../../models/Universite';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  URL = "http://localhost:9090/universite"; // Update the URL to use "universite" instead of "foyer"

  constructor(private http: HttpClient) { }

  httpOtions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  addUniversite(universite: Universite) {
    const url = 'http://localhost:9090/universite/addUniversite';
    console.log(universite)// Update with your actual URL




    return this.http.post(url, universite);
  }

  getUniversiteById(id: number) { // Change method name
    return this.http.get<Universite>(`${this.URL}/${id}`,this.httpOtions).pipe(
      catchError(error => {
        console.error('Error fetching universite by ID:', error);
        return throwError(error);
      })
    );
  }

  getAll() { // Change method name
    return this.http.get<Universite[]>(this.URL);
  }

  updateUniversite(universite: Universite) { // Change method name and parameter name
    return this.http.put(this.URL + '/updateUniversite', universite, this.httpOtions); // Update method name and parameter name
  }

  deleteUniversite(id: number) { // Change method name
    let URL2 = this.URL + "/" + id;
    return this.http.delete<Universite>(URL2, this.httpOtions);
  }
}

