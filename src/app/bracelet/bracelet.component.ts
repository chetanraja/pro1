import { Component, OnInit,Input } from '@angular/core';
import { Jewel } from '../shared/dish';
import { BRACELET } from '../shared/dishes'; 
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss']
})
export class BraceletComponent implements OnInit {
 @Input()
  dish: Jewel;
   dishes: Jewel[];
   
   currentIndex: any = -1;
  showFlag: any = false;
   imageObject: Array<object>=BRACELET;
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
    this.dishes = this.dishService.getBracelet();
  }

}
