import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  postArray: Array<any> = []

  constructor(private postService: PostService){};

  ngOnInit(): void {
    this.postService.loadData().subscribe(val=>{
      this.postArray = val
    })
  }
}
