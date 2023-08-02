import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.css']
})
export class DisplayWordComponent {
  
  @Input() displayWord!: string;

  constructor() {}

}
