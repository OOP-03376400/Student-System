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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var notification_service_1 = require("../services/notifications/notification.service");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(notificationService) {
        this.notificationService = notificationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.catchError(function (err) {
            console.log(err);
            switch (err.status) {
                // Unauthorized
                case 401:
                    _this.notificationService.errorMsg(err.error.message);
                    break;
                // Bad request
                case 400:
                    var errorsObj_1 = err.error.errors;
                    var messages = Object.keys(errorsObj_1)
                        .map(function (e) { return errorsObj_1[e]; })
                        .join(' ');
                    _this.notificationService.errorMsg(messages);
                    break;
                default:
                    break;
            }
            return rxjs_1.throwError(err);
        }));
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [notification_service_1.NotificationService])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map