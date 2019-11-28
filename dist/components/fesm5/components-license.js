import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var LicenseService = /** @class */ (function () {
    function LicenseService() {
    }
    LicenseService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LicenseService_Factory() { return new LicenseService(); }, token: LicenseService, providedIn: "root" });
    LicenseService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LicenseService);
    return LicenseService;
}());

var LicenseComponent = /** @class */ (function () {
    function LicenseComponent() {
    }
    LicenseComponent.prototype.ngOnInit = function () {
    };
    LicenseComponent = __decorate([
        Component({
            selector: 'lib-license',
            template: "\n    <p>\n      License works!\n    </p>\n  "
        })
    ], LicenseComponent);
    return LicenseComponent;
}());

var LicenseModule = /** @class */ (function () {
    function LicenseModule() {
    }
    LicenseModule = __decorate([
        NgModule({
            declarations: [LicenseComponent],
            imports: [],
            exports: [LicenseComponent]
        })
    ], LicenseModule);
    return LicenseModule;
}());

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LicenseComponent, LicenseModule, LicenseService };
//# sourceMappingURL=components-license.js.map
