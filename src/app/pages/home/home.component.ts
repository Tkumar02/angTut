import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  postArray: Array<any> = []
  featuredArray: Array<any> = []
  latestArray: Array<any> = []

  constructor(private postService: PostService){};

  ngOnInit(): void {

    this.postService.loadFeatured().subscribe(val=>{
      this.featuredArray = val;
      console.log(this.featuredArray, 'in the function')
    })

    this.postService.loadLatest().subscribe(val=>{
      this.latestArray = val;
    })

    console.log(this.featuredArray, 'coming from home component')
  }
}
