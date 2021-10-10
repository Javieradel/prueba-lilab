import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Post } from '../users.interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
@Input('data') postData!: Post
@Output('commentPost') commentPost = new EventEmitter<Post>();

  setLike(){
    // remote likes not allowed by api
    this.postData.liked = this.postData.liked == true ? false : true 
    this.postData.likes += 1 
  }
  comment(){
    this.commentPost.emit(this.postData)
  }
  
  ngOnInit(): void {
  }

}
