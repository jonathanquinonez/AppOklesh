webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadocortadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmpleadocortadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EmpleadocortadorPage = EmpleadocortadorPage_1 = (function () {
    function EmpleadocortadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmpleadocortadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpleadocortadorPage');
    };
    EmpleadocortadorPage.prototype.openEmpleadocortador = function () {
        this.navCtrl.push(EmpleadocortadorPage_1);
    };
    return EmpleadocortadorPage;
}());
EmpleadocortadorPage = EmpleadocortadorPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-empleadocortador',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\empleadocortador\empleadocortador.html"*/'<!--\n\n  Generated template for the EmpleadocortadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>empleadocortador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n				  	  \n\n				      <img src=\'../assets/img/cara1.jpg\'>\n\n				      \n\n				      <h3>Cortador 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n				      <button ion-button color="secondary" round>Editar</button>\n\n				      <button ion-button color="danger" round>Eliminar</button>\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\empleadocortador\empleadocortador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EmpleadocortadorPage);

var EmpleadocortadorPage_1;
//# sourceMappingURL=empleadocortador.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacortadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empleadocortador_empleadocortador__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListacortadoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListacortadoresPage = (function () {
    function ListacortadoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListacortadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListacortadoresPage');
    };
    ListacortadoresPage.prototype.openEmpleadocortador = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__empleadocortador_empleadocortador__["a" /* EmpleadocortadorPage */]);
    };
    return ListacortadoresPage;
}());
ListacortadoresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listacortadores',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\listacortadores\listacortadores.html"*/'<!--\n\n  Generated template for the ListacortadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listacortadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Cortadores</h1>\n\n					<div>\n\n				  		<ion-searchbar > </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara1.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara2.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara3.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara4.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara5.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara6.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\listacortadores\listacortadores.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListacortadoresPage);

//# sourceMappingURL=listacortadores.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listacortadores_listacortadores__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmpleadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EmpleadosPage = (function () {
    function EmpleadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpleadosPage');
    };
    EmpleadosPage.prototype.openListacortadoresPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listacortadores_listacortadores__["a" /* ListacortadoresPage */]);
    };
    return EmpleadosPage;
}());
EmpleadosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-empleados',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\empleados\empleados.html"*/'<!--\n\n  Generated template for the EmpleadosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>empleados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n\n\n		<h1>Empleados</h1>	\n\n			<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListacortadoresPage()">Cortador</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Guarnecedor</button>\n\n			    </div>    \n\n			    <br>\n\n			    <div>\n\n			        <button class="botonmenu" ion-button button-positive>Soletero</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Limpiador</button>\n\n			    </div>  \n\n			    </div>  \n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\empleados\empleados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EmpleadosPage);

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodegaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BodegaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BodegaPage = (function () {
    function BodegaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BodegaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BodegaPage');
    };
    return BodegaPage;
}());
BodegaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bodega',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\bodega\bodega.html"*/'<!--\n\n  Generated template for the BodegaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>bodega</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\bodega\bodega.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], BodegaPage);

//# sourceMappingURL=bodega.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuprincipaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_compras__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ventas_ventas__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empleados_empleados__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodega_bodega__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuprincipaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuprincipaPage = (function () {
    function MenuprincipaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuprincipaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuprincipaPage');
    };
    MenuprincipaPage.prototype.openComprasPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__compras_compras__["a" /* ComprasPage */]);
    };
    MenuprincipaPage.prototype.openVentasPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ventas_ventas__["a" /* VentasPage */]);
    };
    MenuprincipaPage.prototype.openEmpleadosPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__empleados_empleados__["a" /* EmpleadosPage */]);
    };
    MenuprincipaPage.prototype.openBodegaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bodega_bodega__["a" /* BodegaPage */]);
    };
    return MenuprincipaPage;
}());
MenuprincipaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menuprincipa',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\menuprincipa\menuprincipa.html"*/'<!--\n\n  Generated template for the MenuprincipaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>menuprincipa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n				<div class="div">\n\n		   <h1>Menu Principal</h1>\n\n		    \n\n		<div class="divmenu">\n\n			<div>\n\n		        <button class="botonmenu" ion-button button-positive (click)="openComprasPage()">Compras </button>\n\n\n\n		        <button class="botonmenu" ion-button button-positive (click)="openVentasPage()">Ventas</button>\n\n		    </div>    \n\n		    <br>\n\n		    <div>\n\n		        <button class="botonmenu" ion-button button-positive (click)="openEmpleadosPage()">Empleados</button>\n\n\n\n		        <button class="botonmenu" ion-button button-positive (click)="openBodegaPage()">Bodega</button>\n\n		    </div>    \n\n		</div>\n\n		</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\menuprincipa\menuprincipa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MenuprincipaPage);

//# sourceMappingURL=menuprincipa.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bodega/bodega.module": [
		273,
		6
	],
	"../pages/compras/compras.module": [
		268,
		5
	],
	"../pages/empleadocortador/empleadocortador.module": [
		270,
		4
	],
	"../pages/empleados/empleados.module": [
		272,
		3
	],
	"../pages/listacortadores/listacortadores.module": [
		271,
		2
	],
	"../pages/menuprincipa/menuprincipa.module": [
		274,
		1
	],
	"../pages/ventas/ventas.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuprincipa_menuprincipa__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\home\home.html"*/'\n\n<body >\n\n<ion-content class="ion-content" padding>\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Iniciar Sesión </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n                          <ion-input type="text" placeholder="Username"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n                        <ion-item>\n\n                          <ion-input type="password" placeholder="Password"></ion-input>\n\n                        </ion-item>\n\n\n\n                  </ion-list>\n\n\n\n        <button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>\n\n</fieldset>\n\n</div>       \n\n\n\n</ion-content>\n\n</body>'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_empleados_empleados__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bodega_bodega__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listacortadores_listacortadores__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__["a" /* MenuprincipaPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__["a" /* ComprasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__["a" /* VentasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_empleados_empleados__["a" /* EmpleadosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_bodega_bodega__["a" /* BodegaPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_listacortadores_listacortadores__["a" /* ListacortadoresPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__["a" /* EmpleadocortadorPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/compras/compras.module#ComprasPageModule', name: 'ComprasPage', segment: 'compras', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ventas/ventas.module#VentasPageModule', name: 'VentasPage', segment: 'ventas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleadocortador/empleadocortador.module#EmpleadocortadorPageModule', name: 'EmpleadocortadorPage', segment: 'empleadocortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listacortadores/listacortadores.module#ListacortadoresPageModule', name: 'ListacortadoresPage', segment: 'listacortadores', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bodega/bodega.module#BodegaPageModule', name: 'BodegaPage', segment: 'bodega', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menuprincipa/menuprincipa.module#MenuprincipaPageModule', name: 'MenuprincipaPage', segment: 'menuprincipa', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__["a" /* MenuprincipaPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__["a" /* ComprasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__["a" /* VentasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_empleados_empleados__["a" /* EmpleadosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_bodega_bodega__["a" /* BodegaPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_listacortadores_listacortadores__["a" /* ListacortadoresPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__["a" /* EmpleadocortadorPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ComprasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ComprasPage = (function () {
    function ComprasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComprasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComprasPage');
    };
    return ComprasPage;
}());
ComprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compras',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\compras\compras.html"*/'<!--\n\n  Generated template for the ComprasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>compras</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Compras</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive>Articulo</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Categorias</button>\n\n			    </div>    \n\n			    <br>\n\n			    <div>\n\n			        <button class="botonmenu" ion-button button-positive>Inventario</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Proveedores</button>\n\n			    </div>  \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\compras\compras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ComprasPage);

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VentasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VentasPage = (function () {
    function VentasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VentasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VentasPage');
    };
    return VentasPage;
}());
VentasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ventas',template:/*ion-inline-start:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\ventas\ventas.html"*/'<!--\n\n  Generated template for the VentasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ventas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\Proyectos\appoklesh\src\pages\ventas\ventas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], VentasPage);

//# sourceMappingURL=ventas.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map