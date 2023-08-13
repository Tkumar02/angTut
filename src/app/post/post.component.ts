import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    const obstest$ = new Observable (observer=>{
      observer.next('printed from observable in Post Component');
      observer.next(2)
      observer.next(false)
    }).subscribe(value=>{
      console.log(value)
    });
  }
}
