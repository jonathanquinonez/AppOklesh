import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuprincipaPage } from '../menuprincipa/menuprincipa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openMenuprincipaPage(){

  	this.navCtrl.push(MenuprincipaPage);
  }
}
