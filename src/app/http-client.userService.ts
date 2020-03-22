import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./shop/users/User";

const BASE_URL = 'http://localhost:8080/api';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientUserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${BASE_URL}/users`)
  }

  removeUser(id: number) {
    return this.httpClient.delete(`${BASE_URL}/users/remove/${id}`)
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${BASE_URL}/users/single/${id}`)
  }

  saveUser(user: User) {
    return this.httpClient.post(`${BASE_URL}/users/save`, JSON.stringify(user), HTTP_OPTIONS);
  }


}
