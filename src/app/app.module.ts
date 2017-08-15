import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuprincipaPage } from '../pages/menuprincipa/menuprincipa';
import { ComprasPage } from '../pages/compras/compras';
import { VentasPage } from '../pages/ventas/ventas';
import { BodegaPage } from '../pages/bodega/bodega';
import { EditarcortadorPage } from '../pages/editarcortador/editarcortador';
import {ArticuloPage} from '../pages/articulo/articulo';
import {ListaarticuloPage} from '../pages/listaarticulo/listaarticulo';
import {ArticulomodificarPage} from '../pages/articulomodificar/articulomodificar';
import {EditararticuloPage} from '../pages/editararticulo/editararticulo';
import {CreararticuloPage} from '../pages/creararticulo/creararticulo';
import {CategoriaPage} from '../pages/categoria/categoria';
import {CrearcategoriaPage} from '../pages/crearcategoria/crearcategoria';
import {ListacategoriaPage} from '../pages/listacategoria/listacategoria';
import {EditarcategoriaPage} from '../pages/editarcategoria/editarcategoria';
import {ListainventarioPage} from '../pages/listainventario/listainventario';

import {ProveedorPage} from '../pages/proveedor/proveedor';
import {ListaproveedorPage} from '../pages/listaproveedor/listaproveedor';
import {EditarproveedorPage} from '../pages/editarproveedor/editarproveedor';
import {ModificarproveedorPage} from '../pages/modificarproveedor/modificarproveedor';
import {CrearproveedorPage} from '../pages/crearproveedor/crearproveedor';

import {ClientePage} from '../pages/cliente/cliente';
import {CrearclientePage} from '../pages/crearcliente/crearcliente';
import {EditarclientePage} from '../pages/editarcliente/editarcliente';
import {ListaclientePage} from '../pages/listacliente/listacliente';
import {ModificarclientePage} from '../pages/modificarcliente/modificarcliente';

import {FacturaPage} from '../pages/factura/factura';

import { EmpleadosPage } from '../pages/empleados/empleados';
import {EditarempleadoPage} from '../pages/editarempleado/editarempleado';
import {ModificarempleadoPage} from '../pages/modificarempleado/modificarempleado';
import {CrearempleadoPage} from '../pages/crearempleado/crearempleado';
import {ListaempleadoPage} from '../pages/listaempleado/listaempleado';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuprincipaPage,
    ComprasPage,
    VentasPage,
    BodegaPage,
    EditarcortadorPage,
    ArticuloPage,
    ListaarticuloPage,
    ArticulomodificarPage,
    EditararticuloPage,
    CreararticuloPage,
    CategoriaPage,
    CrearcategoriaPage,
    ListacategoriaPage,
    EditarcategoriaPage,
    ListainventarioPage,

    ProveedorPage,
    ListaproveedorPage,
    EditarproveedorPage,
    ModificarproveedorPage,
    CrearproveedorPage,

    ClientePage,
    CrearclientePage,
    EditarclientePage,
    ListaclientePage,
    ModificarclientePage,

    FacturaPage,

    EmpleadosPage,
    EditarempleadoPage,
    ModificarempleadoPage,
    CrearempleadoPage,
    ListaempleadoPage,
 

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
    BodegaPage,
    EditarcortadorPage,
    ArticuloPage,
    ListaarticuloPage,
    ArticulomodificarPage,
    EditararticuloPage,
    CreararticuloPage,
    CategoriaPage,
    CrearcategoriaPage,
    ListacategoriaPage,
    EditarcategoriaPage,
    ListainventarioPage,

    ProveedorPage,
    ListaproveedorPage,
    EditarproveedorPage,
    ModificarproveedorPage,
    CrearproveedorPage,

    ClientePage,
    CrearclientePage,
    EditarclientePage,
    ListaclientePage,
    ModificarclientePage,

    FacturaPage,

    EmpleadosPage,
    EditarempleadoPage,
    ModificarempleadoPage,
    CrearempleadoPage,
    ListaempleadoPage,
   

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
