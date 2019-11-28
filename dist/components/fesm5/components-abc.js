import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var AbcService = /** @class */ (function () {
    function AbcService() {
    }
    AbcService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AbcService_Factory() { return new AbcService(); }, token: AbcService, providedIn: "root" });
    AbcService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AbcService);
    return AbcService;
}());

var AbcComponent = /** @class */ (function () {
    function AbcComponent() {
    }
    AbcComponent.prototype.ngOnInit = function () {
    };
    AbcComponent = __decorate([
        Component({
            selector: 'lib-abc',
            template: "\n    <p>\n      components works!\n    </p>\n  "
        })
    ], AbcComponent);
    return AbcComponent;
}());

var AbcModule = /** @class */ (function () {
    function AbcModule() {
    }
    AbcModule = __decorate([
        NgModule({
            declarations: [AbcComponent],
            imports: [],
            exports: [AbcComponent]
        })
    ], AbcModule);
    return AbcModule;
}());

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbcComponent, AbcModule, AbcService };
//# sourceMappingURL=components-abc.js.map
