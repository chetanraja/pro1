import { Component, OnInit,Input } from '@angular/core';
import { Jewel } from '../shared/dish';
import { NECKLACE } from '../shared/dishes'; 
import { DishService } from '../services/dish.service';  
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
  @Input()
  dish: Jewel;
   dishes: Jewel[];
   
   currentIndex: any = -1;
  showFlag: any = false;
   imageObject: Array<object>=NECKLACE;
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
    this.dishes = this.dishService.getNecklace();
  }

}
