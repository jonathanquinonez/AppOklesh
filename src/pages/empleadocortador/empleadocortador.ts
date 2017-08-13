import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarcortadorPage } from '../editarcortador/editarcortador';
import { EliminarcortadorPage } from '../eliminarcortador/eliminarcortador';
/**
 * Generated class for the EmpleadocortadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleadocortador',
  templateUrl: 'empleadocortador.html',
})
export class EmpleadocortadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleadocortadorPage');
  }

   openEmpleadocortador(){

  	this.navCtrl.push(EmpleadocortadorPage);
  }
  openEditarcortador(){

    this.navCtrl.push(EditarcortadorPage);
  }
   openEliminarcortador(){

    this.navCtrl.push(EliminarcortadorPage);
  }
  
}
