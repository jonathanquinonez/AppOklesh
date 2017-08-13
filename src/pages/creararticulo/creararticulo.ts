import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {ArticuloPage} from '../articulo/articulo';

/**
 * Generated class for the CreararticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creararticulo',
  templateUrl: 'creararticulo.html',
})
export class CreararticuloPage {

	myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreararticuloPage');
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


showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Articulo Creado',
      subTitle: 'El articulo fue creado con exito',
      buttons: [{
          text: 'Ok',
          handler: () => {
            console.log('Ok haga click aqui');
            this.navCtrl.push(ArticuloPage);
          }
        }]
      
    });
    alert.present();
  }
}
