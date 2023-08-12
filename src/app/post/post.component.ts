import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postArray: Array<string> = ['Post 1','Post 2','Post 3','Post 4', 'Post 5']
  postObject: Array<any> = []
  
  lastPost: number = 0
  newTitle: string = ''
  
  addPost(){
    this.lastPost = this.postObject.length + 1
    this.newTitle = 'Post ' + this.lastPost
    this.postObject.push({title:this.newTitle, id:this.lastPost})
  }
  deletePost(i:number){
    console.log(i,'this is i')
    this.postObject.splice(i,1)
    console.log(this.postObject.length, 'length')
  }
}
