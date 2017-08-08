import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadocortadorPage } from '../empleadocortador/empleadocortador';

/**
 * Generated class for the ListacortadoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacortadores',
  templateUrl: 'listacortadores.html',
})
export class ListacortadoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListacortadoresPage');
  }

	openEmpleadocortador(){

		this.navCtrl.push(EmpleadocortadorPage);
	}
 

}
