import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearempleadoPage} from '../crearempleado/crearempleado';
import {ListaempleadoPage} from '../listaempleado/listaempleado';
import { MenuprincipaPage } from '../menuprincipa/menuprincipa';


/**
 * Generated class for the EmpleadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleados',
  templateUrl: 'empleados.html',
})
export class EmpleadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleadosPage');
  }


openCrearempleadoPage(){

  	this.navCtrl.push(CrearempleadoPage);
  }



openListaempleadoPage(){

	this.navCtrl.push(ListaempleadoPage);
}

 openEmpleadosPage(){

    this.navCtrl.push(EmpleadosPage);
  }

    openMenuprincipaPage(){

    this.navCtrl.push(MenuprincipaPage);
  }
}
