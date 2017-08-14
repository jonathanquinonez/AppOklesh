import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModificarclientePage} from '../modificarcliente/modificarcliente';

/**
 * Generated class for the ListaclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacliente',
  templateUrl: 'listacliente.html',
})
export class ListaclientePage {


	cliente1: string= '../assets/img/cliente1.jpg';
	cliente2: string= '../assets/img/cliente2.jpg';
	cliente3: string= '../assets/img/cliente3.jpg';
	cliente4: string= '../assets/img/cliente4.jpg';
	cliente5: string= '../assets/img/cliente5.jpg';
	cliente6: string= '../assets/img/cliente6.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaclientePage');
  }

  openModificarclientePage(){

  	this.navCtrl.push(ModificarclientePage);
  }

}
