import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  commentForm: any;
  submitNow: boolean = false;
  postId: any;
  data: Object = {}

  constructor(private commentsService: CommentsService, private route: ActivatedRoute) {
    this.commentForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      comment: new FormControl('',[
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.postId = val
    }) 
  }
    submitForm(form:any){
      this.submitNow = true;
      this.data = {
        name: form.name,
        comment: form.comment,
        postId: this.postId,
        date: new Date()
      }
      this.commentsService.addComment(this.data)
    }
}
