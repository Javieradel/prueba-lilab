import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storage = window.localStorage

  public setUser( userId: string ) {
    this.storage.setItem('user', userId)
  }
  public isAuth(): boolean{
    return this.storage.getItem('user') ? true : false
  }
  public logout() {
    localStorage.clear();
  }
  constructor() { }
}
