import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { HotelsPage } from './hotels';

@NgModule({
  declarations: [
    HotelsPage,
    FilterPage
  ],
  imports: [
    IonicPageModule.forChild(HotelsPage),
  ],
})
export class HotelsPageModule {}
