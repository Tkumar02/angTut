import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  posts: Array<any> = [];
  currentPost: any = {};
  featured: Array<any> = [];
  ID: any = '';

  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(val=>{
      this.ID = val['id'];
    })
    this.postService.loadFeatured().subscribe(val=>{
      this.featured = val;
      console.log(this.featured, 'channel 5')
    })
    this.postService.loadData().subscribe(val=>{
      this.posts = val;
      for(let post of this.posts){
        if(post.id == this.ID){
          this.currentPost = post
        }
      }
    })
  }
}
