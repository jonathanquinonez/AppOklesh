import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreararticuloPage } from './creararticulo';

@NgModule({
  declarations: [
    CreararticuloPage,
  ],
  imports: [
    IonicPageModule.forChild(CreararticuloPage),
  ],

  exports: [
    CreararticuloPage
  ]

})
export class CreararticuloPageModule {}
