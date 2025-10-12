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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6SZYEMSY.js";

// src/app/modules/projects/projects.component.ts
var _c0 = (a0) => ["/projects", a0];
function ProjectsComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ProjectsComponent_button_10_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProjectCategory(c_r2.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", c_r2.name === ctx_r2.selectedProjectCategory);
    \u0275\u0275attribute("aria-selected", c_r2.name === ctx_r2.selectedProjectCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.name, " ");
  }
}
function ProjectsComponent_article_12_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("alt", "", p_r4.title, " image");
    \u0275\u0275property("src", p_r4.imageSignedUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProjectsComponent_article_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, " YouTube ");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_article_12_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, " GitHub ");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_article_12_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "snakeToWords");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, p_r4.status));
  }
}
function ProjectsComponent_article_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 11)(1, "div", 12);
    \u0275\u0275template(2, ProjectsComponent_article_12_img_2_Template, 1, 3, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "h3", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "div", 18);
    \u0275\u0275template(10, ProjectsComponent_article_12_span_10_Template, 2, 0, "span", 19)(11, ProjectsComponent_article_12_span_11_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProjectsComponent_article_12_span_12_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 22)(14, "button", 23);
    \u0275\u0275text(15, " See details ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r4.imageSignedUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.summary);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r4.youtubeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.githubUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, p_r4.id));
  }
}
var ProjectsComponent = class _ProjectsComponent {
  categoryService;
  mediaWorkService;
  // NOTE: Each MediaWork now may contain imageSignedUrl / manuscriptSignedUrl (ephemeral) for direct display
  projectCategories = [];
  selectedProjectCategory = "All";
  loadingCategories = false;
  categoryError = null;
  projects = [];
  loadingProjects = false;
  projectsError = null;
  constructor(categoryService, mediaWorkService) {
    this.categoryService = categoryService;
    this.mediaWorkService = mediaWorkService;
    this.loadCategories();
    this.loadProjects();
  }
  loadProjects() {
    this.loadingProjects = true;
    this.mediaWorkService.listWithSignedUrls("projects").subscribe({
      next: (items) => {
        this.projects = items;
        this.loadingProjects = false;
      },
      error: (e) => {
        console.error("[ProjectsComponent] media works load error", e);
        this.projectsError = "Failed to load projects";
        this.loadingProjects = false;
      }
    });
  }
  loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.projectCategories = cats;
        this.loadingCategories = false;
      },
      error: (e) => {
        console.error("[ProjectsComponent] categories load error", e);
        this.categoryError = "Failed to load categories";
        this.loadingCategories = false;
      }
    });
  }
  get filteredProjects() {
    if (this.selectedProjectCategory === "All")
      return this.projects;
    return this.projects.filter((p) => p.categoryName === this.selectedProjectCategory);
  }
  selectProjectCategory(cat) {
    this.selectedProjectCategory = cat;
  }
  trackProject = (_, p) => p.id;
  static \u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(MediaWorkService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: false, decls: 13, vars: 3, consts: [["id", "projects", 1, "projects-section", "section-pad"], [1, "section-inner"], [1, "section-header"], [1, "section-eyebrow"], [1, "section-title"], [1, "section-sub"], ["role", "tablist", "aria-label", "Project categories", 1, "tag-pills"], ["class", "pill", "role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "project-grid"], ["class", "project-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "tab", 1, "pill", 3, "click"], [1, "project-card"], [1, "proj-thumb"], [3, "src", "alt", 4, "ngIf"], [1, "proj-body"], [1, "proj-title"], [1, "proj-description"], [1, "proj-meta"], [1, "badge-row"], ["class", "media-badge youtube", 4, "ngIf"], ["class", "media-badge github", 4, "ngIf"], ["class", "proj-status", 4, "ngIf"], [1, "proj-actions"], [1, "see-details-btn", 3, "routerLink"], [3, "src", "alt"], [1, "media-badge", "youtube"], [1, "media-badge", "github"], [1, "proj-status"]], template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Explore the Research Work We Do");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " We have the Teams of Scientists & Engineers conducting Research & Development on improving Infrastructure, Systems, Platforms, etc. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275template(10, ProjectsComponent_button_10_Template, 2, 4, "button", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, ProjectsComponent_article_12_Template, 16, 9, "article", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.projectCategories);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredProjects)("ngForTrackBy", ctx.trackProject);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, SnakeToWordsPipe], styles: ['\n\n.project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.9rem;\n  margin-top: 1.25rem;\n}\n@media (min-width: 1180px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.project-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      155deg,\n      #e4e4e4,\n      #c8c8c8);\n  border-radius: 20px;\n  padding: 1rem 0.95rem 1.1rem;\n  box-shadow: 0 10px 28px -10px rgba(0, 0, 0, 0.35), 0 4px 14px -6px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  isolation: isolate;\n  position: relative;\n  transition: 0.35s transform, 0.35s box-shadow;\n}\n.project-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      rgba(255, 255, 255, 0.85),\n      rgba(255, 255, 255, 0));\n  z-index: 0;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.4), 0 6px 18px -8px rgba(0, 0, 0, 0.22);\n}\n.proj-thumb[_ngcontent-%COMP%] {\n  height: 110px;\n  border-radius: 14px;\n  overflow: hidden;\n  filter: brightness(0.65);\n  margin-bottom: 0.85rem;\n}\n.proj-body[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.proj-title[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  line-height: 1.05rem;\n  margin: 0 0 0.45rem;\n  color: #141414;\n}\n.proj-blurb[_ngcontent-%COMP%] {\n  font-size: 0.53rem;\n  line-height: 0.88rem;\n  font-weight: 500;\n  color: #242424;\n  margin: 0 0 0.75rem;\n}\n.proj-meta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.media-badge[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 0.4rem 0.6rem;\n  background: #ffffff;\n  border: 1px solid #c9c9c9;\n  border-radius: 1000px;\n  letter-spacing: 0.3px;\n  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.25);\n}\n.media-badge.youtube[_ngcontent-%COMP%] {\n  background: #ff0000;\n  color: #fff;\n  border-color: #ff0000;\n}\n.media-badge.github[_ngcontent-%COMP%] {\n  background: #171717;\n  color: #fff;\n  border-color: #171717;\n}\n.proj-status[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 0.35rem 0.55rem;\n  background: #1b1b1b;\n  color: #fff;\n  border-radius: 1000px;\n  letter-spacing: 0.4px;\n}\n/*# sourceMappingURL=projects.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", standalone: false, template: `<!-- Projects Section (data-driven) -->
<section id="projects" class="projects-section section-pad">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-eyebrow">Projects</span>
      <h2 class="section-title">Explore the Research Work We Do</h2>
      <p class="section-sub">
        We have the Teams of Scientists & Engineers conducting Research &
        Development on improving Infrastructure, Systems, Platforms, etc.
      </p>
      <div class="tag-pills" role="tablist" aria-label="Project categories">
        <button
          *ngFor="let c of projectCategories"
          class="pill"
          [class.active]="c.name === selectedProjectCategory"
          (click)="selectProjectCategory(c.name)"
          role="tab"
          [attr.aria-selected]="c.name === selectedProjectCategory"
        >
          {{ c.name }}
        </button>
      </div>
    </div>
    <div class="project-grid">
      <article
        *ngFor="let p of filteredProjects; trackBy: trackProject"
        class="project-card"
      >
        <div class="proj-thumb">
          <img
            *ngIf="p.imageSignedUrl"
            [src]="p.imageSignedUrl"
            alt="{{ p.title }} image"
          />
        </div>
        <div class="proj-body">
          <h3 class="proj-title">{{ p.title }}</h3>
          <p class="proj-description">{{ p.summary }}</p>
          <div class="proj-meta">
            <div class="badge-row">
              <span *ngIf="p.youtubeUrl" class="media-badge youtube">
                YouTube
              </span>
              <span *ngIf="p.githubUrl" class="media-badge github">
                GitHub
              </span>
            </div>
            <span *ngIf="p.status" class="proj-status">{{
              p.status | snakeToWords
            }}</span>
          </div>
          <div class="proj-actions">
            <button class="see-details-btn" [routerLink]="['/projects', p.id]">
              See details
            </button>
          </div>
        </div>
      </article>
    </div>
    <!-- <div class="more-row">
      <button class="more-btn">Explore More Projects</button>
    </div> -->
  </div>
</section>
`, styles: ['/* src/app/modules/projects/projects.component.scss */\n.project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.9rem;\n  margin-top: 1.25rem;\n}\n@media (min-width: 1180px) {\n  .project-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.project-card {\n  background:\n    linear-gradient(\n      155deg,\n      #e4e4e4,\n      #c8c8c8);\n  border-radius: 20px;\n  padding: 1rem 0.95rem 1.1rem;\n  box-shadow: 0 10px 28px -10px rgba(0, 0, 0, 0.35), 0 4px 14px -6px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  isolation: isolate;\n  position: relative;\n  transition: 0.35s transform, 0.35s box-shadow;\n}\n.project-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      rgba(255, 255, 255, 0.85),\n      rgba(255, 255, 255, 0));\n  z-index: 0;\n}\n.project-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.4), 0 6px 18px -8px rgba(0, 0, 0, 0.22);\n}\n.proj-thumb {\n  height: 110px;\n  border-radius: 14px;\n  overflow: hidden;\n  filter: brightness(0.65);\n  margin-bottom: 0.85rem;\n}\n.proj-body {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.proj-title {\n  font-size: 0.68rem;\n  font-weight: 600;\n  line-height: 1.05rem;\n  margin: 0 0 0.45rem;\n  color: #141414;\n}\n.proj-blurb {\n  font-size: 0.53rem;\n  line-height: 0.88rem;\n  font-weight: 500;\n  color: #242424;\n  margin: 0 0 0.75rem;\n}\n.proj-meta {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.badge-row {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.media-badge {\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 0.4rem 0.6rem;\n  background: #ffffff;\n  border: 1px solid #c9c9c9;\n  border-radius: 1000px;\n  letter-spacing: 0.3px;\n  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.25);\n}\n.media-badge.youtube {\n  background: #ff0000;\n  color: #fff;\n  border-color: #ff0000;\n}\n.media-badge.github {\n  background: #171717;\n  color: #fff;\n  border-color: #171717;\n}\n.proj-status {\n  font-size: 0.5rem;\n  font-weight: 600;\n  padding: 0.35rem 0.55rem;\n  background: #1b1b1b;\n  color: #fff;\n  border-radius: 1000px;\n  letter-spacing: 0.4px;\n}\n/*# sourceMappingURL=projects.component.css.map */\n'] }]
  }], () => [{ type: CategoryService }, { type: MediaWorkService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/modules/projects/projects.component.ts", lineNumber: 11 });
})();

// src/app/modules/projects/projects-routing.module.ts
var routes = [
  { path: "", component: ProjectsComponent },
  {
    path: ":id",
    component: MediaWorksDetailedViewComponent,
    resolve: { mediaWork: MediaWorkDetailedResolver }
  }
];
var ProjectsRoutingModule = class _ProjectsRoutingModule {
  static \u0275fac = function ProjectsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/projects/projects.module.ts
var ProjectsModule = class _ProjectsModule {
  static \u0275fac = function ProjectsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProjectsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ProjectsRoutingModule, MediaWorksSharedModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsModule, [{
    type: NgModule,
    args: [{
      declarations: [ProjectsComponent],
      imports: [CommonModule, ProjectsRoutingModule, SnakeToWordsPipe, MediaWorksSharedModule],
      exports: [ProjectsComponent]
    }]
  }], null, null);
})();

export {
  ProjectsComponent,
  ProjectsModule
};
//# sourceMappingURL=chunk-5CUA7KOG.js.map
