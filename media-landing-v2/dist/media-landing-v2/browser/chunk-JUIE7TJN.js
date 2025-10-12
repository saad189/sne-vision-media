import {
  AUTH_TOKEN,
  LoadingService,
  SupabaseService,
  ToastrService,
  UtilityService,
  environment
} from "./chunk-E3Q73E44.js";
import {
  DatePipe,
  HttpClient,
  HttpHeaders,
  Injectable,
  Pipe,
  catchError,
  finalize,
  forkJoin,
  from,
  map,
  of,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵinject
} from "./chunk-6SZYEMSY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-S35DAJRX.js";

// src/app/pipes/snake-to-words.pipe.ts
var SnakeToWordsPipe = class _SnakeToWordsPipe {
  transform(value) {
    if (value == null)
      return "";
    if (!/[ _-]/.test(value) || !/[_-]/.test(value)) {
      return this.capitalizeWord(value);
    }
    return value.split(/[_-]+/).filter((segment) => segment.length > 0).map((seg) => this.capitalizeWord(seg.toLowerCase())).join(" ");
  }
  capitalizeWord(word) {
    if (!word)
      return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  static \u0275fac = function SnakeToWordsPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SnakeToWordsPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "snakeToWords", type: _SnakeToWordsPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SnakeToWordsPipe, [{
    type: Pipe,
    args: [{
      name: "snakeToWords",
      standalone: true
    }]
  }], null, null);
})();

// src/app/pipes/date.pipe.ts
var DatePipeCustom = class _DatePipeCustom {
  transform(value) {
    return new DatePipe("en-US").transform(value, "dd-MM-yyyy") || value;
  }
  transformToNameDate(value) {
    return new DatePipe("en-US").transform(value, "MMM dd, yyyy") || value.toString();
  }
  static \u0275fac = function DatePipeCustom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePipeCustom)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "date-pipe-custom", type: _DatePipeCustom, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePipeCustom, [{
    type: Pipe,
    args: [{
      name: "date-pipe-custom",
      standalone: true
    }]
  }], null, null);
})();

// src/app/services/event.service.ts
var TABLE = "events";
var IMAGES_BUCKET = "VisionMediaBucket";
var EventService = class _EventService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  cache$;
  // Observable<Event[]>
  invalidateCache() {
    this.cache$ = void 0;
  }
  mapRow(row) {
    if (!row)
      return row;
    const event = {
      id: row.id,
      name: row.name,
      description: row.description ?? null,
      location: row.location ?? null,
      image_url: row.image_url ?? null,
      event_type_id: row.event_type_id,
      starts_at: row.starts_at,
      ends_at: row.ends_at,
      created_at: row.created_at,
      updated_at: row.updated_at,
      event_type: row.event_type || void 0
    };
    return event;
  }
  toDb(payload) {
    if (!payload)
      return payload;
    const out = {};
    const set = (k, v) => {
      if (v === void 0)
        return;
      out[k] = v === "" ? null : v;
    };
    set("name", payload.name);
    set("description", payload.description);
    set("location", payload.location);
    set("image_url", payload.image_url);
    set("event_type_id", payload.event_type_id);
    set("starts_at", payload.starts_at);
    set("ends_at", payload.ends_at);
    return out;
  }
  list(force = false) {
    if (!this.cache$ || force) {
      const q = this.supabase.client.from(TABLE).select("*, event_type(*)").order("starts_at", { ascending: true });
      this.cache$ = from(q).pipe(map((r) => {
        if (r.error)
          throw r.error;
        return (r.data || []).map((d) => this.mapRow(d));
      }), shareReplay(1));
    }
    return this.cache$;
  }
  // --- Signed Image URL support (pattern similar to HeroListService) ---
  sanitizePath(p) {
    if (!p)
      return p;
    let cleaned = p.trim().replace(/^\/+/, "");
    const bucketIdx = cleaned.indexOf(IMAGES_BUCKET + "/");
    if (bucketIdx !== -1) {
      cleaned = cleaned.substring(bucketIdx + IMAGES_BUCKET.length + 1);
    }
    return cleaned;
  }
  addSigned(items) {
    if (!items.length)
      return of(items);
    const ttl = 60 * 10;
    const tasks = items.map((ev) => {
      const path = this.sanitizePath(ev.image_url);
      if (!path)
        return of(__spreadProps(__spreadValues({}, ev), { image_signed_url: null }));
      return from(this.supabase.client.storage.from(IMAGES_BUCKET).createSignedUrl(path, ttl)).pipe(map((r) => __spreadProps(__spreadValues({}, ev), {
        image_signed_url: r.error ? null : r.data?.signedUrl || null
      })));
    });
    return forkJoin(tasks);
  }
  listWithSigned(force = false) {
    return this.list(force).pipe(switchMap((items) => this.addSigned(items)));
  }
  upcoming(nowIso = (/* @__PURE__ */ new Date()).toISOString()) {
    return from(this.supabase.client.from(TABLE).select("*, event_type(*)").gte("starts_at", nowIso).order("starts_at", { ascending: true })).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return (r.data || []).map((d) => this.mapRow(d));
    }));
  }
  past(nowIso = (/* @__PURE__ */ new Date()).toISOString()) {
    return from(this.supabase.client.from(TABLE).select("*, event_type(*)").lt("starts_at", nowIso).order("starts_at", { ascending: false })).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return (r.data || []).map((d) => this.mapRow(d));
    }));
  }
  getById(id) {
    return from(this.supabase.client.from(TABLE).select("*, event_type(*)").eq("id", id).single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  create(payload) {
    return from(this.supabase.client.from(TABLE).insert(this.toDb(payload)).select("*, event_type(*)").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  update(id, patch) {
    return from(this.supabase.client.from(TABLE).update(this.toDb(patch)).eq("id", id).select("*, event_type(*)").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  remove(id) {
    return from(this.supabase.client.from(TABLE).delete().eq("id", id)).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return true;
    }));
  }
  static \u0275fac = function EventService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/hero-slide.service.ts
var TABLE2 = "hero_slide";
var IMAGES_BUCKET2 = "VisionMediaBucket";
var HeroListService = class _HeroListService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  cache$;
  // Observable<ImageListItem[]>
  invalidateCache() {
    this.cache$ = void 0;
  }
  mapRow(row) {
    return {
      id: row.id,
      name: row.name,
      description: row.description ?? null,
      image_url: row.image_url,
      created_at: row.created_at,
      updated_at: row.updated_at
    };
  }
  sanitizePath(p) {
    if (!p)
      return p;
    let cleaned = p.trim().replace(/^\/+/, "");
    const bucketIdx = cleaned.indexOf(IMAGES_BUCKET2 + "/");
    if (bucketIdx !== -1) {
      cleaned = cleaned.substring(bucketIdx + IMAGES_BUCKET2.length + 1);
    }
    return cleaned;
  }
  addSigned(items) {
    if (!items.length)
      return of(items);
    const ttl = 60 * 60 * 12;
    const now = Date.now();
    const cachePrefix = "heroSlideSigned:";
    const tasks = items.map((it) => {
      const path = this.sanitizePath(it.image_url);
      if (!path)
        return of(__spreadProps(__spreadValues({}, it), { image_signed_url: null }));
      const storageKey = cachePrefix + path;
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed?.url && typeof parsed.exp === "number" && parsed.exp > now + 6e4) {
            return of(__spreadProps(__spreadValues({}, it), { image_signed_url: parsed.url }));
          }
        }
      } catch {
      }
      return from(this.supabase.client.storage.from(IMAGES_BUCKET2).createSignedUrl(path, ttl)).pipe(map((r) => {
        const signed = r.error ? null : r.data?.signedUrl || null;
        if (signed) {
          try {
            localStorage.setItem(storageKey, JSON.stringify({ url: signed, exp: now + ttl * 1e3 }));
          } catch {
          }
        }
        return __spreadProps(__spreadValues({}, it), { image_signed_url: signed });
      }));
    });
    return forkJoin(tasks);
  }
  listWithSigned(force = false) {
    return this.list(force).pipe(switchMap((items) => this.addSigned(items)));
  }
  list(force = false) {
    if (!this.cache$ || force) {
      const q = this.supabase.client.from(TABLE2).select("*").order("created_at", { ascending: false });
      this.cache$ = from(q).pipe(map((r) => {
        if (r.error)
          throw r.error;
        return (r.data || []).map((d) => this.mapRow(d));
      }), shareReplay(1));
    }
    return this.cache$;
  }
  getById(id) {
    return from(this.supabase.client.from(TABLE2).select("*").eq("id", id).single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  create(payload) {
    return from(this.supabase.client.from(TABLE2).insert(payload).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  update(id, patch) {
    return from(this.supabase.client.from(TABLE2).update(patch).eq("id", id).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  remove(id) {
    return from(this.supabase.client.from(TABLE2).delete().eq("id", id)).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return true;
    }));
  }
  static \u0275fac = function HeroListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroListService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HeroListService, factory: _HeroListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/toastr.service.ts
var ToastrNotificationService = class _ToastrNotificationService {
  toastr;
  constructor(toastr) {
    this.toastr = toastr;
  }
  defaultOptions = {
    timeOut: 3e3,
    progressBar: true,
    closeButton: false,
    positionClass: "toast-bottom-right"
  };
  defaultErrorOptions = __spreadProps(__spreadValues({}, this.defaultOptions), {
    timeOut: 5e3
  });
  defaultSuccessOptions = __spreadProps(__spreadValues({}, this.defaultOptions), {
    timeOut: 2e3
  });
  defaultInfoOptions = __spreadProps(__spreadValues({}, this.defaultOptions), {
    timeOut: 4e3
  });
  defaultWarningOptions = __spreadProps(__spreadValues({}, this.defaultOptions), {
    timeOut: 6e3
  });
  showSuccess(title, message) {
    this.toastr.success(message, title, this.defaultSuccessOptions);
  }
  showError(title, message) {
    this.toastr.error(message, title, this.defaultErrorOptions);
  }
  showInfo(title, message) {
    this.toastr.info(message, title, this.defaultInfoOptions);
  }
  showWarning(title, message) {
    this.toastr.warning(message, title, this.defaultWarningOptions);
  }
  static \u0275fac = function ToastrNotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastrNotificationService)(\u0275\u0275inject(ToastrService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastrNotificationService, factory: _ToastrNotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastrNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ToastrService }], null);
})();

// src/app/services/media-work.service.ts
var TABLE3 = "media_works";
var MANUSCRIPTS_BUCKET = "VisionMediaPrivateBucket";
var IMAGES_BUCKET3 = "VisionMediaBucket";
var MediaWorkService = class _MediaWorkService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  // in-memory cache for current session; invalidated only on full page reload
  allCache$;
  // Observable<MediaWork[]>
  cacheByType = {};
  /**
   * Clears the in-memory cache (can be used after create/update/delete if immediate consistency needed)
   */
  invalidateCache() {
    this.allCache$ = void 0;
    this.cacheByType = {};
  }
  mapRow(row) {
    if (!row)
      return row;
    return {
      id: row.id,
      name: row.name,
      title: row.title ?? null,
      description: row.description ?? null,
      summary: row.summary ?? null,
      manuscriptUrl: row.manuscript_url ?? null,
      youtubeUrl: row.youtube_url ?? null,
      githubUrl: row.github_url ?? null,
      imageUrl: row.image_url ?? null,
      type: row.type,
      status: row.status ?? void 0,
      categoryId: row.category_id ?? null,
      categoryName: row.categories?.name ?? null,
      ownerId: row.owner_id ?? null,
      created_at: row.created_at,
      updated_at: row.updated_at
    };
  }
  toDb(payload) {
    if (!payload)
      return payload;
    const categoryId = payload.categoryId;
    const out = {};
    const assign = (key, value) => {
      if (value === void 0)
        return;
      out[key] = value === "" ? null : value;
    };
    assign("name", payload.name);
    assign("title", payload.title);
    assign("description", payload.description);
    assign("summary", payload.summary);
    assign("manuscript_url", payload.manuscriptUrl);
    assign("youtube_url", payload.youtubeUrl);
    assign("github_url", payload.githubUrl);
    assign("image_url", payload.imageUrl);
    assign("type", payload.type);
    assign("status", payload.status);
    assign("category_id", categoryId);
    assign("owner_id", payload.ownerId);
    return out;
  }
  /**
   * List media works. Uses session cache. If type provided, filters from cached all-fetch.
   * A single network call is made on first invocation (per reload) then shared.
   */
  list(type) {
    if (type && this.cacheByType[type]) {
      return of(this.cacheByType[type]);
    }
    if (!this.allCache$) {
      const query = this.supabase.client.from(TABLE3).select("*, categories(name)").order("created_at", { ascending: false });
      this.allCache$ = from(query).pipe(map((r) => {
        if (r.error)
          throw r.error;
        return r.data.map((d) => this.mapRow(d));
      }), tap((all) => {
        this.cacheByType = all.reduce((acc, mw) => {
          const t = mw.type;
          if (!acc[t])
            acc[t] = [];
          acc[t].push(mw);
          return acc;
        }, {});
      }), shareReplay(1));
    }
    if (!type)
      return this.allCache$;
    return this.allCache$.pipe(map((all) => {
      if (!this.cacheByType[type]) {
        this.cacheByType[type] = all.filter((m) => m.type === type);
      }
      return this.cacheByType[type];
    }));
  }
  /**
   * Attach access URLs for each media work:
   *  - imageSignedUrl: now derived from PUBLIC bucket without signing (immediate public URL)
   *  - manuscriptSignedUrl: still a short-lived signed URL from private bucket
   * TTL for manuscripts kept short (10 min) matching form component.
   */
  addSignedUrls(mws) {
    if (!mws?.length)
      return of(mws);
    const ttlSeconds = 60 * 10;
    const sanitize = (p) => {
      if (!p)
        return p;
      let cleaned = p.trim();
      cleaned = cleaned.replace(/^\/+/, "");
      const bucketIdx = cleaned.indexOf(MANUSCRIPTS_BUCKET + "/");
      if (bucketIdx !== -1) {
        cleaned = cleaned.substring(bucketIdx + MANUSCRIPTS_BUCKET.length + 1);
      }
      return cleaned;
    };
    const tasks = mws.map((mw) => {
      const rawImage = mw.imageUrl || "";
      const manuscriptPath = sanitize(mw.manuscriptUrl || "");
      let imageSignedUrl = null;
      if (rawImage) {
        if (/^https?:\/\//i.test(rawImage)) {
          imageSignedUrl = rawImage;
        } else {
          const imagePath = sanitize(rawImage);
          const { data } = this.supabase.client.storage.from(IMAGES_BUCKET3).getPublicUrl(imagePath);
          imageSignedUrl = data?.publicUrl || null;
        }
      }
      console.log({ rawImage, imageSignedUrl });
      const manuscript$ = manuscriptPath ? from(this.supabase.client.storage.from(MANUSCRIPTS_BUCKET).createSignedUrl(manuscriptPath, ttlSeconds)).pipe(map((r) => {
        if (r.error) {
          console.warn("[MediaWorkService] manuscript signed URL error", {
            path: manuscriptPath,
            error: r.error.message
          });
          return null;
        }
        return r.data?.signedUrl || null;
      })) : of(null);
      return manuscript$.pipe(map((manuscriptSignedUrl) => __spreadProps(__spreadValues({}, mw), {
        imageSignedUrl,
        manuscriptSignedUrl
      })));
    });
    return forkJoin(tasks);
  }
  /**
   * Convenience method: list media works (optionally filtered by type) and attach fresh signed URLs.
   */
  listWithSignedUrls(type) {
    return this.list(type).pipe(switchMap((mws) => this.addSignedUrls(mws)));
  }
  getById(id) {
    return from(this.supabase.client.from(TABLE3).select("*").eq("id", id).single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  create(payload) {
    const ownerId = this.supabase.currentSession?.user?.id || null;
    const dbPayload = this.toDb(__spreadProps(__spreadValues({}, payload), { ownerId }));
    return from(this.supabase.client.from(TABLE3).insert(dbPayload).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      const mapped = this.mapRow(r.data);
      if (this.allCache$ && mapped) {
        this.invalidateCache();
      }
      return mapped;
    }));
  }
  update(id, patch) {
    return from(this.supabase.client.from(TABLE3).update(this.toDb(patch)).eq("id", id).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      const mapped = this.mapRow(r.data);
      this.invalidateCache();
      return mapped;
    }));
  }
  remove(id) {
    return from(this.supabase.client.from(TABLE3).delete().eq("id", id)).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return true;
    }));
  }
  static \u0275fac = function MediaWorkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaWorkService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaWorkService, factory: _MediaWorkService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaWorkService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/category.service.ts
var TABLE4 = "categories";
var CategoryService = class _CategoryService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  mapRow(row) {
    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description ?? null,
      created_at: row.created_at,
      updated_at: row.updated_at
    };
  }
  list() {
    return from(this.supabase.client.from(TABLE4).select("*").order("name", { ascending: true })).pipe(map((r) => {
      if (r.error)
        throw r.error;
      const categories = r.data.map((d) => this.mapRow(d));
      const allIndex = categories.findIndex((c) => c.name === "All");
      if (allIndex > -1) {
        const [allCategory] = categories.splice(allIndex, 1);
        categories.unshift(allCategory);
      }
      return categories;
    }));
  }
  getById(id) {
    return from(this.supabase.client.from(TABLE4).select("*").eq("id", id).single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  create(payload) {
    return from(this.supabase.client.from(TABLE4).insert({
      name: payload.name,
      description: payload.description ?? null
    }).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  update(id, patch) {
    return from(this.supabase.client.from(TABLE4).update(__spreadValues(__spreadValues({}, patch.name !== void 0 ? { name: patch.name } : {}), patch.description !== void 0 ? { description: patch.description ?? null } : {})).eq("id", id).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  // Placeholder remove (decide on cascade or nullify strategy before enabling in UI)
  remove(id) {
    return from(this.supabase.client.from(TABLE4).delete().eq("id", id)).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return true;
    }));
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/event-type.service.ts
var TABLE5 = "event_type";
var EventTypeService = class _EventTypeService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  cache$;
  // Observable<EventType[]>
  invalidateCache() {
    this.cache$ = void 0;
  }
  mapRow(row) {
    return row;
  }
  list(force = false) {
    if (!this.cache$ || force) {
      const q = this.supabase.client.from(TABLE5).select("*").order("created_at", { ascending: false });
      this.cache$ = from(q).pipe(map((r) => {
        if (r.error)
          throw r.error;
        return (r.data || []).map((d) => this.mapRow(d));
      }), shareReplay(1));
    }
    return this.cache$;
  }
  getById(id) {
    return from(this.supabase.client.from(TABLE5).select("*").eq("id", id).single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  create(payload) {
    return from(this.supabase.client.from(TABLE5).insert(payload).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  update(id, patch) {
    return from(this.supabase.client.from(TABLE5).update(patch).eq("id", id).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  remove(id) {
    return from(this.supabase.client.from(TABLE5).delete().eq("id", id)).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return true;
    }));
  }
  static \u0275fac = function EventTypeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventTypeService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventTypeService, factory: _EventTypeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventTypeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  http;
  loadingService;
  toastr;
  utilityService;
  apiUrl = environment.apiUrl;
  constructor(http, loadingService, toastr, utilityService) {
    this.http = http;
    this.loadingService = loadingService;
    this.toastr = toastr;
    this.utilityService = utilityService;
  }
  getHeaders() {
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set("Authorization", `Bearer ${token}`);
    }
    headers = headers.set("Content-Type", "application/json");
    return headers;
  }
  getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN);
  }
  get(path) {
    this.loadingService.setLoading(true);
    return this.http.get(`${this.apiUrl}/${path}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError), finalize(() => this.loadingService.setLoading(false)));
  }
  post(path, body) {
    this.loadingService.setLoading(true);
    return this.http.post(`${this.apiUrl}/${path}`, body, { headers: this.getHeaders() }).pipe(catchError(this.handleError), finalize(() => this.loadingService.setLoading(false)));
  }
  put(path, body) {
    this.loadingService.setLoading(true);
    return this.http.put(`${this.apiUrl}/${path}`, body, { headers: this.getHeaders() }).pipe(catchError(this.handleError), finalize(() => this.loadingService.setLoading(false)));
  }
  delete(path) {
    this.loadingService.setLoading(true);
    return this.http.delete(`${this.apiUrl}/${path}`, { headers: this.getHeaders() }).pipe(catchError(this.handleError), finalize(() => this.loadingService.setLoading(false)));
  }
  handleError = (error) => {
    let errorMessage = "Something bad happened; please try again later.";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
      console.error("An error occurred:", errorMessage);
    } else {
      if (error.error?.message) {
        errorMessage = error.error.message;
      }
      console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
    }
    this.toastr.showError("Error", errorMessage);
    return throwError(() => new Error(errorMessage));
  };
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LoadingService), \u0275\u0275inject(ToastrNotificationService), \u0275\u0275inject(UtilityService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: LoadingService }, { type: ToastrNotificationService }, { type: UtilityService }], null);
})();

// src/app/services/user.service.ts
var UserService = class _UserService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  session$() {
    return this.supabase.session$;
  }
  user$() {
    return this.supabase.session$.pipe(map((s) => s?.user ?? null));
  }
  getCurrentUser() {
    return this.supabase.currentSession?.user ?? null;
  }
  isAuthenticated() {
    return !!this.supabase.currentSession;
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/ecosystem.service.ts
var TABLE6 = "ecosystem_submissions";
var EcosystemService = class _EcosystemService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  submit(payload) {
    const clean = __spreadValues({}, payload);
    ["phone", "designation"].forEach((k) => {
      if (clean[k] === "")
        clean[k] = null;
    });
    return from(this.supabase.client.from(TABLE6).insert(clean).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return r.data;
    }));
  }
  list() {
    return from(this.supabase.client.from(TABLE6).select("*").order("created_at", { ascending: false })).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return r.data || [];
    }));
  }
  static \u0275fac = function EcosystemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EcosystemService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EcosystemService, factory: _EcosystemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcosystemService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

// src/app/services/top-minds.service.ts
var TABLE7 = "top_minds";
var IMAGES_BUCKET4 = "VisionMediaBucket";
var TopMindsService = class _TopMindsService {
  supabase;
  constructor(supabase) {
    this.supabase = supabase;
  }
  cache$;
  invalidateCache() {
    this.cache$ = void 0;
  }
  mapRow(row) {
    return {
      id: row.id,
      name: row.name,
      title: row.title ?? null,
      field: row.field ?? null,
      quote: row.quote ?? null,
      quote_date: row.quote_date ?? null,
      profile_image_url: row.profile_image_url ?? null,
      created_at: row.created_at,
      updated_at: row.updated_at
    };
  }
  sanitizePath(p) {
    if (!p)
      return p;
    let cleaned = p.trim().replace(/^\/+/, "");
    const bucketIdx = cleaned.indexOf(IMAGES_BUCKET4 + "/");
    if (bucketIdx !== -1) {
      cleaned = cleaned.substring(bucketIdx + IMAGES_BUCKET4.length + 1);
    }
    return cleaned;
  }
  addSigned(list) {
    if (!list.length)
      return of(list);
    const ttl = 60 * 10;
    const tasks = list.map((tm) => {
      const path = this.sanitizePath(tm.profile_image_url);
      if (!path)
        return of(__spreadProps(__spreadValues({}, tm), { profile_image_signed_url: null }));
      return from(this.supabase.client.storage.from(IMAGES_BUCKET4).createSignedUrl(path, ttl)).pipe(map((r) => __spreadProps(__spreadValues({}, tm), {
        profile_image_signed_url: r.error ? null : r.data?.signedUrl || null
      })));
    });
    return forkJoin(tasks);
  }
  listWithSigned(force = false) {
    return this.list(force).pipe(switchMap((items) => this.addSigned(items)));
  }
  list(force = false) {
    if (!this.cache$ || force) {
      const q = this.supabase.client.from(TABLE7).select("*").order("created_at", { ascending: false });
      this.cache$ = from(q).pipe(map((r) => {
        if (r.error)
          throw r.error;
        return (r.data || []).map((d) => this.mapRow(d));
      }), shareReplay(1));
    }
    return this.cache$;
  }
  getById(id) {
    return from(this.supabase.client.from(TABLE7).select("*").eq("id", id).single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      return this.mapRow(r.data);
    }));
  }
  create(payload) {
    return from(this.supabase.client.from(TABLE7).insert(payload).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  update(id, patch) {
    return from(this.supabase.client.from(TABLE7).update(patch).eq("id", id).select("*").single()).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return this.mapRow(r.data);
    }));
  }
  remove(id) {
    return from(this.supabase.client.from(TABLE7).delete().eq("id", id)).pipe(map((r) => {
      if (r.error)
        throw r.error;
      this.invalidateCache();
      return true;
    }));
  }
  static \u0275fac = function TopMindsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopMindsService)(\u0275\u0275inject(SupabaseService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TopMindsService, factory: _TopMindsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopMindsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: SupabaseService }], null);
})();

export {
  EventService,
  HeroListService,
  ToastrNotificationService,
  MediaWorkService,
  CategoryService,
  EcosystemService,
  EventTypeService,
  TopMindsService,
  SnakeToWordsPipe
};
//# sourceMappingURL=chunk-JUIE7TJN.js.map
