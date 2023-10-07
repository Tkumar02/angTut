import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  currentPost: any = {};
  catPosts: Array<object> = []

  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void{
    console.log('TA LOOK HERE')
    this.route.params.subscribe(val=>{
      this.postService.countViews(val['id'])
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        this.currentPost = post;
        console.log(this.currentPost.category)
        this.postService.loadCategoryPosts(this.currentPost.category.categoryId).subscribe(val=>{
          this.catPosts = val
        })
      })
    }
  )
  }
}
