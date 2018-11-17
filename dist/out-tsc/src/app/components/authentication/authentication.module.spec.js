"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_module_1 = require("./authentication.module");
describe('AuthenticationModule', function () {
    var authenticationModule;
    beforeEach(function () {
        authenticationModule = new authentication_module_1.AuthenticationModule();
    });
    it('should create an instance', function () {
        expect(authenticationModule).toBeTruthy();
    });
});
//# sourceMappingURL=authentication.module.spec.js.map