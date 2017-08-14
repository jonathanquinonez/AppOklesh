import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarclientePage } from './modificarcliente';

@NgModule({
  declarations: [
    ModificarclientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarclientePage),
  ],
})
export class ModificarclientePageModule {}
