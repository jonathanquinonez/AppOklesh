import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {ArticulomodificarPage} from '../articulomodificar/articulomodificar';
/**
 * Generated class for the EditararticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editararticulo',
  templateUrl: 'editararticulo.html',
})
export class EditararticuloPage {

	myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditararticuloPage');
  }


  saveData(){
    console.log(this.myForm.value);
  }


  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      cantidad: ['', Validators.required],
      compra: ['', Validators.required],
      
      
      
    });
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Modificar Articulo',
      message: 'Esta de acuerdo en modificar este articulo',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No Haga click aqui');
            this.navCtrl.push(ArticulomodificarPage);
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Si haga click aqui');
            this.navCtrl.push(ArticulomodificarPage);
          }
        }
      ]
    });
    confirm.present();
  }


}
