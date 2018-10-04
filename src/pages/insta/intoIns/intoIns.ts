import { Component } from '@angular/core';
import { NavController, ModalController, Events, LoadingController } from 'ionic-angular';
import { Purchase } from '../../purchase/purchase';

@Component({
  selector: 'page-intoIns',
  templateUrl: 'intoIns.html'
})
export class IntoIns {
  
  itemDetail="info";
  loading;

  constructor(
    public navCtrl: NavController, 
    public modal: ModalController,
    public loadingCtrl: LoadingController
  ) {

  }
  ngOnInit() {
    this.presentLoading();
  }
  
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  dismissLoading(){
    this.loading.dismiss();
  }

  purchase(){
    const modal = this.modal.create(Purchase);
    modal.present();
  }

}
