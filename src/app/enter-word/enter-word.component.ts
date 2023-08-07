import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent {
  
  inputWord:string = '';
  hide: boolean = true;
  chosenWord: string = '';
   
  @Output() word = new EventEmitter<string>();

  constructor () {}

  showWord($event: any){
    this.hide = ($event.keyCode == 13) && (this.inputWord.length==5) ? false : true
  }

  submitWord(){
    console.log(this.inputWord)
    this.word.emit(this.inputWord)
    this.chosenWord = ''
  }
}
