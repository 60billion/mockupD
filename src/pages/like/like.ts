import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-like',
  templateUrl: 'like.html'
})
export class Like {

  constructor(
    public navCtrl: NavController,
    public modal: ModalController) {

  }
  intoLogin(){
    const modal = this.modal.create(Login);
    modal.present()
  }

}
