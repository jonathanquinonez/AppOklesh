webpackJsonp([16],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticulomodificarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editararticulo_editararticulo__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaarticulo_listaarticulo__ = __webpack_require__(49);
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
 * Generated class for the ArticulomodificarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ArticulomodificarPage = (function () {
    function ArticulomodificarPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.Imagen = '../assets/img/articulo1.png';
    }
    ArticulomodificarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticulomodificarPage');
    };
    ArticulomodificarPage.prototype.openEditararticuloPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editararticulo_editararticulo__["a" /* EditararticuloPage */]);
    };
    ArticulomodificarPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Articulo',
            message: 'Esta de acuerdo en eliminar este articulo',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No Haga click aqui');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Si haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listaarticulo_listaarticulo__["a" /* ListaarticuloPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ArticulomodificarPage;
}());
ArticulomodificarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-articulomodificar',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\articulomodificar\articulomodificar.html"*/'<!--\n\n  Generated template for the ArticulomodificarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>articulomodificar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{Imagen}}>\n\n				      \n\n				      <h3>Articulo 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditararticuloPage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\articulomodificar\articulomodificar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ArticulomodificarPage);

//# sourceMappingURL=articulomodificar.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreararticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articulo_articulo__ = __webpack_require__(102);
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
 * Generated class for the CreararticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreararticuloPage = (function () {
    function CreararticuloPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    CreararticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreararticuloPage');
    };
    CreararticuloPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    CreararticuloPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            compra: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    CreararticuloPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Articulo Creado',
            subTitle: 'El articulo fue creado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__articulo_articulo__["a" /* ArticuloPage */]);
                    }
                }]
        });
        alert.present();
    };
    return CreararticuloPage;
}());
CreararticuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-creararticulo',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\creararticulo\creararticulo.html"*/'<!--\n\n  Generated template for the CreararticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>creararticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Articulo </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Articulo:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cantidad:</ion-label>\n\n                          <ion-input formControlName="cantidad" type="number" placeholder="Cantidad"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Unidades de medida:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gr</option>\n\n                          <option selected>Kg</option>\n\n                          <option>Lb</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Proveedor:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gonzalo Jaimes</option>\n\n                          <option selected>Maryuri Tatiana</option>\n\n                          <option>Laura Rocio</option>\n\n                          <option>Luis Quintero</option>\n\n                          <option>Heivar Villamiza</option>\n\n                          <option>Carolina Vargas</option>\n\n                          <option>Aide Sepulveda</option>\n\n                          <option>Jhon Jairo</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Compra:</ion-label>\n\n                          <ion-input formControlName="compra" type="number" placeholder="Compra"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Categoria:<br>\n\n                         <select class="selectt" >\n\n                          <option>Materia Prima</option>\n\n                          <option selected>Pegantes</option>\n\n                          <option>Zapato</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo de Producto:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comprado</option>\n\n                          <option selected>Producido</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Descripcion:</ion-label>\n\n                          <ion-input type="text" placeholder="Descripcion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n        <!--<button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>-->\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\creararticulo\creararticulo.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], CreararticuloPage);

var _a, _b, _c, _d;
//# sourceMappingURL=creararticulo.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listaarticulo_listaarticulo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creararticulo_creararticulo__ = __webpack_require__(101);
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
 * Generated class for the ArticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ArticuloPage = (function () {
    function ArticuloPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticuloPage');
    };
    ArticuloPage.prototype.openListaarticuloPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listaarticulo_listaarticulo__["a" /* ListaarticuloPage */]);
    };
    ArticuloPage.prototype.openCreararticuloPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__creararticulo_creararticulo__["a" /* CreararticuloPage */]);
    };
    return ArticuloPage;
}());
ArticuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-articulo',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\articulo\articulo.html"*/'<!--\n\n  Generated template for the ArticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>articulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Articulo</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCreararticuloPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaarticuloPage()">Listado</button>\n\n			    </div>    \n\n			    <br>\n\n			     \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\articulo\articulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ArticuloPage);

//# sourceMappingURL=articulo.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearcategoria_crearcategoria__ = __webpack_require__(292);
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
 * Generated class for the CategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CategoriaPage = (function () {
    function CategoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriaPage');
    };
    CategoriaPage.prototype.openCrearcategoriaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */]);
    };
    return CategoriaPage;
}());
CategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\categoria\categoria.html"*/'<!--\n\n  Generated template for the CategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>categoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Categoria</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearcategoriaPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCategoriaPage()">Listado</button>\n\n			    </div>    \n\n\n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\categoria\categoria.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
], CategoriaPage);

var _a, _b;
//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulo_articulo__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_categoria__ = __webpack_require__(103);
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
    ComprasPage.prototype.openArticuloPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__articulo_articulo__["a" /* ArticuloPage */]);
    };
    ComprasPage.prototype.openCategoriaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoria_categoria__["a" /* CategoriaPage */]);
    };
    return ComprasPage;
}());
ComprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compras',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\compras\compras.html"*/'<!--\n\n  Generated template for the ComprasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>compras</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Compras</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openArticuloPage()">Articulo</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCategoriaPage()">Categorias</button>\n\n			    </div>    \n\n			    <br>\n\n			    <div>\n\n			        <button class="botonmenu" ion-button button-positive>Inventario</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Proveedores</button>\n\n			    </div>  \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\compras\compras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ComprasPage);

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ventas',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\ventas\ventas.html"*/'<!--\n\n  Generated template for the VentasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ventas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\ventas\ventas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], VentasPage);

//# sourceMappingURL=ventas.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarcortadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the EditarcortadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditarcortadorPage = (function () {
    function EditarcortadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditarcortadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarcortadorPage');
    };
    return EditarcortadorPage;
}());
EditarcortadorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarcortador',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcortador\editarcortador.html"*/'<!--\n\n  Generated template for the EditarcortadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcortador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcortador\editarcortador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EditarcortadorPage);

//# sourceMappingURL=editarcortador.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminarcortadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the EliminarcortadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EliminarcortadorPage = EliminarcortadorPage_1 = (function () {
    function EliminarcortadorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EliminarcortadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EliminarcortadorPage');
    };
    EliminarcortadorPage.prototype.openEliminarcortador = function () {
        this.navCtrl.push(EliminarcortadorPage_1);
    };
    return EliminarcortadorPage;
}());
EliminarcortadorPage = EliminarcortadorPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eliminarcortador',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\eliminarcortador\eliminarcortador.html"*/'<!--\n\n  Generated template for the EliminarcortadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>eliminarcortador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\eliminarcortador\eliminarcortador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EliminarcortadorPage);

var EliminarcortadorPage_1;
//# sourceMappingURL=eliminarcortador.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadocortadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcortador_editarcortador__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eliminarcortador_eliminarcortador__ = __webpack_require__(107);
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
    EmpleadocortadorPage.prototype.openEditarcortador = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editarcortador_editarcortador__["a" /* EditarcortadorPage */]);
    };
    EmpleadocortadorPage.prototype.openEliminarcortador = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eliminarcortador_eliminarcortador__["a" /* EliminarcortadorPage */]);
    };
    return EmpleadocortadorPage;
}());
EmpleadocortadorPage = EmpleadocortadorPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-empleadocortador',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\empleadocortador\empleadocortador.html"*/'<!--\n\n  Generated template for the EmpleadocortadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>empleadocortador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n				  	  \n\n				      <img src=\'../assets/img/cara1.jpg\'>\n\n				      \n\n				      <h3>Cortador 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditarcortador()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="openEliminarcortador()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\empleadocortador\empleadocortador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EmpleadocortadorPage);

var EmpleadocortadorPage_1;
//# sourceMappingURL=empleadocortador.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacortadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empleadocortador_empleadocortador__ = __webpack_require__(108);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listacortadores',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listacortadores\listacortadores.html"*/'<!--\n\n  Generated template for the ListacortadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listacortadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Cortadores</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara1.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara2.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara3.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara4.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara5.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src=\'../assets/img/cara6.jpg\'>\n\n				      </ion-thumbnail >\n\n				      <h3>Cortador 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openEmpleadocortador()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listacortadores\listacortadores.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListacortadoresPage);

//# sourceMappingURL=listacortadores.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listacortadores_listacortadores__ = __webpack_require__(109);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-empleados',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\empleados\empleados.html"*/'<!--\n\n  Generated template for the EmpleadosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>empleados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n\n\n		<h1>Empleados</h1>	\n\n			<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListacortadoresPage()">Cortador</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Guarnecedor</button>\n\n			    </div>    \n\n			    <br>\n\n			    <div>\n\n			        <button class="botonmenu" ion-button button-positive>Soletero</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive>Limpiador</button>\n\n			    </div>  \n\n			    </div>  \n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\empleados\empleados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EmpleadosPage);

//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodegaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bodega',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\bodega\bodega.html"*/'<!--\n\n  Generated template for the BodegaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>bodega</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\bodega\bodega.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BodegaPage);

//# sourceMappingURL=bodega.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuprincipaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_compras__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ventas_ventas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empleados_empleados__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodega_bodega__ = __webpack_require__(111);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menuprincipa',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\menuprincipa\menuprincipa.html"*/'<!--\n\n  Generated template for the MenuprincipaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>menuprincipa</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n				<div class="div">\n\n		   <h1>Menu Principal</h1>\n\n		    \n\n		<div class="divmenu">\n\n			<div>\n\n		        <button class="botonmenu" ion-button button-positive (click)="openComprasPage()">Compras </button>\n\n\n\n		        <button class="botonmenu" ion-button button-positive (click)="openVentasPage()">Ventas</button>\n\n		    </div>    \n\n		    <br>\n\n		    <div>\n\n		        <button class="botonmenu" ion-button button-positive (click)="openEmpleadosPage()">Empleados</button>\n\n\n\n		        <button class="botonmenu" ion-button button-positive (click)="openBodegaPage()">Bodega</button>\n\n		    </div>    \n\n		</div>\n\n		</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\menuprincipa\menuprincipa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MenuprincipaPage);

//# sourceMappingURL=menuprincipa.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/articulo/articulo.module": [
		280,
		15
	],
	"../pages/articulomodificar/articulomodificar.module": [
		277,
		14
	],
	"../pages/bodega/bodega.module": [
		289,
		13
	],
	"../pages/categoria/categoria.module": [
		281,
		12
	],
	"../pages/compras/compras.module": [
		282,
		11
	],
	"../pages/creararticulo/creararticulo.module": [
		279,
		10
	],
	"../pages/crearcategoria/crearcategoria.module": [
		291,
		0
	],
	"../pages/editararticulo/editararticulo.module": [
		276,
		9
	],
	"../pages/editarcortador/editarcortador.module": [
		284,
		8
	],
	"../pages/eliminarcortador/eliminarcortador.module": [
		285,
		7
	],
	"../pages/empleadocortador/empleadocortador.module": [
		286,
		6
	],
	"../pages/empleados/empleados.module": [
		288,
		5
	],
	"../pages/listaarticulo/listaarticulo.module": [
		278,
		4
	],
	"../pages/listacortadores/listacortadores.module": [
		287,
		3
	],
	"../pages/menuprincipa/menuprincipa.module": [
		290,
		2
	],
	"../pages/ventas/ventas.module": [
		283,
		1
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
webpackAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuprincipa_menuprincipa__ = __webpack_require__(112);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\home\home.html"*/'\n\n<body >\n\n<ion-content class="ion-content" padding>\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Iniciar Sesión </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n                          <ion-input type="text" placeholder="Username"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n                        <ion-item>\n\n                          <ion-input type="password" placeholder="Password"></ion-input>\n\n                        </ion-item>\n\n\n\n                  </ion-list>\n\n\n\n        <button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>\n\n</fieldset>\n\n</div>       \n\n\n\n</ion-content>\n\n</body>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_empleados_empleados__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bodega_bodega__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listacortadores_listacortadores__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_editarcortador_editarcortador__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_eliminarcortador_eliminarcortador__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_articulo_articulo__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listaarticulo_listaarticulo__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_articulomodificar_articulomodificar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_editararticulo_editararticulo__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_creararticulo_creararticulo__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_categoria_categoria__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_crearcategoria_crearcategoria__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(205);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__["a" /* EmpleadocortadorPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_editarcortador_editarcortador__["a" /* EditarcortadorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_eliminarcortador_eliminarcortador__["a" /* EliminarcortadorPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_articulo_articulo__["a" /* ArticuloPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_listaarticulo_listaarticulo__["a" /* ListaarticuloPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_editararticulo_editararticulo__["a" /* EditararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_creararticulo_creararticulo__["a" /* CreararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_categoria_categoria__["a" /* CategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/editararticulo/editararticulo.module#EditararticuloPageModule', name: 'EditararticuloPage', segment: 'editararticulo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/articulomodificar/articulomodificar.module#ArticulomodificarPageModule', name: 'ArticulomodificarPage', segment: 'articulomodificar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listaarticulo/listaarticulo.module#ListaarticuloPageModule', name: 'ListaarticuloPage', segment: 'listaarticulo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/creararticulo/creararticulo.module#CreararticuloPageModule', name: 'CreararticuloPage', segment: 'creararticulo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/articulo/articulo.module#ArticuloPageModule', name: 'ArticuloPage', segment: 'articulo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/compras/compras.module#ComprasPageModule', name: 'ComprasPage', segment: 'compras', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ventas/ventas.module#VentasPageModule', name: 'VentasPage', segment: 'ventas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editarcortador/editarcortador.module#EditarcortadorPageModule', name: 'EditarcortadorPage', segment: 'editarcortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/eliminarcortador/eliminarcortador.module#EliminarcortadorPageModule', name: 'EliminarcortadorPage', segment: 'eliminarcortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleadocortador/empleadocortador.module#EmpleadocortadorPageModule', name: 'EmpleadocortadorPage', segment: 'empleadocortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listacortadores/listacortadores.module#ListacortadoresPageModule', name: 'ListacortadoresPage', segment: 'listacortadores', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bodega/bodega.module#BodegaPageModule', name: 'BodegaPage', segment: 'bodega', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menuprincipa/menuprincipa.module#MenuprincipaPageModule', name: 'MenuprincipaPage', segment: 'menuprincipa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/crearcategoria/crearcategoria.module#CrearcategoriaPageModule', name: 'CrearcategoriaPage', segment: 'crearcategoria', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__["a" /* MenuprincipaPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__["a" /* ComprasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__["a" /* VentasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_empleados_empleados__["a" /* EmpleadosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_bodega_bodega__["a" /* BodegaPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_listacortadores_listacortadores__["a" /* ListacortadoresPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__["a" /* EmpleadocortadorPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_editarcortador_editarcortador__["a" /* EditarcortadorPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_eliminarcortador_eliminarcortador__["a" /* EliminarcortadorPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_articulo_articulo__["a" /* ArticuloPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_listaarticulo_listaarticulo__["a" /* ListaarticuloPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_editararticulo_editararticulo__["a" /* EditararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_creararticulo_creararticulo__["a" /* CreararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_categoria_categoria__["a" /* CategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearcategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_categoria__ = __webpack_require__(103);
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
 * Generated class for the CrearcategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CrearcategoriaPage = (function () {
    function CrearcategoriaPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    CrearcategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearcategoriaPage');
    };
    CrearcategoriaPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    CrearcategoriaPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    CrearcategoriaPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Categoria Creada',
            subTitle: 'La categoria fue creada con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoria_categoria__["a" /* CategoriaPage */]);
                    }
                }]
        });
        alert.present();
    };
    return CrearcategoriaPage;
}());
CrearcategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crearcategoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearcategoria\crearcategoria.html"*/'<!--\n\n  Generated template for the CrearcategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearcategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Articulo </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Categoria:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        \n\n \n\n               \n\n                  </ion-list>\n\n\n\n        <!--<button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>-->\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"   (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearcategoria\crearcategoria.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], CrearcategoriaPage);

var _a, _b, _c, _d;
//# sourceMappingURL=crearcategoria.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaarticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulomodificar_articulomodificar__ = __webpack_require__(100);
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
 * Generated class for the ListaarticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListaarticuloPage = (function () {
    function ListaarticuloPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articulo1 = '../assets/img/articulo1.png';
        this.articulo2 = '../assets/img/articulo2.png';
        this.articulo3 = '../assets/img/articulo3.jpg';
        this.articulo4 = '../assets/img/articulo4.jpg';
        this.articulo5 = '../assets/img/articulo5.jpg';
        this.articulo6 = '../assets/img/articulo6.jpg';
    }
    ListaarticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaarticuloPage');
    };
    ListaarticuloPage.prototype.openArticulomodificarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */]);
    };
    return ListaarticuloPage;
}());
ListaarticuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listaarticulo',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listaarticulo\listaarticulo.html"*/'<!--\n\n  Generated template for the ListaarticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listaarticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Articulo</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 2</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 3</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 4</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 5</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 6</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listaarticulo\listaarticulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaarticuloPage);

//# sourceMappingURL=listaarticulo.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditararticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
 * Generated class for the EditararticuloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditararticuloPage = (function () {
    function EditararticuloPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.myForm = this.createMyForm();
    }
    EditararticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditararticuloPage');
    };
    EditararticuloPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    EditararticuloPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            compra: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    return EditararticuloPage;
}());
EditararticuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editararticulo',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editararticulo\editararticulo.html"*/'<!--\n\n  Generated template for the EditararticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editararticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Articulo </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Articulo:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Suela"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cantidad:</ion-label>\n\n                          <ion-input formControlName="cantidad" type="number" placeholder="Cantidad" value="20"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Unidades de medida:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gr</option>\n\n                          <option selected>Kg</option>\n\n                          <option>Lb</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Proveedor:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gonzalo Jaimes</option>\n\n                          <option selected>Maryuri Tatiana</option>\n\n                          <option>Laura Rocio</option>\n\n                          <option>Luis Quintero</option>\n\n                          <option>Heivar Villamiza</option>\n\n                          <option>Carolina Vargas</option>\n\n                          <option>Aide Sepulveda</option>\n\n                          <option>Jhon Jairo</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Compra:</ion-label>\n\n                          <ion-input formControlName="compra" type="number" placeholder="Compra" value="200000"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Categoria:<br>\n\n                         <select class="selectt" >\n\n                          <option selected>Materia Prima</option>\n\n                          <option >Pegantes</option>\n\n                          <option>Zapato</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo de Producto:<br>\n\n                         <select class="selectt" >\n\n                          <option selected>Comprado</option>\n\n                          <option>Producido</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Descripcion:</ion-label>\n\n                          <ion-input type="text" placeholder="Descripcion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n        <!--<button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>-->\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editararticulo\editararticulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], EditararticuloPage);

//# sourceMappingURL=editararticulo.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map