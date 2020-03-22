import { Component, OnInit } from '@angular/core';
import {UserStorageService} from "../../user-storage.service";
import {User} from "./User";
import {HttpClientUserService} from "../../http-client.userService";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(private userStorage: UserStorageService, private httpClient: HttpClientUserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }


  users: User[] = [];

  getUsers() {
    this.httpClient.getUsers().subscribe(users => this.users = users);
  }

  removeUser(id: number) {
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }
}
