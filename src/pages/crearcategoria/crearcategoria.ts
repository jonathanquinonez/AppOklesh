import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {CategoriaPage} from '../categoria/categoria';

/**
 * Generated class for the CrearcategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearcategoria',
  templateUrl: 'crearcategoria.html',
})
export class CrearcategoriaPage {

	myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearcategoriaPage');
  }

  saveData(){
    console.log(this.myForm.value);
  }


  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      
    });
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Categoria Creada',
      subTitle: 'La categoria fue creada con exito',
      buttons: [{
          text: 'Ok',
          handler: () => {
            console.log('Ok haga click aqui');
            this.navCtrl.push(CategoriaPage);
          }
        }]
      
    });
    alert.present();
  }

}




