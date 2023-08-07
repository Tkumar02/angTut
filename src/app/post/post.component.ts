import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title: any = '';
  imageLink: any = '';
  noBG: boolean = false;
  
  @Output() sendLink = new EventEmitter<string>

  constructor () {}

  changeColour(){
    this.noBG = !this.noBG
    console.log('pressed')
    if(this.noBG){
      console.log('on')
    }
    else{
      console.log('off')
    }
  }

  emitLink(){
    this.sendLink.emit(this.imageLink)
  }
}
