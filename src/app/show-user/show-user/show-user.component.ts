import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data/user-data.service'

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  userData: object;

  constructor(
    private userDataService: UserDataService,
  ) {
    this.userDataService.userData$.subscribe(data => {
      this.userData = data;
    })
   }

  ngOnInit() {
  }

}
