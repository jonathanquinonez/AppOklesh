import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaempleadoPage } from './listaempleado';

@NgModule({
  declarations: [
    ListaempleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaempleadoPage),
  ],
})
export class ListaempleadoPageModule {}
