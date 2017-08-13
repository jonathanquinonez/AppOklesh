import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListaarticuloPage} from '../listaarticulo/listaarticulo';
import {CreararticuloPage} from '../creararticulo/creararticulo';


/**
 * Generated class for the ArticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulo',
  templateUrl: 'articulo.html',
})
export class ArticuloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloPage');
  }

  openListaarticuloPage(){

  	this.navCtrl.push(ListaarticuloPage);
  }

  openCreararticuloPage(){

  	this.navCtrl.push(CreararticuloPage);

  }

}
