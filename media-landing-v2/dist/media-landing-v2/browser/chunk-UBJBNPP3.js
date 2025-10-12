import {
  MediaWorkService,
  SnakeToWordsPipe
} from "./chunk-JUIE7TJN.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  NgIf,
  NgModule,
  RouterLink,
  RouterModule,
  map,
  of,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6SZYEMSY.js";

// src/app/components/media-works-detailed-view/media-works-detailed-view.component.ts
var _c0 = (a0) => ["/", a0];
function MediaWorksDetailedViewComponent_section_0_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mw_r1.summary);
  }
}
function MediaWorksDetailedViewComponent_section_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mw_r1.categoryName);
  }
}
function MediaWorksDetailedViewComponent_section_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "snakeToWords");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, mw_r1.status));
  }
}
function MediaWorksDetailedViewComponent_section_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Created: ", \u0275\u0275pipeBind2(2, 1, mw_r1.created_at, "mediumDate"), "");
  }
}
function MediaWorksDetailedViewComponent_section_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Updated: ", \u0275\u0275pipeBind2(2, 1, mw_r1.updated_at, "mediumDate"), "");
  }
}
function MediaWorksDetailedViewComponent_section_0_figure_24_figcaption_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figcaption");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mw_r1.title);
  }
}
function MediaWorksDetailedViewComponent_section_0_figure_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure", 28);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275template(2, MediaWorksDetailedViewComponent_section_0_figure_24_figcaption_2_Template, 2, 1, "figcaption", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("src", mw_r1.imageSignedUrl, \u0275\u0275sanitizeUrl)("alt", mw_r1.title || mw_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.title);
  }
}
function MediaWorksDetailedViewComponent_section_0_article_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 31)(1, "h2");
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(mw_r1.description);
  }
}
function MediaWorksDetailedViewComponent_section_0_article_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 32)(1, "h2");
    \u0275\u0275text(2, "Research Manuscript");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p")(4, "a", 33);
    \u0275\u0275text(5, "Open manuscript (signed link)");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275property("href", mw_r1.manuscriptSignedUrl, \u0275\u0275sanitizeUrl);
  }
}
function MediaWorksDetailedViewComponent_section_0_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275text(1, "YouTube");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("href", mw_r1.youtubeUrl, \u0275\u0275sanitizeUrl);
  }
}
function MediaWorksDetailedViewComponent_section_0_a_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275text(1, "GitHub");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mw_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("href", mw_r1.githubUrl, \u0275\u0275sanitizeUrl);
  }
}
function MediaWorksDetailedViewComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 4)(2, "nav", 5)(3, "a", 6);
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "snakeToWords");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "header", 8)(15, "h1", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MediaWorksDetailedViewComponent_section_0_p_17_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275template(19, MediaWorksDetailedViewComponent_section_0_span_19_Template, 2, 1, "span", 12)(20, MediaWorksDetailedViewComponent_section_0_span_20_Template, 3, 3, "span", 13)(21, MediaWorksDetailedViewComponent_section_0_span_21_Template, 3, 4, "span", 14)(22, MediaWorksDetailedViewComponent_section_0_span_22_Template, 3, 4, "span", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16);
    \u0275\u0275template(24, MediaWorksDetailedViewComponent_section_0_figure_24_Template, 3, 3, "figure", 17)(25, MediaWorksDetailedViewComponent_section_0_article_25_Template, 5, 1, "article", 18)(26, MediaWorksDetailedViewComponent_section_0_article_26_Template, 6, 1, "article", 19);
    \u0275\u0275elementStart(27, "div", 20);
    \u0275\u0275template(28, MediaWorksDetailedViewComponent_section_0_a_28_Template, 2, 1, "a", 21)(29, MediaWorksDetailedViewComponent_section_0_a_29_Template, 2, 1, "a", 22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const mw_r1 = ctx.ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, mw_r1.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, mw_r1.type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(mw_r1.title || mw_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(mw_r1.title || mw_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.summary);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", mw_r1.categoryName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.created_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.updated_at);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", mw_r1.imageSignedUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.manuscriptSignedUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", mw_r1.youtubeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mw_r1.githubUrl);
  }
}
function MediaWorksDetailedViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function MediaWorksDetailedViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
var MediaWorksDetailedViewComponent = class _MediaWorksDetailedViewComponent {
  route;
  mediaWork = null;
  loading = true;
  error = null;
  sub;
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.sub = this.route.data.subscribe({
      next: (data) => {
        this.mediaWork = data["mediaWork"] || null;
        this.loading = false;
      },
      error: (e) => {
        console.error("[MediaWorksDetailedViewComponent] route data error", e);
        this.error = "Failed to load details";
        this.loading = false;
      }
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  static \u0275fac = function MediaWorksDetailedViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaWorksDetailedViewComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaWorksDetailedViewComponent, selectors: [["app-media-works-detailed-view"]], standalone: false, decls: 3, vars: 3, consts: [["class", "media-work-detailed section-pad", 4, "ngIf"], ["class", "mw-loading", 4, "ngIf"], ["class", "mw-error", 4, "ngIf"], [1, "media-work-detailed", "section-pad"], [1, "section-inner"], [1, "crumbs"], ["routerLink", "/"], [3, "routerLink"], [1, "mw-header"], [1, "mw-title"], ["class", "mw-summary", 4, "ngIf"], [1, "mw-meta"], ["class", "mw-category", 4, "ngIf"], ["class", "mw-status", 4, "ngIf"], ["class", "mw-created", 4, "ngIf"], ["class", "mw-updated", 4, "ngIf"], [1, "mw-body"], ["class", "mw-image", 4, "ngIf"], ["class", "mw-description", 4, "ngIf"], ["class", "mw-manuscript", 4, "ngIf"], [1, "mw-links"], ["target", "_blank", "rel", "noopener", "class", "ext-link youtube", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "ext-link github", 3, "href", 4, "ngIf"], [1, "mw-summary"], [1, "mw-category"], [1, "mw-status"], [1, "mw-created"], [1, "mw-updated"], [1, "mw-image"], [3, "src", "alt"], [4, "ngIf"], [1, "mw-description"], [1, "mw-manuscript"], ["target", "_blank", "rel", "noopener", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "ext-link", "youtube", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "ext-link", "github", 3, "href"], [1, "mw-loading"], [1, "mw-error"]], template: function MediaWorksDetailedViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MediaWorksDetailedViewComponent_section_0_Template, 30, 18, "section", 0)(1, MediaWorksDetailedViewComponent_div_1_Template, 2, 0, "div", 1)(2, MediaWorksDetailedViewComponent_div_2_Template, 2, 1, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mediaWork);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
    }
  }, dependencies: [NgIf, RouterLink, DatePipe, SnakeToWordsPipe], styles: ["\n\n.media-work-detailed[_ngcontent-%COMP%]   .crumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .crumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4a6cf7;\n  text-decoration: none;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-header[_ngcontent-%COMP%]   .mw-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 0.5rem;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-header[_ngcontent-%COMP%]   .mw-summary[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #555;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-header[_ngcontent-%COMP%]   .mw-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #666;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-header[_ngcontent-%COMP%]   .mw-status[_ngcontent-%COMP%] {\n  background: #eef;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-header[_ngcontent-%COMP%]   .mw-category[_ngcontent-%COMP%] {\n  background: #efe;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: minmax(0, 1fr);\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-image[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  display: block;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n  margin-top: 0.5rem;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-description[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-manuscript[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4a6cf7;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-links[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  gap: 1rem;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-links[_ngcontent-%COMP%]   .ext-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-links[_ngcontent-%COMP%]   .ext-link.youtube[_ngcontent-%COMP%] {\n  color: #c4302b;\n}\n.media-work-detailed[_ngcontent-%COMP%]   .mw-links[_ngcontent-%COMP%]   .ext-link.github[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mw-loading[_ngcontent-%COMP%], \n.mw-error[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n.mw-error[_ngcontent-%COMP%] {\n  color: #c00;\n}\n/*# sourceMappingURL=media-works-detailed-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaWorksDetailedViewComponent, [{
    type: Component,
    args: [{ selector: "app-media-works-detailed-view", standalone: false, template: `<section class="media-work-detailed section-pad" *ngIf="!loading && mediaWork as mw">
  <div class="section-inner">
    <nav class="crumbs">
      <a routerLink="/">Home</a>
      <span>/</span>
      <a [routerLink]="['/', mw.type]">{{ mw.type | snakeToWords }}</a>
      <span>/</span>
      <span>{{ mw.title || mw.name }}</span>
    </nav>

    <header class="mw-header">
      <h1 class="mw-title">{{ mw.title || mw.name }}</h1>
      <p class="mw-summary" *ngIf="mw.summary">{{ mw.summary }}</p>
      <div class="mw-meta">
        <span *ngIf="mw.categoryName" class="mw-category">{{ mw.categoryName }}</span>
        <span *ngIf="mw.status" class="mw-status">{{ mw.status | snakeToWords }}</span>
        <span *ngIf="mw.created_at" class="mw-created">Created: {{ mw.created_at | date:'mediumDate' }}</span>
        <span *ngIf="mw.updated_at" class="mw-updated">Updated: {{ mw.updated_at | date:'mediumDate' }}</span>
      </div>
    </header>

    <div class="mw-body">
      <figure class="mw-image" *ngIf="mw.imageSignedUrl">
        <img [src]="mw.imageSignedUrl" [alt]="mw.title || mw.name" />
        <figcaption *ngIf="mw.title">{{ mw.title }}</figcaption>
      </figure>

      <article class="mw-description" *ngIf="mw.description">
        <h2>Description</h2>
        <p>{{ mw.description }}</p>
      </article>

      <article class="mw-manuscript" *ngIf="mw.manuscriptSignedUrl">
        <h2>Research Manuscript</h2>
        <p>
          <a [href]="mw.manuscriptSignedUrl" target="_blank" rel="noopener">Open manuscript (signed link)</a>
        </p>
      </article>

      <div class="mw-links">
        <a *ngIf="mw.youtubeUrl" [href]="mw.youtubeUrl" target="_blank" rel="noopener" class="ext-link youtube">YouTube</a>
        <a *ngIf="mw.githubUrl" [href]="mw.githubUrl" target="_blank" rel="noopener" class="ext-link github">GitHub</a>
      </div>
    </div>
  </div>
</section>

<div *ngIf="loading" class="mw-loading">Loading...</div>
<div *ngIf="!loading && error" class="mw-error">{{ error }}</div>
`, styles: ["/* src/app/components/media-works-detailed-view/media-works-detailed-view.component.scss */\n.media-work-detailed .crumbs {\n  display: flex;\n  gap: 0.25rem;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.media-work-detailed .crumbs a {\n  color: #4a6cf7;\n  text-decoration: none;\n}\n.media-work-detailed .mw-header {\n  margin-bottom: 2rem;\n}\n.media-work-detailed .mw-header .mw-title {\n  font-size: 2rem;\n  margin: 0 0 0.5rem;\n}\n.media-work-detailed .mw-header .mw-summary {\n  font-size: 1.125rem;\n  color: #555;\n}\n.media-work-detailed .mw-header .mw-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #666;\n}\n.media-work-detailed .mw-header .mw-status {\n  background: #eef;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.media-work-detailed .mw-header .mw-category {\n  background: #efe;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.media-work-detailed .mw-body {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: minmax(0, 1fr);\n}\n.media-work-detailed .mw-image {\n  max-width: 640px;\n}\n.media-work-detailed .mw-image img {\n  width: 100%;\n  border-radius: 8px;\n  display: block;\n}\n.media-work-detailed .mw-image figcaption {\n  font-size: 0.75rem;\n  color: #666;\n  margin-top: 0.5rem;\n}\n.media-work-detailed .mw-description {\n  line-height: 1.5;\n}\n.media-work-detailed .mw-manuscript a {\n  color: #4a6cf7;\n}\n.media-work-detailed .mw-links {\n  margin-top: 1rem;\n  display: flex;\n  gap: 1rem;\n}\n.media-work-detailed .mw-links .ext-link {\n  text-decoration: none;\n  font-weight: 600;\n}\n.media-work-detailed .mw-links .ext-link.youtube {\n  color: #c4302b;\n}\n.media-work-detailed .mw-links .ext-link.github {\n  color: #24292e;\n}\n.mw-loading,\n.mw-error {\n  padding: 2rem;\n  text-align: center;\n}\n.mw-error {\n  color: #c00;\n}\n/*# sourceMappingURL=media-works-detailed-view.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaWorksDetailedViewComponent, { className: "MediaWorksDetailedViewComponent", filePath: "src/app/components/media-works-detailed-view/media-works-detailed-view.component.ts", lineNumber: 12 });
})();

// src/app/components/media-works-detailed-view/media-works-shared.module.ts
var MediaWorksSharedModule = class _MediaWorksSharedModule {
  static \u0275fac = function MediaWorksSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaWorksSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MediaWorksSharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaWorksSharedModule, [{
    type: NgModule,
    args: [{
      declarations: [MediaWorksDetailedViewComponent],
      imports: [CommonModule, RouterModule, SnakeToWordsPipe],
      exports: [MediaWorksDetailedViewComponent]
    }]
  }], null, null);
})();

// src/app/resolvers/media-work-detailed.resolver.ts
var MediaWorkDetailedResolver = class _MediaWorkDetailedResolver {
  mediaWorkService;
  constructor(mediaWorkService) {
    this.mediaWorkService = mediaWorkService;
  }
  resolve(route) {
    const id = route.paramMap.get("id");
    if (!id)
      return of(null);
    return this.mediaWorkService.getById(id).pipe(switchMap((mw) => this.mediaWorkService.listWithSignedUrls(mw.type).pipe(map((list) => list.find((x) => x.id === mw.id) || mw))));
  }
  static \u0275fac = function MediaWorkDetailedResolver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaWorkDetailedResolver)(\u0275\u0275inject(MediaWorkService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaWorkDetailedResolver, factory: _MediaWorkDetailedResolver.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaWorkDetailedResolver, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: MediaWorkService }], null);
})();

export {
  MediaWorksDetailedViewComponent,
  MediaWorkDetailedResolver,
  MediaWorksSharedModule
};
//# sourceMappingURL=chunk-UBJBNPP3.js.map
