import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelPage } from './hotel/hotel';
import { HotelPageModule } from './hotel/hotel.module';
import { HotelsPage } from './hotels';

@NgModule({
  declarations: [
    HotelsPage,
    HotelPage,
    HotelPageModule
  ],
  entryComponents: [
    HotelPage,
    HotelPageModule
  ],
  exports: [

  ],
  imports: [
    IonicPageModule.forChild(HotelsPage),
  ],
})
export class HotelsPageModule {}
