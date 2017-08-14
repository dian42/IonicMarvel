import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaracterPage } from '../caracter/caracter'

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  comicDetail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.comicDetail = this.navParams.get('comicDetail')
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailPage');
  // }

  loadCaracter(){
  	let params = this.comicDetail.characters
  	let modal = this.modalCtrl.create(CaracterPage, params);
	modal.present();
  }

 //  loadAutor(){
 //  	let comicDetail = this.navParams.get('comicDetail')
 //  	let modal = this.modalCtrl.create(AutorPage, comicDetail);
	// modal.present();
 //  }

 //  loadImagenes(){
 //  	let comicDetail = this.navParams.get('comicDetail')
 //  	let modal = this.modalCtrl.create(ImagenPage, comicDetail);
	// modal.present();
 //  }

}
