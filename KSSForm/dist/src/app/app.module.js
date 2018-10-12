"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var app_1 = require("./app");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require('@angular/common');
var angular2_material_datepicker_1 = require('angular2-material-datepicker');
var form_component_1 = require('./form/form.component');
var login_component_1 = require('./login/login.component');
var home_1 = require('./home/home');
// import { HttpClientModule } from '@angular/common/http';
// import { AuthenticationService } from './authentication/authentication.service';
// import { AuthGuardService } from './authentication/auth-guard.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_1.AppComponent],
            imports: [home_1.Home, login_component_1.LoginComponent, form_component_1.FormComponent, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig), angular2_material_datepicker_1.DatepickerModule,
                router_1.RouterModule.forRoot([
                    { path: 'login', component: login_component_1.LoginComponent },
                    // { path: 'form', component: FormComponent},
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                ])],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//, HttpModule, HttpClient
//   providers   : [{ provide: LocationStrategy, useClass: HashLocationStrategy}, AuthenticationService, AuthGuardService],
//# sourceMappingURL=app.module.js.map