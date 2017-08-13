webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarcategoriaPageModule", function() { return EditarcategoriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editarcategoria__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditarcategoriaPageModule = (function () {
    function EditarcategoriaPageModule() {
    }
    return EditarcategoriaPageModule;
}());
EditarcategoriaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editarcategoria__["a" /* EditarcategoriaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editarcategoria__["a" /* EditarcategoriaPage */]),
        ],
    })
], EditarcategoriaPageModule);

//# sourceMappingURL=editarcategoria.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarcategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    function EditarcategoriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditarcategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarcategoriaPage');
    };
    return EditarcategoriaPage;
}());
EditarcategoriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editarcategoria',template:/*ion-inline-start:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcategoria\editarcategoria.html"*/'<!--\n\n  Generated template for the EditarcategoriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editarcategoria</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="ion-content" padding>\n\n\n\n<form [formGroup]="myForm" (ngSubmit)="saveData()">\n\n      \n\n<div class="sesion">\n\n<fieldset >\n\n        <h1> Modificar Categoria </h1>  \n\n                  <ion-list>\n\n\n\n                        <ion-item>\n\n\n\n                          <ion-icon name="md-analytics" item-left></ion-icon>\n\n                          <ion-label stacked>Nombre Categoria:</ion-label>\n\n                          <ion-input formControlName="name" type="text" placeholder="Nombre" value="Materia Prima"></ion-input>\n\n                        </ion-item> \n\n                        <br>\n\n\n\n                        \n\n \n\n               \n\n                  </ion-list>\n\n\n\n   \n\n\n\n        <div padding>\n\n      <button ion-button block type="submit" [disabled]="!myForm.valid"   (click)="showConfirm()">Guardar</button>\n\n    </div>\n\n</fieldset>\n\n</div>       \n\n\n\n\n\n</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gonzalo\proyectos\appoklesh\src\pages\editarcategoria\editarcategoria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EditarcategoriaPage);

//# sourceMappingURL=editarcategoria.js.map

/***/ })

});
//# sourceMappingURL=0.js.map