import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface User{
  id:number;
  name:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private apiUrl='https://jsonplaceholder.typicode.com/users';
  private apiUrl='http://localhost:8080/api/users';
  constructor(private http: HttpClient) {}
  getUserData():Observable<User[]>
  {
    return this.http.get<User[]>(this.apiUrl);
  }
}
