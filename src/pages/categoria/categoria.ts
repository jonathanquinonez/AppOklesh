import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CrearcategoriaPage} from '../crearcategoria/crearcategoria';

/**
 * Generated class for the CategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  openCrearcategoriaPage(){

  	this.navCtrl.push(CrearcategoriaPage);
  }

}
