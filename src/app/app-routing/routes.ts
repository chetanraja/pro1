import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LongchainComponent } from '../longchain/longchain.component';
import { BraceletComponent } from '../bracelet/bracelet.component';

export const routes: Routes = [
  { path: 'earrings',  component: HomeComponent },
  { path: 'chains',     component: MenuComponent },
  { path: 'necklace',     component: DishdetailComponent },
   { path: 'longchain',     component: LongchainComponent },
    { path: 'bracelet',     component: BraceletComponent },
    { path: 'bangles',     component: ContactComponent },
  { path: '', redirectTo: '/bangles', pathMatch: 'full' }
];