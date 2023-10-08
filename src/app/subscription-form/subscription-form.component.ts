import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  constructor (private subService:SubscribersService){}

  subData!: Sub;
  error: boolean = false;
  subscribed: boolean = false;

  ngOninit():void{}

  onSubmit(formVal:any){
    this.subData = {
      name: formVal.name,
      email: formVal.email
    }
    this.subService.checkSubs(this.subData.email).subscribe(val=>{
      if(val.empty){
        this.subService.addSubs(this.subData)
        this.subscribed=true
        this.error = false
      }
      else{
        this.error=true;
        this.subscribed = false;
      }
    })
  }
  
}
