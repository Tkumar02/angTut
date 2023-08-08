import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  link: string = 'https://img.freepik.com/free-vector/white-goat-cartoon-character_1308-108587.jpg?w=2000'
 
  constructor() {
    console.log("what happens here?")
  }

  viewLink($event:any){
    console.log($event)
    this.link=$event
  }

}
