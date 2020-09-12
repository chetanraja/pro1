import { Injectable } from '@angular/core';
import { Jewel } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { EARRINGS } from '../shared/dishes';
import { LONGCHAIN } from '../shared/dishes';
import { NECKLACE } from '../shared/dishes';
import { BRACELET } from '../shared/dishes';
import { BANGLES } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})

export class DishService {
getDishes(): Jewel[] {
    return DISHES;
  }
  getEarrings(): Jewel[] {
    return EARRINGS;
  }
  getLongchain(): Jewel[] {
    return LONGCHAIN;
  }
  getNecklace(): Jewel[] {
    return NECKLACE;
  }
  getBracelet(): Jewel[] {
    return BRACELET;
  }
  getBangles(): Jewel[] {
    return BANGLES;
  }

  constructor() { }
}
