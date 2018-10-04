import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IntoIns } from './intoIns/intoIns';
import { Like } from '../like/like';

@Component({
  selector: 'page-insta',
  templateUrl: 'insta.html'
})
export class Insta {

  constructor(
    public navCtrl: NavController,
    public modal: ModalController,
  ) {

  }
  intoModal(){
    const modal = this.modal.create(IntoIns);
    modal.present();
  }
  likeList(){
    this.navCtrl.push(Like);
  }

}
