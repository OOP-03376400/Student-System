"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_toastr_1 = require("ngx-toastr");
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
var environment_1 = require("../environments/environment");
// Interceptors
var token_interceptor_1 = require("./core/interceptors/token.interceptor");
var error_interceptor_1 = require("./core/interceptors/error.interceptor");
// Modules
var app_routing_module_1 = require("./app-routing.module");
var shared_module_1 = require("./components/shared/shared.module");
var authentication_module_1 = require("./components/authentication/authentication.module");
var admin_module_1 = require("./components/admin/admin.module");
// Components
var app_component_1 = require("./app.component");
var posts_component_1 = require("./components/posts/posts.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, posts_component_1.PostsComponent],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                // Modules
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                authentication_module_1.AuthenticationModule,
                admin_module_1.AdminModule,
                // // AngularFire2
                // AngularFireModule.initializeApp(environment.firebase),
                // AngularFireAuthModule,
                // AngularFirestoreModule,
                // // Toastr Notifications
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(environment_1.environment.toastr)
            ],
            providers: [
                // Interceptors
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_1.TokenInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: error_interceptor_1.ErrorInterceptor,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map