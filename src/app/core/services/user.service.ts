import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  URL="http://localhost:9090/users"
  URL2="http://localhost:9090/authenticate/register"

  constructor(private _http: HttpClient) { }

 

  getAllUsers():any
  {
    return this._http.get(this.URL);
  }

  deleteUser(id: number)
  {
    return this._http.delete(this.URL+'/'+id);
  }
  addUser(user:any)
  {
    return this._http.post(this.URL2,user);
  }
  findStudentIdByEmail(email:string)
  {
    return this._http.get(this.URL+"/findStudentIdByEmail/"+email);
  }

  getUser(email: any)
  {
    return this._http.get<User>(this.URL+"/UserByEmail/"+email)
  }
  getUserById(id: number) {
    return this._http.get<User>(this.URL+"/id/"+id);
   }

   updateUser(user: any) {
    return this._http.put(this.URL,user)
  }

  



}
