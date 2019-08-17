import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent {

  constructor() { }

  userLabel = "Im user";
  userStyle = {
    color: "green",
    "margin-left": "10px",
    padding: "5px"
  }

}
