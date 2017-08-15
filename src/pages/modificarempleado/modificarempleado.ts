import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ListaempleadoPage} from '../listaempleado/listaempleado';
import {EditarempleadoPage} from '../editarempleado/editarempleado';

/**
 * Generated class for the ModificarempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificarempleado',
  templateUrl: 'modificarempleado.html',
})
export class ModificarempleadoPage {

  empleado1: string = '../assets/img/cara1.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarempleadoPage');
  }


  openEditarempleadoPage(){

  	this.navCtrl.push(EditarempleadoPage);
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Empleado',
      message: 'Esta de acuerdo en eliminar este empleado',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No Haga click aqui');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Si haga click aqui');
            this.navCtrl.push(ListaempleadoPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
