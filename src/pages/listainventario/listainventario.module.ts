import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListainventarioPage } from './listainventario';

@NgModule({
  declarations: [
    ListainventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListainventarioPage),
  ],
})
export class ListainventarioPageModule {}
