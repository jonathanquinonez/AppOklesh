import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaarticuloPage } from './listaarticulo';

@NgModule({
  declarations: [
    ListaarticuloPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaarticuloPage),
  ],
})
export class ListaarticuloPageModule {}
