import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientePage} from '../cliente/cliente';
import {FacturaPage} from '../factura/factura';
import { MenuprincipaPage } from '../menuprincipa/menuprincipa';
/**
 * Generated class for the VentasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentasPage');
  }

  openClientePage(){

  	this.navCtrl.push(ClientePage);
  }

  openFacturaPage(){

    this.navCtrl.push(FacturaPage);
  }
  openMenuprincipaPage(){

    this.navCtrl.push(MenuprincipaPage);
  }

}
