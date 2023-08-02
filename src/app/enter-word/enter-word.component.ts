import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-word',
  templateUrl: './enter-word.component.html',
  styleUrls: ['./enter-word.component.css']
})
export class EnterWordComponent {

  wordToDisplay: string = 'Display this word!';
  wordToApp: string = 'this is the word, ok?';
  bgColour: boolean = true;
  @Output() emitThis = new EventEmitter<string>();
  
  constructor () {}

  sendFunction(){
    this.emitThis.emit(this.wordToApp);
  }

  checkCode($event:any){
    let kC = $event.keyCode;
    this.bgColour = (kC==65) ? !this.bgColour : this.bgColour;
    console.log(kC, this.bgColour)
    console.log($event.target.value,'left')
  }

  enterKey(){
    console.log('woah')
  }

  copyWord(thisBox: any) {
    console.log(thisBox, 'right')
  }

}
