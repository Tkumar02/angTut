import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  postArray: Array<any> = []

  constructor(){}

  @Input() postData: any = {};

  ngOnInit(): void {
    console.log(this.postData)
  }
}
