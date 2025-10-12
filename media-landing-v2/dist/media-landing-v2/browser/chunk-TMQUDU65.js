import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BLROKSBC.js";
import {
  CategoryService,
  EcosystemService,
  EventService,
  EventTypeService,
  MediaWorkService,
  SnakeToWordsPipe,
  ToastrNotificationService
} from "./chunk-JUIE7TJN.js";
import {
  SupabaseService
} from "./chunk-E3Q73E44.js";
import "./chunk-V72RMYHE.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Router,
  RouterLink,
  RouterModule,
  combineLatest,
  filter,
  inject,
  map,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6SZYEMSY.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-S35DAJRX.js";

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  router;
  supabase;
  constructor(router, supabase) {
    this.router = router;
    this.supabase = supabase;
  }
  canActivate() {
    return combineLatest([
      this.supabase.authReady$,
      this.supabase.session$
    ]).pipe(
      // Only continue once authReady is true
      filter(([ready]) => ready),
      take(1),
      map(([_, session]) => {
        if (session)
          return true;
        return this.router.parseUrl("/admin/login");
      })
    );
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }, { type: SupabaseService }], null);
})();

// src/app/components/media-work-form/media-work-form.component.ts
function MediaWorkFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function MediaWorkFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r1.length || 0, " / 280 ");
  }
}
function MediaWorkFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function MediaWorkFormComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("value", c_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
function MediaWorkFormComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "Loading categories...");
    \u0275\u0275elementEnd();
  }
}
function MediaWorkFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.categoryError);
  }
}
function MediaWorkFormComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.uploadProgress, "%");
  }
}
function MediaWorkFormComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.manuscriptError);
  }
}
function MediaWorkFormComponent_div_56_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275text(2, "PDF:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 49);
    \u0275\u0275text(4, "Open (signed)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 50);
    \u0275\u0275listener("click", function MediaWorkFormComponent_div_56_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeManuscript());
    });
    \u0275\u0275text(6, " Remove ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r2.manuscriptSignedUrl, \u0275\u0275sanitizeUrl);
  }
}
function MediaWorkFormComponent_div_56_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "PDF:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "em");
    \u0275\u0275text(5, " (generating secure link...)");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fileNameOf((tmp_3_0 = ctx_r2.form.get("manuscriptUrl")) == null ? null : tmp_3_0.value));
  }
}
function MediaWorkFormComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, MediaWorkFormComponent_div_56_ng_container_1_Template, 7, 1, "ng-container", 47)(2, MediaWorkFormComponent_div_56_ng_template_2_Template, 6, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const waitingPdf_r5 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.manuscriptSignedUrl)("ngIfElse", waitingPdf_r5);
  }
}
function MediaWorkFormComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.imageUploadProgress, "%");
  }
}
function MediaWorkFormComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.imageError);
  }
}
function MediaWorkFormComponent_div_63_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "img", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.imageSignedUrl, \u0275\u0275sanitizeUrl);
  }
}
function MediaWorkFormComponent_div_63_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MediaWorkFormComponent_div_63_ng_container_1_div_1_Template, 2, 1, "div", 52);
    \u0275\u0275elementStart(2, "button", 50);
    \u0275\u0275listener("click", function MediaWorkFormComponent_div_63_ng_container_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275text(3, " Remove ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imageSignedUrl);
  }
}
function MediaWorkFormComponent_div_63_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "Image:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "em");
    \u0275\u0275text(5, " (generating secure image link...)");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fileNameOf((tmp_3_0 = ctx_r2.form.get("imageUrl")) == null ? null : tmp_3_0.value));
  }
}
function MediaWorkFormComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, MediaWorkFormComponent_div_63_ng_container_1_Template, 4, 1, "ng-container", 47)(2, MediaWorkFormComponent_div_63_ng_template_2_Template, 6, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const waitingImg_r7 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imageSignedUrl)("ngIfElse", waitingImg_r7);
  }
}
function MediaWorkFormComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.submitLabel);
  }
}
function MediaWorkFormComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
var MediaWorkFormComponent = class _MediaWorkFormComponent {
  categoryService;
  supabase;
  toast;
  fb = new FormBuilder();
  categories = [];
  loadingCategories = false;
  categoryError = null;
  set value(v) {
    if (!v)
      return;
    const normalized = {
      name: v.name ?? "",
      title: v.title ?? "",
      description: v.description ?? "",
      summary: v.summary ?? "",
      manuscriptUrl: v.manuscriptUrl ?? "",
      youtubeUrl: v.youtubeUrl ?? "",
      githubUrl: v.githubUrl ?? "",
      imageUrl: v.imageUrl ?? "",
      type: v.type ?? "projects",
      status: v.status ?? "not_started",
      categoryId: v.categoryId ?? ""
    };
    this.form.patchValue(normalized, { emitEvent: false });
    this.form.markAsPristine();
    this.form.updateValueAndValidity({ emitEvent: false });
    if (normalized.manuscriptUrl) {
      this.refreshSignedUrl(normalized.manuscriptUrl);
    }
    if (normalized.imageUrl) {
      this.refreshImageSignedUrl(normalized.imageUrl);
    }
  }
  submitting = false;
  submitLabel = "Save";
  save = new EventEmitter();
  form = this.fb.group({
    name: ["", Validators.required],
    title: [""],
    description: [""],
    summary: [""],
    manuscriptUrl: [""],
    // stores storage path (private)
    youtubeUrl: [""],
    githubUrl: [""],
    imageUrl: [""],
    type: ["projects", Validators.required],
    status: ["not_started"],
    categoryId: [""]
    // optional selection
  });
  // Upload state
  uploadingManuscript = false;
  uploadProgress = 0;
  // simple optimistic progress (no native progress API in storage-js yet)
  manuscriptError = null;
  // Image upload state
  uploadingImage = false;
  imageUploadProgress = 0;
  imageError = null;
  // Supabase Storage bucket for manuscripts (PDF uploads)
  MANUSCRIPTS_BUCKET = "VisionMediaBucket";
  manuscriptSignedUrl = null;
  SIGNED_URL_TTL_SECONDS = 60 * 10;
  // 10 minutes
  // Reuse same bucket for images (adjust if separate bucket exists)
  IMAGES_BUCKET = this.MANUSCRIPTS_BUCKET;
  imageSignedUrl = null;
  constructor(categoryService, supabase, toast) {
    this.categoryService = categoryService;
    this.supabase = supabase;
    this.toast = toast;
    this.loadCategories();
  }
  fileNameOf(path) {
    if (!path)
      return "";
    try {
      const parts = path.split("/");
      return parts[parts.length - 1];
    } catch {
      return path;
    }
  }
  loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.loadingCategories = false;
      },
      error: (e) => {
        console.error("[MediaWorkForm] categories load error", e);
        this.categoryError = "Failed to load categories";
        this.loadingCategories = false;
      }
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  onManuscriptFileSelected(evt) {
    return __async(this, null, function* () {
      const input = evt.target;
      if (!input.files || input.files.length === 0)
        return;
      const file = input.files[0];
      this.manuscriptError = null;
      if (file.type !== "application/pdf") {
        this.manuscriptError = "Only PDF files are allowed";
        input.value = "";
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        this.manuscriptError = "File exceeds 15MB limit";
        input.value = "";
        return;
      }
      this.uploadingManuscript = true;
      this.uploadProgress = 5;
      try {
        const path = this.buildManuscriptPath(file.name);
        const { error: upErr } = yield this.supabase.client.storage.from(this.MANUSCRIPTS_BUCKET).upload(path, file, { upsert: true, contentType: "application/pdf" });
        if (upErr)
          throw upErr;
        this.uploadProgress = 85;
        this.form.patchValue({ manuscriptUrl: path });
        yield this.refreshSignedUrl(path);
        this.uploadProgress = 100;
        this.toast.showSuccess("Manuscript Uploaded", "PDF successfully uploaded");
      } catch (e) {
        console.error("[MediaWorkForm] upload error", e);
        this.manuscriptError = e?.message || "Upload failed";
        this.toast.showError("Upload Failed", this.manuscriptError || "Unknown error");
      } finally {
        setTimeout(() => this.uploadingManuscript = false, 300);
        setTimeout(() => this.uploadProgress = 0, 800);
      }
    });
  }
  removeManuscript() {
    return __async(this, null, function* () {
      const path = this.form.get("manuscriptUrl")?.value;
      if (!path)
        return;
      try {
        const { error } = yield this.supabase.client.storage.from(this.MANUSCRIPTS_BUCKET).remove([path]);
        if (error)
          throw error;
        this.form.patchValue({ manuscriptUrl: "" });
        this.manuscriptSignedUrl = null;
        this.toast.showInfo("Removed", "Manuscript deleted");
      } catch (e) {
        this.toast.showError("Remove Failed", e?.message || "Error removing file");
      }
    });
  }
  onImageFileSelected(evt) {
    return __async(this, null, function* () {
      const input = evt.target;
      if (!input.files || input.files.length === 0)
        return;
      const file = input.files[0];
      this.imageError = null;
      if (!file.type.startsWith("image/")) {
        this.imageError = "Only image files are allowed";
        input.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.imageError = "Image exceeds 5MB limit";
        input.value = "";
        return;
      }
      this.uploadingImage = true;
      this.imageUploadProgress = 10;
      try {
        const path = this.buildImagePath(file.name);
        const { error: upErr } = yield this.supabase.client.storage.from(this.IMAGES_BUCKET).upload(path, file, { upsert: true, contentType: file.type });
        if (upErr)
          throw upErr;
        this.imageUploadProgress = 85;
        this.form.patchValue({ imageUrl: path });
        yield this.refreshImageSignedUrl(path);
        this.imageUploadProgress = 100;
        this.toast.showSuccess("Image Uploaded", "Image successfully uploaded");
      } catch (e) {
        console.error("[MediaWorkForm] image upload error", e);
        this.imageError = e?.message || "Upload failed";
        this.toast.showError("Upload Failed", this.imageError || "Unknown error");
      } finally {
        setTimeout(() => this.uploadingImage = false, 300);
        setTimeout(() => this.imageUploadProgress = 0, 800);
      }
    });
  }
  removeImage() {
    return __async(this, null, function* () {
      const path = this.form.get("imageUrl")?.value;
      if (!path)
        return;
      try {
        const { error } = yield this.supabase.client.storage.from(this.IMAGES_BUCKET).remove([path]);
        if (error)
          throw error;
        this.form.patchValue({ imageUrl: "" });
        this.imageSignedUrl = null;
        this.toast.showInfo("Removed", "Image deleted");
      } catch (e) {
        this.toast.showError("Remove Failed", e?.message || "Error removing image file");
      }
    });
  }
  buildManuscriptPath(originalName) {
    const safe = originalName.replace(/[^a-zA-Z0-9_.-]+/g, "_");
    const ts = Date.now();
    const base = (this.form.get("name")?.value || "untitled").toString().replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase();
    return `manuscripts/${base}/${ts}_${safe}`;
  }
  buildImagePath(originalName) {
    const safe = originalName.replace(/[^a-zA-Z0-9_.-]+/g, "_");
    const ts = Date.now();
    const base = (this.form.get("name")?.value || "untitled").toString().replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase();
    return `images/${base}/${ts}_${safe}`;
  }
  refreshSignedUrl(path) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.client.storage.from(this.MANUSCRIPTS_BUCKET).createSignedUrl(path, this.SIGNED_URL_TTL_SECONDS);
        if (error)
          throw error;
        this.manuscriptSignedUrl = data?.signedUrl || null;
        if (this.manuscriptSignedUrl) {
          setTimeout(() => this.refreshSignedUrl(path), (this.SIGNED_URL_TTL_SECONDS - 30) * 1e3);
        }
      } catch (e) {
        console.warn("[MediaWorkForm] failed to refresh signed URL", e);
        this.manuscriptSignedUrl = null;
      }
    });
  }
  refreshImageSignedUrl(path) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.supabase.client.storage.from(this.IMAGES_BUCKET).createSignedUrl(path, this.SIGNED_URL_TTL_SECONDS);
        if (error)
          throw error;
        this.imageSignedUrl = data?.signedUrl || null;
        if (this.imageSignedUrl) {
          setTimeout(() => this.refreshImageSignedUrl(path), (this.SIGNED_URL_TTL_SECONDS - 30) * 1e3);
        }
      } catch (e) {
        console.warn("[MediaWorkForm] failed to refresh image signed URL", e);
        this.imageSignedUrl = null;
      }
    });
  }
  static \u0275fac = function MediaWorkFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaWorkFormComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(SupabaseService), \u0275\u0275directiveInject(ToastrNotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaWorkFormComponent, selectors: [["app-media-work-form"]], inputs: { value: "value", submitting: "submitting", submitLabel: "submitLabel" }, outputs: { save: "save" }, decls: 75, vars: 22, consts: [["waitingPdf", ""], ["waitingImg", ""], ["novalidate", "", 1, "media-work-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "mw-name"], ["id", "mw-name", "formControlName", "name", "placeholder", "Display name"], ["class", "err", 4, "ngIf"], ["for", "mw-title"], ["id", "mw-title", "formControlName", "title", "placeholder", "Optional title"], ["for", "mw-summary"], ["id", "mw-summary", "formControlName", "summary", "rows", "3", "maxlength", "280", "placeholder", "Concise summary (<= 280 chars)"], ["class", "hint", 4, "ngIf"], ["for", "mw-description"], ["id", "mw-description", "formControlName", "description", "rows", "4", "placeholder", "Short description"], ["for", "mw-type"], ["id", "mw-type", "formControlName", "type"], ["value", "projects"], ["value", "use-cases"], ["for", "mw-category"], ["id", "mw-category", "formControlName", "categoryId"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "mw-status"], ["id", "mw-status", "formControlName", "status"], ["value", "not_started"], ["value", "in_progress"], ["value", "complete"], [1, "links-group"], ["for", "mw-manuscript-file"], ["id", "mw-manuscript-file", "type", "file", "accept", "application/pdf", 3, "change", "disabled"], ["class", "progress", 4, "ngIf"], ["class", "hint existing-file", 4, "ngIf"], ["for", "mw-image-file"], ["id", "mw-image-file", "type", "file", "accept", "image/*", 3, "change", "disabled"], ["for", "mw-youtube"], ["id", "mw-youtube", "formControlName", "youtubeUrl", "placeholder", "https://youtube.com/..."], ["for", "mw-github"], ["id", "mw-github", "formControlName", "githubUrl", "placeholder", "https://github.com/..."], ["type", "submit", 1, "primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "err"], [1, "hint"], [3, "value"], [1, "progress"], [1, "bar"], [1, "hint", "existing-file"], [4, "ngIf", "ngIfElse"], [1, "label"], ["target", "_blank", "rel", "noopener", 3, "href"], ["type", "button", 1, "link", "danger", 3, "click"], [1, "filename"], ["class", "image-preview", 4, "ngIf"], [1, "image-preview"], ["alt", "Uploaded image preview", 3, "src"], [1, "spinner"]], template: function MediaWorkFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 2);
      \u0275\u0275listener("ngSubmit", function MediaWorkFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "label", 4);
      \u0275\u0275text(3, "Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 5);
      \u0275\u0275template(5, MediaWorkFormComponent_div_5_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "label", 7);
      \u0275\u0275text(8, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 3)(11, "label", 9);
      \u0275\u0275text(12, "Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "textarea", 10);
      \u0275\u0275template(14, MediaWorkFormComponent_div_14_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3)(16, "label", 12);
      \u0275\u0275text(17, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "textarea", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 3)(20, "label", 14);
      \u0275\u0275text(21, "Type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 15)(23, "option", 16);
      \u0275\u0275text(24, "Project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 17);
      \u0275\u0275text(26, "Use Case");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, MediaWorkFormComponent_div_27_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 3)(29, "label", 18);
      \u0275\u0275text(30, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 19)(32, "option", 20);
      \u0275\u0275text(33, "-- None --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, MediaWorkFormComponent_option_34_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, MediaWorkFormComponent_div_35_Template, 2, 0, "div", 11)(36, MediaWorkFormComponent_div_36_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 3)(38, "label", 22);
      \u0275\u0275text(39, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "select", 23)(41, "option", 24);
      \u0275\u0275text(42, "Not Started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 25);
      \u0275\u0275text(44, "In Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 26);
      \u0275\u0275text(46, "Complete");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "fieldset", 27)(48, "legend");
      \u0275\u0275text(49, "Links & Uploads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 3)(51, "label", 28);
      \u0275\u0275text(52, "Manuscript (PDF)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "input", 29);
      \u0275\u0275listener("change", function MediaWorkFormComponent_Template_input_change_53_listener($event) {
        return ctx.onManuscriptFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(54, MediaWorkFormComponent_div_54_Template, 2, 2, "div", 30)(55, MediaWorkFormComponent_div_55_Template, 2, 1, "div", 6)(56, MediaWorkFormComponent_div_56_Template, 4, 2, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 3)(58, "label", 32);
      \u0275\u0275text(59, "Image (PNG/JPG, max 5MB)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 33);
      \u0275\u0275listener("change", function MediaWorkFormComponent_Template_input_change_60_listener($event) {
        return ctx.onImageFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, MediaWorkFormComponent_div_61_Template, 2, 2, "div", 30)(62, MediaWorkFormComponent_div_62_Template, 2, 1, "div", 6)(63, MediaWorkFormComponent_div_63_Template, 4, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 3)(65, "label", 34);
      \u0275\u0275text(66, "YouTube URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 3)(69, "label", 36);
      \u0275\u0275text(70, "GitHub URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "button", 38);
      \u0275\u0275template(73, MediaWorkFormComponent_span_73_Template, 2, 1, "span", 39)(74, MediaWorkFormComponent_span_74_Template, 1, 0, "span", 40);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_12_0;
      let tmp_16_0;
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("summary")) == null ? null : tmp_3_0.value);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("invalid", ((tmp_4_0 = ctx.form.get("type")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("type")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("type")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("type")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingCategories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.categoryError);
      \u0275\u0275advance(17);
      \u0275\u0275property("disabled", ctx.uploadingManuscript);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadingManuscript);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.manuscriptError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.uploadingManuscript && ((tmp_12_0 = ctx.form.get("manuscriptUrl")) == null ? null : tmp_12_0.value));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.uploadingImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadingImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imageError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.uploadingImage && ((tmp_16_0 = ctx.form.get("imageUrl")) == null ? null : tmp_16_0.value));
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n.media-work-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n  max-width: 760px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-weight: 600;\n  color: #cbd5e1;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 0.85rem;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  color: #f8fafc;\n  font-size: 0.95rem;\n  outline: none;\n  transition:\n    border-color 140ms,\n    background 140ms,\n    box-shadow 140ms;\n  resize: vertical;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  border-color: #38bdf8;\n  background: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);\n}\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field.invalid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.25);\n}\nfieldset.links-group[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  padding: 1.1rem 1.2rem 1rem;\n  background: rgba(255, 255, 255, 0.03);\n  display: grid;\n  gap: 1rem 1.25rem;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  position: relative;\n}\nfieldset.links-group[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  padding: 0 0.6rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\nfieldset[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.existing-file[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], \n.hint[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #94a3b8;\n  margin-right: 0.35rem;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.hint[_ngcontent-%COMP%]   .filename[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n  font-size: 0.7rem;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    "Courier New",\n    monospace;\n}\n.image-preview[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.6rem;\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 140px;\n  max-height: 140px;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  padding: 2px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.4);\n}\n.primary[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  align-self: flex-start;\n  padding: 0.85rem 1.25rem;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n  color: #f8fafc;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  box-shadow: 0 4px 18px -4px rgba(14, 165, 233, 0.55), 0 2px 6px -2px rgba(14, 165, 233, 0.55);\n  transition: transform 160ms, box-shadow 160ms;\n}\n.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.25);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.err[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-size: 0.7rem;\n  letter-spacing: 0.03em;\n  font-weight: 500;\n}\n@media (max-width: 640px) {\n  fieldset.links-group[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=media-work-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaWorkFormComponent, [{
    type: Component,
    args: [{ selector: "app-media-work-form", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<form
  [formGroup]="form"
  (ngSubmit)="onSubmit()"
  class="media-work-form"
  novalidate
>
  <div
    class="field"
    [class.invalid]="form.get('name')?.invalid && form.get('name')?.touched"
  >
    <label for="mw-name">Name *</label>
    <input id="mw-name" formControlName="name" placeholder="Display name" />
    <div
      class="err"
      *ngIf="form.get('name')?.invalid && form.get('name')?.touched"
    >
      Required
    </div>
  </div>

  <div class="field">
    <label for="mw-title">Title</label>
    <input id="mw-title" formControlName="title" placeholder="Optional title" />
  </div>

  <div class="field">
    <label for="mw-summary">Summary</label>
    <textarea
      id="mw-summary"
      formControlName="summary"
      rows="3"
      maxlength="280"
      placeholder="Concise summary (<= 280 chars)"
    ></textarea>
    <div class="hint" *ngIf="form.get('summary')?.value as s">
      {{ s.length || 0 }} / 280
    </div>
  </div>

  <div class="field">
    <label for="mw-description">Description</label>
    <textarea
      id="mw-description"
      formControlName="description"
      rows="4"
      placeholder="Short description"
    ></textarea>
  </div>

  <div
    class="field"
    [class.invalid]="form.get('type')?.invalid && form.get('type')?.touched"
  >
    <label for="mw-type">Type *</label>
    <select id="mw-type" formControlName="type">
      <option value="projects">Project</option>
      <option value="use-cases">Use Case</option>
    </select>
    <div
      class="err"
      *ngIf="form.get('type')?.invalid && form.get('type')?.touched"
    >
      Required
    </div>
  </div>

  <div class="field">
    <label for="mw-category">Category</label>
    <select id="mw-category" formControlName="categoryId">
      <option value="">-- None --</option>
      <option *ngFor="let c of categories" [value]="c.id">{{ c.name }}</option>
    </select>
    <div class="hint" *ngIf="loadingCategories">Loading categories...</div>
    <div class="err" *ngIf="categoryError">{{ categoryError }}</div>
  </div>

  <div class="field">
    <label for="mw-status">Status</label>
    <select id="mw-status" formControlName="status">
      <option value="not_started">Not Started</option>
      <option value="in_progress">In Progress</option>
      <option value="complete">Complete</option>
    </select>
  </div>

  <fieldset class="links-group">
    <legend>Links & Uploads</legend>
    <div class="field">
      <label for="mw-manuscript-file">Manuscript (PDF)</label>
      <input
        id="mw-manuscript-file"
        type="file"
        accept="application/pdf"
        (change)="onManuscriptFileSelected($event)"
        [disabled]="uploadingManuscript"
      />
      <div class="progress" *ngIf="uploadingManuscript">
        <div class="bar" [style.width.%]="uploadProgress"></div>
      </div>
      <div class="err" *ngIf="manuscriptError">{{ manuscriptError }}</div>
      <div
        class="hint existing-file"
        *ngIf="!uploadingManuscript && form.get('manuscriptUrl')?.value"
      >
        <ng-container *ngIf="manuscriptSignedUrl; else waitingPdf">
          <span class="label">PDF:</span>
          <a [href]="manuscriptSignedUrl" target="_blank" rel="noopener"
            >Open (signed)</a
          >
          <button
            type="button"
            class="link danger"
            (click)="removeManuscript()"
          >
            Remove
          </button>
        </ng-container>
        <ng-template #waitingPdf>
          <span class="label">PDF:</span>
          <span class="filename">{{
            fileNameOf(form.get("manuscriptUrl")?.value)
          }}</span>
          <em> (generating secure link...)</em>
        </ng-template>
      </div>
    </div>

    <div class="field">
      <label for="mw-image-file">Image (PNG/JPG, max 5MB)</label>
      <input
        id="mw-image-file"
        type="file"
        accept="image/*"
        (change)="onImageFileSelected($event)"
        [disabled]="uploadingImage"
      />
      <div class="progress" *ngIf="uploadingImage">
        <div class="bar" [style.width.%]="imageUploadProgress"></div>
      </div>
      <div class="err" *ngIf="imageError">{{ imageError }}</div>
      <div class="hint" *ngIf="!uploadingImage && form.get('imageUrl')?.value">
        <ng-container *ngIf="imageSignedUrl; else waitingImg">
          <div class="image-preview" *ngIf="imageSignedUrl">
            <img [src]="imageSignedUrl" alt="Uploaded image preview" />
          </div>
          <button type="button" class="link danger" (click)="removeImage()">
            Remove
          </button>
        </ng-container>
        <ng-template #waitingImg>
          <span class="label">Image:</span>
          <span class="filename">{{
            fileNameOf(form.get("imageUrl")?.value)
          }}</span>
          <em> (generating secure image link...)</em>
        </ng-template>
      </div>
    </div>
    <div class="field">
      <label for="mw-youtube">YouTube URL</label>
      <input
        id="mw-youtube"
        formControlName="youtubeUrl"
        placeholder="https://youtube.com/..."
      />
    </div>
    <div class="field">
      <label for="mw-github">GitHub URL</label>
      <input
        id="mw-github"
        formControlName="githubUrl"
        placeholder="https://github.com/..."
      />
    </div>
  </fieldset>

  <button class="primary" type="submit" [disabled]="form.invalid || submitting">
    <span *ngIf="!submitting">{{ submitLabel }}</span>
    <span *ngIf="submitting" class="spinner"></span>
  </button>
</form>
`, styles: ['/* src/app/components/media-work-form/media-work-form.component.scss */\n.media-work-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n  max-width: 760px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.field label {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-weight: 600;\n  color: #cbd5e1;\n}\ninput,\ntextarea,\nselect {\n  width: 100%;\n  padding: 0.75rem 0.85rem;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  color: #f8fafc;\n  font-size: 0.95rem;\n  outline: none;\n  transition:\n    border-color 140ms,\n    background 140ms,\n    box-shadow 140ms;\n  resize: vertical;\n}\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #38bdf8;\n  background: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);\n}\n.field.invalid input,\n.field.invalid textarea,\n.field.invalid select {\n  border-color: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.25);\n}\nfieldset.links-group {\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  padding: 1.1rem 1.2rem 1rem;\n  background: rgba(255, 255, 255, 0.03);\n  display: grid;\n  gap: 1rem 1.25rem;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  position: relative;\n}\nfieldset.links-group legend {\n  padding: 0 0.6rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\nfieldset .field {\n  margin: 0;\n}\n.existing-file .label,\n.hint .label {\n  font-weight: 600;\n  color: #94a3b8;\n  margin-right: 0.35rem;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.hint .filename {\n  color: #e2e8f0;\n  font-size: 0.7rem;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    "Courier New",\n    monospace;\n}\n.image-preview {\n  margin: 0.35rem 0 0.6rem;\n}\n.image-preview img {\n  max-width: 140px;\n  max-height: 140px;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  padding: 2px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.4);\n}\n.primary {\n  margin-top: 0.25rem;\n  align-self: flex-start;\n  padding: 0.85rem 1.25rem;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n  color: #f8fafc;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  box-shadow: 0 4px 18px -4px rgba(14, 165, 233, 0.55), 0 2px 6px -2px rgba(14, 165, 233, 0.55);\n  transition: transform 160ms, box-shadow 160ms;\n}\n.primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.primary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.25);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.err {\n  color: #f87171;\n  font-size: 0.7rem;\n  letter-spacing: 0.03em;\n  font-weight: 500;\n}\n@media (max-width: 640px) {\n  fieldset.links-group {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=media-work-form.component.css.map */\n'] }]
  }], () => [{ type: CategoryService }, { type: SupabaseService }, { type: ToastrNotificationService }], { value: [{
    type: Input
  }], submitting: [{
    type: Input
  }], submitLabel: [{
    type: Input
  }], save: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaWorkFormComponent, { className: "MediaWorkFormComponent", filePath: "src/app/components/media-work-form/media-work-form.component.ts", lineNumber: 20 });
})();

// src/app/modules/admin-panel/components/admin-add-media.component.ts
function AdminAddMediaComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var AdminAddMediaComponent = class _AdminAddMediaComponent {
  mediaService = inject(MediaWorkService);
  router = inject(Router);
  toast = inject(ToastrNotificationService);
  submitting = false;
  error = null;
  create(payload) {
    this.submitting = true;
    this.error = null;
    this.mediaService.create(payload).subscribe({
      next: (created) => {
        this.submitting = false;
        this.toast.showSuccess("Created", `Media Work '${created.name}' saved`);
        this.router.navigate(["/admin/dashboard"]);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || "Failed";
        this.toast.showError("Create Failed", this.error || "Unknown error");
      }
    });
  }
  static \u0275fac = function AdminAddMediaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAddMediaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddMediaComponent, selectors: [["app-admin-add-media"]], standalone: false, decls: 9, vars: 3, consts: [[1, "add-shell"], [1, "add-card"], [1, "head"], [1, "media-form", 3, "save", "submitLabel", "submitting"], ["class", "err global", 4, "ngIf"], [1, "err", "global"]], template: function AdminAddMediaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1");
      \u0275\u0275text(4, "Create Media Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Add a new project or use case entry below.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-media-work-form", 3);
      \u0275\u0275listener("save", function AdminAddMediaComponent_Template_app_media_work_form_save_7_listener($event) {
        return ctx.create($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, AdminAddMediaComponent_div_8_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("submitLabel", "Create")("submitting", ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [NgIf, MediaWorkFormComponent], styles: ['\n\n.add-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 0px);\n  padding: 2.4rem clamp(1rem, 4vw, 3rem) 3.2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e293b 55%,\n      #0f172a);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.add-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 860px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  backdrop-filter: blur(12px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 2.25rem 2.2rem 2.4rem;\n  box-shadow: 0 6px 26px -8px rgba(0, 0, 0, 0.55);\n  animation: _ngcontent-%COMP%_fadeIn 400ms ease;\n  display: flex;\n  flex-direction: column;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.6rem, 2.6vw, 2.1rem);\n  font-weight: 600;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1.4rem;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n}\n.media-form[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.err.global[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #f87171;\n  font-size: 0.8rem;\n  text-align: center;\n}\n@media (max-width: 720px) {\n  .add-shell[_ngcontent-%COMP%] {\n    padding: 2rem 1.1rem 2.6rem;\n  }\n  .add-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.3rem 2.2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-add-media.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAddMediaComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-admin-add-media", template: `<div class="add-shell">
  <div class="add-card">
    <header class="head">
      <h1>Create Media Work</h1>
      <p>Add a new project or use case entry below.</p>
    </header>
    <app-media-work-form
      class="media-form"
      [submitLabel]="'Create'"
      [submitting]="submitting"
      (save)="create($event)"
    ></app-media-work-form>
    <div *ngIf="error" class="err global">{{ error }}</div>
  </div>
</div>
`, styles: ['/* src/app/modules/admin-panel/components/admin-add-media.component.scss */\n.add-shell {\n  min-height: calc(100vh - 0px);\n  padding: 2.4rem clamp(1rem, 4vw, 3rem) 3.2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e293b 55%,\n      #0f172a);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.add-card {\n  width: 100%;\n  max-width: 860px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  backdrop-filter: blur(12px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 2.25rem 2.2rem 2.4rem;\n  box-shadow: 0 6px 26px -8px rgba(0, 0, 0, 0.55);\n  animation: fadeIn 400ms ease;\n  display: flex;\n  flex-direction: column;\n}\n.head h1 {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.6rem, 2.6vw, 2.1rem);\n  font-weight: 600;\n}\n.head p {\n  margin: 0 0 1.4rem;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n}\n.media-form {\n  margin-top: 0.25rem;\n}\n.err.global {\n  margin-top: 1rem;\n  color: #f87171;\n  font-size: 0.8rem;\n  text-align: center;\n}\n@media (max-width: 720px) {\n  .add-shell {\n    padding: 2rem 1.1rem 2.6rem;\n  }\n  .add-card {\n    padding: 2rem 1.3rem 2.2rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-add-media.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddMediaComponent, { className: "AdminAddMediaComponent", filePath: "src/app/modules/admin-panel/components/admin-add-media.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin-panel/components/admin-dashboard.component.ts
function AdminDashboardComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 9)(1, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goAdd();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(2, "\u2795 Add Media Work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goAddCategory();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(4, "\u2795 Add Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goAddEvent();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(6, "\u2795 Add Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goMediaWorks();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(8, "\u{1F4C4} View Media Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goCategories();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(10, "\u{1F4C1} View Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goEvents();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(12, "\u{1F4C5} View Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li", 10);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goEcosystemSubmissions();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(14, " \u{1F331} View Ecosystem Submissions ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "li", 11);
    \u0275\u0275elementStart(16, "li", 12);
    \u0275\u0275listener("click", function AdminDashboardComponent_ul_8_Template_li_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.logout();
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275text(17, "\u23FB Logout");
    \u0275\u0275elementEnd()();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  router = inject(Router);
  supabase = inject(SupabaseService);
  media = inject(MediaWorkService);
  dropdownOpen = false;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  closeDropdown() {
    this.dropdownOpen = false;
  }
  goAdd() {
    this.router.navigate(["/admin/add-media"]);
  }
  goAddCategory() {
    this.router.navigate(["/admin/add-category"]);
  }
  goMediaWorks() {
    this.router.navigate(["/admin/media-works"]);
  }
  goCategories() {
    this.router.navigate(["/admin/categories"]);
  }
  goEcosystemSubmissions() {
    this.router.navigate(["/admin/ecosystem-submissions"]);
  }
  goAddEvent() {
    this.router.navigate(["/admin/add-event"]);
  }
  goEvents() {
    this.router.navigate(["/admin/events"]);
  }
  logout() {
    this.supabase.signOut().subscribe(() => this.router.navigate(["/admin/login"]));
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: false, decls: 59, vars: 3, consts: [[1, "dashboard-shell"], [1, "dash-header"], [1, "actions"], [1, "action-dropdown", 3, "keydown.escape"], [1, "secondary", 3, "click"], ["class", "menu", 4, "ngIf"], [1, "grid"], ["tabindex", "0", 1, "card", 3, "click"], [1, "cta"], [1, "menu"], [3, "click"], [1, "sep"], [1, "danger", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "Admin Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275listener("keydown.escape", function AdminDashboardComponent_Template_div_keydown_escape_5_listener() {
        return ctx.dropdownOpen = false;
      });
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_6_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275text(7, " \u2699\uFE0F Actions \u25BE ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, AdminDashboardComponent_ul_8_Template, 18, 0, "ul", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 6)(10, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_10_listener() {
        return ctx.goAdd();
      });
      \u0275\u0275elementStart(11, "h2");
      \u0275\u0275text(12, "Create New Media Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Add a new project or use case entry to showcase.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "Start Now \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_17_listener() {
        return ctx.goMediaWorks();
      });
      \u0275\u0275elementStart(18, "h2");
      \u0275\u0275text(19, "Media Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Browse, review and manage all existing media works.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 8);
      \u0275\u0275text(23, "View List \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_24_listener() {
        return ctx.goAddCategory();
      });
      \u0275\u0275elementStart(25, "h2");
      \u0275\u0275text(26, "Add Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Create a new category to classify media works.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 8);
      \u0275\u0275text(30, "Add One \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_31_listener() {
        return ctx.goCategories();
      });
      \u0275\u0275elementStart(32, "h2");
      \u0275\u0275text(33, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p");
      \u0275\u0275text(35, "View all categories currently available.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 8);
      \u0275\u0275text(37, "View List \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_38_listener() {
        return ctx.goEcosystemSubmissions();
      });
      \u0275\u0275elementStart(39, "h2");
      \u0275\u0275text(40, "Ecosystem Submissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Review messages submitted via ecosystem form.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 8);
      \u0275\u0275text(44, "View List \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_45_listener() {
        return ctx.goAddEvent();
      });
      \u0275\u0275elementStart(46, "h2");
      \u0275\u0275text(47, "Create New Event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p");
      \u0275\u0275text(49, "Add a seminar, workshop or meetup.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 8);
      \u0275\u0275text(51, "Create Event \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 7);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_div_click_52_listener() {
        return ctx.goEvents();
      });
      \u0275\u0275elementStart(53, "h2");
      \u0275\u0275text(54, "Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Browse and manage scheduled events.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 8);
      \u0275\u0275text(58, "View Events \u2192");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275classProp("open", ctx.dropdownOpen);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.dropdownOpen);
    }
  }, dependencies: [NgIf], styles: ['\n\n.dashboard-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 0px);\n  padding: 2.5rem clamp(1rem, 4vw, 3rem) 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 45%,\n      #0f172a 100%);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 2.25rem;\n}\n.dash-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.9rem, 3.3vw, 2.4rem);\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.9rem;\n}\n.action-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.action-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 110%;\n  right: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0.4rem 0;\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  min-width: 220px;\n  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.55);\n  z-index: 30;\n}\n.action-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.95rem;\n  font-size: 0.85rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.action-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.action-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.sep[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0.35rem 0;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n  cursor: default;\n}\n.action-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.danger[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.action-dropdown[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.12);\n}\nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n  line-height: 1.1;\n  border: none;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 0.75rem 1.15rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition:\n    background 160ms,\n    transform 160ms,\n    box-shadow 160ms;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n  color: #f8fafc;\n  box-shadow: 0 4px 14px -4px rgba(14, 165, 233, 0.55);\n}\nbutton.secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\nbutton.secondary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #b91c1c);\n  color: #fff;\n  box-shadow: 0 4px 14px -4px rgba(239, 68, 68, 0.6);\n}\nbutton.danger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\nbutton.danger[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.6rem;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: stretch;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(10px) saturate(160%);\n  backdrop-filter: blur(10px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 18px;\n  position: relative;\n  padding: 1.6rem 1.4rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  min-height: 170px;\n  box-shadow: 0 4px 18px -6px rgba(0, 0, 0, 0.45);\n  transition:\n    transform 220ms ease,\n    box-shadow 220ms ease,\n    border-color 200ms,\n    background 200ms;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.15rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.82rem;\n  color: #cbd5e1;\n  line-height: 1.35;\n}\n.card[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #38bdf8;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]:hover:not(.disabled) {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 28px -8px rgba(56, 189, 248, 0.55);\n  border-color: rgba(56, 189, 248, 0.6);\n}\n.card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 3px;\n}\n.card.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.55;\n}\n.card.disabled[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n@media (max-width: 640px) {\n  .dashboard-shell[_ngcontent-%COMP%] {\n    padding: 2rem 1.1rem 2.5rem;\n  }\n  .grid[_ngcontent-%COMP%] {\n    gap: 1.1rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-admin-dashboard", template: '<div class="dashboard-shell">\n  <header class="dash-header">\n    <h1>Admin Dashboard</h1>\n    <div class="actions">\n      <div\n        class="action-dropdown"\n        [class.open]="dropdownOpen"\n        (keydown.escape)="dropdownOpen = false"\n      >\n        <button class="secondary" (click)="toggleDropdown()">\n          \u2699\uFE0F Actions \u25BE\n        </button>\n        <ul class="menu" *ngIf="dropdownOpen">\n          <li (click)="goAdd(); closeDropdown()">\u2795 Add Media Work</li>\n          <li (click)="goAddCategory(); closeDropdown()">\u2795 Add Category</li>\n          <li (click)="goAddEvent(); closeDropdown()">\u2795 Add Event</li>\n          <li (click)="goMediaWorks(); closeDropdown()">\u{1F4C4} View Media Works</li>\n          <li (click)="goCategories(); closeDropdown()">\u{1F4C1} View Categories</li>\n          <li (click)="goEvents(); closeDropdown()">\u{1F4C5} View Events</li>\n          <li (click)="goEcosystemSubmissions(); closeDropdown()">\n            \u{1F331} View Ecosystem Submissions\n          </li>\n          <li class="sep"></li>\n          <li class="danger" (click)="logout(); closeDropdown()">\u23FB Logout</li>\n        </ul>\n      </div>\n    </div>\n  </header>\n  <section class="grid">\n    <div class="card" (click)="goAdd()" tabindex="0">\n      <h2>Create New Media Work</h2>\n      <p>Add a new project or use case entry to showcase.</p>\n      <span class="cta">Start Now \u2192</span>\n    </div>\n    <div class="card" (click)="goMediaWorks()" tabindex="0">\n      <h2>Media Works</h2>\n      <p>Browse, review and manage all existing media works.</p>\n      <span class="cta">View List \u2192</span>\n    </div>\n    <div class="card" (click)="goAddCategory()" tabindex="0">\n      <h2>Add Category</h2>\n      <p>Create a new category to classify media works.</p>\n      <span class="cta">Add One \u2192</span>\n    </div>\n    <div class="card" (click)="goCategories()" tabindex="0">\n      <h2>Categories</h2>\n      <p>View all categories currently available.</p>\n      <span class="cta">View List \u2192</span>\n    </div>\n    <div class="card" (click)="goEcosystemSubmissions()" tabindex="0">\n      <h2>Ecosystem Submissions</h2>\n      <p>Review messages submitted via ecosystem form.</p>\n      <span class="cta">View List \u2192</span>\n    </div>\n    <div class="card" (click)="goAddEvent()" tabindex="0">\n      <h2>Create New Event</h2>\n      <p>Add a seminar, workshop or meetup.</p>\n      <span class="cta">Create Event \u2192</span>\n    </div>\n    <div class="card" (click)="goEvents()" tabindex="0">\n      <h2>Events</h2>\n      <p>Browse and manage scheduled events.</p>\n      <span class="cta">View Events \u2192</span>\n    </div>\n  </section>\n</div>\n', styles: ['/* src/app/modules/admin-panel/components/admin-dashboard.component.scss */\n.dashboard-shell {\n  min-height: calc(100vh - 0px);\n  padding: 2.5rem clamp(1rem, 4vw, 3rem) 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 45%,\n      #0f172a 100%);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n}\n.dash-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 2.25rem;\n}\n.dash-header h1 {\n  margin: 0;\n  font-size: clamp(1.9rem, 3.3vw, 2.4rem);\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.actions {\n  display: flex;\n  gap: 0.9rem;\n}\n.action-dropdown {\n  position: relative;\n}\n.action-dropdown .menu {\n  position: absolute;\n  top: 110%;\n  right: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0.4rem 0;\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  min-width: 220px;\n  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.55);\n  z-index: 30;\n}\n.action-dropdown .menu li {\n  padding: 0.55rem 0.95rem;\n  font-size: 0.85rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.action-dropdown .menu li:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.action-dropdown .menu li.sep {\n  padding: 0;\n  margin: 0.35rem 0;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n  cursor: default;\n}\n.action-dropdown .menu li.danger {\n  color: #f87171;\n}\n.action-dropdown .menu li.danger:hover {\n  background: rgba(248, 113, 113, 0.12);\n}\nbutton {\n  font: inherit;\n  line-height: 1.1;\n  border: none;\n  cursor: pointer;\n  border-radius: 12px;\n  padding: 0.75rem 1.15rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition:\n    background 160ms,\n    transform 160ms,\n    box-shadow 160ms;\n}\nbutton.secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n  color: #f8fafc;\n  box-shadow: 0 4px 14px -4px rgba(14, 165, 233, 0.55);\n}\nbutton.secondary:hover {\n  transform: translateY(-2px);\n}\nbutton.secondary:active {\n  transform: translateY(0);\n}\nbutton.danger {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #b91c1c);\n  color: #fff;\n  box-shadow: 0 4px 14px -4px rgba(239, 68, 68, 0.6);\n}\nbutton.danger:hover {\n  transform: translateY(-2px);\n}\nbutton.danger:active {\n  transform: translateY(0);\n}\n.grid {\n  display: grid;\n  gap: 1.6rem;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  align-items: stretch;\n}\n.card {\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(10px) saturate(160%);\n  backdrop-filter: blur(10px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 18px;\n  position: relative;\n  padding: 1.6rem 1.4rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  min-height: 170px;\n  box-shadow: 0 4px 18px -6px rgba(0, 0, 0, 0.45);\n  transition:\n    transform 220ms ease,\n    box-shadow 220ms ease,\n    border-color 200ms,\n    background 200ms;\n}\n.card h2 {\n  margin: 0 0 0.25rem;\n  font-size: 1.15rem;\n  font-weight: 600;\n}\n.card p {\n  margin: 0 0 0.5rem;\n  font-size: 0.82rem;\n  color: #cbd5e1;\n  line-height: 1.35;\n}\n.card .cta {\n  margin-top: auto;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #38bdf8;\n  font-weight: 600;\n}\n.card:hover:not(.disabled) {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 28px -8px rgba(56, 189, 248, 0.55);\n  border-color: rgba(56, 189, 248, 0.6);\n}\n.card:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 3px;\n}\n.card.disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n.card.disabled:hover {\n  transform: none;\n}\n@media (max-width: 640px) {\n  .dashboard-shell {\n    padding: 2rem 1.1rem 2.5rem;\n  }\n  .grid {\n    gap: 1.1rem;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/modules/admin-panel/components/admin-dashboard.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin-panel/components/admin-login.component.ts
function AdminLoginComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Sign in to continue");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3, "Preparing authentication\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminLoginComponent_form_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Valid email required ");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_form_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Password required ");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_form_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_form_6_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function AdminLoginComponent_form_6_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AdminLoginComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function AdminLoginComponent_form_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "label", 12);
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 13);
    \u0275\u0275template(5, AdminLoginComponent_form_6_div_5_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "label", 15);
    \u0275\u0275text(8, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 16);
    \u0275\u0275template(10, AdminLoginComponent_form_6_div_10_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 17);
    \u0275\u0275template(12, AdminLoginComponent_form_6_span_12_Template, 2, 0, "span", 18)(13, AdminLoginComponent_form_6_span_13_Template, 1, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminLoginComponent_form_6_div_14_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ((tmp_2_0 = ctx_r1.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.form.get("email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ((tmp_4_0 = ctx_r1.form.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("password")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.form.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.form.get("password")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  fb;
  router;
  supabase;
  toast;
  form;
  constructor(fb, router, supabase, toast) {
    this.fb = fb;
    this.router = router;
    this.supabase = supabase;
    this.toast = toast;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  loading = false;
  initializing = true;
  // wait for authReady
  error = null;
  redirected = false;
  authSub;
  ngOnInit() {
    this.authSub = combineLatest([
      this.supabase.authReady$,
      this.supabase.session$
    ]).subscribe(([ready, session]) => {
      if (!ready)
        return;
      if (session) {
        if (!this.redirected && this.router.url.startsWith("/admin/login")) {
          this.redirected = true;
          this.router.navigate(["/admin", "dashboard"]);
          this.authSub?.unsubscribe();
        }
      } else {
        this.initializing = false;
      }
    });
  }
  ngOnDestroy() {
    this.authSub?.unsubscribe();
  }
  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, password } = this.form.value;
    this.loading = true;
    this.error = null;
    this.supabase.signInWithPassword(email, password).subscribe(({ data, error }) => {
      this.loading = false;
      if (error) {
        this.error = error.message;
        this.toast.showError("Login Failed", this.error || "Invalid credentials");
        return;
      }
      this.toast.showSuccess("Welcome", "Login successful");
      this.router.navigate(["/admin", "dashboard"]);
    });
  }
  static \u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SupabaseService), \u0275\u0275directiveInject(ToastrNotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: false, decls: 7, vars: 5, consts: [[1, "login-shell"], [1, "login-card"], [1, "title"], ["class", "subtitle", 4, "ngIf"], ["class", "init-spinner", 4, "ngIf"], ["class", "admin-login-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "subtitle"], [1, "init-spinner"], [1, "spinner"], [1, "init-text"], ["novalidate", "", 1, "admin-login-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email", "autocomplete", "email", "placeholder", "you@example.com"], ["class", "err", 4, "ngIf"], ["for", "password"], ["id", "password", "formControlName", "password", "type", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["type", "submit", 1, "primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["class", "err global", 4, "ngIf"], [1, "err"], [1, "err", "global"]], template: function AdminLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Admin Panel");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AdminLoginComponent_p_4_Template, 2, 0, "p", 3)(5, AdminLoginComponent_div_5_Template, 4, 0, "div", 4)(6, AdminLoginComponent_form_6_Template, 15, 11, "form", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("loading", ctx.loading || ctx.initializing);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.initializing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.initializing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.initializing);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.login-shell[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #1f2937,\n      #0f172a);\n  padding: 1.5rem;\n  overflow: auto;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  color: #f1f5f9;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(14px) saturate(160%);\n  backdrop-filter: blur(14px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 18px;\n  padding: 2.25rem 2rem 2rem;\n  box-shadow: 0 8px 28px -6px rgba(0, 0, 0, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.4);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeIn 400ms ease;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.85rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.75rem;\n  font-size: 0.9rem;\n  text-align: center;\n  color: #cbd5e1;\n  font-weight: 400;\n}\n.admin-login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.85rem;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  color: #f8fafc;\n  font-size: 0.95rem;\n  outline: none;\n  transition:\n    border-color 140ms,\n    background 140ms,\n    box-shadow 140ms;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #38bdf8;\n  background: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);\n}\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.25);\n}\nbutton.primary[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.85rem 1rem;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n  color: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  box-shadow: 0 4px 18px -4px rgba(14, 165, 233, 0.55), 0 2px 6px -2px rgba(14, 165, 233, 0.55);\n  transition:\n    transform 160ms,\n    box-shadow 160ms,\n    filter 160ms;\n}\nbutton.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 22px -6px rgba(14, 165, 233, 0.7), 0 4px 10px -2px rgba(14, 165, 233, 0.6);\n}\nbutton.primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\nbutton.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.25);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.init-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 0 0.4rem;\n}\n.init-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-width: 4px;\n}\n.init-spinner[_ngcontent-%COMP%]   .init-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.05em;\n  color: #cbd5e1;\n  margin: 0;\n}\n.err[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n}\n.err.global[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  text-align: center;\n  font-size: 0.75rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-admin-login", template: `<div class="login-shell">
  <div class="login-card" [class.loading]="loading || initializing">
    <h1 class="title">Admin Panel</h1>
    <p class="subtitle" *ngIf="!initializing">Sign in to continue</p>
    <div class="init-spinner" *ngIf="initializing">
      <div class="spinner"></div>
      <p class="init-text">Preparing authentication\u2026</p>
    </div>
    <form
      *ngIf="!initializing"
      [formGroup]="form"
      (ngSubmit)="login()"
      class="admin-login-form"
      novalidate
    >
      <div
        class="field"
        [class.invalid]="
          form.get('email')?.invalid && form.get('email')?.touched
        "
      >
        <label for="email">Email</label>
        <input
          id="email"
          formControlName="email"
          type="email"
          autocomplete="email"
          placeholder="you@example.com"
        />
        <div
          class="err"
          *ngIf="form.get('email')?.invalid && form.get('email')?.touched"
        >
          Valid email required
        </div>
      </div>
      <div
        class="field"
        [class.invalid]="
          form.get('password')?.invalid && form.get('password')?.touched
        "
      >
        <label for="password">Password</label>
        <input
          id="password"
          formControlName="password"
          type="password"
          autocomplete="current-password"
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
        />
        <div
          class="err"
          *ngIf="form.get('password')?.invalid && form.get('password')?.touched"
        >
          Password required
        </div>
      </div>
      <button
        class="primary"
        type="submit"
        [disabled]="form.invalid || loading"
      >
        <span *ngIf="!loading">Login</span>
        <span *ngIf="loading" class="spinner"></span>
      </button>
      <div *ngIf="error" class="err global">{{ error }}</div>
    </form>
  </div>
</div>
`, styles: ['/* src/app/modules/admin-panel/components/admin-login.component.scss */\n.login-shell {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      #1f2937,\n      #0f172a);\n  padding: 1.5rem;\n  overflow: auto;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  color: #f1f5f9;\n}\n.login-card {\n  width: 100%;\n  max-width: 380px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(14px) saturate(160%);\n  backdrop-filter: blur(14px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 18px;\n  padding: 2.25rem 2rem 2rem;\n  box-shadow: 0 8px 28px -6px rgba(0, 0, 0, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.4);\n  position: relative;\n  animation: fadeIn 400ms ease;\n}\n.title {\n  margin: 0 0 0.25rem;\n  font-size: 1.85rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n.subtitle {\n  margin: 0 0 1.75rem;\n  font-size: 0.9rem;\n  text-align: center;\n  color: #cbd5e1;\n  font-weight: 400;\n}\n.admin-login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.15rem;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.field label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.field input {\n  padding: 0.75rem 0.85rem;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  color: #f8fafc;\n  font-size: 0.95rem;\n  outline: none;\n  transition:\n    border-color 140ms,\n    background 140ms,\n    box-shadow 140ms;\n}\n.field input:focus {\n  border-color: #38bdf8;\n  background: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);\n}\n.field.invalid input {\n  border-color: #f87171;\n  box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.25);\n}\nbutton.primary {\n  margin-top: 0.5rem;\n  padding: 0.85rem 1rem;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #6366f1);\n  color: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  box-shadow: 0 4px 18px -4px rgba(14, 165, 233, 0.55), 0 2px 6px -2px rgba(14, 165, 233, 0.55);\n  transition:\n    transform 160ms,\n    box-shadow 160ms,\n    filter 160ms;\n}\nbutton.primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 22px -6px rgba(14, 165, 233, 0.7), 0 4px 10px -2px rgba(14, 165, 233, 0.6);\n}\nbutton.primary:active:not(:disabled) {\n  transform: translateY(0);\n}\nbutton.primary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.25);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.init-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 0 0.4rem;\n}\n.init-spinner .spinner {\n  width: 38px;\n  height: 38px;\n  border-width: 4px;\n}\n.init-spinner .init-text {\n  font-size: 0.75rem;\n  letter-spacing: 0.05em;\n  color: #cbd5e1;\n  margin: 0;\n}\n.err {\n  color: #f87171;\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n}\n.err.global {\n  margin-top: 0.25rem;\n  text-align: center;\n  font-size: 0.75rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: SupabaseService }, { type: ToastrNotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/modules/admin-panel/components/admin-login.component.ts", lineNumber: 14 });
})();

// src/app/modules/admin-panel/components/admin-add-category.component.ts
function AdminAddCategoryComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Required (max 120 chars) ");
    \u0275\u0275elementEnd();
  }
}
function AdminAddCategoryComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create");
    \u0275\u0275elementEnd();
  }
}
function AdminAddCategoryComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function AdminAddCategoryComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var AdminAddCategoryComponent = class _AdminAddCategoryComponent {
  fb = inject(FormBuilder);
  categories = inject(CategoryService);
  toast = inject(ToastrNotificationService);
  router = inject(Router);
  submitting = false;
  error = null;
  form = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(120)]],
    description: ["", [Validators.maxLength(500)]]
  });
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = null;
    const value = this.form.value;
    this.categories.create({ name: value.name, description: value.description || null }).subscribe({
      next: (cat) => {
        this.submitting = false;
        this.toast.showSuccess("Category Created", cat.name);
        this.router.navigate(["/admin/dashboard"]);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || "Failed";
        this.toast.showError("Create Failed", this.error || "Error");
      }
    });
  }
  static \u0275fac = function AdminAddCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAddCategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddCategoryComponent, selectors: [["app-admin-add-category"]], decls: 22, vars: 8, consts: [[1, "dashboard-shell"], [1, "add-shell"], [1, "add-card"], [1, "head"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "cat-name"], ["id", "cat-name", "formControlName", "name", "placeholder", "e.g. Transportation"], ["class", "err", 4, "ngIf"], ["for", "cat-desc"], ["id", "cat-desc", "rows", "3", "formControlName", "description", "placeholder", "Short description (optional)"], ["type", "submit", 1, "primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["class", "err global", 4, "ngIf"], [1, "err"], [1, "spinner"], [1, "err", "global"]], template: function AdminAddCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "h1");
      \u0275\u0275text(5, "Create Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Add a new category to classify media works.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 4);
      \u0275\u0275listener("ngSubmit", function AdminAddCategoryComponent_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
      \u0275\u0275text(11, "Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 7);
      \u0275\u0275template(13, AdminAddCategoryComponent_div_13_Template, 2, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 5)(15, "label", 9);
      \u0275\u0275text(16, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "textarea", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275template(19, AdminAddCategoryComponent_span_19_Template, 2, 0, "span", 12)(20, AdminAddCategoryComponent_span_20_Template, 1, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, AdminAddCategoryComponent_div_21_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("name")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.submitting || ctx.form.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.dashboard-shell[_ngcontent-%COMP%] {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.add-shell[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n.add-card[_ngcontent-%COMP%] {\n  max-width: 640px;\n  width: 100%;\n  background: #111;\n  border: 1px solid #222;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.5rem;\n  color: white;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.7;\n  font-size: 0.9rem;\n  color: white;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  border: 1px solid #333;\n  color: #eee;\n  padding: 0.55rem 0.7rem;\n  border-radius: 4px;\n  font-size: 0.95rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 0.75rem;\n  margin-top: 0.35rem;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  padding: 0.65rem 1.1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=admin-add-category.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAddCategoryComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-add-category", imports: [CommonModule, ReactiveFormsModule], template: `<div class="dashboard-shell">
  <div class="add-shell">
    <div class="add-card">
      <header class="head">
        <h1>Create Category</h1>
        <p>Add a new category to classify media works.</p>
      </header>

      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <div
          class="field"
          [class.invalid]="
            form.get('name')?.invalid && form.get('name')?.touched
          "
        >
          <label for="cat-name">Name *</label>
          <input
            id="cat-name"
            formControlName="name"
            placeholder="e.g. Transportation"
          />
          <div
            class="err"
            *ngIf="form.get('name')?.invalid && form.get('name')?.touched"
          >
            Required (max 120 chars)
          </div>
        </div>

        <div class="field">
          <label for="cat-desc">Description</label>
          <textarea
            id="cat-desc"
            rows="3"
            formControlName="description"
            placeholder="Short description (optional)"
          ></textarea>
        </div>

        <button
          class="primary"
          type="submit"
          [disabled]="submitting || form.invalid"
        >
          <span *ngIf="!submitting">Create</span>
          <span *ngIf="submitting" class="spinner"></span>
        </button>
        <div class="err global" *ngIf="error">{{ error }}</div>
      </form>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/admin-panel/components/admin-add-category.component.scss */\n.dashboard-shell {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.add-shell {\n  padding: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n.add-card {\n  max-width: 640px;\n  width: 100%;\n  background: #111;\n  border: 1px solid #222;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.head h1 {\n  margin: 0 0 0.25rem;\n  font-size: 1.5rem;\n  color: white;\n}\n.head p {\n  margin: 0;\n  opacity: 0.7;\n  font-size: 0.9rem;\n  color: white;\n}\n.field {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.field.invalid input {\n  border-color: #e74c3c;\n}\n.field label {\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n}\n.field input,\n.field textarea,\n.field select {\n  background: #1b1b1b;\n  border: 1px solid #333;\n  color: #eee;\n  padding: 0.55rem 0.7rem;\n  border-radius: 4px;\n  font-size: 0.95rem;\n}\n.err {\n  color: #e74c3c;\n  font-size: 0.75rem;\n  margin-top: 0.35rem;\n}\nbutton.primary {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  padding: 0.65rem 1.1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton.primary:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=admin-add-category.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddCategoryComponent, { className: "AdminAddCategoryComponent", filePath: "src/app/modules/admin-panel/components/admin-add-category.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin-panel/components/admin-media-works-table.component.ts
function AdminMediaWorksTableComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function AdminMediaWorksTableComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminMediaWorksTableComponent_table_9_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "snakeToWords");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "snakeToWords");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 12)(19, "button", 13);
    \u0275\u0275listener("click", function AdminMediaWorksTableComponent_table_9_tr_20_Template_button_click_19_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(r_r3));
    });
    \u0275\u0275text(20, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 14);
    \u0275\u0275listener("click", function AdminMediaWorksTableComponent_table_9_tr_20_Template_button_click_21_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(r_r3));
    });
    \u0275\u0275text(22, "Del");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.summary || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.type ? \u0275\u0275pipeBind1(9, 7, r_r3.type) : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.status ? \u0275\u0275pipeBind1(12, 9, r_r3.status) : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.categoryName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 11, r_r3.created_at, "short"));
  }
}
function AdminMediaWorksTableComponent_table_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 10);
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AdminMediaWorksTableComponent_table_9_tr_20_Template, 23, 14, "tr", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.rows)("ngForTrackBy", ctx_r0.trackById);
  }
}
function AdminMediaWorksTableComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " No media works yet. ");
    \u0275\u0275elementEnd();
  }
}
var AdminMediaWorksTableComponent = class _AdminMediaWorksTableComponent {
  media = inject(MediaWorkService);
  toast = inject(ToastrNotificationService);
  router = inject(Router);
  rows = [];
  loading = false;
  error = null;
  ngOnInit() {
    this.load();
  }
  trackById(_index, item) {
    return item.id;
  }
  load() {
    this.loading = true;
    this.media.list().subscribe({
      next: (list) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || "Failed to load";
        this.loading = false;
      }
    });
  }
  edit(row) {
    this.router.navigate(["/admin/edit-media", row.id]);
  }
  delete(row) {
    if (!confirm(`Delete media work "${row.name}"? This cannot be undone.`))
      return;
    this.media.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess("Deleted", row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e) => {
        this.toast.showError("Delete Failed", e.message || "Error");
      }
    });
  }
  static \u0275fac = function AdminMediaWorksTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminMediaWorksTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMediaWorksTableComponent, selectors: [["app-admin-media-works-table"]], decls: 11, vars: 5, consts: [[1, "dashboard-shell"], [1, "table-shell"], [1, "head"], [1, "secondary", 3, "click", "disabled"], [4, "ngIf"], ["class", "err", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "err"], [1, "data-table"], [2, "width", "140px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "actions"], [1, "secondary", 3, "click"], [1, "danger", 3, "click"], [1, "empty"]], template: function AdminMediaWorksTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1");
      \u0275\u0275text(4, "Media Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function AdminMediaWorksTableComponent_Template_button_click_5_listener() {
        return ctx.load();
      });
      \u0275\u0275text(6, " Reload ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AdminMediaWorksTableComponent_div_7_Template, 2, 0, "div", 4)(8, AdminMediaWorksTableComponent_div_8_Template, 2, 1, "div", 5)(9, AdminMediaWorksTableComponent_table_9_Template, 21, 2, "table", 6)(10, AdminMediaWorksTableComponent_div_10_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.rows.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && !ctx.rows.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, SnakeToWordsPipe], styles: ["\n\n.table-shell[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.dashboard-shell[_ngcontent-%COMP%] {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #141414;\n  font-weight: 600;\n  color: white;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: yellow;\n}\n.err[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=admin-media-works-table.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminMediaWorksTableComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-media-works-table", imports: [CommonModule, SnakeToWordsPipe], template: '<div class="dashboard-shell">\n  <div class="table-shell">\n    <header class="head">\n      <h1>Media Works</h1>\n      <button class="secondary" (click)="load()" [disabled]="loading">\n        Reload\n      </button>\n    </header>\n    <div *ngIf="loading">Loading...</div>\n    <div *ngIf="error" class="err">{{ error }}</div>\n    <table *ngIf="!loading && !error && rows.length" class="data-table">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Summary</th>\n          <th>Description</th>\n          <th>Type</th>\n          <th>Status</th>\n          <th>Category</th>\n          <th>Created</th>\n          <th style="width: 140px">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor="let r of rows; let i = index; trackBy: trackById">\n          <td>{{ r.name }}</td>\n          <td>{{ r.summary || "-" }}</td>\n          <td>{{ r.description || "-" }}</td>\n          <td>{{ r.type ? (r.type | snakeToWords) : "-" }}</td>\n          <td>{{ r.status ? (r.status | snakeToWords) : "-" }}</td>\n          <td>{{ r.categoryName || "\u2014" }}</td>\n          <td>{{ r.created_at | date : "short" }}</td>\n          <td class="actions">\n            <button class="secondary" (click)="edit(r)">Edit</button>\n            <button class="danger" (click)="delete(r)">Del</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div *ngIf="!loading && !error && !rows.length" class="empty">\n      No media works yet.\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/admin-panel/components/admin-media-works-table.component.scss */\n.table-shell {\n  padding: 1.25rem;\n}\n.dashboard-shell {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\nbutton {\n  margin-left: 0.5rem;\n}\n.data-table th,\n.data-table td {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n}\n.data-table th {\n  background: #141414;\n  font-weight: 600;\n  color: white;\n}\n.data-table tbody tr {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table tbody tr:hover {\n  background: yellow;\n}\n.err {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\nbutton.danger {\n  background: #ef4444;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.actions {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=admin-media-works-table.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMediaWorksTableComponent, { className: "AdminMediaWorksTableComponent", filePath: "src/app/modules/admin-panel/components/admin-media-works-table.component.ts", lineNumber: 16 });
})();

// src/app/modules/admin-panel/components/admin-categories-table.component.ts
function AdminCategoriesTableComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function AdminCategoriesTableComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminCategoriesTableComponent_table_8_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 11)(11, "button", 12);
    \u0275\u0275listener("click", function AdminCategoriesTableComponent_table_8_tr_14_Template_button_click_11_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(r_r3));
    });
    \u0275\u0275text(12, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function AdminCategoriesTableComponent_table_8_tr_14_Template_button_click_13_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(r_r3));
    });
    \u0275\u0275text(14, "Del");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, r_r3.created_at, "short"));
  }
}
function AdminCategoriesTableComponent_table_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 8)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 9);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AdminCategoriesTableComponent_table_8_tr_14_Template, 15, 7, "tr", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.rows)("ngForTrackBy", ctx_r0.trackById);
  }
}
function AdminCategoriesTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " No categories yet. ");
    \u0275\u0275elementEnd();
  }
}
var AdminCategoriesTableComponent = class _AdminCategoriesTableComponent {
  categoriesSvc = inject(CategoryService);
  toast = inject(ToastrNotificationService);
  router = inject(Router);
  rows = [];
  loading = false;
  error = null;
  ngOnInit() {
    this.load();
  }
  trackById(_idx, item) {
    return item.id;
  }
  load() {
    this.loading = true;
    this.categoriesSvc.list().subscribe({
      next: (list) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || "Failed to load";
        this.loading = false;
      }
    });
  }
  edit(row) {
    this.router.navigate(["/admin/edit-category", row.id]);
  }
  delete(row) {
    if (!confirm(`Delete category "${row.name}"? Media works referencing it will have a null category.`))
      return;
    this.categoriesSvc.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess("Deleted", row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e) => this.toast.showError("Delete Failed", e.message || "Error")
    });
  }
  static \u0275fac = function AdminCategoriesTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCategoriesTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCategoriesTableComponent, selectors: [["app-admin-categories-table"]], decls: 10, vars: 5, consts: [[1, "table-shell"], [1, "head"], [1, "secondary", 3, "click", "disabled"], [4, "ngIf"], ["class", "err", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "err"], [1, "data-table"], [2, "width", "140px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "actions"], [1, "secondary", 3, "click"], [1, "danger", 3, "click"], [1, "empty"]], template: function AdminCategoriesTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function AdminCategoriesTableComponent_Template_button_click_4_listener() {
        return ctx.load();
      });
      \u0275\u0275text(5, " Reload ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, AdminCategoriesTableComponent_div_6_Template, 2, 0, "div", 3)(7, AdminCategoriesTableComponent_div_7_Template, 2, 1, "div", 4)(8, AdminCategoriesTableComponent_table_8_Template, 15, 2, "table", 5)(9, AdminCategoriesTableComponent_div_9_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.rows.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && !ctx.rows.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ["\n\n.table-shell[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #141414;\n  font-weight: 600;\n  color: white;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: yellow;\n}\n.err[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=admin-categories-table.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCategoriesTableComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-categories-table", imports: [CommonModule], template: '<div class="table-shell">\n  <header class="head">\n    <h1>Categories</h1>\n    <button class="secondary" (click)="load()" [disabled]="loading">\n      Reload\n    </button>\n  </header>\n  <div *ngIf="loading">Loading...</div>\n  <div *ngIf="error" class="err">{{ error }}</div>\n  <table *ngIf="!loading && !error && rows.length" class="data-table">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Slug</th>\n        <th>Description</th>\n        <th>Created</th>\n        <th style="width: 140px">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let r of rows; trackBy: trackById">\n        <td>{{ r.name }}</td>\n        <td>{{ r.slug }}</td>\n        <td>{{ r.description || "\u2014" }}</td>\n        <td>{{ r.created_at | date : "short" }}</td>\n        <td class="actions">\n          <button class="secondary" (click)="edit(r)">Edit</button>\n          <button class="danger" (click)="delete(r)">Del</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf="!loading && !error && !rows.length" class="empty">\n    No categories yet.\n  </div>\n</div>\n', styles: ["/* src/app/modules/admin-panel/components/admin-categories-table.component.scss */\n.table-shell {\n  padding: 1.25rem;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n.data-table th,\n.data-table td {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n}\nbutton {\n  margin-left: 0.5rem;\n}\n.data-table th {\n  background: #141414;\n  font-weight: 600;\n  color: white;\n}\n.data-table tbody tr {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table tbody tr:hover {\n  background: yellow;\n}\n.err {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\nbutton.danger {\n  background: #ef4444;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.actions {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=admin-categories-table.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCategoriesTableComponent, { className: "AdminCategoriesTableComponent", filePath: "src/app/modules/admin-panel/components/admin-categories-table.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin-panel/components/admin-edit-media.component.ts
function AdminEditMediaComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AdminEditMediaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "header", 4)(3, "h1");
    \u0275\u0275text(4, "Edit Media Work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Edit details for the selected project or use case.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "app-media-work-form", 5);
    \u0275\u0275listener("save", function AdminEditMediaComponent_div_0_Template_app_media_work_form_save_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AdminEditMediaComponent_div_0_div_8_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r1.media)("submitLabel", "Update")("submitting", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function AdminEditMediaComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "p", 12);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminEditMediaComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AdminEditMediaComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminEditMediaComponent_ng_template_1_div_0_Template, 4, 0, "div", 8)(1, AdminEditMediaComponent_ng_template_1_div_1_Template, 4, 1, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.loading && !ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.error);
  }
}
var AdminEditMediaComponent = class _AdminEditMediaComponent {
  route = inject(ActivatedRoute);
  mediaService = inject(MediaWorkService);
  toast = inject(ToastrNotificationService);
  router = inject(Router);
  loading = true;
  submitting = false;
  error = null;
  media = null;
  id = null;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (!this.id) {
      this.error = "Missing id parameter";
      this.loading = false;
      return;
    }
    this.mediaService.getById(this.id).subscribe({
      next: (m) => {
        this.media = m;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || "Failed to load media work";
        this.loading = false;
      }
    });
  }
  update(patch) {
    if (!this.id)
      return;
    this.submitting = true;
    this.error = null;
    this.mediaService.update(this.id, patch).subscribe({
      next: (updated) => {
        this.submitting = false;
        this.media = updated;
        this.toast.showSuccess("Updated", `Media Work '${updated.name}' saved`);
        this.router.navigate(["/admin/media-works"]);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || "Update failed";
        this.toast.showError("Update Failed", this.error || "Unknown error");
      }
    });
  }
  static \u0275fac = function AdminEditMediaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminEditMediaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEditMediaComponent, selectors: [["app-admin-edit-media"]], decls: 3, vars: 2, consts: [["loadingTpl", ""], ["class", "add-shell", 4, "ngIf", "ngIfElse"], [1, "add-shell"], [1, "add-card"], [1, "head"], [1, "media-form", 3, "save", "value", "submitLabel", "submitting"], ["class", "err global", 4, "ngIf"], [1, "err", "global"], ["class", "add-shell loading-shell", 4, "ngIf"], ["class", "add-shell", 4, "ngIf"], [1, "add-shell", "loading-shell"], [1, "add-card", "skeleton"], [1, "loading"]], template: function AdminEditMediaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AdminEditMediaComponent_div_0_Template, 9, 4, "div", 1)(1, AdminEditMediaComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loadingTpl_r3 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.media)("ngIfElse", loadingTpl_r3);
    }
  }, dependencies: [CommonModule, NgIf, MediaWorkFormComponent], styles: ['\n\n.add-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 0px);\n  padding: 2.4rem clamp(1rem, 4vw, 3rem) 3.2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e293b 55%,\n      #0f172a);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.add-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 860px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  backdrop-filter: blur(12px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 2.25rem 2.2rem 2.4rem;\n  box-shadow: 0 6px 26px -8px rgba(0, 0, 0, 0.55);\n  animation: _ngcontent-%COMP%_fadeIn 400ms ease;\n  display: flex;\n  flex-direction: column;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.6rem, 2.6vw, 2.1rem);\n  font-weight: 600;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1.4rem;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n}\n.media-form[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.err.global[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #f87171;\n  font-size: 0.8rem;\n  text-align: center;\n}\n.loading-shell[_ngcontent-%COMP%]   .add-card.skeleton[_ngcontent-%COMP%] {\n  min-height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loading[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n@media (max-width: 720px) {\n  .add-shell[_ngcontent-%COMP%] {\n    padding: 2rem 1.1rem 2.6rem;\n  }\n  .add-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.3rem 2.2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-edit-media.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEditMediaComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-edit-media", imports: [CommonModule, MediaWorkFormComponent], template: `<div class="add-shell" *ngIf="!loading && media; else loadingTpl">
  <div class="add-card">
    <header class="head">
      <h1>Edit Media Work</h1>
      <p>Edit details for the selected project or use case.</p>
    </header>
    <app-media-work-form
      class="media-form"
      [value]="media"
      [submitLabel]="'Update'"
      [submitting]="submitting"
      (save)="update($event)"
    ></app-media-work-form>
    <div *ngIf="error" class="err global">{{ error }}</div>
  </div>
</div>
<ng-template #loadingTpl>
  <div class="add-shell loading-shell" *ngIf="loading && !error">
    <div class="add-card skeleton">
      <p class="loading">Loading...</p>
    </div>
  </div>
  <div class="add-shell" *ngIf="!loading && error">
    <div class="add-card">
      <div class="err global">{{ error }}</div>
    </div>
  </div>
</ng-template>
`, styles: ['/* src/app/modules/admin-panel/components/admin-edit-media.component.scss */\n.add-shell {\n  min-height: calc(100vh - 0px);\n  padding: 2.4rem clamp(1rem, 4vw, 3rem) 3.2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e293b 55%,\n      #0f172a);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.add-card {\n  width: 100%;\n  max-width: 860px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  backdrop-filter: blur(12px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 2.25rem 2.2rem 2.4rem;\n  box-shadow: 0 6px 26px -8px rgba(0, 0, 0, 0.55);\n  animation: fadeIn 400ms ease;\n  display: flex;\n  flex-direction: column;\n}\n.head h1 {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.6rem, 2.6vw, 2.1rem);\n  font-weight: 600;\n}\n.head p {\n  margin: 0 0 1.4rem;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n}\n.media-form {\n  margin-top: 0.25rem;\n}\n.err.global {\n  margin-top: 1rem;\n  color: #f87171;\n  font-size: 0.8rem;\n  text-align: center;\n}\n.loading-shell .add-card.skeleton {\n  min-height: 160px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loading {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n@media (max-width: 720px) {\n  .add-shell {\n    padding: 2rem 1.1rem 2.6rem;\n  }\n  .add-card {\n    padding: 2rem 1.3rem 2.2rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-edit-media.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEditMediaComponent, { className: "AdminEditMediaComponent", filePath: "src/app/modules/admin-panel/components/admin-edit-media.component.ts", lineNumber: 16 });
})();

// src/app/modules/admin-panel/components/admin-edit-category.component.ts
function AdminEditCategoryComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Required (max 120 chars) ");
    \u0275\u0275elementEnd();
  }
}
function AdminEditCategoryComponent_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Update");
    \u0275\u0275elementEnd();
  }
}
function AdminEditCategoryComponent_div_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
function AdminEditCategoryComponent_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AdminEditCategoryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "header", 5)(3, "h1");
    \u0275\u0275text(4, "Edit Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function AdminEditCategoryComponent_div_1_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "div", 7)(9, "label", 8);
    \u0275\u0275text(10, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 9);
    \u0275\u0275template(12, AdminEditCategoryComponent_div_1_div_12_Template, 2, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "label", 11);
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "textarea", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275template(18, AdminEditCategoryComponent_div_1_span_18_Template, 2, 0, "span", 14)(19, AdminEditCategoryComponent_div_1_span_19_Template, 1, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminEditCategoryComponent_div_1_div_20_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Update the details for '", ctx_r1.category.name, "'.");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.form.get("name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.form.get("name")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.submitting || ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function AdminEditCategoryComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 21);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function AdminEditCategoryComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AdminEditCategoryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdminEditCategoryComponent_ng_template_2_div_0_Template, 4, 0, "div", 20)(1, AdminEditCategoryComponent_ng_template_2_div_1_Template, 4, 1, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.loading && !ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.error);
  }
}
var AdminEditCategoryComponent = class _AdminEditCategoryComponent {
  route = inject(ActivatedRoute);
  categories = inject(CategoryService);
  toast = inject(ToastrNotificationService);
  router = inject(Router);
  fb = inject(FormBuilder);
  loading = true;
  submitting = false;
  error = null;
  category = null;
  id = null;
  form = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(120)]],
    description: ["", [Validators.maxLength(500)]]
  });
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (!this.id) {
      this.error = "Missing id parameter";
      this.loading = false;
      return;
    }
    this.categories.getById(this.id).subscribe({
      next: (cat) => {
        this.category = cat;
        this.form.patchValue({
          name: cat.name,
          description: cat.description || ""
        });
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || "Failed to load category";
        this.loading = false;
      }
    });
  }
  submit() {
    if (!this.id)
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = null;
    const value = this.form.value;
    this.categories.update(this.id, {
      name: value.name || void 0,
      description: value.description ?? void 0
    }).subscribe({
      next: (cat) => {
        this.submitting = false;
        this.toast.showSuccess("Category Updated", cat.name);
        this.router.navigate(["/admin/categories"]);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || "Failed";
        this.toast.showError("Update Failed", this.error || "Error");
      }
    });
  }
  static \u0275fac = function AdminEditCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminEditCategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEditCategoryComponent, selectors: [["app-admin-edit-category"]], decls: 4, vars: 2, consts: [["loadingTpl", ""], [1, "dashboard-shell"], ["class", "add-shell", 4, "ngIf", "ngIfElse"], [1, "add-shell"], [1, "add-card"], [1, "head"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "cat-name"], ["id", "cat-name", "formControlName", "name", "placeholder", "Category name"], ["class", "err", 4, "ngIf"], ["for", "cat-desc"], ["id", "cat-desc", "rows", "3", "formControlName", "description", "placeholder", "Short description (optional)"], ["type", "submit", 1, "primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["class", "err global", 4, "ngIf"], [1, "err"], [1, "spinner"], [1, "err", "global"], ["class", "add-shell", 4, "ngIf"], [1, "loading"]], template: function AdminEditCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AdminEditCategoryComponent_div_1_Template, 21, 9, "div", 2)(2, AdminEditCategoryComponent_ng_template_2_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loadingTpl_r3 = \u0275\u0275reference(3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.category)("ngIfElse", loadingTpl_r3);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.dashboard-shell[_ngcontent-%COMP%] {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.add-shell[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n.add-card[_ngcontent-%COMP%] {\n  max-width: 640px;\n  width: 100%;\n  background: #111;\n  border: 1px solid #222;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.5rem;\n  color: white;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.7;\n  font-size: 0.9rem;\n  color: white;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #1b1b1b;\n  border: 1px solid #333;\n  color: #eee;\n  padding: 0.55rem 0.7rem;\n  border-radius: 4px;\n  font-size: 0.95rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 0.75rem;\n  margin-top: 0.35rem;\n}\nbutton.primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  padding: 0.65rem 1.1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n}\n.loading[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n  text-align: center;\n  font-size: 0.85rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=admin-edit-category.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEditCategoryComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-edit-category", imports: [CommonModule, ReactiveFormsModule], template: `<div class="dashboard-shell">
  <div class="add-shell" *ngIf="!loading && category; else loadingTpl">
    <div class="add-card">
      <header class="head">
        <h1>Edit Category</h1>
        <p>Update the details for '{{ category.name }}'.</p>
      </header>

      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <div
          class="field"
          [class.invalid]="
            form.get('name')?.invalid && form.get('name')?.touched
          "
        >
          <label for="cat-name">Name *</label>
          <input
            id="cat-name"
            formControlName="name"
            placeholder="Category name"
          />
          <div
            class="err"
            *ngIf="form.get('name')?.invalid && form.get('name')?.touched"
          >
            Required (max 120 chars)
          </div>
        </div>

        <div class="field">
          <label for="cat-desc">Description</label>
          <textarea
            id="cat-desc"
            rows="3"
            formControlName="description"
            placeholder="Short description (optional)"
          ></textarea>
        </div>

        <button
          class="primary"
          type="submit"
          [disabled]="submitting || form.invalid"
        >
          <span *ngIf="!submitting">Update</span>
          <span *ngIf="submitting" class="spinner"></span>
        </button>
        <div class="err global" *ngIf="error">{{ error }}</div>
      </form>
    </div>
  </div>
  <ng-template #loadingTpl>
    <div class="add-shell" *ngIf="loading && !error">
      <div class="add-card"><div class="loading">Loading...</div></div>
    </div>
    <div class="add-shell" *ngIf="!loading && error">
      <div class="add-card">
        <div class="err global">{{ error }}</div>
      </div>
    </div>
  </ng-template>
</div>
`, styles: ["/* src/app/modules/admin-panel/components/admin-edit-category.component.scss */\n.dashboard-shell {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.add-shell {\n  padding: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n.add-card {\n  max-width: 640px;\n  width: 100%;\n  background: #111;\n  border: 1px solid #222;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.head h1 {\n  margin: 0 0 0.25rem;\n  font-size: 1.5rem;\n  color: white;\n}\n.head p {\n  margin: 0;\n  opacity: 0.7;\n  font-size: 0.9rem;\n  color: white;\n}\n.field {\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.field.invalid input {\n  border-color: #e74c3c;\n}\n.field label {\n  font-weight: 600;\n  margin-bottom: 0.35rem;\n}\n.field input,\n.field textarea,\n.field select {\n  background: #1b1b1b;\n  border: 1px solid #333;\n  color: #eee;\n  padding: 0.55rem 0.7rem;\n  border-radius: 4px;\n  font-size: 0.95rem;\n}\n.err {\n  color: #e74c3c;\n  font-size: 0.75rem;\n  margin-top: 0.35rem;\n}\nbutton.primary {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  padding: 0.65rem 1.1rem;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton.primary:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.spinner {\n  width: 18px;\n  height: 18px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.head h1 {\n  color: white;\n}\n.loading {\n  padding: 1.25rem 0;\n  text-align: center;\n  font-size: 0.85rem;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=admin-edit-category.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEditCategoryComponent, { className: "AdminEditCategoryComponent", filePath: "src/app/modules/admin-panel/components/admin-edit-category.component.ts", lineNumber: 16 });
})();

// src/app/modules/admin-panel/components/admin-ecosystem-submissions-table.component.ts
function AdminEcosystemSubmissionsTableComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function AdminEcosystemSubmissionsTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminEcosystemSubmissionsTableComponent_table_10_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 15)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("title", r_r2.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + r_r2.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.designation || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("title", r_r2.message);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, r_r2.created_at, "short"));
  }
}
function AdminEcosystemSubmissionsTableComponent_table_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th", 10);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 11);
    \u0275\u0275text(6, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 12);
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 13);
    \u0275\u0275text(10, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 13);
    \u0275\u0275text(14, "Submitted");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, AdminEcosystemSubmissionsTableComponent_table_10_tr_16_Template, 15, 12, "tr", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.rows)("ngForTrackBy", ctx_r0.trackById);
  }
}
function AdminEcosystemSubmissionsTableComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " No ecosystem submissions yet. ");
    \u0275\u0275elementEnd();
  }
}
var AdminEcosystemSubmissionsTableComponent = class _AdminEcosystemSubmissionsTableComponent {
  eco = inject(EcosystemService);
  rows = [];
  loading = false;
  error = null;
  ngOnInit() {
    this.load();
  }
  trackById(_idx, item) {
    return item.id;
  }
  load() {
    this.loading = true;
    this.eco.list().subscribe({
      next: (list) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || "Failed to load";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AdminEcosystemSubmissionsTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminEcosystemSubmissionsTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEcosystemSubmissionsTableComponent, selectors: [["app-admin-ecosystem-submissions-table"]], decls: 12, vars: 5, consts: [[1, "dashboard-shell"], [1, "table-shell"], [1, "head"], [1, "secondary", 3, "click", "disabled"], [4, "ngIf"], ["class", "err", 4, "ngIf"], ["class", "data-table ecosystem-table", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "err"], [1, "data-table", "ecosystem-table"], [2, "width", "160px"], [2, "width", "200px"], [2, "width", "120px"], [2, "width", "140px"], [3, "title", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "title"], [3, "href"], [1, "msg", 3, "title"], [1, "empty"]], template: function AdminEcosystemSubmissionsTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1");
      \u0275\u0275text(4, "Ecosystem Submissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "button", 3);
      \u0275\u0275listener("click", function AdminEcosystemSubmissionsTableComponent_Template_button_click_6_listener() {
        return ctx.load();
      });
      \u0275\u0275text(7, " Reload ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, AdminEcosystemSubmissionsTableComponent_div_8_Template, 2, 0, "div", 4)(9, AdminEcosystemSubmissionsTableComponent_div_9_Template, 2, 1, "div", 5)(10, AdminEcosystemSubmissionsTableComponent_table_10_Template, 17, 2, "table", 6)(11, AdminEcosystemSubmissionsTableComponent_div_11_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.rows.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && !ctx.rows.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ["\n\n.table-shell[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.dashboard-shell[_ngcontent-%COMP%] {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n  table-layout: fixed;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n  vertical-align: top;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #141414;\n  font-weight: 600;\n  color: #fff;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: yellow;\n}\n.ecosystem-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4da3ff;\n  text-decoration: none;\n}\n.ecosystem-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.msg[_ngcontent-%COMP%] {\n  max-width: 340px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.err[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n@media (max-width: 900px) {\n  .msg[_ngcontent-%COMP%] {\n    max-width: 220px;\n  }\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), \n   .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n   .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-ecosystem-submissions-table.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEcosystemSubmissionsTableComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-ecosystem-submissions-table", imports: [CommonModule], template: `<div class="dashboard-shell">
  <div class="table-shell">
    <header class="head">
      <h1>Ecosystem Submissions</h1>
      <div>
        <button class="secondary" (click)="load()" [disabled]="loading">
          Reload
        </button>
      </div>
    </header>
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error" class="err">{{ error }}</div>
    <table
      *ngIf="!loading && !error && rows.length"
      class="data-table ecosystem-table"
    >
      <thead>
        <tr>
          <th style="width: 160px">Name</th>
          <th style="width: 200px">Email</th>
          <th style="width: 120px">Phone</th>
          <th style="width: 140px">Designation</th>
          <th>Message</th>
          <th style="width: 140px">Submitted</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let r of rows; trackBy: trackById" [title]="r.message">
          <td>{{ r.name }}</td>
          <td>
            <a [href]="'mailto:' + r.email">{{ r.email }}</a>
          </td>
          <td>{{ r.phone || "\u2014" }}</td>
          <td>{{ r.designation || "\u2014" }}</td>
          <td class="msg" [title]="r.message">{{ r.message }}</td>
          <td>{{ r.created_at | date : "short" }}</td>
        </tr>
      </tbody>
    </table>
    <div *ngIf="!loading && !error && !rows.length" class="empty">
      No ecosystem submissions yet.
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/admin-panel/components/admin-ecosystem-submissions-table.component.scss */\n.table-shell {\n  padding: 1.25rem;\n}\n.dashboard-shell {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n  table-layout: fixed;\n}\n.data-table th,\n.data-table td {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n  vertical-align: top;\n}\n.data-table th {\n  background: #141414;\n  font-weight: 600;\n  color: #fff;\n}\n.data-table tbody tr {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table tbody tr:hover {\n  background: yellow;\n}\n.ecosystem-table td a {\n  color: #4da3ff;\n  text-decoration: none;\n}\n.ecosystem-table td a:hover {\n  text-decoration: underline;\n}\n.msg {\n  max-width: 340px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.err {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n@media (max-width: 900px) {\n  .msg {\n    max-width: 220px;\n  }\n  .data-table th:nth-child(3),\n  .data-table td:nth-child(3),\n  .data-table th:nth-child(4),\n  .data-table td:nth-child(4) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-ecosystem-submissions-table.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEcosystemSubmissionsTableComponent, { className: "AdminEcosystemSubmissionsTableComponent", filePath: "src/app/modules/admin-panel/components/admin-ecosystem-submissions-table.component.ts", lineNumber: 13 });
})();

// src/app/modules/admin-panel/components/admin-add-event.component.ts
function AdminAddEventComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2.name, " ");
  }
}
function AdminAddEventComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "No event types yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminAddEventComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2, "Select or drop an image (max 5MB)");
    \u0275\u0275elementEnd()();
  }
}
function AdminAddEventComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.imageUploadProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.imageUploadProgress, "%");
  }
}
function AdminAddEventComponent_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.imageSignedUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminAddEventComponent_div_42_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.model.image_url);
  }
}
function AdminAddEventComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, AdminAddEventComponent_div_42_div_1_Template, 2, 1, "div", 36)(2, AdminAddEventComponent_div_42_ng_template_2_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function AdminAddEventComponent_div_42_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275text(5, " Remove ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noSigned_r5 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imageSignedUrl)("ngIfElse", noSigned_r5);
  }
}
function AdminAddEventComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.imageError);
  }
}
function AdminAddEventComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
var AdminAddEventComponent = class _AdminAddEventComponent {
  eventsService = inject(EventService);
  eventTypeService = inject(EventTypeService);
  router = inject(Router);
  toast = inject(ToastrNotificationService);
  submitting = false;
  error = null;
  eventTypes = [];
  loadingTypes = false;
  typesError = null;
  model = {
    name: "",
    description: "",
    location: "",
    event_type_id: "",
    starts_at: "",
    ends_at: "",
    image_url: ""
  };
  // Image upload state
  uploadingImage = false;
  imageUploadProgress = 0;
  imageError = null;
  imageSignedUrl = null;
  // optional preview if we decide to sign after upload
  IMAGES_BUCKET = "VisionMediaBucket";
  SIGNED_URL_TTL_SECONDS = 60 * 10;
  ngOnInit() {
    this.loadEventTypes();
  }
  loadEventTypes() {
    this.loadingTypes = true;
    this.typesError = null;
    this.eventTypeService.list().subscribe({
      next: (list) => {
        this.eventTypes = list;
        this.loadingTypes = false;
      },
      error: (e) => {
        this.loadingTypes = false;
        this.typesError = e?.message || "Failed to load types";
        console.error("Failed loading event types", e);
      }
    });
  }
  create() {
    if (!this.model.name || !this.model.event_type_id) {
      this.error = "Name and Event Type are required";
      return;
    }
    this.submitting = true;
    this.error = null;
    this.eventsService.create(this.model).subscribe({
      next: (created) => {
        this.submitting = false;
        this.toast.showSuccess("Created", `Event '${created.name}' saved`);
        this.router.navigate(["/admin/events"]);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || "Failed";
        this.toast.showError("Create Failed", this.error || "Unknown error");
      }
    });
  }
  onImageFileSelected(ev) {
    const input = ev.target;
    if (!input?.files || !input.files.length)
      return;
    const file = input.files[0];
    this.imageError = null;
    if (!file.type.startsWith("image/")) {
      this.imageError = "Only image files are allowed";
      input.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = "Image exceeds 5MB limit";
      input.value = "";
      return;
    }
    this.uploadingImage = true;
    this.imageUploadProgress = 10;
    const path = this.buildImagePath(file.name);
    this.eventsService["supabase"].client.storage.from(this.IMAGES_BUCKET).upload(path, file, { upsert: true, contentType: file.type }).then((_0) => __async(this, [_0], function* ({ error }) {
      if (error)
        throw error;
      this.imageUploadProgress = 85;
      this.model.image_url = path;
      yield this.refreshImageSignedUrl(path);
      this.imageUploadProgress = 100;
      this.toast.showSuccess("Image Uploaded", "Image successfully uploaded");
    })).catch((e) => {
      console.error("[AddEvent] image upload error", e);
      this.imageError = e?.message || "Upload failed";
      this.toast.showError("Upload Failed", this.imageError || "Unknown error");
    }).finally(() => {
      setTimeout(() => this.uploadingImage = false, 300);
      setTimeout(() => this.imageUploadProgress = 0, 800);
    });
  }
  removeImage() {
    const current = this.model.image_url;
    if (!current)
      return;
    this.eventsService["supabase"].client.storage.from(this.IMAGES_BUCKET).remove([current]).then(({ error }) => {
      if (error)
        throw error;
      this.model.image_url = "";
      this.imageSignedUrl = null;
      this.toast.showInfo("Removed", "Image deleted");
    }).catch((e) => {
      this.toast.showError("Remove Failed", e?.message || "Error removing image");
    });
  }
  buildImagePath(originalName) {
    const safe = originalName.replace(/[^a-zA-Z0-9_.-]+/g, "_");
    const ts = Date.now();
    return `events/${ts}_${safe}`;
  }
  refreshImageSignedUrl(path) {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.eventsService["supabase"].client.storage.from(this.IMAGES_BUCKET).createSignedUrl(path, this.SIGNED_URL_TTL_SECONDS);
        if (error)
          throw error;
        this.imageSignedUrl = data?.signedUrl || null;
      } catch (e) {
        console.warn("[AddEvent] signed URL error", e);
        this.imageSignedUrl = null;
      }
    });
  }
  static \u0275fac = function AdminAddEventComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminAddEventComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminAddEventComponent, selectors: [["app-admin-add-event"]], standalone: false, decls: 61, vars: 20, consts: [["f", "ngForm"], ["noSigned", ""], [1, "add-shell"], [1, "add-card"], [1, "head"], ["novalidate", "", 1, "event-form", 3, "ngSubmit"], [1, "grid", "two"], [1, "field"], [1, "req"], ["name", "name", "required", "", "maxlength", "120", "placeholder", "Media Production Masterclass", 3, "ngModelChange", "ngModel"], ["name", "event_type_id", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "hint", 4, "ngIf"], ["name", "description", "rows", "4", "placeholder", "Short description", 3, "ngModelChange", "ngModel"], ["name", "location", "placeholder", "NUST Islamabad / Online", 3, "ngModelChange", "ngModel"], [1, "field", "image-field"], [1, "upload-box"], ["type", "file", "accept", "image/*", 3, "change", "disabled"], ["class", "placeholder", 4, "ngIf"], ["class", "progress", 4, "ngIf"], ["class", "img-preview", 4, "ngIf"], [1, "hint"], ["class", "err", 4, "ngIf"], ["type", "datetime-local", "name", "starts_at", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", "name", "ends_at", 3, "ngModelChange", "ngModel"], ["class", "err global", 4, "ngIf"], [1, "actions"], ["type", "submit", 3, "disabled"], ["type", "button", "routerLink", "/admin/events", 1, "secondary"], [3, "value"], [1, "placeholder"], [1, "progress"], [1, "bar"], [1, "pc"], [1, "img-preview"], ["class", "thumb", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "danger", "mini", 3, "click"], [1, "thumb"], ["alt", "Event image preview", 3, "src"], [1, "err"], [1, "err", "global"]], template: function AdminAddEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "header", 4)(3, "h1");
      \u0275\u0275text(4, "Create Event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Schedule a seminar, workshop or meetup.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 5, 0);
      \u0275\u0275listener("ngSubmit", function AdminAddEventComponent_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.create());
      });
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "label");
      \u0275\u0275text(12, "Name ");
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAddEventComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "label");
      \u0275\u0275text(18, "Event Type ");
      \u0275\u0275elementStart(19, "span", 8);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAddEventComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.model.event_type_id, $event) || (ctx.model.event_type_id = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(22, "option", 11);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, AdminAddEventComponent_option_24_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, AdminAddEventComponent_small_25_Template, 2, 0, "small", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 7)(27, "label");
      \u0275\u0275text(28, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "textarea", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAddEventComponent_Template_textarea_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.model.description, $event) || (ctx.model.description = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 6)(31, "div", 7)(32, "label");
      \u0275\u0275text(33, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAddEventComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.model.location, $event) || (ctx.model.location = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 16)(36, "label");
      \u0275\u0275text(37, "Event Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 17)(39, "input", 18);
      \u0275\u0275listener("change", function AdminAddEventComponent_Template_input_change_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, AdminAddEventComponent_div_40_Template, 3, 0, "div", 19)(41, AdminAddEventComponent_div_41_Template, 4, 3, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, AdminAddEventComponent_div_42_Template, 6, 2, "div", 21);
      \u0275\u0275elementStart(43, "small", 22);
      \u0275\u0275text(44, "PNG/JPG up to 5MB. Auto-upload to storage.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, AdminAddEventComponent_div_45_Template, 2, 1, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 6)(47, "div", 7)(48, "label");
      \u0275\u0275text(49, "Starts At (UTC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAddEventComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.model.starts_at, $event) || (ctx.model.starts_at = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 7)(52, "label");
      \u0275\u0275text(53, "Ends At (UTC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AdminAddEventComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.model.ends_at, $event) || (ctx.model.ends_at = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(55, AdminAddEventComponent_div_55_Template, 2, 1, "div", 26);
      \u0275\u0275elementStart(56, "div", 27)(57, "button", 28);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 29);
      \u0275\u0275text(60, " Cancel ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const f_r6 = \u0275\u0275reference(8);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.event_type_id);
      \u0275\u0275property("disabled", ctx.loadingTypes || !ctx.eventTypes.length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.loadingTypes ? "Loading types..." : ctx.eventTypes.length ? "Select type" : "No types found", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.eventTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingTypes && !ctx.eventTypes.length);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.description);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.location);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("uploading", ctx.uploadingImage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.uploadingImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.model.image_url && !ctx.uploadingImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadingImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.image_url);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.imageError);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.starts_at);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.ends_at);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting || !f_r6.form.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting ? "Saving\u2026" : "Create Event", " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.add-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 0px);\n  padding: 2.4rem clamp(1rem, 4vw, 3rem) 3.2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e293b 55%,\n      #0f172a);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.add-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 860px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  backdrop-filter: blur(12px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 2.25rem 2.2rem 2.4rem;\n  box-shadow: 0 6px 26px -8px rgba(0, 0, 0, 0.55);\n  animation: _ngcontent-%COMP%_fadeIn 400ms ease;\n  display: flex;\n  flex-direction: column;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.6rem, 2.6vw, 2.1rem);\n  font-weight: 600;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1.4rem;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n}\n.event-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.grid.two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.2rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.4rem;\n  font-size: 0.73rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #e2e8f0;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.8rem;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #f1f5f9;\n  font: inherit;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  transition: border-color 0.18s, background 0.18s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: rgba(255, 255, 255, 0.12);\n  border-color: #6366f1;\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 110px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #fb7185;\n}\n.hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.6rem;\n  margin-top: 0.3rem;\n  letter-spacing: 0.3px;\n}\n.preview[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px dashed rgba(255, 255, 255, 0.15);\n  padding: 0.55rem 0.7rem;\n  border-radius: 12px;\n  font-size: 0.7rem;\n}\n.preview[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.35);\n  padding: 0.25rem 0.45rem;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  display: inline-block;\n}\n.image-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.upload-box[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px dashed rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.04);\n  padding: 1rem 0.9rem;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 120px;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.upload-box[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.upload-box.uploading[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  cursor: progress;\n}\n.upload-box[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.upload-box[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  color: #cbd5e1;\n  text-align: center;\n}\n.progress[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.35s ease;\n}\n.progress[_ngcontent-%COMP%]   .pc[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  font-size: 0.55rem;\n  color: #fff;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n}\n.img-preview[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n  display: flex;\n  gap: 0.6rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.img-preview[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 60px;\n  border-radius: 10px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-preview[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.danger.mini[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n  border-radius: 10px;\n  background: #ef4444;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  font-size: 0.7rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.4rem;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.2rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: #6366f1;\n  color: #fff;\n}\n.actions[_ngcontent-%COMP%]   button.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: default;\n}\n.err.global[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  color: #f87171;\n  font-size: 0.75rem;\n  text-align: center;\n}\n@media (max-width: 720px) {\n  .add-shell[_ngcontent-%COMP%] {\n    padding: 2rem 1.1rem 2.6rem;\n  }\n  .add-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.3rem 2.2rem;\n  }\n  .grid.two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-add-event.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAddEventComponent, [{
    type: Component,
    args: [{ standalone: false, selector: "app-admin-add-event", template: '<div class="add-shell">\n  <div class="add-card">\n    <header class="head">\n      <h1>Create Event</h1>\n      <p>Schedule a seminar, workshop or meetup.</p>\n    </header>\n    <form (ngSubmit)="create()" #f="ngForm" novalidate class="event-form">\n      <div class="grid two">\n        <div class="field">\n          <label>Name <span class="req">*</span></label>\n          <input\n            name="name"\n            [(ngModel)]="model.name"\n            required\n            maxlength="120"\n            placeholder="Media Production Masterclass"\n          />\n        </div>\n        <div class="field">\n          <label>Event Type <span class="req">*</span></label>\n          <select\n            name="event_type_id"\n            required\n            [(ngModel)]="model.event_type_id"\n            [disabled]="loadingTypes || !eventTypes.length"\n          >\n            <option value="" disabled selected>\n              {{\n                loadingTypes\n                  ? "Loading types..."\n                  : eventTypes.length\n                  ? "Select type"\n                  : "No types found"\n              }}\n            </option>\n            <option *ngFor="let t of eventTypes" [value]="t.id">\n              {{ t.name }}\n            </option>\n          </select>\n          <small class="hint" *ngIf="!loadingTypes && !eventTypes.length"\n            >No event types yet.</small\n          >\n        </div>\n      </div>\n      <div class="field">\n        <label>Description</label>\n        <textarea\n          name="description"\n          rows="4"\n          [(ngModel)]="model.description"\n          placeholder="Short description"\n        ></textarea>\n      </div>\n      <div class="grid two">\n        <div class="field">\n          <label>Location</label>\n          <input\n            name="location"\n            [(ngModel)]="model.location"\n            placeholder="NUST Islamabad / Online"\n          />\n        </div>\n        <div class="field image-field">\n          <label>Event Image</label>\n          <div class="upload-box" [class.uploading]="uploadingImage">\n            <input\n              type="file"\n              accept="image/*"\n              (change)="onImageFileSelected($event)"\n              [disabled]="uploadingImage"\n            />\n            <div\n              class="placeholder"\n              *ngIf="!model.image_url && !uploadingImage"\n            >\n              <span>Select or drop an image (max 5MB)</span>\n            </div>\n            <div class="progress" *ngIf="uploadingImage">\n              <div class="bar" [style.width.%]="imageUploadProgress"></div>\n              <span class="pc">{{ imageUploadProgress }}%</span>\n            </div>\n          </div>\n          <div class="img-preview" *ngIf="model.image_url">\n            <div class="thumb" *ngIf="imageSignedUrl; else noSigned">\n              <img [src]="imageSignedUrl" alt="Event image preview" />\n            </div>\n            <ng-template #noSigned>\n              <code>{{ model.image_url }}</code>\n            </ng-template>\n            <button type="button" class="danger mini" (click)="removeImage()">\n              Remove\n            </button>\n          </div>\n          <small class="hint">PNG/JPG up to 5MB. Auto-upload to storage.</small>\n          <div class="err" *ngIf="imageError">{{ imageError }}</div>\n        </div>\n      </div>\n      <div class="grid two">\n        <div class="field">\n          <label>Starts At (UTC)</label>\n          <input\n            type="datetime-local"\n            name="starts_at"\n            [(ngModel)]="model.starts_at"\n          />\n        </div>\n        <div class="field">\n          <label>Ends At (UTC)</label>\n          <input\n            type="datetime-local"\n            name="ends_at"\n            [(ngModel)]="model.ends_at"\n          />\n        </div>\n      </div>\n      <!-- preview moved into upload section -->\n      <div *ngIf="error" class="err global">{{ error }}</div>\n      <div class="actions">\n        <button type="submit" [disabled]="submitting || !f.form.valid">\n          {{ submitting ? "Saving\u2026" : "Create Event" }}\n        </button>\n        <button type="button" class="secondary" routerLink="/admin/events">\n          Cancel\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n', styles: ['/* src/app/modules/admin-panel/components/admin-add-event.component.scss */\n.add-shell {\n  min-height: calc(100vh - 0px);\n  padding: 2.4rem clamp(1rem, 4vw, 3rem) 3.2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #1e293b 55%,\n      #0f172a);\n  color: #f1f5f9;\n  font-family:\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    "Noto Sans",\n    sans-serif;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.add-card {\n  width: 100%;\n  max-width: 860px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  backdrop-filter: blur(12px) saturate(160%);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 20px;\n  padding: 2.25rem 2.2rem 2.4rem;\n  box-shadow: 0 6px 26px -8px rgba(0, 0, 0, 0.55);\n  animation: fadeIn 400ms ease;\n  display: flex;\n  flex-direction: column;\n}\n.head h1 {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.6rem, 2.6vw, 2.1rem);\n  font-weight: 600;\n}\n.head p {\n  margin: 0 0 1.4rem;\n  font-size: 0.85rem;\n  color: #cbd5e1;\n}\n.event-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.grid.two {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.2rem;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n}\n.field label {\n  font-weight: 600;\n  margin-bottom: 0.4rem;\n  font-size: 0.73rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: #e2e8f0;\n}\n.field input,\n.field select,\n.field textarea {\n  padding: 0.65rem 0.8rem;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #f1f5f9;\n  font: inherit;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  transition: border-color 0.18s, background 0.18s;\n}\n.field input:focus,\n.field select:focus,\n.field textarea:focus {\n  outline: none;\n  background: rgba(255, 255, 255, 0.12);\n  border-color: #6366f1;\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);\n}\n.field textarea {\n  resize: vertical;\n  min-height: 110px;\n}\n.req {\n  color: #fb7185;\n}\n.hint {\n  color: #94a3b8;\n  font-size: 0.6rem;\n  margin-top: 0.3rem;\n  letter-spacing: 0.3px;\n}\n.preview {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px dashed rgba(255, 255, 255, 0.15);\n  padding: 0.55rem 0.7rem;\n  border-radius: 12px;\n  font-size: 0.7rem;\n}\n.preview code {\n  background: rgba(0, 0, 0, 0.35);\n  padding: 0.25rem 0.45rem;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  display: inline-block;\n}\n.image-field {\n  position: relative;\n}\n.upload-box {\n  position: relative;\n  border: 1px dashed rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.04);\n  padding: 1rem 0.9rem;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 120px;\n  cursor: pointer;\n  transition: border-color 0.2s, background 0.2s;\n}\n.upload-box:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.upload-box.uploading {\n  opacity: 0.75;\n  cursor: progress;\n}\n.upload-box input[type=file] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.upload-box .placeholder {\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  color: #cbd5e1;\n  text-align: center;\n}\n.progress {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 6px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.progress .bar {\n  position: absolute;\n  inset: 0;\n  width: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.35s ease;\n}\n.progress .pc {\n  position: absolute;\n  right: 6px;\n  font-size: 0.55rem;\n  color: #fff;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n}\n.img-preview {\n  margin-top: 0.6rem;\n  display: flex;\n  gap: 0.6rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.img-preview .thumb {\n  width: 90px;\n  height: 60px;\n  border-radius: 10px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-preview .thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.danger.mini {\n  padding: 0.45rem 0.8rem;\n  border-radius: 10px;\n  background: #ef4444;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  cursor: pointer;\n  font-size: 0.7rem;\n}\n.actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.4rem;\n}\n.actions button {\n  padding: 0.7rem 1.2rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: #6366f1;\n  color: #fff;\n}\n.actions button.secondary {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n}\n.actions button:disabled {\n  opacity: 0.55;\n  cursor: default;\n}\n.err.global {\n  margin-top: 0.75rem;\n  color: #f87171;\n  font-size: 0.75rem;\n  text-align: center;\n}\n@media (max-width: 720px) {\n  .add-shell {\n    padding: 2rem 1.1rem 2.6rem;\n  }\n  .add-card {\n    padding: 2rem 1.3rem 2.2rem;\n  }\n  .grid.two {\n    grid-template-columns: 1fr;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin-add-event.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminAddEventComponent, { className: "AdminAddEventComponent", filePath: "src/app/modules/admin-panel/components/admin-add-event.component.ts", lineNumber: 13 });
})();

// src/app/modules/admin-panel/components/admin-events-table.component.ts
function AdminEventsTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function AdminEventsTableComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminEventsTableComponent_table_11_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 13);
    \u0275\u0275element(15, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 15)(17, "button", 16);
    \u0275\u0275listener("click", function AdminEventsTableComponent_table_11_tr_18_Template_button_click_17_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(r_r3));
    });
    \u0275\u0275text(18, "Del");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-default", !r_r3.event_type);
    \u0275\u0275property("title", (r_r3.event_type == null ? null : r_r3.event_type.description) || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((r_r3.event_type == null ? null : r_r3.event_type.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.location || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, r_r3.starts_at, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 14, r_r3.ends_at, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", r_r3.image_url || "No image");
    \u0275\u0275advance();
    \u0275\u0275classProp("has", !!r_r3.image_url);
  }
}
function AdminEventsTableComponent_table_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Starts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Ends");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Img");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 10);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, AdminEventsTableComponent_table_11_tr_18_Template, 19, 17, "tr", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.rows)("ngForTrackBy", ctx_r0.trackById);
  }
}
function AdminEventsTableComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " No events yet. ");
    \u0275\u0275elementEnd();
  }
}
var AdminEventsTableComponent = class _AdminEventsTableComponent {
  eventsService = inject(EventService);
  eventTypeService = inject(EventTypeService);
  toast = inject(ToastrNotificationService);
  rows = [];
  loading = false;
  error = null;
  typeMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.eventTypeService.list().subscribe({
      next: (types) => {
        types.forEach((t) => this.typeMap.set(t.id, t.name));
        this.load();
      },
      error: () => this.load()
      // still load events
    });
  }
  trackById(_index, item) {
    return item.id;
  }
  load() {
    this.loading = true;
    this.eventsService.list().subscribe({
      next: (list) => {
        this.rows = list.map((e) => {
          if (!e.event_type && e.event_type_id && this.typeMap.has(e.event_type_id)) {
            return __spreadProps(__spreadValues({}, e), {
              event_type: {
                id: e.event_type_id,
                name: this.typeMap.get(e.event_type_id),
                slug: "",
                description: null,
                created_at: "",
                updated_at: ""
              }
            });
          }
          return e;
        });
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || "Failed to load";
        this.loading = false;
      }
    });
  }
  delete(row) {
    if (!confirm(`Delete event "${row.name}"? This cannot be undone.`))
      return;
    this.eventsService.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess("Deleted", row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e) => {
        this.toast.showError("Delete Failed", e.message || "Error");
      }
    });
  }
  static \u0275fac = function AdminEventsTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminEventsTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminEventsTableComponent, selectors: [["app-admin-events-table"]], decls: 13, vars: 5, consts: [[1, "dashboard-shell"], [1, "table-shell"], [1, "head"], [1, "secondary", 3, "click", "disabled"], [4, "ngIf"], ["class", "err", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "err"], [1, "data-table"], [2, "width", "110px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "badge", 3, "title"], [1, "img-indicator", 3, "title"], [1, "dot"], [1, "actions"], [1, "danger", 3, "click"], [1, "empty"]], template: function AdminEventsTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 1)(4, "header", 2)(5, "h1");
      \u0275\u0275text(6, "Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function AdminEventsTableComponent_Template_button_click_7_listener() {
        return ctx.load();
      });
      \u0275\u0275text(8, " Reload ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, AdminEventsTableComponent_div_9_Template, 2, 0, "div", 4)(10, AdminEventsTableComponent_div_10_Template, 2, 1, "div", 5)(11, AdminEventsTableComponent_table_11_Template, 19, 2, "table", 6)(12, AdminEventsTableComponent_div_12_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.rows.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && !ctx.rows.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ["\n\n.table-shell[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.dashboard-shell[_ngcontent-%COMP%] {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #141414;\n  font-weight: 600;\n  color: white;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: yellow;\n}\n.err[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.55rem;\n  font-size: 0.63rem;\n  font-weight: 600;\n  border-radius: 999px;\n  background: #3b82f6;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.badge-default[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.img-indicator[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.img-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.55rem;\n  height: 0.55rem;\n  display: inline-block;\n  border-radius: 50%;\n  background: #666;\n  box-shadow: 0 0 0 1px #444;\n}\n.img-indicator[_ngcontent-%COMP%]   .dot.has[_ngcontent-%COMP%] {\n  background: #22c55e;\n  box-shadow: 0 0 0 1px #15803d;\n}\n@media (max-width: 840px) {\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-events-table.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminEventsTableComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-admin-events-table", imports: [CommonModule], template: `<div class="dashboard-shell">
  <div class="table-shell">
    <div class="dashboard-shell">
      <div class="table-shell">
        <header class="head">
          <h1>Events</h1>
          <button class="secondary" (click)="load()" [disabled]="loading">
            Reload
          </button>
        </header>
        <div *ngIf="loading">Loading...</div>
        <div *ngIf="error" class="err">{{ error }}</div>
        <table *ngIf="!loading && !error && rows.length" class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Starts</th>
              <th>Ends</th>
              <th>Img</th>
              <th style="width: 110px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let r of rows; trackBy: trackById">
              <td>{{ r.name }}</td>
              <td>
                <span
                  class="badge"
                  [class.badge-default]="!r.event_type"
                  [title]="r.event_type?.description || ''"
                  >{{ r.event_type?.name || "\u2014" }}</span
                >
              </td>
              <td>{{ r.location || "\u2014" }}</td>
              <td>{{ r.starts_at | date : "short" }}</td>
              <td>{{ r.ends_at | date : "short" }}</td>
              <td class="img-indicator" [title]="r.image_url || 'No image'">
                <span class="dot" [class.has]="!!r.image_url"></span>
              </td>
              <td class="actions">
                <button class="danger" (click)="delete(r)">Del</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div *ngIf="!loading && !error && !rows.length" class="empty">
          No events yet.
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/admin-panel/components/admin-events-table.component.scss */\n.table-shell {\n  padding: 1.25rem;\n}\n.dashboard-shell {\n  padding: 2rem 1.1rem 2.5rem;\n  min-height: 72vh;\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\nbutton {\n  margin-left: 0.5rem;\n}\n.data-table th,\n.data-table td {\n  padding: 0.55rem 0.6rem;\n  border-bottom: 1px solid #222;\n  text-align: left;\n}\n.data-table th {\n  background: #141414;\n  font-weight: 600;\n  color: white;\n}\n.data-table tbody tr {\n  transition: background-color 140ms ease, color 140ms ease;\n}\n.data-table tbody tr:hover {\n  background: yellow;\n}\n.err {\n  color: #e74c3c;\n  margin-top: 0.75rem;\n}\n.empty {\n  opacity: 0.7;\n  padding: 1rem 0;\n}\nbutton.secondary {\n  background: #333;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton.secondary:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\nbutton.danger {\n  background: #ef4444;\n  color: #eee;\n  border: 1px solid #444;\n  padding: 0.45rem 0.9rem;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.actions {\n  display: flex;\n  flex-direction: row;\n}\n.badge {\n  display: inline-block;\n  padding: 0.2rem 0.55rem;\n  font-size: 0.63rem;\n  font-weight: 600;\n  border-radius: 999px;\n  background: #3b82f6;\n  color: #fff;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.badge-default {\n  background: #64748b;\n}\n.img-indicator {\n  text-align: center;\n}\n.img-indicator .dot {\n  width: 0.55rem;\n  height: 0.55rem;\n  display: inline-block;\n  border-radius: 50%;\n  background: #666;\n  box-shadow: 0 0 0 1px #444;\n}\n.img-indicator .dot.has {\n  background: #22c55e;\n  box-shadow: 0 0 0 1px #15803d;\n}\n@media (max-width: 840px) {\n  .data-table thead th:nth-child(3),\n  .data-table tbody td:nth-child(3) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin-events-table.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminEventsTableComponent, { className: "AdminEventsTableComponent", filePath: "src/app/modules/admin-panel/components/admin-events-table.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin-panel/admin-panel-routing.module.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: AdminLoginComponent },
  {
    path: "dashboard",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-media",
    component: AdminAddMediaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-category",
    component: AdminAddCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "media-works",
    component: AdminMediaWorksTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "categories",
    component: AdminCategoriesTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "ecosystem-submissions",
    component: AdminEcosystemSubmissionsTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-event",
    component: AdminAddEventComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "events",
    component: AdminEventsTableComponent,
    canActivate: [AuthGuard]
  },
  // Placeholder edit routes (components to be created)
  {
    path: "edit-media/:id",
    component: AdminEditMediaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-category/:id",
    component: AdminEditCategoryComponent,
    canActivate: [AuthGuard]
  }
];
var AdminPanelRoutingModule = class _AdminPanelRoutingModule {
  static \u0275fac = function AdminPanelRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminPanelRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminPanelRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminPanelRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/admin-panel/admin-panel.module.ts
var AdminPanelModule = class _AdminPanelModule {
  static \u0275fac = function AdminPanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminPanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminPanelModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminPanelRoutingModule,
    MediaWorkFormComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminPanelModule, [{
    type: NgModule,
    args: [{
      declarations: [
        AdminLoginComponent,
        AdminDashboardComponent,
        AdminAddMediaComponent,
        AdminAddEventComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AdminPanelRoutingModule,
        MediaWorkFormComponent
        // standalone form component
      ]
    }]
  }], null, null);
})();
export {
  AdminPanelModule
};
//# sourceMappingURL=chunk-TMQUDU65.js.map
