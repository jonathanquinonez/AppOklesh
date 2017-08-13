import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditararticuloPage} from '../editararticulo/editararticulo';
import { AlertController } from 'ionic-angular';
import {ListaarticuloPage} from '../listaarticulo/listaarticulo';


/**
 * Generated class for the ArticulomodificarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulomodificar',
  templateUrl: 'articulomodificar.html',
})
export class ArticulomodificarPage {



Imagen: string = '../assets/img/articulo1.png';


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulomodificarPage');
  }


  openEditararticuloPage(){
  	this.navCtrl.push(EditararticuloPage);
  }



  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Articulo',
      message: 'Esta de acuerdo en eliminar este articulo',
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
            this.navCtrl.push(ListaarticuloPage);
          }
        }
      ]
    });
    confirm.present();
  }

}






