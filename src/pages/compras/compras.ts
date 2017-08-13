import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticuloPage} from '../articulo/articulo';
import {CategoriaPage} from '../categoria/categoria';


/**
 * Generated class for the ComprasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  openArticuloPage(){

  	this.navCtrl.push(ArticuloPage);
  }

  openCategoriaPage(){

    this.navCtrl.push(CategoriaPage);
  }



}
