import { Component, OnInit,Input } from '@angular/core';
import { Jewel } from '../shared/dish';
import { DISHES } from '../shared/dishes'; 
import { DishService } from '../services/dish.service'; 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 

   @Input()
  dish: Jewel;
   dishes: Jewel[];
   
   currentIndex: any = -1;
  showFlag: any = false;
   imageObject: Array<object>=DISHES;
   showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

}
