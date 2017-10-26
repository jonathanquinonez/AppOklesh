import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComprasPage } from '../compras/compras';
import { VentasPage } from '../ventas/ventas';
import { EmpleadosPage } from '../empleados/empleados';
import { BodegaPage } from '../bodega/bodega';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuprincipaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuprincipa',
  templateUrl: 'menuprincipa.html',
})
export class MenuprincipaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuprincipaPage');
  }

  openComprasPage(){

  	this.navCtrl.push(ComprasPage);
  }

  openVentasPage(){

  	this.navCtrl.push(VentasPage);
  }

  openEmpleadosPage(){

  	this.navCtrl.push(EmpleadosPage);
  }

  openBodegaPage(){

  	this.navCtrl.push(BodegaPage);
  }

openHomePage(){

    this.navCtrl.push(HomePage);
  }
  
}
