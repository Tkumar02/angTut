import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  postArray: Array<any> = []

  constructor(private postService: PostService){};

  ngOnInit(): void {
    this.postService.loadData().subscribe(val=>{
      this.postArray = val
    })
  }
}
