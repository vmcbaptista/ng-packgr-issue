import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let ComponentsService = class ComponentsService {
    constructor() { }
};
ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
ComponentsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ComponentsService);

let ComponentsComponent = class ComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComponentsComponent = __decorate([
    Component({
        selector: 'lib-components',
        template: `
    <p>
      components works!
    </p>
  `
    })
], ComponentsComponent);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [ComponentsComponent],
        imports: [],
        exports: [ComponentsComponent]
    })
], ComponentsModule);

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsComponent, ComponentsModule, ComponentsService };
//# sourceMappingURL=components.js.map
