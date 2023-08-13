import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  posts: Array<any> = []

  constructor(private postService:PostService){
    this.posts = postService.postList;
  }

  addData(){
    let num = this.posts.length + 1
    let newPost:Post = {id: num, title:'post'+num}
    this.postService.addPost(newPost)
  }
}
