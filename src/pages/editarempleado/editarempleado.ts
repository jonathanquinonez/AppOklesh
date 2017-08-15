import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {ModificarempleadoPage} from '../modificarempleado/modificarempleado';
/**
 * Generated class for the EditarempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarempleado',
  templateUrl: 'editarempleado.html',
})
export class EditarempleadoPage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarempleadoPage');
  }

  saveData(){
    console.log(this.myForm.value);
  }


  private createMyForm(){
    return this.formBuilder.group({

      dateBirth: ['',Validators.required],
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      barrio: ['', Validators.required],
      ciudad: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      
      
      
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Empleado Modificado',
      subTitle: 'El empleado fue modificado con exito',
      buttons: [{
          text: 'Ok',
          handler: () => {
            console.log('Ok haga click aqui');
            this.navCtrl.push(ModificarempleadoPage);
          }
        }]
      
    });
    alert.present();
  }

}
