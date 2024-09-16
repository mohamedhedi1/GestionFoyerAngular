import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../models/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  URL ="http://localhost:9090/chambres";

  constructor(private _http: HttpClient) {
   }

   addChambre(chambre: Chambre)
  {
    return this._http.post(this.URL,chambre);
  }

  getAllChambres()
  {
    return this._http.get<Chambre[]>(this.URL);
  }

  getChambreById(id: number)
  {
    return this._http.get<Chambre>(this.URL+'/'+id);
  }

  updateChambre(chambre: Chambre)
  {
    return this._http.put(this.URL,chambre);
  }

  deleteChambre(id: number)
  {
    
    return this._http.delete(this.URL+'/'+id);
  }
  getBlocs()
  {
    return this._http.get("http://localhost:9090/blocs")
  }

}
