import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  posts: Array<any> = []

  constructor(private postService: PostService){}

  ngOnInit(): void{
    // this.postService.loadFeatured().subscribe(val=>{
    //   this.posts = val;
    // })
    this.postService.loadFeatured().subscribe(val=>{
      this.posts = val;
    })
    console.log(this.posts,'single component ts')
  }
}
