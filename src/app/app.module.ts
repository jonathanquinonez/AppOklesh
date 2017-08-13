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
import { EmpleadocortadorPage } from '../pages/empleadocortador/empleadocortador';
import { EditarcortadorPage } from '../pages/editarcortador/editarcortador';
import { EliminarcortadorPage } from '../pages/eliminarcortador/eliminarcortador';
import {ArticuloPage} from '../pages/articulo/articulo';
import {ListaarticuloPage} from '../pages/listaarticulo/listaarticulo';
import {ArticulomodificarPage} from '../pages/articulomodificar/articulomodificar';
import {EditararticuloPage} from '../pages/editararticulo/editararticulo';
import {CreararticuloPage} from '../pages/creararticulo/creararticulo';
import {CategoriaPage} from '../pages/categoria/categoria';
import {CrearcategoriaPage} from '../pages/crearcategoria/crearcategoria';
import {ListacategoriaPage} from '../pages/listacategoria/listacategoria';
import {EditarcategoriaPage} from '../pages/editarcategoria/editarcategoria';



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
    ListacortadoresPage,
    EmpleadocortadorPage,
    EditarcortadorPage,
    EliminarcortadorPage,
    ArticuloPage,
    ListaarticuloPage,
    ArticulomodificarPage,
    EditararticuloPage,
    CreararticuloPage,
    CategoriaPage,
    CrearcategoriaPage,
    ListacategoriaPage,
    EditarcategoriaPage
 

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
    ListacortadoresPage,
    EmpleadocortadorPage,
    EditarcortadorPage,
    EliminarcortadorPage,
    ArticuloPage,
    ListaarticuloPage,
    ArticulomodificarPage,
    EditararticuloPage,
    CreararticuloPage,
    CategoriaPage,
    CrearcategoriaPage,
    ListacategoriaPage,
    EditarcategoriaPage
   

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
