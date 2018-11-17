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
var ngx_toastr_1 = require("ngx-toastr");
var errorTitle = 'Error';
var successTitle = 'Success';
var warningTitle = 'Warning';
var infoTitle = 'Info';
var loginRequiredMsg = 'Login required';
var adminRequiredMsg = 'Login with Admin credentials';
var alreadyLoggedInMsg = 'Already logged in. Logout first, then try with different credentials';
var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.successMsg = function (message) { return _this.toastr.success(message, successTitle); };
        this.infoMsg = function (message) { return _this.toastr.info(message, infoTitle); };
        this.errorMsg = function (message) { return _this.toastr.error(message, errorTitle); };
        this.warningMsg = function (message) { return _this.toastr.warning(message, warningTitle); };
        this.loginRequiredMsg = function () { return _this.infoMsg(loginRequiredMsg); };
        this.adminRoleRequiredMsg = function () { return _this.infoMsg(adminRequiredMsg); };
        this.alreadyLoggedInMsg = function () { return _this.infoMsg(alreadyLoggedInMsg); };
    }
    NotificationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map