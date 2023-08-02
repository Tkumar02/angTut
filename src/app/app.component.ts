import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngOne';
  parentMessage: string = 'Message coming from parent component (app component)';
  message!: string;
  childMessage!: string;
  enteredWord: string='which word?';
  bool: boolean = false;
  imgAdd: string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'

  @ViewChild(PostComponent) childComp:any;
  
  constructor() {
    console.log("what happens here?")
  }

  ngAfterViewInit(): void {
    console.log(this.childComp.childMessage);
    this.message = this.childComp.childMessage;
  }
  receivedMessage($event: any){
    console.log($event);
    this.childMessage = $event;
  }

  showWord($event: any){
    this.enteredWord = $event;
  }
}
