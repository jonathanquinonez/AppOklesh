import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModificarempleadoPage} from '../modificarempleado/modificarempleado';

/**
 * Generated class for the ListaempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaempleado',
  templateUrl: 'listaempleado.html',
})
export class ListaempleadoPage {

	empleado1: string= '../assets/img/cara1.jpg';
	empleado2: string= '../assets/img/cara2.jpg';
	empleado3: string= '../assets/img/cara3.jpg';
	empleado4: string= '../assets/img/cara4.jpg';
	empleado5: string= '../assets/img/cara5.jpg';
	empleado6: string= '../assets/img/cara6.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaempleadoPage');
  }


  openModificarempleadoPage(){

  	this.navCtrl.push(ModificarempleadoPage);
  }




}
