webpackJsonp([31],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditararticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articulomodificar_articulomodificar__ = __webpack_require__(53);
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
    function EditararticuloPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
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
    EditararticuloPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Modificar Articulo',
            message: 'Esta de acuerdo en modificar este articulo',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No Haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */]);
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Si haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return EditararticuloPage;
}());
EditararticuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editararticulo',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editararticulo\editararticulo.html"*/'<!--\n\n  Generated template for the EditararticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editararticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Articulo </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Articulo:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Suela"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cantidad:</ion-label>\n\n                          <ion-input formControlName="cantidad" type="number" placeholder="Cantidad" value="20"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Unidades de medida:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gr</option>\n\n                          <option selected>Kg</option>\n\n                          <option>Lb</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Proveedor:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gonzalo Jaimes</option>\n\n                          <option selected>Maryuri Tatiana</option>\n\n                          <option>Laura Rocio</option>\n\n                          <option>Luis Quintero</option>\n\n                          <option>Heivar Villamiza</option>\n\n                          <option>Carolina Vargas</option>\n\n                          <option>Aide Sepulveda</option>\n\n                          <option>Jhon Jairo</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Compra:</ion-label>\n\n                          <ion-input formControlName="compra" type="number" placeholder="Compra" value="200000"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Categoria:<br>\n\n                         <select class="selectt" >\n\n                          <option selected>Materia Prima</option>\n\n                          <option >Pegantes</option>\n\n                          <option>Zapato</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo de Producto:<br>\n\n                         <select class="selectt" >\n\n                          <option selected>Comprado</option>\n\n                          <option>Producido</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Descripcion:</ion-label>\n\n                          <ion-input type="text" placeholder="Descripcion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n      \n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showConfirm()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editararticulo\editararticulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditararticuloPage);

//# sourceMappingURL=editararticulo.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreararticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articulo_articulo__ = __webpack_require__(55);
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
        selector: 'page-creararticulo',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\creararticulo\creararticulo.html"*/'<!--\n\n  Generated template for the CreararticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>creararticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Articulo </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Articulo:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cantidad:</ion-label>\n\n                          <ion-input formControlName="cantidad" type="number" placeholder="Cantidad"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Unidades de medida:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gr</option>\n\n                          <option selected>Kg</option>\n\n                          <option>Lb</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Proveedor:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gonzalo Jaimes</option>\n\n                          <option selected>Maryuri Tatiana</option>\n\n                          <option>Laura Rocio</option>\n\n                          <option>Luis Quintero</option>\n\n                          <option>Heivar Villamiza</option>\n\n                          <option>Carolina Vargas</option>\n\n                          <option>Aide Sepulveda</option>\n\n                          <option>Jhon Jairo</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Compra:</ion-label>\n\n                          <ion-input formControlName="compra" type="number" placeholder="Compra"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Categoria:<br>\n\n                         <select class="selectt" >\n\n                          <option>Materia Prima</option>\n\n                          <option selected>Pegantes</option>\n\n                          <option>Zapato</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo de Producto:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comprado</option>\n\n                          <option selected>Producido</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Descripcion:</ion-label>\n\n                          <ion-input type="text" placeholder="Descripcion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n        <!--<button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>-->\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\creararticulo\creararticulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreararticuloPage);

//# sourceMappingURL=creararticulo.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearcategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_categoria__ = __webpack_require__(56);
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
        selector: 'page-crearcategoria',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearcategoria\crearcategoria.html"*/'<!--\n\n  Generated template for the CrearcategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearcategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Categoria </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Categoria:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        \n\n \n\n               \n\n                  </ion-list>\n\n\n\n        <!--<button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>-->\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"   (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearcategoria\crearcategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearcategoriaPage);

//# sourceMappingURL=crearcategoria.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarcategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__ = __webpack_require__(57);
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
 * Generated class for the EditarcategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditarcategoriaPage = (function () {
    function EditarcategoriaPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    EditarcategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarcategoriaPage');
    };
    EditarcategoriaPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    EditarcategoriaPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditarcategoriaPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Modificar Categoria',
            message: 'Esta de acuerdo en modificar esta categoria',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No Haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__["a" /* ListacategoriaPage */]);
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Si haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__["a" /* ListacategoriaPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return EditarcategoriaPage;
}());
EditarcategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarcategoria',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarcategoria\editarcategoria.html"*/'<!--\n\n  Generated template for the EditarcategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Categoria </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Categoria:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Materia Prima"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        \n\n \n\n               \n\n                  </ion-list>\n\n\n\n   \n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"   (click)="showConfirm()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarcategoria\editarcategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarcategoriaPage);

//# sourceMappingURL=editarcategoria.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListainventarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ListainventarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListainventarioPage = (function () {
    function ListainventarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListainventarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListainventarioPage');
    };
    return ListainventarioPage;
}());
ListainventarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listainventario',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listainventario\listainventario.html"*/'<!--\n\n  Generated template for the ListainventarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listainventario</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Inventario Actual</h1>\n\n					<div>\n\n				  	<ion-item >\n\n				  	  \n\n				  	  <h2>Codigo:   10</h2>\n\n				      <h3>Nombre:   Materia Prima</h3>\n\n				      <h4>Cantidad: 14</h4>\n\n				      \n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  \n\n				  	  <h2>Codigo:   11</h2>\n\n				      <h3>Nombre:   Pegante</h3>\n\n				      <h4>Cantidad: 10 L</h4>\n\n				      \n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  \n\n				  	  <h2>Codigo:   12</h2>\n\n				      <h3>Nombre:   Zapatos</h3>\n\n				      <h4>Cantidad: 12 P</h4>\n\n				      \n\n				      \n\n					</ion-item>\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listainventario\listainventario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListainventarioPage);

//# sourceMappingURL=listainventario.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedor_proveedor__ = __webpack_require__(58);
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
 * Generated class for the CrearproveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CrearproveedorPage = (function () {
    function CrearproveedorPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    CrearproveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearproveedorPage');
    };
    CrearproveedorPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    CrearproveedorPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            namee: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    CrearproveedorPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Proveedor Creado',
            subTitle: 'El proveedor fue creado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__proveedor_proveedor__["a" /* ProveedorPage */]);
                    }
                }]
        });
        alert.present();
    };
    return CrearproveedorPage;
}());
CrearproveedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crearproveedor',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearproveedor\crearproveedor.html"*/'<!--\n\n  Generated template for the CrearproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Proveedor </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n                        </ion-item>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearproveedor\crearproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearproveedorPage);

//# sourceMappingURL=crearproveedor.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarproveedor_editarproveedor__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__ = __webpack_require__(41);
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
 * Generated class for the ModificarproveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModificarproveedorPage = (function () {
    function ModificarproveedorPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.proveedor1 = '../assets/img/proveedor1.jpg';
    }
    ModificarproveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificarproveedorPage');
    };
    ModificarproveedorPage.prototype.openEditarproveedorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editarproveedor_editarproveedor__["a" /* EditarproveedorPage */]);
    };
    ModificarproveedorPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Proveedor',
            message: 'Esta de acuerdo en eliminar este proveedor',
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__["a" /* ListaproveedorPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ModificarproveedorPage;
}());
ModificarproveedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modificarproveedor',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\modificarproveedor\modificarproveedor.html"*/'<!--\n\n  Generated template for the ModificarproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>modificarproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{proveedor1}}>\n\n				      \n\n				      <h3>Proveedor 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditarproveedorPage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\modificarproveedor\modificarproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModificarproveedorPage);

//# sourceMappingURL=modificarproveedor.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__ = __webpack_require__(41);
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
 * Generated class for the EditarproveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditarproveedorPage = (function () {
    function EditarproveedorPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    EditarproveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarproveedorPage');
    };
    EditarproveedorPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    EditarproveedorPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            namee: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditarproveedorPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Proveedor Modificado',
            subTitle: 'El proveedor fue modificado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__["a" /* ListaproveedorPage */]);
                    }
                }]
        });
        alert.present();
    };
    return EditarproveedorPage;
}());
EditarproveedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarproveedor',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarproveedor\editarproveedor.html"*/'<!--\n\n  Generated template for the EditarproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Proveedor </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"  value="12/12/2012"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Maryuri Tatiana"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido" value="Villamizar"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula" value="1095287891"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa" value="Maryuri S.A.S"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion" value="Avenida 5 N 23-12"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio" value="Toledito"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad" value="Cucuta"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono" value="8812356748"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email" value="maryuri@gmail.com"></ion-input>\n\n                        </ion-item>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarproveedor\editarproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarproveedorPage);

//# sourceMappingURL=editarproveedor.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcliente_editarcliente__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__ = __webpack_require__(42);
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
 * Generated class for the ModificarclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModificarclientePage = (function () {
    function ModificarclientePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.cliente1 = '../assets/img/cliente1.jpg';
    }
    ModificarclientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificarclientePage');
    };
    ModificarclientePage.prototype.openEditarclientePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editarcliente_editarcliente__["a" /* EditarclientePage */]);
    };
    ModificarclientePage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Cliente',
            message: 'Esta de acuerdo en eliminar este cliente',
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__["a" /* ListaclientePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ModificarclientePage;
}());
ModificarclientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modificarcliente',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\modificarcliente\modificarcliente.html"*/'<!--\n\n  Generated template for the ModificarclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>modificarcliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{cliente1}}>\n\n				      \n\n				      <h3>Cliente 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditarclientePage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\modificarcliente\modificarcliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModificarclientePage);

//# sourceMappingURL=modificarcliente.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__ = __webpack_require__(42);
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
 * Generated class for the EditarclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditarclientePage = (function () {
    function EditarclientePage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    EditarclientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarclientePage');
    };
    EditarclientePage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    EditarclientePage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            namee: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditarclientePage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cliente Modificado',
            subTitle: 'El cliente fue modificado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__["a" /* ListaclientePage */]);
                    }
                }]
        });
        alert.present();
    };
    return EditarclientePage;
}());
EditarclientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarcliente',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarcliente\editarcliente.html"*/'<!--\n\n  Generated template for the EditarclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Cliente </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"  value="12/12/2012"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Maryuri Tatiana"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido" value="Villamizar"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula" value="1095287891"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa" value="Maryuri S.A.S"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion" value="Avenida 5 N 23-12"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio" value="Toledito"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad" value="Cucuta"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono" value="8812356748"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email" value="maryuri@gmail.com"></ion-input>\n\n                        </ion-item>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarcliente\editarcliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarclientePage);

//# sourceMappingURL=editarcliente.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente__ = __webpack_require__(60);
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
 * Generated class for the CrearclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CrearclientePage = (function () {
    function CrearclientePage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    CrearclientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearclientePage');
    };
    CrearclientePage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    CrearclientePage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            namee: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    CrearclientePage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cliente Creado',
            subTitle: 'El cliente fue creado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cliente_cliente__["a" /* ClientePage */]);
                    }
                }]
        });
        alert.present();
    };
    return CrearclientePage;
}());
CrearclientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crearcliente',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearcliente\crearcliente.html"*/'<!--\n\n  Generated template for the CrearclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearcliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Cliente </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY">\n\n                     </ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                       \n\n                         <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                       \n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearcliente\crearcliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearclientePage);

//# sourceMappingURL=crearcliente.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the FacturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FacturaPage = (function () {
    function FacturaPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.zapatos1 = '../assets/img/zapatos1.jpg';
        this.zapatos2 = '../assets/img/zapatos2.jpg';
        this.zapatos3 = '../assets/img/zapatos3.jpg';
        this.zapatos4 = '../assets/img/zapatos4.jpg';
        this.zapatos5 = '../assets/img/zapatos5.jpg';
        this.zapatos6 = '../assets/img/zapatos6.jpg';
    }
    FacturaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaPage');
    };
    FacturaPage.prototype.showConfirm = function () {
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
                    }
                }
            ]
        });
        confirm.present();
    };
    FacturaPage.prototype.showConfirme = function () {
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Cliente',
            message: 'Esta de acuerdo en eliminar este cliente',
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
                    }
                }
            ]
        });
        confirm.present();
    };
    FacturaPage.prototype.showConfirmec = function () {
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Factura',
            message: 'Esta de acuerdo en eliminar este factura',
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
                    }
                }
            ]
        });
        confirm.present();
    };
    FacturaPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Factura Guardada',
            subTitle: 'La factura fue guardada con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                    }
                }]
        });
        alert.present();
    };
    return FacturaPage;
}());
FacturaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-factura',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\factura\factura.html"*/'<!--\n\n  Generated template for the FacturaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>factura</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1 class="centro">Facturacion</h1>\n\n				<br>\n\n					<div>\n\n\n\n					    <h1>Cliente</h1>\n\n\n\n					    <ion-searchbar> </ion-searchbar>\n\n					    <ion-item >\n\n				         <h3>Laura Quintero</h3>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirme()">Quitar</button>\n\n					</ion-item>\n\n					    <br>\n\n					    <h1>Lista Articulos</h1>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n\n\n				  		<h1>Lista Articulos</h1>\n\n\n\n\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 1</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 2</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 3</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 4</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 5</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 6</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n\n\n					<ion-item >\n\n				      <h3>TOTAL</h3>\n\n				      <h4 item-end>240000</h4>\n\n				    </ion-item>\n\n\n\n\n\n					\n\n\n\n				   </div>	\n\n\n\n				   <div class="div">\n\n\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="showAlert()">Guardar</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="showConfirmec()">Cancelar</button>\n\n			    </div>    \n\n			    <br>\n\n \n\n			    </div>  \n\n			</div>\n\n				</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\factura\factura.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FacturaPage);

//# sourceMappingURL=factura.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empleados_empleados__ = __webpack_require__(61);
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
 * Generated class for the CrearempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CrearempleadoPage = (function () {
    function CrearempleadoPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    CrearempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearempleadoPage');
    };
    CrearempleadoPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    CrearempleadoPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    CrearempleadoPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Empleado Creado',
            subTitle: 'El empleado fue creado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__empleados_empleados__["a" /* EmpleadosPage */]);
                    }
                }]
        });
        alert.present();
    };
    return CrearempleadoPage;
}());
CrearempleadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crearempleado',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearempleado\crearempleado.html"*/'<!--\n\n  Generated template for the CrearempleadoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearempleado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Empleado</h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo empleado:<br>\n\n                         <select class="selectt" >\n\n                          <option>Cortador</option>\n\n                          <option selected>Guarnecedor</option>\n\n                          <option>Soletero</option>\n\n                          <option>Limpiador</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                       \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                       \n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\crearempleado\crearempleado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearempleadoPage);

//# sourceMappingURL=crearempleado.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modificarempleado_modificarempleado__ = __webpack_require__(63);
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
 * Generated class for the EditarempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditarempleadoPage = (function () {
    function EditarempleadoPage(navCtrl, navParams, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.myForm = this.createMyForm();
    }
    EditarempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarempleadoPage');
    };
    EditarempleadoPage.prototype.saveData = function () {
        console.log(this.myForm.value);
    };
    EditarempleadoPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            dateBirth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cedula: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditarempleadoPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Empleado Modificado',
            subTitle: 'El empleado fue modificado con exito',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        console.log('Ok haga click aqui');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modificarempleado_modificarempleado__["a" /* ModificarempleadoPage */]);
                    }
                }]
        });
        alert.present();
    };
    return EditarempleadoPage;
}());
EditarempleadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarempleado',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarempleado\editarempleado.html"*/'<!--\n\n  Generated template for the EditarempleadoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarempleado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1>Modificar Empleado</h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY" value="12/12/2012"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Carlos"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido" value="Caceres"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula"  value="1092346123"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo empleado:<br>\n\n                         <select class="selectt" >\n\n                          <option>Cortador</option>\n\n                          <option selected>Guarnecedor</option>\n\n                          <option>Soletero</option>\n\n                          <option>Limpiador</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                       \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion" value="Jose Domingo" ></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio" value="Libertad"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad" value="Cucuta"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono" value="3215431209"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email" value="carlos@gmail.com"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                       \n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarempleado\editarempleado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarempleadoPage);

//# sourceMappingURL=editarempleado.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodegaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        selector: 'page-bodega',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\bodega\bodega.html"*/'<!--\n\n  Generated template for the BodegaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>bodega</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\bodega\bodega.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BodegaPage);

//# sourceMappingURL=bodega.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/articulo/articulo.module": [
		296,
		30
	],
	"../pages/articulomodificar/articulomodificar.module": [
		293,
		29
	],
	"../pages/bodega/bodega.module": [
		320,
		28
	],
	"../pages/categoria/categoria.module": [
		300,
		27
	],
	"../pages/cliente/cliente.module": [
		312,
		26
	],
	"../pages/compras/compras.module": [
		307,
		25
	],
	"../pages/creararticulo/creararticulo.module": [
		295,
		24
	],
	"../pages/crearcategoria/crearcategoria.module": [
		297,
		23
	],
	"../pages/crearcliente/crearcliente.module": [
		311,
		22
	],
	"../pages/crearempleado/crearempleado.module": [
		315,
		21
	],
	"../pages/crearproveedor/crearproveedor.module": [
		302,
		20
	],
	"../pages/editararticulo/editararticulo.module": [
		292,
		19
	],
	"../pages/editarcategoria/editarcategoria.module": [
		298,
		18
	],
	"../pages/editarcliente/editarcliente.module": [
		308,
		17
	],
	"../pages/editarcortador/editarcortador.module": [
		322,
		16
	],
	"../pages/editarempleado/editarempleado.module": [
		316,
		15
	],
	"../pages/editarproveedor/editarproveedor.module": [
		303,
		14
	],
	"../pages/empleados/empleados.module": [
		319,
		13
	],
	"../pages/factura/factura.module": [
		313,
		12
	],
	"../pages/listaarticulo/listaarticulo.module": [
		294,
		11
	],
	"../pages/listacategoria/listacategoria.module": [
		299,
		10
	],
	"../pages/listacliente/listacliente.module": [
		310,
		9
	],
	"../pages/listaempleado/listaempleado.module": [
		318,
		8
	],
	"../pages/listainventario/listainventario.module": [
		301,
		7
	],
	"../pages/listaproveedor/listaproveedor.module": [
		305,
		6
	],
	"../pages/menuprincipa/menuprincipa.module": [
		321,
		5
	],
	"../pages/modificarcliente/modificarcliente.module": [
		309,
		4
	],
	"../pages/modificarempleado/modificarempleado.module": [
		317,
		3
	],
	"../pages/modificarproveedor/modificarproveedor.module": [
		304,
		2
	],
	"../pages/proveedor/proveedor.module": [
		306,
		1
	],
	"../pages/ventas/ventas.module": [
		314,
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
webpackAsyncContext.id = 178;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuprincipaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_compras__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ventas_ventas__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empleados_empleados__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodega_bodega__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(91);
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
    MenuprincipaPage.prototype.openHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    return MenuprincipaPage;
}());
MenuprincipaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menuprincipa',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\menuprincipa\menuprincipa.html"*/'<!--\n\n  Generated template for the MenuprincipaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar>\n\n		<ion-title>Menu</ion-title>\n\n	</ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n	<div class="imagen">\n\n	 <img  src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<div class="div1">\n\n		\n\n\n\n			<div class="div2">\n\n				<button class="botonmenu" ion-button button-positive (click)="openComprasPage()">Compras </button>\n\n\n\n				<button class="botonmenu" ion-button button-positive (click)="openVentasPage()">Ventas</button>\n\n			</div>    \n\n			<br>\n\n			<div class="div3">\n\n				<button class="botonmenu" ion-button button-positive (click)="openEmpleadosPage()">Empleados</button>\n\n\n\n				<button class="botonmenu" ion-button button-positive (click)="openBodegaPage()">Bodega</button>\n\n			</div>  \n\n		 \n\n	</div>\n\n\n\n		<div class="salir-div">\n\n    <button class="mi-div-abajo-derecha" ion-button color="danger" (click)="openHomePage()">Salir</button>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\menuprincipa\menuprincipa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MenuprincipaPage);

//# sourceMappingURL=menuprincipa.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarcortadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        selector: 'page-editarcortador',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarcortador\editarcortador.html"*/'<!--\n\n  Generated template for the EditarcortadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcortador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\editarcortador\editarcortador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EditarcortadorPage);

//# sourceMappingURL=editarcortador.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bodega_bodega__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_editarcortador_editarcortador__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_articulo_articulo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_listaarticulo_listaarticulo__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_articulomodificar_articulomodificar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_editararticulo_editararticulo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_creararticulo_creararticulo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categoria_categoria__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_crearcategoria_crearcategoria__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_listacategoria_listacategoria__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_editarcategoria_editarcategoria__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_listainventario_listainventario__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_proveedor_proveedor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_listaproveedor_listaproveedor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editarproveedor_editarproveedor__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_modificarproveedor_modificarproveedor__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_crearproveedor_crearproveedor__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cliente_cliente__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_crearcliente_crearcliente__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_editarcliente_editarcliente__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_listacliente_listacliente__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_modificarcliente_modificarcliente__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_factura_factura__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_empleados_empleados__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editarempleado_editarempleado__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_modificarempleado_modificarempleado__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_crearempleado_crearempleado__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_listaempleado_listaempleado__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__ = __webpack_require__(221);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_bodega_bodega__["a" /* BodegaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_editarcortador_editarcortador__["a" /* EditarcortadorPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_articulo_articulo__["a" /* ArticuloPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_listaarticulo_listaarticulo__["a" /* ListaarticuloPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_editararticulo_editararticulo__["a" /* EditararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_creararticulo_creararticulo__["a" /* CreararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_categoria_categoria__["a" /* CategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_listacategoria_listacategoria__["a" /* ListacategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_editarcategoria_editarcategoria__["a" /* EditarcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_listainventario_listainventario__["a" /* ListainventarioPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_proveedor_proveedor__["a" /* ProveedorPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_listaproveedor_listaproveedor__["a" /* ListaproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_editarproveedor_editarproveedor__["a" /* EditarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_modificarproveedor_modificarproveedor__["a" /* ModificarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_crearproveedor_crearproveedor__["a" /* CrearproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_cliente_cliente__["a" /* ClientePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_crearcliente_crearcliente__["a" /* CrearclientePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_editarcliente_editarcliente__["a" /* EditarclientePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_listacliente_listacliente__["a" /* ListaclientePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_modificarcliente_modificarcliente__["a" /* ModificarclientePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_factura_factura__["a" /* FacturaPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_empleados_empleados__["a" /* EmpleadosPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_editarempleado_editarempleado__["a" /* EditarempleadoPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_modificarempleado_modificarempleado__["a" /* ModificarempleadoPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_crearempleado_crearempleado__["a" /* CrearempleadoPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_listaempleado_listaempleado__["a" /* ListaempleadoPage */],
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
                    { loadChildren: '../pages/crearcategoria/crearcategoria.module#CrearcategoriaPageModule', name: 'CrearcategoriaPage', segment: 'crearcategoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editarcategoria/editarcategoria.module#EditarcategoriaPageModule', name: 'EditarcategoriaPage', segment: 'editarcategoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listacategoria/listacategoria.module#ListacategoriaPageModule', name: 'ListacategoriaPage', segment: 'listacategoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listainventario/listainventario.module#ListainventarioPageModule', name: 'ListainventarioPage', segment: 'listainventario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/crearproveedor/crearproveedor.module#CrearproveedorPageModule', name: 'CrearproveedorPage', segment: 'crearproveedor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editarproveedor/editarproveedor.module#EditarproveedorPageModule', name: 'EditarproveedorPage', segment: 'editarproveedor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modificarproveedor/modificarproveedor.module#ModificarproveedorPageModule', name: 'ModificarproveedorPage', segment: 'modificarproveedor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listaproveedor/listaproveedor.module#ListaproveedorPageModule', name: 'ListaproveedorPage', segment: 'listaproveedor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/proveedor/proveedor.module#ProveedorPageModule', name: 'ProveedorPage', segment: 'proveedor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/compras/compras.module#ComprasPageModule', name: 'ComprasPage', segment: 'compras', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editarcliente/editarcliente.module#EditarclientePageModule', name: 'EditarclientePage', segment: 'editarcliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modificarcliente/modificarcliente.module#ModificarclientePageModule', name: 'ModificarclientePage', segment: 'modificarcliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listacliente/listacliente.module#ListaclientePageModule', name: 'ListaclientePage', segment: 'listacliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/crearcliente/crearcliente.module#CrearclientePageModule', name: 'CrearclientePage', segment: 'crearcliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cliente/cliente.module#ClientePageModule', name: 'ClientePage', segment: 'cliente', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/factura/factura.module#FacturaPageModule', name: 'FacturaPage', segment: 'factura', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ventas/ventas.module#VentasPageModule', name: 'VentasPage', segment: 'ventas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/crearempleado/crearempleado.module#CrearempleadoPageModule', name: 'CrearempleadoPage', segment: 'crearempleado', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editarempleado/editarempleado.module#EditarempleadoPageModule', name: 'EditarempleadoPage', segment: 'editarempleado', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modificarempleado/modificarempleado.module#ModificarempleadoPageModule', name: 'ModificarempleadoPage', segment: 'modificarempleado', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listaempleado/listaempleado.module#ListaempleadoPageModule', name: 'ListaempleadoPage', segment: 'listaempleado', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bodega/bodega.module#BodegaPageModule', name: 'BodegaPage', segment: 'bodega', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menuprincipa/menuprincipa.module#MenuprincipaPageModule', name: 'MenuprincipaPage', segment: 'menuprincipa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editarcortador/editarcortador.module#EditarcortadorPageModule', name: 'EditarcortadorPage', segment: 'editarcortador', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_8__pages_bodega_bodega__["a" /* BodegaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_editarcortador_editarcortador__["a" /* EditarcortadorPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_articulo_articulo__["a" /* ArticuloPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_listaarticulo_listaarticulo__["a" /* ListaarticuloPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_articulomodificar_articulomodificar__["a" /* ArticulomodificarPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_editararticulo_editararticulo__["a" /* EditararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_creararticulo_creararticulo__["a" /* CreararticuloPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_categoria_categoria__["a" /* CategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_listacategoria_listacategoria__["a" /* ListacategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_editarcategoria_editarcategoria__["a" /* EditarcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_listainventario_listainventario__["a" /* ListainventarioPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_proveedor_proveedor__["a" /* ProveedorPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_listaproveedor_listaproveedor__["a" /* ListaproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_editarproveedor_editarproveedor__["a" /* EditarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_modificarproveedor_modificarproveedor__["a" /* ModificarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_crearproveedor_crearproveedor__["a" /* CrearproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_cliente_cliente__["a" /* ClientePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_crearcliente_crearcliente__["a" /* CrearclientePage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_editarcliente_editarcliente__["a" /* EditarclientePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_listacliente_listacliente__["a" /* ListaclientePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_modificarcliente_modificarcliente__["a" /* ModificarclientePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_factura_factura__["a" /* FacturaPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_empleados_empleados__["a" /* EmpleadosPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_editarempleado_editarempleado__["a" /* EditarempleadoPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_modificarempleado_modificarempleado__["a" /* ModificarempleadoPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_crearempleado_crearempleado__["a" /* CrearempleadoPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_listaempleado_listaempleado__["a" /* ListaempleadoPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(91);
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulo_articulo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_categoria__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listainventario_listainventario__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proveedor_proveedor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menuprincipa_menuprincipa__ = __webpack_require__(19);
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
    ComprasPage.prototype.openListainventarioPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listainventario_listainventario__["a" /* ListainventarioPage */]);
    };
    ComprasPage.prototype.openProveedorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__proveedor_proveedor__["a" /* ProveedorPage */]);
    };
    ComprasPage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    return ComprasPage;
}());
ComprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compras',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\compras\compras.html"*/'<!--\n\n  Generated template for the ComprasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title >compras</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<h1 class="h1">Compras</h1>\n\n	<div class="div1">\n\n			\n\n				\n\n				<div class="div2">\n\n			        <button class="botonmenu" ion-button button-positive (click)="openArticuloPage()">Articulo</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCategoriaPage()">Categorias</button>\n\n			    </div>    \n\n			    <br>\n\n			    <div class="div3">\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListainventarioPage()">Inventario</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openProveedorPage()">Proveedores</button>\n\n			    </div>  \n\n			     \n\n		\n\n			</div>\n\n					<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back" (click)="openMenuprincipaPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\compras\compras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ComprasPage);

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificarproveedor_modificarproveedor__ = __webpack_require__(120);
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
 * Generated class for the ListaproveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListaproveedorPage = (function () {
    function ListaproveedorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor1 = '../assets/img/proveedor1.jpg';
        this.proveedor2 = '../assets/img/proveedor2.jpg';
        this.proveedor3 = '../assets/img/proveedor3.jpg';
        this.proveedor4 = '../assets/img/proveedor4.jpg';
        this.proveedor5 = '../assets/img/proveedor5.jpg';
        this.proveedor6 = '../assets/img/proveedor6.jpg';
    }
    ListaproveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaproveedorPage');
    };
    ListaproveedorPage.prototype.openModificarproveedorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modificarproveedor_modificarproveedor__["a" /* ModificarproveedorPage */]);
    };
    return ListaproveedorPage;
}());
ListaproveedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listaproveedor',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listaproveedor\listaproveedor.html"*/'<!--\n\n  Generated template for the ListaproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listaproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Proveedor</h1>\n\n					<div>\n\n				  		<ion-searchbar placeholder="Buscar Lista de Proveedoress"> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listaproveedor\listaproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaproveedorPage);

//# sourceMappingURL=listaproveedor.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificarcliente_modificarcliente__ = __webpack_require__(122);
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
 * Generated class for the ListaclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListaclientePage = (function () {
    function ListaclientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente1 = '../assets/img/cliente1.jpg';
        this.cliente2 = '../assets/img/cliente2.jpg';
        this.cliente3 = '../assets/img/cliente3.jpg';
        this.cliente4 = '../assets/img/cliente4.jpg';
        this.cliente5 = '../assets/img/cliente5.jpg';
        this.cliente6 = '../assets/img/cliente6.jpg';
    }
    ListaclientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaclientePage');
    };
    ListaclientePage.prototype.openModificarclientePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modificarcliente_modificarcliente__["a" /* ModificarclientePage */]);
    };
    return ListaclientePage;
}());
ListaclientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listacliente',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listacliente\listacliente.html"*/'<!--\n\n  Generated template for the ListaclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listacliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Cliente</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listacliente\listacliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaclientePage);

//# sourceMappingURL=listacliente.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticulomodificarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editararticulo_editararticulo__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaarticulo_listaarticulo__ = __webpack_require__(54);
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
        selector: 'page-articulomodificar',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\articulomodificar\articulomodificar.html"*/'<!--\n\n  Generated template for the ArticulomodificarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>articulomodificar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{Imagen}}>\n\n				      \n\n				      <h3>Articulo 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditararticuloPage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\articulomodificar\articulomodificar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ArticulomodificarPage);

//# sourceMappingURL=articulomodificar.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaarticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulomodificar_articulomodificar__ = __webpack_require__(53);
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
        selector: 'page-listaarticulo',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listaarticulo\listaarticulo.html"*/'<!--\n\n  Generated template for the ListaarticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listaarticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Articulo</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 2</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 3</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 4</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 5</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{articulo6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Articulo 6</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openArticulomodificarPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listaarticulo\listaarticulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaarticuloPage);

//# sourceMappingURL=listaarticulo.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listaarticulo_listaarticulo__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creararticulo_creararticulo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compras_compras__ = __webpack_require__(32);
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
    ArticuloPage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    ArticuloPage.prototype.openComprasPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__compras_compras__["a" /* ComprasPage */]);
    };
    return ArticuloPage;
}());
ArticuloPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-articulo',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\articulo\articulo.html"*/'<!--\n\n  Generated template for the ArticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>articulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<br>\n\n	<h1 class="h1">Articulo</h1>\n\n	<br>\n\n<br>\n\n\n\n	<div class="div1">\n\n			\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCreararticuloPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaarticuloPage()">Listado</button>\n\n			    </div>    \n\n			    <br>\n\n			     \n\n			    </div>  \n\n			</div>\n\n\n\n			<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back" (click)="openComprasPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\articulo\articulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ArticuloPage);

//# sourceMappingURL=articulo.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearcategoria_crearcategoria__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compras_compras__ = __webpack_require__(32);
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
    CategoriaPage.prototype.openListacategoriaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__["a" /* ListacategoriaPage */]);
    };
    CategoriaPage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    CategoriaPage.prototype.openComprasPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__compras_compras__["a" /* ComprasPage */]);
    };
    return CategoriaPage;
}());
CategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categoria',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\categoria\categoria.html"*/'<!--\n\n  Generated template for the CategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>categoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<br>\n\n\n\n	<h1 class="h1">Categoria</h1>\n\n	<br>\n\n	<div class="div1">\n\n			\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearcategoriaPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListacategoriaPage()">Listado</button>\n\n			    </div>    \n\n\n\n			    </div>  \n\n			</div>\n\n\n\n			<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back"(click)="openComprasPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\categoria\categoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CategoriaPage);

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcategoria_editarcategoria__ = __webpack_require__(117);
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
 * Generated class for the ListacategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListacategoriaPage = ListacategoriaPage_1 = (function () {
    function ListacategoriaPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.materia = '../assets/img/materiaprima.jpg';
        this.pegante = '../assets/img/pegante.jpg';
        this.zapatos = '../assets/img/zapatos.jpg';
    }
    ListacategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListacategoriaPage');
    };
    ListacategoriaPage.prototype.openEditarcategoriaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editarcategoria_editarcategoria__["a" /* EditarcategoriaPage */]);
    };
    ListacategoriaPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Categoria',
            message: 'Esta de acuerdo en eliminar esta categoria',
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
                        _this.navCtrl.push(ListacategoriaPage_1);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ListacategoriaPage;
}());
ListacategoriaPage = ListacategoriaPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listacategoria',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listacategoria\listacategoria.html"*/'<!--\n\n  Generated template for the ListacategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listacategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Categorias</h1>\n\n					<div>\n\n\n\n					<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{materia}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Materia Prima</h3>\n\n				      <button ion-button clear  (click)="openEditarcategoriaPage()">Modificar</button>\n\n				      <button ion-button clear item-end (click)="showConfirm()">Eliminar</button>\n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{pegante}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Pegante</h3>\n\n				      <button ion-button clear  (click)="openEditarcategoriaPage()">Modificar</button>\n\n				      <button ion-button clear item-end (click)="showConfirm()">Eliminar</button>\n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos</h3>\n\n				      <button ion-button clear  (click)="openEditarcategoriaPage()">Modificar</button>\n\n				      <button ion-button clear item-end (click)="showConfirm()">Eliminar</button>\n\n				      \n\n					</ion-item>\n\n\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listacategoria\listacategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ListacategoriaPage);

var ListacategoriaPage_1;
//# sourceMappingURL=listacategoria.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearproveedor_crearproveedor__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compras_compras__ = __webpack_require__(32);
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
 * Generated class for the ProveedorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProveedorPage = (function () {
    function ProveedorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProveedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProveedorPage');
    };
    ProveedorPage.prototype.openListaproveedorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__["a" /* ListaproveedorPage */]);
    };
    ProveedorPage.prototype.openCrearproveedorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crearproveedor_crearproveedor__["a" /* CrearproveedorPage */]);
    };
    ProveedorPage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    ProveedorPage.prototype.openComprasPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__compras_compras__["a" /* ComprasPage */]);
    };
    return ProveedorPage;
}());
ProveedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-proveedor',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\proveedor\proveedor.html"*/'<!--\n\n  Generated template for the ProveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>proveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<br>\n\n<h1 class="h1">Proveedor</h1>\n\n<br>\n\n<br>\n\n\n\n	<div class="div1">\n\n\n\n			\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearproveedorPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaproveedorPage()">Listado</button>\n\n			    </div>    \n\n			    <br>\n\n			     \n\n			    </div>  \n\n			</div>\n\n<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back"(click)="openComprasPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\proveedor\proveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProveedorPage);

//# sourceMappingURL=proveedor.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_cliente__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factura_factura__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__ = __webpack_require__(19);
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
    VentasPage.prototype.openClientePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cliente_cliente__["a" /* ClientePage */]);
    };
    VentasPage.prototype.openFacturaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__factura_factura__["a" /* FacturaPage */]);
    };
    VentasPage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    return VentasPage;
}());
VentasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ventas',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\ventas\ventas.html"*/'<!--\n\n  Generated template for the VentasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ventas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<br>\n\n	<h1 class="h1">Ventas</h1>\n\n	<br>\n\n	<div class="div1">\n\n		\n\n			\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openClientePage()">Cliente</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openFacturaPage()">Factura</button>\n\n			    </div>    \n\n			    <br>\n\n \n\n			    </div>  \n\n			</div>\n\n			<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back"(click)="openMenuprincipaPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\ventas\ventas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], VentasPage);

//# sourceMappingURL=ventas.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listacliente_listacliente__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crearcliente_crearcliente__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ventas_ventas__ = __webpack_require__(59);
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
 * Generated class for the ClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClientePage = (function () {
    function ClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientePage');
    };
    ClientePage.prototype.openListaclientePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listacliente_listacliente__["a" /* ListaclientePage */]);
    };
    ClientePage.prototype.openCrearclientePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__crearcliente_crearcliente__["a" /* CrearclientePage */]);
    };
    ClientePage.prototype.openVentasPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ventas_ventas__["a" /* VentasPage */]);
    };
    ClientePage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    return ClientePage;
}());
ClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cliente',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\cliente\cliente.html"*/'<!--\n\n  Generated template for the ClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<br>\n\n	<h1 class="h1">Cliente</h1>\n\n	<br>\n\n	<div class="div1">\n\n			\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearclientePage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaclientePage()">Listado</button>\n\n			    </div>    \n\n			    <br>\n\n			     \n\n			    </div>  \n\n			</div>\n\n\n\n			<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back"(click)="openVentasPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\cliente\cliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ClientePage);

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearempleado_crearempleado__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaempleado_listaempleado__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__ = __webpack_require__(19);
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
var EmpleadosPage = EmpleadosPage_1 = (function () {
    function EmpleadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpleadosPage');
    };
    EmpleadosPage.prototype.openCrearempleadoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crearempleado_crearempleado__["a" /* CrearempleadoPage */]);
    };
    EmpleadosPage.prototype.openListaempleadoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listaempleado_listaempleado__["a" /* ListaempleadoPage */]);
    };
    EmpleadosPage.prototype.openEmpleadosPage = function () {
        this.navCtrl.push(EmpleadosPage_1);
    };
    EmpleadosPage.prototype.openMenuprincipaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menuprincipa_menuprincipa__["a" /* MenuprincipaPage */]);
    };
    return EmpleadosPage;
}());
EmpleadosPage = EmpleadosPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-empleados',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\empleados\empleados.html"*/'<!--\n\n  Generated template for the EmpleadosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>empleados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="imagen">\n\n	 <img  (click)="openMenuprincipaPage()" src="../assets/img/oklesh.png"/>\n\n	</div>\n\n	<br>\n\n			<h1 class="h1">Empleados</h1>	\n\n			<br>\n\n	<div class="div1">\n\n\n\n\n\n			<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearempleadoPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaempleadoPage()">Listado</button>\n\n			    </div>    \n\n			    <br>  \n\n			    </div>  \n\n			</div>\n\n			<div class="div11">\n\n						     <div class="icons-basic-page salir-div">\n\n				 			<ion-col><ion-icon class="mi-div-abajo-derecha" name="arrow-back"(click)="openMenuprincipaPage()"></ion-icon></ion-col>\n\n							</div>\n\n					</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\empleados\empleados.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EmpleadosPage);

var EmpleadosPage_1;
//# sourceMappingURL=empleados.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificarempleado_modificarempleado__ = __webpack_require__(63);
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
 * Generated class for the ListaempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListaempleadoPage = (function () {
    function ListaempleadoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.empleado1 = '../assets/img/cara1.jpg';
        this.empleado2 = '../assets/img/cara2.jpg';
        this.empleado3 = '../assets/img/cara3.jpg';
        this.empleado4 = '../assets/img/cara4.jpg';
        this.empleado5 = '../assets/img/cara5.jpg';
        this.empleado6 = '../assets/img/cara6.jpg';
    }
    ListaempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaempleadoPage');
    };
    ListaempleadoPage.prototype.openModificarempleadoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modificarempleado_modificarempleado__["a" /* ModificarempleadoPage */]);
    };
    return ListaempleadoPage;
}());
ListaempleadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listaempleado',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listaempleado\listaempleado.html"*/'<!--\n\n  Generated template for the ListaempleadoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listaempleado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Empleado</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{empleado1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Empleado 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarempleadoPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{empleado2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Empleado 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarempleadoPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{empleado3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Empleado 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarempleadoPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{empleado4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Empleado 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarempleadoPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{empleado5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Empleado 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarempleadoPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{empleado6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Empleado 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarempleadoPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n\n					\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\listaempleado\listaempleado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaempleadoPage);

//# sourceMappingURL=listaempleado.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarempleadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listaempleado_listaempleado__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editarempleado_editarempleado__ = __webpack_require__(127);
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
 * Generated class for the ModificarempleadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModificarempleadoPage = (function () {
    function ModificarempleadoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.empleado1 = '../assets/img/cara1.jpg';
    }
    ModificarempleadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificarempleadoPage');
    };
    ModificarempleadoPage.prototype.openEditarempleadoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editarempleado_editarempleado__["a" /* EditarempleadoPage */]);
    };
    ModificarempleadoPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Eliminar Empleado',
            message: 'Esta de acuerdo en eliminar este empleado',
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listaempleado_listaempleado__["a" /* ListaempleadoPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return ModificarempleadoPage;
}());
ModificarempleadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modificarempleado',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\modificarempleado\modificarempleado.html"*/'<!--\n\n  Generated template for the ModificarempleadoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>modificarempleado</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{empleado1}}>\n\n				      \n\n				      <h3>Empleado 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditarempleadoPage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\modificarempleado\modificarempleado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModificarempleadoPage);

//# sourceMappingURL=modificarempleado.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuprincipa_menuprincipa__ = __webpack_require__(19);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\home\home.html"*/'\n\n<body >\n\n<ion-content class="ion-content" padding>\n\n\n\n                <div class="imagen">\n\n               <img  src="../assets/img/oklesh.png"/>\n\n              </div>\n\n\n\n                  <ion-list class="sesion">\n\n\n\n                  \n\n\n\n                        <ion-item >\n\n                          <ion-input type="text" placeholder="Username"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n                        <ion-item >\n\n                          <ion-input type="password" placeholder="Password"></ion-input>\n\n                        </ion-item>\n\n\n\n                        <br><br>\n\n\n\n                        <button ion-button button-positive style="background:#3D311D;" (click)="openMenuprincipaPage()">Iniciar  Sesión</button>\n\n\n\n\n\n\n\n                        \n\n                  </ion-list>\n\n\n\n                  <ion-item class="descc">\n\n                        <p class="descl">Descripcion de la empresa</p>\n\n                  </ion-item> \n\n\n\n</ion-content>\n\n</body>'/*ion-inline-end:"C:\Users\LABCO-3\documents\oklesh\appoklesh\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map