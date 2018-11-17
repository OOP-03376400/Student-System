"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Guards
var admin_guard_1 = require("./core/guards/authentication/admin.guard");
var anonymous_guard_1 = require("./core/guards/authentication/anonymous.guard");
var auth_guard_1 = require("./core/guards/authentication/auth.guard");
// Modules
var authentication_module_1 = require("./components/authentication/authentication.module");
var admin_module_1 = require("./components/admin/admin.module");
// Components
var home_component_1 = require("./components/shared/home/home.component");
var posts_component_1 = require("./components/posts/posts.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'auth',
        canActivate: [anonymous_guard_1.AnonymousGuard],
        loadChildren: function () { return authentication_module_1.AuthenticationModule; }
    },
    {
        path: 'admin',
        canActivate: [admin_guard_1.AdminGuard],
        loadChildren: function () { return admin_module_1.AdminModule; }
    },
    {
        path: 'posts',
        canActivate: [auth_guard_1.AuthGuard],
        component: posts_component_1.PostsComponent
    },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map