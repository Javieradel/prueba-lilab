import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/user.service';
import { PostComponent } from 'src/app/shared/post/post.component';
import { SlideOverComponent } from 'src/app/shared/slide-over/slide-over.component';
import { Post, user, userFull } from 'src/app/shared/users.interface';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  constructor(
    private rutaActiva: ActivatedRoute,
    private _http: CrudService,
    private Rot: Router
    ) { }

    user!: user
    numberOfPost: number = 0
    posts: Post[] = []
    byTag= 'empty'
    
    open: boolean = false
    currentOpenedBoxData!: string
    close(){
    this.currentOpenedBoxData = ''
    this.open=false
    }
    comment(event: Post){
      this.currentOpenedBoxData = event.id
      this.open = true
    }
    
    ngOnInit(): void {
    this._http.getUser(this.rutaActiva.snapshot.params.id).subscribe( (r: any) =>{
      this.user = r
      console.log(r)
    })
    this._http.getUserPost(this.rutaActiva.snapshot.params.id).subscribe((r: any) => {
      const data = r.data
      this.posts.push(...data)
      this.numberOfPost = r.total

    })
  }

}
