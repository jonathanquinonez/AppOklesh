import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {EditarclientePage} from '../editarcliente/editarcliente';
import {ListaclientePage} from '../listacliente/listacliente';

/**
 * Generated class for the ModificarclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificarcliente',
  templateUrl: 'modificarcliente.html',
})
export class ModificarclientePage {

	cliente1: string = '../assets/img/cliente1.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarclientePage');
  }


  openEditarclientePage(){

  	this.navCtrl.push(EditarclientePage);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Cliente',
      message: 'Esta de acuerdo en eliminar este cliente',
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
            this.navCtrl.push(ListaclientePage);
          }
        }
      ]
    });
    confirm.present();
  }

}
