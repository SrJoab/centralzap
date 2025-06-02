import {
  R as s,
  r as v,
  p as lt,
  _ as P,
  a0 as ea,
  w as Gi,
  H as _a,
  I as zi,
  n as ji,
  s as re,
  g as T,
  c as q,
  B as qi,
  b as ra,
  a6 as Wi,
  a7 as Hi,
  a8 as Z,
  d as G,
  W as Y,
  j as Ui,
  a9 as Nr,
  U as eo,
  aa as Vi,
  h as Ki,
  C as ke,
  e as Ie,
  A as Yi,
  ab as ro,
  ac as Ji,
  a as Xi,
  M as hn,
  ad as to,
  ae as Zi,
  af as Qi,
  ag as _i,
  ah as el,
  ai as rl,
  aj as tl,
  k as nl,
  l as al,
  G as ol,
  m as il,
} from "./chunk-3aa3a6d5.js";
import {
  _ as ll,
  w as ae,
  u as ne,
  j as he,
  b as Rr,
  c as Br,
  d as Tr,
  e as kr,
  f as Ze,
  x as Mr,
  g as no,
  I as sl,
  y as ao,
  T as ye,
  z as cl,
  M as xn,
  S as yn,
  p as Xr,
  q as ul,
  a as oo,
  h as dl,
  k as pl,
  l as fl,
  A as at,
  L as nr,
  O as ml,
  R as gl,
  r as Te,
  s as vl,
  t as bl,
  v as hl,
  P as xl,
  F as yl,
} from "./chunk-efa101b4.js";
import {
  c as Se,
  I as ot,
  _ as cr,
  a as ur,
  b as El,
  M as Qe,
  d as wl,
  e as En,
  u as nn,
  f as io,
  g as Dl,
  P as dr,
  h as Le,
  i as lo,
  r as xt,
} from "./chunk-201328a9.js";
import { v as Je } from "./chunk-5237112f.js";
import { s as Me, g as me, a as wn } from "./chunk-081d0b03.js";
function ta(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function na(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ta(Object(t), !0).forEach(function (n) {
          ll(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ta(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function fe(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var aa = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  jt = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  oa = {
    INIT: "@@redux/INIT" + jt(),
    REPLACE: "@@redux/REPLACE" + jt(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + jt();
    },
  };
function Cl(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var r = e; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r;
}
function so(e, r, t) {
  var n;
  if (
    (typeof r == "function" && typeof t == "function") ||
    (typeof t == "function" && typeof arguments[3] == "function")
  )
    throw new Error(fe(0));
  if (
    (typeof r == "function" && typeof t > "u" && ((t = r), (r = void 0)),
    typeof t < "u")
  ) {
    if (typeof t != "function") throw new Error(fe(1));
    return t(so)(e, r);
  }
  if (typeof e != "function") throw new Error(fe(2));
  var a = e,
    o = r,
    i = [],
    l = i,
    c = !1;
  function u() {
    l === i && (l = i.slice());
  }
  function f() {
    if (c) throw new Error(fe(3));
    return o;
  }
  function d(b) {
    if (typeof b != "function") throw new Error(fe(4));
    if (c) throw new Error(fe(5));
    var h = !0;
    return (
      u(),
      l.push(b),
      function () {
        if (!!h) {
          if (c) throw new Error(fe(6));
          (h = !1), u();
          var y = l.indexOf(b);
          l.splice(y, 1), (i = null);
        }
      }
    );
  }
  function p(b) {
    if (!Cl(b)) throw new Error(fe(7));
    if (typeof b.type > "u") throw new Error(fe(8));
    if (c) throw new Error(fe(9));
    try {
      (c = !0), (o = a(o, b));
    } finally {
      c = !1;
    }
    for (var h = (i = l), x = 0; x < h.length; x++) {
      var y = h[x];
      y();
    }
    return b;
  }
  function m(b) {
    if (typeof b != "function") throw new Error(fe(10));
    (a = b), p({ type: oa.REPLACE });
  }
  function g() {
    var b,
      h = d;
    return (
      (b = {
        subscribe: function (y) {
          if (typeof y != "object" || y === null) throw new Error(fe(11));
          function w() {
            y.next && y.next(f());
          }
          w();
          var E = h(w);
          return { unsubscribe: E };
        },
      }),
      (b[aa] = function () {
        return this;
      }),
      b
    );
  }
  return (
    p({ type: oa.INIT }),
    (n = { dispatch: p, subscribe: d, getState: f, replaceReducer: m }),
    (n[aa] = g),
    n
  );
}
function ia(e, r) {
  return function () {
    return r(e.apply(this, arguments));
  };
}
function la(e, r) {
  if (typeof e == "function") return ia(e, r);
  if (typeof e != "object" || e === null) throw new Error(fe(16));
  var t = {};
  for (var n in e) {
    var a = e[n];
    typeof a == "function" && (t[n] = ia(a, r));
  }
  return t;
}
function co() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return r.length === 0
    ? function (n) {
        return n;
      }
    : r.length === 1
    ? r[0]
    : r.reduce(function (n, a) {
        return function () {
          return n(a.apply(void 0, arguments));
        };
      });
}
function Il() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function (n) {
    return function () {
      var a = n.apply(void 0, arguments),
        o = function () {
          throw new Error(fe(15));
        },
        i = {
          getState: a.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = r.map(function (c) {
          return c(i);
        });
      return (
        (o = co.apply(void 0, l)(a.dispatch)),
        na(na({}, a), {}, { dispatch: o })
      );
    };
  };
}
var uo = s.createContext(null);
function Sl(e) {
  e();
}
var po = Sl,
  Al = function (r) {
    return (po = r);
  },
  Ol = function () {
    return po;
  };
function Pl() {
  var e = Ol(),
    r = null,
    t = null;
  return {
    clear: function () {
      (r = null), (t = null);
    },
    notify: function () {
      e(function () {
        for (var a = r; a; ) a.callback(), (a = a.next);
      });
    },
    get: function () {
      for (var a = [], o = r; o; ) a.push(o), (o = o.next);
      return a;
    },
    subscribe: function (a) {
      var o = !0,
        i = (t = { callback: a, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (r = i),
        function () {
          !o ||
            r === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (r = i.next));
        }
      );
    },
  };
}
var sa = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function fo(e, r) {
  var t,
    n = sa;
  function a(d) {
    return c(), n.subscribe(d);
  }
  function o() {
    n.notify();
  }
  function i() {
    f.onStateChange && f.onStateChange();
  }
  function l() {
    return Boolean(t);
  }
  function c() {
    t || ((t = r ? r.addNestedSub(i) : e.subscribe(i)), (n = Pl()));
  }
  function u() {
    t && (t(), (t = void 0), n.clear(), (n = sa));
  }
  var f = {
    addNestedSub: a,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: l,
    trySubscribe: c,
    tryUnsubscribe: u,
    getListeners: function () {
      return n;
    },
  };
  return f;
}
var mo =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? v.exports.useLayoutEffect
    : v.exports.useEffect;
function Fl(e) {
  var r = e.store,
    t = e.context,
    n = e.children,
    a = v.exports.useMemo(
      function () {
        var l = fo(r);
        return { store: r, subscription: l };
      },
      [r]
    ),
    o = v.exports.useMemo(
      function () {
        return r.getState();
      },
      [r]
    );
  mo(
    function () {
      var l = a.subscription;
      return (
        (l.onStateChange = l.notifyNestedSubs),
        l.trySubscribe(),
        o !== r.getState() && l.notifyNestedSubs(),
        function () {
          l.tryUnsubscribe(), (l.onStateChange = null);
        }
      );
    },
    [a, o]
  );
  var i = t || uo;
  return s.createElement(i.Provider, { value: a }, n);
}
var go = { exports: {} },
  J = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yt = 60103,
  Et = 60106,
  Lr = 60107,
  $r = 60108,
  Gr = 60114,
  zr = 60109,
  jr = 60110,
  qr = 60112,
  Wr = 60113,
  Dn = 60120,
  Hr = 60115,
  Ur = 60116,
  vo = 60121,
  bo = 60122,
  ho = 60117,
  xo = 60129,
  yo = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var le = Symbol.for;
  (yt = le("react.element")),
    (Et = le("react.portal")),
    (Lr = le("react.fragment")),
    ($r = le("react.strict_mode")),
    (Gr = le("react.profiler")),
    (zr = le("react.provider")),
    (jr = le("react.context")),
    (qr = le("react.forward_ref")),
    (Wr = le("react.suspense")),
    (Dn = le("react.suspense_list")),
    (Hr = le("react.memo")),
    (Ur = le("react.lazy")),
    (vo = le("react.block")),
    (bo = le("react.server.block")),
    (ho = le("react.fundamental")),
    (xo = le("react.debug_trace_mode")),
    (yo = le("react.legacy_hidden"));
}
function Oe(e) {
  if (typeof e == "object" && e !== null) {
    var r = e.$$typeof;
    switch (r) {
      case yt:
        switch (((e = e.type), e)) {
          case Lr:
          case Gr:
          case $r:
          case Wr:
          case Dn:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case jr:
              case qr:
              case Ur:
              case Hr:
              case zr:
                return e;
              default:
                return r;
            }
        }
      case Et:
        return r;
    }
  }
}
var Nl = zr,
  Rl = yt,
  Bl = qr,
  Tl = Lr,
  kl = Ur,
  Ml = Hr,
  Ll = Et,
  $l = Gr,
  Gl = $r,
  zl = Wr;
J.ContextConsumer = jr;
J.ContextProvider = Nl;
J.Element = Rl;
J.ForwardRef = Bl;
J.Fragment = Tl;
J.Lazy = kl;
J.Memo = Ml;
J.Portal = Ll;
J.Profiler = $l;
J.StrictMode = Gl;
J.Suspense = zl;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return Oe(e) === jr;
};
J.isContextProvider = function (e) {
  return Oe(e) === zr;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === yt;
};
J.isForwardRef = function (e) {
  return Oe(e) === qr;
};
J.isFragment = function (e) {
  return Oe(e) === Lr;
};
J.isLazy = function (e) {
  return Oe(e) === Ur;
};
J.isMemo = function (e) {
  return Oe(e) === Hr;
};
J.isPortal = function (e) {
  return Oe(e) === Et;
};
J.isProfiler = function (e) {
  return Oe(e) === Gr;
};
J.isStrictMode = function (e) {
  return Oe(e) === $r;
};
J.isSuspense = function (e) {
  return Oe(e) === Wr;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Lr ||
    e === Gr ||
    e === xo ||
    e === $r ||
    e === Wr ||
    e === Dn ||
    e === yo ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ur ||
        e.$$typeof === Hr ||
        e.$$typeof === zr ||
        e.$$typeof === jr ||
        e.$$typeof === qr ||
        e.$$typeof === ho ||
        e.$$typeof === vo ||
        e[0] === bo))
  );
};
J.typeOf = Oe;
(function (e) {
  e.exports = J;
})(go);
var jl = [
    "getDisplayName",
    "methodName",
    "renderCountProp",
    "shouldHandleStateChanges",
    "storeKey",
    "withRef",
    "forwardRef",
    "context",
  ],
  ql = ["reactReduxForwardedRef"],
  Wl = [],
  Hl = [null, null];
function Ul(e, r) {
  var t = e[1];
  return [r.payload, t + 1];
}
function ca(e, r, t) {
  mo(function () {
    return e.apply(void 0, r);
  }, t);
}
function Vl(e, r, t, n, a, o, i) {
  (e.current = n),
    (r.current = a),
    (t.current = !1),
    o.current && ((o.current = null), i());
}
function Kl(e, r, t, n, a, o, i, l, c, u) {
  if (!!e) {
    var f = !1,
      d = null,
      p = function () {
        if (!f) {
          var b = r.getState(),
            h,
            x;
          try {
            h = n(b, a.current);
          } catch (y) {
            (x = y), (d = y);
          }
          x || (d = null),
            h === o.current
              ? i.current || c()
              : ((o.current = h),
                (l.current = h),
                (i.current = !0),
                u({ type: "STORE_UPDATED", payload: { error: x } }));
        }
      };
    (t.onStateChange = p), t.trySubscribe(), p();
    var m = function () {
      if (((f = !0), t.tryUnsubscribe(), (t.onStateChange = null), d)) throw d;
    };
    return m;
  }
}
var Yl = function () {
  return [null, 0];
};
function Jl(e, r) {
  r === void 0 && (r = {});
  var t = r,
    n = t.getDisplayName,
    a =
      n === void 0
        ? function (w) {
            return "ConnectAdvanced(" + w + ")";
          }
        : n,
    o = t.methodName,
    i = o === void 0 ? "connectAdvanced" : o,
    l = t.renderCountProp,
    c = l === void 0 ? void 0 : l,
    u = t.shouldHandleStateChanges,
    f = u === void 0 ? !0 : u,
    d = t.storeKey,
    p = d === void 0 ? "store" : d;
  t.withRef;
  var m = t.forwardRef,
    g = m === void 0 ? !1 : m,
    b = t.context,
    h = b === void 0 ? uo : b,
    x = lt(t, jl),
    y = h;
  return function (E) {
    var I = E.displayName || E.name || "Component",
      C = a(I),
      N = P({}, x, {
        getDisplayName: a,
        methodName: i,
        renderCountProp: c,
        shouldHandleStateChanges: f,
        storeKey: p,
        displayName: C,
        wrappedComponentName: I,
        WrappedComponent: E,
      }),
      B = x.pure;
    function M(L) {
      return e(L.dispatch, N);
    }
    var k = B
      ? v.exports.useMemo
      : function (L) {
          return L();
        };
    function S(L) {
      var F = v.exports.useMemo(
          function () {
            var Ve = L.reactReduxForwardedRef,
              rr = lt(L, ql);
            return [L.context, Ve, rr];
          },
          [L]
        ),
        H = F[0],
        O = F[1],
        V = F[2],
        K = v.exports.useMemo(
          function () {
            return H &&
              H.Consumer &&
              go.exports.isContextConsumer(s.createElement(H.Consumer, null))
              ? H
              : y;
          },
          [H, y]
        ),
        Q = v.exports.useContext(K),
        ce =
          Boolean(L.store) &&
          Boolean(L.store.getState) &&
          Boolean(L.store.dispatch);
      Boolean(Q) && Boolean(Q.store);
      var te = ce ? L.store : Q.store,
        Pe = v.exports.useMemo(
          function () {
            return M(te);
          },
          [te]
        ),
        Re = v.exports.useMemo(
          function () {
            if (!f) return Hl;
            var Ve = fo(te, ce ? null : Q.subscription),
              rr = Ve.notifyNestedSubs.bind(Ve);
            return [Ve, rr];
          },
          [te, ce, Q]
        ),
        X = Re[0],
        W = Re[1],
        ee = v.exports.useMemo(
          function () {
            return ce ? Q : P({}, Q, { subscription: X });
          },
          [ce, Q, X]
        ),
        ue = v.exports.useReducer(Ul, Wl, Yl),
        _e = ue[0],
        Be = _e[0],
        er = ue[1];
      if (Be && Be.error) throw Be.error;
      var br = v.exports.useRef(),
        Fe = v.exports.useRef(V),
        $e = v.exports.useRef(),
        Ue = v.exports.useRef(!1),
        Ge = k(
          function () {
            return $e.current && V === Fe.current
              ? $e.current
              : Pe(te.getState(), V);
          },
          [te, Be, V]
        );
      ca(Vl, [Fe, br, Ue, V, Ge, $e, W]),
        ca(Kl, [f, te, X, Pe, Fe, br, Ue, $e, W, er], [te, X, Pe]);
      var hr = v.exports.useMemo(
          function () {
            return s.createElement(E, P({}, Ge, { ref: O }));
          },
          [O, E, Ge]
        ),
        Bt = v.exports.useMemo(
          function () {
            return f ? s.createElement(K.Provider, { value: ee }, hr) : hr;
          },
          [K, hr, ee]
        );
      return Bt;
    }
    var z = B ? s.memo(S) : S;
    if (((z.WrappedComponent = E), (z.displayName = S.displayName = C), g)) {
      var $ = s.forwardRef(function (F, H) {
        return s.createElement(z, P({}, F, { reactReduxForwardedRef: H }));
      });
      return ($.displayName = C), ($.WrappedComponent = E), ea($, E);
    }
    return ea(z, E);
  };
}
function ua(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function qt(e, r) {
  if (ua(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e),
    n = Object.keys(r);
  if (t.length !== n.length) return !1;
  for (var a = 0; a < t.length; a++)
    if (!Object.prototype.hasOwnProperty.call(r, t[a]) || !ua(e[t[a]], r[t[a]]))
      return !1;
  return !0;
}
function Xl(e, r) {
  var t = {},
    n = function (i) {
      var l = e[i];
      typeof l == "function" &&
        (t[i] = function () {
          return r(l.apply(void 0, arguments));
        });
    };
  for (var a in e) n(a);
  return t;
}
function Cn(e) {
  return function (t, n) {
    var a = e(t, n);
    function o() {
      return a;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function da(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0
    ? Boolean(e.dependsOnOwnProps)
    : e.length !== 1;
}
function Eo(e, r) {
  return function (n, a) {
    a.displayName;
    var o = function (l, c) {
      return o.dependsOnOwnProps ? o.mapToProps(l, c) : o.mapToProps(l);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (l, c) {
        (o.mapToProps = e), (o.dependsOnOwnProps = da(e));
        var u = o(l, c);
        return (
          typeof u == "function" &&
            ((o.mapToProps = u), (o.dependsOnOwnProps = da(u)), (u = o(l, c))),
          u
        );
      }),
      o
    );
  };
}
function Zl(e) {
  return typeof e == "function" ? Eo(e) : void 0;
}
function Ql(e) {
  return e
    ? void 0
    : Cn(function (r) {
        return { dispatch: r };
      });
}
function _l(e) {
  return e && typeof e == "object"
    ? Cn(function (r) {
        return Xl(e, r);
      })
    : void 0;
}
const es = [Zl, Ql, _l];
function rs(e) {
  return typeof e == "function" ? Eo(e) : void 0;
}
function ts(e) {
  return e
    ? void 0
    : Cn(function () {
        return {};
      });
}
const ns = [rs, ts];
function as(e, r, t) {
  return P({}, t, e, r);
}
function os(e) {
  return function (t, n) {
    n.displayName;
    var a = n.pure,
      o = n.areMergedPropsEqual,
      i = !1,
      l;
    return function (u, f, d) {
      var p = e(u, f, d);
      return i ? (!a || !o(p, l)) && (l = p) : ((i = !0), (l = p)), l;
    };
  };
}
function is(e) {
  return typeof e == "function" ? os(e) : void 0;
}
function ls(e) {
  return e
    ? void 0
    : function () {
        return as;
      };
}
const ss = [is, ls];
var cs = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function us(e, r, t, n) {
  return function (o, i) {
    return t(e(o, i), r(n, i), i);
  };
}
function ds(e, r, t, n, a) {
  var o = a.areStatesEqual,
    i = a.areOwnPropsEqual,
    l = a.areStatePropsEqual,
    c = !1,
    u,
    f,
    d,
    p,
    m;
  function g(w, E) {
    return (
      (u = w),
      (f = E),
      (d = e(u, f)),
      (p = r(n, f)),
      (m = t(d, p, f)),
      (c = !0),
      m
    );
  }
  function b() {
    return (
      (d = e(u, f)), r.dependsOnOwnProps && (p = r(n, f)), (m = t(d, p, f)), m
    );
  }
  function h() {
    return (
      e.dependsOnOwnProps && (d = e(u, f)),
      r.dependsOnOwnProps && (p = r(n, f)),
      (m = t(d, p, f)),
      m
    );
  }
  function x() {
    var w = e(u, f),
      E = !l(w, d);
    return (d = w), E && (m = t(d, p, f)), m;
  }
  function y(w, E) {
    var I = !i(E, f),
      C = !o(w, u, E, f);
    return (u = w), (f = E), I && C ? b() : I ? h() : C ? x() : m;
  }
  return function (E, I) {
    return c ? y(E, I) : g(E, I);
  };
}
function ps(e, r) {
  var t = r.initMapStateToProps,
    n = r.initMapDispatchToProps,
    a = r.initMergeProps,
    o = lt(r, cs),
    i = t(e, o),
    l = n(e, o),
    c = a(e, o),
    u = o.pure ? ds : us;
  return u(i, l, c, e, o);
}
var fs = [
  "pure",
  "areStatesEqual",
  "areOwnPropsEqual",
  "areStatePropsEqual",
  "areMergedPropsEqual",
];
function Wt(e, r, t) {
  for (var n = r.length - 1; n >= 0; n--) {
    var a = r[n](e);
    if (a) return a;
  }
  return function (o, i) {
    throw new Error(
      "Invalid value of type " +
        typeof e +
        " for " +
        t +
        " argument when connecting component " +
        i.wrappedComponentName +
        "."
    );
  };
}
function ms(e, r) {
  return e === r;
}
function gs(e) {
  var r = e === void 0 ? {} : e,
    t = r.connectHOC,
    n = t === void 0 ? Jl : t,
    a = r.mapStateToPropsFactories,
    o = a === void 0 ? ns : a,
    i = r.mapDispatchToPropsFactories,
    l = i === void 0 ? es : i,
    c = r.mergePropsFactories,
    u = c === void 0 ? ss : c,
    f = r.selectorFactory,
    d = f === void 0 ? ps : f;
  return function (m, g, b, h) {
    h === void 0 && (h = {});
    var x = h,
      y = x.pure,
      w = y === void 0 ? !0 : y,
      E = x.areStatesEqual,
      I = E === void 0 ? ms : E,
      C = x.areOwnPropsEqual,
      N = C === void 0 ? qt : C,
      B = x.areStatePropsEqual,
      M = B === void 0 ? qt : B,
      k = x.areMergedPropsEqual,
      S = k === void 0 ? qt : k,
      z = lt(x, fs),
      $ = Wt(m, o, "mapStateToProps"),
      L = Wt(g, l, "mapDispatchToProps"),
      F = Wt(b, u, "mergeProps");
    return n(
      d,
      P(
        {
          methodName: "connect",
          getDisplayName: function (O) {
            return "Connect(" + O + ")";
          },
          shouldHandleStateChanges: Boolean(m),
          initMapStateToProps: $,
          initMapDispatchToProps: L,
          initMergeProps: F,
          pure: w,
          areStatesEqual: I,
          areOwnPropsEqual: N,
          areStatePropsEqual: M,
          areMergedPropsEqual: S,
        },
        z
      )
    );
  };
}
const wo = gs();
Al(Gi.exports.unstable_batchedUpdates);
function vs(e, r) {
  if (e.length !== r.length) return !1;
  for (var t = 0; t < e.length; t++) if (e[t] !== r[t]) return !1;
  return !0;
}
function Do(e, r) {
  var t = v.exports.useState(function () {
      return { inputs: r, result: e() };
    })[0],
    n = v.exports.useRef(!0),
    a = v.exports.useRef(t),
    o = n.current || Boolean(r && a.current.inputs && vs(r, a.current.inputs)),
    i = o ? a.current : { inputs: r, result: e() };
  return (
    v.exports.useEffect(
      function () {
        (n.current = !1), (a.current = i);
      },
      [i]
    ),
    i.result
  );
}
function bs(e, r) {
  return Do(function () {
    return e;
  }, r);
}
var U = Do,
  R = bs,
  hs = !0,
  Ht = "Invariant failed";
function xs(e, r) {
  if (!e) {
    if (hs) throw new Error(Ht);
    var t = typeof r == "function" ? r() : r,
      n = t ? "".concat(Ht, ": ").concat(t) : Ht;
    throw new Error(n);
  }
}
var Ae = function (r) {
    var t = r.top,
      n = r.right,
      a = r.bottom,
      o = r.left,
      i = n - o,
      l = a - t,
      c = {
        top: t,
        right: n,
        bottom: a,
        left: o,
        width: i,
        height: l,
        x: o,
        y: t,
        center: { x: (n + o) / 2, y: (a + t) / 2 },
      };
    return c;
  },
  In = function (r, t) {
    return {
      top: r.top - t.top,
      left: r.left - t.left,
      bottom: r.bottom + t.bottom,
      right: r.right + t.right,
    };
  },
  pa = function (r, t) {
    return {
      top: r.top + t.top,
      left: r.left + t.left,
      bottom: r.bottom - t.bottom,
      right: r.right - t.right,
    };
  },
  ys = function (r, t) {
    return {
      top: r.top + t.y,
      left: r.left + t.x,
      bottom: r.bottom + t.y,
      right: r.right + t.x,
    };
  },
  Ut = { top: 0, right: 0, bottom: 0, left: 0 },
  Sn = function (r) {
    var t = r.borderBox,
      n = r.margin,
      a = n === void 0 ? Ut : n,
      o = r.border,
      i = o === void 0 ? Ut : o,
      l = r.padding,
      c = l === void 0 ? Ut : l,
      u = Ae(In(t, a)),
      f = Ae(pa(t, i)),
      d = Ae(pa(f, c));
    return {
      marginBox: u,
      borderBox: Ae(t),
      paddingBox: f,
      contentBox: d,
      margin: a,
      border: i,
      padding: c,
    };
  },
  xe = function (r) {
    var t = r.slice(0, -2),
      n = r.slice(-2);
    if (n !== "px") return 0;
    var a = Number(t);
    return isNaN(a) && xs(!1), a;
  },
  Es = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  st = function (r, t) {
    var n = r.borderBox,
      a = r.border,
      o = r.margin,
      i = r.padding,
      l = ys(n, t);
    return Sn({ borderBox: l, border: a, margin: o, padding: i });
  },
  ct = function (r, t) {
    return t === void 0 && (t = Es()), st(r, t);
  },
  Co = function (r, t) {
    var n = {
        top: xe(t.marginTop),
        right: xe(t.marginRight),
        bottom: xe(t.marginBottom),
        left: xe(t.marginLeft),
      },
      a = {
        top: xe(t.paddingTop),
        right: xe(t.paddingRight),
        bottom: xe(t.paddingBottom),
        left: xe(t.paddingLeft),
      },
      o = {
        top: xe(t.borderTopWidth),
        right: xe(t.borderRightWidth),
        bottom: xe(t.borderBottomWidth),
        left: xe(t.borderLeftWidth),
      };
    return Sn({ borderBox: r, margin: n, padding: a, border: o });
  },
  Io = function (r) {
    var t = r.getBoundingClientRect(),
      n = window.getComputedStyle(r);
    return Co(t, n);
  },
  ws = function (r) {
    var t = [],
      n = null,
      a = function () {
        for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++)
          l[c] = arguments[c];
        (t = l),
          !n &&
            (n = requestAnimationFrame(function () {
              (n = null), r.apply(void 0, t);
            }));
      };
    return (
      (a.cancel = function () {
        !n || (cancelAnimationFrame(n), (n = null));
      }),
      a
    );
  };
const Sr = ws;
function So(e, r) {}
So.bind(null, "warn");
So.bind(null, "error");
function ze() {}
function Ds(e, r) {
  return P({}, e, {}, r);
}
function we(e, r, t) {
  var n = r.map(function (a) {
    var o = Ds(t, a.options);
    return (
      e.addEventListener(a.eventName, a.fn, o),
      function () {
        e.removeEventListener(a.eventName, a.fn, o);
      }
    );
  });
  return function () {
    n.forEach(function (o) {
      o();
    });
  };
}
var Cs = "Invariant failed";
function ut(e) {
  this.message = e;
}
ut.prototype.toString = function () {
  return this.message;
};
function D(e, r) {
  if (!e) throw new ut(Cs);
}
var Is = (function (e) {
    _a(r, e);
    function r() {
      for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        (n.callbacks = null),
        (n.unbind = ze),
        (n.onWindowError = function (l) {
          var c = n.getCallbacks();
          c.isDragging() && c.tryAbort();
          var u = l.error;
          u instanceof ut && l.preventDefault();
        }),
        (n.getCallbacks = function () {
          if (!n.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return n.callbacks;
        }),
        (n.setCallbacks = function (l) {
          n.callbacks = l;
        }),
        n
      );
    }
    var t = r.prototype;
    return (
      (t.componentDidMount = function () {
        this.unbind = we(window, [
          { eventName: "error", fn: this.onWindowError },
        ]);
      }),
      (t.componentDidCatch = function (a) {
        if (a instanceof ut) {
          this.setState({});
          return;
        }
        throw a;
      }),
      (t.componentWillUnmount = function () {
        this.unbind();
      }),
      (t.render = function () {
        return this.props.children(this.setCallbacks);
      }),
      r
    );
  })(s.Component),
  Ss = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  dt = function (r) {
    return r + 1;
  },
  As = function (r) {
    return (
      `
  You have lifted an item in position ` +
      dt(r.source.index) +
      `
`
    );
  },
  Ao = function (r, t) {
    var n = r.droppableId === t.droppableId,
      a = dt(r.index),
      o = dt(t.index);
    return n
      ? `
      You have moved the item from position ` +
          a +
          `
      to position ` +
          o +
          `
    `
      : `
    You have moved the item from position ` +
          a +
          `
    in list ` +
          r.droppableId +
          `
    to list ` +
          t.droppableId +
          `
    in position ` +
          o +
          `
  `;
  },
  Oo = function (r, t, n) {
    var a = t.droppableId === n.droppableId;
    return a
      ? `
      The item ` +
          r +
          `
      has been combined with ` +
          n.draggableId
      : `
      The item ` +
          r +
          `
      in list ` +
          t.droppableId +
          `
      has been combined with ` +
          n.draggableId +
          `
      in list ` +
          n.droppableId +
          `
    `;
  },
  Os = function (r) {
    var t = r.destination;
    if (t) return Ao(r.source, t);
    var n = r.combine;
    return n
      ? Oo(r.draggableId, r.source, n)
      : "You are over an area that cannot be dropped on";
  },
  fa = function (r) {
    return (
      `
  The item has returned to its starting position
  of ` +
      dt(r.index) +
      `
`
    );
  },
  Ps = function (r) {
    if (r.reason === "CANCEL")
      return (
        `
      Movement cancelled.
      ` +
        fa(r.source) +
        `
    `
      );
    var t = r.destination,
      n = r.combine;
    return t
      ? `
      You have dropped the item.
      ` +
          Ao(r.source, t) +
          `
    `
      : n
      ? `
      You have dropped the item.
      ` +
        Oo(r.draggableId, r.source, n) +
        `
    `
      : `
    The item has been dropped while not over a drop area.
    ` +
        fa(r.source) +
        `
  `;
  },
  it = {
    dragHandleUsageInstructions: Ss,
    onDragStart: As,
    onDragUpdate: Os,
    onDragEnd: Ps,
  },
  oe = { x: 0, y: 0 },
  se = function (r, t) {
    return { x: r.x + t.x, y: r.y + t.y };
  },
  ge = function (r, t) {
    return { x: r.x - t.x, y: r.y - t.y };
  },
  je = function (r, t) {
    return r.x === t.x && r.y === t.y;
  },
  pr = function (r) {
    return { x: r.x !== 0 ? -r.x : 0, y: r.y !== 0 ? -r.y : 0 };
  },
  Xe = function (r, t, n) {
    var a;
    return (
      n === void 0 && (n = 0),
      (a = {}),
      (a[r] = t),
      (a[r === "x" ? "y" : "x"] = n),
      a
    );
  },
  Ar = function (r, t) {
    return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
  },
  ma = function (r, t) {
    return Math.min.apply(
      Math,
      t.map(function (n) {
        return Ar(r, n);
      })
    );
  },
  Po = function (r) {
    return function (t) {
      return { x: r(t.x), y: r(t.y) };
    };
  },
  Fs = function (e, r) {
    var t = Ae({
      top: Math.max(r.top, e.top),
      right: Math.min(r.right, e.right),
      bottom: Math.min(r.bottom, e.bottom),
      left: Math.max(r.left, e.left),
    });
    return t.width <= 0 || t.height <= 0 ? null : t;
  },
  Vr = function (r, t) {
    return {
      top: r.top + t.y,
      left: r.left + t.x,
      bottom: r.bottom + t.y,
      right: r.right + t.x,
    };
  },
  ga = function (r) {
    return [
      { x: r.left, y: r.top },
      { x: r.right, y: r.top },
      { x: r.left, y: r.bottom },
      { x: r.right, y: r.bottom },
    ];
  },
  Ns = { top: 0, right: 0, bottom: 0, left: 0 },
  Rs = function (r, t) {
    return t ? Vr(r, t.scroll.diff.displacement) : r;
  },
  Bs = function (r, t, n) {
    if (n && n.increasedBy) {
      var a;
      return P(
        {},
        r,
        ((a = {}), (a[t.end] = r[t.end] + n.increasedBy[t.line]), a)
      );
    }
    return r;
  },
  Ts = function (r, t) {
    return t && t.shouldClipSubject ? Fs(t.pageMarginBox, r) : Ae(r);
  },
  ir = function (e) {
    var r = e.page,
      t = e.withPlaceholder,
      n = e.axis,
      a = e.frame,
      o = Rs(r.marginBox, a),
      i = Bs(o, n, t),
      l = Ts(i, a);
    return { page: r, withPlaceholder: t, active: l };
  },
  An = function (e, r) {
    e.frame || D(!1);
    var t = e.frame,
      n = ge(r, t.scroll.initial),
      a = pr(n),
      o = P({}, t, {
        scroll: {
          initial: t.scroll.initial,
          current: r,
          diff: { value: n, displacement: a },
          max: t.scroll.max,
        },
      }),
      i = ir({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: o,
      }),
      l = P({}, e, { frame: o, subject: i });
    return l;
  };
function pt(e) {
  return Object.values
    ? Object.values(e)
    : Object.keys(e).map(function (r) {
        return e[r];
      });
}
function On(e, r) {
  if (e.findIndex) return e.findIndex(r);
  for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
  return -1;
}
function He(e, r) {
  if (e.find) return e.find(r);
  var t = On(e, r);
  if (t !== -1) return e[t];
}
function Fo(e) {
  return Array.prototype.slice.call(e);
}
var No = ae(function (e) {
    return e.reduce(function (r, t) {
      return (r[t.descriptor.id] = t), r;
    }, {});
  }),
  Ro = ae(function (e) {
    return e.reduce(function (r, t) {
      return (r[t.descriptor.id] = t), r;
    }, {});
  }),
  wt = ae(function (e) {
    return pt(e);
  }),
  ks = ae(function (e) {
    return pt(e);
  }),
  fr = ae(function (e, r) {
    var t = ks(r)
      .filter(function (n) {
        return e === n.descriptor.droppableId;
      })
      .sort(function (n, a) {
        return n.descriptor.index - a.descriptor.index;
      });
    return t;
  });
function Pn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Dt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Ct = ae(function (e, r) {
    return r.filter(function (t) {
      return t.descriptor.id !== e.descriptor.id;
    });
  }),
  Ms = function (e) {
    var r = e.isMovingForward,
      t = e.draggable,
      n = e.destination,
      a = e.insideDestination,
      o = e.previousImpact;
    if (!n.isCombineEnabled) return null;
    var i = Pn(o);
    if (!i) return null;
    function l(b) {
      var h = {
        type: "COMBINE",
        combine: { draggableId: b, droppableId: n.descriptor.id },
      };
      return P({}, o, { at: h });
    }
    var c = o.displaced.all,
      u = c.length ? c[0] : null;
    if (r) return u ? l(u) : null;
    var f = Ct(t, a);
    if (!u) {
      if (!f.length) return null;
      var d = f[f.length - 1];
      return l(d.descriptor.id);
    }
    var p = On(f, function (b) {
      return b.descriptor.id === u;
    });
    p === -1 && D(!1);
    var m = p - 1;
    if (m < 0) return null;
    var g = f[m];
    return l(g.descriptor.id);
  },
  mr = function (e, r) {
    return e.descriptor.droppableId === r.descriptor.id;
  },
  Bo = { point: oe, value: 0 },
  Or = { invisible: {}, visible: {}, all: [] },
  Ls = { displaced: Or, displacedBy: Bo, at: null },
  De = function (e, r) {
    return function (t) {
      return e <= t && t <= r;
    };
  },
  To = function (e) {
    var r = De(e.top, e.bottom),
      t = De(e.left, e.right);
    return function (n) {
      var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
      if (a) return !0;
      var o = r(n.top) || r(n.bottom),
        i = t(n.left) || t(n.right),
        l = o && i;
      if (l) return !0;
      var c = n.top < e.top && n.bottom > e.bottom,
        u = n.left < e.left && n.right > e.right,
        f = c && u;
      if (f) return !0;
      var d = (c && i) || (u && o);
      return d;
    };
  },
  $s = function (e) {
    var r = De(e.top, e.bottom),
      t = De(e.left, e.right);
    return function (n) {
      var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
      return a;
    };
  },
  Fn = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  ko = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  },
  Gs = function (e) {
    return function (r) {
      var t = De(r.top, r.bottom),
        n = De(r.left, r.right);
      return function (a) {
        return e === Fn ? t(a.top) && t(a.bottom) : n(a.left) && n(a.right);
      };
    };
  },
  zs = function (r, t) {
    var n = t.frame ? t.frame.scroll.diff.displacement : oe;
    return Vr(r, n);
  },
  js = function (r, t, n) {
    return t.subject.active ? n(t.subject.active)(r) : !1;
  },
  qs = function (r, t, n) {
    return n(t)(r);
  },
  Nn = function (r) {
    var t = r.target,
      n = r.destination,
      a = r.viewport,
      o = r.withDroppableDisplacement,
      i = r.isVisibleThroughFrameFn,
      l = o ? zs(t, n) : t;
    return js(l, n, i) && qs(l, a, i);
  },
  Ws = function (r) {
    return Nn(P({}, r, { isVisibleThroughFrameFn: To }));
  },
  Mo = function (r) {
    return Nn(P({}, r, { isVisibleThroughFrameFn: $s }));
  },
  Hs = function (r) {
    return Nn(P({}, r, { isVisibleThroughFrameFn: Gs(r.destination.axis) }));
  },
  Us = function (r, t, n) {
    if (typeof n == "boolean") return n;
    if (!t) return !0;
    var a = t.invisible,
      o = t.visible;
    if (a[r]) return !1;
    var i = o[r];
    return i ? i.shouldAnimate : !0;
  };
function Vs(e, r) {
  var t = e.page.marginBox,
    n = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
  return Ae(In(t, n));
}
function Pr(e) {
  var r = e.afterDragging,
    t = e.destination,
    n = e.displacedBy,
    a = e.viewport,
    o = e.forceShouldAnimate,
    i = e.last;
  return r.reduce(
    function (c, u) {
      var f = Vs(u, n),
        d = u.descriptor.id;
      c.all.push(d);
      var p = Ws({
        target: f,
        destination: t,
        viewport: a,
        withDroppableDisplacement: !0,
      });
      if (!p) return (c.invisible[u.descriptor.id] = !0), c;
      var m = Us(d, i, o),
        g = { draggableId: d, shouldAnimate: m };
      return (c.visible[d] = g), c;
    },
    { all: [], visible: {}, invisible: {} }
  );
}
function Ks(e, r) {
  if (!e.length) return 0;
  var t = e[e.length - 1].descriptor.index;
  return r.inHomeList ? t : t + 1;
}
function va(e) {
  var r = e.insideDestination,
    t = e.inHomeList,
    n = e.displacedBy,
    a = e.destination,
    o = Ks(r, { inHomeList: t });
  return {
    displaced: Or,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: { droppableId: a.descriptor.id, index: o },
    },
  };
}
function ft(e) {
  var r = e.draggable,
    t = e.insideDestination,
    n = e.destination,
    a = e.viewport,
    o = e.displacedBy,
    i = e.last,
    l = e.index,
    c = e.forceShouldAnimate,
    u = mr(r, n);
  if (l == null)
    return va({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n,
    });
  var f = He(t, function (b) {
    return b.descriptor.index === l;
  });
  if (!f)
    return va({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n,
    });
  var d = Ct(r, t),
    p = t.indexOf(f),
    m = d.slice(p),
    g = Pr({
      afterDragging: m,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: a.frame,
      forceShouldAnimate: c,
    });
  return {
    displaced: g,
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: { droppableId: n.descriptor.id, index: l },
    },
  };
}
function We(e, r) {
  return Boolean(r.effected[e]);
}
var Ys = function (e) {
    var r = e.isMovingForward,
      t = e.destination,
      n = e.draggables,
      a = e.combine,
      o = e.afterCritical;
    if (!t.isCombineEnabled) return null;
    var i = a.draggableId,
      l = n[i],
      c = l.descriptor.index,
      u = We(i, o);
    return u ? (r ? c : c - 1) : r ? c + 1 : c;
  },
  Js = function (e) {
    var r = e.isMovingForward,
      t = e.isInHomeList,
      n = e.insideDestination,
      a = e.location;
    if (!n.length) return null;
    var o = a.index,
      i = r ? o + 1 : o - 1,
      l = n[0].descriptor.index,
      c = n[n.length - 1].descriptor.index,
      u = t ? c : c + 1;
    return i < l || i > u ? null : i;
  },
  Xs = function (e) {
    var r = e.isMovingForward,
      t = e.isInHomeList,
      n = e.draggable,
      a = e.draggables,
      o = e.destination,
      i = e.insideDestination,
      l = e.previousImpact,
      c = e.viewport,
      u = e.afterCritical,
      f = l.at;
    if ((f || D(!1), f.type === "REORDER")) {
      var d = Js({
        isMovingForward: r,
        isInHomeList: t,
        location: f.destination,
        insideDestination: i,
      });
      return d == null
        ? null
        : ft({
            draggable: n,
            insideDestination: i,
            destination: o,
            viewport: c,
            last: l.displaced,
            displacedBy: l.displacedBy,
            index: d,
          });
    }
    var p = Ys({
      isMovingForward: r,
      destination: o,
      displaced: l.displaced,
      draggables: a,
      combine: f.combine,
      afterCritical: u,
    });
    return p == null
      ? null
      : ft({
          draggable: n,
          insideDestination: i,
          destination: o,
          viewport: c,
          last: l.displaced,
          displacedBy: l.displacedBy,
          index: p,
        });
  },
  Zs = function (e) {
    var r = e.displaced,
      t = e.afterCritical,
      n = e.combineWith,
      a = e.displacedBy,
      o = Boolean(r.visible[n] || r.invisible[n]);
    return We(n, t) ? (o ? oe : pr(a.point)) : o ? a.point : oe;
  },
  Qs = function (e) {
    var r = e.afterCritical,
      t = e.impact,
      n = e.draggables,
      a = Dt(t);
    a || D(!1);
    var o = a.draggableId,
      i = n[o].page.borderBox.center,
      l = Zs({
        displaced: t.displaced,
        afterCritical: r,
        combineWith: o,
        displacedBy: t.displacedBy,
      });
    return se(i, l);
  },
  Lo = function (r, t) {
    return t.margin[r.start] + t.borderBox[r.size] / 2;
  },
  _s = function (r, t) {
    return t.margin[r.end] + t.borderBox[r.size] / 2;
  },
  Rn = function (r, t, n) {
    return (
      t[r.crossAxisStart] +
      n.margin[r.crossAxisStart] +
      n.borderBox[r.crossAxisSize] / 2
    );
  },
  ba = function (r) {
    var t = r.axis,
      n = r.moveRelativeTo,
      a = r.isMoving;
    return Xe(t.line, n.marginBox[t.end] + Lo(t, a), Rn(t, n.marginBox, a));
  },
  ha = function (r) {
    var t = r.axis,
      n = r.moveRelativeTo,
      a = r.isMoving;
    return Xe(t.line, n.marginBox[t.start] - _s(t, a), Rn(t, n.marginBox, a));
  },
  ec = function (r) {
    var t = r.axis,
      n = r.moveInto,
      a = r.isMoving;
    return Xe(t.line, n.contentBox[t.start] + Lo(t, a), Rn(t, n.contentBox, a));
  },
  rc = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.draggables,
      a = e.droppable,
      o = e.afterCritical,
      i = fr(a.descriptor.id, n),
      l = t.page,
      c = a.axis;
    if (!i.length) return ec({ axis: c, moveInto: a.page, isMoving: l });
    var u = r.displaced,
      f = r.displacedBy,
      d = u.all[0];
    if (d) {
      var p = n[d];
      if (We(d, o)) return ha({ axis: c, moveRelativeTo: p.page, isMoving: l });
      var m = st(p.page, f.point);
      return ha({ axis: c, moveRelativeTo: m, isMoving: l });
    }
    var g = i[i.length - 1];
    if (g.descriptor.id === t.descriptor.id) return l.borderBox.center;
    if (We(g.descriptor.id, o)) {
      var b = st(g.page, pr(o.displacedBy.point));
      return ba({ axis: c, moveRelativeTo: b, isMoving: l });
    }
    return ba({ axis: c, moveRelativeTo: g.page, isMoving: l });
  },
  an = function (e, r) {
    var t = e.frame;
    return t ? se(r, t.scroll.diff.displacement) : r;
  },
  tc = function (r) {
    var t = r.impact,
      n = r.draggable,
      a = r.droppable,
      o = r.draggables,
      i = r.afterCritical,
      l = n.page.borderBox.center,
      c = t.at;
    return !a || !c
      ? l
      : c.type === "REORDER"
      ? rc({
          impact: t,
          draggable: n,
          draggables: o,
          droppable: a,
          afterCritical: i,
        })
      : Qs({ impact: t, draggables: o, afterCritical: i });
  },
  It = function (e) {
    var r = tc(e),
      t = e.droppable,
      n = t ? an(t, r) : r;
    return n;
  },
  $o = function (e, r) {
    var t = ge(r, e.scroll.initial),
      n = pr(t),
      a = Ae({
        top: r.y,
        bottom: r.y + e.frame.height,
        left: r.x,
        right: r.x + e.frame.width,
      }),
      o = {
        frame: a,
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: r,
          diff: { value: t, displacement: n },
        },
      };
    return o;
  };
function xa(e, r) {
  return e.map(function (t) {
    return r[t];
  });
}
function nc(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t].visible[e];
    if (n) return n;
  }
  return null;
}
var ac = function (e) {
    var r = e.impact,
      t = e.viewport,
      n = e.destination,
      a = e.draggables,
      o = e.maxScrollChange,
      i = $o(t, se(t.scroll.current, o)),
      l = n.frame ? An(n, se(n.frame.scroll.current, o)) : n,
      c = r.displaced,
      u = Pr({
        afterDragging: xa(c.all, a),
        destination: n,
        displacedBy: r.displacedBy,
        viewport: i.frame,
        last: c,
        forceShouldAnimate: !1,
      }),
      f = Pr({
        afterDragging: xa(c.all, a),
        destination: l,
        displacedBy: r.displacedBy,
        viewport: t.frame,
        last: c,
        forceShouldAnimate: !1,
      }),
      d = {},
      p = {},
      m = [c, u, f];
    c.all.forEach(function (b) {
      var h = nc(b, m);
      if (h) {
        p[b] = h;
        return;
      }
      d[b] = !0;
    });
    var g = P({}, r, { displaced: { all: c.all, invisible: d, visible: p } });
    return g;
  },
  oc = function (e, r) {
    return se(e.scroll.diff.displacement, r);
  },
  Bn = function (e) {
    var r = e.pageBorderBoxCenter,
      t = e.draggable,
      n = e.viewport,
      a = oc(n, r),
      o = ge(a, t.page.borderBox.center);
    return se(t.client.borderBox.center, o);
  },
  Go = function (e) {
    var r = e.draggable,
      t = e.destination,
      n = e.newPageBorderBoxCenter,
      a = e.viewport,
      o = e.withDroppableDisplacement,
      i = e.onlyOnMainAxis,
      l = i === void 0 ? !1 : i,
      c = ge(n, r.page.borderBox.center),
      u = Vr(r.page.borderBox, c),
      f = {
        target: u,
        destination: t,
        withDroppableDisplacement: o,
        viewport: a,
      };
    return l ? Hs(f) : Mo(f);
  },
  ic = function (e) {
    var r = e.isMovingForward,
      t = e.draggable,
      n = e.destination,
      a = e.draggables,
      o = e.previousImpact,
      i = e.viewport,
      l = e.previousPageBorderBoxCenter,
      c = e.previousClientSelection,
      u = e.afterCritical;
    if (!n.isEnabled) return null;
    var f = fr(n.descriptor.id, a),
      d = mr(t, n),
      p =
        Ms({
          isMovingForward: r,
          draggable: t,
          destination: n,
          insideDestination: f,
          previousImpact: o,
        }) ||
        Xs({
          isMovingForward: r,
          isInHomeList: d,
          draggable: t,
          draggables: a,
          destination: n,
          insideDestination: f,
          previousImpact: o,
          viewport: i,
          afterCritical: u,
        });
    if (!p) return null;
    var m = It({
        impact: p,
        draggable: t,
        droppable: n,
        draggables: a,
        afterCritical: u,
      }),
      g = Go({
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: m,
        viewport: i.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      });
    if (g) {
      var b = Bn({ pageBorderBoxCenter: m, draggable: t, viewport: i });
      return { clientSelection: b, impact: p, scrollJumpRequest: null };
    }
    var h = ge(m, l),
      x = ac({
        impact: p,
        viewport: i,
        destination: n,
        draggables: a,
        maxScrollChange: h,
      });
    return { clientSelection: c, impact: x, scrollJumpRequest: h };
  },
  de = function (r) {
    var t = r.subject.active;
    return t || D(!1), t;
  },
  lc = function (e) {
    var r = e.isMovingForward,
      t = e.pageBorderBoxCenter,
      n = e.source,
      a = e.droppables,
      o = e.viewport,
      i = n.subject.active;
    if (!i) return null;
    var l = n.axis,
      c = De(i[l.start], i[l.end]),
      u = wt(a)
        .filter(function (d) {
          return d !== n;
        })
        .filter(function (d) {
          return d.isEnabled;
        })
        .filter(function (d) {
          return Boolean(d.subject.active);
        })
        .filter(function (d) {
          return To(o.frame)(de(d));
        })
        .filter(function (d) {
          var p = de(d);
          return r
            ? i[l.crossAxisEnd] < p[l.crossAxisEnd]
            : p[l.crossAxisStart] < i[l.crossAxisStart];
        })
        .filter(function (d) {
          var p = de(d),
            m = De(p[l.start], p[l.end]);
          return c(p[l.start]) || c(p[l.end]) || m(i[l.start]) || m(i[l.end]);
        })
        .sort(function (d, p) {
          var m = de(d)[l.crossAxisStart],
            g = de(p)[l.crossAxisStart];
          return r ? m - g : g - m;
        })
        .filter(function (d, p, m) {
          return de(d)[l.crossAxisStart] === de(m[0])[l.crossAxisStart];
        });
    if (!u.length) return null;
    if (u.length === 1) return u[0];
    var f = u.filter(function (d) {
      var p = De(de(d)[l.start], de(d)[l.end]);
      return p(t[l.line]);
    });
    return f.length === 1
      ? f[0]
      : f.length > 1
      ? f.sort(function (d, p) {
          return de(d)[l.start] - de(p)[l.start];
        })[0]
      : u.sort(function (d, p) {
          var m = ma(t, ga(de(d))),
            g = ma(t, ga(de(p)));
          return m !== g ? m - g : de(d)[l.start] - de(p)[l.start];
        })[0];
  },
  ya = function (r, t) {
    var n = r.page.borderBox.center;
    return We(r.descriptor.id, t) ? ge(n, t.displacedBy.point) : n;
  },
  sc = function (r, t) {
    var n = r.page.borderBox;
    return We(r.descriptor.id, t) ? Vr(n, pr(t.displacedBy.point)) : n;
  },
  cc = function (e) {
    var r = e.pageBorderBoxCenter,
      t = e.viewport,
      n = e.destination,
      a = e.insideDestination,
      o = e.afterCritical,
      i = a
        .filter(function (l) {
          return Mo({
            target: sc(l, o),
            destination: n,
            viewport: t.frame,
            withDroppableDisplacement: !0,
          });
        })
        .sort(function (l, c) {
          var u = Ar(r, an(n, ya(l, o))),
            f = Ar(r, an(n, ya(c, o)));
          return u < f
            ? -1
            : f < u
            ? 1
            : l.descriptor.index - c.descriptor.index;
        });
    return i[0] || null;
  },
  Kr = ae(function (r, t) {
    var n = t[r.line];
    return { value: n, point: Xe(r.line, n) };
  }),
  uc = function (r, t, n) {
    var a = r.axis;
    if (r.descriptor.mode === "virtual") return Xe(a.line, t[a.line]);
    var o = r.subject.page.contentBox[a.size],
      i = fr(r.descriptor.id, n),
      l = i.reduce(function (f, d) {
        return f + d.client.marginBox[a.size];
      }, 0),
      c = l + t[a.line],
      u = c - o;
    return u <= 0 ? null : Xe(a.line, u);
  },
  zo = function (r, t) {
    return P({}, r, { scroll: P({}, r.scroll, { max: t }) });
  },
  jo = function (r, t, n) {
    var a = r.frame;
    mr(t, r) && D(!1), r.subject.withPlaceholder && D(!1);
    var o = Kr(r.axis, t.displaceBy).point,
      i = uc(r, o, n),
      l = {
        placeholderSize: o,
        increasedBy: i,
        oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null,
      };
    if (!a) {
      var c = ir({
        page: r.subject.page,
        withPlaceholder: l,
        axis: r.axis,
        frame: r.frame,
      });
      return P({}, r, { subject: c });
    }
    var u = i ? se(a.scroll.max, i) : a.scroll.max,
      f = zo(a, u),
      d = ir({
        page: r.subject.page,
        withPlaceholder: l,
        axis: r.axis,
        frame: f,
      });
    return P({}, r, { subject: d, frame: f });
  },
  dc = function (r) {
    var t = r.subject.withPlaceholder;
    t || D(!1);
    var n = r.frame;
    if (!n) {
      var a = ir({
        page: r.subject.page,
        axis: r.axis,
        frame: null,
        withPlaceholder: null,
      });
      return P({}, r, { subject: a });
    }
    var o = t.oldFrameMaxScroll;
    o || D(!1);
    var i = zo(n, o),
      l = ir({
        page: r.subject.page,
        axis: r.axis,
        frame: i,
        withPlaceholder: null,
      });
    return P({}, r, { subject: l, frame: i });
  },
  pc = function (e) {
    var r = e.previousPageBorderBoxCenter,
      t = e.moveRelativeTo,
      n = e.insideDestination,
      a = e.draggable,
      o = e.draggables,
      i = e.destination,
      l = e.viewport,
      c = e.afterCritical;
    if (!t) {
      if (n.length) return null;
      var u = {
          displaced: Or,
          displacedBy: Bo,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: 0 },
          },
        },
        f = It({
          impact: u,
          draggable: a,
          droppable: i,
          draggables: o,
          afterCritical: c,
        }),
        d = mr(a, i) ? i : jo(i, a, o),
        p = Go({
          draggable: a,
          destination: d,
          newPageBorderBoxCenter: f,
          viewport: l.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        });
      return p ? u : null;
    }
    var m = Boolean(r[i.axis.line] <= t.page.borderBox.center[i.axis.line]),
      g = (function () {
        var h = t.descriptor.index;
        return t.descriptor.id === a.descriptor.id || m ? h : h + 1;
      })(),
      b = Kr(i.axis, a.displaceBy);
    return ft({
      draggable: a,
      insideDestination: n,
      destination: i,
      viewport: l,
      displacedBy: b,
      last: Or,
      index: g,
    });
  },
  fc = function (e) {
    var r = e.isMovingForward,
      t = e.previousPageBorderBoxCenter,
      n = e.draggable,
      a = e.isOver,
      o = e.draggables,
      i = e.droppables,
      l = e.viewport,
      c = e.afterCritical,
      u = lc({
        isMovingForward: r,
        pageBorderBoxCenter: t,
        source: a,
        droppables: i,
        viewport: l,
      });
    if (!u) return null;
    var f = fr(u.descriptor.id, o),
      d = cc({
        pageBorderBoxCenter: t,
        viewport: l,
        destination: u,
        insideDestination: f,
        afterCritical: c,
      }),
      p = pc({
        previousPageBorderBoxCenter: t,
        destination: u,
        draggable: n,
        draggables: o,
        moveRelativeTo: d,
        insideDestination: f,
        viewport: l,
        afterCritical: c,
      });
    if (!p) return null;
    var m = It({
        impact: p,
        draggable: n,
        droppable: u,
        draggables: o,
        afterCritical: c,
      }),
      g = Bn({ pageBorderBoxCenter: m, draggable: n, viewport: l });
    return { clientSelection: g, impact: p, scrollJumpRequest: null };
  },
  ve = function (e) {
    var r = e.at;
    return r
      ? r.type === "REORDER"
        ? r.destination.droppableId
        : r.combine.droppableId
      : null;
  },
  mc = function (r, t) {
    var n = ve(r);
    return n ? t[n] : null;
  },
  gc = function (e) {
    var r = e.state,
      t = e.type,
      n = mc(r.impact, r.dimensions.droppables),
      a = Boolean(n),
      o = r.dimensions.droppables[r.critical.droppable.id],
      i = n || o,
      l = i.axis.direction,
      c =
        (l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
        (l === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
    if (c && !a) return null;
    var u = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
      f = r.dimensions.draggables[r.critical.draggable.id],
      d = r.current.page.borderBoxCenter,
      p = r.dimensions,
      m = p.draggables,
      g = p.droppables;
    return c
      ? ic({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: f,
          destination: i,
          draggables: m,
          viewport: r.viewport,
          previousClientSelection: r.current.client.selection,
          previousImpact: r.impact,
          afterCritical: r.afterCritical,
        })
      : fc({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: f,
          isOver: i,
          draggables: m,
          droppables: g,
          viewport: r.viewport,
          afterCritical: r.afterCritical,
        });
  };
function Ye(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function qo(e) {
  var r = De(e.top, e.bottom),
    t = De(e.left, e.right);
  return function (a) {
    return r(a.y) && t(a.x);
  };
}
function vc(e, r) {
  return (
    e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top
  );
}
function bc(e) {
  var r = e.pageBorderBox,
    t = e.draggable,
    n = e.candidates,
    a = t.page.borderBox.center,
    o = n
      .map(function (i) {
        var l = i.axis,
          c = Xe(
            i.axis.line,
            r.center[l.line],
            i.page.borderBox.center[l.crossAxisLine]
          );
        return { id: i.descriptor.id, distance: Ar(a, c) };
      })
      .sort(function (i, l) {
        return l.distance - i.distance;
      });
  return o[0] ? o[0].id : null;
}
function hc(e) {
  var r = e.pageBorderBox,
    t = e.draggable,
    n = e.droppables,
    a = wt(n).filter(function (o) {
      if (!o.isEnabled) return !1;
      var i = o.subject.active;
      if (!i || !vc(r, i)) return !1;
      if (qo(i)(r.center)) return !0;
      var l = o.axis,
        c = i.center[l.crossAxisLine],
        u = r[l.crossAxisStart],
        f = r[l.crossAxisEnd],
        d = De(i[l.crossAxisStart], i[l.crossAxisEnd]),
        p = d(u),
        m = d(f);
      return !p && !m ? !0 : p ? u < c : f > c;
    });
  return a.length
    ? a.length === 1
      ? a[0].descriptor.id
      : bc({ pageBorderBox: r, draggable: t, candidates: a })
    : null;
}
var Wo = function (r, t) {
    return Ae(Vr(r, t));
  },
  xc = function (e, r) {
    var t = e.frame;
    return t ? Wo(r, t.scroll.diff.value) : r;
  };
function Ho(e) {
  var r = e.displaced,
    t = e.id;
  return Boolean(r.visible[t] || r.invisible[t]);
}
function yc(e) {
  var r = e.draggable,
    t = e.closest,
    n = e.inHomeList;
  return t
    ? n && t.descriptor.index > r.descriptor.index
      ? t.descriptor.index - 1
      : t.descriptor.index
    : null;
}
var Ec = function (e) {
    var r = e.pageBorderBoxWithDroppableScroll,
      t = e.draggable,
      n = e.destination,
      a = e.insideDestination,
      o = e.last,
      i = e.viewport,
      l = e.afterCritical,
      c = n.axis,
      u = Kr(n.axis, t.displaceBy),
      f = u.value,
      d = r[c.start],
      p = r[c.end],
      m = Ct(t, a),
      g = He(m, function (h) {
        var x = h.descriptor.id,
          y = h.page.borderBox.center[c.line],
          w = We(x, l),
          E = Ho({ displaced: o, id: x });
        return w ? (E ? p <= y : d < y - f) : E ? p <= y + f : d < y;
      }),
      b = yc({ draggable: t, closest: g, inHomeList: mr(t, n) });
    return ft({
      draggable: t,
      insideDestination: a,
      destination: n,
      viewport: i,
      last: o,
      displacedBy: u,
      index: b,
    });
  },
  wc = 4,
  Dc = function (e) {
    var r = e.draggable,
      t = e.pageBorderBoxWithDroppableScroll,
      n = e.previousImpact,
      a = e.destination,
      o = e.insideDestination,
      i = e.afterCritical;
    if (!a.isCombineEnabled) return null;
    var l = a.axis,
      c = Kr(a.axis, r.displaceBy),
      u = c.value,
      f = t[l.start],
      d = t[l.end],
      p = Ct(r, o),
      m = He(p, function (b) {
        var h = b.descriptor.id,
          x = b.page.borderBox,
          y = x[l.size],
          w = y / wc,
          E = We(h, i),
          I = Ho({ displaced: n.displaced, id: h });
        return E
          ? I
            ? d > x[l.start] + w && d < x[l.end] - w
            : f > x[l.start] - u + w && f < x[l.end] - u - w
          : I
          ? d > x[l.start] + u + w && d < x[l.end] + u - w
          : f > x[l.start] + w && f < x[l.end] - w;
      });
    if (!m) return null;
    var g = {
      displacedBy: c,
      displaced: n.displaced,
      at: {
        type: "COMBINE",
        combine: { draggableId: m.descriptor.id, droppableId: a.descriptor.id },
      },
    };
    return g;
  },
  Uo = function (e) {
    var r = e.pageOffset,
      t = e.draggable,
      n = e.draggables,
      a = e.droppables,
      o = e.previousImpact,
      i = e.viewport,
      l = e.afterCritical,
      c = Wo(t.page.borderBox, r),
      u = hc({ pageBorderBox: c, draggable: t, droppables: a });
    if (!u) return Ls;
    var f = a[u],
      d = fr(f.descriptor.id, n),
      p = xc(f, c);
    return (
      Dc({
        pageBorderBoxWithDroppableScroll: p,
        draggable: t,
        previousImpact: o,
        destination: f,
        insideDestination: d,
        afterCritical: l,
      }) ||
      Ec({
        pageBorderBoxWithDroppableScroll: p,
        draggable: t,
        destination: f,
        insideDestination: d,
        last: o.displaced,
        viewport: i,
        afterCritical: l,
      })
    );
  },
  Tn = function (e, r) {
    var t;
    return P({}, e, ((t = {}), (t[r.descriptor.id] = r), t));
  },
  Cc = function (r) {
    var t = r.previousImpact,
      n = r.impact,
      a = r.droppables,
      o = ve(t),
      i = ve(n);
    if (!o || o === i) return a;
    var l = a[o];
    if (!l.subject.withPlaceholder) return a;
    var c = dc(l);
    return Tn(a, c);
  },
  Ic = function (e) {
    var r = e.draggable,
      t = e.draggables,
      n = e.droppables,
      a = e.previousImpact,
      o = e.impact,
      i = Cc({ previousImpact: a, impact: o, droppables: n }),
      l = ve(o);
    if (!l) return i;
    var c = n[l];
    if (mr(r, c) || c.subject.withPlaceholder) return i;
    var u = jo(c, r, t);
    return Tn(i, u);
  },
  Cr = function (e) {
    var r = e.state,
      t = e.clientSelection,
      n = e.dimensions,
      a = e.viewport,
      o = e.impact,
      i = e.scrollJumpRequest,
      l = a || r.viewport,
      c = n || r.dimensions,
      u = t || r.current.client.selection,
      f = ge(u, r.initial.client.selection),
      d = {
        offset: f,
        selection: u,
        borderBoxCenter: se(r.initial.client.borderBoxCenter, f),
      },
      p = {
        selection: se(d.selection, l.scroll.current),
        borderBoxCenter: se(d.borderBoxCenter, l.scroll.current),
        offset: se(d.offset, l.scroll.diff.value),
      },
      m = { client: d, page: p };
    if (r.phase === "COLLECTING")
      return P({ phase: "COLLECTING" }, r, {
        dimensions: c,
        viewport: l,
        current: m,
      });
    var g = c.draggables[r.critical.draggable.id],
      b =
        o ||
        Uo({
          pageOffset: p.offset,
          draggable: g,
          draggables: c.draggables,
          droppables: c.droppables,
          previousImpact: r.impact,
          viewport: l,
          afterCritical: r.afterCritical,
        }),
      h = Ic({
        draggable: g,
        impact: b,
        previousImpact: r.impact,
        draggables: c.draggables,
        droppables: c.droppables,
      }),
      x = P({}, r, {
        current: m,
        dimensions: { draggables: c.draggables, droppables: h },
        impact: b,
        viewport: l,
        scrollJumpRequest: i || null,
        forceShouldAnimate: i ? !1 : null,
      });
    return x;
  };
function Sc(e, r) {
  return e.map(function (t) {
    return r[t];
  });
}
var Vo = function (e) {
    var r = e.impact,
      t = e.viewport,
      n = e.draggables,
      a = e.destination,
      o = e.forceShouldAnimate,
      i = r.displaced,
      l = Sc(i.all, n),
      c = Pr({
        afterDragging: l,
        destination: a,
        displacedBy: r.displacedBy,
        viewport: t.frame,
        forceShouldAnimate: o,
        last: i,
      });
    return P({}, r, { displaced: c });
  },
  Ko = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.droppable,
      a = e.draggables,
      o = e.viewport,
      i = e.afterCritical,
      l = It({
        impact: r,
        draggable: t,
        draggables: a,
        droppable: n,
        afterCritical: i,
      });
    return Bn({ pageBorderBoxCenter: l, draggable: t, viewport: o });
  },
  Yo = function (e) {
    var r = e.state,
      t = e.dimensions,
      n = e.viewport;
    r.movementMode !== "SNAP" && D(!1);
    var a = r.impact,
      o = n || r.viewport,
      i = t || r.dimensions,
      l = i.draggables,
      c = i.droppables,
      u = l[r.critical.draggable.id],
      f = ve(a);
    f || D(!1);
    var d = c[f],
      p = Vo({ impact: a, viewport: o, destination: d, draggables: l }),
      m = Ko({
        impact: p,
        draggable: u,
        droppable: d,
        draggables: l,
        viewport: o,
        afterCritical: r.afterCritical,
      });
    return Cr({
      impact: p,
      clientSelection: m,
      state: r,
      dimensions: i,
      viewport: o,
    });
  },
  Ac = function (e) {
    return { index: e.index, droppableId: e.droppableId };
  },
  Jo = function (e) {
    var r = e.draggable,
      t = e.home,
      n = e.draggables,
      a = e.viewport,
      o = Kr(t.axis, r.displaceBy),
      i = fr(t.descriptor.id, n),
      l = i.indexOf(r);
    l === -1 && D(!1);
    var c = i.slice(l + 1),
      u = c.reduce(function (m, g) {
        return (m[g.descriptor.id] = !0), m;
      }, {}),
      f = {
        inVirtualList: t.descriptor.mode === "virtual",
        displacedBy: o,
        effected: u,
      },
      d = Pr({
        afterDragging: c,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: a.frame,
        forceShouldAnimate: !1,
      }),
      p = {
        displaced: d,
        displacedBy: o,
        at: { type: "REORDER", destination: Ac(r.descriptor) },
      };
    return { impact: p, afterCritical: f };
  },
  Oc = function (e, r) {
    return { draggables: e.draggables, droppables: Tn(e.droppables, r) };
  },
  Pc = function (e) {
    var r = e.draggable,
      t = e.offset,
      n = e.initialWindowScroll,
      a = st(r.client, t),
      o = ct(a, n),
      i = P({}, r, {
        placeholder: P({}, r.placeholder, { client: a }),
        client: a,
        page: o,
      });
    return i;
  },
  Fc = function (e) {
    var r = e.frame;
    return r || D(!1), r;
  },
  Nc = function (e) {
    var r = e.additions,
      t = e.updatedDroppables,
      n = e.viewport,
      a = n.scroll.diff.value;
    return r.map(function (o) {
      var i = o.descriptor.droppableId,
        l = t[i],
        c = Fc(l),
        u = c.scroll.diff.value,
        f = se(a, u),
        d = Pc({
          draggable: o,
          offset: f,
          initialWindowScroll: n.scroll.initial,
        });
      return d;
    });
  },
  Rc = function (e) {
    var r = e.state,
      t = e.published,
      n = t.modified.map(function (w) {
        var E = r.dimensions.droppables[w.droppableId],
          I = An(E, w.scroll);
        return I;
      }),
      a = P({}, r.dimensions.droppables, {}, No(n)),
      o = Ro(
        Nc({
          additions: t.additions,
          updatedDroppables: a,
          viewport: r.viewport,
        })
      ),
      i = P({}, r.dimensions.draggables, {}, o);
    t.removals.forEach(function (w) {
      delete i[w];
    });
    var l = { droppables: a, draggables: i },
      c = ve(r.impact),
      u = c ? l.droppables[c] : null,
      f = l.draggables[r.critical.draggable.id],
      d = l.droppables[r.critical.droppable.id],
      p = Jo({ draggable: f, home: d, draggables: i, viewport: r.viewport }),
      m = p.impact,
      g = p.afterCritical,
      b = u && u.isCombineEnabled ? r.impact : m,
      h = Uo({
        pageOffset: r.current.page.offset,
        draggable: l.draggables[r.critical.draggable.id],
        draggables: l.draggables,
        droppables: l.droppables,
        previousImpact: b,
        viewport: r.viewport,
        afterCritical: g,
      }),
      x = P({ phase: "DRAGGING" }, r, {
        phase: "DRAGGING",
        impact: h,
        onLiftImpact: m,
        dimensions: l,
        afterCritical: g,
        forceShouldAnimate: !1,
      });
    if (r.phase === "COLLECTING") return x;
    var y = P({ phase: "DROP_PENDING" }, x, {
      phase: "DROP_PENDING",
      reason: r.reason,
      isWaiting: !1,
    });
    return y;
  },
  on = function (r) {
    return r.movementMode === "SNAP";
  },
  Vt = function (r, t, n) {
    var a = Oc(r.dimensions, t);
    return !on(r) || n
      ? Cr({ state: r, dimensions: a })
      : Yo({ state: r, dimensions: a });
  };
function Kt(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? P({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
    : e;
}
var Ea = { phase: "IDLE", completed: null, shouldFlush: !1 },
  Bc = function (e, r) {
    if ((e === void 0 && (e = Ea), r.type === "FLUSH"))
      return P({}, Ea, { shouldFlush: !0 });
    if (r.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && D(!1);
      var t = r.payload,
        n = t.critical,
        a = t.clientSelection,
        o = t.viewport,
        i = t.dimensions,
        l = t.movementMode,
        c = i.draggables[n.draggable.id],
        u = i.droppables[n.droppable.id],
        f = {
          selection: a,
          borderBoxCenter: c.client.borderBox.center,
          offset: oe,
        },
        d = {
          client: f,
          page: {
            selection: se(f.selection, o.scroll.initial),
            borderBoxCenter: se(f.selection, o.scroll.initial),
            offset: se(f.selection, o.scroll.diff.value),
          },
        },
        p = wt(i.droppables).every(function (er) {
          return !er.isFixedOnPage;
        }),
        m = Jo({
          draggable: c,
          home: u,
          draggables: i.draggables,
          viewport: o,
        }),
        g = m.impact,
        b = m.afterCritical,
        h = {
          phase: "DRAGGING",
          isDragging: !0,
          critical: n,
          movementMode: l,
          dimensions: i,
          initial: d,
          current: d,
          isWindowScrollAllowed: p,
          impact: g,
          afterCritical: b,
          onLiftImpact: g,
          viewport: o,
          scrollJumpRequest: null,
          forceShouldAnimate: null,
        };
      return h;
    }
    if (r.type === "COLLECTION_STARTING") {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && D(!1);
      var x = P({ phase: "COLLECTING" }, e, { phase: "COLLECTING" });
      return x;
    }
    if (r.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || D(!1),
        Rc({ state: e, published: r.payload })
      );
    if (r.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Ye(e) || D(!1);
      var y = r.payload.client;
      return je(y, e.current.client.selection)
        ? e
        : Cr({ state: e, clientSelection: y, impact: on(e) ? e.impact : null });
    }
    if (r.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return Kt(e);
      Ye(e) || D(!1);
      var w = r.payload,
        E = w.id,
        I = w.newScroll,
        C = e.dimensions.droppables[E];
      if (!C) return e;
      var N = An(C, I);
      return Vt(e, N, !1);
    }
    if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Ye(e) || D(!1);
      var B = r.payload,
        M = B.id,
        k = B.isEnabled,
        S = e.dimensions.droppables[M];
      S || D(!1), S.isEnabled === k && D(!1);
      var z = P({}, S, { isEnabled: k });
      return Vt(e, z, !0);
    }
    if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Ye(e) || D(!1);
      var $ = r.payload,
        L = $.id,
        F = $.isCombineEnabled,
        H = e.dimensions.droppables[L];
      H || D(!1), H.isCombineEnabled === F && D(!1);
      var O = P({}, H, { isCombineEnabled: F });
      return Vt(e, O, !0);
    }
    if (r.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Ye(e) || D(!1), e.isWindowScrollAllowed || D(!1);
      var V = r.payload.newScroll;
      if (je(e.viewport.scroll.current, V)) return Kt(e);
      var K = $o(e.viewport, V);
      return on(e)
        ? Yo({ state: e, viewport: K })
        : Cr({ state: e, viewport: K });
    }
    if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!Ye(e)) return e;
      var Q = r.payload.maxScroll;
      if (je(Q, e.viewport.scroll.max)) return e;
      var ce = P({}, e.viewport, {
        scroll: P({}, e.viewport.scroll, { max: Q }),
      });
      return P({ phase: "DRAGGING" }, e, { viewport: ce });
    }
    if (
      r.type === "MOVE_UP" ||
      r.type === "MOVE_DOWN" ||
      r.type === "MOVE_LEFT" ||
      r.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && D(!1);
      var te = gc({ state: e, type: r.type });
      return te
        ? Cr({
            state: e,
            impact: te.impact,
            clientSelection: te.clientSelection,
            scrollJumpRequest: te.scrollJumpRequest,
          })
        : e;
    }
    if (r.type === "DROP_PENDING") {
      var Pe = r.payload.reason;
      e.phase !== "COLLECTING" && D(!1);
      var Re = P({ phase: "DROP_PENDING" }, e, {
        phase: "DROP_PENDING",
        isWaiting: !0,
        reason: Pe,
      });
      return Re;
    }
    if (r.type === "DROP_ANIMATE") {
      var X = r.payload,
        W = X.completed,
        ee = X.dropDuration,
        ue = X.newHomeClientOffset;
      e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || D(!1);
      var _e = {
        phase: "DROP_ANIMATING",
        completed: W,
        dropDuration: ee,
        newHomeClientOffset: ue,
        dimensions: e.dimensions,
      };
      return _e;
    }
    if (r.type === "DROP_COMPLETE") {
      var Be = r.payload.completed;
      return { phase: "IDLE", completed: Be, shouldFlush: !1 };
    }
    return e;
  },
  Tc = function (r) {
    return { type: "BEFORE_INITIAL_CAPTURE", payload: r };
  },
  kc = function (r) {
    return { type: "LIFT", payload: r };
  },
  Mc = function (r) {
    return { type: "INITIAL_PUBLISH", payload: r };
  },
  Lc = function (r) {
    return { type: "PUBLISH_WHILE_DRAGGING", payload: r };
  },
  $c = function () {
    return { type: "COLLECTION_STARTING", payload: null };
  },
  Gc = function (r) {
    return { type: "UPDATE_DROPPABLE_SCROLL", payload: r };
  },
  zc = function (r) {
    return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: r };
  },
  jc = function (r) {
    return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: r };
  },
  Xo = function (r) {
    return { type: "MOVE", payload: r };
  },
  qc = function (r) {
    return { type: "MOVE_BY_WINDOW_SCROLL", payload: r };
  },
  Wc = function (r) {
    return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: r };
  },
  Hc = function () {
    return { type: "MOVE_UP", payload: null };
  },
  Uc = function () {
    return { type: "MOVE_DOWN", payload: null };
  },
  Vc = function () {
    return { type: "MOVE_RIGHT", payload: null };
  },
  Kc = function () {
    return { type: "MOVE_LEFT", payload: null };
  },
  kn = function () {
    return { type: "FLUSH", payload: null };
  },
  Yc = function (r) {
    return { type: "DROP_ANIMATE", payload: r };
  },
  Mn = function (r) {
    return { type: "DROP_COMPLETE", payload: r };
  },
  Zo = function (r) {
    return { type: "DROP", payload: r };
  },
  Jc = function (r) {
    return { type: "DROP_PENDING", payload: r };
  },
  Qo = function () {
    return { type: "DROP_ANIMATION_FINISHED", payload: null };
  },
  Xc = function (e) {
    return function (r) {
      var t = r.getState,
        n = r.dispatch;
      return function (a) {
        return function (o) {
          if (o.type !== "LIFT") {
            a(o);
            return;
          }
          var i = o.payload,
            l = i.id,
            c = i.clientSelection,
            u = i.movementMode,
            f = t();
          f.phase === "DROP_ANIMATING" && n(Mn({ completed: f.completed })),
            t().phase !== "IDLE" && D(!1),
            n(kn()),
            n(Tc({ draggableId: l, movementMode: u }));
          var d = { shouldPublishImmediately: u === "SNAP" },
            p = { draggableId: l, scrollOptions: d },
            m = e.startPublishing(p),
            g = m.critical,
            b = m.dimensions,
            h = m.viewport;
          n(
            Mc({
              critical: g,
              dimensions: b,
              clientSelection: c,
              movementMode: u,
              viewport: h,
            })
          );
        };
      };
    };
  },
  Zc = function (e) {
    return function () {
      return function (r) {
        return function (t) {
          t.type === "INITIAL_PUBLISH" && e.dragging(),
            t.type === "DROP_ANIMATE" &&
              e.dropping(t.payload.completed.result.reason),
            (t.type === "FLUSH" || t.type === "DROP_COMPLETE") && e.resting(),
            r(t);
        };
      };
    };
  },
  Ln = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  Fr = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  $n = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  Ke = $n.outOfTheWay + "s " + Ln.outOfTheWay,
  Ir = {
    fluid: "opacity " + Ke,
    snap: "transform " + Ke + ", opacity " + Ke,
    drop: function (r) {
      var t = r + "s " + Ln.drop;
      return "transform " + t + ", opacity " + t;
    },
    outOfTheWay: "transform " + Ke,
    placeholder: "height " + Ke + ", width " + Ke + ", margin " + Ke,
  },
  wa = function (r) {
    return je(r, oe) ? null : "translate(" + r.x + "px, " + r.y + "px)";
  },
  ln = {
    moveTo: wa,
    drop: function (r, t) {
      var n = wa(r);
      return n ? (t ? n + " scale(" + Fr.scale.drop + ")" : n) : null;
    },
  },
  sn = $n.minDropTime,
  _o = $n.maxDropTime,
  Qc = _o - sn,
  Da = 1500,
  _c = 0.6,
  eu = function (e) {
    var r = e.current,
      t = e.destination,
      n = e.reason,
      a = Ar(r, t);
    if (a <= 0) return sn;
    if (a >= Da) return _o;
    var o = a / Da,
      i = sn + Qc * o,
      l = n === "CANCEL" ? i * _c : i;
    return Number(l.toFixed(2));
  },
  ru = function (e) {
    var r = e.impact,
      t = e.draggable,
      n = e.dimensions,
      a = e.viewport,
      o = e.afterCritical,
      i = n.draggables,
      l = n.droppables,
      c = ve(r),
      u = c ? l[c] : null,
      f = l[t.descriptor.droppableId],
      d = Ko({
        impact: r,
        draggable: t,
        draggables: i,
        afterCritical: o,
        droppable: u || f,
        viewport: a,
      }),
      p = ge(d, t.client.borderBox.center);
    return p;
  },
  tu = function (e) {
    var r = e.draggables,
      t = e.reason,
      n = e.lastImpact,
      a = e.home,
      o = e.viewport,
      i = e.onLiftImpact;
    if (!n.at || t !== "DROP") {
      var l = Vo({
        draggables: r,
        impact: i,
        destination: a,
        viewport: o,
        forceShouldAnimate: !0,
      });
      return { impact: l, didDropInsideDroppable: !1 };
    }
    if (n.at.type === "REORDER")
      return { impact: n, didDropInsideDroppable: !0 };
    var c = P({}, n, { displaced: Or });
    return { impact: c, didDropInsideDroppable: !0 };
  },
  nu = function (e) {
    var r = e.getState,
      t = e.dispatch;
    return function (n) {
      return function (a) {
        if (a.type !== "DROP") {
          n(a);
          return;
        }
        var o = r(),
          i = a.payload.reason;
        if (o.phase === "COLLECTING") {
          t(Jc({ reason: i }));
          return;
        }
        if (o.phase !== "IDLE") {
          var l = o.phase === "DROP_PENDING" && o.isWaiting;
          l && D(!1),
            o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || D(!1);
          var c = o.critical,
            u = o.dimensions,
            f = u.draggables[o.critical.draggable.id],
            d = tu({
              reason: i,
              lastImpact: o.impact,
              afterCritical: o.afterCritical,
              onLiftImpact: o.onLiftImpact,
              home: o.dimensions.droppables[o.critical.droppable.id],
              viewport: o.viewport,
              draggables: o.dimensions.draggables,
            }),
            p = d.impact,
            m = d.didDropInsideDroppable,
            g = m ? Pn(p) : null,
            b = m ? Dt(p) : null,
            h = { index: c.draggable.index, droppableId: c.droppable.id },
            x = {
              draggableId: f.descriptor.id,
              type: f.descriptor.type,
              source: h,
              reason: i,
              mode: o.movementMode,
              destination: g,
              combine: b,
            },
            y = ru({
              impact: p,
              draggable: f,
              dimensions: u,
              viewport: o.viewport,
              afterCritical: o.afterCritical,
            }),
            w = {
              critical: o.critical,
              afterCritical: o.afterCritical,
              result: x,
              impact: p,
            },
            E = !je(o.current.client.offset, y) || Boolean(x.combine);
          if (!E) {
            t(Mn({ completed: w }));
            return;
          }
          var I = eu({
              current: o.current.client.offset,
              destination: y,
              reason: i,
            }),
            C = { newHomeClientOffset: y, dropDuration: I, completed: w };
          t(Yc(C));
        }
      };
    };
  },
  ei = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  };
function au(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: function (t) {
      (t.target !== window && t.target !== window.document) || e();
    },
  };
}
function ou(e) {
  var r = e.onWindowScroll;
  function t() {
    r(ei());
  }
  var n = Sr(t),
    a = au(n),
    o = ze;
  function i() {
    return o !== ze;
  }
  function l() {
    i() && D(!1), (o = we(window, [a]));
  }
  function c() {
    i() || D(!1), n.cancel(), o(), (o = ze);
  }
  return { start: l, stop: c, isActive: i };
}
var iu = function (r) {
    return (
      r.type === "DROP_COMPLETE" ||
      r.type === "DROP_ANIMATE" ||
      r.type === "FLUSH"
    );
  },
  lu = function (e) {
    var r = ou({
      onWindowScroll: function (n) {
        e.dispatch(qc({ newScroll: n }));
      },
    });
    return function (t) {
      return function (n) {
        !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(),
          r.isActive() && iu(n) && r.stop(),
          t(n);
      };
    };
  },
  su = function (e) {
    var r = !1,
      t = !1,
      n = setTimeout(function () {
        t = !0;
      }),
      a = function (i) {
        r || t || ((r = !0), e(i), clearTimeout(n));
      };
    return (
      (a.wasCalled = function () {
        return r;
      }),
      a
    );
  },
  cu = function () {
    var e = [],
      r = function (o) {
        var i = On(e, function (u) {
          return u.timerId === o;
        });
        i === -1 && D(!1);
        var l = e.splice(i, 1),
          c = l[0];
        c.callback();
      },
      t = function (o) {
        var i = setTimeout(function () {
            return r(i);
          }),
          l = { timerId: i, callback: o };
        e.push(l);
      },
      n = function () {
        if (!!e.length) {
          var o = [].concat(e);
          (e.length = 0),
            o.forEach(function (i) {
              clearTimeout(i.timerId), i.callback();
            });
        }
      };
    return { add: t, flush: n };
  },
  uu = function (r, t) {
    return r == null && t == null
      ? !0
      : r == null || t == null
      ? !1
      : r.droppableId === t.droppableId && r.index === t.index;
  },
  du = function (r, t) {
    return r == null && t == null
      ? !0
      : r == null || t == null
      ? !1
      : r.draggableId === t.draggableId && r.droppableId === t.droppableId;
  },
  pu = function (r, t) {
    if (r === t) return !0;
    var n =
        r.draggable.id === t.draggable.id &&
        r.draggable.droppableId === t.draggable.droppableId &&
        r.draggable.type === t.draggable.type &&
        r.draggable.index === t.draggable.index,
      a =
        r.droppable.id === t.droppable.id &&
        r.droppable.type === t.droppable.type;
    return n && a;
  },
  yr = function (r, t) {
    t();
  },
  Zr = function (r, t) {
    return {
      draggableId: r.draggable.id,
      type: r.droppable.type,
      source: { droppableId: r.droppable.id, index: r.draggable.index },
      mode: t,
    };
  },
  Yt = function (r, t, n, a) {
    if (!r) {
      n(a(t));
      return;
    }
    var o = su(n),
      i = { announce: o };
    r(t, i), o.wasCalled() || n(a(t));
  },
  fu = function (e, r) {
    var t = cu(),
      n = null,
      a = function (p, m) {
        n && D(!1),
          yr("onBeforeCapture", function () {
            var g = e().onBeforeCapture;
            if (g) {
              var b = { draggableId: p, mode: m };
              g(b);
            }
          });
      },
      o = function (p, m) {
        n && D(!1),
          yr("onBeforeDragStart", function () {
            var g = e().onBeforeDragStart;
            g && g(Zr(p, m));
          });
      },
      i = function (p, m) {
        n && D(!1);
        var g = Zr(p, m);
        (n = {
          mode: m,
          lastCritical: p,
          lastLocation: g.source,
          lastCombine: null,
        }),
          t.add(function () {
            yr("onDragStart", function () {
              return Yt(e().onDragStart, g, r, it.onDragStart);
            });
          });
      },
      l = function (p, m) {
        var g = Pn(m),
          b = Dt(m);
        n || D(!1);
        var h = !pu(p, n.lastCritical);
        h && (n.lastCritical = p);
        var x = !uu(n.lastLocation, g);
        x && (n.lastLocation = g);
        var y = !du(n.lastCombine, b);
        if ((y && (n.lastCombine = b), !(!h && !x && !y))) {
          var w = P({}, Zr(p, n.mode), { combine: b, destination: g });
          t.add(function () {
            yr("onDragUpdate", function () {
              return Yt(e().onDragUpdate, w, r, it.onDragUpdate);
            });
          });
        }
      },
      c = function () {
        n || D(!1), t.flush();
      },
      u = function (p) {
        n || D(!1),
          (n = null),
          yr("onDragEnd", function () {
            return Yt(e().onDragEnd, p, r, it.onDragEnd);
          });
      },
      f = function () {
        if (!!n) {
          var p = P({}, Zr(n.lastCritical, n.mode), {
            combine: null,
            destination: null,
            reason: "CANCEL",
          });
          u(p);
        }
      };
    return {
      beforeCapture: a,
      beforeStart: o,
      start: i,
      update: l,
      flush: c,
      drop: u,
      abort: f,
    };
  },
  mu = function (e, r) {
    var t = fu(e, r);
    return function (n) {
      return function (a) {
        return function (o) {
          if (o.type === "BEFORE_INITIAL_CAPTURE") {
            t.beforeCapture(o.payload.draggableId, o.payload.movementMode);
            return;
          }
          if (o.type === "INITIAL_PUBLISH") {
            var i = o.payload.critical;
            t.beforeStart(i, o.payload.movementMode),
              a(o),
              t.start(i, o.payload.movementMode);
            return;
          }
          if (o.type === "DROP_COMPLETE") {
            var l = o.payload.completed.result;
            t.flush(), a(o), t.drop(l);
            return;
          }
          if ((a(o), o.type === "FLUSH")) {
            t.abort();
            return;
          }
          var c = n.getState();
          c.phase === "DRAGGING" && t.update(c.critical, c.impact);
        };
      };
    };
  },
  gu = function (e) {
    return function (r) {
      return function (t) {
        if (t.type !== "DROP_ANIMATION_FINISHED") {
          r(t);
          return;
        }
        var n = e.getState();
        n.phase !== "DROP_ANIMATING" && D(!1),
          e.dispatch(Mn({ completed: n.completed }));
      };
    };
  },
  vu = function (e) {
    var r = null,
      t = null;
    function n() {
      t && (cancelAnimationFrame(t), (t = null)), r && (r(), (r = null));
    }
    return function (a) {
      return function (o) {
        if (
          ((o.type === "FLUSH" ||
            o.type === "DROP_COMPLETE" ||
            o.type === "DROP_ANIMATION_FINISHED") &&
            n(),
          a(o),
          o.type === "DROP_ANIMATE")
        ) {
          var i = {
            eventName: "scroll",
            options: { capture: !0, passive: !1, once: !0 },
            fn: function () {
              var c = e.getState();
              c.phase === "DROP_ANIMATING" && e.dispatch(Qo());
            },
          };
          t = requestAnimationFrame(function () {
            (t = null), (r = we(window, [i]));
          });
        }
      };
    };
  },
  bu = function (e) {
    return function () {
      return function (r) {
        return function (t) {
          (t.type === "DROP_COMPLETE" ||
            t.type === "FLUSH" ||
            t.type === "DROP_ANIMATE") &&
            e.stopPublishing(),
            r(t);
        };
      };
    };
  },
  hu = function (e) {
    var r = !1;
    return function () {
      return function (t) {
        return function (n) {
          if (n.type === "INITIAL_PUBLISH") {
            (r = !0),
              e.tryRecordFocus(n.payload.critical.draggable.id),
              t(n),
              e.tryRestoreFocusRecorded();
            return;
          }
          if ((t(n), !!r)) {
            if (n.type === "FLUSH") {
              (r = !1), e.tryRestoreFocusRecorded();
              return;
            }
            if (n.type === "DROP_COMPLETE") {
              r = !1;
              var a = n.payload.completed.result;
              a.combine &&
                e.tryShiftRecord(a.draggableId, a.combine.draggableId),
                e.tryRestoreFocusRecorded();
            }
          }
        };
      };
    };
  },
  xu = function (r) {
    return (
      r.type === "DROP_COMPLETE" ||
      r.type === "DROP_ANIMATE" ||
      r.type === "FLUSH"
    );
  },
  yu = function (e) {
    return function (r) {
      return function (t) {
        return function (n) {
          if (xu(n)) {
            e.stop(), t(n);
            return;
          }
          if (n.type === "INITIAL_PUBLISH") {
            t(n);
            var a = r.getState();
            a.phase !== "DRAGGING" && D(!1), e.start(a);
            return;
          }
          t(n), e.scroll(r.getState());
        };
      };
    };
  },
  Eu = function (e) {
    return function (r) {
      return function (t) {
        if ((r(t), t.type === "PUBLISH_WHILE_DRAGGING")) {
          var n = e.getState();
          n.phase === "DROP_PENDING" &&
            (n.isWaiting || e.dispatch(Zo({ reason: n.reason })));
        }
      };
    };
  },
  wu = co,
  Du = function (e) {
    var r = e.dimensionMarshal,
      t = e.focusMarshal,
      n = e.styleMarshal,
      a = e.getResponders,
      o = e.announce,
      i = e.autoScroller;
    return so(
      Bc,
      wu(Il(Zc(n), bu(r), Xc(r), nu, gu, vu, Eu, yu(i), lu, hu(t), mu(a, o)))
    );
  },
  Jt = function () {
    return { additions: {}, removals: {}, modified: {} };
  };
function Cu(e) {
  var r = e.registry,
    t = e.callbacks,
    n = Jt(),
    a = null,
    o = function () {
      a ||
        (t.collectionStarting(),
        (a = requestAnimationFrame(function () {
          a = null;
          var f = n,
            d = f.additions,
            p = f.removals,
            m = f.modified,
            g = Object.keys(d)
              .map(function (x) {
                return r.draggable.getById(x).getDimension(oe);
              })
              .sort(function (x, y) {
                return x.descriptor.index - y.descriptor.index;
              }),
            b = Object.keys(m).map(function (x) {
              var y = r.droppable.getById(x),
                w = y.callbacks.getScrollWhileDragging();
              return { droppableId: x, scroll: w };
            }),
            h = { additions: g, removals: Object.keys(p), modified: b };
          (n = Jt()), t.publish(h);
        })));
    },
    i = function (f) {
      var d = f.descriptor.id;
      (n.additions[d] = f),
        (n.modified[f.descriptor.droppableId] = !0),
        n.removals[d] && delete n.removals[d],
        o();
    },
    l = function (f) {
      var d = f.descriptor;
      (n.removals[d.id] = !0),
        (n.modified[d.droppableId] = !0),
        n.additions[d.id] && delete n.additions[d.id],
        o();
    },
    c = function () {
      !a || (cancelAnimationFrame(a), (a = null), (n = Jt()));
    };
  return { add: i, remove: l, stop: c };
}
var ri = function (e) {
    var r = e.scrollHeight,
      t = e.scrollWidth,
      n = e.height,
      a = e.width,
      o = ge({ x: t, y: r }, { x: a, y: n }),
      i = { x: Math.max(0, o.x), y: Math.max(0, o.y) };
    return i;
  },
  ti = function () {
    var e = document.documentElement;
    return e || D(!1), e;
  },
  ni = function () {
    var e = ti(),
      r = ri({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    return r;
  },
  Iu = function () {
    var e = ei(),
      r = ni(),
      t = e.y,
      n = e.x,
      a = ti(),
      o = a.clientWidth,
      i = a.clientHeight,
      l = n + o,
      c = t + i,
      u = Ae({ top: t, left: n, right: l, bottom: c }),
      f = {
        frame: u,
        scroll: {
          initial: e,
          current: e,
          max: r,
          diff: { value: oe, displacement: oe },
        },
      };
    return f;
  },
  Su = function (e) {
    var r = e.critical,
      t = e.scrollOptions,
      n = e.registry,
      a = Iu(),
      o = a.scroll.current,
      i = r.droppable,
      l = n.droppable.getAllByType(i.type).map(function (d) {
        return d.callbacks.getDimensionAndWatchScroll(o, t);
      }),
      c = n.draggable.getAllByType(r.draggable.type).map(function (d) {
        return d.getDimension(o);
      }),
      u = { draggables: Ro(c), droppables: No(l) },
      f = { dimensions: u, critical: r, viewport: a };
    return f;
  };
function Ca(e, r, t) {
  if (t.descriptor.id === r.id || t.descriptor.type !== r.type) return !1;
  var n = e.droppable.getById(t.descriptor.droppableId);
  return n.descriptor.mode === "virtual";
}
var Au = function (e, r) {
    var t = null,
      n = Cu({
        callbacks: {
          publish: r.publishWhileDragging,
          collectionStarting: r.collectionStarting,
        },
        registry: e,
      }),
      a = function (m, g) {
        e.droppable.exists(m) || D(!1),
          t && r.updateDroppableIsEnabled({ id: m, isEnabled: g });
      },
      o = function (m, g) {
        !t ||
          (e.droppable.exists(m) || D(!1),
          r.updateDroppableIsCombineEnabled({ id: m, isCombineEnabled: g }));
      },
      i = function (m, g) {
        !t ||
          (e.droppable.exists(m) || D(!1),
          r.updateDroppableScroll({ id: m, newScroll: g }));
      },
      l = function (m, g) {
        !t || e.droppable.getById(m).callbacks.scroll(g);
      },
      c = function () {
        if (!!t) {
          n.stop();
          var m = t.critical.droppable;
          e.droppable.getAllByType(m.type).forEach(function (g) {
            return g.callbacks.dragStopped();
          }),
            t.unsubscribe(),
            (t = null);
        }
      },
      u = function (m) {
        t || D(!1);
        var g = t.critical.draggable;
        m.type === "ADDITION" && Ca(e, g, m.value) && n.add(m.value),
          m.type === "REMOVAL" && Ca(e, g, m.value) && n.remove(m.value);
      },
      f = function (m) {
        t && D(!1);
        var g = e.draggable.getById(m.draggableId),
          b = e.droppable.getById(g.descriptor.droppableId),
          h = { draggable: g.descriptor, droppable: b.descriptor },
          x = e.subscribe(u);
        return (
          (t = { critical: h, unsubscribe: x }),
          Su({ critical: h, registry: e, scrollOptions: m.scrollOptions })
        );
      },
      d = {
        updateDroppableIsEnabled: a,
        updateDroppableIsCombineEnabled: o,
        scrollDroppable: l,
        updateDroppableScroll: i,
        startPublishing: f,
        stopPublishing: c,
      };
    return d;
  },
  ai = function (e, r) {
    return e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r
      ? !1
      : e.completed.result.reason === "DROP";
  },
  Ou = function (e) {
    window.scrollBy(e.x, e.y);
  },
  Pu = ae(function (e) {
    return wt(e).filter(function (r) {
      return !(!r.isEnabled || !r.frame);
    });
  }),
  Fu = function (r, t) {
    var n = He(Pu(t), function (a) {
      return a.frame || D(!1), qo(a.frame.pageMarginBox)(r);
    });
    return n;
  },
  Nu = function (e) {
    var r = e.center,
      t = e.destination,
      n = e.droppables;
    if (t) {
      var a = n[t];
      return a.frame ? a : null;
    }
    var o = Fu(r, n);
    return o;
  },
  qe = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (r) {
      return Math.pow(r, 2);
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  Ru = function (e, r) {
    var t = e[r.size] * qe.startFromPercentage,
      n = e[r.size] * qe.maxScrollAtPercentage,
      a = { startScrollingFrom: t, maxScrollValueAt: n };
    return a;
  },
  oi = function (e) {
    var r = e.startOfRange,
      t = e.endOfRange,
      n = e.current,
      a = t - r;
    if (a === 0) return 0;
    var o = n - r,
      i = o / a;
    return i;
  },
  Gn = 1,
  Bu = function (e, r) {
    if (e > r.startScrollingFrom) return 0;
    if (e <= r.maxScrollValueAt) return qe.maxPixelScroll;
    if (e === r.startScrollingFrom) return Gn;
    var t = oi({
        startOfRange: r.maxScrollValueAt,
        endOfRange: r.startScrollingFrom,
        current: e,
      }),
      n = 1 - t,
      a = qe.maxPixelScroll * qe.ease(n);
    return Math.ceil(a);
  },
  Ia = qe.durationDampening.accelerateAt,
  Sa = qe.durationDampening.stopDampeningAt,
  Tu = function (e, r) {
    var t = r,
      n = Sa,
      a = Date.now(),
      o = a - t;
    if (o >= Sa) return e;
    if (o < Ia) return Gn;
    var i = oi({ startOfRange: Ia, endOfRange: n, current: o }),
      l = e * qe.ease(i);
    return Math.ceil(l);
  },
  Aa = function (e) {
    var r = e.distanceToEdge,
      t = e.thresholds,
      n = e.dragStartTime,
      a = e.shouldUseTimeDampening,
      o = Bu(r, t);
    return o === 0 ? 0 : a ? Math.max(Tu(o, n), Gn) : o;
  },
  Oa = function (e) {
    var r = e.container,
      t = e.distanceToEdges,
      n = e.dragStartTime,
      a = e.axis,
      o = e.shouldUseTimeDampening,
      i = Ru(r, a),
      l = t[a.end] < t[a.start];
    return l
      ? Aa({
          distanceToEdge: t[a.end],
          thresholds: i,
          dragStartTime: n,
          shouldUseTimeDampening: o,
        })
      : -1 *
          Aa({
            distanceToEdge: t[a.start],
            thresholds: i,
            dragStartTime: n,
            shouldUseTimeDampening: o,
          });
  },
  ku = function (e) {
    var r = e.container,
      t = e.subject,
      n = e.proposedScroll,
      a = t.height > r.height,
      o = t.width > r.width;
    return !o && !a ? n : o && a ? null : { x: o ? 0 : n.x, y: a ? 0 : n.y };
  },
  Mu = Po(function (e) {
    return e === 0 ? 0 : e;
  }),
  ii = function (e) {
    var r = e.dragStartTime,
      t = e.container,
      n = e.subject,
      a = e.center,
      o = e.shouldUseTimeDampening,
      i = {
        top: a.y - t.top,
        right: t.right - a.x,
        bottom: t.bottom - a.y,
        left: a.x - t.left,
      },
      l = Oa({
        container: t,
        distanceToEdges: i,
        dragStartTime: r,
        axis: Fn,
        shouldUseTimeDampening: o,
      }),
      c = Oa({
        container: t,
        distanceToEdges: i,
        dragStartTime: r,
        axis: ko,
        shouldUseTimeDampening: o,
      }),
      u = Mu({ x: c, y: l });
    if (je(u, oe)) return null;
    var f = ku({ container: t, subject: n, proposedScroll: u });
    return f ? (je(f, oe) ? null : f) : null;
  },
  Lu = Po(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  zn = (function () {
    var e = function (t, n) {
      return t < 0 ? t : t > n ? t - n : 0;
    };
    return function (r) {
      var t = r.current,
        n = r.max,
        a = r.change,
        o = se(t, a),
        i = { x: e(o.x, n.x), y: e(o.y, n.y) };
      return je(i, oe) ? null : i;
    };
  })(),
  li = function (r) {
    var t = r.max,
      n = r.current,
      a = r.change,
      o = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
      i = Lu(a),
      l = zn({ max: o, current: n, change: i });
    return !l || (i.x !== 0 && l.x === 0) || (i.y !== 0 && l.y === 0);
  },
  jn = function (r, t) {
    return li({ current: r.scroll.current, max: r.scroll.max, change: t });
  },
  $u = function (r, t) {
    if (!jn(r, t)) return null;
    var n = r.scroll.max,
      a = r.scroll.current;
    return zn({ current: a, max: n, change: t });
  },
  qn = function (r, t) {
    var n = r.frame;
    return n
      ? li({ current: n.scroll.current, max: n.scroll.max, change: t })
      : !1;
  },
  Gu = function (r, t) {
    var n = r.frame;
    return !n || !qn(r, t)
      ? null
      : zn({ current: n.scroll.current, max: n.scroll.max, change: t });
  },
  zu = function (e) {
    var r = e.viewport,
      t = e.subject,
      n = e.center,
      a = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      i = ii({
        dragStartTime: a,
        container: r.frame,
        subject: t,
        center: n,
        shouldUseTimeDampening: o,
      });
    return i && jn(r, i) ? i : null;
  },
  ju = function (e) {
    var r = e.droppable,
      t = e.subject,
      n = e.center,
      a = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      i = r.frame;
    if (!i) return null;
    var l = ii({
      dragStartTime: a,
      container: i.pageMarginBox,
      subject: t,
      center: n,
      shouldUseTimeDampening: o,
    });
    return l && qn(r, l) ? l : null;
  },
  Pa = function (e) {
    var r = e.state,
      t = e.dragStartTime,
      n = e.shouldUseTimeDampening,
      a = e.scrollWindow,
      o = e.scrollDroppable,
      i = r.current.page.borderBoxCenter,
      l = r.dimensions.draggables[r.critical.draggable.id],
      c = l.page.marginBox;
    if (r.isWindowScrollAllowed) {
      var u = r.viewport,
        f = zu({
          dragStartTime: t,
          viewport: u,
          subject: c,
          center: i,
          shouldUseTimeDampening: n,
        });
      if (f) {
        a(f);
        return;
      }
    }
    var d = Nu({
      center: i,
      destination: ve(r.impact),
      droppables: r.dimensions.droppables,
    });
    if (!!d) {
      var p = ju({
        dragStartTime: t,
        droppable: d,
        subject: c,
        center: i,
        shouldUseTimeDampening: n,
      });
      p && o(d.descriptor.id, p);
    }
  },
  qu = function (e) {
    var r = e.scrollWindow,
      t = e.scrollDroppable,
      n = Sr(r),
      a = Sr(t),
      o = null,
      i = function (f) {
        o || D(!1);
        var d = o,
          p = d.shouldUseTimeDampening,
          m = d.dragStartTime;
        Pa({
          state: f,
          scrollWindow: n,
          scrollDroppable: a,
          dragStartTime: m,
          shouldUseTimeDampening: p,
        });
      },
      l = function (f) {
        o && D(!1);
        var d = Date.now(),
          p = !1,
          m = function () {
            p = !0;
          };
        Pa({
          state: f,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: m,
          scrollDroppable: m,
        }),
          (o = { dragStartTime: d, shouldUseTimeDampening: p }),
          p && i(f);
      },
      c = function () {
        !o || (n.cancel(), a.cancel(), (o = null));
      };
    return { start: l, stop: c, scroll: i };
  },
  Wu = function (e) {
    var r = e.move,
      t = e.scrollDroppable,
      n = e.scrollWindow,
      a = function (u, f) {
        var d = se(u.current.client.selection, f);
        r({ client: d });
      },
      o = function (u, f) {
        if (!qn(u, f)) return f;
        var d = Gu(u, f);
        if (!d) return t(u.descriptor.id, f), null;
        var p = ge(f, d);
        t(u.descriptor.id, p);
        var m = ge(f, p);
        return m;
      },
      i = function (u, f, d) {
        if (!u || !jn(f, d)) return d;
        var p = $u(f, d);
        if (!p) return n(d), null;
        var m = ge(d, p);
        n(m);
        var g = ge(d, m);
        return g;
      },
      l = function (u) {
        var f = u.scrollJumpRequest;
        if (!!f) {
          var d = ve(u.impact);
          d || D(!1);
          var p = o(u.dimensions.droppables[d], f);
          if (!!p) {
            var m = u.viewport,
              g = i(u.isWindowScrollAllowed, m, p);
            !g || a(u, g);
          }
        }
      };
    return l;
  },
  Hu = function (e) {
    var r = e.scrollDroppable,
      t = e.scrollWindow,
      n = e.move,
      a = qu({ scrollWindow: t, scrollDroppable: r }),
      o = Wu({ move: n, scrollWindow: t, scrollDroppable: r }),
      i = function (u) {
        if (u.phase === "DRAGGING") {
          if (u.movementMode === "FLUID") {
            a.scroll(u);
            return;
          }
          !u.scrollJumpRequest || o(u);
        }
      },
      l = { scroll: i, start: a.start, stop: a.stop };
    return l;
  },
  lr = "data-rbd",
  sr = (function () {
    var e = lr + "-drag-handle";
    return {
      base: e,
      draggableId: e + "-draggable-id",
      contextId: e + "-context-id",
    };
  })(),
  cn = (function () {
    var e = lr + "-draggable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  Uu = (function () {
    var e = lr + "-droppable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  Fa = { contextId: lr + "-scroll-container-context-id" },
  Vu = function (r) {
    return function (t) {
      return "[" + t + '="' + r + '"]';
    };
  },
  Er = function (r, t) {
    return r
      .map(function (n) {
        var a = n.styles[t];
        return a ? n.selector + " { " + a + " }" : "";
      })
      .join(" ");
  },
  Ku = "pointer-events: none;",
  Yu = function (e) {
    var r = Vu(e),
      t = (function () {
        var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: r(sr.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: l,
            dragging: Ku,
            dropAnimating: l,
          },
        };
      })(),
      n = (function () {
        var l =
          `
      transition: ` +
          Ir.outOfTheWay +
          `;
    `;
        return {
          selector: r(cn.contextId),
          styles: { dragging: l, dropAnimating: l, userCancel: l },
        };
      })(),
      a = {
        selector: r(Uu.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      o = {
        selector: "body",
        styles: {
          dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
        },
      },
      i = [n, t, a, o];
    return {
      always: Er(i, "always"),
      resting: Er(i, "resting"),
      dragging: Er(i, "dragging"),
      dropAnimating: Er(i, "dropAnimating"),
      userCancel: Er(i, "userCancel"),
    };
  },
  be =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? v.exports.useLayoutEffect
      : v.exports.useEffect,
  Xt = function () {
    var r = document.querySelector("head");
    return r || D(!1), r;
  },
  Na = function (r) {
    var t = document.createElement("style");
    return r && t.setAttribute("nonce", r), (t.type = "text/css"), t;
  };
function Ju(e, r) {
  var t = U(
      function () {
        return Yu(e);
      },
      [e]
    ),
    n = v.exports.useRef(null),
    a = v.exports.useRef(null),
    o = R(
      ae(function (d) {
        var p = a.current;
        p || D(!1), (p.textContent = d);
      }),
      []
    ),
    i = R(function (d) {
      var p = n.current;
      p || D(!1), (p.textContent = d);
    }, []);
  be(
    function () {
      (!n.current && !a.current) || D(!1);
      var d = Na(r),
        p = Na(r);
      return (
        (n.current = d),
        (a.current = p),
        d.setAttribute(lr + "-always", e),
        p.setAttribute(lr + "-dynamic", e),
        Xt().appendChild(d),
        Xt().appendChild(p),
        i(t.always),
        o(t.resting),
        function () {
          var m = function (b) {
            var h = b.current;
            h || D(!1), Xt().removeChild(h), (b.current = null);
          };
          m(n), m(a);
        }
      );
    },
    [r, i, o, t.always, t.resting, e]
  );
  var l = R(
      function () {
        return o(t.dragging);
      },
      [o, t.dragging]
    ),
    c = R(
      function (d) {
        if (d === "DROP") {
          o(t.dropAnimating);
          return;
        }
        o(t.userCancel);
      },
      [o, t.dropAnimating, t.userCancel]
    ),
    u = R(
      function () {
        !a.current || o(t.resting);
      },
      [o, t.resting]
    ),
    f = U(
      function () {
        return { dragging: l, dropping: c, resting: u };
      },
      [l, c, u]
    );
  return f;
}
var si = function (e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function St(e) {
  return e instanceof si(e).HTMLElement;
}
function Xu(e, r) {
  var t = "[" + sr.contextId + '="' + e + '"]',
    n = Fo(document.querySelectorAll(t));
  if (!n.length) return null;
  var a = He(n, function (o) {
    return o.getAttribute(sr.draggableId) === r;
  });
  return !a || !St(a) ? null : a;
}
function Zu(e) {
  var r = v.exports.useRef({}),
    t = v.exports.useRef(null),
    n = v.exports.useRef(null),
    a = v.exports.useRef(!1),
    o = R(function (p, m) {
      var g = { id: p, focus: m };
      return (
        (r.current[p] = g),
        function () {
          var h = r.current,
            x = h[p];
          x !== g && delete h[p];
        }
      );
    }, []),
    i = R(
      function (p) {
        var m = Xu(e, p);
        m && m !== document.activeElement && m.focus();
      },
      [e]
    ),
    l = R(function (p, m) {
      t.current === p && (t.current = m);
    }, []),
    c = R(
      function () {
        n.current ||
          !a.current ||
          (n.current = requestAnimationFrame(function () {
            n.current = null;
            var p = t.current;
            p && i(p);
          }));
      },
      [i]
    ),
    u = R(function (p) {
      t.current = null;
      var m = document.activeElement;
      !m || (m.getAttribute(sr.draggableId) === p && (t.current = p));
    }, []);
  be(function () {
    return (
      (a.current = !0),
      function () {
        a.current = !1;
        var p = n.current;
        p && cancelAnimationFrame(p);
      }
    );
  }, []);
  var f = U(
    function () {
      return {
        register: o,
        tryRecordFocus: u,
        tryRestoreFocusRecorded: c,
        tryShiftRecord: l,
      };
    },
    [o, u, c, l]
  );
  return f;
}
function Qu() {
  var e = { draggables: {}, droppables: {} },
    r = [];
  function t(d) {
    return (
      r.push(d),
      function () {
        var m = r.indexOf(d);
        m !== -1 && r.splice(m, 1);
      }
    );
  }
  function n(d) {
    r.length &&
      r.forEach(function (p) {
        return p(d);
      });
  }
  function a(d) {
    return e.draggables[d] || null;
  }
  function o(d) {
    var p = a(d);
    return p || D(!1), p;
  }
  var i = {
    register: function (p) {
      (e.draggables[p.descriptor.id] = p), n({ type: "ADDITION", value: p });
    },
    update: function (p, m) {
      var g = e.draggables[m.descriptor.id];
      !g ||
        (g.uniqueId === p.uniqueId &&
          (delete e.draggables[m.descriptor.id],
          (e.draggables[p.descriptor.id] = p)));
    },
    unregister: function (p) {
      var m = p.descriptor.id,
        g = a(m);
      !g ||
        (p.uniqueId === g.uniqueId &&
          (delete e.draggables[m], n({ type: "REMOVAL", value: p })));
    },
    getById: o,
    findById: a,
    exists: function (p) {
      return Boolean(a(p));
    },
    getAllByType: function (p) {
      return pt(e.draggables).filter(function (m) {
        return m.descriptor.type === p;
      });
    },
  };
  function l(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    var p = l(d);
    return p || D(!1), p;
  }
  var u = {
    register: function (p) {
      e.droppables[p.descriptor.id] = p;
    },
    unregister: function (p) {
      var m = l(p.descriptor.id);
      !m || (p.uniqueId === m.uniqueId && delete e.droppables[p.descriptor.id]);
    },
    getById: c,
    findById: l,
    exists: function (p) {
      return Boolean(l(p));
    },
    getAllByType: function (p) {
      return pt(e.droppables).filter(function (m) {
        return m.descriptor.type === p;
      });
    },
  };
  function f() {
    (e.draggables = {}), (e.droppables = {}), (r.length = 0);
  }
  return { draggable: i, droppable: u, subscribe: t, clean: f };
}
function _u() {
  var e = U(Qu, []);
  return (
    v.exports.useEffect(
      function () {
        return function () {
          requestAnimationFrame(e.clean);
        };
      },
      [e]
    ),
    e
  );
}
var Wn = s.createContext(null),
  mt = function () {
    var e = document.body;
    return e || D(!1), e;
  },
  ed = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  },
  rd = function (r) {
    return "rbd-announcement-" + r;
  };
function td(e) {
  var r = U(
      function () {
        return rd(e);
      },
      [e]
    ),
    t = v.exports.useRef(null);
  v.exports.useEffect(
    function () {
      var o = document.createElement("div");
      return (
        (t.current = o),
        (o.id = r),
        o.setAttribute("aria-live", "assertive"),
        o.setAttribute("aria-atomic", "true"),
        P(o.style, ed),
        mt().appendChild(o),
        function () {
          setTimeout(function () {
            var c = mt();
            c.contains(o) && c.removeChild(o),
              o === t.current && (t.current = null);
          });
        }
      );
    },
    [r]
  );
  var n = R(function (a) {
    var o = t.current;
    if (o) {
      o.textContent = a;
      return;
    }
  }, []);
  return n;
}
var nd = 0,
  ad = { separator: "::" };
function Hn(e, r) {
  return (
    r === void 0 && (r = ad),
    U(
      function () {
        return "" + e + r.separator + nd++;
      },
      [r.separator, e]
    )
  );
}
function od(e) {
  var r = e.contextId,
    t = e.uniqueId;
  return "rbd-hidden-text-" + r + "-" + t;
}
function id(e) {
  var r = e.contextId,
    t = e.text,
    n = Hn("hidden-text", { separator: "-" }),
    a = U(
      function () {
        return od({ contextId: r, uniqueId: n });
      },
      [n, r]
    );
  return (
    v.exports.useEffect(
      function () {
        var i = document.createElement("div");
        return (
          (i.id = a),
          (i.textContent = t),
          (i.style.display = "none"),
          mt().appendChild(i),
          function () {
            var c = mt();
            c.contains(i) && c.removeChild(i);
          }
        );
      },
      [a, t]
    ),
    a
  );
}
var At = s.createContext(null);
function ci(e) {
  var r = v.exports.useRef(e);
  return (
    v.exports.useEffect(function () {
      r.current = e;
    }),
    r
  );
}
function ld() {
  var e = null;
  function r() {
    return Boolean(e);
  }
  function t(i) {
    return i === e;
  }
  function n(i) {
    e && D(!1);
    var l = { abandon: i };
    return (e = l), l;
  }
  function a() {
    e || D(!1), (e = null);
  }
  function o() {
    e && (e.abandon(), a());
  }
  return { isClaimed: r, isActive: t, claim: n, release: a, tryAbandon: o };
}
var sd = 9,
  cd = 13,
  Un = 27,
  ui = 32,
  ud = 33,
  dd = 34,
  pd = 35,
  fd = 36,
  md = 37,
  gd = 38,
  vd = 39,
  bd = 40,
  Qr,
  hd = ((Qr = {}), (Qr[cd] = !0), (Qr[sd] = !0), Qr),
  di = function (e) {
    hd[e.keyCode] && e.preventDefault();
  },
  Ot = (function () {
    var e = "visibilitychange";
    if (typeof document > "u") return e;
    var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e],
      t = He(r, function (n) {
        return "on" + n in document;
      });
    return t || e;
  })(),
  pi = 0,
  Ra = 5;
function xd(e, r) {
  return Math.abs(r.x - e.x) >= Ra || Math.abs(r.y - e.y) >= Ra;
}
var Ba = { type: "IDLE" };
function yd(e) {
  var r = e.cancel,
    t = e.completed,
    n = e.getPhase,
    a = e.setPhase;
  return [
    {
      eventName: "mousemove",
      fn: function (i) {
        var l = i.button,
          c = i.clientX,
          u = i.clientY;
        if (l === pi) {
          var f = { x: c, y: u },
            d = n();
          if (d.type === "DRAGGING") {
            i.preventDefault(), d.actions.move(f);
            return;
          }
          d.type !== "PENDING" && D(!1);
          var p = d.point;
          if (!!xd(p, f)) {
            i.preventDefault();
            var m = d.actions.fluidLift(f);
            a({ type: "DRAGGING", actions: m });
          }
        }
      },
    },
    {
      eventName: "mouseup",
      fn: function (i) {
        var l = n();
        if (l.type !== "DRAGGING") {
          r();
          return;
        }
        i.preventDefault(), l.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "mousedown",
      fn: function (i) {
        n().type === "DRAGGING" && i.preventDefault(), r();
      },
    },
    {
      eventName: "keydown",
      fn: function (i) {
        var l = n();
        if (l.type === "PENDING") {
          r();
          return;
        }
        if (i.keyCode === Un) {
          i.preventDefault(), r();
          return;
        }
        di(i);
      },
    },
    { eventName: "resize", fn: r },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: function () {
        n().type === "PENDING" && r();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: function (i) {
        var l = n();
        if ((l.type === "IDLE" && D(!1), l.actions.shouldRespectForcePress())) {
          r();
          return;
        }
        i.preventDefault();
      },
    },
    { eventName: Ot, fn: r },
  ];
}
function Ed(e) {
  var r = v.exports.useRef(Ba),
    t = v.exports.useRef(ze),
    n = U(
      function () {
        return {
          eventName: "mousedown",
          fn: function (d) {
            if (
              !d.defaultPrevented &&
              d.button === pi &&
              !(d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
            ) {
              var p = e.findClosestDraggableId(d);
              if (!!p) {
                var m = e.tryGetLock(p, i, { sourceEvent: d });
                if (!!m) {
                  d.preventDefault();
                  var g = { x: d.clientX, y: d.clientY };
                  t.current(), u(m, g);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    a = U(
      function () {
        return {
          eventName: "webkitmouseforcewillbegin",
          fn: function (d) {
            if (!d.defaultPrevented) {
              var p = e.findClosestDraggableId(d);
              if (!!p) {
                var m = e.findOptionsForDraggable(p);
                !m ||
                  m.shouldRespectForcePress ||
                  !e.canGetLock(p) ||
                  d.preventDefault();
              }
            }
          },
        };
      },
      [e]
    ),
    o = R(
      function () {
        var d = { passive: !1, capture: !0 };
        t.current = we(window, [a, n], d);
      },
      [a, n]
    ),
    i = R(
      function () {
        var f = r.current;
        f.type !== "IDLE" && ((r.current = Ba), t.current(), o());
      },
      [o]
    ),
    l = R(
      function () {
        var f = r.current;
        i(),
          f.type === "DRAGGING" &&
            f.actions.cancel({ shouldBlockNextClick: !0 }),
          f.type === "PENDING" && f.actions.abort();
      },
      [i]
    ),
    c = R(
      function () {
        var d = { capture: !0, passive: !1 },
          p = yd({
            cancel: l,
            completed: i,
            getPhase: function () {
              return r.current;
            },
            setPhase: function (g) {
              r.current = g;
            },
          });
        t.current = we(window, p, d);
      },
      [l, i]
    ),
    u = R(
      function (d, p) {
        r.current.type !== "IDLE" && D(!1),
          (r.current = { type: "PENDING", point: p, actions: d }),
          c();
      },
      [c]
    );
  be(
    function () {
      return (
        o(),
        function () {
          t.current();
        }
      );
    },
    [o]
  );
}
var ar;
function wd() {}
var Dd =
  ((ar = {}), (ar[dd] = !0), (ar[ud] = !0), (ar[fd] = !0), (ar[pd] = !0), ar);
function Cd(e, r) {
  function t() {
    r(), e.cancel();
  }
  function n() {
    r(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: function (o) {
        if (o.keyCode === Un) {
          o.preventDefault(), t();
          return;
        }
        if (o.keyCode === ui) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === bd) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === gd) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === vd) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === md) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (Dd[o.keyCode]) {
          o.preventDefault();
          return;
        }
        di(o);
      },
    },
    { eventName: "mousedown", fn: t },
    { eventName: "mouseup", fn: t },
    { eventName: "click", fn: t },
    { eventName: "touchstart", fn: t },
    { eventName: "resize", fn: t },
    { eventName: "wheel", fn: t, options: { passive: !0 } },
    { eventName: Ot, fn: t },
  ];
}
function Id(e) {
  var r = v.exports.useRef(wd),
    t = U(
      function () {
        return {
          eventName: "keydown",
          fn: function (o) {
            if (o.defaultPrevented || o.keyCode !== ui) return;
            var i = e.findClosestDraggableId(o);
            if (!i) return;
            var l = e.tryGetLock(i, f, { sourceEvent: o });
            if (!l) return;
            o.preventDefault();
            var c = !0,
              u = l.snapLift();
            r.current();
            function f() {
              c || D(!1), (c = !1), r.current(), n();
            }
            r.current = we(window, Cd(u, f), { capture: !0, passive: !1 });
          },
        };
      },
      [e]
    ),
    n = R(
      function () {
        var o = { passive: !1, capture: !0 };
        r.current = we(window, [t], o);
      },
      [t]
    );
  be(
    function () {
      return (
        n(),
        function () {
          r.current();
        }
      );
    },
    [n]
  );
}
var Zt = { type: "IDLE" },
  Sd = 120,
  Ad = 0.15;
function Od(e) {
  var r = e.cancel,
    t = e.getPhase;
  return [
    { eventName: "orientationchange", fn: r },
    { eventName: "resize", fn: r },
    {
      eventName: "contextmenu",
      fn: function (a) {
        a.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: function (a) {
        if (t().type !== "DRAGGING") {
          r();
          return;
        }
        a.keyCode === Un && a.preventDefault(), r();
      },
    },
    { eventName: Ot, fn: r },
  ];
}
function Pd(e) {
  var r = e.cancel,
    t = e.completed,
    n = e.getPhase;
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: function (o) {
        var i = n();
        if (i.type !== "DRAGGING") {
          r();
          return;
        }
        i.hasMoved = !0;
        var l = o.touches[0],
          c = l.clientX,
          u = l.clientY,
          f = { x: c, y: u };
        o.preventDefault(), i.actions.move(f);
      },
    },
    {
      eventName: "touchend",
      fn: function (o) {
        var i = n();
        if (i.type !== "DRAGGING") {
          r();
          return;
        }
        o.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), t();
      },
    },
    {
      eventName: "touchcancel",
      fn: function (o) {
        if (n().type !== "DRAGGING") {
          r();
          return;
        }
        o.preventDefault(), r();
      },
    },
    {
      eventName: "touchforcechange",
      fn: function (o) {
        var i = n();
        i.type === "IDLE" && D(!1);
        var l = o.touches[0];
        if (!!l) {
          var c = l.force >= Ad;
          if (!!c) {
            var u = i.actions.shouldRespectForcePress();
            if (i.type === "PENDING") {
              u && r();
              return;
            }
            if (u) {
              if (i.hasMoved) {
                o.preventDefault();
                return;
              }
              r();
              return;
            }
            o.preventDefault();
          }
        }
      },
    },
    { eventName: Ot, fn: r },
  ];
}
function Fd(e) {
  var r = v.exports.useRef(Zt),
    t = v.exports.useRef(ze),
    n = R(function () {
      return r.current;
    }, []),
    a = R(function (m) {
      r.current = m;
    }, []),
    o = U(
      function () {
        return {
          eventName: "touchstart",
          fn: function (m) {
            if (!m.defaultPrevented) {
              var g = e.findClosestDraggableId(m);
              if (!!g) {
                var b = e.tryGetLock(g, l, { sourceEvent: m });
                if (!!b) {
                  var h = m.touches[0],
                    x = h.clientX,
                    y = h.clientY,
                    w = { x, y };
                  t.current(), d(b, w);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    i = R(
      function () {
        var m = { capture: !0, passive: !1 };
        t.current = we(window, [o], m);
      },
      [o]
    ),
    l = R(
      function () {
        var p = r.current;
        p.type !== "IDLE" &&
          (p.type === "PENDING" && clearTimeout(p.longPressTimerId),
          a(Zt),
          t.current(),
          i());
      },
      [i, a]
    ),
    c = R(
      function () {
        var p = r.current;
        l(),
          p.type === "DRAGGING" &&
            p.actions.cancel({ shouldBlockNextClick: !0 }),
          p.type === "PENDING" && p.actions.abort();
      },
      [l]
    ),
    u = R(
      function () {
        var m = { capture: !0, passive: !1 },
          g = { cancel: c, completed: l, getPhase: n },
          b = we(window, Pd(g), m),
          h = we(window, Od(g), m);
        t.current = function () {
          b(), h();
        };
      },
      [c, n, l]
    ),
    f = R(
      function () {
        var m = n();
        m.type !== "PENDING" && D(!1);
        var g = m.actions.fluidLift(m.point);
        a({ type: "DRAGGING", actions: g, hasMoved: !1 });
      },
      [n, a]
    ),
    d = R(
      function (m, g) {
        n().type !== "IDLE" && D(!1);
        var b = setTimeout(f, Sd);
        a({ type: "PENDING", point: g, actions: m, longPressTimerId: b }), u();
      },
      [u, n, a, f]
    );
  be(
    function () {
      return (
        i(),
        function () {
          t.current();
          var g = n();
          g.type === "PENDING" && (clearTimeout(g.longPressTimerId), a(Zt));
        }
      );
    },
    [n, i, a]
  ),
    be(function () {
      var m = we(window, [
        {
          eventName: "touchmove",
          fn: function () {},
          options: { capture: !1, passive: !1 },
        },
      ]);
      return m;
    }, []);
}
var Nd = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function fi(e, r) {
  if (r == null) return !1;
  var t = Boolean(Nd[r.tagName.toLowerCase()]);
  if (t) return !0;
  var n = r.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : r === e ? !1 : fi(e, r.parentElement);
}
function Rd(e, r) {
  var t = r.target;
  return St(t) ? fi(e, t) : !1;
}
var Bd = function (e) {
  return Ae(e.getBoundingClientRect()).center;
};
function Td(e) {
  return e instanceof si(e).Element;
}
var kd = (function () {
  var e = "matches";
  if (typeof document > "u") return e;
  var r = [e, "msMatchesSelector", "webkitMatchesSelector"],
    t = He(r, function (n) {
      return n in Element.prototype;
    });
  return t || e;
})();
function mi(e, r) {
  return e == null ? null : e[kd](r) ? e : mi(e.parentElement, r);
}
function Md(e, r) {
  return e.closest ? e.closest(r) : mi(e, r);
}
function Ld(e) {
  return "[" + sr.contextId + '="' + e + '"]';
}
function $d(e, r) {
  var t = r.target;
  if (!Td(t)) return null;
  var n = Ld(e),
    a = Md(t, n);
  return !a || !St(a) ? null : a;
}
function Gd(e, r) {
  var t = $d(e, r);
  return t ? t.getAttribute(sr.draggableId) : null;
}
function zd(e, r) {
  var t = "[" + cn.contextId + '="' + e + '"]',
    n = Fo(document.querySelectorAll(t)),
    a = He(n, function (o) {
      return o.getAttribute(cn.id) === r;
    });
  return !a || !St(a) ? null : a;
}
function jd(e) {
  e.preventDefault();
}
function _r(e) {
  var r = e.expected,
    t = e.phase,
    n = e.isLockActive;
  return e.shouldWarn, !(!n() || r !== t);
}
function gi(e) {
  var r = e.lockAPI,
    t = e.store,
    n = e.registry,
    a = e.draggableId;
  if (r.isClaimed()) return !1;
  var o = n.draggable.findById(a);
  return !(!o || !o.options.isEnabled || !ai(t.getState(), a));
}
function qd(e) {
  var r = e.lockAPI,
    t = e.contextId,
    n = e.store,
    a = e.registry,
    o = e.draggableId,
    i = e.forceSensorStop,
    l = e.sourceEvent,
    c = gi({ lockAPI: r, store: n, registry: a, draggableId: o });
  if (!c) return null;
  var u = a.draggable.getById(o),
    f = zd(t, u.descriptor.id);
  if (!f || (l && !u.options.canDragInteractiveElements && Rd(f, l)))
    return null;
  var d = r.claim(i || ze),
    p = "PRE_DRAG";
  function m() {
    return u.options.shouldRespectForcePress;
  }
  function g() {
    return r.isActive(d);
  }
  function b(C, N) {
    _r({ expected: C, phase: p, isLockActive: g, shouldWarn: !0 }) &&
      n.dispatch(N());
  }
  var h = b.bind(null, "DRAGGING");
  function x(C) {
    function N() {
      r.release(), (p = "COMPLETED");
    }
    p !== "PRE_DRAG" && (N(), p !== "PRE_DRAG" && D(!1)),
      n.dispatch(kc(C.liftActionArgs)),
      (p = "DRAGGING");
    function B(M, k) {
      if (
        (k === void 0 && (k = { shouldBlockNextClick: !1 }),
        C.cleanup(),
        k.shouldBlockNextClick)
      ) {
        var S = we(window, [
          {
            eventName: "click",
            fn: jd,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(S);
      }
      N(), n.dispatch(Zo({ reason: M }));
    }
    return P(
      {
        isActive: function () {
          return _r({
            expected: "DRAGGING",
            phase: p,
            isLockActive: g,
            shouldWarn: !1,
          });
        },
        shouldRespectForcePress: m,
        drop: function (k) {
          return B("DROP", k);
        },
        cancel: function (k) {
          return B("CANCEL", k);
        },
      },
      C.actions
    );
  }
  function y(C) {
    var N = Sr(function (M) {
        h(function () {
          return Xo({ client: M });
        });
      }),
      B = x({
        liftActionArgs: { id: o, clientSelection: C, movementMode: "FLUID" },
        cleanup: function () {
          return N.cancel();
        },
        actions: { move: N },
      });
    return P({}, B, { move: N });
  }
  function w() {
    var C = {
      moveUp: function () {
        return h(Hc);
      },
      moveRight: function () {
        return h(Vc);
      },
      moveDown: function () {
        return h(Uc);
      },
      moveLeft: function () {
        return h(Kc);
      },
    };
    return x({
      liftActionArgs: { id: o, clientSelection: Bd(f), movementMode: "SNAP" },
      cleanup: ze,
      actions: C,
    });
  }
  function E() {
    var C = _r({
      expected: "PRE_DRAG",
      phase: p,
      isLockActive: g,
      shouldWarn: !0,
    });
    C && r.release();
  }
  var I = {
    isActive: function () {
      return _r({
        expected: "PRE_DRAG",
        phase: p,
        isLockActive: g,
        shouldWarn: !1,
      });
    },
    shouldRespectForcePress: m,
    fluidLift: y,
    snapLift: w,
    abort: E,
  };
  return I;
}
var Wd = [Ed, Id, Fd];
function Hd(e) {
  var r = e.contextId,
    t = e.store,
    n = e.registry,
    a = e.customSensors,
    o = e.enableDefaultSensors,
    i = [].concat(o ? Wd : [], a || []),
    l = v.exports.useState(function () {
      return ld();
    })[0],
    c = R(
      function (y, w) {
        y.isDragging && !w.isDragging && l.tryAbandon();
      },
      [l]
    );
  be(
    function () {
      var y = t.getState(),
        w = t.subscribe(function () {
          var E = t.getState();
          c(y, E), (y = E);
        });
      return w;
    },
    [l, t, c]
  ),
    be(
      function () {
        return l.tryAbandon;
      },
      [l.tryAbandon]
    );
  for (
    var u = R(
        function (x) {
          return gi({ lockAPI: l, registry: n, store: t, draggableId: x });
        },
        [l, n, t]
      ),
      f = R(
        function (x, y, w) {
          return qd({
            lockAPI: l,
            registry: n,
            contextId: r,
            store: t,
            draggableId: x,
            forceSensorStop: y,
            sourceEvent: w && w.sourceEvent ? w.sourceEvent : null,
          });
        },
        [r, l, n, t]
      ),
      d = R(
        function (x) {
          return Gd(r, x);
        },
        [r]
      ),
      p = R(
        function (x) {
          var y = n.draggable.findById(x);
          return y ? y.options : null;
        },
        [n.draggable]
      ),
      m = R(
        function () {
          !l.isClaimed() ||
            (l.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(kn()));
        },
        [l, t]
      ),
      g = R(l.isClaimed, [l]),
      b = U(
        function () {
          return {
            canGetLock: u,
            tryGetLock: f,
            findClosestDraggableId: d,
            findOptionsForDraggable: p,
            tryReleaseLock: m,
            isLockClaimed: g,
          };
        },
        [u, f, d, p, m, g]
      ),
      h = 0;
    h < i.length;
    h++
  )
    i[h](b);
}
var Ud = function (r) {
  return {
    onBeforeCapture: r.onBeforeCapture,
    onBeforeDragStart: r.onBeforeDragStart,
    onDragStart: r.onDragStart,
    onDragEnd: r.onDragEnd,
    onDragUpdate: r.onDragUpdate,
  };
};
function wr(e) {
  return e.current || D(!1), e.current;
}
function Vd(e) {
  var r = e.contextId,
    t = e.setCallbacks,
    n = e.sensors,
    a = e.nonce,
    o = e.dragHandleUsageInstructions,
    i = v.exports.useRef(null),
    l = ci(e),
    c = R(
      function () {
        return Ud(l.current);
      },
      [l]
    ),
    u = td(r),
    f = id({ contextId: r, text: o }),
    d = Ju(r, a),
    p = R(function (M) {
      wr(i).dispatch(M);
    }, []),
    m = U(
      function () {
        return la(
          {
            publishWhileDragging: Lc,
            updateDroppableScroll: Gc,
            updateDroppableIsEnabled: zc,
            updateDroppableIsCombineEnabled: jc,
            collectionStarting: $c,
          },
          p
        );
      },
      [p]
    ),
    g = _u(),
    b = U(
      function () {
        return Au(g, m);
      },
      [g, m]
    ),
    h = U(
      function () {
        return Hu(
          P(
            { scrollWindow: Ou, scrollDroppable: b.scrollDroppable },
            la({ move: Xo }, p)
          )
        );
      },
      [b.scrollDroppable, p]
    ),
    x = Zu(r),
    y = U(
      function () {
        return Du({
          announce: u,
          autoScroller: h,
          dimensionMarshal: b,
          focusMarshal: x,
          getResponders: c,
          styleMarshal: d,
        });
      },
      [u, h, b, x, c, d]
    );
  i.current = y;
  var w = R(function () {
      var M = wr(i),
        k = M.getState();
      k.phase !== "IDLE" && M.dispatch(kn());
    }, []),
    E = R(function () {
      var M = wr(i).getState();
      return M.isDragging || M.phase === "DROP_ANIMATING";
    }, []),
    I = U(
      function () {
        return { isDragging: E, tryAbort: w };
      },
      [E, w]
    );
  t(I);
  var C = R(function (M) {
      return ai(wr(i).getState(), M);
    }, []),
    N = R(function () {
      return Ye(wr(i).getState());
    }, []),
    B = U(
      function () {
        return {
          marshal: b,
          focus: x,
          contextId: r,
          canLift: C,
          isMovementAllowed: N,
          dragHandleUsageInstructionsId: f,
          registry: g,
        };
      },
      [r, b, f, x, C, N, g]
    );
  return (
    Hd({
      contextId: r,
      store: y,
      registry: g,
      customSensors: n,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    v.exports.useEffect(
      function () {
        return w;
      },
      [w]
    ),
    s.createElement(
      At.Provider,
      { value: B },
      s.createElement(Fl, { context: Wn, store: y }, e.children)
    )
  );
}
var Kd = 0;
function Yd() {
  return U(function () {
    return "" + Kd++;
  }, []);
}
function vi(e) {
  var r = Yd(),
    t = e.dragHandleUsageInstructions || it.dragHandleUsageInstructions;
  return s.createElement(Is, null, function (n) {
    return s.createElement(
      Vd,
      {
        nonce: e.nonce,
        contextId: r,
        setCallbacks: n,
        dragHandleUsageInstructions: t,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
      },
      e.children
    );
  });
}
var bi = function (r) {
    return function (t) {
      return r === t;
    };
  },
  Jd = bi("scroll"),
  Xd = bi("auto"),
  Ta = function (r, t) {
    return t(r.overflowX) || t(r.overflowY);
  },
  Zd = function (r) {
    var t = window.getComputedStyle(r),
      n = { overflowX: t.overflowX, overflowY: t.overflowY };
    return Ta(n, Jd) || Ta(n, Xd);
  },
  Qd = function () {
    return !1;
  },
  _d = function e(r) {
    return r == null
      ? null
      : r === document.body
      ? Qd()
        ? r
        : null
      : r === document.documentElement
      ? null
      : Zd(r)
      ? r
      : e(r.parentElement);
  },
  un = function (e) {
    return { x: e.scrollLeft, y: e.scrollTop };
  },
  ep = function e(r) {
    if (!r) return !1;
    var t = window.getComputedStyle(r);
    return t.position === "fixed" ? !0 : e(r.parentElement);
  },
  rp = function (e) {
    var r = _d(e),
      t = ep(e);
    return { closestScrollable: r, isFixedOnPage: t };
  },
  tp = function (e) {
    var r = e.descriptor,
      t = e.isEnabled,
      n = e.isCombineEnabled,
      a = e.isFixedOnPage,
      o = e.direction,
      i = e.client,
      l = e.page,
      c = e.closest,
      u = (function () {
        if (!c) return null;
        var m = c.scrollSize,
          g = c.client,
          b = ri({
            scrollHeight: m.scrollHeight,
            scrollWidth: m.scrollWidth,
            height: g.paddingBox.height,
            width: g.paddingBox.width,
          });
        return {
          pageMarginBox: c.page.marginBox,
          frameClient: g,
          scrollSize: m,
          shouldClipSubject: c.shouldClipSubject,
          scroll: {
            initial: c.scroll,
            current: c.scroll,
            max: b,
            diff: { value: oe, displacement: oe },
          },
        };
      })(),
      f = o === "vertical" ? Fn : ko,
      d = ir({ page: l, withPlaceholder: null, axis: f, frame: u }),
      p = {
        descriptor: r,
        isCombineEnabled: n,
        isFixedOnPage: a,
        axis: f,
        isEnabled: t,
        client: i,
        page: l,
        frame: u,
        subject: d,
      };
    return p;
  },
  np = function (r, t) {
    var n = Io(r);
    if (!t || r !== t) return n;
    var a = n.paddingBox.top - t.scrollTop,
      o = n.paddingBox.left - t.scrollLeft,
      i = a + t.scrollHeight,
      l = o + t.scrollWidth,
      c = { top: a, right: l, bottom: i, left: o },
      u = In(c, n.border),
      f = Sn({
        borderBox: u,
        margin: n.margin,
        border: n.border,
        padding: n.padding,
      });
    return f;
  },
  ap = function (e) {
    var r = e.ref,
      t = e.descriptor,
      n = e.env,
      a = e.windowScroll,
      o = e.direction,
      i = e.isDropDisabled,
      l = e.isCombineEnabled,
      c = e.shouldClipSubject,
      u = n.closestScrollable,
      f = np(r, u),
      d = ct(f, a),
      p = (function () {
        if (!u) return null;
        var g = Io(u),
          b = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth };
        return {
          client: g,
          page: ct(g, a),
          scroll: un(u),
          scrollSize: b,
          shouldClipSubject: c,
        };
      })(),
      m = tp({
        descriptor: t,
        isEnabled: !i,
        isCombineEnabled: l,
        isFixedOnPage: n.isFixedOnPage,
        direction: o,
        client: f,
        page: d,
        closest: p,
      });
    return m;
  },
  op = { passive: !1 },
  ip = { passive: !0 },
  ka = function (e) {
    return e.shouldPublishImmediately ? op : ip;
  };
function gt(e) {
  var r = v.exports.useContext(e);
  return r || D(!1), r;
}
var et = function (r) {
  return (r && r.env.closestScrollable) || null;
};
function lp(e) {
  var r = v.exports.useRef(null),
    t = gt(At),
    n = Hn("droppable"),
    a = t.registry,
    o = t.marshal,
    i = ci(e),
    l = U(
      function () {
        return { id: e.droppableId, type: e.type, mode: e.mode };
      },
      [e.droppableId, e.mode, e.type]
    ),
    c = v.exports.useRef(l),
    u = U(
      function () {
        return ae(function (E, I) {
          r.current || D(!1);
          var C = { x: E, y: I };
          o.updateDroppableScroll(l.id, C);
        });
      },
      [l.id, o]
    ),
    f = R(function () {
      var E = r.current;
      return !E || !E.env.closestScrollable ? oe : un(E.env.closestScrollable);
    }, []),
    d = R(
      function () {
        var E = f();
        u(E.x, E.y);
      },
      [f, u]
    ),
    p = U(
      function () {
        return Sr(d);
      },
      [d]
    ),
    m = R(
      function () {
        var E = r.current,
          I = et(E);
        (E && I) || D(!1);
        var C = E.scrollOptions;
        if (C.shouldPublishImmediately) {
          d();
          return;
        }
        p();
      },
      [p, d]
    ),
    g = R(
      function (E, I) {
        r.current && D(!1);
        var C = i.current,
          N = C.getDroppableRef();
        N || D(!1);
        var B = rp(N),
          M = { ref: N, descriptor: l, env: B, scrollOptions: I };
        r.current = M;
        var k = ap({
            ref: N,
            descriptor: l,
            env: B,
            windowScroll: E,
            direction: C.direction,
            isDropDisabled: C.isDropDisabled,
            isCombineEnabled: C.isCombineEnabled,
            shouldClipSubject: !C.ignoreContainerClipping,
          }),
          S = B.closestScrollable;
        return (
          S &&
            (S.setAttribute(Fa.contextId, t.contextId),
            S.addEventListener("scroll", m, ka(M.scrollOptions))),
          k
        );
      },
      [t.contextId, l, m, i]
    ),
    b = R(function () {
      var E = r.current,
        I = et(E);
      return (E && I) || D(!1), un(I);
    }, []),
    h = R(
      function () {
        var E = r.current;
        E || D(!1);
        var I = et(E);
        (r.current = null),
          I &&
            (p.cancel(),
            I.removeAttribute(Fa.contextId),
            I.removeEventListener("scroll", m, ka(E.scrollOptions)));
      },
      [m, p]
    ),
    x = R(function (E) {
      var I = r.current;
      I || D(!1);
      var C = et(I);
      C || D(!1), (C.scrollTop += E.y), (C.scrollLeft += E.x);
    }, []),
    y = U(
      function () {
        return {
          getDimensionAndWatchScroll: g,
          getScrollWhileDragging: b,
          dragStopped: h,
          scroll: x,
        };
      },
      [h, g, b, x]
    ),
    w = U(
      function () {
        return { uniqueId: n, descriptor: l, callbacks: y };
      },
      [y, l, n]
    );
  be(
    function () {
      return (
        (c.current = w.descriptor),
        a.droppable.register(w),
        function () {
          r.current && h(), a.droppable.unregister(w);
        }
      );
    },
    [y, l, h, w, o, a.droppable]
  ),
    be(
      function () {
        !r.current ||
          o.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
      },
      [e.isDropDisabled, o]
    ),
    be(
      function () {
        !r.current ||
          o.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
      },
      [e.isCombineEnabled, o]
    );
}
function Qt() {}
var Ma = { width: 0, height: 0, margin: Ns },
  sp = function (r) {
    var t = r.isAnimatingOpenOnMount,
      n = r.placeholder,
      a = r.animate;
    return t || a === "close"
      ? Ma
      : {
          height: n.client.borderBox.height,
          width: n.client.borderBox.width,
          margin: n.client.margin,
        };
  },
  cp = function (r) {
    var t = r.isAnimatingOpenOnMount,
      n = r.placeholder,
      a = r.animate,
      o = sp({ isAnimatingOpenOnMount: t, placeholder: n, animate: a });
    return {
      display: n.display,
      boxSizing: "border-box",
      width: o.width,
      height: o.height,
      marginTop: o.margin.top,
      marginRight: o.margin.right,
      marginBottom: o.margin.bottom,
      marginLeft: o.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: a !== "none" ? Ir.placeholder : null,
    };
  };
function up(e) {
  var r = v.exports.useRef(null),
    t = R(function () {
      !r.current || (clearTimeout(r.current), (r.current = null));
    }, []),
    n = e.animate,
    a = e.onTransitionEnd,
    o = e.onClose,
    i = e.contextId,
    l = v.exports.useState(e.animate === "open"),
    c = l[0],
    u = l[1];
  v.exports.useEffect(
    function () {
      return c
        ? n !== "open"
          ? (t(), u(!1), Qt)
          : r.current
          ? Qt
          : ((r.current = setTimeout(function () {
              (r.current = null), u(!1);
            })),
            t)
        : Qt;
    },
    [n, c, t]
  );
  var f = R(
      function (p) {
        p.propertyName === "height" && (a(), n === "close" && o());
      },
      [n, o, a]
    ),
    d = cp({
      isAnimatingOpenOnMount: c,
      animate: e.animate,
      placeholder: e.placeholder,
    });
  return s.createElement(e.placeholder.tagName, {
    style: d,
    "data-rbd-placeholder-context-id": i,
    onTransitionEnd: f,
    ref: e.innerRef,
  });
}
var dp = s.memo(up),
  Vn = s.createContext(null),
  pp = (function (e) {
    _a(r, e);
    function r() {
      for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        (n.state = {
          isVisible: Boolean(n.props.on),
          data: n.props.on,
          animate: n.props.shouldAnimate && n.props.on ? "open" : "none",
        }),
        (n.onClose = function () {
          n.state.animate === "close" && n.setState({ isVisible: !1 });
        }),
        n
      );
    }
    r.getDerivedStateFromProps = function (a, o) {
      return a.shouldAnimate
        ? a.on
          ? { isVisible: !0, data: a.on, animate: "open" }
          : o.isVisible
          ? { isVisible: !0, data: o.data, animate: "close" }
          : { isVisible: !1, animate: "close", data: null }
        : { isVisible: Boolean(a.on), data: a.on, animate: "none" };
    };
    var t = r.prototype;
    return (
      (t.render = function () {
        if (!this.state.isVisible) return null;
        var a = {
          onClose: this.onClose,
          data: this.state.data,
          animate: this.state.animate,
        };
        return this.props.children(a);
      }),
      r
    );
  })(s.PureComponent),
  La = { dragging: 5e3, dropAnimating: 4500 },
  fp = function (r, t) {
    return t ? Ir.drop(t.duration) : r ? Ir.snap : Ir.fluid;
  },
  mp = function (r, t) {
    return r ? (t ? Fr.opacity.drop : Fr.opacity.combining) : null;
  },
  gp = function (r) {
    return r.forceShouldAnimate != null
      ? r.forceShouldAnimate
      : r.mode === "SNAP";
  };
function vp(e) {
  var r = e.dimension,
    t = r.client,
    n = e.offset,
    a = e.combineWith,
    o = e.dropping,
    i = Boolean(a),
    l = gp(e),
    c = Boolean(o),
    u = c ? ln.drop(n, i) : ln.moveTo(n),
    f = {
      position: "fixed",
      top: t.marginBox.top,
      left: t.marginBox.left,
      boxSizing: "border-box",
      width: t.borderBox.width,
      height: t.borderBox.height,
      transition: fp(l, o),
      transform: u,
      opacity: mp(i, c),
      zIndex: c ? La.dropAnimating : La.dragging,
      pointerEvents: "none",
    };
  return f;
}
function bp(e) {
  return {
    transform: ln.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none",
  };
}
function hp(e) {
  return e.type === "DRAGGING" ? vp(e) : bp(e);
}
function xp(e, r, t) {
  t === void 0 && (t = oe);
  var n = window.getComputedStyle(r),
    a = r.getBoundingClientRect(),
    o = Co(a, n),
    i = ct(o, t),
    l = { client: o, tagName: r.tagName.toLowerCase(), display: n.display },
    c = { x: o.marginBox.width, y: o.marginBox.height },
    u = { descriptor: e, placeholder: l, displaceBy: c, client: o, page: i };
  return u;
}
function yp(e) {
  var r = Hn("draggable"),
    t = e.descriptor,
    n = e.registry,
    a = e.getDraggableRef,
    o = e.canDragInteractiveElements,
    i = e.shouldRespectForcePress,
    l = e.isEnabled,
    c = U(
      function () {
        return {
          canDragInteractiveElements: o,
          shouldRespectForcePress: i,
          isEnabled: l,
        };
      },
      [o, l, i]
    ),
    u = R(
      function (m) {
        var g = a();
        return g || D(!1), xp(t, g, m);
      },
      [t, a]
    ),
    f = U(
      function () {
        return { uniqueId: r, descriptor: t, options: c, getDimension: u };
      },
      [t, u, c, r]
    ),
    d = v.exports.useRef(f),
    p = v.exports.useRef(!0);
  be(
    function () {
      return (
        n.draggable.register(d.current),
        function () {
          return n.draggable.unregister(d.current);
        }
      );
    },
    [n.draggable]
  ),
    be(
      function () {
        if (p.current) {
          p.current = !1;
          return;
        }
        var m = d.current;
        (d.current = f), n.draggable.update(f, m);
      },
      [f, n.draggable]
    );
}
function Ep(e) {
  e.preventDefault();
}
function wp(e) {
  var r = v.exports.useRef(null),
    t = R(function (M) {
      r.current = M;
    }, []),
    n = R(function () {
      return r.current;
    }, []),
    a = gt(At),
    o = a.contextId,
    i = a.dragHandleUsageInstructionsId,
    l = a.registry,
    c = gt(Vn),
    u = c.type,
    f = c.droppableId,
    d = U(
      function () {
        return { id: e.draggableId, index: e.index, type: u, droppableId: f };
      },
      [e.draggableId, e.index, u, f]
    ),
    p = e.children,
    m = e.draggableId,
    g = e.isEnabled,
    b = e.shouldRespectForcePress,
    h = e.canDragInteractiveElements,
    x = e.isClone,
    y = e.mapped,
    w = e.dropAnimationFinished;
  if (!x) {
    var E = U(
      function () {
        return {
          descriptor: d,
          registry: l,
          getDraggableRef: n,
          canDragInteractiveElements: h,
          shouldRespectForcePress: b,
          isEnabled: g,
        };
      },
      [d, l, n, h, b, g]
    );
    yp(E);
  }
  var I = U(
      function () {
        return g
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": i,
              "data-rbd-drag-handle-draggable-id": m,
              "data-rbd-drag-handle-context-id": o,
              draggable: !1,
              onDragStart: Ep,
            }
          : null;
      },
      [o, i, m, g]
    ),
    C = R(
      function (M) {
        y.type === "DRAGGING" &&
          (!y.dropping || (M.propertyName === "transform" && w()));
      },
      [w, y]
    ),
    N = U(
      function () {
        var M = hp(y),
          k = y.type === "DRAGGING" && y.dropping ? C : null,
          S = {
            innerRef: t,
            draggableProps: {
              "data-rbd-draggable-context-id": o,
              "data-rbd-draggable-id": m,
              style: M,
              onTransitionEnd: k,
            },
            dragHandleProps: I,
          };
        return S;
      },
      [o, I, m, y, C, t]
    ),
    B = U(
      function () {
        return {
          draggableId: d.id,
          type: d.type,
          source: { index: d.index, droppableId: d.droppableId },
        };
      },
      [d.droppableId, d.id, d.index, d.type]
    );
  return p(N, y.snapshot, B);
}
var hi = function (e, r) {
    return e === r;
  },
  xi = function (e) {
    var r = e.combine,
      t = e.destination;
    return t ? t.droppableId : r ? r.droppableId : null;
  },
  Dp = function (r) {
    return r.combine ? r.combine.draggableId : null;
  },
  Cp = function (r) {
    return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null;
  };
function Ip() {
  var e = ae(function (a, o) {
      return { x: a, y: o };
    }),
    r = ae(function (a, o, i, l, c) {
      return {
        isDragging: !0,
        isClone: o,
        isDropAnimating: Boolean(c),
        dropAnimation: c,
        mode: a,
        draggingOver: i,
        combineWith: l,
        combineTargetFor: null,
      };
    }),
    t = ae(function (a, o, i, l, c, u, f) {
      return {
        mapped: {
          type: "DRAGGING",
          dropping: null,
          draggingOver: c,
          combineWith: u,
          mode: o,
          offset: a,
          dimension: i,
          forceShouldAnimate: f,
          snapshot: r(o, l, c, u, null),
        },
      };
    }),
    n = function (o, i) {
      if (o.isDragging) {
        if (o.critical.draggable.id !== i.draggableId) return null;
        var l = o.current.client.offset,
          c = o.dimensions.draggables[i.draggableId],
          u = ve(o.impact),
          f = Cp(o.impact),
          d = o.forceShouldAnimate;
        return t(e(l.x, l.y), o.movementMode, c, i.isClone, u, f, d);
      }
      if (o.phase === "DROP_ANIMATING") {
        var p = o.completed;
        if (p.result.draggableId !== i.draggableId) return null;
        var m = i.isClone,
          g = o.dimensions.draggables[i.draggableId],
          b = p.result,
          h = b.mode,
          x = xi(b),
          y = Dp(b),
          w = o.dropDuration,
          E = {
            duration: w,
            curve: Ln.drop,
            moveTo: o.newHomeClientOffset,
            opacity: y ? Fr.opacity.drop : null,
            scale: y ? Fr.scale.drop : null,
          };
        return {
          mapped: {
            type: "DRAGGING",
            offset: o.newHomeClientOffset,
            dimension: g,
            dropping: E,
            draggingOver: x,
            combineWith: y,
            mode: h,
            forceShouldAnimate: null,
            snapshot: r(h, m, x, y, E),
          },
        };
      }
      return null;
    };
  return n;
}
function yi(e) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
var Sp = {
  mapped: {
    type: "SECONDARY",
    offset: oe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yi(null),
  },
};
function Ap() {
  var e = ae(function (i, l) {
      return { x: i, y: l };
    }),
    r = ae(yi),
    t = ae(function (i, l, c) {
      return (
        l === void 0 && (l = null),
        {
          mapped: {
            type: "SECONDARY",
            offset: i,
            combineTargetFor: l,
            shouldAnimateDisplacement: c,
            snapshot: r(l),
          },
        }
      );
    }),
    n = function (l) {
      return l ? t(oe, l, !0) : null;
    },
    a = function (l, c, u, f) {
      var d = u.displaced.visible[l],
        p = Boolean(f.inVirtualList && f.effected[l]),
        m = Dt(u),
        g = m && m.draggableId === l ? c : null;
      if (!d) {
        if (!p) return n(g);
        if (u.displaced.invisible[l]) return null;
        var b = pr(f.displacedBy.point),
          h = e(b.x, b.y);
        return t(h, g, !0);
      }
      if (p) return n(g);
      var x = u.displacedBy.point,
        y = e(x.x, x.y);
      return t(y, g, d.shouldAnimate);
    },
    o = function (l, c) {
      if (l.isDragging)
        return l.critical.draggable.id === c.draggableId
          ? null
          : a(
              c.draggableId,
              l.critical.draggable.id,
              l.impact,
              l.afterCritical
            );
      if (l.phase === "DROP_ANIMATING") {
        var u = l.completed;
        return u.result.draggableId === c.draggableId
          ? null
          : a(c.draggableId, u.result.draggableId, u.impact, u.afterCritical);
      }
      return null;
    };
  return o;
}
var Op = function () {
    var r = Ip(),
      t = Ap(),
      n = function (o, i) {
        return r(o, i) || t(o, i) || Sp;
      };
    return n;
  },
  Pp = { dropAnimationFinished: Qo },
  Fp = wo(Op, Pp, null, { context: Wn, pure: !0, areStatePropsEqual: hi })(wp);
function Ei(e) {
  var r = gt(Vn),
    t = r.isUsingCloneFor;
  return t === e.draggableId && !e.isClone ? null : s.createElement(Fp, e);
}
function wi(e) {
  var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    t = Boolean(e.disableInteractiveElementBlocking),
    n = Boolean(e.shouldRespectForcePress);
  return s.createElement(
    Ei,
    P({}, e, {
      isClone: !1,
      isEnabled: r,
      canDragInteractiveElements: t,
      shouldRespectForcePress: n,
    })
  );
}
function Np(e) {
  var r = v.exports.useContext(At);
  r || D(!1);
  var t = r.contextId,
    n = r.isMovementAllowed,
    a = v.exports.useRef(null),
    o = v.exports.useRef(null),
    i = e.children,
    l = e.droppableId,
    c = e.type,
    u = e.mode,
    f = e.direction,
    d = e.ignoreContainerClipping,
    p = e.isDropDisabled,
    m = e.isCombineEnabled,
    g = e.snapshot,
    b = e.useClone,
    h = e.updateViewportMaxScroll,
    x = e.getContainerForClone,
    y = R(function () {
      return a.current;
    }, []),
    w = R(function (S) {
      a.current = S;
    }, []);
  R(function () {
    return o.current;
  }, []);
  var E = R(function (S) {
      o.current = S;
    }, []),
    I = R(
      function () {
        n() && h({ maxScroll: ni() });
      },
      [n, h]
    );
  lp({
    droppableId: l,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: p,
    isCombineEnabled: m,
    ignoreContainerClipping: d,
    getDroppableRef: y,
  });
  var C = s.createElement(
      pp,
      { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
      function (S) {
        var z = S.onClose,
          $ = S.data,
          L = S.animate;
        return s.createElement(dp, {
          placeholder: $,
          onClose: z,
          innerRef: E,
          animate: L,
          contextId: t,
          onTransitionEnd: I,
        });
      }
    ),
    N = U(
      function () {
        return {
          innerRef: w,
          placeholder: C,
          droppableProps: {
            "data-rbd-droppable-id": l,
            "data-rbd-droppable-context-id": t,
          },
        };
      },
      [t, l, C, w]
    ),
    B = b ? b.dragging.draggableId : null,
    M = U(
      function () {
        return { droppableId: l, type: c, isUsingCloneFor: B };
      },
      [l, B, c]
    );
  function k() {
    if (!b) return null;
    var S = b.dragging,
      z = b.render,
      $ = s.createElement(
        Ei,
        {
          draggableId: S.draggableId,
          index: S.source.index,
          isClone: !0,
          isEnabled: !0,
          shouldRespectForcePress: !1,
          canDragInteractiveElements: !0,
        },
        function (L, F) {
          return z(L, F, S);
        }
      );
    return zi.createPortal($, x());
  }
  return s.createElement(Vn.Provider, { value: M }, i(N, g), k());
}
var _t = function (r, t) {
    return r === t.droppable.type;
  },
  $a = function (r, t) {
    return t.draggables[r.draggable.id];
  },
  Rp = function () {
    var r = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      t = P({}, r, { shouldAnimatePlaceholder: !1 }),
      n = ae(function (i) {
        return {
          draggableId: i.id,
          type: i.type,
          source: { index: i.index, droppableId: i.droppableId },
        };
      }),
      a = ae(function (i, l, c, u, f, d) {
        var p = f.descriptor.id,
          m = f.descriptor.droppableId === i;
        if (m) {
          var g = d ? { render: d, dragging: n(f.descriptor) } : null,
            b = {
              isDraggingOver: c,
              draggingOverWith: c ? p : null,
              draggingFromThisWith: p,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: f.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: b,
            useClone: g,
          };
        }
        if (!l) return t;
        if (!u) return r;
        var h = {
          isDraggingOver: c,
          draggingOverWith: p,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: f.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: h,
          useClone: null,
        };
      }),
      o = function (l, c) {
        var u = c.droppableId,
          f = c.type,
          d = !c.isDropDisabled,
          p = c.renderClone;
        if (l.isDragging) {
          var m = l.critical;
          if (!_t(f, m)) return t;
          var g = $a(m, l.dimensions),
            b = ve(l.impact) === u;
          return a(u, d, b, b, g, p);
        }
        if (l.phase === "DROP_ANIMATING") {
          var h = l.completed;
          if (!_t(f, h.critical)) return t;
          var x = $a(h.critical, l.dimensions);
          return a(u, d, xi(h.result) === u, ve(h.impact) === u, x, p);
        }
        if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
          var y = l.completed;
          if (!_t(f, y.critical)) return t;
          var w = ve(y.impact) === u,
            E = Boolean(y.impact.at && y.impact.at.type === "COMBINE"),
            I = y.critical.droppable.id === u;
          return w ? (E ? r : t) : I ? r : t;
        }
        return t;
      };
    return o;
  },
  Bp = { updateViewportMaxScroll: Wc };
function Tp() {
  return document.body || D(!1), document.body;
}
var kp = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Tp,
  },
  Kn = wo(Rp, Bp, null, { context: Wn, pure: !0, areStatePropsEqual: hi })(Np);
Kn.defaultProps = kp;
function Mp(e) {
  return ji({
    tag: "svg",
    attr: { viewBox: "0 0 16 16", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.495 9.052l.891 2.35h1.091L6.237 3h-1.02L2 11.402h1.095l.838-2.35h3.562zM5.811 4.453l.044.135 1.318 3.574H4.255l1.307-3.574.044-.135.038-.156.032-.152.021-.126h.023l.024.126.029.152.038.156zm7.984 6.011v.936h.96V7.498c0-.719-.18-1.272-.539-1.661-.359-.389-.889-.583-1.588-.583-.199 0-.401.019-.606.056a4.875 4.875 0 0 0-1.078.326 2.081 2.081 0 0 0-.343.188v.984c.266-.23.566-.411.904-.54a2.927 2.927 0 0 1 1.052-.193c.188 0 .358.028.513.085a.98.98 0 0 1 .396.267c.109.121.193.279.252.472.059.193.088.427.088.7l-1.811.252c-.344.047-.64.126-.888.237a1.947 1.947 0 0 0-.615.419 1.6 1.6 0 0 0-.36.58 2.134 2.134 0 0 0-.117.721c0 .246.042.475.124.688.082.213.203.397.363.551.16.154.36.276.598.366.238.09.513.135.826.135.402 0 .76-.092 1.075-.278.315-.186.572-.454.771-.806h.023zm-2.128-1.743c.176-.064.401-.114.674-.149l1.465-.205v.609c0 .246-.041.475-.123.688a1.727 1.727 0 0 1-.343.557 1.573 1.573 0 0 1-.524.372 1.63 1.63 0 0 1-.668.135c-.187 0-.353-.025-.495-.076a1.03 1.03 0 0 1-.357-.211.896.896 0 0 1-.22-.316A1.005 1.005 0 0 1 11 9.732a1.6 1.6 0 0 1 .055-.44.739.739 0 0 1 .202-.334 1.16 1.16 0 0 1 .41-.237z",
        },
      },
    ],
  })(e);
}
const Lp = re.div`
  width: 24rem;
  min-width: 13rem;
  height: 100%;
  max-height: 100vh;
  position: relative;
  overflow: auto;
  resize: horizontal;

  border-right: 1px solid var(--text-body);

  header {
    background: ${({ fill: e }) => (e != null ? e : T.blue)};
    width: 100%;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    display: grid;
    place-items: center;
    text-align: center;
    position: sticky;
    top: 0;
    span {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .searchIcon {
        cursor: pointer;
        background: ${T.background};
        fill: ${T.textTitle};
        padding: 0.2rem;
        border-radius: 50%;
      }
    }
  }
  .itemDraggableListContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    border-bottom: 1px solid var(--text-body);
    &.itemDraggableSelected {
      background: ${({ fill: e }) => e && q(0.8, e)};
    }
    .leftDotsIconContainer {
      width: 1rem;
      margin: 0 0.5rem;
      .leftDotsIcon {
        width: 1rem;
      }
    }
    button {
      min-width: 4rem;
      width: 100%;
      min-height: 3.25rem;
      background: transparent;
      border: 0;
      text-align: left;
      padding: 0 1rem;
      font-size: 1.15rem;
      color: var(--text-title);
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: ${q(0.9, T.textBody)};
      }
    }
  }
  #addFirstItemContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 1rem;
    span {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    #addFirstItemBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--triple-gradient);
      background-size: 250%;
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 100%;
      }
    }
    #addFirstFunnelBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--yellow);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
    }
    #addFirstTriggerBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--orange);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
    }
  }
`,
  $p = {
    audios: "\xC1udios",
    mensagens: "Mensagens",
    medias: "M\xEDdias",
    funis: "Funis",
    docs: "Documentos",
    triggers: "Gatilhos",
  };
function gr({ fill: e, itemType: r }) {
  const {
      selectedItem: t,
      setSelectedItem: n,
      selectedTrigger: a,
      selectedFunnel: o,
      setSelectedFunnel: i,
      setSelectedTrigger: l,
      getItemFromStorage: c,
      getFunnelFromStorage: u,
      getTriggerFromStorage: f,
      changeItemPosition: d,
      getFunnelName: p,
    } = ne(),
    { isDarkTheme: m } = he(),
    [g, b] = v.exports.useState(!0),
    { mensagensIndex: h, createNewMessage: x } = Rr(),
    { audiosIndex: y, createNewAudio: w } = Br(),
    { mediasIndex: E, createNewMedia: I } = Tr(),
    { docsIndex: C, createNewDoc: N } = kr(),
    { funnelsIndex: B, createNewFunnel: M } = Ze(),
    {
      triggersIndex: k,
      createNewTrigger: S,
      toggleEnabledTrigger: z,
      updateTriggerFunnelId: $,
    } = Mr(),
    [L, F] = v.exports.useState([]),
    [H, O] = v.exports.useState(""),
    V = { audios: y, mensagens: h, medias: E, docs: C, funis: B, triggers: k },
    K = { mensagens: x, audios: w, medias: I, funis: M, docs: N, triggers: S };
  v.exports.useEffect(() => {
    F(V[r]), b(!1);
  }, [r, h, y, E, C, B, k]);
  function Q(X, W) {
    r === "funis"
      ? u(X).then((ee) => {
          i(ee);
        })
      : r === "triggers"
      ? f(X).then((ee) => {
          l(ee);
        })
      : c(X).then((ee) => {
          n({ ...ee, id: X, type: r, name: W });
        });
  }
  function ce(X) {
    const { source: W, destination: ee } = X;
    !ee || W.index === ee.index || d(W.index, ee.index, r);
  }
  const [te, Pe] = v.exports.useState(!1);
  function Re() {
    te && O(""), Pe((X) => !X);
  }
  return (
    L[0],
    no(),
    s.createElement(
      Lp,
      { fill: e != null ? e : "" },
      s.createElement(
        "header",
        null,
        s.createElement(
          "span",
          null,
          "Gerenciamento de ",
          $p[r],
          " ",
          s.createElement(qi, { className: "searchIcon", onClick: Re })
        ),
        !!te &&
          s.createElement(sl, {
            value: H,
            onChange: (X) => O(X.target.value),
            autoFocus: !0,
          })
      ),
      g &&
        s.createElement(
          "div",
          {
            id: "loadingContainer",
            className: "w-ful h-full text-lg text-center pt-4",
          },
          "Carregando..."
        ),
      V && !g && (!L || L.length === 0)
        ? s.createElement(
            "div",
            { id: "addFirstItemContainer" },
            s.createElement(
              "span",
              null,
              "Nenhum",
              " ",
              r === "funis" ? "funil" : r === "triggers" ? "gatilho" : "item",
              " ",
              "cadastrado ainda, clique no bot\xE3o abaixo para adicionar seu primeiro"
            ),
            s.createElement(
              "button",
              {
                type: "button",
                id:
                  r === "funis"
                    ? "addFirstFunnelBtn"
                    : r === "triggers"
                    ? "addFirstTriggerBtn"
                    : "addFirstItemBtn",
                onClick: () => {
                  K[r]();
                },
              },
              "+ Novo",
              " ",
              r === "funis" ? "Funil" : r === "triggers" ? "Gatilho" : "Item"
            )
          )
        : s.createElement(
            vi,
            { onDragEnd: ce },
            s.createElement(Kn, { droppableId: "listedItems" }, (X) =>
              s.createElement(
                "div",
                { ...X.droppableProps, ref: X.innerRef },
                V &&
                  (L == null
                    ? void 0
                    : L.map(
                        (W, ee) =>
                          ra(W.name)
                            .toLowerCase()
                            .includes(ra(H).toLowerCase()) &&
                          s.createElement(
                            wi,
                            {
                              key: W.id,
                              draggableId: W.id,
                              index: ee,
                              isDragDisabled: H.length > 0,
                            },
                            (ue) =>
                              s.createElement(
                                "div",
                                {
                                  className: `itemDraggableListContainer ${
                                    (t == null ? void 0 : t.id) === W.id ||
                                    (o == null ? void 0 : o.id) === W.id ||
                                    (a == null ? void 0 : a.id) === W.id
                                      ? "itemDraggableSelected"
                                      : ""
                                  }`,
                                  ref: ue.innerRef,
                                  ...ue.draggableProps,
                                  ...ue.dragHandleProps,
                                  style: ue.draggableProps.style,
                                },
                                s.createElement(
                                  "div",
                                  { className: "leftDotsIconContainer" },
                                  s.createElement(ao, {
                                    className: "leftDotsIcon",
                                  })
                                ),
                                s.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    id: W.id,
                                    onClick: () => {
                                      Q(W.id, W.name);
                                    },
                                  },
                                  W.name,
                                  r === "triggers" &&
                                    W.type === "trigger" &&
                                    s.createElement(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between ml-4",
                                      },
                                      !W.ignoreCaseSensitive &&
                                        s.createElement(
                                          ye,
                                          {
                                            title:
                                              "Gatilho diferencia mai\xFAsculas de min\xFAsculas",
                                          },
                                          s.createElement(
                                            "div",
                                            { className: "w-6" },
                                            s.createElement(Mp, {
                                              className: Se(
                                                "w-full fill-zap-blue"
                                              ),
                                            })
                                          )
                                        ),
                                      !W.dontSendToGroups &&
                                        s.createElement(
                                          ye,
                                          {
                                            title:
                                              "Gatilho poder\xE1 ser disparado em grupos",
                                          },
                                          s.createElement(
                                            "div",
                                            { className: "w-6" },
                                            s.createElement(cl, {
                                              className: Se(
                                                "w-full fill-zap-red"
                                              ),
                                            })
                                          )
                                        ),
                                      !!W.dontSendToContact &&
                                        s.createElement(
                                          ye,
                                          {
                                            title:
                                              "Gatilho n\xE3o ser\xE1 enviado para contatos salvos",
                                          },
                                          s.createElement(
                                            "div",
                                            { className: "w-6" },
                                            s.createElement(Wi, {
                                              className: Se(
                                                "w-full fill-gray-400"
                                              ),
                                            })
                                          )
                                        ),
                                      s.createElement(
                                        ye,
                                        {
                                          title: W.funnelId
                                            ? `Funil: ${p(W.funnelId)}`
                                            : "Gatilho n\xE3o vinculado a um funil",
                                        },
                                        s.createElement(
                                          "div",
                                          { className: "w-6" },
                                          s.createElement(Hi, {
                                            className: Se("w-full", {
                                              "fill-zap-gold": !!W.funnelId,
                                              "fill-gray-400": !W.funnelId,
                                            }),
                                          })
                                        )
                                      ),
                                      s.createElement(
                                        ye,
                                        {
                                          title: W.enabled
                                            ? "Clique para desativar o gatilho"
                                            : "Clique para ativar o gatilho",
                                        },
                                        s.createElement(
                                          "div",
                                          null,
                                          s.createElement(ot, {
                                            zvTheme: m ? "dark" : "light",
                                            sx: { m: 1 },
                                            checked: !!W.enabled,
                                            onChange: () => {
                                              z(W.id);
                                            },
                                          })
                                        )
                                      )
                                    )
                                )
                              )
                          )
                      )),
                X.placeholder
              )
            )
          )
    )
  );
}
var Gp = new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"],
]);
function Yr(e, r) {
  var t = zp(e);
  if (typeof t.path != "string") {
    var n = e.webkitRelativePath;
    Object.defineProperty(t, "path", {
      value:
        typeof r == "string"
          ? r
          : typeof n == "string" && n.length > 0
          ? n
          : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0,
    });
  }
  return t;
}
function zp(e) {
  var r = e.name,
    t = r && r.lastIndexOf(".") !== -1;
  if (t && !e.type) {
    var n = r.split(".").pop().toLowerCase(),
      a = Gp.get(n);
    a &&
      Object.defineProperty(e, "type", {
        value: a,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
var jp = [".DS_Store", "Thumbs.db"];
function qp(e) {
  return cr(this, void 0, void 0, function () {
    return ur(this, function (r) {
      return vt(e) && Wp(e)
        ? [2, Kp(e.dataTransfer, e.type)]
        : Hp(e)
        ? [2, Up(e)]
        : Array.isArray(e) &&
          e.every(function (t) {
            return "getFile" in t && typeof t.getFile == "function";
          })
        ? [2, Vp(e)]
        : [2, []];
    });
  });
}
function Wp(e) {
  return vt(e.dataTransfer);
}
function Hp(e) {
  return vt(e) && vt(e.target);
}
function vt(e) {
  return typeof e == "object" && e !== null;
}
function Up(e) {
  return dn(e.target.files).map(function (r) {
    return Yr(r);
  });
}
function Vp(e) {
  return cr(this, void 0, void 0, function () {
    var r;
    return ur(this, function (t) {
      switch (t.label) {
        case 0:
          return [
            4,
            Promise.all(
              e.map(function (n) {
                return n.getFile();
              })
            ),
          ];
        case 1:
          return (
            (r = t.sent()),
            [
              2,
              r.map(function (n) {
                return Yr(n);
              }),
            ]
          );
      }
    });
  });
}
function Kp(e, r) {
  return cr(this, void 0, void 0, function () {
    var t, n;
    return ur(this, function (a) {
      switch (a.label) {
        case 0:
          return e === null
            ? [2, []]
            : e.items
            ? ((t = dn(e.items).filter(function (o) {
                return o.kind === "file";
              })),
              r !== "drop" ? [2, t] : [4, Promise.all(t.map(Yp))])
            : [3, 2];
        case 1:
          return (n = a.sent()), [2, Ga(Di(n))];
        case 2:
          return [
            2,
            Ga(
              dn(e.files).map(function (o) {
                return Yr(o);
              })
            ),
          ];
      }
    });
  });
}
function Ga(e) {
  return e.filter(function (r) {
    return jp.indexOf(r.name) === -1;
  });
}
function dn(e) {
  if (e === null) return [];
  for (var r = [], t = 0; t < e.length; t++) {
    var n = e[t];
    r.push(n);
  }
  return r;
}
function Yp(e) {
  if (typeof e.webkitGetAsEntry != "function") return za(e);
  var r = e.webkitGetAsEntry();
  return r && r.isDirectory ? Ci(r) : za(e);
}
function Di(e) {
  return e.reduce(function (r, t) {
    return El(r, Array.isArray(t) ? Di(t) : [t]);
  }, []);
}
function za(e) {
  var r = e.getAsFile();
  if (!r) return Promise.reject(e + " is not a File");
  var t = Yr(r);
  return Promise.resolve(t);
}
function Jp(e) {
  return cr(this, void 0, void 0, function () {
    return ur(this, function (r) {
      return [2, e.isDirectory ? Ci(e) : Xp(e)];
    });
  });
}
function Ci(e) {
  var r = e.createReader();
  return new Promise(function (t, n) {
    var a = [];
    function o() {
      var i = this;
      r.readEntries(
        function (l) {
          return cr(i, void 0, void 0, function () {
            var c, u, f;
            return ur(this, function (d) {
              switch (d.label) {
                case 0:
                  if (l.length) return [3, 5];
                  d.label = 1;
                case 1:
                  return d.trys.push([1, 3, , 4]), [4, Promise.all(a)];
                case 2:
                  return (c = d.sent()), t(c), [3, 4];
                case 3:
                  return (u = d.sent()), n(u), [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  (f = Promise.all(l.map(Jp))), a.push(f), o(), (d.label = 6);
                case 6:
                  return [2];
              }
            });
          });
        },
        function (l) {
          n(l);
        }
      );
    }
    o();
  });
}
function Xp(e) {
  return cr(this, void 0, void 0, function () {
    return ur(this, function (r) {
      return [
        2,
        new Promise(function (t, n) {
          e.file(
            function (a) {
              var o = Yr(a, e.fullPath);
              t(o);
            },
            function (a) {
              n(a);
            }
          );
        }),
      ];
    });
  });
}
var Zp = function (e, r) {
  if (e && r) {
    var t = Array.isArray(r) ? r : r.split(","),
      n = e.name || "",
      a = (e.type || "").toLowerCase(),
      o = a.replace(/\/.*$/, "");
    return t.some(function (i) {
      var l = i.trim().toLowerCase();
      return l.charAt(0) === "."
        ? n.toLowerCase().endsWith(l)
        : l.endsWith("/*")
        ? o === l.replace(/\/.*$/, "")
        : a === l;
    });
  }
  return !0;
};
function ja(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function qa(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ja(Object(t), !0).forEach(function (n) {
          Ii(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ja(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function Ii(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function Wa(e, r) {
  return rf(e) || ef(e, r) || _p(e, r) || Qp();
}
function Qp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _p(e, r) {
  if (!!e) {
    if (typeof e == "string") return Ha(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === "Object" && e.constructor && (t = e.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ha(e, r);
  }
}
function Ha(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ef(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      l;
    try {
      for (
        t = t.call(e);
        !(a = (i = t.next()).done) && (n.push(i.value), !(r && n.length === r));
        a = !0
      );
    } catch (c) {
      (o = !0), (l = c);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function rf(e) {
  if (Array.isArray(e)) return e;
}
var tf = "file-invalid-type",
  nf = "file-too-large",
  af = "file-too-small",
  of = "too-many-files",
  lf = function (r) {
    r = Array.isArray(r) && r.length === 1 ? r[0] : r;
    var t = Array.isArray(r) ? "one of ".concat(r.join(", ")) : r;
    return { code: tf, message: "File type must be ".concat(t) };
  },
  Ua = function (r) {
    return {
      code: nf,
      message: "File is larger than "
        .concat(r, " ")
        .concat(r === 1 ? "byte" : "bytes"),
    };
  },
  Va = function (r) {
    return {
      code: af,
      message: "File is smaller than "
        .concat(r, " ")
        .concat(r === 1 ? "byte" : "bytes"),
    };
  },
  sf = { code: of, message: "Too many files" };
function Si(e, r) {
  var t = e.type === "application/x-moz-file" || Zp(e, r);
  return [t, t ? null : lf(r)];
}
function Ai(e, r, t) {
  if (Dr(e.size))
    if (Dr(r) && Dr(t)) {
      if (e.size > t) return [!1, Ua(t)];
      if (e.size < r) return [!1, Va(r)];
    } else {
      if (Dr(r) && e.size < r) return [!1, Va(r)];
      if (Dr(t) && e.size > t) return [!1, Ua(t)];
    }
  return [!0, null];
}
function Dr(e) {
  return e != null;
}
function cf(e) {
  var r = e.files,
    t = e.accept,
    n = e.minSize,
    a = e.maxSize,
    o = e.multiple,
    i = e.maxFiles;
  return (!o && r.length > 1) || (o && i >= 1 && r.length > i)
    ? !1
    : r.every(function (l) {
        var c = Si(l, t),
          u = Wa(c, 1),
          f = u[0],
          d = Ai(l, n, a),
          p = Wa(d, 1),
          m = p[0];
        return f && m;
      });
}
function bt(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function rt(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(e.dataTransfer.types, function (r) {
        return r === "Files" || r === "application/x-moz-file";
      })
    : !!e.target && !!e.target.files;
}
function Ka(e) {
  e.preventDefault();
}
function uf(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function df(e) {
  return e.indexOf("Edge/") !== -1;
}
function pf() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : window.navigator.userAgent;
  return uf(e) || df(e);
}
function Ne() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function (n) {
    for (
      var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1;
      i < a;
      i++
    )
      o[i - 1] = arguments[i];
    return r.some(function (l) {
      return !bt(n) && l && l.apply(void 0, [n].concat(o)), bt(n);
    });
  };
}
function ff() {
  return "showOpenFilePicker" in window;
}
function mf(e) {
  return (
    (e = typeof e == "string" ? e.split(",") : e),
    [
      {
        description: "everything",
        accept: Array.isArray(e)
          ? e
              .filter(function (r) {
                return (
                  r === "audio/*" ||
                  r === "video/*" ||
                  r === "image/*" ||
                  r === "text/*" ||
                  /\w+\/[-+.\w]+/g.test(r)
                );
              })
              .reduce(function (r, t) {
                return qa(qa({}, r), {}, Ii({}, t, []));
              }, {})
          : {},
      },
    ]
  );
}
function gf(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function vf(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
var bf = ["children"],
  hf = ["open"],
  xf = [
    "refKey",
    "role",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onClick",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onDrop",
  ],
  yf = ["refKey", "onChange", "onClick"];
function Ef(e) {
  return Cf(e) || Df(e) || Oi(e) || wf();
}
function wf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Df(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Cf(e) {
  if (Array.isArray(e)) return pn(e);
}
function en(e, r) {
  return Af(e) || Sf(e, r) || Oi(e, r) || If();
}
function If() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oi(e, r) {
  if (!!e) {
    if (typeof e == "string") return pn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === "Object" && e.constructor && (t = e.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return pn(e, r);
  }
}
function pn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Sf(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (t != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      l;
    try {
      for (
        t = t.call(e);
        !(a = (i = t.next()).done) && (n.push(i.value), !(r && n.length === r));
        a = !0
      );
    } catch (c) {
      (o = !0), (l = c);
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function Af(e) {
  if (Array.isArray(e)) return e;
}
function Ya(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function _(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Ya(Object(t), !0).forEach(function (n) {
          fn(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : Ya(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function fn(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function ht(e, r) {
  if (e == null) return {};
  var t = Of(e, r),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      (n = o[a]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function Of(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var Pt = v.exports.forwardRef(function (e, r) {
  var t = e.children,
    n = ht(e, bf),
    a = Pf(n),
    o = a.open,
    i = ht(a, hf);
  return (
    v.exports.useImperativeHandle(
      r,
      function () {
        return { open: o };
      },
      [o]
    ),
    s.createElement(v.exports.Fragment, null, t(_(_({}, i), {}, { open: o })))
  );
});
Pt.displayName = "Dropzone";
var Pi = {
  disabled: !1,
  getFilesFromEvent: qp,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
};
Pt.defaultProps = Pi;
Pt.propTypes = {
  children: Z.exports.func,
  accept: Z.exports.oneOfType([
    Z.exports.string,
    Z.exports.arrayOf(Z.exports.string),
  ]),
  multiple: Z.exports.bool,
  preventDropOnDocument: Z.exports.bool,
  noClick: Z.exports.bool,
  noKeyboard: Z.exports.bool,
  noDrag: Z.exports.bool,
  noDragEventsBubbling: Z.exports.bool,
  minSize: Z.exports.number,
  maxSize: Z.exports.number,
  maxFiles: Z.exports.number,
  disabled: Z.exports.bool,
  getFilesFromEvent: Z.exports.func,
  onFileDialogCancel: Z.exports.func,
  onFileDialogOpen: Z.exports.func,
  useFsAccessApi: Z.exports.bool,
  onDragEnter: Z.exports.func,
  onDragLeave: Z.exports.func,
  onDragOver: Z.exports.func,
  onDrop: Z.exports.func,
  onDropAccepted: Z.exports.func,
  onDropRejected: Z.exports.func,
  validator: Z.exports.func,
};
const Ft = Pt;
var mn = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: [],
};
function Pf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = _(_({}, Pi), e),
    t = r.accept,
    n = r.disabled,
    a = r.getFilesFromEvent,
    o = r.maxSize,
    i = r.minSize,
    l = r.multiple,
    c = r.maxFiles,
    u = r.onDragEnter,
    f = r.onDragLeave,
    d = r.onDragOver,
    p = r.onDrop,
    m = r.onDropAccepted,
    g = r.onDropRejected,
    b = r.onFileDialogCancel,
    h = r.onFileDialogOpen,
    x = r.useFsAccessApi,
    y = r.preventDropOnDocument,
    w = r.noClick,
    E = r.noKeyboard,
    I = r.noDrag,
    C = r.noDragEventsBubbling,
    N = r.validator,
    B = v.exports.useMemo(
      function () {
        return typeof h == "function" ? h : Ja;
      },
      [h]
    ),
    M = v.exports.useMemo(
      function () {
        return typeof b == "function" ? b : Ja;
      },
      [b]
    ),
    k = v.exports.useRef(null),
    S = v.exports.useRef(null),
    z = v.exports.useReducer(Ff, mn),
    $ = en(z, 2),
    L = $[0],
    F = $[1],
    H = L.isFocused,
    O = L.isFileDialogActive,
    V = L.draggedFiles,
    K = v.exports.useRef(
      typeof window < "u" && window.isSecureContext && x && ff()
    ),
    Q = function () {
      !K.current &&
        O &&
        setTimeout(function () {
          if (S.current) {
            var j = S.current.files;
            j.length || (F({ type: "closeDialog" }), M());
          }
        }, 300);
    };
  v.exports.useEffect(
    function () {
      return (
        window.addEventListener("focus", Q, !1),
        function () {
          window.removeEventListener("focus", Q, !1);
        }
      );
    },
    [S, O, M, K]
  );
  var ce = v.exports.useRef([]),
    te = function (j) {
      (k.current && k.current.contains(j.target)) ||
        (j.preventDefault(), (ce.current = []));
    };
  v.exports.useEffect(
    function () {
      return (
        y &&
          (document.addEventListener("dragover", Ka, !1),
          document.addEventListener("drop", te, !1)),
        function () {
          y &&
            (document.removeEventListener("dragover", Ka),
            document.removeEventListener("drop", te));
        }
      );
    },
    [k, y]
  );
  var Pe = v.exports.useCallback(
      function (A) {
        A.preventDefault(),
          A.persist(),
          Ge(A),
          (ce.current = [].concat(Ef(ce.current), [A.target])),
          rt(A) &&
            Promise.resolve(a(A)).then(function (j) {
              (bt(A) && !C) ||
                (F({
                  draggedFiles: j,
                  isDragActive: !0,
                  type: "setDraggedFiles",
                }),
                u && u(A));
            });
      },
      [a, u, C]
    ),
    Re = v.exports.useCallback(
      function (A) {
        A.preventDefault(), A.persist(), Ge(A);
        var j = rt(A);
        if (j && A.dataTransfer)
          try {
            A.dataTransfer.dropEffect = "copy";
          } catch {}
        return j && d && d(A), !1;
      },
      [d, C]
    ),
    X = v.exports.useCallback(
      function (A) {
        A.preventDefault(), A.persist(), Ge(A);
        var j = ce.current.filter(function (pe) {
            return k.current && k.current.contains(pe);
          }),
          ie = j.indexOf(A.target);
        ie !== -1 && j.splice(ie, 1),
          (ce.current = j),
          !(j.length > 0) &&
            (F({ isDragActive: !1, type: "setDraggedFiles", draggedFiles: [] }),
            rt(A) && f && f(A));
      },
      [k, f, C]
    ),
    W = v.exports.useCallback(
      function (A, j) {
        var ie = [],
          pe = [];
        A.forEach(function (Ce) {
          var xr = Si(Ce, t),
            tr = en(xr, 2),
            Tt = tr[0],
            kt = tr[1],
            Mt = Ai(Ce, i, o),
            Jr = en(Mt, 2),
            Lt = Jr[0],
            $t = Jr[1],
            Gt = N ? N(Ce) : null;
          if (Tt && Lt && !Gt) ie.push(Ce);
          else {
            var zt = [kt, $t];
            Gt && (zt = zt.concat(Gt)),
              pe.push({
                file: Ce,
                errors: zt.filter(function ($i) {
                  return $i;
                }),
              });
          }
        }),
          ((!l && ie.length > 1) || (l && c >= 1 && ie.length > c)) &&
            (ie.forEach(function (Ce) {
              pe.push({ file: Ce, errors: [sf] });
            }),
            ie.splice(0)),
          F({ acceptedFiles: ie, fileRejections: pe, type: "setFiles" }),
          p && p(ie, pe, j),
          pe.length > 0 && g && g(pe, j),
          ie.length > 0 && m && m(ie, j);
      },
      [F, l, t, i, o, c, p, m, g, N]
    ),
    ee = v.exports.useCallback(
      function (A) {
        A.preventDefault(),
          A.persist(),
          Ge(A),
          (ce.current = []),
          rt(A) &&
            Promise.resolve(a(A)).then(function (j) {
              (bt(A) && !C) || W(j, A);
            }),
          F({ type: "reset" });
      },
      [a, W, C]
    ),
    ue = v.exports.useCallback(
      function () {
        if (K.current) {
          F({ type: "openDialog" }), B();
          var A = { multiple: l, types: mf(t) };
          window
            .showOpenFilePicker(A)
            .then(function (j) {
              return a(j);
            })
            .then(function (j) {
              W(j, null), F({ type: "closeDialog" });
            })
            .catch(function (j) {
              gf(j)
                ? (M(j), F({ type: "closeDialog" }))
                : vf(j) &&
                  ((K.current = !1),
                  S.current && ((S.current.value = null), S.current.click()));
            });
          return;
        }
        S.current &&
          (F({ type: "openDialog" }),
          B(),
          (S.current.value = null),
          S.current.click());
      },
      [F, B, M, x, W, t, l]
    ),
    _e = v.exports.useCallback(
      function (A) {
        !k.current ||
          !k.current.isEqualNode(A.target) ||
          ((A.keyCode === 32 || A.keyCode === 13) &&
            (A.preventDefault(), ue()));
      },
      [k, ue]
    ),
    Be = v.exports.useCallback(function () {
      F({ type: "focus" });
    }, []),
    er = v.exports.useCallback(function () {
      F({ type: "blur" });
    }, []),
    br = v.exports.useCallback(
      function () {
        w || (pf() ? setTimeout(ue, 0) : ue());
      },
      [w, ue]
    ),
    Fe = function (j) {
      return n ? null : j;
    },
    $e = function (j) {
      return E ? null : Fe(j);
    },
    Ue = function (j) {
      return I ? null : Fe(j);
    },
    Ge = function (j) {
      C && j.stopPropagation();
    },
    hr = v.exports.useMemo(
      function () {
        return function () {
          var A =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            j = A.refKey,
            ie = j === void 0 ? "ref" : j,
            pe = A.role,
            Ce = A.onKeyDown,
            xr = A.onFocus,
            tr = A.onBlur,
            Tt = A.onClick,
            kt = A.onDragEnter,
            Mt = A.onDragOver,
            Jr = A.onDragLeave,
            Lt = A.onDrop,
            $t = ht(A, xf);
          return _(
            _(
              fn(
                {
                  onKeyDown: $e(Ne(Ce, _e)),
                  onFocus: $e(Ne(xr, Be)),
                  onBlur: $e(Ne(tr, er)),
                  onClick: Fe(Ne(Tt, br)),
                  onDragEnter: Ue(Ne(kt, Pe)),
                  onDragOver: Ue(Ne(Mt, Re)),
                  onDragLeave: Ue(Ne(Jr, X)),
                  onDrop: Ue(Ne(Lt, ee)),
                  role: typeof pe == "string" && pe !== "" ? pe : "button",
                },
                ie,
                k
              ),
              !n && !E ? { tabIndex: 0 } : {}
            ),
            $t
          );
        };
      },
      [k, _e, Be, er, br, Pe, Re, X, ee, E, I, n]
    ),
    Bt = v.exports.useCallback(function (A) {
      A.stopPropagation();
    }, []),
    Ve = v.exports.useMemo(
      function () {
        return function () {
          var A =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            j = A.refKey,
            ie = j === void 0 ? "ref" : j,
            pe = A.onChange,
            Ce = A.onClick,
            xr = ht(A, yf),
            tr = fn(
              {
                accept: t,
                multiple: l,
                type: "file",
                style: { display: "none" },
                onChange: Fe(Ne(pe, ee)),
                onClick: Fe(Ne(Ce, Bt)),
                autoComplete: "off",
                tabIndex: -1,
              },
              ie,
              S
            );
          return _(_({}, tr), xr);
        };
      },
      [S, t, l, ee, n]
    ),
    rr = V.length,
    _n =
      rr > 0 &&
      cf({
        files: V,
        accept: t,
        minSize: i,
        maxSize: o,
        multiple: l,
        maxFiles: c,
      }),
    Li = rr > 0 && !_n;
  return _(
    _({}, L),
    {},
    {
      isDragAccept: _n,
      isDragReject: Li,
      isFocused: H && !n,
      getRootProps: hr,
      getInputProps: Ve,
      rootRef: k,
      inputRef: S,
      open: Fe(ue),
    }
  );
}
function Ff(e, r) {
  switch (r.type) {
    case "focus":
      return _(_({}, e), {}, { isFocused: !0 });
    case "blur":
      return _(_({}, e), {}, { isFocused: !1 });
    case "openDialog":
      return _(_({}, mn), {}, { isFileDialogActive: !0 });
    case "closeDialog":
      return _(_({}, e), {}, { isFileDialogActive: !1 });
    case "setDraggedFiles":
      var t = r.isDragActive,
        n = r.draggedFiles;
      return _(_({}, e), {}, { draggedFiles: n, isDragActive: t });
    case "setFiles":
      return _(
        _({}, e),
        {},
        { acceptedFiles: r.acceptedFiles, fileRejections: r.fileRejections }
      );
    case "reset":
      return _({}, mn);
    default:
      return e;
  }
}
function Ja() {}
const Nf = re.section`
  padding: 0 1.5rem;
  grid-area: actionSection;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 8rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray5);
    & + button {
      margin-left: 0.5rem;
    }
    &#saveItemBtn {
      background: var(--blue);
    }
    &#cancelBtn {
      background: ${q(0.2, T.red)};
    }
  }
`;
function Nt({ conditionToShow: e, actionSave: r }) {
  const { setSelectedItem: t } = ne();
  return s.createElement(
    Nf,
    null,
    e &&
      s.createElement(
        s.Fragment,
        null,
        s.createElement(
          "button",
          { type: "button", id: "saveItemBtn", onClick: r },
          "Salvar"
        ),
        s.createElement(
          "button",
          {
            type: "button",
            id: "cancelBtn",
            onClick: () => {
              t(void 0);
            },
          },
          "Cancelar"
        )
      )
  );
}
function Yn(e) {
  return new Promise((r, t) => {
    const n = new FileReader();
    (n.onload = () => r(n.result)),
      (n.onerror = (a) => {
        t(a);
      }),
      n.readAsDataURL(e);
  });
}
const Rf = re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${q(0.8, G("audios"))};

    border: 2px dashed ${G("audios")};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${q(0.85, T.green)};
      filter: brightness(0.8);
    }
    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
    }
    h2 {
      color: ${G("audios")};
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }
    span {
      margin: 1rem auto;
      font-weight: 500;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    audio {
      border: 1px solid ${G("audios")};
      border-radius: 2rem;
      box-shadow: 0px 0px 10px ${G("audios")};
    }
    .howToConvertLink {
      display: none;
    }
    video {
      display: none;
      & + .howToConvertLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 2rem;
        text-align: center;
        a.warning {
          color: var(--red);
        }
      }
    }
    #sendAsForwardedContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      #sendAsForwardedSwitch {
        margin-bottom: 0.25rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
`,
  Jn = "/assets/dropFileIcon.svg",
  Xn = "/assets/greenCheck.svg";
function Bf() {
  const { selectedItem: e } = ne(),
    [r, t] = v.exports.useState(""),
    [n, a] = v.exports.useState(!1),
    [o, i] = v.exports.useState(!1),
    { updateAudioData: l } = Br();
  v.exports.useEffect(() => {
    var u, f;
    t((u = e == null ? void 0 : e.data) != null ? u : ""),
      a((f = e == null ? void 0 : e.sendAsForwarded) != null ? f : !1),
      i(!1);
  }, [e]);
  async function c(u) {
    if (!u) return;
    const f = await Yn(u);
    t(String(f));
  }
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      Rf,
      { id: "mainContent" },
      s.createElement(
        Ft,
        {
          accept: "audio/mpeg,audio/ogg,audio/x-m4a,video/mpeg",
          multiple: !1,
          onDrop: (u) => {
            c(u[0]);
          },
          onDragOver: () => i(!0),
          onDragLeave: () => i(!1),
          onDropRejected: (u) => {
            i(!1),
              u[0].errors.find((f) => f.code === "file-invalid-type")
                ? Y.error(
                    s.createElement(
                      "a",
                      {
                        href: "https://zapvoice.com.br/converter-audio-ogg",
                        target: "_blank",
                        rel: "noreferrer",
                      },
                      "Formato n\xE3o aceito, clique aqui para aprender a converter seu \xE1udio da maneira certa"
                    )
                  )
                : u[0].errors.find((f) => f.code === "file-too-large")
                ? Y.error(
                    "Arquivo maior que 16Mb (limite colocado pelo whatsapp web)"
                  )
                : Y.error(u[0].errors[0].message);
          },
          onDropAccepted: (u) => {
            i(!1), Y.success("Audio carregado");
          },
          maxSize: 16 * 1e3 * 1e3,
        },
        ({ getRootProps: u, getInputProps: f }) =>
          s.createElement(
            "div",
            { ...u({ className: `dropzone ${o ? "isDragginOn" : ""}` }) },
            s.createElement("input", { ...f() }),
            r && r !== (e == null ? void 0 : e.data)
              ? s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("img", { src: Xn, alt: "Clique em Salvar" }),
                  s.createElement("h2", null, "Arquivo carregado com sucesso!"),
                  s.createElement(
                    "span",
                    null,
                    'Clique abaixo em "Salvar" para finalizar.'
                  )
                )
              : s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("img", {
                    src: Jn,
                    alt: "Arraste seu arquivo ou clique aqui",
                  }),
                  s.createElement(
                    "p",
                    null,
                    "Clique aqui ou arraste o novo \xE1udio a ser salvo"
                  ),
                  s.createElement(
                    "span",
                    null,
                    "Formatos aceitos '.ogg' e '.mp3'"
                  )
                ),
            r &&
              s.createElement(
                s.Fragment,
                null,
                s.createElement(xn, { base64: r }),
                s.createElement(
                  "div",
                  { className: "howToConvertLink" },
                  s.createElement(
                    "a",
                    {
                      download: !0,
                      href: r,
                      onClick: (d) => {
                        d.stopPropagation();
                      },
                    },
                    "Baixar o \xE1udio"
                  ),
                  s.createElement(
                    "a",
                    {
                      href: "https://zapvoice.com.br/converter-audio-ogg",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "warning",
                      onClick: (d) => {
                        d.stopPropagation();
                      },
                    },
                    "Seu \xE1udio est\xE1 em um formato que n\xE3o ser\xE1 mais aceito pelo whatsapp. Clique aqui e aprenda a converte-lo"
                  )
                )
              ),
            r &&
              s.createElement(
                "div",
                { id: "sendAsForwardedContainer" },
                s.createElement(yn, {
                  checked: !n,
                  id: "sendAsForwardedSwitch",
                  onClick: (d) => {
                    d.stopPropagation(), a(!n);
                  },
                }),
                s.createElement(
                  "h3",
                  null,
                  "Enviando \xE1udio como",
                  " ",
                  n ? "encaminhado" : "gravado"
                )
              )
          )
      )
    ),
    s.createElement(Nt, {
      conditionToShow:
        r !== (e == null ? void 0 : e.data) ||
        (e.sendAsForwarded !== void 0 && n !== e.sendAsForwarded) ||
        (e.sendAsForwarded === void 0 && n),
      actionSave: () => {
        e && l({ id: e.id, data: r, sendAsForwarded: n });
      },
    })
  );
}
const Tf = "/assets/homePageAudios.svg";
function kf() {
  return s.createElement(
    s.Fragment,
    null,
    s.createElement("img", {
      src: Tf,
      alt: "Central de \xC1udios",
      className: "homeImg",
    }),
    s.createElement(
      "span",
      null,
      "Selecione um \xE1udio para editar na aba ao lado ou clique em \u201CNovo Item para adicionar um novo \xE1udio para o ZapVoice"
    )
  );
}
const Mf = Ui`
`,
  vr = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  flex: 1;
  span {
    max-width: 22rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-subtitle);
    text-align: center;
  }
  img.homeImg {
    height: 10rem;
  }
`,
  Lf = re.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  place-items: center;
  margin: 0 auto;
  flex: 1;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--zap-background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &.mensagens {
        &:hover {
          outline: 1px solid
            ${q(0.5, G("mensagens"))};
        }
        &:focus {
          outline: 1.2px solid ${G("mensagens")};
        }
      }
      &.audios {
        &:hover {
          outline: 1px solid
            ${q(0.2, G("audios"))};
        }
        &:focus {
          outline: 1.5px solid ${G("audios")};
        }
      }
      &.medias {
        &:hover {
          outline: 1px solid
            ${q(0.2, G("medias"))};
        }
        &:focus {
          outline: 1.5px solid ${G("medias")};
        }
      }
      &.docs {
        &:hover {
          outline: 1px solid ${q(0.2, G("docs"))};
        }
        &:focus {
          outline: 1.5px solid ${G("docs")};
        }
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      background: ${q(0.7, T.red)};
      display: grid;
      place-items: center;
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${T.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${q(0.5, "black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;
function Rt({ children: e }) {
  const { selectedItem: r } = ne(),
    { updateMessageName: t, deleteMessage: n } = Rr(),
    { updateAudioName: a, deleteAudio: o } = Br(),
    { updateMediaName: i, deleteMedia: l } = Tr(),
    { updateDocName: c, deleteDoc: u } = kr(),
    { funnelsIndex: f } = Ze(),
    { isDarkTheme: d } = he(),
    [p, m] = v.exports.useState(""),
    [g, b] = v.exports.useState(!1);
  v.exports.useEffect(() => {
    var I;
    m((I = r == null ? void 0 : r.name) != null ? I : "Default Name");
  }, [r, m]);
  const h = { mensagens: t, audios: a, medias: i, docs: c },
    x = { mensagens: n, audios: o, medias: l, docs: u };
  function y() {
    b(!0);
  }
  function w() {
    b(!1);
  }
  function E() {
    if (!r) return;
    const I = f.reduce(
      (C, N) => (
        N.data && !!N.data.find((B) => B.id === r.id) && C.push(N.name), C
      ),
      []
    );
    if (I.length > 0) {
      Y.error(
        s.createElement(
          "div",
          null,
          'O item "',
          p,
          '" que voc\xEA est\xE1 tentando apagar est\xE1 cadastrado no',
          I.length > 1 && "s",
          " seguinte",
          I.length > 1 && "s",
          " funi",
          I.length > 1 ? "s" : "l",
          ": ",
          s.createElement("br", null),
          s.createElement("br", null),
          s.createElement(
            "ul",
            null,
            I.map((C, N) => s.createElement("li", { key: N }, C))
          ),
          s.createElement("br", null),
          "Remova ele desse",
          I.length > 1 && "s",
          " antes de apagar"
        )
      );
      return;
    }
    y();
  }
  return s.createElement(
    Lf,
    null,
    s.createElement(Qe, {
      details: {
        title: `Tem certeza que deseja deletar o item "${p}"?`,
        description:
          "Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o item",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: d ? T.gray3 : T.gray4,
        fillOk: T.red,
      },
      onRequestOk: async () => r && x[r.type](r.id),
      isOpen: g,
      onRequestClose: w,
    }),
    s.createElement(
      "section",
      { id: "inputAndDelete" },
      s.createElement("input", {
        type: "text",
        value: p,
        className: r == null ? void 0 : r.type,
        onChange: (I) => {
          m(I.target.value);
        },
        onBlur: () => {
          !p && (r == null ? void 0 : r.name) && m(r.name),
            p &&
              r &&
              p !== (r == null ? void 0 : r.name) &&
              h[r.type]({ id: r.id, name: p });
        },
      }),
      s.createElement(
        "button",
        { type: "button", id: "deleteItemBtn", onClick: E },
        s.createElement(Nr, { className: "trashIcon" })
      )
    ),
    e
  );
}
function $f() {
  const { selectedItem: e } = ne();
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(gr, { fill: G("audios"), itemType: "audios" }),
    !e && s.createElement(vr, null, s.createElement(kf, null)),
    !!e && s.createElement(Rt, null, s.createElement(Bf, null))
  );
}
const Gf = re.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  flex: 1;
  place-items: center;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--zap-background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        outline: 1px solid ${q(0.2, G("funis"))};
      }
      &:focus {
        outline: 1.5px solid ${G("funis")};
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      display: grid;
      place-items: center;
      background: ${q(0.7, T.red)};
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${T.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${q(0.5, "black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;
function zf({ children: e }) {
  const { selectedFunnel: r, setSelectedFunnel: t } = ne(),
    { updateFunnelName: n, deleteFunnel: a } = Ze(),
    [o, i] = v.exports.useState(""),
    { isDarkTheme: l } = he(),
    { triggersIndex: c } = Mr(),
    [u, f] = v.exports.useState(!1);
  v.exports.useEffect(() => {
    var g;
    i((g = r == null ? void 0 : r.name) != null ? g : "Default Name");
  }, [r, i]);
  function d() {
    if (!r) return;
    const g = c.reduce(
      (b, h) => (h.funnelId === r.id && b.push(h.name), b),
      []
    );
    if (g.length > 0) {
      Y.error(
        s.createElement(
          "div",
          null,
          'O funil "',
          o,
          '" que voc\xEA est\xE1 tentando apagar est\xE1 cadastrado no',
          g.length > 1 && "s",
          " seguinte",
          g.length > 1 && "s",
          " gatilho",
          g.length > 1 && "s",
          " : ",
          s.createElement("br", null),
          s.createElement("br", null),
          s.createElement(
            "ul",
            null,
            g.map((b, h) => s.createElement("li", { key: h }, b))
          ),
          s.createElement("br", null),
          "Remova ele desse",
          g.length > 1 && "s",
          " antes de apagar"
        )
      );
      return;
    }
    p();
  }
  function p() {
    f(!0);
  }
  function m() {
    f(!1);
  }
  return s.createElement(
    Gf,
    null,
    s.createElement(Qe, {
      details: {
        title: `Tem certeza que deseja deletar o funil "${o}"?`,
        description:
          "Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o funil",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: l ? T.gray3 : T.gray4,
        fillOk: T.red,
      },
      onRequestOk: async () => r && a(r.id),
      isOpen: u,
      onRequestClose: m,
    }),
    s.createElement(
      "section",
      { id: "inputAndDelete" },
      s.createElement("input", {
        type: "text",
        value: o,
        className: r == null ? void 0 : r.type,
        onChange: (g) => {
          i(g.target.value);
        },
        onBlur: () => {
          !o && (r == null ? void 0 : r.name) && i(r.name),
            o &&
              r &&
              o !== (r == null ? void 0 : r.name) &&
              (t({ ...r, name: o }), n({ id: r.id, name: o }));
        },
      }),
      s.createElement(
        "button",
        { type: "button", id: "deleteFunnelBtn", onClick: d },
        s.createElement(Nr, { className: "trashIcon" })
      )
    ),
    e
  );
}
const jf = "/assets/homePageFunnels.svg";
function qf() {
  return s.createElement(
    s.Fragment,
    null,
    s.createElement("img", {
      src: jf,
      alt: "Central de Funis",
      className: "homeImg",
    }),
    s.createElement(
      "span",
      null,
      "Selecione um funil para editar na aba ao lado ou clique em \u201CNovo Funil\u201D para adicionar um novo funil para o ZapVoice"
    )
  );
}
const Wf = eo`

  to{
    max-height: 10rem;
    overflow:visible;
  }
`,
  Hf = re.div`
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  background: ${({ fill: e }) => e && Vi(0.5, q(0.5, e))};
  transition: filter 0.2s;
  .iconsAndName {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    .leftDots {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      cursor: grab;
      fill: var(--text-title);
    }
    .typeIcon {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
      fill: ${({ fill: e }) => e};
      stroke: black;
      stroke-width: 0.25rem;
      filter: ${`drop-shadow(0px 0px 3px ${q(0.8, "black")})`};
    }
    h2 {
      width: 100%;
    }
  }

  .delayAndActions {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.5rem;
    .delay {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 1rem;
      .delayIcon {
        fill: var(--text-title);
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
      }
      span {
        color: var(--text-title);
        font-weight: 500;
      }
    }
    button.actionFunnelContainer {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      border: none;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 10px -5px black;
      &.changeItem {
        background: ${q(0.7, T.gold)};
        .changeItemBtn {
          width: 60%;
          height: 60%;
          fill: var(--gold);
          filter: drop-shadow(0px 0px 2px black);
        }
      }
      &.deleteItem {
        background: ${q(0.7, T.red)};
        .deleteItemBtn {
          width: 60%;
          height: 60%;
          fill: var(--red);
          filter: drop-shadow(0px 0px 2px black);
        }
      }
      &.showItem {
        background: ${({ fill: e }) => e && q(0.8, e)};

        .showItemBtn {
          width: 60%;
          height: 60%;
          fill: ${({ fill: e }) => e && Ki(0.3, e)};
          filter: drop-shadow(0px 0px 2px black);
          transition: transform 0.3s;
          transform: ${({ isOpen: e }) =>
            e ? "rotate(-180deg)" : "rotate(0)"};
        }
      }
    }
  }
`,
  Uf = re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ fill: e }) => e && q(0.85, e)};
  width: 98%;
  height: 10rem;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  max-height: 0rem;
  overflow: hidden;

  ${({ isOpen: e }) =>
    e &&
    ke`
      animation: ${Wf} 0.3s ease-in forwards;
    `}

  margin: 0 auto;
  margin-top: -0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: ${({ isOpen: e }) => (e ? "1rem" : "0")};

  img,
  video {
    z-index: 1;
    display: block;
    position: absolute;
    height: 100%;
    width: auto;
    transition: transform 0.5s;
    &:hover {
      transform: scale(2);
    }
  }
  div.itemPreviewDocument {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    font-size: 1.25rem;

    .itemPreviewIcon {
      width: 3rem;
      height: 3rem;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    opacity: 1;
    cursor: auto;
  }
`;
function Vf({
  item: e,
  showAndHideItem: r,
  openEditModal: t,
  deleteItemFromFunnel: n,
}) {
  const { isDarkTheme: a } = he(),
    [o, i] = v.exports.useState(!1),
    l = Ie(e.type),
    c = Math.floor(e.delay / 1e3 / 60),
    u = (e.delay / 1e3) % 60;
  function f() {
    i(!0);
  }
  function d() {
    i(!1);
  }
  function p() {
    f();
  }
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      Hf,
      { fill: G(e.type), isOpen: e.isOpen },
      s.createElement(Qe, {
        details: {
          title: `Tem certeza que deseja remover o item "${e.name}" desse funil?`,
          description:
            "Caso deseje inserir outro em seu lugar ou apenas alterar o delay, basta utilizar a op\xE7\xE3o de editar!",
          okTitle: "Sim, remover!",
          cancelTitle: "Cancelar",
          fillCancel: a ? T.gray3 : T.gray4,
          fillOk: T.red,
        },
        onRequestOk: n,
        isOpen: o,
        onRequestClose: d,
      }),
      s.createElement(
        "div",
        { className: "iconsAndName" },
        s.createElement(ao, { className: "leftDots" }),
        s.createElement(l, { className: "typeIcon" }),
        s.createElement("h2", null, e.name)
      ),
      s.createElement(
        "div",
        { className: "delayAndActions" },
        e.delay > 0 &&
          s.createElement(
            "div",
            { className: "delay" },
            s.createElement("span", null, c > 0 && `${c}m `, u, "s"),
            s.createElement(Yi, { className: "delayIcon" })
          ),
        s.createElement(
          "button",
          {
            type: "button",
            className: "actionFunnelContainer changeItem",
            onClick: t,
          },
          s.createElement(ro, { className: "changeItemBtn" })
        ),
        s.createElement(
          "button",
          {
            type: "button",
            className: "actionFunnelContainer deleteItem",
            onClick: p,
          },
          s.createElement(Nr, { className: "deleteItemBtn" })
        ),
        s.createElement(
          "button",
          {
            type: "button",
            className: "actionFunnelContainer showItem",
            onClick: r,
          },
          s.createElement(Ji, { className: "showItemBtn" })
        )
      )
    ),
    e.data &&
      s.createElement(
        Uf,
        { isOpen: e.isOpen, fill: G(e.type) },
        e.type !== "mensagens"
          ? s.createElement(xn, { base64: e.data })
          : s.createElement("textarea", {
              defaultValue: e.data,
              id: "msgPreview",
              disabled: !0,
            })
      )
  );
}
const Kf = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1 {
    align-self: flex-start;
    font-size: 2rem;
  }
  label {
    align-self: flex-start;
    font-size: 1.15rem;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }
  label.delayLabel {
    margin-top: 0.25rem;
    align-self: center;
  }
  #typesContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .optionType {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .imageContainer {
        margin: 0 auto;
      }
    }
  }
  .selectItemFunnel {
    width: 100%;
  }

  #delayContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .delayItemContainer {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input[type="number"] {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;
        background: var(--shape);
        border: 1px solid var(--gray1);
        border-radius: 0.25rem;
        font-size: 1rem;
        outline: none;
        &:hover {
          border: 1px solid var(--blue);
          box-shadow: 0px 0px 1px var(--blue);
        }
        &:focus {
          border: 2px solid var(--blue);
          box-shadow: 0px 0px 1px var(--blue);
        }
        &:invalid {
          border: 2px solid var(--red);
          box-shadow: 0px 0px 1px var(--red);
        }
      }
    }
    span.separator {
      font-size: 1.5rem;
      font-weight: 700;
      transform: translateY(0.5rem);
    }
  }
  button#addItemFunnelBtn {
    margin-top: 1rem;
    background: ${q(0.5, T.blue)};
    color: var(--text-title);
    font-size: 1.15rem;
    font-weight: 700;
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 0.25rem;
  }
`;
function Yf({
  isOpen: e,
  onRequestClose: r,
  editConfig: { itemToEdit: t, setItemToEdit: n },
}) {
  const [a, o] = v.exports.useState("mensagens"),
    [i, l] = v.exports.useState(),
    [c, u] = v.exports.useState(),
    [f, d] = v.exports.useState(),
    { mensagensIndex: p } = Rr(),
    { audiosIndex: m } = Br(),
    { mediasIndex: g } = Tr(),
    { docsIndex: b } = kr(),
    { addItemForFunnel: h, editItemFromFunnel: x } = Ze(),
    { getItemFromStorage: y, getNameFromIndex: w } = ne(),
    E = { mensagens: p, audios: m, medias: g, docs: b };
  v.exports.useEffect(() => {
    a === "audios" &&
      !!(c != null && c.value) &&
      y(c == null ? void 0 : c.value).then(async (F) => {
        if (!F || F.type !== "audios" || !F.data) return;
        const H = await Xi(F.data);
        H && H > 0 && (k(Math.floor(H / 60)), B(Math.floor(H % 60)));
      });
  }, [c]);
  const [I, C] = v.exports.useState(!1),
    [N, B] = v.exports.useState(5),
    [M, k] = v.exports.useState(0),
    [S, z] = v.exports.useState(0);
  v.exports.useEffect(() => {
    async function F(H) {
      l([]),
        H && u(void 0),
        C(!0),
        l(E[a].map((O) => ({ label: O.name || `${a}-${O.id}`, value: O.id }))),
        C(!1);
    }
    F(
      !t ||
        (!!f && f.type !== a) ||
        (!!f && f.type === a && f.id !== (c == null ? void 0 : c.value))
    );
  }, [a]),
    v.exports.useEffect(() => {
      z(M * 60 + N);
    }, [M, N]),
    v.exports.useEffect(() => {
      if (!t) {
        d(void 0);
        return;
      }
      y(t.id).then((F) => {
        var K;
        const H = (K = w(F.id, F.type)) != null ? K : "";
        o(F.type), u({ label: H, value: F.id }), d(F);
        const O = Math.floor(t.delay / 1e3 / 60),
          V = (t.delay / 1e3) % 60;
        k(O), B(V);
      });
    }, [t]);
  async function $() {
    if (!(c != null && c.value) || Number.isNaN(S) || !t) return;
    const F = c.value;
    await Y.promise(
      x({
        beforeId: t.id,
        possibleId: t.possibleId,
        possibleIndex: t.possibleIndex,
        item: { itemId: F, delayInSeconds: S },
      }),
      {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Item editado com sucesso",
        error: "Algo deu errado ao tentar editar seu item",
      }
    ),
      r(),
      u(void 0),
      k(0),
      B(5),
      n && n(void 0);
  }
  async function L() {
    if (!(c != null && c.value) || Number.isNaN(S)) return;
    const F = c.value;
    await Y.promise(h({ itemId: F, delayInSeconds: S }), {
      pending: "Inserindo item, aguarde...",
      success: "Item inserido com sucesso",
      error: "Algo deu errado ao tentar inserir seu item",
    }),
      r(),
      u(void 0),
      k(0),
      B(5),
      n && n(void 0);
  }
  return s.createElement(
    hn,
    {
      closeTimeoutMS: 400,
      isOpen: e,
      onRequestClose: () => {
        r(), u(void 0), k(0), B(5), n && n(void 0);
      },
      overlayClassName: "react-modal-overlay",
      className: "react-modal-content",
    },
    s.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          r(), u(void 0), k(0), B(5), n && n(void 0);
        },
        className: "react-modal-close",
      },
      s.createElement(to, { fill: T.red })
    ),
    s.createElement(
      Kf,
      null,
      s.createElement(
        "h1",
        null,
        f && s.createElement(ro, null),
        f ? " Editando o item" : "Adicionar Novo Item"
      ),
      s.createElement("label", { htmlFor: "typesContainer" }, "Tipo:"),
      s.createElement(
        "div",
        { id: "typesContainer" },
        s.createElement(Xr, {
          className: "optionType optionMensagens",
          name: "Mensagens",
          fill: G("mensagens"),
          isActive: a === "mensagens",
          Icon: Ie("mensagens"),
          onClick: () => o("mensagens"),
        }),
        s.createElement(Xr, {
          className: "optionType optionAudios",
          name: "Audios",
          fill: G("audios"),
          isActive: a === "audios",
          Icon: Ie("audios"),
          onClick: () => o("audios"),
        }),
        s.createElement(Xr, {
          className: "optionType optionMedias",
          name: "M\xEDdias",
          fill: G("medias"),
          isActive: a === "medias",
          Icon: Ie("medias"),
          onClick: () => o("medias"),
        }),
        s.createElement(Xr, {
          className: "optionType optionDocs",
          name: "Documentos",
          fill: G("docs"),
          isActive: a === "docs",
          Icon: Ie("docs"),
          onClick: () => o("docs"),
        })
      ),
      s.createElement("label", { htmlFor: "selectItemFunnel" }, "Item:"),
      s.createElement(ul, {
        props: {
          className: "selectItemFunnel",
          loadedOptions: i,
          isLoading: I,
          setIsLoading: C,
          selectedItemFunnel: c,
          setSelectedItemFunnel: u,
        },
      }),
      s.createElement("label", { htmlFor: "delayContainer" }, "Delay:"),
      s.createElement(
        "div",
        { id: "delayContainer" },
        s.createElement(
          "div",
          { className: "delayItemContainer", id: "delayMinutesContainer" },
          s.createElement(
            "label",
            { className: "delayLabel", htmlFor: "minutesDelay" },
            "Minutos"
          ),
          s.createElement("input", {
            type: "number",
            value: String(M),
            onChange: (F) =>
              k(
                Number(F.target.value) >= 0
                  ? Math.round(Number(F.target.value))
                  : 0
              ),
            id: "minutesDelay",
            min: 0,
          })
        ),
        s.createElement("span", { className: "separator" }, ":"),
        s.createElement(
          "div",
          { className: "delayItemContainer", id: "delaySecondsContainer" },
          s.createElement(
            "label",
            { className: "delayLabel", htmlFor: "secondsDelay" },
            "Segundos"
          ),
          s.createElement("input", {
            type: "number",
            value: String(N),
            onChange: (F) =>
              B(
                Number(F.target.value) >= 0
                  ? Math.round(Number(F.target.value))
                  : 0
              ),
            id: "secondsDelay",
            min: 0,
          })
        )
      ),
      s.createElement(
        "button",
        {
          type: "submit",
          id: "addItemFunnelBtn",
          disabled: !c,
          onClick: f ? $ : L,
        },
        f ? "Salvar Altera\xE7\xF5es" : "Adicionar"
      )
    )
  );
}
const Jf = re.div`
  position: relative;
  div#headerAndAddBtn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    h2 {
      font-size: 1rem;
      font-weight: 500;
      strong {
        font-weight: 900;
        color: var(--yellow);
      }
    }
  }
  .btnAddItem {
    border: none;
    border-radius: 0.25rem;
    background: var(--veryperi);
    font-weight: 700;
    padding: 0.5rem 2rem;
    color: white;
  }
  div#funnelWrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    display: inline-block;
    padding-bottom: 4.5rem;
    padding-right: 0.25rem;
  }
  div#noItemYet {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      width: 50%;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;
function Xf() {
  const {
      selectedFunnel: e,
      getNameFromIndex: r,
      getItemFromStorage: t,
    } = ne(),
    {
      removeItemFromFunnel: n,
      changeFunnelItemPosition: a,
      duplicateFunnel: o,
    } = Ze(),
    [i, l] = v.exports.useState([]),
    [c, u] = v.exports.useState(0),
    [f, d] = v.exports.useState(!1),
    [p, m] = v.exports.useState(!1),
    [g, b] = v.exports.useState(),
    { isDarkTheme: h } = he();
  v.exports.useEffect(() => {
    e != null && e.data
      ? l(
          e.data.map((S) => {
            const z = Je(),
              $ = r(S.id, S.type);
            return { ...S, ...($ && { name: $ }), indexId: z, isOpen: !1 };
          })
        )
      : l([]);
  }, [e]),
    v.exports.useEffect(() => {
      if (!i) return;
      const S = i.reduce((z, $) => z + $.delay, 0);
      u(S);
    }, [i]);
  async function x(S) {
    const z = await Promise.all(
      i.map(async ($) => {
        if ($.indexId === S) {
          if ($.data) return { ...$, isOpen: !$.isOpen };
          const L = await t($.id);
          return { ...$, data: L.data, isOpen: !0 };
        }
        return $;
      })
    );
    l(z);
  }
  async function y({ indexId: S, id: z }) {
    if (!e) return;
    const $ = i.reduce(
      (L, F, H) =>
        F.indexId !== S ? L : { ...L, idFound: F.id, indexFound: H },
      {}
    );
    n({ id: z, possibleIndex: $.indexFound, possibleId: String($.idFound) });
  }
  async function w({ indexId: S, id: z, delay: $ }) {
    if (!e) return;
    const { idFound: L, indexFound: F } = i.reduce(
      (H, O, V) => (
        O.indexId === S && ((H.idFound = O.id), (H.indexFound = V)), H
      ),
      {}
    );
    d(!0), b({ id: z, possibleId: L, possibleIndex: F, delay: $ });
  }
  function E() {
    d(!0);
  }
  function I() {
    d(!1);
  }
  function C() {
    m(!0);
  }
  function N() {
    m(!1);
  }
  function B(S) {
    const { source: z, destination: $ } = S;
    !$ || z.index === $.index || a(z.index, $.index);
  }
  const M = Math.floor(c / 1e3 / 60),
    k = Math.floor((c / 1e3) % 60);
  return s.createElement(
    Jf,
    { id: "mainContent" },
    s.createElement(Yf, {
      isOpen: f,
      onRequestClose: I,
      editConfig: { itemToEdit: g, setItemToEdit: b },
    }),
    s.createElement(Qe, {
      details: {
        title: `Gostaria realmente de duplicar o funil "${
          e == null ? void 0 : e.name
        }"?`,
        description:
          "Ele ser\xE1 criado com os MESMOS ITENS do funil original e com o nome + 'copia' . Ap\xF3s a confirma\xE7\xE3o, o novo funil ser\xE1 aberto automaticamente.",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: h ? T.gray3 : T.gray4,
        fillOk: T.green,
      },
      onRequestOk: async () => {
        e && (await o(e.id)), N();
      },
      isOpen: p,
      onRequestClose: N,
    }),
    (e == null ? void 0 : e.data) && (i == null ? void 0 : i.length) > 0
      ? s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "div",
            { id: "headerAndAddBtn" },
            s.createElement(
              "h2",
              null,
              "Itens adicionados:",
              s.createElement("strong", null, " ", i.length, " "),
              "Tempo total:",
              s.createElement(
                "strong",
                null,
                " ",
                M > 0 && `${M} min e `,
                " ",
                k,
                " ",
                "segs"
              )
            ),
            s.createElement(
              "button",
              {
                className:
                  "bg-zap-yellow text-white py-2 px-6 rounded text-md font-bold",
                onClick: () => {
                  C();
                },
              },
              "Duplicar Funil"
            ),
            s.createElement(
              "button",
              { type: "button", className: "btnAddItem", onClick: E },
              "+ Adicionar Item"
            )
          ),
          s.createElement(
            vi,
            { onDragEnd: B },
            s.createElement(Kn, { droppableId: "funnelItemsDroppable" }, (S) =>
              s.createElement(
                "div",
                { id: "funnelWrapper", ...S.droppableProps, ref: S.innerRef },
                i.map((z, $) =>
                  s.createElement(
                    wi,
                    { key: z.indexId, draggableId: z.indexId, index: $ },
                    (L) =>
                      s.createElement(
                        "div",
                        {
                          className: "itemDraggableFunnelListContainer",
                          ref: L.innerRef,
                          ...L.draggableProps,
                          ...L.dragHandleProps,
                          style: L.draggableProps.style,
                        },
                        s.createElement(Vf, {
                          item: z,
                          showAndHideItem: () => x(z.indexId),
                          deleteItemFromFunnel: () =>
                            y({ indexId: z.indexId, id: z.id }),
                          openEditModal: () =>
                            w({ indexId: z.indexId, id: z.id, delay: z.delay }),
                        })
                      )
                  )
                ),
                S.placeholder
              )
            )
          )
        )
      : s.createElement(
          "div",
          { id: "noItemYet" },
          s.createElement(
            "span",
            null,
            "Voc\xEA ainda n\xE3o possui nenhum item adicionado neste funil. Caso queira adicionar um item, clique no bot\xE3o abaixo"
          ),
          s.createElement(
            "button",
            { type: "button", className: "btnAddItem", onClick: E },
            "+ Adicionar Primeiro Item"
          )
        )
  );
}
function Zf() {
  const { selectedFunnel: e } = ne();
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(gr, { fill: G("funis"), itemType: "funis" }),
    !e && s.createElement(vr, null, s.createElement(qf, null)),
    !!e && s.createElement(zf, null, s.createElement(Xf, null))
  );
}
const Qf = "/assets/imgLogin.png",
  _f = eo`
  from {
    border-color: var(--blue);
  }

  to {
    border-color: var(--purple);
  }
`,
  em = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  #containerSwitchDarkMode {
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
  }
  #loginFrame {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    height: 90%;
    max-width: 1200px;
    max-height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--shape);
    @media (max-width: 600px) {
      max-height: 100%;
    }
    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 2rem;
      h2 {
        font-size: 2rem;
        font-weight: 900;
        margin: 2.5rem 0;
        color: var(--text-title);
      }
      span {
        font-size: 1rem;
        color: var(--text-subtitle);

        margin: 0.5rem 0;
      }

      label#labelChave {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
        border: 0;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        position: relative;
        input {
          width: 100%;
          height: 3rem;
          font-size: 1rem;
          font-weight: 500;
          margin: 0.5rem 0;
          padding: 0 1.5rem;
          border: 0;
          border-radius: 0.25rem;
          border: 1px solid var(--text-subtitle);
          color: var(--text-subtitle);
          background: var(--shape);

          animation: ${_f} 1s alternate infinite;
          &:focus {
            border-color: var(--purple);
            outline: 1px solid var(--purple);
            & + span {
              top: -1rem;
              background: var(--shape);
              font-size: 95%;
            }
          }
          &:valid {
            border-color: var(--purple);
            outline: 1px solid var(--purple);
            & + span {
              top: -1rem;
              background: var(--shape);
              font-size: 95%;
            }
          }
        }
        span {
          position: absolute;
          top: 0.5rem;
          left: 1.5rem;
          font-size: 1rem;
          transition: 0.3s;
          padding: 0 0.5rem;
        }
      }
      button {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
        border: 0;
        border-radius: 0.25rem;

        &#entrarBtn {
          background: var(--triple-gradient);
          background-size: 250%;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          transition: background-position-x 1s;
          &:hover {
            background-position-x: 100%;
          }
        }
        &#freeUserBtn {
          background: transparent;
          border: 1px solid var(--blue);
          color: var(--blue);
        }
      }

      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-body);
        text-align: center;
        align-self: center;
      }
    }
    aside {
      width: 100%;
      height: 100%;
      background: url(${Qf});
      background-size: cover;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`,
  rm = "/assets/logo-login.png";
function Fi() {
  return s.createElement(
    "div",
    {
      style: {
        marginTop: "0.5rem",
        width: "100%",
        textAlign: "center",
        color: "var(--text-subtitle)",
      },
    },
    "Copyright \xA9 2022 YVFL EMPREENDIMENTOS - Todos os direitos reservados"
  );
}
function tm() {
  const { isDarkTheme: e, setIsDarkTheme: r } = he(),
    { loginWithKey: n } = oo(),  // Removendo a verificação de isPremium
    [a, o] = v.exports.useState(""),
    i = dl();

  // Removendo a verificação de redirecionamento condicional ao status de premium
  v.exports.useEffect(() => {
    i("/dashboard");
  }, [i]);
  async function l() {
    if (!a) {
      Y.error("Digite a chave que foi enviada para o seu email");
      return;
    }
    const { premium: c, data: u } = await Y.promise(n(a), {
      pending: "Conectando ao servidor, aguarde...",
      error: "Algo deu errado ao tentar se conectar ao servidor!",
    });
    c
      ? (Me({ chave: a }),
        i("/dashboard"),
        Y.success(String(`Seja bem vindo(a) ${u}`)))
      : Y.error(String(u));
  }
  return s.createElement(
    em,
    null,
    s.createElement(
      "div",
      { id: "containerSwitchDarkMode" },
      s.createElement("span", null, " MODO ", e ? "DARK" : "LIGHT"),
      s.createElement(yn, {
        id: "switchDarkMode",
        checked: e,
        onClick: () => r(!e),
      })
    ),
    s.createElement(
      "form",
      {
        id: "loginFrame",
        onSubmit: (c) => {
          c.preventDefault(), l();
        },
      },
      s.createElement(
        "main",
        null,
        s.createElement("img", { src: rm, alt: "ZapVoice" }),
        s.createElement(
          "h2",
          null,
          "Seja bem vindo(a)",
          s.createElement("br", null),
          " ao ZapVoice"
        ),
        s.createElement(
          "span",
          null,
          "Insira a sua chave de ativa\xE7\xE3o \u{1F511} ",
          s.createElement("br", null),
          "que voc\xEA recebeu por email (verifique o spam)"
        ),
        s.createElement(
          "label",
          { id: "labelChave", htmlFor: "chave" },
          s.createElement("input", {
            type: "text",
            id: "chave",
            required: !0,
            value: a,
            onChange: (c) => o(c.target.value),
          }),
          s.createElement("span", null, "Sua chave de ativa\xE7\xE3o")
        ),
        s.createElement(
          "button",
          { id: "entrarBtn", type: "submit" },
          "Entrar"
        ),
        s.createElement(
          "button",
          {
            id: "freeUserBtn",
            type: "button",
            onClick: () => {
              i("/dashboard");
            },
          },
          "Sou um usu\xE1rio gr\xE1tis"
        ),
        s.createElement(
          "h3",
          null,
          "* Os \xE1udios s\xE3o limitados a 60 segundos para usu\xE1rios gr\xE1tis"
        )
      ),
      s.createElement("aside", null)
    ),
    s.createElement(Fi, null)
  );
}
const nm = "/assets/homePageMedias.svg";
function am() {
  return s.createElement(
    s.Fragment,
    null,
    s.createElement("img", {
      src: nm,
      alt: "Central de M\xEDdias",
      className: "homeImg",
    }),
    s.createElement(
      "span",
      null,
      "Selecione um arquivo para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar um novo arquivo para o ZapVoice"
    )
  );
}
function om() {
  const { selectedItem: e } = ne(),
    [r, t] = v.exports.useState(""),
    [n, a] = v.exports.useState(""),
    [o, i] = v.exports.useState(!1),
    { updateMediaData: l } = Tr();
  v.exports.useEffect(() => {
    var u, f;
    t((u = e == null ? void 0 : e.data) != null ? u : ""),
      a((f = e == null ? void 0 : e.caption) != null ? f : ""),
      i(!1);
  }, [e]);
  async function c(u) {
    if (!u) return;
    const f = await Yn(u);
    t(String(f));
  }
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      "div",
      {
        id: "mainContent",
        className: "flex gap-2 items-center justify-center relative",
      },
      s.createElement(
        Ft,
        {
          accept: "image/*,video/*",
          multiple: !1,
          onDrop: (u) => {
            c(u[0]);
          },
          onDragOver: () => i(!0),
          onDragLeave: () => i(!1),
          onDropRejected: (u) => {
            i(!1),
              u[0].errors.find((f) => f.code === "file-invalid-type")
                ? Y.error("Formato de m\xEDdia n\xE3o aceito")
                : u[0].errors.find((f) => f.code === "file-too-large")
                ? Y.error(
                    "M\xEDdia maior que 16Mb (limite colocado pelo whatsapp web)"
                  )
                : Y.error(u[0].errors[0].message);
          },
          onDropAccepted: (u) => {
            i(!1), Y.success("M\xEDdia carregada");
          },
          maxSize: 16 * 1e3 * 1e3,
        },
        ({ getRootProps: u, getInputProps: f }) =>
          s.createElement(
            "div",
            {
              ...u(),
              style: {
                background: q(0.9, G("medias")),
                border: `2px dashed ${G("medias")}`,
                ...(o && {
                  border: "2px dashed var(--blue)",
                  background: `${q(0.85, T.blue)}`,
                  filter: "brightness(0.8)",
                }),
              },
              className:
                "w-full h-full rounded-lg flex flex-col items-center justify-center",
            },
            s.createElement("input", { ...f() }),
            r && r !== (e == null ? void 0 : e.data)
              ? s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("img", {
                    src: Xn,
                    alt: "Clique em Salvar",
                    className: "w-12 h-12 my-4 mx-auto",
                  }),
                  s.createElement(
                    "h2",
                    { className: "text-zap-green" },
                    "Arquivo carregado com sucesso!"
                  ),
                  s.createElement(
                    "span",
                    null,
                    'Clique abaixo em "Salvar" para finalizar.'
                  )
                )
              : s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("img", {
                    src: Jn,
                    alt: "Arraste seu arquivo ou clique aqui",
                  }),
                  s.createElement(
                    "p",
                    { className: "font-bold text-sm" },
                    "Clique aqui ou arraste o novo arquivo a ser salvo"
                  ),
                  s.createElement(
                    "span",
                    { className: "my-4 mx-auto font-medium" },
                    "Formatos aceitos ",
                    s.createElement("br", null),
                    "Fotos: '.jpg' .'png' '.jpeg' '.svg' '.ico' .'webp' '.bmp'",
                    s.createElement("br", null),
                    "V\xEDdeos: '.m4v' '.mp4'"
                  )
                ),
            r &&
              s.createElement(
                "div",
                {
                  id: "preview",
                  className:
                    "relative w-full h-full flex items-center justify-center pb-4",
                },
                s.createElement(xn, { base64: r })
              )
          )
      ),
      s.createElement("textarea", {
        className:
          "p-4 w-full h-full my-0 mx-auto outline-none border-0 rounded bg-[var(--zap-background)] hover:ring-1 hover:ring-[var(--green)] hover:opacity-60 focus:ring-1 focus:ring-[var(--green)] focus:opacity-100",
        style: { border: 0 },
        id: "newCaptionPreview",
        placeholder: "(Opcional) Insira uma legenda para a m\xEDdia",
        value: n,
        onChange: (u) => {
          a(u.target.value);
        },
      })
    ),
    s.createElement(Nt, {
      conditionToShow:
        r !== (e == null ? void 0 : e.data) ||
        n !== (e == null ? void 0 : e.caption),
      actionSave: () => {
        e && l({ id: e.id, data: r, caption: n });
      },
    })
  );
}
function im() {
  const { selectedItem: e } = ne();
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(gr, { fill: G("medias"), itemType: "medias" }),
    !e && s.createElement(vr, null, s.createElement(am, null)),
    !!e && s.createElement(Rt, null, s.createElement(om, null))
  );
}
const lm = "/assets/homePageDocs.svg";
function sm() {
  return s.createElement(
    s.Fragment,
    null,
    s.createElement("img", {
      src: lm,
      alt: "Central de Documentos",
      className: "homeImg",
    }),
    s.createElement(
      "span",
      null,
      "Selecione um arquivo para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar um novo documento para o ZapVoice"
    )
  );
}
const cm = re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${q(0.9, G("docs"))};

    border: 2px dashed ${G("docs")};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${q(0.85, T.green)};
      filter: brightness(0.8);
    }
    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
    }
    h2 {
      color: ${G("docs")};
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }
    span {
      margin: 1rem auto;
      font-weight: 500;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
  }
  #preview {
    position: relative;
    height: 15rem;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;
      font-size: 1.25rem;

      .itemPreviewIcon {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
function um() {
  const { selectedItem: e } = ne(),
    [r, t] = v.exports.useState(""),
    [n, a] = v.exports.useState(""),
    [o, i] = v.exports.useState(!1),
    { updateDocData: l } = kr();
  v.exports.useEffect(() => {
    var u, f;
    t((u = e == null ? void 0 : e.data) != null ? u : ""),
      a((f = e == null ? void 0 : e.fileName) != null ? f : ""),
      i(!1);
  }, [e]);
  async function c(u) {
    if (!u) return;
    const f = await Yn(u);
    t(String(f)), a(u.name);
  }
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      cm,
      { id: "mainContent" },
      s.createElement(
        Ft,
        {
          multiple: !1,
          onDrop: (u) => {
            c(u[0]);
          },
          onDragOver: () => i(!0),
          onDragLeave: () => i(!1),
          onDropRejected: (u) => {
            i(!1),
              u[0].errors.find((f) => f.code === "file-invalid-type")
                ? Y.error("Formato de documento n\xE3o aceito")
                : u[0].errors.find((f) => f.code === "file-too-large")
                ? Y.error(
                    "Arquivo maior que 64Mb (limite colocado pelo whatsapp web)"
                  )
                : Y.error(u[0].errors[0].message);
          },
          onDropAccepted: (u) => {
            i(!1), Y.success("Documento carregado");
          },
          maxSize: 64 * 1e3 * 1e3,
        },
        ({ getRootProps: u, getInputProps: f }) =>
          s.createElement(
            "div",
            { ...u({ className: `dropzone ${o ? "isDragginOn" : ""}` }) },
            s.createElement("input", { ...f() }),
            r && r !== (e == null ? void 0 : e.data)
              ? s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("img", { src: Xn, alt: "Clique em Salvar" }),
                  s.createElement("h2", null, "Arquivo carregado com sucesso!"),
                  s.createElement(
                    "span",
                    null,
                    'Clique abaixo em "Salvar" para finalizar.'
                  )
                )
              : s.createElement(
                  s.Fragment,
                  null,
                  s.createElement("img", {
                    src: Jn,
                    alt: "Arraste seu arquivo ou clique aqui",
                  }),
                  s.createElement(
                    "p",
                    null,
                    "Clique aqui ou arraste o novo documento a ser salvo"
                  )
                ),
            r &&
              s.createElement(
                "div",
                { id: "preview" },
                s.createElement(
                  "a",
                  {
                    download: n,
                    href: r,
                    onClick: (d) => {
                      d.stopPropagation();
                    },
                  },
                  s.createElement(Zi, { className: "itemPreviewIcon" }),
                  n
                )
              )
          )
      )
    ),
    s.createElement(Nt, {
      conditionToShow: r !== (e == null ? void 0 : e.data),
      actionSave: () => {
        e && l({ id: e.id, data: r, fileName: n });
      },
    })
  );
}
function dm() {
  const { selectedItem: e } = ne();
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(gr, { fill: G("docs"), itemType: "docs" }),
    !e && s.createElement(vr, null, s.createElement(sm, null)),
    !!e && s.createElement(Rt, null, s.createElement(um, null))
  );
}
const pm = "/assets/homePageMessages.svg";
function fm() {
  return s.createElement(
    s.Fragment,
    null,
    s.createElement("img", {
      src: pm,
      alt: "Central de Mensagens",
      className: "homeImg",
    }),
    s.createElement(
      "span",
      null,
      "Selecione uma mensagem para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar uma nova mensagem para o ZapVoice"
    )
  );
}
const mm = re.div`
  position: relative;
  display: flex;

  #msgPreview {
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: 0;
    border-radius: 0.25rem;
    background: var(--zap-background);

    &:hover {
      border: 1px solid ${q(0.5, G("mensagens"))};
      outline: 1px solid
        ${q(0.5, G("mensagens"))};
    }
    &:focus {
      border: 1.2px solid ${G("mensagens")};
      outline: 1.2px solid ${G("mensagens")};
    }
  }
`;
function gm() {
  const [e, r] = v.exports.useState(""),
    { selectedItem: t } = ne(),
    { updateMessageData: n } = Rr();
  return (
    v.exports.useEffect(() => {
      var a;
      r((a = t == null ? void 0 : t.data) != null ? a : "");
    }, [t]),
    s.createElement(
      s.Fragment,
      null,
      s.createElement(
        mm,
        { id: "mainContent" },
        s.createElement("textarea", {
          id: "msgPreview",
          value: e,
          onChange: (a) => {
            r(a.target.value);
          },
        })
      ),
      s.createElement(Nt, {
        conditionToShow:
          e !== (t == null ? void 0 : t.data) &&
          (!!e || !!(t != null && t.data)),
        actionSave: () => {
          t && n({ id: t.id, data: e });
        },
      })
    )
  );
}
function vm() {
  const { selectedItem: e } = ne();
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(gr, { fill: G("mensagens"), itemType: "mensagens" }),
    !e && s.createElement(vr, null, s.createElement(fm, null)),
    !!e && s.createElement(Rt, null, s.createElement(gm, null))
  );
}
const bm = re.header`
  height: 3.5rem;
  width: 100%;
  background: var(--header-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  @media (max-width: 1024px) {
    padding: 0 0.25rem;
  }

  img {
    height: 2.5rem;
    width: auto;
    filter: drop-shadow(0px 0px 15px #0000009a);
  }
  h1 {
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: 300;
  }
  #openCentralBackupBtn {
    background: ${q(0.4, T.purple)};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
  }
  #logoutBtn {
    background: ${q(0.4, T.red)};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    margin-left: 1rem;
  }
  #containerSwitchDarkMode {
    display: flex;
    align-items: center;
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    span {
      font-weight: 700;
      color: white;
    }
  }
`;
function hm({ handleOpenCentralBackupModal: e }) {
  const { isDarkTheme: r, setIsDarkTheme: t } = he(),
    [n, a] = v.exports.useState(!1);
  function o() {
    a(!0);
  }
  function i() {
    a(!1);
  }
  return s.createElement(
    bm,
    null,
    s.createElement("img", { src: r ? pl : fl, alt: "ZapVoice" }),
    s.createElement(
      "div",
      { id: "containerSwitchDarkMode" },
      s.createElement("span", null, " MODO ", r ? "DARK" : "LIGHT"),
      s.createElement(yn, {
        id: "switchDarkMode",
        checked: r,
        onClick: () => t(!r),
      })
    ),
    s.createElement(
      "div",
      null,
      s.createElement(
        "button",
        { type: "button", id: "openCentralBackupBtn", onClick: e },
        "Central de Backups"
      ),
      s.createElement(
        "button",
        { type: "button", id: "logoutBtn", onClick: o },
        "Deslogar"
      )
    ),
    s.createElement(Qe, {
      details: {
        title: "Tem certeza que deseja deslogar?",
        description:
          "Sua chave ser\xE1 removida, mas seus itens e configura\xE7\xF5es permanecer\xE3o NESSE COMPUTADOR. Caso precise transferir, fa\xE7a um backup antes.",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: r ? T.gray3 : T.gray4,
        fillOk: T.red,
      },
      onRequestOk: async () => {
        at("chave"), window.location.reload();
      },
      isOpen: n,
      onRequestClose: i,
    })
  );
}
const xm = re.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3.5rem 1fr 2rem;
`,
  ym = re.div`
  padding: ${({ isMobile: e }) => (e ? "1rem" : "1rem 5rem")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.25rem;
    font-weight: 900;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  main#mainDashboardLayout {
    height: 100%;
    width: 100%;
    ${({ isMobile: e }) =>
      e
        ? ke`
            display: flex;
            flex-direction: column;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          `
        : ke`
            display: grid;
            grid-template-columns: 11rem 1fr;
            grid-template-rows: 2rem 1fr;
            grid-template-areas:
              ". btn"
              "links content";
          `};

    #addNewItemBtn {
      grid-area: btn;
      width: ${({ isMobile: e }) => (e ? "100%" : "10rem")};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--triple-gradient);
      background-size: 250%;
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({ isMobile: e }) => (e ? "none" : "translateY(-1rem);")};
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 100%;
      }
    }
    #addNewFunnelBtn {
      grid-area: btn;
      width: ${({ isMobile: e }) => (e ? "100%" : "10rem")};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--yellow);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({ isMobile: e }) => (e ? "none" : "translateY(-1rem);")};
    }
    #addNewTriggerBtn {
      grid-area: btn;
      width: ${({ isMobile: e }) => (e ? "100%" : "10rem")};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--orange);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({ isMobile: e }) => (e ? "none" : "translateY(-1rem);")};
    }
    #linksSection {
      ${({ isMobile: e }) =>
        e
          ? ke`
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            `
          : ke`
              grid-area: links;
            `};
      div#linksSectionContainer {
        ${({ isMobile: e }) =>
          e
            ? ke`
                display: flex;
                align-items: center;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;
              `
            : ke`
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: space-evenly;
                height: 100%;
              `};

        a {
          flex: 1;
          text-decoration: none;
          display: inline-block;
          & + a {
            margin-top: ${({ isMobile: e }) => (e ? "0" : "0.5rem")};
            margin-left: ${({ isMobile: e }) => (e ? "0.5rem" : "0")};
          }
        }
      }
    }
    #panelContent {
      grid-area: content;
      background: var(--shape);
      display: flex;
      border-radius: 0.5rem;
      overflow: hidden;
      resize: both;
      ${({ isMobile: e }) =>
        e
          ? ke`
              width: 100%;
              flex: 0.9;
            `
          : ke`
              margin-left: 1rem;
              height: 65vh;
              min-height: 65vh;
            `};
    }
  }
`,
  Em = re.div`
  border: none;
  width: 11.25rem;
  height: 100%;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.25rem;
  background: ${({ isActive: e, fill: r }) =>
    e && !!r ? q(0.8, r) : q(0.7, T.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -10px ${({ fill: e }) => e && q(0.1, e)};
  &:hover {
    filter: brightness(0.9);
    background: ${({ fill: e }) => e && q(0.8, e)};
  }

  .imageContainer {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ isActive: e, fill: r }) =>
      e && !!r ? q(0.8, r) : q(0.7, T.gray4)};

    box-shadow: 0px 0px 10px -5px #0000005d;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    margin-right: 0.75rem;
    display: relative;
    .insideIcon {
      height: 1.5rem;
    }
  }
  span {
    color: var(--text-title);
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    text-shadow: 0px 0px 5px #0000005d;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ isActive: e, fill: r }) => (e && !!r ? r : "var(--text-title)")};
  }
`;
function or({ name: e, Icon: r, fill: t, isActive: n }) {
  return s.createElement(
    Em,
    { fill: t, isActive: !!n },
    s.createElement(
      "div",
      { className: "imageContainer" },
      s.createElement(r, { className: "insideIcon" })
    ),
    s.createElement("span", null, e)
  );
}
const gn = v.exports.forwardRef((e, r) => {
  const { children: t, ...n } = e;
  return v.exports.Children.toArray(t).some(Xa)
    ? v.exports.createElement(
        v.exports.Fragment,
        null,
        v.exports.Children.map(t, (a) =>
          Xa(a)
            ? v.exports.createElement(
                vn,
                P({}, n, { ref: r }),
                a.props.children
              )
            : a
        )
      )
    : v.exports.createElement(vn, P({}, n, { ref: r }), t);
});
gn.displayName = "Slot";
const vn = v.exports.forwardRef((e, r) => {
  const { children: t, ...n } = e;
  return v.exports.isValidElement(t)
    ? v.exports.cloneElement(t, { ...Dm(n, t.props), ref: wl(r, t.ref) })
    : v.exports.Children.count(t) > 1
    ? v.exports.Children.only(null)
    : null;
});
vn.displayName = "SlotClone";
const wm = ({ children: e }) =>
  v.exports.createElement(v.exports.Fragment, null, e);
function Xa(e) {
  return v.exports.isValidElement(e) && e.type === wm;
}
function Dm(e, r) {
  const t = { ...r };
  for (const n in r) {
    const a = e[n],
      o = r[n];
    /^on[A-Z]/.test(n)
      ? (t[n] = (...i) => {
          o == null || o(...i), a == null || a(...i);
        })
      : n === "style"
      ? (t[n] = { ...a, ...o })
      : n === "className" && (t[n] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Cm(e) {
  const r = e + "CollectionProvider",
    [t, n] = En(r),
    [a, o] = t(r, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (p) => {
      const { scope: m, children: g } = p,
        b = s.useRef(null),
        h = s.useRef(new Map()).current;
      return s.createElement(a, { scope: m, itemMap: h, collectionRef: b }, g);
    },
    l = e + "CollectionSlot",
    c = s.forwardRef((p, m) => {
      const { scope: g, children: b } = p,
        h = o(l, g),
        x = nn(m, h.collectionRef);
      return s.createElement(gn, { ref: x }, b);
    }),
    u = e + "CollectionItemSlot",
    f = "data-radix-collection-item";
  return [
    {
      Provider: i,
      Slot: c,
      ItemSlot: s.forwardRef((p, m) => {
        const { scope: g, children: b, ...h } = p,
          x = s.useRef(null),
          y = nn(m, x),
          w = o(u, g);
        return (
          s.useEffect(
            () => (
              w.itemMap.set(x, { ref: x, ...h }),
              () => {
                w.itemMap.delete(x);
              }
            )
          ),
          s.createElement(gn, { [f]: "", ref: y }, b)
        );
      }),
    },
    function (p) {
      const m = o(e + "CollectionConsumer", p);
      return s.useCallback(() => {
        const g = m.collectionRef.current;
        if (!g) return [];
        const b = Array.from(g.querySelectorAll(`[${f}]`));
        return Array.from(m.itemMap.values()).sort(
          (h, x) => b.indexOf(h.ref.current) - b.indexOf(x.ref.current)
        );
      }, [m.collectionRef, m.itemMap]);
    },
    n,
  ];
}
const Im = { bubbles: !1, cancelable: !0 },
  [bn, Ni, Sm] = Cm("RovingFocusGroup"),
  [Am, Ri] = En("RovingFocusGroup", [Sm]),
  [Om, Pm] = Am("RovingFocusGroup"),
  Fm = v.exports.forwardRef((e, r) =>
    v.exports.createElement(
      bn.Provider,
      { scope: e.__scopeRovingFocusGroup },
      v.exports.createElement(
        bn.Slot,
        { scope: e.__scopeRovingFocusGroup },
        v.exports.createElement(Nm, P({}, e, { ref: r }))
      )
    )
  ),
  Nm = v.exports.forwardRef((e, r) => {
    const {
        __scopeRovingFocusGroup: t,
        orientation: n,
        dir: a = "ltr",
        loop: o = !1,
        currentTabStopId: i,
        defaultCurrentTabStopId: l,
        onCurrentTabStopIdChange: c,
        onEntryFocus: u,
        ...f
      } = e,
      d = v.exports.useRef(null),
      p = nn(r, d),
      [m = null, g] = io({ prop: i, defaultProp: l, onChange: c }),
      [b, h] = v.exports.useState(!1),
      x = Dl(u),
      y = Ni(t),
      w = v.exports.useRef(!1);
    return (
      v.exports.useEffect(() => {
        const E = d.current;
        if (E)
          return (
            E.addEventListener("rovingFocusGroup.onEntryFocus", x),
            () => E.removeEventListener("rovingFocusGroup.onEntryFocus", x)
          );
      }, [x]),
      v.exports.createElement(
        Om,
        {
          scope: t,
          orientation: n,
          dir: a,
          loop: o,
          currentTabStopId: m,
          onItemFocus: v.exports.useCallback((E) => g(E), [g]),
          onItemShiftTab: v.exports.useCallback(() => h(!0), []),
        },
        v.exports.createElement(
          dr.div,
          P({ tabIndex: b ? -1 : 0, "data-orientation": n }, f, {
            ref: p,
            style: { outline: "none", ...e.style },
            onMouseDown: Le(e.onMouseDown, () => {
              w.current = !0;
            }),
            onFocus: Le(e.onFocus, (E) => {
              const I = !w.current;
              if (E.target === E.currentTarget && I && !b) {
                const C = new Event("rovingFocusGroup.onEntryFocus", Im);
                if ((E.currentTarget.dispatchEvent(C), !C.defaultPrevented)) {
                  const N = y().filter((B) => B.focusable);
                  Bi(
                    [N.find((B) => B.active), N.find((B) => B.id === m), ...N]
                      .filter(Boolean)
                      .map((B) => B.ref.current)
                  );
                }
              }
              w.current = !1;
            }),
            onBlur: Le(e.onBlur, () => h(!1)),
          })
        )
      )
    );
  }),
  Rm = v.exports.forwardRef((e, r) => {
    const {
        __scopeRovingFocusGroup: t,
        focusable: n = !0,
        active: a = !1,
        ...o
      } = e,
      i = lo(),
      l = Pm("RovingFocusGroupItem", t),
      c = l.currentTabStopId === i,
      u = Ni(t);
    return v.exports.createElement(
      bn.ItemSlot,
      { scope: t, id: i, focusable: n, active: a },
      v.exports.createElement(
        dr.span,
        P({ tabIndex: c ? 0 : -1, "data-orientation": l.orientation }, o, {
          ref: r,
          onMouseDown: Le(e.onMouseDown, (f) => {
            n ? l.onItemFocus(i) : f.preventDefault();
          }),
          onFocus: Le(e.onFocus, () => l.onItemFocus(i)),
          onKeyDown: Le(e.onKeyDown, (f) => {
            if (f.key === "Tab" && f.shiftKey) return void l.onItemShiftTab();
            if (f.target !== f.currentTarget) return;
            const d = (function (g, b, h) {
              const x = (function (y, w) {
                return w !== "rtl"
                  ? y
                  : y === "ArrowLeft"
                  ? "ArrowRight"
                  : y === "ArrowRight"
                  ? "ArrowLeft"
                  : y;
              })(g.key, h);
              return (b === "vertical" &&
                ["ArrowLeft", "ArrowRight"].includes(x)) ||
                (b === "horizontal" && ["ArrowUp", "ArrowDown"].includes(x))
                ? void 0
                : Bm[x];
            })(f, l.orientation, l.dir);
            if (d !== void 0) {
              f.preventDefault();
              let g = u()
                .filter((b) => b.focusable)
                .map((b) => b.ref.current);
              if (d === "last") g.reverse();
              else if (d === "prev" || d === "next") {
                d === "prev" && g.reverse();
                const b = g.indexOf(f.currentTarget);
                g = l.loop
                  ? ((m = b + 1), (p = g).map((h, x) => p[(m + x) % p.length]))
                  : g.slice(b + 1);
              }
              setTimeout(() => Bi(g));
            }
            var p, m;
          }),
        })
      )
    );
  }),
  Bm = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function Bi(e) {
  const r = document.activeElement;
  for (const t of e)
    if (t === r || (t.focus(), document.activeElement !== r)) return;
}
const Tm = Fm,
  km = Rm,
  [Mm, vg] = En("Tabs", [Ri]),
  Ti = Ri(),
  [Lm, Zn] = Mm("Tabs"),
  $m = v.exports.forwardRef((e, r) => {
    const {
        __scopeTabs: t,
        value: n,
        onValueChange: a,
        defaultValue: o,
        orientation: i = "horizontal",
        dir: l = "ltr",
        activationMode: c = "automatic",
        ...u
      } = e,
      [f, d] = io({ prop: n, onChange: a, defaultProp: o });
    return v.exports.createElement(
      Lm,
      {
        scope: t,
        baseId: lo(),
        value: f,
        onValueChange: d,
        orientation: i,
        dir: l,
        activationMode: c,
      },
      v.exports.createElement(
        dr.div,
        P({ "data-orientation": i }, u, { ref: r })
      )
    );
  }),
  Gm = v.exports.forwardRef((e, r) => {
    const { __scopeTabs: t, loop: n = !0, ...a } = e,
      o = Zn("TabsList", t),
      i = Ti(t);
    return v.exports.createElement(
      Tm,
      P({ asChild: !0 }, i, {
        orientation: o.orientation,
        dir: o.dir,
        loop: n,
      }),
      v.exports.createElement(
        dr.div,
        P(
          { role: "tablist", "aria-orientation": o.orientation, dir: o.dir },
          a,
          { ref: r }
        )
      )
    );
  }),
  zm = v.exports.forwardRef((e, r) => {
    const { __scopeTabs: t, value: n, disabled: a = !1, ...o } = e,
      i = Zn("TabsTrigger", t),
      l = Ti(t),
      c = ki(i.baseId, n),
      u = Mi(i.baseId, n),
      f = n === i.value;
    return v.exports.createElement(
      km,
      P({ asChild: !0 }, l, { focusable: !a, active: f }),
      v.exports.createElement(
        dr.button,
        P(
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": u,
            "data-state": f ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: c,
          },
          o,
          {
            ref: r,
            onMouseDown: Le(e.onMouseDown, (d) => {
              a || d.button !== 0 || d.ctrlKey !== !1
                ? d.preventDefault()
                : i.onValueChange(n);
            }),
            onKeyDown: Le(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(n);
            }),
            onFocus: Le(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              f || a || !d || i.onValueChange(n);
            }),
          }
        )
      )
    );
  }),
  jm = v.exports.forwardRef((e, r) => {
    const { __scopeTabs: t, value: n, children: a, ...o } = e,
      i = Zn("TabsContent", t),
      l = ki(i.baseId, n),
      c = Mi(i.baseId, n),
      u = n === i.value;
    return v.exports.createElement(
      dr.div,
      P(
        {
          "data-state": u ? "active" : "inactive",
          "data-orientation": i.orientation,
          role: "tabpanel",
          "aria-labelledby": l,
          hidden: !u,
          id: c,
          tabIndex: 0,
        },
        o,
        { ref: r }
      ),
      u && a
    );
  });
function ki(e, r) {
  return `${e}-trigger-${r}`;
}
function Mi(e, r) {
  return `${e}-content-${r}`;
}
const qm = $m,
  Wm = Gm,
  Hm = zm,
  Um = jm,
  Vm = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .createNewBackupBtn {
    margin: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: 800;
    border-radius: 0.5rem;
    background: ${q(0.3, T.veryperi)};
  }
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${q(0.8, T.veryperi)};
    font-size: 1rem;
    border: 2px dashed ${T.veryperi};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${q(0.85, T.green)};
      filter: brightness(0.8);
    }
  }
  h1 {
    margin-bottom: 1rem;
  }
`,
  Km = xt(qm, {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "15rem",
  }),
  Ym = xt(Wm, {
    flexShrink: 0,
    display: "flex",
    borderBottom: `1px solid ${T.gray1}`,
  }),
  rn = xt(Hm, {
    all: "unset",
    backgroundColor: "var(--shape)",
    padding: "0 1rem",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 1,
    color: "var(--text-title)",
    userSelect: "none",
    "&:first-child": { borderTopLeftRadius: 6 },
    "&:last-child": { borderTopRightRadius: 6 },
    "&:hover": { color: T.veryperi },
    '&[data-state="active"]': {
      color: T.veryperi,
      boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
    },
    "&:focus": { position: "relative", boxShadow: "0 0 0 2px black" },
  }),
  tn = xt(Um, {
    flexGrow: 1,
    padding: "1rem",
    position: "relative",
    textAlign: "center",
    backgroundColor: "var(--shape)",
    color: "var(--text-title)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: "none",
    "&:focus": { boxShadow: "0 0 0 2px black" },
    '&[data-state="active"]': {
      display: "grid",
      gridTemplateRows: "1.5rem 1fr",
    },
  });
async function Jm(e) {
  return new Promise((r, t) => {
    const n = new FileReader();
    (n.onload = async function (a) {
      var o;
      try {
        const i =
            ((o = a == null ? void 0 : a.target) == null ? void 0 : o.result) &&
            String(a.target.result).length > 0
              ? JSON.parse(String(a.target.result))
              : [],
          l =
            i &&
            (i.mensagensIndex ||
              i.mediasIndex ||
              i.audiosIndex ||
              i.docsIndex) &&
            typeof i.objectsList == "object" &&
            i.objectsList.length > 0,
          c = i && i.mensagens && i.medias && i.audios;
        if (l || c) {
          const u = await me("chave");
          chrome != null && chrome.storage
            ? chrome.storage.local.clear()
            : localStorage.clear(),
            Me({ chave: u });
        }
        l
          ? (Me({
              mensagensIndex: i.mensagensIndex,
              mediasIndex: i.mediasIndex,
              audiosIndex: i.audiosIndex,
              docsIndex: i.docsIndex,
            }),
            i.funis ? Me({ funis: i.funis }) : at("funis"),
            i.triggers ? Me({ triggers: i.triggers }) : at("triggers"),
            i.objectsList.forEach((u) => {
              !(u != null && u.id) || Me({ [u.id]: u });
            }),
            await me("LocalStorageReady"),
            r(!0))
          : c &&
            (i.funis ? Me({ funis: i.funis }) : at("funis"),
            delete i.funis,
            await Promise.all(
              Object.keys(i).map((u) => {
                const f = i[u] && i[u].length > 0 ? JSON.parse(i[u]) : [];
                if (f.length === 0) return;
                const d = f.map((p) => {
                  var g, b, h, x;
                  const m = {
                    name: (g = p.name) != null ? g : "Novo Item",
                    id: (b = p.id) != null ? b : Je(),
                    type: (h = p.type) != null ? h : u,
                    ...(u === "audios" && {
                      sendAsForwarded: (x = p.sendAsForwarded) != null ? x : !1,
                    }),
                  };
                  return (
                    Me({
                      [m.id]: JSON.stringify({
                        type: m.type,
                        id: m.id,
                        data: p.data,
                        ...(m.sendAsForwarded && {
                          sendAsForwarded: m.sendAsForwarded,
                        }),
                      }),
                    }),
                    m
                  );
                });
                Me({ [`${u}Index`]: JSON.stringify(d) });
              })
            ),
            await me("LocalStorageReady"),
            r(!0));
      } catch (i) {
        Y.error(String(i)), t(i);
      }
    }),
      (n.onerror = (a) => t(a)),
      n.readAsText(e);
  });
}
const Xm = "/assets/loadingVeryperi.svg";
function Qn({ embedId: e, loading: r, props: t, className: n }) {
  return s.createElement(
    "div",
    {
      className: Se("h-[90%] w-[90%] mx-auto", n),
      style: { background: `url(${Xm}) no-repeat center center` },
    },
    !r &&
      s.createElement(
        "a",
        {
          className: "w-full h-full",
          href: `https://www.youtube.com/watch?v=${e}`,
          target: "_blank",
        },
        s.createElement(
          "div",
          { className: "w-full h-full relative" },
          s.createElement("img", {
            className: "w-full h-full object-cover",
            src: `https://i.ytimg.com/vi/${e}/hqdefault.jpg`,
            alt: "Imagem do v\xEDdeo",
          }),
          s.createElement(Qi, {
            className:
              "fill-[#FF0000] w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          })
        )
      )
  );
}
async function Zm() {
  return new Promise(async (e, r) => {
    var c, u, f, d, p, m;
    const t = (c = await me("audiosIndex")) != null ? c : [],
      n = (u = await me("mensagensIndex")) != null ? u : [],
      a = (f = await me("mediasIndex")) != null ? f : [],
      o = (d = await me("docsIndex")) != null ? d : [],
      i = (p = await me("funis")) != null ? p : [],
      l = (m = await me("triggers")) != null ? m : [];
    if (
      (n && n.length > 0) ||
      (a && a.length > 0) ||
      (o && o.length > 0) ||
      (t && t.length > 0)
    ) {
      const g = [
          ...(await Promise.all(n.map(async (x) => await me(x.id)))),
          ...(await Promise.all(t.map(async (x) => await me(x.id)))),
          ...(await Promise.all(a.map(async (x) => await me(x.id)))),
          ...(await Promise.all(o.map(async (x) => await me(x.id)))),
        ],
        b = new Blob(
          [
            JSON.stringify({
              mensagensIndex: n,
              audiosIndex: t,
              mediasIndex: a,
              docsIndex: o,
              funis: i,
              triggers: l,
              objectsList: g.filter((x) => x),
            }),
          ],
          { type: "application/json" }
        ),
        h = URL.createObjectURL(b);
      e(h);
    } else
      Y.error("N\xE3o h\xE1 nada aqui para exportar"),
        r(new Error("N\xE3o h\xE1 nada aqui para exportar"));
  });
}
function Qm({ isOpen: e, onRequestClose: r }) {
  const [t, n] = v.exports.useState(!1),
    [a, o] = v.exports.useState(!1),
    { isDarkTheme: i } = he(),
    [l, c] = v.exports.useState();
  function u() {
    o(!0);
  }
  function f() {
    o(!1);
  }
  function d() {
    r(), o(!1), c(void 0);
  }
  const p = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: i ? T.gray3 : T.gray4,
        fillOk: T.red,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk ModalCentralBackup");
      },
      isOpen: !1,
      onRequestClose: f,
    },
    [m, g] = v.exports.useState(p);
  async function b(y) {
    !y ||
      (u(),
      g({
        ...m,
        details: {
          ...m.details,
          title: `Tem certeza que deseja importar as configura\xE7\xF5es do arquivo ${y.name}?`,
          description:
            "Fa\xE7a um Backup antes! Essa a\xE7\xE3o vai SUBSTITUIR TODAS as suas configura\xE7\xF5es atuais",
          okTitle: "Importar",
          cancelTitle: "Cancelar",
          fillOk: T.green,
        },
        onRequestOk: async () => {
          await Y.promise(Jm(y), {
            pending:
              "Importando o backup, n\xE3o feche ou recarregue a p\xE1gina...",
            success: "Backup importado com sucesso!",
            error: "Erro ao importar o backup",
          }),
            f(),
            r(),
            setTimeout(() => window.location.reload(), 2500);
        },
      }));
  }
  const [h, x] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      h ||
        wn("tutorial-backup")
          .then((y) => x(y))
          .catch((y) => {
            x("4TwT_pUaBco"), console.log(y);
          });
    }),
    s.createElement(
      hn,
      {
        closeTimeoutMS: 400,
        isOpen: e,
        onRequestClose: d,
        overlayClassName: "react-modal-overlay",
        className: "react-modal-content",
      },
      s.createElement(
        "button",
        { type: "button", onClick: d, className: "react-modal-close" },
        s.createElement(to, { fill: T.red })
      ),
      s.createElement(
        Vm,
        null,
        s.createElement(Qe, { ...m, isOpen: a }),
        s.createElement("h1", null, "Central de Backups"),
        s.createElement(
          Km,
          { defaultValue: "create", orientation: "horizontal" },
          s.createElement(
            Ym,
            {
              "aria-label":
                "Tr\xEAs abas dispon\xEDveis: Criar um backup, Importar um backup existente e Tutorial completo sobre os backups",
            },
            s.createElement(
              rn,
              { className: "tabTrigger", value: "create" },
              "Criar novo backup"
            ),
            s.createElement(
              rn,
              { className: "tabTrigger", value: "import" },
              "Importar backup"
            ),
            s.createElement(
              rn,
              { className: "tabTrigger", value: "tutorial" },
              "Tutorial completo"
            )
          ),
          s.createElement(
            tn,
            { value: "create" },
            l
              ? s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "div",
                    null,
                    s.createElement(
                      "span",
                      { className: "text-lg" },
                      "Seu backup est\xE1 pronto, clique no bot\xE3o abaixo para fazer o download"
                    )
                  ),
                  s.createElement(
                    "div",
                    { className: "flex items-center justify-center" },
                    s.createElement(
                      "a",
                      {
                        className:
                          "flex items-center justify-center gap-2 py-4 px-8 bg-zap-green rounded-md",
                        href: l,
                        download: `backup ${String(
                          new Date()
                            .toLocaleDateString("pt-BR")
                            .replaceAll("/", "-")
                        )}.json`,
                      },
                      s.createElement(_i, { className: "fill-white h-6 w-6" }),
                      s.createElement(
                        "span",
                        { className: "text-white text-base font-bold" },
                        "Fazer download"
                      )
                    )
                  )
                )
              : s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "h2",
                    null,
                    "Clique no bot\xE3o para criar um novo backup"
                  ),
                  s.createElement(
                    "button",
                    {
                      type: "button",
                      className: "createNewBackupBtn",
                      onClick: () => {
                        g({
                          ...m,
                          details: {
                            ...m.details,
                            title: "Deseja realmente exportar um backup agora?",
                            okTitle: "Exportar",
                            cancelTitle: "Cancelar",
                            fillOk: T.green,
                          },
                          onRequestOk: async () => {
                            const y = await Y.promise(Zm(), {
                              pending: "Gerando seu backup, aguarde...",
                              success: "Backup gerado com sucesso!",
                              error: "Erro ao gerar o backup",
                            });
                            f(), c(y);
                          },
                        }),
                          u();
                      },
                    },
                    "Gerar um backup agora"
                  )
                )
          ),
          s.createElement(
            tn,
            { value: "import" },
            s.createElement("h2", null, "Importar backup existente conteudo"),
            s.createElement(
              Ft,
              {
                accept: "application/JSON",
                multiple: !1,
                onDrop: (y) => {
                  b(y[0]);
                },
                onDragOver: () => n(!0),
                onDragLeave: () => n(!1),
                onDropRejected: (y) => {
                  n(!1),
                    y[0].errors.find((w) => w.code === "file-invalid-type")
                      ? (console.log(y), Y.error("Formato n\xE3o aceito"))
                      : Y.error(y[0].errors[0].message);
                },
                onDropAccepted: (y) => {
                  n(!1);
                },
              },
              ({ getRootProps: y, getInputProps: w }) =>
                s.createElement(
                  "div",
                  { ...y({ className: `dropzone ${t ? "isDragginOn" : ""}` }) },
                  s.createElement("input", { ...w() }),
                  s.createElement(
                    "p",
                    null,
                    "Clique aqui ou arraste o backup a ser importado"
                  ),
                  s.createElement(
                    "span",
                    null,
                    "Lembre-se que ao importar, todas as configura\xE7\xF5es anteriores ser\xE3o substituidas"
                  )
                )
            )
          ),
          s.createElement(
            tn,
            { value: "tutorial" },
            s.createElement(
              "h2",
              null,
              "Assista o tutorial de como utilizar o backup"
            ),
            s.createElement(Qn, { embedId: h, loading: !h })
          )
        )
      )
    )
  );
}
function _m() {
  const [e, r] = v.exports.useState(!1),
    { setSelectedItem: t, setSelectedFunnel: n, setSelectedTrigger: a } = ne(),
    { createNewMessage: o } = Rr(),
    { createNewAudio: i } = Br(),
    { createNewMedia: l } = Tr(),
    { createNewDoc: c } = kr(),
    { createNewFunnel: u } = Ze(),
    { createNewTrigger: f } = Mr(),
    d = no(),
    [p, m] = v.exports.useState("");
  v.exports.useEffect(() => {
    var E;
    const x =
      (E = d == null ? void 0 : d.pathname) == null
        ? void 0
        : E.match(/^\/dashboard\/(.*)$/);
    if (!x) return m("");
    const [y, w] = x;
    return m(w || "");
  }, [d]);
  const g = {
    mensagens: o,
    audios: i,
    medias: l,
    funis: u,
    docs: c,
    triggers: f,
  };
  function b() {
    r(!1);
  }
  function h() {
    r(!0);
  }
  return s.createElement(
    xm,
    null,
    s.createElement(Qm, { isOpen: e, onRequestClose: b }),
    s.createElement(hm, { handleOpenCentralBackupModal: h }),
    s.createElement(
      ym,
      { isMobile: window.innerWidth < 1024 },
      s.createElement("h1", null, "Bem vindo(a) ao seu Painel de Controle!"),
      s.createElement(
        "h2",
        null,
        "O que voc\xEA deseja adicionar ou gerenciar?"
      ),
      s.createElement(
        "main",
        { id: "mainDashboardLayout" },
        p &&
          s.createElement(
            "button",
            {
              id:
                p === "funis"
                  ? "addNewFunnelBtn"
                  : p === "triggers"
                  ? "addNewTriggerBtn"
                  : "addNewItemBtn",
              type: "button",
              onClick: () => {
                g[p]();
              },
            },
            "+ Novo",
            " ",
            p === "funis" ? "Funil" : p === "triggers" ? "Gatilho" : "Item"
          ),
        s.createElement(
          "section",
          { id: "linksSection" },
          s.createElement(
            "div",
            { id: "linksSectionContainer" },
            s.createElement(
              nr,
              {
                to: Ee.mensagens,
                onClick: () => {
                  t(void 0), n(void 0), a(void 0);
                },
              },
              s.createElement(or, {
                name: "Mensagens",
                Icon: Ie("mensagens"),
                isActive: p === "mensagens",
                fill: G("mensagens"),
              })
            ),
            s.createElement(
              nr,
              {
                to: Ee.audios,
                onClick: () => {
                  t(void 0), n(void 0), a(void 0);
                },
              },
              s.createElement(or, {
                name: "\xC1udios",
                Icon: Ie("audios"),
                isActive: p === "audios",
                fill: G("audios"),
              })
            ),
            s.createElement(
              nr,
              {
                to: Ee.medias,
                onClick: () => {
                  t(void 0), n(void 0), a(void 0);
                },
              },
              s.createElement(or, {
                name: "M\xEDdias",
                Icon: Ie("medias"),
                isActive: p === "medias",
                fill: G("medias"),
              })
            ),
            s.createElement(
              nr,
              {
                to: Ee.docs,
                onClick: () => {
                  t(void 0), n(void 0), a(void 0);
                },
              },
              s.createElement(or, {
                name: "Documentos",
                Icon: Ie("docs"),
                isActive: p === "docs",
                fill: G("docs"),
              })
            ),
            s.createElement(
              nr,
              {
                to: Ee.funis,
                onClick: () => {
                  t(void 0), n(void 0), a(void 0);
                },
              },
              s.createElement(or, {
                name: "Funis",
                Icon: Ie("funis"),
                isActive: p === "funis",
                fill: G("funis"),
              })
            ),
            s.createElement(
              nr,
              {
                to: Ee.triggers,
                onClick: () => {
                  t(void 0), n(void 0), a(void 0);
                },
                className: "relative",
              },
              s.createElement(or, {
                name: "Gatilhos",
                Icon: Ie("triggers"),
                isActive: p === "triggers",
                fill: G("triggers"),
              }),
              s.createElement(
                "span",
                {
                  className:
                    "absolute top-0 right-0 bg-zap-veryperi font-bold px-2 rounded translate-x-2 translate-y-[-2px]",
                },
                "NOVO"
              )
            )
          )
        ),
        s.createElement(
          "section",
          { id: "panelContent" },
          s.createElement(ml, null)
        )
      )
    ),
    s.createElement(Fi, null)
  );
}
const eg = re.div`
  text-align: center;
  padding: 1.5rem;
  margin: 0 auto;
  position: relative;
  h1 {
    margin-bottom: 1rem;
  }
`;
function rg() {
  const [e, r] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      e ||
        wn("home-video")
          .then((t) => r(t))
          .catch((t) => {
            r("4TwT_pUaBco"), console.log(t);
          });
    }),
    s.createElement(
      eg,
      null,
      s.createElement(
        "h1",
        null,
        "Bem-vindo(a) ao novo ZapVoice, assista o v\xEDdeo abaixo para aprender a usa-lo"
      ),
      s.createElement(Qn, { embedId: e, loading: !e })
    )
  );
}
const tg = re.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  flex: 1;
  place-items: center;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--zap-background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        outline: 1px solid
          ${q(0.2, G("triggers"))};
      }
      &:focus {
        outline: 1.5px solid ${G("triggers")};
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      display: grid;
      place-items: center;
      background: ${q(0.7, T.red)};
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${T.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${q(0.5, "black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;
function Za({ children: e }) {
  const { selectedTrigger: r, setSelectedTrigger: t } = ne(),
    { updateTriggerName: n, deleteTrigger: a } = Mr(),
    [o, i] = v.exports.useState(""),
    { isDarkTheme: l } = he(),
    [c, u] = v.exports.useState(!1);
  v.exports.useEffect(() => {
    var p;
    i((p = r == null ? void 0 : r.name) != null ? p : "Default Name");
  }, [r, i]);
  function f() {
    u(!0);
  }
  function d() {
    u(!1);
  }
  return s.createElement(
    tg,
    null,
    s.createElement(Qe, {
      details: {
        title: `Tem certeza que deseja deletar o gatilho "${o}"?`,
        description:
          "Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o gatilho",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: l ? T.gray3 : T.gray4,
        fillOk: T.red,
      },
      onRequestOk: async () => r && a(r.id),
      isOpen: c,
      onRequestClose: d,
    }),
    s.createElement(
      "section",
      { id: "inputAndDelete" },
      s.createElement("input", {
        type: "text",
        value: o,
        className: r == null ? void 0 : r.type,
        onChange: (p) => {
          i(p.target.value);
        },
        onBlur: () => {
          !o && (r == null ? void 0 : r.name) && i(r.name),
            o &&
              r &&
              o !== (r == null ? void 0 : r.name) &&
              (t({ ...r, name: o }), n({ triggerId: r.id, name: o }));
        },
      }),
      s.createElement(
        "button",
        {
          type: "button",
          id: "deleteTriggerBtn",
          onClick: () => {
            f();
          },
        },
        s.createElement(Nr, { className: "trashIcon" })
      )
    ),
    e
  );
}
function ng() {
  const [e, r] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      e ||
        wn("triggers-tutorial")
          .then((t) => r(t))
          .catch((t) => {
            r("4TwT_pUaBco"), console.log(t);
          });
    }),
    s.createElement(
      "div",
      {
        className:
          "w-full h-full flex flex-col items-center justify-center p-8",
      },
      s.createElement(
        "span",
        { className: "text-2xl font-bold bg-zap-purple px-2 rounded" },
        "NOVIDADE!"
      ),
      s.createElement(
        "span",
        { className: "text-2xl font-bold" },
        "Tutorial completo dos gatilhos"
      ),
      s.createElement(Qn, { embedId: e, loading: !e })
    )
  );
}
function Qa({ className: e, ...r }) {
  const { isDarkTheme: t } = he();
  return s.createElement("input", {
    type: "text",
    className: Se(
      "outline-none ring-1 max-w-xs py-1 px-2 w-auto rounded-xl text-sm text-center font-bold hover:ring-zap-blue",
      { "bg-gray-400 ring-gray-700": t, "bg-gray-100 ring-gray-200": !t },
      e
    ),
    ...r,
  });
}
function ag({
  keywords: e,
  keywordRuleId: r,
  handleUpdateKeywordsOfAKeywordRule: t,
}) {
  const { isDarkTheme: n } = he();
  function a(d) {
    return d.map((p) => ({ keyword: p, id: Je() }));
  }
  const [o, i] = v.exports.useState(a(e)),
    [l, c] = v.exports.useState(!1),
    [u, f] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      i(a(e));
    }, [e]),
    s.createElement(
      "div",
      null,
      s.createElement(
        "div",
        { className: "flex max-w-md flex-wrap gap-3" },
        o &&
          o.map((d) =>
            s.createElement(
              "div",
              { key: d.id, className: "flex items-center gap-3" },
              s.createElement(
                "div",
                { className: "relative flex items-center" },
                s.createElement(Qa, {
                  type: "text",
                  className: "pr-5",
                  value: d.keyword,
                  size: d.keyword.length,
                  placeholder: "Adicionar texto",
                  onBlur: () => {
                    t(
                      r,
                      o.reduce(
                        (p, m) => (m.keyword && p.push(m.keyword), p),
                        []
                      )
                    );
                  },
                  onKeyDown: (p) => {
                    p.key === "Enter" && p.currentTarget.blur();
                  },
                  onChange: (p) => {
                    const m = p.target.value;
                    i((g) =>
                      g.map((b) => (b.id === d.id ? { ...b, keyword: m } : b))
                    );
                  },
                }),
                s.createElement(
                  "button",
                  {
                    className: Se("absolute right-2 p-[2px] rounded-full", {
                      "bg-gray-700": n,
                      "bg-gray-200": !n,
                    }),
                    onClick: () => {
                      if (o.length === 1)
                        return Y(
                          "Por favor, forne\xE7a pelo menos uma palavra-chave"
                        );
                      t(r, [
                        ...o.reduce(
                          (p, m) => (
                            m.keyword && m.id !== d.id && p.push(m.keyword), p
                          ),
                          []
                        ),
                      ]);
                    },
                  },
                  s.createElement(el, null)
                )
              ),
              s.createElement("span", null, "ou")
            )
          ),
        !l &&
          s.createElement(
            "button",
            {
              type: "button",
              id: "addKeywordBtn",
              className:
                "outline-none max-w-xs text-left py-1 px-4 w-auto rounded-xl text-sm font-bold border-dashed border-[1px] hover:text-zap-blue",
              onClick: () => {
                c(!0);
              },
            },
            "+ Palavra-chave"
          ),
        l &&
          s.createElement(Qa, {
            autoFocus: !0,
            type: "text",
            value: u,
            size: u.length,
            placeholder: "Adicionar texto",
            onChange: (d) => {
              f(d.target.value);
            },
            onKeyDown: (d) => {
              d.key === "Enter" && d.currentTarget.blur();
            },
            onBlur: (d) => {
              const p = d.target.value;
              p &&
                t(r, [
                  ...o.reduce(
                    (m, g) => (g.keyword && m.push(g.keyword), m),
                    []
                  ),
                  p,
                ]),
                f(""),
                c(!1);
            },
          })
      )
    )
  );
}
function og({ children: e, className: r, ...t }) {
  return s.createElement(
    "select",
    {
      ...t,
      className: Se(
        "bg-transparent border-b border-gray-200 font-bold cursor-pointer text-lg outline-none",
        r
      ),
    },
    e
  );
}
function tt({ children: e, className: r, ...t }) {
  return s.createElement(
    "option",
    { ...t, className: Se("bg-[var(--zap-background)] font-semibold", r) },
    e
  );
}
const nt = {
  contains: "A mensagem cont\xE9m (Alguma)",
  equals: "A mensagem \xE9 igual a",
  not_contains: "A mensagem n\xE3o cont\xE9m (Nenhuma)",
  starts: "A mensagem come\xE7a com (Alguma)",
};
function ig() {
  const { isDarkTheme: e } = he(),
    { selectedTrigger: r, getFunnelName: t } = ne(),
    { funnelsIndex: n } = Ze(),
    {
      updateTriggerKeyWordRules: a,
      updateTriggerFunnelId: o,
      updateTriggerSecondsBeforeSend: i,
      updateDontSendToContactTrigger: l,
      updateDontSendToGroupsTrigger: c,
      updateIgnoreCaseSensitiveTrigger: u,
    } = Mr(),
    [f, d] = v.exports.useState(r == null ? void 0 : r.funnelId),
    [p, m] = v.exports.useState(
      (r == null ? void 0 : r.secondsBeforeSend) || 0
    ),
    [g, b] = v.exports.useState(!!(r != null && r.ignoreCaseSensitive)),
    [h, x] = v.exports.useState(!!(r != null && r.dontSendToContact)),
    [y, w] = v.exports.useState(!!(r != null && r.dontSendToGroups)),
    [E, I] = v.exports.useState(
      r == null ? void 0 : r.keywordRules.map((O) => ({ ...O, id: Je() }))
    ),
    [C, N] = v.exports.useState(!1);
  function B() {
    N((O) => !O);
  }
  function M() {
    b(!!(r != null && r.ignoreCaseSensitive)),
      x(!!(r != null && r.dontSendToContact)),
      w(!!(r != null && r.dontSendToGroups)),
      m((r == null ? void 0 : r.secondsBeforeSend) || 0),
      d(r == null ? void 0 : r.funnelId),
      !(r != null && r.keywordRules) ||
      (r == null ? void 0 : r.keywordRules.length) === 0
        ? I([{ id: Je(), type: "contains", keywords: [] }])
        : I(
            r == null ? void 0 : r.keywordRules.map((O) => ({ ...O, id: Je() }))
          );
  }
  v.exports.useEffect(() => {
    M();
  }, [r]);
  const k = v.exports.useRef(null),
    S = (O, V) => {
      I((K) =>
        K == null
          ? void 0
          : K.map((Q) => (Q.id === O ? { ...Q, keywords: V } : Q))
      );
    },
    z = (O, V) => {
      I((K) =>
        K == null ? void 0 : K.map((Q) => (Q.id === O ? { ...Q, type: V } : Q))
      );
    },
    $ = () => {
      I((O) => [...(O || []), { id: Je(), type: "contains", keywords: [] }]);
    },
    L = (O) => {
      I((V) => (V == null ? void 0 : V.filter((K) => K.id !== O)));
    },
    F = () => {
      if (r) {
        if (!E || E.filter((O) => O.keywords.length === 0).length > 0) {
          Y.error(
            "Voc\xEA n\xE3o pode salvar um gatilho com palavras-chaves vazias"
          );
          return;
        }
        a({ triggerId: r.id, keywordRules: E || [] }),
          o({ triggerId: r.id, funnelId: f }),
          i({ triggerId: r.id, secondsBeforeSend: p }),
          u({ triggerId: r.id, ignoreCaseSensitive: g }),
          l({ triggerId: r.id, dontSendToContact: h }),
          c({ triggerId: r.id, dontSendToGroups: y });
      }
    },
    H =
      !!(r != null && r.ignoreCaseSensitive) !== g ||
      !!(r != null && r.dontSendToContact) !== h ||
      !!(r != null && r.dontSendToGroups) !== y ||
      (r == null ? void 0 : r.secondsBeforeSend) !== p ||
      (r == null ? void 0 : r.funnelId) !== f;
  return s.createElement(
    "div",
    { id: "mainContent", className: "w-full h-full flex flex-col items-left" },
    s.createElement(
      "div",
      { className: "flex pb-2 text-base  items-start gap-10" },
      s.createElement(
        "div",
        { className: "flex flex-col gap-1 items-start " },
        s.createElement(
          ye,
          {
            title:
              "Selecione o funil que ser\xE1 disparado quando o gatilho for ativado",
          },
          s.createElement(
            "label",
            { htmlFor: "funnelSelect", className: "flex items-center" },
            s.createElement("span", null, "Funil a ser disparado:"),
            s.createElement(
              "select",
              {
                id: "funnelSelect",
                value: f || "",
                onChange: (O) => {
                  O.target.value !== "" ? d(O.target.value) : d(void 0);
                },
                className:
                  "bg-transparent border-b border-zap-gold w-full font-bold cursor-pointer text-base outline-none",
              },
              s.createElement(
                "option",
                {
                  value: "",
                  className: "bg-[var(--zap-background)] font-semibold",
                },
                "N\xE3o atribuido"
              ),
              n == null
                ? void 0
                : n.map((O) =>
                    s.createElement(
                      "option",
                      {
                        key: O.id,
                        value: O.id,
                        className: "bg-[var(--zap-background)] font-semibold",
                      },
                      O.name
                    )
                  )
            )
          )
        ),
        s.createElement(
          ye,
          {
            title:
              "Este valor em segundos ser\xE1 utilizado como um tempo de espera antes de iniciar o funil, evitando que a a\xE7\xE3o pare\xE7a instant\xE2nea e automatizada.",
            className: "flex",
          },
          s.createElement(
            "label",
            { htmlFor: "secondsDelayInput" },
            s.createElement("span", null, "Atraso antes do envio (segundos):"),
            s.createElement("input", {
              id: "secondsDelayInput",
              type: "number",
              value: p,
              onChange: (O) => {
                m(Number(O.target.value));
              },
              className:
                "bg-transparent border-b w-20 border-zap-gold font-bold cursor-pointer text-center outline-none",
            })
          )
        )
      ),
      s.createElement(
        "div",
        { className: "flex flex-col" },
        s.createElement(
          ye,
          {
            title: h
              ? "Clique para ativar o envio para contatos salvos"
              : "Clique para desativar o envio para contatos salvos",
          },
          s.createElement(
            "label",
            {
              htmlFor: "dontSendToContactSwitch",
              className: "cursor-pointer flex items-center gap-2",
            },
            s.createElement(ot, {
              zvTheme: e ? "dark" : "light",
              sx: { m: 1 },
              checked: !!h,
              id: "dontSendToContactSwitch",
              onChange: () => {
                x((O) => !O);
              },
            }),
            s.createElement(
              "span",
              { className: "text-xs" },
              "N\xE3o enviar p/ contatos salvos (privado)"
            )
          )
        ),
        s.createElement(
          ye,
          {
            title: y
              ? "Clique para ativar o envio para Grupos"
              : "Clique para desativar o envio para Grupos",
          },
          s.createElement(
            "label",
            {
              htmlFor: "dontSendToGroupsSwitch",
              className: "cursor-pointer flex items-center gap-2",
            },
            s.createElement(ot, {
              zvTheme: e ? "dark" : "light",
              sx: { m: 1 },
              checked: !!y,
              id: "dontSendToGroupsSwitch",
              onChange: () => {
                w((O) => !O);
              },
            }),
            s.createElement(
              "span",
              { className: "text-xs" },
              "N\xE3o enviar p/ Grupos"
            )
          )
        ),
        s.createElement(
          ye,
          {
            title: g
              ? "Clique para n\xE3o ignorar mai\xFAsculas e minusculas"
              : "Clique para ignorar mai\xFAsculas e minusculas",
          },
          s.createElement(
            "label",
            {
              htmlFor: "ignoreCaseSensitiveSwitch",
              className: "cursor-pointer flex items-center gap-2",
            },
            s.createElement(ot, {
              zvTheme: e ? "dark" : "light",
              sx: { m: 1 },
              checked: !!g,
              id: "ignoreCaseSensitiveSwitch",
              onChange: () => {
                b((O) => !O);
              },
            }),
            s.createElement(
              "span",
              { className: "text-xs" },
              "Ignorar Mai\xFAsculas e Minusculas"
            )
          )
        )
      )
    ),
    s.createElement(
      "div",
      {
        className: Se("", {
          "contents w-full": !C,
          "grid place-items-center fixed top-0 left-0 w-full h-full p-10": !!C,
        }),
      },
      !!C &&
        s.createElement("div", {
          className: "absolute backdrop-blur-sm w-full h-full",
          onClick: () => N(!1),
        }),
      s.createElement(
        "div",
        {
          className:
            "relative flex flex-col h-full w-full overflow-y-auto pt-4 pb-10 px-8 rounded border bg-[var(--zap-background)]",
        },
        s.createElement(
          ye,
          { title: C ? "Fechar modo tela cheia" : "Abrir modo tela cheia" },
          s.createElement(
            "button",
            {
              onClick: B,
              type: "button",
              className: "w-8 h-8 absolute right-2 top-2 p-1 ring-2 rounded",
            },
            C
              ? s.createElement(tl, {
                  className: "w-full h-full fill-zap-green sticky top-0",
                })
              : s.createElement(rl, {
                  className: "w-full h-full fill-zap-green sticky top-0",
                })
          )
        ),
        E &&
          E.length > 0 &&
          (E == null
            ? void 0
            : E.map((O, V) =>
                s.createElement(
                  "div",
                  { key: O.id },
                  V > 0 &&
                    s.createElement(
                      "div",
                      { className: "my-4 relative opacity-75" },
                      s.createElement("div", {
                        className:
                          "absolute top-[50%] left-0 w-full border-b border-gray-200",
                      }),
                      s.createElement(
                        "span",
                        {
                          className:
                            "relative text-base ml-4 bg-[var(--shape)] px-4 border border-gray-200 rounded",
                        },
                        "e"
                      )
                    ),
                  s.createElement(
                    "div",
                    { className: "relative mb-4" },
                    E.length > 1 &&
                      s.createElement(
                        "button",
                        {
                          className: "absolute right-2 top-2 w-4 h-4",
                          onClick: () => L(O.id),
                        },
                        s.createElement(Nr, {
                          className: "fill-zap-red w-full h-full",
                        })
                      ),
                    s.createElement(
                      "div",
                      { className: "flex items-center gap-2" },
                      V === 0 &&
                        s.createElement(
                          "span",
                          { className: "self-start text-bold text-lg" },
                          "Se "
                        ),
                      s.createElement(
                        og,
                        {
                          value: O.type,
                          onChange: (K) => z(O.id, K.target.value),
                        },
                        E.length === 1 &&
                          s.createElement(
                            tt,
                            { value: "equals" },
                            String(nt.equals).toLowerCase()
                          ),
                        s.createElement(
                          tt,
                          { value: "contains" },
                          String(nt.contains).toLowerCase()
                        ),
                        s.createElement(
                          tt,
                          { value: "starts" },
                          String(nt.starts).toLowerCase()
                        ),
                        s.createElement(
                          tt,
                          { value: "not_contains" },
                          String(nt.not_contains).toLowerCase()
                        )
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: "flex flex-col gap-2 mt-4" },
                      s.createElement(ag, {
                        keywords: O.keywords,
                        handleUpdateKeywordsOfAKeywordRule: S,
                        keywordRuleId: O.id,
                      })
                    )
                  )
                )
              )),
        E &&
          !(E != null && E.find((O) => O.type === "equals")) &&
          E.length < 5 &&
          s.createElement(
            ye,
            {
              title:
                "Ao adicionar uma nova condi\xE7\xE3o, cada uma delas \xE9 tratada como um 'E', permitindo que voc\xEA crie gatilhos mais precisos e espec\xEDficos.",
            },
            s.createElement(
              "button",
              {
                className:
                  "outline-none w-full p-2 mt-8 mx-auto rounded-xl text-lg font-bold border-dashed border-[1px] hover:text-zap-blue text-center",
                ref: k,
                onClick: () => {
                  $(),
                    setTimeout(() => {
                      var O;
                      (O = k.current) == null || O.scrollIntoView();
                    });
                },
              },
              "+ Condi\xE7\xE3o da mensagem"
            )
          )
      )
    ),
    E &&
      E.length > 0 &&
      s.createElement(
        "div",
        { className: "flex items-center justify-evenly w-full py-2 relative" },
        s.createElement(
          "button",
          {
            className:
              "bg-zap-red  text-[var(--text-title)] font-bold text-lg py-1 px-4 rounded-xl",
            onClick: M,
          },
          "Cancelar"
        ),
        s.createElement(
          "button",
          {
            className: Se(
              "bg-zap-blue text-[var(--text-title)] font-bold text-lg py-1 px-4 rounded-xl",
              { "bg-zap-green after:content-['_\u{1F446}'] ": H }
            ),
            onClick: F,
          },
          "Salvar"
        )
      )
  );
}
function lg() {
  return s.createElement(
    "div",
    {
      className:
        "w-full h-full flex flex-col px-10 gap-2 items-center justify-center ",
    },
    s.createElement(
      "p",
      { className: " text-base text-center" },
      "Os gatilhos s\xE3o uma funcionalidade poderosa, contudo est\xE3o dispon\xEDveis"
    ),
    s.createElement(
      "p",
      { className: " text-base text-center underline mb-4" },
      "Apenas para usu\xE1rios Premium"
    ),
    s.createElement(
      "a",
      {
        href: "https://zapvoice.com.br",
        target: "_blank",
        className: "bg-zap-veryperi font-bold text-lg px-4 py-2 rounded",
      },
      "Adquira sua licen\xE7a clicando aqui"
    )
  );
}
function sg() {
  const { selectedTrigger: e } = ne();

  // Sempre renderize o componente que lida com os gatilhos, independentemente do status de premium.
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(gr, { fill: G("triggers"), itemType: "triggers" }),
    !e && s.createElement(vr, null, s.createElement(ng, null)),
    s.createElement(Za, null, s.createElement(ig, null))  // Remova a verificação de status de premium aqui.
  );
}

const Ee = {
  mensagens: "/dashboard/mensagens",
  audios: "/dashboard/audios",
  medias: "/dashboard/medias",
  docs: "/dashboard/docs",
  funis: "/dashboard/funis",
  triggers: "/dashboard/triggers",
};
function cg() {
  const e = tm;
  return s.createElement(
    gl,
    null,
    s.createElement(Te, { path: "/", element: s.createElement(e, null) }),
    s.createElement(
      Te,
      { path: "/dashboard", element: s.createElement(_m, null) },
      s.createElement(Te, { index: !0, element: s.createElement(rg, null) }),
      s.createElement(Te, {
        path: Ee.audios,
        element: s.createElement($f, null),
      }),
      s.createElement(Te, {
        path: Ee.medias,
        element: s.createElement(im, null),
      }),
      s.createElement(Te, {
        path: Ee.docs,
        element: s.createElement(dm, null),
      }),
      s.createElement(Te, {
        path: Ee.mensagens,
        element: s.createElement(vm, null),
      }),
      s.createElement(Te, {
        path: Ee.funis,
        element: s.createElement(Zf, null),
      }),
      s.createElement(Te, {
        path: Ee.triggers,
        element: s.createElement(sg, null),
      })
    )
  );
}
function ug() {
  const { isDarkTheme: e } = he();
  return s.createElement(
    vl,
    null,
    s.createElement(
      bl,
      null,
      s.createElement(nl, {
        theme: e ? "dark" : "light",
        hideProgressBar: !1,
        newestOnTop: !1,
        closeOnClick: !0,
        rtl: !1,
        pauseOnFocusLoss: !1,
        draggable: !0,
        pauseOnHover: !0,
        position: "top-center",
        autoClose: 2e3,
      }),
      s.createElement(al, null),
      s.createElement(ol, { isDarkTheme: e }),
      s.createElement(Mf, null),
      s.createElement(cg, null)
    )
  );
}
hn.setAppElement("#root");
il.createRoot(document.getElementById("root")).render(
  s.createElement(
    s.StrictMode,
    null,
    s.createElement(
      hl,
      null,
      s.createElement(
        xl,
        null,
        s.createElement(yl, null, s.createElement(ug, null))
      )
    )
  )
);
