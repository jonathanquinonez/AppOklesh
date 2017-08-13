import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {EditarcategoriaPage} from '../editarcategoria/editarcategoria';



/**
 * Generated class for the ListacategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacategoria',
  templateUrl: 'listacategoria.html',
})
export class ListacategoriaPage {

	materia: string = '../assets/img/materiaprima.jpg';
	pegante: string = '../assets/img/pegante.jpg';
	zapatos: string = '../assets/img/zapatos.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListacategoriaPage');
  }



  openEditarcategoriaPage(){

  	this.navCtrl.push(EditarcategoriaPage);
  }






  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Categoria',
      message: 'Esta de acuerdo en eliminar esta categoria',
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
            this.navCtrl.push(ListacategoriaPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
