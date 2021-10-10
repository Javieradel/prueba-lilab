import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/user.service';
import { Post, response, Comment, newComment } from '../users.interface';

@Component({
  selector: 'app-slide-over-comment',
  templateUrl: './slide-over.component.html',
  styleUrls: ['./slide-over.component.scss']
})
export class SlideOverComponent implements OnChanges {
  
  constructor(
    private _http: CrudService,
    private _user: UserService
    ) {

    this.getComments()
   }
@Input() open: boolean = false
@Input() data!: string
@Output() closeModal= new EventEmitter()
currentPostData: Comment[] = []
total: number = -1

currentComment!: string

close(){
    this.closeModal.emit('close')
    this.currentPostData = []
    this.total = -1
  }
  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log('change',this.data)
    this.getComments()
  }
  getComments(){
    if(this.data){
      this._http.getCommentOfPost(this.data).subscribe( (r: response) =>  {
        const { data, total } = r
        this.currentPostData.push(...data) 
        console.log(this.currentPostData)
        this.total = total
      })
    }
  }
  makeComment(){
    if(this.currentComment){
      let request: newComment = {
        message: this.currentComment,
        owner: this._user.getUserId(),
        post: this.data
      }
      console.log(request, this._user.getUser().id)
      this._http.makeComment(request).subscribe(
        r => {
          this.currentPostData.push(r)
          this.currentComment=''
        }
      ,e => console.log(e))
    }

  }
}

