import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
    }
    ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
    ComponentsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ComponentsService);
    return ComponentsService;
}());

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = __decorate([
        Component({
            selector: 'lib-components',
            template: "\n    <p>\n      components works!\n    </p>\n  "
        })
    ], ComponentsComponent);
    return ComponentsComponent;
}());

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [ComponentsComponent],
            imports: [],
            exports: [ComponentsComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsComponent, ComponentsModule, ComponentsService };
//# sourceMappingURL=components.js.map
