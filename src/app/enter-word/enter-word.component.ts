import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent {
  
  inputWord:string = ''

  constructor () {}

}
