import {
  MediaWorkDetailedResolver,
  MediaWorksDetailedViewComponent,
  MediaWorksSharedModule
} from "./chunk-UBJBNPP3.js";
import {
  CategoryService,
  MediaWorkService,
  SnakeToWordsPipe
} from "./chunk-JUIE7TJN.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  RouterLink,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6SZYEMSY.js";

// src/app/modules/use-cases/use-cases.component.ts
var _c0 = (a0) => ["/use-cases", a0];
function UseCasesComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function UseCasesComponent_button_10_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(c_r2.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", c_r2.name === ctx_r2.selectedCategory);
    \u0275\u0275attribute("aria-selected", c_r2.name === ctx_r2.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.name, " ");
  }
}
function UseCasesComponent_article_12_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "snakeToWords");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const uc_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, uc_r4.status));
  }
}
function UseCasesComponent_article_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 11)(1, "div", 12)(2, "h3", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 15);
    \u0275\u0275text(7, "Research Manuscript");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275template(9, UseCasesComponent_article_12_span_9_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18)(11, "button", 19);
    \u0275\u0275text(12, " See details ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "img", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const uc_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(uc_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(uc_r4.summary);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("href", uc_r4.manuscriptSignedUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", uc_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, uc_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", uc_r4.imageSignedUrl, \u0275\u0275sanitizeUrl)("alt", uc_r4.title);
  }
}
var UseCasesComponent = class _UseCasesComponent {
  categoryService;
  mediaWorkService;
  // NOTE: MediaWork objects now include ephemeral imageSignedUrl / manuscriptSignedUrl for direct rendering
  categories = [];
  selectedCategory = "All";
  loadingCategories = false;
  categoryError = null;
  allUseCases = [];
  loadingUseCases = false;
  useCasesError = null;
  constructor(categoryService, mediaWorkService) {
    this.categoryService = categoryService;
    this.mediaWorkService = mediaWorkService;
    this.loadCategories();
    this.loadUseCases();
  }
  loadUseCases() {
    this.loadingUseCases = true;
    this.mediaWorkService.listWithSignedUrls("use-cases").subscribe({
      next: (items) => {
        this.allUseCases = items;
        this.loadingUseCases = false;
      },
      error: (e) => {
        console.error("[UseCasesComponent] media works load error", e);
        this.useCasesError = "Failed to load use cases";
        this.loadingUseCases = false;
      }
    });
  }
  loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.loadingCategories = false;
      },
      error: (e) => {
        console.error("[UseCasesComponent] categories load error", e);
        this.categoryError = "Failed to load categories";
        this.loadingCategories = false;
      }
    });
  }
  get filteredUseCases() {
    if (this.selectedCategory === "All")
      return this.allUseCases;
    return this.allUseCases.filter((uc) => uc.categoryName === this.selectedCategory);
  }
  selectCategory(cat) {
    this.selectedCategory = cat;
  }
  trackUseCase = (_, uc) => uc.id;
  static \u0275fac = function UseCasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseCasesComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(MediaWorkService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UseCasesComponent, selectors: [["app-use-cases"]], standalone: false, decls: 13, vars: 3, consts: [["id", "use-cases", 1, "section-pad"], [1, "section-inner"], [1, "section-header"], [1, "section-eyebrow"], [1, "section-title"], [1, "section-sub"], ["role", "tablist", "aria-label", "Use case categories", 1, "tag-pills"], ["class", "pill", "role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "use-case-grid"], ["class", "use-case-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "tab", 1, "pill", 3, "click"], [1, "use-case-card"], [1, "uc-content"], [1, "uc-title"], [1, "uc-summary"], [1, "uc-cta", 3, "href"], [1, "uc-footer"], ["class", "uc-status", 4, "ngIf"], [1, "uc-actions"], [1, "see-details-btn", 3, "routerLink"], ["loading", "lazy", 1, "uc-image", 3, "src", "alt"], [1, "uc-status"]], template: function UseCasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Explore how we envision the Future");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Learn how the Best Minds collaborate, research, simulate and develop solutions to real-world tasks. Explore the solution and cost of decisions. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275template(10, UseCasesComponent_button_10_Template, 2, 4, "button", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, UseCasesComponent_article_12_Template, 14, 9, "article", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredUseCases)("ngForTrackBy", ctx.trackUseCase);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, SnakeToWordsPipe], styles: ['\n\n.use-case-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.75rem;\n  margin-top: 1rem;\n  max-width: calc(840px + 3.5rem);\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n}\n.use-case-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      #e8e8e8 0%,\n      #636363 100%);\n  border-radius: 18px;\n  flex: 1 1 280px;\n  max-width: 280px;\n  width: 280px;\n  height: 280px;\n  padding: 1rem 0.85rem 1.1rem;\n  box-shadow: 0 8px 22px -8px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  isolation: isolate;\n  transition: 0.35s transform, 0.35s box-shadow;\n}\n.use-case-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 28% 18%,\n      rgba(255, 255, 255, 0.9),\n      rgba(255, 255, 255, 0));\n  pointer-events: none;\n  z-index: 0;\n}\n.use-case-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 34px -10px rgba(0, 0, 0, 0.32), 0 6px 14px -6px rgba(0, 0, 0, 0.18);\n}\n.uc-bg-img[_ngcontent-%COMP%] {\n  height: 90px;\n  border-radius: 14px;\n  background: #2c2c2c url(/assets/images/sne_logo.png) center/60% no-repeat;\n  filter: brightness(0.6) contrast(1.05);\n  margin-bottom: 0.85rem;\n}\n.uc-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n}\n.uc-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.05rem;\n  margin: 0 0 0.45rem;\n  color: #151515;\n  text-align: center;\n}\n.uc-summary[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  line-height: 0.9rem;\n  font-weight: 500;\n  color: #2a2a2a;\n  margin: 0 0 0.75rem;\n  text-align: center;\n}\n.uc-footer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n}\n.uc-status[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  background: #1b1b1b;\n  color: #fff;\n  padding: 0.35rem 0.55rem;\n  border-radius: 1000px;\n  letter-spacing: 0.4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\n}\n.uc-cta[_ngcontent-%COMP%] {\n  width: 150px;\n  text-align: center;\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 0.45rem 1.1rem;\n  background: #ffffff;\n  border: 1px solid #c9c9c9;\n  border-radius: 1000px;\n  color: #111;\n  text-decoration: none;\n  line-height: 1;\n  display: inline-block;\n  transition:\n    0.25s background,\n    0.25s color,\n    0.25s border-color;\n}\n.uc-cta[_ngcontent-%COMP%]:hover {\n  background: #111;\n  color: #fff;\n  border-color: #111;\n}\n.uc-image[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 50%;\n  border-radius: 12px;\n  margin-top: 0.9rem;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=use-cases.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseCasesComponent, [{
    type: Component,
    args: [{ selector: "app-use-cases", standalone: false, template: `<!-- Use Cases Section -->
<section id="use-cases" class="section-pad">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-eyebrow">Use Cases</span>
      <h2 class="section-title">Explore how we envision the Future</h2>
      <p class="section-sub">
        Learn how the Best Minds collaborate, research, simulate and develop
        solutions to real-world tasks. Explore the solution and cost of
        decisions.
      </p>
      <div class="tag-pills" role="tablist" aria-label="Use case categories">
        <button
          *ngFor="let c of categories"
          class="pill"
          [class.active]="c.name === selectedCategory"
          (click)="selectCategory(c.name)"
          role="tab"
          [attr.aria-selected]="c.name === selectedCategory"
        >
          {{ c.name }}
        </button>
      </div>
    </div>
    <div class="use-case-grid">
      <article
        *ngFor="let uc of filteredUseCases; trackBy: trackUseCase"
        class="use-case-card"
      >
        <div class="uc-content">
          <h3 class="uc-title">{{ uc.title }}</h3>
          <p class="uc-summary">{{ uc.summary }}</p>
          <a href="{{ uc.manuscriptSignedUrl }}" class="uc-cta"
            >Research Manuscript</a
          >
          <div class="uc-footer">
            <span class="uc-status" *ngIf="uc.status">{{
              uc.status | snakeToWords
            }}</span>
          </div>

          <div class="uc-actions">
            <button class="see-details-btn" [routerLink]="['/use-cases', uc.id]">
              See details
            </button>
          </div>

          <!-- Use-case image shown below the CTA -->
          <img
            class="uc-image"
            [src]="uc.imageSignedUrl"
            [alt]="uc.title"
            loading="lazy"
          />
        </div>
      </article>
    </div>
    <!-- <div class="more-row">
      <button class="more-btn">Explore More Use Cases</button>
    </div> -->
  </div>
</section>
`, styles: ['/* src/app/modules/use-cases/use-cases.component.scss */\n.use-case-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.75rem;\n  margin-top: 1rem;\n  max-width: calc(840px + 3.5rem);\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n}\n.use-case-card {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      #e8e8e8 0%,\n      #636363 100%);\n  border-radius: 18px;\n  flex: 1 1 280px;\n  max-width: 280px;\n  width: 280px;\n  height: 280px;\n  padding: 1rem 0.85rem 1.1rem;\n  box-shadow: 0 8px 22px -8px rgba(0, 0, 0, 0.25), 0 3px 8px -3px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  isolation: isolate;\n  transition: 0.35s transform, 0.35s box-shadow;\n}\n.use-case-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 28% 18%,\n      rgba(255, 255, 255, 0.9),\n      rgba(255, 255, 255, 0));\n  pointer-events: none;\n  z-index: 0;\n}\n.use-case-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 34px -10px rgba(0, 0, 0, 0.32), 0 6px 14px -6px rgba(0, 0, 0, 0.18);\n}\n.uc-bg-img {\n  height: 90px;\n  border-radius: 14px;\n  background: #2c2c2c url(/assets/images/sne_logo.png) center/60% no-repeat;\n  filter: brightness(0.6) contrast(1.05);\n  margin-bottom: 0.85rem;\n}\n.uc-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n}\n.uc-title {\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.05rem;\n  margin: 0 0 0.45rem;\n  color: #151515;\n  text-align: center;\n}\n.uc-summary {\n  font-size: 0.55rem;\n  line-height: 0.9rem;\n  font-weight: 500;\n  color: #2a2a2a;\n  margin: 0 0 0.75rem;\n  text-align: center;\n}\n.uc-footer {\n  margin-top: 1rem;\n  display: flex;\n  align-items: center;\n}\n.uc-status {\n  font-size: 0.5rem;\n  font-weight: 600;\n  background: #1b1b1b;\n  color: #fff;\n  padding: 0.35rem 0.55rem;\n  border-radius: 1000px;\n  letter-spacing: 0.4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\n}\n.uc-cta {\n  width: 150px;\n  text-align: center;\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 0.45rem 1.1rem;\n  background: #ffffff;\n  border: 1px solid #c9c9c9;\n  border-radius: 1000px;\n  color: #111;\n  text-decoration: none;\n  line-height: 1;\n  display: inline-block;\n  transition:\n    0.25s background,\n    0.25s color,\n    0.25s border-color;\n}\n.uc-cta:hover {\n  background: #111;\n  color: #fff;\n  border-color: #111;\n}\n.uc-image {\n  width: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 50%;\n  border-radius: 12px;\n  margin-top: 0.9rem;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=use-cases.component.css.map */\n'] }]
  }], () => [{ type: CategoryService }, { type: MediaWorkService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UseCasesComponent, { className: "UseCasesComponent", filePath: "src/app/modules/use-cases/use-cases.component.ts", lineNumber: 11 });
})();

// src/app/modules/use-cases/use-cases-routing.module.ts
var routes = [
  { path: "", component: UseCasesComponent },
  {
    path: ":id",
    component: MediaWorksDetailedViewComponent,
    resolve: { mediaWork: MediaWorkDetailedResolver }
  }
];
var UseCasesRoutingModule = class _UseCasesRoutingModule {
  static \u0275fac = function UseCasesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseCasesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UseCasesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseCasesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/use-cases/use-cases.module.ts
var UseCasesModule = class _UseCasesModule {
  static \u0275fac = function UseCasesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseCasesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UseCasesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, UseCasesRoutingModule, MediaWorksSharedModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseCasesModule, [{
    type: NgModule,
    args: [{
      declarations: [UseCasesComponent],
      imports: [CommonModule, UseCasesRoutingModule, SnakeToWordsPipe, MediaWorksSharedModule],
      exports: [UseCasesComponent]
    }]
  }], null, null);
})();

export {
  UseCasesComponent,
  UseCasesModule
};
//# sourceMappingURL=chunk-ANRY7YLR.js.map
