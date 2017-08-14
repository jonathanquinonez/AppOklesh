import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditarproveedorPage} from '../editarproveedor/editarproveedor';
import { AlertController } from 'ionic-angular';
import {ListaproveedorPage} from '../listaproveedor/listaproveedor';


/**
 * Generated class for the ModificarproveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificarproveedor',
  templateUrl: 'modificarproveedor.html',
})
export class ModificarproveedorPage {

	proveedor1: string = '../assets/img/proveedor1.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarproveedorPage');
  }


  openEditarproveedorPage(){

  	this.navCtrl.push(EditarproveedorPage);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Proveedor',
      message: 'Esta de acuerdo en eliminar este proveedor',
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
            this.navCtrl.push(ListaproveedorPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
