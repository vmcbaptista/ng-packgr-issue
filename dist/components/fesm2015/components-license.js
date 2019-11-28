import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let LicenseService = class LicenseService {
    constructor() { }
};
LicenseService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LicenseService_Factory() { return new LicenseService(); }, token: LicenseService, providedIn: "root" });
LicenseService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LicenseService);

let LicenseComponent = class LicenseComponent {
    constructor() { }
    ngOnInit() {
    }
};
LicenseComponent = __decorate([
    Component({
        selector: 'lib-license',
        template: `
    <p>
      License works!
    </p>
  `
    })
], LicenseComponent);

let LicenseModule = class LicenseModule {
};
LicenseModule = __decorate([
    NgModule({
        declarations: [LicenseComponent],
        imports: [],
        exports: [LicenseComponent]
    })
], LicenseModule);

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LicenseComponent, LicenseModule, LicenseService };
//# sourceMappingURL=components-license.js.map
