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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/authentication/auth.service");
var notification_service_1 = require("../../services/notifications/notification.service");
var AnonymousGuard = /** @class */ (function () {
    function AnonymousGuard(authService, router, notificationService) {
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
    }
    AnonymousGuard.prototype.canActivate = function (route, state) {
        return this.check();
    };
    AnonymousGuard.prototype.check = function () {
        if (!this.authService.isAuthenticated()) {
            return true;
        }
        this.notificationService.alreadyLoggedInMsg();
        this.router.navigate(['/home']);
        return false;
    };
    AnonymousGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            notification_service_1.NotificationService])
    ], AnonymousGuard);
    return AnonymousGuard;
}());
exports.AnonymousGuard = AnonymousGuard;
//# sourceMappingURL=anonymous.guard.js.map