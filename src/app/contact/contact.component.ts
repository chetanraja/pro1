import { Component, OnInit,Input } from '@angular/core';
import { Jewel } from '../shared/dish';
import { BANGLES } from '../shared/dishes'; 
import { DishService } from '../services/dish.service'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  dish: Jewel;
   dishes: Jewel[];
   
   currentIndex: any = -1;
  showFlag: any = false;
   imageObject: Array<object>=BANGLES;
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
    this.dishes = this.dishService.getBangles();
  }

}