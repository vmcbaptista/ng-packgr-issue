import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let AbcService = class AbcService {
    constructor() { }
};
AbcService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AbcService_Factory() { return new AbcService(); }, token: AbcService, providedIn: "root" });
AbcService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AbcService);

let AbcComponent = class AbcComponent {
    constructor() { }
    ngOnInit() {
    }
};
AbcComponent = __decorate([
    Component({
        selector: 'lib-abc',
        template: `
    <p>
      components works!
    </p>
  `
    })
], AbcComponent);

let AbcModule = class AbcModule {
};
AbcModule = __decorate([
    NgModule({
        declarations: [AbcComponent],
        imports: [],
        exports: [AbcComponent]
    })
], AbcModule);

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbcComponent, AbcModule, AbcService };
//# sourceMappingURL=components-abc.js.map
