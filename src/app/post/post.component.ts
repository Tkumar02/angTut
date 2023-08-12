import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  name: string = '';
  email: string = '';
  id: number = 0;
  address: string = '';
  completedForms: Array<any> = [];
  
  constructor() {}

  save(){
    this.id = this.completedForms.length+1
    this.completedForms.push({name1:this.name, email1:this.email, address1: this.address})
  }

  delete(i:number){
    this.completedForms.splice(i,1)
  }

}
