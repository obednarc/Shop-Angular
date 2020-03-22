import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "./shop/users/User";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  private users: User[] = [
    {id: 1, login: 'obednarc', email: 'obednarc@gmail.com', age: 30, country: 'Polska', active: true},
    {id: 2, login: 'mandrzeje', email: 'mandrzejec@gmail.com', age: 38, country: 'Włochy', active: false},
    {id: 3, login: 'dguzikow', email: 'dguzikow@gmail.com', age: 26, country: 'Polska', active: true},
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  removeUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(userIndex, 1);
  }

  private idCount: number = 4;  //bo mamy juz 3 id powyzej podane

  saveUser(user: User) {
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }
}
