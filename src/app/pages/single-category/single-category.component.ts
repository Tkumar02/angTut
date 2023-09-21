import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {
  catPosts: Array<any> = [];
  title: string = ''

  constructor(private route: ActivatedRoute, private postService: PostService){}

  ngOnInit():void{
    this.route.params.subscribe(val=>{
      this.title = val['category'];
      this.postService.loadCategoryPosts(val['id']).subscribe(newVal=>{
        this.catPosts = newVal;
      })
    })
  }
}
