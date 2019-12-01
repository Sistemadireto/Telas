(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ad-item.ts":
/*!****************************!*\
  !*** ./src/app/ad-item.ts ***!
  \****************************/
/*! exports provided: AdItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdItem", function() { return AdItem; });
var AdItem = /** @class */ (function () {
    function AdItem(component) {
        this.component = component;
    }
    return AdItem;
}());



/***/ }),

/***/ "./src/app/ad.directive.ts":
/*!*********************************!*\
  !*** ./src/app/ad.directive.ts ***!
  \*********************************/
/*! exports provided: AdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDirective", function() { return AdDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdDirective = /** @class */ (function () {
    function AdDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AdDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ad-host]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AdDirective);
    return AdDirective;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/secure-inner-pages.guard.ts.guard */ "./src/app/shared/guard/secure-inner-pages.guard.ts.guard.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/components/verify-email/verify-email.component.ts");










var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'register-user', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], canActivate: [_shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], canActivate: [_shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'verify-email-address', component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailComponent"], canActivate: [_shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_3__["SecureInnerPagesGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'dashboard/:apps', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'dashboard/:apps/:app', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<bg class=\"TT\" [ngClass]=\"[appData.system.preferences.style.bgOptions[appData.system.preferences.style.background]['id']]\"></bg>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(appDataService, elementRef) {
        var _this = this;
        this.appDataService = appDataService;
        this.elementRef = elementRef;
        this.appData = this.appDataService.appData;
        this.appDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var spin = elementRef.nativeElement.parentNode.children[0];
        spin.classList.add('TT');
        setTimeout(function () { spin.remove(); }, 2600);
        this.appDataSubject.subscribe(function (value) { _this.appData = value; });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _ad_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ad.directive */ "./src/app/ad.directive.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _appData_current_system_system_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appData/current/system/system.component */ "./src/app/appData/current/system/system.component.ts");
/* harmony import */ var _appData_current_system_start_start_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./appData/current/system/start/start.component */ "./src/app/appData/current/system/start/start.component.ts");
/* harmony import */ var _appData_current_system_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./appData/current/system/profile/profile.component */ "./src/app/appData/current/system/profile/profile.component.ts");
/* harmony import */ var _appData_current_system_customize_customize_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appData/current/system/customize/customize.component */ "./src/app/appData/current/system/customize/customize.component.ts");
/* harmony import */ var _appData_current_system_notify_notify_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./appData/current/system/notify/notify.component */ "./src/app/appData/current/system/notify/notify.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/components/verify-email/verify-email.component.ts");
/* harmony import */ var _appData_current_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./appData/current/calendar/calendar.component */ "./src/app/appData/current/calendar/calendar.component.ts");
/* harmony import */ var _appData_current_media_player_media_player_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./appData/current/media-player/media-player.component */ "./src/app/appData/current/media-player/media-player.component.ts");
/* harmony import */ var _appData_current_dcb_dcb_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./appData/current/dcb/dcb.component */ "./src/app/appData/current/dcb/dcb.component.ts");
/* harmony import */ var _appData_current_ativuz_ativuz_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./appData/current/ativuz/ativuz.component */ "./src/app/appData/current/ativuz/ativuz.component.ts");
/* harmony import */ var _appData_current_os_os_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./appData/current/os/os.component */ "./src/app/appData/current/os/os.component.ts");
/* harmony import */ var _appData_current_expense_expense_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./appData/current/expense/expense.component */ "./src/app/appData/current/expense/expense.component.ts");
/* harmony import */ var angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angular-azure-blob-service */ "./node_modules/angular-azure-blob-service/fesm5/angular-azure-blob-service.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _appData_current_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./appData/current/clientes/clientes.component */ "./src/app/appData/current/clientes/clientes.component.ts");
/* harmony import */ var _pipes_iniciais_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/iniciais.pipe */ "./src/app/pipes/iniciais.pipe.ts");
/* harmony import */ var _pipes_color_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipes/color.pipe */ "./src/app/pipes/color.pipe.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/order-by.pipe */ "./src/app/pipes/order-by.pipe.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _appData_current_stockmanager_stockmanager_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./appData/current/stockmanager/stockmanager.component */ "./src/app/appData/current/stockmanager/stockmanager.component.ts");
/* harmony import */ var _appData_current_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./appData/current/fotos/fotos.component */ "./src/app/appData/current/fotos/fotos.component.ts");
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pipes/group-by.pipe */ "./src/app/pipes/group-by.pipe.ts");









Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a);





// Firebase services + environment module

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _ad_directive__WEBPACK_IMPORTED_MODULE_12__["AdDirective"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _appData_current_system_system_component__WEBPACK_IMPORTED_MODULE_19__["SystemComponent"],
                _appData_current_system_start_start_component__WEBPACK_IMPORTED_MODULE_20__["StartComponent"],
                _appData_current_system_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _appData_current_system_customize_customize_component__WEBPACK_IMPORTED_MODULE_22__["CustomizeComponent"],
                _appData_current_system_notify_notify_component__WEBPACK_IMPORTED_MODULE_23__["NotifyComponent"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__["ForgotPasswordComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
                _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_28__["VerifyEmailComponent"],
                _appData_current_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_29__["CalendarComponent"],
                _appData_current_media_player_media_player_component__WEBPACK_IMPORTED_MODULE_30__["MediaPlayerComponent"],
                _appData_current_dcb_dcb_component__WEBPACK_IMPORTED_MODULE_31__["DcbComponent"],
                _appData_current_ativuz_ativuz_component__WEBPACK_IMPORTED_MODULE_32__["AtivuzComponent"],
                _appData_current_os_os_component__WEBPACK_IMPORTED_MODULE_33__["OsComponent"],
                _appData_current_expense_expense_component__WEBPACK_IMPORTED_MODULE_34__["ExpenseComponent"],
                _appData_current_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_37__["ClientesComponent"],
                _pipes_iniciais_pipe__WEBPACK_IMPORTED_MODULE_38__["IniciaisPipe"],
                _pipes_color_pipe__WEBPACK_IMPORTED_MODULE_39__["ColorPipe"],
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_40__["SearchPipe"],
                _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_41__["OrderByPipe"],
                _appData_current_stockmanager_stockmanager_component__WEBPACK_IMPORTED_MODULE_43__["StockmanagerComponent"],
                _appData_current_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_44__["FotosComponent"],
                _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_45__["GroupByPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase, 'Telas360'),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_42__["NgxMaskModule"].forRoot(),
                angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_35__["BlobModule"].forRoot()
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__["LOCALE_ID"], useValue: 'pt-BR' },
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_36__["AuthService"],
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["FirestoreSettingsToken"], useValue: {} }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"]
            ],
            entryComponents: [
                _appData_current_system_start_start_component__WEBPACK_IMPORTED_MODULE_20__["StartComponent"],
                _appData_current_system_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _appData_current_system_customize_customize_component__WEBPACK_IMPORTED_MODULE_22__["CustomizeComponent"],
                _appData_current_system_notify_notify_component__WEBPACK_IMPORTED_MODULE_23__["NotifyComponent"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appData/current/ativuz/ativuz.component.html":
/*!**************************************************************!*\
  !*** ./src/app/appData/current/ativuz/ativuz.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\">Ativuz</div>\n\n<toolbar>\n  <buttons>\n    <button (click)=\"input.click();\" class=\"alt\">\n      <i class=\"material-icons\">note_add</i>\n      <div class=\"altInner\">Add file</div>\n    </button>\n    <button class=\"alt\" (click)=\"closeApp('ativuz');\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"send(f)\">\n      <input #input ngModel required name=\"file\" class=\"hide\" id=\"ativuz_upload\" type=\"file\" accept=\".pdf,.rtf,.plain\"\n        (change)=\"onFileChange($event)\" />\n      <mat-form-field>\n        <input matInput name=\"name\" ngModel required #name=\"ngModel\" placeholder=\"Nome do titular\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput name=\"cpf\" ngModel required #cpf=\"ngModel\" placeholder=\"CPF\" mask=\"000.000.000-00\">\n      </mat-form-field>\n      <button mat-stroked-button color=\"primary\" type=\"submit\" [disabled]=\"f.invalid\">Salvar</button>\n    </form>\n\n    <div>\n      <div *ngFor=\"let dat of data\" style=\"border-bottom: 1px solid #2a2a2a;\">\n        {{ dat.name }}: {{ dat.cpf }}\n        <br>\n        {{ dat.file }}\n      </div>\n    </div>\n\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/ativuz/ativuz.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/appData/current/ativuz/ativuz.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host content {\n  background: rgba(189, 189, 189, 0.9);\n  width: 732px;\n  height: 457px; }\n  :host content include {\n    padding: 36px 12px 0; }\n  :host content include .hide {\n      display: none;\n      position: absolute;\n      visibility: hidden;\n      height: 0;\n      width: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9hdGl2dXovYXRpdnV6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFKakI7SUFPTSxvQkFBb0IsRUFBQTtFQVAxQjtNQVVRLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBEYXRhL2N1cnJlbnQvYXRpdnV6L2F0aXZ1ei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxODksIDE4OSwgMTg5LCAwLjkpO1xuICAgIHdpZHRoOiA3MzJweDtcbiAgICBoZWlnaHQ6IDQ1N3B4O1xuXG4gICAgaW5jbHVkZSB7XG4gICAgICBwYWRkaW5nOiAzNnB4IDEycHggMDtcblxuICAgICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/ativuz/ativuz.component.ts":
/*!************************************************************!*\
  !*** ./src/app/appData/current/ativuz/ativuz.component.ts ***!
  \************************************************************/
/*! exports provided: AtivuzComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtivuzComponent", function() { return AtivuzComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var AtivuzComponent = /** @class */ (function () {
    function AtivuzComponent(toast, appDataService) {
        this.toast = toast;
        this.appDataService = appDataService;
        this.appDataService.appData.appSettings.ativuz = {
            style: { transform: 'translate3d(0px, calc(50vh - 228px), 0px)', width: '732px', height: '457px' }
        };
    }
    AtivuzComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appDataService.getAppData({ col: 'ativuz', orderBy: 'name' }).subscribe(function (data) { _this.data = data; });
    };
    AtivuzComponent.prototype.send = function (form) {
        var _this = this;
        var userName = form.value.name;
        form.value.file = this.filename;
        this.appDataService.setAppData('ativuz', form.value).then(function () {
            _this.toast.success(userName, 'Novo(a) cliente incluído(a)');
        });
    };
    AtivuzComponent.prototype.onFileChange = function (file) {
        this.filename = file.target.files[0].name;
    };
    AtivuzComponent.prototype.closeApp = function (key) {
        this.appDataService.closeApp(key);
    };
    AtivuzComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ativuz',
            template: __webpack_require__(/*! ./ativuz.component.html */ "./src/app/appData/current/ativuz/ativuz.component.html"),
            styles: [__webpack_require__(/*! ./ativuz.component.scss */ "./src/app/appData/current/ativuz/ativuz.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], AtivuzComponent);
    return AtivuzComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/calendar/calendar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/appData/current/calendar/calendar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"newEvent();\">\n      <i class=\"material-icons\">add_box</i>\n      <div class=\"altInner\">Adicionar</div>\n    </button>\n    <button class=\"alt\" (click)=\"genMonth(time.getDate(), time.getMonth(), time.getFullYear());\">\n      <i class=\"material-icons\">today</i>\n      <div class=\"altInner\">Hoje</div>\n    </button>\n    <button class=\"alt\" (click)=\"closeApp('calendar');\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n\n    <div class=\"month_year\" [class.hide]=\"popup=='month'\" (click)=\"change('month')\">\n      <div class=\"mmyySelect\" [class.hide]=\"popup=='month'\" *ngIf=\"popup=='month_year'\">month_year</div>\n    </div>\n\n    <div class=\"mes\" [class.hide]=\"popup=='month_year'\">\n      <div class=\"title\">\n        <span (click)=\"change('month_year')\">{{ monthName[selected.month] }}, {{ selected.year }}</span>\n      </div>\n      <div class=\"days\">\n        <div class=\"weekName day\" *ngFor=\"let x of weekNameAbbr; let i=index;\"\n          [class.selected]=\"time.getDay() == i && selected.month == time.getMonth() && selected.year == time.getFullYear()\">\n          {{x}}\n        </div>\n        <div class=\"day\" *ngFor=\"let x of days; let i=index;\"\n          [class.active]=\"x['dd'] == selected.day && x['mm'] == selected.month && x['yy'] == selected.year\"\n          [class.selected]=\"x['dd'] == time.getDate() && x['mm'] == time.getMonth() && x['yy'] == time.getFullYear()\"\n          [ngClass]=\"x['mm'] != selected.month ? 'other' : ''\" (click)=\"toDate(x);\">\n          <div class=\"circle\">{{ x['dd'] }}</div>\n        </div>\n      </div>\n      <button class=\"back\" (click)=\"genMonth(1, selected.month - 1, selected.year)\">\n        <i class=\"material-icons\">keyboard_arrow_left</i>\n      </button>\n      <button class=\"next\" (click)=\"genMonth(1, selected.month + 1, selected.year)\">\n        <i class=\"material-icons\">keyboard_arrow_right</i>\n      </button>\n    </div>\n\n    <div class=\"lateral\" [class.hide]=\"popup=='month_year'\">\n      <div class=\"title\">Eventos</div>\n      <div class=\"selectedDate\">{{ selected.day }} / {{ selected.month + 1 }} / {{ selected.year }}</div>\n      <div class=\"events\">\n\n        <div class=\"event\" *ngFor=\"let entry of date\">\n          {{ entry.datetime }}h:\n          <br>\n          {{ entry.title }}\n          <br>\n\n          <hr>\n        </div>\n      </div>\n    </div>\n\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/calendar/calendar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/appData/current/calendar/calendar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-transform: uppercase; }\n\n@-webkit-keyframes hide {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@keyframes hide {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n:host content {\n    width: 732px;\n    height: 457px; }\n\n:host .month_year {\n    z-index: 222;\n    -webkit-transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n:host .month_year .mmyySelect {\n      padding: 20px;\n      border: cornsilk;\n      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n      margin: 0 auto;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: calc(50% - 175px);\n      width: 420px;\n      height: 310px;\n      background: rgba(255, 255, 255, 0.8);\n      border-radius: 4px; }\n\n:host .mmyySelect.hide {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-animation: hide 0.1s linear;\n            animation: hide 0.1s linear; }\n\n:host .mes.hide,\n  :host .lateral.hide {\n    -webkit-filter: blur(2px);\n            filter: blur(2px); }\n\n:host .month_year {\n    background: rgba(0, 0, 0, 0.8); }\n\n:host .month_year.hide {\n    z-index: -222; }\n\n:host .mes {\n    position: relative;\n    background: rgba(240, 240, 240, 0.85);\n    width: 560px;\n    height: 457px;\n    float: left;\n    text-align: center; }\n\n:host .mes .back {\n      left: 12px; }\n\n:host .mes .next {\n      right: 12px; }\n\n:host .mes .back,\n    :host .mes .next {\n      border-radius: 50%;\n      line-height: 24px;\n      height: 24px;\n      top: calc(50% - 12px);\n      position: absolute;\n      color: #ff785c; }\n\n:host .mes .back:hover,\n    :host .mes .next:hover {\n      background-color: #c2c2c2; }\n\n:host .mes .title {\n      color: #415060;\n      margin: 45px 40px 0;\n      font-weight: 400;\n      font-size: 18px;\n      letter-spacing: 3px; }\n\n:host .mes .days {\n      margin: 20px 45px;\n      display: inline-block; }\n\n:host .mes .days .day {\n        float: left;\n        width: calc(100% / 7);\n        line-height: 40px; }\n\n:host .mes .days .day:not(.selected) {\n        font-weight: 100; }\n\n:host .mes .days .day:not(.week_name) {\n        cursor: pointer;\n        font-size: 12px; }\n\n:host .mes .days .day:hover:not(.week_name):not(.selected) .circle {\n        background-color: #c2c2c2; }\n\n:host .mes .days .day.other {\n        color: rgba(0, 0, 0, 0.4); }\n\n:host .mes .days .day:not(.other):not(.week_name) {\n        font-weight: 300; }\n\n:host .mes .days .day .circle {\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        margin: 0 auto;\n        font-size: 14px; }\n\n:host .mes .days .day.selected {\n        font-weight: 400; }\n\n:host .mes .days .day.selected .circle {\n          color: #fff;\n          background-color: #ff785c;\n          font-weight: 500; }\n\n:host .mes .days .day.active:not(.selected) .circle {\n        background-color: #fcc3b8; }\n\n:host .mes .days .week_name {\n        letter-spacing: 4px;\n        font-size: 15px;\n        margin: 20px 0; }\n\n:host .lateral {\n    width: 172px;\n    height: 457px;\n    float: right;\n    background-color: rgba(47, 53, 60, 0.95);\n    font-size: 12px;\n    position: relative;\n    overflow: hidden; }\n\n:host .lateral .title {\n      color: #ff785c;\n      margin: 55px 40px 0;\n      font-weight: 400;\n      letter-spacing: 2px;\n      text-align: center; }\n\n:host .lateral .selectedDate {\n      letter-spacing: 1px;\n      font-weight: 500;\n      text-align: center;\n      margin: 5px 0;\n      font-size: 10px;\n      color: #606e79; }\n\n:host .lateral .events {\n      color: #606e79;\n      overflow: scroll;\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      top: 90px; }\n\n:host .lateral .events .event {\n        padding: 3px 12px; }\n\n:host .lateral .events .event hr {\n          width: 70%;\n          height: 4px;\n          border: 0;\n          background: #606e79;\n          border-radius: 4px;\n          margin: 8px auto 12px; }\n\n:host .lateral button {\n      background-color: #212f28; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVdFLHlCQUF5QixFQUFBOztBQVZ6QjtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7O0FBTnZCO0VBQ0U7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CLEVBQUEsRUFBQTs7QUFQekI7SUFjSSxZQUFZO0lBQ1osYUFBYSxFQUFBOztBQWZqQjtJQW1CSSxZQUFZO0lBQ1osOERBQXNEO0lBQXRELHNEQUFzRDtJQUN0RCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVksRUFBQTs7QUF2QmhCO01BMEJNLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsd0NBQXdDO01BQ3hDLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsT0FBTztNQUNQLFFBQVE7TUFDUixzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixvQ0FBb0M7TUFDcEMsa0JBQWtCLEVBQUE7O0FBckN4QjtJQTBDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTs7QUEzQy9COztJQWdESSx5QkFBaUI7WUFBakIsaUJBQWlCLEVBQUE7O0FBaERyQjtJQW9ESSw4QkFBOEIsRUFBQTs7QUFwRGxDO0lBd0RJLGFBQWEsRUFBQTs7QUF4RGpCO0lBNERJLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBakV0QjtNQW9FTSxVQUFVLEVBQUE7O0FBcEVoQjtNQXdFTSxXQUFXLEVBQUE7O0FBeEVqQjs7TUE2RU0sa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixjQUF3QixFQUFBOztBQWxGOUI7O01BdUZNLHlCQUFvQyxFQUFBOztBQXZGMUM7TUEyRk0sY0FBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsbUJBQW1CLEVBQUE7O0FBL0Z6QjtNQW1HTSxpQkFBaUI7TUFDakIscUJBQXFCLEVBQUE7O0FBcEczQjtRQXVHUSxXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBOztBQXpHekI7UUE2R1EsZ0JBQWdCLEVBQUE7O0FBN0d4QjtRQWlIUSxlQUFlO1FBQ2YsZUFBZSxFQUFBOztBQWxIdkI7UUFzSFEseUJBQW9DLEVBQUE7O0FBdEg1QztRQTBIUSx5QkFBeUIsRUFBQTs7QUExSGpDO1FBOEhRLGdCQUFnQixFQUFBOztBQTlIeEI7UUFrSVEsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWUsRUFBQTs7QUF0SXZCO1FBMElRLGdCQUFnQixFQUFBOztBQTFJeEI7VUE2SVUsV0FBVztVQUNYLHlCQUFtQztVQUNuQyxnQkFBZ0IsRUFBQTs7QUEvSTFCO1FBcUpVLHlCQUFvQyxFQUFBOztBQXJKOUM7UUEwSlEsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixjQUFjLEVBQUE7O0FBNUp0QjtJQWtLSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUF4S3BCO01BMktNLGNBQXdCO01BQ3hCLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBOztBQS9LeEI7TUFtTE0sbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGVBQWU7TUFDZixjQUF3QixFQUFBOztBQXhMOUI7TUE0TE0sY0FBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCxTQUFTLEVBQUE7O0FBbE1mO1FBcU1RLGlCQUFpQixFQUFBOztBQXJNekI7VUF3TVUsVUFBVTtVQUNWLFdBQVc7VUFDWCxTQUFTO1VBQ1QsbUJBQW1CO1VBQ25CLGtCQUFrQjtVQUNsQixxQkFBcUIsRUFBQTs7QUE3TS9CO01BbU5NLHlCQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAa2V5ZnJhbWVzIGhpZGUge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgfVxuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgY29udGVudCB7XG4gICAgd2lkdGg6IDczMnB4O1xuICAgIGhlaWdodDogNDU3cHg7XG4gIH1cblxuICAubW9udGhfeWVhciB7XG4gICAgei1pbmRleDogMjIyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKSAwcztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLm1teXlTZWxlY3Qge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogY29ybnNpbGs7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTc1cHgpO1xuICAgICAgd2lkdGg6IDQyMHB4O1xuICAgICAgaGVpZ2h0OiAzMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cblxuICAubW15eVNlbGVjdC5oaWRlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIGFuaW1hdGlvbjogaGlkZSAwLjFzIGxpbmVhcjtcbiAgfVxuXG4gIC5tZXMuaGlkZSxcbiAgLmxhdGVyYWwuaGlkZSB7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cblxuICAubW9udGhfeWVhciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG5cbiAgLm1vbnRoX3llYXIuaGlkZSB7XG4gICAgei1pbmRleDogLTIyMjtcbiAgfVxuXG4gIC5tZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuODUpO1xuICAgIHdpZHRoOiA1NjBweDtcbiAgICBoZWlnaHQ6IDQ1N3B4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5iYWNrIHtcbiAgICAgIGxlZnQ6IDEycHg7XG4gICAgfVxuXG4gICAgLm5leHQge1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgLmJhY2ssXG4gICAgLm5leHQge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTJweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogcmdiKDI1NSwgMTIwLCA5Mik7XG4gICAgfVxuXG4gICAgLmJhY2s6aG92ZXIsXG4gICAgLm5leHQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogcmdiKDY1LCA4MCwgOTYpO1xuICAgICAgbWFyZ2luOiA0NXB4IDQwcHggMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIH1cblxuICAgIC5kYXlzIHtcbiAgICAgIG1hcmdpbjogMjBweCA0NXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAuZGF5IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXk6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgfVxuXG4gICAgICAuZGF5Om5vdCgud2Vla19uYW1lKSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuZGF5OmhvdmVyOm5vdCgud2Vla19uYW1lKTpub3QoLnNlbGVjdGVkKSAuY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xuICAgICAgfVxuXG4gICAgICAuZGF5Lm90aGVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIH1cblxuICAgICAgLmRheTpub3QoLm90aGVyKTpub3QoLndlZWtfbmFtZSkge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuXG4gICAgICAuZGF5IC5jaXJjbGUge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXkuc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyMCwgOTIpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRheS5hY3RpdmU6bm90KC5zZWxlY3RlZCkge1xuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAxOTUsIDE4NCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLndlZWtfbmFtZSB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxhdGVyYWwge1xuICAgIHdpZHRoOiAxNzJweDtcbiAgICBoZWlnaHQ6IDQ1N3B4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA1MywgNjAsIDAuOTUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogcmdiKDI1NSwgMTIwLCA5Mik7XG4gICAgICBtYXJnaW46IDU1cHggNDBweCAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkRGF0ZSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogcmdiKDk2LCAxMTAsIDEyMSk7XG4gICAgfVxuXG4gICAgLmV2ZW50cyB7XG4gICAgICBjb2xvcjogcmdiKDk2LCAxMTAsIDEyMSk7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdG9wOiA5MHB4O1xuXG4gICAgICAuZXZlbnQge1xuICAgICAgICBwYWRkaW5nOiAzcHggMTJweDtcblxuICAgICAgICBociB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzYwNmU3OTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggYXV0byAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgNDcsIDQwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/calendar/calendar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/appData/current/calendar/calendar.component.ts ***!
  \****************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(appDataService) {
        this.appDataService = appDataService;
        this.days = [];
        this.date = [];
        this.time = new Date();
        this.selected = { day: null, month: null, year: null };
        this.weekNameAbbr = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        this.weekName = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
        this.monthNameAbbr = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        this.monthName = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro'
        ];
        this.events = {};
        this.data = [];
        this.appDataService.appData.appSettings.calendar = {
            style: { transform: 'translate3d(0px, calc(50vh - 228px), 0px)', width: '732px', height: '457px', }
        };
        this.appDataService.setData();
        this.genMonth(this.time.getDate(), this.time.getMonth(), this.time.getFullYear());
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appDataService
            .getAppData({ col: 'calendar', orderBy: 'datetime' })
            .subscribe(function (data) { _this.data = data; });
    };
    CalendarComponent.prototype.genMonth = function (day, month, year) {
        this.popup = 'month';
        this.toDate({ dd: day, mm: month, yy: year });
        if (month > 11) {
            month = 0;
            year += 1;
        }
        if (month < 0) {
            month = 11;
            year -= 1;
        }
        var y = 0;
        var daysMonth = new Date(year, month + 1, 0).getDate();
        var lastWeekLastMonth = new Date(year, month, 0).getDay();
        var lastDayLastMonth = new Date(year, month, 0).getDate();
        for (var x = (lastDayLastMonth - lastWeekLastMonth); x <= lastDayLastMonth; x++, y++) {
            this.days[y] = { dd: x, mm: month - 1, yy: year };
        }
        for (var x = 1; x <= daysMonth; x++, y++) {
            this.days[y] = { dd: x, mm: month, yy: year };
        }
        for (var x = 1; y < 42; x++, y++) {
            this.days[y] = { dd: x, mm: month + 1, yy: year };
        }
    };
    CalendarComponent.prototype.change = function (val) {
        this.popup = val;
        console.log(val);
    };
    CalendarComponent.prototype.newEvent = function () {
        var date = (this.selected.year + '/' + (this.selected.month + 1) + '/' + this.selected.day).toString();
        // this.events[date].push({time:'00:00', title:'', note:''});
    };
    CalendarComponent.prototype.toDate = function (val) {
        this.selected = { day: val.dd, month: val.mm, year: val.yy };
        var date = val.yy + '-' + (val.mm + 1) + '-' + val.dd;
        console.log(this.events, date);
        if (this.events[date]) {
            this.date = this.events[date];
        }
        else {
            this.date = null;
        }
    };
    CalendarComponent.prototype.closeApp = function (val) {
        this.appDataService.closeApp(val);
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/appData/current/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/appData/current/calendar/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/clientes/clientes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/appData/current/clientes/clientes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\">Clientes | total: {{ (data)?.length }}</div>\n\n<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"newData={viewMode:'search'};\">\n      <i class=\"material-icons\">search</i>\n      <div class=\"altInner\">Procurar</div>\n    </button>\n    <button class=\"alt\" (click)=\"newData={viewMode:'addClient'};\">\n      <i class=\"material-icons\">person_add</i>\n      <div class=\"altInner\">+ Cliente</div>\n    </button>\n    <button class=\"alt\" (click)=\"newData={viewMode:'config'};\">\n      <i class=\"material-icons\">build</i>\n      <div class=\"altInner\">Ajustes</div>\n    </button>\n    <button (click)=\"closeApp('clientes');\" class=\"alt\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n    <div class=\"bottom\" [class.blured]=\"newData.viewMode\">\n      <div *ngIf=\"(data)?.length === 0\">Não foi possível encontrar.</div>\n      <div class=\"client\" *ngFor=\"let client of data\" (click)=\"show(client);\">\n        <div class=\"circle\" [ngClass]=\"[client.name | color]\">{{ client.name || '(Sem nome)'  | iniciais }}</div>\n        <div class=\"user\">\n          <div class=\"name\">{{ client.name || '(Sem nome)' | slice:0:30 }}</div>\n          <div class=\"cpf\">{{ client.cpf || '(vazio)' | mask: '000.000.000-99' }}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"addClient\" *ngIf=\"newData.viewMode\">\n      <div class=\"box\">\n        <div class=\"left\">\n          <button (click)=\"newData = { viewMode: null };\">\n            <mat-icon>arrow_back</mat-icon>\n          </button>\n        </div>\n\n        <div class=\"right\">\n\n          <!-- CONFIG -->\n          <div *ngIf=\"newData.viewMode == 'config'\">\n            <b class=\"title\">Ajustes</b>\n\n            <mat-list>\n              <h3 mat-subheader>Folders</h3>\n              <mat-list-item>\n                <mat-icon mat-list-icon>folder</mat-icon>\n                <h4 mat-line>name</h4>\n                <p mat-line class=\"demo-2\"> title </p>\n                <mat-divider [inset]=\"true\" *ngIf=\"!last\"></mat-divider>\n              </mat-list-item>\n              <mat-divider></mat-divider>\n              <h3 mat-subheader>Notes</h3>\n              <mat-list-item>\n                <mat-icon mat-list-icon>note</mat-icon>\n                <h4 mat-line>name</h4>\n                <p mat-line class=\"demo-2\"> title </p>\n              </mat-list-item>\n            </mat-list>\n          </div>\n\n          <!-- SEARCH -->\n          <div *ngIf=\"newData.viewMode == 'search'\" class=\"search\">\n            <b class=\"title\">Procurar</b>\n            <p>Digite o nome abaixo:</p>\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"searchText\" placeholder=\"Procurar por:\">\n            </mat-form-field>\n            <button mat-icon-button color=\"primary\" (click)=\"goSearch()\">\n              <mat-icon>search</mat-icon>\n            </button>\n          </div>\n\n          <!-- DETAILS -->\n          <div *ngIf=\"newData.viewMode == 'details'\" class=\"details\">\n            <b class=\"title\">Cliente</b>\n            <form #f=\"ngForm\" (ngSubmit)=\"editClient(f, 'teste')\">\n              <mat-form-field>\n                <input matInput name=\"name\" ngModel required #name=\"ngModel\" [(ngModel)]=\"newData.clientData.name\"\n                  placeholder=\"Nome\">\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput name=\"cpf\" ngModel required #cpf=\"ngModel\" [(ngModel)]=\"newData.clientData.cpf\"\n                  placeholder=\"CPF\" mask=\"000.000.000-00\">\n              </mat-form-field>\n              <button mat-stroked-button color=\"primary\" type=\"submit\" [disabled]=\"f.invalid\">Salvar</button>\n              <button mat-stroked-button color=\"warn\" (click)=\"newData.viewMode = 'confirmDel';\">\n                Excluir cliente\n              </button>\n              <button mat-raised-button color=\"primary\" (click)=\"addRecipe();\"> + Receita </button>\n            </form>\n\n            <mat-list *ngIf=\"newData.clientData.receitas && newData.clientData.receitas[0]\">\n              <h3 mat-subheader>Receitas</h3>\n              <mat-list-item *ngFor=\"let receita of newData.clientData.receitas\" (click)=\"showRecipe(receita.file)\">\n                <mat-icon mat-list-icon>assignment</mat-icon>\n                <h4 mat-line>Data: <b>{{ dateConverter(receita.data) | date : 'dd/MM/yyyy' }}</b></h4>\n                <p mat-line>Retorno: <b>{{ dateConverter(receita.dataRetorno) | date : 'dd/MM/yyyy' }}</b></p>\n              </mat-list-item>\n            </mat-list>\n\n          </div>\n\n          <!-- ADD CLIENT -->\n          <form *ngIf=\"newData.viewMode=='addClient'\" #f=\"ngForm\" (ngSubmit)=\"addClient(f)\">\n            <b class=\"title\">Novo cliente</b>\n            <p>Preencha corretamente</p>\n            <mat-form-field>\n              <input type=\"text\" matInput name=\"name\" ngModel required #name=\"ngModel\" placeholder=\"Nome\"\n                [(ngModel)]=\"docnewData.name\">\n            </mat-form-field>\n            <mat-form-field>\n              <input type=\"text\" matInput name=\"cpf\" ngModel required #cpf=\"ngModel\" placeholder=\"CPF\"\n                [(ngModel)]=\"docnewData.cpf\" mask=\"000.000.000-00\">\n            </mat-form-field>\n            <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Salvar</button>\n          </form>\n\n          <!-- SENDING -->\n          <div *ngIf=\"newData.viewMode == 'sending'\">\n            <b class=\"title\">Enviando..</b>\n            <p>Aguarde o final do carregamento</p>\n            <h3>{{ percent }}{{ percent ? '% ' : '' }}</h3>\n          </div>\n\n          <!-- NOVA RECEITA -->\n          <form *ngIf=\"newData.viewMode == 'addRecipe'\" #f=\"ngForm\" (ngSubmit)=\"newRecipe(f)\">\n            <b class=\"title\">Nova receita</b>\n            <p>{{ newData.clientData.name }} - {{ newData.clientData.cpf | mask: '000.000.000-99' }}</p>\n            <input name=\"file\" name=\"file\" ngModel required #file=\"ngModel\" type=\"file\"\n              accept=\".pdf,.rtf,.plain,.png,.jpeg,.jpg,.bmp,.gif\" (change)=\"onFileChange($event)\" />\n            <mat-form-field>\n              <input matInput name=\"data\" ngModel required #data=\"ngModel\" [matDatepicker]=\"pickData\"\n                placeholder=\"Data\">\n              <mat-datepicker-toggle matSuffix [for]=\"pickData\"></mat-datepicker-toggle>\n              <mat-datepicker #pickData></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput name=\"dataRetorno\" ngModel required #dataRetorno=\"ngModel\"\n                [matDatepicker]=\"pickDataRetorno\" placeholder=\"Retorno\">\n              <mat-datepicker-toggle matSuffix [for]=\"pickDataRetorno\"></mat-datepicker-toggle>\n              <mat-datepicker #pickDataRetorno></mat-datepicker>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" (click)=\"newData.viewMode = 'details'\">Voltar</button>\n            <button mat-stroked-button color=\"primary\" type=\"submit\" [disabled]=\"f.invalid\">Salvar</button>\n          </form>\n\n          <!-- CONFIRM DEL -->\n          <div *ngIf=\"newData.viewMode == 'confirmDel'\">\n            <b class=\"title\">Esta ação não pode ser desfeita.</b>\n            <p>Deseja realmente excluir as informações deste cliente?</p>\n            <button mat-raised-button color=\"primary\" (click)=\"newData.viewMode = 'details'\">Não</button>\n            <button mat-stroked-button color=\"warn\" (click)=\"delClient(newData.clientData)\">SIM</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/clientes/clientes.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/appData/current/clientes/clientes.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .appTitle {\n  color: #6855eb;\n  text-shadow: none; }\n\n:host content {\n  background: rgba(244, 248, 249, 0.9); }\n\n:host content include {\n    padding: 36px 12px 0; }\n\n:host content include .hide {\n      display: none;\n      position: absolute;\n      visibility: hidden;\n      height: 0;\n      width: 0; }\n\n:host content include .top {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      line-height: 44px;\n      text-align: center; }\n\n:host content include .top .title {\n        color: #6855eb;\n        font-size: 24px;\n        font-weight: 100;\n        text-align: center; }\n\n:host content include .top .paging {\n        display: -webkit-box;\n        display: flex;\n        font-size: 12px;\n        font-weight: 300;\n        color: gray; }\n\n:host content include .top .paging div {\n          -webkit-box-flex: 1;\n                  flex: 1; }\n\n:host content include .top.blured,\n    :host content include .bottom.blured {\n      -webkit-filter: blur(3px);\n              filter: blur(3px); }\n\n:host content include .bottom {\n      overflow: hidden;\n      overflow-y: scroll;\n      height: 100%; }\n\n:host content include .bottom .client:hover {\n        background: #fff; }\n\n:host content include .bottom .client {\n        cursor: pointer;\n        width: calc((100% - 120px) / 3);\n        float: left;\n        padding: 12px;\n        margin: 8px;\n        border-radius: 6px;\n        display: grid;\n        grid-template-columns: 0.2fr 1fr; }\n\n:host content include .bottom .client .circle {\n          height: 36px;\n          width: 36px;\n          border-radius: 50%;\n          line-height: 36px;\n          text-align: center;\n          color: #fff;\n          font-size: 12px;\n          text-transform: uppercase; }\n\n:host content include .bottom .client .user {\n          font-size: 12px;\n          line-height: 18px;\n          padding: 0 12px; }\n\n:host content include .bottom .client .user .cpf {\n            font-weight: 300;\n            color: #5a5a5a; }\n\n:host content include .addClient {\n      position: absolute;\n      background: rgba(0, 0, 0, 0.53);\n      top: 0;\n      z-index: 100;\n      left: 0;\n      right: 0;\n      bottom: 0; }\n\n:host content include .addClient .title {\n        margin: 0 0 10px;\n        color: #5890ee;\n        text-align: left;\n        font-size: 24px;\n        display: block; }\n\n:host content include .addClient p {\n        text-align: left;\n        margin: 0 0 10px; }\n\n:host content include .addClient .box {\n        width: 430px;\n        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n        margin: 0 auto;\n        border-radius: 0 0 8px 8px;\n        overflow: hidden;\n        overflow-y: scroll;\n        max-height: 100%;\n        display: grid;\n        grid-template-columns: 60px calc(100% - 60px); }\n\n:host content include .addClient .box .left {\n          background: #5890ee;\n          padding: 20px 14px 0;\n          max-height: 100%; }\n\n:host content include .addClient .box .left button {\n            border-radius: 50%;\n            border: 1px solid #fff;\n            color: #fff;\n            line-height: 42px;\n            width: 32px;\n            height: 32px;\n            position: absolute; }\n\n:host content include .addClient .box .left button:hover {\n            background: rgba(255, 255, 255, 0.3); }\n\n:host content include .addClient .box .right {\n          background: #eeefe9;\n          padding: 20px;\n          color: #5a5a5a; }\n\n:host content include .addClient .box .right mat-form-field {\n            width: 100%; }\n\n:host content include .addClient .box .right .details mat-list mat-list-item {\n            cursor: pointer; }\n\n:host content include .addClient .box .right .details mat-list mat-list-item button {\n              visibility: hidden; }\n\n:host content include .addClient .box .right .details mat-list-item:hover {\n            background: rgba(88, 144, 238, 0.24);\n            border-radius: 8px; }\n\n:host content include .addClient .box .right .details mat-list-item:hover button {\n            visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUhyQjtFQU9JLG9DQUFvQyxFQUFBOztBQVB4QztJQVVNLG9CQUFvQixFQUFBOztBQVYxQjtNQWFRLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRLEVBQUE7O0FBakJoQjtNQXFCUSxhQUFhO01BQ2Isa0NBQWtDO01BQ2xDLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTs7QUF4QjFCO1FBMkJVLGNBQXdCO1FBQ3hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7O0FBOUI1QjtRQWtDVSxvQkFBYTtRQUFiLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBQTs7QUFyQ3JCO1VBd0NZLG1CQUFPO2tCQUFQLE9BQU8sRUFBQTs7QUF4Q25COztNQStDUSx5QkFBaUI7Y0FBakIsaUJBQWlCLEVBQUE7O0FBL0N6QjtNQW1EUSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLFlBQVksRUFBQTs7QUFyRHBCO1FBd0RVLGdCQUFnQixFQUFBOztBQXhEMUI7UUE0RFUsZUFBZTtRQUNmLCtCQUErQjtRQUMvQixXQUFXO1FBQ1gsYUFBYTtRQUNiLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGdDQUFnQyxFQUFBOztBQW5FMUM7VUFzRVksWUFBWTtVQUNaLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsZUFBZTtVQUNmLHlCQUF5QixFQUFBOztBQTdFckM7VUFpRlksZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixlQUFlLEVBQUE7O0FBbkYzQjtZQXNGYyxnQkFBZ0I7WUFDaEIsY0FBYyxFQUFBOztBQXZGNUI7TUE4RlEsa0JBQWtCO01BQ2xCLCtCQUErQjtNQUMvQixNQUFNO01BQ04sWUFBWTtNQUNaLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUyxFQUFBOztBQXBHakI7UUF1R1UsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGNBQWMsRUFBQTs7QUEzR3hCO1FBK0dVLGdCQUFnQjtRQUNoQixnQkFBZ0IsRUFBQTs7QUFoSDFCO1FBb0hVLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsY0FBYztRQUNkLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsNkNBQTZDLEVBQUE7O0FBNUh2RDtVQStIWSxtQkFBNkI7VUFDN0Isb0JBQW9CO1VBQ3BCLGdCQUFnQixFQUFBOztBQWpJNUI7WUFvSWMsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0QixXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxZQUFZO1lBQ1osa0JBQWtCLEVBQUE7O0FBMUloQztZQTZJYyxvQ0FBb0MsRUFBQTs7QUE3SWxEO1VBa0pZLG1CQUFtQjtVQUNuQixhQUFhO1VBQ2IsY0FBYyxFQUFBOztBQXBKMUI7WUF1SmMsV0FBVyxFQUFBOztBQXZKekI7WUE2SmtCLGVBQWUsRUFBQTs7QUE3SmpDO2NBZ0tvQixrQkFBa0IsRUFBQTs7QUFoS3RDO1lBc0tnQixvQ0FBb0M7WUFDcEMsa0JBQWtCLEVBQUE7O0FBdktsQztZQTJLZ0IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBEYXRhL2N1cnJlbnQvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5hcHBUaXRsZSB7XG4gICAgY29sb3I6IHJnYigxMDQsIDg1LCAyMzUpO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG5cbiAgY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0OCwgMjQ5LCAwLjkpO1xuXG4gICAgaW5jbHVkZSB7XG4gICAgICBwYWRkaW5nOiAzNnB4IDEycHggMDtcblxuICAgICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLnRvcCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDEwNCwgODUsIDIzNSk7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhZ2luZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcblxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudG9wLmJsdXJlZCxcbiAgICAgIC5ib3R0b20uYmx1cmVkIHtcbiAgICAgICAgZmlsdGVyOiBibHVyKDNweCk7XG4gICAgICB9XG5cbiAgICAgIC5ib3R0b20ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAuY2xpZW50OmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsaWVudCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTIwcHgpIC8gMyk7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjtcblxuICAgICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudXNlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcblxuICAgICAgICAgICAgLmNwZiB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWRkQ2xpZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTMpO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgICAgY29sb3I6ICM1ODkwZWU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYm94IHtcbiAgICAgICAgICB3aWR0aDogNDMwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IGNhbGMoMTAwJSAtIDYwcHgpO1xuXG4gICAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDg4LCAxNDQsIDIzOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE0cHggMDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVmZTk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1YTVhNWE7XG5cbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgbWF0LWxpc3Qge1xuICAgICAgICAgICAgICAgIG1hdC1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4OCwgMTQ0LCAyMzgsIDAuMjQpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG1hdC1saXN0LWl0ZW06aG92ZXIgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/appData/current/clientes/clientes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/appData/current/clientes/clientes.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-azure-blob-service */ "./node_modules/angular-azure-blob-service/fesm5/angular-azure-blob-service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var Config = {
    // tslint:disable-next-line: max-line-length
    sas: '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-07-02T09:34:36Z&st=2019-07-02T01:34:36Z&spr=https&sig=NWPwoIYpKoNH2InxPmY7LDLz43LhFgRkqXKNvm%2BF99w%3D',
    storageAccount: 'telasfiles',
    containerName: 'telas360'
};
var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(toast, afs, appData, blob) {
        this.toast = toast;
        this.afs = afs;
        this.appData = appData;
        this.blob = blob;
        this.searchText = '';
        this.pageNum = 0;
        this.data = [];
        this.searchBox = [false];
        this.config = [false];
        this.newData = { viewMode: null };
        this.docnewData = { name: null, cpf: null, receitas: [] };
        this.percent = null;
        this.appData.appData.appSettings.clientes = {
            style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
        };
        this.appData.setData();
    }
    ClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appData.getAppData({ col: 'clientes', orderBy: 'name' }).subscribe(function (data) { _this.data = data; });
    };
    ClientesComponent.prototype.onFileChange = function (event) {
        if (event.target.files && event.target.files[0]) {
            this.novaReceita = event.target.files[0];
        }
    };
    ClientesComponent.prototype.uploadFile = function (currentFile, data) {
        var _this = this;
        var baseUrl = this.blob.generateBlobUrl(Config, currentFile.name);
        this.azureConfig = {
            baseUrl: baseUrl,
            sasToken: Config.sas,
            blockSize: 1024 * 64,
            file: currentFile,
            complete: function () {
                _this.toast.success(_this.newData.clientData.name, 'Nova receita incluída');
                _this.appData.setSubCollection(data).then(function () {
                    _this.newData.viewMode = 'details';
                });
            },
            error: function (err) {
                _this.newData.viewMode = 'details';
                _this.toast.error(err, 'Error');
                // console.log('Error:', err);
            },
            progress: function (percent) {
                _this.percent = percent;
            }
        };
        this.blob.upload(this.azureConfig);
    };
    ClientesComponent.prototype.addClient = function (form) {
        var _this = this;
        if (form.valid === true) {
            this.newData = { viewMode: null };
            var userName_1 = form.value.name;
            this.appData.setAppData('clientes', form.value).then(function () {
                _this.toast.success(userName_1, 'Novo(a) cliente incluído(a)');
            });
        }
    };
    ClientesComponent.prototype.delClient = function (data) {
        var _this = this;
        this.newData = { viewMode: null };
        var userName = data.name;
        this.appData.delAppData('clientes', data.id).then(function () {
            _this.toast.success(userName, 'Cliente removido(a)');
        });
    };
    ClientesComponent.prototype.editClient = function (form) {
        var _this = this;
        if (form.valid === true) {
            var key = this.newData.clientData.id;
            var data_1 = form.value;
            this.appData.updateAppData({ app: 'clientes', key: key, data: data_1 }).then(function () {
                _this.toast.success(data_1.name, 'Alterações salvas');
            });
        }
    };
    ClientesComponent.prototype.addRecipe = function () {
        this.newData.viewMode = 'addRecipe';
    };
    ClientesComponent.prototype.newRecipe = function (form) {
        if (form.valid === true) {
            this.newData.viewMode = 'sending';
            var key = this.newData.clientData.id;
            var data = this.newData.clientData;
            if (!data.receitas) {
                data.receitas = [];
            }
            data.receitas.push(form.value);
            form.value.file = this.novaReceita.name;
            this.uploadFile(this.novaReceita, { app: 'clientes', key: key, data: data });
        }
    };
    ClientesComponent.prototype.show = function (data) {
        this.newData = { viewMode: 'details', clientData: data };
    };
    ClientesComponent.prototype.showRecipe = function (key) {
        this.showRecipeData = 'https://telasfiles.blob.core.windows.net/telas360/' + key;
    };
    ClientesComponent.prototype.dateConverter = function (date) {
        return date.seconds ? date.toDate() : Date.parse(date);
    };
    ClientesComponent.prototype.goSearch = function () { };
    ClientesComponent.prototype.closeApp = function (key) {
        this.appData.closeApp(key);
    };
    ClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/appData/current/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.scss */ "./src/app/appData/current/clientes/clientes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
            angular_azure_blob_service__WEBPACK_IMPORTED_MODULE_4__["BlobService"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/dcb/dcb.component.html":
/*!********************************************************!*\
  !*** ./src/app/appData/current/dcb/dcb.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dcb>\n  <sect col=\"0\">\n    <dot class=\"material-icons clear\">lens</dot>\n    <dot class=\"material-icons clear\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[0] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[1] == 1\">lens</dot>\n  </sect>\n  <sect col=\"1\">\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[2] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[3] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[4] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[5] == 1\">lens</dot>\n  </sect>\n  <sect col=\"2\">\n    <dot class=\"material-icons clear\">lens</dot>\n    <dot class=\"material-icons clear\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[6] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[7] == 1\">lens</dot>\n  </sect>\n  <sect col=\"3\">\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[8] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[9] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[10] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[11] == 1\">lens</dot>\n  </sect>\n  <sect col=\"4\">\n    <dot class=\"material-icons clear\">lens</dot>\n    <dot class=\"material-icons clear\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[12] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[13] == 1\">lens</dot>\n  </sect>\n  <sect col=\"5\">\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[14] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[15] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[16] == 1\">lens</dot>\n    <dot class=\"material-icons\" [class.selected]=\"timePrint[17] == 1\">lens</dot>\n  </sect>\n</dcb>"

/***/ }),

/***/ "./src/app/appData/current/dcb/dcb.component.scss":
/*!********************************************************!*\
  !*** ./src/app/appData/current/dcb/dcb.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host dcb {\n  z-index: -2;\n  padding: 5px;\n  border-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  width: 90px;\n  margin: 0 auto;\n  left: 0;\n  right: 0; }\n\n:host sect {\n  height: 38px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: auto; }\n\n:host dot.clear {\n  color: transparent; }\n\n:host dot {\n  text-align: center;\n  line-height: 1;\n  color: rgba(138, 138, 138, 0.1);\n  font-size: 6px;\n  height: calc(100% / 4); }\n\n:host dot.selected {\n  color: rgba(255, 255, 255, 0.7);\n  text-shadow: 0 0 10px #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9kY2IvZGNiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQVRaO0VBWUksWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG1CQUFVO1VBQVYsVUFBVSxFQUFBOztBQWZkO0VBa0JJLGtCQUFrQixFQUFBOztBQWxCdEI7RUFxQkksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQXpCMUI7RUE0QkksK0JBQStCO0VBQy9CLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L2RjYi9kY2IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRjYiB7XG4gICAgei1pbmRleDogLTI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgc2VjdCB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiBhdXRvO1xuICB9XG4gIGRvdC5jbGVhciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIGRvdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiByZ2JhKDEzOCwgMTM4LCAxMzgsIDAuMSk7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICBkb3Quc2VsZWN0ZWQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmY7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/dcb/dcb.component.ts":
/*!******************************************************!*\
  !*** ./src/app/appData/current/dcb/dcb.component.ts ***!
  \******************************************************/
/*! exports provided: DcbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DcbComponent", function() { return DcbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var seconds = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
var DcbComponent = /** @class */ (function () {
    function DcbComponent() {
        var _this = this;
        this.timePrint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        seconds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(1100)).subscribe(function (value) {
            _this.time = new Date();
            var ss = _this.time.getSeconds();
            var mm = _this.time.getMinutes();
            var hh = _this.time.getHours();
            _this.timePrint = [
                (hh % 64) < 32 ? 0 : 1,
                (hh % 32) < 16 ? 0 : 1,
                (hh % 16) < 8 ? 0 : 1,
                (hh % 8) < 4 ? 0 : 1,
                (hh % 4) < 2 ? 0 : 1,
                (hh % 2),
                (mm % 64) < 32 ? 0 : 1,
                (mm % 32) < 16 ? 0 : 1,
                (mm % 16) < 8 ? 0 : 1,
                (mm % 8) < 4 ? 0 : 1,
                (mm % 4) < 2 ? 0 : 1,
                (mm % 2),
                (ss % 64) < 32 ? 0 : 1,
                (ss % 32) < 16 ? 0 : 1,
                (ss % 16) < 8 ? 0 : 1,
                (ss % 8) < 4 ? 0 : 1,
                (ss % 4) < 2 ? 0 : 1,
                (ss % 2),
            ];
        });
    }
    DcbComponent.prototype.ngOnInit = function () { };
    DcbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dcb',
            template: __webpack_require__(/*! ./dcb.component.html */ "./src/app/appData/current/dcb/dcb.component.html"),
            styles: [__webpack_require__(/*! ./dcb.component.scss */ "./src/app/appData/current/dcb/dcb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DcbComponent);
    return DcbComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/expense/expense.component.html":
/*!****************************************************************!*\
  !*** ./src/app/appData/current/expense/expense.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expenseTitle\">\n  <div class=\"menu\">\n    <div>Perfil padrão</div>\n    <button>\n      <i class=\"material-icons-round\">keyboard_arrow_down</i>\n    </button>\n  </div>\n\n  <br>\n\n  <div class=\"month\">\n    <button (click)=\"month('today')\">\n      <i class=\"material-icons-round\">today</i>\n    </button>\n    <button (click)=\"month('minus')\">\n      <i class=\"material-icons-round\">keyboard_arrow_left</i>\n    </button>\n    <div class=\"title\">\n      <span>{{ config.date.months[config.date.selected.month] }} - {{ config.date.selected.year }}</span>\n    </div>\n    <button (click)=\"month('plus')\">\n      <i class=\"material-icons-round\">keyboard_arrow_right</i>\n    </button>\n    <button>\n      <i class=\"material-icons-round\">view_week</i>\n    </button>\n  </div>\n</div>\n\n<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"config.viewMode='home';\">\n      <i class=\"material-icons-round\">home</i>\n      <div class=\"altInner\">Home</div>\n    </button>\n    <button class=\"alt\" (click)=\"config.viewMode='help';\">\n      <i class=\"material-icons-round\">help</i>\n      <div class=\"altInner\">Ajuda</div>\n    </button>\n    <button class=\"alt\" (click)=\"config.viewMode='edit';\">\n      <i class=\"material-icons-round\">build</i>\n      <div class=\"altInner\">Ajustes</div>\n    </button>\n    <button (click)=\"closeApp('expense');\" class=\"alt\">\n      <i class=\"material-icons-round\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content [ngClass]=\"{'home':'b_blue01', 'edit':'b_aqua', 'help':'b_purple'}[config.viewMode]\">\n\n  <include [ngClass]=\"{'home':'low', 'edit':'high', 'help':'high'}[config.viewMode]\">\n    <div *ngIf=\"config.viewMode=='home'\">\n      <div class=\"top\">\n        <div class=\"left\">\n          <button class=\"ico\">\n            <i class=\"material-icons-outlined\">work_outline</i>\n          </button>\n          <div>\n            <span class=\"title\">Saldo</span>\n            <div class=\"value\">R$ 1.234,00</div>\n          </div>\n        </div>\n\n        <div class=\"separator\"></div>\n\n        <div class=\"right\">\n          <button class=\"ico\">\n            <i class=\"material-icons-outlined\">account_balance_wallet</i>\n          </button>\n          <div>\n            <span class=\"title\">Balanço</span>\n            <div class=\"value\">R$ 1.234,00</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"bottom\">\n        <div class=\"details\" *ngFor=\"let resOuter of data | orderBy:'-timestamp' | groupBy:'timestamp'\">\n          <h4>{{ resOuter.key | date:'d/M - EEEE' }}</h4>\n          <div class=\"info\" *ngFor=\"let res of resOuter.value\">\n            <div class=\"left\">\n              <i class=\"material-icons\" [ngClass]=\"res.color\">{{ res.ico }}</i>\n            </div>\n            <div class=\"center\">\n              <div>\n                <span>{{ res.title }}</span>\n              </div>\n              <div class=\"desc\">\n                <span>{{ res.desc }}</span>\n              </div>\n            </div>\n            <div class=\"right\">\n              <span>{{ res.val | currency : 'BRL' : 'symbol' : '1.2-2' : 'pt' }}</span>\n              <i class=\"material-icons\">remove_circle</i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"config.viewMode=='edit'\">\n      <div class=\"top\">\n        <div class=\"center\">\n          <button class=\"ico\">\n            <i class=\"material-icons-outlined\">build</i>\n          </button>\n          <div>\n            <span class=\"title\">Ajustes</span>\n            <div class=\"value\">Configurações</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"config.viewMode=='help'\">\n      <div class=\"top\">\n        <div class=\"center\">\n          <button class=\"ico\">\n            <i class=\"material-icons-outlined\">help</i>\n          </button>\n          <div>\n            <span class=\"title\">Ajuda</span>\n            <div class=\"value\">Assistente</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </include>\n\n</content>"

/***/ }),

/***/ "./src/app/appData/current/expense/expense.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/appData/current/expense/expense.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .b_orange {\n  background: #de7c1e; }\n\n:host .b_darkgreen {\n  background: #468a1d; }\n\n:host .b_green {\n  background: #6cb212; }\n\n:host .b_red01 {\n  background: #e21124; }\n\n:host .b_red02 {\n  background: #f04644; }\n\n:host .b_purple {\n  background: #a71bd8; }\n\n:host .b_darkblue {\n  background: #2e2b9f; }\n\n:host .b_blue01 {\n  background: #3b8ae2; }\n\n:host .b_blue02 {\n  background: #3362b3; }\n\n:host .b_aqua {\n  background: #2d9085; }\n\n:host .b_black01 {\n  background: #141416; }\n\n:host .b_black02 {\n  background: #141920; }\n\n:host .b_darkgray {\n  background: #282828; }\n\n:host .b_white {\n  background: #e9e9e9; }\n\n:host .b_gray {\n  background: #e1e1e6; }\n\n:host .expenseTitle {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  color: #fff;\n  font-size: 0.8rem;\n  text-align: center;\n  z-index: 99;\n  line-height: 33px; }\n\n:host .expenseTitle button i {\n    color: white; }\n\n:host .expenseTitle .menu {\n    background: rgba(0, 0, 0, 0.3);\n    border-radius: 0 0 18px 18px;\n    line-height: 34px;\n    padding: 0 12px;\n    color: white;\n    font-size: 12px;\n    display: -webkit-inline-box;\n    display: inline-flex; }\n\n:host .expenseTitle .month {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    margin: 7px 0; }\n\n:host .expenseTitle .month button {\n      min-width: 50px; }\n\n:host .expenseTitle .month .title {\n      text-transform: capitalize;\n      width: 150px; }\n\n:host content {\n  -webkit-transition: all 0.25s cubic-bezier(0, 0, 0.2, 1) 0s;\n  transition: all 0.25s cubic-bezier(0, 0, 0.2, 1) 0s; }\n\n:host content include.high {\n    top: 42px; }\n\n:host content include.low {\n    top: 84px; }\n\n:host content include {\n    z-index: 999;\n    -webkit-transition: all 0.25s cubic-bezier(0, 0, 0.2, 1) 0s;\n    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1) 0s;\n    border-radius: 25px 25px 0 0;\n    background: white;\n    padding: 10px 20px; }\n\n:host content include .top {\n      display: -webkit-box;\n      display: flex;\n      width: 100%;\n      height: 50px;\n      padding: 0 0 3px 0;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n:host content include .top .right,\n      :host content include .top .left {\n        width: calc(50% - 0.5px); }\n\n:host content include .top .center {\n        margin: 0 auto; }\n\n:host content include .top .right,\n      :host content include .top .left,\n      :host content include .top .center {\n        display: -webkit-box;\n        display: flex; }\n\n:host content include .top .right .ico,\n        :host content include .top .left .ico,\n        :host content include .top .center .ico {\n          margin: 0 15px;\n          color: rgba(0, 0, 0, 0.5); }\n\n:host content include .top .right .title,\n        :host content include .top .left .title,\n        :host content include .top .center .title {\n          text-transform: capitalize;\n          font-size: 11px;\n          color: rgba(0, 0, 0, 0.5); }\n\n:host content include .top .right .value,\n        :host content include .top .left .value,\n        :host content include .top .center .value {\n          color: #1cb955; }\n\n:host content include .top .separator {\n        width: 1px;\n        background: rgba(0, 0, 0, 0.1);\n        height: 30px;\n        margin: 10px 0; }\n\n:host content include .bottom {\n      position: absolute;\n      left: 20px;\n      right: 20px;\n      overflow: scroll;\n      top: 64px;\n      bottom: 0;\n      overflow: scroll; }\n\n:host content include .bottom .details .info:hover {\n        background: #f1f1f1; }\n\n:host content include .bottom .details .info {\n        border-radius: 8px;\n        cursor: pointer;\n        display: -webkit-box;\n        display: flex;\n        padding: 12px 0; }\n\n:host content include .bottom .details .info .left {\n          padding: 0 15px;\n          color: rgba(0, 0, 0, 0.5); }\n\n:host content include .bottom .details .info .left i {\n            color: white;\n            padding: 4px;\n            border-radius: 100%;\n            height: 32px;\n            width: 32px;\n            line-height: 32px;\n            text-align: center; }\n\n:host content include .bottom .details .info .center {\n          text-transform: capitalize;\n          -webkit-box-flex: 1;\n                  flex: 1; }\n\n:host content include .bottom .details .info .center .desc {\n            text-transform: capitalize;\n            font-size: 11px;\n            color: rgba(0, 0, 0, 0.5); }\n\n:host content include .bottom .details .info .right {\n          -webkit-box-flex: 2;\n          line-height: 30px;\n          padding: 0 12px;\n          color: #fe4a41;\n          display: -webkit-box;\n          display: flex; }\n\n:host content include .bottom .details .info .right > * {\n            padding: 0 10px;\n            min-width: 30px;\n            text-align: center;\n            line-height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9leHBlbnNlL2V4cGVuc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBNkIsRUFBQTs7QUFGakM7RUFLSSxtQkFBNEIsRUFBQTs7QUFMaEM7RUFRSSxtQkFBNkIsRUFBQTs7QUFSakM7RUFXSSxtQkFBNEIsRUFBQTs7QUFYaEM7RUFjSSxtQkFBNEIsRUFBQTs7QUFkaEM7RUFpQkksbUJBQTZCLEVBQUE7O0FBakJqQztFQW9CSSxtQkFBNEIsRUFBQTs7QUFwQmhDO0VBdUJJLG1CQUE2QixFQUFBOztBQXZCakM7RUEwQkksbUJBQTRCLEVBQUE7O0FBMUJoQztFQTZCSSxtQkFBNkIsRUFBQTs7QUE3QmpDO0VBZ0NJLG1CQUEyQixFQUFBOztBQWhDL0I7RUFtQ0ksbUJBQTJCLEVBQUE7O0FBbkMvQjtFQXNDSSxtQkFBMkIsRUFBQTs7QUF0Qy9CO0VBeUNJLG1CQUE4QixFQUFBOztBQXpDbEM7RUE0Q0ksbUJBQThCLEVBQUE7O0FBNUNsQztFQWdESSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQXhEckI7SUE0RFEsWUFBWSxFQUFBOztBQTVEcEI7SUFpRU0sOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkJBQW9CO0lBQXBCLG9CQUFvQixFQUFBOztBQXZFMUI7SUEyRU0sMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixhQUFhLEVBQUE7O0FBNUVuQjtNQStFUSxlQUFlLEVBQUE7O0FBL0V2QjtNQW1GUSwwQkFBMEI7TUFDMUIsWUFBWSxFQUFBOztBQXBGcEI7RUEwRkksMkRBQW1EO0VBQW5ELG1EQUFtRCxFQUFBOztBQTFGdkQ7SUE2Rk0sU0FBUyxFQUFBOztBQTdGZjtJQWdHTSxTQUFTLEVBQUE7O0FBaEdmO0lBbUdNLFlBQVk7SUFDWiwyREFBbUQ7SUFBbkQsbURBQW1EO0lBQ25ELDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBdkd4QjtNQTBHUSxvQkFBYTtNQUFiLGFBQWE7TUFDYixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiwyQ0FBMkMsRUFBQTs7QUE5R25EOztRQWtIVSx3QkFBd0IsRUFBQTs7QUFsSGxDO1FBc0hVLGNBQWMsRUFBQTs7QUF0SHhCOzs7UUE0SFUsb0JBQWE7UUFBYixhQUFhLEVBQUE7O0FBNUh2Qjs7O1VBK0hZLGNBQWM7VUFDZCx5QkFBeUIsRUFBQTs7QUFoSXJDOzs7VUFvSVksMEJBQTBCO1VBQzFCLGVBQWU7VUFDZix5QkFBeUIsRUFBQTs7QUF0SXJDOzs7VUEwSVksY0FBdUIsRUFBQTs7QUExSW5DO1FBK0lVLFVBQVU7UUFDViw4QkFBOEI7UUFDOUIsWUFBWTtRQUNaLGNBQWMsRUFBQTs7QUFsSnhCO01BdUpRLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsU0FBUztNQUNULGdCQUFnQixFQUFBOztBQTdKeEI7UUFpS1ksbUJBQThCLEVBQUE7O0FBaksxQztRQW9LWSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLG9CQUFhO1FBQWIsYUFBYTtRQUNiLGVBQWUsRUFBQTs7QUF2SzNCO1VBMEtjLGVBQWU7VUFDZix5QkFBeUIsRUFBQTs7QUEzS3ZDO1lBOEtnQixZQUF5QjtZQUN6QixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLGtCQUFrQixFQUFBOztBQXBMbEM7VUF3TGMsMEJBQTBCO1VBQzFCLG1CQUFPO2tCQUFQLE9BQU8sRUFBQTs7QUF6THJCO1lBNExnQiwwQkFBMEI7WUFDMUIsZUFBZTtZQUNmLHlCQUF5QixFQUFBOztBQTlMekM7VUFrTWMsbUJBQW1CO1VBQ25CLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsY0FBYztVQUNkLG9CQUFhO1VBQWIsYUFBYSxFQUFBOztBQXRNM0I7WUF5TWdCLGVBQWU7WUFDZixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L2V4cGVuc2UvZXhwZW5zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmJfb3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIyLCAxMjQsIDMwKTtcbiAgfVxuICAuYl9kYXJrZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYig3MCwgMTM4LCAyOSk7XG4gIH1cbiAgLmJfZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMDgsIDE3OCwgMTgpO1xuICB9XG4gIC5iX3JlZDAxIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI2LCAxNywgMzYpO1xuICB9XG4gIC5iX3JlZDAyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCA3MCwgNjgpO1xuICB9XG4gIC5iX3B1cnBsZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE2NywgMjcsIDIxNik7XG4gIH1cbiAgLmJfZGFya2JsdWUge1xuICAgIGJhY2tncm91bmQ6IHJnYig0NiwgNDMsIDE1OSk7XG4gIH1cbiAgLmJfYmx1ZTAxIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTksIDEzOCwgMjI2KTtcbiAgfVxuICAuYl9ibHVlMDIge1xuICAgIGJhY2tncm91bmQ6IHJnYig1MSwgOTgsIDE3OSk7XG4gIH1cbiAgLmJfYXF1YSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDQ1LCAxNDQsIDEzMyk7XG4gIH1cbiAgLmJfYmxhY2swMSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIwLCAyMCwgMjIpO1xuICB9XG4gIC5iX2JsYWNrMDIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMCwgMjUsIDMyKTtcbiAgfVxuICAuYl9kYXJrZ3JheSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNDApO1xuICB9XG4gIC5iX3doaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gIH1cbiAgLmJfZ3JheSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyNSwgMjI1LCAyMzApO1xuICB9XG5cbiAgLmV4cGVuc2VUaXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tZW51IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxOHB4IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cblxuICAgIC5tb250aCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIG1hcmdpbjogN3B4IDA7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250ZW50IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgMHM7XG5cbiAgICBpbmNsdWRlLmhpZ2gge1xuICAgICAgdG9wOiA0MnB4O1xuICAgIH1cbiAgICBpbmNsdWRlLmxvdyB7XG4gICAgICB0b3A6IDg0cHg7XG4gICAgfVxuICAgIGluY2x1ZGUge1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpIDBzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuXG4gICAgICAudG9wIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMCAwIDNweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgIC5yaWdodCxcbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDAuNXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0LFxuICAgICAgICAubGVmdCxcbiAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIC5pY28ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjgsIDE4NSwgODUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXBhcmF0b3Ige1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYm90dG9tIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgdG9wOiA2NHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIC5pbmZvOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcblxuICAgICAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZlNGE0MTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/appData/current/expense/expense.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/appData/current/expense/expense.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var _expenseData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenseData */ "./src/app/appData/current/expense/expenseData.ts");




var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(appDataService) {
        this.appDataService = appDataService;
        this.data = [
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_orange', '2020-1-1', 'local_shipping', 'Windstorm', 'descrição', 3000),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue01', '2020-1-1', 'local_gas_station', 'Bombasto', 'descrição', 30),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgreen', '2020-3-3', 'hotel', 'Magneta', 'descrição', 1300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgray', '2020-3-3', 'local_dining', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_green', '2020-5-5', 'directions', 'Magneta', 'descrição', 3200),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_red01', '2020-6-6', 'local_hospital', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_aqua', '2020-1-12', 'local_dining', 'Magneta', 'descrição', 10300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black01', '2020-1-13', 'directions', 'Magneta', 'descrição', 100300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_gray', '2020-1-14', 'local_hospital', 'Tornado', 'descrição', 130),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_orange', '2020-1-15', 'traffic', 'Tornado', 'descrição', 13),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue01', '2019-1-16', 'person_pin', 'Tornado', 'descrição', 3),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black01', '2019-5-5', 'hotel', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_gray', '2019-5-5', 'local_dining', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkblue', '2020-6-7', 'traffic', 'Tornado', 'descrição', 302),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_red02', '2020-6-6', 'person_pin', 'Tornado', 'descrição', 500),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black02', '2020-7-7', 'local_shipping', 'Windstorm', 'descrição', 800),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_purple', '2020-5-5', 'local_gas_station', 'Bombasto', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue02', '2020-1-11', 'hotel', 'Magneta', 'descrição', 8700),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_aqua', '2020-1-12', 'local_dining', 'Magneta', 'descrição', 10300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black01', '2020-1-13', 'directions', 'Magneta', 'descrição', 100300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_gray', '2020-1-14', 'local_hospital', 'Tornado', 'descrição', 130),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_orange', '2020-1-15', 'traffic', 'Tornado', 'descrição', 13),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue01', '2019-1-16', 'person_pin', 'Tornado', 'descrição', 3),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black01', '2019-5-5', 'hotel', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_gray', '2019-5-5', 'local_dining', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_orange', '2019-5-5', 'directions', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue01', '2019-5-5', 'local_hospital', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgreen', '2019-1-3', 'traffic', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgray', '2019-1-4', 'person_pin', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgreen', '2019-1-17', 'local_shipping', 'Windstorm', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgray', '2019-1-18', 'local_gas_station', 'Bombasto', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_green', '2019-1-19', 'hotel', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_red01', '2019-3-3', 'local_dining', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkblue', '2019-4-4', 'directions', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_red02', '2019-4-4', 'local_hospital', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black02', '2019-4-4', 'traffic', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_purple', '2019-3-3', 'person_pin', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue02', '2019-3-3', 'local_shipping', 'Windstorm', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_aqua', '2019-3-3', 'local_gas_station', 'Bombasto', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_black01', '2019-5-5', 'hotel', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_gray', '2019-5-5', 'local_dining', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_orange', '2019-5-5', 'directions', 'Magneta', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_blue01', '2019-5-5', 'local_hospital', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgreen', '2019-1-3', 'traffic', 'Tornado', 'descrição', 300),
            new _expenseData__WEBPACK_IMPORTED_MODULE_3__["Data"]('b_darkgray', '2019-1-4', 'person_pin', 'Tornado', 'descrição', 300)
        ];
        this.colors = ['b_orange', 'b_blue01', 'b_darkgreen', 'b_darkgray', 'b_green', 'b_red01', 'b_darkblue', 'b_red02', 'b_black02', 'b_purple', 'b_blue02', 'b_aqua', 'b_black01', 'b_gray'];
        this.config = {
            viewMode: 'home',
            date: {
                months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
                week: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
                selected: {
                    day: 28,
                    month: 10,
                    year: 2019,
                    week_day: 2
                },
                day: 28,
                month: 10,
                year: 2019,
                week_day: 2
            }
        };
        this.appDataService.appData.appSettings.expense = {
            style: { transform: 'translate3d(0px, calc(50vh - 310px), 0px)', width: '905px', height: '620px', }
        };
    }
    ExpenseComponent.prototype.ngOnInit = function () {
    };
    ExpenseComponent.prototype.month = function (args) {
        if (args == 'today') {
            this.config.date.selected.year = this.config.date.year;
            this.config.date.selected.month = this.config.date.month;
            this.config.date.selected.day = this.config.date.day;
        }
        if (args == 'plus') {
            this.config.date.selected.month += 1;
            if (this.config.date.selected.month > 11) {
                this.config.date.selected.year += 1;
                this.config.date.selected.month = 0;
            }
        }
        else if (args == 'minus') {
            this.config.date.selected.month -= 1;
            if (this.config.date.selected.month < 0) {
                this.config.date.selected.year -= 1;
                this.config.date.selected.month = 11;
            }
        }
    };
    ExpenseComponent.prototype.closeApp = function (key) {
        this.appDataService.closeApp(key);
    };
    ExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/appData/current/expense/expense.component.html"),
            styles: [__webpack_require__(/*! ./expense.component.scss */ "./src/app/appData/current/expense/expense.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/expense/expenseData.ts":
/*!********************************************************!*\
  !*** ./src/app/appData/current/expense/expenseData.ts ***!
  \********************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data(color, timestamp, ico, title, desc, val) {
        this.color = color;
        this.timestamp = timestamp;
        this.ico = ico;
        this.title = title;
        this.desc = desc;
        this.val = val;
    }
    return Data;
}());



/***/ }),

/***/ "./src/app/appData/current/fotos/fotos.component.html":
/*!************************************************************!*\
  !*** ./src/app/appData/current/fotos/fotos.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\">Minhas fotos</div>\n\n<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"newData={viewMode:'config'};\">\n      <i class=\"material-icons\">build</i>\n      <div class=\"altInner\">Ajustes</div>\n    </button>\n    <button (click)=\"closeApp('fotos');\" class=\"alt\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/fotos/fotos.component.scss":
/*!************************************************************!*\
  !*** ./src/app/appData/current/fotos/fotos.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .appTitle {\n  color: #6855eb;\n  text-shadow: none; }\n\n:host content {\n  background: rgba(244, 248, 249, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9mb3Rvcy9mb3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUhyQjtFQU9JLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L2ZvdG9zL2ZvdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuYXBwVGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMTA0LCA4NSwgMjM1KTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDgsIDI0OSwgMC45KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/appData/current/fotos/fotos.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/appData/current/fotos/fotos.component.ts ***!
  \**********************************************************/
/*! exports provided: FotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosComponent", function() { return FotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");



var FotosComponent = /** @class */ (function () {
    function FotosComponent(appDataService) {
        this.appDataService = appDataService;
        this.appDataService.appData.appSettings.fotos = {
            style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
        };
    }
    FotosComponent.prototype.ngOnInit = function () {
    };
    FotosComponent.prototype.closeApp = function (key) {
        this.appDataService.closeApp(key);
    };
    FotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fotos',
            template: __webpack_require__(/*! ./fotos.component.html */ "./src/app/appData/current/fotos/fotos.component.html"),
            styles: [__webpack_require__(/*! ./fotos.component.scss */ "./src/app/appData/current/fotos/fotos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], FotosComponent);
    return FotosComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/media-player/media-player.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/appData/current/media-player/media-player.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toolbar>\n  <buttons>\n    <button (click)=\"input.click();\" class=\"alt\">\n      <i class=\"material-icons\">note_add</i>\n      <div class=\"altInner\">Add music</div>\n    </button>\n\n    <button (click)=\"closeApp('mediaPlayer');\" class=\"alt\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n\n    <video type=\"video\" #video id=\"video\" class=\"hide\" preload=\"none\" autoplay=\"true\" [src]=\"videoSource\"\n      [loop]=\"video.loop\"></video>\n\n    <input #input class=\"hide\" id=\"telasPlayer_upload\" type=\"file\" (change)=\"onFileChange($event)\" multiple\n      accept=\".x-m4a,.m4a,.wav,.mpeg,.x-ms-wma,.mp3,.vnd.dlna.adts,.ogg\" />\n\n    <div class=\"menu\">\n      <div class=\"now-playing\"></div>\n    </div>\n\n    <div class=\"navegador\">\n\n      <div class=\"browser\">\n      </div>\n\n      <div class=\"controls\">\n        <div class=\"buttons\">\n          <div class=\"button-container\">\n            <button class=\"backward\" (click)=\"player('backward')\">\n              <i class=\"material-icons\">arrow_back</i>\n            </button>\n            <button class=\"play-pause\" (click)=\"player('toggle')\">\n              <i class=\"material-icons\">{{ video.paused ? 'play_arrow' : 'pause' }}</i>\n            </button>\n            <button class=\"forward\" (click)=\"player('forward')\">\n              <i class=\"material-icons\">arrow_forward</i>\n            </button>\n          </div>\n\n          <div class=\"progress-bar\">\n            <div class=\"current-time\">{{ timeConvert(video.currentTime) }}</div>\n            <div class=\"slidecontainer\">\n              <input type=\"range\" #progressSlider class=\"progress-slider\" min=\"0\" [max]=\"video.duration\"\n                [value]=\"video.currentTime\" (change)=\"(video.currentTime = progressSlider.value);\"\n                [disabled]=\"(video.duration ? false : true)\">\n            </div>\n            <div class=\"duration\">{{ timeConvert(video.duration) }}</div>\n          </div>\n        </div>\n\n        <div class=\"shuffle-repeat\">\n          <button (click)=\"video.loop ? false : true\">\n            <i class=\"material-icons\" [disabled]=\"video.loop\">repeat</i>\n          </button>\n          <button (click)=\"shuffle ? false : true\">\n            <i class=\"material-icons\" [disabled]=\"shuffle\">shuffle</i>\n          </button>\n        </div>\n\n        <div class=\"volume\">\n          <div class=\"slidecontainer\">\n            <input type=\"range\" #volumeSlider class=\"volume-slider\" min=\"0\" max=\"1\" [value]=\"video.volume\"\n              (change)=\"(video.volume = volumeSlider.value);\" step=\"0.1\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"lateral\">\n      <div class=filesSelected>\n        <ul>\n          <h2>playlist</h2>\n          <li *ngFor=\"let audio of data \">\n            <div>{{ audio.title }}</div>\n            <div>\n              <button (click)=\"startPlay(audio.filename)\">\n                <i class=\"material-icons\">play_arrow</i>\n              </button>\n              <button (click)=\"delFile(audio.key)\">\n                <i class=\"material-icons\">delete</i>\n              </button>\n            </div>\n            <br>\n            <br>\n          </li>\n        </ul>\n\n        <ul *ngIf=\"filesSelected\">\n          <h2>Queue</h2>\n          <li *ngFor=\"let audio of uploadProgress$ | keyvalue\">\n            <div>id: {{ audio.value.id }}</div>\n            <div>{{ audio.value.filename }}</div>\n            <div>{{ audio.value.progress }}%</div>\n            <br>\n            <br>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/media-player/media-player.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/appData/current/media-player/media-player.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host content include .hide {\n  display: none;\n  position: absolute;\n  visibility: hidden;\n  height: 0;\n  width: 0; }\n\n:host content include .menu {\n  position: relative;\n  padding-top: 36px;\n  height: calc(100% - 36px);\n  width: 200px;\n  background: rgba(255, 255, 255, 0.9);\n  float: left; }\n\n:host content include .menu .now-playing {\n    background: #c3c3ff;\n    position: absolute;\n    bottom: 0;\n    height: 180px;\n    width: 180px;\n    border-radius: 5px;\n    margin: 10px; }\n\n:host content include .navegador {\n  padding-top: 36px;\n  height: calc(100% - 36px);\n  width: calc(100% - 400px);\n  float: left;\n  background: white;\n  position: relative; }\n\n:host content include .navegador .controls {\n    display: -webkit-box;\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 90px;\n    background: white;\n    border-top: 1px solid #f9f9f9; }\n\n:host content include .navegador .controls .buttons {\n      height: 90px;\n      width: 90%;\n      position: relative;\n      margin: 0 auto; }\n\n:host content include .navegador .controls .buttons .button-container {\n        display: -webkit-box;\n        display: flex;\n        margin: 0 auto;\n        width: 180px;\n        line-height: 50px;\n        padding-top: 8px; }\n\n:host content include .navegador .controls .buttons .button-container i {\n          color: #2a2433; }\n\n:host content include .navegador .controls .buttons .button-container .play-pause {\n          border: 2px solid #2a2433;\n          border-radius: 50%;\n          padding-top: 4px;\n          margin: 10px;\n          width: 40px;\n          height: 40px;\n          text-align: center;\n          margin: 8px 10px 12px 10px; }\n\n:host content include .navegador .controls .buttons .button-container .play-pause i {\n            font-size: 28px; }\n\n:host content include .navegador .controls .buttons .button-container .backward,\n        :host content include .navegador .controls .buttons .button-container .forward {\n          margin: 10px;\n          width: 40px;\n          height: 40px;\n          text-align: center; }\n\n:host content include .navegador .controls .buttons .button-container .backward i,\n          :host content include .navegador .controls .buttons .button-container .forward i {\n            font-size: 20px; }\n\n:host content include .navegador .controls .buttons .progress-bar {\n        display: -webkit-box;\n        display: flex;\n        line-height: 15px;\n        text-align: center; }\n\n:host content include .navegador .controls .buttons .progress-bar .current-time,\n        :host content include .navegador .controls .buttons .progress-bar .duration {\n          -webkit-box-flex: 1;\n                  flex: 1;\n          font-size: 12px; }\n\n:host content include .navegador .controls .buttons .progress-bar .slidecontainer {\n          width: 100%; }\n\n:host content include .navegador .controls .buttons .progress-bar .progress-slider[disabled] {\n          opacity: 0.6; }\n\n:host content include .navegador .controls .buttons .progress-bar .progress-slider {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n               appearance: none;\n          width: 90%;\n          height: 5px;\n          border-radius: 5px;\n          background-color: #e8e8e8;\n          outline: none;\n          margin: 5px auto;\n          display: block; }\n\n:host content include .navegador .controls .buttons .progress-bar .progress-slider::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          appearance: none;\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background-color: #292032;\n          cursor: pointer; }\n\n:host content include .navegador .controls .buttons .progress-bar .progress-slider::-moz-range-thumb {\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          background-color: #292032;\n          cursor: pointer; }\n\n:host content include .navegador .controls .shuffle-repeat {\n      position: absolute;\n      left: 80px;\n      top: 28px;\n      width: 100px;\n      text-align: center; }\n\n:host content include .navegador .controls .shuffle-repeat i {\n        font-size: 20px; }\n\n:host content include .navegador .controls .volume {\n      position: absolute;\n      right: 80px;\n      top: 28px;\n      width: 100px; }\n\n:host content include .navegador .controls .volume .slidecontainer {\n        width: 100%; }\n\n:host content include .navegador .controls .volume .volume-slider {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n             appearance: none;\n        width: 90%;\n        height: 5px;\n        border-radius: 5px;\n        background-color: #e8e8e8;\n        outline: none;\n        margin: 5px auto;\n        display: block; }\n\n:host content include .navegador .controls .volume .volume-slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background-color: #292032;\n        cursor: pointer; }\n\n:host content include .navegador .controls .volume .volume-slider::-moz-range-thumb {\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background-color: #292032;\n        cursor: pointer; }\n\n:host content include .lateral {\n  color: #fff;\n  font-size: 12px;\n  height: 100%;\n  width: 200px;\n  float: left;\n  background-color: rgba(74, 87, 177, 0.9);\n  position: relative; }\n\n:host content include .lateral .filesSelected {\n    overflow-y: scroll;\n    position: absolute;\n    left: 0;\n    top: 46px;\n    right: 0;\n    bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9tZWRpYS1wbGF5ZXIvbWVkaWEtcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVEsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVEsRUFBQTs7QUFSaEI7RUFZUSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVcsRUFBQTs7QUFqQm5CO0lBb0JVLG1CQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTs7QUExQnRCO0VBK0JRLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBa0M7RUFDbEMsa0JBQWtCLEVBQUE7O0FBcEMxQjtJQXVDVSxvQkFBYTtJQUFiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGlCQUFrQztJQUNsQyw2QkFBd0MsRUFBQTs7QUE5Q2xEO01BaURZLFlBQVk7TUFDWixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTs7QUFwRDFCO1FBdURjLG9CQUFhO1FBQWIsYUFBYTtRQUNiLGNBQWM7UUFDZCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFBOztBQTNEOUI7VUE4RGdCLGNBQXNCLEVBQUE7O0FBOUR0QztVQWtFZ0IseUJBQWlDO1VBQ2pDLGtCQUFrQjtVQUNsQixnQkFBZ0I7VUFDaEIsWUFBWTtVQUNaLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLDBCQUEwQixFQUFBOztBQXpFMUM7WUE0RWtCLGVBQWUsRUFBQTs7QUE1RWpDOztVQWtGZ0IsWUFBWTtVQUNaLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCLEVBQUE7O0FBckZsQzs7WUF3RmtCLGVBQWUsRUFBQTs7QUF4RmpDO1FBOEZjLG9CQUFhO1FBQWIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTs7QUFoR2hDOztVQW9HZ0IsbUJBQU87a0JBQVAsT0FBTztVQUNQLGVBQWUsRUFBQTs7QUFyRy9CO1VBeUdnQixXQUFXLEVBQUE7O0FBekczQjtVQTZHZ0IsWUFBWSxFQUFBOztBQTdHNUI7VUFpSGdCLHdCQUF3QjtVQUN4QixxQkFBZ0I7ZUFBaEIsZ0JBQWdCO1VBQ2hCLFVBQVU7VUFDVixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLHlCQUFvQztVQUNwQyxhQUFhO1VBQ2IsZ0JBQWdCO1VBQ2hCLGNBQWMsRUFBQTs7QUF6SDlCO1VBNkhnQix3QkFBd0I7VUFDeEIsZ0JBQWdCO1VBQ2hCLFVBQVU7VUFDVixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLHlCQUFpQztVQUNqQyxlQUFlLEVBQUE7O0FBbkkvQjtVQXVJZ0IsVUFBVTtVQUNWLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIseUJBQWlDO1VBQ2pDLGVBQWUsRUFBQTs7QUEzSS9CO01BaUpZLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsU0FBUztNQUNULFlBQVk7TUFDWixrQkFBa0IsRUFBQTs7QUFySjlCO1FBd0pjLGVBQWUsRUFBQTs7QUF4SjdCO01BNkpZLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUztNQUNULFlBQVksRUFBQTs7QUFoS3hCO1FBbUtjLFdBQVcsRUFBQTs7QUFuS3pCO1FBdUtjLHdCQUF3QjtRQUN4QixxQkFBZ0I7YUFBaEIsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFvQztRQUNwQyxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTs7QUEvSzVCO1FBbUxjLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIseUJBQWlDO1FBQ2pDLGVBQWUsRUFBQTs7QUF6TDdCO1FBNkxjLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxlQUFlLEVBQUE7O0FBak03QjtFQXdNUSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHdDQUF3QztFQUN4QyxrQkFBa0IsRUFBQTs7QUE5TTFCO0lBaU5VLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L21lZGlhLXBsYXllci9tZWRpYS1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbnRlbnQge1xuICAgIGluY2x1ZGUge1xuICAgICAgLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLm1lbnUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgLm5vdy1wbGF5aW5nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NSwgMTk1LCAyNTUsIDEpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmF2ZWdhZG9yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDM2cHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MDBweCk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCA5KTtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI0OSwgMjQ5LCAyNDkpO1xuXG4gICAgICAgICAgLmJ1dHRvbnMge1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNDIsIDM2LCA1MSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucGxheS1wYXVzZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQyLCAzNiwgNTEpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDEwcHggMTJweCAxMHB4O1xuXG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJhY2t3YXJkLFxuICAgICAgICAgICAgICAuZm9yd2FyZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgLmN1cnJlbnQtdGltZSxcbiAgICAgICAgICAgICAgLmR1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zbGlkZWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucHJvZ3Jlc3Mtc2xpZGVyW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnByb2dyZXNzLXNsaWRlciB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wcm9ncmVzcy1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDMyLCA1MCk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnByb2dyZXNzLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAzMiwgNTApO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaHVmZmxlLXJlcGVhdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC52b2x1bWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB0b3A6IDI4cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG5cbiAgICAgICAgICAgIC5zbGlkZWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudm9sdW1lLXNsaWRlciB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZvbHVtZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDMyLCA1MCk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZvbHVtZS1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDMyLCA1MCk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxhdGVyYWwge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDg3LCAxNzcsIDAuOSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuZmlsZXNTZWxlY3RlZCB7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogNDZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/media-player/media-player.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/appData/current/media-player/media-player.component.ts ***!
  \************************************************************************/
/*! exports provided: MediaPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerComponent", function() { return MediaPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");



var MediaPlayerComponent = /** @class */ (function () {
    function MediaPlayerComponent(appDataService) {
        this.appDataService = appDataService;
        this.myFileList = [];
        this.filesSelected = false;
        this.videoSource = '';
        this.uploadList = [];
        this.shuffle = false;
        this.data = [];
        this.appDataService.appData.appSettings.mediaPlayer = {
            style: { transform: 'translate3d(0px, calc(50vh - 250px), 0px)', width: '980px', height: '500px', }
        };
        this.appDataService.setData();
    }
    Object.defineProperty(MediaPlayerComponent.prototype, "VideoEl", {
        set: function (el) {
            this.video = el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerComponent.prototype, "InputFileEl", {
        set: function (el) {
            this.input = el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerComponent.prototype, "ProgressSliderEl", {
        set: function (el) {
            this.progressSlider = el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerComponent.prototype, "VolumeSliderEl", {
        set: function (el) {
            this.volumeSlider = el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    MediaPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appDataService
            .getAppData({ col: 'music', orderBy: 'title' })
            .subscribe(function (data) { _this.data = data; });
    };
    MediaPlayerComponent.prototype.onFileChange = function (data) {
    };
    MediaPlayerComponent.prototype.closeApp = function (val) {
        this.appDataService.closeApp(val);
    };
    MediaPlayerComponent.prototype.delFile = function (key) {
        this.appDataService.delAppData('music', key);
    };
    MediaPlayerComponent.prototype.startPlay = function (val) {
        this.videoSource = 'https://telasfiles.blob.core.windows.net/telas360/' + val;
    };
    MediaPlayerComponent.prototype.timeConvert = function (time) {
        return (time ? (Math.floor(time / 60).toString().substr(-2)) : '0') + ':' + (time ? (('0' + Math.floor(time % 60)).substr(-2)) : '00');
    };
    MediaPlayerComponent.prototype.player = function (event) {
        if (this.video.duration) {
            switch (event) {
                case 'toggle':
                    this.video.paused ? this.video.play() : this.video.pause();
                    break;
                case 'stop':
                    this.video.pause();
                    break;
                case 'backward':
                    this.video.currentTime -= 10;
                    break;
                case 'forward':
                    this.video.currentTime += 30;
                    break;
            }
        }
    };
    MediaPlayerComponent.prototype.formatBytes = function (a, b) {
        if (0 === a) {
            return '0 Bytes';
        }
        var c = 1024;
        var d = b || 2;
        var e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var f = Math.floor(Math.log(a) / Math.log(c));
        return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
    };
    MediaPlayerComponent.prototype.fileChange = function (event) {
        if (event.target.files && event.target.files[0]) {
            var x = void 0;
            for (x = 0; x < event.target.files.length; x++) {
                var file = event.target.files[x];
                if (this.uploadList.indexOf(file.name) < 0) {
                    [].push(file);
                    this.uploadList.push(file.name);
                }
            }
        }
    };
    MediaPlayerComponent.prototype.IDGenerator = function (len, bits) {
        bits = bits || 36;
        var outStr = '';
        var newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr.toUpperCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MediaPlayerComponent.prototype, "VideoEl", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MediaPlayerComponent.prototype, "InputFileEl", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('progressSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MediaPlayerComponent.prototype, "ProgressSliderEl", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('volumeSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MediaPlayerComponent.prototype, "VolumeSliderEl", null);
    MediaPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media-player',
            template: __webpack_require__(/*! ./media-player.component.html */ "./src/app/appData/current/media-player/media-player.component.html"),
            styles: [__webpack_require__(/*! ./media-player.component.scss */ "./src/app/appData/current/media-player/media-player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], MediaPlayerComponent);
    return MediaPlayerComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/os/os.component.html":
/*!******************************************************!*\
  !*** ./src/app/appData/current/os/os.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\">Ordem de Serviços</div>\n\n<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"newData={viewMode:'config'};\">\n      <i class=\"material-icons\">build</i>\n      <div class=\"altInner\">Ajustes</div>\n    </button>\n    <button (click)=\"closeApp('os');\" class=\"alt\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/os/os.component.scss":
/*!******************************************************!*\
  !*** ./src/app/appData/current/os/os.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .appTitle {\n  color: #6855eb;\n  text-shadow: none; }\n\n:host content {\n  background: rgba(244, 248, 249, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9vcy9vcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUhyQjtFQU9JLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L29zL29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuYXBwVGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMTA0LCA4NSwgMjM1KTtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDgsIDI0OSwgMC45KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/appData/current/os/os.component.ts":
/*!****************************************************!*\
  !*** ./src/app/appData/current/os/os.component.ts ***!
  \****************************************************/
/*! exports provided: OsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsComponent", function() { return OsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");



var OsComponent = /** @class */ (function () {
    function OsComponent(appDataService) {
        this.appDataService = appDataService;
        this.appDataService.appData.appSettings.os = {
            style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
        };
    }
    OsComponent.prototype.ngOnInit = function () {
    };
    OsComponent.prototype.closeApp = function (key) {
        this.appDataService.closeApp(key);
    };
    OsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-os',
            template: __webpack_require__(/*! ./os.component.html */ "./src/app/appData/current/os/os.component.html"),
            styles: [__webpack_require__(/*! ./os.component.scss */ "./src/app/appData/current/os/os.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], OsComponent);
    return OsComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/stockmanager/stockmanager.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/appData/current/stockmanager/stockmanager.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"newData={viewMode:'config'};\">\n      <i class=\"material-icons\">build</i>\n      <div class=\"altInner\">Ajustes</div>\n    </button>\n    <button (click)=\"closeApp('stockmanager');\" class=\"alt\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include>\n    <aside>\n\n    </aside>\n    <section>\n\n    </section>\n  </include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/stockmanager/stockmanager.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/appData/current/stockmanager/stockmanager.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .appTitle {\n  color: #6855eb;\n  text-shadow: none; }\n\n:host content {\n  background: rgba(244, 248, 249, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9zdG9ja21hbmFnZXIvc3RvY2ttYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBd0I7RUFDeEIsaUJBQWlCLEVBQUE7O0FBSHJCO0VBT0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBEYXRhL2N1cnJlbnQvc3RvY2ttYW5hZ2VyL3N0b2NrbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmFwcFRpdGxlIHtcbiAgICBjb2xvcjogcmdiKDEwNCwgODUsIDIzNSk7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICBjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQ4LCAyNDksIDAuOSk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/stockmanager/stockmanager.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/appData/current/stockmanager/stockmanager.component.ts ***!
  \************************************************************************/
/*! exports provided: StockmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockmanagerComponent", function() { return StockmanagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");



var StockmanagerComponent = /** @class */ (function () {
    function StockmanagerComponent(appDataService) {
        this.appDataService = appDataService;
        this.appDataService.appData.appSettings.stockmanager = {
            style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
        };
    }
    StockmanagerComponent.prototype.ngOnInit = function () {
    };
    StockmanagerComponent.prototype.closeApp = function (key) {
        this.appDataService.closeApp(key);
    };
    StockmanagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stockmanager',
            template: __webpack_require__(/*! ./stockmanager.component.html */ "./src/app/appData/current/stockmanager/stockmanager.component.html"),
            styles: [__webpack_require__(/*! ./stockmanager.component.scss */ "./src/app/appData/current/stockmanager/stockmanager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"]])
    ], StockmanagerComponent);
    return StockmanagerComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/system/customize/customize.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/appData/current/system/customize/customize.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<include>\n  <p>\n    customize works!\n  </p>\n  <div>\n    <form [formGroup]=\"customizeForm\">\n      <label>bgOptions: </label>\n      <select formControlName=\"bgControl\">\n        <option [ngValue]=\"bg\" *ngFor=\"let bg of bgOptions\">{{bg.name}}</option>\n      </select>\n    </form>\n  </div>\n</include>"

/***/ }),

/***/ "./src/app/appData/current/system/customize/customize.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/appData/current/system/customize/customize.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host include {\n  background: rgba(60, 62, 64, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9zeXN0ZW0vY3VzdG9taXplL2N1c3RvbWl6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L3N5c3RlbS9jdXN0b21pemUvY3VzdG9taXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpbmNsdWRlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2MiwgNjQsIDAuOSk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/system/customize/customize.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/appData/current/system/customize/customize.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeComponent", function() { return CustomizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");




var CustomizeComponent = /** @class */ (function () {
    function CustomizeComponent(fb, appDataService) {
        this.fb = fb;
        this.appDataService = appDataService;
        this.bgOptions = this.appDataService.appData.system.preferences.style.bgOptions;
    }
    CustomizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customizeForm = this.fb.group({
            bgControl: [this.bgOptions[this.appDataService.appData.system.preferences.style.background]]
        });
        this.customizeForm.valueChanges.subscribe(function (value) {
            _this.appDataService.setCustomData(value.bgControl.index);
        });
    };
    CustomizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customize',
            template: __webpack_require__(/*! ./customize.component.html */ "./src/app/appData/current/system/customize/customize.component.html"),
            styles: [__webpack_require__(/*! ./customize.component.scss */ "./src/app/appData/current/system/customize/customize.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_3__["AppDataService"]])
    ], CustomizeComponent);
    return CustomizeComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/system/notify/notify.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/appData/current/system/notify/notify.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<include>\n  <p>\n    notify works!\n  </p>\n</include>"

/***/ }),

/***/ "./src/app/appData/current/system/notify/notify.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/appData/current/system/notify/notify.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host include {\n  background: rgba(60, 62, 64, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9zeXN0ZW0vbm90aWZ5L25vdGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L3N5c3RlbS9ub3RpZnkvbm90aWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpbmNsdWRlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2MiwgNjQsIDAuOSk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/appData/current/system/notify/notify.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/appData/current/system/notify/notify.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyComponent", function() { return NotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifyComponent = /** @class */ (function () {
    function NotifyComponent() {
    }
    NotifyComponent.prototype.ngOnInit = function () {
    };
    NotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__(/*! ./notify.component.html */ "./src/app/appData/current/system/notify/notify.component.html"),
            styles: [__webpack_require__(/*! ./notify.component.scss */ "./src/app/appData/current/system/notify/notify.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyComponent);
    return NotifyComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/system/profile/profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/appData/current/system/profile/profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<include>\n\n  <div class=\"top\">\n    <picture\n      [ngStyle]=\"{ 'background': '#fff url(' + userData.photoURL + ' ) no-repeat center center /cover' }\">\n      <div class=\"material-icons insert_photo\">camera_alt</div>\n    </picture>\n    <div class=\"topDetail\">\n      <ul class=\"userName\">\n        <li>{{ (userData.displayName) ? userData.displayName : 'Usuário' }}</li>\n      </ul>\n      <ul class=\"userEmail\">\n        <li>{{ userData.email }}</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=bottom>\n\n    <div class=\"bottomDetail\">\n      <ul class=\"userID\">\n        <li>UID: {{ userData.uid }}</li>\n      </ul>\n      <ul class=\"userVerified\" [ngClass]=\"[(userData.emailVerified) ? 'green' : 'red']\">\n        <li>{{ (userData.emailVerified) ? 'E-mail verified' : 'E-mail not verified' }}</li>\n      </ul>\n    </div>\n\n    <div class=\"rTable\">\n      <div class=\"rTableRow\">\n        <div class=\"rTableCell title\">\n          <div>Nome completo</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div>\n            <input type=\"text\" [(ngModel)]=\"userData.displayName\" placeholder=\"Usuário\" />\n          </div>\n        </div>\n        <div class=\"rTableCell\">\n          <div class=\"link\">Alterar</div>\n        </div>\n      </div>\n\n      <div class=\"rTableRow\">\n        <div class=\"rTableCell title\">\n          <div>CPF/CNPJ</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div>\n            <input type=\"text\" [(ngModel)]=\"userData.document\" placeholder=\"01234567890\" />\n          </div>\n        </div>\n        <div class=\"rTableCell\">\n          <div class=\"link\">Alterar</div>\n        </div>\n      </div>\n\n      <div class=\"rTableRow\">\n        <div class=\"rTableCell title\">\n          <div>Contato</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div>\n            <input type=\"text\" [(ngModel)]=\"userData.phoneNumber\" placeholder=\"01234567890\" />\n          </div>\n        </div>\n        <div class=\"rTableCell\">\n          <div class=\"link\">Alterar</div>\n        </div>\n      </div>\n\n      <div class=\"rTableRow divisor\">\n        <div class=\"rTableCell title\">\n          <div>Nascimento</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div>\n            <input type=\"date\" [(ngModel)]=\"userData.birthday\" />\n          </div>\n        </div>\n        <div class=\"rTableCell\">\n          <div class=\"link\">Alterar</div>\n        </div>\n      </div>\n\n      <div class=\"rTableRow\">\n        <div class=\"rTableCell title\">\n          <div>E-mail</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div>\n            {{ userData.email }}\n          </div>\n        </div>\n        <div class=\"rTableCell\"> </div>\n      </div>\n\n      <div class=\"rTableRow\">\n        <div class=\"rTableCell title\">\n          <div>Senha</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div>***********</div>\n        </div>\n        <div class=\"rTableCell\">\n          <div class=\"link\">Alterar</div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <button mat-mini-fab=\"delete_forever\" (click)=\"deleteAccount()\" color=\"warn\">\n    <mat-icon>delete_forever</mat-icon>\n  </button>\n\n  <button mat-mini-fab=\"done\" (click)=\"save()\" color=\"primary\">\n    <mat-icon>done</mat-icon>\n  </button>\n\n</include>"

/***/ }),

/***/ "./src/app/appData/current/system/profile/profile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/appData/current/system/profile/profile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ul {\n  margin: 0;\n  padding: 0; }\n  :host ul li {\n    list-style: none; }\n  :host .top {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 90px;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(6, 237, 189, 0.85)), to(rgba(2, 228, 140, 0.85)));\n  background: linear-gradient(to left, rgba(6, 237, 189, 0.85), rgba(2, 228, 140, 0.85));\n  padding: 0 14px; }\n  :host .top .topDetail {\n    display: block;\n    width: 100%;\n    margin-top: 54px;\n    line-height: 36px;\n    color: #2f4f4f; }\n  :host .top .topDetail .userName {\n      float: left; }\n  :host .top .topDetail .userEmail {\n      float: right; }\n  :host .top picture:hover .insert_photo {\n    visibility: visible; }\n  :host .top picture {\n    border-radius: 50%;\n    position: absolute;\n    top: 40px;\n    left: 0;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    margin: 0 auto;\n    overflow: hidden;\n    cursor: pointer;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n  :host .top picture .insert_photo {\n      visibility: hidden;\n      background: rgba(0, 0, 0, 0.7);\n      font-size: 30px;\n      width: 100%;\n      height: 50%;\n      text-align: center;\n      color: #fff;\n      position: absolute;\n      bottom: 0;\n      line-height: 50px; }\n  :host .bottom {\n  position: absolute;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.85);\n  padding: 0 14px;\n  top: 90px;\n  left: 0;\n  right: 0; }\n  :host .bottom .bottomDetail {\n    width: 100%;\n    font-size: 11px;\n    line-height: 36px;\n    color: #2f4f4f;\n    margin-bottom: 25px;\n    display: inline-block; }\n  :host .bottom .bottomDetail .userID {\n      float: left; }\n  :host .bottom .bottomDetail .userVerified {\n      float: right; }\n  :host .bottom .bottomDetail .userVerified.green {\n      color: green; }\n  :host .bottom .bottomDetail .userVerified.red {\n      color: red; }\n  :host .bottom .rTable {\n    display: table;\n    width: 70%;\n    margin: auto;\n    padding: 20px;\n    border: cornsilk;\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n    background: #fff; }\n  :host .bottom .rTable .rTableRow {\n      display: table-row;\n      line-height: 20px; }\n  :host .bottom .rTable .rTableRow .rTableCell,\n      :host .bottom .rTable .rTableRow .rTableHead {\n        display: table-cell;\n        padding: 12px 0; }\n  :host .bottom .rTable .rTableRow .rTableCell .link,\n        :host .bottom .rTable .rTableRow .rTableHead .link {\n          cursor: pointer;\n          text-decoration: underline;\n          font-size: 12px;\n          color: #0099ff;\n          text-align: right; }\n  :host .bottom .rTable .rTableRow .title {\n        font-size: 12px;\n        color: #555; }\n  :host .bottom .rTable .rTableRow.divisor .rTableCell,\n    :host .bottom .rTable .rTableRow.divisor .rTableHead {\n      padding-bottom: 18px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2); }\n  :host button[mat-mini-fab=\"delete_forever\"] {\n  position: absolute;\n  left: 20px;\n  bottom: 20px; }\n  :host button[mat-mini-fab=\"done\"] {\n  position: absolute;\n  right: 20px;\n  bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9zeXN0ZW0vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksU0FBUztFQUNULFVBQVUsRUFBQTtFQUhkO0lBTU0sZ0JBQWdCLEVBQUE7RUFOdEI7RUFXSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLHFIQUFzRjtFQUF0RixzRkFBc0Y7RUFDdEYsZUFBZSxFQUFBO0VBakJuQjtJQW9CTSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYyxFQUFBO0VBeEJwQjtNQTJCUSxXQUFXLEVBQUE7RUEzQm5CO01BK0JRLFlBQVksRUFBQTtFQS9CcEI7SUFvQ00sbUJBQW1CLEVBQUE7RUFwQ3pCO0lBdUNNLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpSEFBaUgsRUFBQTtFQWpEdkg7TUFvRFEsa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsV0FBVztNQUNYLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsaUJBQWlCLEVBQUE7RUE3RHpCO0VBbUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVEsRUFBQTtFQXpFWjtJQTRFTSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQixFQUFBO0VBakYzQjtNQW9GUSxXQUFXLEVBQUE7RUFwRm5CO01Bd0ZRLFlBQVksRUFBQTtFQXhGcEI7TUEyRlEsWUFBWSxFQUFBO0VBM0ZwQjtNQThGUSxVQUFVLEVBQUE7RUE5RmxCO0lBbUdNLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGdCQUFnQixFQUFBO0VBekd0QjtNQTRHUSxrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7RUE3R3pCOztRQWlIVSxtQkFBbUI7UUFDbkIsZUFBZSxFQUFBO0VBbEh6Qjs7VUFxSFksZUFBZTtVQUNmLDBCQUEwQjtVQUMxQixlQUFlO1VBQ2YsY0FBdUI7VUFDdkIsaUJBQWlCLEVBQUE7RUF6SDdCO1FBOEhVLGVBQWU7UUFDZixXQUFXLEVBQUE7RUEvSHJCOztNQW9JUSxvQkFBb0I7TUFDcEIsMkNBQTJDLEVBQUE7RUFySW5EO0VBMklJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWSxFQUFBO0VBN0loQjtFQWlKSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcERhdGEvY3VycmVudC9zeXN0ZW0vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50b3Age1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDYsIDIzNywgMTg5LCAwLjg1KSwgcmdiYSgyLCAyMjgsIDE0MCwgMC44NSkpO1xuICAgIHBhZGRpbmc6IDAgMTRweDtcblxuICAgIC50b3BEZXRhaWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgIGNvbG9yOiAjMmY0ZjRmO1xuXG4gICAgICAudXNlck5hbWUge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLnVzZXJFbWFpbCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwaWN0dXJlOmhvdmVyIC5pbnNlcnRfcGhvdG8ge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gICAgcGljdHVyZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDQwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICAgIC5pbnNlcnRfcGhvdG8ge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICAgIHRvcDogOTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgLmJvdHRvbURldGFpbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgY29sb3I6ICMyZjRmNGY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAudXNlcklEIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC51c2VyVmVyaWZpZWQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgICAudXNlclZlcmlmaWVkLmdyZWVuIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgfVxuICAgICAgLnVzZXJWZXJpZmllZC5yZWQge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yVGFibGUge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogY29ybnNpbGs7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgLnJUYWJsZVJvdyB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgLnJUYWJsZUNlbGwsXG4gICAgICAgIC5yVGFibGVIZWFkIHtcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcblxuICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAxNTMsIDI1NSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnJUYWJsZVJvdy5kaXZpc29yIC5yVGFibGVDZWxsLFxuICAgICAgLnJUYWJsZVJvdy5kaXZpc29yIC5yVGFibGVIZWFkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uW21hdC1taW5pLWZhYj1cImRlbGV0ZV9mb3JldmVyXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cblxuICBidXR0b25bbWF0LW1pbmktZmFiPVwiZG9uZVwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/appData/current/system/profile/profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/appData/current/system/profile/profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.save = function () {
        var userData = {
            phoneNumber: this.userData.phoneNumber,
            uid: this.userData.uid,
            email: this.userData.email,
            displayName: this.userData.displayName,
            photoURL: (this.userData.photoURL) ? this.userData.photoURL : '/assets/img/dummy-user.png',
            emailVerified: this.userData.emailVerified,
            document: (this.userData.document) ? this.userData.document : null,
            birthday: (this.userData.birthday) ? this.userData.birthday : null
        };
        this.authService.SetUserData(userData);
    };
    ProfileComponent.prototype.deleteAccount = function () {
        console.log(this.userData);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/appData/current/system/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/appData/current/system/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/system/start/start.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/appData/current/system/start/start.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<include>\n\n\n\n  <div class=\"container\">\n    <div class=\"lateral\">\n\n      <input class=\"inputSearch\" [(ngModel)]=\"searchText\" placeholder=\"Procurar por:\"\n        (ngModelChange)=\"goSearch($event)\">\n\n      <div *ngIf=\"desc\" class=\"info\">\n        <h2 class=\"title\">{{desc.value.title}}</h2>\n        <p class=\"desc\">{{desc.value.desc}}</p>\n        <div class=\"plus\">\n          <button mat-stroked-button [color]=\"find(authService.apps, desc.value.id) ? 'warn' : 'primary'\"\n            (click)=\"install(find(authService.apps, desc.value.id) ? 'uninstall' : 'install', desc.value)\">\n            {{find(authService.apps, desc.value.id) ? 'remover' : 'instalar'}}\n          </button>\n          <p>\n            <b>author:</b> {{desc.value.author}}\n            <br>\n            <b>release:</b> {{ dateConverter(desc.value.date) | date : 'dd/MM/yyyy'}}\n            <br>\n            <i class=\"appid\">APPID: {{ desc.value.id }}</i>\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"apps\">\n      <div class=\"appTile\" *ngFor=\"let app of appStore | keyvalue\" (click)=\"desc = app;\"\n        [ngClass]=\"(app.value.desc | color)\">\n        <div class=\"left\">\n          <i class=\"material-icons\">{{app.value.ico}}</i>\n        </div>\n        <div class=\"right\">\n          <b class=\"title\">{{app.value.title}}</b>\n          <p class=\"desc\">{{app.value.desc}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</include>"

/***/ }),

/***/ "./src/app/appData/current/system/start/start.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/appData/current/system/start/start.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host include {\n  background: rgba(60, 62, 64, 0.9);\n  padding: 36px 12px 0; }\n  :host include .container {\n    display: grid;\n    grid-template-columns: 25% 75%;\n    width: 100%;\n    height: 100%; }\n  :host include .container .lateral {\n      overflow: hidden;\n      word-break: break-word;\n      text-align: center; }\n  :host include .container .lateral .inputSearch {\n        line-height: 20px;\n        width: 80%;\n        padding: 4px 8px;\n        border: 0;\n        background: rgba(204, 204, 204, 0.8);\n        border-radius: 3px;\n        outline: none;\n        color: #222;\n        margin: 14px 0; }\n  :host include .container .lateral .desc {\n        color: #b4b4b4; }\n  :host include .container .lateral .info .title {\n        color: #fff; }\n  :host include .container .lateral .info .plus {\n        color: #777; }\n  :host include .container .lateral .info .plus .appid {\n          font-size: 11px; }\n  :host include .container .apps {\n      display: inline-block;\n      overflow: hidden;\n      overflow-y: scroll; }\n  :host include .container .apps .appTile:hover {\n        border: 1px solid #222; }\n  :host include .container .apps .appTile {\n        cursor: pointer;\n        float: left;\n        width: calc((100% - 52px) / 2);\n        -webkit-box-flex: 1;\n        border-radius: 4px;\n        border: 1px solid transparent;\n        margin: 12px;\n        height: 140px;\n        display: grid;\n        grid-template-columns: 35% 65%; }\n  :host include .container .apps .appTile .left {\n          overflow: hidden; }\n  :host include .container .apps .appTile .left i {\n            font-size: 80px;\n            margin: 30px 10px; }\n  :host include .container .apps .appTile .right {\n          padding: 18px 12px; }\n  :host include .container .apps .appTile .right .title {\n            font-size: 22px; }\n  :host include .container .apps .appTile .right .desc {\n            font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvYXBwL2FwcERhdGEvY3VycmVudC9zeXN0ZW0vc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQ0FBaUM7RUFDakMsb0JBQW9CLEVBQUE7RUFIeEI7SUFNTSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFUbEI7TUFZUSxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLGtCQUFrQixFQUFBO0VBZDFCO1FBaUJVLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxvQ0FBb0M7UUFDcEMsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixXQUFXO1FBQ1gsY0FBYyxFQUFBO0VBekJ4QjtRQTZCVSxjQUFjLEVBQUE7RUE3QnhCO1FBa0NZLFdBQVcsRUFBQTtFQWxDdkI7UUFzQ1ksV0FBVyxFQUFBO0VBdEN2QjtVQXlDYyxlQUFlLEVBQUE7RUF6QzdCO01BZ0RRLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7RUFsRDFCO1FBcURVLHNCQUFzQixFQUFBO0VBckRoQztRQXlEVSxlQUFlO1FBQ2YsV0FBVztRQUNYLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QixZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWE7UUFDYiw4QkFBOEIsRUFBQTtFQWxFeEM7VUFxRVksZ0JBQWdCLEVBQUE7RUFyRTVCO1lBd0VjLGVBQWU7WUFDZixpQkFBaUIsRUFBQTtFQXpFL0I7VUE4RVksa0JBQWtCLEVBQUE7RUE5RTlCO1lBaUZjLGVBQWUsRUFBQTtFQWpGN0I7WUFxRmMsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwRGF0YS9jdXJyZW50L3N5c3RlbS9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW5jbHVkZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjIsIDY0LCAwLjkpO1xuICAgIHBhZGRpbmc6IDM2cHggMTJweCAwO1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5sYXRlcmFsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5pbnB1dFNlYXJjaCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuOCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgbWFyZ2luOiAxNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzYyB7XG4gICAgICAgICAgY29sb3I6ICNiNGI0YjQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wbHVzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuXG4gICAgICAgICAgICAuYXBwaWQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hcHBzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgICAgICAgLmFwcFRpbGU6aG92ZXIge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjI7XG4gICAgICAgIH1cblxuICAgICAgICAuYXBwVGlsZSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTJweCkgLyAyKTtcbiAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDY1JTtcblxuICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDEycHg7XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/appData/current/system/start/start.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/appData/current/system/start/start.component.ts ***!
  \*****************************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var StartComponent = /** @class */ (function () {
    function StartComponent(toast, appData, authService) {
        this.toast = toast;
        this.appData = appData;
        this.authService = authService;
        this.appStore = {};
        this.desc = null;
    }
    StartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appData.getAppData({ startCol: 'appStore', doc: 'currentApps', col: 'list', orderBy: 'name', }).subscribe(function (data) {
            _this.appStore = data;
        });
    };
    StartComponent.prototype.dateConverter = function (date) {
        return date.seconds ? date.toDate() : Date.parse(date);
    };
    StartComponent.prototype.install = function (todo, app) {
        var _this = this;
        switch (todo) {
            case 'install':
                this.appData.setSubCollection({ app: 'appList', key: app.id, data: app }).then(function (a) {
                    _this.toast.success(app.title, 'Aplicativo instalado com sucesso');
                });
                break;
            case 'uninstall':
                this.appData.delAppData('appList', app.id).then(function (a) {
                    _this.toast.success(app.title, 'Aplicativo removido');
                });
                this.appData.closeApp(app.name);
                break;
        }
    };
    StartComponent.prototype.find = function (data, key) {
        return JSON.stringify(data).includes(key);
    };
    StartComponent.prototype.goSearch = function (data) {
        console.log(data);
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/appData/current/system/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/appData/current/system/start/start.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/appData/current/system/system.component.html":
/*!**************************************************************!*\
  !*** ./src/app/appData/current/system/system.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\">Configurações</div>\n\n<toolbar>\n  <buttons>\n    <button class=\"alt\" (click)=\"loadComponent(0)\">\n      <i class=\"material-icons\">apps</i>\n      <div class=\"altInner\">Apps</div>\n    </button>\n    <!--\n    <button class=\"alt\" (click)=\"loadComponent(1)\">\n      <i class=\"material-icons\">notifications</i>\n      <div class=\"altInner\">Notificações</div>\n    </button>\n    -->\n    <button class=\"alt\" (click)=\"loadComponent(2)\">\n      <i class=\"material-icons\">person</i>\n      <div class=\"altInner\">Perfil</div>\n    </button>\n    <!--\n    <button class=\"alt\" (click)=\"loadComponent(3)\">\n      <i class=\"material-icons\">color_lens</i>\n      <div class=\"altInner\">Personalizar</div>\n    </button>\n    -->\n    <button class=\"alt\" (click)=\"closeApp('system');\">\n      <i class=\"material-icons\">cancel</i>\n      <div class=\"altInner\">Fechar</div>\n    </button>\n  </buttons>\n</toolbar>\n\n<content>\n  <include ad-host></include>\n</content>"

/***/ }),

/***/ "./src/app/appData/current/system/system.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/appData/current/system/system.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcERhdGEvY3VycmVudC9zeXN0ZW0vc3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/appData/current/system/system.component.ts":
/*!************************************************************!*\
  !*** ./src/app/appData/current/system/system.component.ts ***!
  \************************************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var _ad_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ad.directive */ "./src/app/ad.directive.ts");
/* harmony import */ var _ad_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ad-item */ "./src/app/ad-item.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/appData/current/system/start/start.component.ts");
/* harmony import */ var _notify_notify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notify/notify.component */ "./src/app/appData/current/system/notify/notify.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/appData/current/system/profile/profile.component.ts");
/* harmony import */ var _customize_customize_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customize/customize.component */ "./src/app/appData/current/system/customize/customize.component.ts");









var SystemComponent = /** @class */ (function () {
    function SystemComponent(appDataService, componentFactoryResolver) {
        this.appDataService = appDataService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appDataService.appData.appSettings.system = {
            style: { transform: 'translate3d(0px, calc(50vh - 275px), 0px)', width: '820px', height: '550px', }
        };
        this.appDataService.setData();
        this.ads = [
            new _ad_item__WEBPACK_IMPORTED_MODULE_4__["AdItem"](_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"]),
            new _ad_item__WEBPACK_IMPORTED_MODULE_4__["AdItem"](_notify_notify_component__WEBPACK_IMPORTED_MODULE_6__["NotifyComponent"]),
            new _ad_item__WEBPACK_IMPORTED_MODULE_4__["AdItem"](_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]),
            new _ad_item__WEBPACK_IMPORTED_MODULE_4__["AdItem"](_customize_customize_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeComponent"]),
        ];
        this.componentFactoryResolver = componentFactoryResolver;
    }
    SystemComponent.prototype.ngOnInit = function () {
        this.loadComponent(0);
    };
    SystemComponent.prototype.closeApp = function (key) {
        this.appDataService.closeApp(key);
    };
    SystemComponent.prototype.loadComponent = function (index) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads[index].component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
        this.appDataService.setData();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SystemComponent.prototype, "ads", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ad_directive__WEBPACK_IMPORTED_MODULE_3__["AdDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ad_directive__WEBPACK_IMPORTED_MODULE_3__["AdDirective"])
    ], SystemComponent.prototype, "adHost", void 0);
    SystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system',
            template: __webpack_require__(/*! ./system.component.html */ "./src/app/appData/current/system/system.component.html"),
            styles: [__webpack_require__(/*! ./system.component.scss */ "./src/app/appData/current/system/system.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], SystemComponent);
    return SystemComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<workspace class=\"workspace\">\n\n  <!-- DEFAULT DCB CLOCK APP -->\n  <app-dcb></app-dcb>\n\n  <app-fotos *ngIf=\"checkApp('fotos')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','fotos']\" (click)=\"appDataService.openApp('fotos');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/fotos'],false:'closed'}[checkApp('fotos')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('fotos')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.fotos.style\">\n  </app-fotos>\n\n  <app-expense *ngIf=\"checkApp('expense')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','expense']\" (click)=\"appDataService.openApp('expense');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/expense'],false:'closed'}[checkApp('expense')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('expense')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.expense.style\">\n  </app-expense>\n\n  <app-stockmanager *ngIf=\"checkApp('stockmanager')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','stockmanager']\" (click)=\"appDataService.openApp('stockmanager');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/stockmanager'],false:'closed'}[checkApp('stockmanager')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('stockmanager')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.stockmanager.style\">\n  </app-stockmanager>\n\n  <app-os *ngIf=\"checkApp('os')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','os']\" (click)=\"appDataService.openApp('os');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/os'],false:'closed'}[checkApp('os')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('os')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.os.style\">\n  </app-os>\n\n  <app-ativuz *ngIf=\"checkApp('ativuz')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','ativuz']\" (click)=\"appDataService.openApp('ativuz');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/ativuz'],false:'closed'}[checkApp('ativuz')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('ativuz')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.ativuz.style\">\n  </app-ativuz>\n\n  <app-system *ngIf=\"checkApp('system')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','system']\" (click)=\"appDataService.openApp('system');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/system'],false:'closed'}[checkApp('system')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('system')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.system.style\">\n  </app-system>\n\n  <app-media-player *ngIf=\"checkApp('mediaPlayer')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','mediaPlayer']\" (click)=\"appDataService.openApp('mediaPlayer');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/mediaPlayer'],false:'closed'}[checkApp('mediaPlayer')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('mediaPlayer')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.mediaPlayer.style\">\n  </app-media-player>\n\n  <app-calendar *ngIf=\"checkApp('calendar')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','calendar']\" (click)=\"appDataService.openApp('calendar');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/calendar'],false:'closed'}[checkApp('calendar')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('calendar')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.calendar.style\">\n  </app-calendar>\n\n  <app-clientes *ngIf=\"checkApp('clientes')\" class=\"app TT\" cdkDrag cdkDragBoundary=\".workspace\"\n    [routerLink]=\"['/dashboard','apps','clientes']\" (click)=\"appDataService.openApp('clientes');\"\n    [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/clientes'],false:'closed'}[checkApp('clientes')]]\"\n    [style.z-index]=\"appDataService.appData.appsOpened.indexOf('clientes')+1\"\n    [ngStyle]=\"appDataService.appData.appSettings.clientes.style\">\n  </app-clientes>\n\n</workspace>\n\n<mainmenu>\n\n  <!-- LOGOUT BUTTON -->\n  <button mat-icon-button color=\"warn\" id=\"power_off\" (click)=\"authService.SignOut()\">\n    <mat-icon>power_settings_new</mat-icon>\n  </button>\n\n  <!-- MENU BACKGROUND -->\n  <div class=\"perspective TT\"></div>\n\n  <buttons>\n    <!-- MENU BUTTONS -->\n    <div *ngFor=\"let app of authService.apps | keyvalue\" class=\"alt\" (click)=\"openApp(app.value.name)\">\n      <div class=\"altInner\">{{app.value.title}}</div>\n      <div class=\"ico\">\n        <i class=\"material-icons-round\">{{app.value.ico}}</i>\n      </div>\n      <div class=\"shaddowHolder\">\n        <div class=\"shaddow TT\"\n          [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/'+app.value.name],false:'closed'}[checkApp(app.value.name)]]\">\n        </div>\n      </div>\n    </div>\n\n    <!-- DEFAULT SETTINGS BUTTON -->\n    <div class=\"alt\" (click)=\"openApp('system')\">\n      <div class=\"altInner\">Configurações</div>\n      <div class=\"ico\">\n        <i class=\"material-icons-round\">settings_applications</i>\n      </div>\n      <div class=\"shaddowHolder\">\n        <div class=\"shaddow TT\"\n          [ngClass]=\"[{true:{true:'selected',false:'unselected'}[router.url=='/dashboard/apps/system'],false:'closed'}[checkApp('system')]]\">\n        </div>\n      </div>\n    </div>\n\n  </buttons>\n\n</mainmenu>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/app-data.service */ "./src/app/shared/services/app-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, appDataService, router) {
        this.authService = authService;
        this.appDataService = appDataService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.checkApp = function (val) {
        return this.appDataService.appData.appsOpened.indexOf(val) >= 0 ? true : false;
    };
    DashboardComponent.prototype.openApp = function (val) {
        this.appDataService.openApp(val);
        this.router.navigate(['dashboard', 'apps', val]);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _shared_services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<content>\n  <form novalidate=\"\" action=\"\">\n    <div class=\"back\"></div>\n    <div class=\"left\">\n      <div class=\"top\">\n        <div><img alt=\"Telas360\" src=\"../../../assets/img/favicon.png\"></div>\n        <h1 class=\"title\">Telas 360</h1>\n      </div>\n      <div class=\"bottom\">\n        <div class=\"buttons\">\n          <button type=\"button\" (click)=\"authService.GoogleAuth();\"></button>\n        </div>\n        <div>\n          <div><span>Entrar com o Google.</span></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"top\">\n        <h2>Coloque seu e-mail para solicitar nova senha.</h2>\n      </div>\n      <div class=\"bottom\">\n        <div><input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required></div>\n        <div><input type=\"button\" class=\"btn btnPrimary\" value=\"Solicitar nova senha\"\n            (click)=\"authService.ForgotPassword(passwordResetEmail.value)\"></div>\n        <div><a href=\"\" routerLink=\"/login\">Fazer login</a></div>\n        <div><a href=\"\" routerLink=\"/register-user\">Cadastrar</a></div>\n      </div>\n    </div>\n  </form>\n\n  <footer>Telas360 © 2019 | wmsDesign</footer>\n</content>"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ../../../scss/_login.scss */ "./src/scss/_login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<content>\n  <form novalidate=\"\" action=\"\">\n    <div class=\"back\"></div>\n    <div class=\"left\">\n      <div class=\"top\">\n        <div><img alt=\"Telas360\" src=\"../../../assets/img/favicon.png\"></div>\n        <h1 class=\"title\">Telas 360</h1>\n      </div>\n      <div class=\"bottom\">\n        <div class=\"buttons\">\n          <button type=\"button\" (click)=\"authService.GoogleAuth();\"></button>\n        </div>\n        <div>\n          <div><span>Entrar com o Google.</span></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"top\">\n        <h2>Faça login para entrar</h2>\n      </div>\n      <div class=\"bottom\">\n        <div><input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required></div>\n        <div><input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPassword required></div>\n        <div><input type=\"button\" class=\"btn btnPrimary\" value=\"Log in\"\n            (click)=\"authService.SignIn(userName.value, userPassword.value)\"></div>\n        <div><a href=\"\" routerLink=\"/forgot-password\">Esqueceu a senha?</a></div>\n        <div><a href=\"\" routerLink=\"/register-user\">Ainda não tem uma conta?</a></div>\n      </div>\n    </div>\n  </form>\n\n  <footer>Telas360 © 2019 | wmsDesign</footer>\n</content>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.change = function (val) {
        this.router.navigate([val]);
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ../../../scss/_login.scss */ "./src/scss/_login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<content>\n  <form novalidate=\"\" action=\"\">\n    <div class=\"back\"></div>\n    <div class=\"left\">\n      <div class=\"top\">\n        <div><img alt=\"Telas360\" src=\"../../../assets/img/favicon.png\"></div>\n        <h1 class=\"title\">Telas 360</h1>\n      </div>\n      <div class=\"bottom\">\n        <div class=\"buttons\">\n          <button type=\"button\" (click)=\"authService.GoogleAuth();\"></button>\n        </div>\n        <div>\n          <div><span>Entrar com o Google.</span></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"top\">\n        <h2>Cadastre-se para entrar</h2>\n      </div>\n      <div class=\"bottom\">\n        <div><input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #userEmail required></div>\n        <div><input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required></div>\n        <div><input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\"\n            (click)=\"authService.SignUp(userEmail.value, userPwd.value)\"></div>\n        <div>\n          <a href=\"\" routerLink=\"/login\">Já sou cadastrado.</a></div>\n      </div>\n    </div>\n  </form>\n\n  <footer>Telas360 © 2019 | wmsDesign</footer>\n</content>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ../../../scss/_login.scss */ "./src/scss/_login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/verify-email/verify-email.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<content>\n  <form novalidate=\"\" action=\"\">\n    <div class=\"back\"></div>\n    <div class=\"left\">\n      <div class=\"top\">\n        <div><img alt=\"Telas360\" src=\"../../../assets/img/favicon.png\"></div>\n        <h1 class=\"title\">Telas 360</h1>\n      </div>\n      <div class=\"bottom\">\n        <div class=\"buttons\">\n          <button type=\"button\" (click)=\"authService.GoogleAuth();\"></button>\n        </div>\n        <div>\n          <div><span>Entrar com o Google.</span></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"top\">\n        <h2>Boas vindas. Obrigado por se registrar.</h2>\n        <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n          <p class=\"text-center\">Eviamos um e-mail de confirmação para: <strong>{{user.email}}</strong>.Verifique sua\n            caixa de entrada e click no link para começar a usar.</p>\n        </div>\n      </div>\n      <div class=\"bottom\">\n        <div>\n          <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n            Reenviar e-mail de confirmação\n          </button>\n        </div>\n        <div><span class=\"redirect\" routerLink=\"/login\">Voltar</span></div>\n      </div>\n    </div>\n  </form>\n\n  <footer>Telas360 © 2019 | wmsDesign</footer>\n</content>"

/***/ }),

/***/ "./src/app/components/verify-email/verify-email.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () { };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ../../../scss/_login.scss */ "./src/scss/_login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/pipes/color.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/color.pipe.ts ***!
  \*************************************/
/*! exports provided: ColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPipe", function() { return ColorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorPipe = /** @class */ (function () {
    function ColorPipe() {
    }
    ColorPipe.prototype.transform = function (value, args) {
        var result = '';
        switch (args) {
            case 'random':
                var s = 'abcdefghijklmnopqrstuvwxyz';
                result = 'bg-' + s.charAt(Math.floor(Math.random() * s.length)).toLowerCase();
                break;
            default:
                result = value ? 'bg-' + value.charAt(0).toLowerCase() : 'bg-a';
                break;
        }
        return result;
    };
    ColorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'color'
        })
    ], ColorPipe);
    return ColorPipe;
}());



/***/ }),

/***/ "./src/app/pipes/group-by.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/group-by.pipe.ts ***!
  \****************************************/
/*! exports provided: GroupByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, property) {
        // prevents the application from breaking if the array of objects doesn't exist yet
        if (!collection) {
            return null;
        }
        var groupedCollection = collection.reduce(function (previous, current) {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        // this will return an array of objects, each object containing a group of objects
        return Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
    };
    GroupByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'groupBy'
        })
    ], GroupByPipe);
    return GroupByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/iniciais.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/iniciais.pipe.ts ***!
  \****************************************/
/*! exports provided: IniciaisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciaisPipe", function() { return IniciaisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IniciaisPipe = /** @class */ (function () {
    function IniciaisPipe() {
    }
    IniciaisPipe.prototype.transform = function (value, args) {
        var result = '';
        value.split(' ').forEach(function (element) { result += element.charAt(0); });
        return result.substring(0, 3);
    };
    IniciaisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'iniciais'
        })
    ], IniciaisPipe);
    return IniciaisPipe;
}());



/***/ }),

/***/ "./src/app/pipes/order-by.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/order-by.pipe.ts ***!
  \****************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === "undefined") {
            return array;
        }
        var direction = args[0][0];
        var column = args.replace('-', '');
        array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return (direction === "-") ? right - left : left - right;
        });
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderBy' })
    ], OrderByPipe);
    return OrderByPipe;
}());

/*
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(array, orderBy, asc = true) {
    if (array) {
      if (!orderBy || orderBy.trim() == "") { return array; }
      if (asc) {
        return Array.from(array).sort((item1: any, item2: any) => {
          return this.orderByComparator(item1[orderBy], item2[orderBy]);
        });
      } else {
        return Array.from(array).sort((item1: any, item2: any) => {
          return this.orderByComparator(item2[orderBy], item1[orderBy]);
        });
      }
    }
  }
  orderByComparator(a: any, b: any): number {
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
    } else {
      if (parseFloat(a) < parseFloat(b)) return -1;
      if (parseFloat(a) > parseFloat(b)) return 1;
    }
    return 0;
  }
}
*/ 


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var islogedIn = this.authService.isLoggedIn;
        if (islogedIn !== true) {
            this.router.navigate(['login']);
        }
        return islogedIn;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/secure-inner-pages.guard.ts.guard.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/guard/secure-inner-pages.guard.ts.guard.ts ***!
  \*******************************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            console.log('logged in');
            this.router.navigate(['/dashboard']);
        }
        return true;
    };
    SecureInnerPagesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/app-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-data.service.ts ***!
  \*****************************************************/
/*! exports provided: AppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataService", function() { return AppDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AppDataService = /** @class */ (function () {
    function AppDataService(afs, router) {
        this.afs = afs;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('userData'));
        this.appData = {
            appList: [],
            appsOpened: ['dcb'],
            appSettings: {
                clientes: {},
                calendar: {},
                mediaPlayer: {},
                system: {},
                ativuz: {},
                os: {},
                stockmanager: {},
                fotos: {},
                expense: {}
            },
            system: {
                preferences: {
                    style: {
                        background: 0,
                        bgOptions: [
                            { index: 0, id: 'bg_default', name: 'Colorfull' },
                            { index: 1, id: 'bg_green', name: 'Deep Sea' },
                            { index: 2, id: 'bg_lake', name: 'Lake' },
                            { index: 3, id: 'bg_afternoon', name: 'Afternoon' },
                            { index: 4, id: 'bg_space', name: 'Space' }
                        ]
                    }
                }
            }
        };
        this.appData = this.getLocalData();
    }
    AppDataService.prototype.setCustomData = function (value) {
        this.appData.system.preferences.style.background = value;
        this.setData();
    };
    AppDataService.prototype.openApp = function (val) {
        var index = this.appData.appsOpened.indexOf(val);
        if (index >= 0) {
            this.appData.appsOpened.splice(index, 1);
            this.appData.appsOpened.push(val);
        }
        else {
            this.appData.appsOpened.push(val);
        }
        this.setData();
    };
    AppDataService.prototype.closeApp = function (val) {
        var index = this.appData.appsOpened.indexOf(val);
        if (index >= 0) {
            this.appData.appsOpened.splice(index, 1);
            var last = this.appData.appsOpened.reverse();
            last[0] ? this.router.navigate(['dashboard', 'apps', last[0]]) : this.router.navigate(['dashboard', 'apps']);
            this.appData.appsOpened.reverse();
            this.setData();
        }
    };
    AppDataService.prototype.setData = function () {
        localStorage.setItem('appData', JSON.stringify(this.appData));
    };
    AppDataService.prototype.getAppData = function (_a) {
        var col = _a.col, orderBy = _a.orderBy, startCol = _a.startCol, doc = _a.doc;
        var start = startCol && doc ? startCol + "/" + doc + "/" + col : "userData/" + this.user.uid + "/" + col;
        return this.afs.collection(start, function (ref) { return ref.orderBy(orderBy); } // .limit(limit)
        ).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (change) {
                var data = change.payload.doc.data();
                var id = change.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    AppDataService.prototype.delAppData = function (app, key) {
        return this.afs.collection("userData/" + this.user.uid + "/" + app).doc(key).delete();
    };
    AppDataService.prototype.setAppData = function (app, data) {
        return this.afs.collection("userData/" + this.user.uid + "/" + app).add(data);
    };
    AppDataService.prototype.updateAppData = function (_a) {
        var app = _a.app, key = _a.key, data = _a.data;
        return this.afs.collection("userData/" + this.user.uid + "/" + app).doc(key).update(data);
    };
    AppDataService.prototype.setSubCollection = function (_a) {
        var app = _a.app, key = _a.key, data = _a.data;
        return this.afs.collection("userData/" + this.user.uid + "/" + app + "/").doc(key).set(data, { merge: true });
    };
    AppDataService.prototype.getLocalData = function () {
        return JSON.parse(localStorage.getItem('appData')) || this.appData;
    };
    AppDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppDataService);
    return AppDataService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(toast, afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone) {
        var _this = this;
        this.toast = toast;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.apps = {};
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.afs.doc("users/" + user.uid).get().subscribe(function (a) {
                    _this.SetUserData(a.data());
                });
                _this.afs.collection("userData/" + user.uid + "/appList", function (ref) { return ref; }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (changes) {
                    return changes.map(function (change) {
                        var data = change.payload.doc.data();
                        var id = change.payload.doc.id;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                    });
                })).subscribe(function (data) {
                    _this.apps = data;
                });
            }
            else {
                localStorage.setItem('userData', null);
                localStorage.setItem('appData', null);
                JSON.parse(localStorage.getItem('userData'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        this.ngZone.run(function () {
                            _this.router.navigate(['dashboard']);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toast.error('Verifique o e-mail/senha digitados.', 'Usuário não encontrado.');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        /* Call the SendVerificaitonMail() function when new user sign
                        up and returns promise */
                        this.SendVerificationMail();
                        this.SetUserData(result.user);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.toast.error(error_2.message, 'Desculpe.');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.currentUser.sendEmailVerification()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['verify-email-address']);
                        return [2 /*return*/];
                }
            });
        });
    };
    // request password reset
    AuthService.prototype.ForgotPassword = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.sendPasswordResetEmail(email).then(function () {
                                _this.toast.success('Verifique sua caixa de entrada.', 'Nova senha solicitada.');
                            }).catch(function (error) {
                                _this.toast.error('Verifique o e-mail/senha digitados.', 'Usuário não encontrado.');
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.toast.error('Verifique o e-mail/senha digitados.', 'Usuário não encontrado.');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())];
            });
        });
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.afAuth.auth.signInWithPopup(provider)
                        .then(function (result) {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['dashboard']);
                        });
                        _this.SetUserData(result.user);
                    }).catch(function (error) {
                        window.alert(error);
                    })];
            });
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            phoneNumber: user.phoneNumber,
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: (user.photoURL) ? user.photoURL : '/assets/img/dummy-user.png',
            emailVerified: user.emailVerified,
            document: (user.document) ? user.document : null,
            birthday: (user.birthday) ? user.birthday : null
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        JSON.parse(localStorage.getItem('userData'));
        return userRef.set(userData, { merge: true });
    };
    // Sign out
    AuthService.prototype.SignOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.afAuth.auth.signOut().then(function () {
                        localStorage.removeItem('userData');
                        localStorage.removeItem('appData');
                        _this.router.navigate(['login']);
                    })];
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('userData'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.updateCustomData = function (user, data) {
        var userRef = this.afs.doc("users/" + user.uid);
        return userRef.update(data);
    };
    AuthService.prototype.SetCustomData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        return userRef.set(Object.assign({}, this.userData), { merge: true });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AuthService);
    return AuthService;
}());



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
var environment = {
    firebase: {
        apiKey: "AIzaSyANdDawMOWxWxRlFF--btCJjyMr1n8qjM8",
        authDomain: "telas360.firebaseapp.com",
        databaseURL: "https://telas360.firebaseio.com",
        projectId: "telas360",
        storageBucket: "telas360.appspot.com",
        messagingSenderId: "512200680934"
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/scss/_login.scss":
/*!******************************!*\
  !*** ./src/scss/_login.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "content {\n  background: url('169fee1i.jpg') no-repeat fixed center center/cover;\n  background-color: rgba(0, 0, 0, 0.77); }\n  content footer {\n    font-weight: 100;\n    position: fixed;\n    bottom: 0;\n    background: #444;\n    height: 22px;\n    line-height: 22px;\n    width: 100%;\n    text-align: center;\n    font-size: 12px;\n    color: #f0f8ff; }\n  content form {\n    position: absolute;\n    top: calc(50% - 210px);\n    left: calc(50% - 320px);\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    border: 0.5px solid rgba(255, 255, 255, 0.1);\n    width: 640px;\n    height: 420px;\n    border-radius: 6px;\n    overflow: hidden;\n    color: #999; }\n  content form a:hover {\n      color: snow; }\n  content form a,\n    content form a:active,\n    content form a:visited {\n      color: #848e9b; }\n  content form .redirect {\n      color: #848e9b;\n      text-decoration: underline;\n      font-size: 13px;\n      cursor: pointer; }\n  content form .back {\n      background: url('169fee1i.jpg') no-repeat fixed center center/cover;\n      -webkit-filter: blur(30px);\n              filter: blur(30px);\n      width: calc(100% + 120px);\n      height: calc(100% + 120px);\n      margin: -60px;\n      position: absolute; }\n  content form .left {\n      z-index: 10;\n      position: absolute;\n      left: 0;\n      height: 100%;\n      width: 50%;\n      text-align: center; }\n  content form .left .top {\n        padding: 25px 50px; }\n  content form .left .top .title {\n          font: 100 2.2em \"Roboto\"; }\n  content form .left .top img {\n          margin: 10px;\n          width: 96px;\n          border-radius: 100%; }\n  content form .left .bottom .buttons {\n        margin: 0 0 20px 0; }\n  content form .left .bottom .buttons button {\n          padding: 5px;\n          border: 5px solid #ffe;\n          outline: none;\n          border-radius: 83px;\n          width: 40px;\n          height: 40px;\n          overflow: hidden;\n          background: url('google.png') no-repeat center center/cover; }\n  content form .right {\n      z-index: 10;\n      position: absolute;\n      right: 0;\n      height: 100%;\n      width: 50%;\n      background: rgba(71, 68, 97, 0.7);\n      text-align: center; }\n  content form .right .top {\n        padding: 25px 50px; }\n  content form .right .top h2 {\n          font-weight: 100; }\n  content form .right .bottom {\n        padding: 0 50px; }\n  content form .right .bottom [type=\"button\"],\n        content form .right .bottom [type=\"text\"],\n        content form .right .bottom [type=\"password\"],\n        content form .right .bottom [type=\"email\"] {\n          width: calc(100% - 36px);\n          padding: 12px 18px;\n          border: none;\n          margin: 5px auto 12px;\n          border-radius: 4px; }\n  content form .right .bottom [type=\"button\"] {\n          width: 100%;\n          background: #170a1e;\n          color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYWxlcGRhc2lsdi9TaXRlcy90ZWxhczM2MC9zcmMvc2Nzcy9fbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1FQUE2RjtFQUM3RixxQ0FBcUMsRUFBQTtFQUZ2QztJQUtJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQWRsQjtJQWtCSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxSEFDb0M7SUFDcEMsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUE1QmY7TUErQk0sV0FBVyxFQUFBO0VBL0JqQjs7O01Bb0NNLGNBQWMsRUFBQTtFQXBDcEI7TUF1Q00sY0FBYztNQUNkLDBCQUEwQjtNQUMxQixlQUFlO01BQ2YsZUFBZSxFQUFBO0VBMUNyQjtNQThDTSxtRUFBNkY7TUFDN0YsMEJBQWtCO2NBQWxCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsMEJBQTBCO01BQzFCLGFBQWE7TUFDYixrQkFBa0IsRUFBQTtFQW5EeEI7TUF1RE0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsWUFBWTtNQUNaLFVBQVU7TUFDVixrQkFBa0IsRUFBQTtFQTVEeEI7UUErRFEsa0JBQWtCLEVBQUE7RUEvRDFCO1VBa0VVLHdCQUF3QixFQUFBO0VBbEVsQztVQXNFVSxZQUFZO1VBQ1osV0FBVztVQUNYLG1CQUFtQixFQUFBO0VBeEU3QjtRQTZFVSxrQkFBa0IsRUFBQTtFQTdFNUI7VUFnRlksWUFBWTtVQUNaLHNCQUFzQjtVQUN0QixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLFdBQVc7VUFDWCxZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLDJEQUEyRSxFQUFBO0VBdkZ2RjtNQThGTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixZQUFZO01BQ1osVUFBVTtNQUNWLGlDQUFpQztNQUNqQyxrQkFBa0IsRUFBQTtFQXBHeEI7UUF1R1Esa0JBQWtCLEVBQUE7RUF2RzFCO1VBeUdVLGdCQUFnQixFQUFBO0VBekcxQjtRQThHUSxlQUFlLEVBQUE7RUE5R3ZCOzs7O1VBb0hVLHdCQUF3QjtVQUN4QixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixrQkFBa0IsRUFBQTtFQXhINUI7VUE0SFUsV0FBVztVQUNYLG1CQUFtQjtVQUNuQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL3Njc3MvX2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjb250ZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltZy93YWxscGFwZXIvMTY5ZmVlMWkuanBnXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Nyk7XG5cbiAgZm9vdGVyIHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2YwZjhmZjtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjEwcHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMzIwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgd2lkdGg6IDY0MHB4O1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6ICM5OTk7XG5cbiAgICBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBzbm93O1xuICAgIH1cbiAgICBhLFxuICAgIGE6YWN0aXZlLFxuICAgIGE6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogIzg0OGU5YjtcbiAgICB9XG4gICAgLnJlZGlyZWN0IHtcbiAgICAgIGNvbG9yOiAjODQ4ZTliO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltZy93YWxscGFwZXIvMTY5ZmVlMWkuanBnXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgMTIwcHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxMjBweCk7XG4gICAgICBtYXJnaW46IC02MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5sZWZ0IHtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC50b3Age1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250OiAxMDAgMi4yZW0gXCJSb2JvdG9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA5NnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ib3R0b20ge1xuICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogODNweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWcvZ29vZ2xlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yaWdodCB7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzEsIDY4LCA5NywgMC43KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLnRvcCB7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJvdHRvbSB7XG4gICAgICAgIHBhZGRpbmc6IDAgNTBweDtcblxuICAgICAgICBbdHlwZT1cImJ1dHRvblwiXSxcbiAgICAgICAgW3R5cGU9XCJ0ZXh0XCJdLFxuICAgICAgICBbdHlwZT1cInBhc3N3b3JkXCJdLFxuICAgICAgICBbdHlwZT1cImVtYWlsXCJdIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCBhdXRvIDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgW3R5cGU9XCJidXR0b25cIl0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNzBhMWU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ialepdasilv/Sites/telas360/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map