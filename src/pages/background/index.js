import {
  c as Sn,
  g as to,
} from "../../../assets/js/_commonjsHelpers.1J56E-h6.js";
var ro = { exports: {} };
(function (t, e) {
  (function (r, n) {
    n(t);
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Sn,
    function (r) {
      var n, o;
      if (
        !(
          (o = (n = globalThis.chrome) == null ? void 0 : n.runtime) != null &&
          o.id
        )
      )
        throw new Error(
          "This script should only be loaded in a browser extension."
        );
      if (
        typeof globalThis.browser > "u" ||
        Object.getPrototypeOf(globalThis.browser) !== Object.prototype
      ) {
        const s = "The message port closed before a response was received.",
          i = (c) => {
            const u = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(u).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill"
              );
            class l extends WeakMap {
              constructor(g, A = void 0) {
                super(A), (this.createItem = g);
              }
              get(g) {
                return (
                  this.has(g) || this.set(g, this.createItem(g)), super.get(g)
                );
              }
            }
            const d = (f) =>
                f && typeof f == "object" && typeof f.then == "function",
              m =
                (f, g) =>
                (...A) => {
                  c.runtime.lastError
                    ? f.reject(new Error(c.runtime.lastError.message))
                    : g.singleCallbackArg ||
                        (A.length <= 1 && g.singleCallbackArg !== !1)
                      ? f.resolve(A[0])
                      : f.resolve(A);
                },
              h = (f) => (f == 1 ? "argument" : "arguments"),
              p = (f, g) =>
                function (E, ...x) {
                  if (x.length < g.minArgs)
                    throw new Error(
                      `Expected at least ${g.minArgs} ${h(g.minArgs)} for ${f}(), got ${x.length}`
                    );
                  if (x.length > g.maxArgs)
                    throw new Error(
                      `Expected at most ${g.maxArgs} ${h(g.maxArgs)} for ${f}(), got ${x.length}`
                    );
                  return new Promise((R, I) => {
                    if (g.fallbackToNoCallback)
                      try {
                        E[f](...x, m({ resolve: R, reject: I }, g));
                      } catch (_) {
                        console.warn(
                          `${f} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          _
                        ),
                          E[f](...x),
                          (g.fallbackToNoCallback = !1),
                          (g.noCallback = !0),
                          R();
                      }
                    else
                      g.noCallback
                        ? (E[f](...x), R())
                        : E[f](...x, m({ resolve: R, reject: I }, g));
                  });
                },
              y = (f, g, A) =>
                new Proxy(g, {
                  apply(E, x, R) {
                    return A.call(x, f, ...R);
                  },
                });
            let P = Function.call.bind(Object.prototype.hasOwnProperty);
            const T = (f, g = {}, A = {}) => {
                let E = Object.create(null),
                  x = {
                    has(I, _) {
                      return _ in f || _ in E;
                    },
                    get(I, _, G) {
                      if (_ in E) return E[_];
                      if (!(_ in f)) return;
                      let k = f[_];
                      if (typeof k == "function")
                        if (typeof g[_] == "function") k = y(f, f[_], g[_]);
                        else if (P(A, _)) {
                          let he = p(_, A[_]);
                          k = y(f, f[_], he);
                        } else k = k.bind(f);
                      else if (
                        typeof k == "object" &&
                        k !== null &&
                        (P(g, _) || P(A, _))
                      )
                        k = T(k, g[_], A[_]);
                      else if (P(A, "*")) k = T(k, g[_], A["*"]);
                      else
                        return (
                          Object.defineProperty(E, _, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return f[_];
                            },
                            set(he) {
                              f[_] = he;
                            },
                          }),
                          k
                        );
                      return (E[_] = k), k;
                    },
                    set(I, _, G, k) {
                      return _ in E ? (E[_] = G) : (f[_] = G), !0;
                    },
                    defineProperty(I, _, G) {
                      return Reflect.defineProperty(E, _, G);
                    },
                    deleteProperty(I, _) {
                      return Reflect.deleteProperty(E, _);
                    },
                  },
                  R = Object.create(f);
                return new Proxy(R, x);
              },
              v = (f) => ({
                addListener(g, A, ...E) {
                  g.addListener(f.get(A), ...E);
                },
                hasListener(g, A) {
                  return g.hasListener(f.get(A));
                },
                removeListener(g, A) {
                  g.removeListener(f.get(A));
                },
              }),
              b = new l((f) =>
                typeof f != "function"
                  ? f
                  : function (A) {
                      const E = T(
                        A,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } }
                      );
                      f(E);
                    }
              ),
              w = new l((f) =>
                typeof f != "function"
                  ? f
                  : function (A, E, x) {
                      let R = !1,
                        I,
                        _ = new Promise((we) => {
                          I = function (V) {
                            (R = !0), we(V);
                          };
                        }),
                        G;
                      try {
                        G = f(A, E, I);
                      } catch (we) {
                        G = Promise.reject(we);
                      }
                      const k = G !== !0 && d(G);
                      if (G !== !0 && !k && !R) return !1;
                      const he = (we) => {
                        we.then(
                          (V) => {
                            x(V);
                          },
                          (V) => {
                            let Ct;
                            V &&
                            (V instanceof Error || typeof V.message == "string")
                              ? (Ct = V.message)
                              : (Ct = "An unexpected error occurred"),
                              x({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: Ct,
                              });
                          }
                        ).catch((V) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            V
                          );
                        });
                      };
                      return he(k ? G : _), !0;
                    }
              ),
              M = ({ reject: f, resolve: g }, A) => {
                c.runtime.lastError
                  ? c.runtime.lastError.message === s
                    ? g()
                    : f(new Error(c.runtime.lastError.message))
                  : A && A.__mozWebExtensionPolyfillReject__
                    ? f(new Error(A.message))
                    : g(A);
              },
              B = (f, g, A, ...E) => {
                if (E.length < g.minArgs)
                  throw new Error(
                    `Expected at least ${g.minArgs} ${h(g.minArgs)} for ${f}(), got ${E.length}`
                  );
                if (E.length > g.maxArgs)
                  throw new Error(
                    `Expected at most ${g.maxArgs} ${h(g.maxArgs)} for ${f}(), got ${E.length}`
                  );
                return new Promise((x, R) => {
                  const I = M.bind(null, { resolve: x, reject: R });
                  E.push(I), A.sendMessage(...E);
                });
              },
              U = {
                devtools: { network: { onRequestFinished: v(b) } },
                runtime: {
                  onMessage: v(w),
                  onMessageExternal: v(w),
                  sendMessage: B.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: B.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              C = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (u.privacy = {
                network: { "*": C },
                services: { "*": C },
                websites: { "*": C },
              }),
              T(c, U, u)
            );
          };
        r.exports = i(chrome);
      } else r.exports = globalThis.browser;
    }
  );
})(ro);
class z {
  getClientName() {
    throw new Error("getClientName not implemented.");
  }
  makeRequest(e, r, n, o, s, i, c, u) {
    throw new Error("makeRequest not implemented.");
  }
  static makeTimeoutError() {
    const e = new TypeError(z.TIMEOUT_ERROR_CODE);
    return (e.code = z.TIMEOUT_ERROR_CODE), e;
  }
}
z.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
z.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
class En {
  constructor(e, r) {
    (this._statusCode = e), (this._headers = r);
  }
  getStatusCode() {
    return this._statusCode;
  }
  getHeaders() {
    return this._headers;
  }
  getRawResponse() {
    throw new Error("getRawResponse not implemented.");
  }
  toStream(e) {
    throw new Error("toStream not implemented.");
  }
  toJSON() {
    throw new Error("toJSON not implemented.");
  }
}
class At extends z {
  constructor(e) {
    if ((super(), !e)) {
      if (!globalThis.fetch)
        throw new Error(
          "fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation."
        );
      e = globalThis.fetch;
    }
    globalThis.AbortController
      ? (this._fetchFn = At.makeFetchWithAbortTimeout(e))
      : (this._fetchFn = At.makeFetchWithRaceTimeout(e));
  }
  static makeFetchWithRaceTimeout(e) {
    return (r, n, o) => {
      let s;
      const i = new Promise((u, l) => {
          s = setTimeout(() => {
            (s = null), l(z.makeTimeoutError());
          }, o);
        }),
        c = e(r, n);
      return Promise.race([c, i]).finally(() => {
        s && clearTimeout(s);
      });
    };
  }
  static makeFetchWithAbortTimeout(e) {
    return async (r, n, o) => {
      const s = new AbortController();
      let i = setTimeout(() => {
        (i = null), s.abort(z.makeTimeoutError());
      }, o);
      try {
        return await e(
          r,
          Object.assign(Object.assign({}, n), { signal: s.signal })
        );
      } catch (c) {
        throw c.name === "AbortError" ? z.makeTimeoutError() : c;
      } finally {
        i && clearTimeout(i);
      }
    };
  }
  getClientName() {
    return "fetch";
  }
  async makeRequest(e, r, n, o, s, i, c, u) {
    const l = c === "http",
      d = new URL(n, `${l ? "http" : "https"}://${e}`);
    d.port = r;
    const m = o == "POST" || o == "PUT" || o == "PATCH",
      h = i || (m ? "" : void 0),
      p = await this._fetchFn(
        d.toString(),
        { method: o, headers: s, body: h },
        u
      );
    return new cr(p);
  }
}
class cr extends En {
  constructor(e) {
    super(e.status, cr._transformHeadersToObject(e.headers)), (this._res = e);
  }
  getRawResponse() {
    return this._res;
  }
  toStream(e) {
    return e(), this._res.body;
  }
  toJSON() {
    return this._res.json();
  }
  static _transformHeadersToObject(e) {
    const r = {};
    for (const n of e) {
      if (!Array.isArray(n) || n.length != 2)
        throw new Error(
          "Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object."
        );
      r[n[0]] = n[1];
    }
    return r;
  }
}
class bn {
  computeHMACSignature(e, r) {
    throw new Error("computeHMACSignature not implemented.");
  }
  computeHMACSignatureAsync(e, r) {
    throw new Error("computeHMACSignatureAsync not implemented.");
  }
}
class xn extends Error {}
class no extends bn {
  constructor(e) {
    super(), (this.subtleCrypto = e || crypto.subtle);
  }
  computeHMACSignature(e, r) {
    throw new xn(
      "SubtleCryptoProvider cannot be used in a synchronous context."
    );
  }
  async computeHMACSignatureAsync(e, r) {
    const n = new TextEncoder(),
      o = await this.subtleCrypto.importKey(
        "raw",
        n.encode(r),
        { name: "HMAC", hash: { name: "SHA-256" } },
        !1,
        ["sign"]
      ),
      s = await this.subtleCrypto.sign("hmac", o, n.encode(e)),
      i = new Uint8Array(s),
      c = new Array(i.length);
    for (let u = 0; u < i.length; u++) c[u] = tr[i[u]];
    return c.join("");
  }
}
const tr = new Array(256);
for (let t = 0; t < tr.length; t++) tr[t] = t.toString(16).padStart(2, "0");
class oo {
  constructor() {
    (this._fetchFn = null), (this._agent = null);
  }
  getUname() {
    throw new Error("getUname not implemented.");
  }
  uuid4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      const r = (Math.random() * 16) | 0;
      return (e === "x" ? r : (r & 3) | 8).toString(16);
    });
  }
  secureCompare(e, r) {
    if (e.length !== r.length) return !1;
    const n = e.length;
    let o = 0;
    for (let s = 0; s < n; ++s) o |= e.charCodeAt(s) ^ r.charCodeAt(s);
    return o === 0;
  }
  createEmitter() {
    throw new Error("createEmitter not implemented.");
  }
  tryBufferData(e) {
    throw new Error("tryBufferData not implemented.");
  }
  createNodeHttpClient(e) {
    throw new Error("createNodeHttpClient not implemented.");
  }
  createFetchHttpClient(e) {
    return new At(e);
  }
  createDefaultHttpClient() {
    throw new Error("createDefaultHttpClient not implemented.");
  }
  createNodeCryptoProvider() {
    throw new Error("createNodeCryptoProvider not implemented.");
  }
  createSubtleCryptoProvider(e) {
    return new no(e);
  }
  createDefaultCryptoProvider() {
    throw new Error("createDefaultCryptoProvider not implemented.");
  }
}
class so extends Event {
  constructor(e, r) {
    super(e), (this.data = r);
  }
}
class ao {
  constructor() {
    (this.eventTarget = new EventTarget()), (this.listenerMapping = new Map());
  }
  on(e, r) {
    const n = (o) => {
      r(o.data);
    };
    return (
      this.listenerMapping.set(r, n), this.eventTarget.addEventListener(e, n)
    );
  }
  removeListener(e, r) {
    const n = this.listenerMapping.get(r);
    return (
      this.listenerMapping.delete(r), this.eventTarget.removeEventListener(e, n)
    );
  }
  once(e, r) {
    const n = (o) => {
      r(o.data);
    };
    return (
      this.listenerMapping.set(r, n),
      this.eventTarget.addEventListener(e, n, { once: !0 })
    );
  }
  emit(e, r) {
    return this.eventTarget.dispatchEvent(new so(e, r));
  }
}
class io extends oo {
  getUname() {
    return Promise.resolve(null);
  }
  createEmitter() {
    return new ao();
  }
  tryBufferData(e) {
    if (e.file.data instanceof ReadableStream)
      throw new Error(
        "Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case."
      );
    return Promise.resolve(e);
  }
  createNodeHttpClient() {
    throw new Error(
      "Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead."
    );
  }
  createDefaultHttpClient() {
    return super.createFetchHttpClient();
  }
  createNodeCryptoProvider() {
    throw new Error(
      "Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead."
    );
  }
  createDefaultCryptoProvider() {
    return this.createSubtleCryptoProvider();
  }
}
const On = (t) => {
  switch (t.type) {
    case "card_error":
      return new wn(t);
    case "invalid_request_error":
      return new Cn(t);
    case "api_error":
      return new ur(t);
    case "authentication_error":
      return new dr(t);
    case "rate_limit_error":
      return new hr(t);
    case "idempotency_error":
      return new $n(t);
    case "invalid_grant":
      return new In(t);
    default:
      return new Gn(t);
  }
};
class H extends Error {
  constructor(e = {}) {
    super(e.message),
      (this.type = this.constructor.name),
      (this.raw = e),
      (this.rawType = e.type),
      (this.code = e.code),
      (this.doc_url = e.doc_url),
      (this.param = e.param),
      (this.detail = e.detail),
      (this.headers = e.headers),
      (this.requestId = e.requestId),
      (this.statusCode = e.statusCode),
      (this.message = e.message),
      (this.charge = e.charge),
      (this.decline_code = e.decline_code),
      (this.payment_intent = e.payment_intent),
      (this.payment_method = e.payment_method),
      (this.payment_method_type = e.payment_method_type),
      (this.setup_intent = e.setup_intent),
      (this.source = e.source);
  }
}
H.generate = On;
class wn extends H {}
class Cn extends H {}
class ur extends H {}
class dr extends H {}
class Rn extends H {}
class hr extends H {}
class Mn extends H {}
class re extends H {
  constructor(e, r, n = {}) {
    super(n), (this.header = e), (this.payload = r);
  }
}
class $n extends H {}
class In extends H {}
class Gn extends H {}
const Ar = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        StripeAPIError: ur,
        StripeAuthenticationError: dr,
        StripeCardError: wn,
        StripeConnectionError: Mn,
        StripeError: H,
        StripeIdempotencyError: $n,
        StripeInvalidGrantError: In,
        StripeInvalidRequestError: Cn,
        StripePermissionError: Rn,
        StripeRateLimitError: hr,
        StripeSignatureVerificationError: re,
        StripeUnknownError: Gn,
        generate: On,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lo = "2023-10-16";
function co(t, e) {
  for (const r in e) {
    const n = r[0].toLowerCase() + r.substring(1),
      o = new e[r](t);
    this[n] = o;
  }
}
function F(t, e) {
  return function (r) {
    return new co(r, e);
  };
}
var uo = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var e = {},
      r = Symbol("test"),
      n = Object(r);
    if (
      typeof r == "string" ||
      Object.prototype.toString.call(r) !== "[object Symbol]" ||
      Object.prototype.toString.call(n) !== "[object Symbol]"
    )
      return !1;
    var o = 42;
    e[r] = o;
    for (r in e) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(e).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(e).length !== 0)
    )
      return !1;
    var s = Object.getOwnPropertySymbols(e);
    if (
      s.length !== 1 ||
      s[0] !== r ||
      !Object.prototype.propertyIsEnumerable.call(e, r)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = Object.getOwnPropertyDescriptor(e, r);
      if (i.value !== o || i.enumerable !== !0) return !1;
    }
    return !0;
  },
  Sr = typeof Symbol < "u" && Symbol,
  ho = uo,
  mo = function () {
    return typeof Sr != "function" ||
      typeof Symbol != "function" ||
      typeof Sr("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : ho();
  },
  Er = { foo: {} },
  fo = Object,
  po = function () {
    return (
      { __proto__: Er }.foo === Er.foo && !({ __proto__: null } instanceof fo)
    );
  },
  yo = "Function.prototype.bind called on incompatible ",
  go = Object.prototype.toString,
  vo = Math.max,
  Po = "[object Function]",
  br = function (e, r) {
    for (var n = [], o = 0; o < e.length; o += 1) n[o] = e[o];
    for (var s = 0; s < r.length; s += 1) n[s + e.length] = r[s];
    return n;
  },
  To = function (e, r) {
    for (var n = [], o = r || 0, s = 0; o < e.length; o += 1, s += 1)
      n[s] = e[o];
    return n;
  },
  _o = function (t, e) {
    for (var r = "", n = 0; n < t.length; n += 1)
      (r += t[n]), n + 1 < t.length && (r += e);
    return r;
  },
  Ao = function (e) {
    var r = this;
    if (typeof r != "function" || go.apply(r) !== Po)
      throw new TypeError(yo + r);
    for (
      var n = To(arguments, 1),
        o,
        s = function () {
          if (this instanceof o) {
            var d = r.apply(this, br(n, arguments));
            return Object(d) === d ? d : this;
          }
          return r.apply(e, br(n, arguments));
        },
        i = vo(0, r.length - n.length),
        c = [],
        u = 0;
      u < i;
      u++
    )
      c[u] = "$" + u;
    if (
      ((o = Function(
        "binder",
        "return function (" +
          _o(c, ",") +
          "){ return binder.apply(this,arguments); }"
      )(s)),
      r.prototype)
    ) {
      var l = function () {};
      (l.prototype = r.prototype),
        (o.prototype = new l()),
        (l.prototype = null);
    }
    return o;
  },
  So = Ao,
  kn = Function.prototype.bind || So,
  xr = {}.hasOwnProperty,
  Rt = Function.prototype.call,
  Eo = Rt.bind
    ? Rt.bind(xr)
    : function (t, e) {
        return Rt.call(xr, t, e);
      },
  S,
  Ee = SyntaxError,
  Nn = Function,
  Se = TypeError,
  Mt = function (t) {
    try {
      return Nn('"use strict"; return (' + t + ").constructor;")();
    } catch {}
  },
  ue = Object.getOwnPropertyDescriptor;
if (ue)
  try {
    ue({}, "");
  } catch {
    ue = null;
  }
var $t = function () {
    throw new Se();
  },
  bo = ue
    ? (function () {
        try {
          return arguments.callee, $t;
        } catch {
          try {
            return ue(arguments, "callee").get;
          } catch {
            return $t;
          }
        }
      })()
    : $t,
  me = mo(),
  xo = po(),
  D =
    Object.getPrototypeOf ||
    (xo
      ? function (t) {
          return t.__proto__;
        }
      : null),
  Ae = {},
  Oo = typeof Uint8Array > "u" || !D ? S : D(Uint8Array),
  de = {
    "%AggregateError%": typeof AggregateError > "u" ? S : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? S : ArrayBuffer,
    "%ArrayIteratorPrototype%": me && D ? D([][Symbol.iterator]()) : S,
    "%AsyncFromSyncIteratorPrototype%": S,
    "%AsyncFunction%": Ae,
    "%AsyncGenerator%": Ae,
    "%AsyncGeneratorFunction%": Ae,
    "%AsyncIteratorPrototype%": Ae,
    "%Atomics%": typeof Atomics > "u" ? S : Atomics,
    "%BigInt%": typeof BigInt > "u" ? S : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? S : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? S : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? S : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? S : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? S : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry > "u" ? S : FinalizationRegistry,
    "%Function%": Nn,
    "%GeneratorFunction%": Ae,
    "%Int8Array%": typeof Int8Array > "u" ? S : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? S : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? S : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": me && D ? D(D([][Symbol.iterator]())) : S,
    "%JSON%": typeof JSON == "object" ? JSON : S,
    "%Map%": typeof Map > "u" ? S : Map,
    "%MapIteratorPrototype%":
      typeof Map > "u" || !me || !D ? S : D(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? S : Promise,
    "%Proxy%": typeof Proxy > "u" ? S : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? S : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? S : Set,
    "%SetIteratorPrototype%":
      typeof Set > "u" || !me || !D ? S : D(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer > "u" ? S : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": me && D ? D(""[Symbol.iterator]()) : S,
    "%Symbol%": me ? Symbol : S,
    "%SyntaxError%": Ee,
    "%ThrowTypeError%": bo,
    "%TypedArray%": Oo,
    "%TypeError%": Se,
    "%Uint8Array%": typeof Uint8Array > "u" ? S : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray > "u" ? S : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? S : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? S : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? S : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? S : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? S : WeakSet,
  };
if (D)
  try {
    null.error;
  } catch (t) {
    var wo = D(D(t));
    de["%Error.prototype%"] = wo;
  }
var Co = function t(e) {
    var r;
    if (e === "%AsyncFunction%") r = Mt("async function () {}");
    else if (e === "%GeneratorFunction%") r = Mt("function* () {}");
    else if (e === "%AsyncGeneratorFunction%") r = Mt("async function* () {}");
    else if (e === "%AsyncGenerator%") {
      var n = t("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var o = t("%AsyncGenerator%");
      o && D && (r = D(o.prototype));
    }
    return (de[e] = r), r;
  },
  Or = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  Ze = kn,
  St = Eo,
  Ro = Ze.call(Function.call, Array.prototype.concat),
  Mo = Ze.call(Function.apply, Array.prototype.splice),
  wr = Ze.call(Function.call, String.prototype.replace),
  Et = Ze.call(Function.call, String.prototype.slice),
  $o = Ze.call(Function.call, RegExp.prototype.exec),
  Io =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  Go = /\\(\\)?/g,
  ko = function (e) {
    var r = Et(e, 0, 1),
      n = Et(e, -1);
    if (r === "%" && n !== "%")
      throw new Ee("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
      throw new Ee("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return (
      wr(e, Io, function (s, i, c, u) {
        o[o.length] = c ? wr(u, Go, "$1") : i || s;
      }),
      o
    );
  },
  No = function (e, r) {
    var n = e,
      o;
    if ((St(Or, n) && ((o = Or[n]), (n = "%" + o[0] + "%")), St(de, n))) {
      var s = de[n];
      if ((s === Ae && (s = Co(n)), typeof s > "u" && !r))
        throw new Se(
          "intrinsic " +
            e +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: o, name: n, value: s };
    }
    throw new Ee("intrinsic " + e + " does not exist!");
  },
  mr = function (e, r) {
    if (typeof e != "string" || e.length === 0)
      throw new Se("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new Se('"allowMissing" argument must be a boolean');
    if ($o(/^%?[^%]*%?$/, e) === null)
      throw new Ee(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var n = ko(e),
      o = n.length > 0 ? n[0] : "",
      s = No("%" + o + "%", r),
      i = s.name,
      c = s.value,
      u = !1,
      l = s.alias;
    l && ((o = l[0]), Mo(n, Ro([0, 1], l)));
    for (var d = 1, m = !0; d < n.length; d += 1) {
      var h = n[d],
        p = Et(h, 0, 1),
        y = Et(h, -1);
      if (
        (p === '"' ||
          p === "'" ||
          p === "`" ||
          y === '"' ||
          y === "'" ||
          y === "`") &&
        p !== y
      )
        throw new Ee("property names with quotes must have matching quotes");
      if (
        ((h === "constructor" || !m) && (u = !0),
        (o += "." + h),
        (i = "%" + o + "%"),
        St(de, i))
      )
        c = de[i];
      else if (c != null) {
        if (!(h in c)) {
          if (!r)
            throw new Se(
              "base intrinsic for " +
                e +
                " exists, but the property is not available."
            );
          return;
        }
        if (ue && d + 1 >= n.length) {
          var P = ue(c, h);
          (m = !!P),
            m && "get" in P && !("originalValue" in P.get)
              ? (c = P.get)
              : (c = c[h]);
        } else (m = St(c, h)), (c = c[h]);
        m && !u && (de[i] = c);
      }
    }
    return c;
  },
  Dn = { exports: {} };
(function (t) {
  var e = kn,
    r = mr,
    n = r("%Function.prototype.apply%"),
    o = r("%Function.prototype.call%"),
    s = r("%Reflect.apply%", !0) || e.call(o, n),
    i = r("%Object.getOwnPropertyDescriptor%", !0),
    c = r("%Object.defineProperty%", !0),
    u = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  t.exports = function (m) {
    var h = s(e, o, arguments);
    if (i && c) {
      var p = i(h, "length");
      p.configurable &&
        c(h, "length", { value: 1 + u(0, m.length - (arguments.length - 1)) });
    }
    return h;
  };
  var l = function () {
    return s(e, n, arguments);
  };
  c ? c(t.exports, "apply", { value: l }) : (t.exports.apply = l);
})(Dn);
var Do = Dn.exports,
  Fn = mr,
  Un = Do,
  Fo = Un(Fn("String.prototype.indexOf")),
  Uo = function (e, r) {
    var n = Fn(e, !!r);
    return typeof n == "function" && Fo(e, ".prototype.") > -1 ? Un(n) : n;
  };
const Lo = {},
  qo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lo },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bo = to(qo);
var fr = typeof Map == "function" && Map.prototype,
  It =
    Object.getOwnPropertyDescriptor && fr
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  bt = fr && It && typeof It.get == "function" ? It.get : null,
  Cr = fr && Map.prototype.forEach,
  pr = typeof Set == "function" && Set.prototype,
  Gt =
    Object.getOwnPropertyDescriptor && pr
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  xt = pr && Gt && typeof Gt.get == "function" ? Gt.get : null,
  Rr = pr && Set.prototype.forEach,
  Ho = typeof WeakMap == "function" && WeakMap.prototype,
  Qe = Ho ? WeakMap.prototype.has : null,
  Wo = typeof WeakSet == "function" && WeakSet.prototype,
  Je = Wo ? WeakSet.prototype.has : null,
  zo = typeof WeakRef == "function" && WeakRef.prototype,
  Mr = zo ? WeakRef.prototype.deref : null,
  jo = Boolean.prototype.valueOf,
  Vo = Object.prototype.toString,
  Ko = Function.prototype.toString,
  Qo = String.prototype.match,
  yr = String.prototype.slice,
  oe = String.prototype.replace,
  Jo = String.prototype.toUpperCase,
  $r = String.prototype.toLowerCase,
  Ln = RegExp.prototype.test,
  Ir = Array.prototype.concat,
  Y = Array.prototype.join,
  Yo = Array.prototype.slice,
  Gr = Math.floor,
  rr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  kt = Object.getOwnPropertySymbols,
  nr =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  be = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  q =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === be || "symbol")
      ? Symbol.toStringTag
      : null,
  qn = Object.prototype.propertyIsEnumerable,
  kr =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (t) {
          return t.__proto__;
        }
      : null);
function Nr(t, e) {
  if (
    t === 1 / 0 ||
    t === -1 / 0 ||
    t !== t ||
    (t && t > -1e3 && t < 1e3) ||
    Ln.call(/e/, e)
  )
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -Gr(-t) : Gr(t);
    if (n !== t) {
      var o = String(n),
        s = yr.call(e, o.length + 1);
      return (
        oe.call(o, r, "$&_") +
        "." +
        oe.call(oe.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return oe.call(e, r, "$&_");
}
var or = Bo,
  Dr = or.custom,
  Fr = Hn(Dr) ? Dr : null,
  Xo = function t(e, r, n, o) {
    var s = r || {};
    if (
      ne(s, "quoteStyle") &&
      s.quoteStyle !== "single" &&
      s.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      ne(s, "maxStringLength") &&
      (typeof s.maxStringLength == "number"
        ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
        : s.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var i = ne(s, "customInspect") ? s.customInspect : !0;
    if (typeof i != "boolean" && i !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      ne(s, "indent") &&
      s.indent !== null &&
      s.indent !== "	" &&
      !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (ne(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var c = s.numericSeparator;
    if (typeof e > "u") return "undefined";
    if (e === null) return "null";
    if (typeof e == "boolean") return e ? "true" : "false";
    if (typeof e == "string") return zn(e, s);
    if (typeof e == "number") {
      if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
      var u = String(e);
      return c ? Nr(e, u) : u;
    }
    if (typeof e == "bigint") {
      var l = String(e) + "n";
      return c ? Nr(e, l) : l;
    }
    var d = typeof s.depth > "u" ? 5 : s.depth;
    if ((typeof n > "u" && (n = 0), n >= d && d > 0 && typeof e == "object"))
      return sr(e) ? "[Array]" : "[Object]";
    var m = ys(s, n);
    if (typeof o > "u") o = [];
    else if (Wn(o, e) >= 0) return "[Circular]";
    function h(R, I, _) {
      if ((I && ((o = Yo.call(o)), o.push(I)), _)) {
        var G = { depth: s.depth };
        return (
          ne(s, "quoteStyle") && (G.quoteStyle = s.quoteStyle),
          t(R, G, n + 1, o)
        );
      }
      return t(R, s, n + 1, o);
    }
    if (typeof e == "function" && !Ur(e)) {
      var p = is(e),
        y = et(e, h);
      return (
        "[Function" +
        (p ? ": " + p : " (anonymous)") +
        "]" +
        (y.length > 0 ? " { " + Y.call(y, ", ") + " }" : "")
      );
    }
    if (Hn(e)) {
      var P = be
        ? oe.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : nr.call(e);
      return typeof e == "object" && !be ? Ce(P) : P;
    }
    if (ms(e)) {
      for (
        var T = "<" + $r.call(String(e.nodeName)),
          v = e.attributes || [],
          b = 0;
        b < v.length;
        b++
      )
        T += " " + v[b].name + "=" + Bn(Zo(v[b].value), "double", s);
      return (
        (T += ">"),
        e.childNodes && e.childNodes.length && (T += "..."),
        (T += "</" + $r.call(String(e.nodeName)) + ">"),
        T
      );
    }
    if (sr(e)) {
      if (e.length === 0) return "[]";
      var w = et(e, h);
      return m && !ps(w) ? "[" + ar(w, m) + "]" : "[ " + Y.call(w, ", ") + " ]";
    }
    if (ts(e)) {
      var M = et(e, h);
      return !("cause" in Error.prototype) &&
        "cause" in e &&
        !qn.call(e, "cause")
        ? "{ [" +
            String(e) +
            "] " +
            Y.call(Ir.call("[cause]: " + h(e.cause), M), ", ") +
            " }"
        : M.length === 0
          ? "[" + String(e) + "]"
          : "{ [" + String(e) + "] " + Y.call(M, ", ") + " }";
    }
    if (typeof e == "object" && i) {
      if (Fr && typeof e[Fr] == "function" && or)
        return or(e, { depth: d - n });
      if (i !== "symbol" && typeof e.inspect == "function") return e.inspect();
    }
    if (ls(e)) {
      var B = [];
      return (
        Cr &&
          Cr.call(e, function (R, I) {
            B.push(h(I, e, !0) + " => " + h(R, e));
          }),
        Lr("Map", bt.call(e), B, m)
      );
    }
    if (ds(e)) {
      var U = [];
      return (
        Rr &&
          Rr.call(e, function (R) {
            U.push(h(R, e));
          }),
        Lr("Set", xt.call(e), U, m)
      );
    }
    if (cs(e)) return Nt("WeakMap");
    if (hs(e)) return Nt("WeakSet");
    if (us(e)) return Nt("WeakRef");
    if (ns(e)) return Ce(h(Number(e)));
    if (ss(e)) return Ce(h(rr.call(e)));
    if (os(e)) return Ce(jo.call(e));
    if (rs(e)) return Ce(h(String(e)));
    if (e === Sn)
      return typeof window < "u"
        ? "{ [object Window] }"
        : "{ [object global] }";
    if (!es(e) && !Ur(e)) {
      var C = et(e, h),
        f = kr
          ? kr(e) === Object.prototype
          : e instanceof Object || e.constructor === Object,
        g = e instanceof Object ? "" : "null prototype",
        A =
          !f && q && Object(e) === e && q in e
            ? yr.call(se(e), 8, -1)
            : g
              ? "Object"
              : "",
        E =
          f || typeof e.constructor != "function"
            ? ""
            : e.constructor.name
              ? e.constructor.name + " "
              : "",
        x =
          E +
          (A || g
            ? "[" + Y.call(Ir.call([], A || [], g || []), ": ") + "] "
            : "");
      return C.length === 0
        ? x + "{}"
        : m
          ? x + "{" + ar(C, m) + "}"
          : x + "{ " + Y.call(C, ", ") + " }";
    }
    return String(e);
  };
function Bn(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Zo(t) {
  return oe.call(String(t), /"/g, "&quot;");
}
function sr(t) {
  return (
    se(t) === "[object Array]" && (!q || !(typeof t == "object" && q in t))
  );
}
function es(t) {
  return se(t) === "[object Date]" && (!q || !(typeof t == "object" && q in t));
}
function Ur(t) {
  return (
    se(t) === "[object RegExp]" && (!q || !(typeof t == "object" && q in t))
  );
}
function ts(t) {
  return (
    se(t) === "[object Error]" && (!q || !(typeof t == "object" && q in t))
  );
}
function rs(t) {
  return (
    se(t) === "[object String]" && (!q || !(typeof t == "object" && q in t))
  );
}
function ns(t) {
  return (
    se(t) === "[object Number]" && (!q || !(typeof t == "object" && q in t))
  );
}
function os(t) {
  return (
    se(t) === "[object Boolean]" && (!q || !(typeof t == "object" && q in t))
  );
}
function Hn(t) {
  if (be) return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol") return !0;
  if (!t || typeof t != "object" || !nr) return !1;
  try {
    return nr.call(t), !0;
  } catch {}
  return !1;
}
function ss(t) {
  if (!t || typeof t != "object" || !rr) return !1;
  try {
    return rr.call(t), !0;
  } catch {}
  return !1;
}
var as =
  Object.prototype.hasOwnProperty ||
  function (t) {
    return t in this;
  };
function ne(t, e) {
  return as.call(t, e);
}
function se(t) {
  return Vo.call(t);
}
function is(t) {
  if (t.name) return t.name;
  var e = Qo.call(Ko.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Wn(t, e) {
  if (t.indexOf) return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
  return -1;
}
function ls(t) {
  if (!bt || !t || typeof t != "object") return !1;
  try {
    bt.call(t);
    try {
      xt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {}
  return !1;
}
function cs(t) {
  if (!Qe || !t || typeof t != "object") return !1;
  try {
    Qe.call(t, Qe);
    try {
      Je.call(t, Je);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {}
  return !1;
}
function us(t) {
  if (!Mr || !t || typeof t != "object") return !1;
  try {
    return Mr.call(t), !0;
  } catch {}
  return !1;
}
function ds(t) {
  if (!xt || !t || typeof t != "object") return !1;
  try {
    xt.call(t);
    try {
      bt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {}
  return !1;
}
function hs(t) {
  if (!Je || !t || typeof t != "object") return !1;
  try {
    Je.call(t, Je);
    try {
      Qe.call(t, Qe);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {}
  return !1;
}
function ms(t) {
  return !t || typeof t != "object"
    ? !1
    : typeof HTMLElement < "u" && t instanceof HTMLElement
      ? !0
      : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function zn(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength,
      n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return zn(yr.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = oe.call(oe.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, fs);
  return Bn(o, "single", e);
}
function fs(t) {
  var e = t.charCodeAt(0),
    r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Jo.call(e.toString(16));
}
function Ce(t) {
  return "Object(" + t + ")";
}
function Nt(t) {
  return t + " { ? }";
}
function Lr(t, e, r, n) {
  var o = n ? ar(r, n) : Y.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function ps(t) {
  for (var e = 0; e < t.length; e++)
    if (
      Wn(
        t[e],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function ys(t, e) {
  var r;
  if (t.indent === "	") r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = Y.call(Array(t.indent + 1), " ");
  else return null;
  return { base: r, prev: Y.call(Array(e + 1), r) };
}
function ar(t, e) {
  if (t.length === 0) return "";
  var r =
    `
` +
    e.prev +
    e.base;
  return (
    r +
    Y.call(t, "," + r) +
    `
` +
    e.prev
  );
}
function et(t, e) {
  var r = sr(t),
    n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++) n[o] = ne(t, o) ? e(t[o], t) : "";
  }
  var s = typeof kt == "function" ? kt(t) : [],
    i;
  if (be) {
    i = {};
    for (var c = 0; c < s.length; c++) i["$" + s[c]] = s[c];
  }
  for (var u in t)
    ne(t, u) &&
      ((r && String(Number(u)) === u && u < t.length) ||
        (be && i["$" + u] instanceof Symbol) ||
        (Ln.call(/[^\w$]/, u)
          ? n.push(e(u, t) + ": " + e(t[u], t))
          : n.push(u + ": " + e(t[u], t))));
  if (typeof kt == "function")
    for (var l = 0; l < s.length; l++)
      qn.call(t, s[l]) && n.push("[" + e(s[l]) + "]: " + e(t[s[l]], t));
  return n;
}
var gr = mr,
  Oe = Uo,
  gs = Xo,
  vs = gr("%TypeError%"),
  tt = gr("%WeakMap%", !0),
  rt = gr("%Map%", !0),
  Ps = Oe("WeakMap.prototype.get", !0),
  Ts = Oe("WeakMap.prototype.set", !0),
  _s = Oe("WeakMap.prototype.has", !0),
  As = Oe("Map.prototype.get", !0),
  Ss = Oe("Map.prototype.set", !0),
  Es = Oe("Map.prototype.has", !0),
  vr = function (t, e) {
    for (var r = t, n; (n = r.next) !== null; r = n)
      if (n.key === e)
        return (r.next = n.next), (n.next = t.next), (t.next = n), n;
  },
  bs = function (t, e) {
    var r = vr(t, e);
    return r && r.value;
  },
  xs = function (t, e, r) {
    var n = vr(t, e);
    n ? (n.value = r) : (t.next = { key: e, next: t.next, value: r });
  },
  Os = function (t, e) {
    return !!vr(t, e);
  },
  ws = function () {
    var e,
      r,
      n,
      o = {
        assert: function (s) {
          if (!o.has(s)) throw new vs("Side channel does not contain " + gs(s));
        },
        get: function (s) {
          if (tt && s && (typeof s == "object" || typeof s == "function")) {
            if (e) return Ps(e, s);
          } else if (rt) {
            if (r) return As(r, s);
          } else if (n) return bs(n, s);
        },
        has: function (s) {
          if (tt && s && (typeof s == "object" || typeof s == "function")) {
            if (e) return _s(e, s);
          } else if (rt) {
            if (r) return Es(r, s);
          } else if (n) return Os(n, s);
          return !1;
        },
        set: function (s, i) {
          tt && s && (typeof s == "object" || typeof s == "function")
            ? (e || (e = new tt()), Ts(e, s, i))
            : rt
              ? (r || (r = new rt()), Ss(r, s, i))
              : (n || (n = { key: {}, next: null }), xs(n, s, i));
        },
      };
    return o;
  },
  Cs = String.prototype.replace,
  Rs = /%20/g,
  Dt = { RFC1738: "RFC1738", RFC3986: "RFC3986" },
  Pr = {
    default: Dt.RFC3986,
    formatters: {
      RFC1738: function (t) {
        return Cs.call(t, Rs, "+");
      },
      RFC3986: function (t) {
        return String(t);
      },
    },
    RFC1738: Dt.RFC1738,
    RFC3986: Dt.RFC3986,
  },
  Ms = Pr,
  Ft = Object.prototype.hasOwnProperty,
  ce = Array.isArray,
  K = (function () {
    for (var t = [], e = 0; e < 256; ++e)
      t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
    return t;
  })(),
  $s = function (e) {
    for (; e.length > 1; ) {
      var r = e.pop(),
        n = r.obj[r.prop];
      if (ce(n)) {
        for (var o = [], s = 0; s < n.length; ++s)
          typeof n[s] < "u" && o.push(n[s]);
        r.obj[r.prop] = o;
      }
    }
  },
  jn = function (e, r) {
    for (
      var n = r && r.plainObjects ? Object.create(null) : {}, o = 0;
      o < e.length;
      ++o
    )
      typeof e[o] < "u" && (n[o] = e[o]);
    return n;
  },
  Is = function t(e, r, n) {
    if (!r) return e;
    if (typeof r != "object") {
      if (ce(e)) e.push(r);
      else if (e && typeof e == "object")
        ((n && (n.plainObjects || n.allowPrototypes)) ||
          !Ft.call(Object.prototype, r)) &&
          (e[r] = !0);
      else return [e, r];
      return e;
    }
    if (!e || typeof e != "object") return [e].concat(r);
    var o = e;
    return (
      ce(e) && !ce(r) && (o = jn(e, n)),
      ce(e) && ce(r)
        ? (r.forEach(function (s, i) {
            if (Ft.call(e, i)) {
              var c = e[i];
              c && typeof c == "object" && s && typeof s == "object"
                ? (e[i] = t(c, s, n))
                : e.push(s);
            } else e[i] = s;
          }),
          e)
        : Object.keys(r).reduce(function (s, i) {
            var c = r[i];
            return Ft.call(s, i) ? (s[i] = t(s[i], c, n)) : (s[i] = c), s;
          }, o)
    );
  },
  Gs = function (e, r) {
    return Object.keys(r).reduce(function (n, o) {
      return (n[o] = r[o]), n;
    }, e);
  },
  ks = function (t, e, r) {
    var n = t.replace(/\+/g, " ");
    if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  },
  Ns = function (e, r, n, o, s) {
    if (e.length === 0) return e;
    var i = e;
    if (
      (typeof e == "symbol"
        ? (i = Symbol.prototype.toString.call(e))
        : typeof e != "string" && (i = String(e)),
      n === "iso-8859-1")
    )
      return escape(i).replace(/%u[0-9a-f]{4}/gi, function (d) {
        return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
      });
    for (var c = "", u = 0; u < i.length; ++u) {
      var l = i.charCodeAt(u);
      if (
        l === 45 ||
        l === 46 ||
        l === 95 ||
        l === 126 ||
        (l >= 48 && l <= 57) ||
        (l >= 65 && l <= 90) ||
        (l >= 97 && l <= 122) ||
        (s === Ms.RFC1738 && (l === 40 || l === 41))
      ) {
        c += i.charAt(u);
        continue;
      }
      if (l < 128) {
        c = c + K[l];
        continue;
      }
      if (l < 2048) {
        c = c + (K[192 | (l >> 6)] + K[128 | (l & 63)]);
        continue;
      }
      if (l < 55296 || l >= 57344) {
        c =
          c +
          (K[224 | (l >> 12)] + K[128 | ((l >> 6) & 63)] + K[128 | (l & 63)]);
        continue;
      }
      (u += 1),
        (l = 65536 + (((l & 1023) << 10) | (i.charCodeAt(u) & 1023))),
        (c +=
          K[240 | (l >> 18)] +
          K[128 | ((l >> 12) & 63)] +
          K[128 | ((l >> 6) & 63)] +
          K[128 | (l & 63)]);
    }
    return c;
  },
  Ds = function (e) {
    for (
      var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0;
      o < r.length;
      ++o
    )
      for (
        var s = r[o], i = s.obj[s.prop], c = Object.keys(i), u = 0;
        u < c.length;
        ++u
      ) {
        var l = c[u],
          d = i[l];
        typeof d == "object" &&
          d !== null &&
          n.indexOf(d) === -1 &&
          (r.push({ obj: i, prop: l }), n.push(d));
      }
    return $s(r), e;
  },
  Fs = function (e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  },
  Us = function (e) {
    return !e || typeof e != "object"
      ? !1
      : !!(
          e.constructor &&
          e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
  },
  Ls = function (e, r) {
    return [].concat(e, r);
  },
  qs = function (e, r) {
    if (ce(e)) {
      for (var n = [], o = 0; o < e.length; o += 1) n.push(r(e[o]));
      return n;
    }
    return r(e);
  },
  Vn = {
    arrayToObject: jn,
    assign: Gs,
    combine: Ls,
    compact: Ds,
    decode: ks,
    encode: Ns,
    isBuffer: Us,
    isRegExp: Fs,
    maybeMap: qs,
    merge: Is,
  },
  Kn = ws,
  _t = Vn,
  Ye = Pr,
  Bs = Object.prototype.hasOwnProperty,
  qr = {
    brackets: function (e) {
      return e + "[]";
    },
    comma: "comma",
    indices: function (e, r) {
      return e + "[" + r + "]";
    },
    repeat: function (e) {
      return e;
    },
  },
  X = Array.isArray,
  Hs = Array.prototype.push,
  Qn = function (t, e) {
    Hs.apply(t, X(e) ? e : [e]);
  },
  Ws = Date.prototype.toISOString,
  Br = Ye.default,
  L = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: _t.encode,
    encodeValuesOnly: !1,
    format: Br,
    formatter: Ye.formatters[Br],
    indices: !1,
    serializeDate: function (e) {
      return Ws.call(e);
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  zs = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "number" ||
      typeof e == "boolean" ||
      typeof e == "symbol" ||
      typeof e == "bigint"
    );
  },
  Ut = {},
  js = function t(e, r, n, o, s, i, c, u, l, d, m, h, p, y, P, T) {
    for (var v = e, b = T, w = 0, M = !1; (b = b.get(Ut)) !== void 0 && !M; ) {
      var B = b.get(e);
      if (((w += 1), typeof B < "u")) {
        if (B === w) throw new RangeError("Cyclic object value");
        M = !0;
      }
      typeof b.get(Ut) > "u" && (w = 0);
    }
    if (
      (typeof u == "function"
        ? (v = u(r, v))
        : v instanceof Date
          ? (v = m(v))
          : n === "comma" &&
            X(v) &&
            (v = _t.maybeMap(v, function (G) {
              return G instanceof Date ? m(G) : G;
            })),
      v === null)
    ) {
      if (s) return c && !y ? c(r, L.encoder, P, "key", h) : r;
      v = "";
    }
    if (zs(v) || _t.isBuffer(v)) {
      if (c) {
        var U = y ? r : c(r, L.encoder, P, "key", h);
        return [p(U) + "=" + p(c(v, L.encoder, P, "value", h))];
      }
      return [p(r) + "=" + p(String(v))];
    }
    var C = [];
    if (typeof v > "u") return C;
    var f;
    if (n === "comma" && X(v))
      y && c && (v = _t.maybeMap(v, c)),
        (f = [{ value: v.length > 0 ? v.join(",") || null : void 0 }]);
    else if (X(u)) f = u;
    else {
      var g = Object.keys(v);
      f = l ? g.sort(l) : g;
    }
    for (
      var A = o && X(v) && v.length === 1 ? r + "[]" : r, E = 0;
      E < f.length;
      ++E
    ) {
      var x = f[E],
        R = typeof x == "object" && typeof x.value < "u" ? x.value : v[x];
      if (!(i && R === null)) {
        var I = X(v)
          ? typeof n == "function"
            ? n(A, x)
            : A
          : A + (d ? "." + x : "[" + x + "]");
        T.set(e, w);
        var _ = Kn();
        _.set(Ut, T),
          Qn(
            C,
            t(
              R,
              I,
              n,
              o,
              s,
              i,
              n === "comma" && y && X(v) ? null : c,
              u,
              l,
              d,
              m,
              h,
              p,
              y,
              P,
              _
            )
          );
      }
    }
    return C;
  },
  Vs = function (e) {
    if (!e) return L;
    if (
      e.encoder !== null &&
      typeof e.encoder < "u" &&
      typeof e.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    var r = e.charset || L.charset;
    if (
      typeof e.charset < "u" &&
      e.charset !== "utf-8" &&
      e.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var n = Ye.default;
    if (typeof e.format < "u") {
      if (!Bs.call(Ye.formatters, e.format))
        throw new TypeError("Unknown format option provided.");
      n = e.format;
    }
    var o = Ye.formatters[n],
      s = L.filter;
    return (
      (typeof e.filter == "function" || X(e.filter)) && (s = e.filter),
      {
        addQueryPrefix:
          typeof e.addQueryPrefix == "boolean"
            ? e.addQueryPrefix
            : L.addQueryPrefix,
        allowDots: typeof e.allowDots > "u" ? L.allowDots : !!e.allowDots,
        charset: r,
        charsetSentinel:
          typeof e.charsetSentinel == "boolean"
            ? e.charsetSentinel
            : L.charsetSentinel,
        delimiter: typeof e.delimiter > "u" ? L.delimiter : e.delimiter,
        encode: typeof e.encode == "boolean" ? e.encode : L.encode,
        encoder: typeof e.encoder == "function" ? e.encoder : L.encoder,
        encodeValuesOnly:
          typeof e.encodeValuesOnly == "boolean"
            ? e.encodeValuesOnly
            : L.encodeValuesOnly,
        filter: s,
        format: n,
        formatter: o,
        serializeDate:
          typeof e.serializeDate == "function"
            ? e.serializeDate
            : L.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : L.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling:
          typeof e.strictNullHandling == "boolean"
            ? e.strictNullHandling
            : L.strictNullHandling,
      }
    );
  },
  Ks = function (t, e) {
    var r = t,
      n = Vs(e),
      o,
      s;
    typeof n.filter == "function"
      ? ((s = n.filter), (r = s("", r)))
      : X(n.filter) && ((s = n.filter), (o = s));
    var i = [];
    if (typeof r != "object" || r === null) return "";
    var c;
    e && e.arrayFormat in qr
      ? (c = e.arrayFormat)
      : e && "indices" in e
        ? (c = e.indices ? "indices" : "repeat")
        : (c = "indices");
    var u = qr[c];
    if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var l = u === "comma" && e && e.commaRoundTrip;
    o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
    for (var d = Kn(), m = 0; m < o.length; ++m) {
      var h = o[m];
      (n.skipNulls && r[h] === null) ||
        Qn(
          i,
          js(
            r[h],
            h,
            u,
            l,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            d
          )
        );
    }
    var p = i.join(n.delimiter),
      y = n.addQueryPrefix === !0 ? "?" : "";
    return (
      n.charsetSentinel &&
        (n.charset === "iso-8859-1"
          ? (y += "utf8=%26%2310003%3B&")
          : (y += "utf8=%E2%9C%93&")),
      p.length > 0 ? y + p : ""
    );
  },
  xe = Vn,
  ir = Object.prototype.hasOwnProperty,
  Qs = Array.isArray,
  N = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: xe.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  Js = function (t) {
    return t.replace(/&#(\d+);/g, function (e, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  },
  Jn = function (t, e) {
    return t && typeof t == "string" && e.comma && t.indexOf(",") > -1
      ? t.split(",")
      : t;
  },
  Ys = "utf8=%26%2310003%3B",
  Xs = "utf8=%E2%9C%93",
  Zs = function (e, r) {
    var n = { __proto__: null },
      o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
      s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      i = o.split(r.delimiter, s),
      c = -1,
      u,
      l = r.charset;
    if (r.charsetSentinel)
      for (u = 0; u < i.length; ++u)
        i[u].indexOf("utf8=") === 0 &&
          (i[u] === Xs ? (l = "utf-8") : i[u] === Ys && (l = "iso-8859-1"),
          (c = u),
          (u = i.length));
    for (u = 0; u < i.length; ++u)
      if (u !== c) {
        var d = i[u],
          m = d.indexOf("]="),
          h = m === -1 ? d.indexOf("=") : m + 1,
          p,
          y;
        h === -1
          ? ((p = r.decoder(d, N.decoder, l, "key")),
            (y = r.strictNullHandling ? null : ""))
          : ((p = r.decoder(d.slice(0, h), N.decoder, l, "key")),
            (y = xe.maybeMap(Jn(d.slice(h + 1), r), function (P) {
              return r.decoder(P, N.decoder, l, "value");
            }))),
          y && r.interpretNumericEntities && l === "iso-8859-1" && (y = Js(y)),
          d.indexOf("[]=") > -1 && (y = Qs(y) ? [y] : y),
          ir.call(n, p) ? (n[p] = xe.combine(n[p], y)) : (n[p] = y);
      }
    return n;
  },
  ea = function (t, e, r, n) {
    for (var o = n ? e : Jn(e, r), s = t.length - 1; s >= 0; --s) {
      var i,
        c = t[s];
      if (c === "[]" && r.parseArrays) i = [].concat(o);
      else {
        i = r.plainObjects ? Object.create(null) : {};
        var u =
            c.charAt(0) === "[" && c.charAt(c.length - 1) === "]"
              ? c.slice(1, -1)
              : c,
          l = parseInt(u, 10);
        !r.parseArrays && u === ""
          ? (i = { 0: o })
          : !isNaN(l) &&
              c !== u &&
              String(l) === u &&
              l >= 0 &&
              r.parseArrays &&
              l <= r.arrayLimit
            ? ((i = []), (i[l] = o))
            : u !== "__proto__" && (i[u] = o);
      }
      o = i;
    }
    return o;
  },
  ta = function (e, r, n, o) {
    if (e) {
      var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        i = /(\[[^[\]]*])/,
        c = /(\[[^[\]]*])/g,
        u = n.depth > 0 && i.exec(s),
        l = u ? s.slice(0, u.index) : s,
        d = [];
      if (l) {
        if (
          !n.plainObjects &&
          ir.call(Object.prototype, l) &&
          !n.allowPrototypes
        )
          return;
        d.push(l);
      }
      for (
        var m = 0;
        n.depth > 0 && (u = c.exec(s)) !== null && m < n.depth;

      ) {
        if (
          ((m += 1),
          !n.plainObjects &&
            ir.call(Object.prototype, u[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return;
        d.push(u[1]);
      }
      return u && d.push("[" + s.slice(u.index) + "]"), ea(d, r, n, o);
    }
  },
  ra = function (e) {
    if (!e) return N;
    if (
      e.decoder !== null &&
      e.decoder !== void 0 &&
      typeof e.decoder != "function"
    )
      throw new TypeError("Decoder has to be a function.");
    if (
      typeof e.charset < "u" &&
      e.charset !== "utf-8" &&
      e.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    var r = typeof e.charset > "u" ? N.charset : e.charset;
    return {
      allowDots: typeof e.allowDots > "u" ? N.allowDots : !!e.allowDots,
      allowPrototypes:
        typeof e.allowPrototypes == "boolean"
          ? e.allowPrototypes
          : N.allowPrototypes,
      allowSparse:
        typeof e.allowSparse == "boolean" ? e.allowSparse : N.allowSparse,
      arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : N.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof e.charsetSentinel == "boolean"
          ? e.charsetSentinel
          : N.charsetSentinel,
      comma: typeof e.comma == "boolean" ? e.comma : N.comma,
      decoder: typeof e.decoder == "function" ? e.decoder : N.decoder,
      delimiter:
        typeof e.delimiter == "string" || xe.isRegExp(e.delimiter)
          ? e.delimiter
          : N.delimiter,
      depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : N.depth,
      ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof e.interpretNumericEntities == "boolean"
          ? e.interpretNumericEntities
          : N.interpretNumericEntities,
      parameterLimit:
        typeof e.parameterLimit == "number"
          ? e.parameterLimit
          : N.parameterLimit,
      parseArrays: e.parseArrays !== !1,
      plainObjects:
        typeof e.plainObjects == "boolean" ? e.plainObjects : N.plainObjects,
      strictNullHandling:
        typeof e.strictNullHandling == "boolean"
          ? e.strictNullHandling
          : N.strictNullHandling,
    };
  },
  na = function (t, e) {
    var r = ra(e);
    if (t === "" || t === null || typeof t > "u")
      return r.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof t == "string" ? Zs(t, r) : t,
        o = r.plainObjects ? Object.create(null) : {},
        s = Object.keys(n),
        i = 0;
      i < s.length;
      ++i
    ) {
      var c = s[i],
        u = ta(c, n[c], r, typeof t == "string");
      o = xe.merge(o, u, r);
    }
    return r.allowSparse === !0 ? o : xe.compact(o);
  },
  oa = Ks,
  sa = na,
  aa = Pr,
  ia = { formats: aa, parse: sa, stringify: oa };
const Tr = [
  "apiKey",
  "idempotencyKey",
  "stripeAccount",
  "apiVersion",
  "maxNetworkRetries",
  "timeout",
  "host",
];
function Yn(t) {
  return (
    t &&
    typeof t == "object" &&
    Tr.some((e) => Object.prototype.hasOwnProperty.call(t, e))
  );
}
function wt(t) {
  return ia
    .stringify(t, {
      serializeDate: (e) => Math.floor(e.getTime() / 1e3).toString(),
    })
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");
}
const lr = (() => {
  const t = {
    "\n": "\\n",
    '"': '\\"',
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  return (e) => {
    const r = e.replace(/["\n\r\u2028\u2029]/g, (n) => t[n]);
    return (n) =>
      r.replace(/\{([\s\S]+?)\}/g, (o, s) => encodeURIComponent(n[s] || ""));
  };
})();
function la(t) {
  const e = t.match(/\{\w+\}/g);
  return e ? e.map((r) => r.replace(/[{}]/g, "")) : [];
}
function Xn(t) {
  if (!Array.isArray(t) || !t[0] || typeof t[0] != "object") return {};
  if (!Yn(t[0])) return t.shift();
  const e = Object.keys(t[0]),
    r = e.filter((n) => Tr.includes(n));
  return (
    r.length > 0 &&
      r.length !== e.length &&
      Ot(
        `Options found in arguments (${r.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`
      ),
    {}
  );
}
function ca(t) {
  const e = { auth: null, host: null, headers: {}, settings: {} };
  if (t.length > 0) {
    const r = t[t.length - 1];
    if (typeof r == "string") e.auth = t.pop();
    else if (Yn(r)) {
      const n = Object.assign({}, t.pop()),
        o = Object.keys(n).filter((s) => !Tr.includes(s));
      o.length && Ot(`Invalid options found (${o.join(", ")}); ignoring.`),
        n.apiKey && (e.auth = n.apiKey),
        n.idempotencyKey && (e.headers["Idempotency-Key"] = n.idempotencyKey),
        n.stripeAccount && (e.headers["Stripe-Account"] = n.stripeAccount),
        n.apiVersion && (e.headers["Stripe-Version"] = n.apiVersion),
        Number.isInteger(n.maxNetworkRetries) &&
          (e.settings.maxNetworkRetries = n.maxNetworkRetries),
        Number.isInteger(n.timeout) && (e.settings.timeout = n.timeout),
        n.host && (e.host = n.host);
    }
  }
  return e;
}
function ua(t) {
  const e = this,
    r = Object.prototype.hasOwnProperty.call(t, "constructor")
      ? t.constructor
      : function (...n) {
          e.apply(this, n);
        };
  return (
    Object.assign(r, e),
    (r.prototype = Object.create(e.prototype)),
    Object.assign(r.prototype, t),
    r
  );
}
function Lt(t) {
  if (typeof t != "object") throw new Error("Argument must be an object");
  return Object.keys(t).reduce(
    (e, r) => (t[r] != null && (e[r] = t[r]), e),
    {}
  );
}
function da(t) {
  return t && typeof t == "object"
    ? Object.keys(t).reduce((e, r) => ((e[ha(r)] = t[r]), e), {})
    : t;
}
function ha(t) {
  return t
    .split("-")
    .map((e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase())
    .join("-");
}
function _r(t, e) {
  return e
    ? t.then(
        (r) => {
          setTimeout(() => {
            e(null, r);
          }, 0);
        },
        (r) => {
          setTimeout(() => {
            e(r, null);
          }, 0);
        }
      )
    : t;
}
function ma(t) {
  return t === "OAuth" ? "oauth" : t[0].toLowerCase() + t.substring(1);
}
function Ot(t) {
  return typeof process.emitWarning != "function"
    ? console.warn(`Stripe: ${t}`)
    : process.emitWarning(t, "Stripe");
}
function fa(t) {
  const e = typeof t;
  return (e === "function" || e === "object") && !!t;
}
function pa(t) {
  const e = {},
    r = (n, o) => {
      Object.keys(n).forEach((s) => {
        const i = n[s],
          c = o ? `${o}[${s}]` : s;
        if (fa(i)) {
          if (
            !(i instanceof Uint8Array) &&
            !Object.prototype.hasOwnProperty.call(i, "data")
          )
            return r(i, c);
          e[c] = i;
        } else e[c] = String(i);
      });
    };
  return r(t, null), e;
}
function qt(t, e, r) {
  if (!Number.isInteger(e)) {
    if (r !== void 0) return r;
    throw new Error(`${t} must be an integer`);
  }
  return e;
}
function ya() {
  return typeof process > "u"
    ? {}
    : { lang_version: process.version, platform: process.platform };
}
class Zn {
  constructor(e, r, n, o) {
    (this.index = 0),
      (this.pagePromise = e),
      (this.promiseCache = { currentPromise: null }),
      (this.requestArgs = r),
      (this.spec = n),
      (this.stripeResource = o);
  }
  async iterate(e) {
    if (!(e && e.data && typeof e.data.length == "number"))
      throw Error(
        "Unexpected: Stripe API response does not have a well-formed `data` array."
      );
    const r = eo(this.requestArgs);
    if (this.index < e.data.length) {
      const n = r ? e.data.length - 1 - this.index : this.index,
        o = e.data[n];
      return (this.index += 1), { value: o, done: !1 };
    } else if (e.has_more) {
      (this.index = 0), (this.pagePromise = this.getNextPage(e));
      const n = await this.pagePromise;
      return this.iterate(n);
    }
    return { done: !0, value: void 0 };
  }
  getNextPage(e) {
    throw new Error("Unimplemented");
  }
  async _next() {
    return this.iterate(await this.pagePromise);
  }
  next() {
    if (this.promiseCache.currentPromise)
      return this.promiseCache.currentPromise;
    const e = (async () => {
      const r = await this._next();
      return (this.promiseCache.currentPromise = null), r;
    })();
    return (this.promiseCache.currentPromise = e), e;
  }
}
class ga extends Zn {
  getNextPage(e) {
    const r = eo(this.requestArgs),
      n = Sa(e, r);
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      [r ? "ending_before" : "starting_after"]: n,
    });
  }
}
class va extends Zn {
  getNextPage(e) {
    if (!e.next_page)
      throw Error(
        "Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true."
      );
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      page: e.next_page,
    });
  }
}
const Pa = (t, e, r, n) =>
    r.methodType === "search"
      ? Hr(new va(n, e, r, t))
      : r.methodType === "list"
        ? Hr(new ga(n, e, r, t))
        : null,
  Hr = (t) => {
    const e = Ea((...o) => t.next(...o)),
      r = ba(e),
      n = {
        autoPagingEach: e,
        autoPagingToArray: r,
        next: () => t.next(),
        return: () => ({}),
        [Ta()]: () => n,
      };
    return n;
  };
function Ta() {
  return typeof Symbol < "u" && Symbol.asyncIterator
    ? Symbol.asyncIterator
    : "@@asyncIterator";
}
function _a(t) {
  if (t.length < 2) return null;
  const e = t[1];
  if (typeof e != "function")
    throw Error(
      `The second argument to autoPagingEach, if present, must be a callback function; received ${typeof e}`
    );
  return e;
}
function Aa(t) {
  if (t.length === 0) return;
  const e = t[0];
  if (typeof e != "function")
    throw Error(
      `The first argument to autoPagingEach, if present, must be a callback function; received ${typeof e}`
    );
  if (e.length === 2) return e;
  if (e.length > 2)
    throw Error(
      `The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${e}`
    );
  return function (n, o) {
    const s = e(n);
    o(s);
  };
}
function Sa(t, e) {
  const r = e ? 0 : t.data.length - 1,
    n = t.data[r],
    o = n && n.id;
  if (!o)
    throw Error(
      "Unexpected: No `id` found on the last item while auto-paging a list."
    );
  return o;
}
function Ea(t) {
  return function () {
    const r = [].slice.call(arguments),
      n = Aa(r),
      o = _a(r);
    if (r.length > 2)
      throw Error(`autoPagingEach takes up to two arguments; received ${r}`);
    const s = xa(t, n);
    return _r(s, o);
  };
}
function ba(t) {
  return function (r, n) {
    const o = r && r.limit;
    if (!o)
      throw Error(
        "You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`."
      );
    if (o > 1e4)
      throw Error(
        "You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists."
      );
    const s = new Promise((i, c) => {
      const u = [];
      t((l) => {
        if ((u.push(l), u.length >= o)) return !1;
      })
        .then(() => {
          i(u);
        })
        .catch(c);
    });
    return _r(s, n);
  };
}
function xa(t, e) {
  return new Promise((r, n) => {
    function o(s) {
      if (s.done) {
        r();
        return;
      }
      const i = s.value;
      return new Promise((c) => {
        e(i, c);
      }).then((c) => (c === !1 ? o({ done: !0, value: void 0 }) : t().then(o)));
    }
    t().then(o).catch(n);
  });
}
function eo(t) {
  const e = [].slice.call(t);
  return !!Xn(e).ending_before;
}
function Oa(t) {
  if (t.path !== void 0 && t.fullPath !== void 0)
    throw new Error(
      `Method spec specified both a 'path' (${t.path}) and a 'fullPath' (${t.fullPath}).`
    );
  return function (...e) {
    const r = typeof e[e.length - 1] == "function" && e.pop();
    t.urlParams = la(
      t.fullPath || this.createResourcePathWithSymbols(t.path || "")
    );
    const n = _r(this._makeRequest(e, t, {}), r);
    return Object.assign(n, Pa(this, e, t, n)), n;
  };
}
a.extend = ua;
a.method = Oa;
a.MAX_BUFFERED_REQUEST_METRICS = 100;
function a(t, e) {
  if (((this._stripe = t), e))
    throw new Error(
      "Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids."
    );
  (this.basePath = lr(this.basePath || t.getApiField("basePath"))),
    (this.resourcePath = this.path),
    (this.path = lr(this.path)),
    this.initialize(...arguments);
}
a.prototype = {
  _stripe: null,
  path: "",
  resourcePath: "",
  basePath: null,
  initialize() {},
  requestDataProcessor: null,
  validateRequest: null,
  createFullPath(t, e) {
    const r = [this.basePath(e), this.path(e)];
    if (typeof t == "function") {
      const n = t(e);
      n && r.push(n);
    } else r.push(t);
    return this._joinUrlParts(r);
  },
  createResourcePathWithSymbols(t) {
    return t
      ? `/${this._joinUrlParts([this.resourcePath, t])}`
      : `/${this.resourcePath}`;
  },
  _joinUrlParts(t) {
    return t.join("/").replace(/\/{2,}/g, "/");
  },
  _getRequestOpts(t, e, r) {
    const n = (e.method || "GET").toUpperCase(),
      o = e.usage || [],
      s = e.urlParams || [],
      i = e.encode || ((U) => U),
      c = !!e.fullPath,
      u = lr(c ? e.fullPath : e.path || ""),
      l = c ? e.fullPath : this.createResourcePathWithSymbols(e.path),
      d = [].slice.call(t),
      m = s.reduce((U, C) => {
        const f = d.shift();
        if (typeof f != "string")
          throw new Error(
            `Stripe: Argument "${C}" must be a string, but got: ${f} (on API request to \`${n} ${l}\`)`
          );
        return (U[C] = f), U;
      }, {}),
      h = Xn(d),
      p = i(Object.assign({}, h, r)),
      y = ca(d),
      P = y.host || e.host,
      T = !!e.streaming;
    if (d.filter((U) => U != null).length)
      throw new Error(
        `Stripe: Unknown arguments (${d}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${n} \`${l}\`)`
      );
    const v = c ? u(m) : this.createFullPath(u, m),
      b = Object.assign(y.headers, e.headers);
    e.validator && e.validator(p, { headers: b });
    const w = e.method === "GET" || e.method === "DELETE";
    return {
      requestMethod: n,
      requestPath: v,
      bodyData: w ? {} : p,
      queryData: w ? p : {},
      auth: y.auth,
      headers: b,
      host: P ?? null,
      streaming: T,
      settings: y.settings,
      usage: o,
    };
  },
  _makeRequest(t, e, r) {
    return new Promise((n, o) => {
      var s;
      let i;
      try {
        i = this._getRequestOpts(t, e, r);
      } catch (h) {
        o(h);
        return;
      }
      function c(h, p) {
        h ? o(h) : n(e.transformResponseData ? e.transformResponseData(p) : p);
      }
      const u = Object.keys(i.queryData).length === 0,
        l = [i.requestPath, u ? "" : "?", wt(i.queryData)].join(""),
        { headers: d, settings: m } = i;
      this._stripe._requestSender._request(
        i.requestMethod,
        i.host,
        l,
        i.bodyData,
        i.auth,
        { headers: d, settings: m, streaming: i.streaming },
        i.usage,
        c,
        (s = this.requestDataProcessor) === null || s === void 0
          ? void 0
          : s.bind(this)
      );
    });
  },
};
const ae = a.method,
  wa = a.extend({
    retrieve: ae({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}",
    }),
    list: ae({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts",
      methodType: "list",
    }),
    disconnect: ae({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/disconnect",
    }),
    listOwners: ae({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}/owners",
      methodType: "list",
    }),
    refresh: ae({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/refresh",
    }),
    subscribe: ae({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/subscribe",
    }),
    unsubscribe: ae({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe",
    }),
  }),
  Re = a.method,
  Ca = a.extend({
    create: Re({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/authorizations",
    }),
    capture: Re({
      method: "POST",
      fullPath:
        "/v1/test_helpers/issuing/authorizations/{authorization}/capture",
    }),
    expire: Re({
      method: "POST",
      fullPath:
        "/v1/test_helpers/issuing/authorizations/{authorization}/expire",
    }),
    increment: Re({
      method: "POST",
      fullPath:
        "/v1/test_helpers/issuing/authorizations/{authorization}/increment",
    }),
    reverse: Re({
      method: "POST",
      fullPath:
        "/v1/test_helpers/issuing/authorizations/{authorization}/reverse",
    }),
  }),
  Me = a.method,
  Ra = a.extend({
    retrieve: Me({
      method: "GET",
      fullPath: "/v1/issuing/authorizations/{authorization}",
    }),
    update: Me({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}",
    }),
    list: Me({
      method: "GET",
      fullPath: "/v1/issuing/authorizations",
      methodType: "list",
    }),
    approve: Me({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/approve",
    }),
    decline: Me({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/decline",
    }),
  }),
  Wr = a.method,
  Ma = a.extend({
    create: Wr({ method: "POST", fullPath: "/v1/tax/calculations" }),
    listLineItems: Wr({
      method: "GET",
      fullPath: "/v1/tax/calculations/{calculation}/line_items",
      methodType: "list",
    }),
  }),
  nt = a.method,
  $a = a.extend({
    create: nt({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
    retrieve: nt({
      method: "GET",
      fullPath: "/v1/issuing/cardholders/{cardholder}",
    }),
    update: nt({
      method: "POST",
      fullPath: "/v1/issuing/cardholders/{cardholder}",
    }),
    list: nt({
      method: "GET",
      fullPath: "/v1/issuing/cardholders",
      methodType: "list",
    }),
  }),
  ot = a.method,
  Ia = a.extend({
    deliverCard: ot({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver",
    }),
    failCard: ot({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail",
    }),
    returnCard: ot({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return",
    }),
    shipCard: ot({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship",
    }),
  }),
  st = a.method,
  Ga = a.extend({
    create: st({ method: "POST", fullPath: "/v1/issuing/cards" }),
    retrieve: st({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
    update: st({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
    list: st({
      method: "GET",
      fullPath: "/v1/issuing/cards",
      methodType: "list",
    }),
  }),
  at = a.method,
  ka = a.extend({
    create: at({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations",
    }),
    retrieve: at({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations/{configuration}",
    }),
    update: at({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations/{configuration}",
    }),
    list: at({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations",
      methodType: "list",
    }),
  }),
  $e = a.method,
  Na = a.extend({
    create: $e({ method: "POST", fullPath: "/v1/terminal/configurations" }),
    retrieve: $e({
      method: "GET",
      fullPath: "/v1/terminal/configurations/{configuration}",
    }),
    update: $e({
      method: "POST",
      fullPath: "/v1/terminal/configurations/{configuration}",
    }),
    list: $e({
      method: "GET",
      fullPath: "/v1/terminal/configurations",
      methodType: "list",
    }),
    del: $e({
      method: "DELETE",
      fullPath: "/v1/terminal/configurations/{configuration}",
    }),
  }),
  Da = a.method,
  Fa = a.extend({
    create: Da({ method: "POST", fullPath: "/v1/terminal/connection_tokens" }),
  }),
  Bt = a.method,
  Ua = a.extend({
    create: Bt({ method: "POST", fullPath: "/v1/treasury/credit_reversals" }),
    retrieve: Bt({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals/{credit_reversal}",
    }),
    list: Bt({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals",
      methodType: "list",
    }),
  }),
  La = a.method,
  qa = a.extend({
    fundCashBalance: La({
      method: "POST",
      fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance",
    }),
  }),
  Ht = a.method,
  Ba = a.extend({
    create: Ht({ method: "POST", fullPath: "/v1/treasury/debit_reversals" }),
    retrieve: Ht({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals/{debit_reversal}",
    }),
    list: Ht({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals",
      methodType: "list",
    }),
  }),
  Ie = a.method,
  Ha = a.extend({
    create: Ie({ method: "POST", fullPath: "/v1/issuing/disputes" }),
    retrieve: Ie({ method: "GET", fullPath: "/v1/issuing/disputes/{dispute}" }),
    update: Ie({ method: "POST", fullPath: "/v1/issuing/disputes/{dispute}" }),
    list: Ie({
      method: "GET",
      fullPath: "/v1/issuing/disputes",
      methodType: "list",
    }),
    submit: Ie({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}/submit",
    }),
  }),
  zr = a.method,
  Wa = a.extend({
    retrieve: zr({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}",
    }),
    list: zr({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings",
      methodType: "list",
    }),
  }),
  fe = a.method,
  za = a.extend({
    create: fe({ method: "POST", fullPath: "/v1/treasury/financial_accounts" }),
    retrieve: fe({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}",
    }),
    update: fe({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}",
    }),
    list: fe({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts",
      methodType: "list",
    }),
    retrieveFeatures: fe({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features",
    }),
    updateFeatures: fe({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features",
    }),
  }),
  Wt = a.method,
  ja = a.extend({
    fail: Wt({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail",
    }),
    returnInboundTransfer: Wt({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return",
    }),
    succeed: Wt({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed",
    }),
  }),
  it = a.method,
  Va = a.extend({
    create: it({ method: "POST", fullPath: "/v1/treasury/inbound_transfers" }),
    retrieve: it({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers/{id}",
    }),
    list: it({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers",
      methodType: "list",
    }),
    cancel: it({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel",
    }),
  }),
  Ge = a.method,
  Ka = a.extend({
    create: Ge({ method: "POST", fullPath: "/v1/terminal/locations" }),
    retrieve: Ge({
      method: "GET",
      fullPath: "/v1/terminal/locations/{location}",
    }),
    update: Ge({
      method: "POST",
      fullPath: "/v1/terminal/locations/{location}",
    }),
    list: Ge({
      method: "GET",
      fullPath: "/v1/terminal/locations",
      methodType: "list",
    }),
    del: Ge({
      method: "DELETE",
      fullPath: "/v1/terminal/locations/{location}",
    }),
  }),
  ke = a.method,
  Qa = a.extend({
    create: ke({ method: "POST", fullPath: "/v1/climate/orders" }),
    retrieve: ke({ method: "GET", fullPath: "/v1/climate/orders/{order}" }),
    update: ke({ method: "POST", fullPath: "/v1/climate/orders/{order}" }),
    list: ke({
      method: "GET",
      fullPath: "/v1/climate/orders",
      methodType: "list",
    }),
    cancel: ke({
      method: "POST",
      fullPath: "/v1/climate/orders/{order}/cancel",
    }),
  }),
  zt = a.method,
  Ja = a.extend({
    fail: zt({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail",
    }),
    post: zt({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post",
    }),
    returnOutboundPayment: zt({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return",
    }),
  }),
  lt = a.method,
  Ya = a.extend({
    create: lt({ method: "POST", fullPath: "/v1/treasury/outbound_payments" }),
    retrieve: lt({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments/{id}",
    }),
    list: lt({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments",
      methodType: "list",
    }),
    cancel: lt({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments/{id}/cancel",
    }),
  }),
  jt = a.method,
  Xa = a.extend({
    fail: jt({
      method: "POST",
      fullPath:
        "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail",
    }),
    post: jt({
      method: "POST",
      fullPath:
        "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post",
    }),
    returnOutboundTransfer: jt({
      method: "POST",
      fullPath:
        "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return",
    }),
  }),
  ct = a.method,
  Za = a.extend({
    create: ct({ method: "POST", fullPath: "/v1/treasury/outbound_transfers" }),
    retrieve: ct({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}",
    }),
    list: ct({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers",
      methodType: "list",
    }),
    cancel: ct({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel",
    }),
  }),
  jr = a.method,
  ei = a.extend({
    retrieve: jr({ method: "GET", fullPath: "/v1/climate/products/{product}" }),
    list: jr({
      method: "GET",
      fullPath: "/v1/climate/products",
      methodType: "list",
    }),
  }),
  ti = a.method,
  ri = a.extend({
    presentPaymentMethod: ti({
      method: "POST",
      fullPath:
        "/v1/test_helpers/terminal/readers/{reader}/present_payment_method",
    }),
  }),
  Q = a.method,
  ni = a.extend({
    create: Q({ method: "POST", fullPath: "/v1/terminal/readers" }),
    retrieve: Q({ method: "GET", fullPath: "/v1/terminal/readers/{reader}" }),
    update: Q({ method: "POST", fullPath: "/v1/terminal/readers/{reader}" }),
    list: Q({
      method: "GET",
      fullPath: "/v1/terminal/readers",
      methodType: "list",
    }),
    del: Q({ method: "DELETE", fullPath: "/v1/terminal/readers/{reader}" }),
    cancelAction: Q({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/cancel_action",
    }),
    processPaymentIntent: Q({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_payment_intent",
    }),
    processSetupIntent: Q({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_setup_intent",
    }),
    refundPayment: Q({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/refund_payment",
    }),
    setReaderDisplay: Q({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/set_reader_display",
    }),
  }),
  oi = a.method,
  si = a.extend({
    create: oi({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_credits",
    }),
  }),
  Vr = a.method,
  ai = a.extend({
    retrieve: Vr({
      method: "GET",
      fullPath: "/v1/treasury/received_credits/{id}",
    }),
    list: Vr({
      method: "GET",
      fullPath: "/v1/treasury/received_credits",
      methodType: "list",
    }),
  }),
  ii = a.method,
  li = a.extend({
    create: ii({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_debits",
    }),
  }),
  Kr = a.method,
  ci = a.extend({
    retrieve: Kr({
      method: "GET",
      fullPath: "/v1/treasury/received_debits/{id}",
    }),
    list: Kr({
      method: "GET",
      fullPath: "/v1/treasury/received_debits",
      methodType: "list",
    }),
  }),
  ui = a.method,
  di = a.extend({
    expire: ui({
      method: "POST",
      fullPath: "/v1/test_helpers/refunds/{refund}/expire",
    }),
  }),
  ut = a.method,
  hi = a.extend({
    create: ut({ method: "POST", fullPath: "/v1/tax/registrations" }),
    retrieve: ut({ method: "GET", fullPath: "/v1/tax/registrations/{id}" }),
    update: ut({ method: "POST", fullPath: "/v1/tax/registrations/{id}" }),
    list: ut({
      method: "GET",
      fullPath: "/v1/tax/registrations",
      methodType: "list",
    }),
  }),
  Vt = a.method,
  mi = a.extend({
    create: Vt({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
    retrieve: Vt({
      method: "GET",
      fullPath: "/v1/reporting/report_runs/{report_run}",
    }),
    list: Vt({
      method: "GET",
      fullPath: "/v1/reporting/report_runs",
      methodType: "list",
    }),
  }),
  Qr = a.method,
  fi = a.extend({
    retrieve: Qr({
      method: "GET",
      fullPath: "/v1/reporting/report_types/{report_type}",
    }),
    list: Qr({
      method: "GET",
      fullPath: "/v1/reporting/report_types",
      methodType: "list",
    }),
  }),
  Jr = a.method,
  pi = a.extend({
    retrieve: Jr({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}",
    }),
    list: Jr({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs",
      methodType: "list",
    }),
  }),
  dt = a.method,
  yi = a.extend({
    create: dt({ method: "POST", fullPath: "/v1/apps/secrets" }),
    list: dt({
      method: "GET",
      fullPath: "/v1/apps/secrets",
      methodType: "list",
    }),
    deleteWhere: dt({ method: "POST", fullPath: "/v1/apps/secrets/delete" }),
    find: dt({ method: "GET", fullPath: "/v1/apps/secrets/find" }),
  }),
  gi = a.method,
  vi = a.extend({
    create: gi({ method: "POST", fullPath: "/v1/billing_portal/sessions" }),
  }),
  Ne = a.method,
  Pi = a.extend({
    create: Ne({ method: "POST", fullPath: "/v1/checkout/sessions" }),
    retrieve: Ne({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}",
    }),
    list: Ne({
      method: "GET",
      fullPath: "/v1/checkout/sessions",
      methodType: "list",
    }),
    expire: Ne({
      method: "POST",
      fullPath: "/v1/checkout/sessions/{session}/expire",
    }),
    listLineItems: Ne({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}/line_items",
      methodType: "list",
    }),
  }),
  Yr = a.method,
  Ti = a.extend({
    create: Yr({
      method: "POST",
      fullPath: "/v1/financial_connections/sessions",
    }),
    retrieve: Yr({
      method: "GET",
      fullPath: "/v1/financial_connections/sessions/{session}",
    }),
  }),
  Xr = a.method,
  _i = a.extend({
    retrieve: Xr({ method: "GET", fullPath: "/v1/tax/settings" }),
    update: Xr({ method: "POST", fullPath: "/v1/tax/settings" }),
  }),
  Zr = a.method,
  Ai = a.extend({
    retrieve: Zr({
      method: "GET",
      fullPath: "/v1/climate/suppliers/{supplier}",
    }),
    list: Zr({
      method: "GET",
      fullPath: "/v1/climate/suppliers",
      methodType: "list",
    }),
  }),
  De = a.method,
  Si = a.extend({
    create: De({ method: "POST", fullPath: "/v1/test_helpers/test_clocks" }),
    retrieve: De({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}",
    }),
    list: De({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks",
      methodType: "list",
    }),
    del: De({
      method: "DELETE",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}",
    }),
    advance: De({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance",
    }),
  }),
  Kt = a.method,
  Ei = a.extend({
    retrieve: Kt({ method: "GET", fullPath: "/v1/issuing/tokens/{token}" }),
    update: Kt({ method: "POST", fullPath: "/v1/issuing/tokens/{token}" }),
    list: Kt({
      method: "GET",
      fullPath: "/v1/issuing/tokens",
      methodType: "list",
    }),
  }),
  en = a.method,
  bi = a.extend({
    retrieve: en({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries/{id}",
    }),
    list: en({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries",
      methodType: "list",
    }),
  }),
  Qt = a.method,
  xi = a.extend({
    createForceCapture: Qt({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture",
    }),
    createUnlinkedRefund: Qt({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund",
    }),
    refund: Qt({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund",
    }),
  }),
  tn = a.method,
  Oi = a.extend({
    retrieve: tn({
      method: "GET",
      fullPath: "/v1/financial_connections/transactions/{transaction}",
    }),
    list: tn({
      method: "GET",
      fullPath: "/v1/financial_connections/transactions",
      methodType: "list",
    }),
  }),
  Jt = a.method,
  wi = a.extend({
    retrieve: Jt({
      method: "GET",
      fullPath: "/v1/issuing/transactions/{transaction}",
    }),
    update: Jt({
      method: "POST",
      fullPath: "/v1/issuing/transactions/{transaction}",
    }),
    list: Jt({
      method: "GET",
      fullPath: "/v1/issuing/transactions",
      methodType: "list",
    }),
  }),
  ht = a.method,
  Ci = a.extend({
    retrieve: ht({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}",
    }),
    createFromCalculation: ht({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_from_calculation",
    }),
    createReversal: ht({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_reversal",
    }),
    listLineItems: ht({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}/line_items",
      methodType: "list",
    }),
  }),
  rn = a.method,
  Ri = a.extend({
    retrieve: rn({ method: "GET", fullPath: "/v1/treasury/transactions/{id}" }),
    list: rn({
      method: "GET",
      fullPath: "/v1/treasury/transactions",
      methodType: "list",
    }),
  }),
  mt = a.method,
  Mi = a.extend({
    create: mt({ method: "POST", fullPath: "/v1/radar/value_list_items" }),
    retrieve: mt({
      method: "GET",
      fullPath: "/v1/radar/value_list_items/{item}",
    }),
    list: mt({
      method: "GET",
      fullPath: "/v1/radar/value_list_items",
      methodType: "list",
    }),
    del: mt({
      method: "DELETE",
      fullPath: "/v1/radar/value_list_items/{item}",
    }),
  }),
  Fe = a.method,
  $i = a.extend({
    create: Fe({ method: "POST", fullPath: "/v1/radar/value_lists" }),
    retrieve: Fe({
      method: "GET",
      fullPath: "/v1/radar/value_lists/{value_list}",
    }),
    update: Fe({
      method: "POST",
      fullPath: "/v1/radar/value_lists/{value_list}",
    }),
    list: Fe({
      method: "GET",
      fullPath: "/v1/radar/value_lists",
      methodType: "list",
    }),
    del: Fe({
      method: "DELETE",
      fullPath: "/v1/radar/value_lists/{value_list}",
    }),
  }),
  nn = a.method,
  Ii = a.extend({
    retrieve: nn({
      method: "GET",
      fullPath: "/v1/identity/verification_reports/{report}",
    }),
    list: nn({
      method: "GET",
      fullPath: "/v1/identity/verification_reports",
      methodType: "list",
    }),
  }),
  pe = a.method,
  Gi = a.extend({
    create: pe({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions",
    }),
    retrieve: pe({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions/{session}",
    }),
    update: pe({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}",
    }),
    list: pe({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions",
      methodType: "list",
    }),
    cancel: pe({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/cancel",
    }),
    redact: pe({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/redact",
    }),
  }),
  $ = a.method,
  on = a.extend({
    create: $({ method: "POST", fullPath: "/v1/accounts" }),
    retrieve(t, ...e) {
      return typeof t == "string"
        ? $({ method: "GET", fullPath: "/v1/accounts/{id}" }).apply(this, [
            t,
            ...e,
          ])
        : (t == null && [].shift.apply([t, ...e]),
          $({ method: "GET", fullPath: "/v1/account" }).apply(this, [t, ...e]));
    },
    update: $({ method: "POST", fullPath: "/v1/accounts/{account}" }),
    list: $({ method: "GET", fullPath: "/v1/accounts", methodType: "list" }),
    del: $({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
    createExternalAccount: $({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts",
    }),
    createLoginLink: $({
      method: "POST",
      fullPath: "/v1/accounts/{account}/login_links",
    }),
    createPerson: $({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons",
    }),
    deleteExternalAccount: $({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}",
    }),
    deletePerson: $({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/persons/{person}",
    }),
    listCapabilities: $({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities",
      methodType: "list",
    }),
    listExternalAccounts: $({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts",
      methodType: "list",
    }),
    listPersons: $({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons",
      methodType: "list",
    }),
    reject: $({ method: "POST", fullPath: "/v1/accounts/{account}/reject" }),
    retrieveCapability: $({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}",
    }),
    retrieveExternalAccount: $({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}",
    }),
    retrievePerson: $({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons/{person}",
    }),
    updateCapability: $({
      method: "POST",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}",
    }),
    updateExternalAccount: $({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}",
    }),
    updatePerson: $({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons/{person}",
    }),
  }),
  ki = a.method,
  Ni = a.extend({
    create: ki({ method: "POST", fullPath: "/v1/account_links" }),
  }),
  Di = a.method,
  Fi = a.extend({
    create: Di({ method: "POST", fullPath: "/v1/account_sessions" }),
  }),
  ft = a.method,
  Ui = a.extend({
    create: ft({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
    retrieve: ft({ method: "GET", fullPath: "/v1/apple_pay/domains/{domain}" }),
    list: ft({
      method: "GET",
      fullPath: "/v1/apple_pay/domains",
      methodType: "list",
    }),
    del: ft({ method: "DELETE", fullPath: "/v1/apple_pay/domains/{domain}" }),
  }),
  ye = a.method,
  Li = a.extend({
    retrieve: ye({ method: "GET", fullPath: "/v1/application_fees/{id}" }),
    list: ye({
      method: "GET",
      fullPath: "/v1/application_fees",
      methodType: "list",
    }),
    createRefund: ye({
      method: "POST",
      fullPath: "/v1/application_fees/{id}/refunds",
    }),
    listRefunds: ye({
      method: "GET",
      fullPath: "/v1/application_fees/{id}/refunds",
      methodType: "list",
    }),
    retrieveRefund: ye({
      method: "GET",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}",
    }),
    updateRefund: ye({
      method: "POST",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}",
    }),
  }),
  qi = a.method,
  Bi = a.extend({ retrieve: qi({ method: "GET", fullPath: "/v1/balance" }) }),
  sn = a.method,
  Hi = a.extend({
    retrieve: sn({ method: "GET", fullPath: "/v1/balance_transactions/{id}" }),
    list: sn({
      method: "GET",
      fullPath: "/v1/balance_transactions",
      methodType: "list",
    }),
  }),
  ge = a.method,
  Wi = a.extend({
    create: ge({ method: "POST", fullPath: "/v1/charges" }),
    retrieve: ge({ method: "GET", fullPath: "/v1/charges/{charge}" }),
    update: ge({ method: "POST", fullPath: "/v1/charges/{charge}" }),
    list: ge({ method: "GET", fullPath: "/v1/charges", methodType: "list" }),
    capture: ge({ method: "POST", fullPath: "/v1/charges/{charge}/capture" }),
    search: ge({
      method: "GET",
      fullPath: "/v1/charges/search",
      methodType: "search",
    }),
  }),
  an = a.method,
  zi = a.extend({
    retrieve: an({ method: "GET", fullPath: "/v1/country_specs/{country}" }),
    list: an({
      method: "GET",
      fullPath: "/v1/country_specs",
      methodType: "list",
    }),
  }),
  Ue = a.method,
  ji = a.extend({
    create: Ue({ method: "POST", fullPath: "/v1/coupons" }),
    retrieve: Ue({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
    update: Ue({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
    list: Ue({ method: "GET", fullPath: "/v1/coupons", methodType: "list" }),
    del: Ue({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" }),
  }),
  Z = a.method,
  Vi = a.extend({
    create: Z({ method: "POST", fullPath: "/v1/credit_notes" }),
    retrieve: Z({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
    update: Z({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
    list: Z({
      method: "GET",
      fullPath: "/v1/credit_notes",
      methodType: "list",
    }),
    listLineItems: Z({
      method: "GET",
      fullPath: "/v1/credit_notes/{credit_note}/lines",
      methodType: "list",
    }),
    listPreviewLineItems: Z({
      method: "GET",
      fullPath: "/v1/credit_notes/preview/lines",
      methodType: "list",
    }),
    preview: Z({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
    voidCreditNote: Z({
      method: "POST",
      fullPath: "/v1/credit_notes/{id}/void",
    }),
  }),
  Ki = a.method,
  Qi = a.extend({
    create: Ki({ method: "POST", fullPath: "/v1/customer_sessions" }),
  }),
  O = a.method,
  Ji = a.extend({
    create: O({ method: "POST", fullPath: "/v1/customers" }),
    retrieve: O({ method: "GET", fullPath: "/v1/customers/{customer}" }),
    update: O({ method: "POST", fullPath: "/v1/customers/{customer}" }),
    list: O({ method: "GET", fullPath: "/v1/customers", methodType: "list" }),
    del: O({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
    createFundingInstructions: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/funding_instructions",
    }),
    createBalanceTransaction: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions",
    }),
    createSource: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources",
    }),
    createTaxId: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/tax_ids",
    }),
    deleteDiscount: O({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/discount",
    }),
    deleteSource: O({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/sources/{id}",
    }),
    deleteTaxId: O({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}",
    }),
    listPaymentMethods: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods",
      methodType: "list",
    }),
    listBalanceTransactions: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions",
      methodType: "list",
    }),
    listCashBalanceTransactions: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions",
      methodType: "list",
    }),
    listSources: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources",
      methodType: "list",
    }),
    listTaxIds: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids",
      methodType: "list",
    }),
    retrievePaymentMethod: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}",
    }),
    retrieveBalanceTransaction: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}",
    }),
    retrieveCashBalance: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance",
    }),
    retrieveCashBalanceTransaction: O({
      method: "GET",
      fullPath:
        "/v1/customers/{customer}/cash_balance_transactions/{transaction}",
    }),
    retrieveSource: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources/{id}",
    }),
    retrieveTaxId: O({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}",
    }),
    search: O({
      method: "GET",
      fullPath: "/v1/customers/search",
      methodType: "search",
    }),
    updateBalanceTransaction: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}",
    }),
    updateCashBalance: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/cash_balance",
    }),
    updateSource: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}",
    }),
    verifySource: O({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}/verify",
    }),
  }),
  pt = a.method,
  Yi = a.extend({
    retrieve: pt({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
    update: pt({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
    list: pt({ method: "GET", fullPath: "/v1/disputes", methodType: "list" }),
    close: pt({ method: "POST", fullPath: "/v1/disputes/{dispute}/close" }),
  }),
  ln = a.method,
  Xi = a.extend({
    create: ln({
      method: "POST",
      fullPath: "/v1/ephemeral_keys",
      validator: (t, e) => {
        if (!e.headers || !e.headers["Stripe-Version"])
          throw new Error(
            "Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node"
          );
      },
    }),
    del: ln({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" }),
  }),
  cn = a.method,
  Zi = a.extend({
    retrieve: cn({ method: "GET", fullPath: "/v1/events/{id}" }),
    list: cn({ method: "GET", fullPath: "/v1/events", methodType: "list" }),
  }),
  un = a.method,
  el = a.extend({
    retrieve: un({ method: "GET", fullPath: "/v1/exchange_rates/{rate_id}" }),
    list: un({
      method: "GET",
      fullPath: "/v1/exchange_rates",
      methodType: "list",
    }),
  }),
  yt = a.method,
  tl = a.extend({
    create: yt({ method: "POST", fullPath: "/v1/file_links" }),
    retrieve: yt({ method: "GET", fullPath: "/v1/file_links/{link}" }),
    update: yt({ method: "POST", fullPath: "/v1/file_links/{link}" }),
    list: yt({ method: "GET", fullPath: "/v1/file_links", methodType: "list" }),
  }),
  rl = (t, e, r) => {
    const n = (
      Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)
    ).toString();
    r["Content-Type"] = `multipart/form-data; boundary=${n}`;
    const o = new TextEncoder();
    let s = new Uint8Array(0);
    const i = o.encode(`\r
`);
    function c(d) {
      const m = s,
        h = d instanceof Uint8Array ? d : new Uint8Array(o.encode(d));
      (s = new Uint8Array(m.length + h.length + 2)),
        s.set(m),
        s.set(h, m.length),
        s.set(i, s.length - 2);
    }
    function u(d) {
      return `"${d.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
    }
    const l = pa(e);
    for (const d in l) {
      const m = l[d];
      if ((c(`--${n}`), Object.prototype.hasOwnProperty.call(m, "data"))) {
        const h = m;
        c(
          `Content-Disposition: form-data; name=${u(d)}; filename=${u(h.name || "blob")}`
        ),
          c(`Content-Type: ${h.type || "application/octet-stream"}`),
          c(""),
          c(h.data);
      } else c(`Content-Disposition: form-data; name=${u(d)}`), c(""), c(m);
    }
    return c(`--${n}--`), s;
  };
function nl(t, e, r, n) {
  if (((e = e || {}), t !== "POST")) return n(null, wt(e));
  this._stripe._platformFunctions
    .tryBufferData(e)
    .then((o) => {
      const s = rl(t, o, r);
      return n(null, s);
    })
    .catch((o) => n(o, null));
}
const Yt = a.method,
  ol = a.extend({
    create: Yt({
      method: "POST",
      fullPath: "/v1/files",
      headers: { "Content-Type": "multipart/form-data" },
      host: "files.stripe.com",
    }),
    retrieve: Yt({ method: "GET", fullPath: "/v1/files/{file}" }),
    list: Yt({ method: "GET", fullPath: "/v1/files", methodType: "list" }),
    requestDataProcessor: nl,
  }),
  Le = a.method,
  sl = a.extend({
    create: Le({ method: "POST", fullPath: "/v1/invoiceitems" }),
    retrieve: Le({ method: "GET", fullPath: "/v1/invoiceitems/{invoiceitem}" }),
    update: Le({ method: "POST", fullPath: "/v1/invoiceitems/{invoiceitem}" }),
    list: Le({
      method: "GET",
      fullPath: "/v1/invoiceitems",
      methodType: "list",
    }),
    del: Le({ method: "DELETE", fullPath: "/v1/invoiceitems/{invoiceitem}" }),
  }),
  W = a.method,
  al = a.extend({
    create: W({ method: "POST", fullPath: "/v1/invoices" }),
    retrieve: W({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
    update: W({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
    list: W({ method: "GET", fullPath: "/v1/invoices", methodType: "list" }),
    del: W({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
    finalizeInvoice: W({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/finalize",
    }),
    listLineItems: W({
      method: "GET",
      fullPath: "/v1/invoices/{invoice}/lines",
      methodType: "list",
    }),
    listUpcomingLines: W({
      method: "GET",
      fullPath: "/v1/invoices/upcoming/lines",
      methodType: "list",
    }),
    markUncollectible: W({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/mark_uncollectible",
    }),
    pay: W({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
    retrieveUpcoming: W({ method: "GET", fullPath: "/v1/invoices/upcoming" }),
    search: W({
      method: "GET",
      fullPath: "/v1/invoices/search",
      methodType: "search",
    }),
    sendInvoice: W({ method: "POST", fullPath: "/v1/invoices/{invoice}/send" }),
    voidInvoice: W({ method: "POST", fullPath: "/v1/invoices/{invoice}/void" }),
  }),
  il = a.method,
  ll = a.extend({
    retrieve: il({ method: "GET", fullPath: "/v1/mandates/{mandate}" }),
  }),
  dn = a.method,
  Xt = "connect.stripe.com",
  cl = a.extend({
    basePath: "/",
    authorizeUrl(t, e) {
      (t = t || {}), (e = e || {});
      let r = "oauth/authorize";
      return (
        e.express && (r = `express/${r}`),
        t.response_type || (t.response_type = "code"),
        t.client_id || (t.client_id = this._stripe.getClientId()),
        t.scope || (t.scope = "read_write"),
        `https://${Xt}/${r}?${wt(t)}`
      );
    },
    token: dn({ method: "POST", path: "oauth/token", host: Xt }),
    deauthorize(t, ...e) {
      return (
        t.client_id || (t.client_id = this._stripe.getClientId()),
        dn({ method: "POST", path: "oauth/deauthorize", host: Xt }).apply(
          this,
          [t, ...e]
        )
      );
    },
  }),
  j = a.method,
  ul = a.extend({
    create: j({ method: "POST", fullPath: "/v1/payment_intents" }),
    retrieve: j({ method: "GET", fullPath: "/v1/payment_intents/{intent}" }),
    update: j({ method: "POST", fullPath: "/v1/payment_intents/{intent}" }),
    list: j({
      method: "GET",
      fullPath: "/v1/payment_intents",
      methodType: "list",
    }),
    applyCustomerBalance: j({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/apply_customer_balance",
    }),
    cancel: j({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/cancel",
    }),
    capture: j({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/capture",
    }),
    confirm: j({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/confirm",
    }),
    incrementAuthorization: j({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/increment_authorization",
    }),
    search: j({
      method: "GET",
      fullPath: "/v1/payment_intents/search",
      methodType: "search",
    }),
    verifyMicrodeposits: j({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/verify_microdeposits",
    }),
  }),
  qe = a.method,
  dl = a.extend({
    create: qe({ method: "POST", fullPath: "/v1/payment_links" }),
    retrieve: qe({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}",
    }),
    update: qe({
      method: "POST",
      fullPath: "/v1/payment_links/{payment_link}",
    }),
    list: qe({
      method: "GET",
      fullPath: "/v1/payment_links",
      methodType: "list",
    }),
    listLineItems: qe({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}/line_items",
      methodType: "list",
    }),
  }),
  gt = a.method,
  hl = a.extend({
    create: gt({
      method: "POST",
      fullPath: "/v1/payment_method_configurations",
    }),
    retrieve: gt({
      method: "GET",
      fullPath: "/v1/payment_method_configurations/{configuration}",
    }),
    update: gt({
      method: "POST",
      fullPath: "/v1/payment_method_configurations/{configuration}",
    }),
    list: gt({
      method: "GET",
      fullPath: "/v1/payment_method_configurations",
      methodType: "list",
    }),
  }),
  Be = a.method,
  ml = a.extend({
    create: Be({ method: "POST", fullPath: "/v1/payment_method_domains" }),
    retrieve: Be({
      method: "GET",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}",
    }),
    update: Be({
      method: "POST",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}",
    }),
    list: Be({
      method: "GET",
      fullPath: "/v1/payment_method_domains",
      methodType: "list",
    }),
    validate: Be({
      method: "POST",
      fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate",
    }),
  }),
  ve = a.method,
  fl = a.extend({
    create: ve({ method: "POST", fullPath: "/v1/payment_methods" }),
    retrieve: ve({
      method: "GET",
      fullPath: "/v1/payment_methods/{payment_method}",
    }),
    update: ve({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}",
    }),
    list: ve({
      method: "GET",
      fullPath: "/v1/payment_methods",
      methodType: "list",
    }),
    attach: ve({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/attach",
    }),
    detach: ve({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/detach",
    }),
  }),
  Pe = a.method,
  pl = a.extend({
    create: Pe({ method: "POST", fullPath: "/v1/payouts" }),
    retrieve: Pe({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
    update: Pe({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
    list: Pe({ method: "GET", fullPath: "/v1/payouts", methodType: "list" }),
    cancel: Pe({ method: "POST", fullPath: "/v1/payouts/{payout}/cancel" }),
    reverse: Pe({ method: "POST", fullPath: "/v1/payouts/{payout}/reverse" }),
  }),
  He = a.method,
  yl = a.extend({
    create: He({ method: "POST", fullPath: "/v1/plans" }),
    retrieve: He({ method: "GET", fullPath: "/v1/plans/{plan}" }),
    update: He({ method: "POST", fullPath: "/v1/plans/{plan}" }),
    list: He({ method: "GET", fullPath: "/v1/plans", methodType: "list" }),
    del: He({ method: "DELETE", fullPath: "/v1/plans/{plan}" }),
  }),
  We = a.method,
  gl = a.extend({
    create: We({ method: "POST", fullPath: "/v1/prices" }),
    retrieve: We({ method: "GET", fullPath: "/v1/prices/{price}" }),
    update: We({ method: "POST", fullPath: "/v1/prices/{price}" }),
    list: We({ method: "GET", fullPath: "/v1/prices", methodType: "list" }),
    search: We({
      method: "GET",
      fullPath: "/v1/prices/search",
      methodType: "search",
    }),
  }),
  Te = a.method,
  vl = a.extend({
    create: Te({ method: "POST", fullPath: "/v1/products" }),
    retrieve: Te({ method: "GET", fullPath: "/v1/products/{id}" }),
    update: Te({ method: "POST", fullPath: "/v1/products/{id}" }),
    list: Te({ method: "GET", fullPath: "/v1/products", methodType: "list" }),
    del: Te({ method: "DELETE", fullPath: "/v1/products/{id}" }),
    search: Te({
      method: "GET",
      fullPath: "/v1/products/search",
      methodType: "search",
    }),
  }),
  vt = a.method,
  Pl = a.extend({
    create: vt({ method: "POST", fullPath: "/v1/promotion_codes" }),
    retrieve: vt({
      method: "GET",
      fullPath: "/v1/promotion_codes/{promotion_code}",
    }),
    update: vt({
      method: "POST",
      fullPath: "/v1/promotion_codes/{promotion_code}",
    }),
    list: vt({
      method: "GET",
      fullPath: "/v1/promotion_codes",
      methodType: "list",
    }),
  }),
  J = a.method,
  Tl = a.extend({
    create: J({ method: "POST", fullPath: "/v1/quotes" }),
    retrieve: J({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
    update: J({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
    list: J({ method: "GET", fullPath: "/v1/quotes", methodType: "list" }),
    accept: J({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
    cancel: J({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
    finalizeQuote: J({
      method: "POST",
      fullPath: "/v1/quotes/{quote}/finalize",
    }),
    listComputedUpfrontLineItems: J({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
      methodType: "list",
    }),
    listLineItems: J({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/line_items",
      methodType: "list",
    }),
    pdf: J({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/pdf",
      host: "files.stripe.com",
      streaming: !0,
    }),
  }),
  ze = a.method,
  _l = a.extend({
    create: ze({ method: "POST", fullPath: "/v1/refunds" }),
    retrieve: ze({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
    update: ze({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
    list: ze({ method: "GET", fullPath: "/v1/refunds", methodType: "list" }),
    cancel: ze({ method: "POST", fullPath: "/v1/refunds/{refund}/cancel" }),
  }),
  Zt = a.method,
  Al = a.extend({
    retrieve: Zt({ method: "GET", fullPath: "/v1/reviews/{review}" }),
    list: Zt({ method: "GET", fullPath: "/v1/reviews", methodType: "list" }),
    approve: Zt({ method: "POST", fullPath: "/v1/reviews/{review}/approve" }),
  }),
  Sl = a.method,
  El = a.extend({
    list: Sl({
      method: "GET",
      fullPath: "/v1/setup_attempts",
      methodType: "list",
    }),
  }),
  ie = a.method,
  bl = a.extend({
    create: ie({ method: "POST", fullPath: "/v1/setup_intents" }),
    retrieve: ie({ method: "GET", fullPath: "/v1/setup_intents/{intent}" }),
    update: ie({ method: "POST", fullPath: "/v1/setup_intents/{intent}" }),
    list: ie({
      method: "GET",
      fullPath: "/v1/setup_intents",
      methodType: "list",
    }),
    cancel: ie({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/cancel",
    }),
    confirm: ie({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/confirm",
    }),
    verifyMicrodeposits: ie({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/verify_microdeposits",
    }),
  }),
  Pt = a.method,
  xl = a.extend({
    create: Pt({ method: "POST", fullPath: "/v1/shipping_rates" }),
    retrieve: Pt({
      method: "GET",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}",
    }),
    update: Pt({
      method: "POST",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}",
    }),
    list: Pt({
      method: "GET",
      fullPath: "/v1/shipping_rates",
      methodType: "list",
    }),
  }),
  je = a.method,
  Ol = a.extend({
    create: je({ method: "POST", fullPath: "/v1/sources" }),
    retrieve: je({ method: "GET", fullPath: "/v1/sources/{source}" }),
    update: je({ method: "POST", fullPath: "/v1/sources/{source}" }),
    listSourceTransactions: je({
      method: "GET",
      fullPath: "/v1/sources/{source}/source_transactions",
      methodType: "list",
    }),
    verify: je({ method: "POST", fullPath: "/v1/sources/{source}/verify" }),
  }),
  le = a.method,
  wl = a.extend({
    create: le({ method: "POST", fullPath: "/v1/subscription_items" }),
    retrieve: le({ method: "GET", fullPath: "/v1/subscription_items/{item}" }),
    update: le({ method: "POST", fullPath: "/v1/subscription_items/{item}" }),
    list: le({
      method: "GET",
      fullPath: "/v1/subscription_items",
      methodType: "list",
    }),
    del: le({ method: "DELETE", fullPath: "/v1/subscription_items/{item}" }),
    createUsageRecord: le({
      method: "POST",
      fullPath: "/v1/subscription_items/{subscription_item}/usage_records",
    }),
    listUsageRecordSummaries: le({
      method: "GET",
      fullPath:
        "/v1/subscription_items/{subscription_item}/usage_record_summaries",
      methodType: "list",
    }),
  }),
  _e = a.method,
  Cl = a.extend({
    create: _e({ method: "POST", fullPath: "/v1/subscription_schedules" }),
    retrieve: _e({
      method: "GET",
      fullPath: "/v1/subscription_schedules/{schedule}",
    }),
    update: _e({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}",
    }),
    list: _e({
      method: "GET",
      fullPath: "/v1/subscription_schedules",
      methodType: "list",
    }),
    cancel: _e({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/cancel",
    }),
    release: _e({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/release",
    }),
  }),
  ee = a.method,
  Rl = a.extend({
    create: ee({ method: "POST", fullPath: "/v1/subscriptions" }),
    retrieve: ee({
      method: "GET",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}",
    }),
    update: ee({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}",
    }),
    list: ee({
      method: "GET",
      fullPath: "/v1/subscriptions",
      methodType: "list",
    }),
    cancel: ee({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}",
    }),
    deleteDiscount: ee({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount",
    }),
    resume: ee({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription}/resume",
    }),
    search: ee({
      method: "GET",
      fullPath: "/v1/subscriptions/search",
      methodType: "search",
    }),
  }),
  hn = a.method,
  Ml = a.extend({
    retrieve: hn({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
    list: hn({ method: "GET", fullPath: "/v1/tax_codes", methodType: "list" }),
  }),
  Tt = a.method,
  $l = a.extend({
    create: Tt({ method: "POST", fullPath: "/v1/tax_rates" }),
    retrieve: Tt({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
    update: Tt({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
    list: Tt({ method: "GET", fullPath: "/v1/tax_rates", methodType: "list" }),
  }),
  mn = a.method,
  Il = a.extend({
    create: mn({ method: "POST", fullPath: "/v1/tokens" }),
    retrieve: mn({ method: "GET", fullPath: "/v1/tokens/{token}" }),
  }),
  Ve = a.method,
  Gl = a.extend({
    create: Ve({ method: "POST", fullPath: "/v1/topups" }),
    retrieve: Ve({ method: "GET", fullPath: "/v1/topups/{topup}" }),
    update: Ve({ method: "POST", fullPath: "/v1/topups/{topup}" }),
    list: Ve({ method: "GET", fullPath: "/v1/topups", methodType: "list" }),
    cancel: Ve({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" }),
  }),
  te = a.method,
  kl = a.extend({
    create: te({ method: "POST", fullPath: "/v1/transfers" }),
    retrieve: te({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
    update: te({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
    list: te({ method: "GET", fullPath: "/v1/transfers", methodType: "list" }),
    createReversal: te({
      method: "POST",
      fullPath: "/v1/transfers/{id}/reversals",
    }),
    listReversals: te({
      method: "GET",
      fullPath: "/v1/transfers/{id}/reversals",
      methodType: "list",
    }),
    retrieveReversal: te({
      method: "GET",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}",
    }),
    updateReversal: te({
      method: "POST",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}",
    }),
  }),
  Ke = a.method,
  Nl = a.extend({
    create: Ke({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
    retrieve: Ke({
      method: "GET",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}",
    }),
    update: Ke({
      method: "POST",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}",
    }),
    list: Ke({
      method: "GET",
      fullPath: "/v1/webhook_endpoints",
      methodType: "list",
    }),
    del: Ke({
      method: "DELETE",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}",
    }),
  }),
  Dl = F("apps", { Secrets: yi }),
  Fl = F("billingPortal", { Configurations: ka, Sessions: vi }),
  Ul = F("checkout", { Sessions: Pi }),
  Ll = F("climate", { Orders: Qa, Products: ei, Suppliers: Ai }),
  ql = F("financialConnections", {
    Accounts: wa,
    Sessions: Ti,
    Transactions: Oi,
  }),
  Bl = F("identity", { VerificationReports: Ii, VerificationSessions: Gi }),
  Hl = F("issuing", {
    Authorizations: Ra,
    Cardholders: $a,
    Cards: Ga,
    Disputes: Ha,
    Tokens: Ei,
    Transactions: wi,
  }),
  Wl = F("radar", {
    EarlyFraudWarnings: Wa,
    ValueListItems: Mi,
    ValueLists: $i,
  }),
  zl = F("reporting", { ReportRuns: mi, ReportTypes: fi }),
  jl = F("sigma", { ScheduledQueryRuns: pi }),
  Vl = F("tax", {
    Calculations: Ma,
    Registrations: hi,
    Settings: _i,
    Transactions: Ci,
  }),
  Kl = F("terminal", {
    Configurations: Na,
    ConnectionTokens: Fa,
    Locations: Ka,
    Readers: ni,
  }),
  Ql = F("testHelpers", {
    Customers: qa,
    Refunds: di,
    TestClocks: Si,
    Issuing: F("issuing", { Authorizations: Ca, Cards: Ia, Transactions: xi }),
    Terminal: F("terminal", { Readers: ri }),
    Treasury: F("treasury", {
      InboundTransfers: ja,
      OutboundPayments: Ja,
      OutboundTransfers: Xa,
      ReceivedCredits: si,
      ReceivedDebits: li,
    }),
  }),
  Jl = F("treasury", {
    CreditReversals: Ua,
    DebitReversals: Ba,
    FinancialAccounts: za,
    InboundTransfers: Va,
    OutboundPayments: Ya,
    OutboundTransfers: Za,
    ReceivedCredits: ai,
    ReceivedDebits: ci,
    TransactionEntries: bi,
    Transactions: Ri,
  }),
  er = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Account: on,
        AccountLinks: Ni,
        AccountSessions: Fi,
        Accounts: on,
        ApplePayDomains: Ui,
        ApplicationFees: Li,
        Apps: Dl,
        Balance: Bi,
        BalanceTransactions: Hi,
        BillingPortal: Fl,
        Charges: Wi,
        Checkout: Ul,
        Climate: Ll,
        CountrySpecs: zi,
        Coupons: ji,
        CreditNotes: Vi,
        CustomerSessions: Qi,
        Customers: Ji,
        Disputes: Yi,
        EphemeralKeys: Xi,
        Events: Zi,
        ExchangeRates: el,
        FileLinks: tl,
        Files: ol,
        FinancialConnections: ql,
        Identity: Bl,
        InvoiceItems: sl,
        Invoices: al,
        Issuing: Hl,
        Mandates: ll,
        OAuth: cl,
        PaymentIntents: ul,
        PaymentLinks: dl,
        PaymentMethodConfigurations: hl,
        PaymentMethodDomains: ml,
        PaymentMethods: fl,
        Payouts: pl,
        Plans: yl,
        Prices: gl,
        Products: vl,
        PromotionCodes: Pl,
        Quotes: Tl,
        Radar: Wl,
        Refunds: _l,
        Reporting: zl,
        Reviews: Al,
        SetupAttempts: El,
        SetupIntents: bl,
        ShippingRates: xl,
        Sigma: jl,
        Sources: Ol,
        SubscriptionItems: wl,
        SubscriptionSchedules: Cl,
        Subscriptions: Rl,
        Tax: Vl,
        TaxCodes: Ml,
        TaxRates: $l,
        Terminal: Kl,
        TestHelpers: Ql,
        Tokens: Il,
        Topups: Gl,
        Transfers: kl,
        Treasury: Jl,
        WebhookEndpoints: Nl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Yl = 60;
class Xe {
  constructor(e, r) {
    (this._stripe = e), (this._maxBufferedRequestMetric = r);
  }
  _addHeadersDirectlyToObject(e, r) {
    (e.requestId = r["request-id"]),
      (e.stripeAccount = e.stripeAccount || r["stripe-account"]),
      (e.apiVersion = e.apiVersion || r["stripe-version"]),
      (e.idempotencyKey = e.idempotencyKey || r["idempotency-key"]);
  }
  _makeResponseEvent(e, r, n) {
    const o = Date.now(),
      s = o - e.request_start_time;
    return Lt({
      api_version: n["stripe-version"],
      account: n["stripe-account"],
      idempotency_key: n["idempotency-key"],
      method: e.method,
      path: e.path,
      status: r,
      request_id: this._getRequestId(n),
      elapsed: s,
      request_start_time: e.request_start_time,
      request_end_time: o,
    });
  }
  _getRequestId(e) {
    return e["request-id"];
  }
  _streamingResponseHandler(e, r, n) {
    return (o) => {
      const s = o.getHeaders(),
        i = () => {
          const u = this._makeResponseEvent(e, o.getStatusCode(), s);
          this._stripe._emitter.emit("response", u),
            this._recordRequestMetrics(this._getRequestId(s), u.elapsed, r);
        },
        c = o.toStream(i);
      return this._addHeadersDirectlyToObject(c, s), n(null, c);
    };
  }
  _jsonResponseHandler(e, r, n) {
    return (o) => {
      const s = o.getHeaders(),
        i = this._getRequestId(s),
        c = o.getStatusCode(),
        u = this._makeResponseEvent(e, c, s);
      this._stripe._emitter.emit("response", u),
        o
          .toJSON()
          .then(
            (l) => {
              if (l.error) {
                let d;
                throw (
                  (typeof l.error == "string" &&
                    (l.error = { type: l.error, message: l.error_description }),
                  (l.error.headers = s),
                  (l.error.statusCode = c),
                  (l.error.requestId = i),
                  c === 401
                    ? (d = new dr(l.error))
                    : c === 403
                      ? (d = new Rn(l.error))
                      : c === 429
                        ? (d = new hr(l.error))
                        : (d = H.generate(l.error)),
                  d)
                );
              }
              return l;
            },
            (l) => {
              throw new ur({
                message: "Invalid JSON received from the Stripe API",
                exception: l,
                requestId: s["request-id"],
              });
            }
          )
          .then(
            (l) => {
              this._recordRequestMetrics(i, u.elapsed, r);
              const d = o.getRawResponse();
              this._addHeadersDirectlyToObject(d, s),
                Object.defineProperty(l, "lastResponse", {
                  enumerable: !1,
                  writable: !1,
                  value: d,
                }),
                n(null, l);
            },
            (l) => n(l, null)
          );
    };
  }
  static _generateConnectionErrorMessage(e) {
    return `An error occurred with our connection to Stripe.${e > 0 ? ` Request was retried ${e} times.` : ""}`;
  }
  static _shouldRetry(e, r, n, o) {
    return o && r === 0 && z.CONNECTION_CLOSED_ERROR_CODES.includes(o.code)
      ? !0
      : r >= n
        ? !1
        : e
          ? e.getHeaders()["stripe-should-retry"] === "false"
            ? !1
            : e.getHeaders()["stripe-should-retry"] === "true" ||
              e.getStatusCode() === 409 ||
              e.getStatusCode() >= 500
          : !0;
  }
  _getSleepTimeInMS(e, r = null) {
    const n = this._stripe.getInitialNetworkRetryDelay(),
      o = this._stripe.getMaxNetworkRetryDelay();
    let s = Math.min(n * Math.pow(e - 1, 2), o);
    return (
      (s *= 0.5 * (1 + Math.random())),
      (s = Math.max(n, s)),
      Number.isInteger(r) && r <= Yl && (s = Math.max(s, r)),
      s * 1e3
    );
  }
  _getMaxNetworkRetries(e = {}) {
    return e.maxNetworkRetries !== void 0 &&
      Number.isInteger(e.maxNetworkRetries)
      ? e.maxNetworkRetries
      : this._stripe.getMaxNetworkRetries();
  }
  _defaultIdempotencyKey(e, r) {
    const n = this._getMaxNetworkRetries(r);
    return e === "POST" && n > 0
      ? `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`
      : null;
  }
  _makeHeaders(e, r, n, o, s, i, c) {
    const u = {
        Authorization: e ? `Bearer ${e}` : this._stripe.getApiField("auth"),
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": this._getUserAgentString(),
        "X-Stripe-Client-User-Agent": o,
        "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
        "Stripe-Version": n,
        "Stripe-Account": this._stripe.getApiField("stripeAccount"),
        "Idempotency-Key": this._defaultIdempotencyKey(s, c),
      },
      l = s == "POST" || s == "PUT" || s == "PATCH";
    return (
      (l || r) &&
        (l ||
          Ot(
            `${s} method had non-zero contentLength but no payload is expected for this verb`
          ),
        (u["Content-Length"] = r)),
      Object.assign(Lt(u), da(i))
    );
  }
  _getUserAgentString() {
    const e = this._stripe.getConstant("PACKAGE_VERSION"),
      r = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
    return `Stripe/v1 NodeBindings/${e} ${r}`.trim();
  }
  _getTelemetryHeader() {
    if (
      this._stripe.getTelemetryEnabled() &&
      this._stripe._prevRequestMetrics.length > 0
    ) {
      const e = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({ last_request_metrics: e });
    }
  }
  _recordRequestMetrics(e, r, n) {
    if (this._stripe.getTelemetryEnabled() && e)
      if (
        this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric
      )
        Ot("Request metrics buffer is full, dropping telemetry message.");
      else {
        const o = { request_id: e, request_duration_ms: r };
        n && n.length > 0 && (o.usage = n),
          this._stripe._prevRequestMetrics.push(o);
      }
  }
  _request(e, r, n, o, s, i = {}, c = [], u, l = null) {
    let d;
    const m = (y, P, T, v, b) =>
        setTimeout(y, this._getSleepTimeInMS(v, b), P, T, v + 1),
      h = (y, P, T) => {
        const v =
            i.settings &&
            i.settings.timeout &&
            Number.isInteger(i.settings.timeout) &&
            i.settings.timeout >= 0
              ? i.settings.timeout
              : this._stripe.getApiField("timeout"),
          b = this._stripe
            .getApiField("httpClient")
            .makeRequest(
              r || this._stripe.getApiField("host"),
              this._stripe.getApiField("port"),
              n,
              e,
              P,
              d,
              this._stripe.getApiField("protocol"),
              v
            ),
          w = Date.now(),
          M = Lt({
            api_version: y,
            account: P["Stripe-Account"],
            idempotency_key: P["Idempotency-Key"],
            method: e,
            path: n,
            request_start_time: w,
          }),
          B = T || 0,
          U = this._getMaxNetworkRetries(i.settings || {});
        this._stripe._emitter.emit("request", M),
          b
            .then((C) =>
              Xe._shouldRetry(C, B, U)
                ? m(h, y, P, B, C.getHeaders()["retry-after"])
                : i.streaming && C.getStatusCode() < 400
                  ? this._streamingResponseHandler(M, c, u)(C)
                  : this._jsonResponseHandler(M, c, u)(C)
            )
            .catch((C) => {
              if (Xe._shouldRetry(null, B, U, C)) return m(h, y, P, B, null);
              {
                const f = C.code && C.code === z.TIMEOUT_ERROR_CODE;
                return u(
                  new Mn({
                    message: f
                      ? `Request aborted due to timeout being reached (${v}ms)`
                      : Xe._generateConnectionErrorMessage(B),
                    detail: C,
                  })
                );
              }
            });
      },
      p = (y, P) => {
        if (y) return u(y);
        (d = P),
          this._stripe.getClientUserAgent((T) => {
            var v, b;
            const w = this._stripe.getApiField("version"),
              M = this._makeHeaders(
                s,
                d.length,
                w,
                T,
                e,
                (v = i.headers) !== null && v !== void 0 ? v : null,
                (b = i.settings) !== null && b !== void 0 ? b : {}
              );
            h(w, M, 0);
          });
      };
    l ? l(e, o, i.headers, p) : p(null, wt(o || {}));
  }
}
function fn(t) {
  const e = {
      DEFAULT_TOLERANCE: 300,
      signature: null,
      constructEvent(l, d, m, h, p, y) {
        try {
          this.signature.verifyHeader(l, d, m, h || e.DEFAULT_TOLERANCE, p, y);
        } catch (T) {
          throw (
            (T instanceof xn &&
              (T.message +=
                "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"),
            T)
          );
        }
        return l instanceof Uint8Array
          ? JSON.parse(new TextDecoder("utf8").decode(l))
          : JSON.parse(l);
      },
      async constructEventAsync(l, d, m, h, p, y) {
        return (
          await this.signature.verifyHeaderAsync(
            l,
            d,
            m,
            h || e.DEFAULT_TOLERANCE,
            p,
            y
          ),
          l instanceof Uint8Array
            ? JSON.parse(new TextDecoder("utf8").decode(l))
            : JSON.parse(l)
        );
      },
      generateTestHeaderString: function (l) {
        if (!l) throw new H({ message: "Options are required" });
        return (
          (l.timestamp =
            Math.floor(l.timestamp) || Math.floor(Date.now() / 1e3)),
          (l.scheme = l.scheme || r.EXPECTED_SCHEME),
          (l.cryptoProvider = l.cryptoProvider || u()),
          (l.signature =
            l.signature ||
            l.cryptoProvider.computeHMACSignature(
              l.timestamp + "." + l.payload,
              l.secret
            )),
          ["t=" + l.timestamp, l.scheme + "=" + l.signature].join(",")
        );
      },
    },
    r = {
      EXPECTED_SCHEME: "v1",
      verifyHeader(l, d, m, h, p, y) {
        const {
            decodedHeader: P,
            decodedPayload: T,
            details: v,
            suspectPayloadType: b,
          } = o(l, d, this.EXPECTED_SCHEME),
          w = /\s/.test(m);
        p = p || u();
        const M = p.computeHMACSignature(n(T, v), m);
        return s(T, P, v, M, h, b, w, y), !0;
      },
      async verifyHeaderAsync(l, d, m, h, p, y) {
        const {
            decodedHeader: P,
            decodedPayload: T,
            details: v,
            suspectPayloadType: b,
          } = o(l, d, this.EXPECTED_SCHEME),
          w = /\s/.test(m);
        p = p || u();
        const M = await p.computeHMACSignatureAsync(n(T, v), m);
        return s(T, P, v, M, h, b, w, y);
      },
    };
  function n(l, d) {
    return `${d.timestamp}.${l}`;
  }
  function o(l, d, m) {
    if (!l) throw new re(d, l, { message: "No webhook payload was provided." });
    const h = typeof l != "string" && !(l instanceof Uint8Array),
      p = new TextDecoder("utf8"),
      y = l instanceof Uint8Array ? p.decode(l) : l;
    if (Array.isArray(d))
      throw new Error(
        "Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header."
      );
    if (d == null || d == "")
      throw new re(d, l, {
        message: "No stripe-signature header value was provided.",
      });
    const P = d instanceof Uint8Array ? p.decode(d) : d,
      T = i(P, m);
    if (!T || T.timestamp === -1)
      throw new re(P, y, {
        message: "Unable to extract timestamp and signatures from header",
      });
    if (!T.signatures.length)
      throw new re(P, y, {
        message: "No signatures found with expected scheme",
      });
    return {
      decodedPayload: y,
      decodedHeader: P,
      details: T,
      suspectPayloadType: h,
    };
  }
  function s(l, d, m, h, p, y, P, T) {
    const v = !!m.signatures.filter(t.secureCompare.bind(t, h)).length,
      b = `
Learn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing`,
      w = P
        ? `

Note: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value`
        : "";
    if (!v)
      throw y
        ? new re(d, l, {
            message:
              `Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. 
Signature verification is impossible without access to the original signed material. 
` +
              b +
              `
` +
              w,
          })
        : new re(d, l, {
            message:
              `No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? 
 If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.
` +
              b +
              `
` +
              w,
          });
    const M =
      Math.floor((typeof T == "number" ? T : Date.now()) / 1e3) - m.timestamp;
    if (p > 0 && M > p)
      throw new re(d, l, { message: "Timestamp outside the tolerance zone" });
    return !0;
  }
  function i(l, d) {
    return typeof l != "string"
      ? null
      : l.split(",").reduce(
          (m, h) => {
            const p = h.split("=");
            return (
              p[0] === "t" && (m.timestamp = parseInt(p[1], 10)),
              p[0] === d && m.signatures.push(p[1]),
              m
            );
          },
          { timestamp: -1, signatures: [] }
        );
  }
  let c = null;
  function u() {
    return c || (c = t.createDefaultCryptoProvider()), c;
  }
  return (e.signature = r), e;
}
const pn = "api.stripe.com",
  yn = "443",
  gn = "/v1/",
  vn = lo,
  Pn = 8e4,
  Tn = 2,
  _n = 0.5,
  Xl = ["name", "version", "url", "partner_id"],
  An = [
    "apiVersion",
    "typescript",
    "maxNetworkRetries",
    "httpAgent",
    "httpClient",
    "timeout",
    "host",
    "port",
    "protocol",
    "telemetry",
    "appInfo",
    "stripeAccount",
  ],
  Zl = (t) => new Xe(t, a.MAX_BUFFERED_REQUEST_METRICS);
function ec(t, e = Zl) {
  (n.PACKAGE_VERSION = "14.17.0"),
    (n.USER_AGENT = Object.assign(
      {
        bindings_version: n.PACKAGE_VERSION,
        lang: "node",
        publisher: "stripe",
        uname: null,
        typescript: !1,
      },
      ya()
    )),
    (n.StripeResource = a),
    (n.resources = er),
    (n.HttpClient = z),
    (n.HttpClientResponse = En),
    (n.CryptoProvider = bn);
  function r(o = t) {
    return fn(o);
  }
  n.webhooks = Object.assign(r, fn(t));
  function n(o, s = {}) {
    if (!(this instanceof n)) return new n(o, s);
    const i = this._getPropsFromConfig(s);
    (this._platformFunctions = t),
      Object.defineProperty(this, "_emitter", {
        value: this._platformFunctions.createEmitter(),
        enumerable: !1,
        configurable: !1,
        writable: !1,
      }),
      (this.VERSION = n.PACKAGE_VERSION),
      (this.on = this._emitter.on.bind(this._emitter)),
      (this.once = this._emitter.once.bind(this._emitter)),
      (this.off = this._emitter.removeListener.bind(this._emitter));
    const c = i.httpAgent || null;
    this._api = {
      auth: null,
      host: i.host || pn,
      port: i.port || yn,
      protocol: i.protocol || "https",
      basePath: gn,
      version: i.apiVersion || vn,
      timeout: qt("timeout", i.timeout, Pn),
      maxNetworkRetries: qt("maxNetworkRetries", i.maxNetworkRetries, 1),
      agent: c,
      httpClient:
        i.httpClient ||
        (c
          ? this._platformFunctions.createNodeHttpClient(c)
          : this._platformFunctions.createDefaultHttpClient()),
      dev: !1,
      stripeAccount: i.stripeAccount || null,
    };
    const u = i.typescript || !1;
    u !== n.USER_AGENT.typescript && (n.USER_AGENT.typescript = u),
      i.appInfo && this._setAppInfo(i.appInfo),
      this._prepResources(),
      this._setApiKey(o),
      (this.errors = Ar),
      (this.webhooks = r()),
      (this._prevRequestMetrics = []),
      (this._enableTelemetry = i.telemetry !== !1),
      (this._requestSender = e(this)),
      (this.StripeResource = n.StripeResource);
  }
  return (
    (n.errors = Ar),
    (n.createNodeHttpClient = t.createNodeHttpClient),
    (n.createFetchHttpClient = t.createFetchHttpClient),
    (n.createNodeCryptoProvider = t.createNodeCryptoProvider),
    (n.createSubtleCryptoProvider = t.createSubtleCryptoProvider),
    (n.prototype = {
      _appInfo: void 0,
      on: null,
      off: null,
      once: null,
      VERSION: null,
      StripeResource: null,
      webhooks: null,
      errors: null,
      _api: null,
      _prevRequestMetrics: null,
      _emitter: null,
      _enableTelemetry: null,
      _requestSender: null,
      _platformFunctions: null,
      _setApiKey(o) {
        o && this._setApiField("auth", `Bearer ${o}`);
      },
      _setAppInfo(o) {
        if (o && typeof o != "object")
          throw new Error("AppInfo must be an object.");
        if (o && !o.name) throw new Error("AppInfo.name is required");
        (o = o || {}),
          (this._appInfo = Xl.reduce(
            (s, i) => (
              typeof o[i] == "string" && ((s = s || {}), (s[i] = o[i])), s
            ),
            void 0
          ));
      },
      _setApiField(o, s) {
        this._api[o] = s;
      },
      getApiField(o) {
        return this._api[o];
      },
      setClientId(o) {
        this._clientId = o;
      },
      getClientId() {
        return this._clientId;
      },
      getConstant: (o) => {
        switch (o) {
          case "DEFAULT_HOST":
            return pn;
          case "DEFAULT_PORT":
            return yn;
          case "DEFAULT_BASE_PATH":
            return gn;
          case "DEFAULT_API_VERSION":
            return vn;
          case "DEFAULT_TIMEOUT":
            return Pn;
          case "MAX_NETWORK_RETRY_DELAY_SEC":
            return Tn;
          case "INITIAL_NETWORK_RETRY_DELAY_SEC":
            return _n;
        }
        return n[o];
      },
      getMaxNetworkRetries() {
        return this.getApiField("maxNetworkRetries");
      },
      _setApiNumberField(o, s, i) {
        const c = qt(o, s, i);
        this._setApiField(o, c);
      },
      getMaxNetworkRetryDelay() {
        return Tn;
      },
      getInitialNetworkRetryDelay() {
        return _n;
      },
      getClientUserAgent(o) {
        return this.getClientUserAgentSeeded(n.USER_AGENT, o);
      },
      getClientUserAgentSeeded(o, s) {
        this._platformFunctions.getUname().then((i) => {
          var c;
          const u = {};
          for (const d in o)
            u[d] = encodeURIComponent(
              (c = o[d]) !== null && c !== void 0 ? c : "null"
            );
          u.uname = encodeURIComponent(i || "UNKNOWN");
          const l = this.getApiField("httpClient");
          l && (u.httplib = encodeURIComponent(l.getClientName())),
            this._appInfo && (u.application = this._appInfo),
            s(JSON.stringify(u));
        });
      },
      getAppInfoAsString() {
        if (!this._appInfo) return "";
        let o = this._appInfo.name;
        return (
          this._appInfo.version && (o += `/${this._appInfo.version}`),
          this._appInfo.url && (o += ` (${this._appInfo.url})`),
          o
        );
      },
      getTelemetryEnabled() {
        return this._enableTelemetry;
      },
      _prepResources() {
        for (const o in er) this[ma(o)] = new er[o](this);
      },
      _getPropsFromConfig(o) {
        if (!o) return {};
        const s = typeof o == "string";
        if (!(o === Object(o) && !Array.isArray(o)) && !s)
          throw new Error("Config must either be an object or a string");
        if (s) return { apiVersion: o };
        if (Object.keys(o).filter((u) => !An.includes(u)).length > 0)
          throw new Error(
            `Config object may only contain the following: ${An.join(", ")}`
          );
        return o;
      },
    }),
    n
  );
}
const tc = ec(new io());
chrome.runtime.onMessage.addListener(
  async ({ action: t, payload: e }, r, n) => {
    const { apiKey: o } = await chrome.storage.sync.get("apiKey");
    if (!o) return;
    const s = new tc(o);
    if (t === "fetch")
      try {
        const i = await Promise.all(
            e.emails.map(async (d) => {
              var p, y;
              const m = await s.customers.list({ email: d, limit: 3 }),
                h = (p = m.data[0]) == null ? void 0 : p.id;
              return h
                ? {
                    email: d,
                    isCustomer: !!(h != null && h.length),
                    customerName: (y = m.data[0]) == null ? void 0 : y.name,
                    customerId: h,
                  }
                : null;
            })
          ),
          c = i.filter(Boolean);
        await chrome.tabs.sendMessage(r.tab.id, {
          action: "fetched",
          payload: {
            message: "customers in thread page is fetched",
            customersInThreadRowPage: c,
          },
        });
        const { userCustomersList: u = [] } =
          await chrome.storage.local.get("userCustomersList");
        console.log({ userCustomersList: u, pageCustomers: i });
        const l = c.filter((d) => !u.some((m) => m.email === d.email));
        console.log({ uniquePageCustomers: l }),
          await chrome.storage.local.set({ userCustomersList: [...u, ...l] });
      } catch (i) {
        console.log("error", i);
      }
    else if (t === "fetchCustomerInfo")
      try {
        const i = e.matchedCustomer.customerId,
          [c, u, l, d] = await Promise.all([
            s.invoices.list({ customer: i }),
            s.subscriptions.list({ customer: i }),
            s.customers.listSources(i, { object: "card" }),
            rc(i, s),
          ]),
          m = c.data,
          h = u.data;
        console.log({
          customerAccInfo: e.matchedCustomer,
          invoiceInfo: m,
          subscriptionInfo: h,
          cards: l,
          totalSpent: d,
        }),
          await chrome.storage.local.set({
            lastCustomerDetailInfo: {
              customerAccInfo: e.matchedCustomer,
              invoiceInfo: m,
              subscriptionInfo: h,
            },
          }),
          chrome.tabs.sendMessage(r.tab.id, {
            action: "customerInfoFetched",
            payload: {
              customerAccInfo: e.matchedCustomer,
              invoiceInfo: m,
              subscriptionInfo: h,
              cards: l,
              totalSpent: d,
            },
          });
      } catch (i) {
        console.error(i);
      }
    else
      t === "initUserStripe" &&
        (console.log("initUserStripe"),
        await chrome.storage.local.set({ userCustomersList: [] }));
  }
);
chrome.tabs.onUpdated.addListener(function (t, e, r) {
  e.status === "complete" &&
    r.status === "complete" &&
    r.url &&
    r.url.includes("mail.google.com") &&
    chrome.tabs
      .sendMessage(r.id, {
        action: "urlChanged",
        payload: { message: "url changed" },
      })
      .catch(() => {});
});
async function rc(t, e) {
  var r;
  try {
    let n = 0,
      o = !0,
      s;
    for (; o; ) {
      const i = await e.charges.list({
        customer: t,
        limit: 100,
        starting_after: s,
      });
      for (const c of i.data) n += c.amount;
      (o = i.has_more),
        (s = (r = i.data[i.data.length - 1]) == null ? void 0 : r.id);
    }
    return n / 100;
  } catch (n) {
    throw (console.error("Error:", n.raw.message), n);
  }
}
