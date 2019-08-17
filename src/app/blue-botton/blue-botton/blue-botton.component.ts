import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-botton',
  templateUrl: './blue-botton.component.html',
  styleUrls: ['./blue-botton.component.css']
})
export class BlueBottonComponent   {

  constructor() { }

  blueLabel = "Im blue";
  blueStyle = {
    color: "blue",
    'margin-right': "10px"
  }

}
