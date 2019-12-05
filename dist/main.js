(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_branches_branches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/branches/branches.component */ "./src/app/components/branches/branches.component.ts");
/* harmony import */ var _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/staff/staff.component */ "./src/app/components/staff/staff.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");










const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { breadcrumb: 'Home' } },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], data: { breadcrumb: 'Products' } },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], data: { breadcrumb: 'About Us' } },
    { path: 'branches', component: _components_branches_branches_component__WEBPACK_IMPORTED_MODULE_6__["BranchesComponent"], data: { breadcrumb: 'Branches' } },
    { path: 'staff', component: _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_7__["StaffComponent"], data: { breadcrumb: 'Staff' } },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"], data: { breadcrumb: 'Contact Us' } },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"], data: { breadcrumb: 'Gallery' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<buk-header></buk-header>\r\n<div class=\"container buk-main-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n      <breadcrumb [allowBootstrap]=\"true\"></breadcrumb>\r\n      <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n        <categories-sidebar></categories-sidebar>\r\n        <specials-sidebar></specials-sidebar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<buk-footer></buk-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dibukeng-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dibukeng-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_specials_sidebar_specials_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/specials-sidebar/specials-sidebar.component */ "./src/app/components/specials-sidebar/specials-sidebar.component.ts");
/* harmony import */ var _components_categories_sidebar_categories_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/categories-sidebar/categories-sidebar.component */ "./src/app/components/categories-sidebar/categories-sidebar.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_branches_branches_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/branches/branches.component */ "./src/app/components/branches/branches.component.ts");
/* harmony import */ var _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/staff/staff.component */ "./src/app/components/staff/staff.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_buk_header_buk_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/buk-header/buk-header.component */ "./src/app/components/buk-header/buk-header.component.ts");
/* harmony import */ var _components_buk_footer_buk_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/buk-footer/buk-footer.component */ "./src/app/components/buk-footer/buk-footer.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_specials_sidebar_specials_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SpecialsSidebarComponent"],
            _components_categories_sidebar_categories_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesSidebarComponent"],
            _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _components_branches_branches_component__WEBPACK_IMPORTED_MODULE_11__["BranchesComponent"],
            _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_12__["StaffComponent"],
            _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"],
            _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"],
            _components_buk_header_buk_header_component__WEBPACK_IMPORTED_MODULE_15__["BukHeaderComponent"],
            _components_buk_footer_buk_footer_component__WEBPACK_IMPORTED_MODULE_16__["BukFooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"about-main-content\">\r\n  <h1>Dibukeng History</h1>\r\n  <p>Dibukeng was established in 1946 by Mr Willie Theron and other spirit-led believers \r\n    from the Dutch Reformed Church. They all shared the same vision of reaching out to \r\n    people through the Bible and additional Christian literature.\r\n  </p>\r\n  <p>Their mission started in the garage of a house in Boom Street in Pretoria under the \r\n    leadership of Mr Theron who was a postmaster of the Pretoria Central Post Office. He \r\n    started raising funds by sending letters to all the Therons that he could find in the \r\n    telephone directory during the post-World War 11 period. Initially, all the work was \r\n    done in Pretoria and the printing work was later moved to Bloemfontein under the name \r\n    of NG Sending Uitgewers.\r\n  </p>\r\n  <p>The bookshop in Pretoria kept the name NG Sendingboekhandel but was later changed to \r\n    Dibukeng. The shop moved to a house in Hoop Street and when the Willie Theron Building \r\n    was erected in 1973/4, Dibukeng was the first tenant to move in. Today, it still houses \r\n    the main branch, also known as ‘Hooftak’ which is Dibukeng’s main distribution point and \r\n    depot.\r\n  </p>\r\n  <p>At a later stage a second branch was established in Bosman Street next to the Dutch \r\n      Reformed Church- Grootkerk, situated on corner Bosman and the then Vermeulen which is \r\n      now Madiba Street. Two other branches were opened in Silverton and Brits respectively. \r\n      Unfortunately, the Brits branch did not exist for long.\r\n  </p>\r\n</article>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");



let AboutComponent = class AboutComponent {
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    ngOnInit() {
        this.breadcrumbsService.storePrefixed({ label: 'Home', url: '/', params: [] });
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about',
        template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsService"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/branches/branches.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/branches/branches.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/branches/branches.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/branches/branches.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"branches-main-content\">\r\n  <h1>Dibukeng Branches</h1>\r\n  <p>\r\n    Currently Dibukeng operates from three premises:\r\n  </p>\r\n  <ol>\r\n    <li>The original 'Main Branch' in Willie Theron Building, next to the \r\n      Bosman train station and taxi rank, houses our depot for Bibles, hymnals, \r\n      church requisites, school text books and stationery.\r\n    </li>\r\n    <li>The 'Grootkerk Branch' at corner Bosman and Madiba Street, houses all \r\n      the above-mentioned stock as well as a wide variety of Christian literature \r\n      and a theology section. The import of material for ministries’ uniform done \r\n      and distributed from here. The head office function is also done from here.\r\n    </li>\r\n    <li>The Silverton Branch is a small depot serving the eastern suburbs and the \r\n      Mamelodi Service Centre. Because of its size, limited stock is kept here.\r\n    </li>\r\n  </ol>\r\n</article>"

/***/ }),

/***/ "./src/app/components/branches/branches.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/branches/branches.component.ts ***!
  \***********************************************************/
/*! exports provided: BranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesComponent", function() { return BranchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");



let BranchesComponent = class BranchesComponent {
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    ngOnInit() {
        this.breadcrumbsService.storePrefixed({ label: 'Home', url: '/', params: [] });
    }
};
BranchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'branches',
        template: __webpack_require__(/*! ./branches.component.html */ "./src/app/components/branches/branches.component.html"),
        styles: [__webpack_require__(/*! ./branches.component.css */ "./src/app/components/branches/branches.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsService"]])
], BranchesComponent);



/***/ }),

/***/ "./src/app/components/buk-footer/buk-footer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/buk-footer/buk-footer.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buk-footer/buk-footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/buk-footer/buk-footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n              <p><i class=\"fas fa-map-marker-alt\"></i>Address:</p>\r\n              <p><i class=\"fas fa-phone\"></i>Phone:</p>\r\n              <p><i class=\"fas fa-envelope\"></i>Email:</p>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n              <a><p>Projects</p></a>\r\n              <a><p>Downloads</p></a>\r\n              <a><p>About</p></a>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n              <a><p>Collection</p></a>\r\n              <a><p>Shops</p></a>\r\n              <a><p>Churches</p></a>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/buk-footer/buk-footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/buk-footer/buk-footer.component.ts ***!
  \***************************************************************/
/*! exports provided: BukFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BukFooterComponent", function() { return BukFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BukFooterComponent = class BukFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
BukFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'buk-footer',
        template: __webpack_require__(/*! ./buk-footer.component.html */ "./src/app/components/buk-footer/buk-footer.component.html"),
        styles: [__webpack_require__(/*! ./buk-footer.component.css */ "./src/app/components/buk-footer/buk-footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BukFooterComponent);



/***/ }),

/***/ "./src/app/components/buk-header/buk-header.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/buk-header/buk-header.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buk-header/buk-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/buk-header/buk-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <a routerLink=\"/\">\r\n            <img src=\"assets/buk-logo-full-543x120.jpg\" class=\"img-responsive img-rounded\" alt=\"Dibukeng logo\">\r\n        </a>\r\n    </div>\r\n  </div>\r\n</header>\r\n<div class=\"sticky-top-nav\">\r\n  <nav id=\"buk-top-nav\" class=\"navbar navbar-default .buk-navbar-container\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"navbar-header col-lg-10 col-md-10 col-sm-6 col-xs-6\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#buk-top-nav-collapse\">\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n          </div>\r\n          <div id=\"buk-top-nav-collapse\" class=\"collapse navbar-collapse col-lg-10 col-md-10 col-sm-12 col-xs-12\">\r\n            <ul>\r\n                <li routerLink=\"/products\" routerLinkActice=\"active\">\r\n                    <a routerLink=\"/products\" routerLinkActice=\"active\">Products</a></li>\r\n                <li routerLink=\"/about\" routerLinkActice=\"active\">\r\n                    <a routerLink=\"/about\" routerLinkActice=\"active\">About Us</a></li>\r\n                <li routerLink=\"/branches\" routerLinkActice=\"active\">\r\n                    <a routerLink=\"/branches\" routerLinkActice=\"active\">Branches</a></li>\r\n                <li routerLink=\"/staff\" routerLinkActice=\"active\">\r\n                    <a routerLink=\"/staff\" routerLinkActice=\"active\">Staff</a></li>\r\n                <li routerLink=\"/gallery\" routerLinkActice=\"active\">\r\n                      <a routerLink=\"/gallery\" routerLinkActice=\"active\">Gallery</a></li>\r\n                <li routerLink=\"/contacts\" routerLinkActice=\"active\">\r\n                    <a routerLink=\"/contacts\" routerLinkActice=\"active\">Contact Us</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/buk-header/buk-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/buk-header/buk-header.component.ts ***!
  \***************************************************************/
/*! exports provided: BukHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BukHeaderComponent", function() { return BukHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BukHeaderComponent = class BukHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
BukHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'buk-header',
        template: __webpack_require__(/*! ./buk-header.component.html */ "./src/app/components/buk-header/buk-header.component.html"),
        styles: [__webpack_require__(/*! ./buk-header.component.css */ "./src/app/components/buk-header/buk-header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BukHeaderComponent);



/***/ }),

/***/ "./src/app/components/categories-sidebar/categories-sidebar.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/categories-sidebar/categories-sidebar.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/categories-sidebar/categories-sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/categories-sidebar/categories-sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\r\n    <div id=\"categories-main-content\">\r\n      <h3>Categories</h3>\r\n      <ul>\r\n        <li>Bible/Bible Study Resources</li>\r\n        <li>Counselling/Support</li>\r\n        <li>Christian living</li>\r\n        <li>Christian novels</li>\r\n        <li>Church & Church History</li>\r\n        <li>Devotion</li>\r\n        <li>God</li>\r\n        <li>Heaven/Hell/Angels</li>\r\n        <li>Holy Spirit</li>\r\n        <li>Leadership</li>\r\n        <li>Marriage/Relationship</li>\r\n        <li>Missiology</li>\r\n        <li>Motivational</li>\r\n        <li>Men</li>\r\n        <li>Parenting</li>\r\n        <li>Prayer</li>\r\n        <li>Women</li>\r\n        <li>Youth</li>\r\n      </ul>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/components/categories-sidebar/categories-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/categories-sidebar/categories-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoriesSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesSidebarComponent", function() { return CategoriesSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesSidebarComponent = class CategoriesSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categories-sidebar',
        template: __webpack_require__(/*! ./categories-sidebar.component.html */ "./src/app/components/categories-sidebar/categories-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./categories-sidebar.component.css */ "./src/app/components/categories-sidebar/categories-sidebar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesSidebarComponent);



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts-main-content\">\r\n  <p>\r\n    Pop-up of a form to contact the shop manager HERE!\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");



let ContactsComponent = class ContactsComponent {
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    ngOnInit() {
        this.breadcrumbsService.storePrefixed({ label: 'Home', url: '/', params: [] });
    }
};
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contacts',
        template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/contacts/contacts.component.html"),
        styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/contacts/contacts.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsService"]])
], ContactsComponent);



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"gallery-main-content\">\r\n  <h1>Dibukeng Gallery</h1>\r\n  <p>\r\n    Photo Gallery of book collection, shop interior/exterior, community/religios projects, staff and other photos HERE!\r\n  </p>\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");



let GalleryComponent = class GalleryComponent {
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    ngOnInit() {
        this.breadcrumbsService.storePrefixed({ label: 'Home', url: '/', params: [] });
    }
};
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gallery',
        template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
        styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/components/gallery/gallery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsService"]])
], GalleryComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-main-content\">\r\n    <h1>Dibukeng Christian BookShop</h1>\r\n    <p>Welcome to the homepage of Dibukeng Christian Bookshop. We are a bookshop of the \r\n      Uniting Reformed Church in Southern Africa – Northern Synod located on corner Bosman \r\n      and Madiba Streets in the city centre of Pretoria. Our mission is to spread the Gospel \r\n      through printed and audio-visual media to people of all colour, nationality, language and creed.</p>\r\n    <p>Our primary focus is not only to serve the Uniting Reformed Church but the Body of Christ in its \r\n      diversity. We strive to provide a variety of Christian products at a reasonable price to meet the \r\n      needs of a spiritually hungry public. Our wish is that God, will empower Dibukeng to cultivate a \r\n      culture of reading in our communities through the churches.</p>\r\n    <p>To know more about our bookshop please feel free to surf our web page.\r\n      You can find out:</p>\r\n    \r\n    <p>Welcome to our website and we are looking forward to seeing you soon at Dibukeng!</p>\r\n    <p>Rev. Dr. Tipi Jacob Nthakhe<br>(General Manager)</p> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article id=\"products-main-content\">\r\n  <h1>Dibukeng Products</h1>\r\n  <section>\r\n    <p>Dibukeng is the official supplier of all Uniting Reformed Church in \r\n      Southern Africa documents, registers, receipt books, hymn books and uniform. \r\n      As part of its missionary mandate, it has opened its doors to other churches \r\n      in and outside South Africa. It stocks about 15 different hymnbooks in 9 \r\n      different languages. In doing so, it serves different churches which are \r\n      part of the body of Christ.\r\n    </p>\r\n    <p>It is not a general thing that a bookshop stocks attire like ties, collars, \r\n      hats and pins. However, Dibukeng stocks the whole range of official church \r\n      attire like those of Christian Women Ministry, Christian Men’s Ministry, \r\n      Christian Women League, Sunday School and Christian Youth Ministry.\r\n    </p>\r\n    <p>Currently, Dibukeng is one of the only two shops in Pretoria which sells \r\n      Holy Communion ware. Here you find a variety of silver ware, Perspex, wood \r\n      and plastic items. It has two types of communion bread as well as non-alcoholic \r\n      Sacramental wine. </p>\r\n    <p>At Dibukeng you will find Sunday School and Catechism material as well as other \r\n      publications which are of great value in teaching children about God and helping \r\n      them to build up their faith. It has a collection of theological books and a wide \r\n      range of carefully selected general Christian literature to meet the needs of both \r\n      Evangelicals and Pentecostals.</p>\r\n    <p>In addition, Dibukeng has also become an important provider of school text books \r\n      for Grade R up to Grade 12. Learners in and around Pretoria as well as from all over \r\n      the Gauteng, Limpopo and Mpumalanga provinces buy their text-books from Dibukeng.\r\n    </p>\r\n    <p>Dibukeng keeps a variety of Christian books on leadership, parental guidance, marriage, \r\n      relationship, support and counselling.</p>\r\n  </section>\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");



let ProductsComponent = class ProductsComponent {
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    ngOnInit() {
        this.breadcrumbsService.storePrefixed({ label: 'Home', url: '/', params: [] });
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'products',
        template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/components/specials-sidebar/specials-sidebar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/specials-sidebar/specials-sidebar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/specials-sidebar/specials-sidebar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/specials-sidebar/specials-sidebar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\r\n  <div id=\"specials-main-content\">\r\n    <h3>Specials</h3>\r\n    <p>As part of its management’s vision of cultivating a culture of reading in communities through churches, \r\n      Dibukeng offers specials on a frequent basis. These specials apply mainly for books so that even the poor \r\n      of the poorest are afforded the opportunity of acquiring books.</p>\r\n  </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/components/specials-sidebar/specials-sidebar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/specials-sidebar/specials-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpecialsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsSidebarComponent", function() { return SpecialsSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpecialsSidebarComponent = class SpecialsSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpecialsSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'specials-sidebar',
        template: __webpack_require__(/*! ./specials-sidebar.component.html */ "./src/app/components/specials-sidebar/specials-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./specials-sidebar.component.css */ "./src/app/components/specials-sidebar/specials-sidebar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SpecialsSidebarComponent);



/***/ }),

/***/ "./src/app/components/staff/staff.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/staff/staff.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/staff/staff.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/staff/staff.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"staff-main-content\">\r\n    <h1>Dibukeng Staff</h1>\r\n    <p>\r\n        Dibukeng has a total staff of twelve, nine employees, one part-time bookkeeper, one cleaner and two relievers. \r\n        Of these, four are male and eight are female.\r\n    </p>\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/components/staff/staff.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/staff/staff.component.ts ***!
  \*****************************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-breadcrumbs */ "./node_modules/ng6-breadcrumbs/ng6-breadcrumbs.js");



let StaffComponent = class StaffComponent {
    constructor(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    ngOnInit() {
        this.breadcrumbsService.storePrefixed({ label: 'Home', url: '/', params: [] });
    }
};
StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'staff',
        template: __webpack_require__(/*! ./staff.component.html */ "./src/app/components/staff/staff.component.html"),
        styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/components/staff/staff.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsService"]])
], StaffComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DEV\DibukengProject\dibukeng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map