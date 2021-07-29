import { Component } from '@angular/core';
import { IonicPage, MenuController, ModalController, NavController } from 'ionic-angular';
import { HotelPage } from './hotel/hotel';
import { NgForm } from '@angular/forms';


interface Hotel {
  imageUrl: string,
  title: string,
  description: string,
  roomCost: number,
  hasParking: boolean,
  address: string,
  phone: string
}

@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {

  hotels: Array<Hotel>;
  allHotels: Array<Hotel>;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public modalCtrl: ModalController) {
    menuCtrl.enable(true);
    this.hotels = [
      {
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      },
      {
        imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
        title: 'Космос',
        description: 'Гостиница "Космос"',
        roomCost: 3000,
        hasParking: true,
        address: 'Москва, пр-т Мира, 150',
        phone: '8 (495) 234-12-06'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/12504248.jpg?k=180fa9795253383a33ef8b2b19b072500ccfe54078999264a8447a98509ea1f7&o=&hp=1',
        title: 'Делайт',
        description: 'Отель "Делайт"',
        roomCost: 3800,
        hasParking: false,
        address: 'Москва, ул. Большие Каменьщики 3/2',
        phone: '8 (999) 111-22-33'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/256536456.jpg?k=4e1643ba033b25d67aef873dc68b402d5e04e80cbabbf200175e4afab7f60b9e&o=&hp=1',
        title: 'Мандарин',
        description: 'Отель "Мандарин"',
        roomCost: 2800,
        hasParking: false,
        address: 'Москва, ул. Ольховская 23',
        phone: '8 (888) 111-22-33'
      },
      {
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/260806028.jpg?k=b3bff5d915ad3ed595abefdec0aafffc1a93b3ab8a52e86c85d90110598fe8b4&o=&hp=1',
        title: 'Art Grand Victoria',
        description: 'Отель "Art Grand Victoria"',
        roomCost: 5050,
        hasParking: true,
        address: 'Москва, ул. Щипок 16',
        phone: '8 (777) 111-22-33'
      }
    ]

    this.allHotels = [...this.hotels];
  } //Constructor end

  findHotels(f: NgForm) {
    console.log(f.value);

    if (Boolean(f.value.max_pay) && Boolean(f.value.min_pay)) {

      this.hotels = this.allHotels.filter( (hotel) => { 
        return ( hotel.roomCost >= f.value.min_pay && 
                 hotel.roomCost <= f.value.max_pay && 
                 hotel.hasParking == f.value.parking );
      });
    }
  }

  openHotel(hotelParams : Hotel) {
    this.navCtrl.push(HotelPage, hotelParams)
  }
}
