import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _user: UserService) { }
  idUser = this._user.getUserId()
  user = this._user.getUser()
  ngOnInit(): void {
  }

}
