import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Signin } from '../signin/signin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  @ViewChild('input') myInput ;

  constructor(
    public navCtrl: NavController,
    public modal: ModalController) {

  }
  intoSignin(){
    const modal = this.modal.create(Signin);
    modal.present();
  }

  modalPop(){
    this.navCtrl.pop();
  }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.myInput.setFocus();
    },150)
  }

}
