import {
  r as E,
  W as oe,
  R as ye,
  $ as Au,
  n as ra,
  s as Jr,
  B as ey,
  o as ty,
  e as ny,
  _ as K,
  p as Kn,
  u as jr,
  q as Ki,
  t as Df,
  v as Nt,
  w as Zd,
  x as Qd,
  y as ep,
  z as tp,
  D as ry,
  E as oy,
  T as iy,
  H as ay,
  I as Ii,
  J as np,
  K as oa,
  L as sy,
  N as rp,
  O as op,
  P as ip,
  Q as uy,
  S as ly,
  V as cy,
  X as Fi,
  Y as fy,
  Z as te,
  a0 as dy,
  c as Dn,
  g as _o,
  a1 as py,
  a2 as hy,
  a3 as ue,
  a4 as gy,
  a5 as ap,
  b as Rf,
} from "./chunk-3aa3a6d5.js";
import {
  g as Ot,
  c as Tf,
  s as de,
  z as An,
  e as vy,
} from "./chunk-081d0b03.js";
import { v as gr } from "./chunk-5237112f.js";
const sp = E.exports.createContext({});
function UA({ children: t }) {
  const [n, r] = E.exports.useState(!1),
    [i, a] = E.exports.useState("");
  E.exports.useEffect(() => {
    !n &&
      !i &&
      Ot("chave").then((c) => {
        c &&
          oe
            .promise(Tf(), { pending: "Conectando ao servidor, aguarde..." })
            .then(({ premium: f, data: p }) => {
              r(f),
                a(p),
                f ||
                  oe.error(
                    ye.createElement(
                      "a",
                      {
                        target: "_blank",
                        href: `http://web.whatsapp.com/send?phone=5514991238006&amp;text=Estou com o Erro: ${String(
                          p
                        )}, pode me ajudar?`,
                        rel: "noreferrer",
                      },
                      String(p),
                      ye.createElement("br", null),
                      "Clique Aqui para suporte"
                    ),
                    { autoClose: 3e3 }
                  );
            });
      });
  });
  async function s(c) {
    return new Promise((f, p) => {
      if (!c) {
        p(new Error("Tentando logar sem chave"));
        return;
      }
      Tf(c)
        .then(({ premium: h, data: v }) => {
          r(h), a(v), f({ premium: h, data: v });
        })
        .catch((h) => p(h));
    });
  }
  const l = { isPremium: n, responseData: i, loginWithKey: s };
  return ye.createElement(sp.Provider, { value: l }, t);
}
function my() {
  return E.exports.useContext(sp);
}
const up = E.exports.createContext({});
function VA({ children: t }) {
  const [n, r] = E.exports.useState(!0);
  function i(s) {
    r(s),
      de({ isDarkTheme: s }),
      oe.success(`Alterando para o tema ${s ? "Escuro" : "Claro"}`);
  }
  E.exports.useEffect(() => {
    Ot("isDarkTheme").then((s) => {
      s !== void 0 && r(s);
    });
  });
  const a = { isDarkTheme: n, setIsDarkTheme: i };
  return ye.createElement(up.Provider, { value: a }, t);
}
function HA() {
  return E.exports.useContext(up);
}
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qi() {
  return (
    (qi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
    qi.apply(this, arguments)
  );
}
var jn;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(jn || (jn = {}));
function by(t) {
  t === void 0 && (t = {});
  let { initialEntries: n = ["/"], initialIndex: r, v5Compat: i = !1 } = t,
    a;
  a = n.map((x, y) =>
    h(x, typeof x == "string" ? null : x.state, y === 0 ? "default" : void 0)
  );
  let s = f(r == null ? a.length - 1 : r),
    l = jn.Pop,
    c = null;
  function f(x) {
    return Math.min(Math.max(x, 0), a.length - 1);
  }
  function p() {
    return a[s];
  }
  function h(x, y, S) {
    y === void 0 && (y = null);
    let _ = yy(a ? p().pathname : "/", x, y, S);
    return (
      ia(
        _.pathname.charAt(0) === "/",
        "relative pathnames are not supported in memory history: " +
          JSON.stringify(x)
      ),
      _
    );
  }
  function v(x) {
    return typeof x == "string" ? x : du(x);
  }
  return {
    get index() {
      return s;
    },
    get action() {
      return l;
    },
    get location() {
      return p();
    },
    createHref: v,
    createURL(x) {
      return new URL(v(x), "http://localhost");
    },
    encodeLocation(x) {
      let y = typeof x == "string" ? mr(x) : x;
      return {
        pathname: y.pathname || "",
        search: y.search || "",
        hash: y.hash || "",
      };
    },
    push(x, y) {
      l = jn.Push;
      let S = h(x, y);
      (s += 1),
        a.splice(s, a.length, S),
        i && c && c({ action: l, location: S, delta: 1 });
    },
    replace(x, y) {
      l = jn.Replace;
      let S = h(x, y);
      (a[s] = S), i && c && c({ action: l, location: S, delta: 0 });
    },
    go(x) {
      l = jn.Pop;
      let y = f(s + x),
        S = a[y];
      (s = y), c && c({ action: l, location: S, delta: x });
    },
    listen(x) {
      return (
        (c = x),
        () => {
          c = null;
        }
      );
    },
  };
}
function ot(t, n) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(n);
}
function ia(t, n) {
  if (!t) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function xy() {
  return Math.random().toString(36).substr(2, 8);
}
function yy(t, n, r, i) {
  return (
    r === void 0 && (r = null),
    qi(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof n == "string" ? mr(n) : n,
      { state: r, key: (n && n.key) || i || xy() }
    )
  );
}
function du(t) {
  let { pathname: n = "/", search: r = "", hash: i = "" } = t;
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i),
    n
  );
}
function mr(t) {
  let n = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((n.hash = t.substr(r)), (t = t.substr(0, r)));
    let i = t.indexOf("?");
    i >= 0 && ((n.search = t.substr(i)), (t = t.substr(0, i))),
      t && (n.pathname = t);
  }
  return n;
}
var If;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(If || (If = {}));
function Ey(t, n, r) {
  r === void 0 && (r = "/");
  let i = typeof n == "string" ? mr(n) : n,
    a = Du(i.pathname || "/", r);
  if (a == null) return null;
  let s = lp(t);
  wy(s);
  let l = null;
  for (let c = 0; l == null && c < s.length; ++c) l = Ty(s[c], Ly(a));
  return l;
}
function lp(t, n, r, i) {
  n === void 0 && (n = []), r === void 0 && (r = []), i === void 0 && (i = "");
  let a = (s, l, c) => {
    let f = {
      relativePath: c === void 0 ? s.path || "" : c,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: l,
      route: s,
    };
    f.relativePath.startsWith("/") &&
      (ot(
        f.relativePath.startsWith(i),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (f.relativePath = f.relativePath.slice(i.length)));
    let p = Gn([i, f.relativePath]),
      h = r.concat(f);
    s.children &&
      s.children.length > 0 &&
      (ot(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      lp(s.children, n, h, p)),
      !(s.path == null && !s.index) &&
        n.push({ path: p, score: Dy(p, s.index), routesMeta: h });
  };
  return (
    t.forEach((s, l) => {
      var c;
      if (s.path === "" || !((c = s.path) != null && c.includes("?"))) a(s, l);
      else for (let f of cp(s.path)) a(s, l, f);
    }),
    n
  );
}
function cp(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [r, ...i] = n,
    a = r.endsWith("?"),
    s = r.replace(/\?$/, "");
  if (i.length === 0) return a ? [s, ""] : [s];
  let l = cp(i.join("/")),
    c = [];
  return (
    c.push(...l.map((f) => (f === "" ? s : [s, f].join("/")))),
    a && c.push(...l),
    c.map((f) => (t.startsWith("/") && f === "" ? "/" : f))
  );
}
function wy(t) {
  t.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : Ry(
          n.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const Sy = /^:\w+$/,
  Cy = 3,
  _y = 2,
  Oy = 1,
  Py = 10,
  Ay = -2,
  Ff = (t) => t === "*";
function Dy(t, n) {
  let r = t.split("/"),
    i = r.length;
  return (
    r.some(Ff) && (i += Ay),
    n && (i += _y),
    r
      .filter((a) => !Ff(a))
      .reduce((a, s) => a + (Sy.test(s) ? Cy : s === "" ? Oy : Py), i)
  );
}
function Ry(t, n) {
  return t.length === n.length && t.slice(0, -1).every((i, a) => i === n[a])
    ? t[t.length - 1] - n[n.length - 1]
    : 0;
}
function Ty(t, n) {
  let { routesMeta: r } = t,
    i = {},
    a = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      f = l === r.length - 1,
      p = a === "/" ? n : n.slice(a.length) || "/",
      h = Iy(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: f },
        p
      );
    if (!h) return null;
    Object.assign(i, h.params);
    let v = c.route;
    s.push({
      params: i,
      pathname: Gn([a, h.pathname]),
      pathnameBase: Ny(Gn([a, h.pathnameBase])),
      route: v,
    }),
      h.pathnameBase !== "/" && (a = Gn([a, h.pathnameBase]));
  }
  return s;
}
function Iy(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, i] = Fy(t.path, t.caseSensitive, t.end),
    a = n.match(r);
  if (!a) return null;
  let s = a[0],
    l = s.replace(/(.)\/+$/, "$1"),
    c = a.slice(1);
  return {
    params: i.reduce((p, h, v) => {
      if (h === "*") {
        let w = c[v] || "";
        l = s.slice(0, s.length - w.length).replace(/(.)\/+$/, "$1");
      }
      return (p[h] = My(c[v] || "", h)), p;
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: t,
  };
}
function Fy(t, n, r) {
  n === void 0 && (n = !1),
    r === void 0 && (r = !0),
    ia(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    a =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, c) => (i.push(c), "/([^\\/]+)"));
  return (
    t.endsWith("*")
      ? (i.push("*"),
        (a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (a += "\\/*$")
      : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, n ? void 0 : "i"), i]
  );
}
function Ly(t) {
  try {
    return decodeURI(t);
  } catch (n) {
    return (
      ia(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + n + ").")
      ),
      t
    );
  }
}
function My(t, n) {
  try {
    return decodeURIComponent(t);
  } catch (r) {
    return (
      ia(
        !1,
        'The value for the URL param "' +
          n +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      t
    );
  }
}
function Du(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    i = t.charAt(r);
  return i && i !== "/" ? null : t.slice(r) || "/";
}
function $y(t, n) {
  n === void 0 && (n = "/");
  let {
    pathname: r,
    search: i = "",
    hash: a = "",
  } = typeof t == "string" ? mr(t) : t;
  return {
    pathname: r ? (r.startsWith("/") ? r : ky(r, n)) : n,
    search: By(i),
    hash: Uy(a),
  };
}
function ky(t, n) {
  let r = n.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Bs(t, n, r, i) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      n +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function fp(t) {
  return t.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function dp(t, n, r, i) {
  i === void 0 && (i = !1);
  let a;
  typeof t == "string"
    ? (a = mr(t))
    : ((a = qi({}, t)),
      ot(
        !a.pathname || !a.pathname.includes("?"),
        Bs("?", "pathname", "search", a)
      ),
      ot(
        !a.pathname || !a.pathname.includes("#"),
        Bs("#", "pathname", "hash", a)
      ),
      ot(!a.search || !a.search.includes("#"), Bs("#", "search", "hash", a)));
  let s = t === "" || a.pathname === "",
    l = s ? "/" : a.pathname,
    c;
  if (i || l == null) c = r;
  else {
    let v = n.length - 1;
    if (l.startsWith("..")) {
      let w = l.split("/");
      for (; w[0] === ".."; ) w.shift(), (v -= 1);
      a.pathname = w.join("/");
    }
    c = v >= 0 ? n[v] : "/";
  }
  let f = $y(a, c),
    p = l && l !== "/" && l.endsWith("/"),
    h = (s || l === ".") && r.endsWith("/");
  return !f.pathname.endsWith("/") && (p || h) && (f.pathname += "/"), f;
}
const Gn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Ny = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  By = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Uy = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Vy(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Hy = ["post", "put", "patch", "delete"];
[...Hy];
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ji() {
  return (
    (Ji = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
    Ji.apply(this, arguments)
  );
}
const Ru = E.exports.createContext(null),
  jy = E.exports.createContext(null),
  Yr = E.exports.createContext(null),
  aa = E.exports.createContext(null),
  qn = E.exports.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  pp = E.exports.createContext(null);
function Wy(t, n) {
  let { relative: r } = n === void 0 ? {} : n;
  To() || ot(!1);
  let { basename: i, navigator: a } = E.exports.useContext(Yr),
    { hash: s, pathname: l, search: c } = gp(t, { relative: r }),
    f = l;
  return (
    i !== "/" && (f = l === "/" ? i : Gn([i, l])),
    a.createHref({ pathname: f, search: c, hash: s })
  );
}
function To() {
  return E.exports.useContext(aa) != null;
}
function sa() {
  return To() || ot(!1), E.exports.useContext(aa).location;
}
function hp(t) {
  E.exports.useContext(Yr).static || E.exports.useLayoutEffect(t);
}
function zy() {
  let { isDataRoute: t } = E.exports.useContext(qn);
  return t ? aE() : Gy();
}
function Gy() {
  To() || ot(!1);
  let t = E.exports.useContext(Ru),
    { basename: n, navigator: r } = E.exports.useContext(Yr),
    { matches: i } = E.exports.useContext(qn),
    { pathname: a } = sa(),
    s = JSON.stringify(fp(i).map((f) => f.pathnameBase)),
    l = E.exports.useRef(!1);
  return (
    hp(() => {
      l.current = !0;
    }),
    E.exports.useCallback(
      function (f, p) {
        if ((p === void 0 && (p = {}), !l.current)) return;
        if (typeof f == "number") {
          r.go(f);
          return;
        }
        let h = dp(f, JSON.parse(s), a, p.relative === "path");
        t == null &&
          n !== "/" &&
          (h.pathname = h.pathname === "/" ? n : Gn([n, h.pathname])),
          (p.replace ? r.replace : r.push)(h, p.state, p);
      },
      [n, r, s, a, t]
    )
  );
}
const Ky = E.exports.createContext(null);
function qy(t) {
  let n = E.exports.useContext(qn).outlet;
  return n && E.exports.createElement(Ky.Provider, { value: t }, n);
}
function gp(t, n) {
  let { relative: r } = n === void 0 ? {} : n,
    { matches: i } = E.exports.useContext(qn),
    { pathname: a } = sa(),
    s = JSON.stringify(fp(i).map((l) => l.pathnameBase));
  return E.exports.useMemo(
    () => dp(t, JSON.parse(s), a, r === "path"),
    [t, s, a, r]
  );
}
function Jy(t, n) {
  return Yy(t, n);
}
function Yy(t, n, r) {
  To() || ot(!1);
  let { navigator: i } = E.exports.useContext(Yr),
    { matches: a } = E.exports.useContext(qn),
    s = a[a.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let c = s ? s.pathnameBase : "/";
  s && s.route;
  let f = sa(),
    p;
  if (n) {
    var h;
    let S = typeof n == "string" ? mr(n) : n;
    c === "/" ||
      ((h = S.pathname) == null ? void 0 : h.startsWith(c)) ||
      ot(!1),
      (p = S);
  } else p = f;
  let v = p.pathname || "/",
    w = c === "/" ? v : v.slice(c.length) || "/",
    x = Ey(t, { pathname: w }),
    y = tE(
      x &&
        x.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Gn([
              c,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? c
                : Gn([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      a,
      r
    );
  return n && y
    ? E.exports.createElement(
        aa.Provider,
        {
          value: {
            location: Ji(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p
            ),
            navigationType: jn.Pop,
          },
        },
        y
      )
    : y;
}
function Xy() {
  let t = iE(),
    n = Vy(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return E.exports.createElement(
    E.exports.Fragment,
    null,
    E.exports.createElement("h2", null, "Unexpected Application Error!"),
    E.exports.createElement("h3", { style: { fontStyle: "italic" } }, n),
    r ? E.exports.createElement("pre", { style: a }, r) : null,
    s
  );
}
const Zy = E.exports.createElement(Xy, null);
class Qy extends E.exports.Component {
  constructor(n) {
    super(n),
      (this.state = {
        location: n.location,
        revalidation: n.revalidation,
        error: n.error,
      });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location ||
      (r.revalidation !== "idle" && n.revalidation === "idle")
      ? { error: n.error, location: n.location, revalidation: n.revalidation }
      : {
          error: n.error || r.error,
          location: r.location,
          revalidation: n.revalidation || r.revalidation,
        };
  }
  componentDidCatch(n, r) {
    console.error(
      "React Router caught the following error during render",
      n,
      r
    );
  }
  render() {
    return this.state.error
      ? E.exports.createElement(
          qn.Provider,
          { value: this.props.routeContext },
          E.exports.createElement(pp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function eE(t) {
  let { routeContext: n, match: r, children: i } = t,
    a = E.exports.useContext(Ru);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    E.exports.createElement(qn.Provider, { value: n }, i)
  );
}
function tE(t, n, r) {
  var i;
  if ((n === void 0 && (n = []), r === void 0 && (r = null), t == null)) {
    var a;
    if ((a = r) != null && a.errors) t = r.matches;
    else return null;
  }
  let s = t,
    l = (i = r) == null ? void 0 : i.errors;
  if (l != null) {
    let c = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id])
    );
    c >= 0 || ot(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  return s.reduceRight((c, f, p) => {
    let h = f.route.id ? (l == null ? void 0 : l[f.route.id]) : null,
      v = null;
    r && (v = f.route.errorElement || Zy);
    let w = n.concat(s.slice(0, p + 1)),
      x = () => {
        let y;
        return (
          h
            ? (y = v)
            : f.route.Component
            ? (y = E.exports.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = c),
          E.exports.createElement(eE, {
            match: f,
            routeContext: { outlet: c, matches: w, isDataRoute: r != null },
            children: y,
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? E.exports.createElement(Qy, {
          location: r.location,
          revalidation: r.revalidation,
          component: v,
          error: h,
          children: x(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var pu;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate");
})(pu || (pu = {}));
var Ao;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseLoaderData = "useLoaderData"),
    (t.UseActionData = "useActionData"),
    (t.UseRouteError = "useRouteError"),
    (t.UseNavigation = "useNavigation"),
    (t.UseRouteLoaderData = "useRouteLoaderData"),
    (t.UseMatches = "useMatches"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate"),
    (t.UseRouteId = "useRouteId");
})(Ao || (Ao = {}));
function nE(t) {
  let n = E.exports.useContext(Ru);
  return n || ot(!1), n;
}
function rE(t) {
  let n = E.exports.useContext(jy);
  return n || ot(!1), n;
}
function oE(t) {
  let n = E.exports.useContext(qn);
  return n || ot(!1), n;
}
function vp(t) {
  let n = oE(),
    r = n.matches[n.matches.length - 1];
  return r.route.id || ot(!1), r.route.id;
}
function iE() {
  var t;
  let n = E.exports.useContext(pp),
    r = rE(Ao.UseRouteError),
    i = vp(Ao.UseRouteError);
  return n || ((t = r.errors) == null ? void 0 : t[i]);
}
function aE() {
  let { router: t } = nE(pu.UseNavigateStable),
    n = vp(Ao.UseNavigateStable),
    r = E.exports.useRef(!1);
  return (
    hp(() => {
      r.current = !0;
    }),
    E.exports.useCallback(
      function (a, s) {
        s === void 0 && (s = {}),
          r.current &&
            (typeof a == "number"
              ? t.navigate(a)
              : t.navigate(a, Ji({ fromRouteId: n }, s)));
      },
      [t, n]
    )
  );
}
const sE = "startTransition",
  Lf = Au[sE];
function jA(t) {
  let {
      basename: n,
      children: r,
      initialEntries: i,
      initialIndex: a,
      future: s,
    } = t,
    l = E.exports.useRef();
  l.current == null &&
    (l.current = by({ initialEntries: i, initialIndex: a, v5Compat: !0 }));
  let c = l.current,
    [f, p] = E.exports.useState({ action: c.action, location: c.location }),
    { v7_startTransition: h } = s || {},
    v = E.exports.useCallback(
      (w) => {
        h && Lf ? Lf(() => p(w)) : p(w);
      },
      [p, h]
    );
  return (
    E.exports.useLayoutEffect(() => c.listen(v), [c, v]),
    E.exports.createElement(lE, {
      basename: n,
      children: r,
      location: f.location,
      navigationType: f.action,
      navigator: c,
    })
  );
}
function WA(t) {
  return qy(t.context);
}
function uE(t) {
  ot(!1);
}
function lE(t) {
  let {
    basename: n = "/",
    children: r = null,
    location: i,
    navigationType: a = jn.Pop,
    navigator: s,
    static: l = !1,
  } = t;
  To() && ot(!1);
  let c = n.replace(/^\/*/, "/"),
    f = E.exports.useMemo(
      () => ({ basename: c, navigator: s, static: l }),
      [c, s, l]
    );
  typeof i == "string" && (i = mr(i));
  let {
      pathname: p = "/",
      search: h = "",
      hash: v = "",
      state: w = null,
      key: x = "default",
    } = i,
    y = E.exports.useMemo(() => {
      let S = Du(p, c);
      return S == null
        ? null
        : {
            location: { pathname: S, search: h, hash: v, state: w, key: x },
            navigationType: a,
          };
    }, [c, p, h, v, w, x, a]);
  return y == null
    ? null
    : E.exports.createElement(
        Yr.Provider,
        { value: f },
        E.exports.createElement(aa.Provider, { children: r, value: y })
      );
}
function zA(t) {
  let { children: n, location: r } = t;
  return Jy(hu(n), r);
}
var Mf;
(function (t) {
  (t[(t.pending = 0)] = "pending"),
    (t[(t.success = 1)] = "success"),
    (t[(t.error = 2)] = "error");
})(Mf || (Mf = {}));
new Promise(() => {});
function hu(t, n) {
  n === void 0 && (n = []);
  let r = [];
  return (
    E.exports.Children.forEach(t, (i, a) => {
      if (!E.exports.isValidElement(i)) return;
      let s = [...n, a];
      if (i.type === E.exports.Fragment) {
        r.push.apply(r, hu(i.props.children, s));
        return;
      }
      i.type !== uE && ot(!1), !i.props.index || !i.props.children || ot(!1);
      let l = {
        id: i.props.id || s.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (l.children = hu(i.props.children, s)), r.push(l);
    }),
    r
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gu() {
  return (
    (gu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
    gu.apply(this, arguments)
  );
}
function cE(t, n) {
  if (t == null) return {};
  var r = {},
    i = Object.keys(t),
    a,
    s;
  for (s = 0; s < i.length; s++)
    (a = i[s]), !(n.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function fE(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function dE(t, n) {
  return t.button === 0 && (!n || n === "_self") && !fE(t);
}
const pE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  hE = "startTransition";
Au[hE];
const gE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  GA = E.exports.forwardRef(function (n, r) {
    let {
        onClick: i,
        relative: a,
        reloadDocument: s,
        replace: l,
        state: c,
        target: f,
        to: p,
        preventScrollReset: h,
      } = n,
      v = cE(n, pE),
      { basename: w } = E.exports.useContext(Yr),
      x,
      y = !1;
    if (typeof p == "string" && vE.test(p) && ((x = p), gE))
      try {
        let P = new URL(window.location.href),
          F = p.startsWith("//") ? new URL(P.protocol + p) : new URL(p),
          R = Du(F.pathname, w);
        F.origin === P.origin && R != null
          ? (p = R + F.search + F.hash)
          : (y = !0);
      } catch {}
    let S = Wy(p, { relative: a }),
      _ = mE(p, {
        replace: l,
        state: c,
        target: f,
        preventScrollReset: h,
        relative: a,
      });
    function A(P) {
      i && i(P), P.defaultPrevented || _(P);
    }
    return E.exports.createElement(
      "a",
      gu({}, v, { href: x || S, onClick: y || s ? i : A, ref: r, target: f })
    );
  });
var $f;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher");
})($f || ($f = {}));
var kf;
(function (t) {
  (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(kf || (kf = {}));
function mE(t, n) {
  let {
      target: r,
      replace: i,
      state: a,
      preventScrollReset: s,
      relative: l,
    } = n === void 0 ? {} : n,
    c = zy(),
    f = sa(),
    p = gp(t, { relative: l });
  return E.exports.useCallback(
    (h) => {
      if (dE(h, r)) {
        h.preventDefault();
        let v = i !== void 0 ? i : du(f) === du(p);
        c(t, { replace: v, state: a, preventScrollReset: s, relative: l });
      }
    },
    [f, c, p, i, a, r, t, s, l]
  );
}
function KA(t) {
  return ra({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
          clipRule: "evenodd",
        },
      },
    ],
  })(t);
}
function qA(t) {
  return ra({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z",
        },
      },
    ],
  })(t);
}
const bE = Jr.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 0px 5px var(--zap-background));
  .searchIcon {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    pointer-events: none;
  }
`,
  xE = Jr.input`
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  outline: none;
  background: var(--shape);
  border: 1px solid var(--veryperi);

  &:focus {
    border: 1px solid var(--text-title);
  }
`;
function JA({ value: t, onChange: n, autoFocus: r }) {
  return ye.createElement(
    bE,
    null,
    ye.createElement(xE, {
      type: "text",
      placeholder: "Pesquisar...",
      value: t,
      onChange: n,
      className: "inputSearch",
      autoFocus: !!r,
    }),
    ye.createElement(ey, { className: "searchIcon" })
  );
}
async function ua(t) {
  if (chrome != null && chrome.storage)
    return new Promise((n) => {
      chrome.storage.local.remove(t, () => n());
    });
  typeof t == "string"
    ? localStorage.removeItem(t)
    : t.forEach((n) => localStorage.removeItem(n));
}
const mp = E.exports.createContext({});
function yE({
  children: t,
  useItemStore: n,
  props: { audiosIndex: r, setAudiosIndex: i },
}) {
  const {
    selectedItem: a,
    setSelectedItem: s,
    setSelectedFunnel: l,
    setSelectedTrigger: c,
  } = n;
  async function f(x) {
    const y = {
      id: gr(),
      name: x != null ? x : "Novo \xC1udio",
      type: "audios",
    };
    i([...r, { ...y, type: "audios" }]);
    const { name: S, ..._ } = y,
      A = { ..._, data: "", sendAsForwarded: !1 };
    await de({ audiosIndex: JSON.stringify([...r, { ...y, type: "audios" }]) }),
      await oe.promise(de({ [A.id]: JSON.stringify(A) }), {
        pending: "Adicionando item, aguarde...",
        success: "Item adicionado com sucesso",
        error: "Algo deu errado ao tentar adicionar o novo item",
      });
  }
  async function p({ id: x, name: y }) {
    const S = r.map((_) => (_.id === x ? Object.assign(_, { name: y }) : _));
    i(S),
      await oe.promise(de({ audiosIndex: JSON.stringify(S) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Nome editado com sucesso",
        error: "Algo deu errado ao tentar editar o nome do seu item",
      });
  }
  async function h({ id: x, data: y, sendAsForwarded: S }) {
    const _ = await Ot(x);
    await oe.promise(
      de({
        [x]: JSON.stringify({
          ..._,
          data: y,
          ...(S != null && { sendAsForwarded: S }),
        }),
      }),
      {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Item editado com sucesso",
        error: "Algo deu errado ao tentar editar seu item",
      }
    ),
      a && s(void 0);
  }
  async function v(x) {
    const y = r.filter((S) => S.id !== x);
    i(y),
      await oe.promise(de({ audiosIndex: JSON.stringify(y) }), {
        pending: "Removendo item, aguarde...",
        success: "Item removido com sucesso",
        error: "Algo deu errado ao tentar remover o novo item",
      }),
      ua(x),
      s(void 0),
      l(void 0),
      c(void 0);
  }
  const w = {
    audiosIndex: r,
    createNewAudio: f,
    updateAudioName: p,
    updateAudioData: h,
    deleteAudio: v,
  };
  return ye.createElement(mp.Provider, { value: w }, t);
}
function YA() {
  return E.exports.useContext(mp);
}
const bp = E.exports.createContext({});
function EE({
  children: t,
  useItemStore: n,
  props: { mediasIndex: r, setMediasIndex: i },
}) {
  const {
    selectedItem: a,
    setSelectedItem: s,
    setSelectedFunnel: l,
    setSelectedTrigger: c,
  } = n;
  async function f(x) {
    const y = {
      id: gr(),
      name: x != null ? x : "Novo Arquivo",
      type: "medias",
    };
    i([...r, { ...y, type: "medias" }]);
    const { name: S, ..._ } = y,
      A = { ..._, data: "", caption: "" };
    await de({ mediasIndex: JSON.stringify([...r, { ...y, type: "medias" }]) }),
      await oe.promise(de({ [A.id]: JSON.stringify(A) }), {
        pending: "Adicionando item, aguarde...",
        success: "Item adicionado com sucesso",
        error: "Algo deu errado ao tentar adicionar o novo item",
      });
  }
  async function p({ id: x, name: y }) {
    const S = r.map((_) => (_.id === x ? Object.assign(_, { name: y }) : _));
    i(S),
      await oe.promise(de({ mediasIndex: JSON.stringify(S) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Nome editado com sucesso",
        error: "Algo deu errado ao tentar editar o nome do seu item",
      });
  }
  async function h({ id: x, data: y, caption: S }) {
    const _ = await Ot(x);
    await oe.promise(
      de({ [x]: JSON.stringify({ ..._, data: y, caption: S }) }),
      {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Item editado com sucesso",
        error: "Algo deu errado ao tentar editar seu item",
      }
    ),
      a && s(void 0);
  }
  async function v(x) {
    const y = r.filter((S) => S.id !== x);
    i(y),
      await oe.promise(de({ mediasIndex: JSON.stringify(y) }), {
        pending: "Removendo item, aguarde...",
        success: "Item removido com sucesso",
        error: "Algo deu errado ao tentar remover o novo item",
      }),
      ua(x),
      s(void 0),
      l(void 0),
      c(void 0);
  }
  const w = {
    mediasIndex: r,
    createNewMedia: f,
    updateMediaName: p,
    updateMediaData: h,
    deleteMedia: v,
  };
  return ye.createElement(bp.Provider, { value: w }, t);
}
function XA() {
  return E.exports.useContext(bp);
}
const xp = E.exports.createContext({});
function wE({
  children: t,
  useItemStore: n,
  props: { docsIndex: r, setDocsIndex: i },
}) {
  const {
    selectedItem: a,
    setSelectedItem: s,
    setSelectedFunnel: l,
    setSelectedTrigger: c,
  } = n;
  async function f(x) {
    const y = {
      id: gr(),
      name: x != null ? x : "Novo Documento",
      type: "docs",
    };
    i([...r, { ...y, type: "docs" }]);
    const { name: S, ..._ } = y,
      A = { ..._, data: "", fileName: "" };
    await de({ docsIndex: JSON.stringify([...r, { ...y, type: "docs" }]) }),
      await oe.promise(de({ [A.id]: JSON.stringify(A) }), {
        pending: "Adicionando item, aguarde...",
        success: "Item adicionado com sucesso",
        error: "Algo deu errado ao tentar adicionar o novo item",
      });
  }
  async function p({ id: x, name: y }) {
    const S = r.map((_) => (_.id === x ? Object.assign(_, { name: y }) : _));
    i(S),
      await oe.promise(de({ docsIndex: JSON.stringify(S) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Nome editado com sucesso",
        error: "Algo deu errado ao tentar editar o nome do seu item",
      });
  }
  async function h({ id: x, data: y, fileName: S }) {
    const _ = await Ot(x);
    await oe.promise(
      de({ [x]: JSON.stringify({ ..._, data: y, fileName: S }) }),
      {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Item editado com sucesso",
        error: "Algo deu errado ao tentar editar seu item",
      }
    ),
      a && s(void 0);
  }
  async function v(x) {
    const y = r.filter((S) => S.id !== x);
    i(y),
      await oe.promise(de({ docsIndex: JSON.stringify(y) }), {
        pending: "Removendo item, aguarde...",
        success: "Item removido com sucesso",
        error: "Algo deu errado ao tentar remover o novo item",
      }),
      ua(x),
      s(void 0),
      l(void 0),
      c(void 0);
  }
  const w = {
    docsIndex: r,
    createNewDoc: f,
    updateDocName: p,
    updateDocData: h,
    deleteDoc: v,
  };
  return ye.createElement(xp.Provider, { value: w }, t);
}
function ZA() {
  return E.exports.useContext(xp);
}
const yp = E.exports.createContext({});
function SE({
  children: t,
  useItemStore: n,
  props: { mensagensIndex: r, setMensagensIndex: i },
}) {
  const {
    selectedItem: a,
    setSelectedItem: s,
    setSelectedFunnel: l,
    setSelectedTrigger: c,
  } = n;
  async function f(x) {
    const y = {
      id: gr(),
      name: x != null ? x : "Nova Mensagem",
      type: "mensagens",
    };
    i([...r, { ...y, type: "mensagens" }]);
    const { name: S, ..._ } = y,
      A = { ..._, data: "" };
    await de({
      mensagensIndex: JSON.stringify([...r, { ...y, type: "mensagens" }]),
    }),
      await oe.promise(de({ [A.id]: JSON.stringify(A) }), {
        pending: "Adicionando item, aguarde...",
        success: "Item adicionado com sucesso",
        error: "Algo deu errado ao tentar adicionar o novo item",
      });
  }
  async function p({ id: x, name: y }) {
    const S = r.map((_) => (_.id === x ? Object.assign(_, { name: y }) : _));
    i(S),
      await oe.promise(de({ mensagensIndex: JSON.stringify(S) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Nome editado com sucesso",
        error: "Algo deu errado ao tentar editar o nome do seu item",
      });
  }
  async function h({ id: x, data: y }) {
    const S = await Ot(x);
    await oe.promise(de({ [x]: JSON.stringify({ ...S, data: y }) }), {
      pending: "Salvando altera\xE7\xF5es, aguarde...",
      success: "Item editado com sucesso",
      error: "Algo deu errado ao tentar editar seu item",
    }),
      a && s(void 0);
  }
  async function v(x) {
    const y = r.filter((S) => S.id !== x);
    i(y),
      await oe.promise(de({ mensagensIndex: JSON.stringify(y) }), {
        pending: "Removendo item, aguarde...",
        success: "Item removido com sucesso",
        error: "Algo deu errado ao tentar remover o novo item",
      }),
      ua(x),
      s(void 0),
      l(void 0),
      c(void 0);
  }
  const w = {
    mensagensIndex: r,
    createNewMessage: f,
    updateMessageName: p,
    updateMessageData: h,
    deleteMessage: v,
  };
  return ye.createElement(yp.Provider, { value: w }, t);
}
function QA() {
  return E.exports.useContext(yp);
}
const Ep = E.exports.createContext({});
function CE({
  children: t,
  useItemStore: n,
  props: { funnelsIndex: r, setFunnelsIndex: i },
}) {
  const {
    setSelectedItem: a,
    setSelectedFunnel: s,
    selectedFunnel: l,
    setSelectedTrigger: c,
    getItemFromStorage: f,
  } = n;
  async function p(P) {
    const F = { id: gr(), name: P != null ? P : "Novo Funil", type: "funis" };
    i([...r, { ...F, type: "funis" }]),
      await oe.promise(
        de({ funis: JSON.stringify([...r, { ...F, type: "funis" }]) }),
        {
          pending: "Criando funil, aguarde...",
          success: "Funil criado com sucesso",
          error: "Algo deu errado ao tentar criar o novo funil",
        }
      );
  }
  async function h({ id: P, name: F }) {
    const R = r.map((I) => (I.id === P ? Object.assign(I, { name: F }) : I));
    i(R),
      await oe.promise(de({ funis: JSON.stringify(R) }), {
        pending: "Alterando nome do funil, aguarde...",
        success: "Nome do funil alterado com sucesso",
        error: "Algo deu errado ao tentar alterar o nome do funil",
      });
  }
  async function v({ id: P, possibleIndex: F, possibleId: R }) {
    const I = l;
    if (!(I != null && I.data) || I.data.length === 0) return;
    const $ = I.data.filter((L, V) => !(V === F && L.id === R));
    if ($.length === I.data.length - 1) {
      const L = r.map((V) => (V.id === I.id ? { ...V, data: $ } : V));
      i(L),
        await oe.promise(de({ funis: JSON.stringify(L) }), {
          pending: "Salvando altera\xE7\xF5es, aguarde...",
          success: "Item removido com sucesso",
          error: "Algo deu errado ao tentar remover seu item",
        }),
        l && s({ ...l, data: $ });
    } else {
      const L = I.data.findIndex((V) => V.id === R || V.id === P);
      if (L !== -1) {
        const V = I.data.filter((k, q) => q !== L),
          U = r.map((k) => (k.id === I.id ? { ...k, data: V } : k));
        i(U),
          await oe.promise(de({ funis: JSON.stringify(U) }), {
            pending: "Salvando altera\xE7\xF5es, aguarde...",
            success: "Item removido com sucesso.",
            error: "Algo deu errado ao tentar remover o item",
          }),
          l && s({ ...l, data: V });
      } else oe.error("Algo deu errado ao tentar remover o item do funil");
    }
  }
  async function w({
    beforeId: P,
    item: { itemId: F, delayInSeconds: R },
    possibleIndex: I,
    possibleId: $,
  }) {
    if (!l) {
      oe.error(
        "Erro ao tentar editar o item do seu funil. Recarregue a p\xE1gina e tente novamente"
      );
      return;
    }
    const L = await f(F);
    if (!L) {
      oe.error(
        "N\xE3o conseguimos encontrar o item que voc\xEA est\xE1 tentando editar. Recarregue a p\xE1gina e tente novamente"
      );
      return;
    }
    if (!L.data)
      throw (
        (oe.error("O item que voc\xEA est\xE1 tentando editar est\xE1 vazio."),
        new Error("O item que voc\xEA est\xE1 tentando editar est\xE1 vazio."))
      );
    const V = l;
    if (!(V != null && V.data) || V.data.length === 0) {
      oe.error(
        "N\xE3o conseguimos encontrar o conte\xFAdo do seu funil. Recarregue a p\xE1gina e tente novamente"
      );
      return;
    }
    const U = { id: L.id, type: L.type, delay: R * 1e3 };
    if ($ !== void 0 && I !== void 0) {
      const k = V.data.map((Y, G) => (G === I && Y.id === $ ? U : Y)),
        q = r.map((Y) => (Y.id === V.id ? { ...Y, data: k } : Y));
      i(q), await de({ funis: JSON.stringify(q) }), s({ ...l, data: k });
    } else {
      const k = V.data.findIndex((q) => q.id === P);
      if (k !== -1) {
        const q = V.data.map((G, Q) => (Q === k ? U : G)),
          Y = r.map((G) => (G.id === V.id ? { ...G, data: q } : G));
        i(Y), de({ funis: JSON.stringify(Y) }), s({ ...l, data: q });
      } else oe.error("Algo deu errado ao tentar editar o item do funil");
    }
  }
  async function x({ itemId: P, delayInSeconds: F }) {
    if (!l) {
      oe.error(
        "Erro ao tentar adiciona o item ao seu funil. Recarregue a p\xE1gina e tente novamente"
      );
      return;
    }
    const R = await f(P);
    if (!R) {
      oe.error(
        "N\xE3o conseguimos encontrar o item que voc\xEA est\xE1 tentando inserir. Recarregue a p\xE1gina e tente novamente"
      );
      return;
    }
    if (!R.data)
      throw (
        (oe.error("O item que voc\xEA est\xE1 tentando inserir est\xE1 vazio"),
        new Error("O item que voc\xEA est\xE1 tentando inserir est\xE1 vazio"))
      );
    const I = { id: R.id, type: R.type, delay: F * 1e3 },
      $ = l.data ? [...l.data, I] : [I];
    s({ ...l, data: $ });
    const L = r.map((V) => (V.id === l.id ? { ...V, data: $ } : V));
    i(L), de({ funis: JSON.stringify(L) });
  }
  async function y(P, F) {
    if (!(l != null && l.data) || P === void 0 || F === void 0) return;
    const R = Array.from(l.data),
      [I] = R.splice(P, 1);
    R.splice(F, 0, I), s({ ...l, data: R });
    const $ = r.map((L) => (L.id === l.id ? { ...L, data: R } : L));
    i($),
      R.length === l.data.length
        ? await oe.promise(de({ funis: JSON.stringify($) }), {
            pending: "Salvando altera\xE7\xF5es, aguarde...",
            success: "Orderm do funil alterada com sucesso",
            error:
              "Algo deu errado ao tentar alterar a ordem do funil. Recarregue a p\xE1gina e tente novamente",
          })
        : oe.error(
            "Algo deu errado ao tentar alterar a ordem do funil. Recarregue a p\xE1gina e tente novamente!"
          );
  }
  async function S(P) {
    const F = r.find(($) => $.id === P);
    if (!F) {
      oe.error(
        "N\xE3o conseguimos encontrar o funil a ser duplicado. Recarregue a p\xE1gina e tente novamente"
      );
      return;
    }
    const R = { ...F, id: gr(), name: `${F.name} - copia` },
      I = r.reduce(($, L) => (L.id === P && $.push(R), $.push(L), $), []);
    i(I),
      await oe.promise(de({ funis: JSON.stringify(I) }), {
        pending: "Duplicando funil, aguarde...",
        success: "Funil duplicado com sucesso",
        error: "Algo deu errado ao tentar duplicar o funil",
      }),
      c(void 0),
      a(void 0),
      s(R);
  }
  async function _(P) {
    const F = r.filter((R) => R.id !== P);
    i(F),
      await oe.promise(de({ funis: JSON.stringify(F) }), {
        pending: "Removendo item, aguarde...",
        success: "Item removido com sucesso",
        error: "Algo deu errado ao tentar remover o novo item",
      }),
      c(void 0),
      a(void 0),
      s(void 0);
  }
  const A = {
    funnelsIndex: r,
    createNewFunnel: p,
    updateFunnelName: h,
    removeItemFromFunnel: v,
    addItemForFunnel: x,
    editItemFromFunnel: w,
    changeFunnelItemPosition: y,
    duplicateFunnel: S,
    deleteFunnel: _,
  };
  return ye.createElement(Ep.Provider, { value: A }, t);
}
function eD() {
  return E.exports.useContext(Ep);
}
const wp = E.exports.createContext({});
function _E({
  children: t,
  useItemStore: n,
  props: { triggersIndex: r, setTriggersIndex: i },
}) {
  const { setSelectedFunnel: a, setSelectedTrigger: s, setSelectedItem: l } = n;
  async function c(P) {
    const F = {
      id: gr(),
      enabled: !0,
      name: P != null ? P : "Novo Gatilho",
      type: "trigger",
      keywordRules: [],
      funnelId: void 0,
      secondsBeforeSend: 0,
    };
    i((R) => [...R, { ...F, type: "trigger" }]),
      await oe.promise(
        de({ triggers: JSON.stringify([...r, { ...F, type: "trigger" }]) }),
        {
          pending: "Adicionando gatilho, aguarde...",
          success: "Gatilho adicionado com sucesso",
          error: "Algo deu errado ao tentar adicionar o novo gatilho",
        }
      );
  }
  async function f({ triggerId: P, name: F }) {
    const R = r.map((I) => (I.id === P ? Object.assign(I, { name: F }) : I));
    i(R),
      await oe.promise(de({ triggers: JSON.stringify(R) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Nome editado com sucesso",
        error: "Algo deu errado ao tentar editar o nome do seu gatilho",
      });
  }
  async function p({ triggerId: P, keywordRules: F }) {
    const R = r.map((I) =>
      I.id === P ? Object.assign(I, { keywordRules: F }) : I
    );
    i(R),
      await oe.promise(de({ triggers: JSON.stringify(R) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Regras de gatilho atualizadas com sucesso",
        error: "Algo deu errado ao tentar editar as regras do seu gatilho",
      });
  }
  async function h({ triggerId: P, funnelId: F }) {
    const R = r.find(($) => $.id === P);
    if ((R == null ? void 0 : R.funnelId) === F) return;
    const I = r.map(($) =>
      $.id === P ? Object.assign($, { funnelId: F }) : $
    );
    i(I),
      await oe.promise(de({ triggers: JSON.stringify(I) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Gatilho: Funil alvo alterado com sucesso",
        error: "Algo deu errado ao tentar alterar o funil do seu gatilho",
      });
  }
  async function v({ triggerId: P, secondsBeforeSend: F }) {
    const R = r.find(($) => $.id === P);
    if ((R == null ? void 0 : R.secondsBeforeSend) === F) return;
    const I = r.map(($) =>
      $.id === P ? Object.assign($, { secondsBeforeSend: F }) : $
    );
    i(I),
      await oe.promise(de({ triggers: JSON.stringify(I) }), {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Atraso de envio editado com sucesso",
        error:
          "Algo deu errado ao tentar editar o atraso de envio do seu gatilho",
      });
  }
  async function w({ triggerId: P, ignoreCaseSensitive: F }) {
    const R = r.map((I) =>
      I.id === P ? Object.assign(I, { ignoreCaseSensitive: F }) : I
    );
    i(R), await de({ triggers: JSON.stringify(R) });
  }
  async function x({ triggerId: P, dontSendToContact: F }) {
    const R = r.map((I) =>
      I.id === P ? Object.assign(I, { dontSendToContact: F }) : I
    );
    i(R), await de({ triggers: JSON.stringify(R) });
  }
  async function y({ triggerId: P, dontSendToGroups: F }) {
    const R = r.map((I) =>
      I.id === P ? Object.assign(I, { dontSendToGroups: F }) : I
    );
    i(R), await de({ triggers: JSON.stringify(R) });
  }
  async function S(P) {
    const F = r.map((I) =>
      I.id === P ? Object.assign(I, { enabled: !I.enabled }) : I
    );
    i(F);
    const R = r.find((I) => I.id === P);
    await oe.promise(de({ triggers: JSON.stringify(F) }), {
      pending: "Salvando altera\xE7\xF5es, aguarde...",
      success: `Gatilho ${
        R != null && R.enabled ? "ativado" : "desativado"
      } com sucesso`,
      error: "Algo deu errado ao tentar editar o status do seu gatilho",
    });
  }
  async function _(P) {
    const F = r.filter((R) => R.id !== P);
    i(F),
      await oe.promise(de({ triggers: JSON.stringify(F) }), {
        pending: "Removendo gatilho, aguarde...",
        success: "Gatilho removido com sucesso",
        error: "Algo deu errado ao tentar remover o gatilho",
      }),
      s(void 0),
      l(void 0),
      a(void 0);
  }
  const A = {
    triggersIndex: r,
    createNewTrigger: c,
    updateTriggerName: f,
    updateTriggerKeyWordRules: p,
    updateTriggerFunnelId: h,
    updateTriggerSecondsBeforeSend: v,
    updateIgnoreCaseSensitiveTrigger: w,
    updateDontSendToContactTrigger: x,
    updateDontSendToGroupsTrigger: y,
    toggleEnabledTrigger: S,
    deleteTrigger: _,
  };
  return ye.createElement(wp.Provider, { value: A }, t);
}
function tD() {
  return E.exports.useContext(wp);
}
const Sp = E.exports.createContext({});
function nD({ children: t }) {
  const [n, r] = E.exports.useState(void 0),
    [i, a] = E.exports.useState(void 0),
    [s, l] = E.exports.useState(void 0),
    [c, f] = E.exports.useState({}),
    [p, h] = E.exports.useState({}),
    [v, w] = E.exports.useState({}),
    [x, y] = E.exports.useState({}),
    [S, _] = E.exports.useState({}),
    [A, P] = E.exports.useState({});
  E.exports.useEffect(() => {
    Ot("mensagensIndex").then((k) => {
      f(k || []);
    }),
      Ot("audiosIndex").then((k) => {
        h(k || []);
      }),
      Ot("mediasIndex").then((k) => {
        w(k || []);
      }),
      Ot("docsIndex").then((k) => {
        y(k || []);
      }),
      Ot("funis").then((k) => {
        _(k || []);
      }),
      Ot("triggers").then((k) => {
        P(k || []);
      });
  }, []);
  async function F(k, q, Y) {
    if (!(k === void 0 || q === void 0)) {
      if (Y === "mensagens") {
        const G = Array.from(c),
          [Q] = G.splice(k, 1);
        G.splice(q, 0, Q),
          f(G),
          G.length === c.length
            ? await oe.promise(de({ mensagensIndex: JSON.stringify(G) }), {
                pending: "Salvando altera\xE7\xF5es, aguarde...",
                success: "Orderm alterada com sucesso",
                error:
                  "Algo deu errado ao tentar alterar a ordem. Recarregue a p\xE1gina e tente novamente",
              })
            : oe.error(
                "Algo deu errado ao tentar alterar a ordem dos itens. Recarregue a p\xE1gina e tente novamente"
              );
      } else if (Y === "audios") {
        const G = Array.from(p),
          [Q] = G.splice(k, 1);
        G.splice(q, 0, Q),
          h(G),
          G.length === p.length
            ? await oe.promise(de({ audiosIndex: JSON.stringify(G) }), {
                pending: "Salvando altera\xE7\xF5es, aguarde...",
                success: "Orderm alterada com sucesso",
                error:
                  "Algo deu errado ao tentar alterar a ordem. Recarregue a p\xE1gina e tente novamente",
              })
            : oe.error(
                "Algo deu errado ao tentar alterar a ordem dos itens. Recarregue a p\xE1gina e tente novamente"
              );
      } else if (Y === "medias") {
        const G = Array.from(v),
          [Q] = G.splice(k, 1);
        G.splice(q, 0, Q),
          w(G),
          G.length === v.length
            ? await oe.promise(de({ mediasIndex: JSON.stringify(G) }), {
                pending: "Salvando altera\xE7\xF5es, aguarde...",
                success: "Orderm alterada com sucesso",
                error:
                  "Algo deu errado ao tentar alterar a ordem. Recarregue a p\xE1gina e tente novamente",
              })
            : oe.error(
                "Algo deu errado ao tentar alterar a ordem dos itens. Recarregue a p\xE1gina e tente novamente"
              );
      } else if (Y === "docs") {
        const G = Array.from(x),
          [Q] = G.splice(k, 1);
        G.splice(q, 0, Q),
          y(G),
          G.length === x.length
            ? await oe.promise(de({ docsIndex: JSON.stringify(G) }), {
                pending: "Salvando altera\xE7\xF5es, aguarde...",
                success: "Orderm alterada com sucesso",
                error:
                  "Algo deu errado ao tentar alterar a ordem. Recarregue a p\xE1gina e tente novamente",
              })
            : oe.error(
                "Algo deu errado ao tentar alterar a ordem dos itens. Recarregue a p\xE1gina e tente novamente"
              );
      } else if (Y === "funis") {
        const G = Array.from(S),
          [Q] = G.splice(k, 1);
        G.splice(q, 0, Q),
          _(G),
          G.length === S.length
            ? await oe.promise(de({ funis: JSON.stringify(G) }), {
                pending: "Salvando altera\xE7\xF5es, aguarde...",
                success: "Orderm alterada com sucesso",
                error:
                  "Algo deu errado ao tentar alterar a ordem. Recarregue a p\xE1gina e tente novamente",
              })
            : oe.error(
                "Algo deu errado ao tentar alterar a ordem dos itens. Recarregue a p\xE1gina e tente novamente"
              );
      } else if (Y === "triggers") {
        const G = Array.from(A),
          [Q] = G.splice(k, 1);
        G.splice(q, 0, Q),
          P(G),
          G.length === A.length
            ? await oe.promise(de({ triggers: JSON.stringify(G) }), {
                pending: "Salvando altera\xE7\xF5es, aguarde...",
                success: "Orderm alterada com sucesso",
                error:
                  "Algo deu errado ao tentar alterar a ordem. Recarregue a p\xE1gina e tente novamente",
              })
            : oe.error(
                "Algo deu errado ao tentar alterar a ordem dos itens. Recarregue a p\xE1gina e tente novamente"
              );
      }
    }
  }
  function R(k, q) {
    const Q = [...{ mensagens: c, audios: p, medias: v, docs: x }[q]].find(
      (X) => X.id === k
    );
    return Q == null ? void 0 : Q.name;
  }
  function I(k) {
    const q = S.find((Y) => Y.id === k);
    return q == null ? void 0 : q.name;
  }
  async function $(k) {
    return await Ot(k);
  }
  async function L(k) {
    return S.find((Y) => Y.id === k);
  }
  async function V(k) {
    return A.find((Y) => Y.id === k);
  }
  const U = {
    selectedItem: n,
    setSelectedItem: r,
    setSelectedTrigger: l,
    selectedTrigger: s,
    selectedFunnel: i,
    setSelectedFunnel: a,
    changeItemPosition: F,
    getItemFromStorage: $,
    getFunnelFromStorage: L,
    getTriggerFromStorage: V,
    getNameFromIndex: R,
    getFunnelName: I,
  };
  return ye.createElement(
    Sp.Provider,
    { value: U },
    ye.createElement(
      SE,
      { useItemStore: U, props: { mensagensIndex: c, setMensagensIndex: f } },
      ye.createElement(
        yE,
        { useItemStore: U, props: { audiosIndex: p, setAudiosIndex: h } },
        ye.createElement(
          EE,
          { useItemStore: U, props: { mediasIndex: v, setMediasIndex: w } },
          ye.createElement(
            wE,
            { useItemStore: U, props: { docsIndex: x, setDocsIndex: y } },
            ye.createElement(
              CE,
              {
                useItemStore: U,
                props: { funnelsIndex: S, setFunnelsIndex: _ },
              },
              ye.createElement(
                _E,
                {
                  useItemStore: U,
                  props: { setTriggersIndex: P, triggersIndex: A },
                },
                t
              )
            )
          )
        )
      )
    )
  );
}
function rD() {
  return E.exports.useContext(Sp);
}
function oD({ base64: t }) {
  const [n, r] = E.exports.useState();
  if (
    (E.exports.useEffect(() => {
      ty(t).then((a) => r(a));
    }, [t]),
    !n)
  )
    return ye.createElement(
      "div",
      { className: "itemPreviewLoading" },
      "Carrengando Pr\xE9-visualiza\xE7\xE3o"
    );
  if (n != null && n.type.includes("audio"))
    return ye.createElement("audio", { controls: !0, src: t, hidden: !t });
  if (n != null && n.type.includes("image"))
    return ye.createElement("img", {
      src: t,
      alt: "Imagem Preview",
      className:
        "absolute block h-full w-auto max-w-[100%] object-contain transition-transform hover:scale-150 hover:translate-y-[-3rem]",
    });
  if (n != null && n.type.includes("video"))
    return ye.createElement("video", {
      src: t,
      controls: !0,
      className:
        "absolute block h-full w-auto max-w-[100%] object-contain transition-transform hover:scale-150 hover:translate-y-[-3rem]",
    });
  const i = ny("docs");
  return ye.createElement(
    "div",
    { className: "itemPreviewDocument" },
    ye.createElement(i, { className: "itemPreviewIcon" }),
    "Pr\xE9-visualiza\xE7\xE3o indispon\xEDvel"
  );
}
function Nf(t) {
  return (t && t.ownerDocument) || document;
}
let Bf = 0;
function OE(t) {
  const [n, r] = E.exports.useState(t),
    i = t || n;
  return (
    E.exports.useEffect(() => {
      n == null && ((Bf += 1), r(`mui-${Bf}`));
    }, [n]),
    i
  );
}
const Uf = Au["useId".toString()];
function PE(t) {
  if (Uf !== void 0) {
    const n = Uf();
    return t != null ? t : n;
  }
  return OE(t);
}
function AE(t) {
  return typeof t == "string";
}
function So(t, n, r) {
  return t === void 0 || AE(t)
    ? n
    : K({}, n, { ownerState: K({}, n.ownerState, r) });
}
const DE = { disableDefaultClasses: !1 },
  RE = E.exports.createContext(DE);
function TE(t) {
  const { disableDefaultClasses: n } = E.exports.useContext(RE);
  return (r) => (n ? "" : t(r));
}
function IE(t, n = []) {
  if (t === void 0) return {};
  const r = {};
  return (
    Object.keys(t)
      .filter(
        (i) =>
          i.match(/^on[A-Z]/) && typeof t[i] == "function" && !n.includes(i)
      )
      .forEach((i) => {
        r[i] = t[i];
      }),
    r
  );
}
function FE(t, n, r) {
  return typeof t == "function" ? t(n, r) : t;
}
function Cp(t) {
  var n,
    r,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (n = 0; n < t.length; n++)
        t[n] && (r = Cp(t[n])) && (i && (i += " "), (i += r));
    else for (n in t) t[n] && (i && (i += " "), (i += n));
  return i;
}
function Vf() {
  for (var t, n, r = 0, i = ""; r < arguments.length; )
    (t = arguments[r++]) && (n = Cp(t)) && (i && (i += " "), (i += n));
  return i;
}
function Hf(t) {
  if (t === void 0) return {};
  const n = {};
  return (
    Object.keys(t)
      .filter((r) => !(r.match(/^on[A-Z]/) && typeof t[r] == "function"))
      .forEach((r) => {
        n[r] = t[r];
      }),
    n
  );
}
function LE(t) {
  const {
    getSlotProps: n,
    additionalProps: r,
    externalSlotProps: i,
    externalForwardedProps: a,
    className: s,
  } = t;
  if (!n) {
    const x = Vf(
        a == null ? void 0 : a.className,
        i == null ? void 0 : i.className,
        s,
        r == null ? void 0 : r.className
      ),
      y = K(
        {},
        r == null ? void 0 : r.style,
        a == null ? void 0 : a.style,
        i == null ? void 0 : i.style
      ),
      S = K({}, r, a, i);
    return (
      x.length > 0 && (S.className = x),
      Object.keys(y).length > 0 && (S.style = y),
      { props: S, internalRef: void 0 }
    );
  }
  const l = IE(K({}, a, i)),
    c = Hf(i),
    f = Hf(a),
    p = n(l),
    h = Vf(
      p == null ? void 0 : p.className,
      r == null ? void 0 : r.className,
      s,
      a == null ? void 0 : a.className,
      i == null ? void 0 : i.className
    ),
    v = K(
      {},
      p == null ? void 0 : p.style,
      r == null ? void 0 : r.style,
      a == null ? void 0 : a.style,
      i == null ? void 0 : i.style
    ),
    w = K({}, p, r, f, c);
  return (
    h.length > 0 && (w.className = h),
    Object.keys(v).length > 0 && (w.style = v),
    { props: w, internalRef: p.ref }
  );
}
const ME = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function $E(t) {
  var n;
  const {
      elementType: r,
      externalSlotProps: i,
      ownerState: a,
      skipResolvingSlotProps: s = !1,
    } = t,
    l = Kn(t, ME),
    c = s ? {} : FE(i, a),
    { props: f, internalRef: p } = LE(K({}, l, { externalSlotProps: c })),
    h = jr(
      p,
      c == null ? void 0 : c.ref,
      (n = t.additionalProps) == null ? void 0 : n.ref
    );
  return So(r, K({}, f, { ref: h }), a);
}
var Pt = "top",
  Zt = "bottom",
  Qt = "right",
  At = "left",
  Tu = "auto",
  Io = [Pt, Zt, Qt, At],
  Wr = "start",
  Do = "end",
  kE = "clippingParents",
  _p = "viewport",
  bo = "popper",
  NE = "reference",
  jf = Io.reduce(function (t, n) {
    return t.concat([n + "-" + Wr, n + "-" + Do]);
  }, []),
  Op = [].concat(Io, [Tu]).reduce(function (t, n) {
    return t.concat([n, n + "-" + Wr, n + "-" + Do]);
  }, []),
  BE = "beforeRead",
  UE = "read",
  VE = "afterRead",
  HE = "beforeMain",
  jE = "main",
  WE = "afterMain",
  zE = "beforeWrite",
  GE = "write",
  KE = "afterWrite",
  qE = [BE, UE, VE, HE, jE, WE, zE, GE, KE];
function vn(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Bt(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var n = t.ownerDocument;
    return (n && n.defaultView) || window;
  }
  return t;
}
function vr(t) {
  var n = Bt(t).Element;
  return t instanceof n || t instanceof Element;
}
function Xt(t) {
  var n = Bt(t).HTMLElement;
  return t instanceof n || t instanceof HTMLElement;
}
function Iu(t) {
  if (typeof ShadowRoot > "u") return !1;
  var n = Bt(t).ShadowRoot;
  return t instanceof n || t instanceof ShadowRoot;
}
function JE(t) {
  var n = t.state;
  Object.keys(n.elements).forEach(function (r) {
    var i = n.styles[r] || {},
      a = n.attributes[r] || {},
      s = n.elements[r];
    !Xt(s) ||
      !vn(s) ||
      (Object.assign(s.style, i),
      Object.keys(a).forEach(function (l) {
        var c = a[l];
        c === !1 ? s.removeAttribute(l) : s.setAttribute(l, c === !0 ? "" : c);
      }));
  });
}
function YE(t) {
  var n = t.state,
    r = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(n.elements.popper.style, r.popper),
    (n.styles = r),
    n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow),
    function () {
      Object.keys(n.elements).forEach(function (i) {
        var a = n.elements[i],
          s = n.attributes[i] || {},
          l = Object.keys(n.styles.hasOwnProperty(i) ? n.styles[i] : r[i]),
          c = l.reduce(function (f, p) {
            return (f[p] = ""), f;
          }, {});
        !Xt(a) ||
          !vn(a) ||
          (Object.assign(a.style, c),
          Object.keys(s).forEach(function (f) {
            a.removeAttribute(f);
          }));
      });
    }
  );
}
const XE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: JE,
  effect: YE,
  requires: ["computeStyles"],
};
function gn(t) {
  return t.split("-")[0];
}
var hr = Math.max,
  Yi = Math.min,
  zr = Math.round;
function vu() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands)
    ? t.brands
        .map(function (n) {
          return n.brand + "/" + n.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Pp() {
  return !/^((?!chrome|android).)*safari/i.test(vu());
}
function Gr(t, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var i = t.getBoundingClientRect(),
    a = 1,
    s = 1;
  n &&
    Xt(t) &&
    ((a = (t.offsetWidth > 0 && zr(i.width) / t.offsetWidth) || 1),
    (s = (t.offsetHeight > 0 && zr(i.height) / t.offsetHeight) || 1));
  var l = vr(t) ? Bt(t) : window,
    c = l.visualViewport,
    f = !Pp() && r,
    p = (i.left + (f && c ? c.offsetLeft : 0)) / a,
    h = (i.top + (f && c ? c.offsetTop : 0)) / s,
    v = i.width / a,
    w = i.height / s;
  return {
    width: v,
    height: w,
    top: h,
    right: p + v,
    bottom: h + w,
    left: p,
    x: p,
    y: h,
  };
}
function Fu(t) {
  var n = Gr(t),
    r = t.offsetWidth,
    i = t.offsetHeight;
  return (
    Math.abs(n.width - r) <= 1 && (r = n.width),
    Math.abs(n.height - i) <= 1 && (i = n.height),
    { x: t.offsetLeft, y: t.offsetTop, width: r, height: i }
  );
}
function Ap(t, n) {
  var r = n.getRootNode && n.getRootNode();
  if (t.contains(n)) return !0;
  if (r && Iu(r)) {
    var i = n;
    do {
      if (i && t.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Rn(t) {
  return Bt(t).getComputedStyle(t);
}
function ZE(t) {
  return ["table", "td", "th"].indexOf(vn(t)) >= 0;
}
function Jn(t) {
  return ((vr(t) ? t.ownerDocument : t.document) || window.document)
    .documentElement;
}
function la(t) {
  return vn(t) === "html"
    ? t
    : t.assignedSlot || t.parentNode || (Iu(t) ? t.host : null) || Jn(t);
}
function Wf(t) {
  return !Xt(t) || Rn(t).position === "fixed" ? null : t.offsetParent;
}
function QE(t) {
  var n = /firefox/i.test(vu()),
    r = /Trident/i.test(vu());
  if (r && Xt(t)) {
    var i = Rn(t);
    if (i.position === "fixed") return null;
  }
  var a = la(t);
  for (Iu(a) && (a = a.host); Xt(a) && ["html", "body"].indexOf(vn(a)) < 0; ) {
    var s = Rn(a);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (n && s.willChange === "filter") ||
      (n && s.filter && s.filter !== "none")
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function Fo(t) {
  for (var n = Bt(t), r = Wf(t); r && ZE(r) && Rn(r).position === "static"; )
    r = Wf(r);
  return r &&
    (vn(r) === "html" || (vn(r) === "body" && Rn(r).position === "static"))
    ? n
    : r || QE(t) || n;
}
function Lu(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Oo(t, n, r) {
  return hr(t, Yi(n, r));
}
function ew(t, n, r) {
  var i = Oo(t, n, r);
  return i > r ? r : i;
}
function Dp() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Rp(t) {
  return Object.assign({}, Dp(), t);
}
function Tp(t, n) {
  return n.reduce(function (r, i) {
    return (r[i] = t), r;
  }, {});
}
var tw = function (n, r) {
  return (
    (n =
      typeof n == "function"
        ? n(Object.assign({}, r.rects, { placement: r.placement }))
        : n),
    Rp(typeof n != "number" ? n : Tp(n, Io))
  );
};
function nw(t) {
  var n,
    r = t.state,
    i = t.name,
    a = t.options,
    s = r.elements.arrow,
    l = r.modifiersData.popperOffsets,
    c = gn(r.placement),
    f = Lu(c),
    p = [At, Qt].indexOf(c) >= 0,
    h = p ? "height" : "width";
  if (!(!s || !l)) {
    var v = tw(a.padding, r),
      w = Fu(s),
      x = f === "y" ? Pt : At,
      y = f === "y" ? Zt : Qt,
      S =
        r.rects.reference[h] + r.rects.reference[f] - l[f] - r.rects.popper[h],
      _ = l[f] - r.rects.reference[f],
      A = Fo(s),
      P = A ? (f === "y" ? A.clientHeight || 0 : A.clientWidth || 0) : 0,
      F = S / 2 - _ / 2,
      R = v[x],
      I = P - w[h] - v[y],
      $ = P / 2 - w[h] / 2 + F,
      L = Oo(R, $, I),
      V = f;
    r.modifiersData[i] = ((n = {}), (n[V] = L), (n.centerOffset = L - $), n);
  }
}
function rw(t) {
  var n = t.state,
    r = t.options,
    i = r.element,
    a = i === void 0 ? "[data-popper-arrow]" : i;
  a != null &&
    ((typeof a == "string" && ((a = n.elements.popper.querySelector(a)), !a)) ||
      !Ap(n.elements.popper, a) ||
      (n.elements.arrow = a));
}
const ow = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: nw,
  effect: rw,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Kr(t) {
  return t.split("-")[1];
}
var iw = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function aw(t, n) {
  var r = t.x,
    i = t.y,
    a = n.devicePixelRatio || 1;
  return { x: zr(r * a) / a || 0, y: zr(i * a) / a || 0 };
}
function zf(t) {
  var n,
    r = t.popper,
    i = t.popperRect,
    a = t.placement,
    s = t.variation,
    l = t.offsets,
    c = t.position,
    f = t.gpuAcceleration,
    p = t.adaptive,
    h = t.roundOffsets,
    v = t.isFixed,
    w = l.x,
    x = w === void 0 ? 0 : w,
    y = l.y,
    S = y === void 0 ? 0 : y,
    _ = typeof h == "function" ? h({ x, y: S }) : { x, y: S };
  (x = _.x), (S = _.y);
  var A = l.hasOwnProperty("x"),
    P = l.hasOwnProperty("y"),
    F = At,
    R = Pt,
    I = window;
  if (p) {
    var $ = Fo(r),
      L = "clientHeight",
      V = "clientWidth";
    if (
      ($ === Bt(r) &&
        (($ = Jn(r)),
        Rn($).position !== "static" &&
          c === "absolute" &&
          ((L = "scrollHeight"), (V = "scrollWidth"))),
      ($ = $),
      a === Pt || ((a === At || a === Qt) && s === Do))
    ) {
      R = Zt;
      var U = v && $ === I && I.visualViewport ? I.visualViewport.height : $[L];
      (S -= U - i.height), (S *= f ? 1 : -1);
    }
    if (a === At || ((a === Pt || a === Zt) && s === Do)) {
      F = Qt;
      var k = v && $ === I && I.visualViewport ? I.visualViewport.width : $[V];
      (x -= k - i.width), (x *= f ? 1 : -1);
    }
  }
  var q = Object.assign({ position: c }, p && iw),
    Y = h === !0 ? aw({ x, y: S }, Bt(r)) : { x, y: S };
  if (((x = Y.x), (S = Y.y), f)) {
    var G;
    return Object.assign(
      {},
      q,
      ((G = {}),
      (G[R] = P ? "0" : ""),
      (G[F] = A ? "0" : ""),
      (G.transform =
        (I.devicePixelRatio || 1) <= 1
          ? "translate(" + x + "px, " + S + "px)"
          : "translate3d(" + x + "px, " + S + "px, 0)"),
      G)
    );
  }
  return Object.assign(
    {},
    q,
    ((n = {}),
    (n[R] = P ? S + "px" : ""),
    (n[F] = A ? x + "px" : ""),
    (n.transform = ""),
    n)
  );
}
function sw(t) {
  var n = t.state,
    r = t.options,
    i = r.gpuAcceleration,
    a = i === void 0 ? !0 : i,
    s = r.adaptive,
    l = s === void 0 ? !0 : s,
    c = r.roundOffsets,
    f = c === void 0 ? !0 : c,
    p = {
      placement: gn(n.placement),
      variation: Kr(n.placement),
      popper: n.elements.popper,
      popperRect: n.rects.popper,
      gpuAcceleration: a,
      isFixed: n.options.strategy === "fixed",
    };
  n.modifiersData.popperOffsets != null &&
    (n.styles.popper = Object.assign(
      {},
      n.styles.popper,
      zf(
        Object.assign({}, p, {
          offsets: n.modifiersData.popperOffsets,
          position: n.options.strategy,
          adaptive: l,
          roundOffsets: f,
        })
      )
    )),
    n.modifiersData.arrow != null &&
      (n.styles.arrow = Object.assign(
        {},
        n.styles.arrow,
        zf(
          Object.assign({}, p, {
            offsets: n.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: f,
          })
        )
      )),
    (n.attributes.popper = Object.assign({}, n.attributes.popper, {
      "data-popper-placement": n.placement,
    }));
}
const uw = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: sw,
  data: {},
};
var Li = { passive: !0 };
function lw(t) {
  var n = t.state,
    r = t.instance,
    i = t.options,
    a = i.scroll,
    s = a === void 0 ? !0 : a,
    l = i.resize,
    c = l === void 0 ? !0 : l,
    f = Bt(n.elements.popper),
    p = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return (
    s &&
      p.forEach(function (h) {
        h.addEventListener("scroll", r.update, Li);
      }),
    c && f.addEventListener("resize", r.update, Li),
    function () {
      s &&
        p.forEach(function (h) {
          h.removeEventListener("scroll", r.update, Li);
        }),
        c && f.removeEventListener("resize", r.update, Li);
    }
  );
}
const cw = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: lw,
  data: {},
};
var fw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function zi(t) {
  return t.replace(/left|right|bottom|top/g, function (n) {
    return fw[n];
  });
}
var dw = { start: "end", end: "start" };
function Gf(t) {
  return t.replace(/start|end/g, function (n) {
    return dw[n];
  });
}
function Mu(t) {
  var n = Bt(t),
    r = n.pageXOffset,
    i = n.pageYOffset;
  return { scrollLeft: r, scrollTop: i };
}
function $u(t) {
  return Gr(Jn(t)).left + Mu(t).scrollLeft;
}
function pw(t, n) {
  var r = Bt(t),
    i = Jn(t),
    a = r.visualViewport,
    s = i.clientWidth,
    l = i.clientHeight,
    c = 0,
    f = 0;
  if (a) {
    (s = a.width), (l = a.height);
    var p = Pp();
    (p || (!p && n === "fixed")) && ((c = a.offsetLeft), (f = a.offsetTop));
  }
  return { width: s, height: l, x: c + $u(t), y: f };
}
function hw(t) {
  var n,
    r = Jn(t),
    i = Mu(t),
    a = (n = t.ownerDocument) == null ? void 0 : n.body,
    s = hr(
      r.scrollWidth,
      r.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0
    ),
    l = hr(
      r.scrollHeight,
      r.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0
    ),
    c = -i.scrollLeft + $u(t),
    f = -i.scrollTop;
  return (
    Rn(a || r).direction === "rtl" &&
      (c += hr(r.clientWidth, a ? a.clientWidth : 0) - s),
    { width: s, height: l, x: c, y: f }
  );
}
function ku(t) {
  var n = Rn(t),
    r = n.overflow,
    i = n.overflowX,
    a = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + i);
}
function Ip(t) {
  return ["html", "body", "#document"].indexOf(vn(t)) >= 0
    ? t.ownerDocument.body
    : Xt(t) && ku(t)
    ? t
    : Ip(la(t));
}
function Po(t, n) {
  var r;
  n === void 0 && (n = []);
  var i = Ip(t),
    a = i === ((r = t.ownerDocument) == null ? void 0 : r.body),
    s = Bt(i),
    l = a ? [s].concat(s.visualViewport || [], ku(i) ? i : []) : i,
    c = n.concat(l);
  return a ? c : c.concat(Po(la(l)));
}
function mu(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height,
  });
}
function gw(t, n) {
  var r = Gr(t, !1, n === "fixed");
  return (
    (r.top = r.top + t.clientTop),
    (r.left = r.left + t.clientLeft),
    (r.bottom = r.top + t.clientHeight),
    (r.right = r.left + t.clientWidth),
    (r.width = t.clientWidth),
    (r.height = t.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function Kf(t, n, r) {
  return n === _p ? mu(pw(t, r)) : vr(n) ? gw(n, r) : mu(hw(Jn(t)));
}
function vw(t) {
  var n = Po(la(t)),
    r = ["absolute", "fixed"].indexOf(Rn(t).position) >= 0,
    i = r && Xt(t) ? Fo(t) : t;
  return vr(i)
    ? n.filter(function (a) {
        return vr(a) && Ap(a, i) && vn(a) !== "body";
      })
    : [];
}
function mw(t, n, r, i) {
  var a = n === "clippingParents" ? vw(t) : [].concat(n),
    s = [].concat(a, [r]),
    l = s[0],
    c = s.reduce(function (f, p) {
      var h = Kf(t, p, i);
      return (
        (f.top = hr(h.top, f.top)),
        (f.right = Yi(h.right, f.right)),
        (f.bottom = Yi(h.bottom, f.bottom)),
        (f.left = hr(h.left, f.left)),
        f
      );
    }, Kf(t, l, i));
  return (
    (c.width = c.right - c.left),
    (c.height = c.bottom - c.top),
    (c.x = c.left),
    (c.y = c.top),
    c
  );
}
function Fp(t) {
  var n = t.reference,
    r = t.element,
    i = t.placement,
    a = i ? gn(i) : null,
    s = i ? Kr(i) : null,
    l = n.x + n.width / 2 - r.width / 2,
    c = n.y + n.height / 2 - r.height / 2,
    f;
  switch (a) {
    case Pt:
      f = { x: l, y: n.y - r.height };
      break;
    case Zt:
      f = { x: l, y: n.y + n.height };
      break;
    case Qt:
      f = { x: n.x + n.width, y: c };
      break;
    case At:
      f = { x: n.x - r.width, y: c };
      break;
    default:
      f = { x: n.x, y: n.y };
  }
  var p = a ? Lu(a) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (s) {
      case Wr:
        f[p] = f[p] - (n[h] / 2 - r[h] / 2);
        break;
      case Do:
        f[p] = f[p] + (n[h] / 2 - r[h] / 2);
        break;
    }
  }
  return f;
}
function Ro(t, n) {
  n === void 0 && (n = {});
  var r = n,
    i = r.placement,
    a = i === void 0 ? t.placement : i,
    s = r.strategy,
    l = s === void 0 ? t.strategy : s,
    c = r.boundary,
    f = c === void 0 ? kE : c,
    p = r.rootBoundary,
    h = p === void 0 ? _p : p,
    v = r.elementContext,
    w = v === void 0 ? bo : v,
    x = r.altBoundary,
    y = x === void 0 ? !1 : x,
    S = r.padding,
    _ = S === void 0 ? 0 : S,
    A = Rp(typeof _ != "number" ? _ : Tp(_, Io)),
    P = w === bo ? NE : bo,
    F = t.rects.popper,
    R = t.elements[y ? P : w],
    I = mw(vr(R) ? R : R.contextElement || Jn(t.elements.popper), f, h, l),
    $ = Gr(t.elements.reference),
    L = Fp({ reference: $, element: F, strategy: "absolute", placement: a }),
    V = mu(Object.assign({}, F, L)),
    U = w === bo ? V : $,
    k = {
      top: I.top - U.top + A.top,
      bottom: U.bottom - I.bottom + A.bottom,
      left: I.left - U.left + A.left,
      right: U.right - I.right + A.right,
    },
    q = t.modifiersData.offset;
  if (w === bo && q) {
    var Y = q[a];
    Object.keys(k).forEach(function (G) {
      var Q = [Qt, Zt].indexOf(G) >= 0 ? 1 : -1,
        X = [Pt, Zt].indexOf(G) >= 0 ? "y" : "x";
      k[G] += Y[X] * Q;
    });
  }
  return k;
}
function bw(t, n) {
  n === void 0 && (n = {});
  var r = n,
    i = r.placement,
    a = r.boundary,
    s = r.rootBoundary,
    l = r.padding,
    c = r.flipVariations,
    f = r.allowedAutoPlacements,
    p = f === void 0 ? Op : f,
    h = Kr(i),
    v = h
      ? c
        ? jf
        : jf.filter(function (y) {
            return Kr(y) === h;
          })
      : Io,
    w = v.filter(function (y) {
      return p.indexOf(y) >= 0;
    });
  w.length === 0 && (w = v);
  var x = w.reduce(function (y, S) {
    return (
      (y[S] = Ro(t, { placement: S, boundary: a, rootBoundary: s, padding: l })[
        gn(S)
      ]),
      y
    );
  }, {});
  return Object.keys(x).sort(function (y, S) {
    return x[y] - x[S];
  });
}
function xw(t) {
  if (gn(t) === Tu) return [];
  var n = zi(t);
  return [Gf(t), n, Gf(n)];
}
function yw(t) {
  var n = t.state,
    r = t.options,
    i = t.name;
  if (!n.modifiersData[i]._skip) {
    for (
      var a = r.mainAxis,
        s = a === void 0 ? !0 : a,
        l = r.altAxis,
        c = l === void 0 ? !0 : l,
        f = r.fallbackPlacements,
        p = r.padding,
        h = r.boundary,
        v = r.rootBoundary,
        w = r.altBoundary,
        x = r.flipVariations,
        y = x === void 0 ? !0 : x,
        S = r.allowedAutoPlacements,
        _ = n.options.placement,
        A = gn(_),
        P = A === _,
        F = f || (P || !y ? [zi(_)] : xw(_)),
        R = [_].concat(F).reduce(function (Ne, Ae) {
          return Ne.concat(
            gn(Ae) === Tu
              ? bw(n, {
                  placement: Ae,
                  boundary: h,
                  rootBoundary: v,
                  padding: p,
                  flipVariations: y,
                  allowedAutoPlacements: S,
                })
              : Ae
          );
        }, []),
        I = n.rects.reference,
        $ = n.rects.popper,
        L = new Map(),
        V = !0,
        U = R[0],
        k = 0;
      k < R.length;
      k++
    ) {
      var q = R[k],
        Y = gn(q),
        G = Kr(q) === Wr,
        Q = [Pt, Zt].indexOf(Y) >= 0,
        X = Q ? "width" : "height",
        ae = Ro(n, {
          placement: q,
          boundary: h,
          rootBoundary: v,
          altBoundary: w,
          padding: p,
        }),
        re = Q ? (G ? Qt : At) : G ? Zt : Pt;
      I[X] > $[X] && (re = zi(re));
      var ve = zi(re),
        _e = [];
      if (
        (s && _e.push(ae[Y] <= 0),
        c && _e.push(ae[re] <= 0, ae[ve] <= 0),
        _e.every(function (Ne) {
          return Ne;
        }))
      ) {
        (U = q), (V = !1);
        break;
      }
      L.set(q, _e);
    }
    if (V)
      for (
        var Ie = y ? 3 : 1,
          $e = function (Ae) {
            var Le = R.find(function (Be) {
              var Te = L.get(Be);
              if (Te)
                return Te.slice(0, Ae).every(function (He) {
                  return He;
                });
            });
            if (Le) return (U = Le), "break";
          },
          Re = Ie;
        Re > 0;
        Re--
      ) {
        var ke = $e(Re);
        if (ke === "break") break;
      }
    n.placement !== U &&
      ((n.modifiersData[i]._skip = !0), (n.placement = U), (n.reset = !0));
  }
}
const Ew = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yw,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function qf(t, n, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: t.top - n.height - r.y,
      right: t.right - n.width + r.x,
      bottom: t.bottom - n.height + r.y,
      left: t.left - n.width - r.x,
    }
  );
}
function Jf(t) {
  return [Pt, Qt, Zt, At].some(function (n) {
    return t[n] >= 0;
  });
}
function ww(t) {
  var n = t.state,
    r = t.name,
    i = n.rects.reference,
    a = n.rects.popper,
    s = n.modifiersData.preventOverflow,
    l = Ro(n, { elementContext: "reference" }),
    c = Ro(n, { altBoundary: !0 }),
    f = qf(l, i),
    p = qf(c, a, s),
    h = Jf(f),
    v = Jf(p);
  (n.modifiersData[r] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: p,
    isReferenceHidden: h,
    hasPopperEscaped: v,
  }),
    (n.attributes.popper = Object.assign({}, n.attributes.popper, {
      "data-popper-reference-hidden": h,
      "data-popper-escaped": v,
    }));
}
const Sw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ww,
};
function Cw(t, n, r) {
  var i = gn(t),
    a = [At, Pt].indexOf(i) >= 0 ? -1 : 1,
    s = typeof r == "function" ? r(Object.assign({}, n, { placement: t })) : r,
    l = s[0],
    c = s[1];
  return (
    (l = l || 0),
    (c = (c || 0) * a),
    [At, Qt].indexOf(i) >= 0 ? { x: c, y: l } : { x: l, y: c }
  );
}
function _w(t) {
  var n = t.state,
    r = t.options,
    i = t.name,
    a = r.offset,
    s = a === void 0 ? [0, 0] : a,
    l = Op.reduce(function (h, v) {
      return (h[v] = Cw(v, n.rects, s)), h;
    }, {}),
    c = l[n.placement],
    f = c.x,
    p = c.y;
  n.modifiersData.popperOffsets != null &&
    ((n.modifiersData.popperOffsets.x += f),
    (n.modifiersData.popperOffsets.y += p)),
    (n.modifiersData[i] = l);
}
const Ow = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _w,
};
function Pw(t) {
  var n = t.state,
    r = t.name;
  n.modifiersData[r] = Fp({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement,
  });
}
const Aw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Pw,
  data: {},
};
function Dw(t) {
  return t === "x" ? "y" : "x";
}
function Rw(t) {
  var n = t.state,
    r = t.options,
    i = t.name,
    a = r.mainAxis,
    s = a === void 0 ? !0 : a,
    l = r.altAxis,
    c = l === void 0 ? !1 : l,
    f = r.boundary,
    p = r.rootBoundary,
    h = r.altBoundary,
    v = r.padding,
    w = r.tether,
    x = w === void 0 ? !0 : w,
    y = r.tetherOffset,
    S = y === void 0 ? 0 : y,
    _ = Ro(n, { boundary: f, rootBoundary: p, padding: v, altBoundary: h }),
    A = gn(n.placement),
    P = Kr(n.placement),
    F = !P,
    R = Lu(A),
    I = Dw(R),
    $ = n.modifiersData.popperOffsets,
    L = n.rects.reference,
    V = n.rects.popper,
    U =
      typeof S == "function"
        ? S(Object.assign({}, n.rects, { placement: n.placement }))
        : S,
    k =
      typeof U == "number"
        ? { mainAxis: U, altAxis: U }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, U),
    q = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
    Y = { x: 0, y: 0 };
  if (!!$) {
    if (s) {
      var G,
        Q = R === "y" ? Pt : At,
        X = R === "y" ? Zt : Qt,
        ae = R === "y" ? "height" : "width",
        re = $[R],
        ve = re + _[Q],
        _e = re - _[X],
        Ie = x ? -V[ae] / 2 : 0,
        $e = P === Wr ? L[ae] : V[ae],
        Re = P === Wr ? -V[ae] : -L[ae],
        ke = n.elements.arrow,
        Ne = x && ke ? Fu(ke) : { width: 0, height: 0 },
        Ae = n.modifiersData["arrow#persistent"]
          ? n.modifiersData["arrow#persistent"].padding
          : Dp(),
        Le = Ae[Q],
        Be = Ae[X],
        Te = Oo(0, L[ae], Ne[ae]),
        He = F
          ? L[ae] / 2 - Ie - Te - Le - k.mainAxis
          : $e - Te - Le - k.mainAxis,
        ct = F
          ? -L[ae] / 2 + Ie + Te + Be + k.mainAxis
          : Re + Te + Be + k.mainAxis,
        qe = n.elements.arrow && Fo(n.elements.arrow),
        et = qe ? (R === "y" ? qe.clientTop || 0 : qe.clientLeft || 0) : 0,
        mt = (G = q == null ? void 0 : q[R]) != null ? G : 0,
        Ye = re + He - mt - et,
        N = re + ct - mt,
        J = Oo(x ? Yi(ve, Ye) : ve, re, x ? hr(_e, N) : _e);
      ($[R] = J), (Y[R] = J - re);
    }
    if (c) {
      var z,
        pe = R === "x" ? Pt : At,
        xe = R === "x" ? Zt : Qt,
        ie = $[I],
        fe = I === "y" ? "height" : "width",
        Fe = ie + _[pe],
        tn = ie - _[xe],
        ln = [Pt, At].indexOf(A) !== -1,
        Dt = (z = q == null ? void 0 : q[I]) != null ? z : 0,
        Ut = ln ? Fe : ie - L[fe] - V[fe] - Dt + k.altAxis,
        nn = ln ? ie + L[fe] + V[fe] - Dt - k.altAxis : tn,
        rn = x && ln ? ew(Ut, ie, nn) : Oo(x ? Ut : Fe, ie, x ? nn : tn);
      ($[I] = rn), (Y[I] = rn - ie);
    }
    n.modifiersData[i] = Y;
  }
}
const Tw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Rw,
  requiresIfExists: ["offset"],
};
function Iw(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function Fw(t) {
  return t === Bt(t) || !Xt(t) ? Mu(t) : Iw(t);
}
function Lw(t) {
  var n = t.getBoundingClientRect(),
    r = zr(n.width) / t.offsetWidth || 1,
    i = zr(n.height) / t.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function Mw(t, n, r) {
  r === void 0 && (r = !1);
  var i = Xt(n),
    a = Xt(n) && Lw(n),
    s = Jn(n),
    l = Gr(t, a, r),
    c = { scrollLeft: 0, scrollTop: 0 },
    f = { x: 0, y: 0 };
  return (
    (i || (!i && !r)) &&
      ((vn(n) !== "body" || ku(s)) && (c = Fw(n)),
      Xt(n)
        ? ((f = Gr(n, !0)), (f.x += n.clientLeft), (f.y += n.clientTop))
        : s && (f.x = $u(s))),
    {
      x: l.left + c.scrollLeft - f.x,
      y: l.top + c.scrollTop - f.y,
      width: l.width,
      height: l.height,
    }
  );
}
function $w(t) {
  var n = new Map(),
    r = new Set(),
    i = [];
  t.forEach(function (s) {
    n.set(s.name, s);
  });
  function a(s) {
    r.add(s.name);
    var l = [].concat(s.requires || [], s.requiresIfExists || []);
    l.forEach(function (c) {
      if (!r.has(c)) {
        var f = n.get(c);
        f && a(f);
      }
    }),
      i.push(s);
  }
  return (
    t.forEach(function (s) {
      r.has(s.name) || a(s);
    }),
    i
  );
}
function kw(t) {
  var n = $w(t);
  return qE.reduce(function (r, i) {
    return r.concat(
      n.filter(function (a) {
        return a.phase === i;
      })
    );
  }, []);
}
function Nw(t) {
  var n;
  return function () {
    return (
      n ||
        (n = new Promise(function (r) {
          Promise.resolve().then(function () {
            (n = void 0), r(t());
          });
        })),
      n
    );
  };
}
function Bw(t) {
  var n = t.reduce(function (r, i) {
    var a = r[i.name];
    return (
      (r[i.name] = a
        ? Object.assign({}, a, i, {
            options: Object.assign({}, a.options, i.options),
            data: Object.assign({}, a.data, i.data),
          })
        : i),
      r
    );
  }, {});
  return Object.keys(n).map(function (r) {
    return n[r];
  });
}
var Yf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xf() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return !n.some(function (i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Uw(t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.defaultModifiers,
    i = r === void 0 ? [] : r,
    a = n.defaultOptions,
    s = a === void 0 ? Yf : a;
  return function (c, f, p) {
    p === void 0 && (p = s);
    var h = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Yf, s),
        modifiersData: {},
        elements: { reference: c, popper: f },
        attributes: {},
        styles: {},
      },
      v = [],
      w = !1,
      x = {
        state: h,
        setOptions: function (A) {
          var P = typeof A == "function" ? A(h.options) : A;
          S(),
            (h.options = Object.assign({}, s, h.options, P)),
            (h.scrollParents = {
              reference: vr(c)
                ? Po(c)
                : c.contextElement
                ? Po(c.contextElement)
                : [],
              popper: Po(f),
            });
          var F = kw(Bw([].concat(i, h.options.modifiers)));
          return (
            (h.orderedModifiers = F.filter(function (R) {
              return R.enabled;
            })),
            y(),
            x.update()
          );
        },
        forceUpdate: function () {
          if (!w) {
            var A = h.elements,
              P = A.reference,
              F = A.popper;
            if (!!Xf(P, F)) {
              (h.rects = {
                reference: Mw(P, Fo(F), h.options.strategy === "fixed"),
                popper: Fu(F),
              }),
                (h.reset = !1),
                (h.placement = h.options.placement),
                h.orderedModifiers.forEach(function (k) {
                  return (h.modifiersData[k.name] = Object.assign({}, k.data));
                });
              for (var R = 0; R < h.orderedModifiers.length; R++) {
                if (h.reset === !0) {
                  (h.reset = !1), (R = -1);
                  continue;
                }
                var I = h.orderedModifiers[R],
                  $ = I.fn,
                  L = I.options,
                  V = L === void 0 ? {} : L,
                  U = I.name;
                typeof $ == "function" &&
                  (h = $({ state: h, options: V, name: U, instance: x }) || h);
              }
            }
          }
        },
        update: Nw(function () {
          return new Promise(function (_) {
            x.forceUpdate(), _(h);
          });
        }),
        destroy: function () {
          S(), (w = !0);
        },
      };
    if (!Xf(c, f)) return x;
    x.setOptions(p).then(function (_) {
      !w && p.onFirstUpdate && p.onFirstUpdate(_);
    });
    function y() {
      h.orderedModifiers.forEach(function (_) {
        var A = _.name,
          P = _.options,
          F = P === void 0 ? {} : P,
          R = _.effect;
        if (typeof R == "function") {
          var I = R({ state: h, name: A, instance: x, options: F }),
            $ = function () {};
          v.push(I || $);
        }
      });
    }
    function S() {
      v.forEach(function (_) {
        return _();
      }),
        (v = []);
    }
    return x;
  };
}
var Vw = [cw, Aw, uw, XE, Ow, Ew, Tw, ow, Sw],
  Hw = Uw({ defaultModifiers: Vw });
function jw(t) {
  return typeof t == "function" ? t() : t;
}
const Ww = E.exports.forwardRef(function (n, r) {
    const { children: i, container: a, disablePortal: s = !1 } = n,
      [l, c] = E.exports.useState(null),
      f = jr(E.exports.isValidElement(i) ? i.ref : null, r);
    if (
      (Ki(() => {
        s || c(jw(a) || document.body);
      }, [a, s]),
      Ki(() => {
        if (l && !s)
          return (
            Df(r, l),
            () => {
              Df(r, null);
            }
          );
      }, [r, l, s]),
      s)
    ) {
      if (E.exports.isValidElement(i)) {
        const p = { ref: f };
        return E.exports.cloneElement(i, p);
      }
      return Nt.exports.jsx(E.exports.Fragment, { children: i });
    }
    return Nt.exports.jsx(E.exports.Fragment, {
      children: l && Zd.exports.createPortal(i, l),
    });
  }),
  zw = Ww;
function Gw(t) {
  return Qd("MuiPopper", t);
}
ep("MuiPopper", ["root"]);
const Kw = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  qw = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function Jw(t, n) {
  if (n === "ltr") return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function bu(t) {
  return typeof t == "function" ? t() : t;
}
function Yw(t) {
  return t.nodeType !== void 0;
}
const Xw = () => tp({ root: ["root"] }, TE(Gw)),
  Zw = {},
  Qw = E.exports.forwardRef(function (n, r) {
    var i;
    const {
        anchorEl: a,
        children: s,
        direction: l,
        disablePortal: c,
        modifiers: f,
        open: p,
        placement: h,
        popperOptions: v,
        popperRef: w,
        slotProps: x = {},
        slots: y = {},
        TransitionProps: S,
      } = n,
      _ = Kn(n, Kw),
      A = E.exports.useRef(null),
      P = jr(A, r),
      F = E.exports.useRef(null),
      R = jr(F, w),
      I = E.exports.useRef(R);
    Ki(() => {
      I.current = R;
    }, [R]),
      E.exports.useImperativeHandle(w, () => F.current, []);
    const $ = Jw(h, l),
      [L, V] = E.exports.useState($),
      [U, k] = E.exports.useState(bu(a));
    E.exports.useEffect(() => {
      F.current && F.current.forceUpdate();
    }),
      E.exports.useEffect(() => {
        a && k(bu(a));
      }, [a]),
      Ki(() => {
        if (!U || !p) return;
        const X = (ve) => {
          V(ve.placement);
        };
        let ae = [
          { name: "preventOverflow", options: { altBoundary: c } },
          { name: "flip", options: { altBoundary: c } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: ve }) => {
              X(ve);
            },
          },
        ];
        f != null && (ae = ae.concat(f)),
          v && v.modifiers != null && (ae = ae.concat(v.modifiers));
        const re = Hw(U, A.current, K({ placement: $ }, v, { modifiers: ae }));
        return (
          I.current(re),
          () => {
            re.destroy(), I.current(null);
          }
        );
      }, [U, c, f, p, v, $]);
    const q = { placement: L };
    S !== null && (q.TransitionProps = S);
    const Y = Xw(),
      G = (i = y.root) != null ? i : "div",
      Q = $E({
        elementType: G,
        externalSlotProps: x.root,
        externalForwardedProps: _,
        additionalProps: { role: "tooltip", ref: P },
        ownerState: n,
        className: Y.root,
      });
    return Nt.exports.jsx(
      G,
      K({}, Q, { children: typeof s == "function" ? s(q) : s })
    );
  }),
  eS = E.exports.forwardRef(function (n, r) {
    const {
        anchorEl: i,
        children: a,
        container: s,
        direction: l = "ltr",
        disablePortal: c = !1,
        keepMounted: f = !1,
        modifiers: p,
        open: h,
        placement: v = "bottom",
        popperOptions: w = Zw,
        popperRef: x,
        style: y,
        transition: S = !1,
        slotProps: _ = {},
        slots: A = {},
      } = n,
      P = Kn(n, qw),
      [F, R] = E.exports.useState(!0),
      I = () => {
        R(!1);
      },
      $ = () => {
        R(!0);
      };
    if (!f && !h && (!S || F)) return null;
    let L;
    if (s) L = s;
    else if (i) {
      const k = bu(i);
      L = k && Yw(k) ? Nf(k).body : Nf(null).body;
    }
    const V = !h && f && (!S || F) ? "none" : void 0,
      U = S ? { in: h, onEnter: I, onExited: $ } : void 0;
    return Nt.exports.jsx(zw, {
      disablePortal: c,
      container: L,
      children: Nt.exports.jsx(
        Qw,
        K(
          {
            anchorEl: i,
            direction: l,
            disablePortal: c,
            modifiers: p,
            ref: r,
            open: S ? !F : h,
            placement: v,
            popperOptions: w,
            popperRef: x,
            slotProps: _,
            slots: A,
          },
          P,
          {
            style: K({ position: "fixed", top: 0, left: 0, display: V }, y),
            TransitionProps: U,
            children: a,
          }
        )
      ),
    });
  }),
  tS = eS;
function Lp() {
  const t = ry(oy);
  return t[iy] || t;
}
const Zf = { disabled: !1 };
var nS = function (n) {
    return n.scrollTop;
  },
  Co = "unmounted",
  dr = "exited",
  pr = "entering",
  Vr = "entered",
  xu = "exiting",
  Tn = (function (t) {
    ay(n, t);
    function n(i, a) {
      var s;
      s = t.call(this, i, a) || this;
      var l = a,
        c = l && !l.isMounting ? i.enter : i.appear,
        f;
      return (
        (s.appearStatus = null),
        i.in
          ? c
            ? ((f = dr), (s.appearStatus = pr))
            : (f = Vr)
          : i.unmountOnExit || i.mountOnEnter
          ? (f = Co)
          : (f = dr),
        (s.state = { status: f }),
        (s.nextCallback = null),
        s
      );
    }
    n.getDerivedStateFromProps = function (a, s) {
      var l = a.in;
      return l && s.status === Co ? { status: dr } : null;
    };
    var r = n.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (a) {
        var s = null;
        if (a !== this.props) {
          var l = this.state.status;
          this.props.in
            ? l !== pr && l !== Vr && (s = pr)
            : (l === pr || l === Vr) && (s = xu);
        }
        this.updateStatus(!1, s);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var a = this.props.timeout,
          s,
          l,
          c;
        return (
          (s = l = c = a),
          a != null &&
            typeof a != "number" &&
            ((s = a.exit),
            (l = a.enter),
            (c = a.appear !== void 0 ? a.appear : l)),
          { exit: s, enter: l, appear: c }
        );
      }),
      (r.updateStatus = function (a, s) {
        if ((a === void 0 && (a = !1), s !== null))
          if ((this.cancelNextCallback(), s === pr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var l = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ii.findDOMNode(this);
              l && nS(l);
            }
            this.performEnter(a);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === dr &&
            this.setState({ status: Co });
      }),
      (r.performEnter = function (a) {
        var s = this,
          l = this.props.enter,
          c = this.context ? this.context.isMounting : a,
          f = this.props.nodeRef ? [c] : [Ii.findDOMNode(this), c],
          p = f[0],
          h = f[1],
          v = this.getTimeouts(),
          w = c ? v.appear : v.enter;
        if ((!a && !l) || Zf.disabled) {
          this.safeSetState({ status: Vr }, function () {
            s.props.onEntered(p);
          });
          return;
        }
        this.props.onEnter(p, h),
          this.safeSetState({ status: pr }, function () {
            s.props.onEntering(p, h),
              s.onTransitionEnd(w, function () {
                s.safeSetState({ status: Vr }, function () {
                  s.props.onEntered(p, h);
                });
              });
          });
      }),
      (r.performExit = function () {
        var a = this,
          s = this.props.exit,
          l = this.getTimeouts(),
          c = this.props.nodeRef ? void 0 : Ii.findDOMNode(this);
        if (!s || Zf.disabled) {
          this.safeSetState({ status: dr }, function () {
            a.props.onExited(c);
          });
          return;
        }
        this.props.onExit(c),
          this.safeSetState({ status: xu }, function () {
            a.props.onExiting(c),
              a.onTransitionEnd(l.exit, function () {
                a.safeSetState({ status: dr }, function () {
                  a.props.onExited(c);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (a, s) {
        (s = this.setNextCallback(s)), this.setState(a, s);
      }),
      (r.setNextCallback = function (a) {
        var s = this,
          l = !0;
        return (
          (this.nextCallback = function (c) {
            l && ((l = !1), (s.nextCallback = null), a(c));
          }),
          (this.nextCallback.cancel = function () {
            l = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (a, s) {
        this.setNextCallback(s);
        var l = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ii.findDOMNode(this),
          c = a == null && !this.props.addEndListener;
        if (!l || c) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var f = this.props.nodeRef
              ? [this.nextCallback]
              : [l, this.nextCallback],
            p = f[0],
            h = f[1];
          this.props.addEndListener(p, h);
        }
        a != null && setTimeout(this.nextCallback, a);
      }),
      (r.render = function () {
        var a = this.state.status;
        if (a === Co) return null;
        var s = this.props,
          l = s.children;
        s.in,
          s.mountOnEnter,
          s.unmountOnExit,
          s.appear,
          s.enter,
          s.exit,
          s.timeout,
          s.addEndListener,
          s.onEnter,
          s.onEntering,
          s.onEntered,
          s.onExit,
          s.onExiting,
          s.onExited,
          s.nodeRef;
        var c = Kn(s, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ye.createElement(
          np.Provider,
          { value: null },
          typeof l == "function"
            ? l(a, c)
            : ye.cloneElement(ye.Children.only(l), c)
        );
      }),
      n
    );
  })(ye.Component);
Tn.contextType = np;
Tn.propTypes = {};
function kr() {}
Tn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: kr,
  onEntering: kr,
  onEntered: kr,
  onExit: kr,
  onExiting: kr,
  onExited: kr,
};
Tn.UNMOUNTED = Co;
Tn.EXITED = dr;
Tn.ENTERING = pr;
Tn.ENTERED = Vr;
Tn.EXITING = xu;
const rS = Tn,
  oS = (t) => t.scrollTop;
function Qf(t, n) {
  var r, i;
  const { timeout: a, easing: s, style: l = {} } = t;
  return {
    duration:
      (r = l.transitionDuration) != null
        ? r
        : typeof a == "number"
        ? a
        : a[n.mode] || 0,
    easing:
      (i = l.transitionTimingFunction) != null
        ? i
        : typeof s == "object"
        ? s[n.mode]
        : s,
    delay: l.transitionDelay,
  };
}
const iS = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function yu(t) {
  return `scale(${t}, ${t ** 2})`;
}
const aS = {
    entering: { opacity: 1, transform: yu(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Us =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Mp = E.exports.forwardRef(function (n, r) {
    const {
        addEndListener: i,
        appear: a = !0,
        children: s,
        easing: l,
        in: c,
        onEnter: f,
        onEntered: p,
        onEntering: h,
        onExit: v,
        onExited: w,
        onExiting: x,
        style: y,
        timeout: S = "auto",
        TransitionComponent: _ = rS,
      } = n,
      A = Kn(n, iS),
      P = E.exports.useRef(),
      F = E.exports.useRef(),
      R = Lp(),
      I = E.exports.useRef(null),
      $ = jr(I, s.ref, r),
      L = (X) => (ae) => {
        if (X) {
          const re = I.current;
          ae === void 0 ? X(re) : X(re, ae);
        }
      },
      V = L(h),
      U = L((X, ae) => {
        oS(X);
        const {
          duration: re,
          delay: ve,
          easing: _e,
        } = Qf({ style: y, timeout: S, easing: l }, { mode: "enter" });
        let Ie;
        S === "auto"
          ? ((Ie = R.transitions.getAutoHeightDuration(X.clientHeight)),
            (F.current = Ie))
          : (Ie = re),
          (X.style.transition = [
            R.transitions.create("opacity", { duration: Ie, delay: ve }),
            R.transitions.create("transform", {
              duration: Us ? Ie : Ie * 0.666,
              delay: ve,
              easing: _e,
            }),
          ].join(",")),
          f && f(X, ae);
      }),
      k = L(p),
      q = L(x),
      Y = L((X) => {
        const {
          duration: ae,
          delay: re,
          easing: ve,
        } = Qf({ style: y, timeout: S, easing: l }, { mode: "exit" });
        let _e;
        S === "auto"
          ? ((_e = R.transitions.getAutoHeightDuration(X.clientHeight)),
            (F.current = _e))
          : (_e = ae),
          (X.style.transition = [
            R.transitions.create("opacity", { duration: _e, delay: re }),
            R.transitions.create("transform", {
              duration: Us ? _e : _e * 0.666,
              delay: Us ? re : re || _e * 0.333,
              easing: ve,
            }),
          ].join(",")),
          (X.style.opacity = 0),
          (X.style.transform = yu(0.75)),
          v && v(X);
      }),
      G = L(w),
      Q = (X) => {
        S === "auto" && (P.current = setTimeout(X, F.current || 0)),
          i && i(I.current, X);
      };
    return (
      E.exports.useEffect(
        () => () => {
          clearTimeout(P.current);
        },
        []
      ),
      Nt.exports.jsx(
        _,
        K(
          {
            appear: a,
            in: c,
            nodeRef: I,
            onEnter: U,
            onEntered: k,
            onEntering: V,
            onExit: Y,
            onExited: G,
            onExiting: q,
            addEndListener: Q,
            timeout: S === "auto" ? null : S,
          },
          A,
          {
            children: (X, ae) =>
              E.exports.cloneElement(
                s,
                K(
                  {
                    style: K(
                      {
                        opacity: 0,
                        transform: yu(0.75),
                        visibility: X === "exited" && !c ? "hidden" : void 0,
                      },
                      aS[X],
                      y,
                      s.props.style
                    ),
                    ref: $,
                  },
                  ae
                )
              ),
          }
        )
      )
    );
  });
Mp.muiSupportAuto = !0;
const ed = Mp,
  sS = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  uS = oa(tS, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (t, n) => n.root,
  })({}),
  lS = E.exports.forwardRef(function (n, r) {
    var i;
    const a = sy(),
      s = rp({ props: n, name: "MuiPopper" }),
      {
        anchorEl: l,
        component: c,
        components: f,
        componentsProps: p,
        container: h,
        disablePortal: v,
        keepMounted: w,
        modifiers: x,
        open: y,
        placement: S,
        popperOptions: _,
        popperRef: A,
        transition: P,
        slots: F,
        slotProps: R,
      } = s,
      I = Kn(s, sS),
      $ =
        (i = F == null ? void 0 : F.root) != null
          ? i
          : f == null
          ? void 0
          : f.Root,
      L = K(
        {
          anchorEl: l,
          container: h,
          disablePortal: v,
          keepMounted: w,
          modifiers: x,
          open: y,
          placement: S,
          popperOptions: _,
          popperRef: A,
          transition: P,
        },
        I
      );
    return Nt.exports.jsx(
      uS,
      K(
        {
          as: c,
          direction: a == null ? void 0 : a.direction,
          slots: { root: $ },
          slotProps: R != null ? R : p,
        },
        L,
        { ref: r }
      )
    );
  }),
  $p = lS;
function cS(t) {
  return Qd("MuiTooltip", t);
}
const fS = ep("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  Wn = fS,
  dS = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function pS(t) {
  return Math.round(t * 1e5) / 1e5;
}
const hS = (t) => {
    const {
        classes: n,
        disableInteractive: r,
        arrow: i,
        touch: a,
        placement: s,
      } = t,
      l = {
        popper: ["popper", !r && "popperInteractive", i && "popperArrow"],
        tooltip: [
          "tooltip",
          i && "tooltipArrow",
          a && "touch",
          `tooltipPlacement${op(s.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return tp(l, cS, n);
  },
  gS = oa($p, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (t, n) => {
      const { ownerState: r } = t;
      return [
        n.popper,
        !r.disableInteractive && n.popperInteractive,
        r.arrow && n.popperArrow,
        !r.open && n.popperClose,
      ];
    },
  })(({ theme: t, ownerState: n, open: r }) =>
    K(
      { zIndex: (t.vars || t).zIndex.tooltip, pointerEvents: "none" },
      !n.disableInteractive && { pointerEvents: "auto" },
      !r && { pointerEvents: "none" },
      n.arrow && {
        [`&[data-popper-placement*="bottom"] .${Wn.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${Wn.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${Wn.arrow}`]: K(
          {},
          n.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          }
        ),
        [`&[data-popper-placement*="left"] .${Wn.arrow}`]: K(
          {},
          n.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          }
        ),
      }
    )
  ),
  vS = oa("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (t, n) => {
      const { ownerState: r } = t;
      return [
        n.tooltip,
        r.touch && n.touch,
        r.arrow && n.tooltipArrow,
        n[`tooltipPlacement${op(r.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: t, ownerState: n }) =>
    K(
      {
        backgroundColor: t.vars
          ? t.vars.palette.Tooltip.bg
          : ip(t.palette.grey[700], 0.92),
        borderRadius: (t.vars || t).shape.borderRadius,
        color: (t.vars || t).palette.common.white,
        fontFamily: t.typography.fontFamily,
        padding: "4px 8px",
        fontSize: t.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: t.typography.fontWeightMedium,
      },
      n.arrow && { position: "relative", margin: 0 },
      n.touch && {
        padding: "8px 16px",
        fontSize: t.typography.pxToRem(14),
        lineHeight: `${pS(16 / 14)}em`,
        fontWeight: t.typography.fontWeightRegular,
      },
      {
        [`.${Wn.popper}[data-popper-placement*="left"] &`]: K(
          { transformOrigin: "right center" },
          n.isRtl
            ? K({ marginLeft: "14px" }, n.touch && { marginLeft: "24px" })
            : K({ marginRight: "14px" }, n.touch && { marginRight: "24px" })
        ),
        [`.${Wn.popper}[data-popper-placement*="right"] &`]: K(
          { transformOrigin: "left center" },
          n.isRtl
            ? K({ marginRight: "14px" }, n.touch && { marginRight: "24px" })
            : K({ marginLeft: "14px" }, n.touch && { marginLeft: "24px" })
        ),
        [`.${Wn.popper}[data-popper-placement*="top"] &`]: K(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          n.touch && { marginBottom: "24px" }
        ),
        [`.${Wn.popper}[data-popper-placement*="bottom"] &`]: K(
          { transformOrigin: "center top", marginTop: "14px" },
          n.touch && { marginTop: "24px" }
        ),
      }
    )
  ),
  mS = oa("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (t, n) => n.arrow,
  })(({ theme: t }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: t.vars ? t.vars.palette.Tooltip.bg : ip(t.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let Mi = !1,
  Vs = null,
  xo = { x: 0, y: 0 };
function $i(t, n) {
  return (r) => {
    n && n(r), t(r);
  };
}
const bS = E.exports.forwardRef(function (n, r) {
    var i, a, s, l, c, f, p, h, v, w, x, y, S, _, A, P, F, R, I;
    const $ = rp({ props: n, name: "MuiTooltip" }),
      {
        arrow: L = !1,
        children: V,
        components: U = {},
        componentsProps: k = {},
        describeChild: q = !1,
        disableFocusListener: Y = !1,
        disableHoverListener: G = !1,
        disableInteractive: Q = !1,
        disableTouchListener: X = !1,
        enterDelay: ae = 100,
        enterNextDelay: re = 0,
        enterTouchDelay: ve = 700,
        followCursor: _e = !1,
        id: Ie,
        leaveDelay: $e = 0,
        leaveTouchDelay: Re = 1500,
        onClose: ke,
        onOpen: Ne,
        open: Ae,
        placement: Le = "bottom",
        PopperComponent: Be,
        PopperProps: Te = {},
        slotProps: He = {},
        slots: ct = {},
        title: qe,
        TransitionComponent: et = ed,
        TransitionProps: mt,
      } = $,
      Ye = Kn($, dS),
      N = E.exports.isValidElement(V)
        ? V
        : Nt.exports.jsx("span", { children: V }),
      J = Lp(),
      z = J.direction === "rtl",
      [pe, xe] = E.exports.useState(),
      [ie, fe] = E.exports.useState(null),
      Fe = E.exports.useRef(!1),
      tn = Q || _e,
      ln = E.exports.useRef(),
      Dt = E.exports.useRef(),
      Ut = E.exports.useRef(),
      nn = E.exports.useRef(),
      [rn, yr] = uy({
        controlled: Ae,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let Rt = rn;
    const Xn = PE(Ie),
      mn = E.exports.useRef(),
      In = E.exports.useCallback(() => {
        mn.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = mn.current),
          (mn.current = void 0)),
          clearTimeout(nn.current);
      }, []);
    E.exports.useEffect(
      () => () => {
        clearTimeout(ln.current),
          clearTimeout(Dt.current),
          clearTimeout(Ut.current),
          In();
      },
      [In]
    );
    const Er = (Ce) => {
        clearTimeout(Vs), (Mi = !0), yr(!0), Ne && !Rt && Ne(Ce);
      },
      Fn = ly((Ce) => {
        clearTimeout(Vs),
          (Vs = setTimeout(() => {
            Mi = !1;
          }, 800 + $e)),
          yr(!1),
          ke && Rt && ke(Ce),
          clearTimeout(ln.current),
          (ln.current = setTimeout(() => {
            Fe.current = !1;
          }, J.transitions.duration.shortest));
      }),
      Zn = (Ce) => {
        (Fe.current && Ce.type !== "touchstart") ||
          (pe && pe.removeAttribute("title"),
          clearTimeout(Dt.current),
          clearTimeout(Ut.current),
          ae || (Mi && re)
            ? (Dt.current = setTimeout(
                () => {
                  Er(Ce);
                },
                Mi ? re : ae
              ))
            : Er(Ce));
      },
      wr = (Ce) => {
        clearTimeout(Dt.current),
          clearTimeout(Ut.current),
          (Ut.current = setTimeout(() => {
            Fn(Ce);
          }, $e));
      },
      { isFocusVisibleRef: $o, onBlur: ba, onFocus: xa, ref: ko } = cy(),
      [, Xr] = E.exports.useState(!1),
      No = (Ce) => {
        ba(Ce), $o.current === !1 && (Xr(!1), wr(Ce));
      },
      Bo = (Ce) => {
        pe || xe(Ce.currentTarget),
          xa(Ce),
          $o.current === !0 && (Xr(!0), Zn(Ce));
      },
      Uo = (Ce) => {
        Fe.current = !0;
        const it = N.props;
        it.onTouchStart && it.onTouchStart(Ce);
      },
      Vo = Zn,
      Zr = wr,
      ya = (Ce) => {
        Uo(Ce),
          clearTimeout(Ut.current),
          clearTimeout(ln.current),
          In(),
          (mn.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          (nn.current = setTimeout(() => {
            (document.body.style.WebkitUserSelect = mn.current), Zn(Ce);
          }, ve));
      },
      Ea = (Ce) => {
        N.props.onTouchEnd && N.props.onTouchEnd(Ce),
          In(),
          clearTimeout(Ut.current),
          (Ut.current = setTimeout(() => {
            Fn(Ce);
          }, Re));
      };
    E.exports.useEffect(() => {
      if (!Rt) return;
      function Ce(it) {
        (it.key === "Escape" || it.key === "Esc") && Fn(it);
      }
      return (
        document.addEventListener("keydown", Ce),
        () => {
          document.removeEventListener("keydown", Ce);
        }
      );
    }, [Fn, Rt]);
    const wa = jr(N.ref, ko, xe, r);
    !qe && qe !== 0 && (Rt = !1);
    const Qn = E.exports.useRef(),
      Sa = (Ce) => {
        const it = N.props;
        it.onMouseMove && it.onMouseMove(Ce),
          (xo = { x: Ce.clientX, y: Ce.clientY }),
          Qn.current && Qn.current.update();
      },
      bn = {},
      Qr = typeof qe == "string";
    q
      ? ((bn.title = !Rt && Qr && !G ? qe : null),
        (bn["aria-describedby"] = Rt ? Xn : null))
      : ((bn["aria-label"] = Qr ? qe : null),
        (bn["aria-labelledby"] = Rt && !Qr ? Xn : null));
    const Tt = K(
        {},
        bn,
        Ye,
        N.props,
        {
          className: Fi(Ye.className, N.props.className),
          onTouchStart: Uo,
          ref: wa,
        },
        _e ? { onMouseMove: Sa } : {}
      ),
      er = {};
    X || ((Tt.onTouchStart = ya), (Tt.onTouchEnd = Ea)),
      G ||
        ((Tt.onMouseOver = $i(Vo, Tt.onMouseOver)),
        (Tt.onMouseLeave = $i(Zr, Tt.onMouseLeave)),
        tn || ((er.onMouseOver = Vo), (er.onMouseLeave = Zr))),
      Y ||
        ((Tt.onFocus = $i(Bo, Tt.onFocus)),
        (Tt.onBlur = $i(No, Tt.onBlur)),
        tn || ((er.onFocus = Bo), (er.onBlur = No)));
    const Ca = E.exports.useMemo(() => {
        var Ce;
        let it = [
          {
            name: "arrow",
            enabled: Boolean(ie),
            options: { element: ie, padding: 4 },
          },
        ];
        return (
          (Ce = Te.popperOptions) != null &&
            Ce.modifiers &&
            (it = it.concat(Te.popperOptions.modifiers)),
          K({}, Te.popperOptions, { modifiers: it })
        );
      }, [ie, Te]),
      tr = K({}, $, {
        isRtl: z,
        arrow: L,
        disableInteractive: tn,
        placement: Le,
        PopperComponentProp: Be,
        touch: Fe.current,
      }),
      eo = hS(tr),
      Ho = (i = (a = ct.popper) != null ? a : U.Popper) != null ? i : gS,
      jo =
        (s =
          (l = (c = ct.transition) != null ? c : U.Transition) != null
            ? l
            : et) != null
          ? s
          : ed,
      to = (f = (p = ct.tooltip) != null ? p : U.Tooltip) != null ? f : vS,
      Wo = (h = (v = ct.arrow) != null ? v : U.Arrow) != null ? h : mS,
      _a = So(
        Ho,
        K({}, Te, (w = He.popper) != null ? w : k.popper, {
          className: Fi(
            eo.popper,
            Te == null ? void 0 : Te.className,
            (x = (y = He.popper) != null ? y : k.popper) == null
              ? void 0
              : x.className
          ),
        }),
        tr
      ),
      Oa = So(
        jo,
        K({}, mt, (S = He.transition) != null ? S : k.transition),
        tr
      ),
      Pa = So(
        to,
        K({}, (_ = He.tooltip) != null ? _ : k.tooltip, {
          className: Fi(
            eo.tooltip,
            (A = (P = He.tooltip) != null ? P : k.tooltip) == null
              ? void 0
              : A.className
          ),
        }),
        tr
      ),
      Aa = So(
        Wo,
        K({}, (F = He.arrow) != null ? F : k.arrow, {
          className: Fi(
            eo.arrow,
            (R = (I = He.arrow) != null ? I : k.arrow) == null
              ? void 0
              : R.className
          ),
        }),
        tr
      );
    return Nt.exports.jsxs(E.exports.Fragment, {
      children: [
        E.exports.cloneElement(N, Tt),
        Nt.exports.jsx(
          Ho,
          K(
            {
              as: Be != null ? Be : $p,
              placement: Le,
              anchorEl: _e
                ? {
                    getBoundingClientRect: () => ({
                      top: xo.y,
                      left: xo.x,
                      right: xo.x,
                      bottom: xo.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : pe,
              popperRef: Qn,
              open: pe ? Rt : !1,
              id: Xn,
              transition: !0,
            },
            er,
            _a,
            {
              popperOptions: Ca,
              children: ({ TransitionProps: Ce }) =>
                Nt.exports.jsx(
                  jo,
                  K({ timeout: J.transitions.duration.shorter }, Ce, Oa, {
                    children: Nt.exports.jsxs(
                      to,
                      K({}, Pa, {
                        children: [
                          qe,
                          L ? Nt.exports.jsx(Wo, K({}, Aa, { ref: fe })) : null,
                        ],
                      })
                    ),
                  })
                ),
            }
          )
        ),
      ],
    });
  }),
  iD = bS;
function aD(t) {
  return ra({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: {
          d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        },
      },
    ],
  })(t);
}
function sD(t) {
  return ra({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      { tag: "path", attr: { d: "M12 2l-5.5 9h11z" } },
      { tag: "circle", attr: { cx: "17.5", cy: "17.5", r: "4.5" } },
      { tag: "path", attr: { d: "M3 13.5h8v8H3z" } },
    ],
  })(t);
}
const uD = "/assets/logo-gradient-fill.png",
  lD = "/assets/logo-gradient-transparent.png";
function xS(t, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (a) {
    if ((t == null || t(a), r === !1 || !a.defaultPrevented))
      return n == null ? void 0 : n(a);
  };
}
function yS(t, n) {
  typeof t == "function" ? t(n) : t != null && (t.current = n);
}
function kp(...t) {
  return (n) => t.forEach((r) => yS(r, n));
}
function ES(...t) {
  return E.exports.useCallback(kp(...t), t);
}
function wS(t, n = []) {
  let r = [];
  function i(s, l) {
    const c = E.exports.createContext(l),
      f = r.length;
    r = [...r, l];
    function p(v) {
      const { scope: w, children: x, ...y } = v,
        S = (w == null ? void 0 : w[t][f]) || c,
        _ = E.exports.useMemo(() => y, Object.values(y));
      return E.exports.createElement(S.Provider, { value: _ }, x);
    }
    function h(v, w) {
      const x = (w == null ? void 0 : w[t][f]) || c,
        y = E.exports.useContext(x);
      if (y) return y;
      if (l !== void 0) return l;
      throw new Error(`\`${v}\` must be used within \`${s}\``);
    }
    return (p.displayName = s + "Provider"), [p, h];
  }
  const a = () => {
    const s = r.map((l) => E.exports.createContext(l));
    return function (c) {
      const f = (c == null ? void 0 : c[t]) || s;
      return E.exports.useMemo(
        () => ({ [`__scope${t}`]: { ...c, [t]: f } }),
        [c, f]
      );
    };
  };
  return (a.scopeName = t), [i, SS(a, ...n)];
}
function SS(...t) {
  const n = t[0];
  if (t.length === 1) return n;
  const r = () => {
    const i = t.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (s) {
      const l = i.reduce((c, { useScope: f, scopeName: p }) => {
        const v = f(s)[`__scope${p}`];
        return { ...c, ...v };
      }, {});
      return E.exports.useMemo(() => ({ [`__scope${n.scopeName}`]: l }), [l]);
    };
  };
  return (r.scopeName = n.scopeName), r;
}
function Np(t) {
  const n = E.exports.useRef(t);
  return (
    E.exports.useEffect(() => {
      n.current = t;
    }),
    E.exports.useMemo(
      () =>
        (...r) => {
          var i;
          return (i = n.current) === null || i === void 0
            ? void 0
            : i.call(n, ...r);
        },
      []
    )
  );
}
function CS({ prop: t, defaultProp: n, onChange: r = () => {} }) {
  const [i, a] = _S({ defaultProp: n, onChange: r }),
    s = t !== void 0,
    l = s ? t : i,
    c = Np(r),
    f = E.exports.useCallback(
      (p) => {
        if (s) {
          const v = typeof p == "function" ? p(t) : p;
          v !== t && c(v);
        } else a(p);
      },
      [s, t, a, c]
    );
  return [l, f];
}
function _S({ defaultProp: t, onChange: n }) {
  const r = E.exports.useState(t),
    [i] = r,
    a = E.exports.useRef(i),
    s = Np(n);
  return (
    E.exports.useEffect(() => {
      a.current !== i && (s(i), (a.current = i));
    }, [i, a, s]),
    r
  );
}
function OS(t) {
  const n = E.exports.useRef({ value: t, previous: t });
  return E.exports.useMemo(
    () => (
      n.current.value !== t &&
        ((n.current.previous = n.current.value), (n.current.value = t)),
      n.current.previous
    ),
    [t]
  );
}
const PS = Boolean(globalThis == null ? void 0 : globalThis.document)
  ? E.exports.useLayoutEffect
  : () => {};
function AS(t) {
  const [n, r] = E.exports.useState(void 0);
  return (
    PS(() => {
      if (t) {
        r({ width: t.offsetWidth, height: t.offsetHeight });
        const i = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const s = a[0];
          let l, c;
          if ("borderBoxSize" in s) {
            const f = s.borderBoxSize,
              p = Array.isArray(f) ? f[0] : f;
            (l = p.inlineSize), (c = p.blockSize);
          } else (l = t.offsetWidth), (c = t.offsetHeight);
          r({ width: l, height: c });
        });
        return i.observe(t, { box: "border-box" }), () => i.unobserve(t);
      } else r(void 0);
    }, [t]),
    n
  );
}
const Bp = E.exports.forwardRef((t, n) => {
  const { children: r, ...i } = t,
    a = E.exports.Children.toArray(r),
    s = a.find(RS);
  if (s) {
    const l = s.props.children,
      c = a.map((f) =>
        f === s
          ? E.exports.Children.count(l) > 1
            ? E.exports.Children.only(null)
            : E.exports.isValidElement(l)
            ? l.props.children
            : null
          : f
      );
    return E.exports.createElement(
      Eu,
      K({}, i, { ref: n }),
      E.exports.isValidElement(l) ? E.exports.cloneElement(l, void 0, c) : null
    );
  }
  return E.exports.createElement(Eu, K({}, i, { ref: n }), r);
});
Bp.displayName = "Slot";
const Eu = E.exports.forwardRef((t, n) => {
  const { children: r, ...i } = t;
  return E.exports.isValidElement(r)
    ? E.exports.cloneElement(r, {
        ...TS(i, r.props),
        ref: n ? kp(n, r.ref) : r.ref,
      })
    : E.exports.Children.count(r) > 1
    ? E.exports.Children.only(null)
    : null;
});
Eu.displayName = "SlotClone";
const DS = ({ children: t }) =>
  E.exports.createElement(E.exports.Fragment, null, t);
function RS(t) {
  return E.exports.isValidElement(t) && t.type === DS;
}
function TS(t, n) {
  const r = { ...n };
  for (const i in n) {
    const a = t[i],
      s = n[i];
    /^on[A-Z]/.test(i)
      ? a && s
        ? (r[i] = (...c) => {
            s(...c), a(...c);
          })
        : a && (r[i] = a)
      : i === "style"
      ? (r[i] = { ...a, ...s })
      : i === "className" && (r[i] = [a, s].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
const IS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Up = IS.reduce((t, n) => {
    const r = E.exports.forwardRef((i, a) => {
      const { asChild: s, ...l } = i,
        c = s ? Bp : n;
      return (
        E.exports.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        E.exports.createElement(c, K({}, l, { ref: a }))
      );
    });
    return (r.displayName = `Primitive.${n}`), { ...t, [n]: r };
  }, {}),
  Vp = "Switch",
  [FS, cD] = wS(Vp),
  [LS, MS] = FS(Vp),
  $S = E.exports.forwardRef((t, n) => {
    const {
        __scopeSwitch: r,
        name: i,
        checked: a,
        defaultChecked: s,
        required: l,
        disabled: c,
        value: f = "on",
        onCheckedChange: p,
        ...h
      } = t,
      [v, w] = E.exports.useState(null),
      x = ES(n, (P) => w(P)),
      y = E.exports.useRef(!1),
      S = v ? Boolean(v.closest("form")) : !0,
      [_ = !1, A] = CS({ prop: a, defaultProp: s, onChange: p });
    return E.exports.createElement(
      LS,
      { scope: r, checked: _, disabled: c },
      E.exports.createElement(
        Up.button,
        K(
          {
            type: "button",
            role: "switch",
            "aria-checked": _,
            "aria-required": l,
            "data-state": Hp(_),
            "data-disabled": c ? "" : void 0,
            disabled: c,
            value: f,
          },
          h,
          {
            ref: x,
            onClick: xS(t.onClick, (P) => {
              A((F) => !F),
                S &&
                  ((y.current = P.isPropagationStopped()),
                  y.current || P.stopPropagation());
            }),
          }
        )
      ),
      S &&
        E.exports.createElement(BS, {
          control: v,
          bubbles: !y.current,
          name: i,
          value: f,
          checked: _,
          required: l,
          disabled: c,
          style: { transform: "translateX(-100%)" },
        })
    );
  }),
  kS = "SwitchThumb",
  NS = E.exports.forwardRef((t, n) => {
    const { __scopeSwitch: r, ...i } = t,
      a = MS(kS, r);
    return E.exports.createElement(
      Up.span,
      K(
        {
          "data-state": Hp(a.checked),
          "data-disabled": a.disabled ? "" : void 0,
        },
        i,
        { ref: n }
      )
    );
  }),
  BS = (t) => {
    const { control: n, checked: r, bubbles: i = !0, ...a } = t,
      s = E.exports.useRef(null),
      l = OS(r),
      c = AS(n);
    return (
      E.exports.useEffect(() => {
        const f = s.current,
          p = window.HTMLInputElement.prototype,
          v = Object.getOwnPropertyDescriptor(p, "checked").set;
        if (l !== r && v) {
          const w = new Event("click", { bubbles: i });
          v.call(f, r), f.dispatchEvent(w);
        }
      }, [l, r, i]),
      E.exports.createElement(
        "input",
        K({ type: "checkbox", "aria-hidden": !0, defaultChecked: r }, a, {
          tabIndex: -1,
          ref: s,
          style: {
            ...t.style,
            ...c,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      )
    );
  };
function Hp(t) {
  return t ? "checked" : "unchecked";
}
const US = $S,
  VS = NS,
  HS = Jr(US)`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  width: 2.5rem;
  height: 1.5rem;
  background-color: #0000008e;
  border: 1.5px solid black;
  outline: none;
  border-radius: 1rem;
  -webkit-tap-highlight-color: black;
  &:focus {
    box-shadow: 0 0 0 10px -5px black;
  }
  &[data-state='checked'] {
    box-shadow: 0px 0px 20px var(--purple);
    background: var(--inverted-gradient, green);
    filter: brightness(0.8);
    border: none;
  }
`,
  jS = Jr(VS)`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 100%;
  box-shadow: inset -2px -2px 2px black;
  transition: transform 0.2s;
  transform: translateX(10%);
  will-change: transform;
  margin: 0 !important;
  &[data-state='checked'] {
    transform: translateX(90%);
  }
`;
function fD(t) {
  return ye.createElement(HS, { ...t }, ye.createElement(jS, null));
}
var Nu = {},
  ca = {},
  Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.defaultReactOptions = void 0;
Yn.defaultReactOptions = { useCamelCaseFlagKeys: !0, sendEventsOnFlagRead: !0 };
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.Consumer = en.Provider = void 0;
const WS = E.exports,
  jp = (0, WS.createContext)({ flags: {}, flagKeyMap: {}, ldClient: void 0 }),
  { Provider: zS, Consumer: GS } = jp;
en.Provider = zS;
en.Consumer = GS;
en.default = jp;
var fa = {};
function br(t) {
  function n(r, i) {
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
      (this.message = r),
      (this.code = i);
  }
  return (
    (n.prototype = new Error()),
    (n.prototype.name = t),
    (n.prototype.constructor = n),
    n
  );
}
const KS = br("LaunchDarklyUnexpectedResponseError"),
  qS = br("LaunchDarklyInvalidEnvironmentIdError"),
  JS = br("LaunchDarklyInvalidUserError"),
  YS = br("LaunchDarklyInvalidEventKeyError"),
  XS = br("LaunchDarklyInvalidArgumentError"),
  ZS = br("LaunchDarklyFlagFetchError");
for (
  var tt = {
      LDUnexpectedResponseError: KS,
      LDInvalidEnvironmentIdError: qS,
      LDInvalidUserError: JS,
      LDInvalidEventKeyError: YS,
      LDInvalidArgumentError: XS,
      LDInvalidDataError: br("LaunchDarklyInvalidDataError"),
      LDFlagFetchError: ZS,
      isHttpErrorRecoverable: function (t) {
        return !(t >= 400 && t < 500) || t === 400 || t === 408 || t === 429;
      },
    },
    QS = function (t) {
      var n = td(t),
        r = n[0],
        i = n[1];
      return (3 * (r + i)) / 4 - i;
    },
    eC = function (t) {
      var n,
        r,
        i = td(t),
        a = i[0],
        s = i[1],
        l = new nC(
          (function (p, h, v) {
            return (3 * (h + v)) / 4 - v;
          })(0, a, s)
        ),
        c = 0,
        f = s > 0 ? a - 4 : a;
      for (r = 0; r < f; r += 4)
        (n =
          (Jt[t.charCodeAt(r)] << 18) |
          (Jt[t.charCodeAt(r + 1)] << 12) |
          (Jt[t.charCodeAt(r + 2)] << 6) |
          Jt[t.charCodeAt(r + 3)]),
          (l[c++] = (n >> 16) & 255),
          (l[c++] = (n >> 8) & 255),
          (l[c++] = 255 & n);
      return (
        s === 2 &&
          ((n = (Jt[t.charCodeAt(r)] << 2) | (Jt[t.charCodeAt(r + 1)] >> 4)),
          (l[c++] = 255 & n)),
        s === 1 &&
          ((n =
            (Jt[t.charCodeAt(r)] << 10) |
            (Jt[t.charCodeAt(r + 1)] << 4) |
            (Jt[t.charCodeAt(r + 2)] >> 2)),
          (l[c++] = (n >> 8) & 255),
          (l[c++] = 255 & n)),
        l
      );
    },
    tC = function (t) {
      for (
        var n, r = t.length, i = r % 3, a = [], s = 16383, l = 0, c = r - i;
        l < c;
        l += s
      )
        a.push(oC(t, l, l + s > c ? c : l + s));
      return (
        i === 1
          ? ((n = t[r - 1]), a.push(hn[n >> 2] + hn[(n << 4) & 63] + "=="))
          : i === 2 &&
            ((n = (t[r - 2] << 8) + t[r - 1]),
            a.push(hn[n >> 10] + hn[(n >> 4) & 63] + hn[(n << 2) & 63] + "=")),
        a.join("")
      );
    },
    hn = [],
    Jt = [],
    nC = typeof Uint8Array < "u" ? Uint8Array : Array,
    Hs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Nr = 0,
    rC = Hs.length;
  Nr < rC;
  ++Nr
)
  (hn[Nr] = Hs[Nr]), (Jt[Hs.charCodeAt(Nr)] = Nr);
function td(t) {
  var n = t.length;
  if (n % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  return r === -1 && (r = n), [r, r === n ? 0 : 4 - (r % 4)];
}
function oC(t, n, r) {
  for (var i, a, s = [], l = n; l < r; l += 3)
    (i =
      ((t[l] << 16) & 16711680) + ((t[l + 1] << 8) & 65280) + (255 & t[l + 2])),
      s.push(
        hn[((a = i) >> 18) & 63] +
          hn[(a >> 12) & 63] +
          hn[(a >> 6) & 63] +
          hn[63 & a]
      );
  return s.join("");
}
(Jt["-".charCodeAt(0)] = 62), (Jt["_".charCodeAt(0)] = 63);
var iC = { byteLength: QS, toByteArray: eC, fromByteArray: tC },
  nd = Array.isArray,
  rd = Object.keys,
  aC = Object.prototype.hasOwnProperty,
  sC = function t(n, r) {
    if (n === r) return !0;
    if (n && r && typeof n == "object" && typeof r == "object") {
      var i,
        a,
        s,
        l = nd(n),
        c = nd(r);
      if (l && c) {
        if ((a = n.length) != r.length) return !1;
        for (i = a; i-- != 0; ) if (!t(n[i], r[i])) return !1;
        return !0;
      }
      if (l != c) return !1;
      var f = n instanceof Date,
        p = r instanceof Date;
      if (f != p) return !1;
      if (f && p) return n.getTime() == r.getTime();
      var h = n instanceof RegExp,
        v = r instanceof RegExp;
      if (h != v) return !1;
      if (h && v) return n.toString() == r.toString();
      var w = rd(n);
      if ((a = w.length) !== rd(r).length) return !1;
      for (i = a; i-- != 0; ) if (!aC.call(r, w[i])) return !1;
      for (i = a; i-- != 0; ) if (!t(n[(s = w[i])], r[s])) return !1;
      return !0;
    }
    return n != n && r != r;
  };
const uC = [
  "key",
  "ip",
  "country",
  "email",
  "firstName",
  "lastName",
  "avatar",
  "name",
];
function Wp(t) {
  const n = unescape(encodeURIComponent(t));
  return iC.fromByteArray(
    (function (r) {
      const i = [];
      for (let a = 0; a < r.length; a++) i.push(r.charCodeAt(a));
      return i;
    })(n)
  );
}
function od(t) {
  return Wp(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function js(t, n) {
  return Object.prototype.hasOwnProperty.call(t, n);
}
var Ws,
  ge = {
    appendUrlPath: function (t, n) {
      return (
        (t.endsWith("/") ? t.substring(0, t.length - 1) : t) +
        (n.startsWith("/") ? "" : "/") +
        n
      );
    },
    base64URLEncode: od,
    btoa: Wp,
    chunkEventsForUrl: function (t, n) {
      const r = n.slice(0),
        i = [];
      let a,
        s = t;
      for (; r.length > 0; ) {
        for (a = []; s > 0; ) {
          const l = r.shift();
          if (!l) break;
          (s -= od(JSON.stringify(l)).length),
            s < 0 && a.length > 0 ? r.unshift(l) : a.push(l);
        }
        (s = t), i.push(a);
      }
      return i;
    },
    clone: function (t) {
      return JSON.parse(JSON.stringify(t));
    },
    deepEquals: function (t, n) {
      return sC(t, n);
    },
    extend: function (...t) {
      return t.reduce((n, r) => ({ ...n, ...r }), {});
    },
    getLDUserAgentString: function (t) {
      const n = t.version || "?";
      return t.userAgent + "/" + n;
    },
    objectHasOwnProperty: js,
    onNextTick: function (t) {
      setTimeout(t, 0);
    },
    sanitizeContext: function (t) {
      if (!t) return t;
      let n;
      return (
        (t.kind !== null && t.kind !== void 0) ||
          uC.forEach((r) => {
            const i = t[r];
            i !== void 0 &&
              typeof i != "string" &&
              ((n = n || { ...t }), (n[r] = String(i)));
          }),
        n || t
      );
    },
    transformValuesToVersionedValues: function (t) {
      const n = {};
      for (const r in t) js(t, r) && (n[r] = { value: t[r], version: 0 });
      return n;
    },
    transformVersionedValuesToValues: function (t) {
      const n = {};
      for (const r in t) js(t, r) && (n[r] = t[r].value);
      return n;
    },
    wrapPromiseCallback: function (t, n) {
      const r = t.then(
        (i) => (
          n &&
            setTimeout(() => {
              n(null, i);
            }, 0),
          i
        ),
        (i) => {
          if (!n) return Promise.reject(i);
          setTimeout(() => {
            n(i, null);
          }, 0);
        }
      );
      return n ? void 0 : r;
    },
  },
  lC = new Uint8Array(16);
function id() {
  if (
    !Ws &&
    !(Ws =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto)))
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Ws(lC);
}
var cC =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Xi(t) {
  return typeof t == "string" && cC.test(t);
}
for (var ad, zs, lt = [], Gs = 0; Gs < 256; ++Gs)
  lt.push((Gs + 256).toString(16).substr(1));
function Gi(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = (
      lt[t[n + 0]] +
      lt[t[n + 1]] +
      lt[t[n + 2]] +
      lt[t[n + 3]] +
      "-" +
      lt[t[n + 4]] +
      lt[t[n + 5]] +
      "-" +
      lt[t[n + 6]] +
      lt[t[n + 7]] +
      "-" +
      lt[t[n + 8]] +
      lt[t[n + 9]] +
      "-" +
      lt[t[n + 10]] +
      lt[t[n + 11]] +
      lt[t[n + 12]] +
      lt[t[n + 13]] +
      lt[t[n + 14]] +
      lt[t[n + 15]]
    ).toLowerCase();
  if (!Xi(r)) throw TypeError("Stringified UUID is invalid");
  return r;
}
var Ks = 0,
  qs = 0;
function zp(t) {
  if (!Xi(t)) throw TypeError("Invalid UUID");
  var n,
    r = new Uint8Array(16);
  return (
    (r[0] = (n = parseInt(t.slice(0, 8), 16)) >>> 24),
    (r[1] = (n >>> 16) & 255),
    (r[2] = (n >>> 8) & 255),
    (r[3] = 255 & n),
    (r[4] = (n = parseInt(t.slice(9, 13), 16)) >>> 8),
    (r[5] = 255 & n),
    (r[6] = (n = parseInt(t.slice(14, 18), 16)) >>> 8),
    (r[7] = 255 & n),
    (r[8] = (n = parseInt(t.slice(19, 23), 16)) >>> 8),
    (r[9] = 255 & n),
    (r[10] = ((n = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
    (r[11] = (n / 4294967296) & 255),
    (r[12] = (n >>> 24) & 255),
    (r[13] = (n >>> 16) & 255),
    (r[14] = (n >>> 8) & 255),
    (r[15] = 255 & n),
    r
  );
}
function Gp(t, n, r) {
  function i(a, s, l, c) {
    if (
      (typeof a == "string" &&
        (a = (function (h) {
          h = unescape(encodeURIComponent(h));
          for (var v = [], w = 0; w < h.length; ++w) v.push(h.charCodeAt(w));
          return v;
        })(a)),
      typeof s == "string" && (s = zp(s)),
      s.length !== 16)
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    var f = new Uint8Array(16 + a.length);
    if (
      (f.set(s),
      f.set(a, s.length),
      ((f = r(f))[6] = (15 & f[6]) | n),
      (f[8] = (63 & f[8]) | 128),
      l)
    ) {
      c = c || 0;
      for (var p = 0; p < 16; ++p) l[c + p] = f[p];
      return l;
    }
    return Gi(f);
  }
  try {
    i.name = t;
  } catch {}
  return (
    (i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
    (i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
    i
  );
}
function sd(t) {
  return 14 + (((t + 64) >>> 9) << 4) + 1;
}
function zn(t, n) {
  var r = (65535 & t) + (65535 & n);
  return (((t >> 16) + (n >> 16) + (r >> 16)) << 16) | (65535 & r);
}
function da(t, n, r, i, a, s) {
  return zn(((l = zn(zn(n, t), zn(i, s))) << (c = a)) | (l >>> (32 - c)), r);
  var l, c;
}
function pt(t, n, r, i, a, s, l) {
  return da((n & r) | (~n & i), t, n, a, s, l);
}
function ht(t, n, r, i, a, s, l) {
  return da((n & i) | (r & ~i), t, n, a, s, l);
}
function gt(t, n, r, i, a, s, l) {
  return da(n ^ r ^ i, t, n, a, s, l);
}
function vt(t, n, r, i, a, s, l) {
  return da(r ^ (n | ~i), t, n, a, s, l);
}
var fC = Gp("v3", 48, function (t) {
    if (typeof t == "string") {
      var n = unescape(encodeURIComponent(t));
      t = new Uint8Array(n.length);
      for (var r = 0; r < n.length; ++r) t[r] = n.charCodeAt(r);
    }
    return (function (i) {
      for (
        var a = [], s = 32 * i.length, l = "0123456789abcdef", c = 0;
        c < s;
        c += 8
      ) {
        var f = (i[c >> 5] >>> c % 32) & 255,
          p = parseInt(l.charAt((f >>> 4) & 15) + l.charAt(15 & f), 16);
        a.push(p);
      }
      return a;
    })(
      (function (i, a) {
        (i[a >> 5] |= 128 << a % 32), (i[sd(a) - 1] = a);
        for (
          var s = 1732584193,
            l = -271733879,
            c = -1732584194,
            f = 271733878,
            p = 0;
          p < i.length;
          p += 16
        ) {
          var h = s,
            v = l,
            w = c,
            x = f;
          (s = pt(s, l, c, f, i[p], 7, -680876936)),
            (f = pt(f, s, l, c, i[p + 1], 12, -389564586)),
            (c = pt(c, f, s, l, i[p + 2], 17, 606105819)),
            (l = pt(l, c, f, s, i[p + 3], 22, -1044525330)),
            (s = pt(s, l, c, f, i[p + 4], 7, -176418897)),
            (f = pt(f, s, l, c, i[p + 5], 12, 1200080426)),
            (c = pt(c, f, s, l, i[p + 6], 17, -1473231341)),
            (l = pt(l, c, f, s, i[p + 7], 22, -45705983)),
            (s = pt(s, l, c, f, i[p + 8], 7, 1770035416)),
            (f = pt(f, s, l, c, i[p + 9], 12, -1958414417)),
            (c = pt(c, f, s, l, i[p + 10], 17, -42063)),
            (l = pt(l, c, f, s, i[p + 11], 22, -1990404162)),
            (s = pt(s, l, c, f, i[p + 12], 7, 1804603682)),
            (f = pt(f, s, l, c, i[p + 13], 12, -40341101)),
            (c = pt(c, f, s, l, i[p + 14], 17, -1502002290)),
            (s = ht(
              s,
              (l = pt(l, c, f, s, i[p + 15], 22, 1236535329)),
              c,
              f,
              i[p + 1],
              5,
              -165796510
            )),
            (f = ht(f, s, l, c, i[p + 6], 9, -1069501632)),
            (c = ht(c, f, s, l, i[p + 11], 14, 643717713)),
            (l = ht(l, c, f, s, i[p], 20, -373897302)),
            (s = ht(s, l, c, f, i[p + 5], 5, -701558691)),
            (f = ht(f, s, l, c, i[p + 10], 9, 38016083)),
            (c = ht(c, f, s, l, i[p + 15], 14, -660478335)),
            (l = ht(l, c, f, s, i[p + 4], 20, -405537848)),
            (s = ht(s, l, c, f, i[p + 9], 5, 568446438)),
            (f = ht(f, s, l, c, i[p + 14], 9, -1019803690)),
            (c = ht(c, f, s, l, i[p + 3], 14, -187363961)),
            (l = ht(l, c, f, s, i[p + 8], 20, 1163531501)),
            (s = ht(s, l, c, f, i[p + 13], 5, -1444681467)),
            (f = ht(f, s, l, c, i[p + 2], 9, -51403784)),
            (c = ht(c, f, s, l, i[p + 7], 14, 1735328473)),
            (s = gt(
              s,
              (l = ht(l, c, f, s, i[p + 12], 20, -1926607734)),
              c,
              f,
              i[p + 5],
              4,
              -378558
            )),
            (f = gt(f, s, l, c, i[p + 8], 11, -2022574463)),
            (c = gt(c, f, s, l, i[p + 11], 16, 1839030562)),
            (l = gt(l, c, f, s, i[p + 14], 23, -35309556)),
            (s = gt(s, l, c, f, i[p + 1], 4, -1530992060)),
            (f = gt(f, s, l, c, i[p + 4], 11, 1272893353)),
            (c = gt(c, f, s, l, i[p + 7], 16, -155497632)),
            (l = gt(l, c, f, s, i[p + 10], 23, -1094730640)),
            (s = gt(s, l, c, f, i[p + 13], 4, 681279174)),
            (f = gt(f, s, l, c, i[p], 11, -358537222)),
            (c = gt(c, f, s, l, i[p + 3], 16, -722521979)),
            (l = gt(l, c, f, s, i[p + 6], 23, 76029189)),
            (s = gt(s, l, c, f, i[p + 9], 4, -640364487)),
            (f = gt(f, s, l, c, i[p + 12], 11, -421815835)),
            (c = gt(c, f, s, l, i[p + 15], 16, 530742520)),
            (s = vt(
              s,
              (l = gt(l, c, f, s, i[p + 2], 23, -995338651)),
              c,
              f,
              i[p],
              6,
              -198630844
            )),
            (f = vt(f, s, l, c, i[p + 7], 10, 1126891415)),
            (c = vt(c, f, s, l, i[p + 14], 15, -1416354905)),
            (l = vt(l, c, f, s, i[p + 5], 21, -57434055)),
            (s = vt(s, l, c, f, i[p + 12], 6, 1700485571)),
            (f = vt(f, s, l, c, i[p + 3], 10, -1894986606)),
            (c = vt(c, f, s, l, i[p + 10], 15, -1051523)),
            (l = vt(l, c, f, s, i[p + 1], 21, -2054922799)),
            (s = vt(s, l, c, f, i[p + 8], 6, 1873313359)),
            (f = vt(f, s, l, c, i[p + 15], 10, -30611744)),
            (c = vt(c, f, s, l, i[p + 6], 15, -1560198380)),
            (l = vt(l, c, f, s, i[p + 13], 21, 1309151649)),
            (s = vt(s, l, c, f, i[p + 4], 6, -145523070)),
            (f = vt(f, s, l, c, i[p + 11], 10, -1120210379)),
            (c = vt(c, f, s, l, i[p + 2], 15, 718787259)),
            (l = vt(l, c, f, s, i[p + 9], 21, -343485551)),
            (s = zn(s, h)),
            (l = zn(l, v)),
            (c = zn(c, w)),
            (f = zn(f, x));
        }
        return [s, l, c, f];
      })(
        (function (i) {
          if (i.length === 0) return [];
          for (
            var a = 8 * i.length, s = new Uint32Array(sd(a)), l = 0;
            l < a;
            l += 8
          )
            s[l >> 5] |= (255 & i[l / 8]) << l % 32;
          return s;
        })(t),
        8 * t.length
      )
    );
  }),
  dC = fC;
function pC(t, n, r, i) {
  switch (t) {
    case 0:
      return (n & r) ^ (~n & i);
    case 1:
    case 3:
      return n ^ r ^ i;
    case 2:
      return (n & r) ^ (n & i) ^ (r & i);
  }
}
function Js(t, n) {
  return (t << n) | (t >>> (32 - n));
}
var hC = Gp("v5", 80, function (t) {
    var n = [1518500249, 1859775393, 2400959708, 3395469782],
      r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof t == "string") {
      var i = unescape(encodeURIComponent(t));
      t = [];
      for (var a = 0; a < i.length; ++a) t.push(i.charCodeAt(a));
    } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
    t.push(128);
    for (
      var s = t.length / 4 + 2, l = Math.ceil(s / 16), c = new Array(l), f = 0;
      f < l;
      ++f
    ) {
      for (var p = new Uint32Array(16), h = 0; h < 16; ++h)
        p[h] =
          (t[64 * f + 4 * h] << 24) |
          (t[64 * f + 4 * h + 1] << 16) |
          (t[64 * f + 4 * h + 2] << 8) |
          t[64 * f + 4 * h + 3];
      c[f] = p;
    }
    (c[l - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
      (c[l - 1][14] = Math.floor(c[l - 1][14])),
      (c[l - 1][15] = (8 * (t.length - 1)) & 4294967295);
    for (var v = 0; v < l; ++v) {
      for (var w = new Uint32Array(80), x = 0; x < 16; ++x) w[x] = c[v][x];
      for (var y = 16; y < 80; ++y)
        w[y] = Js(w[y - 3] ^ w[y - 8] ^ w[y - 14] ^ w[y - 16], 1);
      for (
        var S = r[0], _ = r[1], A = r[2], P = r[3], F = r[4], R = 0;
        R < 80;
        ++R
      ) {
        var I = Math.floor(R / 20),
          $ = (Js(S, 5) + pC(I, _, A, P) + F + n[I] + w[R]) >>> 0;
        (F = P), (P = A), (A = Js(_, 30) >>> 0), (_ = S), (S = $);
      }
      (r[0] = (r[0] + S) >>> 0),
        (r[1] = (r[1] + _) >>> 0),
        (r[2] = (r[2] + A) >>> 0),
        (r[3] = (r[3] + P) >>> 0),
        (r[4] = (r[4] + F) >>> 0);
    }
    return [
      (r[0] >> 24) & 255,
      (r[0] >> 16) & 255,
      (r[0] >> 8) & 255,
      255 & r[0],
      (r[1] >> 24) & 255,
      (r[1] >> 16) & 255,
      (r[1] >> 8) & 255,
      255 & r[1],
      (r[2] >> 24) & 255,
      (r[2] >> 16) & 255,
      (r[2] >> 8) & 255,
      255 & r[2],
      (r[3] >> 24) & 255,
      (r[3] >> 16) & 255,
      (r[3] >> 8) & 255,
      255 & r[3],
      (r[4] >> 24) & 255,
      (r[4] >> 16) & 255,
      (r[4] >> 8) & 255,
      255 & r[4],
    ];
  }),
  gC = hC,
  Bu = Object.freeze({
    __proto__: null,
    v1: function (t, n, r) {
      var i = (n && r) || 0,
        a = n || new Array(16),
        s = (t = t || {}).node || ad,
        l = t.clockseq !== void 0 ? t.clockseq : zs;
      if (s == null || l == null) {
        var c = t.random || (t.rng || id)();
        s == null && (s = ad = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
          l == null && (l = zs = 16383 & ((c[6] << 8) | c[7]));
      }
      var f = t.msecs !== void 0 ? t.msecs : Date.now(),
        p = t.nsecs !== void 0 ? t.nsecs : qs + 1,
        h = f - Ks + (p - qs) / 1e4;
      if (
        (h < 0 && t.clockseq === void 0 && (l = (l + 1) & 16383),
        (h < 0 || f > Ks) && t.nsecs === void 0 && (p = 0),
        p >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (Ks = f), (qs = p), (zs = l);
      var v = (1e4 * (268435455 & (f += 122192928e5)) + p) % 4294967296;
      (a[i++] = (v >>> 24) & 255),
        (a[i++] = (v >>> 16) & 255),
        (a[i++] = (v >>> 8) & 255),
        (a[i++] = 255 & v);
      var w = ((f / 4294967296) * 1e4) & 268435455;
      (a[i++] = (w >>> 8) & 255),
        (a[i++] = 255 & w),
        (a[i++] = ((w >>> 24) & 15) | 16),
        (a[i++] = (w >>> 16) & 255),
        (a[i++] = (l >>> 8) | 128),
        (a[i++] = 255 & l);
      for (var x = 0; x < 6; ++x) a[i + x] = s[x];
      return n || Gi(a);
    },
    v3: dC,
    v4: function (t, n, r) {
      var i = (t = t || {}).random || (t.rng || id)();
      if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), n)) {
        r = r || 0;
        for (var a = 0; a < 16; ++a) n[r + a] = i[a];
        return n;
      }
      return Gi(i);
    },
    v5: gC,
    NIL: "00000000-0000-0000-0000-000000000000",
    version: function (t) {
      if (!Xi(t)) throw TypeError("Invalid UUID");
      return parseInt(t.substr(14, 1), 16);
    },
    validate: Xi,
    stringify: Gi,
    parse: zp,
  });
const yo = ["debug", "info", "warn", "error", "none"];
var Uu = {
  commonBasicLogger: function (t, n) {
    if (t && t.destination && typeof t.destination != "function")
      throw new Error("destination for basicLogger was set to a non-function");
    function r(p) {
      return function (h) {
        console && console[p] && console[p].call(console, h);
      };
    }
    const i =
        t && t.destination
          ? [t.destination, t.destination, t.destination, t.destination]
          : [r("log"), r("info"), r("warn"), r("error")],
      a = !(!t || !t.destination),
      s =
        t && t.prefix !== void 0 && t.prefix !== null
          ? t.prefix
          : "[LaunchDarkly] ";
    let l = 1;
    if (t && t.level)
      for (let p = 0; p < yo.length; p++) yo[p] === t.level && (l = p);
    function c(p, h, v) {
      if (v.length < 1) return;
      let w;
      const x = a ? h + ": " + s : s;
      if (v.length !== 1 && n) {
        const y = [...v];
        (y[0] = x + y[0]), (w = n(...y));
      } else w = x + v[0];
      try {
        i[p](w);
      } catch (y) {
        console &&
          console.log &&
          console.log(
            "[LaunchDarkly] Configured logger's " +
              h +
              " method threw an exception: " +
              y
          );
      }
    }
    const f = {};
    for (let p = 0; p < yo.length; p++) {
      const h = yo[p];
      if (h !== "none")
        if (p < l) f[h] = () => {};
        else {
          const v = p;
          f[h] = function () {
            c(v, h, arguments);
          };
        }
    }
    return f;
  },
  validateLogger: function (t) {
    yo.forEach((n) => {
      if (n !== "none" && (!t[n] || typeof t[n] != "function"))
        throw new Error(
          "Provided logger instance must support logger." + n + "(...) method"
        );
    });
  },
};
function ki(t) {
  return t && t.message
    ? t.message
    : typeof t == "string" || t instanceof String
    ? t
    : JSON.stringify(t);
}
const Br =
  " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.";
var he = {
  bootstrapInvalid: function () {
    return "LaunchDarkly bootstrap data is not available because the back end could not read the flags.";
  },
  bootstrapOldFormat: function () {
    return (
      "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." +
      Br
    );
  },
  clientInitialized: function () {
    return "LaunchDarkly client initialized";
  },
  clientNotReady: function () {
    return "LaunchDarkly client is not ready";
  },
  debugEnqueueingEvent: function (t) {
    return 'enqueueing "' + t + '" event';
  },
  debugPostingDiagnosticEvent: function (t) {
    return "sending diagnostic event (" + t.kind + ")";
  },
  debugPostingEvents: function (t) {
    return "sending " + t + " events";
  },
  debugStreamDelete: function (t) {
    return 'received streaming deletion for flag "' + t + '"';
  },
  debugStreamDeleteIgnored: function (t) {
    return (
      'received streaming deletion for flag "' +
      t +
      '" but ignored due to version check'
    );
  },
  debugStreamPatch: function (t) {
    return 'received streaming update for flag "' + t + '"';
  },
  debugStreamPatchIgnored: function (t) {
    return (
      'received streaming update for flag "' +
      t +
      '" but ignored due to version check'
    );
  },
  debugStreamPing: function () {
    return "received ping message from stream";
  },
  debugPolling: function (t) {
    return "polling for feature flags at " + t;
  },
  debugStreamPut: function () {
    return "received streaming update for all flags";
  },
  deprecated: function (t, n) {
    return n
      ? '"' + t + '" is deprecated, please use "' + n + '"'
      : '"' + t + '" is deprecated';
  },
  environmentNotFound: function () {
    return (
      "Environment not found. Double check that you specified a valid environment/client-side ID." +
      Br
    );
  },
  environmentNotSpecified: function () {
    return "No environment/client-side ID was specified." + Br;
  },
  errorFetchingFlags: function (t) {
    return "Error fetching flag settings: " + ki(t);
  },
  eventCapacityExceeded: function () {
    return "Exceeded event queue capacity. Increase capacity to avoid dropping events.";
  },
  eventWithoutContext: function () {
    return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript";
  },
  httpErrorMessage: function (t, n, r) {
    return (
      "Received error " +
      t +
      (t === 401 ? " (invalid SDK key)" : "") +
      " for " +
      n +
      " - " +
      (tt.isHttpErrorRecoverable(t) ? r : "giving up permanently")
    );
  },
  httpUnavailable: function () {
    return "Cannot make HTTP requests in this environment." + Br;
  },
  identifyDisabled: function () {
    return "identify() has no effect here; it must be called on the main client instance";
  },
  inspectorMethodError: (t, n) =>
    `an inspector: "${n}" of type: "${t}" generated an exception`,
  invalidContentType: function (t) {
    return 'Expected application/json content type but got "' + t + '"';
  },
  invalidData: function () {
    return "Invalid data received from LaunchDarkly; connection may have been interrupted";
  },
  invalidInspector: (t, n) =>
    `an inspector: "${n}" of an invalid type (${t}) was configured`,
  invalidKey: function () {
    return "Event key must be a string";
  },
  invalidContext: function () {
    return "Invalid context specified." + Br;
  },
  invalidTagValue: (t) =>
    `Config option "${t}" must only contain letters, numbers, ., _ or -.`,
  localStorageUnavailable: function (t) {
    return "local storage is unavailable: " + ki(t);
  },
  networkError: (t) => "network error" + (t ? " (" + t + ")" : ""),
  optionBelowMinimum: (t, n, r) =>
    'Config option "' +
    t +
    '" was set to ' +
    n +
    ", changing to minimum value of " +
    r,
  streamClosing: function () {
    return "Closing stream connection";
  },
  streamConnecting: function (t) {
    return "Opening stream connection to " + t;
  },
  streamError: function (t, n) {
    return (
      "Error on stream connection: " +
      ki(t) +
      ", will continue retrying after " +
      n +
      " milliseconds."
    );
  },
  tagValueTooLong: (t) =>
    `Value of "${t}" was longer than 64 characters and was discarded.`,
  unknownCustomEventKey: function (t) {
    return 'Custom event "' + t + '" does not exist';
  },
  unknownOption: (t) => 'Ignoring unknown config option "' + t + '"',
  contextNotSpecified: function () {
    return "No context specified." + Br;
  },
  unrecoverableStreamError: (t) =>
    `Error on stream connection ${ki(t)}, giving up permanently`,
  wrongOptionType: (t, n, r) =>
    'Config option "' +
    t +
    '" should be of type ' +
    n +
    ", got " +
    r +
    ", using default value",
  wrongOptionTypeBoolean: (t, n) =>
    'Config option "' +
    t +
    '" should be a boolean, got ' +
    n +
    ", converting to boolean",
};
const { validateLogger: vC } = Uu,
  ud = {
    baseUrl: { default: "https://app.launchdarkly.com" },
    streamUrl: { default: "https://clientstream.launchdarkly.com" },
    eventsUrl: { default: "https://events.launchdarkly.com" },
    sendEvents: { default: !0 },
    streaming: { type: "boolean" },
    sendLDHeaders: { default: !0 },
    requestHeaderTransform: { type: "function" },
    sendEventsOnlyForVariation: { default: !1 },
    useReport: { default: !1 },
    evaluationReasons: { default: !1 },
    eventCapacity: { default: 100, minimum: 1 },
    flushInterval: { default: 2e3, minimum: 2e3 },
    samplingInterval: { default: 0, minimum: 0 },
    streamReconnectDelay: { default: 1e3, minimum: 0 },
    allAttributesPrivate: { default: !1 },
    privateAttributes: { default: [] },
    bootstrap: { type: "string|object" },
    diagnosticRecordingInterval: { default: 9e5, minimum: 2e3 },
    diagnosticOptOut: { default: !1 },
    wrapperName: { type: "string" },
    wrapperVersion: { type: "string" },
    stateProvider: { type: "object" },
    application: {
      validator: function (t, n, r) {
        const i = {};
        return (
          n.id && (i.id = ld(`${t}.id`, n.id, r)),
          n.version && (i.version = ld(`${t}.version`, n.version, r)),
          i
        );
      },
    },
    inspectors: { default: [] },
  },
  mC = /^(\w|\.|-)+$/;
function Ys(t) {
  return t && t.replace(/\/+$/, "");
}
function ld(t, n, r) {
  if (typeof n == "string" && n.match(mC)) {
    if (!(n.length > 64)) return n;
    r.warn(he.tagValueTooLong(t));
  } else r.warn(he.invalidTagValue(t));
}
var Vu = {
  baseOptionDefs: ud,
  validate: function (t, n, r, i) {
    const a = ge.extend({ logger: { default: i } }, ud, r),
      s = {};
    function l(f) {
      ge.onNextTick(() => {
        n && n.maybeReportError(new tt.LDInvalidArgumentError(f));
      });
    }
    let c = ge.extend({}, t || {});
    return (
      (function (f) {
        const p = f;
        Object.keys(s).forEach((h) => {
          if (p[h] !== void 0) {
            const v = s[h];
            i && i.warn(he.deprecated(h, v)),
              v && (p[v] === void 0 && (p[v] = p[h]), delete p[h]);
          }
        });
      })(c),
      (c = (function (f) {
        const p = ge.extend({}, f);
        return (
          Object.keys(a).forEach((h) => {
            (p[h] !== void 0 && p[h] !== null) || (p[h] = a[h] && a[h].default);
          }),
          p
        );
      })(c)),
      (c = (function (f) {
        const p = ge.extend({}, f),
          h = (v) => {
            if (v === null) return "any";
            if (v === void 0) return;
            if (Array.isArray(v)) return "array";
            const w = typeof v;
            return w === "boolean" ||
              w === "string" ||
              w === "number" ||
              w === "function"
              ? w
              : "object";
          };
        return (
          Object.keys(f).forEach((v) => {
            const w = f[v];
            if (w != null) {
              const x = a[v];
              if (x === void 0) l(he.unknownOption(v));
              else {
                const y = x.type || h(x.default),
                  S = x.validator;
                if (S) {
                  const _ = S(v, f[v], i);
                  _ !== void 0 ? (p[v] = _) : delete p[v];
                } else if (y !== "any") {
                  const _ = y.split("|"),
                    A = h(w);
                  _.indexOf(A) < 0
                    ? y === "boolean"
                      ? ((p[v] = !!w), l(he.wrongOptionTypeBoolean(v, A)))
                      : (l(he.wrongOptionType(v, y, A)), (p[v] = x.default))
                    : A === "number" &&
                      x.minimum !== void 0 &&
                      w < x.minimum &&
                      (l(he.optionBelowMinimum(v, w, x.minimum)),
                      (p[v] = x.minimum));
                }
              }
            }
          }),
          (p.baseUrl = Ys(p.baseUrl)),
          (p.streamUrl = Ys(p.streamUrl)),
          (p.eventsUrl = Ys(p.eventsUrl)),
          p
        );
      })(c)),
      vC(c.logger),
      c
    );
  },
  getTags: function (t) {
    const n = {};
    return (
      t &&
        (t.application &&
          t.application.id !== void 0 &&
          t.application.id !== null &&
          (n["application-id"] = [t.application.id]),
        t.application &&
          t.application.version !== void 0 &&
          t.application.id !== null &&
          (n["application-version"] = [t.application.version])),
      n
    );
  },
};
const { getLDUserAgentString: bC } = ge;
var Hu = {
  getLDHeaders: function (t, n) {
    if (n && !n.sendLDHeaders) return {};
    const r = {};
    (r[t.userAgentHeaderName || "User-Agent"] = bC(t)),
      n &&
        n.wrapperName &&
        (r["X-LaunchDarkly-Wrapper"] = n.wrapperVersion
          ? n.wrapperName + "/" + n.wrapperVersion
          : n.wrapperName);
    const i = Vu.getTags(n),
      a = Object.keys(i);
    return (
      a.length &&
        (r["x-launchdarkly-tags"] = a
          .sort()
          .map((s) =>
            Array.isArray(i[s])
              ? i[s].sort().map((l) => `${s}/${l}`)
              : [`${s}/${i[s]}`]
          )
          .reduce((s, l) => s.concat(l), [])
          .join(" ")),
      r
    );
  },
  transformHeaders: function (t, n) {
    return n && n.requestHeaderTransform
      ? n.requestHeaderTransform({ ...t })
      : t;
  },
};
const { v1: xC } = Bu,
  { getLDHeaders: yC, transformHeaders: EC } = Hu;
var Kp = function (t, n, r) {
  const i = "/a/" + n + ".gif",
    a = ge.extend({ "Content-Type": "application/json" }, yC(t, r)),
    s = t.httpFallbackPing,
    l = {};
  return (
    (l.sendChunk = (c, f, p, h) => {
      const v = JSON.stringify(c),
        w = p ? null : xC();
      return h
        ? (function x(y) {
            const S = p
              ? a
              : ge.extend({}, a, {
                  "X-LaunchDarkly-Event-Schema": "4",
                  "X-LaunchDarkly-Payload-ID": w,
                });
            return t
              .httpRequest("POST", f, EC(S, r), v)
              .promise.then((_) => {
                if (_)
                  return _.status >= 400 &&
                    tt.isHttpErrorRecoverable(_.status) &&
                    y
                    ? x(!1)
                    : (function (A) {
                        const P = { status: A.status },
                          F = A.header("date");
                        if (F) {
                          const R = Date.parse(F);
                          R && (P.serverTime = R);
                        }
                        return P;
                      })(_);
              })
              .catch(() => (y ? x(!1) : Promise.reject()));
          })(!0).catch(() => {})
        : (s && s(f + i + "?d=" + ge.base64URLEncode(v)), Promise.resolve());
    }),
    (l.sendEvents = function (c, f, p) {
      if (!t.httpRequest) return Promise.resolve();
      const h = t.httpAllowsPost();
      let v;
      v = h ? [c] : ge.chunkEventsForUrl(2e3 - f.length, c);
      const w = [];
      for (let x = 0; x < v.length; x++) w.push(l.sendChunk(v[x], f, p, h));
      return Promise.all(w);
    }),
    l
  );
};
const { commonBasicLogger: wC } = Uu;
function cd(t) {
  return typeof t == "string" && t !== "kind" && t.match(/^(\w|\.|-)+$/);
}
function fd(t) {
  return t.includes("%") || t.includes(":")
    ? t.replace(/%/g, "%25").replace(/:/g, "%3A")
    : t;
}
var pa = {
  checkContext: function (t, n) {
    if (t) {
      if (n && (t.kind === void 0 || t.kind === null))
        return t.key !== void 0 && t.key !== null;
      const r = t.key,
        i = t.kind === void 0 ? "user" : t.kind,
        a = cd(i),
        s = i === "multi" || (r != null && r !== "");
      if (i === "multi") {
        const l = Object.keys(t).filter((c) => c !== "kind");
        return (
          s &&
          l.every((c) => cd(c)) &&
          l.every((c) => {
            const f = t[c].key;
            return f != null && f !== "";
          })
        );
      }
      return s && a;
    }
    return !1;
  },
  getContextKeys: function (t, n = wC()) {
    if (!t) return;
    const r = {},
      { kind: i, key: a } = t;
    switch (i) {
      case void 0:
        r.user = `${a}`;
        break;
      case "multi":
        Object.entries(t)
          .filter(([s]) => s !== "kind")
          .forEach(([s, l]) => {
            l && l.key && (r[s] = l.key);
          });
        break;
      case null:
        n.warn(`null is not a valid context kind: ${t}`);
        break;
      case "":
        n.warn(`'' is not a valid context kind: ${t}`);
        break;
      default:
        r[i] = `${a}`;
    }
    return r;
  },
  getContextKinds: function (t) {
    return t
      ? t.kind === null || t.kind === void 0
        ? ["user"]
        : t.kind !== "multi"
        ? [t.kind]
        : Object.keys(t).filter((n) => n !== "kind")
      : [];
  },
  getCanonicalKey: function (t) {
    if (t) {
      if ((t.kind === void 0 || t.kind === null || t.kind === "user") && t.key)
        return t.key;
      if (t.kind !== "multi" && t.key) return `${t.kind}:${fd(t.key)}`;
      if (t.kind === "multi")
        return Object.keys(t)
          .sort()
          .filter((n) => n !== "kind")
          .map((n) => `${n}:${fd(t[n].key)}`)
          .join(":");
    }
  },
};
const { getContextKinds: SC } = pa;
var CC = function () {
  const t = {};
  let n = 0,
    r = 0,
    i = {},
    a = {};
  return (
    (t.summarizeEvent = (s) => {
      if (s.kind === "feature") {
        const l =
            s.key +
            ":" +
            (s.variation !== null && s.variation !== void 0
              ? s.variation
              : "") +
            ":" +
            (s.version !== null && s.version !== void 0 ? s.version : ""),
          c = i[l];
        let f = a[s.key];
        f || ((f = new Set()), (a[s.key] = f)),
          (function (p) {
            return p.context
              ? SC(p.context)
              : p.contextKeys
              ? Object.keys(p.contextKeys)
              : [];
          })(s).forEach((p) => f.add(p)),
          c
            ? (c.count = c.count + 1)
            : (i[l] = {
                count: 1,
                key: s.key,
                version: s.version,
                variation: s.variation,
                value: s.value,
                default: s.default,
              }),
          (n === 0 || s.creationDate < n) && (n = s.creationDate),
          s.creationDate > r && (r = s.creationDate);
      }
    }),
    (t.getSummary = () => {
      const s = {};
      let l = !0;
      for (const c of Object.values(i)) {
        let f = s[c.key];
        f ||
          ((f = {
            default: c.default,
            counters: [],
            contextKinds: [...a[c.key]],
          }),
          (s[c.key] = f));
        const p = { value: c.value, count: c.count };
        c.variation !== void 0 &&
          c.variation !== null &&
          (p.variation = c.variation),
          c.version !== void 0 && c.version !== null
            ? (p.version = c.version)
            : (p.unknown = !0),
          f.counters.push(p),
          (l = !1);
      }
      return l ? null : { startDate: n, endDate: r, features: s };
    }),
    (t.clearSummary = () => {
      (n = 0), (r = 0), (i = {}), (a = {});
    }),
    t
  );
};
function qp(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function dd(t) {
  return (t.startsWith("/") ? t.substring(1) : t)
    .split("/")
    .map((n) =>
      n.indexOf("~") >= 0 ? n.replace(/~1/g, "/").replace(/~0/g, "~") : n
    );
}
function pd(t) {
  return !t.startsWith("/");
}
function hd(t, n) {
  const r = pd(t),
    i = pd(n);
  if (r && i) return t === n;
  if (r) {
    const a = dd(n);
    return a.length === 1 && t === a[0];
  }
  if (i) {
    const a = dd(t);
    return a.length === 1 && n === a[0];
  }
  return t === n;
}
function gd(t) {
  return `/${qp(t)}`;
}
var Xs = {
    cloneExcluding: function (t, n) {
      const r = [],
        i = {},
        a = [];
      for (
        r.push(
          ...Object.keys(t).map((s) => ({
            key: s,
            ptr: gd(s),
            source: t,
            parent: i,
            visited: [t],
          }))
        );
        r.length;

      ) {
        const s = r.pop();
        if (n.some((l) => hd(l, s.ptr))) a.push(s.ptr);
        else {
          const l = s.source[s.key];
          if (l === null) s.parent[s.key] = l;
          else if (Array.isArray(l)) s.parent[s.key] = [...l];
          else if (typeof l == "object") {
            if (s.visited.includes(l)) continue;
            (s.parent[s.key] = {}),
              r.push(
                ...Object.keys(l).map((c) => {
                  return {
                    key: c,
                    ptr: ((f = s.ptr), (p = qp(c)), `${f}/${p}`),
                    source: l,
                    parent: s.parent[s.key],
                    visited: [...s.visited, l],
                  };
                  var f, p;
                })
              );
          } else s.parent[s.key] = l;
        }
      }
      return { cloned: i, excluded: a.sort() };
    },
    compare: hd,
    literalToReference: gd,
  },
  _C = function (t) {
    const n = {},
      r = t.allAttributesPrivate,
      i = t.privateAttributes || [],
      a = ["key", "kind", "_meta", "anonymous"],
      s = ["name", "ip", "firstName", "lastName", "email", "avatar", "country"],
      l = (c) => {
        if (typeof c != "object" || c === null || Array.isArray(c)) return;
        const { cloned: f, excluded: p } = Xs.cloneExcluding(
          c,
          ((h) =>
            (r
              ? Object.keys(h)
              : [...i, ...((h._meta && h._meta.privateAttributes) || [])]
            ).filter((v) => !a.some((w) => Xs.compare(v, w))))(c)
        );
        return (
          (f.key = String(f.key)),
          p.length &&
            (f._meta || (f._meta = {}), (f._meta.redactedAttributes = p)),
          f._meta &&
            (delete f._meta.privateAttributes,
            Object.keys(f._meta).length === 0 && delete f._meta),
          f.anonymous !== void 0 && (f.anonymous = !!f.anonymous),
          f
        );
      };
    return (
      (n.filter = (c) =>
        c.kind === void 0 || c.kind === null
          ? l(
              ((f) => {
                const p = { ...(f.custom || {}), kind: "user", key: f.key };
                f.anonymous !== void 0 && (p.anonymous = !!f.anonymous);
                for (const h of s)
                  delete p[h],
                    f[h] !== void 0 && f[h] !== null && (p[h] = String(f[h]));
                return (
                  f.privateAttributeNames !== void 0 &&
                    f.privateAttributeNames !== null &&
                    ((p._meta = p._meta || {}),
                    (p._meta.privateAttributes = f.privateAttributeNames.map(
                      (h) => (h.startsWith("/") ? Xs.literalToReference(h) : h)
                    ))),
                  p
                );
              })(c)
            )
          : c.kind === "multi"
          ? ((f) => {
              const p = { kind: f.kind },
                h = Object.keys(f);
              for (const v of h)
                if (v !== "kind") {
                  const w = l(f[v]);
                  w && (p[v] = w);
                }
              return p;
            })(c)
          : l(c)),
      n
    );
  };
const { getContextKeys: OC } = pa;
var PC = function (t, n, r, i = null, a = null, s = null) {
    const l = {},
      c = s || Kp(t, r, n),
      f = ge.appendUrlPath(n.eventsUrl, "/events/bulk/" + r),
      p = CC(),
      h = _C(n),
      v = n.samplingInterval,
      w = n.eventCapacity,
      x = n.flushInterval,
      y = n.logger;
    let S,
      _ = [],
      A = 0,
      P = !1,
      F = !1;
    function R() {
      return v === 0 || Math.floor(Math.random() * v) === 0;
    }
    function I(L) {
      const V = ge.extend({}, L);
      return (
        L.kind === "identify"
          ? (V.context = h.filter(L.context))
          : ((V.contextKeys = OC(L.context, y)), delete V.context),
        L.kind === "feature" &&
          (delete V.trackEvents, delete V.debugEventsUntilDate),
        V
      );
    }
    function $(L) {
      _.length < w
        ? (_.push(L), (F = !1))
        : (F || ((F = !0), y.warn(he.eventCapacityExceeded())),
          i && i.incrementDroppedEvents());
    }
    return (
      (l.enqueue = function (L) {
        if (P) return;
        let V = !1,
          U = !1;
        var k;
        if (
          (p.summarizeEvent(L),
          L.kind === "feature"
            ? R() &&
              ((V = !!L.trackEvents),
              (U =
                !!(k = L).debugEventsUntilDate &&
                k.debugEventsUntilDate > A &&
                k.debugEventsUntilDate > new Date().getTime()))
            : (V = R()),
          V && $(I(L)),
          U)
        ) {
          const q = ge.extend({}, L, { kind: "debug" });
          (q.context = h.filter(q.context)),
            delete q.trackEvents,
            delete q.debugEventsUntilDate,
            $(q);
        }
      }),
      (l.flush = function () {
        if (P) return Promise.resolve();
        const L = _,
          V = p.getSummary();
        return (
          p.clearSummary(),
          V && ((V.kind = "summary"), L.push(V)),
          i && i.setEventsInLastBatch(L.length),
          L.length === 0
            ? Promise.resolve()
            : ((_ = []),
              y.debug(he.debugPostingEvents(L.length)),
              c.sendEvents(L, f).then((U) => {
                const k = U && U[0];
                k &&
                  (k.serverTime && (A = k.serverTime),
                  tt.isHttpErrorRecoverable(k.status) || (P = !0),
                  k.status >= 400 &&
                    ge.onNextTick(() => {
                      a.maybeReportError(
                        new tt.LDUnexpectedResponseError(
                          he.httpErrorMessage(
                            k.status,
                            "event posting",
                            "some events were dropped"
                          )
                        )
                      );
                    }));
              }))
        );
      }),
      (l.start = function () {
        const L = () => {
          l.flush(), (S = setTimeout(L, x));
        };
        S = setTimeout(L, x);
      }),
      (l.stop = function () {
        clearTimeout(S);
      }),
      l
    );
  },
  AC = function (t) {
    const n = {},
      r = {};
    return (
      (n.on = function (i, a, s) {
        (r[i] = r[i] || []), (r[i] = r[i].concat({ handler: a, context: s }));
      }),
      (n.off = function (i, a, s) {
        if (r[i])
          for (let l = 0; l < r[i].length; l++)
            r[i][l].handler === a &&
              r[i][l].context === s &&
              (r[i] = r[i].slice(0, l).concat(r[i].slice(l + 1)));
      }),
      (n.emit = function (i) {
        if (!r[i]) return;
        const a = r[i].slice(0);
        for (let s = 0; s < a.length; s++)
          a[s].handler.apply(
            a[s].context,
            Array.prototype.slice.call(arguments, 1)
          );
      }),
      (n.getEvents = function () {
        return Object.keys(r);
      }),
      (n.getEventListenerCount = function (i) {
        return r[i] ? r[i].length : 0;
      }),
      (n.maybeReportError = function (i) {
        i &&
          (r.error ? this.emit("error", i) : (t || console).error(i.message));
      }),
      n
    );
  };
const Ni = "ready",
  Zs = "initialized",
  Qs = "failed";
var DC = function (t) {
    let n = !1,
      r = !1,
      i = null,
      a = null;
    const s = new Promise((l) => {
      const c = () => {
        t.off(Ni, c), l();
      };
      t.on(Ni, c);
    }).catch(() => {});
    return {
      getInitializationPromise: () =>
        a ||
        (n
          ? Promise.resolve()
          : r
          ? Promise.reject(i)
          : ((a = new Promise((l, c) => {
              const f = () => {
                  t.off(Zs, f), l();
                },
                p = (h) => {
                  t.off(Qs, p), c(h);
                };
              t.on(Zs, f), t.on(Qs, p);
            })),
            a)),
      getReadyPromise: () => s,
      signalSuccess: () => {
        n || r || ((n = !0), t.emit(Zs), t.emit(Ni));
      },
      signalFailure: (l) => {
        n || r || ((r = !0), (i = l), t.emit(Qs, l), t.emit(Ni)),
          t.maybeReportError(l);
      },
    };
  },
  RC = function (t, n, r, i) {
    const a = {};
    function s() {
      let l = "";
      const c = i.getContext();
      return c && (l = r || ge.btoa(JSON.stringify(c))), "ld:" + n + ":" + l;
    }
    return (
      (a.loadFlags = () =>
        t.get(s()).then((l) => {
          if (l == null) return null;
          try {
            let c = JSON.parse(l);
            if (c) {
              const f = c.$schema;
              f === void 0 || f < 1
                ? (c = ge.transformValuesToVersionedValues(c))
                : delete c.$schema;
            }
            return c;
          } catch {
            return a.clearFlags().then(() => null);
          }
        })),
      (a.saveFlags = (l) => {
        const c = ge.extend({}, l, { $schema: 1 });
        return t.set(s(), JSON.stringify(c));
      }),
      (a.clearFlags = () => t.clear(s())),
      a
    );
  },
  TC = function (t, n) {
    const r = {};
    let i = !1;
    const a = (s) => {
      i || ((i = !0), n.warn(he.localStorageUnavailable(s)));
    };
    return (
      (r.isEnabled = () => !!t),
      (r.get = (s) =>
        new Promise((l) => {
          t
            ? t
                .get(s)
                .then(l)
                .catch((c) => {
                  a(c), l(void 0);
                })
            : l(void 0);
        })),
      (r.set = (s, l) =>
        new Promise((c) => {
          t
            ? t
                .set(s, l)
                .then(() => c(!0))
                .catch((f) => {
                  a(f), c(!1);
                })
            : c(!1);
        })),
      (r.clear = (s) =>
        new Promise((l) => {
          t
            ? t
                .clear(s)
                .then(() => l(!0))
                .catch((c) => {
                  a(c), l(!1);
                })
            : l(!1);
        })),
      r
    );
  };
const { appendUrlPath: vd, base64URLEncode: IC, objectHasOwnProperty: FC } = ge,
  { getLDHeaders: LC, transformHeaders: MC } = Hu,
  { isHttpErrorRecoverable: $C } = tt;
var kC = function (t, n, r, i) {
    const a = n.streamUrl,
      s = n.logger,
      l = {},
      c = vd(a, "/eval/" + r),
      f = n.useReport,
      p = n.evaluationReasons,
      h = n.streamReconnectDelay,
      v = LC(t, n);
    let w,
      x = !1,
      y = null,
      S = null,
      _ = null,
      A = null,
      P = null,
      F = 0;
    function R() {
      const k =
        ((q = (function () {
          const Y = h * Math.pow(2, F);
          return Y > 3e4 ? 3e4 : Y;
        })()),
        q - Math.trunc(0.5 * Math.random() * q));
      var q;
      return (F += 1), k;
    }
    function I(k) {
      if (k.status && typeof k.status == "number" && !$C(k.status))
        return (
          V(),
          s.error(he.unrecoverableStreamError(k)),
          void (S && (clearTimeout(S), (S = null)))
        );
      const q = R();
      x || (s.warn(he.streamError(k, q)), (x = !0)), U(!1), V(), $(q);
    }
    function $(k) {
      S || (k ? (S = setTimeout(L, k)) : L());
    }
    function L() {
      let k;
      S = null;
      let q = "";
      const Y = { headers: v, readTimeoutMillis: 3e5 };
      if (t.eventSourceFactory) {
        A != null && (q = "h=" + A),
          f
            ? t.eventSourceAllowsReport
              ? ((k = c),
                (Y.method = "REPORT"),
                (Y.headers["Content-Type"] = "application/json"),
                (Y.body = JSON.stringify(_)))
              : ((k = vd(a, "/ping/" + r)), (q = ""))
            : (k = c + "/" + IC(JSON.stringify(_))),
          (Y.headers = MC(Y.headers, n)),
          p && (q = q + (q ? "&" : "") + "withReasons=true"),
          (k = k + (q ? "?" : "") + q),
          V(),
          s.info(he.streamConnecting(k)),
          (w = new Date().getTime()),
          (y = t.eventSourceFactory(k, Y));
        for (const G in P) FC(P, G) && y.addEventListener(G, P[G]);
        (y.onerror = I),
          (y.onopen = () => {
            F = 0;
          });
      }
    }
    function V() {
      y && (s.info(he.streamClosing()), y.close(), (y = null));
    }
    function U(k) {
      w && i && i.recordStreamInit(w, !k, new Date().getTime() - w), (w = null);
    }
    return (
      (l.connect = function (k, q, Y) {
        (_ = k), (A = q), (P = {});
        for (const G in Y || {})
          P[G] = function (Q) {
            (x = !1), U(!0), Y[G] && Y[G](Q);
          };
        $();
      }),
      (l.disconnect = function () {
        clearTimeout(S), (S = null), V();
      }),
      (l.isConnected = function () {
        return !!(y && t.eventSourceIsActive && t.eventSourceIsActive(y));
      }),
      l
    );
  },
  NC = function (t) {
    let n, r, i, a;
    const s = {
      addPromise: (l, c) => {
        (n = l),
          r && r(),
          (r = c),
          l.then(
            (f) => {
              n === l && (i(f), t && t());
            },
            (f) => {
              n === l && (a(f), t && t());
            }
          );
      },
    };
    return (
      (s.resultPromise = new Promise((l, c) => {
        (i = l), (a = c);
      })),
      s
    );
  };
const { transformHeaders: BC, getLDHeaders: UC } = Hu,
  eu = "application/json";
var VC = function (t, n, r) {
    const i = n.baseUrl,
      a = n.useReport,
      s = n.evaluationReasons,
      l = n.logger,
      c = {},
      f = {};
    function p(h, v) {
      if (!t.httpRequest)
        return new Promise((A, P) => {
          P(new tt.LDFlagFetchError(he.httpUnavailable()));
        });
      const w = v ? "REPORT" : "GET",
        x = UC(t, n);
      v && (x["Content-Type"] = eu);
      let y = f[h];
      y ||
        ((y = NC(() => {
          delete f[h];
        })),
        (f[h] = y));
      const S = t.httpRequest(w, h, BC(x, n), v),
        _ = S.promise.then(
          (A) => {
            if (A.status === 200) {
              if (
                A.header("content-type") &&
                A.header("content-type").substring(0, eu.length) === eu
              )
                return JSON.parse(A.body);
              {
                const P = he.invalidContentType(A.header("content-type") || "");
                return Promise.reject(new tt.LDFlagFetchError(P));
              }
            }
            return Promise.reject(
              (function (P) {
                return P.status === 404
                  ? new tt.LDInvalidEnvironmentIdError(he.environmentNotFound())
                  : new tt.LDFlagFetchError(
                      he.errorFetchingFlags(P.statusText || String(P.status))
                    );
              })(A)
            );
          },
          (A) => Promise.reject(new tt.LDFlagFetchError(he.networkError(A)))
        );
      return (
        y.addPromise(_, () => {
          S.cancel && S.cancel();
        }),
        y.resultPromise
      );
    }
    return (
      (c.fetchJSON = function (h) {
        return p(ge.appendUrlPath(i, h), null);
      }),
      (c.fetchFlagSettings = function (h, v) {
        let w,
          x,
          y,
          S = "";
        return (
          a
            ? ((x = [i, "/sdk/evalx/", r, "/context"].join("")),
              (y = JSON.stringify(h)))
            : ((w = ge.base64URLEncode(JSON.stringify(h))),
              (x = [i, "/sdk/evalx/", r, "/contexts/", w].join(""))),
          v && (S = "h=" + v),
          s && (S = S + (S ? "&" : "") + "withReasons=true"),
          (x = x + (S ? "?" : "") + S),
          l.debug(he.debugPolling(x)),
          p(x, y)
        );
      }),
      c
    );
  },
  HC = function (t, n) {
    const r = {};
    let i;
    return (
      (r.setContext = function (a) {
        (i = ge.sanitizeContext(a)), i && n && n(ge.clone(i));
      }),
      (r.getContext = function () {
        return i ? ge.clone(i) : null;
      }),
      t && r.setContext(t),
      r
    );
  };
const { v1: jC } = Bu,
  { getContextKinds: WC } = pa;
var zC = function (t) {
  function n(i) {
    return i == null || i === "user" ? "ld:$anonUserId" : `ld:$contextKey:${i}`;
  }
  function r(i, a) {
    return a.key !== null && a.key !== void 0
      ? ((a.key = a.key.toString()), Promise.resolve(a))
      : a.anonymous
      ? (function (s) {
          return t.get(n(s));
        })(i).then((s) => {
          if (s) return (a.key = s), a;
          {
            const l = jC();
            return (
              (a.key = l),
              (function (c, f) {
                return t.set(n(f), c);
              })(l, i).then(() => a)
            );
          }
        })
      : Promise.reject(new tt.LDInvalidUserError(he.invalidContext()));
  }
  this.processContext = (i) => {
    if (!i)
      return Promise.reject(
        new tt.LDInvalidUserError(he.contextNotSpecified())
      );
    const a = ge.clone(i);
    if (i.kind === "multi") {
      const s = WC(a);
      return Promise.all(s.map((l) => r(l, a[l]))).then(() => a);
    }
    return r(i.kind, a);
  };
};
const { v1: GC } = Bu,
  { baseOptionDefs: tu } = Vu,
  { appendUrlPath: KC } = ge;
var nu = {
    DiagnosticId: function (t) {
      const n = { diagnosticId: GC() };
      return (
        t && (n.sdkKeySuffix = t.length > 6 ? t.substring(t.length - 6) : t), n
      );
    },
    DiagnosticsAccumulator: function (t) {
      let n, r, i, a;
      function s(l) {
        (n = l), (r = 0), (i = 0), (a = []);
      }
      return (
        s(t),
        {
          getProps: () => ({
            dataSinceDate: n,
            droppedEvents: r,
            eventsInLastBatch: i,
            streamInits: a,
          }),
          setProps: (l) => {
            (n = l.dataSinceDate),
              (r = l.droppedEvents || 0),
              (i = l.eventsInLastBatch || 0),
              (a = l.streamInits || []);
          },
          incrementDroppedEvents: () => {
            r++;
          },
          setEventsInLastBatch: (l) => {
            i = l;
          },
          recordStreamInit: (l, c, f) => {
            const p = { timestamp: l, failed: c, durationMillis: f };
            a.push(p);
          },
          reset: s,
        }
      );
    },
    DiagnosticsManager: function (t, n, r, i, a, s, l) {
      const c = !!t.diagnosticUseCombinedEvent,
        f = "ld:" + a + ":$diagnostics",
        p = KC(s.eventsUrl, "/events/diagnostic/" + a),
        h = s.diagnosticRecordingInterval,
        v = r;
      let w,
        x,
        y = !!s.streaming;
      const S = {};
      function _() {
        return {
          sdk: F(),
          configuration: R(),
          platform: t.diagnosticPlatformData,
        };
      }
      function A(I) {
        s.logger && s.logger.debug(he.debugPostingDiagnosticEvent(I)),
          i
            .sendEvents(I, p, !0)
            .then(() => {})
            .catch(() => {});
      }
      function P() {
        A(
          (function () {
            const I = new Date().getTime();
            let $ = {
              kind: c ? "diagnostic-combined" : "diagnostic",
              id: l,
              creationDate: I,
              ...v.getProps(),
            };
            return c && ($ = { ...$, ..._() }), v.reset(I), $;
          })()
        ),
          (x = setTimeout(P, h)),
          (w = new Date().getTime()),
          c &&
            (function () {
              if (n.isEnabled()) {
                const I = { ...v.getProps() };
                n.set(f, JSON.stringify(I));
              }
            })();
      }
      function F() {
        const I = { ...t.diagnosticSdkData };
        return (
          s.wrapperName && (I.wrapperName = s.wrapperName),
          s.wrapperVersion && (I.wrapperVersion = s.wrapperVersion),
          I
        );
      }
      function R() {
        return {
          customBaseURI: s.baseUrl !== tu.baseUrl.default,
          customStreamURI: s.streamUrl !== tu.streamUrl.default,
          customEventsURI: s.eventsUrl !== tu.eventsUrl.default,
          eventsCapacity: s.eventCapacity,
          eventsFlushIntervalMillis: s.flushInterval,
          reconnectTimeMillis: s.streamReconnectDelay,
          streamingDisabled: !y,
          allAttributesPrivate: !!s.allAttributesPrivate,
          diagnosticRecordingIntervalMillis: s.diagnosticRecordingInterval,
          usingSecureMode: !!s.hash,
          bootstrapMode: !!s.bootstrap,
          fetchGoalsDisabled: !s.fetchGoals,
          sendEventsOnlyForVariation: !!s.sendEventsOnlyForVariation,
        };
      }
      return (
        (S.start = () => {
          c
            ? (function (I) {
                if (!n.isEnabled()) return I(!1);
                n.get(f)
                  .then(($) => {
                    if ($)
                      try {
                        const L = JSON.parse($);
                        v.setProps(L), (w = L.dataSinceDate);
                      } catch {}
                    I(!0);
                  })
                  .catch(() => {
                    I(!1);
                  });
              })((I) => {
                if (I) {
                  const $ = (w || 0) + h,
                    L = new Date().getTime();
                  L >= $ ? P() : (x = setTimeout(P, $ - L));
                } else
                  Math.floor(4 * Math.random()) === 0
                    ? P()
                    : (x = setTimeout(P, h));
              })
            : (A({
                kind: "diagnostic-init",
                id: l,
                creationDate: v.getProps().dataSinceDate,
                ..._(),
              }),
              (x = setTimeout(P, h)));
        }),
        (S.stop = () => {
          x && clearTimeout(x);
        }),
        (S.setStreaming = (I) => {
          y = I;
        }),
        S
      );
    },
  },
  qC = function (t, n) {
    let r = !1;
    const i = {
      type: t.type,
      name: t.name,
      method: (...a) => {
        try {
          t.method(...a);
        } catch {
          r || ((r = !0), n.warn(he.inspectorMethodError(i.type, i.name)));
        }
      },
    };
    return i;
  };
const { onNextTick: Bi } = ge,
  _t = {
    flagUsed: "flag-used",
    flagDetailsChanged: "flag-details-changed",
    flagDetailChanged: "flag-detail-changed",
    clientIdentityChanged: "client-identity-changed",
  };
Object.freeze(_t);
var JC = {
  InspectorTypes: _t,
  InspectorManager: function (t, n) {
    const r = {},
      i = {
        [_t.flagUsed]: [],
        [_t.flagDetailsChanged]: [],
        [_t.flagDetailChanged]: [],
        [_t.clientIdentityChanged]: [],
      },
      a = t && t.map((s) => qC(s, n));
    return (
      a &&
        a.forEach((s) => {
          Object.prototype.hasOwnProperty.call(i, s.type)
            ? i[s.type].push(s)
            : n.warn(he.invalidInspector(s.type, s.name));
        }),
      (r.hasListeners = (s) => i[s] && i[s].length),
      (r.onFlagUsed = (s, l, c) => {
        i[_t.flagUsed].length &&
          Bi(() => {
            i[_t.flagUsed].forEach((f) => f.method(s, l, c));
          });
      }),
      (r.onFlags = (s) => {
        i[_t.flagDetailsChanged].length &&
          Bi(() => {
            i[_t.flagDetailsChanged].forEach((l) => l.method(s));
          });
      }),
      (r.onFlagChanged = (s, l) => {
        i[_t.flagDetailChanged].length &&
          Bi(() => {
            i[_t.flagDetailChanged].forEach((c) => c.method(s, l));
          });
      }),
      (r.onIdentityChanged = (s) => {
        i[_t.clientIdentityChanged].length &&
          Bi(() => {
            i[_t.clientIdentityChanged].forEach((l) => l.method(s));
          });
      }),
      r
    );
  },
};
const { commonBasicLogger: md } = Uu,
  { checkContext: YC, getContextKeys: XC } = pa,
  { InspectorTypes: Ui, InspectorManager: ZC } = JC,
  Eo = "change",
  bd = "internal-change";
var ha = {
    initialize: function (t, n, r, i, a) {
      const s = (function () {
          return r && r.logger
            ? r.logger
            : (a && a.logger && a.logger.default) || md("warn");
        })(),
        l = AC(s),
        c = DC(l),
        f = Vu.validate(r, l, a, s),
        p = ZC(f.inspectors, s),
        h = f.sendEvents;
      let v = t,
        w = f.hash;
      const x = TC(i.localStorage, s),
        y = Kp(i, v, f),
        S = f.sendEvents && !f.diagnosticOptOut,
        _ = S ? nu.DiagnosticId(v) : null,
        A = S ? nu.DiagnosticsAccumulator(new Date().getTime()) : null,
        P = S ? nu.DiagnosticsManager(i, x, A, y, v, f, _) : null,
        F = kC(i, f, v, A),
        R = f.eventProcessor || PC(i, f, v, A, l, y),
        I = VC(i, f, v);
      let $,
        L,
        V,
        U = {},
        k = f.streaming,
        q = !1,
        Y = !1,
        G = !0;
      const Q = f.stateProvider,
        X = HC(null, function (N) {
          (function (J) {
            Q ||
              (J &&
                ve({
                  kind: "identify",
                  context: J,
                  creationDate: new Date().getTime(),
                }));
          })(N),
            p.hasListeners(Ui.clientIdentityChanged) &&
              p.onIdentityChanged(X.getContext());
        }),
        ae = new zC(x),
        re = x.isEnabled() ? RC(x, v, w, X) : null;
      function ve(N) {
        v &&
          ((Q && Q.enqueueEvent && Q.enqueueEvent(N)) ||
            (N.context
              ? ((G = !1),
                !h ||
                  Y ||
                  i.isDoNotTrack() ||
                  (s.debug(he.debugEnqueueingEvent(N.kind)), R.enqueue(N)))
              : G && (s.warn(he.eventWithoutContext()), (G = !1))));
      }
      function _e(N, J) {
        p.hasListeners(Ui.flagDetailChanged) && p.onFlagChanged(N.key, Ne(J));
      }
      function Ie() {
        p.hasListeners(Ui.flagDetailsChanged) &&
          p.onFlags(
            Object.entries(U)
              .map(([N, J]) => ({ key: N, detail: Ne(J) }))
              .reduce((N, J) => ((N[J.key] = J.detail), N), {})
          );
      }
      function $e(N, J, z, pe) {
        const xe = X.getContext(),
          ie = new Date(),
          fe = {
            kind: "feature",
            key: N,
            context: xe,
            value: J ? J.value : null,
            variation: J ? J.variationIndex : null,
            default: z,
            creationDate: ie.getTime(),
          },
          Fe = U[N];
        Fe &&
          ((fe.version = Fe.flagVersion ? Fe.flagVersion : Fe.version),
          (fe.trackEvents = Fe.trackEvents),
          (fe.debugEventsUntilDate = Fe.debugEventsUntilDate)),
          (pe || (Fe && Fe.trackReason)) && J && (fe.reason = J.reason),
          ve(fe);
      }
      function Re(N) {
        return YC(N, !1)
          ? Promise.resolve(N)
          : Promise.reject(new tt.LDInvalidUserError(he.invalidContext()));
      }
      function ke(N, J, z, pe, xe) {
        let ie;
        if (U && ge.objectHasOwnProperty(U, N) && U[N] && !U[N].deleted) {
          const fe = U[N];
          (ie = Ne(fe)),
            (fe.value !== null && fe.value !== void 0) || (ie.value = J);
        } else
          ie = {
            value: J,
            variationIndex: null,
            reason: { kind: "ERROR", errorKind: "FLAG_NOT_FOUND" },
          };
        return (
          z && $e(N, ie, J, pe),
          xe ||
            (function (fe, Fe) {
              p.hasListeners(Ui.flagUsed) &&
                p.onFlagUsed(fe, Fe, X.getContext());
            })(N, ie),
          ie
        );
      }
      function Ne(N) {
        return {
          value: N.value,
          variationIndex: N.variation === void 0 ? null : N.variation,
          reason: N.reason || null,
        };
      }
      function Ae() {
        if (((L = !0), !X.getContext())) return;
        const N = (J) => {
          try {
            return JSON.parse(J);
          } catch {
            return void l.maybeReportError(
              new tt.LDInvalidDataError(he.invalidData())
            );
          }
        };
        F.connect(X.getContext(), w, {
          ping: function () {
            s.debug(he.debugStreamPing());
            const J = X.getContext();
            I.fetchFlagSettings(J, w)
              .then((z) => {
                ge.deepEquals(J, X.getContext()) && Be(z || {});
              })
              .catch((z) => {
                l.maybeReportError(
                  new tt.LDFlagFetchError(he.errorFetchingFlags(z))
                );
              });
          },
          put: function (J) {
            const z = N(J.data);
            z && (s.debug(he.debugStreamPut()), Be(z));
          },
          patch: function (J) {
            const z = N(J.data);
            if (!z) return;
            const pe = U[z.key];
            if (!pe || !pe.version || !z.version || pe.version < z.version) {
              s.debug(he.debugStreamPatch(z.key));
              const xe = {},
                ie = ge.extend({}, z);
              delete ie.key, (U[z.key] = ie);
              const fe = Ne(ie);
              (xe[z.key] = pe
                ? { previous: pe.value, current: fe }
                : { current: fe }),
                Te(xe),
                _e(z, ie);
            } else s.debug(he.debugStreamPatchIgnored(z.key));
          },
          delete: function (J) {
            const z = N(J.data);
            if (z)
              if (!U[z.key] || U[z.key].version < z.version) {
                s.debug(he.debugStreamDelete(z.key));
                const pe = {};
                U[z.key] &&
                  !U[z.key].deleted &&
                  (pe[z.key] = { previous: U[z.key].value }),
                  (U[z.key] = { version: z.version, deleted: !0 }),
                  _e(z, U[z.key]),
                  Te(pe);
              } else s.debug(he.debugStreamDeleteIgnored(z.key));
          },
        });
      }
      function Le() {
        L && (F.disconnect(), (L = !1));
      }
      function Be(N) {
        const J = {};
        if (!N) return Promise.resolve();
        for (const z in U)
          ge.objectHasOwnProperty(U, z) &&
            U[z] &&
            (N[z] && !ge.deepEquals(N[z].value, U[z].value)
              ? (J[z] = { previous: U[z].value, current: Ne(N[z]) })
              : (N[z] && !N[z].deleted) || (J[z] = { previous: U[z].value }));
        for (const z in N)
          ge.objectHasOwnProperty(N, z) &&
            N[z] &&
            (!U[z] || U[z].deleted) &&
            (J[z] = { current: Ne(N[z]) });
        return (U = { ...N }), Ie(), Te(J).catch(() => {});
      }
      function Te(N) {
        const J = Object.keys(N);
        if (J.length > 0) {
          const z = {};
          J.forEach((pe) => {
            const xe = N[pe].current,
              ie = xe ? xe.value : void 0,
              fe = N[pe].previous;
            l.emit(Eo + ":" + pe, ie, fe),
              (z[pe] = xe ? { current: ie, previous: fe } : { previous: fe });
          }),
            l.emit(Eo, z),
            l.emit(bd, U),
            f.sendEventsOnlyForVariation ||
              Q ||
              J.forEach((pe) => {
                $e(pe, N[pe].current);
              });
        }
        return $ && re ? re.saveFlags(U) : Promise.resolve();
      }
      function He() {
        const N = k || (V && k === void 0);
        N && !L ? Ae() : !N && L && Le(), P && P.setStreaming(N);
      }
      function ct(N) {
        return N === Eo || N.substr(0, Eo.length + 1) === Eo + ":";
      }
      if (
        (typeof f.bootstrap == "string" &&
          f.bootstrap.toUpperCase() === "LOCALSTORAGE" &&
          (re ? ($ = !0) : s.warn(he.localStorageUnavailable())),
        typeof f.bootstrap == "object" &&
          (U = (function (N) {
            const J = Object.keys(N),
              z = "$flagsState",
              pe = "$valid",
              xe = N[z];
            !xe && J.length && s.warn(he.bootstrapOldFormat()),
              N[pe] === !1 && s.warn(he.bootstrapInvalid());
            const ie = {};
            return (
              J.forEach((fe) => {
                if (fe !== z && fe !== pe) {
                  let Fe = { value: N[fe] };
                  xe && xe[fe]
                    ? (Fe = ge.extend(Fe, xe[fe]))
                    : (Fe.version = 0),
                    (ie[fe] = Fe);
                }
              }),
              ie
            );
          })(f.bootstrap)),
        Q)
      ) {
        const N = Q.getInitialState();
        N ? qe(N) : Q.on("init", qe),
          Q.on("update", function (J) {
            J.context && X.setContext(J.context), J.flags && Be(J.flags);
          });
      } else
        (function () {
          return t
            ? ae
                .processContext(n)
                .then(Re)
                .then(
                  (N) => (
                    X.setContext(N),
                    typeof f.bootstrap == "object"
                      ? et()
                      : $
                      ? re.loadFlags().then((J) =>
                          J == null
                            ? ((U = {}),
                              I.fetchFlagSettings(X.getContext(), w)
                                .then((z) => Be(z || {}))
                                .then(et)
                                .catch((z) => {
                                  mt(
                                    new tt.LDFlagFetchError(
                                      he.errorFetchingFlags(z)
                                    )
                                  );
                                }))
                            : ((U = J),
                              ge.onNextTick(et),
                              I.fetchFlagSettings(X.getContext(), w)
                                .then((z) => Be(z))
                                .catch((z) => l.maybeReportError(z)))
                        )
                      : I.fetchFlagSettings(X.getContext(), w)
                          .then((J) => {
                            (U = J || {}), Ie(), et();
                          })
                          .catch((J) => {
                            (U = {}), mt(J);
                          })
                  )
                )
            : Promise.reject(
                new tt.LDInvalidEnvironmentIdError(he.environmentNotSpecified())
              );
        })().catch(mt);
      function qe(N) {
        (v = N.environment),
          X.setContext(N.context),
          (U = { ...N.flags }),
          ge.onNextTick(et);
      }
      function et() {
        s.info(he.clientInitialized()), (q = !0), He(), c.signalSuccess();
      }
      function mt(N) {
        c.signalFailure(N);
      }
      return {
        client: {
          waitForInitialization: () => c.getInitializationPromise(),
          waitUntilReady: () => c.getReadyPromise(),
          identify: function (N, J, z) {
            if (Y) return ge.wrapPromiseCallback(Promise.resolve({}), z);
            if (Q)
              return (
                s.warn(he.identifyDisabled()),
                ge.wrapPromiseCallback(
                  Promise.resolve(ge.transformVersionedValuesToValues(U)),
                  z
                )
              );
            const pe = $ && re ? re.clearFlags() : Promise.resolve();
            return ge.wrapPromiseCallback(
              pe
                .then(() => ae.processContext(N))
                .then(Re)
                .then((xe) =>
                  I.fetchFlagSettings(xe, J).then((ie) => {
                    const fe = ge.transformVersionedValuesToValues(ie);
                    return (
                      X.setContext(xe), (w = J), ie ? Be(ie).then(() => fe) : fe
                    );
                  })
                )
                .then((xe) => (L && Ae(), xe))
                .catch((xe) => (l.maybeReportError(xe), Promise.reject(xe))),
              z
            );
          },
          getContext: function () {
            return X.getContext();
          },
          variation: function (N, J) {
            return ke(N, J, !0, !1, !1).value;
          },
          variationDetail: function (N, J) {
            return ke(N, J, !0, !0, !1);
          },
          track: function (N, J, z) {
            if (typeof N != "string")
              return void l.maybeReportError(
                new tt.LDInvalidEventKeyError(he.unknownCustomEventKey(N))
              );
            i.customEventFilter &&
              !i.customEventFilter(N) &&
              s.warn(he.unknownCustomEventKey(N));
            const pe = X.getContext(),
              xe = {
                kind: "custom",
                key: N,
                context: pe,
                url: i.getCurrentUrl(),
                creationDate: new Date().getTime(),
              };
            pe &&
              pe.anonymous &&
              (xe.contextKind = pe.anonymous ? "anonymousUser" : "user"),
              J != null && (xe.data = J),
              z != null && (xe.metricValue = z),
              ve(xe);
          },
          on: function (N, J, z) {
            ct(N) ? ((V = !0), q && He(), l.on(N, J, z)) : l.on(...arguments);
          },
          off: function (N) {
            if ((l.off(...arguments), ct(N))) {
              let J = !1;
              l.getEvents().forEach((z) => {
                ct(z) && l.getEventListenerCount(z) > 0 && (J = !0);
              }),
                J || ((V = !1), L && k === void 0 && Le());
            }
          },
          setStreaming: function (N) {
            const J = N === null ? void 0 : N;
            J !== k && ((k = J), He());
          },
          flush: function (N) {
            return ge.wrapPromiseCallback(h ? R.flush() : Promise.resolve(), N);
          },
          allFlags: function () {
            const N = {};
            if (!U) return N;
            for (const J in U)
              ge.objectHasOwnProperty(U, J) &&
                !U[J].deleted &&
                (N[J] = ke(
                  J,
                  null,
                  !f.sendEventsOnlyForVariation,
                  !1,
                  !0
                ).value);
            return N;
          },
          close: function (N) {
            if (Y) return ge.wrapPromiseCallback(Promise.resolve(), N);
            const J = () => {
                (Y = !0), (U = {});
              },
              z = Promise.resolve()
                .then(() => {
                  if ((Le(), P && P.stop(), h)) return R.stop(), R.flush();
                })
                .then(J)
                .catch(J);
            return ge.wrapPromiseCallback(z, N);
          },
        },
        options: f,
        emitter: l,
        ident: X,
        logger: s,
        requestor: I,
        start: function () {
          h && (P && P.start(), R.start());
        },
        enqueueEvent: ve,
        getFlagsInternal: function () {
          return U;
        },
        getEnvironmentId: () => v,
        internalChangeEventName: bd,
      };
    },
    commonBasicLogger: md,
    errors: tt,
    messages: he,
    utils: ge,
    getContextKeys: XC,
  },
  QC = ha.initialize,
  e2 = ha.errors,
  t2 = ha.messages;
function xd(t, n) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    n &&
      (i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function wu(t) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? xd(Object(r), !0).forEach(function (i) {
          n2(t, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : xd(Object(r)).forEach(function (i) {
          Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
        });
  }
  return t;
}
function n2(t, n, r) {
  return (
    (n = (function (i) {
      var a = (function (s, l) {
        if (typeof s != "object" || s === null) return s;
        var c = s[Symbol.toPrimitive];
        if (c !== void 0) {
          var f = c.call(s, l || "default");
          if (typeof f != "object") return f;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (l === "string" ? String : Number)(s);
      })(i, "string");
      return typeof a == "symbol" ? a : String(a);
    })(n)) in t
      ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[n] = r),
    t
  );
}
var r2 = ha.commonBasicLogger,
  o2 = function (t) {
    return r2(wu({ destination: console.log }, t));
  },
  yd = {
    promise: Promise.resolve({
      status: 200,
      header: function () {
        return null;
      },
      body: null,
    }),
  };
function i2(t, n, r, i, a) {
  if (
    a &&
    !(function () {
      var p = window.navigator && window.navigator.userAgent;
      if (p) {
        var h = p.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (h) return parseInt(h[2], 10) < 73;
      }
      return !0;
    })()
  )
    return yd;
  var s = new window.XMLHttpRequest();
  for (var l in (s.open(t, n, !a), r || {}))
    Object.prototype.hasOwnProperty.call(r, l) && s.setRequestHeader(l, r[l]);
  if (a) return s.send(i), yd;
  var c,
    f = new Promise(function (p, h) {
      s.addEventListener("load", function () {
        c ||
          p({
            status: s.status,
            header: function (v) {
              return s.getResponseHeader(v);
            },
            body: s.responseText,
          });
      }),
        s.addEventListener("error", function () {
          c || h(new Error());
        }),
        s.send(i);
    });
  return {
    promise: f,
    cancel: function () {
      (c = !0), s.abort();
    },
  };
}
var ru = (t) => {
  if (typeof t != "string") throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
function a2(t, n, r, i) {
  var a,
    s,
    l = (
      (t.kind === "substring" || t.kind === "regex") && i.includes("/")
        ? n
        : n.replace(i, "")
    ).replace(r, "");
  switch (t.kind) {
    case "exact":
      (s = n), (a = new RegExp("^" + ru(t.url) + "/?$"));
      break;
    case "canonical":
      (s = l), (a = new RegExp("^" + ru(t.url) + "/?$"));
      break;
    case "substring":
      (s = l), (a = new RegExp(".*" + ru(t.substring) + ".*$"));
      break;
    case "regex":
      (s = l), (a = new RegExp(t.pattern));
      break;
    default:
      return !1;
  }
  return a.test(s);
}
function Ed(t, n) {
  for (var r = {}, i = null, a = [], s = 0; s < t.length; s++)
    for (var l = t[s], c = l.urls || [], f = 0; f < c.length; f++)
      if (
        a2(
          c[f],
          window.location.href,
          window.location.search,
          window.location.hash
        )
      ) {
        l.kind === "pageview"
          ? n("pageview", l)
          : (a.push(l), n("click_pageview", l));
        break;
      }
  return (
    a.length > 0 &&
      ((i = function (p) {
        for (
          var h = (function (w, x) {
              for (var y = [], S = 0; S < x.length; S++)
                for (
                  var _ = w.target,
                    A = x[S],
                    P = A.selector,
                    F = document.querySelectorAll(P);
                  _ && F.length > 0;

                ) {
                  for (var R = 0; R < F.length; R++) _ === F[R] && y.push(A);
                  _ = _.parentNode;
                }
              return y;
            })(p, a),
            v = 0;
          v < h.length;
          v++
        )
          n("click", h[v]);
      }),
      document.addEventListener("click", i)),
    (r.dispose = function () {
      document.removeEventListener("click", i);
    }),
    r
  );
}
var s2 = 300;
function u2(t, n) {
  var r, i;
  function a() {
    i && i.dispose(), r && r.length && (i = Ed(r, s));
  }
  function s(l, c) {
    var f = t.ident.getContext(),
      p = {
        kind: l,
        key: c.key,
        data: null,
        url: window.location.href,
        creationDate: new Date().getTime(),
        context: f,
      };
    return l === "click" && (p.selector = c.selector), t.enqueueEvent(p);
  }
  return (
    t.requestor
      .fetchJSON("/sdk/goals/" + t.getEnvironmentId())
      .then(function (l) {
        l &&
          l.length > 0 &&
          ((i = Ed((r = l), s)),
          (function (c, f) {
            var p,
              h = window.location.href;
            function v() {
              (p = window.location.href) !== h && ((h = p), f());
            }
            (function w(x, y) {
              x(),
                setTimeout(function () {
                  w(x, y);
                }, y);
            })(v, c),
              window.history && window.history.pushState
                ? window.addEventListener("popstate", v)
                : window.addEventListener("hashchange", v);
          })(s2, a)),
          n();
      })
      .catch(function (l) {
        t.emitter.maybeReportError(
          new e2.LDUnexpectedResponseError((l && l.message, l.message))
        ),
          n();
      }),
    {}
  );
}
var Vi = "goalsReady",
  l2 = {
    fetchGoals: { default: !0 },
    hash: { type: "string" },
    eventProcessor: { type: "object" },
    eventUrlTransformer: { type: "function" },
    disableSyncEventPost: { default: !1 },
  };
function Jp(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    i = (function (h) {
      var v,
        w = {
          userAgentHeaderName: "X-LaunchDarkly-User-Agent",
          synchronousFlush: !1,
        };
      if (window.XMLHttpRequest) {
        var x = h && h.disableSyncEventPost;
        w.httpRequest = function (A, P, F, R) {
          var I = w.synchronousFlush & !x;
          return (w.synchronousFlush = !1), i2(A, P, F, R, I);
        };
      }
      (w.httpAllowsPost = function () {
        return (
          v === void 0 &&
            (v =
              !!window.XMLHttpRequest &&
              "withCredentials" in new window.XMLHttpRequest()),
          v
        );
      }),
        (w.httpFallbackPing = function (A) {
          new window.Image().src = A;
        });
      var y,
        S = h && h.eventUrlTransformer;
      (w.getCurrentUrl = function () {
        return S ? S(window.location.href) : window.location.href;
      }),
        (w.isDoNotTrack = function () {
          var A;
          return (
            (A =
              window.navigator && window.navigator.doNotTrack !== void 0
                ? window.navigator.doNotTrack
                : window.navigator && window.navigator.msDoNotTrack !== void 0
                ? window.navigator.msDoNotTrack
                : window.doNotTrack) === 1 ||
            A === !0 ||
            A === "1" ||
            A === "yes"
          );
        });
      try {
        window.localStorage &&
          (w.localStorage = {
            get: function (A) {
              return new Promise(function (P) {
                P(window.localStorage.getItem(A));
              });
            },
            set: function (A, P) {
              return new Promise(function (F) {
                window.localStorage.setItem(A, P), F();
              });
            },
            clear: function (A) {
              return new Promise(function (P) {
                window.localStorage.removeItem(A), P();
              });
            },
          });
      } catch {
        w.localStorage = null;
      }
      if (
        (h &&
        h.useReport &&
        typeof window.EventSourcePolyfill == "function" &&
        window.EventSourcePolyfill.supportedOptions &&
        window.EventSourcePolyfill.supportedOptions.method
          ? ((w.eventSourceAllowsReport = !0), (y = window.EventSourcePolyfill))
          : ((w.eventSourceAllowsReport = !1), (y = window.EventSource)),
        window.EventSource)
      ) {
        var _ = 3e5;
        (w.eventSourceFactory = function (A, P) {
          var F = wu(
            wu(
              {},
              { heartbeatTimeout: _, silentTimeout: _, skipDefaultHeaders: !0 }
            ),
            P
          );
          return new y(A, F);
        }),
          (w.eventSourceIsActive = function (A) {
            return (
              A.readyState === window.EventSource.OPEN ||
              A.readyState === window.EventSource.CONNECTING
            );
          });
      }
      return (
        (w.userAgent = "JSClient"),
        (w.version = "3.1.3"),
        (w.diagnosticSdkData = { name: "js-client-sdk", version: "3.1.3" }),
        (w.diagnosticPlatformData = { name: "JS" }),
        (w.diagnosticUseCombinedEvent = !0),
        w
      );
    })(r),
    a = QC(t, n, r, i, l2),
    s = a.client,
    l = a.options,
    c = a.emitter,
    f = new Promise(function (h) {
      var v = c.on(Vi, function () {
        c.off(Vi, v), h();
      });
    });
  (s.waitUntilGoalsReady = function () {
    return f;
  }),
    l.fetchGoals
      ? u2(a, function () {
          return c.emit(Vi);
        })
      : c.emit(Vi),
    document.readyState !== "complete"
      ? window.addEventListener("load", a.start)
      : a.start();
  var p = function () {
    (i.synchronousFlush = !0),
      s.flush().catch(function () {}),
      (i.synchronousFlush = !1);
  };
  return (
    document.addEventListener("visibilitychange", function () {
      document.visibilityState === "hidden" && p();
    }),
    window.addEventListener("pagehide", p),
    s
  );
}
var c2 = o2,
  f2 = void 0,
  Yp = "3.1.3",
  d2 = {
    initialize: function (t, n) {
      var r =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return (
        console &&
          console.warn &&
          console.warn(
            t2.deprecated("default export", "named LDClient export")
          ),
        Jp(t, n, r)
      );
    },
    version: Yp,
  };
const p2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        basicLogger: c2,
        createConsoleLogger: f2,
        default: d2,
        initialize: Jp,
        version: Yp,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  h2 = fy(p2);
var Lo = {},
  g2 = 1 / 0,
  v2 = "[object Symbol]",
  m2 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
  b2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  ga = "\\ud800-\\udfff",
  Xp = "\\u0300-\\u036f\\ufe20-\\ufe23",
  Zp = "\\u20d0-\\u20f0",
  Qp = "\\u2700-\\u27bf",
  eh = "a-z\\xdf-\\xf6\\xf8-\\xff",
  x2 = "\\xac\\xb1\\xd7\\xf7",
  y2 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  E2 = "\\u2000-\\u206f",
  w2 =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  th = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  nh = "\\ufe0e\\ufe0f",
  rh = x2 + y2 + E2 + w2,
  ju = "['\u2019]",
  S2 = "[" + ga + "]",
  wd = "[" + rh + "]",
  Zi = "[" + Xp + Zp + "]",
  oh = "\\d+",
  C2 = "[" + Qp + "]",
  ih = "[" + eh + "]",
  ah = "[^" + ga + rh + oh + Qp + eh + th + "]",
  Su = "\\ud83c[\\udffb-\\udfff]",
  _2 = "(?:" + Zi + "|" + Su + ")",
  sh = "[^" + ga + "]",
  Wu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  zu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  Hr = "[" + th + "]",
  uh = "\\u200d",
  Sd = "(?:" + ih + "|" + ah + ")",
  O2 = "(?:" + Hr + "|" + ah + ")",
  Cd = "(?:" + ju + "(?:d|ll|m|re|s|t|ve))?",
  _d = "(?:" + ju + "(?:D|LL|M|RE|S|T|VE))?",
  lh = _2 + "?",
  ch = "[" + nh + "]?",
  P2 = "(?:" + uh + "(?:" + [sh, Wu, zu].join("|") + ")" + ch + lh + ")*",
  fh = ch + lh + P2,
  A2 = "(?:" + [C2, Wu, zu].join("|") + ")" + fh,
  D2 = "(?:" + [sh + Zi + "?", Zi, Wu, zu, S2].join("|") + ")",
  R2 = RegExp(ju, "g"),
  T2 = RegExp(Zi, "g"),
  I2 = RegExp(Su + "(?=" + Su + ")|" + D2 + fh, "g"),
  F2 = RegExp(
    [
      Hr + "?" + ih + "+" + Cd + "(?=" + [wd, Hr, "$"].join("|") + ")",
      O2 + "+" + _d + "(?=" + [wd, Hr + Sd, "$"].join("|") + ")",
      Hr + "?" + Sd + "+" + Cd,
      Hr + "+" + _d,
      oh,
      A2,
    ].join("|"),
    "g"
  ),
  L2 = RegExp("[" + uh + ga + Xp + Zp + nh + "]"),
  M2 = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
  $2 = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "ss",
  },
  k2 = typeof te == "object" && te && te.Object === Object && te,
  N2 = typeof self == "object" && self && self.Object === Object && self,
  B2 = k2 || N2 || Function("return this")();
function U2(t, n, r, i) {
  var a = -1,
    s = t ? t.length : 0;
  for (i && s && (r = t[++a]); ++a < s; ) r = n(r, t[a], a, t);
  return r;
}
function V2(t) {
  return t.split("");
}
function H2(t) {
  return t.match(m2) || [];
}
function j2(t) {
  return function (n) {
    return t == null ? void 0 : t[n];
  };
}
var W2 = j2($2);
function dh(t) {
  return L2.test(t);
}
function z2(t) {
  return M2.test(t);
}
function G2(t) {
  return dh(t) ? K2(t) : V2(t);
}
function K2(t) {
  return t.match(I2) || [];
}
function q2(t) {
  return t.match(F2) || [];
}
var J2 = Object.prototype,
  Y2 = J2.toString,
  Od = B2.Symbol,
  Pd = Od ? Od.prototype : void 0,
  Ad = Pd ? Pd.toString : void 0;
function X2(t, n, r) {
  var i = -1,
    a = t.length;
  n < 0 && (n = -n > a ? 0 : a + n),
    (r = r > a ? a : r),
    r < 0 && (r += a),
    (a = n > r ? 0 : (r - n) >>> 0),
    (n >>>= 0);
  for (var s = Array(a); ++i < a; ) s[i] = t[i + n];
  return s;
}
function Z2(t) {
  if (typeof t == "string") return t;
  if (r_(t)) return Ad ? Ad.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -g2 ? "-0" : n;
}
function Q2(t, n, r) {
  var i = t.length;
  return (r = r === void 0 ? i : r), !n && r >= i ? t : X2(t, n, r);
}
function e_(t) {
  return function (n) {
    n = va(n);
    var r = dh(n) ? G2(n) : void 0,
      i = r ? r[0] : n.charAt(0),
      a = r ? Q2(r, 1).join("") : n.slice(1);
    return i[t]() + a;
  };
}
function t_(t) {
  return function (n) {
    return U2(u_(a_(n).replace(R2, "")), t, "");
  };
}
function n_(t) {
  return !!t && typeof t == "object";
}
function r_(t) {
  return typeof t == "symbol" || (n_(t) && Y2.call(t) == v2);
}
function va(t) {
  return t == null ? "" : Z2(t);
}
var o_ = t_(function (t, n, r) {
  return (n = n.toLowerCase()), t + (r ? i_(n) : n);
});
function i_(t) {
  return s_(va(t).toLowerCase());
}
function a_(t) {
  return (t = va(t)), t && t.replace(b2, W2).replace(T2, "");
}
var s_ = e_("toUpperCase");
function u_(t, n, r) {
  return (
    (t = va(t)),
    (n = r ? void 0 : n),
    n === void 0 ? (z2(t) ? q2(t) : H2(t)) : t.match(n) || []
  );
}
var ph = o_;
(function (t) {
  var n =
    (te && te.__importDefault) ||
    function (c) {
      return c && c.__esModule ? c : { default: c };
    };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.fetchFlags =
      t.getFlattenedFlagsFromChangeset =
      t.camelCaseKeys =
      t.getContextOrUser =
        void 0);
  const r = n(ph),
    i = (c) => {
      var f;
      return (f = c.context) !== null && f !== void 0 ? f : c.user;
    };
  t.getContextOrUser = i;
  const a = (c) => {
    const f = {};
    for (const p in c) p.indexOf("$") !== 0 && (f[(0, r.default)(p)] = c[p]);
    return f;
  };
  t.camelCaseKeys = a;
  const s = (c, f) => {
    const p = {};
    for (const h in c) (!f || f[h] !== void 0) && (p[h] = c[h].current);
    return p;
  };
  t.getFlattenedFlagsFromChangeset = s;
  const l = (c, f) => {
    const p = c.allFlags();
    return f
      ? Object.keys(f).reduce(
          (h, v) => (
            (h[v] = Object.prototype.hasOwnProperty.call(p, v) ? p[v] : f[v]), h
          ),
          {}
        )
      : p;
  };
  (t.fetchFlags = l),
    (t.camelCaseKeys.camelCaseKeys = t.camelCaseKeys),
    (t.default = {
      camelCaseKeys: t.camelCaseKeys,
      getFlattenedFlagsFromChangeset: t.getFlattenedFlagsFromChangeset,
      fetchFlags: t.fetchFlags,
    });
})(Lo);
const l_ = "launchdarkly-react-client-sdk",
  c_ = "3.0.4",
  f_ = "LaunchDarkly SDK for React",
  d_ = "LaunchDarkly <team@launchdarkly.com>",
  p_ = "Apache-2.0",
  h_ = ["launchdarkly", "launch", "darkly", "react", "sdk", "bindings"],
  g_ = "lib/index.js",
  v_ = "lib/index.d.ts",
  m_ = ["lib", "src", "!**/*.test.*", "!**/__snapshots__"],
  b_ = {
    test: "jest",
    "test:junit": "jest --ci --reporters=default --reporters=jest-junit",
    build:
      "rimraf lib/* && tsc && mv lib/src/* lib && rimraf lib/package.json lib/src lib/*.test.*",
    lint: "tslint -p tsconfig.json 'src/**/*.ts*'",
    "lint:all": "npm run lint",
    "check-typescript": "tsc",
    prepublishOnly: "npm run build",
    prettier: "prettier --write 'src/*.@(js|ts|tsx|json|css)'",
    "link-dev": "./link-dev.sh",
    check: "npm i && npm run prettier && npm run lint && tsc && npm run test",
  },
  x_ = {
    type: "git",
    url: "git://github.com/launchdarkly/react-client-sdk.git",
  },
  y_ = "https://github.com/launchdarkly/react-client-sdk",
  E_ = {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.0.1",
    "@types/hoist-non-react-statics": "^3.3.1",
    "@types/jest": "^27.0.3",
    "@types/lodash.camelcase": "^4.3.6",
    "@types/prop-types": "^15.7.4",
    "@types/react": "^18.0.3",
    "@types/react-dom": "^18.0.0",
    "@types/react-test-renderer": "^18.0.0",
    jest: "^27.4.4",
    "jest-environment-jsdom": "^27.4.4",
    "jest-environment-jsdom-global": "^3.0.0",
    "jest-junit": "^13.0.0",
    prettier: "^1.18.2",
    "prop-types": "^15.7.2",
    react: "^18.0.0",
    "react-dom": "^18.0.0",
    "react-test-renderer": "^18.0.0",
    rimraf: "^3.0.0",
    "ts-jest": "^27.1.1",
    tslint: "^6.1.3",
    "tslint-config-prettier": "^1.18.0",
    "tslint-plugin-prettier": "^2.3.0",
    typescript: "^4.5.3",
  },
  w_ = {
    "hoist-non-react-statics": "^3.3.2",
    "launchdarkly-js-client-sdk": "^3.1.2",
    "lodash.camelcase": "^4.3.0",
  },
  S_ = {
    react: "^16.6.3 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.4 || ^17.0.0 || ^18.0.0",
  },
  C_ = {
    name: l_,
    version: c_,
    description: f_,
    author: d_,
    license: p_,
    keywords: h_,
    main: g_,
    types: v_,
    files: m_,
    scripts: b_,
    repository: x_,
    homepage: y_,
    devDependencies: E_,
    dependencies: w_,
    peerDependencies: S_,
  };
var __ =
    (te && te.__createBinding) ||
    (Object.create
      ? function (t, n, r, i) {
          i === void 0 && (i = r),
            Object.defineProperty(t, i, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
        }
      : function (t, n, r, i) {
          i === void 0 && (i = r), (t[i] = n[r]);
        }),
  O_ =
    (te && te.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, "default", { enumerable: !0, value: n });
        }
      : function (t, n) {
          t.default = n;
        }),
  P_ =
    (te && te.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null)
        for (var r in t)
          r !== "default" &&
            Object.prototype.hasOwnProperty.call(t, r) &&
            __(n, t, r);
      return O_(n, t), n;
    },
  A_ =
    (te && te.__awaiter) ||
    function (t, n, r, i) {
      function a(s) {
        return s instanceof r
          ? s
          : new r(function (l) {
              l(s);
            });
      }
      return new (r || (r = Promise))(function (s, l) {
        function c(h) {
          try {
            p(i.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(i.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? s(h.value) : a(h.value).then(c, f);
        }
        p((i = i.apply(t, n || [])).next());
      });
    };
Object.defineProperty(fa, "__esModule", { value: !0 });
const D_ = h2,
  R_ = Lo,
  T_ = P_(C_),
  I_ = {
    wrapperName: "react-client-sdk",
    wrapperVersion: T_.version,
    sendEventsOnlyForVariation: !0,
  },
  F_ = (t, n = { anonymous: !0, kind: "user" }, r, i) =>
    A_(void 0, void 0, void 0, function* () {
      const a = (0, D_.initialize)(
        t,
        n,
        Object.assign(Object.assign({}, I_), r)
      );
      return new Promise((s) => {
        function l() {
          a.off("ready", f), a.off("failed", c);
        }
        function c(p) {
          l(), s({ flags: {}, ldClient: a, error: p });
        }
        function f() {
          l();
          const p = (0, R_.fetchFlags)(a, i);
          s({ flags: p, ldClient: a });
        }
        a.on("failed", c), a.on("ready", f);
      });
    });
fa.default = F_;
var ma = {},
  L_ =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ma, "__esModule", { value: !0 });
const M_ = L_(ph),
  $_ = Yn;
function k_(t, n, r = $_.defaultReactOptions, i) {
  const a = N_(n, i),
    { useCamelCaseFlagKeys: s = !0 } = r,
    [l, c = {}] = s ? B_(a) : [a];
  return { flags: r.sendEventsOnFlagRead ? U_(t, l, c, s) : l, flagKeyMap: c };
}
ma.default = k_;
function N_(t, n) {
  return n === void 0
    ? t
    : Object.keys(n).reduce((r, i) => (Cu(t, i) && (r[i] = t[i]), r), {});
}
function B_(t) {
  const n = {},
    r = {};
  for (const i in t) {
    if (i.indexOf("$") === 0) continue;
    const a = (0, M_.default)(i);
    (n[a] = t[i]), (r[a] = i);
  }
  return [n, r];
}
function Cu(t, n) {
  return Object.prototype.hasOwnProperty.call(t, n);
}
function U_(t, n, r, i) {
  return new Proxy(n, {
    get(a, s, l) {
      const c = Reflect.get(a, s, l),
        f = (i && Cu(r, s)) || Cu(a, s);
      if (typeof s == "symbol" || !f) return c;
      if (c === void 0) return;
      const p = i ? r[s] : s;
      return t.variation(p, c);
    },
  });
}
var V_ =
    (te && te.__createBinding) ||
    (Object.create
      ? function (t, n, r, i) {
          i === void 0 && (i = r),
            Object.defineProperty(t, i, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
        }
      : function (t, n, r, i) {
          i === void 0 && (i = r), (t[i] = n[r]);
        }),
  H_ =
    (te && te.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, "default", { enumerable: !0, value: n });
        }
      : function (t, n) {
          t.default = n;
        }),
  j_ =
    (te && te.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null)
        for (var r in t)
          r !== "default" &&
            Object.prototype.hasOwnProperty.call(t, r) &&
            V_(n, t, r);
      return H_(n, t), n;
    },
  ou =
    (te && te.__awaiter) ||
    function (t, n, r, i) {
      function a(s) {
        return s instanceof r
          ? s
          : new r(function (l) {
              l(s);
            });
      }
      return new (r || (r = Promise))(function (s, l) {
        function c(h) {
          try {
            p(i.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(i.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? s(h.value) : a(h.value).then(c, f);
        }
        p((i = i.apply(t, n || [])).next());
      });
    },
  hh =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ca, "__esModule", { value: !0 });
const Dd = j_(E.exports),
  W_ = Yn,
  z_ = en,
  G_ = hh(fa),
  fr = Lo,
  Rd = hh(ma);
class K_ extends Dd.Component {
  constructor(n) {
    super(n),
      (this.getReactOptions = () =>
        Object.assign(
          Object.assign({}, W_.defaultReactOptions),
          this.props.reactOptions
        )),
      (this.subscribeToChanges = (i) => {
        const { flags: a } = this.props;
        i.on("change", (s) => {
          const l = this.getReactOptions(),
            c = (0, fr.getFlattenedFlagsFromChangeset)(s, a),
            f = Object.assign(Object.assign({}, this.state.unproxiedFlags), c);
          Object.keys(c).length > 0 &&
            this.setState(
              Object.assign({ unproxiedFlags: f }, (0, Rd.default)(i, f, l, a))
            );
        });
      }),
      (this.initLDClient = () =>
        ou(this, void 0, void 0, function* () {
          const { clientSideID: i, flags: a, options: s } = this.props;
          let l = yield this.props.ldClient;
          const c = this.getReactOptions();
          let f, p;
          if (l) f = (0, fr.fetchFlags)(l, a);
          else {
            const h = yield (0, G_.default)(
              i,
              (0, fr.getContextOrUser)(this.props),
              s,
              a
            );
            (f = h.flags), (l = h.ldClient), (p = h.error);
          }
          this.setState(
            Object.assign(
              Object.assign({ unproxiedFlags: f }, (0, Rd.default)(l, f, c, a)),
              { ldClient: l, error: p }
            )
          ),
            this.subscribeToChanges(l);
        }));
    const { options: r } = n;
    if (
      ((this.state = {
        flags: {},
        unproxiedFlags: {},
        flagKeyMap: {},
        ldClient: void 0,
      }),
      r)
    ) {
      const { bootstrap: i } = r;
      if (i && i !== "localStorage") {
        const { useCamelCaseFlagKeys: a } = this.getReactOptions();
        this.state = {
          flags: a ? (0, fr.camelCaseKeys)(i) : i,
          unproxiedFlags: i,
          flagKeyMap: {},
          ldClient: void 0,
        };
      }
    }
  }
  componentDidMount() {
    return ou(this, void 0, void 0, function* () {
      const { deferInitialization: n } = this.props;
      (n && !(0, fr.getContextOrUser)(this.props)) ||
        (yield this.initLDClient());
    });
  }
  componentDidUpdate(n) {
    return ou(this, void 0, void 0, function* () {
      const { deferInitialization: r } = this.props,
        i =
          !(0, fr.getContextOrUser)(n) && (0, fr.getContextOrUser)(this.props);
      r && i && (yield this.initLDClient());
    });
  }
  render() {
    const { flags: n, flagKeyMap: r, ldClient: i, error: a } = this.state;
    return Dd.default.createElement(
      z_.Provider,
      { value: { flags: n, flagKeyMap: r, ldClient: i, error: a } },
      this.props.children
    );
  }
}
ca.default = K_;
var Mo = {},
  q_ =
    (te && te.__createBinding) ||
    (Object.create
      ? function (t, n, r, i) {
          i === void 0 && (i = r),
            Object.defineProperty(t, i, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
        }
      : function (t, n, r, i) {
          i === void 0 && (i = r), (t[i] = n[r]);
        }),
  J_ =
    (te && te.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, "default", { enumerable: !0, value: n });
        }
      : function (t, n) {
          t.default = n;
        }),
  Y_ =
    (te && te.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null)
        for (var r in t)
          r !== "default" &&
            Object.prototype.hasOwnProperty.call(t, r) &&
            q_(n, t, r);
      return J_(n, t), n;
    },
  gh =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.withLDProvider = void 0;
const Td = Y_(E.exports),
  X_ = Yn,
  Z_ = gh(ca),
  Q_ = gh(dy);
function vh(t) {
  return function (r) {
    const { reactOptions: i } = t,
      a = Object.assign(Object.assign({}, X_.defaultReactOptions), i),
      s = Object.assign(Object.assign({}, t), { reactOptions: a });
    function l(c) {
      return Td.createElement(
        Z_.default,
        Object.assign({}, s),
        Td.createElement(r, Object.assign({}, c))
      );
    }
    return (0, Q_.default)(l, r), l;
  };
}
Mo.withLDProvider = vh;
Mo.default = vh;
var Gu = {},
  eO =
    (te && te.__createBinding) ||
    (Object.create
      ? function (t, n, r, i) {
          i === void 0 && (i = r),
            Object.defineProperty(t, i, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
        }
      : function (t, n, r, i) {
          i === void 0 && (i = r), (t[i] = n[r]);
        }),
  tO =
    (te && te.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, "default", { enumerable: !0, value: n });
        }
      : function (t, n) {
          t.default = n;
        }),
  nO =
    (te && te.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null)
        for (var r in t)
          r !== "default" &&
            Object.prototype.hasOwnProperty.call(t, r) &&
            eO(n, t, r);
      return tO(n, t), n;
    },
  rO =
    (te && te.__awaiter) ||
    function (t, n, r, i) {
      function a(s) {
        return s instanceof r
          ? s
          : new r(function (l) {
              l(s);
            });
      }
      return new (r || (r = Promise))(function (s, l) {
        function c(h) {
          try {
            p(i.next(h));
          } catch (v) {
            l(v);
          }
        }
        function f(h) {
          try {
            p(i.throw(h));
          } catch (v) {
            l(v);
          }
        }
        function p(h) {
          h.done ? s(h.value) : a(h.value).then(c, f);
        }
        p((i = i.apply(t, n || [])).next());
      });
    },
  mh =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Gu, "__esModule", { value: !0 });
const iu = nO(E.exports),
  oO = Yn,
  iO = en,
  aO = mh(fa),
  Id = Lo,
  Fd = mh(ma);
function sO(t) {
  return rO(this, void 0, void 0, function* () {
    const { clientSideID: n, flags: r, options: i, reactOptions: a } = t,
      s = Object.assign(Object.assign({}, oO.defaultReactOptions), a),
      {
        ldClient: l,
        flags: c,
        error: f,
      } = yield (0, aO.default)(n, (0, Id.getContextOrUser)(t), i, r),
      p =
        (i == null ? void 0 : i.bootstrap) && i.bootstrap !== "localStorage"
          ? i.bootstrap
          : c;
    return ({ children: v }) => {
      const [w, x] = (0, iu.useState)(() =>
        Object.assign({ unproxiedFlags: p }, (0, Fd.default)(l, p, s, r))
      );
      (0, iu.useEffect)(() => {
        function _(A) {
          const P = (0, Id.getFlattenedFlagsFromChangeset)(A, r);
          Object.keys(P).length > 0 &&
            x(({ unproxiedFlags: F }) => {
              const R = Object.assign(Object.assign({}, F), P);
              return Object.assign(
                { unproxiedFlags: R },
                (0, Fd.default)(l, R, s, r)
              );
            });
        }
        return (
          l.on("change", _),
          function () {
            l.off("change", _);
          }
        );
      }, []);
      const { flags: y, flagKeyMap: S } = w;
      return iu.default.createElement(
        iO.Provider,
        { value: { flags: y, flagKeyMap: S, ldClient: l, error: f } },
        v
      );
    };
  });
}
Gu.default = sO;
var Ku = {},
  uO =
    (te && te.__createBinding) ||
    (Object.create
      ? function (t, n, r, i) {
          i === void 0 && (i = r),
            Object.defineProperty(t, i, {
              enumerable: !0,
              get: function () {
                return n[r];
              },
            });
        }
      : function (t, n, r, i) {
          i === void 0 && (i = r), (t[i] = n[r]);
        }),
  lO =
    (te && te.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, "default", { enumerable: !0, value: n });
        }
      : function (t, n) {
          t.default = n;
        }),
  cO =
    (te && te.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null)
        for (var r in t)
          r !== "default" &&
            Object.prototype.hasOwnProperty.call(t, r) &&
            uO(n, t, r);
      return lO(n, t), n;
    };
Object.defineProperty(Ku, "__esModule", { value: !0 });
const au = cO(E.exports),
  fO = en;
function dO(t = { clientOnly: !1 }) {
  return function (r) {
    return (i) =>
      au.createElement(fO.Consumer, null, ({ flags: a, ldClient: s }) =>
        t.clientOnly
          ? au.createElement(r, Object.assign({ ldClient: s }, i))
          : au.createElement(r, Object.assign({ flags: a, ldClient: s }, i))
      );
  };
}
Ku.default = dO;
var qu = {},
  pO =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(qu, "__esModule", { value: !0 });
const hO = E.exports,
  gO = pO(en),
  vO = () => {
    const { flags: t } = (0, hO.useContext)(gO.default);
    return t;
  };
qu.default = vO;
var Ju = {},
  mO =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Ju, "__esModule", { value: !0 });
const bO = E.exports,
  xO = mO(en),
  yO = () => {
    const { ldClient: t } = (0, bO.useContext)(xO.default);
    return t;
  };
Ju.default = yO;
var Yu = {},
  EO =
    (te && te.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Yu, "__esModule", { value: !0 });
const wO = E.exports,
  SO = EO(en);
function CO() {
  const { error: t } = (0, wO.useContext)(SO.default);
  return t;
}
Yu.default = CO;
(function (t) {
  var n =
      (te && te.__createBinding) ||
      (Object.create
        ? function (w, x, y, S) {
            S === void 0 && (S = y),
              Object.defineProperty(w, S, {
                enumerable: !0,
                get: function () {
                  return x[y];
                },
              });
          }
        : function (w, x, y, S) {
            S === void 0 && (S = y), (w[S] = x[y]);
          }),
    r =
      (te && te.__exportStar) ||
      function (w, x) {
        for (var y in w)
          y !== "default" &&
            !Object.prototype.hasOwnProperty.call(x, y) &&
            n(x, w, y);
      },
    i =
      (te && te.__importDefault) ||
      function (w) {
        return w && w.__esModule ? w : { default: w };
      };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.withLDConsumer =
      t.withLDProvider =
      t.useLDClientError =
      t.useLDClient =
      t.useFlags =
      t.camelCaseKeys =
      t.asyncWithLDProvider =
      t.LDProvider =
        void 0);
  const a = i(ca);
  t.LDProvider = a.default;
  const s = i(Mo);
  t.withLDProvider = s.default;
  const l = i(Gu);
  t.asyncWithLDProvider = l.default;
  const c = i(Ku);
  t.withLDConsumer = c.default;
  const f = i(qu);
  t.useFlags = f.default;
  const p = i(Ju);
  t.useLDClient = p.default;
  const h = i(Yu);
  t.useLDClientError = h.default;
  const v = Lo;
  Object.defineProperty(t, "camelCaseKeys", {
    enumerable: !0,
    get: function () {
      return v.camelCaseKeys;
    },
  }),
    r(Yn, t);
})(Nu);
var Ld = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (t, n) {
  (function () {
    var r,
      i = "4.17.21",
      a = 200,
      s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      l = "Expected a function",
      c = "Invalid `variable` option passed into `_.template`",
      f = "__lodash_hash_undefined__",
      p = 500,
      h = "__lodash_placeholder__",
      v = 1,
      w = 2,
      x = 4,
      y = 1,
      S = 2,
      _ = 1,
      A = 2,
      P = 4,
      F = 8,
      R = 16,
      I = 32,
      $ = 64,
      L = 128,
      V = 256,
      U = 512,
      k = 30,
      q = "...",
      Y = 800,
      G = 16,
      Q = 1,
      X = 2,
      ae = 3,
      re = 1 / 0,
      ve = 9007199254740991,
      _e = 17976931348623157e292,
      Ie = 0 / 0,
      $e = 4294967295,
      Re = $e - 1,
      ke = $e >>> 1,
      Ne = [
        ["ary", L],
        ["bind", _],
        ["bindKey", A],
        ["curry", F],
        ["curryRight", R],
        ["flip", U],
        ["partial", I],
        ["partialRight", $],
        ["rearg", V],
      ],
      Ae = "[object Arguments]",
      Le = "[object Array]",
      Be = "[object AsyncFunction]",
      Te = "[object Boolean]",
      He = "[object Date]",
      ct = "[object DOMException]",
      qe = "[object Error]",
      et = "[object Function]",
      mt = "[object GeneratorFunction]",
      Ye = "[object Map]",
      N = "[object Number]",
      J = "[object Null]",
      z = "[object Object]",
      pe = "[object Promise]",
      xe = "[object Proxy]",
      ie = "[object RegExp]",
      fe = "[object Set]",
      Fe = "[object String]",
      tn = "[object Symbol]",
      ln = "[object Undefined]",
      Dt = "[object WeakMap]",
      Ut = "[object WeakSet]",
      nn = "[object ArrayBuffer]",
      rn = "[object DataView]",
      yr = "[object Float32Array]",
      Rt = "[object Float64Array]",
      Xn = "[object Int8Array]",
      mn = "[object Int16Array]",
      In = "[object Int32Array]",
      Er = "[object Uint8Array]",
      Fn = "[object Uint8ClampedArray]",
      Zn = "[object Uint16Array]",
      wr = "[object Uint32Array]",
      $o = /\b__p \+= '';/g,
      ba = /\b(__p \+=) '' \+/g,
      xa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      ko = /&(?:amp|lt|gt|quot|#39);/g,
      Xr = /[&<>"']/g,
      No = RegExp(ko.source),
      Bo = RegExp(Xr.source),
      Uo = /<%-([\s\S]+?)%>/g,
      Vo = /<%([\s\S]+?)%>/g,
      Zr = /<%=([\s\S]+?)%>/g,
      ya = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ea = /^\w*$/,
      wa =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Qn = /[\\^$.*+?()[\]{}|]/g,
      Sa = RegExp(Qn.source),
      bn = /^\s+/,
      Qr = /\s/,
      Tt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      er = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Ca = /,? & /,
      tr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      eo = /[()=,{}\[\]\/\s]/,
      Ho = /\\(\\)?/g,
      jo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      to = /\w*$/,
      Wo = /^[-+]0x[0-9a-f]+$/i,
      _a = /^0b[01]+$/i,
      Oa = /^\[object .+?Constructor\]$/,
      Pa = /^0o[0-7]+$/i,
      Aa = /^(?:0|[1-9]\d*)$/,
      Ce = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      it = /($^)/,
      Gh = /['\n\r\u2028\u2029\\]/g,
      zo = "\\ud800-\\udfff",
      Kh = "\\u0300-\\u036f",
      qh = "\\ufe20-\\ufe2f",
      Jh = "\\u20d0-\\u20ff",
      rl = Kh + qh + Jh,
      ol = "\\u2700-\\u27bf",
      il = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Yh = "\\xac\\xb1\\xd7\\xf7",
      Xh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Zh = "\\u2000-\\u206f",
      Qh =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      al = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      sl = "\\ufe0e\\ufe0f",
      ul = Yh + Xh + Zh + Qh,
      Da = "['\u2019]",
      eg = "[" + zo + "]",
      ll = "[" + ul + "]",
      Go = "[" + rl + "]",
      cl = "\\d+",
      tg = "[" + ol + "]",
      fl = "[" + il + "]",
      dl = "[^" + zo + ul + cl + ol + il + al + "]",
      Ra = "\\ud83c[\\udffb-\\udfff]",
      ng = "(?:" + Go + "|" + Ra + ")",
      pl = "[^" + zo + "]",
      Ta = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ia = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Sr = "[" + al + "]",
      hl = "\\u200d",
      gl = "(?:" + fl + "|" + dl + ")",
      rg = "(?:" + Sr + "|" + dl + ")",
      vl = "(?:" + Da + "(?:d|ll|m|re|s|t|ve))?",
      ml = "(?:" + Da + "(?:D|LL|M|RE|S|T|VE))?",
      bl = ng + "?",
      xl = "[" + sl + "]?",
      og = "(?:" + hl + "(?:" + [pl, Ta, Ia].join("|") + ")" + xl + bl + ")*",
      ig = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      ag = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      yl = xl + bl + og,
      sg = "(?:" + [tg, Ta, Ia].join("|") + ")" + yl,
      ug = "(?:" + [pl + Go + "?", Go, Ta, Ia, eg].join("|") + ")",
      lg = RegExp(Da, "g"),
      cg = RegExp(Go, "g"),
      Fa = RegExp(Ra + "(?=" + Ra + ")|" + ug + yl, "g"),
      fg = RegExp(
        [
          Sr + "?" + fl + "+" + vl + "(?=" + [ll, Sr, "$"].join("|") + ")",
          rg + "+" + ml + "(?=" + [ll, Sr + gl, "$"].join("|") + ")",
          Sr + "?" + gl + "+" + vl,
          Sr + "+" + ml,
          ag,
          ig,
          cl,
          sg,
        ].join("|"),
        "g"
      ),
      dg = RegExp("[" + hl + zo + rl + sl + "]"),
      pg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      hg = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      gg = -1,
      Ge = {};
    (Ge[yr] =
      Ge[Rt] =
      Ge[Xn] =
      Ge[mn] =
      Ge[In] =
      Ge[Er] =
      Ge[Fn] =
      Ge[Zn] =
      Ge[wr] =
        !0),
      (Ge[Ae] =
        Ge[Le] =
        Ge[nn] =
        Ge[Te] =
        Ge[rn] =
        Ge[He] =
        Ge[qe] =
        Ge[et] =
        Ge[Ye] =
        Ge[N] =
        Ge[z] =
        Ge[ie] =
        Ge[fe] =
        Ge[Fe] =
        Ge[Dt] =
          !1);
    var ze = {};
    (ze[Ae] =
      ze[Le] =
      ze[nn] =
      ze[rn] =
      ze[Te] =
      ze[He] =
      ze[yr] =
      ze[Rt] =
      ze[Xn] =
      ze[mn] =
      ze[In] =
      ze[Ye] =
      ze[N] =
      ze[z] =
      ze[ie] =
      ze[fe] =
      ze[Fe] =
      ze[tn] =
      ze[Er] =
      ze[Fn] =
      ze[Zn] =
      ze[wr] =
        !0),
      (ze[qe] = ze[et] = ze[Dt] = !1);
    var vg = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      mg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      bg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      xg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      yg = parseFloat,
      Eg = parseInt,
      El = typeof te == "object" && te && te.Object === Object && te,
      wg = typeof self == "object" && self && self.Object === Object && self,
      st = El || wg || Function("return this")(),
      La = n && !n.nodeType && n,
      nr = La && !0 && t && !t.nodeType && t,
      wl = nr && nr.exports === La,
      Ma = wl && El.process,
      Vt = (function () {
        try {
          var D = nr && nr.require && nr.require("util").types;
          return D || (Ma && Ma.binding && Ma.binding("util"));
        } catch {}
      })(),
      Sl = Vt && Vt.isArrayBuffer,
      Cl = Vt && Vt.isDate,
      _l = Vt && Vt.isMap,
      Ol = Vt && Vt.isRegExp,
      Pl = Vt && Vt.isSet,
      Al = Vt && Vt.isTypedArray;
    function It(D, B, M) {
      switch (M.length) {
        case 0:
          return D.call(B);
        case 1:
          return D.call(B, M[0]);
        case 2:
          return D.call(B, M[0], M[1]);
        case 3:
          return D.call(B, M[0], M[1], M[2]);
      }
      return D.apply(B, M);
    }
    function Sg(D, B, M, ee) {
      for (var me = -1, Me = D == null ? 0 : D.length; ++me < Me; ) {
        var nt = D[me];
        B(ee, nt, M(nt), D);
      }
      return ee;
    }
    function Ht(D, B) {
      for (
        var M = -1, ee = D == null ? 0 : D.length;
        ++M < ee && B(D[M], M, D) !== !1;

      );
      return D;
    }
    function Cg(D, B) {
      for (var M = D == null ? 0 : D.length; M-- && B(D[M], M, D) !== !1; );
      return D;
    }
    function Dl(D, B) {
      for (var M = -1, ee = D == null ? 0 : D.length; ++M < ee; )
        if (!B(D[M], M, D)) return !1;
      return !0;
    }
    function Ln(D, B) {
      for (
        var M = -1, ee = D == null ? 0 : D.length, me = 0, Me = [];
        ++M < ee;

      ) {
        var nt = D[M];
        B(nt, M, D) && (Me[me++] = nt);
      }
      return Me;
    }
    function Ko(D, B) {
      var M = D == null ? 0 : D.length;
      return !!M && Cr(D, B, 0) > -1;
    }
    function $a(D, B, M) {
      for (var ee = -1, me = D == null ? 0 : D.length; ++ee < me; )
        if (M(B, D[ee])) return !0;
      return !1;
    }
    function Ke(D, B) {
      for (
        var M = -1, ee = D == null ? 0 : D.length, me = Array(ee);
        ++M < ee;

      )
        me[M] = B(D[M], M, D);
      return me;
    }
    function Mn(D, B) {
      for (var M = -1, ee = B.length, me = D.length; ++M < ee; )
        D[me + M] = B[M];
      return D;
    }
    function ka(D, B, M, ee) {
      var me = -1,
        Me = D == null ? 0 : D.length;
      for (ee && Me && (M = D[++me]); ++me < Me; ) M = B(M, D[me], me, D);
      return M;
    }
    function _g(D, B, M, ee) {
      var me = D == null ? 0 : D.length;
      for (ee && me && (M = D[--me]); me--; ) M = B(M, D[me], me, D);
      return M;
    }
    function Na(D, B) {
      for (var M = -1, ee = D == null ? 0 : D.length; ++M < ee; )
        if (B(D[M], M, D)) return !0;
      return !1;
    }
    var Og = Ba("length");
    function Pg(D) {
      return D.split("");
    }
    function Ag(D) {
      return D.match(tr) || [];
    }
    function Rl(D, B, M) {
      var ee;
      return (
        M(D, function (me, Me, nt) {
          if (B(me, Me, nt)) return (ee = Me), !1;
        }),
        ee
      );
    }
    function qo(D, B, M, ee) {
      for (var me = D.length, Me = M + (ee ? 1 : -1); ee ? Me-- : ++Me < me; )
        if (B(D[Me], Me, D)) return Me;
      return -1;
    }
    function Cr(D, B, M) {
      return B === B ? Ug(D, B, M) : qo(D, Tl, M);
    }
    function Dg(D, B, M, ee) {
      for (var me = M - 1, Me = D.length; ++me < Me; )
        if (ee(D[me], B)) return me;
      return -1;
    }
    function Tl(D) {
      return D !== D;
    }
    function Il(D, B) {
      var M = D == null ? 0 : D.length;
      return M ? Va(D, B) / M : Ie;
    }
    function Ba(D) {
      return function (B) {
        return B == null ? r : B[D];
      };
    }
    function Ua(D) {
      return function (B) {
        return D == null ? r : D[B];
      };
    }
    function Fl(D, B, M, ee, me) {
      return (
        me(D, function (Me, nt, We) {
          M = ee ? ((ee = !1), Me) : B(M, Me, nt, We);
        }),
        M
      );
    }
    function Rg(D, B) {
      var M = D.length;
      for (D.sort(B); M--; ) D[M] = D[M].value;
      return D;
    }
    function Va(D, B) {
      for (var M, ee = -1, me = D.length; ++ee < me; ) {
        var Me = B(D[ee]);
        Me !== r && (M = M === r ? Me : M + Me);
      }
      return M;
    }
    function Ha(D, B) {
      for (var M = -1, ee = Array(D); ++M < D; ) ee[M] = B(M);
      return ee;
    }
    function Tg(D, B) {
      return Ke(B, function (M) {
        return [M, D[M]];
      });
    }
    function Ll(D) {
      return D && D.slice(0, Nl(D) + 1).replace(bn, "");
    }
    function Ft(D) {
      return function (B) {
        return D(B);
      };
    }
    function ja(D, B) {
      return Ke(B, function (M) {
        return D[M];
      });
    }
    function no(D, B) {
      return D.has(B);
    }
    function Ml(D, B) {
      for (var M = -1, ee = D.length; ++M < ee && Cr(B, D[M], 0) > -1; );
      return M;
    }
    function $l(D, B) {
      for (var M = D.length; M-- && Cr(B, D[M], 0) > -1; );
      return M;
    }
    function Ig(D, B) {
      for (var M = D.length, ee = 0; M--; ) D[M] === B && ++ee;
      return ee;
    }
    var Fg = Ua(vg),
      Lg = Ua(mg);
    function Mg(D) {
      return "\\" + xg[D];
    }
    function $g(D, B) {
      return D == null ? r : D[B];
    }
    function _r(D) {
      return dg.test(D);
    }
    function kg(D) {
      return pg.test(D);
    }
    function Ng(D) {
      for (var B, M = []; !(B = D.next()).done; ) M.push(B.value);
      return M;
    }
    function Wa(D) {
      var B = -1,
        M = Array(D.size);
      return (
        D.forEach(function (ee, me) {
          M[++B] = [me, ee];
        }),
        M
      );
    }
    function kl(D, B) {
      return function (M) {
        return D(B(M));
      };
    }
    function $n(D, B) {
      for (var M = -1, ee = D.length, me = 0, Me = []; ++M < ee; ) {
        var nt = D[M];
        (nt === B || nt === h) && ((D[M] = h), (Me[me++] = M));
      }
      return Me;
    }
    function Jo(D) {
      var B = -1,
        M = Array(D.size);
      return (
        D.forEach(function (ee) {
          M[++B] = ee;
        }),
        M
      );
    }
    function Bg(D) {
      var B = -1,
        M = Array(D.size);
      return (
        D.forEach(function (ee) {
          M[++B] = [ee, ee];
        }),
        M
      );
    }
    function Ug(D, B, M) {
      for (var ee = M - 1, me = D.length; ++ee < me; )
        if (D[ee] === B) return ee;
      return -1;
    }
    function Vg(D, B, M) {
      for (var ee = M + 1; ee--; ) if (D[ee] === B) return ee;
      return ee;
    }
    function Or(D) {
      return _r(D) ? jg(D) : Og(D);
    }
    function on(D) {
      return _r(D) ? Wg(D) : Pg(D);
    }
    function Nl(D) {
      for (var B = D.length; B-- && Qr.test(D.charAt(B)); );
      return B;
    }
    var Hg = Ua(bg);
    function jg(D) {
      for (var B = (Fa.lastIndex = 0); Fa.test(D); ) ++B;
      return B;
    }
    function Wg(D) {
      return D.match(Fa) || [];
    }
    function zg(D) {
      return D.match(fg) || [];
    }
    var Gg = function D(B) {
        B = B == null ? st : Pr.defaults(st.Object(), B, Pr.pick(st, hg));
        var M = B.Array,
          ee = B.Date,
          me = B.Error,
          Me = B.Function,
          nt = B.Math,
          We = B.Object,
          za = B.RegExp,
          Kg = B.String,
          jt = B.TypeError,
          Yo = M.prototype,
          qg = Me.prototype,
          Ar = We.prototype,
          Xo = B["__core-js_shared__"],
          Zo = qg.toString,
          Ve = Ar.hasOwnProperty,
          Jg = 0,
          Bl = (function () {
            var e = /[^.]+$/.exec((Xo && Xo.keys && Xo.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          Qo = Ar.toString,
          Yg = Zo.call(We),
          Xg = st._,
          Zg = za(
            "^" +
              Zo.call(Ve)
                .replace(Qn, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          ei = wl ? B.Buffer : r,
          kn = B.Symbol,
          ti = B.Uint8Array,
          Ul = ei ? ei.allocUnsafe : r,
          ni = kl(We.getPrototypeOf, We),
          Vl = We.create,
          Hl = Ar.propertyIsEnumerable,
          ri = Yo.splice,
          jl = kn ? kn.isConcatSpreadable : r,
          ro = kn ? kn.iterator : r,
          rr = kn ? kn.toStringTag : r,
          oi = (function () {
            try {
              var e = ur(We, "defineProperty");
              return e({}, "", {}), e;
            } catch {}
          })(),
          Qg = B.clearTimeout !== st.clearTimeout && B.clearTimeout,
          ev = ee && ee.now !== st.Date.now && ee.now,
          tv = B.setTimeout !== st.setTimeout && B.setTimeout,
          ii = nt.ceil,
          ai = nt.floor,
          Ga = We.getOwnPropertySymbols,
          nv = ei ? ei.isBuffer : r,
          Wl = B.isFinite,
          rv = Yo.join,
          ov = kl(We.keys, We),
          rt = nt.max,
          ft = nt.min,
          iv = ee.now,
          av = B.parseInt,
          zl = nt.random,
          sv = Yo.reverse,
          Ka = ur(B, "DataView"),
          oo = ur(B, "Map"),
          qa = ur(B, "Promise"),
          Dr = ur(B, "Set"),
          io = ur(B, "WeakMap"),
          ao = ur(We, "create"),
          si = io && new io(),
          Rr = {},
          uv = lr(Ka),
          lv = lr(oo),
          cv = lr(qa),
          fv = lr(Dr),
          dv = lr(io),
          ui = kn ? kn.prototype : r,
          so = ui ? ui.valueOf : r,
          Gl = ui ? ui.toString : r;
        function m(e) {
          if (Xe(e) && !be(e) && !(e instanceof Pe)) {
            if (e instanceof Wt) return e;
            if (Ve.call(e, "__wrapped__")) return Kc(e);
          }
          return new Wt(e);
        }
        var Tr = (function () {
          function e() {}
          return function (o) {
            if (!Je(o)) return {};
            if (Vl) return Vl(o);
            e.prototype = o;
            var u = new e();
            return (e.prototype = r), u;
          };
        })();
        function li() {}
        function Wt(e, o) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!o),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (m.templateSettings = {
          escape: Uo,
          evaluate: Vo,
          interpolate: Zr,
          variable: "",
          imports: { _: m },
        }),
          (m.prototype = li.prototype),
          (m.prototype.constructor = m),
          (Wt.prototype = Tr(li.prototype)),
          (Wt.prototype.constructor = Wt);
        function Pe(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = $e),
            (this.__views__ = []);
        }
        function pv() {
          var e = new Pe(this.__wrapped__);
          return (
            (e.__actions__ = Et(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = Et(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = Et(this.__views__)),
            e
          );
        }
        function hv() {
          if (this.__filtered__) {
            var e = new Pe(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function gv() {
          var e = this.__wrapped__.value(),
            o = this.__dir__,
            u = be(e),
            d = o < 0,
            g = u ? e.length : 0,
            b = Pm(0, g, this.__views__),
            C = b.start,
            O = b.end,
            T = O - C,
            H = d ? O : C - 1,
            j = this.__iteratees__,
            W = j.length,
            Z = 0,
            ne = ft(T, this.__takeCount__);
          if (!u || (!d && g == T && ne == T)) return vc(e, this.__actions__);
          var le = [];
          e: for (; T-- && Z < ne; ) {
            H += o;
            for (var we = -1, ce = e[H]; ++we < W; ) {
              var Oe = j[we],
                De = Oe.iteratee,
                $t = Oe.type,
                yt = De(ce);
              if ($t == X) ce = yt;
              else if (!yt) {
                if ($t == Q) continue e;
                break e;
              }
            }
            le[Z++] = ce;
          }
          return le;
        }
        (Pe.prototype = Tr(li.prototype)), (Pe.prototype.constructor = Pe);
        function or(e) {
          var o = -1,
            u = e == null ? 0 : e.length;
          for (this.clear(); ++o < u; ) {
            var d = e[o];
            this.set(d[0], d[1]);
          }
        }
        function vv() {
          (this.__data__ = ao ? ao(null) : {}), (this.size = 0);
        }
        function mv(e) {
          var o = this.has(e) && delete this.__data__[e];
          return (this.size -= o ? 1 : 0), o;
        }
        function bv(e) {
          var o = this.__data__;
          if (ao) {
            var u = o[e];
            return u === f ? r : u;
          }
          return Ve.call(o, e) ? o[e] : r;
        }
        function xv(e) {
          var o = this.__data__;
          return ao ? o[e] !== r : Ve.call(o, e);
        }
        function yv(e, o) {
          var u = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (u[e] = ao && o === r ? f : o),
            this
          );
        }
        (or.prototype.clear = vv),
          (or.prototype.delete = mv),
          (or.prototype.get = bv),
          (or.prototype.has = xv),
          (or.prototype.set = yv);
        function xn(e) {
          var o = -1,
            u = e == null ? 0 : e.length;
          for (this.clear(); ++o < u; ) {
            var d = e[o];
            this.set(d[0], d[1]);
          }
        }
        function Ev() {
          (this.__data__ = []), (this.size = 0);
        }
        function wv(e) {
          var o = this.__data__,
            u = ci(o, e);
          if (u < 0) return !1;
          var d = o.length - 1;
          return u == d ? o.pop() : ri.call(o, u, 1), --this.size, !0;
        }
        function Sv(e) {
          var o = this.__data__,
            u = ci(o, e);
          return u < 0 ? r : o[u][1];
        }
        function Cv(e) {
          return ci(this.__data__, e) > -1;
        }
        function _v(e, o) {
          var u = this.__data__,
            d = ci(u, e);
          return d < 0 ? (++this.size, u.push([e, o])) : (u[d][1] = o), this;
        }
        (xn.prototype.clear = Ev),
          (xn.prototype.delete = wv),
          (xn.prototype.get = Sv),
          (xn.prototype.has = Cv),
          (xn.prototype.set = _v);
        function yn(e) {
          var o = -1,
            u = e == null ? 0 : e.length;
          for (this.clear(); ++o < u; ) {
            var d = e[o];
            this.set(d[0], d[1]);
          }
        }
        function Ov() {
          (this.size = 0),
            (this.__data__ = {
              hash: new or(),
              map: new (oo || xn)(),
              string: new or(),
            });
        }
        function Pv(e) {
          var o = wi(this, e).delete(e);
          return (this.size -= o ? 1 : 0), o;
        }
        function Av(e) {
          return wi(this, e).get(e);
        }
        function Dv(e) {
          return wi(this, e).has(e);
        }
        function Rv(e, o) {
          var u = wi(this, e),
            d = u.size;
          return u.set(e, o), (this.size += u.size == d ? 0 : 1), this;
        }
        (yn.prototype.clear = Ov),
          (yn.prototype.delete = Pv),
          (yn.prototype.get = Av),
          (yn.prototype.has = Dv),
          (yn.prototype.set = Rv);
        function ir(e) {
          var o = -1,
            u = e == null ? 0 : e.length;
          for (this.__data__ = new yn(); ++o < u; ) this.add(e[o]);
        }
        function Tv(e) {
          return this.__data__.set(e, f), this;
        }
        function Iv(e) {
          return this.__data__.has(e);
        }
        (ir.prototype.add = ir.prototype.push = Tv), (ir.prototype.has = Iv);
        function an(e) {
          var o = (this.__data__ = new xn(e));
          this.size = o.size;
        }
        function Fv() {
          (this.__data__ = new xn()), (this.size = 0);
        }
        function Lv(e) {
          var o = this.__data__,
            u = o.delete(e);
          return (this.size = o.size), u;
        }
        function Mv(e) {
          return this.__data__.get(e);
        }
        function $v(e) {
          return this.__data__.has(e);
        }
        function kv(e, o) {
          var u = this.__data__;
          if (u instanceof xn) {
            var d = u.__data__;
            if (!oo || d.length < a - 1)
              return d.push([e, o]), (this.size = ++u.size), this;
            u = this.__data__ = new yn(d);
          }
          return u.set(e, o), (this.size = u.size), this;
        }
        (an.prototype.clear = Fv),
          (an.prototype.delete = Lv),
          (an.prototype.get = Mv),
          (an.prototype.has = $v),
          (an.prototype.set = kv);
        function Kl(e, o) {
          var u = be(e),
            d = !u && cr(e),
            g = !u && !d && Hn(e),
            b = !u && !d && !g && Mr(e),
            C = u || d || g || b,
            O = C ? Ha(e.length, Kg) : [],
            T = O.length;
          for (var H in e)
            (o || Ve.call(e, H)) &&
              !(
                C &&
                (H == "length" ||
                  (g && (H == "offset" || H == "parent")) ||
                  (b &&
                    (H == "buffer" ||
                      H == "byteLength" ||
                      H == "byteOffset")) ||
                  Cn(H, T))
              ) &&
              O.push(H);
          return O;
        }
        function ql(e) {
          var o = e.length;
          return o ? e[is(0, o - 1)] : r;
        }
        function Nv(e, o) {
          return Si(Et(e), ar(o, 0, e.length));
        }
        function Bv(e) {
          return Si(Et(e));
        }
        function Ja(e, o, u) {
          ((u !== r && !sn(e[o], u)) || (u === r && !(o in e))) && En(e, o, u);
        }
        function uo(e, o, u) {
          var d = e[o];
          (!(Ve.call(e, o) && sn(d, u)) || (u === r && !(o in e))) &&
            En(e, o, u);
        }
        function ci(e, o) {
          for (var u = e.length; u--; ) if (sn(e[u][0], o)) return u;
          return -1;
        }
        function Uv(e, o, u, d) {
          return (
            Nn(e, function (g, b, C) {
              o(d, g, u(g), C);
            }),
            d
          );
        }
        function Jl(e, o) {
          return e && fn(o, at(o), e);
        }
        function Vv(e, o) {
          return e && fn(o, St(o), e);
        }
        function En(e, o, u) {
          o == "__proto__" && oi
            ? oi(e, o, {
                configurable: !0,
                enumerable: !0,
                value: u,
                writable: !0,
              })
            : (e[o] = u);
        }
        function Ya(e, o) {
          for (var u = -1, d = o.length, g = M(d), b = e == null; ++u < d; )
            g[u] = b ? r : Rs(e, o[u]);
          return g;
        }
        function ar(e, o, u) {
          return (
            e === e &&
              (u !== r && (e = e <= u ? e : u),
              o !== r && (e = e >= o ? e : o)),
            e
          );
        }
        function zt(e, o, u, d, g, b) {
          var C,
            O = o & v,
            T = o & w,
            H = o & x;
          if ((u && (C = g ? u(e, d, g, b) : u(e)), C !== r)) return C;
          if (!Je(e)) return e;
          var j = be(e);
          if (j) {
            if (((C = Dm(e)), !O)) return Et(e, C);
          } else {
            var W = dt(e),
              Z = W == et || W == mt;
            if (Hn(e)) return xc(e, O);
            if (W == z || W == Ae || (Z && !g)) {
              if (((C = T || Z ? {} : Nc(e)), !O))
                return T ? bm(e, Vv(C, e)) : mm(e, Jl(C, e));
            } else {
              if (!ze[W]) return g ? e : {};
              C = Rm(e, W, O);
            }
          }
          b || (b = new an());
          var ne = b.get(e);
          if (ne) return ne;
          b.set(e, C),
            hf(e)
              ? e.forEach(function (ce) {
                  C.add(zt(ce, o, u, ce, e, b));
                })
              : df(e) &&
                e.forEach(function (ce, Oe) {
                  C.set(Oe, zt(ce, o, u, Oe, e, b));
                });
          var le = H ? (T ? vs : gs) : T ? St : at,
            we = j ? r : le(e);
          return (
            Ht(we || e, function (ce, Oe) {
              we && ((Oe = ce), (ce = e[Oe])),
                uo(C, Oe, zt(ce, o, u, Oe, e, b));
            }),
            C
          );
        }
        function Hv(e) {
          var o = at(e);
          return function (u) {
            return Yl(u, e, o);
          };
        }
        function Yl(e, o, u) {
          var d = u.length;
          if (e == null) return !d;
          for (e = We(e); d--; ) {
            var g = u[d],
              b = o[g],
              C = e[g];
            if ((C === r && !(g in e)) || !b(C)) return !1;
          }
          return !0;
        }
        function Xl(e, o, u) {
          if (typeof e != "function") throw new jt(l);
          return vo(function () {
            e.apply(r, u);
          }, o);
        }
        function lo(e, o, u, d) {
          var g = -1,
            b = Ko,
            C = !0,
            O = e.length,
            T = [],
            H = o.length;
          if (!O) return T;
          u && (o = Ke(o, Ft(u))),
            d
              ? ((b = $a), (C = !1))
              : o.length >= a && ((b = no), (C = !1), (o = new ir(o)));
          e: for (; ++g < O; ) {
            var j = e[g],
              W = u == null ? j : u(j);
            if (((j = d || j !== 0 ? j : 0), C && W === W)) {
              for (var Z = H; Z--; ) if (o[Z] === W) continue e;
              T.push(j);
            } else b(o, W, d) || T.push(j);
          }
          return T;
        }
        var Nn = Cc(cn),
          Zl = Cc(Za, !0);
        function jv(e, o) {
          var u = !0;
          return (
            Nn(e, function (d, g, b) {
              return (u = !!o(d, g, b)), u;
            }),
            u
          );
        }
        function fi(e, o, u) {
          for (var d = -1, g = e.length; ++d < g; ) {
            var b = e[d],
              C = o(b);
            if (C != null && (O === r ? C === C && !Mt(C) : u(C, O)))
              var O = C,
                T = b;
          }
          return T;
        }
        function Wv(e, o, u, d) {
          var g = e.length;
          for (
            u = Ee(u),
              u < 0 && (u = -u > g ? 0 : g + u),
              d = d === r || d > g ? g : Ee(d),
              d < 0 && (d += g),
              d = u > d ? 0 : vf(d);
            u < d;

          )
            e[u++] = o;
          return e;
        }
        function Ql(e, o) {
          var u = [];
          return (
            Nn(e, function (d, g, b) {
              o(d, g, b) && u.push(d);
            }),
            u
          );
        }
        function ut(e, o, u, d, g) {
          var b = -1,
            C = e.length;
          for (u || (u = Im), g || (g = []); ++b < C; ) {
            var O = e[b];
            o > 0 && u(O)
              ? o > 1
                ? ut(O, o - 1, u, d, g)
                : Mn(g, O)
              : d || (g[g.length] = O);
          }
          return g;
        }
        var Xa = _c(),
          ec = _c(!0);
        function cn(e, o) {
          return e && Xa(e, o, at);
        }
        function Za(e, o) {
          return e && ec(e, o, at);
        }
        function di(e, o) {
          return Ln(o, function (u) {
            return _n(e[u]);
          });
        }
        function sr(e, o) {
          o = Un(o, e);
          for (var u = 0, d = o.length; e != null && u < d; ) e = e[dn(o[u++])];
          return u && u == d ? e : r;
        }
        function tc(e, o, u) {
          var d = o(e);
          return be(e) ? d : Mn(d, u(e));
        }
        function bt(e) {
          return e == null
            ? e === r
              ? ln
              : J
            : rr && rr in We(e)
            ? Om(e)
            : Bm(e);
        }
        function Qa(e, o) {
          return e > o;
        }
        function zv(e, o) {
          return e != null && Ve.call(e, o);
        }
        function Gv(e, o) {
          return e != null && o in We(e);
        }
        function Kv(e, o, u) {
          return e >= ft(o, u) && e < rt(o, u);
        }
        function es(e, o, u) {
          for (
            var d = u ? $a : Ko,
              g = e[0].length,
              b = e.length,
              C = b,
              O = M(b),
              T = 1 / 0,
              H = [];
            C--;

          ) {
            var j = e[C];
            C && o && (j = Ke(j, Ft(o))),
              (T = ft(j.length, T)),
              (O[C] =
                !u && (o || (g >= 120 && j.length >= 120))
                  ? new ir(C && j)
                  : r);
          }
          j = e[0];
          var W = -1,
            Z = O[0];
          e: for (; ++W < g && H.length < T; ) {
            var ne = j[W],
              le = o ? o(ne) : ne;
            if (
              ((ne = u || ne !== 0 ? ne : 0), !(Z ? no(Z, le) : d(H, le, u)))
            ) {
              for (C = b; --C; ) {
                var we = O[C];
                if (!(we ? no(we, le) : d(e[C], le, u))) continue e;
              }
              Z && Z.push(le), H.push(ne);
            }
          }
          return H;
        }
        function qv(e, o, u, d) {
          return (
            cn(e, function (g, b, C) {
              o(d, u(g), b, C);
            }),
            d
          );
        }
        function co(e, o, u) {
          (o = Un(o, e)), (e = Hc(e, o));
          var d = e == null ? e : e[dn(Kt(o))];
          return d == null ? r : It(d, e, u);
        }
        function nc(e) {
          return Xe(e) && bt(e) == Ae;
        }
        function Jv(e) {
          return Xe(e) && bt(e) == nn;
        }
        function Yv(e) {
          return Xe(e) && bt(e) == He;
        }
        function fo(e, o, u, d, g) {
          return e === o
            ? !0
            : e == null || o == null || (!Xe(e) && !Xe(o))
            ? e !== e && o !== o
            : Xv(e, o, u, d, fo, g);
        }
        function Xv(e, o, u, d, g, b) {
          var C = be(e),
            O = be(o),
            T = C ? Le : dt(e),
            H = O ? Le : dt(o);
          (T = T == Ae ? z : T), (H = H == Ae ? z : H);
          var j = T == z,
            W = H == z,
            Z = T == H;
          if (Z && Hn(e)) {
            if (!Hn(o)) return !1;
            (C = !0), (j = !1);
          }
          if (Z && !j)
            return (
              b || (b = new an()),
              C || Mr(e) ? Mc(e, o, u, d, g, b) : Cm(e, o, T, u, d, g, b)
            );
          if (!(u & y)) {
            var ne = j && Ve.call(e, "__wrapped__"),
              le = W && Ve.call(o, "__wrapped__");
            if (ne || le) {
              var we = ne ? e.value() : e,
                ce = le ? o.value() : o;
              return b || (b = new an()), g(we, ce, u, d, b);
            }
          }
          return Z ? (b || (b = new an()), _m(e, o, u, d, g, b)) : !1;
        }
        function Zv(e) {
          return Xe(e) && dt(e) == Ye;
        }
        function ts(e, o, u, d) {
          var g = u.length,
            b = g,
            C = !d;
          if (e == null) return !b;
          for (e = We(e); g--; ) {
            var O = u[g];
            if (C && O[2] ? O[1] !== e[O[0]] : !(O[0] in e)) return !1;
          }
          for (; ++g < b; ) {
            O = u[g];
            var T = O[0],
              H = e[T],
              j = O[1];
            if (C && O[2]) {
              if (H === r && !(T in e)) return !1;
            } else {
              var W = new an();
              if (d) var Z = d(H, j, T, e, o, W);
              if (!(Z === r ? fo(j, H, y | S, d, W) : Z)) return !1;
            }
          }
          return !0;
        }
        function rc(e) {
          if (!Je(e) || Lm(e)) return !1;
          var o = _n(e) ? Zg : Oa;
          return o.test(lr(e));
        }
        function Qv(e) {
          return Xe(e) && bt(e) == ie;
        }
        function em(e) {
          return Xe(e) && dt(e) == fe;
        }
        function tm(e) {
          return Xe(e) && Di(e.length) && !!Ge[bt(e)];
        }
        function oc(e) {
          return typeof e == "function"
            ? e
            : e == null
            ? Ct
            : typeof e == "object"
            ? be(e)
              ? sc(e[0], e[1])
              : ac(e)
            : Pf(e);
        }
        function ns(e) {
          if (!go(e)) return ov(e);
          var o = [];
          for (var u in We(e)) Ve.call(e, u) && u != "constructor" && o.push(u);
          return o;
        }
        function nm(e) {
          if (!Je(e)) return Nm(e);
          var o = go(e),
            u = [];
          for (var d in e)
            (d == "constructor" && (o || !Ve.call(e, d))) || u.push(d);
          return u;
        }
        function rs(e, o) {
          return e < o;
        }
        function ic(e, o) {
          var u = -1,
            d = wt(e) ? M(e.length) : [];
          return (
            Nn(e, function (g, b, C) {
              d[++u] = o(g, b, C);
            }),
            d
          );
        }
        function ac(e) {
          var o = bs(e);
          return o.length == 1 && o[0][2]
            ? Uc(o[0][0], o[0][1])
            : function (u) {
                return u === e || ts(u, e, o);
              };
        }
        function sc(e, o) {
          return ys(e) && Bc(o)
            ? Uc(dn(e), o)
            : function (u) {
                var d = Rs(u, e);
                return d === r && d === o ? Ts(u, e) : fo(o, d, y | S);
              };
        }
        function pi(e, o, u, d, g) {
          e !== o &&
            Xa(
              o,
              function (b, C) {
                if ((g || (g = new an()), Je(b))) rm(e, o, C, u, pi, d, g);
                else {
                  var O = d ? d(ws(e, C), b, C + "", e, o, g) : r;
                  O === r && (O = b), Ja(e, C, O);
                }
              },
              St
            );
        }
        function rm(e, o, u, d, g, b, C) {
          var O = ws(e, u),
            T = ws(o, u),
            H = C.get(T);
          if (H) {
            Ja(e, u, H);
            return;
          }
          var j = b ? b(O, T, u + "", e, o, C) : r,
            W = j === r;
          if (W) {
            var Z = be(T),
              ne = !Z && Hn(T),
              le = !Z && !ne && Mr(T);
            (j = T),
              Z || ne || le
                ? be(O)
                  ? (j = O)
                  : Ze(O)
                  ? (j = Et(O))
                  : ne
                  ? ((W = !1), (j = xc(T, !0)))
                  : le
                  ? ((W = !1), (j = yc(T, !0)))
                  : (j = [])
                : mo(T) || cr(T)
                ? ((j = O),
                  cr(O) ? (j = mf(O)) : (!Je(O) || _n(O)) && (j = Nc(T)))
                : (W = !1);
          }
          W && (C.set(T, j), g(j, T, d, b, C), C.delete(T)), Ja(e, u, j);
        }
        function uc(e, o) {
          var u = e.length;
          if (!!u) return (o += o < 0 ? u : 0), Cn(o, u) ? e[o] : r;
        }
        function lc(e, o, u) {
          o.length
            ? (o = Ke(o, function (b) {
                return be(b)
                  ? function (C) {
                      return sr(C, b.length === 1 ? b[0] : b);
                    }
                  : b;
              }))
            : (o = [Ct]);
          var d = -1;
          o = Ke(o, Ft(se()));
          var g = ic(e, function (b, C, O) {
            var T = Ke(o, function (H) {
              return H(b);
            });
            return { criteria: T, index: ++d, value: b };
          });
          return Rg(g, function (b, C) {
            return vm(b, C, u);
          });
        }
        function om(e, o) {
          return cc(e, o, function (u, d) {
            return Ts(e, d);
          });
        }
        function cc(e, o, u) {
          for (var d = -1, g = o.length, b = {}; ++d < g; ) {
            var C = o[d],
              O = sr(e, C);
            u(O, C) && po(b, Un(C, e), O);
          }
          return b;
        }
        function im(e) {
          return function (o) {
            return sr(o, e);
          };
        }
        function os(e, o, u, d) {
          var g = d ? Dg : Cr,
            b = -1,
            C = o.length,
            O = e;
          for (e === o && (o = Et(o)), u && (O = Ke(e, Ft(u))); ++b < C; )
            for (
              var T = 0, H = o[b], j = u ? u(H) : H;
              (T = g(O, j, T, d)) > -1;

            )
              O !== e && ri.call(O, T, 1), ri.call(e, T, 1);
          return e;
        }
        function fc(e, o) {
          for (var u = e ? o.length : 0, d = u - 1; u--; ) {
            var g = o[u];
            if (u == d || g !== b) {
              var b = g;
              Cn(g) ? ri.call(e, g, 1) : us(e, g);
            }
          }
          return e;
        }
        function is(e, o) {
          return e + ai(zl() * (o - e + 1));
        }
        function am(e, o, u, d) {
          for (var g = -1, b = rt(ii((o - e) / (u || 1)), 0), C = M(b); b--; )
            (C[d ? b : ++g] = e), (e += u);
          return C;
        }
        function as(e, o) {
          var u = "";
          if (!e || o < 1 || o > ve) return u;
          do o % 2 && (u += e), (o = ai(o / 2)), o && (e += e);
          while (o);
          return u;
        }
        function Se(e, o) {
          return Ss(Vc(e, o, Ct), e + "");
        }
        function sm(e) {
          return ql($r(e));
        }
        function um(e, o) {
          var u = $r(e);
          return Si(u, ar(o, 0, u.length));
        }
        function po(e, o, u, d) {
          if (!Je(e)) return e;
          o = Un(o, e);
          for (
            var g = -1, b = o.length, C = b - 1, O = e;
            O != null && ++g < b;

          ) {
            var T = dn(o[g]),
              H = u;
            if (T === "__proto__" || T === "constructor" || T === "prototype")
              return e;
            if (g != C) {
              var j = O[T];
              (H = d ? d(j, T, O) : r),
                H === r && (H = Je(j) ? j : Cn(o[g + 1]) ? [] : {});
            }
            uo(O, T, H), (O = O[T]);
          }
          return e;
        }
        var dc = si
            ? function (e, o) {
                return si.set(e, o), e;
              }
            : Ct,
          lm = oi
            ? function (e, o) {
                return oi(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Fs(o),
                  writable: !0,
                });
              }
            : Ct;
        function cm(e) {
          return Si($r(e));
        }
        function Gt(e, o, u) {
          var d = -1,
            g = e.length;
          o < 0 && (o = -o > g ? 0 : g + o),
            (u = u > g ? g : u),
            u < 0 && (u += g),
            (g = o > u ? 0 : (u - o) >>> 0),
            (o >>>= 0);
          for (var b = M(g); ++d < g; ) b[d] = e[d + o];
          return b;
        }
        function fm(e, o) {
          var u;
          return (
            Nn(e, function (d, g, b) {
              return (u = o(d, g, b)), !u;
            }),
            !!u
          );
        }
        function hi(e, o, u) {
          var d = 0,
            g = e == null ? d : e.length;
          if (typeof o == "number" && o === o && g <= ke) {
            for (; d < g; ) {
              var b = (d + g) >>> 1,
                C = e[b];
              C !== null && !Mt(C) && (u ? C <= o : C < o)
                ? (d = b + 1)
                : (g = b);
            }
            return g;
          }
          return ss(e, o, Ct, u);
        }
        function ss(e, o, u, d) {
          var g = 0,
            b = e == null ? 0 : e.length;
          if (b === 0) return 0;
          o = u(o);
          for (
            var C = o !== o, O = o === null, T = Mt(o), H = o === r;
            g < b;

          ) {
            var j = ai((g + b) / 2),
              W = u(e[j]),
              Z = W !== r,
              ne = W === null,
              le = W === W,
              we = Mt(W);
            if (C) var ce = d || le;
            else
              H
                ? (ce = le && (d || Z))
                : O
                ? (ce = le && Z && (d || !ne))
                : T
                ? (ce = le && Z && !ne && (d || !we))
                : ne || we
                ? (ce = !1)
                : (ce = d ? W <= o : W < o);
            ce ? (g = j + 1) : (b = j);
          }
          return ft(b, Re);
        }
        function pc(e, o) {
          for (var u = -1, d = e.length, g = 0, b = []; ++u < d; ) {
            var C = e[u],
              O = o ? o(C) : C;
            if (!u || !sn(O, T)) {
              var T = O;
              b[g++] = C === 0 ? 0 : C;
            }
          }
          return b;
        }
        function hc(e) {
          return typeof e == "number" ? e : Mt(e) ? Ie : +e;
        }
        function Lt(e) {
          if (typeof e == "string") return e;
          if (be(e)) return Ke(e, Lt) + "";
          if (Mt(e)) return Gl ? Gl.call(e) : "";
          var o = e + "";
          return o == "0" && 1 / e == -re ? "-0" : o;
        }
        function Bn(e, o, u) {
          var d = -1,
            g = Ko,
            b = e.length,
            C = !0,
            O = [],
            T = O;
          if (u) (C = !1), (g = $a);
          else if (b >= a) {
            var H = o ? null : wm(e);
            if (H) return Jo(H);
            (C = !1), (g = no), (T = new ir());
          } else T = o ? [] : O;
          e: for (; ++d < b; ) {
            var j = e[d],
              W = o ? o(j) : j;
            if (((j = u || j !== 0 ? j : 0), C && W === W)) {
              for (var Z = T.length; Z--; ) if (T[Z] === W) continue e;
              o && T.push(W), O.push(j);
            } else g(T, W, u) || (T !== O && T.push(W), O.push(j));
          }
          return O;
        }
        function us(e, o) {
          return (
            (o = Un(o, e)), (e = Hc(e, o)), e == null || delete e[dn(Kt(o))]
          );
        }
        function gc(e, o, u, d) {
          return po(e, o, u(sr(e, o)), d);
        }
        function gi(e, o, u, d) {
          for (
            var g = e.length, b = d ? g : -1;
            (d ? b-- : ++b < g) && o(e[b], b, e);

          );
          return u
            ? Gt(e, d ? 0 : b, d ? b + 1 : g)
            : Gt(e, d ? b + 1 : 0, d ? g : b);
        }
        function vc(e, o) {
          var u = e;
          return (
            u instanceof Pe && (u = u.value()),
            ka(
              o,
              function (d, g) {
                return g.func.apply(g.thisArg, Mn([d], g.args));
              },
              u
            )
          );
        }
        function ls(e, o, u) {
          var d = e.length;
          if (d < 2) return d ? Bn(e[0]) : [];
          for (var g = -1, b = M(d); ++g < d; )
            for (var C = e[g], O = -1; ++O < d; )
              O != g && (b[g] = lo(b[g] || C, e[O], o, u));
          return Bn(ut(b, 1), o, u);
        }
        function mc(e, o, u) {
          for (var d = -1, g = e.length, b = o.length, C = {}; ++d < g; ) {
            var O = d < b ? o[d] : r;
            u(C, e[d], O);
          }
          return C;
        }
        function cs(e) {
          return Ze(e) ? e : [];
        }
        function fs(e) {
          return typeof e == "function" ? e : Ct;
        }
        function Un(e, o) {
          return be(e) ? e : ys(e, o) ? [e] : Gc(Ue(e));
        }
        var dm = Se;
        function Vn(e, o, u) {
          var d = e.length;
          return (u = u === r ? d : u), !o && u >= d ? e : Gt(e, o, u);
        }
        var bc =
          Qg ||
          function (e) {
            return st.clearTimeout(e);
          };
        function xc(e, o) {
          if (o) return e.slice();
          var u = e.length,
            d = Ul ? Ul(u) : new e.constructor(u);
          return e.copy(d), d;
        }
        function ds(e) {
          var o = new e.constructor(e.byteLength);
          return new ti(o).set(new ti(e)), o;
        }
        function pm(e, o) {
          var u = o ? ds(e.buffer) : e.buffer;
          return new e.constructor(u, e.byteOffset, e.byteLength);
        }
        function hm(e) {
          var o = new e.constructor(e.source, to.exec(e));
          return (o.lastIndex = e.lastIndex), o;
        }
        function gm(e) {
          return so ? We(so.call(e)) : {};
        }
        function yc(e, o) {
          var u = o ? ds(e.buffer) : e.buffer;
          return new e.constructor(u, e.byteOffset, e.length);
        }
        function Ec(e, o) {
          if (e !== o) {
            var u = e !== r,
              d = e === null,
              g = e === e,
              b = Mt(e),
              C = o !== r,
              O = o === null,
              T = o === o,
              H = Mt(o);
            if (
              (!O && !H && !b && e > o) ||
              (b && C && T && !O && !H) ||
              (d && C && T) ||
              (!u && T) ||
              !g
            )
              return 1;
            if (
              (!d && !b && !H && e < o) ||
              (H && u && g && !d && !b) ||
              (O && u && g) ||
              (!C && g) ||
              !T
            )
              return -1;
          }
          return 0;
        }
        function vm(e, o, u) {
          for (
            var d = -1,
              g = e.criteria,
              b = o.criteria,
              C = g.length,
              O = u.length;
            ++d < C;

          ) {
            var T = Ec(g[d], b[d]);
            if (T) {
              if (d >= O) return T;
              var H = u[d];
              return T * (H == "desc" ? -1 : 1);
            }
          }
          return e.index - o.index;
        }
        function wc(e, o, u, d) {
          for (
            var g = -1,
              b = e.length,
              C = u.length,
              O = -1,
              T = o.length,
              H = rt(b - C, 0),
              j = M(T + H),
              W = !d;
            ++O < T;

          )
            j[O] = o[O];
          for (; ++g < C; ) (W || g < b) && (j[u[g]] = e[g]);
          for (; H--; ) j[O++] = e[g++];
          return j;
        }
        function Sc(e, o, u, d) {
          for (
            var g = -1,
              b = e.length,
              C = -1,
              O = u.length,
              T = -1,
              H = o.length,
              j = rt(b - O, 0),
              W = M(j + H),
              Z = !d;
            ++g < j;

          )
            W[g] = e[g];
          for (var ne = g; ++T < H; ) W[ne + T] = o[T];
          for (; ++C < O; ) (Z || g < b) && (W[ne + u[C]] = e[g++]);
          return W;
        }
        function Et(e, o) {
          var u = -1,
            d = e.length;
          for (o || (o = M(d)); ++u < d; ) o[u] = e[u];
          return o;
        }
        function fn(e, o, u, d) {
          var g = !u;
          u || (u = {});
          for (var b = -1, C = o.length; ++b < C; ) {
            var O = o[b],
              T = d ? d(u[O], e[O], O, u, e) : r;
            T === r && (T = e[O]), g ? En(u, O, T) : uo(u, O, T);
          }
          return u;
        }
        function mm(e, o) {
          return fn(e, xs(e), o);
        }
        function bm(e, o) {
          return fn(e, $c(e), o);
        }
        function vi(e, o) {
          return function (u, d) {
            var g = be(u) ? Sg : Uv,
              b = o ? o() : {};
            return g(u, e, se(d, 2), b);
          };
        }
        function Ir(e) {
          return Se(function (o, u) {
            var d = -1,
              g = u.length,
              b = g > 1 ? u[g - 1] : r,
              C = g > 2 ? u[2] : r;
            for (
              b = e.length > 3 && typeof b == "function" ? (g--, b) : r,
                C && xt(u[0], u[1], C) && ((b = g < 3 ? r : b), (g = 1)),
                o = We(o);
              ++d < g;

            ) {
              var O = u[d];
              O && e(o, O, d, b);
            }
            return o;
          });
        }
        function Cc(e, o) {
          return function (u, d) {
            if (u == null) return u;
            if (!wt(u)) return e(u, d);
            for (
              var g = u.length, b = o ? g : -1, C = We(u);
              (o ? b-- : ++b < g) && d(C[b], b, C) !== !1;

            );
            return u;
          };
        }
        function _c(e) {
          return function (o, u, d) {
            for (var g = -1, b = We(o), C = d(o), O = C.length; O--; ) {
              var T = C[e ? O : ++g];
              if (u(b[T], T, b) === !1) break;
            }
            return o;
          };
        }
        function xm(e, o, u) {
          var d = o & _,
            g = ho(e);
          function b() {
            var C = this && this !== st && this instanceof b ? g : e;
            return C.apply(d ? u : this, arguments);
          }
          return b;
        }
        function Oc(e) {
          return function (o) {
            o = Ue(o);
            var u = _r(o) ? on(o) : r,
              d = u ? u[0] : o.charAt(0),
              g = u ? Vn(u, 1).join("") : o.slice(1);
            return d[e]() + g;
          };
        }
        function Fr(e) {
          return function (o) {
            return ka(_f(Cf(o).replace(lg, "")), e, "");
          };
        }
        function ho(e) {
          return function () {
            var o = arguments;
            switch (o.length) {
              case 0:
                return new e();
              case 1:
                return new e(o[0]);
              case 2:
                return new e(o[0], o[1]);
              case 3:
                return new e(o[0], o[1], o[2]);
              case 4:
                return new e(o[0], o[1], o[2], o[3]);
              case 5:
                return new e(o[0], o[1], o[2], o[3], o[4]);
              case 6:
                return new e(o[0], o[1], o[2], o[3], o[4], o[5]);
              case 7:
                return new e(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
            }
            var u = Tr(e.prototype),
              d = e.apply(u, o);
            return Je(d) ? d : u;
          };
        }
        function ym(e, o, u) {
          var d = ho(e);
          function g() {
            for (var b = arguments.length, C = M(b), O = b, T = Lr(g); O--; )
              C[O] = arguments[O];
            var H = b < 3 && C[0] !== T && C[b - 1] !== T ? [] : $n(C, T);
            if (((b -= H.length), b < u))
              return Tc(e, o, mi, g.placeholder, r, C, H, r, r, u - b);
            var j = this && this !== st && this instanceof g ? d : e;
            return It(j, this, C);
          }
          return g;
        }
        function Pc(e) {
          return function (o, u, d) {
            var g = We(o);
            if (!wt(o)) {
              var b = se(u, 3);
              (o = at(o)),
                (u = function (O) {
                  return b(g[O], O, g);
                });
            }
            var C = e(o, u, d);
            return C > -1 ? g[b ? o[C] : C] : r;
          };
        }
        function Ac(e) {
          return Sn(function (o) {
            var u = o.length,
              d = u,
              g = Wt.prototype.thru;
            for (e && o.reverse(); d--; ) {
              var b = o[d];
              if (typeof b != "function") throw new jt(l);
              if (g && !C && Ei(b) == "wrapper") var C = new Wt([], !0);
            }
            for (d = C ? d : u; ++d < u; ) {
              b = o[d];
              var O = Ei(b),
                T = O == "wrapper" ? ms(b) : r;
              T &&
              Es(T[0]) &&
              T[1] == (L | F | I | V) &&
              !T[4].length &&
              T[9] == 1
                ? (C = C[Ei(T[0])].apply(C, T[3]))
                : (C = b.length == 1 && Es(b) ? C[O]() : C.thru(b));
            }
            return function () {
              var H = arguments,
                j = H[0];
              if (C && H.length == 1 && be(j)) return C.plant(j).value();
              for (var W = 0, Z = u ? o[W].apply(this, H) : j; ++W < u; )
                Z = o[W].call(this, Z);
              return Z;
            };
          });
        }
        function mi(e, o, u, d, g, b, C, O, T, H) {
          var j = o & L,
            W = o & _,
            Z = o & A,
            ne = o & (F | R),
            le = o & U,
            we = Z ? r : ho(e);
          function ce() {
            for (var Oe = arguments.length, De = M(Oe), $t = Oe; $t--; )
              De[$t] = arguments[$t];
            if (ne)
              var yt = Lr(ce),
                kt = Ig(De, yt);
            if (
              (d && (De = wc(De, d, g, ne)),
              b && (De = Sc(De, b, C, ne)),
              (Oe -= kt),
              ne && Oe < H)
            ) {
              var Qe = $n(De, yt);
              return Tc(e, o, mi, ce.placeholder, u, De, Qe, O, T, H - Oe);
            }
            var un = W ? u : this,
              Pn = Z ? un[e] : e;
            return (
              (Oe = De.length),
              O ? (De = Um(De, O)) : le && Oe > 1 && De.reverse(),
              j && T < Oe && (De.length = T),
              this && this !== st && this instanceof ce && (Pn = we || ho(Pn)),
              Pn.apply(un, De)
            );
          }
          return ce;
        }
        function Dc(e, o) {
          return function (u, d) {
            return qv(u, e, o(d), {});
          };
        }
        function bi(e, o) {
          return function (u, d) {
            var g;
            if (u === r && d === r) return o;
            if ((u !== r && (g = u), d !== r)) {
              if (g === r) return d;
              typeof u == "string" || typeof d == "string"
                ? ((u = Lt(u)), (d = Lt(d)))
                : ((u = hc(u)), (d = hc(d))),
                (g = e(u, d));
            }
            return g;
          };
        }
        function ps(e) {
          return Sn(function (o) {
            return (
              (o = Ke(o, Ft(se()))),
              Se(function (u) {
                var d = this;
                return e(o, function (g) {
                  return It(g, d, u);
                });
              })
            );
          });
        }
        function xi(e, o) {
          o = o === r ? " " : Lt(o);
          var u = o.length;
          if (u < 2) return u ? as(o, e) : o;
          var d = as(o, ii(e / Or(o)));
          return _r(o) ? Vn(on(d), 0, e).join("") : d.slice(0, e);
        }
        function Em(e, o, u, d) {
          var g = o & _,
            b = ho(e);
          function C() {
            for (
              var O = -1,
                T = arguments.length,
                H = -1,
                j = d.length,
                W = M(j + T),
                Z = this && this !== st && this instanceof C ? b : e;
              ++H < j;

            )
              W[H] = d[H];
            for (; T--; ) W[H++] = arguments[++O];
            return It(Z, g ? u : this, W);
          }
          return C;
        }
        function Rc(e) {
          return function (o, u, d) {
            return (
              d && typeof d != "number" && xt(o, u, d) && (u = d = r),
              (o = On(o)),
              u === r ? ((u = o), (o = 0)) : (u = On(u)),
              (d = d === r ? (o < u ? 1 : -1) : On(d)),
              am(o, u, d, e)
            );
          };
        }
        function yi(e) {
          return function (o, u) {
            return (
              (typeof o == "string" && typeof u == "string") ||
                ((o = qt(o)), (u = qt(u))),
              e(o, u)
            );
          };
        }
        function Tc(e, o, u, d, g, b, C, O, T, H) {
          var j = o & F,
            W = j ? C : r,
            Z = j ? r : C,
            ne = j ? b : r,
            le = j ? r : b;
          (o |= j ? I : $), (o &= ~(j ? $ : I)), o & P || (o &= ~(_ | A));
          var we = [e, o, g, ne, W, le, Z, O, T, H],
            ce = u.apply(r, we);
          return Es(e) && jc(ce, we), (ce.placeholder = d), Wc(ce, e, o);
        }
        function hs(e) {
          var o = nt[e];
          return function (u, d) {
            if (
              ((u = qt(u)), (d = d == null ? 0 : ft(Ee(d), 292)), d && Wl(u))
            ) {
              var g = (Ue(u) + "e").split("e"),
                b = o(g[0] + "e" + (+g[1] + d));
              return (
                (g = (Ue(b) + "e").split("e")), +(g[0] + "e" + (+g[1] - d))
              );
            }
            return o(u);
          };
        }
        var wm =
          Dr && 1 / Jo(new Dr([, -0]))[1] == re
            ? function (e) {
                return new Dr(e);
              }
            : $s;
        function Ic(e) {
          return function (o) {
            var u = dt(o);
            return u == Ye ? Wa(o) : u == fe ? Bg(o) : Tg(o, e(o));
          };
        }
        function wn(e, o, u, d, g, b, C, O) {
          var T = o & A;
          if (!T && typeof e != "function") throw new jt(l);
          var H = d ? d.length : 0;
          if (
            (H || ((o &= ~(I | $)), (d = g = r)),
            (C = C === r ? C : rt(Ee(C), 0)),
            (O = O === r ? O : Ee(O)),
            (H -= g ? g.length : 0),
            o & $)
          ) {
            var j = d,
              W = g;
            d = g = r;
          }
          var Z = T ? r : ms(e),
            ne = [e, o, u, d, g, j, W, b, C, O];
          if (
            (Z && km(ne, Z),
            (e = ne[0]),
            (o = ne[1]),
            (u = ne[2]),
            (d = ne[3]),
            (g = ne[4]),
            (O = ne[9] = ne[9] === r ? (T ? 0 : e.length) : rt(ne[9] - H, 0)),
            !O && o & (F | R) && (o &= ~(F | R)),
            !o || o == _)
          )
            var le = xm(e, o, u);
          else
            o == F || o == R
              ? (le = ym(e, o, O))
              : (o == I || o == (_ | I)) && !g.length
              ? (le = Em(e, o, u, d))
              : (le = mi.apply(r, ne));
          var we = Z ? dc : jc;
          return Wc(we(le, ne), e, o);
        }
        function Fc(e, o, u, d) {
          return e === r || (sn(e, Ar[u]) && !Ve.call(d, u)) ? o : e;
        }
        function Lc(e, o, u, d, g, b) {
          return (
            Je(e) && Je(o) && (b.set(o, e), pi(e, o, r, Lc, b), b.delete(o)), e
          );
        }
        function Sm(e) {
          return mo(e) ? r : e;
        }
        function Mc(e, o, u, d, g, b) {
          var C = u & y,
            O = e.length,
            T = o.length;
          if (O != T && !(C && T > O)) return !1;
          var H = b.get(e),
            j = b.get(o);
          if (H && j) return H == o && j == e;
          var W = -1,
            Z = !0,
            ne = u & S ? new ir() : r;
          for (b.set(e, o), b.set(o, e); ++W < O; ) {
            var le = e[W],
              we = o[W];
            if (d) var ce = C ? d(we, le, W, o, e, b) : d(le, we, W, e, o, b);
            if (ce !== r) {
              if (ce) continue;
              Z = !1;
              break;
            }
            if (ne) {
              if (
                !Na(o, function (Oe, De) {
                  if (!no(ne, De) && (le === Oe || g(le, Oe, u, d, b)))
                    return ne.push(De);
                })
              ) {
                Z = !1;
                break;
              }
            } else if (!(le === we || g(le, we, u, d, b))) {
              Z = !1;
              break;
            }
          }
          return b.delete(e), b.delete(o), Z;
        }
        function Cm(e, o, u, d, g, b, C) {
          switch (u) {
            case rn:
              if (e.byteLength != o.byteLength || e.byteOffset != o.byteOffset)
                return !1;
              (e = e.buffer), (o = o.buffer);
            case nn:
              return !(
                e.byteLength != o.byteLength || !b(new ti(e), new ti(o))
              );
            case Te:
            case He:
            case N:
              return sn(+e, +o);
            case qe:
              return e.name == o.name && e.message == o.message;
            case ie:
            case Fe:
              return e == o + "";
            case Ye:
              var O = Wa;
            case fe:
              var T = d & y;
              if ((O || (O = Jo), e.size != o.size && !T)) return !1;
              var H = C.get(e);
              if (H) return H == o;
              (d |= S), C.set(e, o);
              var j = Mc(O(e), O(o), d, g, b, C);
              return C.delete(e), j;
            case tn:
              if (so) return so.call(e) == so.call(o);
          }
          return !1;
        }
        function _m(e, o, u, d, g, b) {
          var C = u & y,
            O = gs(e),
            T = O.length,
            H = gs(o),
            j = H.length;
          if (T != j && !C) return !1;
          for (var W = T; W--; ) {
            var Z = O[W];
            if (!(C ? Z in o : Ve.call(o, Z))) return !1;
          }
          var ne = b.get(e),
            le = b.get(o);
          if (ne && le) return ne == o && le == e;
          var we = !0;
          b.set(e, o), b.set(o, e);
          for (var ce = C; ++W < T; ) {
            Z = O[W];
            var Oe = e[Z],
              De = o[Z];
            if (d) var $t = C ? d(De, Oe, Z, o, e, b) : d(Oe, De, Z, e, o, b);
            if (!($t === r ? Oe === De || g(Oe, De, u, d, b) : $t)) {
              we = !1;
              break;
            }
            ce || (ce = Z == "constructor");
          }
          if (we && !ce) {
            var yt = e.constructor,
              kt = o.constructor;
            yt != kt &&
              "constructor" in e &&
              "constructor" in o &&
              !(
                typeof yt == "function" &&
                yt instanceof yt &&
                typeof kt == "function" &&
                kt instanceof kt
              ) &&
              (we = !1);
          }
          return b.delete(e), b.delete(o), we;
        }
        function Sn(e) {
          return Ss(Vc(e, r, Yc), e + "");
        }
        function gs(e) {
          return tc(e, at, xs);
        }
        function vs(e) {
          return tc(e, St, $c);
        }
        var ms = si
          ? function (e) {
              return si.get(e);
            }
          : $s;
        function Ei(e) {
          for (
            var o = e.name + "", u = Rr[o], d = Ve.call(Rr, o) ? u.length : 0;
            d--;

          ) {
            var g = u[d],
              b = g.func;
            if (b == null || b == e) return g.name;
          }
          return o;
        }
        function Lr(e) {
          var o = Ve.call(m, "placeholder") ? m : e;
          return o.placeholder;
        }
        function se() {
          var e = m.iteratee || Ls;
          return (
            (e = e === Ls ? oc : e),
            arguments.length ? e(arguments[0], arguments[1]) : e
          );
        }
        function wi(e, o) {
          var u = e.__data__;
          return Fm(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map;
        }
        function bs(e) {
          for (var o = at(e), u = o.length; u--; ) {
            var d = o[u],
              g = e[d];
            o[u] = [d, g, Bc(g)];
          }
          return o;
        }
        function ur(e, o) {
          var u = $g(e, o);
          return rc(u) ? u : r;
        }
        function Om(e) {
          var o = Ve.call(e, rr),
            u = e[rr];
          try {
            e[rr] = r;
            var d = !0;
          } catch {}
          var g = Qo.call(e);
          return d && (o ? (e[rr] = u) : delete e[rr]), g;
        }
        var xs = Ga
            ? function (e) {
                return e == null
                  ? []
                  : ((e = We(e)),
                    Ln(Ga(e), function (o) {
                      return Hl.call(e, o);
                    }));
              }
            : ks,
          $c = Ga
            ? function (e) {
                for (var o = []; e; ) Mn(o, xs(e)), (e = ni(e));
                return o;
              }
            : ks,
          dt = bt;
        ((Ka && dt(new Ka(new ArrayBuffer(1))) != rn) ||
          (oo && dt(new oo()) != Ye) ||
          (qa && dt(qa.resolve()) != pe) ||
          (Dr && dt(new Dr()) != fe) ||
          (io && dt(new io()) != Dt)) &&
          (dt = function (e) {
            var o = bt(e),
              u = o == z ? e.constructor : r,
              d = u ? lr(u) : "";
            if (d)
              switch (d) {
                case uv:
                  return rn;
                case lv:
                  return Ye;
                case cv:
                  return pe;
                case fv:
                  return fe;
                case dv:
                  return Dt;
              }
            return o;
          });
        function Pm(e, o, u) {
          for (var d = -1, g = u.length; ++d < g; ) {
            var b = u[d],
              C = b.size;
            switch (b.type) {
              case "drop":
                e += C;
                break;
              case "dropRight":
                o -= C;
                break;
              case "take":
                o = ft(o, e + C);
                break;
              case "takeRight":
                e = rt(e, o - C);
                break;
            }
          }
          return { start: e, end: o };
        }
        function Am(e) {
          var o = e.match(er);
          return o ? o[1].split(Ca) : [];
        }
        function kc(e, o, u) {
          o = Un(o, e);
          for (var d = -1, g = o.length, b = !1; ++d < g; ) {
            var C = dn(o[d]);
            if (!(b = e != null && u(e, C))) break;
            e = e[C];
          }
          return b || ++d != g
            ? b
            : ((g = e == null ? 0 : e.length),
              !!g && Di(g) && Cn(C, g) && (be(e) || cr(e)));
        }
        function Dm(e) {
          var o = e.length,
            u = new e.constructor(o);
          return (
            o &&
              typeof e[0] == "string" &&
              Ve.call(e, "index") &&
              ((u.index = e.index), (u.input = e.input)),
            u
          );
        }
        function Nc(e) {
          return typeof e.constructor == "function" && !go(e) ? Tr(ni(e)) : {};
        }
        function Rm(e, o, u) {
          var d = e.constructor;
          switch (o) {
            case nn:
              return ds(e);
            case Te:
            case He:
              return new d(+e);
            case rn:
              return pm(e, u);
            case yr:
            case Rt:
            case Xn:
            case mn:
            case In:
            case Er:
            case Fn:
            case Zn:
            case wr:
              return yc(e, u);
            case Ye:
              return new d();
            case N:
            case Fe:
              return new d(e);
            case ie:
              return hm(e);
            case fe:
              return new d();
            case tn:
              return gm(e);
          }
        }
        function Tm(e, o) {
          var u = o.length;
          if (!u) return e;
          var d = u - 1;
          return (
            (o[d] = (u > 1 ? "& " : "") + o[d]),
            (o = o.join(u > 2 ? ", " : " ")),
            e.replace(
              Tt,
              `{
/* [wrapped with ` +
                o +
                `] */
`
            )
          );
        }
        function Im(e) {
          return be(e) || cr(e) || !!(jl && e && e[jl]);
        }
        function Cn(e, o) {
          var u = typeof e;
          return (
            (o = o == null ? ve : o),
            !!o &&
              (u == "number" || (u != "symbol" && Aa.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < o
          );
        }
        function xt(e, o, u) {
          if (!Je(u)) return !1;
          var d = typeof o;
          return (
            d == "number" ? wt(u) && Cn(o, u.length) : d == "string" && o in u
          )
            ? sn(u[o], e)
            : !1;
        }
        function ys(e, o) {
          if (be(e)) return !1;
          var u = typeof e;
          return u == "number" ||
            u == "symbol" ||
            u == "boolean" ||
            e == null ||
            Mt(e)
            ? !0
            : Ea.test(e) || !ya.test(e) || (o != null && e in We(o));
        }
        function Fm(e) {
          var o = typeof e;
          return o == "string" ||
            o == "number" ||
            o == "symbol" ||
            o == "boolean"
            ? e !== "__proto__"
            : e === null;
        }
        function Es(e) {
          var o = Ei(e),
            u = m[o];
          if (typeof u != "function" || !(o in Pe.prototype)) return !1;
          if (e === u) return !0;
          var d = ms(u);
          return !!d && e === d[0];
        }
        function Lm(e) {
          return !!Bl && Bl in e;
        }
        var Mm = Xo ? _n : Ns;
        function go(e) {
          var o = e && e.constructor,
            u = (typeof o == "function" && o.prototype) || Ar;
          return e === u;
        }
        function Bc(e) {
          return e === e && !Je(e);
        }
        function Uc(e, o) {
          return function (u) {
            return u == null ? !1 : u[e] === o && (o !== r || e in We(u));
          };
        }
        function $m(e) {
          var o = Pi(e, function (d) {
              return u.size === p && u.clear(), d;
            }),
            u = o.cache;
          return o;
        }
        function km(e, o) {
          var u = e[1],
            d = o[1],
            g = u | d,
            b = g < (_ | A | L),
            C =
              (d == L && u == F) ||
              (d == L && u == V && e[7].length <= o[8]) ||
              (d == (L | V) && o[7].length <= o[8] && u == F);
          if (!(b || C)) return e;
          d & _ && ((e[2] = o[2]), (g |= u & _ ? 0 : P));
          var O = o[3];
          if (O) {
            var T = e[3];
            (e[3] = T ? wc(T, O, o[4]) : O), (e[4] = T ? $n(e[3], h) : o[4]);
          }
          return (
            (O = o[5]),
            O &&
              ((T = e[5]),
              (e[5] = T ? Sc(T, O, o[6]) : O),
              (e[6] = T ? $n(e[5], h) : o[6])),
            (O = o[7]),
            O && (e[7] = O),
            d & L && (e[8] = e[8] == null ? o[8] : ft(e[8], o[8])),
            e[9] == null && (e[9] = o[9]),
            (e[0] = o[0]),
            (e[1] = g),
            e
          );
        }
        function Nm(e) {
          var o = [];
          if (e != null) for (var u in We(e)) o.push(u);
          return o;
        }
        function Bm(e) {
          return Qo.call(e);
        }
        function Vc(e, o, u) {
          return (
            (o = rt(o === r ? e.length - 1 : o, 0)),
            function () {
              for (
                var d = arguments, g = -1, b = rt(d.length - o, 0), C = M(b);
                ++g < b;

              )
                C[g] = d[o + g];
              g = -1;
              for (var O = M(o + 1); ++g < o; ) O[g] = d[g];
              return (O[o] = u(C)), It(e, this, O);
            }
          );
        }
        function Hc(e, o) {
          return o.length < 2 ? e : sr(e, Gt(o, 0, -1));
        }
        function Um(e, o) {
          for (var u = e.length, d = ft(o.length, u), g = Et(e); d--; ) {
            var b = o[d];
            e[d] = Cn(b, u) ? g[b] : r;
          }
          return e;
        }
        function ws(e, o) {
          if (
            !(o === "constructor" && typeof e[o] == "function") &&
            o != "__proto__"
          )
            return e[o];
        }
        var jc = zc(dc),
          vo =
            tv ||
            function (e, o) {
              return st.setTimeout(e, o);
            },
          Ss = zc(lm);
        function Wc(e, o, u) {
          var d = o + "";
          return Ss(e, Tm(d, Vm(Am(d), u)));
        }
        function zc(e) {
          var o = 0,
            u = 0;
          return function () {
            var d = iv(),
              g = G - (d - u);
            if (((u = d), g > 0)) {
              if (++o >= Y) return arguments[0];
            } else o = 0;
            return e.apply(r, arguments);
          };
        }
        function Si(e, o) {
          var u = -1,
            d = e.length,
            g = d - 1;
          for (o = o === r ? d : o; ++u < o; ) {
            var b = is(u, g),
              C = e[b];
            (e[b] = e[u]), (e[u] = C);
          }
          return (e.length = o), e;
        }
        var Gc = $m(function (e) {
          var o = [];
          return (
            e.charCodeAt(0) === 46 && o.push(""),
            e.replace(wa, function (u, d, g, b) {
              o.push(g ? b.replace(Ho, "$1") : d || u);
            }),
            o
          );
        });
        function dn(e) {
          if (typeof e == "string" || Mt(e)) return e;
          var o = e + "";
          return o == "0" && 1 / e == -re ? "-0" : o;
        }
        function lr(e) {
          if (e != null) {
            try {
              return Zo.call(e);
            } catch {}
            try {
              return e + "";
            } catch {}
          }
          return "";
        }
        function Vm(e, o) {
          return (
            Ht(Ne, function (u) {
              var d = "_." + u[0];
              o & u[1] && !Ko(e, d) && e.push(d);
            }),
            e.sort()
          );
        }
        function Kc(e) {
          if (e instanceof Pe) return e.clone();
          var o = new Wt(e.__wrapped__, e.__chain__);
          return (
            (o.__actions__ = Et(e.__actions__)),
            (o.__index__ = e.__index__),
            (o.__values__ = e.__values__),
            o
          );
        }
        function Hm(e, o, u) {
          (u ? xt(e, o, u) : o === r) ? (o = 1) : (o = rt(Ee(o), 0));
          var d = e == null ? 0 : e.length;
          if (!d || o < 1) return [];
          for (var g = 0, b = 0, C = M(ii(d / o)); g < d; )
            C[b++] = Gt(e, g, (g += o));
          return C;
        }
        function jm(e) {
          for (
            var o = -1, u = e == null ? 0 : e.length, d = 0, g = [];
            ++o < u;

          ) {
            var b = e[o];
            b && (g[d++] = b);
          }
          return g;
        }
        function Wm() {
          var e = arguments.length;
          if (!e) return [];
          for (var o = M(e - 1), u = arguments[0], d = e; d--; )
            o[d - 1] = arguments[d];
          return Mn(be(u) ? Et(u) : [u], ut(o, 1));
        }
        var zm = Se(function (e, o) {
            return Ze(e) ? lo(e, ut(o, 1, Ze, !0)) : [];
          }),
          Gm = Se(function (e, o) {
            var u = Kt(o);
            return (
              Ze(u) && (u = r), Ze(e) ? lo(e, ut(o, 1, Ze, !0), se(u, 2)) : []
            );
          }),
          Km = Se(function (e, o) {
            var u = Kt(o);
            return Ze(u) && (u = r), Ze(e) ? lo(e, ut(o, 1, Ze, !0), r, u) : [];
          });
        function qm(e, o, u) {
          var d = e == null ? 0 : e.length;
          return d
            ? ((o = u || o === r ? 1 : Ee(o)), Gt(e, o < 0 ? 0 : o, d))
            : [];
        }
        function Jm(e, o, u) {
          var d = e == null ? 0 : e.length;
          return d
            ? ((o = u || o === r ? 1 : Ee(o)),
              (o = d - o),
              Gt(e, 0, o < 0 ? 0 : o))
            : [];
        }
        function Ym(e, o) {
          return e && e.length ? gi(e, se(o, 3), !0, !0) : [];
        }
        function Xm(e, o) {
          return e && e.length ? gi(e, se(o, 3), !0) : [];
        }
        function Zm(e, o, u, d) {
          var g = e == null ? 0 : e.length;
          return g
            ? (u && typeof u != "number" && xt(e, o, u) && ((u = 0), (d = g)),
              Wv(e, o, u, d))
            : [];
        }
        function qc(e, o, u) {
          var d = e == null ? 0 : e.length;
          if (!d) return -1;
          var g = u == null ? 0 : Ee(u);
          return g < 0 && (g = rt(d + g, 0)), qo(e, se(o, 3), g);
        }
        function Jc(e, o, u) {
          var d = e == null ? 0 : e.length;
          if (!d) return -1;
          var g = d - 1;
          return (
            u !== r && ((g = Ee(u)), (g = u < 0 ? rt(d + g, 0) : ft(g, d - 1))),
            qo(e, se(o, 3), g, !0)
          );
        }
        function Yc(e) {
          var o = e == null ? 0 : e.length;
          return o ? ut(e, 1) : [];
        }
        function Qm(e) {
          var o = e == null ? 0 : e.length;
          return o ? ut(e, re) : [];
        }
        function e0(e, o) {
          var u = e == null ? 0 : e.length;
          return u ? ((o = o === r ? 1 : Ee(o)), ut(e, o)) : [];
        }
        function t0(e) {
          for (var o = -1, u = e == null ? 0 : e.length, d = {}; ++o < u; ) {
            var g = e[o];
            d[g[0]] = g[1];
          }
          return d;
        }
        function Xc(e) {
          return e && e.length ? e[0] : r;
        }
        function n0(e, o, u) {
          var d = e == null ? 0 : e.length;
          if (!d) return -1;
          var g = u == null ? 0 : Ee(u);
          return g < 0 && (g = rt(d + g, 0)), Cr(e, o, g);
        }
        function r0(e) {
          var o = e == null ? 0 : e.length;
          return o ? Gt(e, 0, -1) : [];
        }
        var o0 = Se(function (e) {
            var o = Ke(e, cs);
            return o.length && o[0] === e[0] ? es(o) : [];
          }),
          i0 = Se(function (e) {
            var o = Kt(e),
              u = Ke(e, cs);
            return (
              o === Kt(u) ? (o = r) : u.pop(),
              u.length && u[0] === e[0] ? es(u, se(o, 2)) : []
            );
          }),
          a0 = Se(function (e) {
            var o = Kt(e),
              u = Ke(e, cs);
            return (
              (o = typeof o == "function" ? o : r),
              o && u.pop(),
              u.length && u[0] === e[0] ? es(u, r, o) : []
            );
          });
        function s0(e, o) {
          return e == null ? "" : rv.call(e, o);
        }
        function Kt(e) {
          var o = e == null ? 0 : e.length;
          return o ? e[o - 1] : r;
        }
        function u0(e, o, u) {
          var d = e == null ? 0 : e.length;
          if (!d) return -1;
          var g = d;
          return (
            u !== r && ((g = Ee(u)), (g = g < 0 ? rt(d + g, 0) : ft(g, d - 1))),
            o === o ? Vg(e, o, g) : qo(e, Tl, g, !0)
          );
        }
        function l0(e, o) {
          return e && e.length ? uc(e, Ee(o)) : r;
        }
        var c0 = Se(Zc);
        function Zc(e, o) {
          return e && e.length && o && o.length ? os(e, o) : e;
        }
        function f0(e, o, u) {
          return e && e.length && o && o.length ? os(e, o, se(u, 2)) : e;
        }
        function d0(e, o, u) {
          return e && e.length && o && o.length ? os(e, o, r, u) : e;
        }
        var p0 = Sn(function (e, o) {
          var u = e == null ? 0 : e.length,
            d = Ya(e, o);
          return (
            fc(
              e,
              Ke(o, function (g) {
                return Cn(g, u) ? +g : g;
              }).sort(Ec)
            ),
            d
          );
        });
        function h0(e, o) {
          var u = [];
          if (!(e && e.length)) return u;
          var d = -1,
            g = [],
            b = e.length;
          for (o = se(o, 3); ++d < b; ) {
            var C = e[d];
            o(C, d, e) && (u.push(C), g.push(d));
          }
          return fc(e, g), u;
        }
        function Cs(e) {
          return e == null ? e : sv.call(e);
        }
        function g0(e, o, u) {
          var d = e == null ? 0 : e.length;
          return d
            ? (u && typeof u != "number" && xt(e, o, u)
                ? ((o = 0), (u = d))
                : ((o = o == null ? 0 : Ee(o)), (u = u === r ? d : Ee(u))),
              Gt(e, o, u))
            : [];
        }
        function v0(e, o) {
          return hi(e, o);
        }
        function m0(e, o, u) {
          return ss(e, o, se(u, 2));
        }
        function b0(e, o) {
          var u = e == null ? 0 : e.length;
          if (u) {
            var d = hi(e, o);
            if (d < u && sn(e[d], o)) return d;
          }
          return -1;
        }
        function x0(e, o) {
          return hi(e, o, !0);
        }
        function y0(e, o, u) {
          return ss(e, o, se(u, 2), !0);
        }
        function E0(e, o) {
          var u = e == null ? 0 : e.length;
          if (u) {
            var d = hi(e, o, !0) - 1;
            if (sn(e[d], o)) return d;
          }
          return -1;
        }
        function w0(e) {
          return e && e.length ? pc(e) : [];
        }
        function S0(e, o) {
          return e && e.length ? pc(e, se(o, 2)) : [];
        }
        function C0(e) {
          var o = e == null ? 0 : e.length;
          return o ? Gt(e, 1, o) : [];
        }
        function _0(e, o, u) {
          return e && e.length
            ? ((o = u || o === r ? 1 : Ee(o)), Gt(e, 0, o < 0 ? 0 : o))
            : [];
        }
        function O0(e, o, u) {
          var d = e == null ? 0 : e.length;
          return d
            ? ((o = u || o === r ? 1 : Ee(o)),
              (o = d - o),
              Gt(e, o < 0 ? 0 : o, d))
            : [];
        }
        function P0(e, o) {
          return e && e.length ? gi(e, se(o, 3), !1, !0) : [];
        }
        function A0(e, o) {
          return e && e.length ? gi(e, se(o, 3)) : [];
        }
        var D0 = Se(function (e) {
            return Bn(ut(e, 1, Ze, !0));
          }),
          R0 = Se(function (e) {
            var o = Kt(e);
            return Ze(o) && (o = r), Bn(ut(e, 1, Ze, !0), se(o, 2));
          }),
          T0 = Se(function (e) {
            var o = Kt(e);
            return (
              (o = typeof o == "function" ? o : r), Bn(ut(e, 1, Ze, !0), r, o)
            );
          });
        function I0(e) {
          return e && e.length ? Bn(e) : [];
        }
        function F0(e, o) {
          return e && e.length ? Bn(e, se(o, 2)) : [];
        }
        function L0(e, o) {
          return (
            (o = typeof o == "function" ? o : r),
            e && e.length ? Bn(e, r, o) : []
          );
        }
        function _s(e) {
          if (!(e && e.length)) return [];
          var o = 0;
          return (
            (e = Ln(e, function (u) {
              if (Ze(u)) return (o = rt(u.length, o)), !0;
            })),
            Ha(o, function (u) {
              return Ke(e, Ba(u));
            })
          );
        }
        function Qc(e, o) {
          if (!(e && e.length)) return [];
          var u = _s(e);
          return o == null
            ? u
            : Ke(u, function (d) {
                return It(o, r, d);
              });
        }
        var M0 = Se(function (e, o) {
            return Ze(e) ? lo(e, o) : [];
          }),
          $0 = Se(function (e) {
            return ls(Ln(e, Ze));
          }),
          k0 = Se(function (e) {
            var o = Kt(e);
            return Ze(o) && (o = r), ls(Ln(e, Ze), se(o, 2));
          }),
          N0 = Se(function (e) {
            var o = Kt(e);
            return (o = typeof o == "function" ? o : r), ls(Ln(e, Ze), r, o);
          }),
          B0 = Se(_s);
        function U0(e, o) {
          return mc(e || [], o || [], uo);
        }
        function V0(e, o) {
          return mc(e || [], o || [], po);
        }
        var H0 = Se(function (e) {
          var o = e.length,
            u = o > 1 ? e[o - 1] : r;
          return (u = typeof u == "function" ? (e.pop(), u) : r), Qc(e, u);
        });
        function ef(e) {
          var o = m(e);
          return (o.__chain__ = !0), o;
        }
        function j0(e, o) {
          return o(e), e;
        }
        function Ci(e, o) {
          return o(e);
        }
        var W0 = Sn(function (e) {
          var o = e.length,
            u = o ? e[0] : 0,
            d = this.__wrapped__,
            g = function (b) {
              return Ya(b, e);
            };
          return o > 1 ||
            this.__actions__.length ||
            !(d instanceof Pe) ||
            !Cn(u)
            ? this.thru(g)
            : ((d = d.slice(u, +u + (o ? 1 : 0))),
              d.__actions__.push({ func: Ci, args: [g], thisArg: r }),
              new Wt(d, this.__chain__).thru(function (b) {
                return o && !b.length && b.push(r), b;
              }));
        });
        function z0() {
          return ef(this);
        }
        function G0() {
          return new Wt(this.value(), this.__chain__);
        }
        function K0() {
          this.__values__ === r && (this.__values__ = gf(this.value()));
          var e = this.__index__ >= this.__values__.length,
            o = e ? r : this.__values__[this.__index__++];
          return { done: e, value: o };
        }
        function q0() {
          return this;
        }
        function J0(e) {
          for (var o, u = this; u instanceof li; ) {
            var d = Kc(u);
            (d.__index__ = 0),
              (d.__values__ = r),
              o ? (g.__wrapped__ = d) : (o = d);
            var g = d;
            u = u.__wrapped__;
          }
          return (g.__wrapped__ = e), o;
        }
        function Y0() {
          var e = this.__wrapped__;
          if (e instanceof Pe) {
            var o = e;
            return (
              this.__actions__.length && (o = new Pe(this)),
              (o = o.reverse()),
              o.__actions__.push({ func: Ci, args: [Cs], thisArg: r }),
              new Wt(o, this.__chain__)
            );
          }
          return this.thru(Cs);
        }
        function X0() {
          return vc(this.__wrapped__, this.__actions__);
        }
        var Z0 = vi(function (e, o, u) {
          Ve.call(e, u) ? ++e[u] : En(e, u, 1);
        });
        function Q0(e, o, u) {
          var d = be(e) ? Dl : jv;
          return u && xt(e, o, u) && (o = r), d(e, se(o, 3));
        }
        function e1(e, o) {
          var u = be(e) ? Ln : Ql;
          return u(e, se(o, 3));
        }
        var t1 = Pc(qc),
          n1 = Pc(Jc);
        function r1(e, o) {
          return ut(_i(e, o), 1);
        }
        function o1(e, o) {
          return ut(_i(e, o), re);
        }
        function i1(e, o, u) {
          return (u = u === r ? 1 : Ee(u)), ut(_i(e, o), u);
        }
        function tf(e, o) {
          var u = be(e) ? Ht : Nn;
          return u(e, se(o, 3));
        }
        function nf(e, o) {
          var u = be(e) ? Cg : Zl;
          return u(e, se(o, 3));
        }
        var a1 = vi(function (e, o, u) {
          Ve.call(e, u) ? e[u].push(o) : En(e, u, [o]);
        });
        function s1(e, o, u, d) {
          (e = wt(e) ? e : $r(e)), (u = u && !d ? Ee(u) : 0);
          var g = e.length;
          return (
            u < 0 && (u = rt(g + u, 0)),
            Ri(e) ? u <= g && e.indexOf(o, u) > -1 : !!g && Cr(e, o, u) > -1
          );
        }
        var u1 = Se(function (e, o, u) {
            var d = -1,
              g = typeof o == "function",
              b = wt(e) ? M(e.length) : [];
            return (
              Nn(e, function (C) {
                b[++d] = g ? It(o, C, u) : co(C, o, u);
              }),
              b
            );
          }),
          l1 = vi(function (e, o, u) {
            En(e, u, o);
          });
        function _i(e, o) {
          var u = be(e) ? Ke : ic;
          return u(e, se(o, 3));
        }
        function c1(e, o, u, d) {
          return e == null
            ? []
            : (be(o) || (o = o == null ? [] : [o]),
              (u = d ? r : u),
              be(u) || (u = u == null ? [] : [u]),
              lc(e, o, u));
        }
        var f1 = vi(
          function (e, o, u) {
            e[u ? 0 : 1].push(o);
          },
          function () {
            return [[], []];
          }
        );
        function d1(e, o, u) {
          var d = be(e) ? ka : Fl,
            g = arguments.length < 3;
          return d(e, se(o, 4), u, g, Nn);
        }
        function p1(e, o, u) {
          var d = be(e) ? _g : Fl,
            g = arguments.length < 3;
          return d(e, se(o, 4), u, g, Zl);
        }
        function h1(e, o) {
          var u = be(e) ? Ln : Ql;
          return u(e, Ai(se(o, 3)));
        }
        function g1(e) {
          var o = be(e) ? ql : sm;
          return o(e);
        }
        function v1(e, o, u) {
          (u ? xt(e, o, u) : o === r) ? (o = 1) : (o = Ee(o));
          var d = be(e) ? Nv : um;
          return d(e, o);
        }
        function m1(e) {
          var o = be(e) ? Bv : cm;
          return o(e);
        }
        function b1(e) {
          if (e == null) return 0;
          if (wt(e)) return Ri(e) ? Or(e) : e.length;
          var o = dt(e);
          return o == Ye || o == fe ? e.size : ns(e).length;
        }
        function x1(e, o, u) {
          var d = be(e) ? Na : fm;
          return u && xt(e, o, u) && (o = r), d(e, se(o, 3));
        }
        var y1 = Se(function (e, o) {
            if (e == null) return [];
            var u = o.length;
            return (
              u > 1 && xt(e, o[0], o[1])
                ? (o = [])
                : u > 2 && xt(o[0], o[1], o[2]) && (o = [o[0]]),
              lc(e, ut(o, 1), [])
            );
          }),
          Oi =
            ev ||
            function () {
              return st.Date.now();
            };
        function E1(e, o) {
          if (typeof o != "function") throw new jt(l);
          return (
            (e = Ee(e)),
            function () {
              if (--e < 1) return o.apply(this, arguments);
            }
          );
        }
        function rf(e, o, u) {
          return (
            (o = u ? r : o),
            (o = e && o == null ? e.length : o),
            wn(e, L, r, r, r, r, o)
          );
        }
        function of(e, o) {
          var u;
          if (typeof o != "function") throw new jt(l);
          return (
            (e = Ee(e)),
            function () {
              return (
                --e > 0 && (u = o.apply(this, arguments)), e <= 1 && (o = r), u
              );
            }
          );
        }
        var Os = Se(function (e, o, u) {
            var d = _;
            if (u.length) {
              var g = $n(u, Lr(Os));
              d |= I;
            }
            return wn(e, d, o, u, g);
          }),
          af = Se(function (e, o, u) {
            var d = _ | A;
            if (u.length) {
              var g = $n(u, Lr(af));
              d |= I;
            }
            return wn(o, d, e, u, g);
          });
        function sf(e, o, u) {
          o = u ? r : o;
          var d = wn(e, F, r, r, r, r, r, o);
          return (d.placeholder = sf.placeholder), d;
        }
        function uf(e, o, u) {
          o = u ? r : o;
          var d = wn(e, R, r, r, r, r, r, o);
          return (d.placeholder = uf.placeholder), d;
        }
        function lf(e, o, u) {
          var d,
            g,
            b,
            C,
            O,
            T,
            H = 0,
            j = !1,
            W = !1,
            Z = !0;
          if (typeof e != "function") throw new jt(l);
          (o = qt(o) || 0),
            Je(u) &&
              ((j = !!u.leading),
              (W = "maxWait" in u),
              (b = W ? rt(qt(u.maxWait) || 0, o) : b),
              (Z = "trailing" in u ? !!u.trailing : Z));
          function ne(Qe) {
            var un = d,
              Pn = g;
            return (d = g = r), (H = Qe), (C = e.apply(Pn, un)), C;
          }
          function le(Qe) {
            return (H = Qe), (O = vo(Oe, o)), j ? ne(Qe) : C;
          }
          function we(Qe) {
            var un = Qe - T,
              Pn = Qe - H,
              Af = o - un;
            return W ? ft(Af, b - Pn) : Af;
          }
          function ce(Qe) {
            var un = Qe - T,
              Pn = Qe - H;
            return T === r || un >= o || un < 0 || (W && Pn >= b);
          }
          function Oe() {
            var Qe = Oi();
            if (ce(Qe)) return De(Qe);
            O = vo(Oe, we(Qe));
          }
          function De(Qe) {
            return (O = r), Z && d ? ne(Qe) : ((d = g = r), C);
          }
          function $t() {
            O !== r && bc(O), (H = 0), (d = T = g = O = r);
          }
          function yt() {
            return O === r ? C : De(Oi());
          }
          function kt() {
            var Qe = Oi(),
              un = ce(Qe);
            if (((d = arguments), (g = this), (T = Qe), un)) {
              if (O === r) return le(T);
              if (W) return bc(O), (O = vo(Oe, o)), ne(T);
            }
            return O === r && (O = vo(Oe, o)), C;
          }
          return (kt.cancel = $t), (kt.flush = yt), kt;
        }
        var w1 = Se(function (e, o) {
            return Xl(e, 1, o);
          }),
          S1 = Se(function (e, o, u) {
            return Xl(e, qt(o) || 0, u);
          });
        function C1(e) {
          return wn(e, U);
        }
        function Pi(e, o) {
          if (typeof e != "function" || (o != null && typeof o != "function"))
            throw new jt(l);
          var u = function () {
            var d = arguments,
              g = o ? o.apply(this, d) : d[0],
              b = u.cache;
            if (b.has(g)) return b.get(g);
            var C = e.apply(this, d);
            return (u.cache = b.set(g, C) || b), C;
          };
          return (u.cache = new (Pi.Cache || yn)()), u;
        }
        Pi.Cache = yn;
        function Ai(e) {
          if (typeof e != "function") throw new jt(l);
          return function () {
            var o = arguments;
            switch (o.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, o[0]);
              case 2:
                return !e.call(this, o[0], o[1]);
              case 3:
                return !e.call(this, o[0], o[1], o[2]);
            }
            return !e.apply(this, o);
          };
        }
        function _1(e) {
          return of(2, e);
        }
        var O1 = dm(function (e, o) {
            o =
              o.length == 1 && be(o[0])
                ? Ke(o[0], Ft(se()))
                : Ke(ut(o, 1), Ft(se()));
            var u = o.length;
            return Se(function (d) {
              for (var g = -1, b = ft(d.length, u); ++g < b; )
                d[g] = o[g].call(this, d[g]);
              return It(e, this, d);
            });
          }),
          Ps = Se(function (e, o) {
            var u = $n(o, Lr(Ps));
            return wn(e, I, r, o, u);
          }),
          cf = Se(function (e, o) {
            var u = $n(o, Lr(cf));
            return wn(e, $, r, o, u);
          }),
          P1 = Sn(function (e, o) {
            return wn(e, V, r, r, r, o);
          });
        function A1(e, o) {
          if (typeof e != "function") throw new jt(l);
          return (o = o === r ? o : Ee(o)), Se(e, o);
        }
        function D1(e, o) {
          if (typeof e != "function") throw new jt(l);
          return (
            (o = o == null ? 0 : rt(Ee(o), 0)),
            Se(function (u) {
              var d = u[o],
                g = Vn(u, 0, o);
              return d && Mn(g, d), It(e, this, g);
            })
          );
        }
        function R1(e, o, u) {
          var d = !0,
            g = !0;
          if (typeof e != "function") throw new jt(l);
          return (
            Je(u) &&
              ((d = "leading" in u ? !!u.leading : d),
              (g = "trailing" in u ? !!u.trailing : g)),
            lf(e, o, { leading: d, maxWait: o, trailing: g })
          );
        }
        function T1(e) {
          return rf(e, 1);
        }
        function I1(e, o) {
          return Ps(fs(o), e);
        }
        function F1() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return be(e) ? e : [e];
        }
        function L1(e) {
          return zt(e, x);
        }
        function M1(e, o) {
          return (o = typeof o == "function" ? o : r), zt(e, x, o);
        }
        function $1(e) {
          return zt(e, v | x);
        }
        function k1(e, o) {
          return (o = typeof o == "function" ? o : r), zt(e, v | x, o);
        }
        function N1(e, o) {
          return o == null || Yl(e, o, at(o));
        }
        function sn(e, o) {
          return e === o || (e !== e && o !== o);
        }
        var B1 = yi(Qa),
          U1 = yi(function (e, o) {
            return e >= o;
          }),
          cr = nc(
            (function () {
              return arguments;
            })()
          )
            ? nc
            : function (e) {
                return Xe(e) && Ve.call(e, "callee") && !Hl.call(e, "callee");
              },
          be = M.isArray,
          V1 = Sl ? Ft(Sl) : Jv;
        function wt(e) {
          return e != null && Di(e.length) && !_n(e);
        }
        function Ze(e) {
          return Xe(e) && wt(e);
        }
        function H1(e) {
          return e === !0 || e === !1 || (Xe(e) && bt(e) == Te);
        }
        var Hn = nv || Ns,
          j1 = Cl ? Ft(Cl) : Yv;
        function W1(e) {
          return Xe(e) && e.nodeType === 1 && !mo(e);
        }
        function z1(e) {
          if (e == null) return !0;
          if (
            wt(e) &&
            (be(e) ||
              typeof e == "string" ||
              typeof e.splice == "function" ||
              Hn(e) ||
              Mr(e) ||
              cr(e))
          )
            return !e.length;
          var o = dt(e);
          if (o == Ye || o == fe) return !e.size;
          if (go(e)) return !ns(e).length;
          for (var u in e) if (Ve.call(e, u)) return !1;
          return !0;
        }
        function G1(e, o) {
          return fo(e, o);
        }
        function K1(e, o, u) {
          u = typeof u == "function" ? u : r;
          var d = u ? u(e, o) : r;
          return d === r ? fo(e, o, r, u) : !!d;
        }
        function As(e) {
          if (!Xe(e)) return !1;
          var o = bt(e);
          return (
            o == qe ||
            o == ct ||
            (typeof e.message == "string" &&
              typeof e.name == "string" &&
              !mo(e))
          );
        }
        function q1(e) {
          return typeof e == "number" && Wl(e);
        }
        function _n(e) {
          if (!Je(e)) return !1;
          var o = bt(e);
          return o == et || o == mt || o == Be || o == xe;
        }
        function ff(e) {
          return typeof e == "number" && e == Ee(e);
        }
        function Di(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ve;
        }
        function Je(e) {
          var o = typeof e;
          return e != null && (o == "object" || o == "function");
        }
        function Xe(e) {
          return e != null && typeof e == "object";
        }
        var df = _l ? Ft(_l) : Zv;
        function J1(e, o) {
          return e === o || ts(e, o, bs(o));
        }
        function Y1(e, o, u) {
          return (u = typeof u == "function" ? u : r), ts(e, o, bs(o), u);
        }
        function X1(e) {
          return pf(e) && e != +e;
        }
        function Z1(e) {
          if (Mm(e)) throw new me(s);
          return rc(e);
        }
        function Q1(e) {
          return e === null;
        }
        function eb(e) {
          return e == null;
        }
        function pf(e) {
          return typeof e == "number" || (Xe(e) && bt(e) == N);
        }
        function mo(e) {
          if (!Xe(e) || bt(e) != z) return !1;
          var o = ni(e);
          if (o === null) return !0;
          var u = Ve.call(o, "constructor") && o.constructor;
          return typeof u == "function" && u instanceof u && Zo.call(u) == Yg;
        }
        var Ds = Ol ? Ft(Ol) : Qv;
        function tb(e) {
          return ff(e) && e >= -ve && e <= ve;
        }
        var hf = Pl ? Ft(Pl) : em;
        function Ri(e) {
          return typeof e == "string" || (!be(e) && Xe(e) && bt(e) == Fe);
        }
        function Mt(e) {
          return typeof e == "symbol" || (Xe(e) && bt(e) == tn);
        }
        var Mr = Al ? Ft(Al) : tm;
        function nb(e) {
          return e === r;
        }
        function rb(e) {
          return Xe(e) && dt(e) == Dt;
        }
        function ob(e) {
          return Xe(e) && bt(e) == Ut;
        }
        var ib = yi(rs),
          ab = yi(function (e, o) {
            return e <= o;
          });
        function gf(e) {
          if (!e) return [];
          if (wt(e)) return Ri(e) ? on(e) : Et(e);
          if (ro && e[ro]) return Ng(e[ro]());
          var o = dt(e),
            u = o == Ye ? Wa : o == fe ? Jo : $r;
          return u(e);
        }
        function On(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = qt(e)), e === re || e === -re)) {
            var o = e < 0 ? -1 : 1;
            return o * _e;
          }
          return e === e ? e : 0;
        }
        function Ee(e) {
          var o = On(e),
            u = o % 1;
          return o === o ? (u ? o - u : o) : 0;
        }
        function vf(e) {
          return e ? ar(Ee(e), 0, $e) : 0;
        }
        function qt(e) {
          if (typeof e == "number") return e;
          if (Mt(e)) return Ie;
          if (Je(e)) {
            var o = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Je(o) ? o + "" : o;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = Ll(e);
          var u = _a.test(e);
          return u || Pa.test(e)
            ? Eg(e.slice(2), u ? 2 : 8)
            : Wo.test(e)
            ? Ie
            : +e;
        }
        function mf(e) {
          return fn(e, St(e));
        }
        function sb(e) {
          return e ? ar(Ee(e), -ve, ve) : e === 0 ? e : 0;
        }
        function Ue(e) {
          return e == null ? "" : Lt(e);
        }
        var ub = Ir(function (e, o) {
            if (go(o) || wt(o)) {
              fn(o, at(o), e);
              return;
            }
            for (var u in o) Ve.call(o, u) && uo(e, u, o[u]);
          }),
          bf = Ir(function (e, o) {
            fn(o, St(o), e);
          }),
          Ti = Ir(function (e, o, u, d) {
            fn(o, St(o), e, d);
          }),
          lb = Ir(function (e, o, u, d) {
            fn(o, at(o), e, d);
          }),
          cb = Sn(Ya);
        function fb(e, o) {
          var u = Tr(e);
          return o == null ? u : Jl(u, o);
        }
        var db = Se(function (e, o) {
            e = We(e);
            var u = -1,
              d = o.length,
              g = d > 2 ? o[2] : r;
            for (g && xt(o[0], o[1], g) && (d = 1); ++u < d; )
              for (var b = o[u], C = St(b), O = -1, T = C.length; ++O < T; ) {
                var H = C[O],
                  j = e[H];
                (j === r || (sn(j, Ar[H]) && !Ve.call(e, H))) && (e[H] = b[H]);
              }
            return e;
          }),
          pb = Se(function (e) {
            return e.push(r, Lc), It(xf, r, e);
          });
        function hb(e, o) {
          return Rl(e, se(o, 3), cn);
        }
        function gb(e, o) {
          return Rl(e, se(o, 3), Za);
        }
        function vb(e, o) {
          return e == null ? e : Xa(e, se(o, 3), St);
        }
        function mb(e, o) {
          return e == null ? e : ec(e, se(o, 3), St);
        }
        function bb(e, o) {
          return e && cn(e, se(o, 3));
        }
        function xb(e, o) {
          return e && Za(e, se(o, 3));
        }
        function yb(e) {
          return e == null ? [] : di(e, at(e));
        }
        function Eb(e) {
          return e == null ? [] : di(e, St(e));
        }
        function Rs(e, o, u) {
          var d = e == null ? r : sr(e, o);
          return d === r ? u : d;
        }
        function wb(e, o) {
          return e != null && kc(e, o, zv);
        }
        function Ts(e, o) {
          return e != null && kc(e, o, Gv);
        }
        var Sb = Dc(function (e, o, u) {
            o != null && typeof o.toString != "function" && (o = Qo.call(o)),
              (e[o] = u);
          }, Fs(Ct)),
          Cb = Dc(function (e, o, u) {
            o != null && typeof o.toString != "function" && (o = Qo.call(o)),
              Ve.call(e, o) ? e[o].push(u) : (e[o] = [u]);
          }, se),
          _b = Se(co);
        function at(e) {
          return wt(e) ? Kl(e) : ns(e);
        }
        function St(e) {
          return wt(e) ? Kl(e, !0) : nm(e);
        }
        function Ob(e, o) {
          var u = {};
          return (
            (o = se(o, 3)),
            cn(e, function (d, g, b) {
              En(u, o(d, g, b), d);
            }),
            u
          );
        }
        function Pb(e, o) {
          var u = {};
          return (
            (o = se(o, 3)),
            cn(e, function (d, g, b) {
              En(u, g, o(d, g, b));
            }),
            u
          );
        }
        var Ab = Ir(function (e, o, u) {
            pi(e, o, u);
          }),
          xf = Ir(function (e, o, u, d) {
            pi(e, o, u, d);
          }),
          Db = Sn(function (e, o) {
            var u = {};
            if (e == null) return u;
            var d = !1;
            (o = Ke(o, function (b) {
              return (b = Un(b, e)), d || (d = b.length > 1), b;
            })),
              fn(e, vs(e), u),
              d && (u = zt(u, v | w | x, Sm));
            for (var g = o.length; g--; ) us(u, o[g]);
            return u;
          });
        function Rb(e, o) {
          return yf(e, Ai(se(o)));
        }
        var Tb = Sn(function (e, o) {
          return e == null ? {} : om(e, o);
        });
        function yf(e, o) {
          if (e == null) return {};
          var u = Ke(vs(e), function (d) {
            return [d];
          });
          return (
            (o = se(o)),
            cc(e, u, function (d, g) {
              return o(d, g[0]);
            })
          );
        }
        function Ib(e, o, u) {
          o = Un(o, e);
          var d = -1,
            g = o.length;
          for (g || ((g = 1), (e = r)); ++d < g; ) {
            var b = e == null ? r : e[dn(o[d])];
            b === r && ((d = g), (b = u)), (e = _n(b) ? b.call(e) : b);
          }
          return e;
        }
        function Fb(e, o, u) {
          return e == null ? e : po(e, o, u);
        }
        function Lb(e, o, u, d) {
          return (
            (d = typeof d == "function" ? d : r), e == null ? e : po(e, o, u, d)
          );
        }
        var Ef = Ic(at),
          wf = Ic(St);
        function Mb(e, o, u) {
          var d = be(e),
            g = d || Hn(e) || Mr(e);
          if (((o = se(o, 4)), u == null)) {
            var b = e && e.constructor;
            g
              ? (u = d ? new b() : [])
              : Je(e)
              ? (u = _n(b) ? Tr(ni(e)) : {})
              : (u = {});
          }
          return (
            (g ? Ht : cn)(e, function (C, O, T) {
              return o(u, C, O, T);
            }),
            u
          );
        }
        function $b(e, o) {
          return e == null ? !0 : us(e, o);
        }
        function kb(e, o, u) {
          return e == null ? e : gc(e, o, fs(u));
        }
        function Nb(e, o, u, d) {
          return (
            (d = typeof d == "function" ? d : r),
            e == null ? e : gc(e, o, fs(u), d)
          );
        }
        function $r(e) {
          return e == null ? [] : ja(e, at(e));
        }
        function Bb(e) {
          return e == null ? [] : ja(e, St(e));
        }
        function Ub(e, o, u) {
          return (
            u === r && ((u = o), (o = r)),
            u !== r && ((u = qt(u)), (u = u === u ? u : 0)),
            o !== r && ((o = qt(o)), (o = o === o ? o : 0)),
            ar(qt(e), o, u)
          );
        }
        function Vb(e, o, u) {
          return (
            (o = On(o)),
            u === r ? ((u = o), (o = 0)) : (u = On(u)),
            (e = qt(e)),
            Kv(e, o, u)
          );
        }
        function Hb(e, o, u) {
          if (
            (u && typeof u != "boolean" && xt(e, o, u) && (o = u = r),
            u === r &&
              (typeof o == "boolean"
                ? ((u = o), (o = r))
                : typeof e == "boolean" && ((u = e), (e = r))),
            e === r && o === r
              ? ((e = 0), (o = 1))
              : ((e = On(e)), o === r ? ((o = e), (e = 0)) : (o = On(o))),
            e > o)
          ) {
            var d = e;
            (e = o), (o = d);
          }
          if (u || e % 1 || o % 1) {
            var g = zl();
            return ft(e + g * (o - e + yg("1e-" + ((g + "").length - 1))), o);
          }
          return is(e, o);
        }
        var jb = Fr(function (e, o, u) {
          return (o = o.toLowerCase()), e + (u ? Sf(o) : o);
        });
        function Sf(e) {
          return Is(Ue(e).toLowerCase());
        }
        function Cf(e) {
          return (e = Ue(e)), e && e.replace(Ce, Fg).replace(cg, "");
        }
        function Wb(e, o, u) {
          (e = Ue(e)), (o = Lt(o));
          var d = e.length;
          u = u === r ? d : ar(Ee(u), 0, d);
          var g = u;
          return (u -= o.length), u >= 0 && e.slice(u, g) == o;
        }
        function zb(e) {
          return (e = Ue(e)), e && Bo.test(e) ? e.replace(Xr, Lg) : e;
        }
        function Gb(e) {
          return (e = Ue(e)), e && Sa.test(e) ? e.replace(Qn, "\\$&") : e;
        }
        var Kb = Fr(function (e, o, u) {
            return e + (u ? "-" : "") + o.toLowerCase();
          }),
          qb = Fr(function (e, o, u) {
            return e + (u ? " " : "") + o.toLowerCase();
          }),
          Jb = Oc("toLowerCase");
        function Yb(e, o, u) {
          (e = Ue(e)), (o = Ee(o));
          var d = o ? Or(e) : 0;
          if (!o || d >= o) return e;
          var g = (o - d) / 2;
          return xi(ai(g), u) + e + xi(ii(g), u);
        }
        function Xb(e, o, u) {
          (e = Ue(e)), (o = Ee(o));
          var d = o ? Or(e) : 0;
          return o && d < o ? e + xi(o - d, u) : e;
        }
        function Zb(e, o, u) {
          (e = Ue(e)), (o = Ee(o));
          var d = o ? Or(e) : 0;
          return o && d < o ? xi(o - d, u) + e : e;
        }
        function Qb(e, o, u) {
          return (
            u || o == null ? (o = 0) : o && (o = +o),
            av(Ue(e).replace(bn, ""), o || 0)
          );
        }
        function ex(e, o, u) {
          return (
            (u ? xt(e, o, u) : o === r) ? (o = 1) : (o = Ee(o)), as(Ue(e), o)
          );
        }
        function tx() {
          var e = arguments,
            o = Ue(e[0]);
          return e.length < 3 ? o : o.replace(e[1], e[2]);
        }
        var nx = Fr(function (e, o, u) {
          return e + (u ? "_" : "") + o.toLowerCase();
        });
        function rx(e, o, u) {
          return (
            u && typeof u != "number" && xt(e, o, u) && (o = u = r),
            (u = u === r ? $e : u >>> 0),
            u
              ? ((e = Ue(e)),
                e &&
                (typeof o == "string" || (o != null && !Ds(o))) &&
                ((o = Lt(o)), !o && _r(e))
                  ? Vn(on(e), 0, u)
                  : e.split(o, u))
              : []
          );
        }
        var ox = Fr(function (e, o, u) {
          return e + (u ? " " : "") + Is(o);
        });
        function ix(e, o, u) {
          return (
            (e = Ue(e)),
            (u = u == null ? 0 : ar(Ee(u), 0, e.length)),
            (o = Lt(o)),
            e.slice(u, u + o.length) == o
          );
        }
        function ax(e, o, u) {
          var d = m.templateSettings;
          u && xt(e, o, u) && (o = r), (e = Ue(e)), (o = Ti({}, o, d, Fc));
          var g = Ti({}, o.imports, d.imports, Fc),
            b = at(g),
            C = ja(g, b),
            O,
            T,
            H = 0,
            j = o.interpolate || it,
            W = "__p += '",
            Z = za(
              (o.escape || it).source +
                "|" +
                j.source +
                "|" +
                (j === Zr ? jo : it).source +
                "|" +
                (o.evaluate || it).source +
                "|$",
              "g"
            ),
            ne =
              "//# sourceURL=" +
              (Ve.call(o, "sourceURL")
                ? (o.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++gg + "]") +
              `
`;
          e.replace(Z, function (ce, Oe, De, $t, yt, kt) {
            return (
              De || (De = $t),
              (W += e.slice(H, kt).replace(Gh, Mg)),
              Oe &&
                ((O = !0),
                (W +=
                  `' +
__e(` +
                  Oe +
                  `) +
'`)),
              yt &&
                ((T = !0),
                (W +=
                  `';
` +
                  yt +
                  `;
__p += '`)),
              De &&
                (W +=
                  `' +
((__t = (` +
                  De +
                  `)) == null ? '' : __t) +
'`),
              (H = kt + ce.length),
              ce
            );
          }),
            (W += `';
`);
          var le = Ve.call(o, "variable") && o.variable;
          if (!le)
            W =
              `with (obj) {
` +
              W +
              `
}
`;
          else if (eo.test(le)) throw new me(c);
          (W = (T ? W.replace($o, "") : W)
            .replace(ba, "$1")
            .replace(xa, "$1;")),
            (W =
              "function(" +
              (le || "obj") +
              `) {
` +
              (le
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (O ? ", __e = _.escape" : "") +
              (T
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              W +
              `return __p
}`);
          var we = Of(function () {
            return Me(b, ne + "return " + W).apply(r, C);
          });
          if (((we.source = W), As(we))) throw we;
          return we;
        }
        function sx(e) {
          return Ue(e).toLowerCase();
        }
        function ux(e) {
          return Ue(e).toUpperCase();
        }
        function lx(e, o, u) {
          if (((e = Ue(e)), e && (u || o === r))) return Ll(e);
          if (!e || !(o = Lt(o))) return e;
          var d = on(e),
            g = on(o),
            b = Ml(d, g),
            C = $l(d, g) + 1;
          return Vn(d, b, C).join("");
        }
        function cx(e, o, u) {
          if (((e = Ue(e)), e && (u || o === r))) return e.slice(0, Nl(e) + 1);
          if (!e || !(o = Lt(o))) return e;
          var d = on(e),
            g = $l(d, on(o)) + 1;
          return Vn(d, 0, g).join("");
        }
        function fx(e, o, u) {
          if (((e = Ue(e)), e && (u || o === r))) return e.replace(bn, "");
          if (!e || !(o = Lt(o))) return e;
          var d = on(e),
            g = Ml(d, on(o));
          return Vn(d, g).join("");
        }
        function dx(e, o) {
          var u = k,
            d = q;
          if (Je(o)) {
            var g = "separator" in o ? o.separator : g;
            (u = "length" in o ? Ee(o.length) : u),
              (d = "omission" in o ? Lt(o.omission) : d);
          }
          e = Ue(e);
          var b = e.length;
          if (_r(e)) {
            var C = on(e);
            b = C.length;
          }
          if (u >= b) return e;
          var O = u - Or(d);
          if (O < 1) return d;
          var T = C ? Vn(C, 0, O).join("") : e.slice(0, O);
          if (g === r) return T + d;
          if ((C && (O += T.length - O), Ds(g))) {
            if (e.slice(O).search(g)) {
              var H,
                j = T;
              for (
                g.global || (g = za(g.source, Ue(to.exec(g)) + "g")),
                  g.lastIndex = 0;
                (H = g.exec(j));

              )
                var W = H.index;
              T = T.slice(0, W === r ? O : W);
            }
          } else if (e.indexOf(Lt(g), O) != O) {
            var Z = T.lastIndexOf(g);
            Z > -1 && (T = T.slice(0, Z));
          }
          return T + d;
        }
        function px(e) {
          return (e = Ue(e)), e && No.test(e) ? e.replace(ko, Hg) : e;
        }
        var hx = Fr(function (e, o, u) {
            return e + (u ? " " : "") + o.toUpperCase();
          }),
          Is = Oc("toUpperCase");
        function _f(e, o, u) {
          return (
            (e = Ue(e)),
            (o = u ? r : o),
            o === r ? (kg(e) ? zg(e) : Ag(e)) : e.match(o) || []
          );
        }
        var Of = Se(function (e, o) {
            try {
              return It(e, r, o);
            } catch (u) {
              return As(u) ? u : new me(u);
            }
          }),
          gx = Sn(function (e, o) {
            return (
              Ht(o, function (u) {
                (u = dn(u)), En(e, u, Os(e[u], e));
              }),
              e
            );
          });
        function vx(e) {
          var o = e == null ? 0 : e.length,
            u = se();
          return (
            (e = o
              ? Ke(e, function (d) {
                  if (typeof d[1] != "function") throw new jt(l);
                  return [u(d[0]), d[1]];
                })
              : []),
            Se(function (d) {
              for (var g = -1; ++g < o; ) {
                var b = e[g];
                if (It(b[0], this, d)) return It(b[1], this, d);
              }
            })
          );
        }
        function mx(e) {
          return Hv(zt(e, v));
        }
        function Fs(e) {
          return function () {
            return e;
          };
        }
        function bx(e, o) {
          return e == null || e !== e ? o : e;
        }
        var xx = Ac(),
          yx = Ac(!0);
        function Ct(e) {
          return e;
        }
        function Ls(e) {
          return oc(typeof e == "function" ? e : zt(e, v));
        }
        function Ex(e) {
          return ac(zt(e, v));
        }
        function wx(e, o) {
          return sc(e, zt(o, v));
        }
        var Sx = Se(function (e, o) {
            return function (u) {
              return co(u, e, o);
            };
          }),
          Cx = Se(function (e, o) {
            return function (u) {
              return co(e, u, o);
            };
          });
        function Ms(e, o, u) {
          var d = at(o),
            g = di(o, d);
          u == null &&
            !(Je(o) && (g.length || !d.length)) &&
            ((u = o), (o = e), (e = this), (g = di(o, at(o))));
          var b = !(Je(u) && "chain" in u) || !!u.chain,
            C = _n(e);
          return (
            Ht(g, function (O) {
              var T = o[O];
              (e[O] = T),
                C &&
                  (e.prototype[O] = function () {
                    var H = this.__chain__;
                    if (b || H) {
                      var j = e(this.__wrapped__),
                        W = (j.__actions__ = Et(this.__actions__));
                      return (
                        W.push({ func: T, args: arguments, thisArg: e }),
                        (j.__chain__ = H),
                        j
                      );
                    }
                    return T.apply(e, Mn([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function _x() {
          return st._ === this && (st._ = Xg), this;
        }
        function $s() {}
        function Ox(e) {
          return (
            (e = Ee(e)),
            Se(function (o) {
              return uc(o, e);
            })
          );
        }
        var Px = ps(Ke),
          Ax = ps(Dl),
          Dx = ps(Na);
        function Pf(e) {
          return ys(e) ? Ba(dn(e)) : im(e);
        }
        function Rx(e) {
          return function (o) {
            return e == null ? r : sr(e, o);
          };
        }
        var Tx = Rc(),
          Ix = Rc(!0);
        function ks() {
          return [];
        }
        function Ns() {
          return !1;
        }
        function Fx() {
          return {};
        }
        function Lx() {
          return "";
        }
        function Mx() {
          return !0;
        }
        function $x(e, o) {
          if (((e = Ee(e)), e < 1 || e > ve)) return [];
          var u = $e,
            d = ft(e, $e);
          (o = se(o)), (e -= $e);
          for (var g = Ha(d, o); ++u < e; ) o(u);
          return g;
        }
        function kx(e) {
          return be(e) ? Ke(e, dn) : Mt(e) ? [e] : Et(Gc(Ue(e)));
        }
        function Nx(e) {
          var o = ++Jg;
          return Ue(e) + o;
        }
        var Bx = bi(function (e, o) {
            return e + o;
          }, 0),
          Ux = hs("ceil"),
          Vx = bi(function (e, o) {
            return e / o;
          }, 1),
          Hx = hs("floor");
        function jx(e) {
          return e && e.length ? fi(e, Ct, Qa) : r;
        }
        function Wx(e, o) {
          return e && e.length ? fi(e, se(o, 2), Qa) : r;
        }
        function zx(e) {
          return Il(e, Ct);
        }
        function Gx(e, o) {
          return Il(e, se(o, 2));
        }
        function Kx(e) {
          return e && e.length ? fi(e, Ct, rs) : r;
        }
        function qx(e, o) {
          return e && e.length ? fi(e, se(o, 2), rs) : r;
        }
        var Jx = bi(function (e, o) {
            return e * o;
          }, 1),
          Yx = hs("round"),
          Xx = bi(function (e, o) {
            return e - o;
          }, 0);
        function Zx(e) {
          return e && e.length ? Va(e, Ct) : 0;
        }
        function Qx(e, o) {
          return e && e.length ? Va(e, se(o, 2)) : 0;
        }
        return (
          (m.after = E1),
          (m.ary = rf),
          (m.assign = ub),
          (m.assignIn = bf),
          (m.assignInWith = Ti),
          (m.assignWith = lb),
          (m.at = cb),
          (m.before = of),
          (m.bind = Os),
          (m.bindAll = gx),
          (m.bindKey = af),
          (m.castArray = F1),
          (m.chain = ef),
          (m.chunk = Hm),
          (m.compact = jm),
          (m.concat = Wm),
          (m.cond = vx),
          (m.conforms = mx),
          (m.constant = Fs),
          (m.countBy = Z0),
          (m.create = fb),
          (m.curry = sf),
          (m.curryRight = uf),
          (m.debounce = lf),
          (m.defaults = db),
          (m.defaultsDeep = pb),
          (m.defer = w1),
          (m.delay = S1),
          (m.difference = zm),
          (m.differenceBy = Gm),
          (m.differenceWith = Km),
          (m.drop = qm),
          (m.dropRight = Jm),
          (m.dropRightWhile = Ym),
          (m.dropWhile = Xm),
          (m.fill = Zm),
          (m.filter = e1),
          (m.flatMap = r1),
          (m.flatMapDeep = o1),
          (m.flatMapDepth = i1),
          (m.flatten = Yc),
          (m.flattenDeep = Qm),
          (m.flattenDepth = e0),
          (m.flip = C1),
          (m.flow = xx),
          (m.flowRight = yx),
          (m.fromPairs = t0),
          (m.functions = yb),
          (m.functionsIn = Eb),
          (m.groupBy = a1),
          (m.initial = r0),
          (m.intersection = o0),
          (m.intersectionBy = i0),
          (m.intersectionWith = a0),
          (m.invert = Sb),
          (m.invertBy = Cb),
          (m.invokeMap = u1),
          (m.iteratee = Ls),
          (m.keyBy = l1),
          (m.keys = at),
          (m.keysIn = St),
          (m.map = _i),
          (m.mapKeys = Ob),
          (m.mapValues = Pb),
          (m.matches = Ex),
          (m.matchesProperty = wx),
          (m.memoize = Pi),
          (m.merge = Ab),
          (m.mergeWith = xf),
          (m.method = Sx),
          (m.methodOf = Cx),
          (m.mixin = Ms),
          (m.negate = Ai),
          (m.nthArg = Ox),
          (m.omit = Db),
          (m.omitBy = Rb),
          (m.once = _1),
          (m.orderBy = c1),
          (m.over = Px),
          (m.overArgs = O1),
          (m.overEvery = Ax),
          (m.overSome = Dx),
          (m.partial = Ps),
          (m.partialRight = cf),
          (m.partition = f1),
          (m.pick = Tb),
          (m.pickBy = yf),
          (m.property = Pf),
          (m.propertyOf = Rx),
          (m.pull = c0),
          (m.pullAll = Zc),
          (m.pullAllBy = f0),
          (m.pullAllWith = d0),
          (m.pullAt = p0),
          (m.range = Tx),
          (m.rangeRight = Ix),
          (m.rearg = P1),
          (m.reject = h1),
          (m.remove = h0),
          (m.rest = A1),
          (m.reverse = Cs),
          (m.sampleSize = v1),
          (m.set = Fb),
          (m.setWith = Lb),
          (m.shuffle = m1),
          (m.slice = g0),
          (m.sortBy = y1),
          (m.sortedUniq = w0),
          (m.sortedUniqBy = S0),
          (m.split = rx),
          (m.spread = D1),
          (m.tail = C0),
          (m.take = _0),
          (m.takeRight = O0),
          (m.takeRightWhile = P0),
          (m.takeWhile = A0),
          (m.tap = j0),
          (m.throttle = R1),
          (m.thru = Ci),
          (m.toArray = gf),
          (m.toPairs = Ef),
          (m.toPairsIn = wf),
          (m.toPath = kx),
          (m.toPlainObject = mf),
          (m.transform = Mb),
          (m.unary = T1),
          (m.union = D0),
          (m.unionBy = R0),
          (m.unionWith = T0),
          (m.uniq = I0),
          (m.uniqBy = F0),
          (m.uniqWith = L0),
          (m.unset = $b),
          (m.unzip = _s),
          (m.unzipWith = Qc),
          (m.update = kb),
          (m.updateWith = Nb),
          (m.values = $r),
          (m.valuesIn = Bb),
          (m.without = M0),
          (m.words = _f),
          (m.wrap = I1),
          (m.xor = $0),
          (m.xorBy = k0),
          (m.xorWith = N0),
          (m.zip = B0),
          (m.zipObject = U0),
          (m.zipObjectDeep = V0),
          (m.zipWith = H0),
          (m.entries = Ef),
          (m.entriesIn = wf),
          (m.extend = bf),
          (m.extendWith = Ti),
          Ms(m, m),
          (m.add = Bx),
          (m.attempt = Of),
          (m.camelCase = jb),
          (m.capitalize = Sf),
          (m.ceil = Ux),
          (m.clamp = Ub),
          (m.clone = L1),
          (m.cloneDeep = $1),
          (m.cloneDeepWith = k1),
          (m.cloneWith = M1),
          (m.conformsTo = N1),
          (m.deburr = Cf),
          (m.defaultTo = bx),
          (m.divide = Vx),
          (m.endsWith = Wb),
          (m.eq = sn),
          (m.escape = zb),
          (m.escapeRegExp = Gb),
          (m.every = Q0),
          (m.find = t1),
          (m.findIndex = qc),
          (m.findKey = hb),
          (m.findLast = n1),
          (m.findLastIndex = Jc),
          (m.findLastKey = gb),
          (m.floor = Hx),
          (m.forEach = tf),
          (m.forEachRight = nf),
          (m.forIn = vb),
          (m.forInRight = mb),
          (m.forOwn = bb),
          (m.forOwnRight = xb),
          (m.get = Rs),
          (m.gt = B1),
          (m.gte = U1),
          (m.has = wb),
          (m.hasIn = Ts),
          (m.head = Xc),
          (m.identity = Ct),
          (m.includes = s1),
          (m.indexOf = n0),
          (m.inRange = Vb),
          (m.invoke = _b),
          (m.isArguments = cr),
          (m.isArray = be),
          (m.isArrayBuffer = V1),
          (m.isArrayLike = wt),
          (m.isArrayLikeObject = Ze),
          (m.isBoolean = H1),
          (m.isBuffer = Hn),
          (m.isDate = j1),
          (m.isElement = W1),
          (m.isEmpty = z1),
          (m.isEqual = G1),
          (m.isEqualWith = K1),
          (m.isError = As),
          (m.isFinite = q1),
          (m.isFunction = _n),
          (m.isInteger = ff),
          (m.isLength = Di),
          (m.isMap = df),
          (m.isMatch = J1),
          (m.isMatchWith = Y1),
          (m.isNaN = X1),
          (m.isNative = Z1),
          (m.isNil = eb),
          (m.isNull = Q1),
          (m.isNumber = pf),
          (m.isObject = Je),
          (m.isObjectLike = Xe),
          (m.isPlainObject = mo),
          (m.isRegExp = Ds),
          (m.isSafeInteger = tb),
          (m.isSet = hf),
          (m.isString = Ri),
          (m.isSymbol = Mt),
          (m.isTypedArray = Mr),
          (m.isUndefined = nb),
          (m.isWeakMap = rb),
          (m.isWeakSet = ob),
          (m.join = s0),
          (m.kebabCase = Kb),
          (m.last = Kt),
          (m.lastIndexOf = u0),
          (m.lowerCase = qb),
          (m.lowerFirst = Jb),
          (m.lt = ib),
          (m.lte = ab),
          (m.max = jx),
          (m.maxBy = Wx),
          (m.mean = zx),
          (m.meanBy = Gx),
          (m.min = Kx),
          (m.minBy = qx),
          (m.stubArray = ks),
          (m.stubFalse = Ns),
          (m.stubObject = Fx),
          (m.stubString = Lx),
          (m.stubTrue = Mx),
          (m.multiply = Jx),
          (m.nth = l0),
          (m.noConflict = _x),
          (m.noop = $s),
          (m.now = Oi),
          (m.pad = Yb),
          (m.padEnd = Xb),
          (m.padStart = Zb),
          (m.parseInt = Qb),
          (m.random = Hb),
          (m.reduce = d1),
          (m.reduceRight = p1),
          (m.repeat = ex),
          (m.replace = tx),
          (m.result = Ib),
          (m.round = Yx),
          (m.runInContext = D),
          (m.sample = g1),
          (m.size = b1),
          (m.snakeCase = nx),
          (m.some = x1),
          (m.sortedIndex = v0),
          (m.sortedIndexBy = m0),
          (m.sortedIndexOf = b0),
          (m.sortedLastIndex = x0),
          (m.sortedLastIndexBy = y0),
          (m.sortedLastIndexOf = E0),
          (m.startCase = ox),
          (m.startsWith = ix),
          (m.subtract = Xx),
          (m.sum = Zx),
          (m.sumBy = Qx),
          (m.template = ax),
          (m.times = $x),
          (m.toFinite = On),
          (m.toInteger = Ee),
          (m.toLength = vf),
          (m.toLower = sx),
          (m.toNumber = qt),
          (m.toSafeInteger = sb),
          (m.toString = Ue),
          (m.toUpper = ux),
          (m.trim = lx),
          (m.trimEnd = cx),
          (m.trimStart = fx),
          (m.truncate = dx),
          (m.unescape = px),
          (m.uniqueId = Nx),
          (m.upperCase = hx),
          (m.upperFirst = Is),
          (m.each = tf),
          (m.eachRight = nf),
          (m.first = Xc),
          Ms(
            m,
            (function () {
              var e = {};
              return (
                cn(m, function (o, u) {
                  Ve.call(m.prototype, u) || (e[u] = o);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (m.VERSION = i),
          Ht(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (e) {
              m[e].placeholder = m;
            }
          ),
          Ht(["drop", "take"], function (e, o) {
            (Pe.prototype[e] = function (u) {
              u = u === r ? 1 : rt(Ee(u), 0);
              var d = this.__filtered__ && !o ? new Pe(this) : this.clone();
              return (
                d.__filtered__
                  ? (d.__takeCount__ = ft(u, d.__takeCount__))
                  : d.__views__.push({
                      size: ft(u, $e),
                      type: e + (d.__dir__ < 0 ? "Right" : ""),
                    }),
                d
              );
            }),
              (Pe.prototype[e + "Right"] = function (u) {
                return this.reverse()[e](u).reverse();
              });
          }),
          Ht(["filter", "map", "takeWhile"], function (e, o) {
            var u = o + 1,
              d = u == Q || u == ae;
            Pe.prototype[e] = function (g) {
              var b = this.clone();
              return (
                b.__iteratees__.push({ iteratee: se(g, 3), type: u }),
                (b.__filtered__ = b.__filtered__ || d),
                b
              );
            };
          }),
          Ht(["head", "last"], function (e, o) {
            var u = "take" + (o ? "Right" : "");
            Pe.prototype[e] = function () {
              return this[u](1).value()[0];
            };
          }),
          Ht(["initial", "tail"], function (e, o) {
            var u = "drop" + (o ? "" : "Right");
            Pe.prototype[e] = function () {
              return this.__filtered__ ? new Pe(this) : this[u](1);
            };
          }),
          (Pe.prototype.compact = function () {
            return this.filter(Ct);
          }),
          (Pe.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (Pe.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (Pe.prototype.invokeMap = Se(function (e, o) {
            return typeof e == "function"
              ? new Pe(this)
              : this.map(function (u) {
                  return co(u, e, o);
                });
          })),
          (Pe.prototype.reject = function (e) {
            return this.filter(Ai(se(e)));
          }),
          (Pe.prototype.slice = function (e, o) {
            e = Ee(e);
            var u = this;
            return u.__filtered__ && (e > 0 || o < 0)
              ? new Pe(u)
              : (e < 0 ? (u = u.takeRight(-e)) : e && (u = u.drop(e)),
                o !== r &&
                  ((o = Ee(o)), (u = o < 0 ? u.dropRight(-o) : u.take(o - e))),
                u);
          }),
          (Pe.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (Pe.prototype.toArray = function () {
            return this.take($e);
          }),
          cn(Pe.prototype, function (e, o) {
            var u = /^(?:filter|find|map|reject)|While$/.test(o),
              d = /^(?:head|last)$/.test(o),
              g = m[d ? "take" + (o == "last" ? "Right" : "") : o],
              b = d || /^find/.test(o);
            !g ||
              (m.prototype[o] = function () {
                var C = this.__wrapped__,
                  O = d ? [1] : arguments,
                  T = C instanceof Pe,
                  H = O[0],
                  j = T || be(C),
                  W = function (Oe) {
                    var De = g.apply(m, Mn([Oe], O));
                    return d && Z ? De[0] : De;
                  };
                j &&
                  u &&
                  typeof H == "function" &&
                  H.length != 1 &&
                  (T = j = !1);
                var Z = this.__chain__,
                  ne = !!this.__actions__.length,
                  le = b && !Z,
                  we = T && !ne;
                if (!b && j) {
                  C = we ? C : new Pe(this);
                  var ce = e.apply(C, O);
                  return (
                    ce.__actions__.push({ func: Ci, args: [W], thisArg: r }),
                    new Wt(ce, Z)
                  );
                }
                return le && we
                  ? e.apply(this, O)
                  : ((ce = this.thru(W)),
                    le ? (d ? ce.value()[0] : ce.value()) : ce);
              });
          }),
          Ht(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (e) {
              var o = Yo[e],
                u = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                d = /^(?:pop|shift)$/.test(e);
              m.prototype[e] = function () {
                var g = arguments;
                if (d && !this.__chain__) {
                  var b = this.value();
                  return o.apply(be(b) ? b : [], g);
                }
                return this[u](function (C) {
                  return o.apply(be(C) ? C : [], g);
                });
              };
            }
          ),
          cn(Pe.prototype, function (e, o) {
            var u = m[o];
            if (u) {
              var d = u.name + "";
              Ve.call(Rr, d) || (Rr[d] = []), Rr[d].push({ name: o, func: u });
            }
          }),
          (Rr[mi(r, A).name] = [{ name: "wrapper", func: r }]),
          (Pe.prototype.clone = pv),
          (Pe.prototype.reverse = hv),
          (Pe.prototype.value = gv),
          (m.prototype.at = W0),
          (m.prototype.chain = z0),
          (m.prototype.commit = G0),
          (m.prototype.next = K0),
          (m.prototype.plant = J0),
          (m.prototype.reverse = Y0),
          (m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = X0),
          (m.prototype.first = m.prototype.head),
          ro && (m.prototype[ro] = q0),
          m
        );
      },
      Pr = Gg();
    nr ? (((nr.exports = Pr)._ = Pr), (La._ = Pr)) : (st._ = Pr);
  }).call(te);
})(Ld, Ld.exports);
const _O = An.object({
  mentionAllUsersFromGroup: An.boolean().optional(),
  remarketing: An.boolean().optional(),
  keyWarningAd: An.boolean().optional(),
  usageMonitor: An.boolean().optional(),
  usageMonitorSettings: An.object({
    max_delay: An.number(),
    min_delay: An.number(),
    max_hits_per_request: An.number(),
  }).optional(),
});
async function OO(t) {
  const n = _O.safeParse(t);
  n.success &&
    Object.keys(n.data).length > 0 &&
    de({ flags: JSON.stringify(n.data) });
}
function dD({ children: t }) {
  const { isPremium: n, responseData: r } = my(),
    [i, a] = E.exports.useState();
  E.exports.useEffect(() => {
    Ot("chave").then((c) => {
      c && a(c);
    });
  }, [n, r]);
  const s = {
      clientSideID: vy.VITE_LAUNCHDARKLY_SDK_KEY,
      options: {
        logger: {
          debug: (c) => {},
          info: (c) => {},
          warn: (c) => {},
          error: (c) => {
            console.log(c);
          },
        },
      },
      ...(i && {
        context: { key: i.toLowerCase().trim(), name: r, premium: !!n },
      }),
    },
    l = Nu.withLDProvider(s)(() => ye.createElement(ye.Fragment, null, t));
  return ye.createElement(l, null);
}
function pD() {
  const t = Nu.useFlags();
  return Object.keys(t).length > 0 && OO(t), t;
}
const PO = Jr.button`
  width: 7rem;
  height: 7rem;
  border: none;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  background: ${({ isActive: t, fill: n }) =>
    t && !!n ? Dn(0.8, n) : Dn(0.7, _o.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -15px ${({ fill: t }) => t && Dn(0.1, t)};
  &:hover {
    filter: brightness(0.9);
    background: ${({ fill: t }) => t && Dn(0.8, t)};
  }

  .imageContainer {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ isActive: t, fill: n }) =>
      t && !!n ? Dn(0.8, n) : Dn(0.7, _o.gray4)};

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
    font-weight: 700;
    text-shadow: 0px 0px 5px #0000005d;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ isActive: t, fill: n }) => (t && !!n ? n : "var(--text-title)")};
  }
`;
function hD({ name: t, Icon: n, fill: r, isActive: i, ...a }) {
  return ye.createElement(
    PO,
    { type: "button", fill: r, isActive: !!i, ...a },
    ye.createElement(
      "div",
      { className: "imageContainer" },
      ye.createElement(n, { className: "insideIcon" })
    ),
    ye.createElement("span", null, t)
  );
}
function AO(t, n) {
  return (
    n || (n = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(n) } })
    )
  );
}
function xr(t, n) {
  if (t == null) return {};
  var r = Kn(t, n),
    i,
    a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (a = 0; a < s.length; a++)
      (i = s[a]),
        !(n.indexOf(i) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(t, i) || (r[i] = t[i]));
  }
  return r;
}
function qr(t) {
  return (
    (qr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    qr(t)
  );
}
function Xu(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function DO(t, n) {
  if (qr(t) !== "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(t, n || "default");
    if (qr(i) !== "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function bh(t) {
  var n = DO(t, "string");
  return qr(n) === "symbol" ? n : String(n);
}
function Md(t, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, bh(i.key), i);
  }
}
function Zu(t, n, r) {
  return (
    n && Md(t.prototype, n),
    r && Md(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function Qu(t, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(n && n.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    n && py(t, n);
}
function pn(t, n, r) {
  return (
    (n = bh(n)),
    n in t
      ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[n] = r),
    t
  );
}
function RO(t, n, r) {
  return (
    n in t
      ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[n] = r),
    t
  );
}
function $d(t, n) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    n &&
      (i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function je(t) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? $d(Object(r), !0).forEach(function (i) {
          RO(t, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : $d(Object(r)).forEach(function (i) {
          Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
        });
  }
  return t;
}
function Qi(t) {
  return (
    (Qi = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Qi(t)
  );
}
function TO() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function IO(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function FO(t, n) {
  return n && (typeof n == "object" || typeof n == "function") ? n : IO(t);
}
function el(t) {
  var n = TO();
  return function () {
    var i = Qi(t),
      a;
    if (n) {
      var s = Qi(this).constructor;
      a = Reflect.construct(i, arguments, s);
    } else a = i.apply(this, arguments);
    return FO(this, a);
  };
}
var LO = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  ea = function () {};
function MO(t, n) {
  return n ? (n[0] === "-" ? t + n : t + "__" + n) : t;
}
function $O(t, n, r) {
  var i = [r];
  if (n && t)
    for (var a in n) n.hasOwnProperty(a) && n[a] && i.push("".concat(MO(t, a)));
  return i
    .filter(function (s) {
      return s;
    })
    .map(function (s) {
      return String(s).trim();
    })
    .join(" ");
}
var kd = function (n) {
    return GO(n)
      ? n.filter(Boolean)
      : qr(n) === "object" && n !== null
      ? [n]
      : [];
  },
  xh = function (n) {
    n.className,
      n.clearValue,
      n.cx,
      n.getStyles,
      n.getValue,
      n.hasValue,
      n.isMulti,
      n.isRtl,
      n.options,
      n.selectOption,
      n.selectProps,
      n.setValue,
      n.theme;
    var r = xr(n, LO);
    return je({}, r);
  };
function kO(t, n, r) {
  if (r) {
    var i = r(t, n);
    if (typeof i == "string") return i;
  }
  return t;
}
function tl(t) {
  return [document.documentElement, document.body, window].indexOf(t) > -1;
}
function yh(t) {
  return tl(t) ? window.pageYOffset : t.scrollTop;
}
function ta(t, n) {
  if (tl(t)) {
    window.scrollTo(0, n);
    return;
  }
  t.scrollTop = n;
}
function NO(t) {
  var n = getComputedStyle(t),
    r = n.position === "absolute",
    i = /(auto|scroll)/;
  if (n.position === "fixed") return document.documentElement;
  for (var a = t; (a = a.parentElement); )
    if (
      ((n = getComputedStyle(a)),
      !(r && n.position === "static") &&
        i.test(n.overflow + n.overflowY + n.overflowX))
    )
      return a;
  return document.documentElement;
}
function BO(t, n, r, i) {
  return r * ((t = t / i - 1) * t * t + 1) + n;
}
function Hi(t, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ea,
    a = yh(t),
    s = n - a,
    l = 10,
    c = 0;
  function f() {
    c += l;
    var p = BO(c, a, s, r);
    ta(t, p), c < r ? window.requestAnimationFrame(f) : i(t);
  }
  f();
}
function UO(t, n) {
  var r = t.getBoundingClientRect(),
    i = n.getBoundingClientRect(),
    a = n.offsetHeight / 3;
  i.bottom + a > r.bottom
    ? ta(
        t,
        Math.min(
          n.offsetTop + n.clientHeight - t.offsetHeight + a,
          t.scrollHeight
        )
      )
    : i.top - a < r.top && ta(t, Math.max(n.offsetTop - a, 0));
}
function VO(t) {
  var n = t.getBoundingClientRect();
  return {
    bottom: n.bottom,
    height: n.height,
    left: n.left,
    right: n.right,
    top: n.top,
    width: n.width,
  };
}
function Nd() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function HO() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var Eh = !1,
  jO = {
    get passive() {
      return (Eh = !0);
    },
  },
  ji = typeof window < "u" ? window : {};
ji.addEventListener &&
  ji.removeEventListener &&
  (ji.addEventListener("p", ea, jO), ji.removeEventListener("p", ea, !1));
var WO = Eh;
function zO(t) {
  return t != null;
}
function GO(t) {
  return Array.isArray(t);
}
function Wi(t, n, r) {
  return t ? n : r;
}
function KO(t) {
  var n = t.maxHeight,
    r = t.menuEl,
    i = t.minHeight,
    a = t.placement,
    s = t.shouldScroll,
    l = t.isFixedPosition,
    c = t.theme,
    f = c.spacing,
    p = NO(r),
    h = { placement: "bottom", maxHeight: n };
  if (!r || !r.offsetParent) return h;
  var v = p.getBoundingClientRect(),
    w = v.height,
    x = r.getBoundingClientRect(),
    y = x.bottom,
    S = x.height,
    _ = x.top,
    A = r.offsetParent.getBoundingClientRect(),
    P = A.top,
    F = window.innerHeight,
    R = yh(p),
    I = parseInt(getComputedStyle(r).marginBottom, 10),
    $ = parseInt(getComputedStyle(r).marginTop, 10),
    L = P - $,
    V = F - _,
    U = L + R,
    k = w - R - _,
    q = y - F + R + I,
    Y = R + _ - $,
    G = 160;
  switch (a) {
    case "auto":
    case "bottom":
      if (V >= S) return { placement: "bottom", maxHeight: n };
      if (k >= S && !l)
        return s && Hi(p, q, G), { placement: "bottom", maxHeight: n };
      if ((!l && k >= i) || (l && V >= i)) {
        s && Hi(p, q, G);
        var Q = l ? V - I : k - I;
        return { placement: "bottom", maxHeight: Q };
      }
      if (a === "auto" || l) {
        var X = n,
          ae = l ? L : U;
        return (
          ae >= i && (X = Math.min(ae - I - f.controlHeight, n)),
          { placement: "top", maxHeight: X }
        );
      }
      if (a === "bottom")
        return s && ta(p, q), { placement: "bottom", maxHeight: n };
      break;
    case "top":
      if (L >= S) return { placement: "top", maxHeight: n };
      if (U >= S && !l)
        return s && Hi(p, Y, G), { placement: "top", maxHeight: n };
      if ((!l && U >= i) || (l && L >= i)) {
        var re = n;
        return (
          ((!l && U >= i) || (l && L >= i)) && (re = l ? L - $ : U - $),
          s && Hi(p, Y, G),
          { placement: "top", maxHeight: re }
        );
      }
      return { placement: "bottom", maxHeight: n };
    default:
      throw new Error('Invalid placement provided "'.concat(a, '".'));
  }
  return h;
}
function qO(t) {
  var n = { bottom: "top", top: "bottom" };
  return t ? n[t] : "bottom";
}
var _u = function (n) {
    return n === "auto" ? "bottom" : n;
  },
  JO = function (n) {
    var r,
      i = n.placement,
      a = n.theme,
      s = a.borderRadius,
      l = a.spacing,
      c = a.colors;
    return (
      (r = { label: "menu" }),
      pn(r, qO(i), "100%"),
      pn(r, "backgroundColor", c.neutral0),
      pn(r, "borderRadius", s),
      pn(
        r,
        "boxShadow",
        "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"
      ),
      pn(r, "marginBottom", l.menuGutter),
      pn(r, "marginTop", l.menuGutter),
      pn(r, "position", "absolute"),
      pn(r, "width", "100%"),
      pn(r, "zIndex", 1),
      r
    );
  },
  wh = E.exports.createContext({ getPortalPlacement: null }),
  Sh = (function (t) {
    Qu(r, t);
    var n = el(r);
    function r() {
      var i;
      Xu(this, r);
      for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
        s[l] = arguments[l];
      return (
        (i = n.call.apply(n, [this].concat(s))),
        (i.state = { maxHeight: i.props.maxMenuHeight, placement: null }),
        (i.context = void 0),
        (i.getPlacement = function (c) {
          var f = i.props,
            p = f.minMenuHeight,
            h = f.maxMenuHeight,
            v = f.menuPlacement,
            w = f.menuPosition,
            x = f.menuShouldScrollIntoView,
            y = f.theme;
          if (!!c) {
            var S = w === "fixed",
              _ = x && !S,
              A = KO({
                maxHeight: h,
                menuEl: c,
                minHeight: p,
                placement: v,
                shouldScroll: _,
                isFixedPosition: S,
                theme: y,
              }),
              P = i.context.getPortalPlacement;
            P && P(A), i.setState(A);
          }
        }),
        (i.getUpdatedProps = function () {
          var c = i.props.menuPlacement,
            f = i.state.placement || _u(c);
          return je(
            je({}, i.props),
            {},
            { placement: f, maxHeight: i.state.maxHeight }
          );
        }),
        i
      );
    }
    return (
      Zu(r, [
        {
          key: "render",
          value: function () {
            var a = this.props.children;
            return a({
              ref: this.getPlacement,
              placerProps: this.getUpdatedProps(),
            });
          },
        },
      ]),
      r
    );
  })(E.exports.Component);
Sh.contextType = wh;
var YO = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerRef,
      c = n.innerProps;
    return ue(
      "div",
      K({ css: s("menu", n), className: a({ menu: !0 }, i), ref: l }, c),
      r
    );
  },
  XO = function (n) {
    var r = n.maxHeight,
      i = n.theme.spacing.baseUnit;
    return {
      maxHeight: r,
      overflowY: "auto",
      paddingBottom: i,
      paddingTop: i,
      position: "relative",
      WebkitOverflowScrolling: "touch",
    };
  },
  ZO = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerProps,
      c = n.innerRef,
      f = n.isMulti;
    return ue(
      "div",
      K(
        {
          css: s("menuList", n),
          className: a({ "menu-list": !0, "menu-list--is-multi": f }, i),
          ref: c,
        },
        l
      ),
      r
    );
  },
  Ch = function (n) {
    var r = n.theme,
      i = r.spacing.baseUnit,
      a = r.colors;
    return {
      color: a.neutral40,
      padding: "".concat(i * 2, "px ").concat(i * 3, "px"),
      textAlign: "center",
    };
  },
  QO = Ch,
  eP = Ch,
  _h = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerProps;
    return ue(
      "div",
      K(
        {
          css: s("noOptionsMessage", n),
          className: a({ "menu-notice": !0, "menu-notice--no-options": !0 }, i),
        },
        l
      ),
      r
    );
  };
_h.defaultProps = { children: "No options" };
var Oh = function (n) {
  var r = n.children,
    i = n.className,
    a = n.cx,
    s = n.getStyles,
    l = n.innerProps;
  return ue(
    "div",
    K(
      {
        css: s("loadingMessage", n),
        className: a({ "menu-notice": !0, "menu-notice--loading": !0 }, i),
      },
      l
    ),
    r
  );
};
Oh.defaultProps = { children: "Loading..." };
var tP = function (n) {
    var r = n.rect,
      i = n.offset,
      a = n.position;
    return { left: r.left, position: a, top: i, width: r.width, zIndex: 1 };
  },
  nP = (function (t) {
    Qu(r, t);
    var n = el(r);
    function r() {
      var i;
      Xu(this, r);
      for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
        s[l] = arguments[l];
      return (
        (i = n.call.apply(n, [this].concat(s))),
        (i.state = { placement: null }),
        (i.getPortalPlacement = function (c) {
          var f = c.placement,
            p = _u(i.props.menuPlacement);
          f !== p && i.setState({ placement: f });
        }),
        i
      );
    }
    return (
      Zu(r, [
        {
          key: "render",
          value: function () {
            var a = this.props,
              s = a.appendTo,
              l = a.children,
              c = a.className,
              f = a.controlElement,
              p = a.cx,
              h = a.innerProps,
              v = a.menuPlacement,
              w = a.menuPosition,
              x = a.getStyles,
              y = w === "fixed";
            if ((!s && !y) || !f) return null;
            var S = this.state.placement || _u(v),
              _ = VO(f),
              A = y ? 0 : window.pageYOffset,
              P = _[S] + A,
              F = { offset: P, position: w, rect: _ },
              R = ue(
                "div",
                K(
                  {
                    css: x("menuPortal", F),
                    className: p({ "menu-portal": !0 }, c),
                  },
                  h
                ),
                l
              );
            return ue(
              wh.Provider,
              { value: { getPortalPlacement: this.getPortalPlacement } },
              s ? Zd.exports.createPortal(R, s) : R
            );
          },
        },
      ]),
      r
    );
  })(E.exports.Component),
  rP = function (n) {
    var r = n.isDisabled,
      i = n.isRtl;
    return {
      label: "container",
      direction: i ? "rtl" : void 0,
      pointerEvents: r ? "none" : void 0,
      position: "relative",
    };
  },
  oP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerProps,
      c = n.isDisabled,
      f = n.isRtl;
    return ue(
      "div",
      K(
        {
          css: s("container", n),
          className: a({ "--is-disabled": c, "--is-rtl": f }, i),
        },
        l
      ),
      r
    );
  },
  iP = function (n) {
    var r = n.theme.spacing,
      i = n.isMulti,
      a = n.hasValue,
      s = n.selectProps.controlShouldRenderValue;
    return {
      alignItems: "center",
      display: i && a && s ? "flex" : "grid",
      flex: 1,
      flexWrap: "wrap",
      padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px"),
      WebkitOverflowScrolling: "touch",
      position: "relative",
      overflow: "hidden",
    };
  },
  aP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.innerProps,
      l = n.isMulti,
      c = n.getStyles,
      f = n.hasValue;
    return ue(
      "div",
      K(
        {
          css: c("valueContainer", n),
          className: a(
            {
              "value-container": !0,
              "value-container--is-multi": l,
              "value-container--has-value": f,
            },
            i
          ),
        },
        s
      ),
      r
    );
  },
  sP = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  uP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.innerProps,
      l = n.getStyles;
    return ue(
      "div",
      K(
        {
          css: l("indicatorsContainer", n),
          className: a({ indicators: !0 }, i),
        },
        s
      ),
      r
    );
  },
  Bd,
  lP = ["size"],
  cP = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  Ph = function (n) {
    var r = n.size,
      i = xr(n, lP);
    return ue(
      "svg",
      K(
        {
          height: r,
          width: r,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: cP,
        },
        i
      )
    );
  },
  nl = function (n) {
    return ue(
      Ph,
      K({ size: 20 }, n),
      ue("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  },
  Ah = function (n) {
    return ue(
      Ph,
      K({ size: 20 }, n),
      ue("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  },
  Dh = function (n) {
    var r = n.isFocused,
      i = n.theme,
      a = i.spacing.baseUnit,
      s = i.colors;
    return {
      label: "indicatorContainer",
      color: r ? s.neutral60 : s.neutral20,
      display: "flex",
      padding: a * 2,
      transition: "color 150ms",
      ":hover": { color: r ? s.neutral80 : s.neutral40 },
    };
  },
  fP = Dh,
  dP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerProps;
    return ue(
      "div",
      K(
        {
          css: s("dropdownIndicator", n),
          className: a({ indicator: !0, "dropdown-indicator": !0 }, i),
        },
        l
      ),
      r || ue(Ah, null)
    );
  },
  pP = Dh,
  hP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerProps;
    return ue(
      "div",
      K(
        {
          css: s("clearIndicator", n),
          className: a({ indicator: !0, "clear-indicator": !0 }, i),
        },
        l
      ),
      r || ue(nl, null)
    );
  },
  gP = function (n) {
    var r = n.isDisabled,
      i = n.theme,
      a = i.spacing.baseUnit,
      s = i.colors;
    return {
      label: "indicatorSeparator",
      alignSelf: "stretch",
      backgroundColor: r ? s.neutral10 : s.neutral20,
      marginBottom: a * 2,
      marginTop: a * 2,
      width: 1,
    };
  },
  vP = function (n) {
    var r = n.className,
      i = n.cx,
      a = n.getStyles,
      s = n.innerProps;
    return ue(
      "span",
      K({}, s, {
        css: a("indicatorSeparator", n),
        className: i({ "indicator-separator": !0 }, r),
      })
    );
  },
  mP = hy(
    Bd ||
      (Bd = AO([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  bP = function (n) {
    var r = n.isFocused,
      i = n.size,
      a = n.theme,
      s = a.colors,
      l = a.spacing.baseUnit;
    return {
      label: "loadingIndicator",
      color: r ? s.neutral60 : s.neutral20,
      display: "flex",
      padding: l * 2,
      transition: "color 150ms",
      alignSelf: "center",
      fontSize: i,
      lineHeight: 1,
      marginRight: i,
      textAlign: "center",
      verticalAlign: "middle",
    };
  },
  su = function (n) {
    var r = n.delay,
      i = n.offset;
    return ue("span", {
      css: ap(
        {
          animation: ""
            .concat(mP, " 1s ease-in-out ")
            .concat(r, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: i ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        ""
      ),
    });
  },
  Rh = function (n) {
    var r = n.className,
      i = n.cx,
      a = n.getStyles,
      s = n.innerProps,
      l = n.isRtl;
    return ue(
      "div",
      K(
        {
          css: a("loadingIndicator", n),
          className: i({ indicator: !0, "loading-indicator": !0 }, r),
        },
        s
      ),
      ue(su, { delay: 0, offset: l }),
      ue(su, { delay: 160, offset: !0 }),
      ue(su, { delay: 320, offset: !l })
    );
  };
Rh.defaultProps = { size: 4 };
var xP = function (n) {
    var r = n.isDisabled,
      i = n.isFocused,
      a = n.theme,
      s = a.colors,
      l = a.borderRadius,
      c = a.spacing;
    return {
      label: "control",
      alignItems: "center",
      backgroundColor: r ? s.neutral5 : s.neutral0,
      borderColor: r ? s.neutral10 : i ? s.primary : s.neutral20,
      borderRadius: l,
      borderStyle: "solid",
      borderWidth: 1,
      boxShadow: i ? "0 0 0 1px ".concat(s.primary) : void 0,
      cursor: "default",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      minHeight: c.controlHeight,
      outline: "0 !important",
      position: "relative",
      transition: "all 100ms",
      "&:hover": { borderColor: i ? s.primary : s.neutral30 },
    };
  },
  yP = function (n) {
    var r = n.children,
      i = n.cx,
      a = n.getStyles,
      s = n.className,
      l = n.isDisabled,
      c = n.isFocused,
      f = n.innerRef,
      p = n.innerProps,
      h = n.menuIsOpen;
    return ue(
      "div",
      K(
        {
          ref: f,
          css: a("control", n),
          className: i(
            {
              control: !0,
              "control--is-disabled": l,
              "control--is-focused": c,
              "control--menu-is-open": h,
            },
            s
          ),
        },
        p
      ),
      r
    );
  },
  EP = ["data"],
  wP = function (n) {
    var r = n.theme.spacing;
    return { paddingBottom: r.baseUnit * 2, paddingTop: r.baseUnit * 2 };
  },
  SP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.Heading,
      c = n.headingProps,
      f = n.innerProps,
      p = n.label,
      h = n.theme,
      v = n.selectProps;
    return ue(
      "div",
      K({ css: s("group", n), className: a({ group: !0 }, i) }, f),
      ue(l, K({}, c, { selectProps: v, theme: h, getStyles: s, cx: a }), p),
      ue("div", null, r)
    );
  },
  CP = function (n) {
    var r = n.theme.spacing;
    return {
      label: "group",
      color: "#999",
      cursor: "default",
      display: "block",
      fontSize: "75%",
      fontWeight: 500,
      marginBottom: "0.25em",
      paddingLeft: r.baseUnit * 3,
      paddingRight: r.baseUnit * 3,
      textTransform: "uppercase",
    };
  },
  _P = function (n) {
    var r = n.getStyles,
      i = n.cx,
      a = n.className,
      s = xh(n);
    s.data;
    var l = xr(s, EP);
    return ue(
      "div",
      K(
        { css: r("groupHeading", n), className: i({ "group-heading": !0 }, a) },
        l
      )
    );
  },
  OP = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  PP = function (n) {
    var r = n.isDisabled,
      i = n.value,
      a = n.theme,
      s = a.spacing,
      l = a.colors;
    return je(
      {
        margin: s.baseUnit / 2,
        paddingBottom: s.baseUnit / 2,
        paddingTop: s.baseUnit / 2,
        visibility: r ? "hidden" : "visible",
        color: l.neutral80,
        transform: i ? "translateZ(0)" : "",
      },
      AP
    );
  },
  Th = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  AP = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": je(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      Th
    ),
  },
  DP = function (n) {
    return je(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: n ? 0 : 1,
        width: "100%",
      },
      Th
    );
  },
  RP = function (n) {
    var r = n.className,
      i = n.cx,
      a = n.getStyles,
      s = n.value,
      l = xh(n),
      c = l.innerRef,
      f = l.isDisabled,
      p = l.isHidden,
      h = l.inputClassName,
      v = xr(l, OP);
    return ue(
      "div",
      {
        className: i({ "input-container": !0 }, r),
        css: a("input", n),
        "data-value": s || "",
      },
      ue(
        "input",
        K(
          { className: i({ input: !0 }, h), ref: c, style: DP(p), disabled: f },
          v
        )
      )
    );
  },
  TP = function (n) {
    var r = n.theme,
      i = r.spacing,
      a = r.borderRadius,
      s = r.colors;
    return {
      label: "multiValue",
      backgroundColor: s.neutral10,
      borderRadius: a / 2,
      display: "flex",
      margin: i.baseUnit / 2,
      minWidth: 0,
    };
  },
  IP = function (n) {
    var r = n.theme,
      i = r.borderRadius,
      a = r.colors,
      s = n.cropWithEllipsis;
    return {
      borderRadius: i / 2,
      color: a.neutral80,
      fontSize: "85%",
      overflow: "hidden",
      padding: 3,
      paddingLeft: 6,
      textOverflow: s || s === void 0 ? "ellipsis" : void 0,
      whiteSpace: "nowrap",
    };
  },
  FP = function (n) {
    var r = n.theme,
      i = r.spacing,
      a = r.borderRadius,
      s = r.colors,
      l = n.isFocused;
    return {
      alignItems: "center",
      borderRadius: a / 2,
      backgroundColor: l ? s.dangerLight : void 0,
      display: "flex",
      paddingLeft: i.baseUnit,
      paddingRight: i.baseUnit,
      ":hover": { backgroundColor: s.dangerLight, color: s.danger },
    };
  },
  Ih = function (n) {
    var r = n.children,
      i = n.innerProps;
    return ue("div", i, r);
  },
  LP = Ih,
  MP = Ih;
function $P(t) {
  var n = t.children,
    r = t.innerProps;
  return ue("div", K({ role: "button" }, r), n || ue(nl, { size: 14 }));
}
var kP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.components,
      s = n.cx,
      l = n.data,
      c = n.getStyles,
      f = n.innerProps,
      p = n.isDisabled,
      h = n.removeProps,
      v = n.selectProps,
      w = a.Container,
      x = a.Label,
      y = a.Remove;
    return ue(gy, null, function (S) {
      var _ = S.css,
        A = S.cx;
      return ue(
        w,
        {
          data: l,
          innerProps: je(
            {
              className: A(
                _(c("multiValue", n)),
                s({ "multi-value": !0, "multi-value--is-disabled": p }, i)
              ),
            },
            f
          ),
          selectProps: v,
        },
        ue(
          x,
          {
            data: l,
            innerProps: {
              className: A(
                _(c("multiValueLabel", n)),
                s({ "multi-value__label": !0 }, i)
              ),
            },
            selectProps: v,
          },
          r
        ),
        ue(y, {
          data: l,
          innerProps: je(
            {
              className: A(
                _(c("multiValueRemove", n)),
                s({ "multi-value__remove": !0 }, i)
              ),
              "aria-label": "Remove ".concat(r || "option"),
            },
            h
          ),
          selectProps: v,
        })
      );
    });
  },
  NP = function (n) {
    var r = n.isDisabled,
      i = n.isFocused,
      a = n.isSelected,
      s = n.theme,
      l = s.spacing,
      c = s.colors;
    return {
      label: "option",
      backgroundColor: a ? c.primary : i ? c.primary25 : "transparent",
      color: r ? c.neutral20 : a ? c.neutral0 : "inherit",
      cursor: "default",
      display: "block",
      fontSize: "inherit",
      padding: "".concat(l.baseUnit * 2, "px ").concat(l.baseUnit * 3, "px"),
      width: "100%",
      userSelect: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      ":active": { backgroundColor: r ? void 0 : a ? c.primary : c.primary50 },
    };
  },
  BP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.isDisabled,
      c = n.isFocused,
      f = n.isSelected,
      p = n.innerRef,
      h = n.innerProps;
    return ue(
      "div",
      K(
        {
          css: s("option", n),
          className: a(
            {
              option: !0,
              "option--is-disabled": l,
              "option--is-focused": c,
              "option--is-selected": f,
            },
            i
          ),
          ref: p,
          "aria-disabled": l,
        },
        h
      ),
      r
    );
  },
  UP = function (n) {
    var r = n.theme,
      i = r.spacing,
      a = r.colors;
    return {
      label: "placeholder",
      color: a.neutral50,
      gridArea: "1 / 1 / 2 / 3",
      marginLeft: i.baseUnit / 2,
      marginRight: i.baseUnit / 2,
    };
  },
  VP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.innerProps;
    return ue(
      "div",
      K({ css: s("placeholder", n), className: a({ placeholder: !0 }, i) }, l),
      r
    );
  },
  HP = function (n) {
    var r = n.isDisabled,
      i = n.theme,
      a = i.spacing,
      s = i.colors;
    return {
      label: "singleValue",
      color: r ? s.neutral40 : s.neutral80,
      gridArea: "1 / 1 / 2 / 3",
      marginLeft: a.baseUnit / 2,
      marginRight: a.baseUnit / 2,
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    };
  },
  jP = function (n) {
    var r = n.children,
      i = n.className,
      a = n.cx,
      s = n.getStyles,
      l = n.isDisabled,
      c = n.innerProps;
    return ue(
      "div",
      K(
        {
          css: s("singleValue", n),
          className: a(
            { "single-value": !0, "single-value--is-disabled": l },
            i
          ),
        },
        c
      ),
      r
    );
  },
  WP = {
    ClearIndicator: hP,
    Control: yP,
    DropdownIndicator: dP,
    DownChevron: Ah,
    CrossIcon: nl,
    Group: SP,
    GroupHeading: _P,
    IndicatorsContainer: uP,
    IndicatorSeparator: vP,
    Input: RP,
    LoadingIndicator: Rh,
    Menu: YO,
    MenuList: ZO,
    MenuPortal: nP,
    LoadingMessage: Oh,
    NoOptionsMessage: _h,
    MultiValue: kP,
    MultiValueContainer: LP,
    MultiValueLabel: MP,
    MultiValueRemove: $P,
    Option: BP,
    Placeholder: VP,
    SelectContainer: oP,
    SingleValue: jP,
    ValueContainer: aP,
  },
  zP = function (n) {
    return je(je({}, WP), n.components);
  };
function Ou(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var r = 0, i = new Array(n); r < n; r++) i[r] = t[r];
  return i;
}
function GP(t) {
  if (Array.isArray(t)) return Ou(t);
}
function KP(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function Fh(t, n) {
  if (!!t) {
    if (typeof t == "string") return Ou(t, n);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (r === "Object" && t.constructor && (r = t.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ou(t, n);
  }
}
function qP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lh(t) {
  return GP(t) || KP(t) || Fh(t) || qP();
}
var Ud =
  Number.isNaN ||
  function (n) {
    return typeof n == "number" && n !== n;
  };
function JP(t, n) {
  return !!(t === n || (Ud(t) && Ud(n)));
}
function YP(t, n) {
  if (t.length !== n.length) return !1;
  for (var r = 0; r < t.length; r++) if (!JP(t[r], n[r])) return !1;
  return !0;
}
function XP(t, n) {
  n === void 0 && (n = YP);
  var r,
    i = [],
    a,
    s = !1;
  function l() {
    for (var c = [], f = 0; f < arguments.length; f++) c[f] = arguments[f];
    return (
      (s && r === this && n(c, i)) ||
        ((a = t.apply(this, c)), (s = !0), (r = this), (i = c)),
      a
    );
  }
  return l;
}
var ZP = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  Vd = function (n) {
    return ue("span", K({ css: ZP }, n));
  },
  QP = {
    guidance: function (n) {
      var r = n.isSearchable,
        i = n.isMulti,
        a = n.isDisabled,
        s = n.tabSelectsValue,
        l = n.context;
      switch (l) {
        case "menu":
          return "Use Up and Down to choose options"
            .concat(
              a ? "" : ", press Enter to select the currently focused option",
              ", press Escape to exit the menu"
            )
            .concat(
              s ? ", press Tab to select the option and exit the menu" : "",
              "."
            );
        case "input":
          return ""
            .concat(n["aria-label"] || "Select", " is focused ")
            .concat(
              r ? ",type to refine list" : "",
              ", press Down to open the menu, "
            )
            .concat(i ? " press left to focus selected values" : "");
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (n) {
      var r = n.action,
        i = n.label,
        a = i === void 0 ? "" : i,
        s = n.labels,
        l = n.isDisabled;
      switch (r) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(a, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(s.length > 1 ? "s" : "", " ")
            .concat(s.join(","), ", selected.");
        case "select-option":
          return l
            ? "option ".concat(a, " is disabled. Select another option.")
            : "option ".concat(a, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (n) {
      var r = n.context,
        i = n.focused,
        a = n.options,
        s = n.label,
        l = s === void 0 ? "" : s,
        c = n.selectValue,
        f = n.isDisabled,
        p = n.isSelected,
        h = function (y, S) {
          return y && y.length
            ? "".concat(y.indexOf(S) + 1, " of ").concat(y.length)
            : "";
        };
      if (r === "value" && c)
        return "value ".concat(l, " focused, ").concat(h(c, i), ".");
      if (r === "menu") {
        var v = f ? " disabled" : "",
          w = "".concat(p ? "selected" : "focused").concat(v);
        return "option ".concat(l, " ").concat(w, ", ").concat(h(a, i), ".");
      }
      return "";
    },
    onFilter: function (n) {
      var r = n.inputValue,
        i = n.resultsMessage;
      return "".concat(i).concat(r ? " for search term " + r : "", ".");
    },
  },
  eA = function (n) {
    var r = n.ariaSelection,
      i = n.focusedOption,
      a = n.focusedValue,
      s = n.focusableOptions,
      l = n.isFocused,
      c = n.selectValue,
      f = n.selectProps,
      p = n.id,
      h = f.ariaLiveMessages,
      v = f.getOptionLabel,
      w = f.inputValue,
      x = f.isMulti,
      y = f.isOptionDisabled,
      S = f.isSearchable,
      _ = f.menuIsOpen,
      A = f.options,
      P = f.screenReaderStatus,
      F = f.tabSelectsValue,
      R = f["aria-label"],
      I = f["aria-live"],
      $ = E.exports.useMemo(
        function () {
          return je(je({}, QP), h || {});
        },
        [h]
      ),
      L = E.exports.useMemo(
        function () {
          var Q = "";
          if (r && $.onChange) {
            var X = r.option,
              ae = r.options,
              re = r.removedValue,
              ve = r.removedValues,
              _e = r.value,
              Ie = function (Be) {
                return Array.isArray(Be) ? null : Be;
              },
              $e = re || X || Ie(_e),
              Re = $e ? v($e) : "",
              ke = ae || ve || void 0,
              Ne = ke ? ke.map(v) : [],
              Ae = je({ isDisabled: $e && y($e, c), label: Re, labels: Ne }, r);
            Q = $.onChange(Ae);
          }
          return Q;
        },
        [r, $, y, c, v]
      ),
      V = E.exports.useMemo(
        function () {
          var Q = "",
            X = i || a,
            ae = !!(i && c && c.includes(i));
          if (X && $.onFocus) {
            var re = {
              focused: X,
              label: v(X),
              isDisabled: y(X, c),
              isSelected: ae,
              options: A,
              context: X === i ? "menu" : "value",
              selectValue: c,
            };
            Q = $.onFocus(re);
          }
          return Q;
        },
        [i, a, v, y, $, A, c]
      ),
      U = E.exports.useMemo(
        function () {
          var Q = "";
          if (_ && A.length && $.onFilter) {
            var X = P({ count: s.length });
            Q = $.onFilter({ inputValue: w, resultsMessage: X });
          }
          return Q;
        },
        [s, w, _, $, A, P]
      ),
      k = E.exports.useMemo(
        function () {
          var Q = "";
          if ($.guidance) {
            var X = a ? "value" : _ ? "menu" : "input";
            Q = $.guidance({
              "aria-label": R,
              context: X,
              isDisabled: i && y(i, c),
              isMulti: x,
              isSearchable: S,
              tabSelectsValue: F,
            });
          }
          return Q;
        },
        [R, i, a, x, y, S, _, $, c, F]
      ),
      q = "".concat(V, " ").concat(U, " ").concat(k),
      Y = ue(
        E.exports.Fragment,
        null,
        ue("span", { id: "aria-selection" }, L),
        ue("span", { id: "aria-context" }, q)
      ),
      G = (r == null ? void 0 : r.action) === "initial-input-focus";
    return ue(
      E.exports.Fragment,
      null,
      ue(Vd, { id: p }, G && Y),
      ue(
        Vd,
        {
          "aria-live": I,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
        },
        l && !G && Y
      )
    );
  },
  Pu = [
    {
      base: "A",
      letters:
        "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
    },
    { base: "AA", letters: "\uA732" },
    { base: "AE", letters: "\xC6\u01FC\u01E2" },
    { base: "AO", letters: "\uA734" },
    { base: "AU", letters: "\uA736" },
    { base: "AV", letters: "\uA738\uA73A" },
    { base: "AY", letters: "\uA73C" },
    { base: "B", letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181" },
    {
      base: "C",
      letters:
        "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E",
    },
    {
      base: "D",
      letters:
        "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779",
    },
    { base: "DZ", letters: "\u01F1\u01C4" },
    { base: "Dz", letters: "\u01F2\u01C5" },
    {
      base: "E",
      letters:
        "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E",
    },
    { base: "F", letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B" },
    {
      base: "G",
      letters:
        "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E",
    },
    {
      base: "H",
      letters:
        "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
    },
    {
      base: "I",
      letters:
        "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
    },
    { base: "J", letters: "J\u24BF\uFF2A\u0134\u0248" },
    {
      base: "K",
      letters:
        "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
    },
    {
      base: "L",
      letters:
        "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
    },
    { base: "LJ", letters: "\u01C7" },
    { base: "Lj", letters: "\u01C8" },
    { base: "M", letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C" },
    {
      base: "N",
      letters:
        "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4",
    },
    { base: "NJ", letters: "\u01CA" },
    { base: "Nj", letters: "\u01CB" },
    {
      base: "O",
      letters:
        "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
    },
    { base: "OI", letters: "\u01A2" },
    { base: "OO", letters: "\uA74E" },
    { base: "OU", letters: "\u0222" },
    {
      base: "P",
      letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
    },
    { base: "Q", letters: "Q\u24C6\uFF31\uA756\uA758\u024A" },
    {
      base: "R",
      letters:
        "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
    },
    {
      base: "S",
      letters:
        "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
    },
    {
      base: "T",
      letters:
        "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
    },
    { base: "TZ", letters: "\uA728" },
    {
      base: "U",
      letters:
        "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
    },
    { base: "V", letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245" },
    { base: "VY", letters: "\uA760" },
    {
      base: "W",
      letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
    },
    { base: "X", letters: "X\u24CD\uFF38\u1E8A\u1E8C" },
    {
      base: "Y",
      letters:
        "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
    },
    {
      base: "Z",
      letters:
        "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
    },
    {
      base: "a",
      letters:
        "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250",
    },
    { base: "aa", letters: "\uA733" },
    { base: "ae", letters: "\xE6\u01FD\u01E3" },
    { base: "ao", letters: "\uA735" },
    { base: "au", letters: "\uA737" },
    { base: "av", letters: "\uA739\uA73B" },
    { base: "ay", letters: "\uA73D" },
    { base: "b", letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253" },
    {
      base: "c",
      letters:
        "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184",
    },
    {
      base: "d",
      letters:
        "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A",
    },
    { base: "dz", letters: "\u01F3\u01C6" },
    {
      base: "e",
      letters:
        "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD",
    },
    { base: "f", letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C" },
    {
      base: "g",
      letters:
        "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F",
    },
    {
      base: "h",
      letters:
        "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
    },
    { base: "hv", letters: "\u0195" },
    {
      base: "i",
      letters:
        "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
    },
    { base: "j", letters: "j\u24D9\uFF4A\u0135\u01F0\u0249" },
    {
      base: "k",
      letters:
        "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
    },
    {
      base: "l",
      letters:
        "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747",
    },
    { base: "lj", letters: "\u01C9" },
    { base: "m", letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F" },
    {
      base: "n",
      letters:
        "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5",
    },
    { base: "nj", letters: "\u01CC" },
    {
      base: "o",
      letters:
        "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275",
    },
    { base: "oi", letters: "\u01A3" },
    { base: "ou", letters: "\u0223" },
    { base: "oo", letters: "\uA74F" },
    {
      base: "p",
      letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755",
    },
    { base: "q", letters: "q\u24E0\uFF51\u024B\uA757\uA759" },
    {
      base: "r",
      letters:
        "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
    },
    {
      base: "s",
      letters:
        "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B",
    },
    {
      base: "t",
      letters:
        "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
    },
    { base: "tz", letters: "\uA729" },
    {
      base: "u",
      letters:
        "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
    },
    { base: "v", letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C" },
    { base: "vy", letters: "\uA761" },
    {
      base: "w",
      letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
    },
    { base: "x", letters: "x\u24E7\uFF58\u1E8B\u1E8D" },
    {
      base: "y",
      letters:
        "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
    },
    {
      base: "z",
      letters:
        "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
    },
  ],
  tA = new RegExp(
    "[" +
      Pu.map(function (t) {
        return t.letters;
      }).join("") +
      "]",
    "g"
  ),
  Mh = {};
for (var uu = 0; uu < Pu.length; uu++)
  for (var lu = Pu[uu], cu = 0; cu < lu.letters.length; cu++)
    Mh[lu.letters[cu]] = lu.base;
var $h = function (n) {
    return n.replace(tA, function (r) {
      return Mh[r];
    });
  },
  nA = XP($h),
  Hd = function (n) {
    return n.replace(/^\s+|\s+$/g, "");
  },
  rA = function (n) {
    return "".concat(n.label, " ").concat(n.value);
  },
  oA = function (n) {
    return function (r, i) {
      if (r.data.__isNew__) return !0;
      var a = je(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: rA,
            trim: !0,
            matchFrom: "any",
          },
          n
        ),
        s = a.ignoreCase,
        l = a.ignoreAccents,
        c = a.stringify,
        f = a.trim,
        p = a.matchFrom,
        h = f ? Hd(i) : i,
        v = f ? Hd(c(r)) : c(r);
      return (
        s && ((h = h.toLowerCase()), (v = v.toLowerCase())),
        l && ((h = nA(h)), (v = $h(v))),
        p === "start" ? v.substr(0, h.length) === h : v.indexOf(h) > -1
      );
    };
  },
  iA = ["innerRef"];
function aA(t) {
  var n = t.innerRef,
    r = xr(t, iA);
  return ue(
    "input",
    K({ ref: n }, r, {
      css: ap(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        ""
      ),
    })
  );
}
var sA = function (n) {
  n.preventDefault(), n.stopPropagation();
};
function uA(t) {
  var n = t.isEnabled,
    r = t.onBottomArrive,
    i = t.onBottomLeave,
    a = t.onTopArrive,
    s = t.onTopLeave,
    l = E.exports.useRef(!1),
    c = E.exports.useRef(!1),
    f = E.exports.useRef(0),
    p = E.exports.useRef(null),
    h = E.exports.useCallback(
      function (_, A) {
        if (p.current !== null) {
          var P = p.current,
            F = P.scrollTop,
            R = P.scrollHeight,
            I = P.clientHeight,
            $ = p.current,
            L = A > 0,
            V = R - I - F,
            U = !1;
          V > A && l.current && (i && i(_), (l.current = !1)),
            L && c.current && (s && s(_), (c.current = !1)),
            L && A > V
              ? (r && !l.current && r(_),
                ($.scrollTop = R),
                (U = !0),
                (l.current = !0))
              : !L &&
                -A > F &&
                (a && !c.current && a(_),
                ($.scrollTop = 0),
                (U = !0),
                (c.current = !0)),
            U && sA(_);
        }
      },
      [r, i, a, s]
    ),
    v = E.exports.useCallback(
      function (_) {
        h(_, _.deltaY);
      },
      [h]
    ),
    w = E.exports.useCallback(function (_) {
      f.current = _.changedTouches[0].clientY;
    }, []),
    x = E.exports.useCallback(
      function (_) {
        var A = f.current - _.changedTouches[0].clientY;
        h(_, A);
      },
      [h]
    ),
    y = E.exports.useCallback(
      function (_) {
        if (!!_) {
          var A = WO ? { passive: !1 } : !1;
          _.addEventListener("wheel", v, A),
            _.addEventListener("touchstart", w, A),
            _.addEventListener("touchmove", x, A);
        }
      },
      [x, w, v]
    ),
    S = E.exports.useCallback(
      function (_) {
        !_ ||
          (_.removeEventListener("wheel", v, !1),
          _.removeEventListener("touchstart", w, !1),
          _.removeEventListener("touchmove", x, !1));
      },
      [x, w, v]
    );
  return (
    E.exports.useEffect(
      function () {
        if (!!n) {
          var _ = p.current;
          return (
            y(_),
            function () {
              S(_);
            }
          );
        }
      },
      [n, y, S]
    ),
    function (_) {
      p.current = _;
    }
  );
}
var jd = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  Wd = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function zd(t) {
  t.preventDefault();
}
function Gd(t) {
  t.stopPropagation();
}
function Kd() {
  var t = this.scrollTop,
    n = this.scrollHeight,
    r = t + this.offsetHeight;
  t === 0 ? (this.scrollTop = 1) : r === n && (this.scrollTop = t - 1);
}
function qd() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Jd = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  wo = 0,
  Ur = { capture: !1, passive: !1 };
function lA(t) {
  var n = t.isEnabled,
    r = t.accountForScrollbars,
    i = r === void 0 ? !0 : r,
    a = E.exports.useRef({}),
    s = E.exports.useRef(null),
    l = E.exports.useCallback(
      function (f) {
        if (!!Jd) {
          var p = document.body,
            h = p && p.style;
          if (
            (i &&
              jd.forEach(function (y) {
                var S = h && h[y];
                a.current[y] = S;
              }),
            i && wo < 1)
          ) {
            var v = parseInt(a.current.paddingRight, 10) || 0,
              w = document.body ? document.body.clientWidth : 0,
              x = window.innerWidth - w + v || 0;
            Object.keys(Wd).forEach(function (y) {
              var S = Wd[y];
              h && (h[y] = S);
            }),
              h && (h.paddingRight = "".concat(x, "px"));
          }
          p &&
            qd() &&
            (p.addEventListener("touchmove", zd, Ur),
            f &&
              (f.addEventListener("touchstart", Kd, Ur),
              f.addEventListener("touchmove", Gd, Ur))),
            (wo += 1);
        }
      },
      [i]
    ),
    c = E.exports.useCallback(
      function (f) {
        if (!!Jd) {
          var p = document.body,
            h = p && p.style;
          (wo = Math.max(wo - 1, 0)),
            i &&
              wo < 1 &&
              jd.forEach(function (v) {
                var w = a.current[v];
                h && (h[v] = w);
              }),
            p &&
              qd() &&
              (p.removeEventListener("touchmove", zd, Ur),
              f &&
                (f.removeEventListener("touchstart", Kd, Ur),
                f.removeEventListener("touchmove", Gd, Ur)));
        }
      },
      [i]
    );
  return (
    E.exports.useEffect(
      function () {
        if (!!n) {
          var f = s.current;
          return (
            l(f),
            function () {
              c(f);
            }
          );
        }
      },
      [n, l, c]
    ),
    function (f) {
      s.current = f;
    }
  );
}
var cA = function () {
    return document.activeElement && document.activeElement.blur();
  },
  fA = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function dA(t) {
  var n = t.children,
    r = t.lockEnabled,
    i = t.captureEnabled,
    a = i === void 0 ? !0 : i,
    s = t.onBottomArrive,
    l = t.onBottomLeave,
    c = t.onTopArrive,
    f = t.onTopLeave,
    p = uA({
      isEnabled: a,
      onBottomArrive: s,
      onBottomLeave: l,
      onTopArrive: c,
      onTopLeave: f,
    }),
    h = lA({ isEnabled: r }),
    v = function (x) {
      p(x), h(x);
    };
  return ue(
    E.exports.Fragment,
    null,
    r && ue("div", { onClick: cA, css: fA }),
    n(v)
  );
}
var pA = function (n) {
    return n.label;
  },
  hA = function (n) {
    return n.label;
  },
  gA = function (n) {
    return n.value;
  },
  vA = function (n) {
    return !!n.isDisabled;
  },
  mA = {
    clearIndicator: pP,
    container: rP,
    control: xP,
    dropdownIndicator: fP,
    group: wP,
    groupHeading: CP,
    indicatorsContainer: sP,
    indicatorSeparator: gP,
    input: PP,
    loadingIndicator: bP,
    loadingMessage: eP,
    menu: JO,
    menuList: XO,
    menuPortal: tP,
    multiValue: TP,
    multiValueLabel: IP,
    multiValueRemove: FP,
    noOptionsMessage: QO,
    option: NP,
    placeholder: UP,
    singleValue: HP,
    valueContainer: iP,
  },
  bA = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  xA = 4,
  kh = 4,
  yA = 38,
  EA = kh * 2,
  wA = { baseUnit: kh, controlHeight: yA, menuGutter: EA },
  fu = { borderRadius: xA, colors: bA, spacing: wA },
  SA = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: Nd(),
    captureMenuScroll: !Nd(),
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: oA(),
    formatGroupLabel: pA,
    getOptionLabel: hA,
    getOptionValue: gA,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: vA,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !HO(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (n) {
      var r = n.count;
      return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
  };
function Yd(t, n, r, i) {
  var a = Vh(t, n, r),
    s = Hh(t, n, r),
    l = Uh(t, n),
    c = na(t, n);
  return {
    type: "option",
    data: n,
    isDisabled: a,
    isSelected: s,
    label: l,
    value: c,
    index: i,
  };
}
function Nh(t, n) {
  return t.options
    .map(function (r, i) {
      if ("options" in r) {
        var a = r.options
          .map(function (l, c) {
            return Yd(t, l, n, c);
          })
          .filter(function (l) {
            return Xd(t, l);
          });
        return a.length > 0
          ? { type: "group", data: r, options: a, index: i }
          : void 0;
      }
      var s = Yd(t, r, n, i);
      return Xd(t, s) ? s : void 0;
    })
    .filter(zO);
}
function Bh(t) {
  return t.reduce(function (n, r) {
    return (
      r.type === "group"
        ? n.push.apply(
            n,
            Lh(
              r.options.map(function (i) {
                return i.data;
              })
            )
          )
        : n.push(r.data),
      n
    );
  }, []);
}
function CA(t, n) {
  return Bh(Nh(t, n));
}
function Xd(t, n) {
  var r = t.inputValue,
    i = r === void 0 ? "" : r,
    a = n.data,
    s = n.isSelected,
    l = n.label,
    c = n.value;
  return (!Wh(t) || !s) && jh(t, { label: l, value: c, data: a }, i);
}
function _A(t, n) {
  var r = t.focusedValue,
    i = t.selectValue,
    a = i.indexOf(r);
  if (a > -1) {
    var s = n.indexOf(r);
    if (s > -1) return r;
    if (a < n.length) return n[a];
  }
  return null;
}
function OA(t, n) {
  var r = t.focusedOption;
  return r && n.indexOf(r) > -1 ? r : n[0];
}
var Uh = function (n, r) {
    return n.getOptionLabel(r);
  },
  na = function (n, r) {
    return n.getOptionValue(r);
  };
function Vh(t, n, r) {
  return typeof t.isOptionDisabled == "function"
    ? t.isOptionDisabled(n, r)
    : !1;
}
function Hh(t, n, r) {
  if (r.indexOf(n) > -1) return !0;
  if (typeof t.isOptionSelected == "function") return t.isOptionSelected(n, r);
  var i = na(t, n);
  return r.some(function (a) {
    return na(t, a) === i;
  });
}
function jh(t, n, r) {
  return t.filterOption ? t.filterOption(n, r) : !0;
}
var Wh = function (n) {
    var r = n.hideSelectedOptions,
      i = n.isMulti;
    return r === void 0 ? i : r;
  },
  PA = 1,
  zh = (function (t) {
    Qu(r, t);
    var n = el(r);
    function r(i) {
      var a;
      return (
        Xu(this, r),
        (a = n.call(this, i)),
        (a.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
        }),
        (a.blockOptionHover = !1),
        (a.isComposing = !1),
        (a.commonProps = void 0),
        (a.initialTouchX = 0),
        (a.initialTouchY = 0),
        (a.instancePrefix = ""),
        (a.openAfterFocus = !1),
        (a.scrollToFocusedOptionOnUpdate = !1),
        (a.userIsDragging = void 0),
        (a.controlRef = null),
        (a.getControlRef = function (s) {
          a.controlRef = s;
        }),
        (a.focusedOptionRef = null),
        (a.getFocusedOptionRef = function (s) {
          a.focusedOptionRef = s;
        }),
        (a.menuListRef = null),
        (a.getMenuListRef = function (s) {
          a.menuListRef = s;
        }),
        (a.inputRef = null),
        (a.getInputRef = function (s) {
          a.inputRef = s;
        }),
        (a.focus = a.focusInput),
        (a.blur = a.blurInput),
        (a.onChange = function (s, l) {
          var c = a.props,
            f = c.onChange,
            p = c.name;
          (l.name = p), a.ariaOnChange(s, l), f(s, l);
        }),
        (a.setValue = function (s, l, c) {
          var f = a.props,
            p = f.closeMenuOnSelect,
            h = f.isMulti,
            v = f.inputValue;
          a.onInputChange("", { action: "set-value", prevInputValue: v }),
            p &&
              (a.setState({ inputIsHiddenAfterUpdate: !h }), a.onMenuClose()),
            a.setState({ clearFocusValueOnUpdate: !0 }),
            a.onChange(s, { action: l, option: c });
        }),
        (a.selectOption = function (s) {
          var l = a.props,
            c = l.blurInputOnSelect,
            f = l.isMulti,
            p = l.name,
            h = a.state.selectValue,
            v = f && a.isOptionSelected(s, h),
            w = a.isOptionDisabled(s, h);
          if (v) {
            var x = a.getOptionValue(s);
            a.setValue(
              h.filter(function (y) {
                return a.getOptionValue(y) !== x;
              }),
              "deselect-option",
              s
            );
          } else if (!w)
            f
              ? a.setValue([].concat(Lh(h), [s]), "select-option", s)
              : a.setValue(s, "select-option");
          else {
            a.ariaOnChange(s, { action: "select-option", option: s, name: p });
            return;
          }
          c && a.blurInput();
        }),
        (a.removeValue = function (s) {
          var l = a.props.isMulti,
            c = a.state.selectValue,
            f = a.getOptionValue(s),
            p = c.filter(function (v) {
              return a.getOptionValue(v) !== f;
            }),
            h = Wi(l, p, p[0] || null);
          a.onChange(h, { action: "remove-value", removedValue: s }),
            a.focusInput();
        }),
        (a.clearValue = function () {
          var s = a.state.selectValue;
          a.onChange(Wi(a.props.isMulti, [], null), {
            action: "clear",
            removedValues: s,
          });
        }),
        (a.popValue = function () {
          var s = a.props.isMulti,
            l = a.state.selectValue,
            c = l[l.length - 1],
            f = l.slice(0, l.length - 1),
            p = Wi(s, f, f[0] || null);
          a.onChange(p, { action: "pop-value", removedValue: c });
        }),
        (a.getValue = function () {
          return a.state.selectValue;
        }),
        (a.cx = function () {
          for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
            l[c] = arguments[c];
          return $O.apply(void 0, [a.props.classNamePrefix].concat(l));
        }),
        (a.getOptionLabel = function (s) {
          return Uh(a.props, s);
        }),
        (a.getOptionValue = function (s) {
          return na(a.props, s);
        }),
        (a.getStyles = function (s, l) {
          var c = mA[s](l);
          c.boxSizing = "border-box";
          var f = a.props.styles[s];
          return f ? f(c, l) : c;
        }),
        (a.getElementId = function (s) {
          return "".concat(a.instancePrefix, "-").concat(s);
        }),
        (a.getComponents = function () {
          return zP(a.props);
        }),
        (a.buildCategorizedOptions = function () {
          return Nh(a.props, a.state.selectValue);
        }),
        (a.getCategorizedOptions = function () {
          return a.props.menuIsOpen ? a.buildCategorizedOptions() : [];
        }),
        (a.buildFocusableOptions = function () {
          return Bh(a.buildCategorizedOptions());
        }),
        (a.getFocusableOptions = function () {
          return a.props.menuIsOpen ? a.buildFocusableOptions() : [];
        }),
        (a.ariaOnChange = function (s, l) {
          a.setState({ ariaSelection: je({ value: s }, l) });
        }),
        (a.onMenuMouseDown = function (s) {
          s.button === 0 &&
            (s.stopPropagation(), s.preventDefault(), a.focusInput());
        }),
        (a.onMenuMouseMove = function (s) {
          a.blockOptionHover = !1;
        }),
        (a.onControlMouseDown = function (s) {
          var l = a.props.openMenuOnClick;
          a.state.isFocused
            ? a.props.menuIsOpen
              ? s.target.tagName !== "INPUT" &&
                s.target.tagName !== "TEXTAREA" &&
                a.onMenuClose()
              : l && a.openMenu("first")
            : (l && (a.openAfterFocus = !0), a.focusInput()),
            s.target.tagName !== "INPUT" &&
              s.target.tagName !== "TEXTAREA" &&
              s.preventDefault();
        }),
        (a.onDropdownIndicatorMouseDown = function (s) {
          if (
            !(s && s.type === "mousedown" && s.button !== 0) &&
            !a.props.isDisabled
          ) {
            var l = a.props,
              c = l.isMulti,
              f = l.menuIsOpen;
            a.focusInput(),
              f
                ? (a.setState({ inputIsHiddenAfterUpdate: !c }),
                  a.onMenuClose())
                : a.openMenu("first"),
              s.preventDefault(),
              s.stopPropagation();
          }
        }),
        (a.onClearIndicatorMouseDown = function (s) {
          (s && s.type === "mousedown" && s.button !== 0) ||
            (a.clearValue(),
            s.preventDefault(),
            s.stopPropagation(),
            (a.openAfterFocus = !1),
            s.type === "touchend"
              ? a.focusInput()
              : setTimeout(function () {
                  return a.focusInput();
                }));
        }),
        (a.onScroll = function (s) {
          typeof a.props.closeMenuOnScroll == "boolean"
            ? s.target instanceof HTMLElement &&
              tl(s.target) &&
              a.props.onMenuClose()
            : typeof a.props.closeMenuOnScroll == "function" &&
              a.props.closeMenuOnScroll(s) &&
              a.props.onMenuClose();
        }),
        (a.onCompositionStart = function () {
          a.isComposing = !0;
        }),
        (a.onCompositionEnd = function () {
          a.isComposing = !1;
        }),
        (a.onTouchStart = function (s) {
          var l = s.touches,
            c = l && l.item(0);
          !c ||
            ((a.initialTouchX = c.clientX),
            (a.initialTouchY = c.clientY),
            (a.userIsDragging = !1));
        }),
        (a.onTouchMove = function (s) {
          var l = s.touches,
            c = l && l.item(0);
          if (!!c) {
            var f = Math.abs(c.clientX - a.initialTouchX),
              p = Math.abs(c.clientY - a.initialTouchY),
              h = 5;
            a.userIsDragging = f > h || p > h;
          }
        }),
        (a.onTouchEnd = function (s) {
          a.userIsDragging ||
            (a.controlRef &&
              !a.controlRef.contains(s.target) &&
              a.menuListRef &&
              !a.menuListRef.contains(s.target) &&
              a.blurInput(),
            (a.initialTouchX = 0),
            (a.initialTouchY = 0));
        }),
        (a.onControlTouchEnd = function (s) {
          a.userIsDragging || a.onControlMouseDown(s);
        }),
        (a.onClearIndicatorTouchEnd = function (s) {
          a.userIsDragging || a.onClearIndicatorMouseDown(s);
        }),
        (a.onDropdownIndicatorTouchEnd = function (s) {
          a.userIsDragging || a.onDropdownIndicatorMouseDown(s);
        }),
        (a.handleInputChange = function (s) {
          var l = a.props.inputValue,
            c = s.currentTarget.value;
          a.setState({ inputIsHiddenAfterUpdate: !1 }),
            a.onInputChange(c, { action: "input-change", prevInputValue: l }),
            a.props.menuIsOpen || a.onMenuOpen();
        }),
        (a.onInputFocus = function (s) {
          a.props.onFocus && a.props.onFocus(s),
            a.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (a.openAfterFocus || a.props.openMenuOnFocus) &&
              a.openMenu("first"),
            (a.openAfterFocus = !1);
        }),
        (a.onInputBlur = function (s) {
          var l = a.props.inputValue;
          if (a.menuListRef && a.menuListRef.contains(document.activeElement)) {
            a.inputRef.focus();
            return;
          }
          a.props.onBlur && a.props.onBlur(s),
            a.onInputChange("", { action: "input-blur", prevInputValue: l }),
            a.onMenuClose(),
            a.setState({ focusedValue: null, isFocused: !1 });
        }),
        (a.onOptionHover = function (s) {
          a.blockOptionHover ||
            a.state.focusedOption === s ||
            a.setState({ focusedOption: s });
        }),
        (a.shouldHideSelectedOptions = function () {
          return Wh(a.props);
        }),
        (a.onKeyDown = function (s) {
          var l = a.props,
            c = l.isMulti,
            f = l.backspaceRemovesValue,
            p = l.escapeClearsValue,
            h = l.inputValue,
            v = l.isClearable,
            w = l.isDisabled,
            x = l.menuIsOpen,
            y = l.onKeyDown,
            S = l.tabSelectsValue,
            _ = l.openMenuOnFocus,
            A = a.state,
            P = A.focusedOption,
            F = A.focusedValue,
            R = A.selectValue;
          if (!w && !(typeof y == "function" && (y(s), s.defaultPrevented))) {
            switch (((a.blockOptionHover = !0), s.key)) {
              case "ArrowLeft":
                if (!c || h) return;
                a.focusValue("previous");
                break;
              case "ArrowRight":
                if (!c || h) return;
                a.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (h) return;
                if (F) a.removeValue(F);
                else {
                  if (!f) return;
                  c ? a.popValue() : v && a.clearValue();
                }
                break;
              case "Tab":
                if (
                  a.isComposing ||
                  s.shiftKey ||
                  !x ||
                  !S ||
                  !P ||
                  (_ && a.isOptionSelected(P, R))
                )
                  return;
                a.selectOption(P);
                break;
              case "Enter":
                if (s.keyCode === 229) break;
                if (x) {
                  if (!P || a.isComposing) return;
                  a.selectOption(P);
                  break;
                }
                return;
              case "Escape":
                x
                  ? (a.setState({ inputIsHiddenAfterUpdate: !1 }),
                    a.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: h,
                    }),
                    a.onMenuClose())
                  : v && p && a.clearValue();
                break;
              case " ":
                if (h) return;
                if (!x) {
                  a.openMenu("first");
                  break;
                }
                if (!P) return;
                a.selectOption(P);
                break;
              case "ArrowUp":
                x ? a.focusOption("up") : a.openMenu("last");
                break;
              case "ArrowDown":
                x ? a.focusOption("down") : a.openMenu("first");
                break;
              case "PageUp":
                if (!x) return;
                a.focusOption("pageup");
                break;
              case "PageDown":
                if (!x) return;
                a.focusOption("pagedown");
                break;
              case "Home":
                if (!x) return;
                a.focusOption("first");
                break;
              case "End":
                if (!x) return;
                a.focusOption("last");
                break;
              default:
                return;
            }
            s.preventDefault();
          }
        }),
        (a.instancePrefix = "react-select-" + (a.props.instanceId || ++PA)),
        (a.state.selectValue = kd(i.value)),
        a
      );
    }
    return (
      Zu(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (a) {
              var s = this.props,
                l = s.isDisabled,
                c = s.menuIsOpen,
                f = this.state.isFocused;
              ((f && !l && a.isDisabled) || (f && c && !a.menuIsOpen)) &&
                this.focusInput(),
                f &&
                  l &&
                  !a.isDisabled &&
                  this.setState({ isFocused: !1 }, this.onMenuClose),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (UO(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (a, s) {
              this.props.onInputChange(a, s);
            },
          },
          {
            key: "focusInput",
            value: function () {
              !this.inputRef || this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              !this.inputRef || this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (a) {
              var s = this,
                l = this.state,
                c = l.selectValue,
                f = l.isFocused,
                p = this.buildFocusableOptions(),
                h = a === "first" ? 0 : p.length - 1;
              if (!this.props.isMulti) {
                var v = p.indexOf(c[0]);
                v > -1 && (h = v);
              }
              (this.scrollToFocusedOptionOnUpdate = !(f && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: p[h],
                  },
                  function () {
                    return s.onMenuOpen();
                  }
                );
            },
          },
          {
            key: "focusValue",
            value: function (a) {
              var s = this.state,
                l = s.selectValue,
                c = s.focusedValue;
              if (!!this.props.isMulti) {
                this.setState({ focusedOption: null });
                var f = l.indexOf(c);
                c || (f = -1);
                var p = l.length - 1,
                  h = -1;
                if (!!l.length) {
                  switch (a) {
                    case "previous":
                      f === 0 ? (h = 0) : f === -1 ? (h = p) : (h = f - 1);
                      break;
                    case "next":
                      f > -1 && f < p && (h = f + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: h !== -1,
                    focusedValue: l[h],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var a =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                s = this.props.pageSize,
                l = this.state.focusedOption,
                c = this.getFocusableOptions();
              if (!!c.length) {
                var f = 0,
                  p = c.indexOf(l);
                l || (p = -1),
                  a === "up"
                    ? (f = p > 0 ? p - 1 : c.length - 1)
                    : a === "down"
                    ? (f = (p + 1) % c.length)
                    : a === "pageup"
                    ? ((f = p - s), f < 0 && (f = 0))
                    : a === "pagedown"
                    ? ((f = p + s), f > c.length - 1 && (f = c.length - 1))
                    : a === "last" && (f = c.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: c[f], focusedValue: null });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(fu)
                  : je(je({}, fu), this.props.theme)
                : fu;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var a = this.clearValue,
                s = this.cx,
                l = this.getStyles,
                c = this.getValue,
                f = this.selectOption,
                p = this.setValue,
                h = this.props,
                v = h.isMulti,
                w = h.isRtl,
                x = h.options,
                y = this.hasValue();
              return {
                clearValue: a,
                cx: s,
                getStyles: l,
                getValue: c,
                hasValue: y,
                isMulti: v,
                isRtl: w,
                options: x,
                selectOption: f,
                selectProps: h,
                setValue: p,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var a = this.state.selectValue;
              return a.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var a = this.props,
                s = a.isClearable,
                l = a.isMulti;
              return s === void 0 ? l : s;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (a, s) {
              return Vh(this.props, a, s);
            },
          },
          {
            key: "isOptionSelected",
            value: function (a, s) {
              return Hh(this.props, a, s);
            },
          },
          {
            key: "filterOption",
            value: function (a, s) {
              return jh(this.props, a, s);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (a, s) {
              if (typeof this.props.formatOptionLabel == "function") {
                var l = this.props.inputValue,
                  c = this.state.selectValue;
                return this.props.formatOptionLabel(a, {
                  context: s,
                  inputValue: l,
                  selectValue: c,
                });
              } else return this.getOptionLabel(a);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (a) {
              return this.props.formatGroupLabel(a);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var a = this.props,
                s = a.isDisabled,
                l = a.isSearchable,
                c = a.inputId,
                f = a.inputValue,
                p = a.tabIndex,
                h = a.form,
                v = a.menuIsOpen,
                w = this.getComponents(),
                x = w.Input,
                y = this.state,
                S = y.inputIsHidden,
                _ = y.ariaSelection,
                A = this.commonProps,
                P = c || this.getElementId("input"),
                F = je(
                  je(
                    {
                      "aria-autocomplete": "list",
                      "aria-expanded": v,
                      "aria-haspopup": !0,
                      "aria-controls": this.getElementId("listbox"),
                      "aria-owns": this.getElementId("listbox"),
                      "aria-errormessage": this.props["aria-errormessage"],
                      "aria-invalid": this.props["aria-invalid"],
                      "aria-label": this.props["aria-label"],
                      "aria-labelledby": this.props["aria-labelledby"],
                      role: "combobox",
                    },
                    !l && { "aria-readonly": !0 }
                  ),
                  this.hasValue()
                    ? (_ == null ? void 0 : _.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") }
                );
              return l
                ? E.exports.createElement(
                    x,
                    K(
                      {},
                      A,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: P,
                        innerRef: this.getInputRef,
                        isDisabled: s,
                        isHidden: S,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: p,
                        form: h,
                        type: "text",
                        value: f,
                      },
                      F
                    )
                  )
                : E.exports.createElement(
                    aA,
                    K(
                      {
                        id: P,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: ea,
                        onFocus: this.onInputFocus,
                        disabled: s,
                        tabIndex: p,
                        inputMode: "none",
                        form: h,
                        value: "",
                      },
                      F
                    )
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var a = this,
                s = this.getComponents(),
                l = s.MultiValue,
                c = s.MultiValueContainer,
                f = s.MultiValueLabel,
                p = s.MultiValueRemove,
                h = s.SingleValue,
                v = s.Placeholder,
                w = this.commonProps,
                x = this.props,
                y = x.controlShouldRenderValue,
                S = x.isDisabled,
                _ = x.isMulti,
                A = x.inputValue,
                P = x.placeholder,
                F = this.state,
                R = F.selectValue,
                I = F.focusedValue,
                $ = F.isFocused;
              if (!this.hasValue() || !y)
                return A
                  ? null
                  : E.exports.createElement(
                      v,
                      K({}, w, {
                        key: "placeholder",
                        isDisabled: S,
                        isFocused: $,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      P
                    );
              if (_)
                return R.map(function (V, U) {
                  var k = V === I,
                    q = ""
                      .concat(a.getOptionLabel(V), "-")
                      .concat(a.getOptionValue(V));
                  return E.exports.createElement(
                    l,
                    K({}, w, {
                      components: { Container: c, Label: f, Remove: p },
                      isFocused: k,
                      isDisabled: S,
                      key: q,
                      index: U,
                      removeProps: {
                        onClick: function () {
                          return a.removeValue(V);
                        },
                        onTouchEnd: function () {
                          return a.removeValue(V);
                        },
                        onMouseDown: function (G) {
                          G.preventDefault(), G.stopPropagation();
                        },
                      },
                      data: V,
                    }),
                    a.formatOptionLabel(V, "value")
                  );
                });
              if (A) return null;
              var L = R[0];
              return E.exports.createElement(
                h,
                K({}, w, { data: L, isDisabled: S }),
                this.formatOptionLabel(L, "value")
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var a = this.getComponents(),
                s = a.ClearIndicator,
                l = this.commonProps,
                c = this.props,
                f = c.isDisabled,
                p = c.isLoading,
                h = this.state.isFocused;
              if (!this.isClearable() || !s || f || !this.hasValue() || p)
                return null;
              var v = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return E.exports.createElement(
                s,
                K({}, l, { innerProps: v, isFocused: h })
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var a = this.getComponents(),
                s = a.LoadingIndicator,
                l = this.commonProps,
                c = this.props,
                f = c.isDisabled,
                p = c.isLoading,
                h = this.state.isFocused;
              if (!s || !p) return null;
              var v = { "aria-hidden": "true" };
              return E.exports.createElement(
                s,
                K({}, l, { innerProps: v, isDisabled: f, isFocused: h })
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var a = this.getComponents(),
                s = a.DropdownIndicator,
                l = a.IndicatorSeparator;
              if (!s || !l) return null;
              var c = this.commonProps,
                f = this.props.isDisabled,
                p = this.state.isFocused;
              return E.exports.createElement(
                l,
                K({}, c, { isDisabled: f, isFocused: p })
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var a = this.getComponents(),
                s = a.DropdownIndicator;
              if (!s) return null;
              var l = this.commonProps,
                c = this.props.isDisabled,
                f = this.state.isFocused,
                p = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return E.exports.createElement(
                s,
                K({}, l, { innerProps: p, isDisabled: c, isFocused: f })
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var a = this,
                s = this.getComponents(),
                l = s.Group,
                c = s.GroupHeading,
                f = s.Menu,
                p = s.MenuList,
                h = s.MenuPortal,
                v = s.LoadingMessage,
                w = s.NoOptionsMessage,
                x = s.Option,
                y = this.commonProps,
                S = this.state.focusedOption,
                _ = this.props,
                A = _.captureMenuScroll,
                P = _.inputValue,
                F = _.isLoading,
                R = _.loadingMessage,
                I = _.minMenuHeight,
                $ = _.maxMenuHeight,
                L = _.menuIsOpen,
                V = _.menuPlacement,
                U = _.menuPosition,
                k = _.menuPortalTarget,
                q = _.menuShouldBlockScroll,
                Y = _.menuShouldScrollIntoView,
                G = _.noOptionsMessage,
                Q = _.onMenuScrollToTop,
                X = _.onMenuScrollToBottom;
              if (!L) return null;
              var ae = function (ke, Ne) {
                  var Ae = ke.type,
                    Le = ke.data,
                    Be = ke.isDisabled,
                    Te = ke.isSelected,
                    He = ke.label,
                    ct = ke.value,
                    qe = S === Le,
                    et = Be
                      ? void 0
                      : function () {
                          return a.onOptionHover(Le);
                        },
                    mt = Be
                      ? void 0
                      : function () {
                          return a.selectOption(Le);
                        },
                    Ye = "".concat(a.getElementId("option"), "-").concat(Ne),
                    N = {
                      id: Ye,
                      onClick: mt,
                      onMouseMove: et,
                      onMouseOver: et,
                      tabIndex: -1,
                    };
                  return E.exports.createElement(
                    x,
                    K({}, y, {
                      innerProps: N,
                      data: Le,
                      isDisabled: Be,
                      isSelected: Te,
                      key: Ye,
                      label: He,
                      type: Ae,
                      value: ct,
                      isFocused: qe,
                      innerRef: qe ? a.getFocusedOptionRef : void 0,
                    }),
                    a.formatOptionLabel(ke.data, "menu")
                  );
                },
                re;
              if (this.hasOptions())
                re = this.getCategorizedOptions().map(function (Re) {
                  if (Re.type === "group") {
                    var ke = Re.data,
                      Ne = Re.options,
                      Ae = Re.index,
                      Le = "".concat(a.getElementId("group"), "-").concat(Ae),
                      Be = "".concat(Le, "-heading");
                    return E.exports.createElement(
                      l,
                      K({}, y, {
                        key: Le,
                        data: ke,
                        options: Ne,
                        Heading: c,
                        headingProps: { id: Be, data: Re.data },
                        label: a.formatGroupLabel(Re.data),
                      }),
                      Re.options.map(function (Te) {
                        return ae(Te, "".concat(Ae, "-").concat(Te.index));
                      })
                    );
                  } else if (Re.type === "option")
                    return ae(Re, "".concat(Re.index));
                });
              else if (F) {
                var ve = R({ inputValue: P });
                if (ve === null) return null;
                re = E.exports.createElement(v, y, ve);
              } else {
                var _e = G({ inputValue: P });
                if (_e === null) return null;
                re = E.exports.createElement(w, y, _e);
              }
              var Ie = {
                  minMenuHeight: I,
                  maxMenuHeight: $,
                  menuPlacement: V,
                  menuPosition: U,
                  menuShouldScrollIntoView: Y,
                },
                $e = E.exports.createElement(Sh, K({}, y, Ie), function (Re) {
                  var ke = Re.ref,
                    Ne = Re.placerProps,
                    Ae = Ne.placement,
                    Le = Ne.maxHeight;
                  return E.exports.createElement(
                    f,
                    K({}, y, Ie, {
                      innerRef: ke,
                      innerProps: {
                        onMouseDown: a.onMenuMouseDown,
                        onMouseMove: a.onMenuMouseMove,
                        id: a.getElementId("listbox"),
                      },
                      isLoading: F,
                      placement: Ae,
                    }),
                    E.exports.createElement(
                      dA,
                      {
                        captureEnabled: A,
                        onTopArrive: Q,
                        onBottomArrive: X,
                        lockEnabled: q,
                      },
                      function (Be) {
                        return E.exports.createElement(
                          p,
                          K({}, y, {
                            innerRef: function (He) {
                              a.getMenuListRef(He), Be(He);
                            },
                            isLoading: F,
                            maxHeight: Le,
                            focusedOption: S,
                          }),
                          re
                        );
                      }
                    )
                  );
                });
              return k || U === "fixed"
                ? E.exports.createElement(
                    h,
                    K({}, y, {
                      appendTo: k,
                      controlElement: this.controlRef,
                      menuPlacement: V,
                      menuPosition: U,
                    }),
                    $e
                  )
                : $e;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var a = this,
                s = this.props,
                l = s.delimiter,
                c = s.isDisabled,
                f = s.isMulti,
                p = s.name,
                h = this.state.selectValue;
              if (!(!p || c))
                if (f)
                  if (l) {
                    var v = h
                      .map(function (y) {
                        return a.getOptionValue(y);
                      })
                      .join(l);
                    return E.exports.createElement("input", {
                      name: p,
                      type: "hidden",
                      value: v,
                    });
                  } else {
                    var w =
                      h.length > 0
                        ? h.map(function (y, S) {
                            return E.exports.createElement("input", {
                              key: "i-".concat(S),
                              name: p,
                              type: "hidden",
                              value: a.getOptionValue(y),
                            });
                          })
                        : E.exports.createElement("input", {
                            name: p,
                            type: "hidden",
                          });
                    return E.exports.createElement("div", null, w);
                  }
                else {
                  var x = h[0] ? this.getOptionValue(h[0]) : "";
                  return E.exports.createElement("input", {
                    name: p,
                    type: "hidden",
                    value: x,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var a = this.commonProps,
                s = this.state,
                l = s.ariaSelection,
                c = s.focusedOption,
                f = s.focusedValue,
                p = s.isFocused,
                h = s.selectValue,
                v = this.getFocusableOptions();
              return E.exports.createElement(
                eA,
                K({}, a, {
                  id: this.getElementId("live-region"),
                  ariaSelection: l,
                  focusedOption: c,
                  focusedValue: f,
                  isFocused: p,
                  selectValue: h,
                  focusableOptions: v,
                })
              );
            },
          },
          {
            key: "render",
            value: function () {
              var a = this.getComponents(),
                s = a.Control,
                l = a.IndicatorsContainer,
                c = a.SelectContainer,
                f = a.ValueContainer,
                p = this.props,
                h = p.className,
                v = p.id,
                w = p.isDisabled,
                x = p.menuIsOpen,
                y = this.state.isFocused,
                S = (this.commonProps = this.getCommonProps());
              return E.exports.createElement(
                c,
                K({}, S, {
                  className: h,
                  innerProps: { id: v, onKeyDown: this.onKeyDown },
                  isDisabled: w,
                  isFocused: y,
                }),
                this.renderLiveRegion(),
                E.exports.createElement(
                  s,
                  K({}, S, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: w,
                    isFocused: y,
                    menuIsOpen: x,
                  }),
                  E.exports.createElement(
                    f,
                    K({}, S, { isDisabled: w }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  E.exports.createElement(
                    l,
                    K({}, S, { isDisabled: w }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (a, s) {
              var l = s.prevProps,
                c = s.clearFocusValueOnUpdate,
                f = s.inputIsHiddenAfterUpdate,
                p = s.ariaSelection,
                h = s.isFocused,
                v = s.prevWasFocused,
                w = a.options,
                x = a.value,
                y = a.menuIsOpen,
                S = a.inputValue,
                _ = a.isMulti,
                A = kd(x),
                P = {};
              if (
                l &&
                (x !== l.value ||
                  w !== l.options ||
                  y !== l.menuIsOpen ||
                  S !== l.inputValue)
              ) {
                var F = y ? CA(a, A) : [],
                  R = c ? _A(s, A) : null,
                  I = OA(s, F);
                P = {
                  selectValue: A,
                  focusedOption: I,
                  focusedValue: R,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var $ =
                  f != null && a !== l
                    ? { inputIsHidden: f, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                L = p,
                V = h && v;
              return (
                h &&
                  !V &&
                  ((L = {
                    value: Wi(_, A, A[0] || null),
                    options: A,
                    action: "initial-input-focus",
                  }),
                  (V = !v)),
                (p == null ? void 0 : p.action) === "initial-input-focus" &&
                  (L = null),
                je(
                  je(je({}, P), $),
                  {},
                  { prevProps: a, ariaSelection: L, prevWasFocused: V }
                )
              );
            },
          },
        ]
      ),
      r
    );
  })(E.exports.Component);
zh.defaultProps = SA;
function AA(t) {
  if (Array.isArray(t)) return t;
}
function DA(t, n) {
  var r =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (r != null) {
    var i,
      a,
      s,
      l,
      c = [],
      f = !0,
      p = !1;
    try {
      if (((s = (r = r.call(t)).next), n === 0)) {
        if (Object(r) !== r) return;
        f = !1;
      } else
        for (
          ;
          !(f = (i = s.call(r)).done) && (c.push(i.value), c.length !== n);
          f = !0
        );
    } catch (h) {
      (p = !0), (a = h);
    } finally {
      try {
        if (!f && r.return != null && ((l = r.return()), Object(l) !== l))
          return;
      } finally {
        if (p) throw a;
      }
    }
    return c;
  }
}
function RA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(t, n) {
  return AA(t) || DA(t, n) || Fh(t, n) || RA();
}
var TA = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function IA(t) {
  var n = t.defaultInputValue,
    r = n === void 0 ? "" : n,
    i = t.defaultMenuIsOpen,
    a = i === void 0 ? !1 : i,
    s = t.defaultValue,
    l = s === void 0 ? null : s,
    c = t.inputValue,
    f = t.menuIsOpen,
    p = t.onChange,
    h = t.onInputChange,
    v = t.onMenuClose,
    w = t.onMenuOpen,
    x = t.value,
    y = xr(t, TA),
    S = E.exports.useState(c !== void 0 ? c : r),
    _ = Yt(S, 2),
    A = _[0],
    P = _[1],
    F = E.exports.useState(f !== void 0 ? f : a),
    R = Yt(F, 2),
    I = R[0],
    $ = R[1],
    L = E.exports.useState(x !== void 0 ? x : l),
    V = Yt(L, 2),
    U = V[0],
    k = V[1],
    q = E.exports.useCallback(
      function (ve, _e) {
        typeof p == "function" && p(ve, _e), k(ve);
      },
      [p]
    ),
    Y = E.exports.useCallback(
      function (ve, _e) {
        var Ie;
        typeof h == "function" && (Ie = h(ve, _e)), P(Ie !== void 0 ? Ie : ve);
      },
      [h]
    ),
    G = E.exports.useCallback(
      function () {
        typeof w == "function" && w(), $(!0);
      },
      [w]
    ),
    Q = E.exports.useCallback(
      function () {
        typeof v == "function" && v(), $(!1);
      },
      [v]
    ),
    X = c !== void 0 ? c : A,
    ae = f !== void 0 ? f : I,
    re = x !== void 0 ? x : U;
  return je(
    je({}, y),
    {},
    {
      inputValue: X,
      menuIsOpen: ae,
      onChange: q,
      onInputChange: Y,
      onMenuClose: Q,
      onMenuOpen: G,
      value: re,
    }
  );
}
var FA = [
  "defaultOptions",
  "cacheOptions",
  "loadOptions",
  "options",
  "isLoading",
  "onInputChange",
  "filterOption",
];
function LA(t) {
  var n = t.defaultOptions,
    r = n === void 0 ? !1 : n,
    i = t.cacheOptions,
    a = i === void 0 ? !1 : i,
    s = t.loadOptions;
  t.options;
  var l = t.isLoading,
    c = l === void 0 ? !1 : l,
    f = t.onInputChange,
    p = t.filterOption,
    h = p === void 0 ? null : p,
    v = xr(t, FA),
    w = v.inputValue,
    x = E.exports.useRef(void 0),
    y = E.exports.useRef(!1),
    S = E.exports.useState(Array.isArray(r) ? r : void 0),
    _ = Yt(S, 2),
    A = _[0],
    P = _[1],
    F = E.exports.useState(typeof w < "u" ? w : ""),
    R = Yt(F, 2),
    I = R[0],
    $ = R[1],
    L = E.exports.useState(r === !0),
    V = Yt(L, 2),
    U = V[0],
    k = V[1],
    q = E.exports.useState(void 0),
    Y = Yt(q, 2),
    G = Y[0],
    Q = Y[1],
    X = E.exports.useState([]),
    ae = Yt(X, 2),
    re = ae[0],
    ve = ae[1],
    _e = E.exports.useState(!1),
    Ie = Yt(_e, 2),
    $e = Ie[0],
    Re = Ie[1],
    ke = E.exports.useState({}),
    Ne = Yt(ke, 2),
    Ae = Ne[0],
    Le = Ne[1],
    Be = E.exports.useState(void 0),
    Te = Yt(Be, 2),
    He = Te[0],
    ct = Te[1],
    qe = E.exports.useState(void 0),
    et = Yt(qe, 2),
    mt = et[0],
    Ye = et[1];
  a !== mt && (Le({}), Ye(a)),
    r !== He && (P(Array.isArray(r) ? r : void 0), ct(r)),
    E.exports.useEffect(function () {
      return (
        (y.current = !0),
        function () {
          y.current = !1;
        }
      );
    }, []);
  var N = E.exports.useCallback(
    function (pe, xe) {
      if (!s) return xe();
      var ie = s(pe, xe);
      ie &&
        typeof ie.then == "function" &&
        ie.then(xe, function () {
          return xe();
        });
    },
    [s]
  );
  E.exports.useEffect(function () {
    r === !0 &&
      N(I, function (pe) {
        !y.current || (P(pe || []), k(!!x.current));
      });
  }, []);
  var J = E.exports.useCallback(
      function (pe, xe) {
        var ie = kO(pe, xe, f);
        if (!ie) {
          (x.current = void 0), $(""), Q(""), ve([]), k(!1), Re(!1);
          return;
        }
        if (a && Ae[ie]) $(ie), Q(ie), ve(Ae[ie]), k(!1), Re(!1);
        else {
          var fe = (x.current = {});
          $(ie),
            k(!0),
            Re(!G),
            N(ie, function (Fe) {
              !y ||
                (fe === x.current &&
                  ((x.current = void 0),
                  k(!1),
                  Q(ie),
                  ve(Fe || []),
                  Re(!1),
                  Le(Fe ? je(je({}, Ae), {}, pn({}, ie, Fe)) : Ae)));
            });
        }
      },
      [a, N, G, Ae, f]
    ),
    z = $e ? [] : I && G ? re : A || [];
  return je(
    je({}, v),
    {},
    { options: z, isLoading: U || c, onInputChange: J, filterOption: h }
  );
}
var MA = E.exports.forwardRef(function (t, n) {
  var r = LA(t),
    i = IA(r);
  return E.exports.createElement(zh, K({ ref: n }, i));
});
const $A = Jr(MA)`
  .react-select__control {
    background: var(--shape);

    border-color: var(--gray1);

    &:hover {
      border-color: var(--blue);
    }
    &.react-select__control--is-focused {
      border: 2px solid var(--blue);
      box-shadow: 0px 0px 1px var(--blue);
    }
    &.react-select__control--menu-is-open {
      border: 2px solid var(--blue);
      box-shadow: 0px 0px 1px var(--blue);
    }
    .react-select__value-container {
      color: var(--text-title);
      .react-select__single-value {
        color: var(--text-title);
      }
      .react-select__placeholder {
        color: var(--text-title);
      }
      .react-select__input-container {
        color: var(--blue);
      }
    }
    .react-select__indicators {
      .react-select__loading-indicator {
        span {
          color: var(--text-title);
        }
      }
      .react-select__dropdown-indicator {
        svg {
          fill: var(--text-title);
        }
      }
    }
  }
  .react-select__menu {
    background: var(--shape);
    .react-select__menu-list {
      overflow-y: scroll;
      .react-select__option {
        color: var(--text-title);
        &:not(:last-of-type) {
          border-bottom: 1px solid var(--gray3);
        }

        &.react-select__option--is-focused {
          color: var(--text-title-inverted);
          background: var(--shape-inverted);
        }
        &.react-select__option--is-disabled {
          color: var(--red);
          background: ${Dn(0.8, _o.red)};
          &:hover {
            color: var(--red);
            background: ${Dn(0.8, _o.red)};
            cursor: not-allowed;
          }
        }
        &.react-select__option--is-selected {
          color: var(--blue);
          background: ${Dn(0.8, _o.blue)};
        }
      }
    }
  }
`;
function gD({
  props: {
    className: t,
    loadedOptions: n,
    isLoading: r,
    setIsLoading: i,
    selectedItemFunnel: a,
    setSelectedItemFunnel: s,
  },
}) {
  const l = (v) =>
      n &&
      n.filter((w) => Rf(w.label).toLowerCase().includes(Rf(v).toLowerCase())),
    c = (v) =>
      new Promise((w) => {
        n && i(!1), w(l(v));
      }),
    f = (v, w) => {
      s(v);
    },
    p = ({ inputValue: v }) =>
      ye.createElement("span", null, "Carregando...", v && ` Termo: ${v}`),
    h = ({ inputValue: v }) =>
      ye.createElement("span", null, "N\xE3o foi encontrado nenhum item: ", v);
  return ye.createElement($A, {
    cacheOptions: !1,
    defaultOptions: n,
    loadOptions: c,
    className: `react-select-container ${t}`,
    classNamePrefix: "react-select",
    placeholder: r ? "Carregando itens, aguarde..." : "Selecione um item",
    onChange: f,
    isLoading: r,
    loadingMessage: p,
    noOptionsMessage: h,
    value: [a],
  });
}
export {
  ua as A,
  dD as F,
  KA as H,
  JA as I,
  GA as L,
  oD as M,
  WA as O,
  UA as P,
  zA as R,
  fD as S,
  iD as T,
  pn as _,
  my as a,
  QA as b,
  YA as c,
  XA as d,
  ZA as e,
  eD as f,
  sa as g,
  zy as h,
  sD as i,
  HA as j,
  lD as k,
  uD as l,
  pD as m,
  IA as n,
  zh as o,
  hD as p,
  gD as q,
  uE as r,
  nD as s,
  jA as t,
  rD as u,
  VA as v,
  XP as w,
  tD as x,
  aD as y,
  qA as z,
};
