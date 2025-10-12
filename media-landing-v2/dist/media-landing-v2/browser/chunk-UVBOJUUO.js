import {
  CommonModule,
  Component,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-6SZYEMSY.js";
import "./chunk-S35DAJRX.js";

// src/app/modules/analytics/analytics.component.ts
var AnalyticsComponent = class _AnalyticsComponent {
  static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], decls: 2, vars: 0, template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "analytics works!");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsComponent, [{
    type: Component,
    args: [{ selector: "app-analytics", imports: [], template: "<p>analytics works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/modules/analytics/analytics.component.ts", lineNumber: 9 });
})();

// src/app/modules/analytics/analytics-routing.module.ts
var routes = [
  { path: "", component: AnalyticsComponent }
];
var AnalyticsRoutingModule = class _AnalyticsRoutingModule {
  static \u0275fac = function AnalyticsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AnalyticsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/analytics/analytics.module.ts
var AnalyticsModule = class _AnalyticsModule {
  static \u0275fac = function AnalyticsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AnalyticsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AnalyticsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AnalyticsRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AnalyticsModule
};
//# sourceMappingURL=chunk-UVBOJUUO.js.map
