(() => {
  var bh = Object.create;
  var rs = Object.defineProperty,
    xh = Object.defineProperties,
    Th = Object.getOwnPropertyDescriptor,
    Sh = Object.getOwnPropertyDescriptors,
    Ch = Object.getOwnPropertyNames,
    ea = Object.getOwnPropertySymbols,
    kh = Object.getPrototypeOf,
    ra = Object.prototype.hasOwnProperty,
    Ah = Object.prototype.propertyIsEnumerable;
  var ia = (n, t, e) =>
      t in n
        ? rs(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (n[t] = e),
    de = (n, t) => {
      for (var e in t || (t = {})) ra.call(t, e) && ia(n, e, t[e]);
      if (ea) for (var e of ea(t)) Ah.call(t, e) && ia(n, e, t[e]);
      return n;
    },
    ir = (n, t) => xh(n, Sh(t));
  var Mh = (n, t) => () => (
      t || n((t = { exports: {} }).exports, t), t.exports
    ),
    Eh = (n, t) => {
      for (var e in t) rs(n, e, { get: t[e], enumerable: !0 });
    },
    Dh = (n, t, e, i) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of Ch(t))
          !ra.call(n, r) &&
            r !== e &&
            rs(n, r, {
              get: () => t[r],
              enumerable: !(i = Th(t, r)) || i.enumerable,
            });
      return n;
    };
  var Lh = (n, t, e) => (
    (e = n != null ? bh(kh(n)) : {}),
    Dh(
      t || !n || !n.__esModule
        ? rs(e, "default", { value: n, enumerable: !0 })
        : e,
      n
    )
  );
  var _h = Mh((gh, Sn) => {
    (function (n, t) {
      typeof define == "function" && define.amd
        ? define([], function () {
            return (n.svg4everybody = t());
          })
        : typeof Sn == "object" && Sn.exports
        ? (Sn.exports = t())
        : (n.svg4everybody = t());
    })(gh, function () {
      function n(r, s, o) {
        if (o) {
          var a = document.createDocumentFragment(),
            l = !s.hasAttribute("viewBox") && o.getAttribute("viewBox");
          l && s.setAttribute("viewBox", l);
          for (var h = o.cloneNode(!0); h.childNodes.length; )
            a.appendChild(h.firstChild);
          r.appendChild(a);
        }
      }
      function t(r) {
        (r.onreadystatechange = function () {
          if (r.readyState === 4) {
            var s = r._cachedDocument;
            s ||
              ((s = r._cachedDocument =
                document.implementation.createHTMLDocument("")),
              (s.body.innerHTML = r.responseText),
              (r._cachedTarget = {})),
              r._embeds.splice(0).map(function (o) {
                var a = r._cachedTarget[o.id];
                a || (a = r._cachedTarget[o.id] = s.getElementById(o.id)),
                  n(o.parent, o.svg, a);
              });
          }
        }),
          r.onreadystatechange();
      }
      function e(r) {
        function s() {
          for (var m = 0; m < p.length; ) {
            var b = p[m],
              T = b.parentNode,
              y = i(T),
              x = b.getAttribute("xlink:href") || b.getAttribute("href");
            if (
              (!x && a.attributeName && (x = b.getAttribute(a.attributeName)),
              y && x)
            ) {
              if (o)
                if (!a.validate || a.validate(x, y, b)) {
                  T.removeChild(b);
                  var k = x.split("#"),
                    w = k.shift(),
                    A = k.join("#");
                  if (w.length) {
                    var C = d[w];
                    C ||
                      ((C = d[w] = new XMLHttpRequest()),
                      C.open("GET", w),
                      C.send(),
                      (C._embeds = [])),
                      C._embeds.push({ parent: T, svg: y, id: A }),
                      t(C);
                  } else n(T, y, document.getElementById(A));
                } else ++m, ++_;
            } else ++m;
          }
          (!p.length || p.length - _ > 0) && g(s, 67);
        }
        var o,
          a = Object(r),
          l = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
          h = /\bAppleWebKit\/(\d+)\b/,
          u = /\bEdge\/12\.(\d+)\b/,
          f = /\bEdge\/.(\d+)\b/,
          c = window.top !== window.self;
        o =
          "polyfill" in a
            ? a.polyfill
            : l.test(navigator.userAgent) ||
              (navigator.userAgent.match(u) || [])[1] < 10547 ||
              (navigator.userAgent.match(h) || [])[1] < 537 ||
              (f.test(navigator.userAgent) && c);
        var d = {},
          g = window.requestAnimationFrame || setTimeout,
          p = document.getElementsByTagName("use"),
          _ = 0;
        o && s();
      }
      function i(r) {
        for (
          var s = r;
          s.nodeName.toLowerCase() !== "svg" && (s = s.parentNode);

        );
        return s;
      }
      return e;
    });
  });
  function ns(n) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (ns = function (t) {
            return typeof t;
          })
        : (ns = function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
      ns(n)
    );
  }
  function oa(n, t) {
    if (!(n instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function sa(n, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function aa(n, t, e) {
    return t && sa(n.prototype, t), e && sa(n, e), n;
  }
  function na(n, t, e) {
    return (
      t in n
        ? Object.defineProperty(n, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (n[t] = e),
      n
    );
  }
  function ss(n, t) {
    return Rh(n) || zh(n, t) || la(n, t) || Nh();
  }
  function Oh(n) {
    return Ph(n) || Ih(n) || la(n) || Fh();
  }
  function Ph(n) {
    if (Array.isArray(n)) return kn(n);
  }
  function Rh(n) {
    if (Array.isArray(n)) return n;
  }
  function Ih(n) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(n))
      return Array.from(n);
  }
  function zh(n, t) {
    if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(n)))) {
      var e = [],
        i = !0,
        r = !1,
        s = void 0;
      try {
        for (
          var o = n[Symbol.iterator](), a;
          !(i = (a = o.next()).done) &&
          (e.push(a.value), !(t && e.length === t));
          i = !0
        );
      } catch (l) {
        (r = !0), (s = l);
      } finally {
        try {
          !i && o.return != null && o.return();
        } finally {
          if (r) throw s;
        }
      }
      return e;
    }
  }
  function la(n, t) {
    if (!!n) {
      if (typeof n == "string") return kn(n, t);
      var e = Object.prototype.toString.call(n).slice(8, -1);
      if (
        (e === "Object" && n.constructor && (e = n.constructor.name),
        e === "Map" || e === "Set")
      )
        return Array.from(n);
      if (
        e === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
      )
        return kn(n, t);
    }
  }
  function kn(n, t) {
    (t == null || t > n.length) && (t = n.length);
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = n[e];
    return i;
  }
  function Fh() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Nh() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var X = (function () {
      function n(t) {
        oa(this, n),
          (this.mAttr = "data-" + t.dataName),
          (this.mCaptureEvents = ["mouseenter", "mouseleave"]),
          (this.el = t.el);
      }
      return (
        aa(n, [
          {
            key: "mInit",
            value: function (e) {
              var i = this;
              (this.modules = e),
                (this.mCheckEventTarget = this.mCheckEventTarget.bind(this)),
                this.events &&
                  Object.keys(this.events).forEach(function (r) {
                    return i.mAddEvent(r);
                  });
            },
          },
          {
            key: "mUpdate",
            value: function (e) {
              this.modules = e;
            },
          },
          {
            key: "mDestroy",
            value: function () {
              var e = this;
              this.events &&
                Object.keys(this.events).forEach(function (i) {
                  return e.mRemoveEvent(i);
                });
            },
          },
          {
            key: "mAddEvent",
            value: function (e) {
              var i = !!this.mCaptureEvents.includes(e);
              this.el.addEventListener(e, this.mCheckEventTarget, i);
            },
          },
          {
            key: "mRemoveEvent",
            value: function (e) {
              var i = !!this.mCaptureEvents.includes(e);
              this.el.removeEventListener(e, this.mCheckEventTarget, i);
            },
          },
          {
            key: "mCheckEventTarget",
            value: function (e) {
              var i = this.events[e.type];
              if (typeof i == "string") this[i](e);
              else {
                var r = "[" + this.mAttr + "]",
                  s = e.target;
                if (this.mCaptureEvents.includes(e.type))
                  s.matches(r) && this.mCallEventMethod(e, i, s);
                else
                  for (
                    ;
                    s &&
                    s !== document &&
                    !(
                      s.matches(r) &&
                      this.mCallEventMethod(e, i, s) != "undefined"
                    );

                  )
                    s = s.parentNode;
              }
            },
          },
          {
            key: "mCallEventMethod",
            value: function (e, i, r) {
              var s = r.getAttribute(this.mAttr);
              if (i.hasOwnProperty(s)) {
                var o = i[s];
                e.hasOwnProperty("currentTarget") ||
                  Object.defineProperty(e, "currentTarget", { value: r }),
                  e.hasOwnProperty("curTarget") ||
                    Object.defineProperty(e, "curTarget", { value: r }),
                  this[o](e);
              }
            },
          },
          {
            key: "$",
            value: function (e, i) {
              var r = e.indexOf("."),
                s = e.indexOf("#"),
                o = e.indexOf("["),
                a = [r, s, o].filter(function (c) {
                  return c != -1;
                }),
                l = !1,
                h = e,
                u = "",
                f = this.el;
              return (
                a.length &&
                  ((l = Math.min.apply(Math, Oh(a))),
                  (h = e.slice(0, l)),
                  (u = e.slice(l))),
                ns(i) == "object" && (f = i),
                f.querySelectorAll("[" + this.mAttr + "=" + h + "]" + u)
              );
            },
          },
          {
            key: "parent",
            value: function (e, i) {
              for (
                var r = "[" + this.mAttr + "=" + e + "]", s = i.parentNode;
                s && s !== document;

              ) {
                if (s.matches(r)) return s;
                s = s.parentNode;
              }
            },
          },
          {
            key: "getData",
            value: function (e, i) {
              var r = i || this.el;
              return r.getAttribute(this.mAttr + "-" + e);
            },
          },
          {
            key: "setData",
            value: function (e, i, r) {
              var s = r || this.el;
              return s.setAttribute(this.mAttr + "-" + e, i);
            },
          },
          {
            key: "call",
            value: function (e, i, r, s) {
              var o = this;
              i && !r && ((r = i), (i = !1)),
                this.modules[r] &&
                  (s
                    ? this.modules[r][s] && this.modules[r][s][e](i)
                    : Object.keys(this.modules[r]).forEach(function (a) {
                        o.modules[r][a][e](i);
                      }));
            },
          },
          {
            key: "on",
            value: function (e, i, r, s) {
              var o = this;
              this.modules[i] &&
                (s
                  ? this.modules[i][s].el.addEventListener(e, function (a) {
                      return r(a);
                    })
                  : Object.keys(this.modules[i]).forEach(function (a) {
                      o.modules[i][a].el.addEventListener(e, function (l) {
                        return r(l);
                      });
                    }));
            },
          },
          { key: "init", value: function () {} },
          { key: "destroy", value: function () {} },
        ]),
        n
      );
    })(),
    Bh = (function () {
      function n(t) {
        oa(this, n),
          this.app,
          (this.modules = t.modules),
          (this.currentModules = {}),
          (this.activeModules = {}),
          (this.newModules = {}),
          (this.moduleId = 0);
      }
      return (
        aa(n, [
          {
            key: "init",
            value: function (e, i) {
              var r = this,
                s = i || document,
                o = s.querySelectorAll("*");
              e && !this.app && (this.app = e),
                (this.activeModules.app = { app: this.app }),
                o.forEach(function (a) {
                  Array.from(a.attributes).forEach(function (l) {
                    if (l.name.startsWith("data-module")) {
                      var h = !1,
                        u = l.name.split("-").splice(2),
                        f = r.toCamel(u);
                      if (
                        (r.modules[f]
                          ? (h = !0)
                          : r.modules[r.toUpper(f)] &&
                            ((f = r.toUpper(f)), (h = !0)),
                        h)
                      ) {
                        var c = { el: a, name: f, dataName: u.join("-") },
                          d = new r.modules[f](c),
                          g = l.value;
                        g ||
                          (r.moduleId++,
                          (g = "m" + r.moduleId),
                          a.setAttribute(l.name, g)),
                          r.addActiveModule(f, g, d);
                        var p = f + "-" + g;
                        i ? (r.newModules[p] = d) : (r.currentModules[p] = d);
                      }
                    }
                  });
                }),
                Object.entries(this.currentModules).forEach(function (a) {
                  var l = ss(a, 2),
                    h = l[0],
                    u = l[1];
                  if (i) {
                    var f = h.split("-"),
                      c = f.shift(),
                      d = f.pop();
                    r.addActiveModule(c, d, u);
                  } else r.initModule(u);
                });
            },
          },
          {
            key: "initModule",
            value: function (e) {
              e.mInit(this.activeModules), e.init();
            },
          },
          {
            key: "addActiveModule",
            value: function (e, i, r) {
              this.activeModules[e]
                ? Object.assign(this.activeModules[e], na({}, i, r))
                : (this.activeModules[e] = na({}, i, r));
            },
          },
          {
            key: "update",
            value: function (e) {
              var i = this;
              this.init(this.app, e),
                Object.entries(this.currentModules).forEach(function (r) {
                  var s = ss(r, 2),
                    o = s[0],
                    a = s[1];
                  a.mUpdate(i.activeModules);
                }),
                Object.entries(this.newModules).forEach(function (r) {
                  var s = ss(r, 2),
                    o = s[0],
                    a = s[1];
                  i.initModule(a);
                }),
                Object.assign(this.currentModules, this.newModules);
            },
          },
          {
            key: "destroy",
            value: function (e) {
              e ? this.destroyScope(e) : this.destroyModules();
            },
          },
          {
            key: "destroyScope",
            value: function (e) {
              var i = this,
                r = e.querySelectorAll("*");
              r.forEach(function (s) {
                Array.from(s.attributes).forEach(function (o) {
                  if (o.name.startsWith("data-module")) {
                    var a = o.value,
                      l = o.name.split("-").splice(2),
                      h = i.toCamel(l) + "-" + a,
                      u = !1;
                    i.currentModules[h]
                      ? (u = !0)
                      : i.currentModules[i.toUpper(h)] &&
                        ((h = i.toUpper(h)), (u = !0)),
                      u &&
                        (i.destroyModule(i.currentModules[h]),
                        delete i.currentModules[h]);
                  }
                });
              }),
                (this.activeModules = {}),
                (this.newModules = {});
            },
          },
          {
            key: "destroyModules",
            value: function () {
              var e = this;
              Object.entries(this.currentModules).forEach(function (i) {
                var r = ss(i, 2),
                  s = r[0],
                  o = r[1];
                e.destroyModule(o);
              }),
                (this.currentModules = []);
            },
          },
          {
            key: "destroyModule",
            value: function (e) {
              e.mDestroy(), e.destroy();
            },
          },
          {
            key: "toCamel",
            value: function (e) {
              var i = this;
              return e.reduce(function (r, s) {
                return r + i.toUpper(s);
              });
            },
          },
          {
            key: "toUpper",
            value: function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1);
            },
          },
        ]),
        n
      );
    })(),
    ha = Bh;
  var Zo = {};
  Eh(Zo, {
    Accordion: () => _n,
    Dance: () => mn,
    Door: () => cn,
    Drinks: () => gn,
    Elephant: () => un,
    FancyTitle: () => dn,
    Jobs: () => xn,
    Load: () => Cs,
    Nav: () => on,
    NavButton: () => nn,
    Popup: () => Tn,
    Rail: () => sn,
    Scroll: () => tn,
    Split: () => rn,
    Stats: () => yn,
    Theme: () => vn,
    Timeline: () => en,
    VideoCover: () => fn,
    Y: () => pn,
  });
  function Wh(n, t) {
    if (!(n instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ua(n, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function Hh(n, t, e) {
    return t && ua(n.prototype, t), e && ua(n, e), n;
  }
  function $h(n, t) {
    return Yh(n) || Gh(n, t) || Xh(n, t) || Uh();
  }
  function Yh(n) {
    if (Array.isArray(n)) return n;
  }
  function Gh(n, t) {
    var e =
      n == null
        ? null
        : (typeof Symbol != "undefined" && n[Symbol.iterator]) ||
          n["@@iterator"];
    if (e != null) {
      var i = [],
        r = !0,
        s = !1,
        o,
        a;
      try {
        for (
          e = e.call(n);
          !(r = (o = e.next()).done) &&
          (i.push(o.value), !(t && i.length === t));
          r = !0
        );
      } catch (l) {
        (s = !0), (a = l);
      } finally {
        try {
          !r && e.return != null && e.return();
        } finally {
          if (s) throw a;
        }
      }
      return i;
    }
  }
  function Xh(n, t) {
    if (!!n) {
      if (typeof n == "string") return ca(n, t);
      var e = Object.prototype.toString.call(n).slice(8, -1);
      if (
        (e === "Object" && n.constructor && (e = n.constructor.name),
        e === "Map" || e === "Set")
      )
        return Array.from(n);
      if (
        e === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
      )
        return ca(n, t);
    }
  }
  function ca(n, t) {
    (t == null || t > n.length) && (t = n.length);
    for (var e = 0, i = new Array(t); e < t; e++) i[e] = n[e];
    return i;
  }
  function Uh() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var Vh = (function () {
      function n(t) {
        Wh(this, n),
          (this.defaults = {
            name: "load",
            loadingClass: "is-loading",
            loadedClass: "is-loaded",
            readyClass: "is-ready",
            transitionsPrefix: "is-",
            transitionsHistory: !0,
            enterDelay: 0,
            exitDelay: 0,
            loadedDelay: 0,
            isLoaded: !1,
            isEntered: !1,
            isUrl: !1,
            transitionContainer: null,
            popstateIgnore: !1,
          }),
          Object.assign(this, this.defaults, t),
          (this.options = t),
          (this.namespace = "modular"),
          (this.html = document.documentElement),
          (this.href = window.location.href),
          (this.container = "data-" + this.name + "-container"),
          (this.subContainer = !1),
          (this.prevTransition = null),
          (this.loadAttributes = ["src", "srcset", "style", "href"]),
          (this.isInserted = !1),
          (this.isLoading = !1),
          (this.enterTimeout = !1),
          (this.controller = new AbortController()),
          (this.classContainer = this.html),
          (this.isChrome = navigator.userAgent.indexOf("Chrome") != -1),
          this.init();
      }
      return (
        Hh(n, [
          {
            key: "init",
            value: function () {
              var e = this;
              window.addEventListener(
                "popstate",
                function (i) {
                  return e.checkState(i);
                },
                !1
              ),
                this.html.addEventListener(
                  "click",
                  function (i) {
                    return e.checkClick(i);
                  },
                  !1
                ),
                this.loadEls(document);
            },
          },
          {
            key: "checkClick",
            value: function (e) {
              if (!e.ctrlKey && !e.metaKey)
                for (var i = e.target; i && i !== document; ) {
                  if (i.matches("a") && i.getAttribute("download") == null) {
                    var r = i.getAttribute("href");
                    !r.startsWith("#") &&
                      !r.startsWith("mailto:") &&
                      !r.startsWith("tel:") &&
                      (e.preventDefault(),
                      this.reset(),
                      this.getClickOptions(i));
                    break;
                  }
                  i = i.parentNode;
                }
            },
          },
          {
            key: "checkState",
            value: function () {
              (typeof this.popstateIgnore == "string" &&
                window.location.href.indexOf(this.popstateIgnore) > -1) ||
                (this.reset(), this.getStateOptions());
            },
          },
          {
            key: "reset",
            value: function () {
              this.isLoading &&
                (this.controller.abort(),
                (this.isLoading = !1),
                (this.controller = new AbortController())),
                window.clearTimeout(this.enterTimeout),
                this.isInserted && this.removeContainer(),
                (this.classContainer = this.html),
                Object.assign(this, this.defaults, this.options);
            },
          },
          {
            key: "getClickOptions",
            value: function (e) {
              (this.transition = e.getAttribute("data-" + this.name)),
                (this.isUrl = e.getAttribute("data-" + this.name + "-url"));
              var i = e.getAttribute("href"),
                r = e.getAttribute("target");
              if (r == "_blank") {
                window.open(i, "_blank");
                return;
              }
              if (this.transition == "false") {
                window.location = i;
                return;
              }
              this.setOptions(i, !0);
            },
          },
          {
            key: "getStateOptions",
            value: function () {
              this.transitionsHistory
                ? (this.transition = history.state)
                : (this.transition = !1);
              var e = window.location.href;
              this.setOptions(e);
            },
          },
          {
            key: "goTo",
            value: function (e, i, r) {
              this.reset(),
                (this.transition = i),
                (this.isUrl = r),
                this.setOptions(e, !0);
            },
          },
          {
            key: "setOptions",
            value: function (e, i) {
              var r = "[" + this.container + "]",
                s;
              this.transition &&
                this.transition != "true" &&
                ((this.transitionContainer =
                  "[" + this.container + '="' + this.transition + '"]'),
                (this.loadingClass =
                  this.transitions[this.transition].loadingClass ||
                  this.loadingClass),
                (this.loadedClass =
                  this.transitions[this.transition].loadedClass ||
                  this.loadedClass),
                (this.readyClass =
                  this.transitions[this.transition].readyClass ||
                  this.readyClass),
                (this.transitionsPrefix =
                  this.transitions[this.transition].transitionsPrefix ||
                  this.transitionsPrefix),
                (this.enterDelay =
                  this.transitions[this.transition].enterDelay ||
                  this.enterDelay),
                (this.exitDelay =
                  this.transitions[this.transition].exitDelay ||
                  this.exitDelay),
                (this.loadedDelay =
                  this.transitions[this.transition].loadedDelay ||
                  this.loadedDelay),
                (s = document.querySelector(this.transitionContainer))),
                s
                  ? ((r = this.transitionContainer),
                    (this.oldContainer = s),
                    (this.classContainer = this.oldContainer.parentNode),
                    this.subContainer ||
                      history.replaceState(this.transition, null, this.href),
                    (this.subContainer = !0))
                  : ((this.oldContainer = document.querySelector(r)),
                    this.subContainer &&
                      history.replaceState(
                        this.prevTransition,
                        null,
                        this.href
                      ),
                    (this.subContainer = !1)),
                (this.href = e),
                (this.parentContainer = this.oldContainer.parentNode),
                this.isUrl === "" ||
                (this.isUrl != null &&
                  this.isUrl != "false" &&
                  this.isUrl != !1)
                  ? history.pushState(this.transition, null, e)
                  : (this.oldContainer.classList.add("is-old"),
                    this.setLoading(),
                    this.startEnterDelay(),
                    this.loadHref(e, r, i));
            },
          },
          {
            key: "setLoading",
            value: function () {
              this.classContainer.classList.remove(
                this.loadedClass,
                this.readyClass
              ),
                this.classContainer.classList.add(this.loadingClass),
                this.classContainer.classList.remove(
                  this.transitionsPrefix + this.prevTransition
                ),
                this.transition &&
                  this.classContainer.classList.add(
                    this.transitionsPrefix + this.transition
                  ),
                this.subContainer || (this.prevTransition = this.transition);
              var e = new Event(this.namespace + "loading");
              window.dispatchEvent(e);
            },
          },
          {
            key: "startEnterDelay",
            value: function () {
              var e = this;
              this.enterTimeout = window.setTimeout(function () {
                (e.isEntered = !0), e.isLoaded && e.transitionContainers();
              }, this.enterDelay);
            },
          },
          {
            key: "loadHref",
            value: function (e, i, r) {
              var s = this;
              this.isLoading = !0;
              var o = this.controller.signal;
              fetch(e, { signal: o })
                .then(function (a) {
                  return a.text();
                })
                .then(function (a) {
                  r && history.pushState(s.transition, null, e);
                  var l = new DOMParser();
                  (s.data = l.parseFromString(a, "text/html")),
                    (s.newContainer = s.data.querySelector(i)),
                    s.newContainer.classList.add("is-new"),
                    (s.parentNewContainer = s.newContainer.parentNode),
                    s.hideContainer(),
                    s.parentContainer.insertBefore(
                      s.newContainer,
                      s.oldContainer
                    ),
                    (s.isInserted = !0),
                    s.setSvgs(),
                    (s.isLoaded = !0),
                    s.isEntered && s.transitionContainers(),
                    s.loadEls(s.newContainer),
                    (s.isLoading = !1);
                })
                .catch(function (a) {
                  window.location = e;
                });
            },
          },
          {
            key: "transitionContainers",
            value: function () {
              var e = this;
              this.setAttributes(),
                this.showContainer(),
                this.setLoaded(),
                setTimeout(function () {
                  e.removeContainer(), e.setReady();
                }, this.exitDelay);
            },
          },
          {
            key: "setSvgs",
            value: function () {
              if (this.isChrome) {
                var e = this.newContainer.querySelectorAll("use");
                e.length &&
                  e.forEach(function (i) {
                    var r = i.getAttribute("xlink:href");
                    if (r)
                      i.parentNode.innerHTML =
                        '<use xlink:href="' + r + '"></use>';
                    else {
                      var s = i.getAttribute("href");
                      s &&
                        (i.parentNode.innerHTML =
                          '<use href="' + s + '"></use>');
                    }
                  });
              }
            },
          },
          {
            key: "setAttributes",
            value: function () {
              var e = this,
                i = this.data.getElementsByTagName("title")[0],
                r = this.data.head.querySelector('meta[name="description"]'),
                s = document.head.querySelector('meta[name="description"]'),
                o,
                a;
              this.subContainer
                ? ((a = this.parentNewContainer),
                  (o = document.querySelector(
                    this.transitionContainer
                  ).parentNode))
                : ((a = this.data.querySelector("html")),
                  (o = document.querySelector("html")));
              var l = Object.assign({}, a.dataset);
              i && (document.title = i.innerText),
                s && r && s.setAttribute("content", r.getAttribute("content")),
                l &&
                  Object.entries(l).forEach(function (h) {
                    var u = $h(h, 2),
                      f = u[0],
                      c = u[1];
                    o.setAttribute("data-" + e.toDash(f), c);
                  });
            },
          },
          {
            key: "toDash",
            value: function (e) {
              return e
                .split(/(?=[A-Z])/)
                .join("-")
                .toLowerCase();
            },
          },
          {
            key: "hideContainer",
            value: function () {
              (this.newContainer.style.visibility = "hidden"),
                (this.newContainer.style.height = 0),
                (this.newContainer.style.overflow = "hidden");
            },
          },
          {
            key: "showContainer",
            value: function () {
              (this.newContainer.style.visibility = ""),
                (this.newContainer.style.height = ""),
                (this.newContainer.style.overflow = "");
            },
          },
          {
            key: "loadEls",
            value: function (e) {
              var i = this,
                r = [];
              this.loadAttributes.forEach(function (s) {
                var o = "data-" + i.name + "-" + s,
                  a = e.querySelectorAll("[" + o + "]");
                a.length &&
                  a.forEach(function (l) {
                    var h = l.getAttribute(o);
                    if ((l.setAttribute(s, h), s == "src" || s == "srcset")) {
                      var u = new Promise(function (f) {
                        l.onload = function () {
                          return f(l);
                        };
                      });
                      r.push(u);
                    }
                  });
              }),
                Promise.all(r).then(function (s) {
                  var o = new Event(i.namespace + "images");
                  window.dispatchEvent(o);
                });
            },
          },
          {
            key: "setLoaded",
            value: function () {
              var e = this;
              this.classContainer.classList.remove(this.loadingClass),
                setTimeout(function () {
                  e.classContainer.classList.add(e.loadedClass);
                }, this.loadedDelay);
              var i = new Event(this.namespace + "loaded");
              window.dispatchEvent(i);
            },
          },
          {
            key: "removeContainer",
            value: function () {
              this.parentContainer.removeChild(this.oldContainer),
                this.newContainer.classList.remove("is-new"),
                (this.isInserted = !1);
            },
          },
          {
            key: "setReady",
            value: function () {
              this.classContainer.classList.add(this.readyClass);
              var e = new Event(this.namespace + "ready");
              window.dispatchEvent(e);
            },
          },
          {
            key: "on",
            value: function (e, i) {
              var r = this;
              window.addEventListener(
                this.namespace + e,
                function () {
                  switch (e) {
                    case "loading":
                      return i(r.transition, r.oldContainer);
                    case "loaded":
                      return i(r.transition, r.oldContainer, r.newContainer);
                    case "ready":
                      return i(r.transition, r.newContainer);
                    default:
                      return i();
                  }
                },
                !1
              );
            },
          },
        ]),
        n
      );
    })(),
    fa = Vh;
  function ai(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function wa(n, t) {
    (n.prototype = Object.create(t.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = t);
  }
  var ve = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    sr = { duration: 0.5, overwrite: !1, delay: 0 },
    Xn,
    _e,
    Lt,
    Oe = 1e8,
    st = 1 / Oe,
    Rn = Math.PI * 2,
    qh = Rn / 4,
    jh = 0,
    ba = Math.sqrt,
    Kh = Math.cos,
    Qh = Math.sin,
    Wt = function (t) {
      return typeof t == "string";
    },
    bt = function (t) {
      return typeof t == "function";
    },
    hi = function (t) {
      return typeof t == "number";
    },
    _s = function (t) {
      return typeof t == "undefined";
    },
    Je = function (t) {
      return typeof t == "object";
    },
    me = function (t) {
      return t !== !1;
    },
    xa = function () {
      return typeof window != "undefined";
    },
    os = function (t) {
      return bt(t) || Wt(t);
    },
    Ta =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Qt = Array.isArray,
    In = /(?:-?\.?\d|\.)+/gi,
    Un = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Bi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    An = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Vn = /[+-]=-?[.\d]+/,
    Sa = /[^,'"\[\]\s]+/gi,
    Jh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    gt,
    Le,
    zn,
    qn,
    Te = {},
    us = {},
    Ca,
    ka = function (t) {
      return (us = Ni(t, Te)) && ee;
    },
    ms = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    cs = function (t, e) {
      return !e && console.warn(t);
    },
    Aa = function (t, e) {
      return (t && (Te[t] = e) && us && (us[t] = e)) || Te;
    },
    Pr = function () {
      return 0;
    },
    Zh = { suppressEvents: !0, isStart: !0, kill: !1 },
    as = { suppressEvents: !0, kill: !1 },
    tu = { suppressEvents: !0 },
    jn = {},
    xi = [],
    Fn = {},
    Ma,
    pe = {},
    Mn = {},
    da = 30,
    ls = [],
    Kn = "",
    Qn = function (t) {
      var e = t[0],
        i,
        r;
      if ((Je(e) || bt(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
        for (r = ls.length; r-- && !ls[r].targetTest(e); );
        i = ls[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new to(t[r], i)))) ||
          t.splice(r, 1);
      return t;
    },
    Ti = function (t) {
      return t._gsap || Qn(Pe(t))[0]._gsap;
    },
    Jn = function (t, e, i) {
      return (i = t[e]) && bt(i)
        ? t[e]()
        : (_s(i) && t.getAttribute && t.getAttribute(e)) || i;
    },
    ie = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    xt = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Yt = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Wi = function (t, e) {
      var i = e.charAt(0),
        r = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
      );
    },
    eu = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i;
    },
    fs = function () {
      var t = xi.length,
        e = xi.slice(0),
        i,
        r;
      for (Fn = {}, xi.length = 0, i = 0; i < t; i++)
        (r = e[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    Ea = function (t, e, i, r) {
      xi.length && fs(),
        t.render(e, i, r || (_e && e < 0 && (t._initted || t._startAt))),
        xi.length && fs();
    },
    Da = function (t) {
      var e = parseFloat(t);
      return (e || e === 0) && (t + "").match(Sa).length < 2
        ? e
        : Wt(t)
        ? t.trim()
        : t;
    },
    La = function (t) {
      return t;
    },
    Ie = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    iu = function (t) {
      return function (e, i) {
        for (var r in i)
          r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
      };
    },
    Ni = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    pa = function n(t, e) {
      for (var i in e)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (t[i] = Je(e[i]) ? n(t[i] || (t[i] = {}), e[i]) : e[i]);
      return t;
    },
    ds = function (t, e) {
      var i = {},
        r;
      for (r in t) r in e || (i[r] = t[r]);
      return i;
    },
    Dr = function (t) {
      var e = t.parent || gt,
        i = t.keyframes ? iu(Qt(t.keyframes)) : Ie;
      if (me(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    ru = function (t, e) {
      for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
      return i < 0;
    },
    Oa = function (t, e, i, r, s) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var o = t[r],
        a;
      if (s) for (a = e[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[i]), (t[i] = e)),
        e._next ? (e._next._prev = e) : (t[r] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    vs = function (t, e, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = e._prev,
        o = e._next;
      s ? (s._next = o) : t[i] === e && (t[i] = o),
        o ? (o._prev = s) : t[r] === e && (t[r] = s),
        (e._next = e._prev = e.parent = null);
    },
    Si = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    zi = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    su = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Nn = function (t, e, i, r) {
      return (
        t._startAt &&
        (_e
          ? t._startAt.revert(as)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, r))
      );
    },
    nu = function n(t) {
      return !t || (t._ts && n(t.parent));
    },
    ga = function (t) {
      return t._repeat ? nr(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    nr = function (t, e) {
      var i = Math.floor((t /= e));
      return t && i === t ? i - 1 : i;
    },
    ps = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    ys = function (t) {
      return (t._end = Yt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0)
      ));
    },
    ws = function (t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = Yt(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          ys(t),
          i._dirty || zi(i, t)),
        t
      );
    },
    Pa = function (t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = ps(t.rawTime(), e)),
          (!e._dur || Ir(0, e.totalDuration(), i) - e._tTime > st) &&
            e.render(i, !0)),
        zi(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -st;
      }
    },
    Qe = function (t, e, i, r) {
      return (
        e.parent && Si(e),
        (e._start = Yt(
          (hi(i) ? i : i || t !== gt ? De(t, i, e) : t._time) + e._delay
        )),
        (e._end = Yt(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        Oa(t, e, "_first", "_last", t._sort ? "_start" : 0),
        Bn(e) || (t._recent = e),
        r || Pa(t, e),
        t._ts < 0 && ws(t, t._tTime),
        t
      );
    },
    Ra = function (t, e) {
      return (
        (Te.ScrollTrigger || ms("scrollTrigger", e)) &&
        Te.ScrollTrigger.create(e, t)
      );
    },
    Ia = function (t, e, i, r, s) {
      if ((ro(t, e, s), !t._initted)) return 1;
      if (
        !i &&
        t._pt &&
        !_e &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Ma !== ge.frame
      )
        return xi.push(t), (t._lazy = [s, r]), 1;
    },
    ou = function n(t) {
      var e = t.parent;
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e));
    },
    Bn = function (t) {
      var e = t.data;
      return e === "isFromStart" || e === "isStart";
    },
    au = function (t, e, i, r) {
      var s = t.ratio,
        o =
          e < 0 ||
          (!e &&
            ((!t._start && ou(t) && !(!t._initted && Bn(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !Bn(t))))
            ? 0
            : 1,
        a = t._rDelay,
        l = 0,
        h,
        u,
        f;
      if (
        (a &&
          t._repeat &&
          ((l = Ir(0, t._tDur, e)),
          (u = nr(l, a)),
          t._yoyo && u & 1 && (o = 1 - o),
          u !== nr(t._tTime, a) &&
            ((s = 1 - o),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        o !== s || _e || r || t._zTime === st || (!e && t._zTime))
      ) {
        if (!t._initted && Ia(t, e, r, i, l)) return;
        for (
          f = t._zTime,
            t._zTime = e || (i ? st : 0),
            i || (i = e && !f),
            t.ratio = o,
            t._from && (o = 1 - o),
            t._time = 0,
            t._tTime = l,
            h = t._pt;
          h;

        )
          h.r(o, h.d), (h = h._next);
        e < 0 && Nn(t, e, i, !0),
          t._onUpdate && !i && Re(t, "onUpdate"),
          l && t._repeat && !i && t.parent && Re(t, "onRepeat"),
          (e >= t._tDur || e < 0) &&
            t.ratio === o &&
            (o && Si(t, 1),
            !i &&
              !_e &&
              (Re(t, o ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    lu = function (t, e, i) {
      var r;
      if (i > e)
        for (r = t._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > e) return r;
          r = r._next;
        }
      else
        for (r = t._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < e) return r;
          r = r._prev;
        }
    },
    or = function (t, e, i, r) {
      var s = t._repeat,
        o = Yt(e) || 0,
        a = t._tTime / t._tDur;
      return (
        a && !r && (t._time *= o / t._dur),
        (t._dur = o),
        (t._tDur = s ? (s < 0 ? 1e10 : Yt(o * (s + 1) + t._rDelay * s)) : o),
        a > 0 && !r && ws(t, (t._tTime = t._tDur * a)),
        t.parent && ys(t),
        i || zi(t.parent, t),
        t
      );
    },
    _a = function (t) {
      return t instanceof Kt ? zi(t) : or(t, t._dur);
    },
    hu = { _start: 0, endTime: Pr, totalDuration: Pr },
    De = function n(t, e, i) {
      var r = t.labels,
        s = t._recent || hu,
        o = t.duration() >= Oe ? s.endTime(!1) : t._dur,
        a,
        l,
        h;
      return Wt(e) && (isNaN(e) || e in r)
        ? ((l = e.charAt(0)),
          (h = e.substr(-1) === "%"),
          (a = e.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (e = e.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(e.substr(1)) || 0) *
                  (h ? (a < 0 ? s : i).totalDuration() / 100 : 1))
            : a < 0
            ? (e in r || (r[e] = o), r[e])
            : ((l = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
              h && i && (l = (l / 100) * (Qt(i) ? i[0] : i).totalDuration()),
              a > 1 ? n(t, e.substr(0, a - 1), i) + l : o + l))
        : e == null
        ? o
        : +e;
    },
    Lr = function (t, e, i) {
      var r = hi(e[1]),
        s = (r ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[s],
        a,
        l;
      if ((r && (o.duration = e[1]), (o.parent = i), t)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = me(l.vars.inherit) && l.parent);
        (o.immediateRender = me(a.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
      }
      return new Dt(e[0], o, e[s + 1]);
    },
    Ci = function (t, e) {
      return t || t === 0 ? e(t) : e;
    },
    Ir = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    Gt = function (t, e) {
      return !Wt(t) || !(e = Jh.exec(t)) ? "" : e[1];
    },
    uu = function (t, e, i) {
      return Ci(i, function (r) {
        return Ir(t, e, r);
      });
    },
    Wn = [].slice,
    za = function (t, e) {
      return (
        t &&
        Je(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && Je(t[0]))) &&
        !t.nodeType &&
        t !== Le
      );
    },
    cu = function (t, e, i) {
      return (
        i === void 0 && (i = []),
        t.forEach(function (r) {
          var s;
          return (Wt(r) && !e) || za(r, 1)
            ? (s = i).push.apply(s, Pe(r))
            : i.push(r);
        }) || i
      );
    },
    Pe = function (t, e, i) {
      return Lt && !e && Lt.selector
        ? Lt.selector(t)
        : Wt(t) && !i && (zn || !ar())
        ? Wn.call((e || qn).querySelectorAll(t), 0)
        : Qt(t)
        ? cu(t, i)
        : za(t)
        ? Wn.call(t, 0)
        : t
        ? [t]
        : [];
    },
    Hn = function (t) {
      return (
        (t = Pe(t)[0] || cs("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return Pe(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? cs("Invalid scope") || qn.createElement("div")
              : t
          );
        }
      );
    },
    Fa = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Na = function (t) {
      if (bt(t)) return t;
      var e = Je(t) ? t : { each: t },
        i = Fi(e.ease),
        r = e.from || 0,
        s = parseFloat(e.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        h = e.axis,
        u = r,
        f = r;
      return (
        Wt(r)
          ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((u = r[0]), (f = r[1])),
        function (c, d, g) {
          var p = (g || e).length,
            _ = o[p],
            m,
            b,
            T,
            y,
            x,
            k,
            w,
            A,
            C;
          if (!_) {
            if (((C = e.grid === "auto" ? 0 : (e.grid || [1, Oe])[1]), !C)) {
              for (
                w = -Oe;
                w < (w = g[C++].getBoundingClientRect().left) && C < p;

              );
              C--;
            }
            for (
              _ = o[p] = [],
                m = l ? Math.min(C, p) * u - 0.5 : r % C,
                b = C === Oe ? 0 : l ? (p * f) / C - 0.5 : (r / C) | 0,
                w = 0,
                A = Oe,
                k = 0;
              k < p;
              k++
            )
              (T = (k % C) - m),
                (y = b - ((k / C) | 0)),
                (_[k] = x =
                  h ? Math.abs(h === "y" ? y : T) : ba(T * T + y * y)),
                x > w && (w = x),
                x < A && (A = x);
            r === "random" && Fa(_),
              (_.max = w - A),
              (_.min = A),
              (_.v = p =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (C > p
                      ? p - 1
                      : h
                      ? h === "y"
                        ? p / C
                        : C
                      : Math.max(C, p / C)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (_.b = p < 0 ? s - p : s),
              (_.u = Gt(e.amount || e.each) || 0),
              (i = i && p < 0 ? Xa(i) : i);
          }
          return (
            (p = (_[c] - _.min) / _.max || 0),
            Yt(_.b + (i ? i(p) : p) * _.v) + _.u
          );
        }
      );
    },
    $n = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var r = Yt(Math.round(parseFloat(i) / t) * t * e);
        return (r - (r % 1)) / e + (hi(i) ? 0 : Gt(i));
      };
    },
    Ba = function (t, e) {
      var i = Qt(t),
        r,
        s;
      return (
        !i &&
          Je(t) &&
          ((r = i = t.radius || Oe),
          t.values
            ? ((t = Pe(t.values)), (s = !hi(t[0])) && (r *= r))
            : (t = $n(t.increment))),
        Ci(
          e,
          i
            ? bt(t)
              ? function (o) {
                  return (s = t(o)), Math.abs(s - o) <= r ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      h = Oe,
                      u = 0,
                      f = t.length,
                      c,
                      d;
                    f--;

                  )
                    s
                      ? ((c = t[f].x - a),
                        (d = t[f].y - l),
                        (c = c * c + d * d))
                      : (c = Math.abs(t[f] - a)),
                      c < h && ((h = c), (u = f));
                  return (
                    (u = !r || h <= r ? t[u] : o),
                    s || u === o || hi(o) ? u : u + Gt(o)
                  );
                }
            : $n(t)
        )
      );
    },
    Wa = function (t, e, i, r) {
      return Ci(Qt(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
        return Qt(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - i / 2 + Math.random() * (e - t + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    fu = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (r) {
        return e.reduce(function (s, o) {
          return o(s);
        }, r);
      };
    },
    du = function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || Gt(i));
      };
    },
    pu = function (t, e, i) {
      return $a(t, e, 0, 1, i);
    },
    Ha = function (t, e, i) {
      return Ci(i, function (r) {
        return t[~~e(r)];
      });
    },
    gu = function n(t, e, i) {
      var r = e - t;
      return Qt(t)
        ? Ha(t, n(0, t.length), e)
        : Ci(i, function (s) {
            return ((r + ((s - t) % r)) % r) + t;
          });
    },
    _u = function n(t, e, i) {
      var r = e - t,
        s = r * 2;
      return Qt(t)
        ? Ha(t, n(0, t.length - 1), e)
        : Ci(i, function (o) {
            return (o = (s + ((o - t) % s)) % s || 0), t + (o > r ? s - o : o);
          });
    },
    ur = function (t) {
      for (var e = 0, i = "", r, s, o, a; ~(r = t.indexOf("random(", e)); )
        (o = t.indexOf(")", r)),
          (a = t.charAt(r + 7) === "["),
          (s = t.substr(r + 7, o - r - 7).match(a ? Sa : In)),
          (i +=
            t.substr(e, r - e) +
            Wa(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (e = o + 1);
      return i + t.substr(e, t.length - e);
    },
    $a = function (t, e, i, r, s) {
      var o = e - t,
        a = r - i;
      return Ci(s, function (l) {
        return i + (((l - t) / o) * a || 0);
      });
    },
    mu = function n(t, e, i, r) {
      var s = isNaN(t + e)
        ? 0
        : function (d) {
            return (1 - d) * t + d * e;
          };
      if (!s) {
        var o = Wt(t),
          a = {},
          l,
          h,
          u,
          f,
          c;
        if ((i === !0 && (r = 1) && (i = null), o))
          (t = { p: t }), (e = { p: e });
        else if (Qt(t) && !Qt(e)) {
          for (u = [], f = t.length, c = f - 2, h = 1; h < f; h++)
            u.push(n(t[h - 1], t[h]));
          f--,
            (s = function (g) {
              g *= f;
              var p = Math.min(c, ~~g);
              return u[p](g - p);
            }),
            (i = e);
        } else r || (t = Ni(Qt(t) ? [] : {}, t));
        if (!u) {
          for (l in e) eo.call(a, t, l, "get", e[l]);
          s = function (g) {
            return oo(g, a) || (o ? t.p : t);
          };
        }
      }
      return Ci(i, s);
    },
    ma = function (t, e, i) {
      var r = t.labels,
        s = Oe,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - e),
          a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    Re = function (t, e, i) {
      var r = t.vars,
        s = r[e],
        o = Lt,
        a = t._ctx,
        l,
        h,
        u;
      if (!!s)
        return (
          (l = r[e + "Params"]),
          (h = r.callbackScope || t),
          i && xi.length && fs(),
          a && (Lt = a),
          (u = l ? s.apply(h, l) : s.call(h)),
          (Lt = o),
          u
        );
    },
    Mr = function (t) {
      return (
        Si(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!_e),
        t.progress() < 1 && Re(t, "onInterrupt"),
        t
      );
    },
    rr,
    vu = function (t) {
      t = (!t.name && t.default) || t;
      var e = t.name,
        i = bt(t),
        r =
          e && !i && t.init
            ? function () {
                this._props = [];
              }
            : t,
        s = {
          init: Pr,
          render: oo,
          add: eo,
          kill: Ru,
          modifier: Pu,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: bs, aliases: {}, register: 0 };
      if ((ar(), t !== r)) {
        if (pe[e]) return;
        Ie(r, Ie(ds(t, s), o)),
          Ni(r.prototype, Ni(s, ds(t, o))),
          (pe[(r.prop = e)] = r),
          t.targetTest && (ls.push(r), (jn[e] = 1)),
          (e =
            (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      Aa(e, r), t.register && t.register(ee, r, re);
    },
    at = 255,
    Er = {
      aqua: [0, at, at],
      lime: [0, at, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, at],
      navy: [0, 0, 128],
      white: [at, at, at],
      olive: [128, 128, 0],
      yellow: [at, at, 0],
      orange: [at, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [at, 0, 0],
      pink: [at, 192, 203],
      cyan: [0, at, at],
      transparent: [at, at, at, 0],
    },
    En = function (t, e, i) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : t * 3 < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          at +
          0.5) |
          0
      );
    },
    Ya = function (t, e, i) {
      var r = t ? (hi(t) ? [t >> 16, (t >> 8) & at, t & at] : 0) : Er.black,
        s,
        o,
        a,
        l,
        h,
        u,
        f,
        c,
        d,
        g;
      if (!r) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Er[t]))
          r = Er[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((s = t.charAt(1)),
              (o = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (r = parseInt(t.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & at, r & at, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (r = [t >> 16, (t >> 8) & at, t & at]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((r = g = t.match(In)), !e))
            (l = (+r[0] % 360) / 360),
              (h = +r[1] / 100),
              (u = +r[2] / 100),
              (o = u <= 0.5 ? u * (h + 1) : u + h - u * h),
              (s = u * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = En(l + 1 / 3, s, o)),
              (r[1] = En(l, s, o)),
              (r[2] = En(l - 1 / 3, s, o));
          else if (~t.indexOf("="))
            return (r = t.match(Un)), i && r.length < 4 && (r[3] = 1), r;
        } else r = t.match(In) || Er.transparent;
        r = r.map(Number);
      }
      return (
        e &&
          !g &&
          ((s = r[0] / at),
          (o = r[1] / at),
          (a = r[2] / at),
          (f = Math.max(s, o, a)),
          (c = Math.min(s, o, a)),
          (u = (f + c) / 2),
          f === c
            ? (l = h = 0)
            : ((d = f - c),
              (h = u > 0.5 ? d / (2 - f - c) : d / (f + c)),
              (l =
                f === s
                  ? (o - a) / d + (o < a ? 6 : 0)
                  : f === o
                  ? (a - s) / d + 2
                  : (s - o) / d + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(h * 100 + 0.5)),
          (r[2] = ~~(u * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Ga = function (t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(li).forEach(function (s) {
          var o = s.match(Bi) || [];
          e.push.apply(e, o), i.push((r += o.length + 1));
        }),
        (e.c = i),
        e
      );
    },
    va = function (t, e, i) {
      var r = "",
        s = (t + r).match(li),
        o = e ? "hsla(" : "rgba(",
        a = 0,
        l,
        h,
        u,
        f;
      if (!s) return t;
      if (
        ((s = s.map(function (c) {
          return (
            (c = Ya(c, e, 1)) &&
            o +
              (e
                ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3]
                : c.join(",")) +
              ")"
          );
        })),
        i && ((u = Ga(t)), (l = i.c), l.join(r) !== u.c.join(r)))
      )
        for (h = t.replace(li, "1").split(Bi), f = h.length - 1; a < f; a++)
          r +=
            h[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (u.length ? u : s.length ? s : i).shift());
      if (!h)
        for (h = t.split(li), f = h.length - 1; a < f; a++) r += h[a] + s[a];
      return r + h[f];
    },
    li = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Er) n += "|" + t + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    yu = /hsl[a]?\(/,
    Zn = function (t) {
      var e = t.join(" "),
        i;
      if (((li.lastIndex = 0), li.test(e)))
        return (
          (i = yu.test(e)),
          (t[1] = va(t[1], i)),
          (t[0] = va(t[0], i, Ga(t[1]))),
          !0
        );
    },
    Rr,
    ge = (function () {
      var n = Date.now,
        t = 500,
        e = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        o = s,
        a = [],
        l,
        h,
        u,
        f,
        c,
        d,
        g = function p(_) {
          var m = n() - r,
            b = _ === !0,
            T,
            y,
            x,
            k;
          if (
            (m > t && (i += m - e),
            (r += m),
            (x = r - i),
            (T = x - o),
            (T > 0 || b) &&
              ((k = ++f.frame),
              (c = x - f.time * 1e3),
              (f.time = x = x / 1e3),
              (o += T + (T >= s ? 4 : s - T)),
              (y = 1)),
            b || (l = h(p)),
            y)
          )
            for (d = 0; d < a.length; d++) a[d](x, c, k, _);
        };
      return (
        (f = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
          },
          deltaRatio: function (_) {
            return c / (1e3 / (_ || 60));
          },
          wake: function () {
            Ca &&
              (!zn &&
                xa() &&
                ((Le = zn = window),
                (qn = Le.document || {}),
                (Te.gsap = ee),
                (Le.gsapVersions || (Le.gsapVersions = [])).push(ee.version),
                ka(us || Le.GreenSockGlobals || (!Le.gsap && Le) || {}),
                (u = Le.requestAnimationFrame)),
              l && f.sleep(),
              (h =
                u ||
                function (_) {
                  return setTimeout(_, (o - f.time * 1e3 + 1) | 0);
                }),
              (Rr = 1),
              g(2));
          },
          sleep: function () {
            (u ? Le.cancelAnimationFrame : clearTimeout)(l), (Rr = 0), (h = Pr);
          },
          lagSmoothing: function (_, m) {
            (t = _ || 1 / st), (e = Math.min(m, t, 0));
          },
          fps: function (_) {
            (s = 1e3 / (_ || 240)), (o = f.time * 1e3 + s);
          },
          add: function (_, m, b) {
            var T = m
              ? function (y, x, k, w) {
                  _(y, x, k, w), f.remove(T);
                }
              : _;
            return f.remove(_), a[b ? "unshift" : "push"](T), ar(), T;
          },
          remove: function (_, m) {
            ~(m = a.indexOf(_)) && a.splice(m, 1) && d >= m && d--;
          },
          _listeners: a,
        }),
        f
      );
    })(),
    ar = function () {
      return !Rr && ge.wake();
    },
    q = {},
    wu = /^[\d.\-M][\d.\-,\s]/,
    bu = /["']/g,
    xu = function (t) {
      for (
        var e = {},
          i = t.substr(1, t.length - 3).split(":"),
          r = i[0],
          s = 1,
          o = i.length,
          a,
          l,
          h;
        s < o;
        s++
      )
        (l = i[s]),
          (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
          (h = l.substr(0, a)),
          (e[r] = isNaN(h) ? h.replace(bu, "").trim() : +h),
          (r = l.substr(a + 1).trim());
      return e;
    },
    Tu = function (t) {
      var e = t.indexOf("(") + 1,
        i = t.indexOf(")"),
        r = t.indexOf("(", e);
      return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
    },
    Su = function (t) {
      var e = (t + "").split("("),
        i = q[e[0]];
      return i && e.length > 1 && i.config
        ? i.config.apply(
            null,
            ~t.indexOf("{") ? [xu(e[1])] : Tu(t).split(",").map(Da)
          )
        : q._CE && wu.test(t)
        ? q._CE("", t)
        : i;
    },
    Xa = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Ua = function n(t, e) {
      for (var i = t._first, r; i; )
        i instanceof Kt
          ? n(i, e)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== e &&
            (i.timeline
              ? n(i.timeline, e)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = e))),
          (i = i._next);
    },
    Fi = function (t, e) {
      return (t && (bt(t) ? t : q[t] || Su(t))) || e;
    },
    Hi = function (t, e, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - e(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
          });
      var s = { easeIn: e, easeOut: i, easeInOut: r },
        o;
      return (
        ie(t, function (a) {
          (q[a] = Te[a] = s), (q[(o = a.toLowerCase())] = i);
          for (var l in s)
            q[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = q[a + "." + l] = s[l];
        }),
        s
      );
    },
    Va = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
      };
    },
    Dn = function n(t, e, i) {
      var r = e >= 1 ? e : 1,
        s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        o = (s / Rn) * (Math.asin(1 / r) || 0),
        a = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * Qh((u - o) * s) + 1;
        },
        l =
          t === "out"
            ? a
            : t === "in"
            ? function (h) {
                return 1 - a(1 - h);
              }
            : Va(a);
      return (
        (s = Rn / s),
        (l.config = function (h, u) {
          return n(t, h, u);
        }),
        l
      );
    },
    Ln = function n(t, e) {
      e === void 0 && (e = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
        },
        r =
          t === "out"
            ? i
            : t === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : Va(i);
      return (
        (r.config = function (s) {
          return n(t, s);
        }),
        r
      );
    };
  ie("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, t) {
    var e = t < 5 ? t + 1 : t;
    Hi(
      n + ",Power" + (e - 1),
      t
        ? function (i) {
            return Math.pow(i, e);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, e);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, e) / 2
          : 1 - Math.pow((1 - i) * 2, e) / 2;
      }
    );
  });
  q.Linear.easeNone = q.none = q.Linear.easeIn;
  Hi("Elastic", Dn("in"), Dn("out"), Dn());
  (function (n, t) {
    var e = 1 / t,
      i = 2 * e,
      r = 2.5 * e,
      s = function (a) {
        return a < e
          ? n * a * a
          : a < i
          ? n * Math.pow(a - 1.5 / t, 2) + 0.75
          : a < r
          ? n * (a -= 2.25 / t) * a + 0.9375
          : n * Math.pow(a - 2.625 / t, 2) + 0.984375;
      };
    Hi(
      "Bounce",
      function (o) {
        return 1 - s(1 - o);
      },
      s
    );
  })(7.5625, 2.75);
  Hi("Expo", function (n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0;
  });
  Hi("Circ", function (n) {
    return -(ba(1 - n * n) - 1);
  });
  Hi("Sine", function (n) {
    return n === 1 ? 1 : -Kh(n * qh) + 1;
  });
  Hi("Back", Ln("in"), Ln("out"), Ln());
  q.SteppedEase =
    q.steps =
    Te.SteppedEase =
      {
        config: function (t, e) {
          t === void 0 && (t = 1);
          var i = 1 / t,
            r = t + (e ? 0 : 1),
            s = e ? 1 : 0,
            o = 1 - st;
          return function (a) {
            return (((r * Ir(0, o, a)) | 0) + s) * i;
          };
        },
      };
  sr.ease = q["quad.out"];
  ie(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (n) {
      return (Kn += n + "," + n + "Params,");
    }
  );
  var to = function (t, e) {
      (this.id = jh++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : Jn),
        (this.set = e ? e.getSetter : bs);
    },
    lr = (function () {
      function n(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
            ((this._rDelay = e.repeatDelay || 0),
            (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          or(this, +e.duration, 1, 1),
          (this.data = e.data),
          Lt && ((this._ctx = Lt), Lt.data.push(this)),
          Rr || ge.wake();
      }
      var t = n.prototype;
      return (
        (t.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (t.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              or(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (i, r) {
          if ((ar(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              ws(this, i), !s._dp || s.parent || Pa(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              Qe(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === st) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), Ea(this, i, r)),
            this
          );
        }),
        (t.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + ga(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (t.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (t.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  ga(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (t.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? nr(this._tTime, s) + 1
            : 1;
        }),
        (t.timeScale = function (i) {
          if (!arguments.length) return this._rts === -st ? 0 : this._rts;
          if (this._rts === i) return this;
          var r =
            this.parent && this._ts ? ps(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -st ? 0 : this._rts),
            this.totalTime(Ir(-this._delay, this._tDur, r), !0),
            ys(this),
            su(this)
          );
        }),
        (t.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ar(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== st &&
                        (this._tTime -= st)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && Qe(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (i) {
          return (
            this._start +
            (me(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? ps(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (i) {
          i === void 0 && (i = tu);
          var r = _e;
          return (
            (_e = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (_e = r),
            this
          );
        }),
        (t.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (r._ts || 1)), (r = r._dp);
          return !this.parent && this.vars.immediateRender ? -1 : s;
        }),
        (t.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), _a(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), _a(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (t.seek = function (i, r) {
          return this.totalTime(De(this, i), me(r));
        }),
        (t.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, me(r));
        }),
        (t.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -st : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -st), this;
        }),
        (t.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - st)
          );
        }),
        (t.eventCallback = function (i, r, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[i] = r),
                  s && (o[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete o[i],
              this)
            : o[i];
        }),
        (t.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var o = bt(i) ? i : La,
              a = function () {
                var h = r.then;
                (r.then = null),
                  bt(o) && (o = o(r)) && (o.then || o === r) && (r.then = h),
                  s(o),
                  (r.then = h);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a);
          });
        }),
        (t.kill = function () {
          Mr(this);
        }),
        n
      );
    })();
  Ie(lr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -st,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Kt = (function (n) {
    wa(t, n);
    function t(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = n.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = me(i.sortChildren)),
        gt && Qe(i.parent || gt, ai(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && Ra(ai(s), i.scrollTrigger),
        s
      );
    }
    var e = t.prototype;
    return (
      (e.to = function (r, s, o) {
        return Lr(0, arguments, this), this;
      }),
      (e.from = function (r, s, o) {
        return Lr(1, arguments, this), this;
      }),
      (e.fromTo = function (r, s, o, a) {
        return Lr(2, arguments, this), this;
      }),
      (e.set = function (r, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Dr(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Dt(r, s, De(this, o), 1),
          this
        );
      }),
      (e.call = function (r, s, o) {
        return Qe(this, Dt.delayedCall(0, r, s), o);
      }),
      (e.staggerTo = function (r, s, o, a, l, h, u) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = h),
          (o.onCompleteParams = u),
          (o.parent = this),
          new Dt(r, o, De(this, l)),
          this
        );
      }),
      (e.staggerFrom = function (r, s, o, a, l, h, u) {
        return (
          (o.runBackwards = 1),
          (Dr(o).immediateRender = me(o.immediateRender)),
          this.staggerTo(r, s, o, a, l, h, u)
        );
      }),
      (e.staggerFromTo = function (r, s, o, a, l, h, u, f) {
        return (
          (a.startAt = o),
          (Dr(a).immediateRender = me(a.immediateRender)),
          this.staggerTo(r, s, a, l, h, u, f)
        );
      }),
      (e.render = function (r, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          h = this._dur,
          u = r <= 0 ? 0 : Yt(r),
          f = this._zTime < 0 != r < 0 && (this._initted || !h),
          c,
          d,
          g,
          p,
          _,
          m,
          b,
          T,
          y,
          x,
          k,
          w;
        if (
          (this !== gt && u > l && r >= 0 && (u = l),
          u !== this._tTime || o || f)
        ) {
          if (
            (a !== this._time &&
              h &&
              ((u += this._time - a), (r += this._time - a)),
            (c = u),
            (y = this._start),
            (T = this._ts),
            (m = !T),
            f && (h || (a = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((k = this._yoyo),
              (_ = h + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(_ * 100 + r, s, o);
            if (
              ((c = Yt(u % _)),
              u === l
                ? ((p = this._repeat), (c = h))
                : ((p = ~~(u / _)),
                  p && p === u / _ && ((c = h), p--),
                  c > h && (c = h)),
              (x = nr(this._tTime, _)),
              !a && this._tTime && x !== p && (x = p),
              k && p & 1 && ((c = h - c), (w = 1)),
              p !== x && !this._lock)
            ) {
              var A = k && x & 1,
                C = A === (k && p & 1);
              if (
                (p < x && (A = !A),
                (a = A ? 0 : h),
                (this._lock = 1),
                (this.render(a || (w ? 0 : Yt(p * _)), s, !h)._lock = 0),
                (this._tTime = u),
                !s && this.parent && Re(this, "onRepeat"),
                this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  m !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((h = this._dur),
                (l = this._tDur),
                C &&
                  ((this._lock = 2),
                  (a = A ? h : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !w && this.invalidate()),
                (this._lock = 0),
                !this._ts && !m)
              )
                return this;
              Ua(this, w);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((b = lu(this, Yt(a), Yt(c))), b && (u -= c - (c = b._start))),
            (this._tTime = u),
            (this._time = c),
            (this._act = !T),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && c && !s && (Re(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (c >= a && r >= 0)
            for (d = this._first; d; ) {
              if (
                ((g = d._next), (d._act || c >= d._start) && d._ts && b !== d)
              ) {
                if (d.parent !== this) return this.render(r, s, o);
                if (
                  (d.render(
                    d._ts > 0
                      ? (c - d._start) * d._ts
                      : (d._dirty ? d.totalDuration() : d._tDur) +
                          (c - d._start) * d._ts,
                    s,
                    o
                  ),
                  c !== this._time || (!this._ts && !m))
                ) {
                  (b = 0), g && (u += this._zTime = -st);
                  break;
                }
              }
              d = g;
            }
          else {
            d = this._last;
            for (var M = r < 0 ? r : c; d; ) {
              if (
                ((g = d._prev), (d._act || M <= d._end) && d._ts && b !== d)
              ) {
                if (d.parent !== this) return this.render(r, s, o);
                if (
                  (d.render(
                    d._ts > 0
                      ? (M - d._start) * d._ts
                      : (d._dirty ? d.totalDuration() : d._tDur) +
                          (M - d._start) * d._ts,
                    s,
                    o || (_e && (d._initted || d._startAt))
                  ),
                  c !== this._time || (!this._ts && !m))
                ) {
                  (b = 0), g && (u += this._zTime = M ? -st : st);
                  break;
                }
              }
              d = g;
            }
          }
          if (
            b &&
            !s &&
            (this.pause(),
            (b.render(c >= a ? 0 : -st)._zTime = c >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = y), ys(this), this.render(r, s, o);
          this._onUpdate && !s && Re(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
              (y === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !h) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  Si(this, 1),
                !s &&
                  !(r < 0 && !a) &&
                  (u || a || !l) &&
                  (Re(
                    this,
                    u === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (e.add = function (r, s) {
        var o = this;
        if ((hi(s) || (s = De(this, s, r)), !(r instanceof lr))) {
          if (Qt(r))
            return (
              r.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Wt(r)) return this.addLabel(r, s);
          if (bt(r)) r = Dt.delayedCall(0, r);
          else return this;
        }
        return this !== r ? Qe(this, r, s) : this;
      }),
      (e.getChildren = function (r, s, o, a) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -Oe);
        for (var l = [], h = this._first; h; )
          h._start >= a &&
            (h instanceof Dt
              ? s && l.push(h)
              : (o && l.push(h),
                r && l.push.apply(l, h.getChildren(!0, s, o)))),
            (h = h._next);
        return l;
      }),
      (e.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === r) return s[o];
      }),
      (e.remove = function (r) {
        return Wt(r)
          ? this.removeLabel(r)
          : bt(r)
          ? this.killTweensOf(r)
          : (vs(this, r),
            r === this._recent && (this._recent = this._last),
            zi(this));
      }),
      (e.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Yt(
                ge.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            n.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function (r, s) {
        return (this.labels[r] = De(this, s)), this;
      }),
      (e.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (e.addPause = function (r, s, o) {
        var a = Dt.delayedCall(0, s || Pr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), Qe(this, a, De(this, r))
        );
      }),
      (e.removePause = function (r) {
        var s = this._first;
        for (r = De(this, r); s; )
          s._start === r && s.data === "isPause" && Si(s), (s = s._next);
      }),
      (e.killTweensOf = function (r, s, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          bi !== a[l] && a[l].kill(r, s);
        return this;
      }),
      (e.getTweensOf = function (r, s) {
        for (var o = [], a = Pe(r), l = this._first, h = hi(s), u; l; )
          l instanceof Dt
            ? eu(l._targets, a) &&
              (h
                ? (!bi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              o.push(l)
            : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
            (l = l._next);
        return o;
      }),
      (e.tweenTo = function (r, s) {
        s = s || {};
        var o = this,
          a = De(o, r),
          l = s,
          h = l.startAt,
          u = l.onStart,
          f = l.onStartParams,
          c = l.immediateRender,
          d,
          g = Dt.to(
            o,
            Ie(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (a - (h && "time" in h ? h.time : o._time)) / o.timeScale()
                  ) ||
                  st,
                onStart: function () {
                  if ((o.pause(), !d)) {
                    var _ =
                      s.duration ||
                      Math.abs(
                        (a - (h && "time" in h ? h.time : o._time)) /
                          o.timeScale()
                      );
                    g._dur !== _ && or(g, _, 0, 1).render(g._time, !0, !0),
                      (d = 1);
                  }
                  u && u.apply(g, f || []);
                },
              },
              s
            )
          );
        return c ? g.render(0) : g;
      }),
      (e.tweenFromTo = function (r, s, o) {
        return this.tweenTo(s, Ie({ startAt: { time: De(this, r) } }, o));
      }),
      (e.recent = function () {
        return this._recent;
      }),
      (e.nextLabel = function (r) {
        return r === void 0 && (r = this._time), ma(this, De(this, r));
      }),
      (e.previousLabel = function (r) {
        return r === void 0 && (r = this._time), ma(this, De(this, r), 1);
      }),
      (e.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + st);
      }),
      (e.shiftChildren = function (r, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, h; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (s) for (h in l) l[h] >= o && (l[h] += r);
        return zi(this);
      }),
      (e.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return n.prototype.invalidate.call(this, r);
      }),
      (e.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, o; s; )
          (o = s._next), this.remove(s), (s = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          zi(this)
        );
      }),
      (e.totalDuration = function (r) {
        var s = 0,
          o = this,
          a = o._last,
          l = Oe,
          h,
          u,
          f;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (f = o.parent; a; )
            (h = a._prev),
              a._dirty && a.totalDuration(),
              (u = a._start),
              u > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (Qe(o, a, u - a._delay, 1)._lock = 0))
                : (l = u),
              u < 0 &&
                a._ts &&
                ((s -= u),
                ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                  ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
                o.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = h);
          or(o, o === gt && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (t.updateRoot = function (r) {
        if ((gt._ts && (Ea(gt, ps(r, gt)), (Ma = ge.frame)), ge.frame >= da)) {
          da += ve.autoSleep || 120;
          var s = gt._first;
          if ((!s || !s._ts) && ve.autoSleep && ge._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || ge.sleep();
          }
        }
      }),
      t
    );
  })(lr);
  Ie(Kt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Cu = function (t, e, i, r, s, o, a) {
      var l = new re(this._pt, t, e, 0, 1, no, null, s),
        h = 0,
        u = 0,
        f,
        c,
        d,
        g,
        p,
        _,
        m,
        b;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (m = ~r.indexOf("random(")) && (r = ur(r)),
          o && ((b = [i, r]), o(b, t, e), (i = b[0]), (r = b[1])),
          c = i.match(An) || [];
        (f = An.exec(r));

      )
        (g = f[0]),
          (p = r.substring(h, f.index)),
          d ? (d = (d + 1) % 5) : p.substr(-5) === "rgba(" && (d = 1),
          g !== c[u++] &&
            ((_ = parseFloat(c[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || u === 1 ? p : ",",
              s: _,
              c: g.charAt(1) === "=" ? Wi(_, g) - _ : parseFloat(g) - _,
              m: d && d < 4 ? Math.round : 0,
            }),
            (h = An.lastIndex));
      return (
        (l.c = h < r.length ? r.substring(h, r.length) : ""),
        (l.fp = a),
        (Vn.test(r) || m) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    eo = function (t, e, i, r, s, o, a, l, h, u) {
      bt(r) && (r = r(s || 0, t, o));
      var f = t[e],
        c =
          i !== "get"
            ? i
            : bt(f)
            ? h
              ? t[
                  e.indexOf("set") || !bt(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](h)
              : t[e]()
            : f,
        d = bt(f) ? (h ? Du : Ka) : so,
        g;
      if (
        (Wt(r) &&
          (~r.indexOf("random(") && (r = ur(r)),
          r.charAt(1) === "=" &&
            ((g = Wi(c, r) + (Gt(c) || 0)), (g || g === 0) && (r = g))),
        !u || c !== r || Yn)
      )
        return !isNaN(c * r) && r !== ""
          ? ((g = new re(
              this._pt,
              t,
              e,
              +c || 0,
              r - (c || 0),
              typeof f == "boolean" ? Ou : Qa,
              0,
              d
            )),
            h && (g.fp = h),
            a && g.modifier(a, this, t),
            (this._pt = g))
          : (!f && !(e in t) && ms(e, r),
            Cu.call(this, t, e, c, r, d, l || ve.stringFilter, h));
    },
    ku = function (t, e, i, r, s) {
      if (
        (bt(t) && (t = Or(t, s, e, i, r)),
        !Je(t) || (t.style && t.nodeType) || Qt(t) || Ta(t))
      )
        return Wt(t) ? Or(t, s, e, i, r) : t;
      var o = {},
        a;
      for (a in t) o[a] = Or(t[a], s, e, i, r);
      return o;
    },
    io = function (t, e, i, r, s, o) {
      var a, l, h, u;
      if (
        pe[t] &&
        (a = new pe[t]()).init(
          s,
          a.rawVars ? e[t] : ku(e[t], r, s, o, i),
          i,
          r,
          o
        ) !== !1 &&
        ((i._pt = l = new re(i._pt, s, t, 0, 1, a.render, a, 0, a.priority)),
        i !== rr)
      )
        for (h = i._ptLookup[i._targets.indexOf(s)], u = a._props.length; u--; )
          h[a._props[u]] = l;
      return a;
    },
    bi,
    Yn,
    ro = function n(t, e, i) {
      var r = t.vars,
        s = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        h = r.onUpdate,
        u = r.onUpdateParams,
        f = r.callbackScope,
        c = r.runBackwards,
        d = r.yoyoEase,
        g = r.keyframes,
        p = r.autoRevert,
        _ = t._dur,
        m = t._startAt,
        b = t._targets,
        T = t.parent,
        y = T && T.data === "nested" ? T.vars.targets : b,
        x = t._overwrite === "auto" && !Xn,
        k = t.timeline,
        w,
        A,
        C,
        M,
        D,
        L,
        R,
        I,
        z,
        P,
        F,
        H,
        J;
      if (
        (k && (!g || !s) && (s = "none"),
        (t._ease = Fi(s, sr.ease)),
        (t._yEase = d ? Xa(Fi(d === !0 ? s : d, sr.ease)) : 0),
        d &&
          t._yoyo &&
          !t._repeat &&
          ((d = t._yEase), (t._yEase = t._ease), (t._ease = d)),
        (t._from = !k && !!r.runBackwards),
        !k || (g && !r.stagger))
      ) {
        if (
          ((I = b[0] ? Ti(b[0]).harness : 0),
          (H = I && r[I.prop]),
          (w = ds(r, jn)),
          m &&
            (m._zTime < 0 && m.progress(1),
            e < 0 && c && a && !p
              ? m.render(-1, !0)
              : m.revert(c && _ ? as : Zh),
            (m._lazy = 0)),
          o)
        ) {
          if (
            (Si(
              (t._startAt = Dt.set(
                b,
                Ie(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: T,
                    immediateRender: !0,
                    lazy: me(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: h,
                    onUpdateParams: u,
                    callbackScope: f,
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            e < 0 && (_e || (!a && !p)) && t._startAt.revert(as),
            a && _ && e <= 0 && i <= 0)
          ) {
            e && (t._zTime = e);
            return;
          }
        } else if (c && _ && !m) {
          if (
            (e && (a = !1),
            (C = Ie(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && me(l),
                immediateRender: a,
                stagger: 0,
                parent: T,
              },
              w
            )),
            H && (C[I.prop] = H),
            Si((t._startAt = Dt.set(b, C))),
            e < 0 && (_e ? t._startAt.revert(as) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            !a)
          )
            n(t._startAt, st, st);
          else if (!e) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (_ && me(l)) || (l && !_), A = 0;
          A < b.length;
          A++
        ) {
          if (
            ((D = b[A]),
            (R = D._gsap || Qn(b)[A]._gsap),
            (t._ptLookup[A] = P = {}),
            Fn[R.id] && xi.length && fs(),
            (F = y === b ? A : y.indexOf(D)),
            I &&
              (z = new I()).init(D, H || w, t, F, y) !== !1 &&
              ((t._pt = M =
                new re(t._pt, D, z.name, 0, 1, z.render, z, 0, z.priority)),
              z._props.forEach(function (v) {
                P[v] = M;
              }),
              z.priority && (L = 1)),
            !I || H)
          )
            for (C in w)
              pe[C] && (z = io(C, w, t, F, D, y))
                ? z.priority && (L = 1)
                : (P[C] = M =
                    eo.call(t, D, C, "get", w[C], F, y, 0, r.stringFilter));
          t._op && t._op[A] && t.kill(D, t._op[A]),
            x &&
              t._pt &&
              ((bi = t),
              gt.killTweensOf(D, P, t.globalTime(e)),
              (J = !t.parent),
              (bi = 0)),
            t._pt && l && (Fn[R.id] = 1);
        }
        L && ao(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = h),
        (t._initted = (!t._op || t._pt) && !J),
        g && e <= 0 && k.render(Oe, !0, !0);
    },
    Au = function (t, e, i, r, s, o, a) {
      var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
        h,
        u,
        f,
        c;
      if (!l)
        for (
          l = t._ptCache[e] = [], f = t._ptLookup, c = t._targets.length;
          c--;

        ) {
          if (((h = f[c][e]), h && h.d && h.d._pt))
            for (h = h.d._pt; h && h.p !== e && h.fp !== e; ) h = h._next;
          if (!h) return (Yn = 1), (t.vars[e] = "+=0"), ro(t, a), (Yn = 0), 1;
          l.push(h);
        }
      for (c = l.length; c--; )
        (u = l[c]),
          (h = u._pt || u),
          (h.s = (r || r === 0) && !s ? r : h.s + (r || 0) + o * h.c),
          (h.c = i - h.s),
          u.e && (u.e = xt(i) + Gt(u.e)),
          u.b && (u.b = h.s + Gt(u.b));
    },
    Mu = function (t, e) {
      var i = t[0] ? Ti(t[0]).harness : 0,
        r = i && i.aliases,
        s,
        o,
        a,
        l;
      if (!r) return e;
      s = Ni({}, e);
      for (o in r)
        if (o in s)
          for (l = r[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    Eu = function (t, e, i, r) {
      var s = e.ease || r || "power1.inOut",
        o,
        a;
      if (Qt(e))
        (a = i[t] || (i[t] = [])),
          e.forEach(function (l, h) {
            return a.push({ t: (h / (e.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in e)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(t), v: e[o], e: s });
    },
    Or = function (t, e, i, r, s) {
      return bt(t)
        ? t.call(e, i, r, s)
        : Wt(t) && ~t.indexOf("random(")
        ? ur(t)
        : t;
    },
    qa = Kn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    ja = {};
  ie(qa + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (ja[n] = 1);
  });
  var Dt = (function (n) {
    wa(t, n);
    function t(i, r, s, o) {
      var a;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (a = n.call(this, o ? r : Dr(r)) || this);
      var l = a.vars,
        h = l.duration,
        u = l.delay,
        f = l.immediateRender,
        c = l.stagger,
        d = l.overwrite,
        g = l.keyframes,
        p = l.defaults,
        _ = l.scrollTrigger,
        m = l.yoyoEase,
        b = r.parent || gt,
        T = (Qt(i) || Ta(i) ? hi(i[0]) : "length" in r) ? [i] : Pe(i),
        y,
        x,
        k,
        w,
        A,
        C,
        M,
        D;
      if (
        ((a._targets = T.length
          ? Qn(T)
          : cs(
              "GSAP target " + i + " not found. https://greensock.com",
              !ve.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = d),
        g || c || os(h) || os(u))
      ) {
        if (
          ((r = a.vars),
          (y = a.timeline =
            new Kt({
              data: "nested",
              defaults: p || {},
              targets: b && b.data === "nested" ? b.vars.targets : T,
            })),
          y.kill(),
          (y.parent = y._dp = ai(a)),
          (y._start = 0),
          c || os(h) || os(u))
        ) {
          if (((w = T.length), (M = c && Na(c)), Je(c)))
            for (A in c) ~qa.indexOf(A) && (D || (D = {}), (D[A] = c[A]));
          for (x = 0; x < w; x++)
            (k = ds(r, ja)),
              (k.stagger = 0),
              m && (k.yoyoEase = m),
              D && Ni(k, D),
              (C = T[x]),
              (k.duration = +Or(h, ai(a), x, C, T)),
              (k.delay = (+Or(u, ai(a), x, C, T) || 0) - a._delay),
              !c &&
                w === 1 &&
                k.delay &&
                ((a._delay = u = k.delay), (a._start += u), (k.delay = 0)),
              y.to(C, k, M ? M(x, C, T) : 0),
              (y._ease = q.none);
          y.duration() ? (h = u = 0) : (a.timeline = 0);
        } else if (g) {
          Dr(Ie(y.vars.defaults, { ease: "none" })),
            (y._ease = Fi(g.ease || r.ease || "none"));
          var L = 0,
            R,
            I,
            z;
          if (Qt(g))
            g.forEach(function (P) {
              return y.to(T, P, ">");
            }),
              y.duration();
          else {
            k = {};
            for (A in g)
              A === "ease" || A === "easeEach" || Eu(A, g[A], k, g.easeEach);
            for (A in k)
              for (
                R = k[A].sort(function (P, F) {
                  return P.t - F.t;
                }),
                  L = 0,
                  x = 0;
                x < R.length;
                x++
              )
                (I = R[x]),
                  (z = {
                    ease: I.e,
                    duration: ((I.t - (x ? R[x - 1].t : 0)) / 100) * h,
                  }),
                  (z[A] = I.v),
                  y.to(T, z, L),
                  (L += z.duration);
            y.duration() < h && y.to({}, { duration: h - y.duration() });
          }
        }
        h || a.duration((h = y.duration()));
      } else a.timeline = 0;
      return (
        d === !0 && !Xn && ((bi = ai(a)), gt.killTweensOf(T), (bi = 0)),
        Qe(b, ai(a), s),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (f ||
          (!h &&
            !g &&
            a._start === Yt(b._time) &&
            me(f) &&
            nu(ai(a)) &&
            b.data !== "nested")) &&
          ((a._tTime = -st), a.render(Math.max(0, -u) || 0)),
        _ && Ra(ai(a), _),
        a
      );
    }
    var e = t.prototype;
    return (
      (e.render = function (r, s, o) {
        var a = this._time,
          l = this._tDur,
          h = this._dur,
          u = r < 0,
          f = r > l - st && !u ? l : r < st ? 0 : r,
          c,
          d,
          g,
          p,
          _,
          m,
          b,
          T,
          y;
        if (!h) au(this, r, s, o);
        else if (
          f !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u)
        ) {
          if (((c = f), (T = this.timeline), this._repeat)) {
            if (((p = h + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(p * 100 + r, s, o);
            if (
              ((c = Yt(f % p)),
              f === l
                ? ((g = this._repeat), (c = h))
                : ((g = ~~(f / p)),
                  g && g === f / p && ((c = h), g--),
                  c > h && (c = h)),
              (m = this._yoyo && g & 1),
              m && ((y = this._yEase), (c = h - c)),
              (_ = nr(this._tTime, p)),
              c === a && !o && this._initted)
            )
              return (this._tTime = f), this;
            g !== _ &&
              (T && this._yEase && Ua(T, m),
              this.vars.repeatRefresh &&
                !m &&
                !this._lock &&
                ((this._lock = o = 1),
                (this.render(Yt(p * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ia(this, u ? r : c, o, s, f)) return (this._tTime = 0), this;
            if (a !== this._time) return this;
            if (h !== this._dur) return this.render(r, s, o);
          }
          if (
            ((this._tTime = f),
            (this._time = c),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = b = (y || this._ease)(c / h)),
            this._from && (this.ratio = b = 1 - b),
            c && !a && !s && (Re(this, "onStart"), this._tTime !== f))
          )
            return this;
          for (d = this._pt; d; ) d.r(b, d.d), (d = d._next);
          (T &&
            T.render(
              r < 0 ? r : !c && m ? -st : T._dur * T._ease(c / this._dur),
              s,
              o
            )) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (u && Nn(this, r, s, o), Re(this, "onUpdate")),
            this._repeat &&
              g !== _ &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              Re(this, "onRepeat"),
            (f === this._tDur || !f) &&
              this._tTime === f &&
              (u && !this._onUpdate && Nn(this, r, !0, !0),
              (r || !h) &&
                ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
                Si(this, 1),
              !s &&
                !(u && !a) &&
                (f || a || m) &&
                (Re(this, f === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (e.targets = function () {
        return this._targets;
      }),
      (e.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          n.prototype.invalidate.call(this, r)
        );
      }),
      (e.resetTo = function (r, s, o, a) {
        Rr || ge.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          h;
        return (
          this._initted || ro(this, l),
          (h = this._ease(l / this._dur)),
          Au(this, r, s, o, a, h, l)
            ? this.resetTo(r, s, o, a)
            : (ws(this, 0),
              this.parent ||
                Oa(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (this._lazy = this._pt = 0), this.parent ? Mr(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, bi && bi.vars.overwrite !== !0)
              ._first || Mr(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              or(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? Pe(r) : a,
          h = this._ptLookup,
          u = this._pt,
          f,
          c,
          d,
          g,
          p,
          _,
          m;
        if ((!s || s === "all") && ru(a, l))
          return s === "all" && (this._pt = 0), Mr(this);
        for (
          f = this._op = this._op || [],
            s !== "all" &&
              (Wt(s) &&
                ((p = {}),
                ie(s, function (b) {
                  return (p[b] = 1);
                }),
                (s = p)),
              (s = Mu(a, s))),
            m = a.length;
          m--;

        )
          if (~l.indexOf(a[m])) {
            (c = h[m]),
              s === "all"
                ? ((f[m] = s), (g = c), (d = {}))
                : ((d = f[m] = f[m] || {}), (g = s));
            for (p in g)
              (_ = c && c[p]),
                _ &&
                  ((!("kill" in _.d) || _.d.kill(p) === !0) &&
                    vs(this, _, "_pt"),
                  delete c[p]),
                d !== "all" && (d[p] = 1);
          }
        return this._initted && !this._pt && u && Mr(this), this;
      }),
      (t.to = function (r, s) {
        return new t(r, s, arguments[2]);
      }),
      (t.from = function (r, s) {
        return Lr(1, arguments);
      }),
      (t.delayedCall = function (r, s, o, a) {
        return new t(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (t.fromTo = function (r, s, o) {
        return Lr(2, arguments);
      }),
      (t.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new t(r, s);
      }),
      (t.killTweensOf = function (r, s, o) {
        return gt.killTweensOf(r, s, o);
      }),
      t
    );
  })(lr);
  Ie(Dt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  ie("staggerTo,staggerFrom,staggerFromTo", function (n) {
    Dt[n] = function () {
      var t = new Kt(),
        e = Wn.call(arguments, 0);
      return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e);
    };
  });
  var so = function (t, e, i) {
      return (t[e] = i);
    },
    Ka = function (t, e, i) {
      return t[e](i);
    },
    Du = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    Lu = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    bs = function (t, e) {
      return bt(t[e]) ? Ka : _s(t[e]) && t.setAttribute ? Lu : so;
    },
    Qa = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
    },
    Ou = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    no = function (t, e) {
      var i = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (t === 1 && e.e) r = e.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    oo = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    Pu = function (t, e, i, r) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === r && s.modifier(t, e, i), (s = o);
    },
    Ru = function (t) {
      for (var e = this._pt, i, r; e; )
        (r = e._next),
          (e.p === t && !e.op) || e.op === t
            ? vs(this, e, "_pt")
            : e.dep || (i = 1),
          (e = r);
      return !i;
    },
    Iu = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    ao = function (t) {
      for (var e = t._pt, i, r, s, o; e; ) {
        for (i = e._next, r = s; r && r.pr > e.pr; ) r = r._next;
        (e._prev = r ? r._prev : o) ? (e._prev._next = e) : (s = e),
          (e._next = r) ? (r._prev = e) : (o = e),
          (e = i);
      }
      t._pt = s;
    },
    re = (function () {
      function n(e, i, r, s, o, a, l, h, u) {
        (this.t = i),
          (this.s = s),
          (this.c = o),
          (this.p = r),
          (this.r = a || Qa),
          (this.d = l || this),
          (this.set = h || so),
          (this.pr = u || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      var t = n.prototype;
      return (
        (t.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Iu),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  ie(
    Kn +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (jn[n] = 1);
    }
  );
  Te.TweenMax = Te.TweenLite = Dt;
  Te.TimelineLite = Te.TimelineMax = Kt;
  gt = new Kt({
    sortChildren: !1,
    defaults: sr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  });
  ve.stringFilter = Zn;
  var hr = [],
    hs = {},
    zu = [],
    ya = 0,
    On = function (t) {
      return (hs[t] || zu).map(function (e) {
        return e();
      });
    },
    Gn = function () {
      var t = Date.now(),
        e = [];
      t - ya > 2 &&
        (On("matchMediaInit"),
        hr.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            o,
            a,
            l,
            h;
          for (a in r)
            (o = Le.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (h = 1));
          h && (i.revert(), l && e.push(i));
        }),
        On("matchMediaRevert"),
        e.forEach(function (i) {
          return i.onMatch(i);
        }),
        (ya = t),
        On("matchMedia"));
    },
    Ja = (function () {
      function n(e, i) {
        (this.selector = i && Hn(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          e && this.add(e);
      }
      var t = n.prototype;
      return (
        (t.add = function (i, r, s) {
          bt(i) && ((s = r), (r = i), (i = bt));
          var o = this,
            a = function () {
              var h = Lt,
                u = o.selector,
                f;
              return (
                h && h !== o && h.data.push(o),
                s && (o.selector = Hn(s)),
                (Lt = o),
                (f = r.apply(o, arguments)),
                bt(f) && o._r.push(f),
                (Lt = h),
                (o.selector = u),
                (o.isReverted = !1),
                f
              );
            };
          return (o.last = a), i === bt ? a(o) : i ? (o[i] = a) : a;
        }),
        (t.ignore = function (i) {
          var r = Lt;
          (Lt = null), i(this), (Lt = r);
        }),
        (t.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof n
                ? i.push.apply(i, r.getTweens())
                : r instanceof Dt &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (i, r) {
          var s = this;
          if (i) {
            var o = this.getTweens();
            this.data.forEach(function (l) {
              l.data === "isFlip" &&
                (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function (h) {
                  return o.splice(o.indexOf(h), 1);
                }));
            }),
              o
                .map(function (l) {
                  return { g: l.globalTime(0), t: l };
                })
                .sort(function (l, h) {
                  return h.g - l.g || -1;
                })
                .forEach(function (l) {
                  return l.t.revert(i);
                }),
              this.data.forEach(function (l) {
                return !(l instanceof lr) && l.revert && l.revert(i);
              }),
              this._r.forEach(function (l) {
                return l(i, s);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (l) {
              return l.kill && l.kill();
            });
          if ((this.clear(), r)) {
            var a = hr.indexOf(this);
            ~a && hr.splice(a, 1);
          }
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        n
      );
    })(),
    Fu = (function () {
      function n(e) {
        (this.contexts = []), (this.scope = e);
      }
      var t = n.prototype;
      return (
        (t.add = function (i, r, s) {
          Je(i) || (i = { matches: i });
          var o = new Ja(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            h,
            u;
          this.contexts.push(o), (r = o.add("onMatch", r)), (o.queries = i);
          for (h in i)
            h === "all"
              ? (u = 1)
              : ((l = Le.matchMedia(i[h])),
                l &&
                  (hr.indexOf(o) < 0 && hr.push(o),
                  (a[h] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(Gn)
                    : l.addEventListener("change", Gn)));
          return u && r(o), this;
        }),
        (t.revert = function (i) {
          this.kill(i || {});
        }),
        (t.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        n
      );
    })(),
    gs = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (r) {
          return vu(r);
        });
      },
      timeline: function (t) {
        return new Kt(t);
      },
      getTweensOf: function (t, e) {
        return gt.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, r) {
        Wt(t) && (t = Pe(t)[0]);
        var s = Ti(t || {}).get,
          o = i ? La : Da;
        return (
          i === "native" && (i = ""),
          t &&
            (e
              ? o(((pe[e] && pe[e].get) || s)(t, e, i, r))
              : function (a, l, h) {
                  return o(((pe[a] && pe[a].get) || s)(t, a, l, h));
                })
        );
      },
      quickSetter: function (t, e, i) {
        if (((t = Pe(t)), t.length > 1)) {
          var r = t.map(function (u) {
              return ee.quickSetter(u, e, i);
            }),
            s = r.length;
          return function (u) {
            for (var f = s; f--; ) r[f](u);
          };
        }
        t = t[0] || {};
        var o = pe[e],
          a = Ti(t),
          l = (a.harness && (a.harness.aliases || {})[e]) || e,
          h = o
            ? function (u) {
                var f = new o();
                (rr._pt = 0),
                  f.init(t, i ? u + i : u, rr, 0, [t]),
                  f.render(1, f),
                  rr._pt && oo(1, rr);
              }
            : a.set(t, l);
        return o
          ? h
          : function (u) {
              return h(t, l, i ? u + i : u, a, 1);
            };
      },
      quickTo: function (t, e, i) {
        var r,
          s = ee.to(
            t,
            Ni(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          o = function (l, h, u) {
            return s.resetTo(e, l, h, u);
          };
        return (o.tween = s), o;
      },
      isTweening: function (t) {
        return gt.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Fi(t.ease, sr.ease)), pa(sr, t || {});
      },
      config: function (t) {
        return pa(ve, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          r = t.plugins,
          s = t.defaults,
          o = t.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !pe[a] &&
            !Te[a] &&
            cs(e + " effect requires " + a + " plugin.")
          );
        }),
          (Mn[e] = function (a, l, h) {
            return i(Pe(a), Ie(l || {}, s), h);
          }),
          o &&
            (Kt.prototype[e] = function (a, l, h) {
              return this.add(Mn[e](a, Je(l) ? l : (h = l) && {}, this), h);
            });
      },
      registerEase: function (t, e) {
        q[t] = Fi(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Fi(t, e) : q;
      },
      getById: function (t) {
        return gt.getById(t);
      },
      exportRoot: function (t, e) {
        t === void 0 && (t = {});
        var i = new Kt(t),
          r,
          s;
        for (
          i.smoothChildTiming = me(t.smoothChildTiming),
            gt.remove(i),
            i._dp = 0,
            i._time = i._tTime = gt._time,
            r = gt._first;
          r;

        )
          (s = r._next),
            (e ||
              !(
                !r._dur &&
                r instanceof Dt &&
                r.vars.onComplete === r._targets[0]
              )) &&
              Qe(i, r, r._start - r._delay),
            (r = s);
        return Qe(gt, i, 0), i;
      },
      context: function (t, e) {
        return t ? new Ja(t, e) : Lt;
      },
      matchMedia: function (t) {
        return new Fu(t);
      },
      matchMediaRefresh: function () {
        return (
          hr.forEach(function (t) {
            var e = t.conditions,
              i,
              r;
            for (r in e) e[r] && ((e[r] = !1), (i = 1));
            i && t.revert();
          }) || Gn()
        );
      },
      addEventListener: function (t, e) {
        var i = hs[t] || (hs[t] = []);
        ~i.indexOf(e) || i.push(e);
      },
      removeEventListener: function (t, e) {
        var i = hs[t],
          r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: gu,
        wrapYoyo: _u,
        distribute: Na,
        random: Wa,
        snap: Ba,
        normalize: pu,
        getUnit: Gt,
        clamp: uu,
        splitColor: Ya,
        toArray: Pe,
        selector: Hn,
        mapRange: $a,
        pipe: fu,
        unitize: du,
        interpolate: mu,
        shuffle: Fa,
      },
      install: ka,
      effects: Mn,
      ticker: ge,
      updateRoot: Kt.updateRoot,
      plugins: pe,
      globalTimeline: gt,
      core: {
        PropTween: re,
        globals: Aa,
        Tween: Dt,
        Timeline: Kt,
        Animation: lr,
        getCache: Ti,
        _removeLinkedListItem: vs,
        reverting: function () {
          return _e;
        },
        context: function (t) {
          return t && Lt && (Lt.data.push(t), (t._ctx = Lt)), Lt;
        },
        suppressOverwrites: function (t) {
          return (Xn = t);
        },
      },
    };
  ie("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (gs[n] = Dt[n]);
  });
  ge.add(Kt.updateRoot);
  rr = gs.to({}, { duration: 0 });
  var Nu = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    },
    Bu = function (t, e) {
      var i = t._targets,
        r,
        s,
        o;
      for (r in e)
        for (s = i.length; s--; )
          (o = t._ptLookup[s][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Nu(o, r)),
              o && o.modifier && o.modifier(e[r], t, i[s], r));
    },
    Pn = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (r, s, o) {
          o._onInit = function (a) {
            var l, h;
            if (
              (Wt(s) &&
                ((l = {}),
                ie(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              e)
            ) {
              l = {};
              for (h in s) l[h] = e(s[h]);
              s = l;
            }
            Bu(a, s);
          };
        },
      };
    },
    ee =
      gs.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, r, s) {
            var o, a, l;
            this.tween = i;
            for (o in e)
              (l = t.getAttribute(o) || ""),
                (a = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  e[o],
                  r,
                  s,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (t, e) {
            for (var i = e._pt; i; )
              _e ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; )
              this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Pn("roundProps", $n),
        Pn("modifiers"),
        Pn("snap", Ba)
      ) || gs;
  Dt.version = Kt.version = ee.version = "3.11.2";
  Ca = 1;
  xa() && ar();
  var Wu = q.Power0,
    Hu = q.Power1,
    $u = q.Power2,
    Yu = q.Power3,
    Gu = q.Power4,
    Xu = q.Linear,
    Uu = q.Quad,
    Vu = q.Cubic,
    qu = q.Quart,
    ju = q.Quint,
    Ku = q.Strong,
    Qu = q.Elastic,
    Ju = q.Back,
    Zu = q.SteppedEase,
    tc = q.Bounce,
    ec = q.Sine,
    ic = q.Expo,
    rc = q.Circ;
  var Za,
    ki,
    fr,
    go,
    Xi,
    sc,
    tl,
    _o,
    nc = function () {
      return typeof window != "undefined";
    },
    fi = {},
    Gi = 180 / Math.PI,
    dr = Math.PI / 180,
    cr = Math.atan2,
    el = 1e8,
    mo = /([A-Z])/g,
    oc = /(left|right|width|margin|padding|x)/i,
    ac = /[\s,\(]\S/,
    ci = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    uo = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    lc = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e
      );
    },
    hc = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e
      );
    },
    uc = function (t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    ll = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    hl = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
    },
    cc = function (t, e, i) {
      return (t.style[e] = i);
    },
    fc = function (t, e, i) {
      return t.style.setProperty(e, i);
    },
    dc = function (t, e, i) {
      return (t._gsap[e] = i);
    },
    pc = function (t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    },
    gc = function (t, e, i, r, s) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    _c = function (t, e, i, r, s) {
      var o = t._gsap;
      (o[e] = i), o.renderTransform(s, o);
    },
    _t = "transform",
    Ye = _t + "Origin",
    mc = function (t, e) {
      var i = this,
        r = this.target,
        s = r.style;
      if (t in fi) {
        if (
          ((this.tfm = this.tfm || {}),
          t !== "transform" &&
            ((t = ci[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (o) {
                  return (i.tfm[o] = ui(r, o));
                })
              : (this.tfm[t] = r._gsap.x ? r._gsap[t] : ui(r, t))),
          this.props.indexOf(_t) >= 0)
        )
          return;
        r._gsap.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Ye, e, "")),
          (t = _t);
      }
      (s || e) && this.props.push(t, e, s[t]);
    },
    ul = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    vc = function () {
      var t = this.props,
        e = this.target,
        i = e.style,
        r = e._gsap,
        s,
        o;
      for (s = 0; s < t.length; s += 3)
        t[s + 1]
          ? (e[t[s]] = t[s + 2])
          : t[s + 2]
          ? (i[t[s]] = t[s + 2])
          : i.removeProperty(t[s].replace(mo, "-$1").toLowerCase());
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          e.setAttribute("data-svg-origin", this.svgo || "")),
          (s = _o()),
          s && !s.isStart && !i[_t] && (ul(i), (r.uncache = 1));
      }
    },
    cl = function (t, e) {
      var i = { target: t, props: [], revert: vc, save: mc };
      return (
        e &&
          e.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    fl,
    co = function (t, e) {
      var i = ki.createElementNS
        ? ki.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : ki.createElement(t);
      return i.style ? i : ki.createElement(t);
    },
    Ze = function n(t, e, i) {
      var r = getComputedStyle(t);
      return (
        r[e] ||
        r.getPropertyValue(e.replace(mo, "-$1").toLowerCase()) ||
        r.getPropertyValue(e) ||
        (!i && n(t, pr(e) || e, 1)) ||
        ""
      );
    },
    il = "O,Moz,ms,Ms,Webkit".split(","),
    pr = function (t, e, i) {
      var r = e || Xi,
        s = r.style,
        o = 5;
      if (t in s && !i) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(il[o] + t in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? il[o] : "") + t;
    },
    fo = function () {
      nc() &&
        window.document &&
        ((Za = window),
        (ki = Za.document),
        (fr = ki.documentElement),
        (Xi = co("div") || { style: {} }),
        (sc = co("div")),
        (_t = pr(_t)),
        (Ye = _t + "Origin"),
        (Xi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (fl = !!pr("perspective")),
        (_o = ee.core.reverting),
        (go = 1));
    },
    lo = function n(t) {
      var e = co(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText,
        o;
      if (
        (fr.appendChild(e),
        e.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (o = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = n);
        } catch (a) {}
      else this._gsapBBox && (o = this._gsapBBox());
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        fr.removeChild(e),
        (this.style.cssText = s),
        o
      );
    },
    rl = function (t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    },
    dl = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = lo.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === lo ||
          (e = lo.call(t, !0)),
        e && !e.width && !e.x && !e.y
          ? {
              x: +rl(t, ["x", "cx", "x1"]) || 0,
              y: +rl(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : e
      );
    },
    pl = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && dl(t));
    },
    Fr = function (t, e) {
      if (e) {
        var i = t.style;
        e in fi && e !== Ye && (e = _t),
          i.removeProperty
            ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") &&
                (e = "-" + e),
              i.removeProperty(e.replace(mo, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    },
    Ai = function (t, e, i, r, s, o) {
      var a = new re(t._pt, e, i, 0, 1, o ? hl : ll);
      return (t._pt = a), (a.b = r), (a.e = s), t._props.push(i), a;
    },
    sl = { deg: 1, rad: 1, turn: 1 },
    yc = { grid: 1, flex: 1 },
    Mi = function n(t, e, i, r) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = Xi.style,
        l = oc.test(e),
        h = t.tagName.toLowerCase() === "svg",
        u = (h ? "client" : "offset") + (l ? "Width" : "Height"),
        f = 100,
        c = r === "px",
        d = r === "%",
        g,
        p,
        _,
        m;
      return r === o || !s || sl[r] || sl[o]
        ? s
        : (o !== "px" && !c && (s = n(t, e, i, "px")),
          (m = t.getCTM && pl(t)),
          (d || o === "%") && (fi[e] || ~e.indexOf("adius"))
            ? ((g = m ? t.getBBox()[l ? "width" : "height"] : t[u]),
              xt(d ? (s / g) * f : (s / 100) * g))
            : ((a[l ? "width" : "height"] = f + (c ? o : r)),
              (p =
                ~e.indexOf("adius") || (r === "em" && t.appendChild && !h)
                  ? t
                  : t.parentNode),
              m && (p = (t.ownerSVGElement || {}).parentNode),
              (!p || p === ki || !p.appendChild) && (p = ki.body),
              (_ = p._gsap),
              _ && d && _.width && l && _.time === ge.time && !_.uncache
                ? xt((s / _.width) * f)
                : ((d || o === "%") &&
                    !yc[Ze(p, "display")] &&
                    (a.position = Ze(t, "position")),
                  p === t && (a.position = "static"),
                  p.appendChild(Xi),
                  (g = Xi[u]),
                  p.removeChild(Xi),
                  (a.position = "absolute"),
                  l && d && ((_ = Ti(p)), (_.time = ge.time), (_.width = p[u])),
                  xt(c ? (g * s) / f : g && s ? (f / g) * s : 0))));
    },
    ui = function (t, e, i, r) {
      var s;
      return (
        go || fo(),
        e in ci &&
          e !== "transform" &&
          ((e = ci[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
        fi[e] && e !== "transform"
          ? ((s = Br(t, r)),
            (s =
              e !== "transformOrigin"
                ? s[e]
                : s.svg
                ? s.origin
                : Ts(Ze(t, Ye)) + " " + s.zOrigin + "px"))
          : ((s = t.style[e]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (xs[e] && xs[e](t, e, i)) ||
                Ze(t, e) ||
                Jn(t, e) ||
                (e === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Mi(t, e, s, i) + i : s
      );
    },
    wc = function (t, e, i, r) {
      if (!i || i === "none") {
        var s = pr(e, t, 1),
          o = s && Ze(t, s, 1);
        o && o !== i
          ? ((e = s), (i = o))
          : e === "borderColor" && (i = Ze(t, "borderTopColor"));
      }
      var a = new re(this._pt, t.style, e, 0, 1, no),
        l = 0,
        h = 0,
        u,
        f,
        c,
        d,
        g,
        p,
        _,
        m,
        b,
        T,
        y,
        x;
      if (
        ((a.b = i),
        (a.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((t.style[e] = r), (r = Ze(t, e) || r), (t.style[e] = i)),
        (u = [i, r]),
        Zn(u),
        (i = u[0]),
        (r = u[1]),
        (c = i.match(Bi) || []),
        (x = r.match(Bi) || []),
        x.length)
      ) {
        for (; (f = Bi.exec(r)); )
          (_ = f[0]),
            (b = r.substring(l, f.index)),
            g
              ? (g = (g + 1) % 5)
              : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") &&
                (g = 1),
            _ !== (p = c[h++] || "") &&
              ((d = parseFloat(p) || 0),
              (y = p.substr((d + "").length)),
              _.charAt(1) === "=" && (_ = Wi(d, _) + y),
              (m = parseFloat(_)),
              (T = _.substr((m + "").length)),
              (l = Bi.lastIndex - T.length),
              T ||
                ((T = T || ve.units[e] || y),
                l === r.length && ((r += T), (a.e += T))),
              y !== T && (d = Mi(t, e, p, T) || 0),
              (a._pt = {
                _next: a._pt,
                p: b || h === 1 ? b : ",",
                s: d,
                c: m - d,
                m: (g && g < 4) || e === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = e === "display" && r === "none" ? hl : ll;
      return Vn.test(r) && (a.e = 0), (this._pt = a), a;
    },
    nl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    bc = function (t) {
      var e = t.split(" "),
        i = e[0],
        r = e[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((t = i), (i = r), (r = t)),
        (e[0] = nl[i] || i),
        (e[1] = nl[r] || r),
        e.join(" ")
      );
    },
    xc = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t,
          r = i.style,
          s = e.u,
          o = i._gsap,
          a,
          l,
          h;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), h = s.length; --h > -1; )
            (a = s[h]),
              fi[a] && ((l = 1), (a = a === "transformOrigin" ? Ye : _t)),
              Fr(i, a);
        l &&
          (Fr(i, _t),
          o &&
            (o.svg && i.removeAttribute("transform"),
            Br(i, 1),
            (o.uncache = 1),
            ul(r)));
      }
    },
    xs = {
      clearProps: function (t, e, i, r, s) {
        if (s.data !== "isFromStart") {
          var o = (t._pt = new re(t._pt, e, i, 0, 0, xc));
          return (o.u = r), (o.pr = -10), (o.tween = s), t._props.push(i), 1;
        }
      },
    },
    Nr = [1, 0, 0, 1, 0, 0],
    gl = {},
    _l = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    ol = function (t) {
      var e = Ze(t, _t);
      return _l(e) ? Nr : e.substr(7).match(Un).map(xt);
    },
    vo = function (t, e) {
      var i = t._gsap || Ti(t),
        r = t.style,
        s = ol(t),
        o,
        a,
        l,
        h;
      return i.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Nr : s)
        : (s === Nr &&
            !t.offsetParent &&
            t !== fr &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = t.parentNode),
            (!o || !t.offsetParent) &&
              ((h = 1), (a = t.nextElementSibling), fr.appendChild(t)),
            (s = ol(t)),
            l ? (r.display = l) : Fr(t, "display"),
            h &&
              (a
                ? o.insertBefore(t, a)
                : o
                ? o.appendChild(t)
                : fr.removeChild(t))),
          e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    po = function (t, e, i, r, s, o) {
      var a = t._gsap,
        l = s || vo(t, !0),
        h = a.xOrigin || 0,
        u = a.yOrigin || 0,
        f = a.xOffset || 0,
        c = a.yOffset || 0,
        d = l[0],
        g = l[1],
        p = l[2],
        _ = l[3],
        m = l[4],
        b = l[5],
        T = e.split(" "),
        y = parseFloat(T[0]) || 0,
        x = parseFloat(T[1]) || 0,
        k,
        w,
        A,
        C;
      i
        ? l !== Nr &&
          (w = d * _ - g * p) &&
          ((A = y * (_ / w) + x * (-p / w) + (p * b - _ * m) / w),
          (C = y * (-g / w) + x * (d / w) - (d * b - g * m) / w),
          (y = A),
          (x = C))
        : ((k = dl(t)),
          (y = k.x + (~T[0].indexOf("%") ? (y / 100) * k.width : y)),
          (x =
            k.y + (~(T[1] || T[0]).indexOf("%") ? (x / 100) * k.height : x))),
        r || (r !== !1 && a.smooth)
          ? ((m = y - h),
            (b = x - u),
            (a.xOffset = f + (m * d + b * p) - m),
            (a.yOffset = c + (m * g + b * _) - b))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = y),
        (a.yOrigin = x),
        (a.smooth = !!r),
        (a.origin = e),
        (a.originIsAbsolute = !!i),
        (t.style[Ye] = "0px 0px"),
        o &&
          (Ai(o, a, "xOrigin", h, y),
          Ai(o, a, "yOrigin", u, x),
          Ai(o, a, "xOffset", f, a.xOffset),
          Ai(o, a, "yOffset", c, a.yOffset)),
        t.setAttribute("data-svg-origin", y + " " + x);
    },
    Br = function (t, e) {
      var i = t._gsap || new to(t);
      if ("x" in i && !e && !i.uncache) return i;
      var r = t.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(t),
        h = Ze(t, Ye) || "0",
        u,
        f,
        c,
        d,
        g,
        p,
        _,
        m,
        b,
        T,
        y,
        x,
        k,
        w,
        A,
        C,
        M,
        D,
        L,
        R,
        I,
        z,
        P,
        F,
        H,
        J,
        v,
        ut,
        pt,
        Rt,
        lt,
        ft;
      return (
        (u = f = c = p = _ = m = b = T = y = 0),
        (d = g = 1),
        (i.svg = !!(t.getCTM && pl(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[_t] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[_t] !== "none" ? l[_t] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (w = vo(t, i.svg)),
        i.svg &&
          (i.uncache
            ? ((H = t.getBBox()),
              (h = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px"),
              (F = ""))
            : (F = !e && t.getAttribute("data-svg-origin")),
          po(t, F || h, !!F || i.originIsAbsolute, i.smooth !== !1, w)),
        (x = i.xOrigin || 0),
        (k = i.yOrigin || 0),
        w !== Nr &&
          ((D = w[0]),
          (L = w[1]),
          (R = w[2]),
          (I = w[3]),
          (u = z = w[4]),
          (f = P = w[5]),
          w.length === 6
            ? ((d = Math.sqrt(D * D + L * L)),
              (g = Math.sqrt(I * I + R * R)),
              (p = D || L ? cr(L, D) * Gi : 0),
              (b = R || I ? cr(R, I) * Gi + p : 0),
              b && (g *= Math.abs(Math.cos(b * dr))),
              i.svg && ((u -= x - (x * D + k * R)), (f -= k - (x * L + k * I))))
            : ((ft = w[6]),
              (Rt = w[7]),
              (v = w[8]),
              (ut = w[9]),
              (pt = w[10]),
              (lt = w[11]),
              (u = w[12]),
              (f = w[13]),
              (c = w[14]),
              (A = cr(ft, pt)),
              (_ = A * Gi),
              A &&
                ((C = Math.cos(-A)),
                (M = Math.sin(-A)),
                (F = z * C + v * M),
                (H = P * C + ut * M),
                (J = ft * C + pt * M),
                (v = z * -M + v * C),
                (ut = P * -M + ut * C),
                (pt = ft * -M + pt * C),
                (lt = Rt * -M + lt * C),
                (z = F),
                (P = H),
                (ft = J)),
              (A = cr(-R, pt)),
              (m = A * Gi),
              A &&
                ((C = Math.cos(-A)),
                (M = Math.sin(-A)),
                (F = D * C - v * M),
                (H = L * C - ut * M),
                (J = R * C - pt * M),
                (lt = I * M + lt * C),
                (D = F),
                (L = H),
                (R = J)),
              (A = cr(L, D)),
              (p = A * Gi),
              A &&
                ((C = Math.cos(A)),
                (M = Math.sin(A)),
                (F = D * C + L * M),
                (H = z * C + P * M),
                (L = L * C - D * M),
                (P = P * C - z * M),
                (D = F),
                (z = H)),
              _ &&
                Math.abs(_) + Math.abs(p) > 359.9 &&
                ((_ = p = 0), (m = 180 - m)),
              (d = xt(Math.sqrt(D * D + L * L + R * R))),
              (g = xt(Math.sqrt(P * P + ft * ft))),
              (A = cr(z, P)),
              (b = Math.abs(A) > 2e-4 ? A * Gi : 0),
              (y = lt ? 1 / (lt < 0 ? -lt : lt) : 0)),
          i.svg &&
            ((F = t.getAttribute("transform")),
            (i.forceCSS = t.setAttribute("transform", "") || !_l(Ze(t, _t))),
            F && t.setAttribute("transform", F))),
        Math.abs(b) > 90 &&
          Math.abs(b) < 270 &&
          (s
            ? ((d *= -1),
              (b += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((g *= -1), (b += b <= 0 ? 180 : -180))),
        (e = e || i.uncache),
        (i.x =
          u -
          ((i.xPercent =
            u &&
            ((!e && i.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (t.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          f -
          ((i.yPercent =
            f &&
            ((!e && i.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
            ? (t.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = c + o),
        (i.scaleX = xt(d)),
        (i.scaleY = xt(g)),
        (i.rotation = xt(p) + a),
        (i.rotationX = xt(_) + a),
        (i.rotationY = xt(m) + a),
        (i.skewX = b + a),
        (i.skewY = T + a),
        (i.transformPerspective = y + o),
        (i.zOrigin = parseFloat(h.split(" ")[2]) || 0) && (r[Ye] = Ts(h)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = ve.force3D),
        (i.renderTransform = i.svg ? Sc : fl ? ml : Tc),
        (i.uncache = 0),
        i
      );
    },
    Ts = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    ho = function (t, e, i) {
      var r = Gt(e);
      return xt(parseFloat(e) + parseFloat(Mi(t, "x", i + "px", r))) + r;
    },
    Tc = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        ml(t, e);
    },
    $i = "0deg",
    zr = "0px",
    Yi = ") ",
    ml = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        h = i.rotation,
        u = i.rotationY,
        f = i.rotationX,
        c = i.skewX,
        d = i.skewY,
        g = i.scaleX,
        p = i.scaleY,
        _ = i.transformPerspective,
        m = i.force3D,
        b = i.target,
        T = i.zOrigin,
        y = "",
        x = (m === "auto" && t && t !== 1) || m === !0;
      if (T && (f !== $i || u !== $i)) {
        var k = parseFloat(u) * dr,
          w = Math.sin(k),
          A = Math.cos(k),
          C;
        (k = parseFloat(f) * dr),
          (C = Math.cos(k)),
          (o = ho(b, o, w * C * -T)),
          (a = ho(b, a, -Math.sin(k) * -T)),
          (l = ho(b, l, A * C * -T + T));
      }
      _ !== zr && (y += "perspective(" + _ + Yi),
        (r || s) && (y += "translate(" + r + "%, " + s + "%) "),
        (x || o !== zr || a !== zr || l !== zr) &&
          (y +=
            l !== zr || x
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Yi),
        h !== $i && (y += "rotate(" + h + Yi),
        u !== $i && (y += "rotateY(" + u + Yi),
        f !== $i && (y += "rotateX(" + f + Yi),
        (c !== $i || d !== $i) && (y += "skew(" + c + ", " + d + Yi),
        (g !== 1 || p !== 1) && (y += "scale(" + g + ", " + p + Yi),
        (b.style[_t] = y || "translate(0, 0)");
    },
    Sc = function (t, e) {
      var i = e || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        h = i.skewX,
        u = i.skewY,
        f = i.scaleX,
        c = i.scaleY,
        d = i.target,
        g = i.xOrigin,
        p = i.yOrigin,
        _ = i.xOffset,
        m = i.yOffset,
        b = i.forceCSS,
        T = parseFloat(o),
        y = parseFloat(a),
        x,
        k,
        w,
        A,
        C;
      (l = parseFloat(l)),
        (h = parseFloat(h)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (h += u), (l += u)),
        l || h
          ? ((l *= dr),
            (h *= dr),
            (x = Math.cos(l) * f),
            (k = Math.sin(l) * f),
            (w = Math.sin(l - h) * -c),
            (A = Math.cos(l - h) * c),
            h &&
              ((u *= dr),
              (C = Math.tan(h - u)),
              (C = Math.sqrt(1 + C * C)),
              (w *= C),
              (A *= C),
              u &&
                ((C = Math.tan(u)),
                (C = Math.sqrt(1 + C * C)),
                (x *= C),
                (k *= C))),
            (x = xt(x)),
            (k = xt(k)),
            (w = xt(w)),
            (A = xt(A)))
          : ((x = f), (A = c), (k = w = 0)),
        ((T && !~(o + "").indexOf("px")) || (y && !~(a + "").indexOf("px"))) &&
          ((T = Mi(d, "x", o, "px")), (y = Mi(d, "y", a, "px"))),
        (g || p || _ || m) &&
          ((T = xt(T + g - (g * x + p * w) + _)),
          (y = xt(y + p - (g * k + p * A) + m))),
        (r || s) &&
          ((C = d.getBBox()),
          (T = xt(T + (r / 100) * C.width)),
          (y = xt(y + (s / 100) * C.height))),
        (C =
          "matrix(" +
          x +
          "," +
          k +
          "," +
          w +
          "," +
          A +
          "," +
          T +
          "," +
          y +
          ")"),
        d.setAttribute("transform", C),
        b && (d.style[_t] = C);
    },
    Cc = function (t, e, i, r, s) {
      var o = 360,
        a = Wt(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? Gi : 1),
        h = l - r,
        u = r + h + "deg",
        f,
        c;
      return (
        a &&
          ((f = s.split("_")[1]),
          f === "short" &&
            ((h %= o), h !== h % (o / 2) && (h += h < 0 ? o : -o)),
          f === "cw" && h < 0
            ? (h = ((h + o * el) % o) - ~~(h / o) * o)
            : f === "ccw" && h > 0 && (h = ((h - o * el) % o) - ~~(h / o) * o)),
        (t._pt = c = new re(t._pt, e, i, r, h, lc)),
        (c.e = u),
        (c.u = "deg"),
        t._props.push(i),
        c
      );
    },
    al = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    kc = function (t, e, i) {
      var r = al({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        h,
        u,
        f,
        c,
        d,
        g;
      r.svg
        ? ((h = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[_t] = e),
          (a = Br(i, 1)),
          Fr(i, _t),
          i.setAttribute("transform", h))
        : ((h = getComputedStyle(i)[_t]),
          (o[_t] = e),
          (a = Br(i, 1)),
          (o[_t] = h));
      for (l in fi)
        (h = r[l]),
          (u = a[l]),
          h !== u &&
            s.indexOf(l) < 0 &&
            ((d = Gt(h)),
            (g = Gt(u)),
            (f = d !== g ? Mi(i, l, h, g) : parseFloat(h)),
            (c = parseFloat(u)),
            (t._pt = new re(t._pt, a, l, f, c - f, uo)),
            (t._pt.u = g || 0),
            t._props.push(l));
      al(a, r);
    };
  ie("padding,margin,Width,Radius", function (n, t) {
    var e = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      o = (t < 3 ? [e, i, r, s] : [e + s, e + i, r + i, r + s]).map(function (
        a
      ) {
        return t < 2 ? n + a : "border" + a + n;
      });
    xs[t > 1 ? "border" + n : n] = function (a, l, h, u, f) {
      var c, d;
      if (arguments.length < 4)
        return (
          (c = o.map(function (g) {
            return ui(a, g, h);
          })),
          (d = c.join(" ")),
          d.split(c[0]).length === 5 ? c[0] : d
        );
      (c = (u + "").split(" ")),
        (d = {}),
        o.forEach(function (g, p) {
          return (d[g] = c[p] = c[p] || c[((p - 1) / 2) | 0]);
        }),
        a.init(l, d, f);
    };
  });
  var yo = {
    name: "css",
    register: fo,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, r, s) {
      var o = this._props,
        a = t.style,
        l = i.vars.startAt,
        h,
        u,
        f,
        c,
        d,
        g,
        p,
        _,
        m,
        b,
        T,
        y,
        x,
        k,
        w,
        A;
      go || fo(),
        (this.styles = this.styles || cl(t)),
        (A = this.styles.props),
        (this.tween = i);
      for (p in e)
        if (
          p !== "autoRound" &&
          ((u = e[p]), !(pe[p] && io(p, e, i, r, t, s)))
        ) {
          if (
            ((d = typeof u),
            (g = xs[p]),
            d === "function" && ((u = u.call(i, r, t, s)), (d = typeof u)),
            d === "string" && ~u.indexOf("random(") && (u = ur(u)),
            g)
          )
            g(this, t, p, u, i) && (w = 1);
          else if (p.substr(0, 2) === "--")
            (h = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (u += ""),
              (li.lastIndex = 0),
              li.test(h) || ((_ = Gt(h)), (m = Gt(u))),
              m ? _ !== m && (h = Mi(t, p, h, m) + m) : _ && (u += _),
              this.add(a, "setProperty", h, u, r, s, 0, 0, p),
              o.push(p),
              A.push(p, 0, a[p]);
          else if (d !== "undefined") {
            if (
              (l && p in l
                ? ((h =
                    typeof l[p] == "function" ? l[p].call(i, r, t, s) : l[p]),
                  Wt(h) && ~h.indexOf("random(") && (h = ur(h)),
                  Gt(h + "") || (h += ve.units[p] || Gt(ui(t, p)) || ""),
                  (h + "").charAt(1) === "=" && (h = ui(t, p)))
                : (h = ui(t, p)),
              (c = parseFloat(h)),
              (b = d === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              b && (u = u.substr(2)),
              (f = parseFloat(u)),
              p in ci &&
                (p === "autoAlpha" &&
                  (c === 1 && ui(t, "visibility") === "hidden" && f && (c = 0),
                  A.push("visibility", 0, a.visibility),
                  Ai(
                    this,
                    a,
                    "visibility",
                    c ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = ci[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (T = p in fi),
              T)
            ) {
              if (
                (this.styles.save(p),
                y ||
                  ((x = t._gsap),
                  (x.renderTransform && !e.parseTransform) ||
                    Br(t, e.parseTransform),
                  (k = e.smoothOrigin !== !1 && x.smooth),
                  (y = this._pt =
                    new re(this._pt, a, _t, 0, 1, x.renderTransform, x, 0, -1)),
                  (y.dep = 1)),
                p === "scale")
              )
                (this._pt = new re(
                  this._pt,
                  x,
                  "scaleY",
                  c,
                  (b ? Wi(c, b + f) : f) - c || 0,
                  uo
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                A.push(Ye, 0, a[Ye]),
                  (u = bc(u)),
                  x.svg
                    ? po(t, u, 0, k, 0, this)
                    : ((m = parseFloat(u.split(" ")[2]) || 0),
                      m !== x.zOrigin && Ai(this, x, "zOrigin", x.zOrigin, m),
                      Ai(this, a, p, Ts(h), Ts(u)));
                continue;
              } else if (p === "svgOrigin") {
                po(t, u, 1, k, 0, this);
                continue;
              } else if (p in gl) {
                Cc(this, x, p, c, b ? Wi(c, b + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Ai(this, x, "smooth", x.smooth, u);
                continue;
              } else if (p === "force3D") {
                x[p] = u;
                continue;
              } else if (p === "transform") {
                kc(this, u, t);
                continue;
              }
            } else p in a || (p = pr(p) || p);
            if (
              T ||
              ((f || f === 0) && (c || c === 0) && !ac.test(u) && p in a)
            )
              (_ = (h + "").substr((c + "").length)),
                f || (f = 0),
                (m = Gt(u) || (p in ve.units ? ve.units[p] : _)),
                _ !== m && (c = Mi(t, p, h, m)),
                (this._pt = new re(
                  this._pt,
                  T ? x : a,
                  p,
                  c,
                  (b ? Wi(c, b + f) : f) - c,
                  !T && (m === "px" || p === "zIndex") && e.autoRound !== !1
                    ? uc
                    : uo
                )),
                (this._pt.u = m || 0),
                _ !== m && m !== "%" && ((this._pt.b = h), (this._pt.r = hc));
            else if (p in a) wc.call(this, t, p, h, b ? b + u : u);
            else if (p in t) this.add(t, p, h || t[p], b ? b + u : u, r, s);
            else {
              ms(p, u);
              continue;
            }
            T || (p in a ? A.push(p, 0, a[p]) : A.push(p, 1, h || t[p])),
              o.push(p);
          }
        }
      w && ao(this);
    },
    render: function (t, e) {
      if (e.tween._time || !_o())
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      else e.styles.revert();
    },
    get: ui,
    aliases: ci,
    getSetter: function (t, e, i) {
      var r = ci[e];
      return (
        r && r.indexOf(",") < 0 && (e = r),
        e in fi && e !== Ye && (t._gsap.x || ui(t, "x"))
          ? i && tl === i
            ? e === "scale"
              ? pc
              : dc
            : (tl = i || {}) && (e === "scale" ? gc : _c)
          : t.style && !_s(t.style[e])
          ? cc
          : ~e.indexOf("-")
          ? fc
          : bs(t, e)
      );
    },
    core: { _removeProperty: Fr, _getMatrix: vo },
  };
  ee.utils.checkPrefix = pr;
  ee.core.getStyleSaver = cl;
  (function (n, t, e, i) {
    var r = ie(n + "," + t + "," + e, function (s) {
      fi[s] = 1;
    });
    ie(t, function (s) {
      (ve.units[s] = "deg"), (gl[s] = 1);
    }),
      (ci[r[13]] = n + "," + t),
      ie(i, function (s) {
        var o = s.split(":");
        ci[o[1]] = r[o[0]];
      });
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
  );
  ie(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (n) {
      ve.units[n] = "px";
    }
  );
  ee.registerPlugin(yo);
  var O = ee.registerPlugin(yo) || ee,
    cf = O.core.Tween;
  var $ = document.documentElement,
    Ss = document.body,
    df = $.hasAttribute("data-debug");
  var Cs = class extends X {
    constructor(n) {
      super(n);
    }
    init() {
      O.delayedCall(window.readyDelay, () => {
        this.setSizes();
      });
      let n = new fa({ enterDelay: 0, exitDelay: 1400, transitions: {} });
      n.on("loading", (t, e) => {
        $.classList.remove("has-dom-ready"),
          $.classList.remove("has-dom-ready-callback"),
          $.classList.remove("has-dom-animated"),
          $.classList.add("is-preloading"),
          this.call("close", "Nav"),
          console.log("loading");
      }),
        n.on("loaded", (t, e, i) => {
          this.call("destroy", e, "app"), this.call("update", i, "app");
          let r = window.location.href;
          typeof window._paq != "undefined" &&
            (_paq.push(["setCustomUrl", r]),
            _paq.push(["setDocumentTitle", document.title]),
            _paq.push(["trackPageView"])),
            O.delayedCall(window.readyDelay, () => {
              $.setAttribute("data-theme", ""),
                $.classList.remove("is-preloading"),
                $.classList.add("has-dom-ready"),
                this.setSizes(),
                Ss.setAttribute("class", i.getAttribute("class")),
                O.delayedCall(window.readyCallbackDelay, () => {
                  $.classList.add("has-dom-ready-callback"),
                    $.classList.add("has-dom-animated");
                });
            });
        });
    }
    setSizes() {
      window.innerHeight - document.documentElement.clientHeight > 0
        ? (Ss.classList.add("has-scrollbar-y"),
          document.documentElement.style.setProperty(
            "--scrollbar",
            `${window.innerHeight - document.documentElement.clientHeight}px`
          ))
        : Ss.classList.remove("has-scrollbar-y"),
        document.documentElement.style.setProperty(
          "--app-availheight",
          `${window.screen.availHeight}px`
        ),
        document.documentElement.style.setProperty(
          "--app-height",
          `${window.innerHeight}px`
        ),
        document.documentElement.style.setProperty(
          "--app-height-negative",
          `-${window.innerHeight}px`
        ),
        window.addEventListener("resize", () => {
          window.isMobile ||
            (document.documentElement.style.setProperty(
              "--app-availheight",
              `${window.screen.availHeight}px`
            ),
            document.documentElement.style.setProperty(
              "--app-height",
              `${window.innerHeight}px`
            ),
            document.documentElement.style.setProperty(
              "--app-height-negative",
              `-${window.innerHeight}px`
            ));
        });
    }
  };
  function wo() {
    return (
      (wo = Object.assign
        ? Object.assign.bind()
        : function (n) {
            for (var t = 1; t < arguments.length; t++) {
              var e = arguments[t];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            }
            return n;
          }),
      wo.apply(this, arguments)
    );
  }
  function ks(n, t, e) {
    return Math.max(n, Math.min(t, e));
  }
  var bo = class {
      advance(t) {
        var e;
        if (!this.isRunning) return;
        let i = !1;
        if (this.lerp)
          (this.value =
            ((r = this.value),
            (s = this.to),
            (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * r + o * s)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (i = !0));
        else {
          this.currentTime += t;
          let a = ks(0, this.currentTime / this.duration, 1);
          i = a >= 1;
          let l = i ? 1 : this.easing(a);
          this.value = this.from + (this.to - this.from) * l;
        }
        var r, s, o;
        (e = this.onUpdate) == null ||
          e.call(this, this.value, { completed: i }),
          i && this.stop();
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        t,
        e,
        { lerp: i = 0.1, duration: r = 1, easing: s = (a) => a, onUpdate: o }
      ) {
        (this.from = this.value = t),
          (this.to = e),
          (this.lerp = i),
          (this.duration = r),
          (this.easing = s),
          (this.currentTime = 0),
          (this.isRunning = !0),
          (this.onUpdate = o);
      }
    },
    xo = class {
      constructor({ wrapper: t, content: e, autoResize: i = !0 } = {}) {
        if (
          ((this.resize = () => {
            this.onWrapperResize(), this.onContentResize();
          }),
          (this.onWrapperResize = () => {
            this.wrapper === window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          }),
          (this.onContentResize = () => {
            (this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth);
          }),
          (this.wrapper = t),
          (this.content = e),
          i)
        ) {
          let r = (function (s, o) {
            let a;
            return function () {
              let l = arguments,
                h = this;
              clearTimeout(a),
                (a = setTimeout(function () {
                  s.apply(h, l);
                }, 250));
            };
          })(this.resize);
          this.wrapper !== window &&
            ((this.wrapperResizeObserver = new ResizeObserver(r)),
            this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(r)),
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
      }
      destroy() {
        var t, e;
        (t = this.wrapperResizeObserver) == null || t.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect();
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    vl = () => ({
      events: {},
      emit(n, ...t) {
        let e = this.events[n] || [];
        for (let i = 0, r = e.length; i < r; i++) e[i](...t);
      },
      on(n, t) {
        var e;
        return (
          ((e = this.events[n]) != null && e.push(t)) || (this.events[n] = [t]),
          () => {
            var i;
            this.events[n] =
              (i = this.events[n]) == null ? void 0 : i.filter((r) => t !== r);
          }
        );
      },
    }),
    To = class {
      constructor(
        t,
        {
          wheelMultiplier: e = 1,
          touchMultiplier: i = 2,
          normalizeWheel: r = !1,
        }
      ) {
        (this.onTouchStart = (s) => {
          let { clientX: o, clientY: a } = s.targetTouches
            ? s.targetTouches[0]
            : s;
          (this.touchStart.x = o),
            (this.touchStart.y = a),
            (this.lastDelta = { x: 0, y: 0 });
        }),
          (this.onTouchMove = (s) => {
            let { clientX: o, clientY: a } = s.targetTouches
                ? s.targetTouches[0]
                : s,
              l = -(o - this.touchStart.x) * this.touchMultiplier,
              h = -(a - this.touchStart.y) * this.touchMultiplier;
            (this.touchStart.x = o),
              (this.touchStart.y = a),
              (this.lastDelta = { x: l, y: h }),
              this.emitter.emit("scroll", {
                type: "touch",
                deltaX: l,
                deltaY: h,
                event: s,
              });
          }),
          (this.onTouchEnd = (s) => {
            this.emitter.emit("scroll", {
              type: "touch",
              inertia: !0,
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: s,
            });
          }),
          (this.onWheel = (s) => {
            let { deltaX: o, deltaY: a } = s;
            this.normalizeWheel &&
              ((o = ks(-100, o, 100)), (a = ks(-100, a, 100))),
              (o *= this.wheelMultiplier),
              (a *= this.wheelMultiplier),
              this.emitter.emit("scroll", {
                type: "wheel",
                deltaX: o,
                deltaY: a,
                event: s,
              });
          }),
          (this.element = t),
          (this.wheelMultiplier = e),
          (this.touchMultiplier = i),
          (this.normalizeWheel = r),
          (this.touchStart = { x: null, y: null }),
          (this.emitter = vl()),
          this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
          this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        (this.emitter.events = {}),
          this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1,
          }),
          this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
    },
    As = class {
      constructor({
        direction: t,
        gestureDirection: e,
        mouseMultiplier: i,
        smooth: r,
        wrapper: s = window,
        content: o = document.documentElement,
        wheelEventsTarget: a = s,
        smoothWheel: l = r == null || r,
        smoothTouch: h = !1,
        syncTouch: u = !1,
        syncTouchLerp: f = 0.1,
        touchInertiaMultiplier: c = 35,
        duration: d,
        easing: g = (w) => Math.min(1, 1.001 - Math.pow(2, -10 * w)),
        lerp: p = d ? null : 0.1,
        infinite: _ = !1,
        orientation: m = t != null ? t : "vertical",
        gestureOrientation: b = e != null ? e : "vertical",
        touchMultiplier: T = 1,
        wheelMultiplier: y = i != null ? i : 1,
        normalizeWheel: x = !1,
        autoResize: k = !0,
      } = {}) {
        (this.onVirtualScroll = ({
          type: w,
          inertia: A,
          deltaX: C,
          deltaY: M,
          event: D,
        }) => {
          if (D.ctrlKey) return;
          let L = w === "touch",
            R = w === "wheel";
          if (
            (this.options.gestureOrientation === "vertical" && M === 0) ||
            (this.options.gestureOrientation === "horizontal" && C === 0) ||
            (L &&
              this.options.gestureOrientation === "vertical" &&
              this.scroll === 0 &&
              !this.options.infinite &&
              M <= 0) ||
            D.composedPath().find(
              (F) =>
                (F == null || F.hasAttribute == null
                  ? void 0
                  : F.hasAttribute("data-lenis-prevent")) ||
                (L &&
                  (F == null || F.hasAttribute == null
                    ? void 0
                    : F.hasAttribute("data-lenis-prevent-touch"))) ||
                (R &&
                  (F == null || F.hasAttribute == null
                    ? void 0
                    : F.hasAttribute("data-lenis-prevent-wheel")))
            )
          )
            return;
          if (this.isStopped || this.isLocked) return void D.preventDefault();
          if (
            ((this.isSmooth =
              ((this.options.smoothTouch || this.options.syncTouch) && L) ||
              (this.options.smoothWheel && R)),
            !this.isSmooth)
          )
            return (this.isScrolling = !1), void this.animate.stop();
          D.preventDefault();
          let I = M;
          this.options.gestureOrientation === "both"
            ? (I = Math.abs(M) > Math.abs(C) ? M : C)
            : this.options.gestureOrientation === "horizontal" && (I = C);
          let z = L && this.options.syncTouch,
            P = L && A && Math.abs(I) > 1;
          P && (I = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + I,
              wo(
                { programmatic: !1 },
                z && { lerp: P ? this.syncTouchLerp : 0.4 }
              )
            );
        }),
          (this.onScroll = () => {
            if (!this.isScrolling) {
              let w = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.velocity = 0),
                (this.direction = Math.sign(this.animatedScroll - w)),
                this.emit();
            }
          }),
          t &&
            console.warn(
              "Lenis: `direction` option is deprecated, use `orientation` instead"
            ),
          e &&
            console.warn(
              "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
            ),
          i &&
            console.warn(
              "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
            ),
          r &&
            console.warn(
              "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
            ),
          (window.lenisVersion = "1.0.15"),
          (s !== document.documentElement && s !== document.body) ||
            (s = window),
          (this.options = {
            wrapper: s,
            content: o,
            wheelEventsTarget: a,
            smoothWheel: l,
            smoothTouch: h,
            syncTouch: u,
            syncTouchLerp: f,
            touchInertiaMultiplier: c,
            duration: d,
            easing: g,
            lerp: p,
            infinite: _,
            gestureOrientation: b,
            orientation: m,
            touchMultiplier: T,
            wheelMultiplier: y,
            normalizeWheel: x,
            autoResize: k,
          }),
          (this.dimensions = new xo({ wrapper: s, content: o, autoResize: k })),
          this.rootElement.classList.add("lenis"),
          (this.velocity = 0),
          (this.isStopped = !1),
          (this.isSmooth = l || h),
          (this.isScrolling = !1),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          (this.animate = new bo()),
          (this.emitter = vl()),
          this.options.wrapper.addEventListener("scroll", this.onScroll, {
            passive: !1,
          }),
          (this.virtualScroll = new To(a, {
            touchMultiplier: T,
            wheelMultiplier: y,
            normalizeWheel: x,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll);
      }
      destroy() {
        (this.emitter.events = {}),
          this.options.wrapper.removeEventListener("scroll", this.onScroll, {
            passive: !1,
          }),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.rootElement.classList.remove("lenis"),
          this.rootElement.classList.remove("lenis-smooth"),
          this.rootElement.classList.remove("lenis-scrolling"),
          this.rootElement.classList.remove("lenis-stopped");
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      off(t, e) {
        var i;
        this.emitter.events[t] =
          (i = this.emitter.events[t]) == null
            ? void 0
            : i.filter((r) => e !== r);
      }
      setScroll(t) {
        this.isHorizontal
          ? (this.rootElement.scrollLeft = t)
          : (this.rootElement.scrollTop = t);
      }
      resize() {
        this.dimensions.resize();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.velocity = 0),
          this.animate.stop();
      }
      start() {
        (this.isStopped = !1), this.reset();
      }
      stop() {
        (this.isStopped = !0), this.animate.stop(), this.reset();
      }
      raf(t) {
        let e = t - (this.time || t);
        (this.time = t), this.animate.advance(0.001 * e);
      }
      scrollTo(
        t,
        {
          offset: e = 0,
          immediate: i = !1,
          lock: r = !1,
          duration: s = this.options.duration,
          easing: o = this.options.easing,
          lerp: a = !s && this.options.lerp,
          onComplete: l = null,
          force: h = !1,
          programmatic: u = !0,
        } = {}
      ) {
        if (!this.isStopped || h) {
          if (["top", "left", "start"].includes(t)) t = 0;
          else if (["bottom", "right", "end"].includes(t)) t = this.limit;
          else {
            var f;
            let c;
            if (
              (typeof t == "string"
                ? (c = document.querySelector(t))
                : (f = t) != null && f.nodeType && (c = t),
              c)
            ) {
              if (this.options.wrapper !== window) {
                let g = this.options.wrapper.getBoundingClientRect();
                e -= this.isHorizontal ? g.left : g.top;
              }
              let d = c.getBoundingClientRect();
              t = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
            }
          }
          if (typeof t == "number") {
            if (
              ((t += e),
              (t = Math.round(t)),
              this.options.infinite
                ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                : (t = ks(0, t, this.limit)),
              i)
            )
              return (
                (this.animatedScroll = this.targetScroll = t),
                this.setScroll(this.scroll),
                this.reset(),
                this.emit(),
                void (l == null || l())
              );
            if (!u) {
              if (t === this.targetScroll) return;
              this.targetScroll = t;
            }
            this.animate.fromTo(this.animatedScroll, t, {
              duration: s,
              easing: o,
              lerp: a,
              onUpdate: (c, { completed: d }) => {
                r && (this.isLocked = !0),
                  (this.isScrolling = !0),
                  (this.velocity = c - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = c),
                  this.setScroll(this.scroll),
                  u && (this.targetScroll = c),
                  d &&
                    (r && (this.isLocked = !1),
                    requestAnimationFrame(() => {
                      this.isScrolling = !1;
                    }),
                    (this.velocity = 0),
                    l == null || l()),
                  this.emit();
              },
            });
          }
        }
      }
      get rootElement() {
        return this.options.wrapper === window
          ? this.options.content
          : this.options.wrapper;
      }
      get limit() {
        return this.isHorizontal
          ? this.dimensions.limit.x
          : this.dimensions.limit.y;
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        return this.isHorizontal
          ? this.rootElement.scrollLeft
          : this.rootElement.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? ((this.animatedScroll % (t = this.limit)) + t) % t
          : this.animatedScroll;
        var t;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isSmooth() {
        return this.__isSmooth;
      }
      set isSmooth(t) {
        this.__isSmooth !== t &&
          (this.rootElement.classList.toggle("lenis-smooth", t),
          (this.__isSmooth = t));
      }
      get isScrolling() {
        return this.__isScrolling;
      }
      set isScrolling(t) {
        this.__isScrolling !== t &&
          (this.rootElement.classList.toggle("lenis-scrolling", t),
          (this.__isScrolling = t));
      }
      get isStopped() {
        return this.__isStopped;
      }
      set isStopped(t) {
        this.__isStopped !== t &&
          (this.rootElement.classList.toggle("lenis-stopped", t),
          (this.__isStopped = t));
      }
    };
  function yl(n, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function Ac(n, t, e) {
    return t && yl(n.prototype, t), e && yl(n, e), n;
  }
  var Jt,
    So,
    Mc,
    Se,
    Ei,
    Di,
    _r,
    bl,
    Ui,
    Hr,
    xl,
    di,
    Ge,
    Tl = function () {
      return (
        Jt ||
        (typeof window != "undefined" &&
          (Jt = window.gsap) &&
          Jt.registerPlugin &&
          Jt)
      );
    };
  var Sl = 1,
    gr = [],
    j = [],
    Xe = [],
    $r = Date.now,
    Co = function (t, e) {
      return e;
    },
    Ec = function () {
      var t = Hr.core,
        e = t.bridge || {},
        i = t._scrollers,
        r = t._proxies;
      i.push.apply(i, j),
        r.push.apply(r, Xe),
        (j = i),
        (Xe = r),
        (Co = function (o, a) {
          return e[o](a);
        });
    },
    gi = function (t, e) {
      return ~Xe.indexOf(t) && Xe[Xe.indexOf(t) + 1][e];
    },
    Yr = function (t) {
      return !!~xl.indexOf(t);
    },
    ye = function (t, e, i, r, s) {
      return t.addEventListener(e, i, { passive: !r, capture: !!s });
    },
    se = function (t, e, i, r) {
      return t.removeEventListener(e, i, !!r);
    },
    Ms = "scrollLeft",
    Es = "scrollTop",
    ko = function () {
      return (di && di.isPressed) || j.cache++;
    },
    Ds = function (t, e) {
      var i = function r(s) {
        if (s || s === 0) {
          Sl && (Se.history.scrollRestoration = "manual");
          var o = di && di.isPressed;
          (s = r.v = Math.round(s) || (di && di.iOS ? 1 : 0)),
            t(s),
            (r.cacheID = j.cache),
            o && Co("ss", s);
        } else
          (e || j.cache !== r.cacheID || Co("ref")) &&
            ((r.cacheID = j.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (i.offset = 0), t && i;
    },
    Zt = {
      s: Ms,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Ds(function (n) {
        return arguments.length
          ? Se.scrollTo(n, Ot.sc())
          : Se.pageXOffset || Ei[Ms] || Di[Ms] || _r[Ms] || 0;
      }),
    },
    Ot = {
      s: Es,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Zt,
      sc: Ds(function (n) {
        return arguments.length
          ? Se.scrollTo(Zt.sc(), n)
          : Se.pageYOffset || Ei[Es] || Di[Es] || _r[Es] || 0;
      }),
    },
    ne = function (t) {
      return (
        Jt.utils.toArray(t)[0] ||
        (typeof t == "string" && Jt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    pi = function (t, e) {
      var i = e.s,
        r = e.sc;
      Yr(t) && (t = Ei.scrollingElement || Di);
      var s = j.indexOf(t),
        o = r === Ot.sc ? 1 : 2;
      !~s && (s = j.push(t) - 1), j[s + o] || t.addEventListener("scroll", ko);
      var a = j[s + o],
        l =
          a ||
          (j[s + o] =
            Ds(gi(t, i), !0) ||
            (Yr(t)
              ? r
              : Ds(function (h) {
                  return arguments.length ? (t[i] = h) : t[i];
                })));
      return (
        (l.target = t),
        a || (l.smooth = Jt.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ls = function (t, e, i) {
      var r = t,
        s = t,
        o = $r(),
        a = o,
        l = e || 50,
        h = Math.max(500, l * 3),
        u = function (g, p) {
          var _ = $r();
          p || _ - o > l
            ? ((s = r), (r = g), (a = o), (o = _))
            : i
            ? (r += g)
            : (r = s + ((g - s) / (_ - a)) * (o - a));
        },
        f = function () {
          (s = r = i ? 0 : r), (a = o = 0);
        },
        c = function (g) {
          var p = a,
            _ = s,
            m = $r();
          return (
            (g || g === 0) && g !== r && u(g),
            o === a || m - a > h
              ? 0
              : ((r + (i ? _ : -_)) / ((i ? m : o) - p)) * 1e3
          );
        };
      return { update: u, reset: f, getVelocity: c };
    },
    Wr = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    wl = function (t) {
      var e = Math.max.apply(Math, t),
        i = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(i) ? e : i;
    },
    Cl = function () {
      (Hr = Jt.core.globals().ScrollTrigger), Hr && Hr.core && Ec();
    },
    kl = function (t) {
      return (
        (Jt = t || Tl()),
        Jt &&
          typeof document != "undefined" &&
          document.body &&
          ((Se = window),
          (Ei = document),
          (Di = Ei.documentElement),
          (_r = Ei.body),
          (xl = [Se, Ei, Di, _r]),
          (Mc = Jt.utils.clamp),
          (Ui = "onpointerenter" in _r ? "pointer" : "mouse"),
          (bl = Ct.isTouch =
            Se.matchMedia &&
            Se.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Se ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Ge = Ct.eventTypes =
            (
              "ontouchstart" in Di
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Di
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Sl = 0);
          }, 500),
          Cl(),
          (So = 1)),
        So
      );
    };
  Zt.op = Ot;
  j.cache = 0;
  var Ct = (function () {
    function n(e) {
      this.init(e);
    }
    var t = n.prototype;
    return (
      (t.init = function (i) {
        So || kl(Jt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Hr || Cl();
        var r = i.tolerance,
          s = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          h = i.debounce,
          u = i.preventDefault,
          f = i.onStop,
          c = i.onStopDelay,
          d = i.ignore,
          g = i.wheelSpeed,
          p = i.event,
          _ = i.onDragStart,
          m = i.onDragEnd,
          b = i.onDrag,
          T = i.onPress,
          y = i.onRelease,
          x = i.onRight,
          k = i.onLeft,
          w = i.onUp,
          A = i.onDown,
          C = i.onChangeX,
          M = i.onChangeY,
          D = i.onChange,
          L = i.onToggleX,
          R = i.onToggleY,
          I = i.onHover,
          z = i.onHoverEnd,
          P = i.onMove,
          F = i.ignoreCheck,
          H = i.isNormalizer,
          J = i.onGestureStart,
          v = i.onGestureEnd,
          ut = i.onWheel,
          pt = i.onEnable,
          Rt = i.onDisable,
          lt = i.onClick,
          ft = i.scrollSpeed,
          Z = i.capture,
          ct = i.allowClicks,
          dt = i.lockAxis,
          he = i.onLockAxis;
        (this.target = a = ne(a) || Di),
          (this.vars = i),
          d && (d = Jt.utils.toArray(d)),
          (r = r || 1e-9),
          (s = s || 0),
          (g = g || 1),
          (ft = ft || 1),
          (o = o || "wheel,touch,pointer"),
          (h = h !== !1),
          l || (l = parseFloat(Se.getComputedStyle(_r).lineHeight) || 22);
        var tt,
          Vt,
          V,
          kt,
          $t,
          ue,
          It,
          S = this,
          we = 0,
          nt = 0,
          Ae = pi(a, Zt),
          Me = pi(a, Ot),
          Ve = Ae(),
          zt = Me(),
          si =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Ge[0] === "pointerdown",
          Ee = Yr(a),
          ot = a.ownerDocument || Ei,
          Ft = [0, 0, 0],
          mt = [0, 0, 0],
          Be = 0,
          ce = function () {
            return (Be = $r());
          },
          qt = function (E, N) {
            return (
              ((S.event = E) && d && ~d.indexOf(E.target)) ||
              (N && si && E.pointerType !== "touch") ||
              (F && F(E, N))
            );
          },
          We = function () {
            S._vx.reset(), S._vy.reset(), Vt.pause(), f && f(S);
          },
          fe = function () {
            var E = (S.deltaX = wl(Ft)),
              N = (S.deltaY = wl(mt)),
              B = Math.abs(E) >= r,
              Y = Math.abs(N) >= r;
            D && (B || Y) && D(S, E, N, Ft, mt),
              B &&
                (x && S.deltaX > 0 && x(S),
                k && S.deltaX < 0 && k(S),
                C && C(S),
                L && S.deltaX < 0 != we < 0 && L(S),
                (we = S.deltaX),
                (Ft[0] = Ft[1] = Ft[2] = 0)),
              Y &&
                (A && S.deltaY > 0 && A(S),
                w && S.deltaY < 0 && w(S),
                M && M(S),
                R && S.deltaY < 0 != nt < 0 && R(S),
                (nt = S.deltaY),
                (mt[0] = mt[1] = mt[2] = 0)),
              (kt || V) && (P && P(S), V && (b(S), (V = !1)), (kt = !1)),
              ue && !(ue = !1) && he && he(S),
              $t && (ut(S), ($t = !1)),
              (tt = 0);
          },
          be = function (E, N, B) {
            (Ft[B] += E),
              (mt[B] += N),
              S._vx.update(E),
              S._vy.update(N),
              h ? tt || (tt = requestAnimationFrame(fe)) : fe();
          },
          it = function (E, N) {
            dt &&
              !It &&
              ((S.axis = It = Math.abs(E) > Math.abs(N) ? "x" : "y"),
              (ue = !0)),
              It !== "y" && ((Ft[2] += E), S._vx.update(E, !0)),
              It !== "x" && ((mt[2] += N), S._vy.update(N, !0)),
              h ? tt || (tt = requestAnimationFrame(fe)) : fe();
          },
          rt = function (E) {
            if (!qt(E, 1)) {
              E = Wr(E, u);
              var N = E.clientX,
                B = E.clientY,
                Y = N - S.x,
                Nt = B - S.y,
                G = S.isDragging;
              (S.x = N),
                (S.y = B),
                (G ||
                  Math.abs(S.startX - N) >= s ||
                  Math.abs(S.startY - B) >= s) &&
                  (b && (V = !0),
                  G || (S.isDragging = !0),
                  it(Y, Nt),
                  G || (_ && _(S)));
            }
          },
          wi = (S.onPress = function (et) {
            qt(et, 1) ||
              ((S.axis = It = null),
              Vt.pause(),
              (S.isPressed = !0),
              (et = Wr(et)),
              (we = nt = 0),
              (S.startX = S.x = et.clientX),
              (S.startY = S.y = et.clientY),
              S._vx.reset(),
              S._vy.reset(),
              ye(H ? a : ot, Ge[1], rt, u, !0),
              (S.deltaX = S.deltaY = 0),
              T && T(S));
          }),
          xe = function (E) {
            if (!qt(E, 1)) {
              se(H ? a : ot, Ge[1], rt, !0);
              var N =
                  S.isDragging &&
                  (Math.abs(S.x - S.startX) > 3 ||
                    Math.abs(S.y - S.startY) > 3),
                B = Wr(E);
              N ||
                (S._vx.reset(),
                S._vy.reset(),
                u &&
                  ct &&
                  Jt.delayedCall(0.08, function () {
                    if ($r() - Be > 300 && !E.defaultPrevented) {
                      if (E.target.click) E.target.click();
                      else if (ot.createEvent) {
                        var Y = ot.createEvent("MouseEvents");
                        Y.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Se,
                          1,
                          B.screenX,
                          B.screenY,
                          B.clientX,
                          B.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          E.target.dispatchEvent(Y);
                      }
                    }
                  })),
                (S.isDragging = S.isGesturing = S.isPressed = !1),
                f && !H && Vt.restart(!0),
                m && N && m(S),
                y && y(S, N);
            }
          },
          He = function (E) {
            return (
              E.touches &&
              E.touches.length > 1 &&
              (S.isGesturing = !0) &&
              J(E, S.isDragging)
            );
          },
          qe = function () {
            return (S.isGesturing = !1) || v(S);
          },
          je = function (E) {
            if (!qt(E)) {
              var N = Ae(),
                B = Me();
              be((N - Ve) * ft, (B - zt) * ft, 1),
                (Ve = N),
                (zt = B),
                f && Vt.restart(!0);
            }
          },
          Ri = function (E) {
            if (!qt(E)) {
              (E = Wr(E, u)), ut && ($t = !0);
              var N =
                (E.deltaMode === 1
                  ? l
                  : E.deltaMode === 2
                  ? Se.innerHeight
                  : 1) * g;
              be(E.deltaX * N, E.deltaY * N, 0), f && !H && Vt.restart(!0);
            }
          },
          tr = function (E) {
            if (!qt(E)) {
              var N = E.clientX,
                B = E.clientY,
                Y = N - S.x,
                Nt = B - S.y;
              (S.x = N), (S.y = B), (kt = !0), (Y || Nt) && it(Y, Nt);
            }
          },
          ni = function (E) {
            (S.event = E), I(S);
          },
          Cr = function (E) {
            (S.event = E), z(S);
          },
          kr = function (E) {
            return qt(E) || (Wr(E, u) && lt(S));
          };
        (Vt = S._dc = Jt.delayedCall(c || 0.25, We).pause()),
          (S.deltaX = S.deltaY = 0),
          (S._vx = Ls(0, 50, !0)),
          (S._vy = Ls(0, 50, !0)),
          (S.scrollX = Ae),
          (S.scrollY = Me),
          (S.isDragging = S.isGesturing = S.isPressed = !1),
          (S.enable = function (et) {
            return (
              S.isEnabled ||
                (ye(Ee ? ot : a, "scroll", ko),
                o.indexOf("scroll") >= 0 && ye(Ee ? ot : a, "scroll", je, u, Z),
                o.indexOf("wheel") >= 0 && ye(a, "wheel", Ri, u, Z),
                ((o.indexOf("touch") >= 0 && bl) ||
                  o.indexOf("pointer") >= 0) &&
                  (ye(a, Ge[0], wi, u, Z),
                  ye(ot, Ge[2], xe),
                  ye(ot, Ge[3], xe),
                  ct && ye(a, "click", ce, !1, !0),
                  lt && ye(a, "click", kr),
                  J && ye(ot, "gesturestart", He),
                  v && ye(ot, "gestureend", qe),
                  I && ye(a, Ui + "enter", ni),
                  z && ye(a, Ui + "leave", Cr),
                  P && ye(a, Ui + "move", tr)),
                (S.isEnabled = !0),
                et && et.type && wi(et),
                pt && pt(S)),
              S
            );
          }),
          (S.disable = function () {
            S.isEnabled &&
              (gr.filter(function (et) {
                return et !== S && Yr(et.target);
              }).length || se(Ee ? ot : a, "scroll", ko),
              S.isPressed &&
                (S._vx.reset(), S._vy.reset(), se(H ? a : ot, Ge[1], rt, !0)),
              se(Ee ? ot : a, "scroll", je, Z),
              se(a, "wheel", Ri, Z),
              se(a, Ge[0], wi, Z),
              se(ot, Ge[2], xe),
              se(ot, Ge[3], xe),
              se(a, "click", ce, !0),
              se(a, "click", kr),
              se(ot, "gesturestart", He),
              se(ot, "gestureend", qe),
              se(a, Ui + "enter", ni),
              se(a, Ui + "leave", Cr),
              se(a, Ui + "move", tr),
              (S.isEnabled = S.isPressed = S.isDragging = !1),
              Rt && Rt(S));
          }),
          (S.kill = function () {
            S.disable();
            var et = gr.indexOf(S);
            et >= 0 && gr.splice(et, 1), di === S && (di = 0);
          }),
          gr.push(S),
          H && Yr(a) && (di = S),
          S.enable(p);
      }),
      Ac(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  Ct.version = "3.11.2";
  Ct.create = function (n) {
    return new Ct(n);
  };
  Ct.register = kl;
  Ct.getAll = function () {
    return gr.slice();
  };
  Ct.getById = function (n) {
    return gr.filter(function (t) {
      return t.vars.id === n;
    })[0];
  };
  Tl() && Jt.registerPlugin(Ct);
  var W,
    yr,
    Q,
    Tt,
    mi,
    St,
    $l,
    js,
    Ks,
    br,
    Hs,
    Os,
    te,
    Js,
    Ro,
    ae,
    Al,
    Ml,
    wr,
    Yl,
    Ao,
    Gl,
    ze,
    Xl,
    Ul,
    Vl,
    Li,
    Io,
    Wo,
    Mo,
    Ps = 1,
    le = Date.now,
    Eo = le(),
    Ne = 0,
    Rs = 0,
    El = function () {
      return (Js = 1);
    },
    Dl = function () {
      return (Js = 0);
    },
    ti = function (t) {
      return t;
    },
    Xr = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    ql = function () {
      return typeof window != "undefined";
    },
    jl = function () {
      return W || (ql() && (W = window.gsap) && W.registerPlugin && W);
    },
    Ki = function (t) {
      return !!~$l.indexOf(t);
    },
    Kl = function (t) {
      return (
        gi(t, "getBoundingClientRect") ||
        (Ki(t)
          ? function () {
              return (qs.width = Q.innerWidth), (qs.height = Q.innerHeight), qs;
            }
          : function () {
              return _i(t);
            })
      );
    },
    Dc = function (t, e, i) {
      var r = i.d,
        s = i.d2,
        o = i.a;
      return (o = gi(t, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (e ? Q["inner" + s] : t["client" + s]) || 0;
          };
    },
    Lc = function (t, e) {
      return !e || ~Xe.indexOf(t)
        ? Kl(t)
        : function () {
            return qs;
          };
    },
    Oi = function (t, e) {
      var i = e.s,
        r = e.d2,
        s = e.d,
        o = e.a;
      return (i = "scroll" + r) && (o = gi(t, i))
        ? o() - Kl(t)()[s]
        : Ki(t)
        ? (mi[i] || St[i]) -
          (Q["inner" + r] || mi["client" + r] || St["client" + r])
        : t[i] - t["offset" + r];
    },
    Is = function (t, e) {
      for (var i = 0; i < wr.length; i += 3)
        (!e || ~e.indexOf(wr[i + 1])) && t(wr[i], wr[i + 1], wr[i + 2]);
    },
    Ue = function (t) {
      return typeof t == "string";
    },
    ke = function (t) {
      return typeof t == "function";
    },
    Ur = function (t) {
      return typeof t == "number";
    },
    $s = function (t) {
      return typeof t == "object";
    };
  var Gr = function (t, e, i) {
      return t && t.progress(e ? 0 : 1) && i && t.pause();
    },
    Do = function (t, e) {
      if (t.enabled) {
        var i = e(t);
        i && i.totalTime && (t.callbackAnimation = i);
      }
    },
    mr = Math.abs;
  var Ql = "left",
    Jl = "top",
    Ho = "right",
    $o = "bottom",
    qi = "width",
    ji = "height",
    qr = "Right",
    jr = "Left",
    Kr = "Top",
    Qr = "Bottom",
    Pt = "padding",
    Fe = "margin",
    Tr = "Width",
    Yo = "Height",
    oe = "px",
    ii = function (t) {
      return Q.getComputedStyle(t);
    },
    Oc = function (t) {
      var e = ii(t).position;
      t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
    },
    Ll = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    _i = function (t, e) {
      var i =
          e &&
          ii(t)[Ro] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          W.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = t.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    zo = function (t, e) {
      var i = e.d2;
      return t["offset" + i] || t["client" + i] || 0;
    },
    Zl = function (t) {
      var e = [],
        i = t.labels,
        r = t.duration(),
        s;
      for (s in i) e.push(i[s] / r);
      return e;
    },
    Pc = function (t) {
      return function (e) {
        return W.utils.snap(Zl(t), e);
      };
    },
    Go = function (t) {
      var e = W.utils.snap(t),
        i =
          Array.isArray(t) &&
          t.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return e(r);
            if (s > 0) {
              for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
              return i[a - 1];
            } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
            return i[0];
          }
        : function (r, s, o) {
            o === void 0 && (o = 0.001);
            var a = e(r);
            return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
              ? a
              : e(s < 0 ? r - t : r + t);
          };
    },
    Rc = function (t) {
      return function (e, i) {
        return Go(Zl(t))(e, i.direction);
      };
    },
    zs = function (t, e, i, r) {
      return i.split(",").forEach(function (s) {
        return t(e, s, r);
      });
    },
    Xt = function (t, e, i, r, s) {
      return t.addEventListener(e, i, { passive: !r, capture: !!s });
    },
    Ht = function (t, e, i, r) {
      return t.removeEventListener(e, i, !!r);
    },
    Fs = function (t, e, i) {
      return i && i.wheelHandler && t(e, "wheel", i);
    },
    Ol = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ns = { toggleActions: "play", anticipatePin: 0 },
    Qs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Ys = function (t, e) {
      if (Ue(t)) {
        var i = t.indexOf("="),
          r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
        ~i && (t.indexOf("%") > i && (r *= e / 100), (t = t.substr(0, i - 1))),
          (t =
            r +
            (t in Qs
              ? Qs[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    Bs = function (t, e, i, r, s, o, a, l) {
      var h = s.startColor,
        u = s.endColor,
        f = s.fontSize,
        c = s.indent,
        d = s.fontWeight,
        g = Tt.createElement("div"),
        p = Ki(i) || gi(i, "pinType") === "fixed",
        _ = t.indexOf("scroller") !== -1,
        m = p ? St : i,
        b = t.indexOf("start") !== -1,
        T = b ? h : u,
        y =
          "border-color:" +
          T +
          ";font-size:" +
          f +
          ";color:" +
          T +
          ";font-weight:" +
          d +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((_ || l) && p ? "fixed;" : "absolute;")),
        (_ || l || !p) &&
          (y += (r === Ot ? Ho : $o) + ":" + (o + parseFloat(c)) + "px;"),
        a &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (g._isStart = b),
        g.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (g.style.cssText = y),
        (g.innerText = e || e === 0 ? t + "-" + e : t),
        m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g),
        (g._offset = g["offset" + r.op.d2]),
        Gs(g, 0, r, b),
        g
      );
    },
    Gs = function (t, e, i, r) {
      var s = { display: "block" },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      (t._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + o + Tr] = 1),
        (s["border" + a + Tr] = 0),
        (s[i.p] = e + "px"),
        W.set(t, s);
    },
    K = [],
    Fo = {},
    No,
    Pl = function () {
      return le() - Ne > 34 && Sr();
    },
    vr = function () {
      (!ze || !ze.isPressed || ze.startX > St.clientWidth) &&
        (j.cache++,
        No || (No = requestAnimationFrame(Sr)),
        Ne || Ji("scrollStart"),
        (Ne = le()));
    },
    Lo = function () {
      (Vl = Q.innerWidth), (Ul = Q.innerHeight);
    },
    Vr = function () {
      j.cache++,
        !te &&
          !Gl &&
          !Tt.fullscreenElement &&
          !Tt.webkitFullscreenElement &&
          (!Xl ||
            Vl !== Q.innerWidth ||
            Math.abs(Q.innerHeight - Ul) > Q.innerHeight * 0.25) &&
          js.restart(!0);
    },
    Qi = {},
    Ic = [],
    th = function n() {
      return Ht(U, "scrollEnd", n) || xr(!0);
    },
    Ji = function (t) {
      return (
        (Qi[t] &&
          Qi[t].map(function (e) {
            return e();
          })) ||
        Ic
      );
    },
    Ce = [],
    eh = function (t) {
      for (var e = 0; e < Ce.length; e += 5)
        (!t || (Ce[e + 4] && Ce[e + 4].query === t)) &&
          ((Ce[e].style.cssText = Ce[e + 1]),
          Ce[e].getBBox && Ce[e].setAttribute("transform", Ce[e + 2] || ""),
          (Ce[e + 3].uncache = 1));
    },
    Xo = function (t, e) {
      var i;
      for (ae = 0; ae < K.length; ae++)
        (i = K[ae]),
          i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
      e && eh(e), e || Ji("revert");
    },
    ih = function (t, e) {
      j.cache++,
        (e || !ei) &&
          j.forEach(function (i) {
            return ke(i) && i.cacheID++ && (i.rec = 0);
          }),
        Ue(t) && (Q.history.scrollRestoration = Wo = t);
    },
    ei,
    Xs = 0,
    xr = function (t, e) {
      if (Ne && !t) {
        Xt(U, "scrollEnd", th);
        return;
      }
      (ei = U.isRefreshing = !0),
        j.forEach(function (r) {
          return ke(r) && r.cacheID++ && (r.rec = r());
        });
      var i = Ji("refreshInit");
      Yl && U.sort(),
        e || Xo(),
        j.forEach(function (r) {
          ke(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        K.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        K.forEach(function (r) {
          return (
            r.vars.end === "max" &&
            r.setPositions(
              r.start,
              Math.max(r.start + 1, Oi(r.scroller, r._dir))
            )
          );
        }),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        j.forEach(function (r) {
          ke(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        ih(Wo, 1),
        js.pause(),
        Xs++,
        Sr(2),
        (ei = U.isRefreshing = !1),
        Ji("refresh");
    },
    Rl = 0,
    Us = 1,
    Vi,
    Sr = function (t) {
      if (!ei || t === 2) {
        (U.isUpdating = !0), Vi && Vi.update(0);
        var e = K.length,
          i = le(),
          r = i - Eo >= 50,
          s = e && K[0].scroll();
        if (
          ((Us = Rl > s ? -1 : 1),
          (Rl = s),
          r &&
            (Ne && !Js && i - Ne > 200 && ((Ne = 0), Ji("scrollEnd")),
            (Hs = Eo),
            (Eo = i)),
          Us < 0)
        ) {
          for (ae = e; ae-- > 0; ) K[ae] && K[ae].update(0, r);
          Us = 1;
        } else for (ae = 0; ae < e; ae++) K[ae] && K[ae].update(0, r);
        U.isUpdating = !1;
      }
      No = 0;
    },
    Bo = [
      Ql,
      Jl,
      $o,
      Ho,
      Fe + Qr,
      Fe + qr,
      Fe + Kr,
      Fe + jr,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Vs = Bo.concat([
      qi,
      ji,
      "boxSizing",
      "max" + Tr,
      "max" + Yo,
      "position",
      Fe,
      Pt,
      Pt + Kr,
      Pt + qr,
      Pt + Qr,
      Pt + jr,
    ]),
    zc = function (t, e, i) {
      Jr(i);
      var r = t._gsap;
      if (r.spacerIsNative) Jr(r.spacerState);
      else if (t._gsap.swappedIn) {
        var s = e.parentNode;
        s && (s.insertBefore(t, e), s.removeChild(e));
      }
      t._gsap.swappedIn = !1;
    },
    Oo = function (t, e, i, r) {
      if (!t._gsap.swappedIn) {
        for (var s = Bo.length, o = e.style, a = t.style, l; s--; )
          (l = Bo[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[$o] = a[Ho] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[qi] = zo(t, Zt) + oe),
          (o[ji] = zo(t, Ot) + oe),
          (o[Pt] = a[Fe] = a[Jl] = a[Ql] = "0"),
          Jr(r),
          (a[qi] = a["max" + Tr] = i[qi]),
          (a[ji] = a["max" + Yo] = i[ji]),
          (a[Pt] = i[Pt]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Fc = /([A-Z])/g,
    Jr = function (t) {
      if (t) {
        var e = t.t.style,
          i = t.length,
          r = 0,
          s,
          o;
        for ((t.t._gsap || W.core.getCache(t.t)).uncache = 1; r < i; r += 2)
          (o = t[r + 1]),
            (s = t[r]),
            o
              ? (e[s] = o)
              : e[s] && e.removeProperty(s.replace(Fc, "-$1").toLowerCase());
      }
    },
    Ws = function (t) {
      for (var e = Vs.length, i = t.style, r = [], s = 0; s < e; s++)
        r.push(Vs[s], i[Vs[s]]);
      return (r.t = t), r;
    },
    Nc = function (t, e, i) {
      for (var r = [], s = t.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = t[o]), r.push(a, a in e ? e[a] : t[o + 1]);
      return (r.t = t.t), r;
    },
    qs = { left: 0, top: 0 },
    Il = function (t, e, i, r, s, o, a, l, h, u, f, c, d) {
      ke(t) && (t = t(l)),
        Ue(t) &&
          t.substr(0, 3) === "max" &&
          (t = c + (t.charAt(4) === "=" ? Ys("0" + t.substr(3), i) : 0));
      var g = d ? d.time() : 0,
        p,
        _,
        m;
      if ((d && d.seek(0), Ur(t))) a && Gs(a, i, r, !0);
      else {
        ke(e) && (e = e(l));
        var b = (t || "0").split(" "),
          T,
          y,
          x,
          k;
        (m = ne(e) || St),
          (T = _i(m) || {}),
          (!T || (!T.left && !T.top)) &&
            ii(m).display === "none" &&
            ((k = m.style.display),
            (m.style.display = "block"),
            (T = _i(m)),
            k ? (m.style.display = k) : m.style.removeProperty("display")),
          (y = Ys(b[0], T[r.d])),
          (x = Ys(b[1] || "0", i)),
          (t = T[r.p] - h[r.p] - u + y + s - x),
          a && Gs(a, x, r, i - x < 20 || (a._isStart && x > 20)),
          (i -= i - x);
      }
      if (o) {
        var w = t + i,
          A = o._isStart;
        (p = "scroll" + r.d2),
          Gs(
            o,
            w,
            r,
            (A && w > 20) ||
              (!A && (f ? Math.max(St[p], mi[p]) : o.parentNode[p]) <= w + 1)
          ),
          f &&
            ((h = _i(a)),
            f && (o.style[r.op.p] = h[r.op.p] - r.op.m - o._offset + oe));
      }
      return (
        d &&
          m &&
          ((p = _i(m)),
          d.seek(c),
          (_ = _i(m)),
          (d._caScrollDist = p[r.p] - _[r.p]),
          (t = (t / d._caScrollDist) * c)),
        d && d.seek(g),
        d ? t : Math.round(t)
      );
    },
    Bc = /(webkit|moz|length|cssText|inset)/i,
    zl = function (t, e, i, r) {
      if (t.parentNode !== e) {
        var s = t.style,
          o,
          a;
        if (e === St) {
          (t._stOrig = s.cssText), (a = ii(t));
          for (o in a)
            !+o &&
              !Bc.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = r);
        } else s.cssText = t._stOrig;
        (W.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    },
    Fl = function (t, e) {
      var i = pi(t, e),
        r = "_scroll" + e.p2,
        s,
        o,
        a = function l(h, u, f, c, d) {
          var g = l.tween,
            p = u.onComplete,
            _ = {};
          return (
            (f = f || i()),
            (d = (c && d) || 0),
            (c = c || h - f),
            g && g.kill(),
            (s = Math.round(f)),
            (u[r] = h),
            (u.modifiers = _),
            (_[r] = function (m) {
              return (
                (m = Math.round(i())),
                m !== s && m !== o && Math.abs(m - s) > 3 && Math.abs(m - o) > 3
                  ? (g.kill(), (l.tween = 0))
                  : (m = f + c * g.ratio + d * g.ratio * g.ratio),
                (o = s),
                (s = Math.round(m))
              );
            }),
            (u.onComplete = function () {
              (l.tween = 0), p && p.call(g);
            }),
            (g = l.tween = W.to(t, u)),
            g
          );
        };
      return (
        (t[r] = i),
        (i.wheelHandler = function () {
          return a.tween && a.tween.kill() && (a.tween = 0);
        }),
        Xt(t, "wheel", i.wheelHandler),
        a
      );
    },
    U = (function () {
      function n(e, i) {
        yr ||
          n.register(W) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, i);
      }
      var t = n.prototype;
      return (
        (t.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Rs)
          ) {
            this.update = this.refresh = this.kill = ti;
            return;
          }
          i = Ll(Ue(i) || Ur(i) || i.nodeType ? { trigger: i } : i, Ns);
          var s = i,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            h = s.onToggle,
            u = s.onRefresh,
            f = s.scrub,
            c = s.trigger,
            d = s.pin,
            g = s.pinSpacing,
            p = s.invalidateOnRefresh,
            _ = s.anticipatePin,
            m = s.onScrubComplete,
            b = s.onSnapComplete,
            T = s.once,
            y = s.snap,
            x = s.pinReparent,
            k = s.pinSpacer,
            w = s.containerAnimation,
            A = s.fastScrollEnd,
            C = s.preventOverlaps,
            M =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? Zt
                : Ot,
            D = !f && f !== 0,
            L = ne(i.scroller || Q),
            R = W.core.getCache(L),
            I = Ki(L),
            z =
              ("pinType" in i
                ? i.pinType
                : gi(L, "pinType") || (I && "fixed")) === "fixed",
            P = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            F = D && i.toggleActions.split(" "),
            H = "markers" in i ? i.markers : Ns.markers,
            J = I ? 0 : parseFloat(ii(L)["border" + M.p2 + Tr]) || 0,
            v = this,
            ut =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(v);
              },
            pt = Dc(L, I, M),
            Rt = Lc(L, I),
            lt = 0,
            ft = 0,
            Z = pi(L, M),
            ct,
            dt,
            he,
            tt,
            Vt,
            V,
            kt,
            $t,
            ue,
            It,
            S,
            we,
            nt,
            Ae,
            Me,
            Ve,
            zt,
            si,
            Ee,
            ot,
            Ft,
            mt,
            Be,
            ce,
            qt,
            We,
            fe,
            be,
            it,
            rt,
            wi,
            xe,
            He,
            qe,
            je,
            Ri,
            tr,
            ni;
          if (
            (Io(v),
            (v._dir = M),
            (_ *= 45),
            (v.scroller = L),
            (v.scroll = w ? w.time.bind(w) : Z),
            (tt = Z()),
            (v.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Yl = 1), i.refreshPriority === -9999 && (Vi = v)),
            (R.tweenScroll = R.tweenScroll || {
              top: Fl(L, Ot),
              left: Fl(L, Zt),
            }),
            (v.tweenTo = ct = R.tweenScroll[M.p]),
            (v.scrubDuration = function (E) {
              (wi = Ur(E) && E),
                wi
                  ? rt
                    ? rt.duration(E)
                    : (rt = W.to(r, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: wi,
                        paused: !0,
                        onComplete: function () {
                          return m && m(v);
                        },
                      }))
                  : (rt && rt.progress(1).kill(), (rt = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              r._initted ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (v.animation = r.pause()),
              (r.scrollTrigger = v),
              v.scrubDuration(f),
              (be = 0),
              l || (l = r.vars.id)),
            K.push(v),
            y &&
              ((!$s(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in St.style &&
                W.set(I ? [St, mi] : L, { scrollBehavior: "auto" }),
              (he = ke(y.snapTo)
                ? y.snapTo
                : y.snapTo === "labels"
                ? Pc(r)
                : y.snapTo === "labelsDirectional"
                ? Rc(r)
                : y.directional !== !1
                ? function (E, N) {
                    return Go(y.snapTo)(E, le() - ft < 500 ? 0 : N.direction);
                  }
                : W.utils.snap(y.snapTo)),
              (xe = y.duration || { min: 0.1, max: 2 }),
              (xe = $s(xe) ? br(xe.min, xe.max) : br(xe, xe)),
              (He = W.delayedCall(y.delay || wi / 2 || 0.1, function () {
                var E = Z(),
                  N = le() - ft < 500,
                  B = ct.tween;
                if (
                  (N || Math.abs(v.getVelocity()) < 10) &&
                  !B &&
                  !Js &&
                  lt !== E
                ) {
                  var Y = (E - V) / nt,
                    Nt = r && !D ? r.totalProgress() : Y,
                    G = N ? 0 : ((Nt - it) / (le() - Hs)) * 1e3 || 0,
                    At = W.utils.clamp(-Y, 1 - Y, (mr(G / 2) * G) / 0.185),
                    vt = Y + (y.inertia === !1 ? 0 : At),
                    Ke = br(0, 1, he(vt, v)),
                    ht = Math.round(V + Ke * nt),
                    jt = y,
                    $e = jt.onStart,
                    yt = jt.onInterrupt,
                    wt = jt.onComplete;
                  if (E <= kt && E >= V && ht !== E) {
                    if (B && !B._initted && B.data <= mr(ht - E)) return;
                    y.inertia === !1 && (At = Ke - Y),
                      ct(
                        ht,
                        {
                          duration: xe(
                            mr(
                              (Math.max(mr(vt - Nt), mr(Ke - Nt)) * 0.185) /
                                G /
                                0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: mr(ht - E),
                          onInterrupt: function () {
                            return He.restart(!0) && yt && yt(v);
                          },
                          onComplete: function () {
                            v.update(),
                              (lt = Z()),
                              (be = it =
                                r && !D ? r.totalProgress() : v.progress),
                              b && b(v),
                              wt && wt(v);
                          },
                        },
                        E,
                        At * nt,
                        ht - E - At * nt
                      ),
                      $e && $e(v, ct.tween);
                  }
                } else v.isActive && lt !== E && He.restart(!0);
              }).pause())),
            l && (Fo[l] = v),
            (c = v.trigger = ne(c || d)),
            (ni = c && c._gsap && c._gsap.stRevert),
            ni && (ni = ni(v)),
            (d = d === !0 ? c : ne(d)),
            Ue(a) && (a = { targets: c, className: a }),
            d &&
              (g === !1 ||
                g === Fe ||
                (g = !g && ii(d.parentNode).display === "flex" ? !1 : Pt),
              (v.pin = d),
              (dt = W.core.getCache(d)),
              dt.spacer
                ? (Ae = dt.pinState)
                : (k &&
                    ((k = ne(k)),
                    k && !k.nodeType && (k = k.current || k.nativeElement),
                    (dt.spacerIsNative = !!k),
                    k && (dt.spacerState = Ws(k))),
                  (dt.spacer = zt = k || Tt.createElement("div")),
                  zt.classList.add("pin-spacer"),
                  l && zt.classList.add("pin-spacer-" + l),
                  (dt.pinState = Ae = Ws(d))),
              i.force3D !== !1 && W.set(d, { force3D: !0 }),
              (v.spacer = zt = dt.spacer),
              (fe = ii(d)),
              (Be = fe[g + M.os2]),
              (Ee = W.getProperty(d)),
              (ot = W.quickSetter(d, M.a, oe)),
              Oo(d, zt, fe),
              (Ve = Ws(d))),
            H)
          ) {
            (we = $s(H) ? Ll(H, Ol) : Ol),
              (It = Bs("scroller-start", l, L, M, we, 0)),
              (S = Bs("scroller-end", l, L, M, we, 0, It)),
              (si = It["offset" + M.op.d2]);
            var Cr = ne(gi(L, "content") || L);
            ($t = this.markerStart = Bs("start", l, Cr, M, we, si, 0, w)),
              (ue = this.markerEnd = Bs("end", l, Cr, M, we, si, 0, w)),
              w && (tr = W.quickSetter([$t, ue], M.a, oe)),
              !z &&
                !(Xe.length && gi(L, "fixedMarkers") === !0) &&
                (Oc(I ? St : L),
                W.set([It, S], { force3D: !0 }),
                (qt = W.quickSetter(It, M.a, oe)),
                (We = W.quickSetter(S, M.a, oe)));
          }
          if (w) {
            var kr = w.vars.onUpdate,
              et = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function () {
              v.update(0, 0, 1), kr && kr.apply(et || []);
            });
          }
          (v.previous = function () {
            return K[K.indexOf(v) - 1];
          }),
            (v.next = function () {
              return K[K.indexOf(v) + 1];
            }),
            (v.revert = function (E, N) {
              if (!N) return v.kill(!0);
              var B = E !== !1 || !v.enabled,
                Y = te;
              B !== v.isReverted &&
                (B &&
                  ((je = Math.max(Z(), v.scroll.rec || 0)),
                  (qe = v.progress),
                  (Ri = r && r.progress())),
                $t &&
                  [$t, ue, It, S].forEach(function (Nt) {
                    return (Nt.style.display = B ? "none" : "block");
                  }),
                B && (te = 1),
                v.update(B),
                (te = Y),
                d &&
                  (B
                    ? zc(d, zt, Ae)
                    : (!x || !v.isActive) && Oo(d, zt, ii(d), ce)),
                (v.isReverted = B));
            }),
            (v.refresh = function (E, N) {
              if (!((te || !v.enabled) && !N)) {
                if (d && E && Ne) {
                  Xt(n, "scrollEnd", th);
                  return;
                }
                !ei && ut && ut(v),
                  (te = 1),
                  (ft = le()),
                  ct.tween && (ct.tween.kill(), (ct.tween = 0)),
                  rt && rt.pause(),
                  p && r && r.revert({ kill: !1 }).invalidate(),
                  v.isReverted || v.revert(!0, !0);
                for (
                  var B = pt(),
                    Y = Rt(),
                    Nt = w ? w.duration() : Oi(L, M),
                    G = 0,
                    At = 0,
                    vt = i.end,
                    Ke = i.endTrigger || c,
                    ht =
                      i.start ||
                      (i.start === 0 || !c ? 0 : d ? "0 0" : "0 100%"),
                    jt = (v.pinnedContainer =
                      i.pinnedContainer && ne(i.pinnedContainer)),
                    $e = (c && Math.max(0, K.indexOf(v))) || 0,
                    yt = $e,
                    wt,
                    Mt,
                    er,
                    Ii,
                    Bt,
                    Et,
                    oi,
                    Cn,
                    ta,
                    Ar;
                  yt--;

                )
                  (Et = K[yt]),
                    Et.end || Et.refresh(0, 1) || (te = 1),
                    (oi = Et.pin),
                    oi &&
                      (oi === c || oi === d) &&
                      !Et.isReverted &&
                      (Ar || (Ar = []), Ar.unshift(Et), Et.revert(!0, !0)),
                    Et !== K[yt] && ($e--, yt--);
                for (
                  ke(ht) && (ht = ht(v)),
                    V =
                      Il(ht, c, B, M, Z(), $t, It, v, Y, J, z, Nt, w) ||
                      (d ? -0.001 : 0),
                    ke(vt) && (vt = vt(v)),
                    Ue(vt) &&
                      !vt.indexOf("+=") &&
                      (~vt.indexOf(" ")
                        ? (vt = (Ue(ht) ? ht.split(" ")[0] : "") + vt)
                        : ((G = Ys(vt.substr(2), B)),
                          (vt = Ue(ht) ? ht : V + G),
                          (Ke = c))),
                    kt =
                      Math.max(
                        V,
                        Il(
                          vt || (Ke ? "100% 0" : Nt),
                          Ke,
                          B,
                          M,
                          Z() + G,
                          ue,
                          S,
                          v,
                          Y,
                          J,
                          z,
                          Nt,
                          w
                        )
                      ) || -0.001,
                    nt = kt - V || ((V -= 0.01) && 0.001),
                    G = 0,
                    yt = $e;
                  yt--;

                )
                  (Et = K[yt]),
                    (oi = Et.pin),
                    oi &&
                      Et.start - Et._pinPush < V &&
                      !w &&
                      Et.end > 0 &&
                      ((wt = Et.end - Et.start),
                      (oi === c || oi === jt) &&
                        !Ur(ht) &&
                        (G += wt * (1 - Et.progress)),
                      oi === d && (At += wt));
                if (
                  ((V += G),
                  (kt += G),
                  (v._pinPush = At),
                  $t &&
                    G &&
                    ((wt = {}),
                    (wt[M.a] = "+=" + G),
                    jt && (wt[M.p] = "-=" + Z()),
                    W.set([$t, ue], wt)),
                  d)
                )
                  (wt = ii(d)),
                    (Ii = M === Ot),
                    (er = Z()),
                    (Ft = parseFloat(Ee(M.a)) + At),
                    !Nt &&
                      kt > 1 &&
                      ((I ? St : L).style["overflow-" + M.a] = "scroll"),
                    Oo(d, zt, wt),
                    (Ve = Ws(d)),
                    (Mt = _i(d, !0)),
                    (Cn = z && pi(L, Ii ? Zt : Ot)()),
                    g &&
                      ((ce = [g + M.os2, nt + At + oe]),
                      (ce.t = zt),
                      (yt = g === Pt ? zo(d, M) + nt + At : 0),
                      yt && ce.push(M.d, yt + oe),
                      Jr(ce),
                      z && Z(je)),
                    z &&
                      ((Bt = {
                        top: Mt.top + (Ii ? er - V : Cn) + oe,
                        left: Mt.left + (Ii ? Cn : er - V) + oe,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Bt[qi] = Bt["max" + Tr] = Math.ceil(Mt.width) + oe),
                      (Bt[ji] = Bt["max" + Yo] = Math.ceil(Mt.height) + oe),
                      (Bt[Fe] =
                        Bt[Fe + Kr] =
                        Bt[Fe + qr] =
                        Bt[Fe + Qr] =
                        Bt[Fe + jr] =
                          "0"),
                      (Bt[Pt] = wt[Pt]),
                      (Bt[Pt + Kr] = wt[Pt + Kr]),
                      (Bt[Pt + qr] = wt[Pt + qr]),
                      (Bt[Pt + Qr] = wt[Pt + Qr]),
                      (Bt[Pt + jr] = wt[Pt + jr]),
                      (Me = Nc(Ae, Bt, x)),
                      ei && Z(0)),
                    r
                      ? ((ta = r._initted),
                        Ao(1),
                        r.render(r.duration(), !0, !0),
                        (mt = Ee(M.a) - Ft + nt + At),
                        nt !== mt && z && Me.splice(Me.length - 2, 2),
                        r.render(0, !0, !0),
                        ta || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Ao(0))
                      : (mt = nt);
                else if (c && Z() && !w)
                  for (Mt = c.parentNode; Mt && Mt !== St; )
                    Mt._pinOffset &&
                      ((V -= Mt._pinOffset), (kt -= Mt._pinOffset)),
                      (Mt = Mt.parentNode);
                Ar &&
                  Ar.forEach(function (wh) {
                    return wh.revert(!1, !0);
                  }),
                  (v.start = V),
                  (v.end = kt),
                  (tt = Vt = ei ? je : Z()),
                  !w && !ei && (tt < je && Z(je), (v.scroll.rec = 0)),
                  v.revert(!1, !0),
                  He &&
                    ((lt = -1), v.isActive && Z(V + nt * qe), He.restart(!0)),
                  (te = 0),
                  r &&
                    D &&
                    (r._initted || Ri) &&
                    r.progress() !== Ri &&
                    r.progress(Ri, !0).render(r.time(), !0, !0),
                  (qe !== v.progress || w) &&
                    (r && !D && r.totalProgress(qe, !0),
                    (v.progress = (tt - V) / nt === qe ? 0 : qe)),
                  d && g && (zt._pinOffset = Math.round(v.progress * mt)),
                  u && u(v);
              }
            }),
            (v.getVelocity = function () {
              return ((Z() - Vt) / (le() - Hs)) * 1e3 || 0;
            }),
            (v.endAnimation = function () {
              Gr(v.callbackAnimation),
                r &&
                  (rt
                    ? rt.progress(1)
                    : r.paused()
                    ? D || Gr(r, v.direction < 0, 1)
                    : Gr(r, r.reversed()));
            }),
            (v.labelToScroll = function (E) {
              return (
                (r &&
                  r.labels &&
                  (V || v.refresh() || V) +
                    (r.labels[E] / r.duration()) * nt) ||
                0
              );
            }),
            (v.getTrailing = function (E) {
              var N = K.indexOf(v),
                B = v.direction > 0 ? K.slice(0, N).reverse() : K.slice(N + 1);
              return (
                Ue(E)
                  ? B.filter(function (Y) {
                      return Y.vars.preventOverlaps === E;
                    })
                  : B
              ).filter(function (Y) {
                return v.direction > 0 ? Y.end <= V : Y.start >= kt;
              });
            }),
            (v.update = function (E, N, B) {
              if (!(w && !B && !E)) {
                var Y = ei ? je : v.scroll(),
                  Nt = E ? 0 : (Y - V) / nt,
                  G = Nt < 0 ? 0 : Nt > 1 ? 1 : Nt || 0,
                  At = v.progress,
                  vt,
                  Ke,
                  ht,
                  jt,
                  $e,
                  yt,
                  wt,
                  Mt;
                if (
                  (N &&
                    ((Vt = tt),
                    (tt = w ? Z() : Y),
                    y && ((it = be), (be = r && !D ? r.totalProgress() : G))),
                  _ &&
                    !G &&
                    d &&
                    !te &&
                    !Ps &&
                    Ne &&
                    V < Y + ((Y - Vt) / (le() - Hs)) * _ &&
                    (G = 1e-4),
                  G !== At && v.enabled)
                ) {
                  if (
                    ((vt = v.isActive = !!G && G < 1),
                    (Ke = !!At && At < 1),
                    (yt = vt !== Ke),
                    ($e = yt || !!G != !!At),
                    (v.direction = G > At ? 1 : -1),
                    (v.progress = G),
                    $e &&
                      !te &&
                      ((ht = G && !At ? 0 : G === 1 ? 1 : At === 1 ? 2 : 3),
                      D &&
                        ((jt =
                          (!yt && F[ht + 1] !== "none" && F[ht + 1]) || F[ht]),
                        (Mt =
                          r &&
                          (jt === "complete" || jt === "reset" || jt in r)))),
                    C &&
                      (yt || Mt) &&
                      (Mt || f || !r) &&
                      (ke(C)
                        ? C(v)
                        : v.getTrailing(C).forEach(function (Et) {
                            return Et.endAnimation();
                          })),
                    D ||
                      (rt && !te && !Ps
                        ? ((w || (Vi && Vi !== v)) &&
                            rt.render(rt._dp._time - rt._start),
                          rt.resetTo
                            ? rt.resetTo("totalProgress", G, r._tTime / r._tDur)
                            : ((rt.vars.totalProgress = G),
                              rt.invalidate().restart()))
                        : r && r.totalProgress(G, !!te)),
                    d)
                  ) {
                    if ((E && g && (zt.style[g + M.os2] = Be), !z))
                      ot(Xr(Ft + mt * G));
                    else if ($e) {
                      if (
                        ((wt = !E && G > At && kt + 1 > Y && Y + 1 >= Oi(L, M)),
                        x)
                      )
                        if (!E && (vt || wt)) {
                          var er = _i(d, !0),
                            Ii = Y - V;
                          zl(
                            d,
                            St,
                            er.top + (M === Ot ? Ii : 0) + oe,
                            er.left + (M === Ot ? 0 : Ii) + oe
                          );
                        } else zl(d, zt);
                      Jr(vt || wt ? Me : Ve),
                        (mt !== nt && G < 1 && vt) ||
                          ot(Ft + (G === 1 && !wt ? mt : 0));
                    }
                  }
                  y && !ct.tween && !te && !Ps && He.restart(!0),
                    a &&
                      (yt || (T && G && (G < 1 || !Mo))) &&
                      Ks(a.targets).forEach(function (Et) {
                        return Et.classList[vt || T ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !D && !E && o(v),
                    $e && !te
                      ? (D &&
                          (Mt &&
                            (jt === "complete"
                              ? r.pause().totalProgress(1)
                              : jt === "reset"
                              ? r.restart(!0).pause()
                              : jt === "restart"
                              ? r.restart(!0)
                              : r[jt]()),
                          o && o(v)),
                        (yt || !Mo) &&
                          (h && yt && Do(v, h),
                          P[ht] && Do(v, P[ht]),
                          T && (G === 1 ? v.kill(!1, 1) : (P[ht] = 0)),
                          yt ||
                            ((ht = G === 1 ? 1 : 3), P[ht] && Do(v, P[ht]))),
                        A &&
                          !vt &&
                          Math.abs(v.getVelocity()) > (Ur(A) ? A : 2500) &&
                          (Gr(v.callbackAnimation),
                          rt
                            ? rt.progress(1)
                            : Gr(r, jt === "reverse" ? 1 : !G, 1)))
                      : D && o && !te && o(v);
                }
                if (We) {
                  var Bt = w ? (Y / w.duration()) * (w._caScrollDist || 0) : Y;
                  qt(Bt + (It._isFlipped ? 1 : 0)), We(Bt);
                }
                tr && tr((-Y / w.duration()) * (w._caScrollDist || 0));
              }
            }),
            (v.enable = function (E, N) {
              v.enabled ||
                ((v.enabled = !0),
                Xt(L, "resize", Vr),
                Xt(I ? Tt : L, "scroll", vr),
                ut && Xt(n, "refreshInit", ut),
                E !== !1 && ((v.progress = qe = 0), (tt = Vt = lt = Z())),
                N !== !1 && v.refresh());
            }),
            (v.getTween = function (E) {
              return E && ct ? ct.tween : rt;
            }),
            (v.setPositions = function (E, N) {
              d && ((Ft += E - V), (mt += N - E - nt)),
                (v.start = V = E),
                (v.end = kt = N),
                (nt = N - E),
                v.update();
            }),
            (v.disable = function (E, N) {
              if (
                v.enabled &&
                (E !== !1 && v.revert(!0, !0),
                (v.enabled = v.isActive = !1),
                N || (rt && rt.pause()),
                (je = 0),
                dt && (dt.uncache = 1),
                ut && Ht(n, "refreshInit", ut),
                He &&
                  (He.pause(), ct.tween && ct.tween.kill() && (ct.tween = 0)),
                !I)
              ) {
                for (var B = K.length; B--; )
                  if (K[B].scroller === L && K[B] !== v) return;
                Ht(L, "resize", Vr), Ht(L, "scroll", vr);
              }
            }),
            (v.kill = function (E, N) {
              v.disable(E, N), rt && !N && rt.kill(), l && delete Fo[l];
              var B = K.indexOf(v);
              B >= 0 && K.splice(B, 1),
                B === ae && Us > 0 && ae--,
                (B = 0),
                K.forEach(function (Y) {
                  return Y.scroller === v.scroller && (B = 1);
                }),
                B || ei || (v.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  E && r.revert({ kill: !1 }),
                  N || r.kill()),
                $t &&
                  [$t, ue, It, S].forEach(function (Y) {
                    return Y.parentNode && Y.parentNode.removeChild(Y);
                  }),
                Vi === v && (Vi = 0),
                d &&
                  (dt && (dt.uncache = 1),
                  (B = 0),
                  K.forEach(function (Y) {
                    return Y.pin === d && B++;
                  }),
                  B || (dt.spacer = 0)),
                i.onKill && i.onKill(v);
            }),
            v.enable(!1, !1),
            ni && ni(v),
            !r || !r.add || nt
              ? v.refresh()
              : W.delayedCall(0.01, function () {
                  return V || kt || v.refresh();
                }) &&
                (nt = 0.01) &&
                (V = kt = 0);
        }),
        (n.register = function (i) {
          return (
            yr ||
              ((W = i || jl()),
              ql() && window.document && n.enable(),
              (yr = Rs)),
            yr
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) Ns[r] = i[r];
          return Ns;
        }),
        (n.disable = function (i, r) {
          (Rs = 0),
            K.forEach(function (o) {
              return o[r ? "kill" : "disable"](i);
            }),
            Ht(Q, "wheel", vr),
            Ht(Tt, "scroll", vr),
            clearInterval(Os),
            Ht(Tt, "touchcancel", ti),
            Ht(St, "touchstart", ti),
            zs(Ht, Tt, "pointerdown,touchstart,mousedown", El),
            zs(Ht, Tt, "pointerup,touchend,mouseup", Dl),
            js.kill(),
            Is(Ht);
          for (var s = 0; s < j.length; s += 3)
            Fs(Ht, j[s], j[s + 1]), Fs(Ht, j[s], j[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((Q = window),
            (Tt = document),
            (mi = Tt.documentElement),
            (St = Tt.body),
            W &&
              ((Ks = W.utils.toArray),
              (br = W.utils.clamp),
              (Io = W.core.context || ti),
              (Ao = W.core.suppressOverwrites || ti),
              (Wo = Q.history.scrollRestoration || "auto"),
              W.core.globals("ScrollTrigger", n),
              St))
          ) {
            (Rs = 1),
              Ct.register(W),
              (n.isTouch = Ct.isTouch),
              (Li =
                Ct.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              Xt(Q, "wheel", vr),
              ($l = [Q, Tt, mi, St]),
              W.matchMedia
                ? ((n.matchMedia = function (l) {
                    var h = W.matchMedia(),
                      u;
                    for (u in l) h.add(u, l[u]);
                    return h;
                  }),
                  W.addEventListener("matchMediaInit", function () {
                    return Xo();
                  }),
                  W.addEventListener("matchMediaRevert", function () {
                    return eh();
                  }),
                  W.addEventListener("matchMedia", function () {
                    xr(0, 1), Ji("matchMedia");
                  }),
                  W.matchMedia("(orientation: portrait)", function () {
                    return Lo(), Lo;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Lo(),
              Xt(Tt, "scroll", vr);
            var i = St.style,
              r = i.borderTopStyle,
              s = W.core.Animation.prototype,
              o,
              a;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = _i(St),
                Ot.m = Math.round(o.top + Ot.sc()) || 0,
                Zt.m = Math.round(o.left + Zt.sc()) || 0,
                r
                  ? (i.borderTopStyle = r)
                  : i.removeProperty("border-top-style"),
                Os = setInterval(Pl, 250),
                W.delayedCall(0.5, function () {
                  return (Ps = 0);
                }),
                Xt(Tt, "touchcancel", ti),
                Xt(St, "touchstart", ti),
                zs(Xt, Tt, "pointerdown,touchstart,mousedown", El),
                zs(Xt, Tt, "pointerup,touchend,mouseup", Dl),
                Ro = W.utils.checkPrefix("transform"),
                Vs.push(Ro),
                yr = le(),
                js = W.delayedCall(0.2, xr).pause(),
                wr = [
                  Tt,
                  "visibilitychange",
                  function () {
                    var l = Q.innerWidth,
                      h = Q.innerHeight;
                    Tt.hidden
                      ? ((Al = l), (Ml = h))
                      : (Al !== l || Ml !== h) && Vr();
                  },
                  Tt,
                  "DOMContentLoaded",
                  xr,
                  Q,
                  "load",
                  xr,
                  Q,
                  "resize",
                  Vr,
                ],
                Is(Xt),
                K.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                a = 0;
              a < j.length;
              a += 3
            )
              Fs(Ht, j[a], j[a + 1]), Fs(Ht, j[a], j[a + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && (Mo = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(Os)) || ((Os = r) && setInterval(Pl, r)),
            "ignoreMobileResize" in i &&
              (Xl = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Is(Ht) || Is(Xt, i.autoRefreshEvents || "none"),
              (Gl = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = ne(i),
            o = j.indexOf(s),
            a = Ki(s);
          ~o && j.splice(o, a ? 6 : 2),
            r && (a ? Xe.unshift(Q, r, St, r, mi, r) : Xe.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          K.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var o = (Ue(i) ? ne(i) : i).getBoundingClientRect(),
            a = o[s ? qi : ji] * r || 0;
          return s
            ? o.right - a > 0 && o.left + a < Q.innerWidth
            : o.bottom - a > 0 && o.top + a < Q.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          Ue(i) && (i = ne(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? qi : ji],
            l =
              r == null
                ? a / 2
                : r in Qs
                ? Qs[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return s ? (o.left + l) / Q.innerWidth : (o.top + l) / Q.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (K.forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = Qi.killAll || [];
            (Qi = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  U.version = "3.11.2";
  U.saveStyles = function (n) {
    return n
      ? Ks(n).forEach(function (t) {
          if (t && t.style) {
            var e = Ce.indexOf(t);
            e >= 0 && Ce.splice(e, 5),
              Ce.push(
                t,
                t.style.cssText,
                t.getBBox && t.getAttribute("transform"),
                W.core.getCache(t),
                Io()
              );
          }
        })
      : Ce;
  };
  U.revert = function (n, t) {
    return Xo(!n, t);
  };
  U.create = function (n, t) {
    return new U(n, t);
  };
  U.refresh = function (n) {
    return n ? Vr() : (yr || U.register()) && xr(!0);
  };
  U.update = Sr;
  U.clearScrollMemory = ih;
  U.maxScroll = function (n, t) {
    return Oi(n, t ? Zt : Ot);
  };
  U.getScrollFunc = function (n, t) {
    return pi(ne(n), t ? Zt : Ot);
  };
  U.getById = function (n) {
    return Fo[n];
  };
  U.getAll = function () {
    return K.filter(function (n) {
      return n.vars.id !== "ScrollSmoother";
    });
  };
  U.isScrolling = function () {
    return !!Ne;
  };
  U.snapDirectional = Go;
  U.addEventListener = function (n, t) {
    var e = Qi[n] || (Qi[n] = []);
    ~e.indexOf(t) || e.push(t);
  };
  U.removeEventListener = function (n, t) {
    var e = Qi[n],
      i = e && e.indexOf(t);
    i >= 0 && e.splice(i, 1);
  };
  U.batch = function (n, t) {
    var e = [],
      i = {},
      r = t.interval || 0.016,
      s = t.batchMax || 1e9,
      o = function (h, u) {
        var f = [],
          c = [],
          d = W.delayedCall(r, function () {
            u(f, c), (f = []), (c = []);
          }).pause();
        return function (g) {
          f.length || d.restart(!0),
            f.push(g.trigger),
            c.push(g),
            s <= f.length && d.progress(1);
        };
      },
      a;
    for (a in t)
      i[a] =
        a.substr(0, 2) === "on" && ke(t[a]) && a !== "onRefreshInit"
          ? o(a, t[a])
          : t[a];
    return (
      ke(s) &&
        ((s = s()),
        Xt(U, "refresh", function () {
          return (s = t.batchMax());
        })),
      Ks(n).forEach(function (l) {
        var h = {};
        for (a in i) h[a] = i[a];
        (h.trigger = l), e.push(U.create(h));
      }),
      e
    );
  };
  var Nl = function (t, e, i, r) {
      return (
        e > r ? t(r) : e < 0 && t(0),
        i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1
      );
    },
    Po = function n(t, e) {
      e === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            e === !0
              ? "auto"
              : e
              ? "pan-" + e + (Ct.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === mi && n(St, e);
    },
    Bl = { auto: 1, scroll: 1 },
    Wc = function (t) {
      var e = t.event,
        i = t.target,
        r = t.axis,
        s = (e.changedTouches ? e.changedTouches[0] : e).target,
        o = s._gsap || W.core.getCache(s),
        a = le(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s.scrollHeight <= s.clientHeight; ) s = s.parentNode;
        (o._isScroll =
          s &&
          !Ki(s) &&
          s !== i &&
          (Bl[(l = ii(s)).overflowY] || Bl[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (e.stopPropagation(), (e._gsapAllow = !0));
    },
    rh = function (t, e, i, r) {
      return Ct.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (r = r && Wc),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Xt(Tt, Ct.eventTypes[0], Hl, !1, !0);
        },
        onDisable: function () {
          return Ht(Tt, Ct.eventTypes[0], Hl, !0);
        },
      });
    },
    Hc = /(input|label|select|textarea)/i,
    Wl,
    Hl = function (t) {
      var e = Hc.test(t.target.tagName);
      (e || Wl) && ((t._gsapAllow = !0), (Wl = e));
    },
    $c = function (t) {
      $s(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e = t,
        i = e.normalizeScrollX,
        r = e.momentum,
        s = e.allowNestedScroll,
        o,
        a,
        l = ne(t.target) || mi,
        h = W.core.globals().ScrollSmoother,
        u = h && h.get(),
        f =
          Li &&
          ((t.content && ne(t.content)) ||
            (u && t.content !== !1 && !u.smooth() && u.content())),
        c = pi(l, Ot),
        d = pi(l, Zt),
        g = 1,
        p =
          (Ct.isTouch && Q.visualViewport
            ? Q.visualViewport.scale * Q.visualViewport.width
            : Q.outerWidth) / Q.innerWidth,
        _ = 0,
        m = ke(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        b,
        T,
        y = rh(l, t.type, !0, s),
        x = function () {
          return (T = !1);
        },
        k = ti,
        w = ti,
        A = function () {
          (a = Oi(l, Ot)),
            (w = br(Li ? 1 : 0, a)),
            i && (k = br(0, Oi(l, Zt))),
            (b = Xs);
        },
        C = function () {
          (f._gsap.y = Xr(parseFloat(f._gsap.y) + c.offset) + "px"),
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(f._gsap.y) +
              ", 0, 1)"),
            (c.offset = c.cacheID = 0);
        },
        M = function () {
          if (T) {
            requestAnimationFrame(x);
            var F = Xr(o.deltaY / 2),
              H = w(c.v - F);
            if (f && H !== c.v + c.offset) {
              c.offset = H - c.v;
              var J = Xr((parseFloat(f && f._gsap.y) || 0) - c.offset);
              (f.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                J +
                ", 0, 1)"),
                (f._gsap.y = J + "px"),
                (c.cacheID = j.cache),
                Sr();
            }
            return !0;
          }
          c.offset && C(), (T = !0);
        },
        D,
        L,
        R,
        I,
        z = function () {
          A(),
            D.isActive() &&
              D.vars.scrollY > a &&
              (c() > a ? D.progress(1) && c(a) : D.resetTo("scrollY", a));
        };
      return (
        f && W.set(f, { y: "+=0" }),
        (t.ignoreCheck = function (P) {
          return (
            (Li && P.type === "touchmove" && M(P)) ||
            (g > 1.05 && P.type !== "touchstart") ||
            o.isGesturing ||
            (P.touches && P.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          var P = g;
          (g = Xr(((Q.visualViewport && Q.visualViewport.scale) || 1) / p)),
            D.pause(),
            P !== g && Po(l, g > 1.01 ? !0 : i ? !1 : "x"),
            (L = d()),
            (R = c()),
            A(),
            (b = Xs);
        }),
        (t.onRelease = t.onGestureStart =
          function (P, F) {
            if ((c.offset && C(), !F)) I.restart(!0);
            else {
              j.cache++;
              var H = m(),
                J,
                v;
              i &&
                ((J = d()),
                (v = J + (H * 0.05 * -P.velocityX) / 0.227),
                (H *= Nl(d, J, v, Oi(l, Zt))),
                (D.vars.scrollX = k(v))),
                (J = c()),
                (v = J + (H * 0.05 * -P.velocityY) / 0.227),
                (H *= Nl(c, J, v, Oi(l, Ot))),
                (D.vars.scrollY = w(v)),
                D.invalidate().duration(H).play(0.01),
                ((Li && D.vars.scrollY >= a) || J >= a - 1) &&
                  W.to({}, { onUpdate: z, duration: H });
            }
          }),
        (t.onWheel = function () {
          D._ts && D.pause(), le() - _ > 1e3 && ((b = 0), (_ = le()));
        }),
        (t.onChange = function (P, F, H, J, v) {
          if (
            (Xs !== b && A(),
            F && i && d(k(J[2] === F ? L + (P.startX - P.x) : d() + F - J[1])),
            H)
          ) {
            c.offset && C();
            var ut = v[2] === H,
              pt = ut ? R + P.startY - P.y : c() + H - v[1],
              Rt = w(pt);
            ut && pt !== Rt && (R += Rt - pt), c(Rt);
          }
          (H || F) && Sr();
        }),
        (t.onEnable = function () {
          Po(l, i ? !1 : "x"),
            U.addEventListener("refresh", z),
            Xt(Q, "resize", z),
            c.smooth &&
              ((c.target.style.scrollBehavior = "auto"),
              (c.smooth = d.smooth = !1)),
            y.enable();
        }),
        (t.onDisable = function () {
          Po(l, !0),
            Ht(Q, "resize", z),
            U.removeEventListener("refresh", z),
            y.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (o = new Ct(t)),
        (o.iOS = Li),
        Li && !c() && c(1),
        Li && W.ticker.add(ti),
        (I = o._dc),
        (D = W.to(o, {
          ease: "power4",
          paused: !0,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          onComplete: I.vars.onComplete,
        })),
        o
      );
    };
  U.sort = function (n) {
    return K.sort(
      n ||
        function (t, e) {
          return (
            (t.vars.refreshPriority || 0) * -1e6 +
            t.start -
            (e.start + (e.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  };
  U.observe = function (n) {
    return new Ct(n);
  };
  U.normalizeScroll = function (n) {
    if (typeof n == "undefined") return ze;
    if (n === !0 && ze) return ze.enable();
    if (n === !1) return ze && ze.kill();
    var t = n instanceof Ct ? n : $c(n);
    return (
      ze && ze.target === t.target && ze.kill(), Ki(t.target) && (ze = t), t
    );
  };
  U.core = {
    _getVelocityProp: Ls,
    _inputObserver: rh,
    _scrollers: j,
    _proxies: Xe,
    bridge: {
      ss: function () {
        Ne || Ji("scrollStart"), (Ne = le());
      },
      ref: function () {
        return te;
      },
    },
  };
  jl() && W.registerPlugin(U);
  O.registerPlugin(U);
  var Zs = "is-inview",
    Yc = "is-lazy-loaded",
    tn = class extends X {
      constructor(n) {
        super(n),
          (this.$scrollItems = Array.from(this.$("item"))),
          (this.$scrollOutsideItems = document.querySelectorAll(
            '[data-scroll="outsideItem"]'
          )),
          this.$scrollOutsideItems.forEach((t) => {
            t.getAttribute("data-scroll-parent") ==
              this.el.getAttribute("data-module-scroll") &&
              this.$scrollItems.push(t);
          }),
          (this.scrollToItems = this.$("to")),
          (this.$scrollToWip = this.$("wip")[0]),
          (this.$wrapper =
            typeof this.getData("wrapper") == "string"
              ? document.querySelector(this.getData("wrapper"))
              : window),
          (this.direction =
            typeof this.getData("direction") == "string"
              ? this.getData("direction")
              : "vertical"),
          (this.events = { click: { to: "scrollTo" } });
      }
      init() {
        $.getAttribute("data-template") != "home" &&
          ((this.windowWidth = window.innerWidth),
          window.isMobile &&
            ((this.gestureDirection = "vertical"),
            (this.direction = "vertical")),
          window.isTablet &&
            ((this.direction = "vertical"),
            (this.gestureDirection = "vertical")),
          (window.scrollInstance = {
            velocity: 0,
            direction: "down",
            progress: 0,
          }),
          $.setAttribute("data-scroll-direction", this.direction),
          this.initContainerSize(),
          this.imagesLoading(),
          this.backgroundLazyLoading(),
          (this.id = this.el.getAttribute("data-module-scroll")),
          (this.lenis = new As({
            wrapper: this.$wrapper,
            content: this.el,
            orientation: this.direction,
            gestureOrientation: this.gestureDirection,
            smoothWheel: !0,
            smoothTouch: !0,
            duration: 1.3,
            lerp: 0.1,
            wheelMultiplier: 0.6,
            touchMultiplier: 1.7,
            touchInertiaMultiplier: 12,
          })),
          this.lenis.on(
            "scroll",
            ({
              scroll: n,
              limit: t,
              velocity: e,
              direction: i,
              progress: r,
            }) => {
              this.id == "main" &&
                (window.scrollInstance = {
                  scroll: n,
                  velocity: e,
                  direction: e >= 0 ? "down" : "up",
                  progress: r,
                });
            }
          ),
          this.raf(0),
          this.$wrapper.scrollTo(0, 0),
          window.firstHit && (history.scrollRestoration = "manual"),
          O.delayedCall(0.2, () => {
            this.initElements();
          }),
          O.delayedCall(window.readyCallbackDelay, () => {
            this.refresh();
          }),
          O.delayedCall(window.readyCallbackDelay * 2, () => {
            this.refresh(),
              this.$scrollToWip != null &&
                this.lenis.scrollTo(this.$scrollToWip);
          }),
          O.delayedCall(window.readyCallbackDelay * 4, () => {
            this.refresh();
          }),
          (this.bindResize = this.resize.bind(this)),
          window.addEventListener("resize", this.bindResize));
      }
      initContainerSize() {
        if (this.direction === "horizontal") {
          let n = 0;
          for (let t = 0; t < this.el.children.length; t++)
            n += this.el.children[t].getBoundingClientRect().width;
          this.el.style.setProperty("--scrollContainerWidth", n + "px");
        }
      }
      imagesLoading() {
        let n = Array.from(document.getElementsByTagName("img")),
          t = 0;
        n.forEach((e) => {
          e.addEventListener("load", () => {
            t++, t == n.length && (this.initContainerSize(), this.refresh());
          });
        });
      }
      backgroundLazyLoading() {
        let n = [].slice.call(
          document.querySelectorAll("[data-scroll-lazy-background]")
        );
        if ("IntersectionObserver" in window) {
          let t = new IntersectionObserver((e, i) => {
            e.forEach((r) => {
              r.isIntersecting &&
                (r.target.classList.add(Yc),
                r.target.setAttribute(
                  "style",
                  r.target.getAttribute("data-style")
                ),
                t.unobserve(r.target));
            });
          });
          n.forEach((e) => {
            t.observe(e);
          });
        }
      }
      initElements() {
        (this.triggers = new Array(this.$scrollItems.length)),
          (this.scrollElements = new Array(this.$scrollItems.length)),
          this.$scrollItems.forEach((n, t) => {
            let e = this.createElement(n, t),
              i = typeof n.getAttribute("data-scroll-marker") == "string",
              r =
                typeof n.getAttribute("data-scroll-target") == "string"
                  ? document.querySelector(n.getAttribute("data-scroll-target"))
                  : n,
              s = {
                scroller: this.$wrapper,
                trigger: r,
                start:
                  typeof n.getAttribute("data-scroll-start") == "string"
                    ? n.getAttribute("data-scroll-start")
                    : "top bottom",
                end:
                  typeof n.getAttribute("data-scroll-end") == "string"
                    ? n.getAttribute("data-scroll-end")
                    : "bottom top",
                markers: i,
                horizontal: this.direction == "horizontal",
                onEnter: () => {
                  this.onElementEnter(e, "down");
                },
                onLeave: () => {
                  this.onElementLeave(e, "down");
                },
                onEnterBack: () => {
                  this.onElementEnter(e, "up");
                },
                onLeaveBack: () => {
                  this.onElementLeave(e, "up");
                },
              };
            e.progressCallParameters != null &&
              (s = ir(de({}, s), {
                onUpdate: (a) => {
                  this.onElementProgress(a, e);
                },
              })),
              e.parallaxTl != null &&
                (s = ir(de({}, s), {
                  onUpdate: (a) => {
                    e.parallaxTl.progress(a.progress);
                  },
                }));
            let o = U.create(s);
            this.scrollElements.push(ir(de({}, e), { sTrigger: o }));
          });
      }
      createElement(n, t) {
        let e = n.getAttribute("data-scroll-id"),
          i = typeof n.getAttribute("data-scroll-repeat") == "string",
          r;
        if (typeof n.getAttribute("data-scroll-call") == "string") {
          let l = n.getAttribute("data-scroll-call").split(",");
          (r = {
            function: l[0],
            module: l[1],
            moduleId: l.length < 3 ? e : l[2],
          }),
            r.moduleId == null &&
              console.warn(
                "You didn't specified a data-scroll-id, or a moduleId in your data-scroll-call",
                n
              );
        } else r = void 0;
        let s;
        if (typeof n.getAttribute("data-scroll-progress-call") == "string") {
          let l = n.getAttribute("data-scroll-progress-call").split(",");
          (s = {
            function: l[0],
            module: l[1],
            moduleId: l.length < 3 ? e : l[2],
            isReversed:
              typeof n.getAttribute("data-scroll-progress-reverse") == "string",
          }),
            s.moduleId == null &&
              console.warn(
                "You didn't specified a data-scroll-id, or a moduleId in your data-scroll-progress-call",
                this.el
              );
        } else s = void 0;
        let o = typeof n.getAttribute("data-scroll-parallax-from") == "string",
          a;
        return (
          o &&
            ((a = O.fromTo(
              n,
              { y: n.getAttribute("data-scroll-parallax-from") },
              {
                y: n.getAttribute("data-scroll-parallax-to"),
                duration: 1,
                force3D: !0,
                ease: "none",
              }
            )),
            a.pause()),
          {
            $el: n,
            id: e,
            isRepeatable: i,
            callParameters: r,
            parallaxTl: a,
            progressCallParameters: s,
          }
        );
      }
      onElementProgress(n, t) {
        let e = n.progress.toFixed(3);
        this.call(
          t.progressCallParameters.function,
          {
            progress: parseFloat(e),
            isReversed: t.progressCallParameters.isReversed,
          },
          t.progressCallParameters.module,
          t.progressCallParameters.moduleId
        );
      }
      onElementEnter(n, t) {
        (!n.isRepeatable && n.$el.classList.contains(Zs)) ||
          (n.$el.classList.add(Zs),
          n.callParameters != null &&
            this.call(
              n.callParameters.function,
              { mode: "enter", direction: t, $el: n.$el },
              n.callParameters.module,
              n.callParameters.moduleId
            ));
      }
      onElementLeave(n, t) {
        (!n.isRepeatable && n.$el.classList.contains(Zs)) ||
          (n.$el.classList.remove(Zs),
          n.callParameters != null &&
            this.call(
              n.callParameters.function,
              { mode: "leave", direction: t, $el: n.$el },
              n.callParameters.module,
              n.callParameters.moduleId
            ));
      }
      raf(n) {
        this.lenis.raf(n),
          (this.rafInstance = requestAnimationFrame((t) => this.raf(t))),
          this.lenis.scroll > 50
            ? $.classList.contains("has-scrolled") ||
              $.classList.add("has-scrolled")
            : $.classList.contains("has-scrolled") &&
              $.classList.remove("has-scrolled");
      }
      scrollTo(n) {
        n.preventDefault();
        let t =
            typeof n.currentTarget.getAttribute("href") == "string"
              ? n.currentTarget.getAttribute("href")
              : n.currentTarget.getAttribute("data-href"),
          e =
            typeof n.currentTarget.getAttribute("data-scroll-to-duration") ==
            "string"
              ? parseFloat(
                  n.currentTarget.getAttribute("data-scroll-to-duration")
                )
              : 2,
          i =
            typeof n.currentTarget.getAttribute("data-scroll-to-offset") ==
            "string"
              ? parseInt(n.currentTarget.getAttribute("data-scroll-to-offset"))
              : 0,
          r =
            typeof n.currentTarget.getAttribute("data-scroll-to-immediate") ==
            "string";
        this.lenis.scrollTo(t, {
          offset: i,
          duration: e,
          easing: (s) =>
            s < 0.5 ? 8 * s * s * s * s : 1 - Math.pow(-2 * s + 2, 4) / 2,
          immediate: r,
        });
      }
      refresh() {
        this.scrollElements == null ||
          this.scrollElements.length < 1 ||
          this.scrollElements.forEach((n) => {
            n.sTrigger.refresh();
          });
      }
      resize() {
        (this.windowWidth != window.innerWidth ||
          (this.direction == "horizontal" && !window.isMobile)) &&
          (this.initContainerSize(),
          (this.windowWidth = window.innerWidth),
          this.refresh());
      }
      destroy() {
        this.scrollElements == null ||
          this.scrollElements.length < 1 ||
          (this.scrollElements.forEach((n) => {
            n.sTrigger.kill();
          }),
          cancelAnimationFrame(this.rafInstance),
          window.removeEventListener("resize", this.bindResize));
      }
    };
  function Pi(n, t, e) {
    return (1 - e) * n + e * t;
  }
  var en = class extends X {
    constructor(n) {
      super(n);
    }
    init() {
      (this.condition = window.innerWidth < window.innerHeight),
        (this.hasCondition = typeof this.getData("condition") == "string"),
        (this.disabledIfCondition =
          typeof this.getData("condition-disabled") == "string"),
        this.hasCondition &&
          ((this.bindResize = this.resize.bind(this)),
          window.addEventListener("resize", this.bindResize)),
        this.createTimeline(),
        (this.progressValue = 0);
    }
    createTimeline() {
      (this.from = JSON.parse(this.getData("from"))),
        (this.to = JSON.parse(this.getData("to"))),
        this.hasCondition &&
          this.condition &&
          ((this.from = JSON.parse(this.getData("from-condition"))),
          (this.to = JSON.parse(this.getData("to-condition")))),
        (this.tl = new O.timeline()),
        this.tl.pause(),
        this.tl.fromTo(
          this.el,
          de({}, this.from),
          ir(de({}, this.to), { ease: "none", force3D: !0, duration: 1 })
        );
    }
    trigger(n) {
      window.isMobile &&
        (n.mode == "enter" ? this.update() : cancelAnimationFrame(this.raf));
    }
    progress({ progress: n, isReversed: t }) {
      let e = n;
      t && (e = 1 - n),
        (this.progressValue = e),
        this.tl != null && this.tl.progress(this.progressValue);
    }
    update() {
      (this.raf = window.requestAnimationFrame(() => this.update())),
        (this.progressValue = Pi(this.progressValue, this.progressAim, 0.3)),
        this.tl.progress(this.progressValue);
    }
    resize() {
      let n = this.condition;
      (this.condition = window.innerWidth < window.innerHeight),
        n != this.condition &&
          (this.disabledIfCondition && this.condition && (this.tl = void 0),
          (!this.condition || (!this.disabledIfCondition && this.condition)) &&
            ((this.tl = void 0), this.createTimeline()));
    }
    destroy() {
      window.removeEventListener("resize", this.bindResize),
        cancelAnimationFrame(this.raf);
    }
  };
  var sh = "word-wrap",
    nh = "line-wrap",
    Uo = "char-wrap",
    oh = "is-animated",
    rn = class extends X {
      constructor(n) {
        super(n),
          (this.DEFAULT_FROM_ANIMATION = { y: "110%", rotate: -10 }),
          (this.DEFAULT_TO_ANIMATION = {
            y: 0,
            rotate: 0,
            stagger: 0.05,
            paused: !0,
            ease: "power2.out",
            duration: 1,
          });
      }
      init() {
        if (
          ((this.condition = window.innerWidth < window.innerHeight),
          (this.hasCondition = typeof this.getData("condition") == "string"),
          (this.splitMode = this.getData("type")
            ? this.getData("type")
            : "chars"),
          (this.animateMode = this.getData("animate")),
          (this.isAnimated = typeof this.getData("animated") == "string"),
          typeof this.getData("from") == "string" &&
            (this.DEFAULT_FROM_ANIMATION = JSON.parse(this.getData("from"))),
          this.hasCondition &&
            this.condition &&
            typeof this.getData("from-condition") == "string" &&
            (this.DEFAULT_FROM_ANIMATION = JSON.parse(
              this.getData("from-condition")
            )),
          typeof this.getData("to") == "string" &&
            (this.DEFAULT_TO_ANIMATION = JSON.parse(this.getData("to"))),
          this.hasCondition &&
            this.condition &&
            typeof this.getData("to-condition") == "string")
        ) {
          let n = JSON.parse(this.getData("to-condition"));
          this.DEFAULT_TO_ANIMATION = de(de({}, n), this.DEFAULT_TO_ANIMATION);
        }
        typeof this.getData("stagger") == "string" &&
          (this.DEFAULT_TO_ANIMATION.stagger = this.getData("stagger")),
          typeof this.getData("duration") == "string" &&
            (this.DEFAULT_TO_ANIMATION.duration = parseFloat(
              this.getData("duration")
            )),
          typeof this.getData("delay") == "string" &&
            (this.DEFAULT_TO_ANIMATION.delay = parseFloat(
              this.getData("delay")
            )),
          (this.animated = !1),
          this.splitChars(),
          this.splitMode == "lines"
            ? this.splitLines()
            : this.splitMode == "words" && this.splitWords(),
          this.isAnimated
            ? ((this.animations = new Array()),
              this.initFromAnimation(this.animateMode))
            : this.el.classList.add("is-visible"),
          O.delayedCall(window.readyCallbackDelay + 0.6, () => {
            this.ready();
          });
      }
      ready() {
        this.isAnimated &&
          typeof this.getData("auto") == "string" &&
          this.animate();
      }
      trigger(n) {
        n.mode == "enter" && this.animate();
      }
      splitChars() {
        let n = this.el.textContent.split("");
        this.el.innerHTML = "";
        for (let t = 0; t < n.length; t++) {
          let e = document.createElement("span");
          e.classList.add(Uo);
          let i = document.createElement("span");
          (i.innerText = n[t] == "" ? "\xA0\xA0" : n[t]),
            e.append(i),
            this.el.append(e);
        }
      }
      splitLines() {
        let n = Array.from(this.el.querySelectorAll("span")),
          t = [],
          e = 0,
          i = !0;
        n.forEach((r, s) => {
          let o = r.getBoundingClientRect().top;
          if (i) (t[e] = [s]), (i = !1);
          else {
            let a = r.nextSibling;
            a != null
              ? a.getBoundingClientRect().top > o &&
                (t[e].push(s), e++, (i = !0))
              : t[e].push(s);
          }
        });
        for (let r = 0; r < t.length; r++) {
          let s = t[r][0],
            o = t[r][1] + 1,
            a = document.createElement("div");
          a.classList.add(nh);
          let l = document.createElement("span");
          if ((a.append(l), !o))
            l.innerText = `${l.innerText}${n[s].innerText}`;
          else {
            let h = n.slice(s, o);
            h.forEach((u, f) => {
              u.innerText == "" && f != h.length - 1
                ? (l.innerText = `${l.innerText} `)
                : (l.innerText = `${l.innerText}${u.innerText}`),
                u.parentNode.removeChild(u);
            });
          }
          this.el.append(a);
        }
      }
      splitWords() {
        let n = Array.from(this.el.querySelectorAll("span.char-wrap")),
          t = [],
          e = 0,
          i = !0;
        n.forEach((r, s) => {
          let o = r.getBoundingClientRect().top;
          if (i) (t[e] = [s]), (i = !1);
          else {
            let a = r.nextSibling;
            a != null
              ? (a.innerText == "" || a.innerText == " ") &&
                (t[e].push(s), e++, (i = !0))
              : t[e].push(s);
          }
        });
        for (let r = 0; r < t.length; r++) {
          let s = t[r][0],
            o = t[r][1] + 1,
            a = document.createElement("span");
          a.classList.add(sh),
            o
              ? n.slice(s, o).forEach((h) => {
                  a.append(h);
                })
              : a.append(n[s]),
            this.el.append(a);
        }
      }
      initFromAnimation(n) {
        let t;
        if (
          (this.splitMode == "words"
            ? (t = this.el.querySelectorAll(`.${sh}`))
            : this.splitMode == "lines"
            ? (t = this.el.querySelectorAll(`.${nh}`))
            : this.splitMode == "chars" && (t = this.el),
          t.length != null)
        )
          t.forEach((e) => {
            let i, r;
            if (n == "chars" || n == "") r = e.querySelectorAll(`.${Uo}`);
            else if (n == "words") r = t;
            else return;
            O.set(r, de({}, this.DEFAULT_FROM_ANIMATION)),
              (i = O.to(r, de({}, this.DEFAULT_TO_ANIMATION))),
              this.animations.push(i);
          });
        else {
          let e = t.querySelectorAll(`.${Uo}`),
            i;
          O.set(e, de({}, this.DEFAULT_FROM_ANIMATION)),
            (i = O.to(e, de({}, this.DEFAULT_TO_ANIMATION))),
            this.animations.push(i);
        }
      }
      animate() {
        this.el.classList.add("is-visible"),
          this.animations.forEach((n, t) => {
            O.delayedCall(this.DEFAULT_TO_ANIMATION.delay, () => {
              n.play(), t == 0 && this.el.classList.add(oh);
            });
          }),
          (this.animated = !0);
      }
      reverse() {
        this.animations.forEach((n, t) => {
          O.delayedCall(this.DEFAULT_TO_ANIMATION.delay, () => {
            n.reverse(), t == 0 && this.el.classList.add(oh);
          });
        }),
          (this.animated = !0);
      }
    };
  function ah(n) {
    for (let t = n.length - 1; t > 0; t--) {
      let e = Math.floor(Math.random() * (t + 1));
      [n[t], n[e]] = [n[e], n[t]];
    }
    return n;
  }
  var Gc = "one-way",
    Zr = class {
      constructor(t, e, i, r, s) {
        (this.el = t),
          (this.isFixed = i),
          (this.containerWidth = 0),
          (this.requestAnimation = null),
          (this.scrollPosition = -1),
          (this.translation = 0),
          (this.grabbed = !1),
          (this.preventClick = !1),
          (this.paused = r),
          (this.originalVelocity = -e),
          (this.velocity = this.originalVelocity),
          (this.lastDelta = null),
          this.initializeElements(),
          (this.scrollInfluence = s);
      }
      launch() {
        this.initializeEvents();
      }
      initializeElements() {
        (this.$railMove = this.el.querySelectorAll(".js-rail-group-container")),
          (this.$railMoveChildren = this.el.querySelectorAll(".js-rail-item")),
          this.getBCR();
      }
      initializeEvents() {
        this.update();
      }
      setContainerWidth(t) {
        this.containerWidth = t;
      }
      getBCR() {
        this.railMoveBCR = this.$railMove[0].getBoundingClientRect();
      }
      updateScroll(t) {
        if (!this.isFixed && t !== void 0) {
          let e = Math.round(t.scroll) ? Math.round(t.scroll) : 0,
            i = e - this.scrollPosition;
          (this.scrollPosition = e),
            this.scrollInfluence == Gc && (i = Math.abs(i)),
            i != 0 && (this.velocity = this.originalVelocity * i * 0.5);
        }
      }
      pause() {
        (this.paused = !0), cancelAnimationFrame(this.requestAnimation);
      }
      resume() {
        (this.paused = !1),
          (this.requestAnimation = requestAnimationFrame(() => this.update()));
      }
      update() {
        this.grabbed ||
          (this.translation > this.railMoveBCR.width / 2 ||
          this.translation < -this.railMoveBCR.width / 2
            ? (this.translation = 0)
            : (this.translation = this.translation + this.velocity));
        let t;
        this.translation > 0
          ? (t =
              -this.containerWidth + (this.translation % this.containerWidth))
          : (t = this.translation % this.containerWidth),
          O.set(this.$railMoveChildren, { x: Math.round(t), force3D: !0 }),
          this.scrollInfluence && this.updateScroll(window.scrollInstance),
          this.paused ||
            (this.requestAnimation = requestAnimationFrame(() =>
              this.update()
            ));
      }
      destroy() {
        cancelAnimationFrame(this.requestAnimation),
          O.set(this.$railMove, { x: 0 }),
          (this.translation = 0);
      }
    };
  var sn = class extends X {
    constructor(n) {
      super(n),
        (this.speed = this.el.getAttribute("data-rail-speed") || 1),
        (this.isFixed = typeof this.el.getAttribute("data-fixed") == "string"),
        (this.shuffle =
          typeof this.el.getAttribute("data-shuffle") == "string"),
        (this.paused = typeof this.el.getAttribute("data-paused") == "string"),
        (this.scrollInfluence =
          this.el.getAttribute("data-rail-scroll") != null
            ? this.el.getAttribute("data-rail-scroll") == ""
              ? !0
              : this.el.getAttribute("data-rail-scroll")
            : !1),
        (this.isMobile =
          typeof this.el.getAttribute("data-desktop") != "string"),
        (this.initialHTML = this.el.outerHTML),
        (this.auto = typeof this.el.getAttribute("data-rail-auto") == "string"),
        (this.isFirstHit = !0);
    }
    init() {
      (window.isMobile && !this.isMobile) ||
        O.delayedCall(window.readyDelay, () => {
          this.setClasses(),
            this.createTrack(),
            this.fillScreen(),
            this.groupTracks(),
            this.duplicateGroup(),
            this.wrapGroups(),
            (this.railMove = new Zr(
              this.el,
              window.isMobile ? this.speed / 2 : this.speed,
              this.isFixed,
              this.paused,
              window.isMobile ? !1 : this.scrollInfluence
            )),
            this.refresh(),
            this.railMove.setContainerWidth(this.trackGroupBCR.width),
            this.auto && this.railMove.launch();
        });
    }
    refresh() {
      this.railMove.setContainerWidth(this.trackGroupBCR.width);
    }
    setClasses() {
      this.el.classList.add("c-rail_wrapper"),
        (this.children = Array.from(this.el.children));
      for (let n of this.children)
        n.classList.add("c-rail_item", "js-rail-item");
    }
    createTrack() {
      if (
        ((this.track = document.createElement("div")),
        this.track.classList.add("c-rail_track"),
        this.el.appendChild(this.track),
        (this.tracks = []),
        this.tracks.push(this.track),
        this.shuffle != null)
      ) {
        let n = ah(this.children);
        for (let t of n) this.track.appendChild(t);
      } else for (let n of this.children) this.track.appendChild(n);
    }
    fillScreen() {
      let n = window.innerWidth / this.track.getBoundingClientRect().width;
      if (n === 1 / 0) throw new Error("Ratio is Infinity");
      for (var t = 0; t < n; t++) {
        let e = this.track.cloneNode(!0);
        this.tracks.push(e), this.el.appendChild(e);
      }
    }
    groupTracks() {
      (this.trackGroup = document.createElement("div")),
        this.trackGroup.classList.add("c-rail_track-group"),
        this.el.appendChild(this.trackGroup);
      for (let n of this.tracks) this.trackGroup.appendChild(n);
      this.trackGroupBCR = this.trackGroup.getBoundingClientRect();
    }
    duplicateGroup() {
      (this.trackGroupClone = this.trackGroup.cloneNode(!0)),
        this.el.appendChild(this.trackGroupClone);
    }
    wrapGroups() {
      (this.groupsWrap = document.createElement("div")),
        this.groupsWrap.classList.add("js-rail-group-container"),
        this.groupsWrap.classList.add("c-rail_group-container"),
        this.el.append(this.groupsWrap);
      for (let n of [this.trackGroup, this.trackGroupClone])
        this.groupsWrap.append(n);
    }
    trigger(n) {
      (window.isMobile && !this.isMobile) ||
        (n.mode === "enter"
          ? this.isFirstHit
            ? (this.railMove.launch(), (this.isFirstHit = !1))
            : (this.railMove.pause(), this.railMove.resume())
          : this.railMove.pause());
    }
    launch() {
      this.railMove.launch();
    }
    destroy() {
      super.destroy();
    }
  };
  var nn = class extends X {
    constructor(n) {
      super(n), (this.events = { click: "toggle" });
    }
    init() {}
    toggle() {
      $.classList.contains("has-nav-open")
        ? this.call("close", "Nav")
        : this.call("open", "Nav");
    }
  };
  var on = class extends X {
    constructor(n) {
      super(n),
        (this.events = {
          mouseenter: { item: "enter", sub: "subnavEnter" },
          mouseleave: { item: "leave", sub: "subnavLeave" },
          click: {
            background: "close",
            close: "close",
            item: "click",
            subnavBackground: "closeSubnav",
            subnavBack: "closeSubnav",
          },
        }),
        (this.oldSubnav = null);
    }
    init() {
      (this.bindkeydown = this.keydown.bind(this)),
        window.addEventListener("keydown", this.bindkeydown);
    }
    keydown(n) {
      n.key == "Escape" && this.close();
    }
    enter(n) {
      window.isMobile || this.openSubnav(n);
    }
    leave() {
      window.isMobile || this.closeSubnav();
    }
    click(n) {
      !window.isMobile || this.openSubnav(n);
    }
    subnavEnter(n) {
      this.oldSubnav != null && this.oldSubnav.classList.remove("is-active"),
        $.classList.add("has-subnav-open");
      let t = n.currentTarget;
      t.classList.add("is-active");
      let e = t.getAttribute("data-subnav"),
        i = document.querySelector(`[data-subnav-id=${e}]`);
      this.$("item").forEach((r) => {
        r.classList.remove("is-active");
      }),
        i.classList.add("is-active"),
        O.delayedCall(1, () => {
          console.log(i);
        }),
        (this.oldSubnav = t);
    }
    subnavLeave(n) {
      $.classList.remove("has-subnav-open"),
        this.$("item").forEach((t) => {
          t.classList.remove("is-active");
        }),
        this.oldSubnav != null && this.oldSubnav.classList.remove("is-active");
    }
    openSubnav(n) {
      this.oldSubnav != null && this.oldSubnav.classList.remove("is-active"),
        $.classList.add("has-subnav-open");
      let t = n.currentTarget,
        e = t.getAttribute("data-subnav-id"),
        i = document.querySelector(`[data-subnav=${e}]`);
      this.$("item").forEach((r) => {
        r.classList.remove("is-active");
      }),
        t.classList.add("is-active"),
        i.classList.add("is-active"),
        (this.oldSubnav = i);
    }
    closeSubnav() {
      $.classList.remove("has-subnav-open"),
        this.$("item").forEach((n) => {
          n.classList.remove("is-active");
        }),
        this.oldSubnav != null && this.oldSubnav.classList.remove("is-active");
    }
    open() {
      $.classList.add("has-nav-open"),
        O.delayedCall(1, () => {
          $.classList.add("has-nav-open-callback");
        });
    }
    close() {
      this.closeSubnav(),
        $.classList.remove("has-nav-open"),
        $.classList.remove("has-nav-open-callback"),
        $.classList.add("has-nav-closing"),
        O.delayedCall(1, () => {
          $.classList.add("has-nav-closing");
        });
    }
    destroy() {
      window.removeEventListener("keydown", this.bindkeydown);
    }
  };
  var vi = 256,
    lh = 6,
    Xc = 52,
    an = [],
    ts = typeof global == "undefined" ? window : global,
    Uc = Math.pow(vi, lh),
    hh = Math.pow(2, Xc),
    Vc = hh * 2,
    Zi = vi - 1;
  function uh(n, t) {
    if (t && t.global === !0)
      return (
        (t.global = !1),
        (Math.random = module.exports(n, t)),
        (t.global = !0),
        Math.random
      );
    var e = (t && t.entropy) || !1,
      i = [],
      r = Vo(ch(e ? [n, es(an)] : 0 in arguments ? n : jc(), 3), i),
      s = new qc(i);
    return (
      Vo(es(s.S), an),
      function () {
        for (var o = s.g(lh), a = Uc, l = 0; o < hh; )
          (o = (o + l) * vi), (a *= vi), (l = s.g(1));
        for (; o >= Vc; ) (o /= 2), (a /= 2), (l >>>= 1);
        return (o + l) / a;
      }
    );
  }
  function qc(n) {
    var t,
      e = n.length,
      i = this,
      r = 0,
      s = (i.i = i.j = 0),
      o = (i.S = []);
    for (e || (n = [e++]); r < vi; ) o[r] = r++;
    for (r = 0; r < vi; r++)
      (o[r] = o[(s = Zi & (s + n[r % e] + (t = o[r])))]), (o[s] = t);
    (i.g = function (a) {
      for (var l, h = 0, u = i.i, f = i.j, c = i.S; a--; )
        (l = c[(u = Zi & (u + 1))]),
          (h = h * vi + c[Zi & ((c[u] = c[(f = Zi & (f + l))]) + (c[f] = l))]);
      return (i.i = u), (i.j = f), h;
    })(vi);
  }
  function ch(n, t) {
    var e = [],
      i = (typeof n)[0],
      r;
    if (t && i == "o")
      for (r in n)
        try {
          e.push(ch(n[r], t - 1));
        } catch (s) {}
    return e.length ? e : i == "s" ? n : n + "\0";
  }
  function Vo(n, t) {
    for (var e = n + "", i, r = 0; r < e.length; )
      t[Zi & r] = Zi & ((i ^= t[Zi & r] * 19) + e.charCodeAt(r++));
    return es(t);
  }
  function jc(n) {
    try {
      return ts.crypto.getRandomValues((n = new Uint8Array(vi))), es(n);
    } catch (t) {
      return [
        +new Date(),
        ts,
        ts.navigator && ts.navigator.plugins,
        ts.screen,
        es(an),
      ];
    }
  }
  function es(n) {
    return String.fromCharCode.apply(0, n);
  }
  Vo(Math.random(), an);
  var Kc = 0.5 * (Math.sqrt(3) - 1),
    is = (3 - Math.sqrt(3)) / 6,
    Qc = 1 / 3,
    ri = 1 / 6,
    Jc = (Math.sqrt(5) - 1) / 4,
    Ut = (5 - Math.sqrt(5)) / 20,
    yi = (n) => Math.floor(n) | 0,
    fh = new Float64Array([
      1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1,
      0, -1,
    ]),
    qo = new Float64Array([
      1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1,
      0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
    ]),
    ln = new Float64Array([
      0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1,
      -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1,
      0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1,
      0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1,
      -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1,
      -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0,
    ]);
  function jo(n = Math.random) {
    let t = Jo(n),
      e = new Float64Array(t).map((r) => fh[(r % 12) * 2]),
      i = new Float64Array(t).map((r) => fh[(r % 12) * 2 + 1]);
    return function (s, o) {
      let a = 0,
        l = 0,
        h = 0,
        u = (s + o) * Kc,
        f = yi(s + u),
        c = yi(o + u),
        d = (f + c) * is,
        g = f - d,
        p = c - d,
        _ = s - g,
        m = o - p,
        b,
        T;
      _ > m ? ((b = 1), (T = 0)) : ((b = 0), (T = 1));
      let y = _ - b + is,
        x = m - T + is,
        k = _ - 1 + 2 * is,
        w = m - 1 + 2 * is,
        A = f & 255,
        C = c & 255,
        M = 0.5 - _ * _ - m * m;
      if (M >= 0) {
        let R = A + t[C],
          I = e[R],
          z = i[R];
        (M *= M), (a = M * M * (I * _ + z * m));
      }
      let D = 0.5 - y * y - x * x;
      if (D >= 0) {
        let R = A + b + t[C + T],
          I = e[R],
          z = i[R];
        (D *= D), (l = D * D * (I * y + z * x));
      }
      let L = 0.5 - k * k - w * w;
      if (L >= 0) {
        let R = A + 1 + t[C + 1],
          I = e[R],
          z = i[R];
        (L *= L), (h = L * L * (I * k + z * w));
      }
      return 70 * (a + l + h);
    };
  }
  function Ko(n = Math.random) {
    let t = Jo(n),
      e = new Float64Array(t).map((s) => qo[(s % 12) * 3]),
      i = new Float64Array(t).map((s) => qo[(s % 12) * 3 + 1]),
      r = new Float64Array(t).map((s) => qo[(s % 12) * 3 + 2]);
    return function (o, a, l) {
      let h,
        u,
        f,
        c,
        d = (o + a + l) * Qc,
        g = yi(o + d),
        p = yi(a + d),
        _ = yi(l + d),
        m = (g + p + _) * ri,
        b = g - m,
        T = p - m,
        y = _ - m,
        x = o - b,
        k = a - T,
        w = l - y,
        A,
        C,
        M,
        D,
        L,
        R;
      x >= k
        ? k >= w
          ? ((A = 1), (C = 0), (M = 0), (D = 1), (L = 1), (R = 0))
          : x >= w
          ? ((A = 1), (C = 0), (M = 0), (D = 1), (L = 0), (R = 1))
          : ((A = 0), (C = 0), (M = 1), (D = 1), (L = 0), (R = 1))
        : k < w
        ? ((A = 0), (C = 0), (M = 1), (D = 0), (L = 1), (R = 1))
        : x < w
        ? ((A = 0), (C = 1), (M = 0), (D = 0), (L = 1), (R = 1))
        : ((A = 0), (C = 1), (M = 0), (D = 1), (L = 1), (R = 0));
      let I = x - A + ri,
        z = k - C + ri,
        P = w - M + ri,
        F = x - D + 2 * ri,
        H = k - L + 2 * ri,
        J = w - R + 2 * ri,
        v = x - 1 + 3 * ri,
        ut = k - 1 + 3 * ri,
        pt = w - 1 + 3 * ri,
        Rt = g & 255,
        lt = p & 255,
        ft = _ & 255,
        Z = 0.6 - x * x - k * k - w * w;
      if (Z < 0) h = 0;
      else {
        let tt = Rt + t[lt + t[ft]];
        (Z *= Z), (h = Z * Z * (e[tt] * x + i[tt] * k + r[tt] * w));
      }
      let ct = 0.6 - I * I - z * z - P * P;
      if (ct < 0) u = 0;
      else {
        let tt = Rt + A + t[lt + C + t[ft + M]];
        (ct *= ct), (u = ct * ct * (e[tt] * I + i[tt] * z + r[tt] * P));
      }
      let dt = 0.6 - F * F - H * H - J * J;
      if (dt < 0) f = 0;
      else {
        let tt = Rt + D + t[lt + L + t[ft + R]];
        (dt *= dt), (f = dt * dt * (e[tt] * F + i[tt] * H + r[tt] * J));
      }
      let he = 0.6 - v * v - ut * ut - pt * pt;
      if (he < 0) c = 0;
      else {
        let tt = Rt + 1 + t[lt + 1 + t[ft + 1]];
        (he *= he), (c = he * he * (e[tt] * v + i[tt] * ut + r[tt] * pt));
      }
      return 32 * (h + u + f + c);
    };
  }
  function Qo(n = Math.random) {
    let t = Jo(n),
      e = new Float64Array(t).map((o) => ln[(o % 32) * 4]),
      i = new Float64Array(t).map((o) => ln[(o % 32) * 4 + 1]),
      r = new Float64Array(t).map((o) => ln[(o % 32) * 4 + 2]),
      s = new Float64Array(t).map((o) => ln[(o % 32) * 4 + 3]);
    return function (a, l, h, u) {
      let f,
        c,
        d,
        g,
        p,
        _ = (a + l + h + u) * Jc,
        m = yi(a + _),
        b = yi(l + _),
        T = yi(h + _),
        y = yi(u + _),
        x = (m + b + T + y) * Ut,
        k = m - x,
        w = b - x,
        A = T - x,
        C = y - x,
        M = a - k,
        D = l - w,
        L = h - A,
        R = u - C,
        I = 0,
        z = 0,
        P = 0,
        F = 0;
      M > D ? I++ : z++,
        M > L ? I++ : P++,
        M > R ? I++ : F++,
        D > L ? z++ : P++,
        D > R ? z++ : F++,
        L > R ? P++ : F++;
      let H = I >= 3 ? 1 : 0,
        J = z >= 3 ? 1 : 0,
        v = P >= 3 ? 1 : 0,
        ut = F >= 3 ? 1 : 0,
        pt = I >= 2 ? 1 : 0,
        Rt = z >= 2 ? 1 : 0,
        lt = P >= 2 ? 1 : 0,
        ft = F >= 2 ? 1 : 0,
        Z = I >= 1 ? 1 : 0,
        ct = z >= 1 ? 1 : 0,
        dt = P >= 1 ? 1 : 0,
        he = F >= 1 ? 1 : 0,
        tt = M - H + Ut,
        Vt = D - J + Ut,
        V = L - v + Ut,
        kt = R - ut + Ut,
        $t = M - pt + 2 * Ut,
        ue = D - Rt + 2 * Ut,
        It = L - lt + 2 * Ut,
        S = R - ft + 2 * Ut,
        we = M - Z + 3 * Ut,
        nt = D - ct + 3 * Ut,
        Ae = L - dt + 3 * Ut,
        Me = R - he + 3 * Ut,
        Ve = M - 1 + 4 * Ut,
        zt = D - 1 + 4 * Ut,
        si = L - 1 + 4 * Ut,
        Ee = R - 1 + 4 * Ut,
        ot = m & 255,
        Ft = b & 255,
        mt = T & 255,
        Be = y & 255,
        ce = 0.6 - M * M - D * D - L * L - R * R;
      if (ce < 0) f = 0;
      else {
        let it = ot + t[Ft + t[mt + t[Be]]];
        (ce *= ce),
          (f = ce * ce * (e[it] * M + i[it] * D + r[it] * L + s[it] * R));
      }
      let qt = 0.6 - tt * tt - Vt * Vt - V * V - kt * kt;
      if (qt < 0) c = 0;
      else {
        let it = ot + H + t[Ft + J + t[mt + v + t[Be + ut]]];
        (qt *= qt),
          (c = qt * qt * (e[it] * tt + i[it] * Vt + r[it] * V + s[it] * kt));
      }
      let We = 0.6 - $t * $t - ue * ue - It * It - S * S;
      if (We < 0) d = 0;
      else {
        let it = ot + pt + t[Ft + Rt + t[mt + lt + t[Be + ft]]];
        (We *= We),
          (d = We * We * (e[it] * $t + i[it] * ue + r[it] * It + s[it] * S));
      }
      let fe = 0.6 - we * we - nt * nt - Ae * Ae - Me * Me;
      if (fe < 0) g = 0;
      else {
        let it = ot + Z + t[Ft + ct + t[mt + dt + t[Be + he]]];
        (fe *= fe),
          (g = fe * fe * (e[it] * we + i[it] * nt + r[it] * Ae + s[it] * Me));
      }
      let be = 0.6 - Ve * Ve - zt * zt - si * si - Ee * Ee;
      if (be < 0) p = 0;
      else {
        let it = ot + 1 + t[Ft + 1 + t[mt + 1 + t[Be + 1]]];
        (be *= be),
          (p = be * be * (e[it] * Ve + i[it] * zt + r[it] * si + s[it] * Ee));
      }
      return 27 * (f + c + d + g + p);
    };
  }
  function Jo(n) {
    let e = new Uint8Array(512);
    for (let i = 0; i < 512 / 2; i++) e[i] = i;
    for (let i = 0; i < 512 / 2 - 1; i++) {
      let r = i + ~~(n() * (256 - i)),
        s = e[i];
      (e[i] = e[r]), (e[r] = s);
    }
    for (let i = 256; i < 512; i++) e[i] = e[i - 256];
    return e;
  }
  var hn = class {
    constructor(t = null) {
      (t = t),
        (this.defaultRandom = Math.random),
        this.currentSeed,
        this.currentRandom,
        this.noise2DGenerator,
        this.noise3DGenerator,
        this.noise4DGenerator,
        (this._nextGaussian = null),
        (this._hasNextGaussian = !1),
        this.setSeed(this.defaultSeed);
    }
    setSeed(t, e) {
      typeof t == "number" || typeof t == "string"
        ? ((this.currentSeed = t),
          (this.currentRandom = new uh(this.currentSeed, e)))
        : ((this.currentSeed = void 0),
          (this.currentRandom = this.defaultRandom)),
        (this.noise2DGenerator = this.createNoise2D()),
        (this.noise3DGenerator = this.createNoise3D()),
        (this.noise4DGenerator = this.createNoise4D()),
        (this._nextGaussian = null),
        (this._hasNextGaussian = !1);
    }
    value() {
      return this.currentRandom();
    }
    valueNonZero() {
      for (var t = 0; t === 0; ) t = this.value();
      return t;
    }
    getSeed() {
      return currentSeed;
    }
    getRandomSeed() {
      var t = String(Math.floor(Math.random() * 1e6));
      return t;
    }
    createNoise2D() {
      return new jo(this.currentRandom);
    }
    createNoise3D() {
      return new Ko(this.currentRandom);
    }
    createNoise4D() {
      return new Qo(this.currentRandom);
    }
    permuteNoise2D() {
      this.noise2DGenerator = jo();
    }
    permuteNoise3D() {
      this.noise3DGenerator = Ko();
    }
    permuteNoise4D() {
      this.noise4DGenerator = Qo();
    }
    noise1D(t, e, i) {
      if (!isFinite(t))
        throw new TypeError("x component for noise() must be finite");
      return (
        (e = e != null ? e : 1),
        (i = i != null ? i : 1),
        i * this.noise2DGenerator(t * e, 0)
      );
    }
    noise2D(t, e, i, r) {
      if (!isFinite(t))
        throw new TypeError("x component for noise() must be finite");
      if (!isFinite(e))
        throw new TypeError("y component for noise() must be finite");
      return (
        (i = i != null ? i : 1),
        (r = r != null ? r : 1),
        r * this.noise2DGenerator(t * i, e * i)
      );
    }
    noise3D(t, e, i, r, s) {
      if (!isFinite(t))
        throw new TypeError("x component for noise() must be finite");
      if (!isFinite(e))
        throw new TypeError("y component for noise() must be finite");
      if (!isFinite(i))
        throw new TypeError("z component for noise() must be finite");
      return (
        (r = r != null ? r : 1),
        (s = s != null ? s : 1),
        s * this.noise3DGenerator(t * r, e * r, i * r)
      );
    }
    noise4D(t, e, i, r, s, o) {
      if (!isFinite(t))
        throw new TypeError("x component for noise() must be finite");
      if (!isFinite(e))
        throw new TypeError("y component for noise() must be finite");
      if (!isFinite(i))
        throw new TypeError("z component for noise() must be finite");
      if (!isFinite(r))
        throw new TypeError("w component for noise() must be finite");
      return (
        (s = s != null ? s : 1),
        (o = o != null ? o : 1),
        o * this.noise4DGenerator(t * s, e * s, i * s, r * s)
      );
    }
    sign() {
      return boolean() ? 1 : -1;
    }
    boolean() {
      return value() > 0.5;
    }
    chance(t) {
      if (((t = t != null ? t : 0.5), typeof t != "number"))
        throw new TypeError("expected n to be a number");
      return value() < t;
    }
    range(t, e) {
      if (
        (e === void 0 && ((e = t), (t = 0)),
        typeof t != "number" || typeof e != "number")
      )
        throw new TypeError("Expected all arguments to be numbers");
      return value() * (e - t) + t;
    }
    rangeFloor(t, e) {
      if (
        (e === void 0 && ((e = t), (t = 0)),
        typeof t != "number" || typeof e != "number")
      )
        throw new TypeError("Expected all arguments to be numbers");
      return Math.floor(range(t, e));
    }
    pick(t) {
      if (t.length !== 0) return t[rangeFloor(0, t.length)];
    }
    shuffle(t) {
      if (!Array.isArray(t))
        throw new TypeError("Expected Array, got " + typeof t);
      for (var e, i, r = t.length, s = t.slice(); r; )
        (e = Math.floor(value() * r--)), (i = s[r]), (s[r] = s[e]), (s[e] = i);
      return s;
    }
    onCircle(t, e) {
      (t = t != null ? t : 1), (e = e || []);
      var i = value() * 2 * Math.PI;
      return (e[0] = t * Math.cos(i)), (e[1] = t * Math.sin(i)), e;
    }
    insideCircle(t, e) {
      (t = t != null ? t : 1), (e = e || []), onCircle(1, e);
      var i = t * Math.sqrt(value());
      return (e[0] *= i), (e[1] *= i), e;
    }
    onSphere(t, e) {
      (t = t != null ? t : 1), (e = e || []);
      var i = value() * Math.PI * 2,
        r = value() * 2 - 1,
        s = i,
        o = Math.acos(r);
      return (
        (e[0] = t * Math.sin(o) * Math.cos(s)),
        (e[1] = t * Math.sin(o) * Math.sin(s)),
        (e[2] = t * Math.cos(o)),
        e
      );
    }
    insideSphere(t, e) {
      (t = t != null ? t : 1), (e = e || []);
      var i = value() * Math.PI * 2,
        r = value() * 2 - 1,
        s = value(),
        o = i,
        a = Math.acos(r),
        l = t * Math.cbrt(s);
      return (
        (e[0] = l * Math.sin(a) * Math.cos(o)),
        (e[1] = l * Math.sin(a) * Math.sin(o)),
        (e[2] = l * Math.cos(a)),
        e
      );
    }
    quaternion(t) {
      t = t || [];
      var e = value(),
        i = value(),
        r = value(),
        s = Math.sqrt(1 - e),
        o = Math.sqrt(e),
        a = Math.PI * 2 * i,
        l = Math.PI * 2 * r,
        h = Math.sin(a) * s,
        u = Math.cos(a) * s,
        f = Math.sin(l) * o,
        c = Math.cos(l) * o;
      return (t[0] = h), (t[1] = u), (t[2] = f), (t[3] = c), t;
    }
    weightedSet(t) {
      return (
        (t = t || []), t.length === 0 ? null : t[weightedSetIndex(t)].value
      );
    }
    weightedSetIndex(t) {
      return (
        (t = t || []), t.length === 0 ? -1 : weighted(t.map((e) => e.weight))
      );
    }
    weighted(t) {
      if (((t = t || []), t.length === 0)) return -1;
      var e = 0,
        i;
      for (i = 0; i < t.length; i++) e += t[i];
      if (e <= 0) throw new Error("Weights must sum to > 0");
      var r = value() * e;
      for (i = 0; i < t.length; i++) {
        if (r < t[i]) return i;
        r -= t[i];
      }
      return 0;
    }
    gaussian(t, e) {
      if (
        ((t = t != null ? t : 0),
        (e = e != null ? e : 1),
        this._hasNextGaussian)
      ) {
        this._hasNextGaussian = !1;
        var i = this._nextGaussian;
        return (this._nextGaussian = null), t + e * i;
      } else {
        var r = 0,
          s = 0,
          o = 0;
        do (r = value() * 2 - 1), (s = value() * 2 - 1), (o = r * r + s * s);
        while (o >= 1 || o === 0);
        var a = Math.sqrt((-2 * Math.log(o)) / o);
        return (
          (this._nextGaussian = s * a),
          (this._hasNextGaussian = !0),
          t + e * (r * a)
        );
      }
    }
  };
  var un = class extends X {
    constructor(n) {
      super(n),
        (this.elephant = this.$("himself")[0]),
        (this.cursor = this.$("cursor")[0]),
        (this.events = {
          click: "click",
          mousedown: "mousedown",
          mouseup: "mouseup",
          mousemove: "mousemove",
          mouseenter: { inner: "mouseenter" },
          mouseleave: { inner: "mouseleave" },
        });
    }
    init() {
      (this.randomSeed = new hn()),
        (this.hasMouseDown = !0),
        (this.zOffset = 0),
        (this.firstHit = !0),
        O.delayedCall(1, () => {
          this.ready();
        });
    }
    ready() {
      (this.isReady = !0),
        (this.x = this.getBCR().width / 2),
        (this.y = this.getBCR().height / 2),
        (this.goalX = this.getBCR().width / 2),
        (this.goalY = this.getBCR().height / 2),
        (this.cursorX = this.getBCR().width / 2),
        (this.cursorY = this.getBCR().height / 2),
        (this.cursorLerpedX = this.getBCR().width / 2),
        (this.cursorLerpedY = this.getBCR().height / 2),
        (this.speed = 0),
        (this.goalSpeed = 0),
        (this.speedOffset = 30),
        (this.elephant.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`),
        O.delayedCall(2, () => {
          this.resize();
        }),
        this.resize(),
        (this.bindResize = this.resize.bind(this)),
        window.addEventListener("resize", this.bindResize),
        (this.hasGoal = !1),
        (this.lerp = { value: 0.8 });
    }
    trigger(n) {
      n.mode == "enter"
        ? (this.firstHit &&
            ((this.firstHit = !1), this.el.classList.add("is-visible")),
          this.ready(),
          this.draw())
        : cancelAnimationFrame(this.raf);
    }
    click(n) {
      if (!window.isMobile) return;
      let t = n.pageX,
        e = n.pageY - this.getBCR().top;
      (this.hasGoal = !0),
        this.callback != null && this.callback.kill(),
        this.deceleration != null && this.deceleration.kill(),
        O.to(this.lerp, {
          value: 0.03,
          duration: 0,
          delay: 0,
          onComplete: () => {
            this.callback = O.delayedCall(2.2, () => {
              (this.hasGoal = !1),
                (this.deceleration = O.to(this.lerp, {
                  value: 0.8,
                  duration: 2,
                  onComplete: () => {},
                }));
            });
          },
        }),
        (this.goalX = t),
        (this.goalY = e);
    }
    mousedown(n) {
      if (window.isMobile) return;
      this.hasMouseDown = !0;
      let t = n.pageX,
        e = n.pageY - this.getBCR().top;
      this.callback != null && this.callback.kill(),
        this.deceleration != null && this.deceleration.kill(),
        (this.hasGoal = !0),
        O.to(this.lerp, { value: 0.02, duration: 0, delay: 0 }),
        (this.goalX = t),
        (this.goalY = e);
    }
    mousemove(n) {
      if (
        !window.isMobile &&
        ((this.cursorX = n.pageX),
        (this.cursorY = n.pageY - this.getBCR().top),
        !!this.hasGoal && this.hasMouseDown)
      ) {
        let t = n.pageX,
          e = n.pageY - this.getBCR().top;
        (this.goalX = t), (this.goalY = e);
      }
    }
    mouseup(n) {
      if (window.isMobile) return;
      let t = n.pageX,
        e = n.pageY - this.getBCR().top;
      (this.goalX = t),
        (this.goalY = e),
        (this.hasMouseDown = !1),
        (this.callback = O.delayedCall(3, () => {
          (this.hasGoal = !1),
            (this.deceleration = O.to(this.lerp, { value: 0.8, duration: 3 }));
        }));
    }
    mouseenter() {
      window.isMobile || this.el.classList.add("is-hover");
    }
    mouseleave() {
      window.isMobile || this.el.classList.remove("is-hover");
    }
    draw() {
      if (!this.isReady) return;
      let t =
        this.randomSeed.noise3D(0.1, 0.1, this.zOffset, 5, 1) * Math.PI * 2;
      this.hasGoal ||
        ((this.goalX = this.x + Math.sin(t)),
        (this.goalY = this.y + Math.cos(t))),
        (this.x = Pi(this.x, this.goalX, this.lerp.value)),
        (this.y = Pi(this.y, this.goalY, this.lerp.value)),
        this.x > this.limitX && (this.x = -this.elephantWidth / 2),
        this.x < -this.elephantWidth / 2 && (this.x = this.limitX),
        this.y > this.limitY && (this.y = -this.elephantHeight / 2),
        this.y < -this.elephantHeight / 2 && (this.y = this.limitY),
        (this.goalSpeed =
          this.speedOffset * ((this.goalX - this.x) / this.width)),
        (this.speed = Pi(this.speed, this.goalSpeed, 0.1)),
        (this.elephant.style.transform = `translate3d(${
          this.x - this.elephantWidth / 2
        }px, ${this.y - this.elephantHeight / 3}px, 0) rotate(${
          this.speed
        }deg)`),
        (this.zOffset += 1e-4),
        (this.cursorLerpedX = Pi(this.cursorLerpedX, this.cursorX, 0.1)),
        (this.cursorLerpedY = Pi(this.cursorLerpedY, this.cursorY, 0.1)),
        (this.cursor.style.transform = `translate3d(${this.cursorLerpedX}px, ${this.cursorLerpedY}px, 0)`),
        (this.raf = requestAnimationFrame(() => this.draw()));
    }
    getBCR() {
      return this.el.getBoundingClientRect();
    }
    resize() {
      (this.elephantWidth = this.elephant.getBoundingClientRect().width),
        (this.elephantHeight = this.elephant.getBoundingClientRect().height),
        (this.width = this.getBCR().width),
        (this.height = this.getBCR().height),
        (this.limitX = this.width + this.elephantWidth / 2),
        (this.limitY = this.height + this.elephantHeight / 2);
    }
    destroy() {
      cancelAnimationFrame(this.raf),
        window.removeEventListener("resize", this.bindResize);
    }
  };
  var cn = class extends X {
    constructor(n) {
      super(n),
        (this.$background = this.$("background")[0]),
        (this.$imagesWrap = this.$("images")[0]),
        (this.$canvas = this.$("canvas")[0]),
        (this.ctx = this.$canvas.getContext("2d")),
        (this.backgroundColor =
          typeof this.getData("background") == "string"
            ? this.getData("background")
            : "#FCF3EA"),
        (this.currentImage = 0),
        (this.imagesDelay = 0.5),
        (this.$images = this.$("image")),
        (this.hasText = typeof this.getData("text") == "string"),
        (this.text = this.getData("text")),
        (this.textIsLoaded = !1),
        this.hasText &&
          ((this.text = document.createElement("img")),
          this.text.addEventListener("load", () => {
            (this.textIsLoaded = !0),
              (this.textRatio = this.text.height / this.text.width);
          }),
          (this.text.src = this.getData("text")));
    }
    init() {
      (this.portalRatio = 384 / 476),
        (this.shapeWidth = 0),
        (this.shapeHeight = 0),
        (this.threshold = { value: 1 }),
        (this.firstHit = !0),
        this.resize(),
        (this.bindResize = this.resize.bind(this)),
        window.addEventListener("resize", this.bindResize),
        (this.imagesTl = O.timeline()),
        this.imagesTl.pause(),
        this.imagesTl.fromTo(
          this.$imagesWrap,
          { scale: 0 },
          { scale: 1, ease: "power2.inOut" }
        ),
        (this.imagesInnerTl = O.timeline()),
        this.imagesInnerTl.pause(),
        this.imagesInnerTl.fromTo(
          this.$images,
          { scale: 1.8 },
          { scale: 1, ease: "power2.inOut" }
        );
    }
    trigger(n) {
      n.mode == "enter"
        ? (this.firstHit &&
            ((this.firstHit = !1), this.el.classList.add("is-visible")),
          this.draw(),
          this.stopImages(),
          this.nextImage())
        : (this.stopImages(), cancelAnimationFrame(this.raf));
    }
    progress({ progress: n, isReversed: t }) {
      let e = n;
      this.tl != null &&
        (this.tl.progress(e),
        this.backgroundTl.progress(e),
        this.imagesTl.progress(-0.3 + e * 1.3),
        this.imagesInnerTl.progress(-0.3 + e * 1.3));
    }
    draw(n = !1) {
      (this.ctx.globalCompositeOperation = "source-over"),
        (this.ctx.fillStyle = this.backgroundColor),
        this.ctx.fillRect(0, 0, this.w, this.h),
        this.textIsLoaded &&
          ((this.textWidth = this.shapeWidth * 1.4),
          (this.textHeight = this.textWidth * this.textRatio),
          this.ctx.drawImage(
            this.text,
            this.w / 2 - this.textWidth / 2,
            this.h / 2 - this.textHeight / 1.7,
            this.textWidth,
            this.textHeight
          )),
        (this.ctx.globalCompositeOperation = "destination-out"),
        (this.shapeWidthThreshold = this.shapeWidth * this.threshold.value),
        (this.shapeHeightThreshold = this.shapeHeight * this.threshold.value),
        this.ctx.beginPath(),
        (this.ctx.fillStyle = "red"),
        this.ctx.arc(
          this.w / 2,
          this.h / 2,
          this.shapeWidthThreshold / 2,
          Math.PI,
          0
        ),
        this.ctx.rect(
          this.w / 2 - this.shapeWidthThreshold / 2,
          this.h / 2,
          this.shapeWidthThreshold,
          this.shapeHeightThreshold / 1.8
        ),
        this.ctx.fill(),
        this.ctx.closePath(),
        this.firstHit || (this.raf = requestAnimationFrame(() => this.draw()));
    }
    nextImage() {
      this.$images.forEach((n, t) => {
        t == this.currentImage
          ? n.classList.add("is-active")
          : n.classList.remove("is-active");
      }),
        this.currentImage < this.$images.length - 1
          ? this.currentImage++
          : (this.currentImage = 0),
        (this.delayedCallImages = O.delayedCall(this.imagesDelay, () => {
          this.nextImage();
        }));
    }
    stopImages() {
      this.delayedCallImages != null && this.delayedCallImages.kill();
    }
    resize() {
      this.resizeTimeout != null && this.resizeTimeout.kill(),
        (this.resizeTimeout = O.delayedCall(0.3, () => {
          this.resizeDebounce();
        }));
    }
    resizeDebounce() {
      (this.w = window.innerWidth),
        (this.h = window.innerHeight),
        (this.$canvas.width = this.w),
        (this.$canvas.height = this.h),
        (this.$canvas.style.width = this.w),
        (this.$canvas.style.height = this.h),
        this.w / this.h > this.portalRatio
          ? ((this.shapeHeight = this.h / 2),
            (this.shapeWidth = this.shapeHeight * this.portalRatio),
            (this.tl = new O.timeline()),
            this.tl.pause(),
            this.tl.fromTo(
              this.threshold,
              { value: 1 },
              { value: (this.w * 1.2) / this.shapeWidth, ease: "power1.inOut" }
            ),
            (this.backgroundTl = O.timeline()),
            this.backgroundTl.pause(),
            this.backgroundTl.fromTo(
              this.$background,
              { scale: (this.shapeHeight * 2) / this.h },
              { scale: 1.2, ease: "power1.inOut" }
            ))
          : ((this.shapeWidth = this.w / 2),
            (this.shapeHeight = this.shapeWidth * (1 / this.portalRatio)),
            (this.tl = new O.timeline()),
            this.tl.pause(),
            this.tl.fromTo(
              this.threshold,
              { value: 1 },
              { value: (this.h * 1.2) / this.shapeHeight, ease: "power1.inOut" }
            ),
            (this.backgroundTl = O.timeline()),
            this.backgroundTl.pause(),
            this.backgroundTl.fromTo(
              this.$background,
              { scale: (this.shapeWidth * 2) / this.w },
              { scale: 1.2, ease: "power1.inOut" }
            ));
    }
    destroy() {
      cancelAnimationFrame(this.raf),
        window.removeEventListener("resize", this.bindResize);
    }
  };
  var fn = class extends X {
    constructor(n) {
      super(n);
    }
    init() {
      this.resize(!0),
        (this.windowWidth = window.innerWidth),
        (this.bindResize = this.resize.bind(this)),
        window.addEventListener("resize", this.bindResize);
    }
    resize(n = !1) {
      this.windowWidth != window.innerWidth &&
        ((this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight),
        this.windowWidth < this.windowHeight
          ? ((!this.isMobile || n) &&
              this.el.setAttribute(
                "src",
                this.el.getAttribute("data-mobile-src")
              ),
            (this.isMobile = !0))
          : ((this.isMobile || n) &&
              this.el.setAttribute(
                "src",
                this.el.getAttribute("data-desktop-src")
              ),
            (this.isMobile = !1)));
    }
    destroy() {
      window.removeEventListener("resize", this.bindResize);
    }
  };
  var dn = class extends X {
    constructor(n) {
      super(n);
    }
    init() {
      this.delay = O.delayedCall(1, () => {
        (this.$chars = this.el.querySelectorAll(".char-wrap>span")),
          this.$chars.forEach((n) => {
            n.addEventListener("mouseenter", this.mouseenter),
              n.addEventListener("animationend", this.animationend);
          });
      });
    }
    mouseenter(n) {
      n.currentTarget.classList.add("is-hover");
    }
    animationend(n) {
      n.currentTarget.classList.remove("is-hover");
    }
    destroy() {
      this.delay != null && this.delay.kill(),
        this.$chars.length > 0 &&
          this.$chars.forEach((n) => {
            n.addEventListener("mouseenter", this.mouseenter),
              n.addEventListener("animationend", this.animationend);
          });
    }
  };
  var pn = class extends X {
    constructor(n) {
      super(n);
    }
    init() {
      (this.isReversed = typeof this.getData("reversed") == "string"),
        (this.hasLimit = typeof this.getData("limit") == "string"),
        (this.velocityOffset =
          typeof this.getData("velocity") == "string"
            ? parseFloat(this.getData("velocity"))
            : 1);
    }
    trigger(n) {
      n.mode == "enter" ? this.capartenY() : cancelAnimationFrame(this.raf);
    }
    capartenY() {
      this.raf = requestAnimationFrame(() => this.capartenY());
      let n = this.velocityOffset * window.scrollInstance.velocity;
      window.isMobile && (n *= 0.2),
        this.isReversed
          ? this.hasLimit
            ? (this.el.style.transform = `rotate(${Math.min(0, -n)}deg)`)
            : (this.el.style.transform = `rotate(${-n}deg)`)
          : this.hasLimit
          ? (this.el.style.transform = `rotate(${Math.max(n, 0)}deg)`)
          : (this.el.style.transform = `rotate(${n}deg)`);
    }
    destroy() {
      cancelAnimationFrame(this.raf);
    }
  };
  var gn = class extends X {
    constructor(n) {
      super(n),
        (this.$sliderImages = this.$("sliderImages")[0]),
        (this.$sliderContent = this.$("sliderContent")[0]),
        (this.events = { click: { prev: "prev", next: "next" } });
    }
    init() {
      (this.swiperImages = new Swiper(this.$sliderImages, { speed: 1e3 })),
        (this.swiperContent = new Swiper(this.$sliderContent, {
          speed: 1e3,
          loop: !1,
          effect: "fade",
          touchable: !1,
        })),
        (this.oldIndex = -1),
        this.swiperImages.on("slideChange", (n) => {
          this.swiperContent.slideTo(n.activeIndex);
        }),
        this.swiperContent.on("slideChange", (n) => {
          this.swiperImages.slideTo(n.activeIndex), this.slideContentChange(n);
        }),
        this.slideContentChange(this.swiperContent);
    }
    prev() {
      this.swiperContent.slidePrev();
    }
    next() {
      this.swiperContent.slideNext();
    }
    slideContentChange(n) {
      let e = n.slides[n.activeIndex].querySelectorAll("[data-module-split]");
      this.displayingDelay != null && this.displayingDelay.kill(),
        (this.displayingDelay = O.delayedCall(
          this.oldIndex != -1 ? 0.8 : 0,
          () => {
            e.forEach((i) => {
              this.call(
                "animate",
                {},
                "Split",
                i.getAttribute("data-module-split")
              );
            });
          }
        )),
        this.oldIndex != -1 &&
          n.slides[this.oldIndex]
            .querySelectorAll("[data-module-split]")
            .forEach((s) => {
              this.call(
                "reverse",
                {},
                "Split",
                s.getAttribute("data-module-split")
              );
            }),
        (this.oldIndex = n.activeIndex),
        this.swiperContent.isEnd
          ? this.el.classList.add("is-end")
          : this.el.classList.remove("is-end"),
        this.swiperContent.isBeginning
          ? this.el.classList.add("is-beginning")
          : this.el.classList.remove("is-beginning");
    }
  };
  var _n = class extends X {
    constructor(n) {
      super(n), (this.events = { click: { toggler: "toggle" } });
    }
    init() {
      O.delayedCall(4, () => {
        this.$("item").forEach((n) => {
          n.classList.contains("is-open") && this.open(n);
        });
      });
    }
    toggle(n) {
      let t = n.curTarget,
        e = this.parent("item", t);
      e.classList.contains("is-open")
        ? this.close()
        : (this.close(), this.open(e));
    }
    open(n) {
      let t = this.$("content", n)[0];
      n.classList.add("is-open"),
        O.to(t, {
          duration: 0,
          height: this.compute(this.$("inner", n)[0]).height,
        }),
        O.delayedCall(0.4, () => {
          this.call("refresh", "Scroll");
        });
    }
    close() {
      this.$("item").forEach((n) => {
        n.classList.remove("is-open");
        let t = this.$("content", n)[0];
        t &&
          (O.to(t, 0, { height: 0 }),
          O.delayedCall(0.4, () => {
            this.call("refresh", "Scroll");
          }));
      });
    }
    compute(n) {
      return n.getBoundingClientRect();
    }
  };
  var mn = class extends X {
    constructor(n) {
      super(n), (this.track = this.$("track")[0]);
    }
    init() {
      this.resize(),
        (this.bindResize = this.resize.bind(this)),
        window.addEventListener("resize", this.bindResize);
    }
    resize() {
      this.el.style.height = `${
        this.track.getBoundingClientRect().width + window.innerHeight
      }px`;
    }
    destroy() {
      window.removeEventListener("resize", this.bindResize);
    }
  };
  var vn = class extends X {
    constructor(n) {
      super(n);
    }
    init() {}
    trigger(n) {
      let t = [
        n.$el.getAttribute("data-trigger-top"),
        n.$el.getAttribute("data-trigger-bottom"),
      ];
      n.mode === "enter" &&
        n.direction == "down" &&
        $.setAttribute("data-theme", t[1]),
        n.mode === "leave" &&
          n.direction == "up" &&
          $.setAttribute("data-theme", t[0]);
    }
  };
  var yn = class extends X {
    constructor(n) {
      super(n), (this.events = { click: { prev: "prev", next: "next" } });
    }
    init() {
      (this.swiper = new Swiper(this.el, {
        speed: 400,
        slidesPerView: 1,
        breakpoints: { 1024: { slidesPerView: 3 } },
      })),
        this.swiper.on("slideChange", (n) => {
          this.swiper.isEnd
            ? this.el.classList.add("is-end")
            : this.el.classList.remove("is-end"),
            this.swiper.isBeginning
              ? this.el.classList.add("is-beginning")
              : this.el.classList.remove("is-beginning");
        }),
        this.swiper.isEnd
          ? this.el.classList.add("is-end")
          : this.el.classList.remove("is-end"),
        this.swiper.isBeginning
          ? this.el.classList.add("is-beginning")
          : this.el.classList.remove("is-beginning");
    }
    prev() {
      this.swiper.slidePrev();
    }
    next() {
      this.swiper.slideNext();
    }
  };
  var wn = "is-active",
    bn = "is-active-callback",
    dh = "is-heighest",
    xn = class extends X {
      constructor(n) {
        super(n),
          (this.events = { click: { button: "buttonClick", job: "openJob" } });
      }
      init() {
        (this.$buttons = this.$("button")),
          (this.$lists = this.$("list")),
          this.display(0),
          (this.bindResize = this.resize.bind(this)),
          window.addEventListener("resize", this.bindResize),
          this.resize();
      }
      buttonClick(n) {
        let t = parseInt(n.currentTarget.getAttribute("data-id")) - 1;
        this.display(t);
      }
      openJob(n) {
        let t = n.currentTarget.getAttribute("data-slug");
        console.log(t), this.call("open", {}, "Popup", t);
      }
      display(n) {
        let t, e;
        this.delayCallback != null && this.delayCallback.kill(),
          this.$buttons.forEach((i) => {
            parseInt(i.getAttribute("data-id")) - 1 == n
              ? ((t = i), i.classList.add(wn))
              : (i.classList.remove(wn), i.classList.remove(bn));
          }),
          this.$lists.forEach((i) => {
            parseInt(i.getAttribute("data-id")) - 1 == n
              ? ((e = i), i.classList.add(wn))
              : (i.classList.remove(wn), i.classList.remove(bn));
          }),
          (this.delayCallback = O.delayedCall(0.4, () => {
            e.classList.add(bn), e.classList.add(bn);
          }));
      }
      checkHeight() {
        let n = 0,
          t;
        this.$lists.forEach((e) => {
          e.classList.remove(dh);
          let i = e.getBoundingClientRect().height;
          i > n && ((n = i), (t = e));
        }),
          t.classList.add(dh);
      }
      resize() {
        this.checkHeight();
      }
    };
  var ph = "is-open",
    Tn = class extends X {
      constructor(n) {
        super(n),
          (this.events = { click: { close: "close", background: "close" } });
      }
      init() {
        this.id = this.el.getAttribute("data-id");
        let n = window.location.hash;
        n != null &&
          n.substring(1, n.length) == this.id &&
          O.delayedCall(window.readyCallbackDelay + 2, () => {
            this.open();
          });
      }
      open() {
        this.el.classList.add(ph), history.pushState(null, null, `#${this.id}`);
      }
      close() {
        this.el.classList.remove(ph), history.pushState(null, null, "#");
      }
    };
  var mh = Lh(_h(), 1);
  function vh() {
    (0, mh.default)();
  }
  var yh = new ha({ modules: Zo });
  window.isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  window.isMobile
    ? $.classList.add("is-mobile")
    : $.classList.add("is-desktop");
  window.isMobile && window.innerWidth > 1e3 && (window.isTablet = !0);
  window.isWindows = navigator.platform.indexOf("Win") > -1;
  window.isWindows && $.classList.add("is-windows");
  window.isIos =
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  window.isIos && $.classList.add("is-ios");
  window.onload = (n) => {
    Zc();
  };
  window.firstHit = !0;
  window.readyDelay = 0.3;
  window.readyCallbackDelay = 1;
  function Zc() {
    if (
      (vh(),
      yh.init(yh),
      $.classList.add("is-loaded"),
      $.classList.remove("is-loading"),
      O.delayedCall(window.readyDelay, () => {
        $.classList.add("is-first-load"),
          $.classList.add("is-ready"),
          $.classList.add("has-dom-ready"),
          O.delayedCall(window.readyCallbackDelay, () => {
            $.classList.add("has-dom-ready-callback"),
              $.classList.add("has-dom-animated"),
              (window.firstHit = !1);
          });
      }),
      navigator.userAgent.toLowerCase().indexOf("chrome") > -1)
    ) {
      var n = [
        `%c Developed by Quentin Hocd\xE9 \xA9 https://quentinhocde.com 
 Made with Index Studio - https://index.studio 
`,
        "background: #0D3026; padding:10px 0;color: #ffffff;",
      ];
      window.console.log.apply(console, n);
    } else
      window.console &&
        window.console.log(
          "Developed by Quentin Hocd\xE9 - https://quentinhocde.com - made with Index Studio - https://index.studio"
        );
  }
})();
/*!
 * CSSPlugin 3.11.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * GSAP 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * Observer 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * ScrollTrigger 3.11.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
//# sourceMappingURL=app.js.map
