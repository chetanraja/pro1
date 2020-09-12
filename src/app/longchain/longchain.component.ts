import { Component, OnInit,Input } from '@angular/core';
import { Jewel } from '../shared/dish';
import { LONGCHAIN } from '../shared/dishes'; 
import { DishService } from '../services/dish.service'; 

@Component({
  selector: 'app-longchain',
  templateUrl: './longchain.component.html',
  styleUrls: ['./longchain.component.scss']
})
export class LongchainComponent implements OnInit {

   @Input()
  dish: Jewel;
   dishes: Jewel[];
   
   currentIndex: any = -1;
  showFlag: any = false;
   imageObject: Array<object>=LONGCHAIN;
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
    this.dishes = this.dishService.getLongchain();
  }

}
