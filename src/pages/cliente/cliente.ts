import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListaclientePage} from '../listacliente/listacliente';
import {CrearclientePage} from '../crearcliente/crearcliente';

/**
 * Generated class for the ClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  openListaclientePage(){

  	this.navCtrl.push(ListaclientePage);
  }

  openCrearclientePage(){

  	this.navCtrl.push(CrearclientePage);
  }

}
