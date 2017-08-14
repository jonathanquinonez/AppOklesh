import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CrearproveedorPage} from '../crearproveedor/crearproveedor';
import {ListaproveedorPage} from '../listaproveedor/listaproveedor';

/**
 * Generated class for the ProveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proveedor',
  templateUrl: 'proveedor.html',
})
export class ProveedorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProveedorPage');
  }



   openListaproveedorPage(){

  	this.navCtrl.push(ListaproveedorPage);
  }

  openCrearproveedorPage(){

  	this.navCtrl.push(CrearproveedorPage);
  }



}
