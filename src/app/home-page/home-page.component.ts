import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Input() word: any;
  chosenWord: string = ''
  show: boolean = false

  constructor(){}
  
  showWord(word:any){
    console.log(word,'button')
    this.chosenWord = word
  }

  displayWord(){
    this.show = true
    console.log('here',this.word)
  }
}
