import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factura',
  templateUrl: 'factura.html',
})
export class FacturaPage {

	zapatos1: string= '../assets/img/zapatos1.jpg';
	zapatos2: string= '../assets/img/zapatos2.jpg';
	zapatos3: string= '../assets/img/zapatos3.jpg';
	zapatos4: string= '../assets/img/zapatos4.jpg';
	zapatos5: string= '../assets/img/zapatos5.jpg';
  zapatos6: string= '../assets/img/zapatos6.jpg';


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaPage');
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
          }
        }
      ]
    });
    confirm.present();
  }



  showConfirme() {
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
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmec() {
    let confirm = this.alertCtrl.create({
      title: 'Eliminar Factura',
      message: 'Esta de acuerdo en eliminar este factura',
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
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Factura Guardada',
      subTitle: 'La factura fue guardada con exito',
      buttons: [{
          text: 'Ok',
          handler: () => {
            console.log('Ok haga click aqui');
          }
        }]
      
    });
    alert.present();
  }

}
