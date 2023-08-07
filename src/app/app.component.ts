import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  link: string = 'https://www.freepik.com/free-ai-image/leafy-tree-branch-vibrant-autumn-colors-generated-by-ai_40971503.htm#query=royalty%20free&position=0&from_view=keyword&track=ais'
 
  constructor() {
    console.log("what happens here?")
  }

  viewLink($event:any){
    console.log($event)
    this.link=$event
  }

}
