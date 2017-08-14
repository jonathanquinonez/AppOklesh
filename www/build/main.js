webpackJsonp([30],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditararticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articulomodificar_articulomodificar__ = __webpack_require__(51);
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
        selector: 'page-editararticulo',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editararticulo\editararticulo.html"*/'<!--\n\n  Generated template for the EditararticuloPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editararticulo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Articulo </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Articulo:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Suela"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cantidad:</ion-label>\n\n                          <ion-input formControlName="cantidad" type="number" placeholder="Cantidad" value="20"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Unidades de medida:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gr</option>\n\n                          <option selected>Kg</option>\n\n                          <option>Lb</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Proveedor:<br>\n\n                         <select class="selectt" >\n\n                          <option>Gonzalo Jaimes</option>\n\n                          <option selected>Maryuri Tatiana</option>\n\n                          <option>Laura Rocio</option>\n\n                          <option>Luis Quintero</option>\n\n                          <option>Heivar Villamiza</option>\n\n                          <option>Carolina Vargas</option>\n\n                          <option>Aide Sepulveda</option>\n\n                          <option>Jhon Jairo</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Compra:</ion-label>\n\n                          <ion-input formControlName="compra" type="number" placeholder="Compra" value="200000"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Categoria:<br>\n\n                         <select class="selectt" >\n\n                          <option selected>Materia Prima</option>\n\n                          <option >Pegantes</option>\n\n                          <option>Zapato</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Tipo de Producto:<br>\n\n                         <select class="selectt" >\n\n                          <option selected>Comprado</option>\n\n                          <option>Producido</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Descripcion:</ion-label>\n\n                          <ion-input type="text" placeholder="Descripcion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n      \n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showConfirm()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editararticulo\editararticulo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditararticuloPage);

//# sourceMappingURL=editararticulo.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreararticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articulo_articulo__ = __webpack_require__(53);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreararticuloPage);

//# sourceMappingURL=creararticulo.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearcategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_categoria__ = __webpack_require__(54);
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
        selector: 'page-crearcategoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearcategoria\crearcategoria.html"*/'<!--\n\n  Generated template for the CrearcategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearcategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Categoria </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Categoria:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        \n\n \n\n               \n\n                  </ion-list>\n\n\n\n        <!--<button ion-button button-positive (click)="openMenuprincipaPage()">Iniciar  Sesión</button>-->\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"   (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearcategoria\crearcategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearcategoriaPage);

//# sourceMappingURL=crearcategoria.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarcategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__ = __webpack_require__(55);
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
        selector: 'page-editarcategoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcategoria\editarcategoria.html"*/'<!--\n\n  Generated template for the EditarcategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Categoria </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Categoria:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Materia Prima"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        \n\n \n\n               \n\n                  </ion-list>\n\n\n\n   \n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"   (click)="showConfirm()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcategoria\editarcategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarcategoriaPage);

//# sourceMappingURL=editarcategoria.js.map

/***/ }),

/***/ 111:
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
        selector: 'page-listainventario',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listainventario\listainventario.html"*/'<!--\n\n  Generated template for the ListainventarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listainventario</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Inventario Actual</h1>\n\n					<div>\n\n				  	<ion-item >\n\n				  	  \n\n				  	  <h2>Codigo:   10</h2>\n\n				      <h3>Nombre:   Materia Prima</h3>\n\n				      <h4>Cantidad: 14</h4>\n\n				      \n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  \n\n				  	  <h2>Codigo:   11</h2>\n\n				      <h3>Nombre:   Pegante</h3>\n\n				      <h4>Cantidad: 10 L</h4>\n\n				      \n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  \n\n				  	  <h2>Codigo:   12</h2>\n\n				      <h3>Nombre:   Zapatos</h3>\n\n				      <h4>Cantidad: 12 P</h4>\n\n				      \n\n				      \n\n					</ion-item>\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listainventario\listainventario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListainventarioPage);

//# sourceMappingURL=listainventario.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedor_proveedor__ = __webpack_require__(56);
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
        selector: 'page-crearproveedor',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearproveedor\crearproveedor.html"*/'<!--\n\n  Generated template for the CrearproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Proveedor </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n                        </ion-item>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearproveedor\crearproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearproveedorPage);

//# sourceMappingURL=crearproveedor.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarproveedor_editarproveedor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__ = __webpack_require__(39);
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
        selector: 'page-modificarproveedor',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\modificarproveedor\modificarproveedor.html"*/'<!--\n\n  Generated template for the ModificarproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>modificarproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{proveedor1}}>\n\n				      \n\n				      <h3>Proveedor 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditarproveedorPage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\modificarproveedor\modificarproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModificarproveedorPage);

//# sourceMappingURL=modificarproveedor.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__ = __webpack_require__(39);
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
        selector: 'page-editarproveedor',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarproveedor\editarproveedor.html"*/'<!--\n\n  Generated template for the EditarproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Proveedor </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"  value="12/12/2012"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Maryuri Tatiana"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido" value="Villamizar"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula" value="1095287891"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa" value="Maryuri S.A.S"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion" value="Avenida 5 N 23-12"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio" value="Toledito"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad" value="Cucuta"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono" value="8812356748"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email" value="maryuri@gmail.com"></ion-input>\n\n                        </ion-item>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarproveedor\editarproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarproveedorPage);

//# sourceMappingURL=editarproveedor.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulo_articulo__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_categoria__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listainventario_listainventario__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proveedor_proveedor__ = __webpack_require__(56);
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
    return ComprasPage;
}());
ComprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compras',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\compras\compras.html"*/'<!--\n\n  Generated template for the ComprasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>compras</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Compras</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openArticuloPage()">Articulo</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCategoriaPage()">Categorias</button>\n\n			    </div>    \n\n			    <br>\n\n			    <div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListainventarioPage()">Inventario</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openProveedorPage()">Proveedores</button>\n\n			    </div>  \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\compras\compras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ComprasPage);

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__ = __webpack_require__(40);
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
        selector: 'page-editarcliente',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcliente\editarcliente.html"*/'<!--\n\n  Generated template for the EditarclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Cliente </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"  value="12/12/2012"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Maryuri Tatiana"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido" value="Villamizar"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula" value="1095287891"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa" value="Maryuri S.A.S"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion" value="Avenida 5 N 23-12"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio" value="Toledito"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad" value="Cucuta"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono" value="8812356748"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email" value="maryuri@gmail.com"></ion-input>\n\n                        </ion-item>\n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcliente\editarcliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditarclientePage);

//# sourceMappingURL=editarcliente.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcliente_editarcliente__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__ = __webpack_require__(40);
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
        selector: 'page-modificarcliente',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\modificarcliente\modificarcliente.html"*/'<!--\n\n  Generated template for the ModificarclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>modificarcliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n			<div class="div">\n\n\n\n			\n\n				  	  \n\n				      <img src={{cliente1}}>\n\n				      \n\n				      <h3>Cliente 1</h3>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <div>\n\n\n\n				      <button ion-button color="secondary" round (click)="openEditarclientePage()">Editar</button>\n\n				      <button ion-button color="danger" round (click)="showConfirm()">Eliminar</button>\n\n\n\n					  </div>\n\n			</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\modificarcliente\modificarcliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModificarclientePage);

//# sourceMappingURL=modificarcliente.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cliente_cliente__ = __webpack_require__(57);
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
        selector: 'page-crearcliente',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearcliente\crearcliente.html"*/'<!--\n\n  Generated template for the CrearclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>crearcliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Crear Cliente </h1>  \n\n                  <ion-list>\n\n\n\n                  <ion-item>\n\n                     <ion-icon name="calendar" item-left></ion-icon>\n\n                     <ion-label stacked>Fecha de registro:</ion-label>\n\n                     <ion-datetime formControlName="dateBirth" displayFormat="DD-MM-YYYY" placeholder="DD-MM-YYY"></ion-datetime>\n\n                     </ion-item>\n\n\n\n                     <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Apellido:</ion-label>\n\n                          <ion-input formControlName="apellido" type="text" placeholder="Apellido"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Cedula:</ion-label>\n\n                          <ion-input formControlName="cedula" type="number" placeholder="Cedula"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                         <ion-icon name="arrow-dropdown" item-left></ion-icon>\n\n                         <ion-label stacked>Actividad comercial:<br>\n\n                         <select class="selectt" >\n\n                          <option>Comercio</option>\n\n                          <option selected>Servicio</option>\n\n                         </select>\n\n                         </ion-label>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Empresa:</ion-label>\n\n                          <ion-input formControlName="namee" type="text" placeholder="Nombre Empresa"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Direccion:</ion-label>\n\n                          <ion-input formControlName="direccion" type="text" placeholder="Direccion"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Barrio:</ion-label>\n\n                          <ion-input formControlName="barrio" type="text" placeholder="Barrio"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Ciudad:</ion-label>\n\n                          <ion-input formControlName="ciudad" type="text" placeholder="Ciudad"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                       \n\n\n\n                        <ion-item>\n\n                          <ion-icon name="log-out" item-left></ion-icon>\n\n                          <ion-label stacked>Telefono:</ion-label>\n\n                          <ion-input formControlName="telefono" type="number" placeholder="Telefono"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n                        \n\n\n\n                        \n\n\n\n                        <ion-item>\n\n                           <ion-icon name="mail" item-left></ion-icon>\n\n                           <ion-label stacked>Correo electronico:</ion-label>\n\n                           <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n                        </ion-item>\n\n                        <br>\n\n\n\n\n\n                       \n\n \n\n               \n\n                  </ion-list>\n\n\n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"  (click)="showAlert()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\crearcliente\crearcliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CrearclientePage);

//# sourceMappingURL=crearcliente.js.map

/***/ }),

/***/ 119:
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
        selector: 'page-factura',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\factura\factura.html"*/'<!--\n\n  Generated template for the FacturaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>factura</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1 class="centro">Facturacion</h1>\n\n				<br>\n\n					<div>\n\n\n\n					    <h1>Cliente</h1>\n\n\n\n					    <ion-searchbar> </ion-searchbar>\n\n					    <ion-item >\n\n				         <h3>Laura Quintero</h3>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirme()">Quitar</button>\n\n					</ion-item>\n\n					    <br>\n\n					    <h1>Lista Articulos</h1>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n\n\n				  		<h1>Lista Articulos</h1>\n\n\n\n\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 1</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 2</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 3</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 4</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 5</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos 6</h3>\n\n				      <h4>Precio: 40000</h4>\n\n				      <h4>Unidades: 1</h4>\n\n				      <button ion-button item-end color="danger" round (click)="showConfirm()">Quitar</button>\n\n					</ion-item>\n\n\n\n\n\n					<ion-item >\n\n				      <h3>TOTAL</h3>\n\n				      <h4 item-end>240000</h4>\n\n				    </ion-item>\n\n\n\n\n\n					\n\n\n\n				   </div>	\n\n\n\n				   <div class="div">\n\n\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="showAlert()">Guardar</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="showConfirmec()">Cancelar</button>\n\n			    </div>    \n\n			    <br>\n\n \n\n			    </div>  \n\n			</div>\n\n				</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\factura\factura.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FacturaPage);

//# sourceMappingURL=factura.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_cliente__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factura_factura__ = __webpack_require__(119);
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
    return VentasPage;
}());
VentasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ventas',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\ventas\ventas.html"*/'<!--\n\n  Generated template for the VentasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ventas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Ventas</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openClientePage()">Cliente</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openFacturaPage()">Factura</button>\n\n			    </div>    \n\n			    <br>\n\n \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\ventas\ventas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], VentasPage);

//# sourceMappingURL=ventas.js.map

/***/ }),

/***/ 121:
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
        selector: 'page-editarcortador',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcortador\editarcortador.html"*/'<!--\n\n  Generated template for the EditarcortadorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcortador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcortador\editarcortador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EditarcortadorPage);

//# sourceMappingURL=editarcortador.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminarcortadorPage; });
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadocortadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcortador_editarcortador__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eliminarcortador_eliminarcortador__ = __webpack_require__(122);
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacortadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empleadocortador_empleadocortador__ = __webpack_require__(123);
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listacortadores_listacortadores__ = __webpack_require__(124);
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

/***/ 126:
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
        selector: 'page-bodega',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\bodega\bodega.html"*/'<!--\n\n  Generated template for the BodegaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>bodega</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\bodega\bodega.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BodegaPage);

//# sourceMappingURL=bodega.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuprincipaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_compras__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ventas_ventas__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empleados_empleados__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bodega_bodega__ = __webpack_require__(126);
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

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/articulo/articulo.module": [
		295,
		29
	],
	"../pages/articulomodificar/articulomodificar.module": [
		292,
		28
	],
	"../pages/bodega/bodega.module": [
		319,
		27
	],
	"../pages/categoria/categoria.module": [
		299,
		26
	],
	"../pages/cliente/cliente.module": [
		311,
		25
	],
	"../pages/compras/compras.module": [
		306,
		24
	],
	"../pages/creararticulo/creararticulo.module": [
		294,
		23
	],
	"../pages/crearcategoria/crearcategoria.module": [
		296,
		22
	],
	"../pages/crearcliente/crearcliente.module": [
		310,
		21
	],
	"../pages/crearproveedor/crearproveedor.module": [
		301,
		20
	],
	"../pages/editararticulo/editararticulo.module": [
		291,
		19
	],
	"../pages/editarcategoria/editarcategoria.module": [
		297,
		18
	],
	"../pages/editarcliente/editarcliente.module": [
		307,
		17
	],
	"../pages/editarcortador/editarcortador.module": [
		314,
		16
	],
	"../pages/editarproveedor/editarproveedor.module": [
		302,
		15
	],
	"../pages/eliminarcortador/eliminarcortador.module": [
		315,
		14
	],
	"../pages/empleadocortador/empleadocortador.module": [
		316,
		13
	],
	"../pages/empleados/empleados.module": [
		318,
		12
	],
	"../pages/factura/factura.module": [
		312,
		11
	],
	"../pages/listaarticulo/listaarticulo.module": [
		293,
		10
	],
	"../pages/listacategoria/listacategoria.module": [
		298,
		9
	],
	"../pages/listacliente/listacliente.module": [
		309,
		8
	],
	"../pages/listacortadores/listacortadores.module": [
		317,
		7
	],
	"../pages/listainventario/listainventario.module": [
		300,
		6
	],
	"../pages/listaproveedor/listaproveedor.module": [
		304,
		5
	],
	"../pages/menuprincipa/menuprincipa.module": [
		320,
		4
	],
	"../pages/modificarcliente/modificarcliente.module": [
		308,
		3
	],
	"../pages/modificarproveedor/modificarproveedor.module": [
		303,
		2
	],
	"../pages/proveedor/proveedor.module": [
		305,
		1
	],
	"../pages/ventas/ventas.module": [
		313,
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
webpackAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuprincipa_menuprincipa__ = __webpack_require__(127);
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

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menuprincipa_menuprincipa__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_compras_compras__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ventas_ventas__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_empleados_empleados__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bodega_bodega__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listacortadores_listacortadores__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_empleadocortador_empleadocortador__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_editarcortador_editarcortador__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_eliminarcortador_eliminarcortador__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_articulo_articulo__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listaarticulo_listaarticulo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_articulomodificar_articulomodificar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_editararticulo_editararticulo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_creararticulo_creararticulo__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_categoria_categoria__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_crearcategoria_crearcategoria__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_listacategoria_listacategoria__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editarcategoria_editarcategoria__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_listainventario_listainventario__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_proveedor_proveedor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_listaproveedor_listaproveedor__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_editarproveedor_editarproveedor__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_modificarproveedor_modificarproveedor__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_crearproveedor_crearproveedor__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_cliente_cliente__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_crearcliente_crearcliente__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_editarcliente_editarcliente__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_listacliente_listacliente__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_modificarcliente_modificarcliente__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_factura_factura__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(220);
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
            __WEBPACK_IMPORTED_MODULE_20__pages_crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_listacategoria_listacategoria__["a" /* ListacategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_editarcategoria_editarcategoria__["a" /* EditarcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_listainventario_listainventario__["a" /* ListainventarioPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_proveedor_proveedor__["a" /* ProveedorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_listaproveedor_listaproveedor__["a" /* ListaproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_editarproveedor_editarproveedor__["a" /* EditarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_modificarproveedor_modificarproveedor__["a" /* ModificarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_crearproveedor_crearproveedor__["a" /* CrearproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_cliente_cliente__["a" /* ClientePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_crearcliente_crearcliente__["a" /* CrearclientePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_editarcliente_editarcliente__["a" /* EditarclientePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_listacliente_listacliente__["a" /* ListaclientePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_modificarcliente_modificarcliente__["a" /* ModificarclientePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_factura_factura__["a" /* FacturaPage */]
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
                    { loadChildren: '../pages/editarcortador/editarcortador.module#EditarcortadorPageModule', name: 'EditarcortadorPage', segment: 'editarcortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/eliminarcortador/eliminarcortador.module#EliminarcortadorPageModule', name: 'EliminarcortadorPage', segment: 'eliminarcortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleadocortador/empleadocortador.module#EmpleadocortadorPageModule', name: 'EmpleadocortadorPage', segment: 'empleadocortador', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listacortadores/listacortadores.module#ListacortadoresPageModule', name: 'ListacortadoresPage', segment: 'listacortadores', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/empleados/empleados.module#EmpleadosPageModule', name: 'EmpleadosPage', segment: 'empleados', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bodega/bodega.module#BodegaPageModule', name: 'BodegaPage', segment: 'bodega', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menuprincipa/menuprincipa.module#MenuprincipaPageModule', name: 'MenuprincipaPage', segment: 'menuprincipa', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_20__pages_crearcategoria_crearcategoria__["a" /* CrearcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_listacategoria_listacategoria__["a" /* ListacategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_editarcategoria_editarcategoria__["a" /* EditarcategoriaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_listainventario_listainventario__["a" /* ListainventarioPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_proveedor_proveedor__["a" /* ProveedorPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_listaproveedor_listaproveedor__["a" /* ListaproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_editarproveedor_editarproveedor__["a" /* EditarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_modificarproveedor_modificarproveedor__["a" /* ModificarproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_crearproveedor_crearproveedor__["a" /* CrearproveedorPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_cliente_cliente__["a" /* ClientePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_crearcliente_crearcliente__["a" /* CrearclientePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_editarcliente_editarcliente__["a" /* EditarclientePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_listacliente_listacliente__["a" /* ListaclientePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_modificarcliente_modificarcliente__["a" /* ModificarclientePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_factura_factura__["a" /* FacturaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(221);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaproveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificarproveedor_modificarproveedor__ = __webpack_require__(113);
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
        selector: 'page-listaproveedor',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listaproveedor\listaproveedor.html"*/'<!--\n\n  Generated template for the ListaproveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listaproveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Proveedor</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{proveedor6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Proveedor 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <h5>descripcion</h5>\n\n				      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper tortor aliquam enim imperdiet sollicitudin.</p>\n\n				      <button ion-button clear item-end (click)="openModificarproveedorPage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listaproveedor\listaproveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaproveedorPage);

//# sourceMappingURL=listaproveedor.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaclientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificarcliente_modificarcliente__ = __webpack_require__(117);
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
        selector: 'page-listacliente',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listacliente\listacliente.html"*/'<!--\n\n  Generated template for the ListaclientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listacliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Cliente</h1>\n\n					<div>\n\n				  		<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente1}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 1</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente2}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 2</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente3}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 3</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente4}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 4</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente5}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 5</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{cliente6}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Cliente 6</h3>\n\n				      <h4>Direccion - Telefono</h4>\n\n				      <button ion-button clear item-end (click)="openModificarclientePage()">Ver Mas</button>\n\n					</ion-item>\n\n\n\n					\n\n\n\n					\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listacliente\listacliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListaclientePage);

//# sourceMappingURL=listacliente.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticulomodificarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editararticulo_editararticulo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaarticulo_listaarticulo__ = __webpack_require__(52);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaarticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulomodificar_articulomodificar__ = __webpack_require__(51);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listaarticulo_listaarticulo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creararticulo_creararticulo__ = __webpack_require__(108);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearcategoria_crearcategoria__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacategoria_listacategoria__ = __webpack_require__(55);
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
    return CategoriaPage;
}());
CategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\categoria\categoria.html"*/'<!--\n\n  Generated template for the CategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>categoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Categoria</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearcategoriaPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListacategoriaPage()">Listado</button>\n\n			    </div>    \n\n\n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\categoria\categoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CategoriaPage);

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcategoria_editarcategoria__ = __webpack_require__(110);
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
        selector: 'page-listacategoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listacategoria\listacategoria.html"*/'<!--\n\n  Generated template for the ListacategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listacategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n		<ion-list>\n\n\n\n				<h1>Lista Categorias</h1>\n\n					<div>\n\n\n\n					<ion-searchbar> </ion-searchbar>\n\n				  	<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{materia}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Materia Prima</h3>\n\n				      <button ion-button clear  (click)="openEditarcategoriaPage()">Modificar</button>\n\n				      <button ion-button clear item-end (click)="showConfirm()">Eliminar</button>\n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{pegante}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Pegante</h3>\n\n				      <button ion-button clear  (click)="openEditarcategoriaPage()">Modificar</button>\n\n				      <button ion-button clear item-end (click)="showConfirm()">Eliminar</button>\n\n				      \n\n					</ion-item>\n\n\n\n					<ion-item >\n\n				  	  <ion-thumbnail item-start>\n\n				      <img src={{zapatos}}>\n\n				      </ion-thumbnail >\n\n				      <h3>Zapatos</h3>\n\n				      <button ion-button clear  (click)="openEditarcategoriaPage()">Modificar</button>\n\n				      <button ion-button clear item-end (click)="showConfirm()">Eliminar</button>\n\n				      \n\n					</ion-item>\n\n\n\n\n\n				   </div>	\n\n				</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\listacategoria\listacategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ListacategoriaPage);

var ListacategoriaPage_1;
//# sourceMappingURL=listacategoria.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crearproveedor_crearproveedor__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listaproveedor_listaproveedor__ = __webpack_require__(39);
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
    return ProveedorPage;
}());
ProveedorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-proveedor',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\proveedor\proveedor.html"*/'<!--\n\n  Generated template for the ProveedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>proveedor</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Proveedor</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearproveedorPage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaproveedorPage()">Listado</button>\n\n			    </div>    \n\n			    <br>\n\n			     \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\proveedor\proveedor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProveedorPage);

//# sourceMappingURL=proveedor.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listacliente_listacliente__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crearcliente_crearcliente__ = __webpack_require__(118);
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
    return ClientePage;
}());
ClientePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cliente',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\cliente\cliente.html"*/'<!--\n\n  Generated template for the ClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cliente</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n	<div class="div">\n\n			<h1>Cliente</h1>\n\n				<div>\n\n				<div>\n\n			        <button class="botonmenu" ion-button button-positive (click)="openCrearclientePage()">Crear</button>\n\n\n\n			        <button class="botonmenu" ion-button button-positive (click)="openListaclientePage()">Listado</button>\n\n			    </div>    \n\n			    <br>\n\n			     \n\n			    </div>  \n\n			</div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\cliente\cliente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ClientePage);

//# sourceMappingURL=cliente.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map