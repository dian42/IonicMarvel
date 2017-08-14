import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ComicProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ComicProvider {
	apiKey:string = "930f2f4265b9af629802d685a7b11195";
	hashKey:string = "7962d513a902dce50c9b6251b092f83b"; //md5(ts+privateKey+publicKey)

  constructor(public http: Http) {

  }
  getComics(){
  	return this.http.get('https://gateway.marvel.com/v1/public/comics?ts=1&apikey='+this.apiKey+'&hash='+this.hashKey)
  				.map(res => res.json() || { });
  }
}
