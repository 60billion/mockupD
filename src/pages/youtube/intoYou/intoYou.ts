import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { Purchase } from '../../purchase/purchase';

@Component({
  selector: 'page-intoYou',
  templateUrl: 'intoYou.html'
})
export class IntoYou {
  
  itemDetail="info";
  loading;

  constructor(
    public navCtrl: NavController,
    public modal: ModalController,
    public loadingCtrl: LoadingController
  ) {

  }
  purchase(){
    const modal = this.modal.create(Purchase);
    modal.present();
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


}
