import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearclientePage } from './crearcliente';

@NgModule({
  declarations: [
    CrearclientePage,
  ],
  imports: [
    IonicPageModule.forChild(CrearclientePage),
  ],
})
export class CrearclientePageModule {}
