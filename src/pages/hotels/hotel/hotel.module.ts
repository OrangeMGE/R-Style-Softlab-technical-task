import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelsPage } from '../hotels';
import { HotelPage } from './hotel';

@NgModule({
  declarations: [
    HotelsPage
  ],
  entryComponents: [
    HotelPage
  ],
  imports: [
    IonicPageModule.forChild(HotelPage),
  ],
})
export class HotelPageModule {}
