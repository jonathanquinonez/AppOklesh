import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ListacategoriaPage} from '../listacategoria/listacategoria';


/**
 * Generated class for the EditarcategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarcategoria',
  templateUrl: 'editarcategoria.html',
})
export class EditarcategoriaPage {

	myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarcategoriaPage');
  }

  saveData(){
    console.log(this.myForm.value);
  }


  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],

    });
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Modificar Categoria',
      message: 'Esta de acuerdo en modificar esta categoria',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No Haga click aqui');
            this.navCtrl.push(ListacategoriaPage);
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
