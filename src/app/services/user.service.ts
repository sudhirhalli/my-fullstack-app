import { inject, Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //constructor(private http:HttpClient){}
  private http=inject(HttpClient);
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/api/users/${id}`);
  }
}
