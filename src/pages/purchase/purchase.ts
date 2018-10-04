import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html'
})
export class Purchase {

  count=2;
  cost=10000;
  total = this.count*this.cost;

  constructor(public navCtrl: NavController) {

  }
  

}
