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
  allhotels: Array<Hotel>;

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
        imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
        title: 'Будапешт',
        description: 'Московский отель "Будапешт"',
        roomCost: 5000,
        hasParking: true,
        address: 'Москва, ул. Петровские Линии, 2',
        phone: '8 (495) 729-35-01'
      }
    ]

    this.allhotels = [...this.hotels];
  } //Constructor end

  // @Input() price_from: number = 0;
  // @Input() price_upto: number = 0;      ~???~
  // @Input() parking: boolean = true;
  //                                       Modal Page 
  // async openPage(props) {
  //   console.log(props);
  //   const modalPage = await this.modalCtrl.create({
  //     component: HotelPage,
  //     componentProps: { ...props }
  //   });
  //   return await modalPage.present();
  // }

  findHotels(f: NgForm) {
    console.log(f.value);

    if (Boolean(f.value.max_pay) && Boolean(f.value.min_pay)) {
      // this.hotels.splice(0, this.hotels.length);

      // this.allhotels.forEach(element => {
      //   if (element.roomCost >= f.value.min_pay && element.roomCost <= f.value.max_pay) {
      //     if (element.hasParking == f.value.parking) {
      //       this.hotels.push(element)
      //     }
      //   }
      // });

      
      this.hotels = this.allhotels.filter( (hotel) => { 
        //console.log(this.hotels[0].hasParking == f.value.parking);
        return ( hotel.roomCost >= f.value.min_pay && 
                 hotel.roomCost <= f.value.max_pay && 
                 hotel.hasParking == f.value.parking );
      });
    }
  }
}
