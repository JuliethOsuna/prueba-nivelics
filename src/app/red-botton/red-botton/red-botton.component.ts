import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-botton',
  templateUrl: './red-botton.component.html',
  styleUrls: ['./red-botton.component.css']
})
export class RedBottonComponent {

  constructor() { }

  redLabel = "Im red"
  redStyle = {
    color: "red",
    background: "pink"
  }

}
