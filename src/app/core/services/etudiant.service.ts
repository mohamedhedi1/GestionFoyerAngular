import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  URL="http://localhost:9090/etudiants";

  constructor(private _http: HttpClient) { 
  }


  addEtudiant(etudiant: Etudiant)
  {
    return this._http.post(this.URL,etudiant);
  }

  getAllEtudiants()
  {
    return this._http.get<Etudiant[]>(this.URL);
  }

  getEtudiantById(id: number)
  {
    return this._http.get<Etudiant>(this.URL+'/'+id);
  }

  updateEtudiant(etudiant: Etudiant)
  {
    return this._http.put(this.URL,etudiant);
  }

  deleteEtudiant(id: number)
  {
    
    return this._http.delete(this.URL+'/'+id);
  }



}
