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
var firebase = require("firebase");
var notification_service_1 = require("../notifications/notification.service");
var registrationSuccessMsg = 'Registration successful';
var loginSuccessMsg = 'Login successful';
var logoutSuccessMsg = 'Logout successful';
var loginPath = '/auth/login';
var homePath = '/home';
var usersCollection = 'users/';
var roles = 'roles';
var adminRole = 'admin';
var AuthService = /** @class */ (function () {
    function AuthService(router, notificationService) {
        this.router = router;
        this.notificationService = notificationService;
        this.user = null; // {uid, email, displayName}
        this.token = null;
        this.hasAdminRole = false;
        this.auth = firebase.auth();
        this.db = firebase.database();
    }
    AuthService.prototype.register = function (registerModel) {
        var _this = this;
        var name = registerModel.name, email = registerModel.email, password = registerModel.password;
        this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (data) {
            _this.getCurrentUser();
            _this.updateUserProfile(name);
            _this.saveUserToDb(name, email);
            _this.getUserRoles();
            _this.notificationService.successMsg(registrationSuccessMsg);
            _this.router.navigate([homePath]);
        })
            .catch(function (err) { return _this.notificationService.errorMsg(err.message); });
    };
    AuthService.prototype.login = function (loginModel) {
        var _this = this;
        var email = loginModel.email, password = loginModel.password;
        this.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (data) {
            _this.getCurrentUser();
            _this.getUserRoles();
            _this.notificationService.successMsg(loginSuccessMsg);
            _this.router.navigate([homePath]);
        })
            .catch(function (err) { return _this.notificationService.errorMsg(err.message); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.auth
            .signOut()
            .then(function (res) {
            _this.clearUser();
            _this.notificationService.successMsg(logoutSuccessMsg);
            _this.router.navigate([loginPath]);
        })
            .catch(function (err) { return _this.notificationService.errorMsg(err.message); });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.user !== null; //  && this.token !== null && this.token !== undefined
    };
    AuthService.prototype.isAdmin = function () {
        return this.isAuthenticated && this.hasAdminRole;
    };
    AuthService.prototype.getUserToken = function () {
        var _this = this;
        if (!this.user) {
            this.token = null;
            return this.token;
        }
        this.user
            .getIdToken()
            .then(function (token) {
            _this.token = token;
        })
            .catch(function (err) { return _this.notificationService.errorMsg(err.message); });
        return this.token;
    };
    AuthService.prototype.clearUser = function () {
        this.token = null;
        this.user = null;
        this.hasAdminRole = false;
    };
    AuthService.prototype.getCurrentUser = function () {
        this.user = this.auth.currentUser;
        return this.user;
    };
    AuthService.prototype.getUserRoles = function () {
        var _this = this;
        if (!this.user) {
            return;
        }
        var id = this.user.uid;
        this.db
            .ref(usersCollection + "/" + id + "/" + roles + "/" + adminRole)
            .once('value')
            .then(function (snapshot) {
            _this.hasAdminRole = snapshot.val(); // adminRole
        })
            .catch(function (err) { return _this.notificationService.errorMsg(err.message); });
    };
    AuthService.prototype.saveUserToDb = function (name, email) {
        if (!this.user) {
            return;
        }
        var id = this.user.uid;
        var roles = {
            // admin: true,
            reader: true
        };
        this.db.ref(usersCollection + "/" + id).set({ id: id, email: email, name: name, roles: roles });
    };
    AuthService.prototype.updateUserProfile = function (name) {
        if (!this.user) {
            return;
        }
        this.user.updateProfile({
            displayName: name,
            photoURL: null
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            notification_service_1.NotificationService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map