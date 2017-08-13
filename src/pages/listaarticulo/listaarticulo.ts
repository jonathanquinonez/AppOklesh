import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticulomodificarPage} from '../articulomodificar/articulomodificar';

/**
 * Generated class for the ListaarticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaarticulo',
  templateUrl: 'listaarticulo.html',
})
export class ListaarticuloPage {


	articulo1: string = '../assets/img/articulo1.png';
	articulo2: string = '../assets/img/articulo2.png';
	articulo3: string = '../assets/img/articulo3.jpg';
	articulo4: string = '../assets/img/articulo4.jpg';
	articulo5: string = '../assets/img/articulo5.jpg';
	articulo6: string = '../assets/img/articulo6.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaarticuloPage');
  }


  openArticulomodificarPage(){

  	this.navCtrl.push(ArticulomodificarPage)

  }

  





}
