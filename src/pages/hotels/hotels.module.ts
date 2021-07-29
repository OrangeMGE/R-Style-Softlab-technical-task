import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicPageModule } from 'ionic-angular';

import { HotelPage } from './hotel/hotel';
import { HotelsPage } from './hotels';

@NgModule({
  declarations: [
    HotelsPage,
    HotelPage,
  ],
  entryComponents: [
    HotelsPage,
    HotelPage
  ],
  exports: [
    HotelsPage,
    HotelPage
  ],
  bootstrap: [IonicApp],
  imports: [
    BrowserModule,
    IonicPageModule.forChild(HotelsPage),
  ],
})
export class HotelsPageModule {}
