import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IntoYou } from './intoYou/intoYou';
import { Like } from '../like/like';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})
export class Youtube {
  constructor(
    public navCtrl: NavController, 
    public modal: ModalController) {
  }
  intoModal(){
    const modal = this.modal.create(IntoYou);
    modal.present();
  }
  likeList(){
   this.navCtrl.push(Like);
  }
}
