import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuprincipaPage } from '../pages/menuprincipa/menuprincipa';
import { ComprasPage } from '../pages/compras/compras';
import { VentasPage } from '../pages/ventas/ventas';
import { EmpleadosPage } from '../pages/empleados/empleados';
import { BodegaPage } from '../pages/bodega/bodega';
import { ListacortadoresPage } from '../pages/listacortadores/listacortadores';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuprincipaPage,
    ComprasPage,
    VentasPage,
    EmpleadosPage,
    BodegaPage,
    ListacortadoresPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuprincipaPage,
    ComprasPage,
    VentasPage,
    EmpleadosPage,
    BodegaPage,
    ListacortadoresPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
