import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-server',
  templateUrl: './user-server.component.html',
  styleUrls: ['./user-server.component.css']
})
export class UserServerComponent implements OnInit {
  configUrl = "https://jsonplaceholder.typicode.com/users";
  users;

  constructor(private http: HttpClient) {
  }
  getUsers () {
    this.http.get(this.configUrl).subscribe(data=> {
      this.users = data;
    })
  }
  ngOnInit() {
  }

}
