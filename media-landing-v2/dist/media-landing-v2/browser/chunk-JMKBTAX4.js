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

// src/app/modules/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: false, decls: 10, vars: 0, consts: [[1, "about-section"], [1, "container", "mx-auto", "px-4", "py-16"], [1, "text-3xl", "font-bold", "mb-30", "text-center"], [1, "text-lg", "mb-6"], [1, "text-lg"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Welcome to Sne Vision Media, your go-to platform for visionary ideas. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, " At Sne Vision Media, we are committed to excellence, innovation, and hope! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, " Join us on our journey to shape the future of media and technology. ");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\n.about-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n  height: 82vh;\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: false, template: '<section class="about-section">\n  <div class="container mx-auto px-4 py-16">\n    <h2 class="text-3xl font-bold mb-30 text-center">About Us</h2>\n    <p class="text-lg mb-6">\n      Welcome to Sne Vision Media, your go-to platform for visionary ideas.\n    </p>\n    <p class="text-lg mb-6">\n      At Sne Vision Media, we are committed to excellence, innovation, and hope!\n    </p>\n\n    <p class="text-lg">\n      Join us on our journey to shape the future of media and technology.\n    </p>\n  </div>\n</section>\n', styles: ["/* src/app/modules/about/about.component.scss */\n.about-section {\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n  height: 82vh;\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/modules/about/about.component.ts", lineNumber: 9 });
})();

// src/app/modules/about/about-routing.module.ts
var routes = [{ path: "", component: AboutComponent }];
var AboutRoutingModule = class _AboutRoutingModule {
  static \u0275fac = function AboutRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/about/about.module.ts
var AboutModule = class _AboutModule {
  static \u0275fac = function AboutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AboutRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutModule, [{
    type: NgModule,
    args: [{
      declarations: [
        AboutComponent
      ],
      imports: [
        CommonModule,
        AboutRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AboutModule
};
//# sourceMappingURL=chunk-JMKBTAX4.js.map
