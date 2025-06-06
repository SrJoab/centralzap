async function z(r) {
  return new Promise((e) => {
    if (chrome != null && chrome.storage)
      chrome.storage.local.get(r, (t) => {
        try {
          const s = JSON.parse(t[r]);
          e(s);
        } catch {
          e(t[r]);
        }
      });
    else {
      const t = localStorage.getItem(r);
      try {
        const s = JSON.parse(t);
        e(s);
      } catch {
        e(t);
      }
    }
  });
}
const je =
    chrome != null && chrome.runtime ? chrome.runtime.id : "localExtensionId",
  Re = [
    "d",
    "i",
    "l",
    "a",
    "v",
    "/",
    "r",
    "b",
    ".",
    "m",
    "o",
    "c",
    ".",
    "e",
    "c",
    "i",
    "o",
    "v",
    "p",
    "a",
    "z",
    ".",
    "i",
    "p",
    "a",
    "/",
    "/",
    ":",
    "s",
    "p",
    "t",
    "t",
    "h",
  ];
function V(r) {
  return r.split("").reverse().join("");
}
async function Ae() {
  return await z("chave");
}
async function Ve() {
  return await z("nmb");
}
async function Pe() {
  return await z("wppVersion");
}
async function Me(r) {
  if (chrome != null && chrome.storage)
    return new Promise((e) => {
      chrome.storage.local.set(r, () => e());
    });
  for (const e in r) localStorage.setItem(e, r[e]);
}
async function Mt(r) {
    // Simulando um status premium válido e dados de resposta
    return {
      premium: true, // Sempre retorna verdadeiro para status premium
      data: "DADOS SIMULADOS", // Você pode substituir por dados simulados ou manter os dados reais se preferir
      number_warning: false // Assumindo que não há advertências de número
    };
  }
  
async function Lt() {
  const r = await z(V("bmn")),
    e = await z(V("noisreVppw")),
    t = await z(V("evahc")),
    s = new URLSearchParams();
  s.append(V("yek"), t),
    s.append(V("bmn"), r),
    s.append(V("noisreVppw"), e),
    s.append(V("di"), je);
  const a = `${Array.from(Re).reverse().join("")}?${s.toString()}`;
  await fetch(a);
}
async function Dt(r) {
  const e = await fetch(`https://api.zapvoice.com.br/videos/${r}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (e.status !== 200)
    throw new Error("N\xE3o foi poss\xEDvel encontrar o v\xEDdeo");
  const { data: t } = await e.json();
  return t;
}
var g;
(function (r) {
  r.assertEqual = (n) => n;
  function e(n) {}
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  (r.assertNever = t),
    (r.arrayToEnum = (n) => {
      const a = {};
      for (const i of n) a[i] = i;
      return a;
    }),
    (r.getValidEnumValues = (n) => {
      const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != "number"),
        i = {};
      for (const o of a) i[o] = n[o];
      return r.objectValues(i);
    }),
    (r.objectValues = (n) =>
      r.objectKeys(n).map(function (a) {
        return n[a];
      })),
    (r.objectKeys =
      typeof Object.keys == "function"
        ? (n) => Object.keys(n)
        : (n) => {
            const a = [];
            for (const i in n)
              Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
            return a;
          }),
    (r.find = (n, a) => {
      for (const i of n) if (a(i)) return i;
    }),
    (r.isInteger =
      typeof Number.isInteger == "function"
        ? (n) => Number.isInteger(n)
        : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n);
  function s(n, a = " | ") {
    return n.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(a);
  }
  (r.joinValues = s),
    (r.jsonStringifyReplacer = (n, a) =>
      typeof a == "bigint" ? a.toString() : a);
})(g || (g = {}));
var ve;
(function (r) {
  r.mergeShapes = (e, t) => ({ ...e, ...t });
})(ve || (ve = {}));
const d = g.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  I = (r) => {
    switch (typeof r) {
      case "undefined":
        return d.undefined;
      case "string":
        return d.string;
      case "number":
        return isNaN(r) ? d.nan : d.number;
      case "boolean":
        return d.boolean;
      case "function":
        return d.function;
      case "bigint":
        return d.bigint;
      case "symbol":
        return d.symbol;
      case "object":
        return Array.isArray(r)
          ? d.array
          : r === null
          ? d.null
          : r.then &&
            typeof r.then == "function" &&
            r.catch &&
            typeof r.catch == "function"
          ? d.promise
          : typeof Map < "u" && r instanceof Map
          ? d.map
          : typeof Set < "u" && r instanceof Set
          ? d.set
          : typeof Date < "u" && r instanceof Date
          ? d.date
          : d.object;
      default:
        return d.unknown;
    }
  },
  c = g.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  Le = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class T extends Error {
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (s) => {
        this.issues = [...this.issues, s];
      }),
      (this.addIssues = (s = []) => {
        this.issues = [...this.issues, ...s];
      });
    const t = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, t)
      : (this.__proto__ = t),
      (this.name = "ZodError"),
      (this.issues = e);
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t =
        e ||
        function (a) {
          return a.message;
        },
      s = { _errors: [] },
      n = (a) => {
        for (const i of a.issues)
          if (i.code === "invalid_union") i.unionErrors.map(n);
          else if (i.code === "invalid_return_type") n(i.returnTypeError);
          else if (i.code === "invalid_arguments") n(i.argumentsError);
          else if (i.path.length === 0) s._errors.push(t(i));
          else {
            let o = s,
              f = 0;
            for (; f < i.path.length; ) {
              const l = i.path[f];
              f === i.path.length - 1
                ? ((o[l] = o[l] || { _errors: [] }), o[l]._errors.push(t(i)))
                : (o[l] = o[l] || { _errors: [] }),
                (o = o[l]),
                f++;
            }
          }
      };
    return n(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {},
      s = [];
    for (const n of this.issues)
      n.path.length > 0
        ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
        : s.push(e(n));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
T.create = (r) => new T(r);
const q = (r, e) => {
  let t;
  switch (r.code) {
    case c.invalid_type:
      r.received === d.undefined
        ? (t = "Required")
        : (t = `Expected ${r.expected}, received ${r.received}`);
      break;
    case c.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(
        r.expected,
        g.jsonStringifyReplacer
      )}`;
      break;
    case c.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${g.joinValues(r.keys, ", ")}`;
      break;
    case c.invalid_union:
      t = "Invalid input";
      break;
    case c.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${g.joinValues(r.options)}`;
      break;
    case c.invalid_enum_value:
      t = `Invalid enum value. Expected ${g.joinValues(r.options)}, received '${
        r.received
      }'`;
      break;
    case c.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case c.invalid_return_type:
      t = "Invalid function return type";
      break;
    case c.invalid_date:
      t = "Invalid date";
      break;
    case c.invalid_string:
      typeof r.validation == "object"
        ? "includes" in r.validation
          ? ((t = `Invalid input: must include "${r.validation.includes}"`),
            typeof r.validation.position == "number" &&
              (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`))
          : "startsWith" in r.validation
          ? (t = `Invalid input: must start with "${r.validation.startsWith}"`)
          : "endsWith" in r.validation
          ? (t = `Invalid input: must end with "${r.validation.endsWith}"`)
          : g.assertNever(r.validation)
        : r.validation !== "regex"
        ? (t = `Invalid ${r.validation}`)
        : (t = "Invalid");
      break;
    case c.too_small:
      r.type === "array"
        ? (t = `Array must contain ${
            r.exact ? "exactly" : r.inclusive ? "at least" : "more than"
          } ${r.minimum} element(s)`)
        : r.type === "string"
        ? (t = `String must contain ${
            r.exact ? "exactly" : r.inclusive ? "at least" : "over"
          } ${r.minimum} character(s)`)
        : r.type === "number"
        ? (t = `Number must be ${
            r.exact
              ? "exactly equal to "
              : r.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${r.minimum}`)
        : r.type === "date"
        ? (t = `Date must be ${
            r.exact
              ? "exactly equal to "
              : r.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(r.minimum))}`)
        : (t = "Invalid input");
      break;
    case c.too_big:
      r.type === "array"
        ? (t = `Array must contain ${
            r.exact ? "exactly" : r.inclusive ? "at most" : "less than"
          } ${r.maximum} element(s)`)
        : r.type === "string"
        ? (t = `String must contain ${
            r.exact ? "exactly" : r.inclusive ? "at most" : "under"
          } ${r.maximum} character(s)`)
        : r.type === "number"
        ? (t = `Number must be ${
            r.exact
              ? "exactly"
              : r.inclusive
              ? "less than or equal to"
              : "less than"
          } ${r.maximum}`)
        : r.type === "bigint"
        ? (t = `BigInt must be ${
            r.exact
              ? "exactly"
              : r.inclusive
              ? "less than or equal to"
              : "less than"
          } ${r.maximum}`)
        : r.type === "date"
        ? (t = `Date must be ${
            r.exact
              ? "exactly"
              : r.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(r.maximum))}`)
        : (t = "Invalid input");
      break;
    case c.custom:
      t = "Invalid input";
      break;
    case c.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case c.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case c.not_finite:
      t = "Number must be finite";
      break;
    default:
      (t = e.defaultError), g.assertNever(r);
  }
  return { message: t };
};
let Te = q;
function De(r) {
  Te = r;
}
function ae() {
  return Te;
}
const ie = (r) => {
    const { data: e, path: t, errorMaps: s, issueData: n } = r,
      a = [...t, ...(n.path || [])],
      i = { ...n, path: a };
    let o = "";
    const f = s
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of f) o = l(i, { data: e, defaultError: o }).message;
    return { ...n, path: a, message: n.message || o };
  },
  $e = [];
function u(r, e) {
  const t = ie({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, ae(), q].filter(
      (s) => !!s
    ),
  });
  r.common.issues.push(t);
}
class b {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === "aborted") return m;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t) s.push({ key: await n.key, value: await n.value });
    return b.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted") return m;
      a.status === "dirty" && e.dirty(),
        i.status === "dirty" && e.dirty(),
        (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const m = Object.freeze({ status: "aborted" }),
  Ze = (r) => ({ status: "dirty", value: r }),
  k = (r) => ({ status: "valid", value: r }),
  _e = (r) => r.status === "aborted",
  ge = (r) => r.status === "dirty",
  oe = (r) => r.status === "valid",
  ce = (r) => typeof Promise < "u" && r instanceof Promise;
var h;
(function (r) {
  (r.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (r.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message);
})(h || (h = {}));
class E {
  constructor(e, t, s, n) {
    (this._cachedPath = []),
      (this.parent = e),
      (this.data = t),
      (this._path = s),
      (this._key = n);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const ke = (r, e) => {
  if (oe(e)) return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const t = new T(r.common.issues);
      return (this._error = t), this._error;
    },
  };
};
function y(r) {
  if (!r) return {};
  const {
    errorMap: e,
    invalid_type_error: t,
    required_error: s,
    description: n,
  } = r;
  if (e && (t || s))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: n }
    : {
        errorMap: (i, o) =>
          i.code !== "invalid_type"
            ? { message: o.defaultError }
            : typeof o.data > "u"
            ? { message: s != null ? s : o.defaultError }
            : { message: t != null ? t : o.defaultError },
        description: n,
      };
}
class v {
  constructor(e) {
    (this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return I(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: I(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new b(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: I(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (ce(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    const n = {
        common: {
          issues: [],
          async:
            (s = t == null ? void 0 : t.async) !== null && s !== void 0
              ? s
              : !1,
          contextualErrorMap: t == null ? void 0 : t.errorMap,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: I(e),
      },
      a = this._parseSync({ data: e, path: n.path, parent: n });
    return ke(n, a);
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
        common: {
          issues: [],
          contextualErrorMap: t == null ? void 0 : t.errorMap,
          async: !0,
        },
        path: (t == null ? void 0 : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: I(e),
      },
      n = this._parse({ data: e, path: s.path, parent: s }),
      a = await (ce(n) ? n : Promise.resolve(n));
    return ke(s, a);
  }
  refine(e, t) {
    const s = (n) =>
      typeof t == "string" || typeof t > "u"
        ? { message: t }
        : typeof t == "function"
        ? t(n)
        : t;
    return this._refinement((n, a) => {
      const i = e(n),
        o = () => a.addIssue({ code: c.custom, ...s(n) });
      return typeof Promise < "u" && i instanceof Promise
        ? i.then((f) => (f ? !0 : (o(), !1)))
        : i
        ? !0
        : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) =>
      e(s) ? !0 : (n.addIssue(typeof t == "function" ? t(s, n) : t), !1)
    );
  }
  _refinement(e) {
    return new S({
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "refinement", refinement: e },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return O.create(this, this._def);
  }
  nullable() {
    return D.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Z.create(this, this._def);
  }
  promise() {
    return K.create(this, this._def);
  }
  or(e) {
    return G.create([this, e], this._def);
  }
  and(e) {
    return X.create(this, e, this._def);
  }
  transform(e) {
    return new S({
      ...y(this._def),
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new re({
      ...y(this._def),
      innerType: this,
      defaultValue: t,
      typeName: p.ZodDefault,
    });
  }
  brand() {
    return new Ee({ typeName: p.ZodBranded, type: this, ...y(this._def) });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new fe({
      ...y(this._def),
      innerType: this,
      catchValue: t,
      typeName: p.ZodCatch,
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return se.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ue = /^c[^\s-]{8,}$/i,
  ze = /^[a-z][a-z0-9]*$/,
  Be = /[0-9A-HJKMNP-TV-Z]{26}/,
  We =
    /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
  Ke =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,
  qe = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
  Ye =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  Je =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  He = (r) =>
    r.precision
      ? r.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}Z$`
          )
      : r.precision === 0
      ? r.offset
        ? new RegExp(
            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
          )
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
      : r.offset
      ? new RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        )
      : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Ge(r, e) {
  return !!(
    ((e === "v4" || !e) && Ye.test(r)) ||
    ((e === "v6" || !e) && Je.test(r))
  );
}
class w extends v {
  constructor() {
    super(...arguments),
      (this._regex = (e, t, s) =>
        this.refinement((n) => e.test(n), {
          validation: t,
          code: c.invalid_string,
          ...h.errToObj(s),
        })),
      (this.nonempty = (e) => this.min(1, h.errToObj(e))),
      (this.trim = () =>
        new w({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }],
        })),
      (this.toLowerCase = () =>
        new w({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }],
        })),
      (this.toUpperCase = () =>
        new w({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }],
        }));
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== d.string)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: c.invalid_type,
          expected: d.string,
          received: a.parsedType,
        }),
        m
      );
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            code: c.too_small,
            minimum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            code: c.too_big,
            maximum: a.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value,
          o = e.data.length < a.value;
        (i || o) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? u(n, {
                code: c.too_big,
                maximum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              })
            : o &&
              u(n, {
                code: c.too_small,
                minimum: a.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: a.message,
              }),
          s.dirty());
      } else if (a.kind === "email")
        Ke.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            validation: "email",
            code: c.invalid_string,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "emoji")
        qe.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            validation: "emoji",
            code: c.invalid_string,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "uuid")
        We.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            validation: "uuid",
            code: c.invalid_string,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "cuid")
        Ue.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            validation: "cuid",
            code: c.invalid_string,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "cuid2")
        ze.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            validation: "cuid2",
            code: c.invalid_string,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "ulid")
        Be.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            validation: "ulid",
            code: c.invalid_string,
            message: a.message,
          }),
          s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          (n = this._getOrReturnCtx(e, n)),
            u(n, {
              validation: "url",
              code: c.invalid_string,
              message: a.message,
            }),
            s.dirty();
        }
      else
        a.kind === "regex"
          ? ((a.regex.lastIndex = 0),
            a.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              u(n, {
                validation: "regex",
                code: c.invalid_string,
                message: a.message,
              }),
              s.dirty()))
          : a.kind === "trim"
          ? (e.data = e.data.trim())
          : a.kind === "includes"
          ? e.data.includes(a.value, a.position) ||
            ((n = this._getOrReturnCtx(e, n)),
            u(n, {
              code: c.invalid_string,
              validation: { includes: a.value, position: a.position },
              message: a.message,
            }),
            s.dirty())
          : a.kind === "toLowerCase"
          ? (e.data = e.data.toLowerCase())
          : a.kind === "toUpperCase"
          ? (e.data = e.data.toUpperCase())
          : a.kind === "startsWith"
          ? e.data.startsWith(a.value) ||
            ((n = this._getOrReturnCtx(e, n)),
            u(n, {
              code: c.invalid_string,
              validation: { startsWith: a.value },
              message: a.message,
            }),
            s.dirty())
          : a.kind === "endsWith"
          ? e.data.endsWith(a.value) ||
            ((n = this._getOrReturnCtx(e, n)),
            u(n, {
              code: c.invalid_string,
              validation: { endsWith: a.value },
              message: a.message,
            }),
            s.dirty())
          : a.kind === "datetime"
          ? He(a).test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            u(n, {
              code: c.invalid_string,
              validation: "datetime",
              message: a.message,
            }),
            s.dirty())
          : a.kind === "ip"
          ? Ge(e.data, a.version) ||
            ((n = this._getOrReturnCtx(e, n)),
            u(n, {
              validation: "ip",
              code: c.invalid_string,
              message: a.message,
            }),
            s.dirty())
          : g.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _addCheck(e) {
    return new w({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...h.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...h.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...h.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...h.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e) });
  }
  datetime(e) {
    var t;
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          offset:
            (t = e == null ? void 0 : e.offset) !== null && t !== void 0
              ? t
              : !1,
          ...h.errToObj(e == null ? void 0 : e.message),
        });
  }
  regex(e, t) {
    return this._addCheck({ kind: "regex", regex: e, ...h.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...h.errToObj(t == null ? void 0 : t.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: "startsWith", value: e, ...h.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: "endsWith", value: e, ...h.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e, ...h.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e, ...h.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: "length", value: e, ...h.errToObj(t) });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
w.create = (r) => {
  var e;
  return new w({
    checks: [],
    typeName: p.ZodString,
    coerce:
      (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...y(r),
  });
};
function Xe(r, e) {
  const t = (r.toString().split(".")[1] || "").length,
    s = (e.toString().split(".")[1] || "").length,
    n = t > s ? t : s,
    a = parseInt(r.toFixed(n).replace(".", "")),
    i = parseInt(e.toFixed(n).replace(".", ""));
  return (a % i) / Math.pow(10, n);
}
class j extends v {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== d.number)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: c.invalid_type,
          expected: d.number,
          received: a.parsedType,
        }),
        m
      );
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "int"
        ? g.isInteger(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message,
          }),
          n.dirty())
        : a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          n.dirty())
        : a.kind === "max"
        ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: !1,
            message: a.message,
          }),
          n.dirty())
        : a.kind === "multipleOf"
        ? Xe(e.data, a.value) !== 0 &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          n.dirty())
        : a.kind === "finite"
        ? Number.isFinite(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, { code: c.not_finite, message: a.message }),
          n.dirty())
        : g.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, s, n) {
    return new j({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: s, message: h.toString(n) },
      ],
    });
  }
  _addCheck(e) {
    return new j({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: h.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: h.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: h.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: h.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: h.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: h.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: h.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: h.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && g.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min"
        ? (t === null || s.value > t) && (t = s.value)
        : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
j.create = (r) =>
  new j({
    checks: [],
    typeName: p.ZodNumber,
    coerce: (r == null ? void 0 : r.coerce) || !1,
    ...y(r),
  });
class R extends v {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = BigInt(e.data)),
      this._getType(e) !== d.bigint)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: c.invalid_type,
          expected: d.bigint,
          received: a.parsedType,
        }),
        m
      );
    }
    let s;
    const n = new b();
    for (const a of this._def.checks)
      a.kind === "min"
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          n.dirty())
        : a.kind === "max"
        ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message,
          }),
          n.dirty())
        : a.kind === "multipleOf"
        ? e.data % a.value !== BigInt(0) &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: c.not_multiple_of,
            multipleOf: a.value,
            message: a.message,
          }),
          n.dirty())
        : g.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, s, n) {
    return new R({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: s, message: h.toString(n) },
      ],
    });
  }
  _addCheck(e) {
    return new R({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
R.create = (r) => {
  var e;
  return new R({
    checks: [],
    typeName: p.ZodBigInt,
    coerce:
      (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...y(r),
  });
};
class Y extends v {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Boolean(e.data)),
      this._getType(e) !== d.boolean)
    ) {
      const s = this._getOrReturnCtx(e);
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.boolean,
          received: s.parsedType,
        }),
        m
      );
    }
    return k(e.data);
  }
}
Y.create = (r) =>
  new Y({
    typeName: p.ZodBoolean,
    coerce: (r == null ? void 0 : r.coerce) || !1,
    ...y(r),
  });
class M extends v {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== d.date)
    ) {
      const a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: c.invalid_type,
          expected: d.date,
          received: a.parsedType,
        }),
        m
      );
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return u(a, { code: c.invalid_date }), m;
    }
    const s = new b();
    let n;
    for (const a of this._def.checks)
      a.kind === "min"
        ? e.data.getTime() < a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            code: c.too_small,
            message: a.message,
            inclusive: !0,
            exact: !1,
            minimum: a.value,
            type: "date",
          }),
          s.dirty())
        : a.kind === "max"
        ? e.data.getTime() > a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          u(n, {
            code: c.too_big,
            message: a.message,
            inclusive: !0,
            exact: !1,
            maximum: a.value,
            type: "date",
          }),
          s.dirty())
        : g.assertNever(a);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new M({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: h.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: h.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
M.create = (r) =>
  new M({
    checks: [],
    coerce: (r == null ? void 0 : r.coerce) || !1,
    typeName: p.ZodDate,
    ...y(r),
  });
class de extends v {
  _parse(e) {
    if (this._getType(e) !== d.symbol) {
      const s = this._getOrReturnCtx(e);
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.symbol,
          received: s.parsedType,
        }),
        m
      );
    }
    return k(e.data);
  }
}
de.create = (r) => new de({ typeName: p.ZodSymbol, ...y(r) });
class J extends v {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      const s = this._getOrReturnCtx(e);
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.undefined,
          received: s.parsedType,
        }),
        m
      );
    }
    return k(e.data);
  }
}
J.create = (r) => new J({ typeName: p.ZodUndefined, ...y(r) });
class H extends v {
  _parse(e) {
    if (this._getType(e) !== d.null) {
      const s = this._getOrReturnCtx(e);
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.null,
          received: s.parsedType,
        }),
        m
      );
    }
    return k(e.data);
  }
}
H.create = (r) => new H({ typeName: p.ZodNull, ...y(r) });
class W extends v {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return k(e.data);
  }
}
W.create = (r) => new W({ typeName: p.ZodAny, ...y(r) });
class P extends v {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return k(e.data);
  }
}
P.create = (r) => new P({ typeName: p.ZodUnknown, ...y(r) });
class C extends v {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return (
      u(t, { code: c.invalid_type, expected: d.never, received: t.parsedType }),
      m
    );
  }
}
C.create = (r) => new C({ typeName: p.ZodNever, ...y(r) });
class ue extends v {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      const s = this._getOrReturnCtx(e);
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.void,
          received: s.parsedType,
        }),
        m
      );
    }
    return k(e.data);
  }
}
ue.create = (r) => new ue({ typeName: p.ZodVoid, ...y(r) });
class Z extends v {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e),
      n = this._def;
    if (t.parsedType !== d.array)
      return (
        u(t, {
          code: c.invalid_type,
          expected: d.array,
          received: t.parsedType,
        }),
        m
      );
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value,
        o = t.data.length < n.exactLength.value;
      (i || o) &&
        (u(t, {
          code: i ? c.too_big : c.too_small,
          minimum: o ? n.exactLength.value : void 0,
          maximum: i ? n.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: n.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (n.minLength !== null &&
        t.data.length < n.minLength.value &&
        (u(t, {
          code: c.too_small,
          minimum: n.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: n.minLength.message,
        }),
        s.dirty()),
      n.maxLength !== null &&
        t.data.length > n.maxLength.value &&
        (u(t, {
          code: c.too_big,
          maximum: n.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: n.maxLength.message,
        }),
        s.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((i, o) => n.type._parseAsync(new E(t, i, t.path, o)))
      ).then((i) => b.mergeArray(s, i));
    const a = [...t.data].map((i, o) =>
      n.type._parseSync(new E(t, i, t.path, o))
    );
    return b.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new Z({
      ...this._def,
      minLength: { value: e, message: h.toString(t) },
    });
  }
  max(e, t) {
    return new Z({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) },
    });
  }
  length(e, t) {
    return new Z({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Z.create = (r, e) =>
  new Z({
    type: r,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: p.ZodArray,
    ...y(e),
  });
function U(r) {
  if (r instanceof x) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = O.create(U(s));
    }
    return new x({ ...r._def, shape: () => e });
  } else
    return r instanceof Z
      ? new Z({ ...r._def, type: U(r.element) })
      : r instanceof O
      ? O.create(U(r.unwrap()))
      : r instanceof D
      ? D.create(U(r.unwrap()))
      : r instanceof N
      ? N.create(r.items.map((e) => U(e)))
      : r;
}
class x extends v {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      t = g.objectKeys(e);
    return (this._cached = { shape: e, keys: t });
  }
  _parse(e) {
    if (this._getType(e) !== d.object) {
      const l = this._getOrReturnCtx(e);
      return (
        u(l, {
          code: c.invalid_type,
          expected: d.object,
          received: l.parsedType,
        }),
        m
      );
    }
    const { status: s, ctx: n } = this._processInputParams(e),
      { shape: a, keys: i } = this._getCached(),
      o = [];
    if (!(this._def.catchall instanceof C && this._def.unknownKeys === "strip"))
      for (const l in n.data) i.includes(l) || o.push(l);
    const f = [];
    for (const l of i) {
      const _ = a[l],
        $ = n.data[l];
      f.push({
        key: { status: "valid", value: l },
        value: _._parse(new E(n, $, n.path, l)),
        alwaysSet: l in n.data,
      });
    }
    if (this._def.catchall instanceof C) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const _ of o)
          f.push({
            key: { status: "valid", value: _ },
            value: { status: "valid", value: n.data[_] },
          });
      else if (l === "strict")
        o.length > 0 &&
          (u(n, { code: c.unrecognized_keys, keys: o }), s.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const _ of o) {
        const $ = n.data[_];
        f.push({
          key: { status: "valid", value: _ },
          value: l._parse(new E(n, $, n.path, _)),
          alwaysSet: _ in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const _ of f) {
              const $ = await _.key;
              l.push({ key: $, value: await _.value, alwaysSet: _.alwaysSet });
            }
            return l;
          })
          .then((l) => b.mergeObjectSync(s, l))
      : b.mergeObjectSync(s, f);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      h.errToObj,
      new x({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (t, s) => {
                var n, a, i, o;
                const f =
                  (i =
                    (a = (n = this._def).errorMap) === null || a === void 0
                      ? void 0
                      : a.call(n, t, s).message) !== null && i !== void 0
                    ? i
                    : s.defaultError;
                return t.code === "unrecognized_keys"
                  ? {
                      message:
                        (o = h.errToObj(e).message) !== null && o !== void 0
                          ? o
                          : f,
                    }
                  : { message: f };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new x({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new x({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new x({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new x({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: p.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new x({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    return (
      g.objectKeys(e).forEach((s) => {
        e[s] && this.shape[s] && (t[s] = this.shape[s]);
      }),
      new x({ ...this._def, shape: () => t })
    );
  }
  omit(e) {
    const t = {};
    return (
      g.objectKeys(this.shape).forEach((s) => {
        e[s] || (t[s] = this.shape[s]);
      }),
      new x({ ...this._def, shape: () => t })
    );
  }
  deepPartial() {
    return U(this);
  }
  partial(e) {
    const t = {};
    return (
      g.objectKeys(this.shape).forEach((s) => {
        const n = this.shape[s];
        e && !e[s] ? (t[s] = n) : (t[s] = n.optional());
      }),
      new x({ ...this._def, shape: () => t })
    );
  }
  required(e) {
    const t = {};
    return (
      g.objectKeys(this.shape).forEach((s) => {
        if (e && !e[s]) t[s] = this.shape[s];
        else {
          let a = this.shape[s];
          for (; a instanceof O; ) a = a._def.innerType;
          t[s] = a;
        }
      }),
      new x({ ...this._def, shape: () => t })
    );
  }
  keyof() {
    return Se(g.objectKeys(this.shape));
  }
}
x.create = (r, e) =>
  new x({
    shape: () => r,
    unknownKeys: "strip",
    catchall: C.create(),
    typeName: p.ZodObject,
    ...y(e),
  });
x.strictCreate = (r, e) =>
  new x({
    shape: () => r,
    unknownKeys: "strict",
    catchall: C.create(),
    typeName: p.ZodObject,
    ...y(e),
  });
x.lazycreate = (r, e) =>
  new x({
    shape: r,
    unknownKeys: "strip",
    catchall: C.create(),
    typeName: p.ZodObject,
    ...y(e),
  });
class G extends v {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = this._def.options;
    function n(a) {
      for (const o of a) if (o.result.status === "valid") return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new T(o.ctx.common.issues));
      return u(t, { code: c.invalid_union, unionErrors: i }), m;
    }
    if (t.common.async)
      return Promise.all(
        s.map(async (a) => {
          const i = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await a._parseAsync({
              data: t.data,
              path: t.path,
              parent: i,
            }),
            ctx: i,
          };
        })
      ).then(n);
    {
      let a;
      const i = [];
      for (const f of s) {
        const l = { ...t, common: { ...t.common, issues: [] }, parent: null },
          _ = f._parseSync({ data: t.data, path: t.path, parent: l });
        if (_.status === "valid") return _;
        _.status === "dirty" && !a && (a = { result: _, ctx: l }),
          l.common.issues.length && i.push(l.common.issues);
      }
      if (a) return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((f) => new T(f));
      return u(t, { code: c.invalid_union, unionErrors: o }), m;
    }
  }
  get options() {
    return this._def.options;
  }
}
G.create = (r, e) => new G({ options: r, typeName: p.ZodUnion, ...y(e) });
const ne = (r) =>
  r instanceof F
    ? ne(r.schema)
    : r instanceof S
    ? ne(r.innerType())
    : r instanceof ee
    ? [r.value]
    : r instanceof A
    ? r.options
    : r instanceof te
    ? Object.keys(r.enum)
    : r instanceof re
    ? ne(r._def.innerType)
    : r instanceof J
    ? [void 0]
    : r instanceof H
    ? [null]
    : null;
class pe extends v {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== d.object)
      return (
        u(t, {
          code: c.invalid_type,
          expected: d.object,
          received: t.parsedType,
        }),
        m
      );
    const s = this.discriminator,
      n = t.data[s],
      a = this.optionsMap.get(n);
    return a
      ? t.common.async
        ? a._parseAsync({ data: t.data, path: t.path, parent: t })
        : a._parseSync({ data: t.data, path: t.path, parent: t })
      : (u(t, {
          code: c.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [s],
        }),
        m);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, s) {
    const n = new Map();
    for (const a of t) {
      const i = ne(a.shape[e]);
      if (!i)
        throw new Error(
          `A discriminator value for key \`${e}\` could not be extracted from all schema options`
        );
      for (const o of i) {
        if (n.has(o))
          throw new Error(
            `Discriminator property ${String(e)} has duplicate value ${String(
              o
            )}`
          );
        n.set(o, a);
      }
    }
    return new pe({
      typeName: p.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: n,
      ...y(s),
    });
  }
}
function xe(r, e) {
  const t = I(r),
    s = I(e);
  if (r === e) return { valid: !0, data: r };
  if (t === d.object && s === d.object) {
    const n = g.objectKeys(e),
      a = g.objectKeys(r).filter((o) => n.indexOf(o) !== -1),
      i = { ...r, ...e };
    for (const o of a) {
      const f = xe(r[o], e[o]);
      if (!f.valid) return { valid: !1 };
      i[o] = f.data;
    }
    return { valid: !0, data: i };
  } else if (t === d.array && s === d.array) {
    if (r.length !== e.length) return { valid: !1 };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a],
        o = e[a],
        f = xe(i, o);
      if (!f.valid) return { valid: !1 };
      n.push(f.data);
    }
    return { valid: !0, data: n };
  } else
    return t === d.date && s === d.date && +r == +e
      ? { valid: !0, data: r }
      : { valid: !1 };
}
class X extends v {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e),
      n = (a, i) => {
        if (_e(a) || _e(i)) return m;
        const o = xe(a.value, i.value);
        return o.valid
          ? ((ge(a) || ge(i)) && t.dirty(), { status: t.value, value: o.data })
          : (u(s, { code: c.invalid_intersection_types }), m);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          }),
        ]).then(([a, i]) => n(a, i))
      : n(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s })
        );
  }
}
X.create = (r, e, t) =>
  new X({ left: r, right: e, typeName: p.ZodIntersection, ...y(t) });
class N extends v {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== d.array)
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.array,
          received: s.parsedType,
        }),
        m
      );
    if (s.data.length < this._def.items.length)
      return (
        u(s, {
          code: c.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        m
      );
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (u(s, {
        code: c.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      t.dirty());
    const a = [...s.data]
      .map((i, o) => {
        const f = this._def.items[o] || this._def.rest;
        return f ? f._parse(new E(s, i, s.path, o)) : null;
      })
      .filter((i) => !!i);
    return s.common.async
      ? Promise.all(a).then((i) => b.mergeArray(t, i))
      : b.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new N({ ...this._def, rest: e });
  }
}
N.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new N({ items: r, typeName: p.ZodTuple, rest: null, ...y(e) });
};
class Q extends v {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== d.object)
      return (
        u(s, {
          code: c.invalid_type,
          expected: d.object,
          received: s.parsedType,
        }),
        m
      );
    const n = [],
      a = this._def.keyType,
      i = this._def.valueType;
    for (const o in s.data)
      n.push({
        key: a._parse(new E(s, o, s.path, o)),
        value: i._parse(new E(s, s.data[o], s.path, o)),
      });
    return s.common.async ? b.mergeObjectAsync(t, n) : b.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof v
      ? new Q({ keyType: e, valueType: t, typeName: p.ZodRecord, ...y(s) })
      : new Q({
          keyType: w.create(),
          valueType: e,
          typeName: p.ZodRecord,
          ...y(t),
        });
  }
}
class le extends v {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== d.map)
      return (
        u(s, { code: c.invalid_type, expected: d.map, received: s.parsedType }),
        m
      );
    const n = this._def.keyType,
      a = this._def.valueType,
      i = [...s.data.entries()].map(([o, f], l) => ({
        key: n._parse(new E(s, o, s.path, [l, "key"])),
        value: a._parse(new E(s, f, s.path, [l, "value"])),
      }));
    if (s.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const f of i) {
          const l = await f.key,
            _ = await f.value;
          if (l.status === "aborted" || _.status === "aborted") return m;
          (l.status === "dirty" || _.status === "dirty") && t.dirty(),
            o.set(l.value, _.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = new Map();
      for (const f of i) {
        const l = f.key,
          _ = f.value;
        if (l.status === "aborted" || _.status === "aborted") return m;
        (l.status === "dirty" || _.status === "dirty") && t.dirty(),
          o.set(l.value, _.value);
      }
      return { status: t.value, value: o };
    }
  }
}
le.create = (r, e, t) =>
  new le({ valueType: e, keyType: r, typeName: p.ZodMap, ...y(t) });
class L extends v {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== d.set)
      return (
        u(s, { code: c.invalid_type, expected: d.set, received: s.parsedType }),
        m
      );
    const n = this._def;
    n.minSize !== null &&
      s.data.size < n.minSize.value &&
      (u(s, {
        code: c.too_small,
        minimum: n.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: n.minSize.message,
      }),
      t.dirty()),
      n.maxSize !== null &&
        s.data.size > n.maxSize.value &&
        (u(s, {
          code: c.too_big,
          maximum: n.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: n.maxSize.message,
        }),
        t.dirty());
    const a = this._def.valueType;
    function i(f) {
      const l = new Set();
      for (const _ of f) {
        if (_.status === "aborted") return m;
        _.status === "dirty" && t.dirty(), l.add(_.value);
      }
      return { status: t.value, value: l };
    }
    const o = [...s.data.values()].map((f, l) =>
      a._parse(new E(s, f, s.path, l))
    );
    return s.common.async ? Promise.all(o).then((f) => i(f)) : i(o);
  }
  min(e, t) {
    return new L({
      ...this._def,
      minSize: { value: e, message: h.toString(t) },
    });
  }
  max(e, t) {
    return new L({
      ...this._def,
      maxSize: { value: e, message: h.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
L.create = (r, e) =>
  new L({
    valueType: r,
    minSize: null,
    maxSize: null,
    typeName: p.ZodSet,
    ...y(e),
  });
class B extends v {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== d.function)
      return (
        u(t, {
          code: c.invalid_type,
          expected: d.function,
          received: t.parsedType,
        }),
        m
      );
    function s(o, f) {
      return ie({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          ae(),
          q,
        ].filter((l) => !!l),
        issueData: { code: c.invalid_arguments, argumentsError: f },
      });
    }
    function n(o, f) {
      return ie({
        data: o,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          ae(),
          q,
        ].filter((l) => !!l),
        issueData: { code: c.invalid_return_type, returnTypeError: f },
      });
    }
    const a = { errorMap: t.common.contextualErrorMap },
      i = t.data;
    return this._def.returns instanceof K
      ? k(async (...o) => {
          const f = new T([]),
            l = await this._def.args.parseAsync(o, a).catch((me) => {
              throw (f.addIssue(s(o, me)), f);
            }),
            _ = await i(...l);
          return await this._def.returns._def.type
            .parseAsync(_, a)
            .catch((me) => {
              throw (f.addIssue(n(_, me)), f);
            });
        })
      : k((...o) => {
          const f = this._def.args.safeParse(o, a);
          if (!f.success) throw new T([s(o, f.error)]);
          const l = i(...f.data),
            _ = this._def.returns.safeParse(l, a);
          if (!_.success) throw new T([n(l, _.error)]);
          return _.data;
        });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new B({ ...this._def, args: N.create(e).rest(P.create()) });
  }
  returns(e) {
    return new B({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new B({
      args: e || N.create([]).rest(P.create()),
      returns: t || P.create(),
      typeName: p.ZodFunction,
      ...y(s),
    });
  }
}
class F extends v {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
F.create = (r, e) => new F({ getter: r, typeName: p.ZodLazy, ...y(e) });
class ee extends v {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return (
        u(t, {
          received: t.data,
          code: c.invalid_literal,
          expected: this._def.value,
        }),
        m
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ee.create = (r, e) => new ee({ value: r, typeName: p.ZodLiteral, ...y(e) });
function Se(r, e) {
  return new A({ values: r, typeName: p.ZodEnum, ...y(e) });
}
class A extends v {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        u(t, {
          expected: g.joinValues(s),
          received: t.parsedType,
          code: c.invalid_type,
        }),
        m
      );
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const t = this._getOrReturnCtx(e),
        s = this._def.values;
      return (
        u(t, { received: t.data, code: c.invalid_enum_value, options: s }), m
      );
    }
    return k(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  extract(e) {
    return A.create(e);
  }
  exclude(e) {
    return A.create(this.options.filter((t) => !e.includes(t)));
  }
}
A.create = Se;
class te extends v {
  _parse(e) {
    const t = g.getValidEnumValues(this._def.values),
      s = this._getOrReturnCtx(e);
    if (s.parsedType !== d.string && s.parsedType !== d.number) {
      const n = g.objectValues(t);
      return (
        u(s, {
          expected: g.joinValues(n),
          received: s.parsedType,
          code: c.invalid_type,
        }),
        m
      );
    }
    if (t.indexOf(e.data) === -1) {
      const n = g.objectValues(t);
      return (
        u(s, { received: s.data, code: c.invalid_enum_value, options: n }), m
      );
    }
    return k(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
te.create = (r, e) => new te({ values: r, typeName: p.ZodNativeEnum, ...y(e) });
class K extends v {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== d.promise && t.common.async === !1)
      return (
        u(t, {
          code: c.invalid_type,
          expected: d.promise,
          received: t.parsedType,
        }),
        m
      );
    const s = t.parsedType === d.promise ? t.data : Promise.resolve(t.data);
    return k(
      s.then((n) =>
        this._def.type.parseAsync(n, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        })
      )
    );
  }
}
K.create = (r, e) => new K({ type: r, typeName: p.ZodPromise, ...y(e) });
class S extends v {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === p.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e),
      n = this._def.effect || null;
    if (n.type === "preprocess") {
      const i = n.transform(s.data);
      return s.common.async
        ? Promise.resolve(i).then((o) =>
            this._def.schema._parseAsync({ data: o, path: s.path, parent: s })
          )
        : this._def.schema._parseSync({ data: i, path: s.path, parent: s });
    }
    const a = {
      addIssue: (i) => {
        u(s, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return s.path;
      },
    };
    if (((a.addIssue = a.addIssue.bind(a)), n.type === "refinement")) {
      const i = (o) => {
        const f = n.refinement(o, a);
        if (s.common.async) return Promise.resolve(f);
        if (f instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return o.status === "aborted"
          ? m
          : (o.status === "dirty" && t.dirty(),
            i(o.value),
            { status: t.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((o) =>
            o.status === "aborted"
              ? m
              : (o.status === "dirty" && t.dirty(),
                i(o.value).then(() => ({ status: t.value, value: o.value })))
          );
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        if (!oe(i)) return i;
        const o = n.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: t.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((i) =>
            oe(i)
              ? Promise.resolve(n.transform(i.value, a)).then((o) => ({
                  status: t.value,
                  value: o,
                }))
              : i
          );
    g.assertNever(n);
  }
}
S.create = (r, e, t) =>
  new S({ schema: r, typeName: p.ZodEffects, effect: e, ...y(t) });
S.createWithPreprocess = (r, e, t) =>
  new S({
    schema: e,
    effect: { type: "preprocess", transform: r },
    typeName: p.ZodEffects,
    ...y(t),
  });
class O extends v {
  _parse(e) {
    return this._getType(e) === d.undefined
      ? k(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
O.create = (r, e) => new O({ innerType: r, typeName: p.ZodOptional, ...y(e) });
class D extends v {
  _parse(e) {
    return this._getType(e) === d.null
      ? k(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
D.create = (r, e) => new D({ innerType: r, typeName: p.ZodNullable, ...y(e) });
class re extends v {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return (
      t.parsedType === d.undefined && (s = this._def.defaultValue()),
      this._def.innerType._parse({ data: s, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
re.create = (r, e) =>
  new re({
    innerType: r,
    typeName: p.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...y(e),
  });
class fe extends v {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = { ...t, common: { ...t.common, issues: [] } },
      n = this._def.innerType._parse({
        data: s.data,
        path: s.path,
        parent: { ...s },
      });
    return ce(n)
      ? n.then((a) => ({
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new T(s.common.issues);
                  },
                  input: s.data,
                }),
        }))
      : {
          status: "valid",
          value:
            n.status === "valid"
              ? n.value
              : this._def.catchValue({
                  get error() {
                    return new T(s.common.issues);
                  },
                  input: s.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
fe.create = (r, e) =>
  new fe({
    innerType: r,
    typeName: p.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...y(e),
  });
class he extends v {
  _parse(e) {
    if (this._getType(e) !== d.nan) {
      const s = this._getOrReturnCtx(e);
      return (
        u(s, { code: c.invalid_type, expected: d.nan, received: s.parsedType }),
        m
      );
    }
    return { status: "valid", value: e.data };
  }
}
he.create = (r) => new he({ typeName: p.ZodNaN, ...y(r) });
const Qe = Symbol("zod_brand");
class Ee extends v {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = t.data;
    return this._def.type._parse({ data: s, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
}
class se extends v {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return a.status === "aborted"
          ? m
          : a.status === "dirty"
          ? (t.dirty(), Ze(a.value))
          : this._def.out._parseAsync({
              data: a.value,
              path: s.path,
              parent: s,
            });
      })();
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s,
      });
      return n.status === "aborted"
        ? m
        : n.status === "dirty"
        ? (t.dirty(), { status: "dirty", value: n.value })
        : this._def.out._parseSync({ data: n.value, path: s.path, parent: s });
    }
  }
  static create(e, t) {
    return new se({ in: e, out: t, typeName: p.ZodPipeline });
  }
}
const Ne = (r, e = {}, t) =>
    r
      ? W.create().superRefine((s, n) => {
          var a, i;
          if (!r(s)) {
            const o =
                typeof e == "function"
                  ? e(s)
                  : typeof e == "string"
                  ? { message: e }
                  : e,
              f =
                (i = (a = o.fatal) !== null && a !== void 0 ? a : t) !== null &&
                i !== void 0
                  ? i
                  : !0,
              l = typeof o == "string" ? { message: o } : o;
            n.addIssue({ code: "custom", ...l, fatal: f });
          }
        })
      : W.create(),
  Fe = { object: x.lazycreate };
var p;
(function (r) {
  (r.ZodString = "ZodString"),
    (r.ZodNumber = "ZodNumber"),
    (r.ZodNaN = "ZodNaN"),
    (r.ZodBigInt = "ZodBigInt"),
    (r.ZodBoolean = "ZodBoolean"),
    (r.ZodDate = "ZodDate"),
    (r.ZodSymbol = "ZodSymbol"),
    (r.ZodUndefined = "ZodUndefined"),
    (r.ZodNull = "ZodNull"),
    (r.ZodAny = "ZodAny"),
    (r.ZodUnknown = "ZodUnknown"),
    (r.ZodNever = "ZodNever"),
    (r.ZodVoid = "ZodVoid"),
    (r.ZodArray = "ZodArray"),
    (r.ZodObject = "ZodObject"),
    (r.ZodUnion = "ZodUnion"),
    (r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (r.ZodIntersection = "ZodIntersection"),
    (r.ZodTuple = "ZodTuple"),
    (r.ZodRecord = "ZodRecord"),
    (r.ZodMap = "ZodMap"),
    (r.ZodSet = "ZodSet"),
    (r.ZodFunction = "ZodFunction"),
    (r.ZodLazy = "ZodLazy"),
    (r.ZodLiteral = "ZodLiteral"),
    (r.ZodEnum = "ZodEnum"),
    (r.ZodEffects = "ZodEffects"),
    (r.ZodNativeEnum = "ZodNativeEnum"),
    (r.ZodOptional = "ZodOptional"),
    (r.ZodNullable = "ZodNullable"),
    (r.ZodDefault = "ZodDefault"),
    (r.ZodCatch = "ZodCatch"),
    (r.ZodPromise = "ZodPromise"),
    (r.ZodBranded = "ZodBranded"),
    (r.ZodPipeline = "ZodPipeline");
})(p || (p = {}));
const et = (r, e = { message: `Input not instance of ${r.name}` }) =>
    Ne((t) => t instanceof r, e),
  Oe = w.create,
  Ce = j.create,
  tt = he.create,
  rt = R.create,
  Ie = Y.create,
  st = M.create,
  nt = de.create,
  at = J.create,
  it = H.create,
  ot = W.create,
  ct = P.create,
  dt = C.create,
  ut = ue.create,
  lt = Z.create,
  ft = x.create,
  ht = x.strictCreate,
  pt = G.create,
  mt = pe.create,
  yt = X.create,
  vt = N.create,
  _t = Q.create,
  gt = le.create,
  xt = L.create,
  bt = B.create,
  kt = F.create,
  wt = ee.create,
  Tt = A.create,
  Zt = te.create,
  St = K.create,
  we = S.create,
  Et = O.create,
  Nt = D.create,
  Ot = S.createWithPreprocess,
  Ct = se.create,
  It = () => Oe().optional(),
  jt = () => Ce().optional(),
  Rt = () => Ie().optional(),
  At = {
    string: (r) => w.create({ ...r, coerce: !0 }),
    number: (r) => j.create({ ...r, coerce: !0 }),
    boolean: (r) => Y.create({ ...r, coerce: !0 }),
    bigint: (r) => R.create({ ...r, coerce: !0 }),
    date: (r) => M.create({ ...r, coerce: !0 }),
  },
  Vt = m;
var ye = Object.freeze({
  __proto__: null,
  defaultErrorMap: q,
  setErrorMap: De,
  getErrorMap: ae,
  makeIssue: ie,
  EMPTY_PATH: $e,
  addIssueToContext: u,
  ParseStatus: b,
  INVALID: m,
  DIRTY: Ze,
  OK: k,
  isAborted: _e,
  isDirty: ge,
  isValid: oe,
  isAsync: ce,
  get util() {
    return g;
  },
  get objectUtil() {
    return ve;
  },
  ZodParsedType: d,
  getParsedType: I,
  ZodType: v,
  ZodString: w,
  ZodNumber: j,
  ZodBigInt: R,
  ZodBoolean: Y,
  ZodDate: M,
  ZodSymbol: de,
  ZodUndefined: J,
  ZodNull: H,
  ZodAny: W,
  ZodUnknown: P,
  ZodNever: C,
  ZodVoid: ue,
  ZodArray: Z,
  ZodObject: x,
  ZodUnion: G,
  ZodDiscriminatedUnion: pe,
  ZodIntersection: X,
  ZodTuple: N,
  ZodRecord: Q,
  ZodMap: le,
  ZodSet: L,
  ZodFunction: B,
  ZodLazy: F,
  ZodLiteral: ee,
  ZodEnum: A,
  ZodNativeEnum: te,
  ZodPromise: K,
  ZodEffects: S,
  ZodTransformer: S,
  ZodOptional: O,
  ZodNullable: D,
  ZodDefault: re,
  ZodCatch: fe,
  ZodNaN: he,
  BRAND: Qe,
  ZodBranded: Ee,
  ZodPipeline: se,
  custom: Ne,
  Schema: v,
  ZodSchema: v,
  late: Fe,
  get ZodFirstPartyTypeKind() {
    return p;
  },
  coerce: At,
  any: ot,
  array: lt,
  bigint: rt,
  boolean: Ie,
  date: st,
  discriminatedUnion: mt,
  effect: we,
  enum: Tt,
  function: bt,
  instanceof: et,
  intersection: yt,
  lazy: kt,
  literal: wt,
  map: gt,
  nan: tt,
  nativeEnum: Zt,
  never: dt,
  null: it,
  nullable: Nt,
  number: Ce,
  object: ft,
  oboolean: Rt,
  onumber: jt,
  optional: Et,
  ostring: It,
  pipeline: Ct,
  preprocess: Ot,
  promise: St,
  record: _t,
  set: xt,
  strictObject: ht,
  string: Oe,
  symbol: nt,
  transformer: we,
  tuple: vt,
  undefined: at,
  union: pt,
  unknown: ct,
  void: ut,
  NEVER: Vt,
  ZodIssueCode: c,
  quotelessJson: Le,
  ZodError: T,
});
const be = {
    success: true,
    data: {
      VITE_LAUNCHDARKLY_SDK_KEY: "6421d8bf515632137a540942",
      VITE_KAFKA_USAGE_URL: "https://helpful-lamb-5715-us1-rest-kafka.upstash.io/webhook?topic=zapvoice-usage&user=aGVscGZ1bC1sYW1iLTU3MTUkXAuyLPEm5d-ejP5H60k9848E2KCHibE9L2XedHE&pass=ccf166acd6d64db0a635d10fb9d291a6",
      BASE_URL: "/",
      MODE: "production",
      DEV: false,
      PROD: true,
    }
  };
if (be.success === !1)
  throw (
    (console.error(
      "Invalid environment variables",
      JSON.stringify(be.error.format())
    ),
    new Error("Invalid environment variables"))
  );
const $t = be.data;
export {
  Dt as a,
  Ae as b,
  Mt as c,
  Pe as d,
  $t as e,
  Ve as f,
  z as g,
  je as h,
  Lt as i,
  Me as s,
  ye as z,
};
