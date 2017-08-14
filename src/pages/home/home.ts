import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComicProvider } from '../../providers/comic/comic'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[] = [];
  datos: any = {};
  copy:string;

  constructor(public navCtrl: NavController, public comicProvid: ComicProvider) {

  }

  initializeItems(){
    this.items = this.datos.data.results
  }

  getItems(event:any){
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    }
  }

  ionViewDidLoad() {
  	this.comicProvid.getComics().subscribe(datos => {this.datos = datos; this.copy = this.datos.attributionText ;this.initializeItems();})
  }
}
