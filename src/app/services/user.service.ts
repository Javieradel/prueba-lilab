import { Injectable } from '@angular/core';
import { user, userFull } from 'src/app/shared/users.interface'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
    this.userId = localStorage.getItem('user') || ''
  }
  userId: string
  private currentUserData!: user
  public setNewUser(user: user){
    this.currentUserData = user 
  }
  public getUser(){
    
    return {...this.currentUserData} 
  }
  public getUserId(){
    
    return this.userId 
  }

}
