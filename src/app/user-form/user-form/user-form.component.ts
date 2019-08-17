import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  userForm: FormGroup;
  userInfo: object;

  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.email],
      telefono: ['', Validators.required],
      fecha_de_nacimiento: ['', Validators.required]
    })
   }

   submitForm() {
     let credentials = this.userForm.value;
     console.log(credentials);
   }


}
