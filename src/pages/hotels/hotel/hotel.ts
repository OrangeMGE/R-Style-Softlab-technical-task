import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the HotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {
  hotelParams: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.hotelParams = ({ ...navParams.data });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }

  async showNumber() {
    const alert = await this.alertController.create({
      message: this.hotelParams.phone,
      buttons: ['OK']
    });
    await alert.present();
  }

}
