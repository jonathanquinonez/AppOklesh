import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EliminarcortadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eliminarcortador',
  templateUrl: 'eliminarcortador.html',
})
export class EliminarcortadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EliminarcortadorPage');
  }

   openEliminarcortador(){

  	this.navCtrl.push(EliminarcortadorPage);
  }

}
