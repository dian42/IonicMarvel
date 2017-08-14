import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CaracterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caracter',
  templateUrl: 'caracter.html',
})
export class CaracterPage {
  caracter;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
	this.caracter = navParams.data.items;
  }



  cancelar() {
    this.viewCtrl.dismiss();
}


}
