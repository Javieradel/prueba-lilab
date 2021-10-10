import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CrudService } from 'src/app/services/crud.service';
import { SlideOverComponent } from 'src/app/shared/slide-over/slide-over.component';
import { Post, user } from 'src/app/shared/users.interface';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  constructor(private _http: CrudService,
    private router: ActivatedRoute,
    private Rot: Router
    ) { 
      this.byTag = this.router.snapshot.params.tag
    }
  byTag= 'empty'
  posts: Post[] = []
  user!: user
  numberOfPost: number = 0
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
    // error with param on suscribe, no allow set type
    if(this.byTag == ''){
      console.log('byTag')
      this._http.getPostByTag(this.byTag).subscribe((r: any) => {
        const data = r.data
        this.posts.push(...data)
        console.log(this.posts)
        
      })
    }else{
      
      console.log('NOTag')
      this._http.getPost().subscribe((r: any) => {
        const data = r.data
        this.posts.push(...data)
        console.log(this.posts)
  
      })
    }
    /// POST BY TAG API NOT WORK
    this.Rot.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this._http.getPostByTag(this.byTag).subscribe((r: any) => {
        const data = r.data
        this.posts.push=data
        console.log(this.posts)
      })
    });
  }

}
