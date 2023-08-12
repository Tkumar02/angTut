import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  form: string = ''
  changeForm(status:string){
    this.form = status
    console.log(this.form)
  } 
}
