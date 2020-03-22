import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../users/User";
import {UserStorageService} from "../../../user-storage.service";
import {HttpClientUserService} from "../../../http-client.userService";

@Component({
  selector: 'app-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})

export class UserEditorComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private router: Router,
              private activeRoute: ActivatedRoute,
              private httpClient: HttpClientUserService) { }

  ngOnInit(): void {
    this.getUserToEdit()
  }

  user: User = new User();

  saveUser(user: User) {
    this.httpClient.saveUser(user).subscribe(s => {
      this.router.navigate(['/shop/users']);
    });
  }

  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.httpClient.getUser(Number.parseInt(id)).subscribe(u => this.user = u);
      }
    })
  }
}
