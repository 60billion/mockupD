import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IntoBl } from './intoBl/intoBl';
import { Like } from '../like/like';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class Blog {

  constructor(
    public navCtrl: NavController,
    public modal: ModalController) {

  }
  intoModal(){
    const modal = this.modal.create(IntoBl);
    modal.present();
  }
  likeList(){
    this.navCtrl.push(Like);
  }

}
