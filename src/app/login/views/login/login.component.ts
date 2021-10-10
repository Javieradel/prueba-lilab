// Login de prueba - API no soporta login
// para el usuario actual es usada la última
// id arrojada por la api en el endpoint /user

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { AuthService } from 'src/app/services/auth.service';
import { response, user } from 'src/app/shared/users.interface';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router,
    private _auth: AuthService,
    public _http: CrudService,
    private _user: UserService
    ) { }
  // Data de usurio de prueba
  // email
  email = 'userDefault@default.com'
  // password
  password = 'Password Default__'
  errorMesagge = 'Error: Datos Inválidos'
  error = false
  // default values
  eUser = 'userDefault@default.com'
  pUser = 'Password Default__'
  updateField(value: any, field: string ): void{ 
    console.log(value.target.value, field)
    field == 'email' ? this.email = value.target.value : this.password = value.target.value 
  }
  login() {
    if (this.email == this.eUser && this.password == this.pUser){
      this.error= false
      this._http.getUsers().subscribe((r: any) => {
        const user: user = r.data[r.data.length -1]
        this._user.setNewUser(user)
        this._auth.setUser(user.id)
        this._router.navigateByUrl('/')
      })
    } else {
      this.error= true
    }
  }

  ngOnInit(): void {
    // redireccion si ya esta logueado
    this._auth.isAuth() ? this._router.navigateByUrl('/') : ''
  }

}
