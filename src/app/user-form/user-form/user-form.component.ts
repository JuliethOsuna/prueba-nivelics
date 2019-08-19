import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data/user-data.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  userForm: FormGroup;
  userInfo: object;

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
  ) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.email],
      telefono: ['', Validators.required],
      fecha_de_nacimiento: ['', Validators.required]
    })
   }

   submitForm() {
     let userData = this.userForm.value;
     this.userDataService.setUserData(userData);
   }


}
