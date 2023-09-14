import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {

  catArray: Array<any> = []

  constructor(private catService: CategoriesService) {}

  ngOnInit(): void {
    this.catService.loadData().subscribe(val=>{
      this.catArray = val;
      console.log(this.catArray)
    })
    
  }



}
