import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custome-button',
  templateUrl: './custome-button.component.html',
  styleUrls: ['./custome-button.component.css']
})
export class CustomeButtonComponent {

  constructor() { }

  @Input() label: string;

  @Input() styles: object = {
    color: "blue"
  };

}
