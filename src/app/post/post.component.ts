import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = "List of posts";
  postMessageD:string = 'Coming from parent post component';
  childMessage:any = 'from child component';
  outputChildMessage: any = 'message via output Post'

  @Input() fromParentApp!: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor () {}

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }
}
