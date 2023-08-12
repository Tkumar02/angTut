import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  changeStyle: boolean = false
  
  change(){
    this.changeStyle = !this.changeStyle
  }
}
