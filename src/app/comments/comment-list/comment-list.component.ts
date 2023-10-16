import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  
  commentsArray: Array<any> = []
  postId: any
  reply: boolean = false

  constructor(private commentService: CommentsService, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.route.params.subscribe(val=>{
      this.postId=val
    })
    this.commentService.loadComments(this.postId).subscribe(val=>(
      this.commentsArray = val
    ))
  }

  replyNow(){
    this.reply = true
  }
}
