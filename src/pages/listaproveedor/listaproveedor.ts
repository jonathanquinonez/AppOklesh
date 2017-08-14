import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModificarproveedorPage} from '../modificarproveedor/modificarproveedor';

/**
 * Generated class for the ListaproveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaproveedor',
  templateUrl: 'listaproveedor.html',
})
export class ListaproveedorPage {

	
	proveedor1: string= '../assets/img/proveedor1.jpg';
	proveedor2: string= '../assets/img/proveedor2.jpg';
	proveedor3: string= '../assets/img/proveedor3.jpg';
	proveedor4: string= '../assets/img/proveedor4.jpg';
	proveedor5: string= '../assets/img/proveedor5.jpg';
	proveedor6: string= '../assets/img/proveedor6.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaproveedorPage');
  }

  openModificarproveedorPage(){

  	this.navCtrl.push(ModificarproveedorPage);

  }

}
