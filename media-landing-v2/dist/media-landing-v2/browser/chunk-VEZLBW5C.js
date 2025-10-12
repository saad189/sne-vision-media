import {
  UseCasesComponent,
  UseCasesModule
} from "./chunk-ANRY7YLR.js";
import {
  ProjectsComponent,
  ProjectsModule
} from "./chunk-5CUA7KOG.js";
import "./chunk-UBJBNPP3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-BLROKSBC.js";
import {
  EcosystemService,
  EventService,
  HeroListService,
  ToastrNotificationService,
  TopMindsService
} from "./chunk-JUIE7TJN.js";
import "./chunk-E3Q73E44.js";
import "./chunk-V72RMYHE.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  ElementRef,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6SZYEMSY.js";
import "./chunk-S35DAJRX.js";

// src/app/modules/community/community.component.ts
function CommunityComponent_article_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, t_r1.date, "MMM, yyyy"), " ");
  }
}
function CommunityComponent_article_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8)(1, "p", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CommunityComponent_article_10_div_5_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.quote);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.author);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r1.date);
  }
}
var CommunityComponent = class _CommunityComponent {
  topMinds;
  testimonials = [];
  loading = false;
  error;
  constructor(topMinds) {
    this.topMinds = topMinds;
  }
  ngOnInit() {
    this.fetchTestimonials();
  }
  fetchTestimonials() {
    this.loading = true;
    this.topMinds.listWithSigned().subscribe({
      next: (items) => {
        this.testimonials = (items || []).filter((tm) => !!tm.quote).map((tm) => ({
          id: tm.id,
          quote: tm.quote || "",
          date: tm.quote_date || void 0,
          author: tm.name,
          role: tm.title || tm.field || void 0
        }));
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message || "Failed to load testimonials";
        this.loading = false;
      }
    });
  }
  trackTestimonial = (_, t) => t.id;
  static \u0275fac = function CommunityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityComponent)(\u0275\u0275directiveInject(TopMindsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommunityComponent, selectors: [["app-community"]], standalone: false, decls: 11, vars: 2, consts: [["id", "community", 1, "testimonials-section", "section-pad"], [1, "section-inner"], [1, "section-header"], [1, "section-eyebrow"], [1, "section-title"], [1, "section-sub"], ["role", "list", 1, "testimonial-row"], ["class", "testimonial-card", "role", "listitem", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "listitem", 1, "testimonial-card"], [1, "t-quote"], [1, "t-author"], ["class", "t-date", 4, "ngIf"], [1, "t-date"]], template: function CommunityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Community");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Top Minds across Industries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " We love working on problems with the best people, we are building an Open-Source Platform for our community, comprising of top minds to solve the citizen challenges and solve them with Science, Engineering & Technology. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275template(10, CommunityComponent_article_10_Template, 6, 3, "article", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.testimonials)("ngForTrackBy", ctx.trackTestimonial);
    }
  }, dependencies: [NgForOf, NgIf, DatePipe], styles: ["\n\n.testimonials-section[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n}\n.testimonial-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  padding: 0.25rem 0.5rem 0;\n  scrollbar-width: none;\n}\n.testimonial-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  flex: 0 0 180px;\n  background: #fff;\n  border-radius: 18px;\n  padding: 0.9rem 0.8rem 1rem;\n  box-shadow: 0 6px 20px -8px rgba(0, 0, 0, 0.25), 0 3px 8px -4px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 150px;\n  position: relative;\n}\n.t-quote[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  line-height: 0.85rem;\n  font-weight: 500;\n  color: #1e1e1e;\n  margin: 0 0 0.65rem;\n}\n.t-author[_ngcontent-%COMP%] {\n  font-size: 0.48rem;\n  font-weight: 600;\n  color: #111;\n  line-height: 0.7rem;\n}\n.t-date[_ngcontent-%COMP%] {\n  font-size: 0.46rem;\n  font-weight: 500;\n  color: #555;\n  margin-top: 0.25rem;\n}\n@media (min-width: 1100px) {\n  .testimonial-card[_ngcontent-%COMP%] {\n    flex: 0 0 170px;\n  }\n}\n/*# sourceMappingURL=community.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityComponent, [{
    type: Component,
    args: [{ selector: "app-community", standalone: false, template: '<!-- Testimonials / Community Minds Section -->\n<section id="community" class="testimonials-section section-pad">\n  <div class="section-inner">\n    <div class="section-header">\n      <span class="section-eyebrow">Community</span>\n      <h2 class="section-title">Top Minds across Industries</h2>\n      <p class="section-sub">\n        We love working on problems with the best people, we are building an\n        Open-Source Platform for our community, comprising of top minds to solve\n        the citizen challenges and solve them with Science, Engineering &\n        Technology.\n      </p>\n    </div>\n    <div class="testimonial-row" role="list">\n      <article\n        *ngFor="let t of testimonials; trackBy: trackTestimonial"\n        class="testimonial-card"\n        role="listitem"\n      >\n        <p class="t-quote">{{ t.quote }}</p>\n        <div class="t-author">{{ t.author }}</div>\n        <div *ngIf="t.date" class="t-date">\n          {{ t.date | date : "MMM, yyyy" }}\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/modules/community/community.component.scss */\n.testimonials-section {\n  background: #e9e9e9;\n}\n.testimonial-row {\n  display: flex;\n  gap: 1rem;\n  overflow-x: auto;\n  padding: 0.25rem 0.5rem 0;\n  scrollbar-width: none;\n}\n.testimonial-row::-webkit-scrollbar {\n  display: none;\n}\n.testimonial-card {\n  flex: 0 0 180px;\n  background: #fff;\n  border-radius: 18px;\n  padding: 0.9rem 0.8rem 1rem;\n  box-shadow: 0 6px 20px -8px rgba(0, 0, 0, 0.25), 0 3px 8px -4px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 150px;\n  position: relative;\n}\n.t-quote {\n  font-size: 0.5rem;\n  line-height: 0.85rem;\n  font-weight: 500;\n  color: #1e1e1e;\n  margin: 0 0 0.65rem;\n}\n.t-author {\n  font-size: 0.48rem;\n  font-weight: 600;\n  color: #111;\n  line-height: 0.7rem;\n}\n.t-date {\n  font-size: 0.46rem;\n  font-weight: 500;\n  color: #555;\n  margin-top: 0.25rem;\n}\n@media (min-width: 1100px) {\n  .testimonial-card {\n    flex: 0 0 170px;\n  }\n}\n/*# sourceMappingURL=community.component.css.map */\n"] }]
  }], () => [{ type: TopMindsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommunityComponent, { className: "CommunityComponent", filePath: "src/app/modules/community/community.component.ts", lineNumber: 12 });
})();

// src/app/modules/events/events.component.ts
function EventsComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "img", 34);
    \u0275\u0275listener("error", function EventsComponent_div_10_ng_container_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ev_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ev_r3.image_signed_url + ")");
    \u0275\u0275advance();
    \u0275\u0275property("src", ev_r3.image_signed_url, \u0275\u0275sanitizeUrl)("alt", ev_r3.name);
  }
}
function EventsComponent_div_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 35);
  }
}
function EventsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, EventsComponent_div_10_ng_container_1_Template, 3, 4, "ng-container", 30)(2, EventsComponent_div_10_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ev_r3 = ctx.$implicit;
    const fallbackImg_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ev_r3.image_signed_url)("ngIfElse", fallbackImg_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ev_r3.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, ev_r3.starts_at, "mediumDate"));
  }
}
var EventsComponent = class _EventsComponent {
  eventService;
  events = [];
  loading = false;
  error;
  constructor(eventService) {
    this.eventService = eventService;
  }
  ngOnInit() {
    this.fetch();
  }
  fetch() {
    this.loading = true;
    this.eventService.listWithSigned().subscribe({
      next: (list) => {
        this.events = list;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message || "Failed to load events";
        this.loading = false;
      }
    });
  }
  onImgError(evt) {
    const el = evt?.target;
    if (el) {
      el.style.display = "none";
    }
  }
  static \u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsComponent)(\u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], standalone: false, decls: 76, vars: 1, consts: [["fallbackImg", ""], ["id", "events", 1, "seminars-section", "section-pad"], [1, "section-inner"], [1, "section-header"], [1, "section-eyebrow"], [1, "section-title"], [1, "section-sub"], ["role", "list", 1, "seminar-tiles"], ["class", "seminar-tile", "role", "listitem", 4, "ngFor", "ngForOf"], [1, "events-section", "py-16", "bg-gray-100"], [1, "container", "mx-auto"], [1, "text-3xl", "font-bold", "text-center", "mb-12"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-lg", "transition", "duration-300"], [1, "p-6"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "px-4", "py-1", "bg-blue-100", "text-blue-800", "rounded-full", "text-sm", "font-medium"], [1, "text-sm", "text-gray-500"], [1, "text-xl", "font-semibold", "mb-3"], [1, "text-gray-600", "mb-4"], [1, "flex", "items-center", "text-sm", "text-gray-500"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "w-full", "mt-6", "px-4", "py-2", "border", "border-blue-600", "text-blue-600", "rounded", "hover:bg-blue-50", "transition", "duration-300"], [1, "px-4", "py-1", "bg-green-100", "text-green-800", "rounded-full", "text-sm", "font-medium"], [1, "px-4", "py-1", "bg-purple-100", "text-purple-800", "rounded-full", "text-sm", "font-medium"], [1, "text-center", "mt-10"], ["href", "#", 1, "text-blue-600", "hover:underline", "font-medium"], ["role", "listitem", 1, "seminar-tile"], [4, "ngIf", "ngIfElse"], [1, "tile-caption"], [1, "tile-date"], ["aria-hidden", "true", 1, "tile-img", "has-image"], ["loading", "lazy", 3, "error", "src", "alt"], ["aria-hidden", "true", 1, "tile-img"]], template: function EventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
      \u0275\u0275text(4, "Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 5);
      \u0275\u0275text(6, "Seminars & Get-Togethers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " Join our events held in universities across Pakistan and abroad. Meet brilliant minds of tomorrow and experts of today to tackle real challenges. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275template(10, EventsComponent_div_10_Template, 10, 7, "div", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 9)(12, "div", 10)(13, "h2", 11);
      \u0275\u0275text(14, "Upcoming Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "span", 16);
      \u0275\u0275text(20, "Workshop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 17);
      \u0275\u0275text(22, "Aug 15, 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "h3", 18);
      \u0275\u0275text(24, " Media Production Masterclass ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 19);
      \u0275\u0275text(26, " Learn advanced techniques from industry experts in this hands-on workshop. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 21);
      \u0275\u0275element(29, "path", 22)(30, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Online Event");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 24);
      \u0275\u0275text(34, " Register Now ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 13)(36, "div", 14)(37, "div", 15)(38, "span", 25);
      \u0275\u0275text(39, "Conference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 17);
      \u0275\u0275text(41, "Sep 22, 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "h3", 18);
      \u0275\u0275text(43, "Future of Media Summit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 19);
      \u0275\u0275text(45, " Join industry leaders for discussions on emerging trends and technologies. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 21);
      \u0275\u0275element(48, "path", 22)(49, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "New York, NY");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "button", 24);
      \u0275\u0275text(53, " Register Now ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 13)(55, "div", 14)(56, "div", 15)(57, "span", 26);
      \u0275\u0275text(58, "Networking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 17);
      \u0275\u0275text(60, "Oct 5, 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "h3", 18);
      \u0275\u0275text(62, "Creator Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 19);
      \u0275\u0275text(64, " A networking event designed to connect content creators with industry opportunities. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 21);
      \u0275\u0275element(67, "path", 22)(68, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Chicago, IL");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "button", 24);
      \u0275\u0275text(72, " Register Now ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 27)(74, "a", 28);
      \u0275\u0275text(75, "View all upcoming events \u2192");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.events);
    }
  }, dependencies: [NgForOf, NgIf, DatePipe], styles: ["\n\n.seminars-section[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n}\n.seminar-tiles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3.2rem;\n  justify-content: flex-start;\n}\n.seminar-tile[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 160px;\n}\n.seminar-tile[_ngcontent-%COMP%]   .tile-img[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  background: #c6c6c6;\n  border-radius: 16px;\n  margin: 0 auto 0.65rem;\n  box-shadow: 0 8px 22px -10px rgba(0, 0, 0, 0.28), 0 4px 10px -4px rgba(0, 0, 0, 0.16);\n}\n.tile-caption[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  line-height: 0.75rem;\n  font-weight: 600;\n  color: #141414;\n}\n.tile-date[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #444;\n  margin-top: 0.2rem;\n}\n/*# sourceMappingURL=events.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsComponent, [{
    type: Component,
    args: [{ selector: "app-events", standalone: false, template: `<!-- Events / Seminars Unified Section -->
<section id="events" class="seminars-section section-pad">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-eyebrow">Events</span>
      <h2 class="section-title">Seminars & Get-Togethers</h2>
      <p class="section-sub">
        Join our events held in universities across Pakistan and abroad. Meet
        brilliant minds of tomorrow and experts of today to tackle real
        challenges.
      </p>
    </div>
    <div class="seminar-tiles" role="list">
      <div *ngFor="let ev of events" class="seminar-tile" role="listitem">
        <ng-container *ngIf="ev.image_signed_url; else fallbackImg">
          <div
            class="tile-img has-image"
            aria-hidden="true"
            [style.backgroundImage]="'url(' + ev.image_signed_url + ')'"
          >
            <img
              [src]="ev.image_signed_url"
              [alt]="ev.name"
              loading="lazy"
              (error)="onImgError($event)"
            />
          </div>
        </ng-container>
        <ng-template #fallbackImg>
          <div class="tile-img" aria-hidden="true"></div>
        </ng-template>
        <div class="tile-caption">
          {{ ev.name }}<br /><span class="tile-date">{{
            ev.starts_at | date : "mediumDate"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Events Section -->
<section class="events-section py-16 bg-gray-100">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Event Card 1 -->
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span
              class="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >Workshop</span
            >
            <span class="text-sm text-gray-500">Aug 15, 2025</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">
            Media Production Masterclass
          </h3>
          <p class="text-gray-600 mb-4">
            Learn advanced techniques from industry experts in this hands-on
            workshop.
          </p>
          <div class="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Online Event</span>
          </div>
          <button
            class="w-full mt-6 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300"
          >
            Register Now
          </button>
        </div>
      </div>

      <!-- Event Card 2 -->
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span
              class="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >Conference</span
            >
            <span class="text-sm text-gray-500">Sep 22, 2025</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">Future of Media Summit</h3>
          <p class="text-gray-600 mb-4">
            Join industry leaders for discussions on emerging trends and
            technologies.
          </p>
          <div class="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>New York, NY</span>
          </div>
          <button
            class="w-full mt-6 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300"
          >
            Register Now
          </button>
        </div>
      </div>

      <!-- Event Card 3 -->
      <div
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span
              class="px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
              >Networking</span
            >
            <span class="text-sm text-gray-500">Oct 5, 2025</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">Creator Connect</h3>
          <p class="text-gray-600 mb-4">
            A networking event designed to connect content creators with
            industry opportunities.
          </p>
          <div class="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Chicago, IL</span>
          </div>
          <button
            class="w-full mt-6 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition duration-300"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-10">
      <a href="#" class="text-blue-600 hover:underline font-medium"
        >View all upcoming events \u2192</a
      >
    </div>
  </div>
</section>
`, styles: ["/* src/app/modules/events/events.component.scss */\n.seminars-section {\n  background: #e9e9e9;\n}\n.seminar-tiles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3.2rem;\n  justify-content: flex-start;\n}\n.seminar-tile {\n  text-align: center;\n  width: 160px;\n}\n.seminar-tile .tile-img {\n  width: 160px;\n  height: 160px;\n  background: #c6c6c6;\n  border-radius: 16px;\n  margin: 0 auto 0.65rem;\n  box-shadow: 0 8px 22px -10px rgba(0, 0, 0, 0.28), 0 4px 10px -4px rgba(0, 0, 0, 0.16);\n}\n.tile-caption {\n  font-size: 0.5rem;\n  line-height: 0.75rem;\n  font-weight: 600;\n  color: #141414;\n}\n.tile-date {\n  display: block;\n  font-weight: 500;\n  color: #444;\n  margin-top: 0.2rem;\n}\n/*# sourceMappingURL=events.component.css.map */\n"] }]
  }], () => [{ type: EventService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "src/app/modules/events/events.component.ts", lineNumber: 11 });
})();

// src/app/modules/ecosystem/ecosystem.component.ts
var EcosystemComponent = class _EcosystemComponent {
  fb;
  ecosystemService;
  toastr;
  ecosystemForm;
  formSubmitted = false;
  submitting = false;
  constructor(fb, ecosystemService, toastr) {
    this.fb = fb;
    this.ecosystemService = ecosystemService;
    this.toastr = toastr;
    this.ecosystemForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      designation: [""],
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  submitEcosystem() {
    this.formSubmitted = true;
    if (this.ecosystemForm.invalid || this.submitting)
      return;
    const payload = this.ecosystemForm.value;
    this.submitting = true;
    this.ecosystemService.submit(payload).subscribe({
      next: () => {
        this.toastr.showSuccess("Submitted", "Your message has been received.");
        this.ecosystemForm.reset();
        this.formSubmitted = false;
        this.submitting = false;
      },
      error: (err) => {
        console.error("[EcosystemComponent] submission error", err);
        this.toastr.showError("Error", "Failed to submit. Please try again.");
        this.submitting = false;
      }
    });
  }
  static \u0275fac = function EcosystemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EcosystemComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EcosystemService), \u0275\u0275directiveInject(ToastrNotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcosystemComponent, selectors: [["app-ecosystem"]], standalone: false, decls: 35, vars: 8, consts: [["id", "ecosystem", 1, "ecosystem-form-section", "section-pad"], [1, "section-inner"], [1, "section-header", "mb-0"], [1, "section-eyebrow"], [1, "section-title"], [1, "eco-form-wrapper"], ["aria-hidden", "true", 1, "eco-logo"], ["src", "/assets/images/sne_logo.png", "alt", "Vision Media"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "eco-grid"], [1, "field"], ["for", "eco-name", 1, "sr-only"], ["id", "eco-name", "type", "text", "formControlName", "name", "placeholder", "Name"], ["for", "eco-email", 1, "sr-only"], ["id", "eco-email", "type", "email", "formControlName", "email", "placeholder", "Email"], ["for", "eco-phone", 1, "sr-only"], ["id", "eco-phone", "type", "text", "formControlName", "phone", "placeholder", "Phone"], ["for", "eco-designation", 1, "sr-only"], ["id", "eco-designation", "type", "text", "formControlName", "designation", "placeholder", "Designation"], [1, "field", "textarea-field"], ["for", "eco-message", 1, "sr-only"], ["id", "eco-message", "rows", "3", "formControlName", "message", "placeholder", "Would You Like to Solve a Problem Or Support a Solution, Send Us a Message"], [1, "submit-row"], ["type", "submit", 1, "submit-btn"]], template: function EcosystemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Ecosystem");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Join our Ecosystem");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275element(9, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function EcosystemComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submitEcosystem();
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "label", 13);
      \u0275\u0275text(18, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 10)(21, "label", 15);
      \u0275\u0275text(22, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "label", 17);
      \u0275\u0275text(26, "Designation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 19)(29, "label", 20);
      \u0275\u0275text(30, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "textarea", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 22)(33, "button", 23);
      \u0275\u0275text(34, " Send Message ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.ecosystemForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("invalid", ctx.formSubmitted && ((tmp_1_0 = ctx.ecosystemForm.get("name")) == null ? null : tmp_1_0.invalid));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.formSubmitted && ((tmp_2_0 = ctx.ecosystemForm.get("email")) == null ? null : tmp_2_0.invalid));
      \u0275\u0275advance(12);
      \u0275\u0275classProp("invalid", ctx.formSubmitted && ((tmp_3_0 = ctx.ecosystemForm.get("message")) == null ? null : tmp_3_0.invalid));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-disabled", ctx.ecosystemForm.invalid && ctx.formSubmitted);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.ecosystem-form-section[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n}\n.eco-form-wrapper[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  margin: 0 auto;\n  border-radius: 28px;\n  position: relative;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 10rem;\n  margin: 0 auto;\n}\n.eco-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 0.7rem 0.9rem;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 0.9rem 1rem;\n  background: #fff;\n  border: 1px solid #d2d2d2;\n  border-radius: 8px;\n  outline: none;\n  color: #111;\n  transition:\n    0.2s border,\n    0.2s box-shadow,\n    0.2s background;\n  font-family: inherit;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #111;\n  box-shadow: 0 0 0 2px #111 inset;\n}\n.field[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea.invalid[_ngcontent-%COMP%] {\n  border-color: #d93025;\n  box-shadow: 0 0 0 1px #d93025 inset;\n}\n.textarea-field[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 110px;\n}\n.submit-row[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.1rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.65rem 1.8rem;\n  border: none;\n  border-radius: 1000px;\n  cursor: pointer;\n  letter-spacing: 0.4px;\n  box-shadow: 0 6px 18px -6px rgba(0, 0, 0, 0.45), 0 4px 10px -4px rgba(0, 0, 0, 0.25);\n  transition: 0.25s background, 0.25s transform;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  background: #000;\n  transform: translateY(-2px);\n}\n.submit-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.submit-btn[aria-disabled=true][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible, \ninput[_ngcontent-%COMP%]:focus-visible, \ntextarea[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: 2px;\n}\n@media (max-width: 560px) {\n  .eco-form-wrapper[_ngcontent-%COMP%] {\n    padding: 1.6rem 1.2rem 2rem;\n  }\n  .eco-grid[_ngcontent-%COMP%] {\n    gap: 0.6rem 0.7rem;\n  }\n}\n.pb-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=ecosystem.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcosystemComponent, [{
    type: Component,
    args: [{ selector: "app-ecosystem", standalone: false, template: `<section id="ecosystem" class="ecosystem-form-section section-pad">
  <div class="section-inner">
    <div class="section-header mb-0">
      <span class="section-eyebrow">Ecosystem</span>
      <h2 class="section-title">Join our Ecosystem</h2>
    </div>

    <div class="eco-form-wrapper">
      <div class="eco-logo" aria-hidden="true">
        <img src="/assets/images/sne_logo.png" alt="Vision Media" />
      </div>
      <form
        [formGroup]="ecosystemForm"
        (ngSubmit)="submitEcosystem()"
        novalidate
      >
        <div class="eco-grid">
          <div class="field">
            <label for="eco-name" class="sr-only">Name</label>
            <input
              id="eco-name"
              type="text"
              formControlName="name"
              placeholder="Name"
              [class.invalid]="
                formSubmitted && ecosystemForm.get('name')?.invalid
              "
            />
          </div>
          <div class="field">
            <label for="eco-email" class="sr-only">Email</label>
            <input
              id="eco-email"
              type="email"
              formControlName="email"
              placeholder="Email"
              [class.invalid]="
                formSubmitted && ecosystemForm.get('email')?.invalid
              "
            />
          </div>
          <div class="field">
            <label for="eco-phone" class="sr-only">Phone</label>
            <input
              id="eco-phone"
              type="text"
              formControlName="phone"
              placeholder="Phone"
            />
          </div>
          <div class="field">
            <label for="eco-designation" class="sr-only">Designation</label>
            <input
              id="eco-designation"
              type="text"
              formControlName="designation"
              placeholder="Designation"
            />
          </div>
          <div class="field textarea-field">
            <label for="eco-message" class="sr-only">Message</label>
            <textarea
              id="eco-message"
              rows="3"
              formControlName="message"
              placeholder="Would You Like to Solve a Problem Or Support a Solution, Send Us a Message"
              [class.invalid]="
                formSubmitted && ecosystemForm.get('message')?.invalid
              "
            ></textarea>
          </div>
        </div>
        <div class="submit-row">
          <button
            type="submit"
            class="submit-btn"
            [attr.aria-disabled]="ecosystemForm.invalid && formSubmitted"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
`, styles: ["/* src/app/modules/ecosystem/ecosystem.component.scss */\n.ecosystem-form-section {\n  background: #e9e9e9;\n}\n.eco-form-wrapper {\n  max-width: 40rem;\n  margin: 0 auto;\n  border-radius: 28px;\n  position: relative;\n}\n.eco-logo {\n  width: 10rem;\n  margin: 0 auto;\n}\n.eco-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 0.7rem 0.9rem;\n}\n.field input,\n.field textarea {\n  width: 100%;\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 0.9rem 1rem;\n  background: #fff;\n  border: 1px solid #d2d2d2;\n  border-radius: 8px;\n  outline: none;\n  color: #111;\n  transition:\n    0.2s border,\n    0.2s box-shadow,\n    0.2s background;\n  font-family: inherit;\n}\n.field input:focus,\n.field textarea:focus {\n  border-color: #111;\n  box-shadow: 0 0 0 2px #111 inset;\n}\n.field input.invalid,\n.field textarea.invalid {\n  border-color: #d93025;\n  box-shadow: 0 0 0 1px #d93025 inset;\n}\n.textarea-field {\n  grid-column: 1/-1;\n}\n.field textarea {\n  resize: vertical;\n  min-height: 110px;\n}\n.submit-row {\n  text-align: center;\n  margin-top: 1.1rem;\n}\n.submit-btn {\n  background: #1b1b1b;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.65rem 1.8rem;\n  border: none;\n  border-radius: 1000px;\n  cursor: pointer;\n  letter-spacing: 0.4px;\n  box-shadow: 0 6px 18px -6px rgba(0, 0, 0, 0.45), 0 4px 10px -4px rgba(0, 0, 0, 0.25);\n  transition: 0.25s background, 0.25s transform;\n}\n.submit-btn:hover {\n  background: #000;\n  transform: translateY(-2px);\n}\n.submit-btn:active {\n  transform: translateY(0);\n}\n.submit-btn[aria-disabled=true] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\nbutton:focus-visible,\na:focus-visible,\ninput:focus-visible,\ntextarea:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: 2px;\n}\n@media (max-width: 560px) {\n  .eco-form-wrapper {\n    padding: 1.6rem 1.2rem 2rem;\n  }\n  .eco-grid {\n    gap: 0.6rem 0.7rem;\n  }\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=ecosystem.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EcosystemService }, { type: ToastrNotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcosystemComponent, { className: "EcosystemComponent", filePath: "src/app/modules/ecosystem/ecosystem.component.ts", lineNumber: 12 });
})();

// src/app/components/hero-carousel/hero-carousel.component.ts
var _c0 = [[["", "carousel-cta", ""]]];
var _c1 = ["[carousel-cta]"];
function HeroCarouselComponent_div_3_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.description);
  }
}
function HeroCarouselComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "h1", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HeroCarouselComponent_div_3_p_5_Template, 2, 1, "p", 12);
    \u0275\u0275projection(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r2 === ctx_r2.currentSlide);
    \u0275\u0275attribute("aria-label", s_r1.name)("data-bg", s_r1.image_signed_url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r1.description);
  }
}
function HeroCarouselComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function HeroCarouselComponent_button_9_Template_button_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToSlide(i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r5 === ctx_r2.currentSlide);
    \u0275\u0275attribute("aria-label", "Go to slide " + (i_r5 + 1))("aria-selected", i_r5 === ctx_r2.currentSlide);
  }
}
var HeroCarouselComponent = class _HeroCarouselComponent {
  host;
  slides = [];
  autoPlayDelay = 6e3;
  pauseOnHover = true;
  enableKeyboard = true;
  currentSlide = 0;
  autoTimer;
  observer;
  hovered = false;
  viewInited = false;
  constructor(host) {
    this.host = host;
  }
  ngOnInit() {
    this.startAutoplay();
  }
  ngAfterViewInit() {
    this.initLazyBackgrounds();
    if (this.enableKeyboard) {
      window.addEventListener("keydown", this.onKeyDown, { passive: true });
    }
    this.viewInited = true;
  }
  ngOnDestroy() {
    this.clearAutoplay();
    if (this.observer)
      this.observer.disconnect();
    if (this.enableKeyboard) {
      window.removeEventListener("keydown", this.onKeyDown);
    }
  }
  onKeyDown = (e) => {
    if (e.key === "ArrowRight")
      this.nextSlide();
    else if (e.key === "ArrowLeft")
      this.prevSlide();
  };
  goToSlide(index) {
    this.currentSlide = (index + this.slides.length) % this.slides.length;
    this.restartAutoplay();
  }
  nextSlide() {
    this.goToSlide(this.currentSlide + 1);
  }
  prevSlide() {
    this.goToSlide(this.currentSlide - 1);
  }
  startAutoplay() {
    if (!this.autoPlayDelay || this.autoPlayDelay <= 0)
      return;
    this.clearAutoplay();
    this.autoTimer = setInterval(() => {
      if (!this.hovered)
        this.nextSlide();
    }, this.autoPlayDelay);
  }
  clearAutoplay() {
    if (this.autoTimer)
      clearInterval(this.autoTimer);
  }
  restartAutoplay() {
    this.startAutoplay();
  }
  onMouseEnter() {
    if (this.pauseOnHover)
      this.hovered = true;
  }
  onMouseLeave() {
    if (this.pauseOnHover)
      this.hovered = false;
  }
  ngOnChanges(changes) {
    if (changes["slides"]) {
      queueMicrotask(() => {
        if (!this.viewInited)
          return;
        this.observeNewSlides();
      });
    }
  }
  // Lazy load background images: waits until wrapper is intersecting ~150px
  initLazyBackgrounds() {
    const slideEls = this.host.nativeElement.querySelectorAll(".hero-slide[data-bg]");
    if (!("IntersectionObserver" in window)) {
      slideEls.forEach((el) => this.applyBg(el));
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          this.applyBg(el);
          this.observer?.unobserve(el);
        }
      });
    }, { root: null, rootMargin: "150px", threshold: 0.01 });
    slideEls.forEach((el) => this.observer?.observe(el));
  }
  observeNewSlides() {
    if (!this.observer) {
      this.initLazyBackgrounds();
      return;
    }
    const pending = this.host.nativeElement.querySelectorAll(".hero-slide[data-bg]");
    pending.forEach((el) => this.observer?.observe(el));
  }
  applyBg(el) {
    const bg = el.getAttribute("data-bg");
    if (bg) {
      el.style.backgroundImage = `url(${bg})`;
      el.removeAttribute("data-bg");
    }
  }
  static \u0275fac = function HeroCarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroCarouselComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroCarouselComponent, selectors: [["app-hero-carousel"]], inputs: { slides: "slides", autoPlayDelay: "autoPlayDelay", pauseOnHover: "pauseOnHover", enableKeyboard: "enableKeyboard" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 10, vars: 4, consts: [["aria-label", "Featured mission highlights carousel", 1, "hero-carousel-wrapper"], [1, "hero-swiper", 3, "mouseenter", "mouseleave"], [1, "slides-track"], ["class", "hero-slide", "role", "group", 3, "active", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Previous slide", 1, "nav-btn", "prev", 3, "click"], ["type", "button", "aria-label", "Next slide", 1, "nav-btn", "next", 3, "click"], ["role", "tablist", "aria-label", "Carousel pagination", 1, "dots"], ["type", "button", "class", "dot", "role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"], ["role", "group", 1, "hero-slide"], [1, "overlay"], [1, "slide-content"], [1, "slide-title"], ["class", "slide-sub", 4, "ngIf"], [1, "slide-sub"], ["type", "button", "role", "tab", 1, "dot", 3, "click"]], template: function HeroCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275listener("mouseenter", function HeroCarouselComponent_Template_div_mouseenter_1_listener() {
        return ctx.onMouseEnter();
      })("mouseleave", function HeroCarouselComponent_Template_div_mouseleave_1_listener() {
        return ctx.onMouseLeave();
      });
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, HeroCarouselComponent_div_3_Template, 7, 6, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function HeroCarouselComponent_Template_button_click_4_listener() {
        return ctx.prevSlide();
      });
      \u0275\u0275text(5, " \u2039 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function HeroCarouselComponent_Template_button_click_6_listener() {
        return ctx.nextSlide();
      });
      \u0275\u0275text(7, " \u203A ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275template(9, HeroCarouselComponent_button_9_Template, 1, 4, "button", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("transform", "translateX(-" + ctx.currentSlide * 100 + "%)");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.slides);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.slides);
    }
  }, dependencies: [NgForOf, NgIf], styles: ["\n\n.hero-carousel-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: #0f0f0f;\n  --hero-height: clamp(420px, 70vh, 660px);\n}\n.hero-swiper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: var(--hero-height);\n  position: relative;\n  overflow: hidden;\n}\n.slides-track[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: transform 0.75s cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.hero-slide[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-slide[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      220deg,\n      rgba(0, 0, 0, 0.55),\n      rgba(0, 0, 0, 0.25));\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.slide-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 880px;\n  padding: 0 2rem;\n  text-align: center;\n  color: #fff;\n}\n.slide-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: 0.5px;\n  margin: 0 0 1.05rem;\n  text-shadow: 0 4px 22px rgba(0, 0, 0, 0.45);\n}\n.slide-sub[_ngcontent-%COMP%] {\n  font-size: clamp(0.85rem, 2vw, 1.05rem);\n  font-weight: 500;\n  line-height: 1.4;\n  margin: 0 auto 1.8rem;\n  max-width: 760px;\n  color: #efefef;\n  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);\n}\n.nav-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  font-size: 1.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: 0.3s background, 0.3s transform;\n  z-index: 5;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.65);\n  transform: translateY(-50%) scale(1.05);\n}\n.nav-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.nav-btn.prev[_ngcontent-%COMP%] {\n  left: 1.25rem;\n}\n.nav-btn.next[_ngcontent-%COMP%] {\n  right: 1.25rem;\n}\n.dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 5;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  transition: 0.3s background, 0.3s width;\n}\n.dot.active[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 22px;\n  border-radius: 14px;\n}\n@media (max-width: 780px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .slide-title[_ngcontent-%COMP%] {\n    font-size: clamp(1.6rem, 7vw, 2.25rem);\n  }\n}\n/*# sourceMappingURL=hero-carousel.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroCarouselComponent, [{
    type: Component,
    args: [{ selector: "app-hero-carousel", changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: `<section
  class="hero-carousel-wrapper"
  aria-label="Featured mission highlights carousel"
>
  <div
    class="hero-swiper"
    (mouseenter)="onMouseEnter()"
    (mouseleave)="onMouseLeave()"
  >
    <div
      class="slides-track"
      [style.transform]="'translateX(-' + currentSlide * 100 + '%)'"
    >
      <div
        class="hero-slide"
        *ngFor="let s of slides; let i = index"
        [class.active]="i === currentSlide"
        role="group"
        [attr.aria-label]="s.name"
        [attr.data-bg]="s.image_signed_url"
      >
        <div class="overlay"></div>
        <div class="slide-content">
          <h1 class="slide-title">{{ s.name }}</h1>
          <p class="slide-sub" *ngIf="s.description">{{ s.description }}</p>
          <ng-content select="[carousel-cta]"></ng-content>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="nav-btn prev"
      (click)="prevSlide()"
      aria-label="Previous slide"
    >
      \u2039
    </button>
    <button
      type="button"
      class="nav-btn next"
      (click)="nextSlide()"
      aria-label="Next slide"
    >
      \u203A
    </button>
    <div class="dots" role="tablist" aria-label="Carousel pagination">
      <button
        *ngFor="let s of slides; let i = index"
        type="button"
        class="dot"
        [class.active]="i === currentSlide"
        (click)="goToSlide(i)"
        [attr.aria-label]="'Go to slide ' + (i + 1)"
        [attr.aria-selected]="i === currentSlide"
        role="tab"
      ></button>
    </div>
  </div>
</section>
`, styles: ["/* src/app/components/hero-carousel/hero-carousel.component.scss */\n.hero-carousel-wrapper {\n  position: relative;\n  background: #0f0f0f;\n  --hero-height: clamp(420px, 70vh, 660px);\n}\n.hero-swiper {\n  width: 100%;\n  height: var(--hero-height);\n  position: relative;\n  overflow: hidden;\n}\n.slides-track {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: transform 0.75s cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n.hero-slide {\n  flex: 0 0 100%;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-slide .overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      220deg,\n      rgba(0, 0, 0, 0.55),\n      rgba(0, 0, 0, 0.25));\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n.slide-content {\n  position: relative;\n  z-index: 2;\n  max-width: 880px;\n  padding: 0 2rem;\n  text-align: center;\n  color: #fff;\n}\n.slide-title {\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: 0.5px;\n  margin: 0 0 1.05rem;\n  text-shadow: 0 4px 22px rgba(0, 0, 0, 0.45);\n}\n.slide-sub {\n  font-size: clamp(0.85rem, 2vw, 1.05rem);\n  font-weight: 500;\n  line-height: 1.4;\n  margin: 0 auto 1.8rem;\n  max-width: 760px;\n  color: #efefef;\n  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);\n}\n.nav-btn {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.45);\n  color: #fff;\n  font-size: 1.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: 0.3s background, 0.3s transform;\n  z-index: 5;\n}\n.nav-btn:hover {\n  background: rgba(0, 0, 0, 0.65);\n  transform: translateY(-50%) scale(1.05);\n}\n.nav-btn:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.nav-btn.prev {\n  left: 1.25rem;\n}\n.nav-btn.next {\n  right: 1.25rem;\n}\n.dots {\n  position: absolute;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 5;\n}\n.dot {\n  width: 10px;\n  height: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  transition: 0.3s background, 0.3s width;\n}\n.dot.active {\n  background: #fff;\n  width: 22px;\n  border-radius: 14px;\n}\n@media (max-width: 780px) {\n  .nav-btn {\n    display: none;\n  }\n  .slide-title {\n    font-size: clamp(1.6rem, 7vw, 2.25rem);\n  }\n}\n/*# sourceMappingURL=hero-carousel.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }], { slides: [{
    type: Input
  }], autoPlayDelay: [{
    type: Input
  }], pauseOnHover: [{
    type: Input
  }], enableKeyboard: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroCarouselComponent, { className: "HeroCarouselComponent", filePath: "src/app/components/hero-carousel/hero-carousel.component.ts", lineNumber: 21 });
})();

// src/app/modules/landing/landing.component.ts
var LandingComponent = class _LandingComponent {
  eventService;
  heroList;
  heroSlides = [];
  heroLoading = false;
  heroError;
  events = [];
  eventsLoading = false;
  eventsError;
  constructor(eventService, heroList) {
    this.eventService = eventService;
    this.heroList = heroList;
  }
  ngOnInit() {
    this.loadEvents();
    this.loadHeroSlides();
  }
  loadEvents() {
    this.eventsLoading = true;
    this.eventService.list().subscribe({
      next: (list) => {
        this.events = list.slice(0, 3);
        this.eventsLoading = false;
      },
      error: (err) => {
        this.eventsError = err?.message || "Failed to load events";
        this.eventsLoading = false;
      }
    });
  }
  loadHeroSlides() {
    this.heroLoading = true;
    this.heroList.listWithSigned().subscribe({
      next: (slides) => {
        this.heroSlides = slides;
        this.heroLoading = false;
      },
      error: (err) => {
        this.heroError = err?.message || "Failed to load hero slides";
        this.heroLoading = false;
      }
    });
  }
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)(\u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(HeroListService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: false, decls: 14, vars: 3, consts: [[1, "hero-wrapper"], [1, "hero-inner"], [1, "hero-title"], [1, "hero-mission"], [3, "slides", "autoPlayDelay", "pauseOnHover"], ["carousel-cta", "", "href", "#ecosystem", "aria-label", "Join ecosystem call to action", 1, "cta-btn"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Welcome to a New Era");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Our mission is to sow the seeds of education, innovation, and intelligence among the masses, beginning with individuals, districts and villages over the next decade. Our goal is to impact the transformation of knowledge, values, and growth, while empowering youth to shape the direction of a country's technological, educational and research ventures with advanced resources. We envision a generation of highly skilled, self-driven individuals who embrace sophisticated thinking, fostering a future defined by progress and intellectual vigor. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "app-hero-carousel", 4)(7, "a", 5);
      \u0275\u0275text(8, "Join Ecosystem");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "app-use-cases")(10, "app-projects")(11, "app-community")(12, "app-events")(13, "app-ecosystem");
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("slides", ctx.heroSlides)("autoPlayDelay", 6e3)("pauseOnHover", true);
    }
  }, dependencies: [UseCasesComponent, ProjectsComponent, CommunityComponent, EventsComponent, EcosystemComponent, HeroCarouselComponent], styles: ["\n\nbody[_ngcontent-%COMP%], \n[_nghost-%COMP%] {\n  background: #e9e9e9;\n}\n.hero-wrapper[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n  padding: 4.5rem 1rem 2.5rem;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  text-align: center;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.9rem, 4vw, 2.15rem);\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.25rem;\n  color: #121212;\n}\n.hero-mission[_ngcontent-%COMP%] {\n  max-width: 840px;\n  margin: 0 auto 2.75rem;\n  font-size: 0.72rem;\n  line-height: 1.15rem;\n  font-weight: 500;\n  color: #2e2e2e;\n}\n.hero-carousel-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2.5rem;\n}\n.hero-swiper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: var(--hero-height);\n  position: relative;\n}\n@media (max-width: 860px) {\n  .hero-composite[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 1.25rem;\n  }\n  .hero-composite[_ngcontent-%COMP%]   .side-card[_ngcontent-%COMP%] {\n    order: 2;\n    width: 38%;\n    min-width: 140px;\n  }\n  .hero-composite[_ngcontent-%COMP%]   .main-card[_ngcontent-%COMP%] {\n    order: 1;\n    width: 78%;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: false, template: `<!-- Hero Section (Design: centered headline + mission paragraph + composite image cards) -->
<section class="hero-wrapper">
  <div class="hero-inner">
    <h1 class="hero-title">Welcome to a New Era</h1>
    <p class="hero-mission">
      Our mission is to sow the seeds of education, innovation, and intelligence
      among the masses, beginning with individuals, districts and villages over
      the next decade. Our goal is to impact the transformation of knowledge,
      values, and growth, while empowering youth to shape the direction of a
      country's technological, educational and research ventures with advanced
      resources. We envision a generation of highly skilled, self-driven
      individuals who embrace sophisticated thinking, fostering a future defined
      by progress and intellectual vigor.
    </p>
  </div>
</section>

<app-hero-carousel
  [slides]="heroSlides"
  [autoPlayDelay]="6000"
  [pauseOnHover]="true"
>
  <a
    carousel-cta
    href="#ecosystem"
    class="cta-btn"
    aria-label="Join ecosystem call to action"
    >Join Ecosystem</a
  >
</app-hero-carousel>

<app-use-cases></app-use-cases>

<app-projects></app-projects>

<app-community></app-community>

<app-events></app-events>

<!-- Ecosystem Module Component -->
<app-ecosystem></app-ecosystem>
`, styles: ["/* src/app/modules/landing/landing.component.scss */\nbody,\n:host {\n  background: #e9e9e9;\n}\n.hero-wrapper {\n  background: #e9e9e9;\n  padding: 4.5rem 1rem 2.5rem;\n}\n.hero-inner {\n  max-width: 1080px;\n  margin: 0 auto;\n  text-align: center;\n}\n.hero-title {\n  font-size: clamp(1.9rem, 4vw, 2.15rem);\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-bottom: 1.25rem;\n  color: #121212;\n}\n.hero-mission {\n  max-width: 840px;\n  margin: 0 auto 2.75rem;\n  font-size: 0.72rem;\n  line-height: 1.15rem;\n  font-weight: 500;\n  color: #2e2e2e;\n}\n.hero-carousel-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2.5rem;\n}\n.hero-swiper {\n  width: 100%;\n  height: var(--hero-height);\n  position: relative;\n}\n@media (max-width: 860px) {\n  .hero-composite {\n    flex-wrap: wrap;\n    gap: 1.25rem;\n  }\n  .hero-composite .side-card {\n    order: 2;\n    width: 38%;\n    min-width: 140px;\n  }\n  .hero-composite .main-card {\n    order: 1;\n    width: 78%;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */\n"] }]
  }], () => [{ type: EventService }, { type: HeroListService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/modules/landing/landing.component.ts", lineNumber: 13 });
})();

// src/app/modules/landing/landing-routing.module.ts
var routes = [
  {
    path: "",
    component: LandingComponent
  }
];
var LandingRoutingModule = class _LandingRoutingModule {
  static \u0275fac = function LandingRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LandingRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/community/community-routing.module.ts
var routes2 = [{ path: "", component: CommunityComponent }];
var CommunityRoutingModule = class _CommunityRoutingModule {
  static \u0275fac = function CommunityRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommunityRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes2), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes2)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/community/community.module.ts
var CommunityModule = class _CommunityModule {
  static \u0275fac = function CommunityModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommunityModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommunityModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, CommunityRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommunityModule, [{
    type: NgModule,
    args: [{
      declarations: [CommunityComponent],
      imports: [CommonModule, CommunityRoutingModule],
      exports: [CommunityComponent]
    }]
  }], null, null);
})();

// src/app/modules/events/events.module.ts
var EventsModule = class _EventsModule {
  static \u0275fac = function EventsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EventsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsModule, [{
    type: NgModule,
    args: [{
      declarations: [EventsComponent],
      imports: [CommonModule],
      exports: [EventsComponent]
    }]
  }], null, null);
})();

// src/app/modules/ecosystem/ecosystem.module.ts
var EcosystemModule = class _EcosystemModule {
  static \u0275fac = function EcosystemModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EcosystemModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EcosystemModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ReactiveFormsModule, FormsModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcosystemModule, [{
    type: NgModule,
    args: [{
      declarations: [EcosystemComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule],
      exports: [EcosystemComponent]
    }]
  }], null, null);
})();

// src/app/modules/landing/landing.module.ts
var LandingModule = class _LandingModule {
  static \u0275fac = function LandingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LandingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    LandingRoutingModule,
    UseCasesModule,
    ReactiveFormsModule,
    FormsModule,
    ProjectsModule,
    CommunityModule,
    EventsModule,
    EcosystemModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingModule, [{
    type: NgModule,
    args: [{
      declarations: [LandingComponent, HeroCarouselComponent],
      imports: [
        CommonModule,
        LandingRoutingModule,
        UseCasesModule,
        ReactiveFormsModule,
        FormsModule,
        ProjectsModule,
        CommunityModule,
        EventsModule,
        EcosystemModule
      ]
    }]
  }], null, null);
})();
export {
  LandingModule
};
//# sourceMappingURL=chunk-VEZLBW5C.js.map
