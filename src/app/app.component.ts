import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HotelsPage } from '../pages/hotels/hotels';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  inputPrice_from: number;
  inputPrice_upto: number;
  inputParking: boolean;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
  ) {

    this.initializeApp();

    this.pages = [
      { title: 'Главная', component: HomePage },
      { title: 'Гостиницы', component: HotelsPage }
    ];
  } // Constructor end

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }



}

// export class FilterParams {
//   constructor(public priceFrom: number,
//               public priceTo: number,
//               public parking: boolean
//   ) {};
// }                      ~TODO~
