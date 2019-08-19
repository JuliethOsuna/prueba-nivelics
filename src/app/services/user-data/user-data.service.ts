import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataSubject$ = new BehaviorSubject<object>({});
  public userData$ = this.userDataSubject$.asObservable();

  constructor() { }

  setUserData(userData){
    this.userDataSubject$.next(userData);
    console.log(userData);
  }
}
