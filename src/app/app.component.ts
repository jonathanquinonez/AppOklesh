import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
