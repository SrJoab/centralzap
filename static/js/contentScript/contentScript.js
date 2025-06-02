(function () {
  "use strict";
  const wl = { eventName: "ZVEvent" };
  function Mt(i) {
    const n = new CustomEvent(wl.eventName, { detail: i });
    window.dispatchEvent(n);
  }
  const cr = { eventName: "ZVUsagePTC", storedName: "zvUsageHits" };
  function sn(i) {
    const n = new CustomEvent(cr.eventName, { detail: i });
    window.dispatchEvent(n);
  }
  async function on(i) {
    return new Promise((n) => {
      if (chrome != null && chrome.storage)
        chrome.storage.local.get(i, (r) => {
          try {
            const s = JSON.parse(r[i]);
            n(s);
          } catch {
            n(r[i]);
          }
        });
      else {
        const r = localStorage.getItem(i);
        try {
          const s = JSON.parse(r);
          n(s);
        } catch {
          n(r);
        }
      }
    });
  }
  async function xl(i) {
    return await on(i.id);
  }
  async function bl(i) {
    return await on(i.id);
  }
  async function El(i) {
    return await on(i.id);
  }
  async function kl(i) {
    return await on(i.id);
  }
  const Qs =
    chrome != null && chrome.runtime ? chrome.runtime.id : "localExtensionId";
  function Sl() {
    const i = [];
    function n(c) {
      i.push(c);
    }
    function r(c, o, l) {
      i.forEach((d) => {
        d && d(c);
      }),
        l({ ok: !0 });
    }
    const s = async (c, o, l) => {
      o.id === Qs && r(c, o, l);
    };
    return (
      chrome.runtime.onMessage.addListener(s),
      {
        subscribe: n,
        cleanup: () => chrome.runtime.onMessage.removeListener(s),
      }
    );
  }
  const ra = {
      error(i) {
        Mt({ type: "toast", item: { type: "error", message: i } });
      },
      success(i) {
        Mt({ type: "toast", item: { type: "success", message: i } });
      },
    },
    eo = { eventName: "ZVEventPTC" };
  function Tl() {
    const i = [];
    function n(c) {
      i.push(c);
    }
    function r(c) {
      i.forEach((o) => {
        o && o(c);
      });
    }
    async function s(c) {
      const { detail: o } = c;
      r(o);
    }
    return (
      window.addEventListener(eo.eventName, s),
      {
        subscribe: n,
        cleanup: () => window.removeEventListener(eo.eventName, s),
      }
    );
  }
  async function Il(i) {
    return (await on("funis")).find((s) => s.id === i);
  }
  var ve;
  (function (i) {
    i.assertEqual = (c) => c;
    function n(c) {}
    i.assertIs = n;
    function r(c) {
      throw new Error();
    }
    (i.assertNever = r),
      (i.arrayToEnum = (c) => {
        const o = {};
        for (const l of c) o[l] = l;
        return o;
      }),
      (i.getValidEnumValues = (c) => {
        const o = i.objectKeys(c).filter((d) => typeof c[c[d]] != "number"),
          l = {};
        for (const d of o) l[d] = c[d];
        return i.objectValues(l);
      }),
      (i.objectValues = (c) =>
        i.objectKeys(c).map(function (o) {
          return c[o];
        })),
      (i.objectKeys =
        typeof Object.keys == "function"
          ? (c) => Object.keys(c)
          : (c) => {
              const o = [];
              for (const l in c)
                Object.prototype.hasOwnProperty.call(c, l) && o.push(l);
              return o;
            }),
      (i.find = (c, o) => {
        for (const l of c) if (o(l)) return l;
      }),
      (i.isInteger =
        typeof Number.isInteger == "function"
          ? (c) => Number.isInteger(c)
          : (c) => typeof c == "number" && isFinite(c) && Math.floor(c) === c);
    function s(c, o = " | ") {
      return c.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(o);
    }
    (i.joinValues = s),
      (i.jsonStringifyReplacer = (c, o) =>
        typeof o == "bigint" ? o.toString() : o);
  })(ve || (ve = {}));
  var ia;
  (function (i) {
    i.mergeShapes = (n, r) => ({ ...n, ...r });
  })(ia || (ia = {}));
  const N = ve.arrayToEnum([
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
    un = (i) => {
      switch (typeof i) {
        case "undefined":
          return N.undefined;
        case "string":
          return N.string;
        case "number":
          return isNaN(i) ? N.nan : N.number;
        case "boolean":
          return N.boolean;
        case "function":
          return N.function;
        case "bigint":
          return N.bigint;
        case "symbol":
          return N.symbol;
        case "object":
          return Array.isArray(i)
            ? N.array
            : i === null
            ? N.null
            : i.then &&
              typeof i.then == "function" &&
              i.catch &&
              typeof i.catch == "function"
            ? N.promise
            : typeof Map < "u" && i instanceof Map
            ? N.map
            : typeof Set < "u" && i instanceof Set
            ? N.set
            : typeof Date < "u" && i instanceof Date
            ? N.date
            : N.object;
        default:
          return N.unknown;
      }
    },
    R = ve.arrayToEnum([
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
    Cl = (i) => JSON.stringify(i, null, 2).replace(/"([^"]+)":/g, "$1:");
  class At extends Error {
    constructor(n) {
      super(),
        (this.issues = []),
        (this.addIssue = (s) => {
          this.issues = [...this.issues, s];
        }),
        (this.addIssues = (s = []) => {
          this.issues = [...this.issues, ...s];
        });
      const r = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, r)
        : (this.__proto__ = r),
        (this.name = "ZodError"),
        (this.issues = n);
    }
    get errors() {
      return this.issues;
    }
    format(n) {
      const r =
          n ||
          function (o) {
            return o.message;
          },
        s = { _errors: [] },
        c = (o) => {
          for (const l of o.issues)
            if (l.code === "invalid_union") l.unionErrors.map(c);
            else if (l.code === "invalid_return_type") c(l.returnTypeError);
            else if (l.code === "invalid_arguments") c(l.argumentsError);
            else if (l.path.length === 0) s._errors.push(r(l));
            else {
              let d = s,
                g = 0;
              for (; g < l.path.length; ) {
                const v = l.path[g];
                g === l.path.length - 1
                  ? ((d[v] = d[v] || { _errors: [] }), d[v]._errors.push(r(l)))
                  : (d[v] = d[v] || { _errors: [] }),
                  (d = d[v]),
                  g++;
              }
            }
        };
      return c(this), s;
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, ve.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(n = (r) => r.message) {
      const r = {},
        s = [];
      for (const c of this.issues)
        c.path.length > 0
          ? ((r[c.path[0]] = r[c.path[0]] || []), r[c.path[0]].push(n(c)))
          : s.push(n(c));
      return { formErrors: s, fieldErrors: r };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  At.create = (i) => new At(i);
  const lr = (i, n) => {
    let r;
    switch (i.code) {
      case R.invalid_type:
        i.received === N.undefined
          ? (r = "Required")
          : (r = `Expected ${i.expected}, received ${i.received}`);
        break;
      case R.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(
          i.expected,
          ve.jsonStringifyReplacer
        )}`;
        break;
      case R.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${ve.joinValues(i.keys, ", ")}`;
        break;
      case R.invalid_union:
        r = "Invalid input";
        break;
      case R.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${ve.joinValues(i.options)}`;
        break;
      case R.invalid_enum_value:
        r = `Invalid enum value. Expected ${ve.joinValues(
          i.options
        )}, received '${i.received}'`;
        break;
      case R.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case R.invalid_return_type:
        r = "Invalid function return type";
        break;
      case R.invalid_date:
        r = "Invalid date";
        break;
      case R.invalid_string:
        typeof i.validation == "object"
          ? "includes" in i.validation
            ? ((r = `Invalid input: must include "${i.validation.includes}"`),
              typeof i.validation.position == "number" &&
                (r = `${r} at one or more positions greater than or equal to ${i.validation.position}`))
            : "startsWith" in i.validation
            ? (r = `Invalid input: must start with "${i.validation.startsWith}"`)
            : "endsWith" in i.validation
            ? (r = `Invalid input: must end with "${i.validation.endsWith}"`)
            : ve.assertNever(i.validation)
          : i.validation !== "regex"
          ? (r = `Invalid ${i.validation}`)
          : (r = "Invalid");
        break;
      case R.too_small:
        i.type === "array"
          ? (r = `Array must contain ${
              i.exact ? "exactly" : i.inclusive ? "at least" : "more than"
            } ${i.minimum} element(s)`)
          : i.type === "string"
          ? (r = `String must contain ${
              i.exact ? "exactly" : i.inclusive ? "at least" : "over"
            } ${i.minimum} character(s)`)
          : i.type === "number"
          ? (r = `Number must be ${
              i.exact
                ? "exactly equal to "
                : i.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${i.minimum}`)
          : i.type === "date"
          ? (r = `Date must be ${
              i.exact
                ? "exactly equal to "
                : i.inclusive
                ? "greater than or equal to "
                : "greater than "
            }${new Date(Number(i.minimum))}`)
          : (r = "Invalid input");
        break;
      case R.too_big:
        i.type === "array"
          ? (r = `Array must contain ${
              i.exact ? "exactly" : i.inclusive ? "at most" : "less than"
            } ${i.maximum} element(s)`)
          : i.type === "string"
          ? (r = `String must contain ${
              i.exact ? "exactly" : i.inclusive ? "at most" : "under"
            } ${i.maximum} character(s)`)
          : i.type === "number"
          ? (r = `Number must be ${
              i.exact
                ? "exactly"
                : i.inclusive
                ? "less than or equal to"
                : "less than"
            } ${i.maximum}`)
          : i.type === "bigint"
          ? (r = `BigInt must be ${
              i.exact
                ? "exactly"
                : i.inclusive
                ? "less than or equal to"
                : "less than"
            } ${i.maximum}`)
          : i.type === "date"
          ? (r = `Date must be ${
              i.exact
                ? "exactly"
                : i.inclusive
                ? "smaller than or equal to"
                : "smaller than"
            } ${new Date(Number(i.maximum))}`)
          : (r = "Invalid input");
        break;
      case R.custom:
        r = "Invalid input";
        break;
      case R.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case R.not_multiple_of:
        r = `Number must be a multiple of ${i.multipleOf}`;
        break;
      case R.not_finite:
        r = "Number must be finite";
        break;
      default:
        (r = n.defaultError), ve.assertNever(i);
    }
    return { message: r };
  };
  let to = lr;
  function Al(i) {
    to = i;
  }
  function Vr() {
    return to;
  }
  const zr = (i) => {
      const { data: n, path: r, errorMaps: s, issueData: c } = i,
        o = [...r, ...(c.path || [])],
        l = { ...c, path: o };
      let d = "";
      const g = s
        .filter((v) => !!v)
        .slice()
        .reverse();
      for (const v of g) d = v(l, { data: n, defaultError: d }).message;
      return { ...c, path: o, message: c.message || d };
    },
    Ol = [];
  function M(i, n) {
    const r = zr({
      issueData: n,
      data: i.data,
      path: i.path,
      errorMaps: [
        i.common.contextualErrorMap,
        i.schemaErrorMap,
        Vr(),
        lr,
      ].filter((s) => !!s),
    });
    i.common.issues.push(r);
  }
  class ze {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(n, r) {
      const s = [];
      for (const c of r) {
        if (c.status === "aborted") return ee;
        c.status === "dirty" && n.dirty(), s.push(c.value);
      }
      return { status: n.value, value: s };
    }
    static async mergeObjectAsync(n, r) {
      const s = [];
      for (const c of r) s.push({ key: await c.key, value: await c.value });
      return ze.mergeObjectSync(n, s);
    }
    static mergeObjectSync(n, r) {
      const s = {};
      for (const c of r) {
        const { key: o, value: l } = c;
        if (o.status === "aborted" || l.status === "aborted") return ee;
        o.status === "dirty" && n.dirty(),
          l.status === "dirty" && n.dirty(),
          (typeof l.value < "u" || c.alwaysSet) && (s[o.value] = l.value);
      }
      return { status: n.value, value: s };
    }
  }
  const ee = Object.freeze({ status: "aborted" }),
    no = (i) => ({ status: "dirty", value: i }),
    Xe = (i) => ({ status: "valid", value: i }),
    aa = (i) => i.status === "aborted",
    sa = (i) => i.status === "dirty",
    qr = (i) => i.status === "valid",
    jr = (i) => typeof Promise < "u" && i instanceof Promise;
  var H;
  (function (i) {
    (i.errToObj = (n) => (typeof n == "string" ? { message: n } : n || {})),
      (i.toString = (n) =>
        typeof n == "string" ? n : n == null ? void 0 : n.message);
  })(H || (H = {}));
  class Zt {
    constructor(n, r, s, c) {
      (this._cachedPath = []),
        (this.parent = n),
        (this.data = r),
        (this._path = s),
        (this._key = c);
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
  const ro = (i, n) => {
    if (qr(n)) return { success: !0, data: n.value };
    if (!i.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        const r = new At(i.common.issues);
        return (this._error = r), this._error;
      },
    };
  };
  function re(i) {
    if (!i) return {};
    const {
      errorMap: n,
      invalid_type_error: r,
      required_error: s,
      description: c,
    } = i;
    if (n && (r || s))
      throw new Error(
        `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
      );
    return n
      ? { errorMap: n, description: c }
      : {
          errorMap: (l, d) =>
            l.code !== "invalid_type"
              ? { message: d.defaultError }
              : typeof d.data > "u"
              ? { message: s != null ? s : d.defaultError }
              : { message: r != null ? r : d.defaultError },
          description: c,
        };
  }
  class ce {
    constructor(n) {
      (this.spa = this.safeParseAsync),
        (this._def = n),
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
    _getType(n) {
      return un(n.data);
    }
    _getOrReturnCtx(n, r) {
      return (
        r || {
          common: n.parent.common,
          data: n.data,
          parsedType: un(n.data),
          schemaErrorMap: this._def.errorMap,
          path: n.path,
          parent: n.parent,
        }
      );
    }
    _processInputParams(n) {
      return {
        status: new ze(),
        ctx: {
          common: n.parent.common,
          data: n.data,
          parsedType: un(n.data),
          schemaErrorMap: this._def.errorMap,
          path: n.path,
          parent: n.parent,
        },
      };
    }
    _parseSync(n) {
      const r = this._parse(n);
      if (jr(r)) throw new Error("Synchronous parse encountered promise.");
      return r;
    }
    _parseAsync(n) {
      const r = this._parse(n);
      return Promise.resolve(r);
    }
    parse(n, r) {
      const s = this.safeParse(n, r);
      if (s.success) return s.data;
      throw s.error;
    }
    safeParse(n, r) {
      var s;
      const c = {
          common: {
            issues: [],
            async:
              (s = r == null ? void 0 : r.async) !== null && s !== void 0
                ? s
                : !1,
            contextualErrorMap: r == null ? void 0 : r.errorMap,
          },
          path: (r == null ? void 0 : r.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: n,
          parsedType: un(n),
        },
        o = this._parseSync({ data: n, path: c.path, parent: c });
      return ro(c, o);
    }
    async parseAsync(n, r) {
      const s = await this.safeParseAsync(n, r);
      if (s.success) return s.data;
      throw s.error;
    }
    async safeParseAsync(n, r) {
      const s = {
          common: {
            issues: [],
            contextualErrorMap: r == null ? void 0 : r.errorMap,
            async: !0,
          },
          path: (r == null ? void 0 : r.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: n,
          parsedType: un(n),
        },
        c = this._parse({ data: n, path: s.path, parent: s }),
        o = await (jr(c) ? c : Promise.resolve(c));
      return ro(s, o);
    }
    refine(n, r) {
      const s = (c) =>
        typeof r == "string" || typeof r > "u"
          ? { message: r }
          : typeof r == "function"
          ? r(c)
          : r;
      return this._refinement((c, o) => {
        const l = n(c),
          d = () => o.addIssue({ code: R.custom, ...s(c) });
        return typeof Promise < "u" && l instanceof Promise
          ? l.then((g) => (g ? !0 : (d(), !1)))
          : l
          ? !0
          : (d(), !1);
      });
    }
    refinement(n, r) {
      return this._refinement((s, c) =>
        n(s) ? !0 : (c.addIssue(typeof r == "function" ? r(s, c) : r), !1)
      );
    }
    _refinement(n) {
      return new Lt({
        schema: this,
        typeName: J.ZodEffects,
        effect: { type: "refinement", refinement: n },
      });
    }
    superRefine(n) {
      return this._refinement(n);
    }
    optional() {
      return qt.create(this, this._def);
    }
    nullable() {
      return Cn.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Rt.create(this, this._def);
    }
    promise() {
      return Vn.create(this, this._def);
    }
    or(n) {
      return pr.create([this, n], this._def);
    }
    and(n) {
      return gr.create(this, n, this._def);
    }
    transform(n) {
      return new Lt({
        ...re(this._def),
        schema: this,
        typeName: J.ZodEffects,
        effect: { type: "transform", transform: n },
      });
    }
    default(n) {
      const r = typeof n == "function" ? n : () => n;
      return new wr({
        ...re(this._def),
        innerType: this,
        defaultValue: r,
        typeName: J.ZodDefault,
      });
    }
    brand() {
      return new ao({ typeName: J.ZodBranded, type: this, ...re(this._def) });
    }
    catch(n) {
      const r = typeof n == "function" ? n : () => n;
      return new Qr({
        ...re(this._def),
        innerType: this,
        catchValue: r,
        typeName: J.ZodCatch,
      });
    }
    describe(n) {
      const r = this.constructor;
      return new r({ ...this._def, description: n });
    }
    pipe(n) {
      return xr.create(this, n);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const Rl = /^c[^\s-]{8,}$/i,
    Ll = /^[a-z][a-z0-9]*$/,
    Dl = /[0-9A-HJKMNP-TV-Z]{26}/,
    Pl =
      /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
    Nl =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,
    Ul = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,
    Ml =
      /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
    Zl =
      /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    Fl = (i) =>
      i.precision
        ? i.offset
          ? new RegExp(
              `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
            )
          : new RegExp(
              `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`
            )
        : i.precision === 0
        ? i.offset
          ? new RegExp(
              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
            )
          : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
        : i.offset
        ? new RegExp(
            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
          )
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
  function Bl(i, n) {
    return !!(
      ((n === "v4" || !n) && Ml.test(i)) ||
      ((n === "v6" || !n) && Zl.test(i))
    );
  }
  class Ot extends ce {
    constructor() {
      super(...arguments),
        (this._regex = (n, r, s) =>
          this.refinement((c) => n.test(c), {
            validation: r,
            code: R.invalid_string,
            ...H.errToObj(s),
          })),
        (this.nonempty = (n) => this.min(1, H.errToObj(n))),
        (this.trim = () =>
          new Ot({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          })),
        (this.toLowerCase = () =>
          new Ot({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          })),
        (this.toUpperCase = () =>
          new Ot({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          }));
    }
    _parse(n) {
      if (
        (this._def.coerce && (n.data = String(n.data)),
        this._getType(n) !== N.string)
      ) {
        const o = this._getOrReturnCtx(n);
        return (
          M(o, {
            code: R.invalid_type,
            expected: N.string,
            received: o.parsedType,
          }),
          ee
        );
      }
      const s = new ze();
      let c;
      for (const o of this._def.checks)
        if (o.kind === "min")
          n.data.length < o.value &&
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              code: R.too_small,
              minimum: o.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "max")
          n.data.length > o.value &&
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              code: R.too_big,
              maximum: o.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "length") {
          const l = n.data.length > o.value,
            d = n.data.length < o.value;
          (l || d) &&
            ((c = this._getOrReturnCtx(n, c)),
            l
              ? M(c, {
                  code: R.too_big,
                  maximum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: o.message,
                })
              : d &&
                M(c, {
                  code: R.too_small,
                  minimum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: o.message,
                }),
            s.dirty());
        } else if (o.kind === "email")
          Nl.test(n.data) ||
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              validation: "email",
              code: R.invalid_string,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "emoji")
          Ul.test(n.data) ||
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              validation: "emoji",
              code: R.invalid_string,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "uuid")
          Pl.test(n.data) ||
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              validation: "uuid",
              code: R.invalid_string,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "cuid")
          Rl.test(n.data) ||
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              validation: "cuid",
              code: R.invalid_string,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "cuid2")
          Ll.test(n.data) ||
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              validation: "cuid2",
              code: R.invalid_string,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "ulid")
          Dl.test(n.data) ||
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              validation: "ulid",
              code: R.invalid_string,
              message: o.message,
            }),
            s.dirty());
        else if (o.kind === "url")
          try {
            new URL(n.data);
          } catch {
            (c = this._getOrReturnCtx(n, c)),
              M(c, {
                validation: "url",
                code: R.invalid_string,
                message: o.message,
              }),
              s.dirty();
          }
        else
          o.kind === "regex"
            ? ((o.regex.lastIndex = 0),
              o.regex.test(n.data) ||
                ((c = this._getOrReturnCtx(n, c)),
                M(c, {
                  validation: "regex",
                  code: R.invalid_string,
                  message: o.message,
                }),
                s.dirty()))
            : o.kind === "trim"
            ? (n.data = n.data.trim())
            : o.kind === "includes"
            ? n.data.includes(o.value, o.position) ||
              ((c = this._getOrReturnCtx(n, c)),
              M(c, {
                code: R.invalid_string,
                validation: { includes: o.value, position: o.position },
                message: o.message,
              }),
              s.dirty())
            : o.kind === "toLowerCase"
            ? (n.data = n.data.toLowerCase())
            : o.kind === "toUpperCase"
            ? (n.data = n.data.toUpperCase())
            : o.kind === "startsWith"
            ? n.data.startsWith(o.value) ||
              ((c = this._getOrReturnCtx(n, c)),
              M(c, {
                code: R.invalid_string,
                validation: { startsWith: o.value },
                message: o.message,
              }),
              s.dirty())
            : o.kind === "endsWith"
            ? n.data.endsWith(o.value) ||
              ((c = this._getOrReturnCtx(n, c)),
              M(c, {
                code: R.invalid_string,
                validation: { endsWith: o.value },
                message: o.message,
              }),
              s.dirty())
            : o.kind === "datetime"
            ? Fl(o).test(n.data) ||
              ((c = this._getOrReturnCtx(n, c)),
              M(c, {
                code: R.invalid_string,
                validation: "datetime",
                message: o.message,
              }),
              s.dirty())
            : o.kind === "ip"
            ? Bl(n.data, o.version) ||
              ((c = this._getOrReturnCtx(n, c)),
              M(c, {
                validation: "ip",
                code: R.invalid_string,
                message: o.message,
              }),
              s.dirty())
            : ve.assertNever(o);
      return { status: s.value, value: n.data };
    }
    _addCheck(n) {
      return new Ot({ ...this._def, checks: [...this._def.checks, n] });
    }
    email(n) {
      return this._addCheck({ kind: "email", ...H.errToObj(n) });
    }
    url(n) {
      return this._addCheck({ kind: "url", ...H.errToObj(n) });
    }
    emoji(n) {
      return this._addCheck({ kind: "emoji", ...H.errToObj(n) });
    }
    uuid(n) {
      return this._addCheck({ kind: "uuid", ...H.errToObj(n) });
    }
    cuid(n) {
      return this._addCheck({ kind: "cuid", ...H.errToObj(n) });
    }
    cuid2(n) {
      return this._addCheck({ kind: "cuid2", ...H.errToObj(n) });
    }
    ulid(n) {
      return this._addCheck({ kind: "ulid", ...H.errToObj(n) });
    }
    ip(n) {
      return this._addCheck({ kind: "ip", ...H.errToObj(n) });
    }
    datetime(n) {
      var r;
      return typeof n == "string"
        ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: n,
          })
        : this._addCheck({
            kind: "datetime",
            precision:
              typeof (n == null ? void 0 : n.precision) > "u"
                ? null
                : n == null
                ? void 0
                : n.precision,
            offset:
              (r = n == null ? void 0 : n.offset) !== null && r !== void 0
                ? r
                : !1,
            ...H.errToObj(n == null ? void 0 : n.message),
          });
    }
    regex(n, r) {
      return this._addCheck({ kind: "regex", regex: n, ...H.errToObj(r) });
    }
    includes(n, r) {
      return this._addCheck({
        kind: "includes",
        value: n,
        position: r == null ? void 0 : r.position,
        ...H.errToObj(r == null ? void 0 : r.message),
      });
    }
    startsWith(n, r) {
      return this._addCheck({ kind: "startsWith", value: n, ...H.errToObj(r) });
    }
    endsWith(n, r) {
      return this._addCheck({ kind: "endsWith", value: n, ...H.errToObj(r) });
    }
    min(n, r) {
      return this._addCheck({ kind: "min", value: n, ...H.errToObj(r) });
    }
    max(n, r) {
      return this._addCheck({ kind: "max", value: n, ...H.errToObj(r) });
    }
    length(n, r) {
      return this._addCheck({ kind: "length", value: n, ...H.errToObj(r) });
    }
    get isDatetime() {
      return !!this._def.checks.find((n) => n.kind === "datetime");
    }
    get isEmail() {
      return !!this._def.checks.find((n) => n.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((n) => n.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((n) => n.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((n) => n.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((n) => n.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((n) => n.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((n) => n.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((n) => n.kind === "ip");
    }
    get minLength() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "min" && (n === null || r.value > n) && (n = r.value);
      return n;
    }
    get maxLength() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "max" && (n === null || r.value < n) && (n = r.value);
      return n;
    }
  }
  Ot.create = (i) => {
    var n;
    return new Ot({
      checks: [],
      typeName: J.ZodString,
      coerce:
        (n = i == null ? void 0 : i.coerce) !== null && n !== void 0 ? n : !1,
      ...re(i),
    });
  };
  function Wl(i, n) {
    const r = (i.toString().split(".")[1] || "").length,
      s = (n.toString().split(".")[1] || "").length,
      c = r > s ? r : s,
      o = parseInt(i.toFixed(c).replace(".", "")),
      l = parseInt(n.toFixed(c).replace(".", ""));
    return (o % l) / Math.pow(10, c);
  }
  class cn extends ce {
    constructor() {
      super(...arguments),
        (this.min = this.gte),
        (this.max = this.lte),
        (this.step = this.multipleOf);
    }
    _parse(n) {
      if (
        (this._def.coerce && (n.data = Number(n.data)),
        this._getType(n) !== N.number)
      ) {
        const o = this._getOrReturnCtx(n);
        return (
          M(o, {
            code: R.invalid_type,
            expected: N.number,
            received: o.parsedType,
          }),
          ee
        );
      }
      let s;
      const c = new ze();
      for (const o of this._def.checks)
        o.kind === "int"
          ? ve.isInteger(n.data) ||
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.invalid_type,
              expected: "integer",
              received: "float",
              message: o.message,
            }),
            c.dirty())
          : o.kind === "min"
          ? (o.inclusive ? n.data < o.value : n.data <= o.value) &&
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.too_small,
              minimum: o.value,
              type: "number",
              inclusive: o.inclusive,
              exact: !1,
              message: o.message,
            }),
            c.dirty())
          : o.kind === "max"
          ? (o.inclusive ? n.data > o.value : n.data >= o.value) &&
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.too_big,
              maximum: o.value,
              type: "number",
              inclusive: o.inclusive,
              exact: !1,
              message: o.message,
            }),
            c.dirty())
          : o.kind === "multipleOf"
          ? Wl(n.data, o.value) !== 0 &&
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.not_multiple_of,
              multipleOf: o.value,
              message: o.message,
            }),
            c.dirty())
          : o.kind === "finite"
          ? Number.isFinite(n.data) ||
            ((s = this._getOrReturnCtx(n, s)),
            M(s, { code: R.not_finite, message: o.message }),
            c.dirty())
          : ve.assertNever(o);
      return { status: c.value, value: n.data };
    }
    gte(n, r) {
      return this.setLimit("min", n, !0, H.toString(r));
    }
    gt(n, r) {
      return this.setLimit("min", n, !1, H.toString(r));
    }
    lte(n, r) {
      return this.setLimit("max", n, !0, H.toString(r));
    }
    lt(n, r) {
      return this.setLimit("max", n, !1, H.toString(r));
    }
    setLimit(n, r, s, c) {
      return new cn({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: n, value: r, inclusive: s, message: H.toString(c) },
        ],
      });
    }
    _addCheck(n) {
      return new cn({ ...this._def, checks: [...this._def.checks, n] });
    }
    int(n) {
      return this._addCheck({ kind: "int", message: H.toString(n) });
    }
    positive(n) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !1,
        message: H.toString(n),
      });
    }
    negative(n) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !1,
        message: H.toString(n),
      });
    }
    nonpositive(n) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !0,
        message: H.toString(n),
      });
    }
    nonnegative(n) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !0,
        message: H.toString(n),
      });
    }
    multipleOf(n, r) {
      return this._addCheck({
        kind: "multipleOf",
        value: n,
        message: H.toString(r),
      });
    }
    finite(n) {
      return this._addCheck({ kind: "finite", message: H.toString(n) });
    }
    safe(n) {
      return this._addCheck({
        kind: "min",
        inclusive: !0,
        value: Number.MIN_SAFE_INTEGER,
        message: H.toString(n),
      })._addCheck({
        kind: "max",
        inclusive: !0,
        value: Number.MAX_SAFE_INTEGER,
        message: H.toString(n),
      });
    }
    get minValue() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "min" && (n === null || r.value > n) && (n = r.value);
      return n;
    }
    get maxValue() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "max" && (n === null || r.value < n) && (n = r.value);
      return n;
    }
    get isInt() {
      return !!this._def.checks.find(
        (n) =>
          n.kind === "int" || (n.kind === "multipleOf" && ve.isInteger(n.value))
      );
    }
    get isFinite() {
      let n = null,
        r = null;
      for (const s of this._def.checks) {
        if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
          return !0;
        s.kind === "min"
          ? (r === null || s.value > r) && (r = s.value)
          : s.kind === "max" && (n === null || s.value < n) && (n = s.value);
      }
      return Number.isFinite(r) && Number.isFinite(n);
    }
  }
  cn.create = (i) =>
    new cn({
      checks: [],
      typeName: J.ZodNumber,
      coerce: (i == null ? void 0 : i.coerce) || !1,
      ...re(i),
    });
  class ln extends ce {
    constructor() {
      super(...arguments), (this.min = this.gte), (this.max = this.lte);
    }
    _parse(n) {
      if (
        (this._def.coerce && (n.data = BigInt(n.data)),
        this._getType(n) !== N.bigint)
      ) {
        const o = this._getOrReturnCtx(n);
        return (
          M(o, {
            code: R.invalid_type,
            expected: N.bigint,
            received: o.parsedType,
          }),
          ee
        );
      }
      let s;
      const c = new ze();
      for (const o of this._def.checks)
        o.kind === "min"
          ? (o.inclusive ? n.data < o.value : n.data <= o.value) &&
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.too_small,
              type: "bigint",
              minimum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            c.dirty())
          : o.kind === "max"
          ? (o.inclusive ? n.data > o.value : n.data >= o.value) &&
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.too_big,
              type: "bigint",
              maximum: o.value,
              inclusive: o.inclusive,
              message: o.message,
            }),
            c.dirty())
          : o.kind === "multipleOf"
          ? n.data % o.value !== BigInt(0) &&
            ((s = this._getOrReturnCtx(n, s)),
            M(s, {
              code: R.not_multiple_of,
              multipleOf: o.value,
              message: o.message,
            }),
            c.dirty())
          : ve.assertNever(o);
      return { status: c.value, value: n.data };
    }
    gte(n, r) {
      return this.setLimit("min", n, !0, H.toString(r));
    }
    gt(n, r) {
      return this.setLimit("min", n, !1, H.toString(r));
    }
    lte(n, r) {
      return this.setLimit("max", n, !0, H.toString(r));
    }
    lt(n, r) {
      return this.setLimit("max", n, !1, H.toString(r));
    }
    setLimit(n, r, s, c) {
      return new ln({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: n, value: r, inclusive: s, message: H.toString(c) },
        ],
      });
    }
    _addCheck(n) {
      return new ln({ ...this._def, checks: [...this._def.checks, n] });
    }
    positive(n) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !1,
        message: H.toString(n),
      });
    }
    negative(n) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !1,
        message: H.toString(n),
      });
    }
    nonpositive(n) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !0,
        message: H.toString(n),
      });
    }
    nonnegative(n) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !0,
        message: H.toString(n),
      });
    }
    multipleOf(n, r) {
      return this._addCheck({
        kind: "multipleOf",
        value: n,
        message: H.toString(r),
      });
    }
    get minValue() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "min" && (n === null || r.value > n) && (n = r.value);
      return n;
    }
    get maxValue() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "max" && (n === null || r.value < n) && (n = r.value);
      return n;
    }
  }
  ln.create = (i) => {
    var n;
    return new ln({
      checks: [],
      typeName: J.ZodBigInt,
      coerce:
        (n = i == null ? void 0 : i.coerce) !== null && n !== void 0 ? n : !1,
      ...re(i),
    });
  };
  class fr extends ce {
    _parse(n) {
      if (
        (this._def.coerce && (n.data = Boolean(n.data)),
        this._getType(n) !== N.boolean)
      ) {
        const s = this._getOrReturnCtx(n);
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.boolean,
            received: s.parsedType,
          }),
          ee
        );
      }
      return Xe(n.data);
    }
  }
  fr.create = (i) =>
    new fr({
      typeName: J.ZodBoolean,
      coerce: (i == null ? void 0 : i.coerce) || !1,
      ...re(i),
    });
  class Sn extends ce {
    _parse(n) {
      if (
        (this._def.coerce && (n.data = new Date(n.data)),
        this._getType(n) !== N.date)
      ) {
        const o = this._getOrReturnCtx(n);
        return (
          M(o, {
            code: R.invalid_type,
            expected: N.date,
            received: o.parsedType,
          }),
          ee
        );
      }
      if (isNaN(n.data.getTime())) {
        const o = this._getOrReturnCtx(n);
        return M(o, { code: R.invalid_date }), ee;
      }
      const s = new ze();
      let c;
      for (const o of this._def.checks)
        o.kind === "min"
          ? n.data.getTime() < o.value &&
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              code: R.too_small,
              message: o.message,
              inclusive: !0,
              exact: !1,
              minimum: o.value,
              type: "date",
            }),
            s.dirty())
          : o.kind === "max"
          ? n.data.getTime() > o.value &&
            ((c = this._getOrReturnCtx(n, c)),
            M(c, {
              code: R.too_big,
              message: o.message,
              inclusive: !0,
              exact: !1,
              maximum: o.value,
              type: "date",
            }),
            s.dirty())
          : ve.assertNever(o);
      return { status: s.value, value: new Date(n.data.getTime()) };
    }
    _addCheck(n) {
      return new Sn({ ...this._def, checks: [...this._def.checks, n] });
    }
    min(n, r) {
      return this._addCheck({
        kind: "min",
        value: n.getTime(),
        message: H.toString(r),
      });
    }
    max(n, r) {
      return this._addCheck({
        kind: "max",
        value: n.getTime(),
        message: H.toString(r),
      });
    }
    get minDate() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "min" && (n === null || r.value > n) && (n = r.value);
      return n != null ? new Date(n) : null;
    }
    get maxDate() {
      let n = null;
      for (const r of this._def.checks)
        r.kind === "max" && (n === null || r.value < n) && (n = r.value);
      return n != null ? new Date(n) : null;
    }
  }
  Sn.create = (i) =>
    new Sn({
      checks: [],
      coerce: (i == null ? void 0 : i.coerce) || !1,
      typeName: J.ZodDate,
      ...re(i),
    });
  class Kr extends ce {
    _parse(n) {
      if (this._getType(n) !== N.symbol) {
        const s = this._getOrReturnCtx(n);
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.symbol,
            received: s.parsedType,
          }),
          ee
        );
      }
      return Xe(n.data);
    }
  }
  Kr.create = (i) => new Kr({ typeName: J.ZodSymbol, ...re(i) });
  class dr extends ce {
    _parse(n) {
      if (this._getType(n) !== N.undefined) {
        const s = this._getOrReturnCtx(n);
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.undefined,
            received: s.parsedType,
          }),
          ee
        );
      }
      return Xe(n.data);
    }
  }
  dr.create = (i) => new dr({ typeName: J.ZodUndefined, ...re(i) });
  class hr extends ce {
    _parse(n) {
      if (this._getType(n) !== N.null) {
        const s = this._getOrReturnCtx(n);
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.null,
            received: s.parsedType,
          }),
          ee
        );
      }
      return Xe(n.data);
    }
  }
  hr.create = (i) => new hr({ typeName: J.ZodNull, ...re(i) });
  class Wn extends ce {
    constructor() {
      super(...arguments), (this._any = !0);
    }
    _parse(n) {
      return Xe(n.data);
    }
  }
  Wn.create = (i) => new Wn({ typeName: J.ZodAny, ...re(i) });
  class Tn extends ce {
    constructor() {
      super(...arguments), (this._unknown = !0);
    }
    _parse(n) {
      return Xe(n.data);
    }
  }
  Tn.create = (i) => new Tn({ typeName: J.ZodUnknown, ...re(i) });
  class zt extends ce {
    _parse(n) {
      const r = this._getOrReturnCtx(n);
      return (
        M(r, {
          code: R.invalid_type,
          expected: N.never,
          received: r.parsedType,
        }),
        ee
      );
    }
  }
  zt.create = (i) => new zt({ typeName: J.ZodNever, ...re(i) });
  class Gr extends ce {
    _parse(n) {
      if (this._getType(n) !== N.undefined) {
        const s = this._getOrReturnCtx(n);
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.void,
            received: s.parsedType,
          }),
          ee
        );
      }
      return Xe(n.data);
    }
  }
  Gr.create = (i) => new Gr({ typeName: J.ZodVoid, ...re(i) });
  class Rt extends ce {
    _parse(n) {
      const { ctx: r, status: s } = this._processInputParams(n),
        c = this._def;
      if (r.parsedType !== N.array)
        return (
          M(r, {
            code: R.invalid_type,
            expected: N.array,
            received: r.parsedType,
          }),
          ee
        );
      if (c.exactLength !== null) {
        const l = r.data.length > c.exactLength.value,
          d = r.data.length < c.exactLength.value;
        (l || d) &&
          (M(r, {
            code: l ? R.too_big : R.too_small,
            minimum: d ? c.exactLength.value : void 0,
            maximum: l ? c.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: c.exactLength.message,
          }),
          s.dirty());
      }
      if (
        (c.minLength !== null &&
          r.data.length < c.minLength.value &&
          (M(r, {
            code: R.too_small,
            minimum: c.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: c.minLength.message,
          }),
          s.dirty()),
        c.maxLength !== null &&
          r.data.length > c.maxLength.value &&
          (M(r, {
            code: R.too_big,
            maximum: c.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: c.maxLength.message,
          }),
          s.dirty()),
        r.common.async)
      )
        return Promise.all(
          [...r.data].map((l, d) => c.type._parseAsync(new Zt(r, l, r.path, d)))
        ).then((l) => ze.mergeArray(s, l));
      const o = [...r.data].map((l, d) =>
        c.type._parseSync(new Zt(r, l, r.path, d))
      );
      return ze.mergeArray(s, o);
    }
    get element() {
      return this._def.type;
    }
    min(n, r) {
      return new Rt({
        ...this._def,
        minLength: { value: n, message: H.toString(r) },
      });
    }
    max(n, r) {
      return new Rt({
        ...this._def,
        maxLength: { value: n, message: H.toString(r) },
      });
    }
    length(n, r) {
      return new Rt({
        ...this._def,
        exactLength: { value: n, message: H.toString(r) },
      });
    }
    nonempty(n) {
      return this.min(1, n);
    }
  }
  Rt.create = (i, n) =>
    new Rt({
      type: i,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: J.ZodArray,
      ...re(n),
    });
  function $n(i) {
    if (i instanceof Ae) {
      const n = {};
      for (const r in i.shape) {
        const s = i.shape[r];
        n[r] = qt.create($n(s));
      }
      return new Ae({ ...i._def, shape: () => n });
    } else
      return i instanceof Rt
        ? new Rt({ ...i._def, type: $n(i.element) })
        : i instanceof qt
        ? qt.create($n(i.unwrap()))
        : i instanceof Cn
        ? Cn.create($n(i.unwrap()))
        : i instanceof Ft
        ? Ft.create(i.items.map((n) => $n(n)))
        : i;
  }
  class Ae extends ce {
    constructor() {
      super(...arguments),
        (this._cached = null),
        (this.nonstrict = this.passthrough),
        (this.augment = this.extend);
    }
    _getCached() {
      if (this._cached !== null) return this._cached;
      const n = this._def.shape(),
        r = ve.objectKeys(n);
      return (this._cached = { shape: n, keys: r });
    }
    _parse(n) {
      if (this._getType(n) !== N.object) {
        const v = this._getOrReturnCtx(n);
        return (
          M(v, {
            code: R.invalid_type,
            expected: N.object,
            received: v.parsedType,
          }),
          ee
        );
      }
      const { status: s, ctx: c } = this._processInputParams(n),
        { shape: o, keys: l } = this._getCached(),
        d = [];
      if (
        !(this._def.catchall instanceof zt && this._def.unknownKeys === "strip")
      )
        for (const v in c.data) l.includes(v) || d.push(v);
      const g = [];
      for (const v of l) {
        const x = o[v],
          E = c.data[v];
        g.push({
          key: { status: "valid", value: v },
          value: x._parse(new Zt(c, E, c.path, v)),
          alwaysSet: v in c.data,
        });
      }
      if (this._def.catchall instanceof zt) {
        const v = this._def.unknownKeys;
        if (v === "passthrough")
          for (const x of d)
            g.push({
              key: { status: "valid", value: x },
              value: { status: "valid", value: c.data[x] },
            });
        else if (v === "strict")
          d.length > 0 &&
            (M(c, { code: R.unrecognized_keys, keys: d }), s.dirty());
        else if (v !== "strip")
          throw new Error(
            "Internal ZodObject error: invalid unknownKeys value."
          );
      } else {
        const v = this._def.catchall;
        for (const x of d) {
          const E = c.data[x];
          g.push({
            key: { status: "valid", value: x },
            value: v._parse(new Zt(c, E, c.path, x)),
            alwaysSet: x in c.data,
          });
        }
      }
      return c.common.async
        ? Promise.resolve()
            .then(async () => {
              const v = [];
              for (const x of g) {
                const E = await x.key;
                v.push({
                  key: E,
                  value: await x.value,
                  alwaysSet: x.alwaysSet,
                });
              }
              return v;
            })
            .then((v) => ze.mergeObjectSync(s, v))
        : ze.mergeObjectSync(s, g);
    }
    get shape() {
      return this._def.shape();
    }
    strict(n) {
      return (
        H.errToObj,
        new Ae({
          ...this._def,
          unknownKeys: "strict",
          ...(n !== void 0
            ? {
                errorMap: (r, s) => {
                  var c, o, l, d;
                  const g =
                    (l =
                      (o = (c = this._def).errorMap) === null || o === void 0
                        ? void 0
                        : o.call(c, r, s).message) !== null && l !== void 0
                      ? l
                      : s.defaultError;
                  return r.code === "unrecognized_keys"
                    ? {
                        message:
                          (d = H.errToObj(n).message) !== null && d !== void 0
                            ? d
                            : g,
                      }
                    : { message: g };
                },
              }
            : {}),
        })
      );
    }
    strip() {
      return new Ae({ ...this._def, unknownKeys: "strip" });
    }
    passthrough() {
      return new Ae({ ...this._def, unknownKeys: "passthrough" });
    }
    extend(n) {
      return new Ae({
        ...this._def,
        shape: () => ({ ...this._def.shape(), ...n }),
      });
    }
    merge(n) {
      return new Ae({
        unknownKeys: n._def.unknownKeys,
        catchall: n._def.catchall,
        shape: () => ({ ...this._def.shape(), ...n._def.shape() }),
        typeName: J.ZodObject,
      });
    }
    setKey(n, r) {
      return this.augment({ [n]: r });
    }
    catchall(n) {
      return new Ae({ ...this._def, catchall: n });
    }
    pick(n) {
      const r = {};
      return (
        ve.objectKeys(n).forEach((s) => {
          n[s] && this.shape[s] && (r[s] = this.shape[s]);
        }),
        new Ae({ ...this._def, shape: () => r })
      );
    }
    omit(n) {
      const r = {};
      return (
        ve.objectKeys(this.shape).forEach((s) => {
          n[s] || (r[s] = this.shape[s]);
        }),
        new Ae({ ...this._def, shape: () => r })
      );
    }
    deepPartial() {
      return $n(this);
    }
    partial(n) {
      const r = {};
      return (
        ve.objectKeys(this.shape).forEach((s) => {
          const c = this.shape[s];
          n && !n[s] ? (r[s] = c) : (r[s] = c.optional());
        }),
        new Ae({ ...this._def, shape: () => r })
      );
    }
    required(n) {
      const r = {};
      return (
        ve.objectKeys(this.shape).forEach((s) => {
          if (n && !n[s]) r[s] = this.shape[s];
          else {
            let o = this.shape[s];
            for (; o instanceof qt; ) o = o._def.innerType;
            r[s] = o;
          }
        }),
        new Ae({ ...this._def, shape: () => r })
      );
    }
    keyof() {
      return io(ve.objectKeys(this.shape));
    }
  }
  (Ae.create = (i, n) =>
    new Ae({
      shape: () => i,
      unknownKeys: "strip",
      catchall: zt.create(),
      typeName: J.ZodObject,
      ...re(n),
    })),
    (Ae.strictCreate = (i, n) =>
      new Ae({
        shape: () => i,
        unknownKeys: "strict",
        catchall: zt.create(),
        typeName: J.ZodObject,
        ...re(n),
      })),
    (Ae.lazycreate = (i, n) =>
      new Ae({
        shape: i,
        unknownKeys: "strip",
        catchall: zt.create(),
        typeName: J.ZodObject,
        ...re(n),
      }));
  class pr extends ce {
    _parse(n) {
      const { ctx: r } = this._processInputParams(n),
        s = this._def.options;
      function c(o) {
        for (const d of o) if (d.result.status === "valid") return d.result;
        for (const d of o)
          if (d.result.status === "dirty")
            return r.common.issues.push(...d.ctx.common.issues), d.result;
        const l = o.map((d) => new At(d.ctx.common.issues));
        return M(r, { code: R.invalid_union, unionErrors: l }), ee;
      }
      if (r.common.async)
        return Promise.all(
          s.map(async (o) => {
            const l = {
              ...r,
              common: { ...r.common, issues: [] },
              parent: null,
            };
            return {
              result: await o._parseAsync({
                data: r.data,
                path: r.path,
                parent: l,
              }),
              ctx: l,
            };
          })
        ).then(c);
      {
        let o;
        const l = [];
        for (const g of s) {
          const v = { ...r, common: { ...r.common, issues: [] }, parent: null },
            x = g._parseSync({ data: r.data, path: r.path, parent: v });
          if (x.status === "valid") return x;
          x.status === "dirty" && !o && (o = { result: x, ctx: v }),
            v.common.issues.length && l.push(v.common.issues);
        }
        if (o) return r.common.issues.push(...o.ctx.common.issues), o.result;
        const d = l.map((g) => new At(g));
        return M(r, { code: R.invalid_union, unionErrors: d }), ee;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  pr.create = (i, n) => new pr({ options: i, typeName: J.ZodUnion, ...re(n) });
  const Jr = (i) =>
    i instanceof mr
      ? Jr(i.schema)
      : i instanceof Lt
      ? Jr(i.innerType())
      : i instanceof yr
      ? [i.value]
      : i instanceof fn
      ? i.options
      : i instanceof _r
      ? Object.keys(i.enum)
      : i instanceof wr
      ? Jr(i._def.innerType)
      : i instanceof dr
      ? [void 0]
      : i instanceof hr
      ? [null]
      : null;
  class Yr extends ce {
    _parse(n) {
      const { ctx: r } = this._processInputParams(n);
      if (r.parsedType !== N.object)
        return (
          M(r, {
            code: R.invalid_type,
            expected: N.object,
            received: r.parsedType,
          }),
          ee
        );
      const s = this.discriminator,
        c = r.data[s],
        o = this.optionsMap.get(c);
      return o
        ? r.common.async
          ? o._parseAsync({ data: r.data, path: r.path, parent: r })
          : o._parseSync({ data: r.data, path: r.path, parent: r })
        : (M(r, {
            code: R.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [s],
          }),
          ee);
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
    static create(n, r, s) {
      const c = new Map();
      for (const o of r) {
        const l = Jr(o.shape[n]);
        if (!l)
          throw new Error(
            `A discriminator value for key \`${n}\` could not be extracted from all schema options`
          );
        for (const d of l) {
          if (c.has(d))
            throw new Error(
              `Discriminator property ${String(n)} has duplicate value ${String(
                d
              )}`
            );
          c.set(d, o);
        }
      }
      return new Yr({
        typeName: J.ZodDiscriminatedUnion,
        discriminator: n,
        options: r,
        optionsMap: c,
        ...re(s),
      });
    }
  }
  function oa(i, n) {
    const r = un(i),
      s = un(n);
    if (i === n) return { valid: !0, data: i };
    if (r === N.object && s === N.object) {
      const c = ve.objectKeys(n),
        o = ve.objectKeys(i).filter((d) => c.indexOf(d) !== -1),
        l = { ...i, ...n };
      for (const d of o) {
        const g = oa(i[d], n[d]);
        if (!g.valid) return { valid: !1 };
        l[d] = g.data;
      }
      return { valid: !0, data: l };
    } else if (r === N.array && s === N.array) {
      if (i.length !== n.length) return { valid: !1 };
      const c = [];
      for (let o = 0; o < i.length; o++) {
        const l = i[o],
          d = n[o],
          g = oa(l, d);
        if (!g.valid) return { valid: !1 };
        c.push(g.data);
      }
      return { valid: !0, data: c };
    } else
      return r === N.date && s === N.date && +i == +n
        ? { valid: !0, data: i }
        : { valid: !1 };
  }
  class gr extends ce {
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n),
        c = (o, l) => {
          if (aa(o) || aa(l)) return ee;
          const d = oa(o.value, l.value);
          return d.valid
            ? ((sa(o) || sa(l)) && r.dirty(),
              { status: r.value, value: d.data })
            : (M(s, { code: R.invalid_intersection_types }), ee);
        };
      return s.common.async
        ? Promise.all([
            this._def.left._parseAsync({
              data: s.data,
              path: s.path,
              parent: s,
            }),
            this._def.right._parseAsync({
              data: s.data,
              path: s.path,
              parent: s,
            }),
          ]).then(([o, l]) => c(o, l))
        : c(
            this._def.left._parseSync({
              data: s.data,
              path: s.path,
              parent: s,
            }),
            this._def.right._parseSync({
              data: s.data,
              path: s.path,
              parent: s,
            })
          );
    }
  }
  gr.create = (i, n, r) =>
    new gr({ left: i, right: n, typeName: J.ZodIntersection, ...re(r) });
  class Ft extends ce {
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n);
      if (s.parsedType !== N.array)
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.array,
            received: s.parsedType,
          }),
          ee
        );
      if (s.data.length < this._def.items.length)
        return (
          M(s, {
            code: R.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          ee
        );
      !this._def.rest &&
        s.data.length > this._def.items.length &&
        (M(s, {
          code: R.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        r.dirty());
      const o = [...s.data]
        .map((l, d) => {
          const g = this._def.items[d] || this._def.rest;
          return g ? g._parse(new Zt(s, l, s.path, d)) : null;
        })
        .filter((l) => !!l);
      return s.common.async
        ? Promise.all(o).then((l) => ze.mergeArray(r, l))
        : ze.mergeArray(r, o);
    }
    get items() {
      return this._def.items;
    }
    rest(n) {
      return new Ft({ ...this._def, rest: n });
    }
  }
  Ft.create = (i, n) => {
    if (!Array.isArray(i))
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Ft({ items: i, typeName: J.ZodTuple, rest: null, ...re(n) });
  };
  class vr extends ce {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n);
      if (s.parsedType !== N.object)
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.object,
            received: s.parsedType,
          }),
          ee
        );
      const c = [],
        o = this._def.keyType,
        l = this._def.valueType;
      for (const d in s.data)
        c.push({
          key: o._parse(new Zt(s, d, s.path, d)),
          value: l._parse(new Zt(s, s.data[d], s.path, d)),
        });
      return s.common.async
        ? ze.mergeObjectAsync(r, c)
        : ze.mergeObjectSync(r, c);
    }
    get element() {
      return this._def.valueType;
    }
    static create(n, r, s) {
      return r instanceof ce
        ? new vr({ keyType: n, valueType: r, typeName: J.ZodRecord, ...re(s) })
        : new vr({
            keyType: Ot.create(),
            valueType: n,
            typeName: J.ZodRecord,
            ...re(r),
          });
    }
  }
  class Xr extends ce {
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n);
      if (s.parsedType !== N.map)
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.map,
            received: s.parsedType,
          }),
          ee
        );
      const c = this._def.keyType,
        o = this._def.valueType,
        l = [...s.data.entries()].map(([d, g], v) => ({
          key: c._parse(new Zt(s, d, s.path, [v, "key"])),
          value: o._parse(new Zt(s, g, s.path, [v, "value"])),
        }));
      if (s.common.async) {
        const d = new Map();
        return Promise.resolve().then(async () => {
          for (const g of l) {
            const v = await g.key,
              x = await g.value;
            if (v.status === "aborted" || x.status === "aborted") return ee;
            (v.status === "dirty" || x.status === "dirty") && r.dirty(),
              d.set(v.value, x.value);
          }
          return { status: r.value, value: d };
        });
      } else {
        const d = new Map();
        for (const g of l) {
          const v = g.key,
            x = g.value;
          if (v.status === "aborted" || x.status === "aborted") return ee;
          (v.status === "dirty" || x.status === "dirty") && r.dirty(),
            d.set(v.value, x.value);
        }
        return { status: r.value, value: d };
      }
    }
  }
  Xr.create = (i, n, r) =>
    new Xr({ valueType: n, keyType: i, typeName: J.ZodMap, ...re(r) });
  class In extends ce {
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n);
      if (s.parsedType !== N.set)
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.set,
            received: s.parsedType,
          }),
          ee
        );
      const c = this._def;
      c.minSize !== null &&
        s.data.size < c.minSize.value &&
        (M(s, {
          code: R.too_small,
          minimum: c.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: c.minSize.message,
        }),
        r.dirty()),
        c.maxSize !== null &&
          s.data.size > c.maxSize.value &&
          (M(s, {
            code: R.too_big,
            maximum: c.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: c.maxSize.message,
          }),
          r.dirty());
      const o = this._def.valueType;
      function l(g) {
        const v = new Set();
        for (const x of g) {
          if (x.status === "aborted") return ee;
          x.status === "dirty" && r.dirty(), v.add(x.value);
        }
        return { status: r.value, value: v };
      }
      const d = [...s.data.values()].map((g, v) =>
        o._parse(new Zt(s, g, s.path, v))
      );
      return s.common.async ? Promise.all(d).then((g) => l(g)) : l(d);
    }
    min(n, r) {
      return new In({
        ...this._def,
        minSize: { value: n, message: H.toString(r) },
      });
    }
    max(n, r) {
      return new In({
        ...this._def,
        maxSize: { value: n, message: H.toString(r) },
      });
    }
    size(n, r) {
      return this.min(n, r).max(n, r);
    }
    nonempty(n) {
      return this.min(1, n);
    }
  }
  In.create = (i, n) =>
    new In({
      valueType: i,
      minSize: null,
      maxSize: null,
      typeName: J.ZodSet,
      ...re(n),
    });
  class Hn extends ce {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(n) {
      const { ctx: r } = this._processInputParams(n);
      if (r.parsedType !== N.function)
        return (
          M(r, {
            code: R.invalid_type,
            expected: N.function,
            received: r.parsedType,
          }),
          ee
        );
      function s(d, g) {
        return zr({
          data: d,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            Vr(),
            lr,
          ].filter((v) => !!v),
          issueData: { code: R.invalid_arguments, argumentsError: g },
        });
      }
      function c(d, g) {
        return zr({
          data: d,
          path: r.path,
          errorMaps: [
            r.common.contextualErrorMap,
            r.schemaErrorMap,
            Vr(),
            lr,
          ].filter((v) => !!v),
          issueData: { code: R.invalid_return_type, returnTypeError: g },
        });
      }
      const o = { errorMap: r.common.contextualErrorMap },
        l = r.data;
      return this._def.returns instanceof Vn
        ? Xe(async (...d) => {
            const g = new At([]),
              v = await this._def.args.parseAsync(d, o).catch((C) => {
                throw (g.addIssue(s(d, C)), g);
              }),
              x = await l(...v);
            return await this._def.returns._def.type
              .parseAsync(x, o)
              .catch((C) => {
                throw (g.addIssue(c(x, C)), g);
              });
          })
        : Xe((...d) => {
            const g = this._def.args.safeParse(d, o);
            if (!g.success) throw new At([s(d, g.error)]);
            const v = l(...g.data),
              x = this._def.returns.safeParse(v, o);
            if (!x.success) throw new At([c(v, x.error)]);
            return x.data;
          });
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...n) {
      return new Hn({ ...this._def, args: Ft.create(n).rest(Tn.create()) });
    }
    returns(n) {
      return new Hn({ ...this._def, returns: n });
    }
    implement(n) {
      return this.parse(n);
    }
    strictImplement(n) {
      return this.parse(n);
    }
    static create(n, r, s) {
      return new Hn({
        args: n || Ft.create([]).rest(Tn.create()),
        returns: r || Tn.create(),
        typeName: J.ZodFunction,
        ...re(s),
      });
    }
  }
  class mr extends ce {
    get schema() {
      return this._def.getter();
    }
    _parse(n) {
      const { ctx: r } = this._processInputParams(n);
      return this._def
        .getter()
        ._parse({ data: r.data, path: r.path, parent: r });
    }
  }
  mr.create = (i, n) => new mr({ getter: i, typeName: J.ZodLazy, ...re(n) });
  class yr extends ce {
    _parse(n) {
      if (n.data !== this._def.value) {
        const r = this._getOrReturnCtx(n);
        return (
          M(r, {
            received: r.data,
            code: R.invalid_literal,
            expected: this._def.value,
          }),
          ee
        );
      }
      return { status: "valid", value: n.data };
    }
    get value() {
      return this._def.value;
    }
  }
  yr.create = (i, n) => new yr({ value: i, typeName: J.ZodLiteral, ...re(n) });
  function io(i, n) {
    return new fn({ values: i, typeName: J.ZodEnum, ...re(n) });
  }
  class fn extends ce {
    _parse(n) {
      if (typeof n.data != "string") {
        const r = this._getOrReturnCtx(n),
          s = this._def.values;
        return (
          M(r, {
            expected: ve.joinValues(s),
            received: r.parsedType,
            code: R.invalid_type,
          }),
          ee
        );
      }
      if (this._def.values.indexOf(n.data) === -1) {
        const r = this._getOrReturnCtx(n),
          s = this._def.values;
        return (
          M(r, { received: r.data, code: R.invalid_enum_value, options: s }), ee
        );
      }
      return Xe(n.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const n = {};
      for (const r of this._def.values) n[r] = r;
      return n;
    }
    get Values() {
      const n = {};
      for (const r of this._def.values) n[r] = r;
      return n;
    }
    get Enum() {
      const n = {};
      for (const r of this._def.values) n[r] = r;
      return n;
    }
    extract(n) {
      return fn.create(n);
    }
    exclude(n) {
      return fn.create(this.options.filter((r) => !n.includes(r)));
    }
  }
  fn.create = io;
  class _r extends ce {
    _parse(n) {
      const r = ve.getValidEnumValues(this._def.values),
        s = this._getOrReturnCtx(n);
      if (s.parsedType !== N.string && s.parsedType !== N.number) {
        const c = ve.objectValues(r);
        return (
          M(s, {
            expected: ve.joinValues(c),
            received: s.parsedType,
            code: R.invalid_type,
          }),
          ee
        );
      }
      if (r.indexOf(n.data) === -1) {
        const c = ve.objectValues(r);
        return (
          M(s, { received: s.data, code: R.invalid_enum_value, options: c }), ee
        );
      }
      return Xe(n.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  _r.create = (i, n) =>
    new _r({ values: i, typeName: J.ZodNativeEnum, ...re(n) });
  class Vn extends ce {
    unwrap() {
      return this._def.type;
    }
    _parse(n) {
      const { ctx: r } = this._processInputParams(n);
      if (r.parsedType !== N.promise && r.common.async === !1)
        return (
          M(r, {
            code: R.invalid_type,
            expected: N.promise,
            received: r.parsedType,
          }),
          ee
        );
      const s = r.parsedType === N.promise ? r.data : Promise.resolve(r.data);
      return Xe(
        s.then((c) =>
          this._def.type.parseAsync(c, {
            path: r.path,
            errorMap: r.common.contextualErrorMap,
          })
        )
      );
    }
  }
  Vn.create = (i, n) => new Vn({ type: i, typeName: J.ZodPromise, ...re(n) });
  class Lt extends ce {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === J.ZodEffects
        ? this._def.schema.sourceType()
        : this._def.schema;
    }
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n),
        c = this._def.effect || null;
      if (c.type === "preprocess") {
        const l = c.transform(s.data);
        return s.common.async
          ? Promise.resolve(l).then((d) =>
              this._def.schema._parseAsync({ data: d, path: s.path, parent: s })
            )
          : this._def.schema._parseSync({ data: l, path: s.path, parent: s });
      }
      const o = {
        addIssue: (l) => {
          M(s, l), l.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return s.path;
        },
      };
      if (((o.addIssue = o.addIssue.bind(o)), c.type === "refinement")) {
        const l = (d) => {
          const g = c.refinement(d, o);
          if (s.common.async) return Promise.resolve(g);
          if (g instanceof Promise)
            throw new Error(
              "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
            );
          return d;
        };
        if (s.common.async === !1) {
          const d = this._def.schema._parseSync({
            data: s.data,
            path: s.path,
            parent: s,
          });
          return d.status === "aborted"
            ? ee
            : (d.status === "dirty" && r.dirty(),
              l(d.value),
              { status: r.value, value: d.value });
        } else
          return this._def.schema
            ._parseAsync({ data: s.data, path: s.path, parent: s })
            .then((d) =>
              d.status === "aborted"
                ? ee
                : (d.status === "dirty" && r.dirty(),
                  l(d.value).then(() => ({ status: r.value, value: d.value })))
            );
      }
      if (c.type === "transform")
        if (s.common.async === !1) {
          const l = this._def.schema._parseSync({
            data: s.data,
            path: s.path,
            parent: s,
          });
          if (!qr(l)) return l;
          const d = c.transform(l.value, o);
          if (d instanceof Promise)
            throw new Error(
              "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
            );
          return { status: r.value, value: d };
        } else
          return this._def.schema
            ._parseAsync({ data: s.data, path: s.path, parent: s })
            .then((l) =>
              qr(l)
                ? Promise.resolve(c.transform(l.value, o)).then((d) => ({
                    status: r.value,
                    value: d,
                  }))
                : l
            );
      ve.assertNever(c);
    }
  }
  (Lt.create = (i, n, r) =>
    new Lt({ schema: i, typeName: J.ZodEffects, effect: n, ...re(r) })),
    (Lt.createWithPreprocess = (i, n, r) =>
      new Lt({
        schema: n,
        effect: { type: "preprocess", transform: i },
        typeName: J.ZodEffects,
        ...re(r),
      }));
  class qt extends ce {
    _parse(n) {
      return this._getType(n) === N.undefined
        ? Xe(void 0)
        : this._def.innerType._parse(n);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  qt.create = (i, n) =>
    new qt({ innerType: i, typeName: J.ZodOptional, ...re(n) });
  class Cn extends ce {
    _parse(n) {
      return this._getType(n) === N.null
        ? Xe(null)
        : this._def.innerType._parse(n);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  Cn.create = (i, n) =>
    new Cn({ innerType: i, typeName: J.ZodNullable, ...re(n) });
  class wr extends ce {
    _parse(n) {
      const { ctx: r } = this._processInputParams(n);
      let s = r.data;
      return (
        r.parsedType === N.undefined && (s = this._def.defaultValue()),
        this._def.innerType._parse({ data: s, path: r.path, parent: r })
      );
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  wr.create = (i, n) =>
    new wr({
      innerType: i,
      typeName: J.ZodDefault,
      defaultValue:
        typeof n.default == "function" ? n.default : () => n.default,
      ...re(n),
    });
  class Qr extends ce {
    _parse(n) {
      const { ctx: r } = this._processInputParams(n),
        s = { ...r, common: { ...r.common, issues: [] } },
        c = this._def.innerType._parse({
          data: s.data,
          path: s.path,
          parent: { ...s },
        });
      return jr(c)
        ? c.then((o) => ({
            status: "valid",
            value:
              o.status === "valid"
                ? o.value
                : this._def.catchValue({
                    get error() {
                      return new At(s.common.issues);
                    },
                    input: s.data,
                  }),
          }))
        : {
            status: "valid",
            value:
              c.status === "valid"
                ? c.value
                : this._def.catchValue({
                    get error() {
                      return new At(s.common.issues);
                    },
                    input: s.data,
                  }),
          };
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  Qr.create = (i, n) =>
    new Qr({
      innerType: i,
      typeName: J.ZodCatch,
      catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
      ...re(n),
    });
  class ei extends ce {
    _parse(n) {
      if (this._getType(n) !== N.nan) {
        const s = this._getOrReturnCtx(n);
        return (
          M(s, {
            code: R.invalid_type,
            expected: N.nan,
            received: s.parsedType,
          }),
          ee
        );
      }
      return { status: "valid", value: n.data };
    }
  }
  ei.create = (i) => new ei({ typeName: J.ZodNaN, ...re(i) });
  const $l = Symbol("zod_brand");
  class ao extends ce {
    _parse(n) {
      const { ctx: r } = this._processInputParams(n),
        s = r.data;
      return this._def.type._parse({ data: s, path: r.path, parent: r });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class xr extends ce {
    _parse(n) {
      const { status: r, ctx: s } = this._processInputParams(n);
      if (s.common.async)
        return (async () => {
          const o = await this._def.in._parseAsync({
            data: s.data,
            path: s.path,
            parent: s,
          });
          return o.status === "aborted"
            ? ee
            : o.status === "dirty"
            ? (r.dirty(), no(o.value))
            : this._def.out._parseAsync({
                data: o.value,
                path: s.path,
                parent: s,
              });
        })();
      {
        const c = this._def.in._parseSync({
          data: s.data,
          path: s.path,
          parent: s,
        });
        return c.status === "aborted"
          ? ee
          : c.status === "dirty"
          ? (r.dirty(), { status: "dirty", value: c.value })
          : this._def.out._parseSync({
              data: c.value,
              path: s.path,
              parent: s,
            });
      }
    }
    static create(n, r) {
      return new xr({ in: n, out: r, typeName: J.ZodPipeline });
    }
  }
  const so = (i, n = {}, r) =>
      i
        ? Wn.create().superRefine((s, c) => {
            var o, l;
            if (!i(s)) {
              const d =
                  typeof n == "function"
                    ? n(s)
                    : typeof n == "string"
                    ? { message: n }
                    : n,
                g =
                  (l = (o = d.fatal) !== null && o !== void 0 ? o : r) !==
                    null && l !== void 0
                    ? l
                    : !0,
                v = typeof d == "string" ? { message: d } : d;
              c.addIssue({ code: "custom", ...v, fatal: g });
            }
          })
        : Wn.create(),
    Hl = { object: Ae.lazycreate };
  var J;
  (function (i) {
    (i.ZodString = "ZodString"),
      (i.ZodNumber = "ZodNumber"),
      (i.ZodNaN = "ZodNaN"),
      (i.ZodBigInt = "ZodBigInt"),
      (i.ZodBoolean = "ZodBoolean"),
      (i.ZodDate = "ZodDate"),
      (i.ZodSymbol = "ZodSymbol"),
      (i.ZodUndefined = "ZodUndefined"),
      (i.ZodNull = "ZodNull"),
      (i.ZodAny = "ZodAny"),
      (i.ZodUnknown = "ZodUnknown"),
      (i.ZodNever = "ZodNever"),
      (i.ZodVoid = "ZodVoid"),
      (i.ZodArray = "ZodArray"),
      (i.ZodObject = "ZodObject"),
      (i.ZodUnion = "ZodUnion"),
      (i.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
      (i.ZodIntersection = "ZodIntersection"),
      (i.ZodTuple = "ZodTuple"),
      (i.ZodRecord = "ZodRecord"),
      (i.ZodMap = "ZodMap"),
      (i.ZodSet = "ZodSet"),
      (i.ZodFunction = "ZodFunction"),
      (i.ZodLazy = "ZodLazy"),
      (i.ZodLiteral = "ZodLiteral"),
      (i.ZodEnum = "ZodEnum"),
      (i.ZodEffects = "ZodEffects"),
      (i.ZodNativeEnum = "ZodNativeEnum"),
      (i.ZodOptional = "ZodOptional"),
      (i.ZodNullable = "ZodNullable"),
      (i.ZodDefault = "ZodDefault"),
      (i.ZodCatch = "ZodCatch"),
      (i.ZodPromise = "ZodPromise"),
      (i.ZodBranded = "ZodBranded"),
      (i.ZodPipeline = "ZodPipeline");
  })(J || (J = {}));
  const Vl = (i, n = { message: `Input not instance of ${i.name}` }) =>
      so((r) => r instanceof i, n),
    oo = Ot.create,
    uo = cn.create,
    zl = ei.create,
    ql = ln.create,
    co = fr.create,
    jl = Sn.create,
    Kl = Kr.create,
    Gl = dr.create,
    Jl = hr.create,
    Yl = Wn.create,
    Xl = Tn.create,
    Ql = zt.create,
    ef = Gr.create,
    tf = Rt.create,
    nf = Ae.create,
    rf = Ae.strictCreate,
    af = pr.create,
    sf = Yr.create,
    of = gr.create,
    uf = Ft.create,
    cf = vr.create,
    lf = Xr.create,
    ff = In.create,
    df = Hn.create,
    hf = mr.create,
    pf = yr.create,
    gf = fn.create,
    vf = _r.create,
    mf = Vn.create,
    lo = Lt.create,
    yf = qt.create,
    _f = Cn.create,
    wf = Lt.createWithPreprocess,
    xf = xr.create;
  var yt = Object.freeze({
    __proto__: null,
    defaultErrorMap: lr,
    setErrorMap: Al,
    getErrorMap: Vr,
    makeIssue: zr,
    EMPTY_PATH: Ol,
    addIssueToContext: M,
    ParseStatus: ze,
    INVALID: ee,
    DIRTY: no,
    OK: Xe,
    isAborted: aa,
    isDirty: sa,
    isValid: qr,
    isAsync: jr,
    get util() {
      return ve;
    },
    get objectUtil() {
      return ia;
    },
    ZodParsedType: N,
    getParsedType: un,
    ZodType: ce,
    ZodString: Ot,
    ZodNumber: cn,
    ZodBigInt: ln,
    ZodBoolean: fr,
    ZodDate: Sn,
    ZodSymbol: Kr,
    ZodUndefined: dr,
    ZodNull: hr,
    ZodAny: Wn,
    ZodUnknown: Tn,
    ZodNever: zt,
    ZodVoid: Gr,
    ZodArray: Rt,
    ZodObject: Ae,
    ZodUnion: pr,
    ZodDiscriminatedUnion: Yr,
    ZodIntersection: gr,
    ZodTuple: Ft,
    ZodRecord: vr,
    ZodMap: Xr,
    ZodSet: In,
    ZodFunction: Hn,
    ZodLazy: mr,
    ZodLiteral: yr,
    ZodEnum: fn,
    ZodNativeEnum: _r,
    ZodPromise: Vn,
    ZodEffects: Lt,
    ZodTransformer: Lt,
    ZodOptional: qt,
    ZodNullable: Cn,
    ZodDefault: wr,
    ZodCatch: Qr,
    ZodNaN: ei,
    BRAND: $l,
    ZodBranded: ao,
    ZodPipeline: xr,
    custom: so,
    Schema: ce,
    ZodSchema: ce,
    late: Hl,
    get ZodFirstPartyTypeKind() {
      return J;
    },
    coerce: {
      string: (i) => Ot.create({ ...i, coerce: !0 }),
      number: (i) => cn.create({ ...i, coerce: !0 }),
      boolean: (i) => fr.create({ ...i, coerce: !0 }),
      bigint: (i) => ln.create({ ...i, coerce: !0 }),
      date: (i) => Sn.create({ ...i, coerce: !0 }),
    },
    any: Yl,
    array: tf,
    bigint: ql,
    boolean: co,
    date: jl,
    discriminatedUnion: sf,
    effect: lo,
    enum: gf,
    function: df,
    instanceof: Vl,
    intersection: of,
    lazy: hf,
    literal: pf,
    map: lf,
    nan: zl,
    nativeEnum: vf,
    never: Ql,
    null: Jl,
    nullable: _f,
    number: uo,
    object: nf,
    oboolean: () => co().optional(),
    onumber: () => uo().optional(),
    optional: yf,
    ostring: () => oo().optional(),
    pipeline: xf,
    preprocess: wf,
    promise: mf,
    record: cf,
    set: ff,
    strictObject: rf,
    string: oo,
    symbol: Kl,
    transformer: lo,
    tuple: uf,
    undefined: Gl,
    union: af,
    unknown: Xl,
    void: ef,
    NEVER: ee,
    ZodIssueCode: R,
    quotelessJson: Cl,
    ZodError: At,
  });
  const ua = {
    success: true,
    data: {
      VITE_LAUNCHDARKLY_SDK_KEY: "6421d8bf515632137a540942",
      VITE_KAFKA_USAGE_URL: "https://helpful-lamb-5715-us1-rest-kafka.upstash.io/webhook?topic=zapvoice-usage&user=aGVscGZ1bC1sYW1iLTU3MTUkXAuyLPEm5d-ejP5H60k9848E2KCHibE9L2XedHE&pass=ccf166acd6d64db0a635d10fb9d291a6",
      BASE_URL: "/",
      MODE: "desenvolvement",
      DEV: true,
      PROD: false,
    }
  };
  
  if (ua.success === !1)
    throw (
      (console.error(
        "Invalid environment variables",
        JSON.stringify(ua.error.format())
      ),
      new Error("Invalid environment variables"))
    );
  const bf = ua.data;
  let ti;
  const Ef = new Uint8Array(16);
  function kf() {
    if (
      !ti &&
      ((ti =
        typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !ti)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    return ti(Ef);
  }
  const We = [];
  for (let i = 0; i < 256; ++i) We.push((i + 256).toString(16).slice(1));
  function Sf(i, n = 0) {
    return (
      We[i[n + 0]] +
      We[i[n + 1]] +
      We[i[n + 2]] +
      We[i[n + 3]] +
      "-" +
      We[i[n + 4]] +
      We[i[n + 5]] +
      "-" +
      We[i[n + 6]] +
      We[i[n + 7]] +
      "-" +
      We[i[n + 8]] +
      We[i[n + 9]] +
      "-" +
      We[i[n + 10]] +
      We[i[n + 11]] +
      We[i[n + 12]] +
      We[i[n + 13]] +
      We[i[n + 14]] +
      We[i[n + 15]]
    ).toLowerCase();
  }
  const fo = {
    randomUUID:
      typeof crypto < "u" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
  function ho(i, n, r) {
    if (fo.randomUUID && !n && !i) return fo.randomUUID();
    i = i || {};
    const s = i.random || (i.rng || kf)();
    if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), n)) {
      r = r || 0;
      for (let c = 0; c < 16; ++c) n[r + c] = s[c];
      return n;
    }
    return Sf(s);
  }
  async function ca(i) {
    if (chrome != null && chrome.storage)
      return new Promise((n) => {
        chrome.storage.local.set(i, () => n());
      });
    for (const n in i) localStorage.setItem(n, i[n]);
  }
  async function Tf() {
    const i = "deviceId",
      n = await on(i);
    if (!n) {
      const r = ho();
      return await ca({ [i]: r }), r;
    }
    return n;
  }
  async function If() {
    var i;
    return (i = await on(cr.storedName)) != null ? i : [];
  }
  async function Cf(i, n) {
    let r = await If();
    return r.length > i && (r = Af(r, i, n)), r;
  }
  function Af(i, n, r) {
    i.sort((c, o) => c.timestamp - o.timestamp), i.splice(0, i.length - n);
    const s = Date.now() - r;
    if (i.length > 0 && i[0].timestamp < s) {
      const c = i.findIndex((o) => o.timestamp > s);
      i.splice(0, c);
    }
    return i;
  }
  function Of(i, n) {
    const r = i.map((s) => ({ ...s, id: ho(), synced: !1 }));
    return n.concat(r);
  }
  async function Rf(i) {
    try {
      await ca({ [cr.storedName]: JSON.stringify(i) });
    } catch (n) {
      console.error("Error setting item on storage:", n);
    }
  }
  function Lf() {
    const i = [];
    function n(s) {
      i.push(s);
    }
    async function r() {
      if (i.length > 0) {
        const s = i.splice(0, i.length),
          c = 1e4,
          o = 1e3 * 60 * 60 * 24 * 30,
          l = await Cf(c, o),
          d = Of(s, l);
        await Rf(d);
      }
      setTimeout(r, 5e3);
    }
    return r(), { add: n };
  }
  function Df() {
    const i = [];
    function n(o) {
      i.push(o);
    }
    function r(o) {
      const l = i.map((d) => d && d(o));
      Promise.all(l).catch((d) => console.error(d));
    }
    async function s(o) {
      const { detail: l } = o;
      r(l);
    }
    window.addEventListener(cr.eventName, s);
    const c = Lf();
    return {
      subscribe: n,
      addUsageHit: c.add,
      cleanup: () => window.removeEventListener(cr.eventName, s),
    };
  }
  async function Pf(i) {
    for (const n in i) localStorage.setItem(n, i[n]);
  }
  function An(i) {
    function n(r, s) {
      Error.captureStackTrace &&
        Error.captureStackTrace(this, this.constructor),
        (this.message = r),
        (this.code = s);
    }
    return (
      (n.prototype = new Error()),
      (n.prototype.name = i),
      (n.prototype.constructor = n),
      n
    );
  }
  const Nf = An("LaunchDarklyUnexpectedResponseError"),
    Uf = An("LaunchDarklyInvalidEnvironmentIdError"),
    Mf = An("LaunchDarklyInvalidUserError"),
    Zf = An("LaunchDarklyInvalidEventKeyError"),
    Ff = An("LaunchDarklyInvalidArgumentError"),
    Bf = An("LaunchDarklyFlagFetchError");
  for (
    var Ne = {
        LDUnexpectedResponseError: Nf,
        LDInvalidEnvironmentIdError: Uf,
        LDInvalidUserError: Mf,
        LDInvalidEventKeyError: Zf,
        LDInvalidArgumentError: Ff,
        LDInvalidDataError: An("LaunchDarklyInvalidDataError"),
        LDFlagFetchError: Bf,
        isHttpErrorRecoverable: function (i) {
          return !(i >= 400 && i < 500) || i === 400 || i === 408 || i === 429;
        },
      },
      Wf = function (i) {
        var n = po(i),
          r = n[0],
          s = n[1];
        return (3 * (r + s)) / 4 - s;
      },
      $f = function (i) {
        var n,
          r,
          s = po(i),
          c = s[0],
          o = s[1],
          l = new Vf(
            (function (v, x, E) {
              return (3 * (x + E)) / 4 - E;
            })(0, c, o)
          ),
          d = 0,
          g = o > 0 ? c - 4 : c;
        for (r = 0; r < g; r += 4)
          (n =
            (_t[i.charCodeAt(r)] << 18) |
            (_t[i.charCodeAt(r + 1)] << 12) |
            (_t[i.charCodeAt(r + 2)] << 6) |
            _t[i.charCodeAt(r + 3)]),
            (l[d++] = (n >> 16) & 255),
            (l[d++] = (n >> 8) & 255),
            (l[d++] = 255 & n);
        return (
          o === 2 &&
            ((n = (_t[i.charCodeAt(r)] << 2) | (_t[i.charCodeAt(r + 1)] >> 4)),
            (l[d++] = 255 & n)),
          o === 1 &&
            ((n =
              (_t[i.charCodeAt(r)] << 10) |
              (_t[i.charCodeAt(r + 1)] << 4) |
              (_t[i.charCodeAt(r + 2)] >> 2)),
            (l[d++] = (n >> 8) & 255),
            (l[d++] = 255 & n)),
          l
        );
      },
      Hf = function (i) {
        for (
          var n, r = i.length, s = r % 3, c = [], o = 16383, l = 0, d = r - s;
          l < d;
          l += o
        )
          c.push(qf(i, l, l + o > d ? d : l + o));
        return (
          s === 1
            ? ((n = i[r - 1]), c.push(Bt[n >> 2] + Bt[(n << 4) & 63] + "=="))
            : s === 2 &&
              ((n = (i[r - 2] << 8) + i[r - 1]),
              c.push(
                Bt[n >> 10] + Bt[(n >> 4) & 63] + Bt[(n << 2) & 63] + "="
              )),
          c.join("")
        );
      },
      Bt = [],
      _t = [],
      Vf = typeof Uint8Array < "u" ? Uint8Array : Array,
      la = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      zn = 0,
      zf = la.length;
    zn < zf;
    ++zn
  )
    (Bt[zn] = la[zn]), (_t[la.charCodeAt(zn)] = zn);
  function po(i) {
    var n = i.length;
    if (n % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = i.indexOf("=");
    return r === -1 && (r = n), [r, r === n ? 0 : 4 - (r % 4)];
  }
  function qf(i, n, r) {
    for (var s, c, o = [], l = n; l < r; l += 3)
      (s =
        ((i[l] << 16) & 16711680) +
        ((i[l + 1] << 8) & 65280) +
        (255 & i[l + 2])),
        o.push(
          Bt[((c = s) >> 18) & 63] +
            Bt[(c >> 12) & 63] +
            Bt[(c >> 6) & 63] +
            Bt[63 & c]
        );
    return o.join("");
  }
  (_t["-".charCodeAt(0)] = 62), (_t["_".charCodeAt(0)] = 63);
  var jf = { byteLength: Wf, toByteArray: $f, fromByteArray: Hf },
    go = Array.isArray,
    vo = Object.keys,
    Kf = Object.prototype.hasOwnProperty,
    Gf = function i(n, r) {
      if (n === r) return !0;
      if (n && r && typeof n == "object" && typeof r == "object") {
        var s,
          c,
          o,
          l = go(n),
          d = go(r);
        if (l && d) {
          if ((c = n.length) != r.length) return !1;
          for (s = c; s-- != 0; ) if (!i(n[s], r[s])) return !1;
          return !0;
        }
        if (l != d) return !1;
        var g = n instanceof Date,
          v = r instanceof Date;
        if (g != v) return !1;
        if (g && v) return n.getTime() == r.getTime();
        var x = n instanceof RegExp,
          E = r instanceof RegExp;
        if (x != E) return !1;
        if (x && E) return n.toString() == r.toString();
        var C = vo(n);
        if ((c = C.length) !== vo(r).length) return !1;
        for (s = c; s-- != 0; ) if (!Kf.call(r, C[s])) return !1;
        for (s = c; s-- != 0; ) if (!i(n[(o = C[s])], r[o])) return !1;
        return !0;
      }
      return n != n && r != r;
    };
  const Jf = [
    "key",
    "ip",
    "country",
    "email",
    "firstName",
    "lastName",
    "avatar",
    "name",
  ];
  function mo(i) {
    const n = unescape(encodeURIComponent(i));
    return jf.fromByteArray(
      (function (r) {
        const s = [];
        for (let c = 0; c < r.length; c++) s.push(r.charCodeAt(c));
        return s;
      })(n)
    );
  }
  function yo(i) {
    return mo(i).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function fa(i, n) {
    return Object.prototype.hasOwnProperty.call(i, n);
  }
  var da,
    Q = {
      appendUrlPath: function (i, n) {
        return (
          (i.endsWith("/") ? i.substring(0, i.length - 1) : i) +
          (n.startsWith("/") ? "" : "/") +
          n
        );
      },
      base64URLEncode: yo,
      btoa: mo,
      chunkEventsForUrl: function (i, n) {
        const r = n.slice(0),
          s = [];
        let c,
          o = i;
        for (; r.length > 0; ) {
          for (c = []; o > 0; ) {
            const l = r.shift();
            if (!l) break;
            (o -= yo(JSON.stringify(l)).length),
              o < 0 && c.length > 0 ? r.unshift(l) : c.push(l);
          }
          (o = i), s.push(c);
        }
        return s;
      },
      clone: function (i) {
        return JSON.parse(JSON.stringify(i));
      },
      deepEquals: function (i, n) {
        return Gf(i, n);
      },
      extend: function (...i) {
        return i.reduce((n, r) => ({ ...n, ...r }), {});
      },
      getLDUserAgentString: function (i) {
        const n = i.version || "?";
        return i.userAgent + "/" + n;
      },
      objectHasOwnProperty: fa,
      onNextTick: function (i) {
        setTimeout(i, 0);
      },
      sanitizeContext: function (i) {
        if (!i) return i;
        let n;
        return (
          (i.kind !== null && i.kind !== void 0) ||
            Jf.forEach((r) => {
              const s = i[r];
              s !== void 0 &&
                typeof s != "string" &&
                ((n = n || { ...i }), (n[r] = String(s)));
            }),
          n || i
        );
      },
      transformValuesToVersionedValues: function (i) {
        const n = {};
        for (const r in i) fa(i, r) && (n[r] = { value: i[r], version: 0 });
        return n;
      },
      transformVersionedValuesToValues: function (i) {
        const n = {};
        for (const r in i) fa(i, r) && (n[r] = i[r].value);
        return n;
      },
      wrapPromiseCallback: function (i, n) {
        const r = i.then(
          (s) => (
            n &&
              setTimeout(() => {
                n(null, s);
              }, 0),
            s
          ),
          (s) => {
            if (!n) return Promise.reject(s);
            setTimeout(() => {
              n(s, null);
            }, 0);
          }
        );
        return n ? void 0 : r;
      },
    },
    Yf = new Uint8Array(16);
  function _o() {
    if (
      !da &&
      !(da =
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
    return da(Yf);
  }
  var Xf =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  function ni(i) {
    return typeof i == "string" && Xf.test(i);
  }
  for (var wo, ha, $e = [], pa = 0; pa < 256; ++pa)
    $e.push((pa + 256).toString(16).substr(1));
  function ri(i) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      r = (
        $e[i[n + 0]] +
        $e[i[n + 1]] +
        $e[i[n + 2]] +
        $e[i[n + 3]] +
        "-" +
        $e[i[n + 4]] +
        $e[i[n + 5]] +
        "-" +
        $e[i[n + 6]] +
        $e[i[n + 7]] +
        "-" +
        $e[i[n + 8]] +
        $e[i[n + 9]] +
        "-" +
        $e[i[n + 10]] +
        $e[i[n + 11]] +
        $e[i[n + 12]] +
        $e[i[n + 13]] +
        $e[i[n + 14]] +
        $e[i[n + 15]]
      ).toLowerCase();
    if (!ni(r)) throw TypeError("Stringified UUID is invalid");
    return r;
  }
  var ga = 0,
    va = 0;
  function xo(i) {
    if (!ni(i)) throw TypeError("Invalid UUID");
    var n,
      r = new Uint8Array(16);
    return (
      (r[0] = (n = parseInt(i.slice(0, 8), 16)) >>> 24),
      (r[1] = (n >>> 16) & 255),
      (r[2] = (n >>> 8) & 255),
      (r[3] = 255 & n),
      (r[4] = (n = parseInt(i.slice(9, 13), 16)) >>> 8),
      (r[5] = 255 & n),
      (r[6] = (n = parseInt(i.slice(14, 18), 16)) >>> 8),
      (r[7] = 255 & n),
      (r[8] = (n = parseInt(i.slice(19, 23), 16)) >>> 8),
      (r[9] = 255 & n),
      (r[10] = ((n = parseInt(i.slice(24, 36), 16)) / 1099511627776) & 255),
      (r[11] = (n / 4294967296) & 255),
      (r[12] = (n >>> 24) & 255),
      (r[13] = (n >>> 16) & 255),
      (r[14] = (n >>> 8) & 255),
      (r[15] = 255 & n),
      r
    );
  }
  function bo(i, n, r) {
    function s(c, o, l, d) {
      if (
        (typeof c == "string" &&
          (c = (function (x) {
            x = unescape(encodeURIComponent(x));
            for (var E = [], C = 0; C < x.length; ++C) E.push(x.charCodeAt(C));
            return E;
          })(c)),
        typeof o == "string" && (o = xo(o)),
        o.length !== 16)
      )
        throw TypeError(
          "Namespace must be array-like (16 iterable integer values, 0-255)"
        );
      var g = new Uint8Array(16 + c.length);
      if (
        (g.set(o),
        g.set(c, o.length),
        ((g = r(g))[6] = (15 & g[6]) | n),
        (g[8] = (63 & g[8]) | 128),
        l)
      ) {
        d = d || 0;
        for (var v = 0; v < 16; ++v) l[d + v] = g[v];
        return l;
      }
      return ri(g);
    }
    try {
      s.name = i;
    } catch {}
    return (
      (s.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
      (s.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
      s
    );
  }
  function Eo(i) {
    return 14 + (((i + 64) >>> 9) << 4) + 1;
  }
  function dn(i, n) {
    var r = (65535 & i) + (65535 & n);
    return (((i >> 16) + (n >> 16) + (r >> 16)) << 16) | (65535 & r);
  }
  function ii(i, n, r, s, c, o) {
    return dn(((l = dn(dn(n, i), dn(s, o))) << (d = c)) | (l >>> (32 - d)), r);
    var l, d;
  }
  function qe(i, n, r, s, c, o, l) {
    return ii((n & r) | (~n & s), i, n, c, o, l);
  }
  function je(i, n, r, s, c, o, l) {
    return ii((n & s) | (r & ~s), i, n, c, o, l);
  }
  function Ke(i, n, r, s, c, o, l) {
    return ii(n ^ r ^ s, i, n, c, o, l);
  }
  function Ge(i, n, r, s, c, o, l) {
    return ii(r ^ (n | ~s), i, n, c, o, l);
  }
  var Qf = bo("v3", 48, function (i) {
      if (typeof i == "string") {
        var n = unescape(encodeURIComponent(i));
        i = new Uint8Array(n.length);
        for (var r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
      }
      return (function (s) {
        for (
          var c = [], o = 32 * s.length, l = "0123456789abcdef", d = 0;
          d < o;
          d += 8
        ) {
          var g = (s[d >> 5] >>> d % 32) & 255,
            v = parseInt(l.charAt((g >>> 4) & 15) + l.charAt(15 & g), 16);
          c.push(v);
        }
        return c;
      })(
        (function (s, c) {
          (s[c >> 5] |= 128 << c % 32), (s[Eo(c) - 1] = c);
          for (
            var o = 1732584193,
              l = -271733879,
              d = -1732584194,
              g = 271733878,
              v = 0;
            v < s.length;
            v += 16
          ) {
            var x = o,
              E = l,
              C = d,
              D = g;
            (o = qe(o, l, d, g, s[v], 7, -680876936)),
              (g = qe(g, o, l, d, s[v + 1], 12, -389564586)),
              (d = qe(d, g, o, l, s[v + 2], 17, 606105819)),
              (l = qe(l, d, g, o, s[v + 3], 22, -1044525330)),
              (o = qe(o, l, d, g, s[v + 4], 7, -176418897)),
              (g = qe(g, o, l, d, s[v + 5], 12, 1200080426)),
              (d = qe(d, g, o, l, s[v + 6], 17, -1473231341)),
              (l = qe(l, d, g, o, s[v + 7], 22, -45705983)),
              (o = qe(o, l, d, g, s[v + 8], 7, 1770035416)),
              (g = qe(g, o, l, d, s[v + 9], 12, -1958414417)),
              (d = qe(d, g, o, l, s[v + 10], 17, -42063)),
              (l = qe(l, d, g, o, s[v + 11], 22, -1990404162)),
              (o = qe(o, l, d, g, s[v + 12], 7, 1804603682)),
              (g = qe(g, o, l, d, s[v + 13], 12, -40341101)),
              (d = qe(d, g, o, l, s[v + 14], 17, -1502002290)),
              (o = je(
                o,
                (l = qe(l, d, g, o, s[v + 15], 22, 1236535329)),
                d,
                g,
                s[v + 1],
                5,
                -165796510
              )),
              (g = je(g, o, l, d, s[v + 6], 9, -1069501632)),
              (d = je(d, g, o, l, s[v + 11], 14, 643717713)),
              (l = je(l, d, g, o, s[v], 20, -373897302)),
              (o = je(o, l, d, g, s[v + 5], 5, -701558691)),
              (g = je(g, o, l, d, s[v + 10], 9, 38016083)),
              (d = je(d, g, o, l, s[v + 15], 14, -660478335)),
              (l = je(l, d, g, o, s[v + 4], 20, -405537848)),
              (o = je(o, l, d, g, s[v + 9], 5, 568446438)),
              (g = je(g, o, l, d, s[v + 14], 9, -1019803690)),
              (d = je(d, g, o, l, s[v + 3], 14, -187363961)),
              (l = je(l, d, g, o, s[v + 8], 20, 1163531501)),
              (o = je(o, l, d, g, s[v + 13], 5, -1444681467)),
              (g = je(g, o, l, d, s[v + 2], 9, -51403784)),
              (d = je(d, g, o, l, s[v + 7], 14, 1735328473)),
              (o = Ke(
                o,
                (l = je(l, d, g, o, s[v + 12], 20, -1926607734)),
                d,
                g,
                s[v + 5],
                4,
                -378558
              )),
              (g = Ke(g, o, l, d, s[v + 8], 11, -2022574463)),
              (d = Ke(d, g, o, l, s[v + 11], 16, 1839030562)),
              (l = Ke(l, d, g, o, s[v + 14], 23, -35309556)),
              (o = Ke(o, l, d, g, s[v + 1], 4, -1530992060)),
              (g = Ke(g, o, l, d, s[v + 4], 11, 1272893353)),
              (d = Ke(d, g, o, l, s[v + 7], 16, -155497632)),
              (l = Ke(l, d, g, o, s[v + 10], 23, -1094730640)),
              (o = Ke(o, l, d, g, s[v + 13], 4, 681279174)),
              (g = Ke(g, o, l, d, s[v], 11, -358537222)),
              (d = Ke(d, g, o, l, s[v + 3], 16, -722521979)),
              (l = Ke(l, d, g, o, s[v + 6], 23, 76029189)),
              (o = Ke(o, l, d, g, s[v + 9], 4, -640364487)),
              (g = Ke(g, o, l, d, s[v + 12], 11, -421815835)),
              (d = Ke(d, g, o, l, s[v + 15], 16, 530742520)),
              (o = Ge(
                o,
                (l = Ke(l, d, g, o, s[v + 2], 23, -995338651)),
                d,
                g,
                s[v],
                6,
                -198630844
              )),
              (g = Ge(g, o, l, d, s[v + 7], 10, 1126891415)),
              (d = Ge(d, g, o, l, s[v + 14], 15, -1416354905)),
              (l = Ge(l, d, g, o, s[v + 5], 21, -57434055)),
              (o = Ge(o, l, d, g, s[v + 12], 6, 1700485571)),
              (g = Ge(g, o, l, d, s[v + 3], 10, -1894986606)),
              (d = Ge(d, g, o, l, s[v + 10], 15, -1051523)),
              (l = Ge(l, d, g, o, s[v + 1], 21, -2054922799)),
              (o = Ge(o, l, d, g, s[v + 8], 6, 1873313359)),
              (g = Ge(g, o, l, d, s[v + 15], 10, -30611744)),
              (d = Ge(d, g, o, l, s[v + 6], 15, -1560198380)),
              (l = Ge(l, d, g, o, s[v + 13], 21, 1309151649)),
              (o = Ge(o, l, d, g, s[v + 4], 6, -145523070)),
              (g = Ge(g, o, l, d, s[v + 11], 10, -1120210379)),
              (d = Ge(d, g, o, l, s[v + 2], 15, 718787259)),
              (l = Ge(l, d, g, o, s[v + 9], 21, -343485551)),
              (o = dn(o, x)),
              (l = dn(l, E)),
              (d = dn(d, C)),
              (g = dn(g, D));
          }
          return [o, l, d, g];
        })(
          (function (s) {
            if (s.length === 0) return [];
            for (
              var c = 8 * s.length, o = new Uint32Array(Eo(c)), l = 0;
              l < c;
              l += 8
            )
              o[l >> 5] |= (255 & s[l / 8]) << l % 32;
            return o;
          })(i),
          8 * i.length
        )
      );
    }),
    ed = Qf;
  function td(i, n, r, s) {
    switch (i) {
      case 0:
        return (n & r) ^ (~n & s);
      case 1:
      case 3:
        return n ^ r ^ s;
      case 2:
        return (n & r) ^ (n & s) ^ (r & s);
    }
  }
  function ma(i, n) {
    return (i << n) | (i >>> (32 - n));
  }
  var nd = bo("v5", 80, function (i) {
      var n = [1518500249, 1859775393, 2400959708, 3395469782],
        r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof i == "string") {
        var s = unescape(encodeURIComponent(i));
        i = [];
        for (var c = 0; c < s.length; ++c) i.push(s.charCodeAt(c));
      } else Array.isArray(i) || (i = Array.prototype.slice.call(i));
      i.push(128);
      for (
        var o = i.length / 4 + 2,
          l = Math.ceil(o / 16),
          d = new Array(l),
          g = 0;
        g < l;
        ++g
      ) {
        for (var v = new Uint32Array(16), x = 0; x < 16; ++x)
          v[x] =
            (i[64 * g + 4 * x] << 24) |
            (i[64 * g + 4 * x + 1] << 16) |
            (i[64 * g + 4 * x + 2] << 8) |
            i[64 * g + 4 * x + 3];
        d[g] = v;
      }
      (d[l - 1][14] = (8 * (i.length - 1)) / Math.pow(2, 32)),
        (d[l - 1][14] = Math.floor(d[l - 1][14])),
        (d[l - 1][15] = (8 * (i.length - 1)) & 4294967295);
      for (var E = 0; E < l; ++E) {
        for (var C = new Uint32Array(80), D = 0; D < 16; ++D) C[D] = d[E][D];
        for (var Z = 16; Z < 80; ++Z)
          C[Z] = ma(C[Z - 3] ^ C[Z - 8] ^ C[Z - 14] ^ C[Z - 16], 1);
        for (
          var W = r[0], z = r[1], U = r[2], $ = r[3], se = r[4], pe = 0;
          pe < 80;
          ++pe
        ) {
          var X = Math.floor(pe / 20),
            we = (ma(W, 5) + td(X, z, U, $) + se + n[X] + C[pe]) >>> 0;
          (se = $), ($ = U), (U = ma(z, 30) >>> 0), (z = W), (W = we);
        }
        (r[0] = (r[0] + W) >>> 0),
          (r[1] = (r[1] + z) >>> 0),
          (r[2] = (r[2] + U) >>> 0),
          (r[3] = (r[3] + $) >>> 0),
          (r[4] = (r[4] + se) >>> 0);
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
    rd = nd,
    ya = Object.freeze({
      __proto__: null,
      v1: function (i, n, r) {
        var s = (n && r) || 0,
          c = n || new Array(16),
          o = (i = i || {}).node || wo,
          l = i.clockseq !== void 0 ? i.clockseq : ha;
        if (o == null || l == null) {
          var d = i.random || (i.rng || _o)();
          o == null && (o = wo = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
            l == null && (l = ha = 16383 & ((d[6] << 8) | d[7]));
        }
        var g = i.msecs !== void 0 ? i.msecs : Date.now(),
          v = i.nsecs !== void 0 ? i.nsecs : va + 1,
          x = g - ga + (v - va) / 1e4;
        if (
          (x < 0 && i.clockseq === void 0 && (l = (l + 1) & 16383),
          (x < 0 || g > ga) && i.nsecs === void 0 && (v = 0),
          v >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (ga = g), (va = v), (ha = l);
        var E = (1e4 * (268435455 & (g += 122192928e5)) + v) % 4294967296;
        (c[s++] = (E >>> 24) & 255),
          (c[s++] = (E >>> 16) & 255),
          (c[s++] = (E >>> 8) & 255),
          (c[s++] = 255 & E);
        var C = ((g / 4294967296) * 1e4) & 268435455;
        (c[s++] = (C >>> 8) & 255),
          (c[s++] = 255 & C),
          (c[s++] = ((C >>> 24) & 15) | 16),
          (c[s++] = (C >>> 16) & 255),
          (c[s++] = (l >>> 8) | 128),
          (c[s++] = 255 & l);
        for (var D = 0; D < 6; ++D) c[s + D] = o[D];
        return n || ri(c);
      },
      v3: ed,
      v4: function (i, n, r) {
        var s = (i = i || {}).random || (i.rng || _o)();
        if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), n)) {
          r = r || 0;
          for (var c = 0; c < 16; ++c) n[r + c] = s[c];
          return n;
        }
        return ri(s);
      },
      v5: rd,
      NIL: "00000000-0000-0000-0000-000000000000",
      version: function (i) {
        if (!ni(i)) throw TypeError("Invalid UUID");
        return parseInt(i.substr(14, 1), 16);
      },
      validate: ni,
      stringify: ri,
      parse: xo,
    });
  const br = ["debug", "info", "warn", "error", "none"];
  var _a = {
    commonBasicLogger: function (i, n) {
      if (i && i.destination && typeof i.destination != "function")
        throw new Error(
          "destination for basicLogger was set to a non-function"
        );
      function r(v) {
        return function (x) {
          console && console[v] && console[v].call(console, x);
        };
      }
      const s =
          i && i.destination
            ? [i.destination, i.destination, i.destination, i.destination]
            : [r("log"), r("info"), r("warn"), r("error")],
        c = !(!i || !i.destination),
        o =
          i && i.prefix !== void 0 && i.prefix !== null
            ? i.prefix
            : "[LaunchDarkly] ";
      let l = 1;
      if (i && i.level)
        for (let v = 0; v < br.length; v++) br[v] === i.level && (l = v);
      function d(v, x, E) {
        if (E.length < 1) return;
        let C;
        const D = c ? x + ": " + o : o;
        if (E.length !== 1 && n) {
          const Z = [...E];
          (Z[0] = D + Z[0]), (C = n(...Z));
        } else C = D + E[0];
        try {
          s[v](C);
        } catch (Z) {
          console &&
            console.log &&
            console.log(
              "[LaunchDarkly] Configured logger's " +
                x +
                " method threw an exception: " +
                Z
            );
        }
      }
      const g = {};
      for (let v = 0; v < br.length; v++) {
        const x = br[v];
        if (x !== "none")
          if (v < l) g[x] = () => {};
          else {
            const E = v;
            g[x] = function () {
              d(E, x, arguments);
            };
          }
      }
      return g;
    },
    validateLogger: function (i) {
      br.forEach((n) => {
        if (n !== "none" && (!i[n] || typeof i[n] != "function"))
          throw new Error(
            "Provided logger instance must support logger." + n + "(...) method"
          );
      });
    },
  };
  function ai(i) {
    return i && i.message
      ? i.message
      : typeof i == "string" || i instanceof String
      ? i
      : JSON.stringify(i);
  }
  const qn =
    " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initializing-the-client for instructions on SDK initialization.";
  var Y = {
    bootstrapInvalid: function () {
      return "LaunchDarkly bootstrap data is not available because the back end could not read the flags.";
    },
    bootstrapOldFormat: function () {
      return (
        "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." +
        qn
      );
    },
    clientInitialized: function () {
      return "LaunchDarkly client initialized";
    },
    clientNotReady: function () {
      return "LaunchDarkly client is not ready";
    },
    debugEnqueueingEvent: function (i) {
      return 'enqueueing "' + i + '" event';
    },
    debugPostingDiagnosticEvent: function (i) {
      return "sending diagnostic event (" + i.kind + ")";
    },
    debugPostingEvents: function (i) {
      return "sending " + i + " events";
    },
    debugStreamDelete: function (i) {
      return 'received streaming deletion for flag "' + i + '"';
    },
    debugStreamDeleteIgnored: function (i) {
      return (
        'received streaming deletion for flag "' +
        i +
        '" but ignored due to version check'
      );
    },
    debugStreamPatch: function (i) {
      return 'received streaming update for flag "' + i + '"';
    },
    debugStreamPatchIgnored: function (i) {
      return (
        'received streaming update for flag "' +
        i +
        '" but ignored due to version check'
      );
    },
    debugStreamPing: function () {
      return "received ping message from stream";
    },
    debugPolling: function (i) {
      return "polling for feature flags at " + i;
    },
    debugStreamPut: function () {
      return "received streaming update for all flags";
    },
    deprecated: function (i, n) {
      return n
        ? '"' + i + '" is deprecated, please use "' + n + '"'
        : '"' + i + '" is deprecated';
    },
    environmentNotFound: function () {
      return (
        "Environment not found. Double check that you specified a valid environment/client-side ID." +
        qn
      );
    },
    environmentNotSpecified: function () {
      return "No environment/client-side ID was specified." + qn;
    },
    errorFetchingFlags: function (i) {
      return "Error fetching flag settings: " + ai(i);
    },
    eventCapacityExceeded: function () {
      return "Exceeded event queue capacity. Increase capacity to avoid dropping events.";
    },
    eventWithoutContext: function () {
      return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript";
    },
    httpErrorMessage: function (i, n, r) {
      return (
        "Received error " +
        i +
        (i === 401 ? " (invalid SDK key)" : "") +
        " for " +
        n +
        " - " +
        (Ne.isHttpErrorRecoverable(i) ? r : "giving up permanently")
      );
    },
    httpUnavailable: function () {
      return "Cannot make HTTP requests in this environment." + qn;
    },
    identifyDisabled: function () {
      return "identify() has no effect here; it must be called on the main client instance";
    },
    inspectorMethodError: (i, n) =>
      `an inspector: "${n}" of type: "${i}" generated an exception`,
    invalidContentType: function (i) {
      return 'Expected application/json content type but got "' + i + '"';
    },
    invalidData: function () {
      return "Invalid data received from LaunchDarkly; connection may have been interrupted";
    },
    invalidInspector: (i, n) =>
      `an inspector: "${n}" of an invalid type (${i}) was configured`,
    invalidKey: function () {
      return "Event key must be a string";
    },
    invalidContext: function () {
      return "Invalid context specified." + qn;
    },
    invalidTagValue: (i) =>
      `Config option "${i}" must only contain letters, numbers, ., _ or -.`,
    localStorageUnavailable: function (i) {
      return "local storage is unavailable: " + ai(i);
    },
    networkError: (i) => "network error" + (i ? " (" + i + ")" : ""),
    optionBelowMinimum: (i, n, r) =>
      'Config option "' +
      i +
      '" was set to ' +
      n +
      ", changing to minimum value of " +
      r,
    streamClosing: function () {
      return "Closing stream connection";
    },
    streamConnecting: function (i) {
      return "Opening stream connection to " + i;
    },
    streamError: function (i, n) {
      return (
        "Error on stream connection: " +
        ai(i) +
        ", will continue retrying after " +
        n +
        " milliseconds."
      );
    },
    tagValueTooLong: (i) =>
      `Value of "${i}" was longer than 64 characters and was discarded.`,
    unknownCustomEventKey: function (i) {
      return 'Custom event "' + i + '" does not exist';
    },
    unknownOption: (i) => 'Ignoring unknown config option "' + i + '"',
    contextNotSpecified: function () {
      return "No context specified." + qn;
    },
    unrecoverableStreamError: (i) =>
      `Error on stream connection ${ai(i)}, giving up permanently`,
    wrongOptionType: (i, n, r) =>
      'Config option "' +
      i +
      '" should be of type ' +
      n +
      ", got " +
      r +
      ", using default value",
    wrongOptionTypeBoolean: (i, n) =>
      'Config option "' +
      i +
      '" should be a boolean, got ' +
      n +
      ", converting to boolean",
  };
  const { validateLogger: id } = _a,
    ko = {
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
        validator: function (i, n, r) {
          const s = {};
          return (
            n.id && (s.id = So(`${i}.id`, n.id, r)),
            n.version && (s.version = So(`${i}.version`, n.version, r)),
            s
          );
        },
      },
      inspectors: { default: [] },
    },
    ad = /^(\w|\.|-)+$/;
  function wa(i) {
    return i && i.replace(/\/+$/, "");
  }
  function So(i, n, r) {
    if (typeof n == "string" && n.match(ad)) {
      if (!(n.length > 64)) return n;
      r.warn(Y.tagValueTooLong(i));
    } else r.warn(Y.invalidTagValue(i));
  }
  var xa = {
    baseOptionDefs: ko,
    validate: function (i, n, r, s) {
      const c = Q.extend({ logger: { default: s } }, ko, r),
        o = {};
      function l(g) {
        Q.onNextTick(() => {
          n && n.maybeReportError(new Ne.LDInvalidArgumentError(g));
        });
      }
      let d = Q.extend({}, i || {});
      return (
        (function (g) {
          const v = g;
          Object.keys(o).forEach((x) => {
            if (v[x] !== void 0) {
              const E = o[x];
              s && s.warn(Y.deprecated(x, E)),
                E && (v[E] === void 0 && (v[E] = v[x]), delete v[x]);
            }
          });
        })(d),
        (d = (function (g) {
          const v = Q.extend({}, g);
          return (
            Object.keys(c).forEach((x) => {
              (v[x] !== void 0 && v[x] !== null) ||
                (v[x] = c[x] && c[x].default);
            }),
            v
          );
        })(d)),
        (d = (function (g) {
          const v = Q.extend({}, g),
            x = (E) => {
              if (E === null) return "any";
              if (E === void 0) return;
              if (Array.isArray(E)) return "array";
              const C = typeof E;
              return C === "boolean" ||
                C === "string" ||
                C === "number" ||
                C === "function"
                ? C
                : "object";
            };
          return (
            Object.keys(g).forEach((E) => {
              const C = g[E];
              if (C != null) {
                const D = c[E];
                if (D === void 0) l(Y.unknownOption(E));
                else {
                  const Z = D.type || x(D.default),
                    W = D.validator;
                  if (W) {
                    const z = W(E, g[E], s);
                    z !== void 0 ? (v[E] = z) : delete v[E];
                  } else if (Z !== "any") {
                    const z = Z.split("|"),
                      U = x(C);
                    z.indexOf(U) < 0
                      ? Z === "boolean"
                        ? ((v[E] = !!C), l(Y.wrongOptionTypeBoolean(E, U)))
                        : (l(Y.wrongOptionType(E, Z, U)), (v[E] = D.default))
                      : U === "number" &&
                        D.minimum !== void 0 &&
                        C < D.minimum &&
                        (l(Y.optionBelowMinimum(E, C, D.minimum)),
                        (v[E] = D.minimum));
                  }
                }
              }
            }),
            (v.baseUrl = wa(v.baseUrl)),
            (v.streamUrl = wa(v.streamUrl)),
            (v.eventsUrl = wa(v.eventsUrl)),
            v
          );
        })(d)),
        id(d.logger),
        d
      );
    },
    getTags: function (i) {
      const n = {};
      return (
        i &&
          (i.application &&
            i.application.id !== void 0 &&
            i.application.id !== null &&
            (n["application-id"] = [i.application.id]),
          i.application &&
            i.application.version !== void 0 &&
            i.application.id !== null &&
            (n["application-version"] = [i.application.version])),
        n
      );
    },
  };
  const { getLDUserAgentString: sd } = Q;
  var ba = {
    getLDHeaders: function (i, n) {
      if (n && !n.sendLDHeaders) return {};
      const r = {};
      (r[i.userAgentHeaderName || "User-Agent"] = sd(i)),
        n &&
          n.wrapperName &&
          (r["X-LaunchDarkly-Wrapper"] = n.wrapperVersion
            ? n.wrapperName + "/" + n.wrapperVersion
            : n.wrapperName);
      const s = xa.getTags(n),
        c = Object.keys(s);
      return (
        c.length &&
          (r["x-launchdarkly-tags"] = c
            .sort()
            .map((o) =>
              Array.isArray(s[o])
                ? s[o].sort().map((l) => `${o}/${l}`)
                : [`${o}/${s[o]}`]
            )
            .reduce((o, l) => o.concat(l), [])
            .join(" ")),
        r
      );
    },
    transformHeaders: function (i, n) {
      return n && n.requestHeaderTransform
        ? n.requestHeaderTransform({ ...i })
        : i;
    },
  };
  const { v1: od } = ya,
    { getLDHeaders: ud, transformHeaders: cd } = ba;
  var To = function (i, n, r) {
    const s = "/a/" + n + ".gif",
      c = Q.extend({ "Content-Type": "application/json" }, ud(i, r)),
      o = i.httpFallbackPing,
      l = {};
    return (
      (l.sendChunk = (d, g, v, x) => {
        const E = JSON.stringify(d),
          C = v ? null : od();
        return x
          ? (function D(Z) {
              const W = v
                ? c
                : Q.extend({}, c, {
                    "X-LaunchDarkly-Event-Schema": "4",
                    "X-LaunchDarkly-Payload-ID": C,
                  });
              return i
                .httpRequest("POST", g, cd(W, r), E)
                .promise.then((z) => {
                  if (z)
                    return z.status >= 400 &&
                      Ne.isHttpErrorRecoverable(z.status) &&
                      Z
                      ? D(!1)
                      : (function (U) {
                          const $ = { status: U.status },
                            se = U.header("date");
                          if (se) {
                            const pe = Date.parse(se);
                            pe && ($.serverTime = pe);
                          }
                          return $;
                        })(z);
                })
                .catch(() => (Z ? D(!1) : Promise.reject()));
            })(!0).catch(() => {})
          : (o && o(g + s + "?d=" + Q.base64URLEncode(E)), Promise.resolve());
      }),
      (l.sendEvents = function (d, g, v) {
        if (!i.httpRequest) return Promise.resolve();
        const x = i.httpAllowsPost();
        let E;
        E = x ? [d] : Q.chunkEventsForUrl(2e3 - g.length, d);
        const C = [];
        for (let D = 0; D < E.length; D++) C.push(l.sendChunk(E[D], g, v, x));
        return Promise.all(C);
      }),
      l
    );
  };
  const { commonBasicLogger: ld } = _a;
  function Io(i) {
    return typeof i == "string" && i !== "kind" && i.match(/^(\w|\.|-)+$/);
  }
  function Co(i) {
    return i.includes("%") || i.includes(":")
      ? i.replace(/%/g, "%25").replace(/:/g, "%3A")
      : i;
  }
  var si = {
    checkContext: function (i, n) {
      if (i) {
        if (n && (i.kind === void 0 || i.kind === null))
          return i.key !== void 0 && i.key !== null;
        const r = i.key,
          s = i.kind === void 0 ? "user" : i.kind,
          c = Io(s),
          o = s === "multi" || (r != null && r !== "");
        if (s === "multi") {
          const l = Object.keys(i).filter((d) => d !== "kind");
          return (
            o &&
            l.every((d) => Io(d)) &&
            l.every((d) => {
              const g = i[d].key;
              return g != null && g !== "";
            })
          );
        }
        return o && c;
      }
      return !1;
    },
    getContextKeys: function (i, n = ld()) {
      if (!i) return;
      const r = {},
        { kind: s, key: c } = i;
      switch (s) {
        case void 0:
          r.user = `${c}`;
          break;
        case "multi":
          Object.entries(i)
            .filter(([o]) => o !== "kind")
            .forEach(([o, l]) => {
              l && l.key && (r[o] = l.key);
            });
          break;
        case null:
          n.warn(`null is not a valid context kind: ${i}`);
          break;
        case "":
          n.warn(`'' is not a valid context kind: ${i}`);
          break;
        default:
          r[s] = `${c}`;
      }
      return r;
    },
    getContextKinds: function (i) {
      return i
        ? i.kind === null || i.kind === void 0
          ? ["user"]
          : i.kind !== "multi"
          ? [i.kind]
          : Object.keys(i).filter((n) => n !== "kind")
        : [];
    },
    getCanonicalKey: function (i) {
      if (i) {
        if (
          (i.kind === void 0 || i.kind === null || i.kind === "user") &&
          i.key
        )
          return i.key;
        if (i.kind !== "multi" && i.key) return `${i.kind}:${Co(i.key)}`;
        if (i.kind === "multi")
          return Object.keys(i)
            .sort()
            .filter((n) => n !== "kind")
            .map((n) => `${n}:${Co(i[n].key)}`)
            .join(":");
      }
    },
  };
  const { getContextKinds: fd } = si;
  var dd = function () {
    const i = {};
    let n = 0,
      r = 0,
      s = {},
      c = {};
    return (
      (i.summarizeEvent = (o) => {
        if (o.kind === "feature") {
          const l =
              o.key +
              ":" +
              (o.variation !== null && o.variation !== void 0
                ? o.variation
                : "") +
              ":" +
              (o.version !== null && o.version !== void 0 ? o.version : ""),
            d = s[l];
          let g = c[o.key];
          g || ((g = new Set()), (c[o.key] = g)),
            (function (v) {
              return v.context
                ? fd(v.context)
                : v.contextKeys
                ? Object.keys(v.contextKeys)
                : [];
            })(o).forEach((v) => g.add(v)),
            d
              ? (d.count = d.count + 1)
              : (s[l] = {
                  count: 1,
                  key: o.key,
                  version: o.version,
                  variation: o.variation,
                  value: o.value,
                  default: o.default,
                }),
            (n === 0 || o.creationDate < n) && (n = o.creationDate),
            o.creationDate > r && (r = o.creationDate);
        }
      }),
      (i.getSummary = () => {
        const o = {};
        let l = !0;
        for (const d of Object.values(s)) {
          let g = o[d.key];
          g ||
            ((g = {
              default: d.default,
              counters: [],
              contextKinds: [...c[d.key]],
            }),
            (o[d.key] = g));
          const v = { value: d.value, count: d.count };
          d.variation !== void 0 &&
            d.variation !== null &&
            (v.variation = d.variation),
            d.version !== void 0 && d.version !== null
              ? (v.version = d.version)
              : (v.unknown = !0),
            g.counters.push(v),
            (l = !1);
        }
        return l ? null : { startDate: n, endDate: r, features: o };
      }),
      (i.clearSummary = () => {
        (n = 0), (r = 0), (s = {}), (c = {});
      }),
      i
    );
  };
  function Ao(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function Oo(i) {
    return (i.startsWith("/") ? i.substring(1) : i)
      .split("/")
      .map((n) =>
        n.indexOf("~") >= 0 ? n.replace(/~1/g, "/").replace(/~0/g, "~") : n
      );
  }
  function Ro(i) {
    return !i.startsWith("/");
  }
  function Lo(i, n) {
    const r = Ro(i),
      s = Ro(n);
    if (r && s) return i === n;
    if (r) {
      const c = Oo(n);
      return c.length === 1 && i === c[0];
    }
    if (s) {
      const c = Oo(i);
      return c.length === 1 && n === c[0];
    }
    return i === n;
  }
  function Do(i) {
    return `/${Ao(i)}`;
  }
  var Ea = {
      cloneExcluding: function (i, n) {
        const r = [],
          s = {},
          c = [];
        for (
          r.push(
            ...Object.keys(i).map((o) => ({
              key: o,
              ptr: Do(o),
              source: i,
              parent: s,
              visited: [i],
            }))
          );
          r.length;

        ) {
          const o = r.pop();
          if (n.some((l) => Lo(l, o.ptr))) c.push(o.ptr);
          else {
            const l = o.source[o.key];
            if (l === null) o.parent[o.key] = l;
            else if (Array.isArray(l)) o.parent[o.key] = [...l];
            else if (typeof l == "object") {
              if (o.visited.includes(l)) continue;
              (o.parent[o.key] = {}),
                r.push(
                  ...Object.keys(l).map((d) => {
                    return {
                      key: d,
                      ptr: ((g = o.ptr), (v = Ao(d)), `${g}/${v}`),
                      source: l,
                      parent: o.parent[o.key],
                      visited: [...o.visited, l],
                    };
                    var g, v;
                  })
                );
            } else o.parent[o.key] = l;
          }
        }
        return { cloned: s, excluded: c.sort() };
      },
      compare: Lo,
      literalToReference: Do,
    },
    hd = function (i) {
      const n = {},
        r = i.allAttributesPrivate,
        s = i.privateAttributes || [],
        c = ["key", "kind", "_meta", "anonymous"],
        o = [
          "name",
          "ip",
          "firstName",
          "lastName",
          "email",
          "avatar",
          "country",
        ],
        l = (d) => {
          if (typeof d != "object" || d === null || Array.isArray(d)) return;
          const { cloned: g, excluded: v } = Ea.cloneExcluding(
            d,
            ((x) =>
              (r
                ? Object.keys(x)
                : [...s, ...((x._meta && x._meta.privateAttributes) || [])]
              ).filter((E) => !c.some((C) => Ea.compare(E, C))))(d)
          );
          return (
            (g.key = String(g.key)),
            v.length &&
              (g._meta || (g._meta = {}), (g._meta.redactedAttributes = v)),
            g._meta &&
              (delete g._meta.privateAttributes,
              Object.keys(g._meta).length === 0 && delete g._meta),
            g.anonymous !== void 0 && (g.anonymous = !!g.anonymous),
            g
          );
        };
      return (
        (n.filter = (d) =>
          d.kind === void 0 || d.kind === null
            ? l(
                ((g) => {
                  const v = { ...(g.custom || {}), kind: "user", key: g.key };
                  g.anonymous !== void 0 && (v.anonymous = !!g.anonymous);
                  for (const x of o)
                    delete v[x],
                      g[x] !== void 0 && g[x] !== null && (v[x] = String(g[x]));
                  return (
                    g.privateAttributeNames !== void 0 &&
                      g.privateAttributeNames !== null &&
                      ((v._meta = v._meta || {}),
                      (v._meta.privateAttributes = g.privateAttributeNames.map(
                        (x) =>
                          x.startsWith("/") ? Ea.literalToReference(x) : x
                      ))),
                    v
                  );
                })(d)
              )
            : d.kind === "multi"
            ? ((g) => {
                const v = { kind: g.kind },
                  x = Object.keys(g);
                for (const E of x)
                  if (E !== "kind") {
                    const C = l(g[E]);
                    C && (v[E] = C);
                  }
                return v;
              })(d)
            : l(d)),
        n
      );
    };
  const { getContextKeys: pd } = si;
  var gd = function (i, n, r, s = null, c = null, o = null) {
      const l = {},
        d = o || To(i, r, n),
        g = Q.appendUrlPath(n.eventsUrl, "/events/bulk/" + r),
        v = dd(),
        x = hd(n),
        E = n.samplingInterval,
        C = n.eventCapacity,
        D = n.flushInterval,
        Z = n.logger;
      let W,
        z = [],
        U = 0,
        $ = !1,
        se = !1;
      function pe() {
        return E === 0 || Math.floor(Math.random() * E) === 0;
      }
      function X(q) {
        const xe = Q.extend({}, q);
        return (
          q.kind === "identify"
            ? (xe.context = x.filter(q.context))
            : ((xe.contextKeys = pd(q.context, Z)), delete xe.context),
          q.kind === "feature" &&
            (delete xe.trackEvents, delete xe.debugEventsUntilDate),
          xe
        );
      }
      function we(q) {
        z.length < C
          ? (z.push(q), (se = !1))
          : (se || ((se = !0), Z.warn(Y.eventCapacityExceeded())),
            s && s.incrementDroppedEvents());
      }
      return (
        (l.enqueue = function (q) {
          if ($) return;
          let xe = !1,
            V = !1;
          var ie;
          if (
            (v.summarizeEvent(q),
            q.kind === "feature"
              ? pe() &&
                ((xe = !!q.trackEvents),
                (V =
                  !!(ie = q).debugEventsUntilDate &&
                  ie.debugEventsUntilDate > U &&
                  ie.debugEventsUntilDate > new Date().getTime()))
              : (xe = pe()),
            xe && we(X(q)),
            V)
          ) {
            const ke = Q.extend({}, q, { kind: "debug" });
            (ke.context = x.filter(ke.context)),
              delete ke.trackEvents,
              delete ke.debugEventsUntilDate,
              we(ke);
          }
        }),
        (l.flush = function () {
          if ($) return Promise.resolve();
          const q = z,
            xe = v.getSummary();
          return (
            v.clearSummary(),
            xe && ((xe.kind = "summary"), q.push(xe)),
            s && s.setEventsInLastBatch(q.length),
            q.length === 0
              ? Promise.resolve()
              : ((z = []),
                Z.debug(Y.debugPostingEvents(q.length)),
                d.sendEvents(q, g).then((V) => {
                  const ie = V && V[0];
                  ie &&
                    (ie.serverTime && (U = ie.serverTime),
                    Ne.isHttpErrorRecoverable(ie.status) || ($ = !0),
                    ie.status >= 400 &&
                      Q.onNextTick(() => {
                        c.maybeReportError(
                          new Ne.LDUnexpectedResponseError(
                            Y.httpErrorMessage(
                              ie.status,
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
          const q = () => {
            l.flush(), (W = setTimeout(q, D));
          };
          W = setTimeout(q, D);
        }),
        (l.stop = function () {
          clearTimeout(W);
        }),
        l
      );
    },
    vd = function (i) {
      const n = {},
        r = {};
      return (
        (n.on = function (s, c, o) {
          (r[s] = r[s] || []), (r[s] = r[s].concat({ handler: c, context: o }));
        }),
        (n.off = function (s, c, o) {
          if (r[s])
            for (let l = 0; l < r[s].length; l++)
              r[s][l].handler === c &&
                r[s][l].context === o &&
                (r[s] = r[s].slice(0, l).concat(r[s].slice(l + 1)));
        }),
        (n.emit = function (s) {
          if (!r[s]) return;
          const c = r[s].slice(0);
          for (let o = 0; o < c.length; o++)
            c[o].handler.apply(
              c[o].context,
              Array.prototype.slice.call(arguments, 1)
            );
        }),
        (n.getEvents = function () {
          return Object.keys(r);
        }),
        (n.getEventListenerCount = function (s) {
          return r[s] ? r[s].length : 0;
        }),
        (n.maybeReportError = function (s) {
          s &&
            (r.error ? this.emit("error", s) : (i || console).error(s.message));
        }),
        n
      );
    };
  const oi = "ready",
    ka = "initialized",
    Sa = "failed";
  var md = function (i) {
      let n = !1,
        r = !1,
        s = null,
        c = null;
      const o = new Promise((l) => {
        const d = () => {
          i.off(oi, d), l();
        };
        i.on(oi, d);
      }).catch(() => {});
      return {
        getInitializationPromise: () =>
          c ||
          (n
            ? Promise.resolve()
            : r
            ? Promise.reject(s)
            : ((c = new Promise((l, d) => {
                const g = () => {
                    i.off(ka, g), l();
                  },
                  v = (x) => {
                    i.off(Sa, v), d(x);
                  };
                i.on(ka, g), i.on(Sa, v);
              })),
              c)),
        getReadyPromise: () => o,
        signalSuccess: () => {
          n || r || ((n = !0), i.emit(ka), i.emit(oi));
        },
        signalFailure: (l) => {
          n || r || ((r = !0), (s = l), i.emit(Sa, l), i.emit(oi)),
            i.maybeReportError(l);
        },
      };
    },
    yd = function (i, n, r, s) {
      const c = {};
      function o() {
        let l = "";
        const d = s.getContext();
        return d && (l = r || Q.btoa(JSON.stringify(d))), "ld:" + n + ":" + l;
      }
      return (
        (c.loadFlags = () =>
          i.get(o()).then((l) => {
            if (l == null) return null;
            try {
              let d = JSON.parse(l);
              if (d) {
                const g = d.$schema;
                g === void 0 || g < 1
                  ? (d = Q.transformValuesToVersionedValues(d))
                  : delete d.$schema;
              }
              return d;
            } catch {
              return c.clearFlags().then(() => null);
            }
          })),
        (c.saveFlags = (l) => {
          const d = Q.extend({}, l, { $schema: 1 });
          return i.set(o(), JSON.stringify(d));
        }),
        (c.clearFlags = () => i.clear(o())),
        c
      );
    },
    _d = function (i, n) {
      const r = {};
      let s = !1;
      const c = (o) => {
        s || ((s = !0), n.warn(Y.localStorageUnavailable(o)));
      };
      return (
        (r.isEnabled = () => !!i),
        (r.get = (o) =>
          new Promise((l) => {
            i
              ? i
                  .get(o)
                  .then(l)
                  .catch((d) => {
                    c(d), l(void 0);
                  })
              : l(void 0);
          })),
        (r.set = (o, l) =>
          new Promise((d) => {
            i
              ? i
                  .set(o, l)
                  .then(() => d(!0))
                  .catch((g) => {
                    c(g), d(!1);
                  })
              : d(!1);
          })),
        (r.clear = (o) =>
          new Promise((l) => {
            i
              ? i
                  .clear(o)
                  .then(() => l(!0))
                  .catch((d) => {
                    c(d), l(!1);
                  })
              : l(!1);
          })),
        r
      );
    };
  const {
      appendUrlPath: Po,
      base64URLEncode: wd,
      objectHasOwnProperty: xd,
    } = Q,
    { getLDHeaders: bd, transformHeaders: Ed } = ba,
    { isHttpErrorRecoverable: kd } = Ne;
  var Sd = function (i, n, r, s) {
      const c = n.streamUrl,
        o = n.logger,
        l = {},
        d = Po(c, "/eval/" + r),
        g = n.useReport,
        v = n.evaluationReasons,
        x = n.streamReconnectDelay,
        E = bd(i, n);
      let C,
        D = !1,
        Z = null,
        W = null,
        z = null,
        U = null,
        $ = null,
        se = 0;
      function pe() {
        const ie =
          ((ke = (function () {
            const Ue = x * Math.pow(2, se);
            return Ue > 3e4 ? 3e4 : Ue;
          })()),
          ke - Math.trunc(0.5 * Math.random() * ke));
        var ke;
        return (se += 1), ie;
      }
      function X(ie) {
        if (ie.status && typeof ie.status == "number" && !kd(ie.status))
          return (
            xe(),
            o.error(Y.unrecoverableStreamError(ie)),
            void (W && (clearTimeout(W), (W = null)))
          );
        const ke = pe();
        D || (o.warn(Y.streamError(ie, ke)), (D = !0)), V(!1), xe(), we(ke);
      }
      function we(ie) {
        W || (ie ? (W = setTimeout(q, ie)) : q());
      }
      function q() {
        let ie;
        W = null;
        let ke = "";
        const Ue = { headers: E, readTimeoutMillis: 3e5 };
        if (i.eventSourceFactory) {
          U != null && (ke = "h=" + U),
            g
              ? i.eventSourceAllowsReport
                ? ((ie = d),
                  (Ue.method = "REPORT"),
                  (Ue.headers["Content-Type"] = "application/json"),
                  (Ue.body = JSON.stringify(z)))
                : ((ie = Po(c, "/ping/" + r)), (ke = ""))
              : (ie = d + "/" + wd(JSON.stringify(z))),
            (Ue.headers = Ed(Ue.headers, n)),
            v && (ke = ke + (ke ? "&" : "") + "withReasons=true"),
            (ie = ie + (ke ? "?" : "") + ke),
            xe(),
            o.info(Y.streamConnecting(ie)),
            (C = new Date().getTime()),
            (Z = i.eventSourceFactory(ie, Ue));
          for (const ct in $) xd($, ct) && Z.addEventListener(ct, $[ct]);
          (Z.onerror = X),
            (Z.onopen = () => {
              se = 0;
            });
        }
      }
      function xe() {
        Z && (o.info(Y.streamClosing()), Z.close(), (Z = null));
      }
      function V(ie) {
        C && s && s.recordStreamInit(C, !ie, new Date().getTime() - C),
          (C = null);
      }
      return (
        (l.connect = function (ie, ke, Ue) {
          (z = ie), (U = ke), ($ = {});
          for (const ct in Ue || {})
            $[ct] = function (Qe) {
              (D = !1), V(!0), Ue[ct] && Ue[ct](Qe);
            };
          we();
        }),
        (l.disconnect = function () {
          clearTimeout(W), (W = null), xe();
        }),
        (l.isConnected = function () {
          return !!(Z && i.eventSourceIsActive && i.eventSourceIsActive(Z));
        }),
        l
      );
    },
    Td = function (i) {
      let n, r, s, c;
      const o = {
        addPromise: (l, d) => {
          (n = l),
            r && r(),
            (r = d),
            l.then(
              (g) => {
                n === l && (s(g), i && i());
              },
              (g) => {
                n === l && (c(g), i && i());
              }
            );
        },
      };
      return (
        (o.resultPromise = new Promise((l, d) => {
          (s = l), (c = d);
        })),
        o
      );
    };
  const { transformHeaders: Id, getLDHeaders: Cd } = ba,
    Ta = "application/json";
  var Ad = function (i, n, r) {
      const s = n.baseUrl,
        c = n.useReport,
        o = n.evaluationReasons,
        l = n.logger,
        d = {},
        g = {};
      function v(x, E) {
        if (!i.httpRequest)
          return new Promise((U, $) => {
            $(new Ne.LDFlagFetchError(Y.httpUnavailable()));
          });
        const C = E ? "REPORT" : "GET",
          D = Cd(i, n);
        E && (D["Content-Type"] = Ta);
        let Z = g[x];
        Z ||
          ((Z = Td(() => {
            delete g[x];
          })),
          (g[x] = Z));
        const W = i.httpRequest(C, x, Id(D, n), E),
          z = W.promise.then(
            (U) => {
              if (U.status === 200) {
                if (
                  U.header("content-type") &&
                  U.header("content-type").substring(0, Ta.length) === Ta
                )
                  return JSON.parse(U.body);
                {
                  const $ = Y.invalidContentType(
                    U.header("content-type") || ""
                  );
                  return Promise.reject(new Ne.LDFlagFetchError($));
                }
              }
              return Promise.reject(
                (function ($) {
                  return $.status === 404
                    ? new Ne.LDInvalidEnvironmentIdError(
                        Y.environmentNotFound()
                      )
                    : new Ne.LDFlagFetchError(
                        Y.errorFetchingFlags($.statusText || String($.status))
                      );
                })(U)
              );
            },
            (U) => Promise.reject(new Ne.LDFlagFetchError(Y.networkError(U)))
          );
        return (
          Z.addPromise(z, () => {
            W.cancel && W.cancel();
          }),
          Z.resultPromise
        );
      }
      return (
        (d.fetchJSON = function (x) {
          return v(Q.appendUrlPath(s, x), null);
        }),
        (d.fetchFlagSettings = function (x, E) {
          let C,
            D,
            Z,
            W = "";
          return (
            c
              ? ((D = [s, "/sdk/evalx/", r, "/context"].join("")),
                (Z = JSON.stringify(x)))
              : ((C = Q.base64URLEncode(JSON.stringify(x))),
                (D = [s, "/sdk/evalx/", r, "/contexts/", C].join(""))),
            E && (W = "h=" + E),
            o && (W = W + (W ? "&" : "") + "withReasons=true"),
            (D = D + (W ? "?" : "") + W),
            l.debug(Y.debugPolling(D)),
            v(D, Z)
          );
        }),
        d
      );
    },
    Od = function (i, n) {
      const r = {};
      let s;
      return (
        (r.setContext = function (c) {
          (s = Q.sanitizeContext(c)), s && n && n(Q.clone(s));
        }),
        (r.getContext = function () {
          return s ? Q.clone(s) : null;
        }),
        i && r.setContext(i),
        r
      );
    };
  const { v1: Rd } = ya,
    { getContextKinds: Ld } = si;
  var Dd = function (i) {
    function n(s) {
      return s == null || s === "user"
        ? "ld:$anonUserId"
        : `ld:$contextKey:${s}`;
    }
    function r(s, c) {
      return c.key !== null && c.key !== void 0
        ? ((c.key = c.key.toString()), Promise.resolve(c))
        : c.anonymous
        ? (function (o) {
            return i.get(n(o));
          })(s).then((o) => {
            if (o) return (c.key = o), c;
            {
              const l = Rd();
              return (
                (c.key = l),
                (function (d, g) {
                  return i.set(n(g), d);
                })(l, s).then(() => c)
              );
            }
          })
        : Promise.reject(new Ne.LDInvalidUserError(Y.invalidContext()));
    }
    this.processContext = (s) => {
      if (!s)
        return Promise.reject(
          new Ne.LDInvalidUserError(Y.contextNotSpecified())
        );
      const c = Q.clone(s);
      if (s.kind === "multi") {
        const o = Ld(c);
        return Promise.all(o.map((l) => r(l, c[l]))).then(() => c);
      }
      return r(s.kind, c);
    };
  };
  const { v1: Pd } = ya,
    { baseOptionDefs: Ia } = xa,
    { appendUrlPath: Nd } = Q;
  var Ca = {
      DiagnosticId: function (i) {
        const n = { diagnosticId: Pd() };
        return (
          i && (n.sdkKeySuffix = i.length > 6 ? i.substring(i.length - 6) : i),
          n
        );
      },
      DiagnosticsAccumulator: function (i) {
        let n, r, s, c;
        function o(l) {
          (n = l), (r = 0), (s = 0), (c = []);
        }
        return (
          o(i),
          {
            getProps: () => ({
              dataSinceDate: n,
              droppedEvents: r,
              eventsInLastBatch: s,
              streamInits: c,
            }),
            setProps: (l) => {
              (n = l.dataSinceDate),
                (r = l.droppedEvents || 0),
                (s = l.eventsInLastBatch || 0),
                (c = l.streamInits || []);
            },
            incrementDroppedEvents: () => {
              r++;
            },
            setEventsInLastBatch: (l) => {
              s = l;
            },
            recordStreamInit: (l, d, g) => {
              const v = { timestamp: l, failed: d, durationMillis: g };
              c.push(v);
            },
            reset: o,
          }
        );
      },
      DiagnosticsManager: function (i, n, r, s, c, o, l) {
        const d = !!i.diagnosticUseCombinedEvent,
          g = "ld:" + c + ":$diagnostics",
          v = Nd(o.eventsUrl, "/events/diagnostic/" + c),
          x = o.diagnosticRecordingInterval,
          E = r;
        let C,
          D,
          Z = !!o.streaming;
        const W = {};
        function z() {
          return {
            sdk: se(),
            configuration: pe(),
            platform: i.diagnosticPlatformData,
          };
        }
        function U(X) {
          o.logger && o.logger.debug(Y.debugPostingDiagnosticEvent(X)),
            s
              .sendEvents(X, v, !0)
              .then(() => {})
              .catch(() => {});
        }
        function $() {
          U(
            (function () {
              const X = new Date().getTime();
              let we = {
                kind: d ? "diagnostic-combined" : "diagnostic",
                id: l,
                creationDate: X,
                ...E.getProps(),
              };
              return d && (we = { ...we, ...z() }), E.reset(X), we;
            })()
          ),
            (D = setTimeout($, x)),
            (C = new Date().getTime()),
            d &&
              (function () {
                if (n.isEnabled()) {
                  const X = { ...E.getProps() };
                  n.set(g, JSON.stringify(X));
                }
              })();
        }
        function se() {
          const X = { ...i.diagnosticSdkData };
          return (
            o.wrapperName && (X.wrapperName = o.wrapperName),
            o.wrapperVersion && (X.wrapperVersion = o.wrapperVersion),
            X
          );
        }
        function pe() {
          return {
            customBaseURI: o.baseUrl !== Ia.baseUrl.default,
            customStreamURI: o.streamUrl !== Ia.streamUrl.default,
            customEventsURI: o.eventsUrl !== Ia.eventsUrl.default,
            eventsCapacity: o.eventCapacity,
            eventsFlushIntervalMillis: o.flushInterval,
            reconnectTimeMillis: o.streamReconnectDelay,
            streamingDisabled: !Z,
            allAttributesPrivate: !!o.allAttributesPrivate,
            diagnosticRecordingIntervalMillis: o.diagnosticRecordingInterval,
            usingSecureMode: !!o.hash,
            bootstrapMode: !!o.bootstrap,
            fetchGoalsDisabled: !o.fetchGoals,
            sendEventsOnlyForVariation: !!o.sendEventsOnlyForVariation,
          };
        }
        return (
          (W.start = () => {
            d
              ? (function (X) {
                  if (!n.isEnabled()) return X(!1);
                  n.get(g)
                    .then((we) => {
                      if (we)
                        try {
                          const q = JSON.parse(we);
                          E.setProps(q), (C = q.dataSinceDate);
                        } catch {}
                      X(!0);
                    })
                    .catch(() => {
                      X(!1);
                    });
                })((X) => {
                  if (X) {
                    const we = (C || 0) + x,
                      q = new Date().getTime();
                    q >= we ? $() : (D = setTimeout($, we - q));
                  } else
                    Math.floor(4 * Math.random()) === 0
                      ? $()
                      : (D = setTimeout($, x));
                })
              : (U({
                  kind: "diagnostic-init",
                  id: l,
                  creationDate: E.getProps().dataSinceDate,
                  ...z(),
                }),
                (D = setTimeout($, x)));
          }),
          (W.stop = () => {
            D && clearTimeout(D);
          }),
          (W.setStreaming = (X) => {
            Z = X;
          }),
          W
        );
      },
    },
    Ud = function (i, n) {
      let r = !1;
      const s = {
        type: i.type,
        name: i.name,
        method: (...c) => {
          try {
            i.method(...c);
          } catch {
            r || ((r = !0), n.warn(Y.inspectorMethodError(s.type, s.name)));
          }
        },
      };
      return s;
    };
  const { onNextTick: ui } = Q,
    rt = {
      flagUsed: "flag-used",
      flagDetailsChanged: "flag-details-changed",
      flagDetailChanged: "flag-detail-changed",
      clientIdentityChanged: "client-identity-changed",
    };
  Object.freeze(rt);
  var Md = {
    InspectorTypes: rt,
    InspectorManager: function (i, n) {
      const r = {},
        s = {
          [rt.flagUsed]: [],
          [rt.flagDetailsChanged]: [],
          [rt.flagDetailChanged]: [],
          [rt.clientIdentityChanged]: [],
        },
        c = i && i.map((o) => Ud(o, n));
      return (
        c &&
          c.forEach((o) => {
            Object.prototype.hasOwnProperty.call(s, o.type)
              ? s[o.type].push(o)
              : n.warn(Y.invalidInspector(o.type, o.name));
          }),
        (r.hasListeners = (o) => s[o] && s[o].length),
        (r.onFlagUsed = (o, l, d) => {
          s[rt.flagUsed].length &&
            ui(() => {
              s[rt.flagUsed].forEach((g) => g.method(o, l, d));
            });
        }),
        (r.onFlags = (o) => {
          s[rt.flagDetailsChanged].length &&
            ui(() => {
              s[rt.flagDetailsChanged].forEach((l) => l.method(o));
            });
        }),
        (r.onFlagChanged = (o, l) => {
          s[rt.flagDetailChanged].length &&
            ui(() => {
              s[rt.flagDetailChanged].forEach((d) => d.method(o, l));
            });
        }),
        (r.onIdentityChanged = (o) => {
          s[rt.clientIdentityChanged].length &&
            ui(() => {
              s[rt.clientIdentityChanged].forEach((l) => l.method(o));
            });
        }),
        r
      );
    },
  };
  const { commonBasicLogger: No } = _a,
    { checkContext: Zd, getContextKeys: Fd } = si,
    { InspectorTypes: ci, InspectorManager: Bd } = Md,
    Er = "change",
    Uo = "internal-change";
  var Mo = {
      initialize: function (i, n, r, s, c) {
        const o = (function () {
            return r && r.logger
              ? r.logger
              : (c && c.logger && c.logger.default) || No("warn");
          })(),
          l = vd(o),
          d = md(l),
          g = xa.validate(r, l, c, o),
          v = Bd(g.inspectors, o),
          x = g.sendEvents;
        let E = i,
          C = g.hash;
        const D = _d(s.localStorage, o),
          Z = To(s, E, g),
          W = g.sendEvents && !g.diagnosticOptOut,
          z = W ? Ca.DiagnosticId(E) : null,
          U = W ? Ca.DiagnosticsAccumulator(new Date().getTime()) : null,
          $ = W ? Ca.DiagnosticsManager(s, D, U, Z, E, g, z) : null,
          se = Sd(s, g, E, U),
          pe = g.eventProcessor || gd(s, g, E, U, l, Z),
          X = Ad(s, g, E);
        let we,
          q,
          xe,
          V = {},
          ie = g.streaming,
          ke = !1,
          Ue = !1,
          ct = !0;
        const Qe = g.stateProvider,
          Me = Od(null, function (I) {
            (function (L) {
              Qe ||
                (L &&
                  lt({
                    kind: "identify",
                    context: L,
                    creationDate: new Date().getTime(),
                  }));
            })(I),
              v.hasListeners(ci.clientIdentityChanged) &&
                v.onIdentityChanged(Me.getContext());
          }),
          fi = new Dd(D),
          it = D.isEnabled() ? yd(D, E, C, Me) : null;
        function lt(I) {
          E &&
            ((Qe && Qe.enqueueEvent && Qe.enqueueEvent(I)) ||
              (I.context
                ? ((ct = !1),
                  !x ||
                    Ue ||
                    s.isDoNotTrack() ||
                    (o.debug(Y.debugEnqueueingEvent(I.kind)), pe.enqueue(I)))
                : ct && (o.warn(Y.eventWithoutContext()), (ct = !1))));
        }
        function di(I, L) {
          v.hasListeners(ci.flagDetailChanged) && v.onFlagChanged(I.key, hn(L));
        }
        function On() {
          v.hasListeners(ci.flagDetailsChanged) &&
            v.onFlags(
              Object.entries(V)
                .map(([I, L]) => ({ key: I, detail: hn(L) }))
                .reduce((I, L) => ((I[L.key] = L.detail), I), {})
            );
        }
        function ft(I, L, O, ge) {
          const ye = Me.getContext(),
            be = new Date(),
            oe = {
              kind: "feature",
              key: I,
              context: ye,
              value: L ? L.value : null,
              variation: L ? L.variationIndex : null,
              default: O,
              creationDate: be.getTime(),
            },
            Le = V[I];
          Le &&
            ((oe.version = Le.flagVersion ? Le.flagVersion : Le.version),
            (oe.trackEvents = Le.trackEvents),
            (oe.debugEventsUntilDate = Le.debugEventsUntilDate)),
            (ge || (Le && Le.trackReason)) && L && (oe.reason = L.reason),
            lt(oe);
        }
        function hi(I) {
          return Zd(I, !1)
            ? Promise.resolve(I)
            : Promise.reject(new Ne.LDInvalidUserError(Y.invalidContext()));
        }
        function Sr(I, L, O, ge, ye) {
          let be;
          if (V && Q.objectHasOwnProperty(V, I) && V[I] && !V[I].deleted) {
            const oe = V[I];
            (be = hn(oe)),
              (oe.value !== null && oe.value !== void 0) || (be.value = L);
          } else
            be = {
              value: L,
              variationIndex: null,
              reason: { kind: "ERROR", errorKind: "FLAG_NOT_FOUND" },
            };
          return (
            O && ft(I, be, L, ge),
            ye ||
              (function (oe, Le) {
                v.hasListeners(ci.flagUsed) &&
                  v.onFlagUsed(oe, Le, Me.getContext());
              })(I, be),
            be
          );
        }
        function hn(I) {
          return {
            value: I.value,
            variationIndex: I.variation === void 0 ? null : I.variation,
            reason: I.reason || null,
          };
        }
        function jt() {
          if (((q = !0), !Me.getContext())) return;
          const I = (L) => {
            try {
              return JSON.parse(L);
            } catch {
              return void l.maybeReportError(
                new Ne.LDInvalidDataError(Y.invalidData())
              );
            }
          };
          se.connect(Me.getContext(), C, {
            ping: function () {
              o.debug(Y.debugStreamPing());
              const L = Me.getContext();
              X.fetchFlagSettings(L, C)
                .then((O) => {
                  Q.deepEquals(L, Me.getContext()) && gn(O || {});
                })
                .catch((O) => {
                  l.maybeReportError(
                    new Ne.LDFlagFetchError(Y.errorFetchingFlags(O))
                  );
                });
            },
            put: function (L) {
              const O = I(L.data);
              O && (o.debug(Y.debugStreamPut()), gn(O));
            },
            patch: function (L) {
              const O = I(L.data);
              if (!O) return;
              const ge = V[O.key];
              if (!ge || !ge.version || !O.version || ge.version < O.version) {
                o.debug(Y.debugStreamPatch(O.key));
                const ye = {},
                  be = Q.extend({}, O);
                delete be.key, (V[O.key] = be);
                const oe = hn(be);
                (ye[O.key] = ge
                  ? { previous: ge.value, current: oe }
                  : { current: oe }),
                  Kt(ye),
                  di(O, be);
              } else o.debug(Y.debugStreamPatchIgnored(O.key));
            },
            delete: function (L) {
              const O = I(L.data);
              if (O)
                if (!V[O.key] || V[O.key].version < O.version) {
                  o.debug(Y.debugStreamDelete(O.key));
                  const ge = {};
                  V[O.key] &&
                    !V[O.key].deleted &&
                    (ge[O.key] = { previous: V[O.key].value }),
                    (V[O.key] = { version: O.version, deleted: !0 }),
                    di(O, V[O.key]),
                    Kt(ge);
                } else o.debug(Y.debugStreamDeleteIgnored(O.key));
            },
          });
        }
        function pn() {
          q && (se.disconnect(), (q = !1));
        }
        function gn(I) {
          const L = {};
          if (!I) return Promise.resolve();
          for (const O in V)
            Q.objectHasOwnProperty(V, O) &&
              V[O] &&
              (I[O] && !Q.deepEquals(I[O].value, V[O].value)
                ? (L[O] = { previous: V[O].value, current: hn(I[O]) })
                : (I[O] && !I[O].deleted) || (L[O] = { previous: V[O].value }));
          for (const O in I)
            Q.objectHasOwnProperty(I, O) &&
              I[O] &&
              (!V[O] || V[O].deleted) &&
              (L[O] = { current: hn(I[O]) });
          return (V = { ...I }), On(), Kt(L).catch(() => {});
        }
        function Kt(I) {
          const L = Object.keys(I);
          if (L.length > 0) {
            const O = {};
            L.forEach((ge) => {
              const ye = I[ge].current,
                be = ye ? ye.value : void 0,
                oe = I[ge].previous;
              l.emit(Er + ":" + ge, be, oe),
                (O[ge] = ye ? { current: be, previous: oe } : { previous: oe });
            }),
              l.emit(Er, O),
              l.emit(Uo, V),
              g.sendEventsOnlyForVariation ||
                Qe ||
                L.forEach((ge) => {
                  ft(ge, I[ge].current);
                });
          }
          return we && it ? it.saveFlags(V) : Promise.resolve();
        }
        function Gt() {
          const I = ie || (xe && ie === void 0);
          I && !q ? jt() : !I && q && pn(), $ && $.setStreaming(I);
        }
        function Tr(I) {
          return I === Er || I.substr(0, Er.length + 1) === Er + ":";
        }
        if (
          (typeof g.bootstrap == "string" &&
            g.bootstrap.toUpperCase() === "LOCALSTORAGE" &&
            (it ? (we = !0) : o.warn(Y.localStorageUnavailable())),
          typeof g.bootstrap == "object" &&
            (V = (function (I) {
              const L = Object.keys(I),
                O = "$flagsState",
                ge = "$valid",
                ye = I[O];
              !ye && L.length && o.warn(Y.bootstrapOldFormat()),
                I[ge] === !1 && o.warn(Y.bootstrapInvalid());
              const be = {};
              return (
                L.forEach((oe) => {
                  if (oe !== O && oe !== ge) {
                    let Le = { value: I[oe] };
                    ye && ye[oe]
                      ? (Le = Q.extend(Le, ye[oe]))
                      : (Le.version = 0),
                      (be[oe] = Le);
                  }
                }),
                be
              );
            })(g.bootstrap)),
          Qe)
        ) {
          const I = Qe.getInitialState();
          I ? Rn(I) : Qe.on("init", Rn),
            Qe.on("update", function (L) {
              L.context && Me.setContext(L.context), L.flags && gn(L.flags);
            });
        } else
          (function () {
            return i
              ? fi
                  .processContext(n)
                  .then(hi)
                  .then(
                    (I) => (
                      Me.setContext(I),
                      typeof g.bootstrap == "object"
                        ? Wt()
                        : we
                        ? it.loadFlags().then((L) =>
                            L == null
                              ? ((V = {}),
                                X.fetchFlagSettings(Me.getContext(), C)
                                  .then((O) => gn(O || {}))
                                  .then(Wt)
                                  .catch((O) => {
                                    jn(
                                      new Ne.LDFlagFetchError(
                                        Y.errorFetchingFlags(O)
                                      )
                                    );
                                  }))
                              : ((V = L),
                                Q.onNextTick(Wt),
                                X.fetchFlagSettings(Me.getContext(), C)
                                  .then((O) => gn(O))
                                  .catch((O) => l.maybeReportError(O)))
                          )
                        : X.fetchFlagSettings(Me.getContext(), C)
                            .then((L) => {
                              (V = L || {}), On(), Wt();
                            })
                            .catch((L) => {
                              (V = {}), jn(L);
                            })
                    )
                  )
              : Promise.reject(
                  new Ne.LDInvalidEnvironmentIdError(
                    Y.environmentNotSpecified()
                  )
                );
          })().catch(jn);
        function Rn(I) {
          (E = I.environment),
            Me.setContext(I.context),
            (V = { ...I.flags }),
            Q.onNextTick(Wt);
        }
        function Wt() {
          o.info(Y.clientInitialized()), (ke = !0), Gt(), d.signalSuccess();
        }
        function jn(I) {
          d.signalFailure(I);
        }
        return {
          client: {
            waitForInitialization: () => d.getInitializationPromise(),
            waitUntilReady: () => d.getReadyPromise(),
            identify: function (I, L, O) {
              if (Ue) return Q.wrapPromiseCallback(Promise.resolve({}), O);
              if (Qe)
                return (
                  o.warn(Y.identifyDisabled()),
                  Q.wrapPromiseCallback(
                    Promise.resolve(Q.transformVersionedValuesToValues(V)),
                    O
                  )
                );
              const ge = we && it ? it.clearFlags() : Promise.resolve();
              return Q.wrapPromiseCallback(
                ge
                  .then(() => fi.processContext(I))
                  .then(hi)
                  .then((ye) =>
                    X.fetchFlagSettings(ye, L).then((be) => {
                      const oe = Q.transformVersionedValuesToValues(be);
                      return (
                        Me.setContext(ye),
                        (C = L),
                        be ? gn(be).then(() => oe) : oe
                      );
                    })
                  )
                  .then((ye) => (q && jt(), ye))
                  .catch((ye) => (l.maybeReportError(ye), Promise.reject(ye))),
                O
              );
            },
            getContext: function () {
              return Me.getContext();
            },
            variation: function (I, L) {
              return Sr(I, L, !0, !1, !1).value;
            },
            variationDetail: function (I, L) {
              return Sr(I, L, !0, !0, !1);
            },
            track: function (I, L, O) {
              if (typeof I != "string")
                return void l.maybeReportError(
                  new Ne.LDInvalidEventKeyError(Y.unknownCustomEventKey(I))
                );
              s.customEventFilter &&
                !s.customEventFilter(I) &&
                o.warn(Y.unknownCustomEventKey(I));
              const ge = Me.getContext(),
                ye = {
                  kind: "custom",
                  key: I,
                  context: ge,
                  url: s.getCurrentUrl(),
                  creationDate: new Date().getTime(),
                };
              ge &&
                ge.anonymous &&
                (ye.contextKind = ge.anonymous ? "anonymousUser" : "user"),
                L != null && (ye.data = L),
                O != null && (ye.metricValue = O),
                lt(ye);
            },
            on: function (I, L, O) {
              Tr(I)
                ? ((xe = !0), ke && Gt(), l.on(I, L, O))
                : l.on(...arguments);
            },
            off: function (I) {
              if ((l.off(...arguments), Tr(I))) {
                let L = !1;
                l.getEvents().forEach((O) => {
                  Tr(O) && l.getEventListenerCount(O) > 0 && (L = !0);
                }),
                  L || ((xe = !1), q && ie === void 0 && pn());
              }
            },
            setStreaming: function (I) {
              const L = I === null ? void 0 : I;
              L !== ie && ((ie = L), Gt());
            },
            flush: function (I) {
              return Q.wrapPromiseCallback(
                x ? pe.flush() : Promise.resolve(),
                I
              );
            },
            allFlags: function () {
              const I = {};
              if (!V) return I;
              for (const L in V)
                Q.objectHasOwnProperty(V, L) &&
                  !V[L].deleted &&
                  (I[L] = Sr(
                    L,
                    null,
                    !g.sendEventsOnlyForVariation,
                    !1,
                    !0
                  ).value);
              return I;
            },
            close: function (I) {
              if (Ue) return Q.wrapPromiseCallback(Promise.resolve(), I);
              const L = () => {
                  (Ue = !0), (V = {});
                },
                O = Promise.resolve()
                  .then(() => {
                    if ((pn(), $ && $.stop(), x)) return pe.stop(), pe.flush();
                  })
                  .then(L)
                  .catch(L);
              return Q.wrapPromiseCallback(O, I);
            },
          },
          options: g,
          emitter: l,
          ident: Me,
          logger: o,
          requestor: X,
          start: function () {
            x && ($ && $.start(), pe.start());
          },
          enqueueEvent: lt,
          getFlagsInternal: function () {
            return V;
          },
          getEnvironmentId: () => E,
          internalChangeEventName: Uo,
        };
      },
      commonBasicLogger: No,
      errors: Ne,
      messages: Y,
      utils: Q,
      getContextKeys: Fd,
    },
    Wd = Mo.initialize,
    $d = Mo.errors;
  function Zo(i, n) {
    var r = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(i);
      n &&
        (s = s.filter(function (c) {
          return Object.getOwnPropertyDescriptor(i, c).enumerable;
        })),
        r.push.apply(r, s);
    }
    return r;
  }
  function Fo(i) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n] != null ? arguments[n] : {};
      n % 2
        ? Zo(Object(r), !0).forEach(function (s) {
            Hd(i, s, r[s]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
        : Zo(Object(r)).forEach(function (s) {
            Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(r, s));
          });
    }
    return i;
  }
  function Hd(i, n, r) {
    return (
      (n = (function (s) {
        var c = (function (o, l) {
          if (typeof o != "object" || o === null) return o;
          var d = o[Symbol.toPrimitive];
          if (d !== void 0) {
            var g = d.call(o, l || "default");
            if (typeof g != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (l === "string" ? String : Number)(o);
        })(s, "string");
        return typeof c == "symbol" ? c : String(c);
      })(n)) in i
        ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (i[n] = r),
      i
    );
  }
  var Bo = {
    promise: Promise.resolve({
      status: 200,
      header: function () {
        return null;
      },
      body: null,
    }),
  };
  function Vd(i, n, r, s, c) {
    if (
      c &&
      !(function () {
        var v = window.navigator && window.navigator.userAgent;
        if (v) {
          var x = v.match(/Chrom(e|ium)\/([0-9]+)\./);
          if (x) return parseInt(x[2], 10) < 73;
        }
        return !0;
      })()
    )
      return Bo;
    var o = new window.XMLHttpRequest();
    for (var l in (o.open(i, n, !c), r || {}))
      Object.prototype.hasOwnProperty.call(r, l) && o.setRequestHeader(l, r[l]);
    if (c) return o.send(s), Bo;
    var d,
      g = new Promise(function (v, x) {
        o.addEventListener("load", function () {
          d ||
            v({
              status: o.status,
              header: function (E) {
                return o.getResponseHeader(E);
              },
              body: o.responseText,
            });
        }),
          o.addEventListener("error", function () {
            d || x(new Error());
          }),
          o.send(s);
      });
    return {
      promise: g,
      cancel: function () {
        (d = !0), o.abort();
      },
    };
  }
  var Aa = (i) => {
    if (typeof i != "string") throw new TypeError("Expected a string");
    return i.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
  function zd(i, n, r, s) {
    var c,
      o,
      l = (
        (i.kind === "substring" || i.kind === "regex") && s.includes("/")
          ? n
          : n.replace(s, "")
      ).replace(r, "");
    switch (i.kind) {
      case "exact":
        (o = n), (c = new RegExp("^" + Aa(i.url) + "/?$"));
        break;
      case "canonical":
        (o = l), (c = new RegExp("^" + Aa(i.url) + "/?$"));
        break;
      case "substring":
        (o = l), (c = new RegExp(".*" + Aa(i.substring) + ".*$"));
        break;
      case "regex":
        (o = l), (c = new RegExp(i.pattern));
        break;
      default:
        return !1;
    }
    return c.test(o);
  }
  function Wo(i, n) {
    for (var r = {}, s = null, c = [], o = 0; o < i.length; o++)
      for (var l = i[o], d = l.urls || [], g = 0; g < d.length; g++)
        if (
          zd(
            d[g],
            window.location.href,
            window.location.search,
            window.location.hash
          )
        ) {
          l.kind === "pageview"
            ? n("pageview", l)
            : (c.push(l), n("click_pageview", l));
          break;
        }
    return (
      c.length > 0 &&
        ((s = function (v) {
          for (
            var x = (function (C, D) {
                for (var Z = [], W = 0; W < D.length; W++)
                  for (
                    var z = C.target,
                      U = D[W],
                      $ = U.selector,
                      se = document.querySelectorAll($);
                    z && se.length > 0;

                  ) {
                    for (var pe = 0; pe < se.length; pe++)
                      z === se[pe] && Z.push(U);
                    z = z.parentNode;
                  }
                return Z;
              })(v, c),
              E = 0;
            E < x.length;
            E++
          )
            n("click", x[E]);
        }),
        document.addEventListener("click", s)),
      (r.dispose = function () {
        document.removeEventListener("click", s);
      }),
      r
    );
  }
  var qd = 300;
  function jd(i, n) {
    var r, s;
    function c() {
      s && s.dispose(), r && r.length && (s = Wo(r, o));
    }
    function o(l, d) {
      var g = i.ident.getContext(),
        v = {
          kind: l,
          key: d.key,
          data: null,
          url: window.location.href,
          creationDate: new Date().getTime(),
          context: g,
        };
      return l === "click" && (v.selector = d.selector), i.enqueueEvent(v);
    }
    return (
      i.requestor
        .fetchJSON("/sdk/goals/" + i.getEnvironmentId())
        .then(function (l) {
          l &&
            l.length > 0 &&
            ((s = Wo((r = l), o)),
            (function (d, g) {
              var v,
                x = window.location.href;
              function E() {
                (v = window.location.href) !== x && ((x = v), g());
              }
              (function C(D, Z) {
                D(),
                  setTimeout(function () {
                    C(D, Z);
                  }, Z);
              })(E, d),
                window.history && window.history.pushState
                  ? window.addEventListener("popstate", E)
                  : window.addEventListener("hashchange", E);
            })(qd, c)),
            n();
        })
        .catch(function (l) {
          i.emitter.maybeReportError(
            new $d.LDUnexpectedResponseError((l && l.message, l.message))
          ),
            n();
        }),
      {}
    );
  }
  var li = "goalsReady",
    Kd = {
      fetchGoals: { default: !0 },
      hash: { type: "string" },
      eventProcessor: { type: "object" },
      eventUrlTransformer: { type: "function" },
      disableSyncEventPost: { default: !1 },
    };
  function Gd(i, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = (function (x) {
        var E,
          C = {
            userAgentHeaderName: "X-LaunchDarkly-User-Agent",
            synchronousFlush: !1,
          };
        if (window.XMLHttpRequest) {
          var D = x && x.disableSyncEventPost;
          C.httpRequest = function (U, $, se, pe) {
            var X = C.synchronousFlush & !D;
            return (C.synchronousFlush = !1), Vd(U, $, se, pe, X);
          };
        }
        (C.httpAllowsPost = function () {
          return (
            E === void 0 &&
              (E =
                !!window.XMLHttpRequest &&
                "withCredentials" in new window.XMLHttpRequest()),
            E
          );
        }),
          (C.httpFallbackPing = function (U) {
            new window.Image().src = U;
          });
        var Z,
          W = x && x.eventUrlTransformer;
        (C.getCurrentUrl = function () {
          return W ? W(window.location.href) : window.location.href;
        }),
          (C.isDoNotTrack = function () {
            var U;
            return (
              (U =
                window.navigator && window.navigator.doNotTrack !== void 0
                  ? window.navigator.doNotTrack
                  : window.navigator && window.navigator.msDoNotTrack !== void 0
                  ? window.navigator.msDoNotTrack
                  : window.doNotTrack) === 1 ||
              U === !0 ||
              U === "1" ||
              U === "yes"
            );
          });
        try {
          window.localStorage &&
            (C.localStorage = {
              get: function (U) {
                return new Promise(function ($) {
                  $(window.localStorage.getItem(U));
                });
              },
              set: function (U, $) {
                return new Promise(function (se) {
                  window.localStorage.setItem(U, $), se();
                });
              },
              clear: function (U) {
                return new Promise(function ($) {
                  window.localStorage.removeItem(U), $();
                });
              },
            });
        } catch {
          C.localStorage = null;
        }
        if (
          (x &&
          x.useReport &&
          typeof window.EventSourcePolyfill == "function" &&
          window.EventSourcePolyfill.supportedOptions &&
          window.EventSourcePolyfill.supportedOptions.method
            ? ((C.eventSourceAllowsReport = !0),
              (Z = window.EventSourcePolyfill))
            : ((C.eventSourceAllowsReport = !1), (Z = window.EventSource)),
          window.EventSource)
        ) {
          var z = 3e5;
          (C.eventSourceFactory = function (U, $) {
            var se = Fo(
              Fo(
                {},
                {
                  heartbeatTimeout: z,
                  silentTimeout: z,
                  skipDefaultHeaders: !0,
                }
              ),
              $
            );
            return new Z(U, se);
          }),
            (C.eventSourceIsActive = function (U) {
              return (
                U.readyState === window.EventSource.OPEN ||
                U.readyState === window.EventSource.CONNECTING
              );
            });
        }
        return (
          (C.userAgent = "JSClient"),
          (C.version = "3.1.3"),
          (C.diagnosticSdkData = { name: "js-client-sdk", version: "3.1.3" }),
          (C.diagnosticPlatformData = { name: "JS" }),
          (C.diagnosticUseCombinedEvent = !0),
          C
        );
      })(r),
      c = Wd(i, n, r, s, Kd),
      o = c.client,
      l = c.options,
      d = c.emitter,
      g = new Promise(function (x) {
        var E = d.on(li, function () {
          d.off(li, E), x();
        });
      });
    (o.waitUntilGoalsReady = function () {
      return g;
    }),
      l.fetchGoals
        ? jd(c, function () {
            return d.emit(li);
          })
        : d.emit(li),
      document.readyState !== "complete"
        ? window.addEventListener("load", c.start)
        : c.start();
    var v = function () {
      (s.synchronousFlush = !0),
        o.flush().catch(function () {}),
        (s.synchronousFlush = !1);
    };
    return (
      document.addEventListener("visibilitychange", function () {
        document.visibilityState === "hidden" && v();
      }),
      window.addEventListener("pagehide", v),
      o
    );
  }
  var kr =
      typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : typeof self < "u"
        ? self
        : {},
    Oa = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ (function (i, n) {
    (function () {
      var r,
        s = "4.17.21",
        c = 200,
        o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        l = "Expected a function",
        d = "Invalid `variable` option passed into `_.template`",
        g = "__lodash_hash_undefined__",
        v = 500,
        x = "__lodash_placeholder__",
        E = 1,
        C = 2,
        D = 4,
        Z = 1,
        W = 2,
        z = 1,
        U = 2,
        $ = 4,
        se = 8,
        pe = 16,
        X = 32,
        we = 64,
        q = 128,
        xe = 256,
        V = 512,
        ie = 30,
        ke = "...",
        Ue = 800,
        ct = 16,
        Qe = 1,
        Me = 2,
        fi = 3,
        it = 1 / 0,
        lt = 9007199254740991,
        di = 17976931348623157e292,
        On = 0 / 0,
        ft = 4294967295,
        hi = ft - 1,
        Sr = ft >>> 1,
        hn = [
          ["ary", q],
          ["bind", z],
          ["bindKey", U],
          ["curry", se],
          ["curryRight", pe],
          ["flip", V],
          ["partial", X],
          ["partialRight", we],
          ["rearg", xe],
        ],
        jt = "[object Arguments]",
        pn = "[object Array]",
        gn = "[object AsyncFunction]",
        Kt = "[object Boolean]",
        Gt = "[object Date]",
        Tr = "[object DOMException]",
        Rn = "[object Error]",
        Wt = "[object Function]",
        jn = "[object GeneratorFunction]",
        wt = "[object Map]",
        I = "[object Number]",
        L = "[object Null]",
        O = "[object Object]",
        ge = "[object Promise]",
        ye = "[object Proxy]",
        be = "[object RegExp]",
        oe = "[object Set]",
        Le = "[object String]",
        pi = "[object Symbol]",
        rh = "[object Undefined]",
        Ir = "[object WeakMap]",
        ih = "[object WeakSet]",
        Cr = "[object ArrayBuffer]",
        Kn = "[object DataView]",
        La = "[object Float32Array]",
        Da = "[object Float64Array]",
        Pa = "[object Int8Array]",
        Na = "[object Int16Array]",
        Ua = "[object Int32Array]",
        Ma = "[object Uint8Array]",
        Za = "[object Uint8ClampedArray]",
        Fa = "[object Uint16Array]",
        Ba = "[object Uint32Array]",
        ah = /\b__p \+= '';/g,
        sh = /\b(__p \+=) '' \+/g,
        oh = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        zo = /&(?:amp|lt|gt|quot|#39);/g,
        qo = /[&<>"']/g,
        uh = RegExp(zo.source),
        ch = RegExp(qo.source),
        lh = /<%-([\s\S]+?)%>/g,
        fh = /<%([\s\S]+?)%>/g,
        jo = /<%=([\s\S]+?)%>/g,
        dh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        hh = /^\w*$/,
        ph =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Wa = /[\\^$.*+?()[\]{}|]/g,
        gh = RegExp(Wa.source),
        $a = /^\s+/,
        vh = /\s/,
        mh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        yh = /\{\n\/\* \[wrapped with (.+)\] \*/,
        _h = /,? & /,
        wh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        xh = /[()=,{}\[\]\/\s]/,
        bh = /\\(\\)?/g,
        Eh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Ko = /\w*$/,
        kh = /^[-+]0x[0-9a-f]+$/i,
        Sh = /^0b[01]+$/i,
        Th = /^\[object .+?Constructor\]$/,
        Ih = /^0o[0-7]+$/i,
        Ch = /^(?:0|[1-9]\d*)$/,
        Ah = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        gi = /($^)/,
        Oh = /['\n\r\u2028\u2029\\]/g,
        vi = "\\ud800-\\udfff",
        Rh = "\\u0300-\\u036f",
        Lh = "\\ufe20-\\ufe2f",
        Dh = "\\u20d0-\\u20ff",
        Go = Rh + Lh + Dh,
        Jo = "\\u2700-\\u27bf",
        Yo = "a-z\\xdf-\\xf6\\xf8-\\xff",
        Ph = "\\xac\\xb1\\xd7\\xf7",
        Nh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        Uh = "\\u2000-\\u206f",
        Mh =
          " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        Xo = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        Qo = "\\ufe0e\\ufe0f",
        eu = Ph + Nh + Uh + Mh,
        Ha = "['\u2019]",
        Zh = "[" + vi + "]",
        tu = "[" + eu + "]",
        mi = "[" + Go + "]",
        nu = "\\d+",
        Fh = "[" + Jo + "]",
        ru = "[" + Yo + "]",
        iu = "[^" + vi + eu + nu + Jo + Yo + Xo + "]",
        Va = "\\ud83c[\\udffb-\\udfff]",
        Bh = "(?:" + mi + "|" + Va + ")",
        au = "[^" + vi + "]",
        za = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        qa = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Gn = "[" + Xo + "]",
        su = "\\u200d",
        ou = "(?:" + ru + "|" + iu + ")",
        Wh = "(?:" + Gn + "|" + iu + ")",
        uu = "(?:" + Ha + "(?:d|ll|m|re|s|t|ve))?",
        cu = "(?:" + Ha + "(?:D|LL|M|RE|S|T|VE))?",
        lu = Bh + "?",
        fu = "[" + Qo + "]?",
        $h = "(?:" + su + "(?:" + [au, za, qa].join("|") + ")" + fu + lu + ")*",
        Hh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
        Vh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
        du = fu + lu + $h,
        zh = "(?:" + [Fh, za, qa].join("|") + ")" + du,
        qh = "(?:" + [au + mi + "?", mi, za, qa, Zh].join("|") + ")",
        jh = RegExp(Ha, "g"),
        Kh = RegExp(mi, "g"),
        ja = RegExp(Va + "(?=" + Va + ")|" + qh + du, "g"),
        Gh = RegExp(
          [
            Gn + "?" + ru + "+" + uu + "(?=" + [tu, Gn, "$"].join("|") + ")",
            Wh + "+" + cu + "(?=" + [tu, Gn + ou, "$"].join("|") + ")",
            Gn + "?" + ou + "+" + uu,
            Gn + "+" + cu,
            Vh,
            Hh,
            nu,
            zh,
          ].join("|"),
          "g"
        ),
        Jh = RegExp("[" + su + vi + Go + Qo + "]"),
        Yh =
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Xh = [
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
        Qh = -1,
        Ie = {};
      (Ie[La] =
        Ie[Da] =
        Ie[Pa] =
        Ie[Na] =
        Ie[Ua] =
        Ie[Ma] =
        Ie[Za] =
        Ie[Fa] =
        Ie[Ba] =
          !0),
        (Ie[jt] =
          Ie[pn] =
          Ie[Cr] =
          Ie[Kt] =
          Ie[Kn] =
          Ie[Gt] =
          Ie[Rn] =
          Ie[Wt] =
          Ie[wt] =
          Ie[I] =
          Ie[O] =
          Ie[be] =
          Ie[oe] =
          Ie[Le] =
          Ie[Ir] =
            !1);
      var Te = {};
      (Te[jt] =
        Te[pn] =
        Te[Cr] =
        Te[Kn] =
        Te[Kt] =
        Te[Gt] =
        Te[La] =
        Te[Da] =
        Te[Pa] =
        Te[Na] =
        Te[Ua] =
        Te[wt] =
        Te[I] =
        Te[O] =
        Te[be] =
        Te[oe] =
        Te[Le] =
        Te[pi] =
        Te[Ma] =
        Te[Za] =
        Te[Fa] =
        Te[Ba] =
          !0),
        (Te[Rn] = Te[Wt] = Te[Ir] = !1);
      var ep = {
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
        tp = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        np = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        },
        rp = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ip = parseFloat,
        ap = parseInt,
        hu = typeof kr == "object" && kr && kr.Object === Object && kr,
        sp = typeof self == "object" && self && self.Object === Object && self,
        He = hu || sp || Function("return this")(),
        Ka = n && !n.nodeType && n,
        Ln = Ka && !0 && i && !i.nodeType && i,
        pu = Ln && Ln.exports === Ka,
        Ga = pu && hu.process,
        xt = (function () {
          try {
            var _ = Ln && Ln.require && Ln.require("util").types;
            return _ || (Ga && Ga.binding && Ga.binding("util"));
          } catch {}
        })(),
        gu = xt && xt.isArrayBuffer,
        vu = xt && xt.isDate,
        mu = xt && xt.isMap,
        yu = xt && xt.isRegExp,
        _u = xt && xt.isSet,
        wu = xt && xt.isTypedArray;
      function dt(_, k, b) {
        switch (b.length) {
          case 0:
            return _.call(k);
          case 1:
            return _.call(k, b[0]);
          case 2:
            return _.call(k, b[0], b[1]);
          case 3:
            return _.call(k, b[0], b[1], b[2]);
        }
        return _.apply(k, b);
      }
      function op(_, k, b, F) {
        for (var te = -1, me = _ == null ? 0 : _.length; ++te < me; ) {
          var Ze = _[te];
          k(F, Ze, b(Ze), _);
        }
        return F;
      }
      function bt(_, k) {
        for (
          var b = -1, F = _ == null ? 0 : _.length;
          ++b < F && k(_[b], b, _) !== !1;

        );
        return _;
      }
      function up(_, k) {
        for (var b = _ == null ? 0 : _.length; b-- && k(_[b], b, _) !== !1; );
        return _;
      }
      function xu(_, k) {
        for (var b = -1, F = _ == null ? 0 : _.length; ++b < F; )
          if (!k(_[b], b, _)) return !1;
        return !0;
      }
      function vn(_, k) {
        for (
          var b = -1, F = _ == null ? 0 : _.length, te = 0, me = [];
          ++b < F;

        ) {
          var Ze = _[b];
          k(Ze, b, _) && (me[te++] = Ze);
        }
        return me;
      }
      function yi(_, k) {
        var b = _ == null ? 0 : _.length;
        return !!b && Jn(_, k, 0) > -1;
      }
      function Ja(_, k, b) {
        for (var F = -1, te = _ == null ? 0 : _.length; ++F < te; )
          if (b(k, _[F])) return !0;
        return !1;
      }
      function Ce(_, k) {
        for (var b = -1, F = _ == null ? 0 : _.length, te = Array(F); ++b < F; )
          te[b] = k(_[b], b, _);
        return te;
      }
      function mn(_, k) {
        for (var b = -1, F = k.length, te = _.length; ++b < F; )
          _[te + b] = k[b];
        return _;
      }
      function Ya(_, k, b, F) {
        var te = -1,
          me = _ == null ? 0 : _.length;
        for (F && me && (b = _[++te]); ++te < me; ) b = k(b, _[te], te, _);
        return b;
      }
      function cp(_, k, b, F) {
        var te = _ == null ? 0 : _.length;
        for (F && te && (b = _[--te]); te--; ) b = k(b, _[te], te, _);
        return b;
      }
      function Xa(_, k) {
        for (var b = -1, F = _ == null ? 0 : _.length; ++b < F; )
          if (k(_[b], b, _)) return !0;
        return !1;
      }
      var lp = Qa("length");
      function fp(_) {
        return _.split("");
      }
      function dp(_) {
        return _.match(wh) || [];
      }
      function bu(_, k, b) {
        var F;
        return (
          b(_, function (te, me, Ze) {
            if (k(te, me, Ze)) return (F = me), !1;
          }),
          F
        );
      }
      function _i(_, k, b, F) {
        for (var te = _.length, me = b + (F ? 1 : -1); F ? me-- : ++me < te; )
          if (k(_[me], me, _)) return me;
        return -1;
      }
      function Jn(_, k, b) {
        return k === k ? kp(_, k, b) : _i(_, Eu, b);
      }
      function hp(_, k, b, F) {
        for (var te = b - 1, me = _.length; ++te < me; )
          if (F(_[te], k)) return te;
        return -1;
      }
      function Eu(_) {
        return _ !== _;
      }
      function ku(_, k) {
        var b = _ == null ? 0 : _.length;
        return b ? ts(_, k) / b : On;
      }
      function Qa(_) {
        return function (k) {
          return k == null ? r : k[_];
        };
      }
      function es(_) {
        return function (k) {
          return _ == null ? r : _[k];
        };
      }
      function Su(_, k, b, F, te) {
        return (
          te(_, function (me, Ze, Se) {
            b = F ? ((F = !1), me) : k(b, me, Ze, Se);
          }),
          b
        );
      }
      function pp(_, k) {
        var b = _.length;
        for (_.sort(k); b--; ) _[b] = _[b].value;
        return _;
      }
      function ts(_, k) {
        for (var b, F = -1, te = _.length; ++F < te; ) {
          var me = k(_[F]);
          me !== r && (b = b === r ? me : b + me);
        }
        return b;
      }
      function ns(_, k) {
        for (var b = -1, F = Array(_); ++b < _; ) F[b] = k(b);
        return F;
      }
      function gp(_, k) {
        return Ce(k, function (b) {
          return [b, _[b]];
        });
      }
      function Tu(_) {
        return _ && _.slice(0, Ou(_) + 1).replace($a, "");
      }
      function ht(_) {
        return function (k) {
          return _(k);
        };
      }
      function rs(_, k) {
        return Ce(k, function (b) {
          return _[b];
        });
      }
      function Ar(_, k) {
        return _.has(k);
      }
      function Iu(_, k) {
        for (var b = -1, F = _.length; ++b < F && Jn(k, _[b], 0) > -1; );
        return b;
      }
      function Cu(_, k) {
        for (var b = _.length; b-- && Jn(k, _[b], 0) > -1; );
        return b;
      }
      function vp(_, k) {
        for (var b = _.length, F = 0; b--; ) _[b] === k && ++F;
        return F;
      }
      var mp = es(ep),
        yp = es(tp);
      function _p(_) {
        return "\\" + rp[_];
      }
      function wp(_, k) {
        return _ == null ? r : _[k];
      }
      function Yn(_) {
        return Jh.test(_);
      }
      function xp(_) {
        return Yh.test(_);
      }
      function bp(_) {
        for (var k, b = []; !(k = _.next()).done; ) b.push(k.value);
        return b;
      }
      function is(_) {
        var k = -1,
          b = Array(_.size);
        return (
          _.forEach(function (F, te) {
            b[++k] = [te, F];
          }),
          b
        );
      }
      function Au(_, k) {
        return function (b) {
          return _(k(b));
        };
      }
      function yn(_, k) {
        for (var b = -1, F = _.length, te = 0, me = []; ++b < F; ) {
          var Ze = _[b];
          (Ze === k || Ze === x) && ((_[b] = x), (me[te++] = b));
        }
        return me;
      }
      function wi(_) {
        var k = -1,
          b = Array(_.size);
        return (
          _.forEach(function (F) {
            b[++k] = F;
          }),
          b
        );
      }
      function Ep(_) {
        var k = -1,
          b = Array(_.size);
        return (
          _.forEach(function (F) {
            b[++k] = [F, F];
          }),
          b
        );
      }
      function kp(_, k, b) {
        for (var F = b - 1, te = _.length; ++F < te; ) if (_[F] === k) return F;
        return -1;
      }
      function Sp(_, k, b) {
        for (var F = b + 1; F--; ) if (_[F] === k) return F;
        return F;
      }
      function Xn(_) {
        return Yn(_) ? Ip(_) : lp(_);
      }
      function Dt(_) {
        return Yn(_) ? Cp(_) : fp(_);
      }
      function Ou(_) {
        for (var k = _.length; k-- && vh.test(_.charAt(k)); );
        return k;
      }
      var Tp = es(np);
      function Ip(_) {
        for (var k = (ja.lastIndex = 0); ja.test(_); ) ++k;
        return k;
      }
      function Cp(_) {
        return _.match(ja) || [];
      }
      function Ap(_) {
        return _.match(Gh) || [];
      }
      var Op = function _(k) {
          k = k == null ? He : Qn.defaults(He.Object(), k, Qn.pick(He, Xh));
          var b = k.Array,
            F = k.Date,
            te = k.Error,
            me = k.Function,
            Ze = k.Math,
            Se = k.Object,
            as = k.RegExp,
            Rp = k.String,
            Et = k.TypeError,
            xi = b.prototype,
            Lp = me.prototype,
            er = Se.prototype,
            bi = k["__core-js_shared__"],
            Ei = Lp.toString,
            Ee = er.hasOwnProperty,
            Dp = 0,
            Ru = (function () {
              var e = /[^.]+$/.exec((bi && bi.keys && bi.keys.IE_PROTO) || "");
              return e ? "Symbol(src)_1." + e : "";
            })(),
            ki = er.toString,
            Pp = Ei.call(Se),
            Np = He._,
            Up = as(
              "^" +
                Ei.call(Ee)
                  .replace(Wa, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Si = pu ? k.Buffer : r,
            _n = k.Symbol,
            Ti = k.Uint8Array,
            Lu = Si ? Si.allocUnsafe : r,
            Ii = Au(Se.getPrototypeOf, Se),
            Du = Se.create,
            Pu = er.propertyIsEnumerable,
            Ci = xi.splice,
            Nu = _n ? _n.isConcatSpreadable : r,
            Or = _n ? _n.iterator : r,
            Dn = _n ? _n.toStringTag : r,
            Ai = (function () {
              try {
                var e = Zn(Se, "defineProperty");
                return e({}, "", {}), e;
              } catch {}
            })(),
            Mp = k.clearTimeout !== He.clearTimeout && k.clearTimeout,
            Zp = F && F.now !== He.Date.now && F.now,
            Fp = k.setTimeout !== He.setTimeout && k.setTimeout,
            Oi = Ze.ceil,
            Ri = Ze.floor,
            ss = Se.getOwnPropertySymbols,
            Bp = Si ? Si.isBuffer : r,
            Uu = k.isFinite,
            Wp = xi.join,
            $p = Au(Se.keys, Se),
            Fe = Ze.max,
            Je = Ze.min,
            Hp = F.now,
            Vp = k.parseInt,
            Mu = Ze.random,
            zp = xi.reverse,
            os = Zn(k, "DataView"),
            Rr = Zn(k, "Map"),
            us = Zn(k, "Promise"),
            tr = Zn(k, "Set"),
            Lr = Zn(k, "WeakMap"),
            Dr = Zn(Se, "create"),
            Li = Lr && new Lr(),
            nr = {},
            qp = Fn(os),
            jp = Fn(Rr),
            Kp = Fn(us),
            Gp = Fn(tr),
            Jp = Fn(Lr),
            Di = _n ? _n.prototype : r,
            Pr = Di ? Di.valueOf : r,
            Zu = Di ? Di.toString : r;
          function h(e) {
            if (Re(e) && !ne(e) && !(e instanceof de)) {
              if (e instanceof kt) return e;
              if (Ee.call(e, "__wrapped__")) return Fc(e);
            }
            return new kt(e);
          }
          var rr = (function () {
            function e() {}
            return function (t) {
              if (!Oe(t)) return {};
              if (Du) return Du(t);
              e.prototype = t;
              var a = new e();
              return (e.prototype = r), a;
            };
          })();
          function Pi() {}
          function kt(e, t) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__chain__ = !!t),
              (this.__index__ = 0),
              (this.__values__ = r);
          }
          (h.templateSettings = {
            escape: lh,
            evaluate: fh,
            interpolate: jo,
            variable: "",
            imports: { _: h },
          }),
            (h.prototype = Pi.prototype),
            (h.prototype.constructor = h),
            (kt.prototype = rr(Pi.prototype)),
            (kt.prototype.constructor = kt);
          function de(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = ft),
              (this.__views__ = []);
          }
          function Yp() {
            var e = new de(this.__wrapped__);
            return (
              (e.__actions__ = at(this.__actions__)),
              (e.__dir__ = this.__dir__),
              (e.__filtered__ = this.__filtered__),
              (e.__iteratees__ = at(this.__iteratees__)),
              (e.__takeCount__ = this.__takeCount__),
              (e.__views__ = at(this.__views__)),
              e
            );
          }
          function Xp() {
            if (this.__filtered__) {
              var e = new de(this);
              (e.__dir__ = -1), (e.__filtered__ = !0);
            } else (e = this.clone()), (e.__dir__ *= -1);
            return e;
          }
          function Qp() {
            var e = this.__wrapped__.value(),
              t = this.__dir__,
              a = ne(e),
              u = t < 0,
              f = a ? e.length : 0,
              p = fv(0, f, this.__views__),
              m = p.start,
              y = p.end,
              w = y - m,
              S = u ? y : m - 1,
              T = this.__iteratees__,
              A = T.length,
              P = 0,
              B = Je(w, this.__takeCount__);
            if (!a || (!u && f == w && B == w)) return uc(e, this.__actions__);
            var K = [];
            e: for (; w-- && P < B; ) {
              S += t;
              for (var ue = -1, G = e[S]; ++ue < A; ) {
                var fe = T[ue],
                  he = fe.iteratee,
                  vt = fe.type,
                  nt = he(G);
                if (vt == Me) G = nt;
                else if (!nt) {
                  if (vt == Qe) continue e;
                  break e;
                }
              }
              K[P++] = G;
            }
            return K;
          }
          (de.prototype = rr(Pi.prototype)), (de.prototype.constructor = de);
          function Pn(e) {
            var t = -1,
              a = e == null ? 0 : e.length;
            for (this.clear(); ++t < a; ) {
              var u = e[t];
              this.set(u[0], u[1]);
            }
          }
          function eg() {
            (this.__data__ = Dr ? Dr(null) : {}), (this.size = 0);
          }
          function tg(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          }
          function ng(e) {
            var t = this.__data__;
            if (Dr) {
              var a = t[e];
              return a === g ? r : a;
            }
            return Ee.call(t, e) ? t[e] : r;
          }
          function rg(e) {
            var t = this.__data__;
            return Dr ? t[e] !== r : Ee.call(t, e);
          }
          function ig(e, t) {
            var a = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (a[e] = Dr && t === r ? g : t),
              this
            );
          }
          (Pn.prototype.clear = eg),
            (Pn.prototype.delete = tg),
            (Pn.prototype.get = ng),
            (Pn.prototype.has = rg),
            (Pn.prototype.set = ig);
          function Jt(e) {
            var t = -1,
              a = e == null ? 0 : e.length;
            for (this.clear(); ++t < a; ) {
              var u = e[t];
              this.set(u[0], u[1]);
            }
          }
          function ag() {
            (this.__data__ = []), (this.size = 0);
          }
          function sg(e) {
            var t = this.__data__,
              a = Ni(t, e);
            if (a < 0) return !1;
            var u = t.length - 1;
            return a == u ? t.pop() : Ci.call(t, a, 1), --this.size, !0;
          }
          function og(e) {
            var t = this.__data__,
              a = Ni(t, e);
            return a < 0 ? r : t[a][1];
          }
          function ug(e) {
            return Ni(this.__data__, e) > -1;
          }
          function cg(e, t) {
            var a = this.__data__,
              u = Ni(a, e);
            return u < 0 ? (++this.size, a.push([e, t])) : (a[u][1] = t), this;
          }
          (Jt.prototype.clear = ag),
            (Jt.prototype.delete = sg),
            (Jt.prototype.get = og),
            (Jt.prototype.has = ug),
            (Jt.prototype.set = cg);
          function Yt(e) {
            var t = -1,
              a = e == null ? 0 : e.length;
            for (this.clear(); ++t < a; ) {
              var u = e[t];
              this.set(u[0], u[1]);
            }
          }
          function lg() {
            (this.size = 0),
              (this.__data__ = {
                hash: new Pn(),
                map: new (Rr || Jt)(),
                string: new Pn(),
              });
          }
          function fg(e) {
            var t = ji(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
          }
          function dg(e) {
            return ji(this, e).get(e);
          }
          function hg(e) {
            return ji(this, e).has(e);
          }
          function pg(e, t) {
            var a = ji(this, e),
              u = a.size;
            return a.set(e, t), (this.size += a.size == u ? 0 : 1), this;
          }
          (Yt.prototype.clear = lg),
            (Yt.prototype.delete = fg),
            (Yt.prototype.get = dg),
            (Yt.prototype.has = hg),
            (Yt.prototype.set = pg);
          function Nn(e) {
            var t = -1,
              a = e == null ? 0 : e.length;
            for (this.__data__ = new Yt(); ++t < a; ) this.add(e[t]);
          }
          function gg(e) {
            return this.__data__.set(e, g), this;
          }
          function vg(e) {
            return this.__data__.has(e);
          }
          (Nn.prototype.add = Nn.prototype.push = gg), (Nn.prototype.has = vg);
          function Pt(e) {
            var t = (this.__data__ = new Jt(e));
            this.size = t.size;
          }
          function mg() {
            (this.__data__ = new Jt()), (this.size = 0);
          }
          function yg(e) {
            var t = this.__data__,
              a = t.delete(e);
            return (this.size = t.size), a;
          }
          function _g(e) {
            return this.__data__.get(e);
          }
          function wg(e) {
            return this.__data__.has(e);
          }
          function xg(e, t) {
            var a = this.__data__;
            if (a instanceof Jt) {
              var u = a.__data__;
              if (!Rr || u.length < c - 1)
                return u.push([e, t]), (this.size = ++a.size), this;
              a = this.__data__ = new Yt(u);
            }
            return a.set(e, t), (this.size = a.size), this;
          }
          (Pt.prototype.clear = mg),
            (Pt.prototype.delete = yg),
            (Pt.prototype.get = _g),
            (Pt.prototype.has = wg),
            (Pt.prototype.set = xg);
          function Fu(e, t) {
            var a = ne(e),
              u = !a && Bn(e),
              f = !a && !u && kn(e),
              p = !a && !u && !f && or(e),
              m = a || u || f || p,
              y = m ? ns(e.length, Rp) : [],
              w = y.length;
            for (var S in e)
              (t || Ee.call(e, S)) &&
                !(
                  m &&
                  (S == "length" ||
                    (f && (S == "offset" || S == "parent")) ||
                    (p &&
                      (S == "buffer" ||
                        S == "byteLength" ||
                        S == "byteOffset")) ||
                    tn(S, w))
                ) &&
                y.push(S);
            return y;
          }
          function Bu(e) {
            var t = e.length;
            return t ? e[_s(0, t - 1)] : r;
          }
          function bg(e, t) {
            return Ki(at(e), Un(t, 0, e.length));
          }
          function Eg(e) {
            return Ki(at(e));
          }
          function cs(e, t, a) {
            ((a !== r && !Nt(e[t], a)) || (a === r && !(t in e))) &&
              Xt(e, t, a);
          }
          function Nr(e, t, a) {
            var u = e[t];
            (!(Ee.call(e, t) && Nt(u, a)) || (a === r && !(t in e))) &&
              Xt(e, t, a);
          }
          function Ni(e, t) {
            for (var a = e.length; a--; ) if (Nt(e[a][0], t)) return a;
            return -1;
          }
          function kg(e, t, a, u) {
            return (
              wn(e, function (f, p, m) {
                t(u, f, a(f), m);
              }),
              u
            );
          }
          function Wu(e, t) {
            return e && Ht(t, Be(t), e);
          }
          function Sg(e, t) {
            return e && Ht(t, ot(t), e);
          }
          function Xt(e, t, a) {
            t == "__proto__" && Ai
              ? Ai(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: a,
                  writable: !0,
                })
              : (e[t] = a);
          }
          function ls(e, t) {
            for (var a = -1, u = t.length, f = b(u), p = e == null; ++a < u; )
              f[a] = p ? r : Vs(e, t[a]);
            return f;
          }
          function Un(e, t, a) {
            return (
              e === e &&
                (a !== r && (e = e <= a ? e : a),
                t !== r && (e = e >= t ? e : t)),
              e
            );
          }
          function St(e, t, a, u, f, p) {
            var m,
              y = t & E,
              w = t & C,
              S = t & D;
            if ((a && (m = f ? a(e, u, f, p) : a(e)), m !== r)) return m;
            if (!Oe(e)) return e;
            var T = ne(e);
            if (T) {
              if (((m = hv(e)), !y)) return at(e, m);
            } else {
              var A = Ye(e),
                P = A == Wt || A == jn;
              if (kn(e)) return fc(e, y);
              if (A == O || A == jt || (P && !f)) {
                if (((m = w || P ? {} : Oc(e)), !y))
                  return w ? nv(e, Sg(m, e)) : tv(e, Wu(m, e));
              } else {
                if (!Te[A]) return f ? e : {};
                m = pv(e, A, y);
              }
            }
            p || (p = new Pt());
            var B = p.get(e);
            if (B) return B;
            p.set(e, m),
              al(e)
                ? e.forEach(function (G) {
                    m.add(St(G, t, a, G, e, p));
                  })
                : rl(e) &&
                  e.forEach(function (G, fe) {
                    m.set(fe, St(G, t, a, fe, e, p));
                  });
            var K = S ? (w ? Os : As) : w ? ot : Be,
              ue = T ? r : K(e);
            return (
              bt(ue || e, function (G, fe) {
                ue && ((fe = G), (G = e[fe])), Nr(m, fe, St(G, t, a, fe, e, p));
              }),
              m
            );
          }
          function Tg(e) {
            var t = Be(e);
            return function (a) {
              return $u(a, e, t);
            };
          }
          function $u(e, t, a) {
            var u = a.length;
            if (e == null) return !u;
            for (e = Se(e); u--; ) {
              var f = a[u],
                p = t[f],
                m = e[f];
              if ((m === r && !(f in e)) || !p(m)) return !1;
            }
            return !0;
          }
          function Hu(e, t, a) {
            if (typeof e != "function") throw new Et(l);
            return $r(function () {
              e.apply(r, a);
            }, t);
          }
          function Ur(e, t, a, u) {
            var f = -1,
              p = yi,
              m = !0,
              y = e.length,
              w = [],
              S = t.length;
            if (!y) return w;
            a && (t = Ce(t, ht(a))),
              u
                ? ((p = Ja), (m = !1))
                : t.length >= c && ((p = Ar), (m = !1), (t = new Nn(t)));
            e: for (; ++f < y; ) {
              var T = e[f],
                A = a == null ? T : a(T);
              if (((T = u || T !== 0 ? T : 0), m && A === A)) {
                for (var P = S; P--; ) if (t[P] === A) continue e;
                w.push(T);
              } else p(t, A, u) || w.push(T);
            }
            return w;
          }
          var wn = vc($t),
            Vu = vc(ds, !0);
          function Ig(e, t) {
            var a = !0;
            return (
              wn(e, function (u, f, p) {
                return (a = !!t(u, f, p)), a;
              }),
              a
            );
          }
          function Ui(e, t, a) {
            for (var u = -1, f = e.length; ++u < f; ) {
              var p = e[u],
                m = t(p);
              if (m != null && (y === r ? m === m && !gt(m) : a(m, y)))
                var y = m,
                  w = p;
            }
            return w;
          }
          function Cg(e, t, a, u) {
            var f = e.length;
            for (
              a = ae(a),
                a < 0 && (a = -a > f ? 0 : f + a),
                u = u === r || u > f ? f : ae(u),
                u < 0 && (u += f),
                u = a > u ? 0 : ol(u);
              a < u;

            )
              e[a++] = t;
            return e;
          }
          function zu(e, t) {
            var a = [];
            return (
              wn(e, function (u, f, p) {
                t(u, f, p) && a.push(u);
              }),
              a
            );
          }
          function Ve(e, t, a, u, f) {
            var p = -1,
              m = e.length;
            for (a || (a = vv), f || (f = []); ++p < m; ) {
              var y = e[p];
              t > 0 && a(y)
                ? t > 1
                  ? Ve(y, t - 1, a, u, f)
                  : mn(f, y)
                : u || (f[f.length] = y);
            }
            return f;
          }
          var fs = mc(),
            qu = mc(!0);
          function $t(e, t) {
            return e && fs(e, t, Be);
          }
          function ds(e, t) {
            return e && qu(e, t, Be);
          }
          function Mi(e, t) {
            return vn(t, function (a) {
              return nn(e[a]);
            });
          }
          function Mn(e, t) {
            t = bn(t, e);
            for (var a = 0, u = t.length; e != null && a < u; )
              e = e[Vt(t[a++])];
            return a && a == u ? e : r;
          }
          function ju(e, t, a) {
            var u = t(e);
            return ne(e) ? u : mn(u, a(e));
          }
          function et(e) {
            return e == null
              ? e === r
                ? rh
                : L
              : Dn && Dn in Se(e)
              ? lv(e)
              : Ev(e);
          }
          function hs(e, t) {
            return e > t;
          }
          function Ag(e, t) {
            return e != null && Ee.call(e, t);
          }
          function Og(e, t) {
            return e != null && t in Se(e);
          }
          function Rg(e, t, a) {
            return e >= Je(t, a) && e < Fe(t, a);
          }
          function ps(e, t, a) {
            for (
              var u = a ? Ja : yi,
                f = e[0].length,
                p = e.length,
                m = p,
                y = b(p),
                w = 1 / 0,
                S = [];
              m--;

            ) {
              var T = e[m];
              m && t && (T = Ce(T, ht(t))),
                (w = Je(T.length, w)),
                (y[m] =
                  !a && (t || (f >= 120 && T.length >= 120))
                    ? new Nn(m && T)
                    : r);
            }
            T = e[0];
            var A = -1,
              P = y[0];
            e: for (; ++A < f && S.length < w; ) {
              var B = T[A],
                K = t ? t(B) : B;
              if (((B = a || B !== 0 ? B : 0), !(P ? Ar(P, K) : u(S, K, a)))) {
                for (m = p; --m; ) {
                  var ue = y[m];
                  if (!(ue ? Ar(ue, K) : u(e[m], K, a))) continue e;
                }
                P && P.push(K), S.push(B);
              }
            }
            return S;
          }
          function Lg(e, t, a, u) {
            return (
              $t(e, function (f, p, m) {
                t(u, a(f), p, m);
              }),
              u
            );
          }
          function Mr(e, t, a) {
            (t = bn(t, e)), (e = Pc(e, t));
            var u = e == null ? e : e[Vt(It(t))];
            return u == null ? r : dt(u, e, a);
          }
          function Ku(e) {
            return Re(e) && et(e) == jt;
          }
          function Dg(e) {
            return Re(e) && et(e) == Cr;
          }
          function Pg(e) {
            return Re(e) && et(e) == Gt;
          }
          function Zr(e, t, a, u, f) {
            return e === t
              ? !0
              : e == null || t == null || (!Re(e) && !Re(t))
              ? e !== e && t !== t
              : Ng(e, t, a, u, Zr, f);
          }
          function Ng(e, t, a, u, f, p) {
            var m = ne(e),
              y = ne(t),
              w = m ? pn : Ye(e),
              S = y ? pn : Ye(t);
            (w = w == jt ? O : w), (S = S == jt ? O : S);
            var T = w == O,
              A = S == O,
              P = w == S;
            if (P && kn(e)) {
              if (!kn(t)) return !1;
              (m = !0), (T = !1);
            }
            if (P && !T)
              return (
                p || (p = new Pt()),
                m || or(e) ? Ic(e, t, a, u, f, p) : uv(e, t, w, a, u, f, p)
              );
            if (!(a & Z)) {
              var B = T && Ee.call(e, "__wrapped__"),
                K = A && Ee.call(t, "__wrapped__");
              if (B || K) {
                var ue = B ? e.value() : e,
                  G = K ? t.value() : t;
                return p || (p = new Pt()), f(ue, G, a, u, p);
              }
            }
            return P ? (p || (p = new Pt()), cv(e, t, a, u, f, p)) : !1;
          }
          function Ug(e) {
            return Re(e) && Ye(e) == wt;
          }
          function gs(e, t, a, u) {
            var f = a.length,
              p = f,
              m = !u;
            if (e == null) return !p;
            for (e = Se(e); f--; ) {
              var y = a[f];
              if (m && y[2] ? y[1] !== e[y[0]] : !(y[0] in e)) return !1;
            }
            for (; ++f < p; ) {
              y = a[f];
              var w = y[0],
                S = e[w],
                T = y[1];
              if (m && y[2]) {
                if (S === r && !(w in e)) return !1;
              } else {
                var A = new Pt();
                if (u) var P = u(S, T, w, e, t, A);
                if (!(P === r ? Zr(T, S, Z | W, u, A) : P)) return !1;
              }
            }
            return !0;
          }
          function Gu(e) {
            if (!Oe(e) || yv(e)) return !1;
            var t = nn(e) ? Up : Th;
            return t.test(Fn(e));
          }
          function Mg(e) {
            return Re(e) && et(e) == be;
          }
          function Zg(e) {
            return Re(e) && Ye(e) == oe;
          }
          function Fg(e) {
            return Re(e) && ea(e.length) && !!Ie[et(e)];
          }
          function Ju(e) {
            return typeof e == "function"
              ? e
              : e == null
              ? ut
              : typeof e == "object"
              ? ne(e)
                ? Qu(e[0], e[1])
                : Xu(e)
              : yl(e);
          }
          function vs(e) {
            if (!Wr(e)) return $p(e);
            var t = [];
            for (var a in Se(e))
              Ee.call(e, a) && a != "constructor" && t.push(a);
            return t;
          }
          function Bg(e) {
            if (!Oe(e)) return bv(e);
            var t = Wr(e),
              a = [];
            for (var u in e)
              (u == "constructor" && (t || !Ee.call(e, u))) || a.push(u);
            return a;
          }
          function ms(e, t) {
            return e < t;
          }
          function Yu(e, t) {
            var a = -1,
              u = st(e) ? b(e.length) : [];
            return (
              wn(e, function (f, p, m) {
                u[++a] = t(f, p, m);
              }),
              u
            );
          }
          function Xu(e) {
            var t = Ls(e);
            return t.length == 1 && t[0][2]
              ? Lc(t[0][0], t[0][1])
              : function (a) {
                  return a === e || gs(a, e, t);
                };
          }
          function Qu(e, t) {
            return Ps(e) && Rc(t)
              ? Lc(Vt(e), t)
              : function (a) {
                  var u = Vs(a, e);
                  return u === r && u === t ? zs(a, e) : Zr(t, u, Z | W);
                };
          }
          function Zi(e, t, a, u, f) {
            e !== t &&
              fs(
                t,
                function (p, m) {
                  if ((f || (f = new Pt()), Oe(p))) Wg(e, t, m, a, Zi, u, f);
                  else {
                    var y = u ? u(Us(e, m), p, m + "", e, t, f) : r;
                    y === r && (y = p), cs(e, m, y);
                  }
                },
                ot
              );
          }
          function Wg(e, t, a, u, f, p, m) {
            var y = Us(e, a),
              w = Us(t, a),
              S = m.get(w);
            if (S) {
              cs(e, a, S);
              return;
            }
            var T = p ? p(y, w, a + "", e, t, m) : r,
              A = T === r;
            if (A) {
              var P = ne(w),
                B = !P && kn(w),
                K = !P && !B && or(w);
              (T = w),
                P || B || K
                  ? ne(y)
                    ? (T = y)
                    : De(y)
                    ? (T = at(y))
                    : B
                    ? ((A = !1), (T = fc(w, !0)))
                    : K
                    ? ((A = !1), (T = dc(w, !0)))
                    : (T = [])
                  : Hr(w) || Bn(w)
                  ? ((T = y),
                    Bn(y) ? (T = ul(y)) : (!Oe(y) || nn(y)) && (T = Oc(w)))
                  : (A = !1);
            }
            A && (m.set(w, T), f(T, w, u, p, m), m.delete(w)), cs(e, a, T);
          }
          function ec(e, t) {
            var a = e.length;
            if (!!a) return (t += t < 0 ? a : 0), tn(t, a) ? e[t] : r;
          }
          function tc(e, t, a) {
            t.length
              ? (t = Ce(t, function (p) {
                  return ne(p)
                    ? function (m) {
                        return Mn(m, p.length === 1 ? p[0] : p);
                      }
                    : p;
                }))
              : (t = [ut]);
            var u = -1;
            t = Ce(t, ht(j()));
            var f = Yu(e, function (p, m, y) {
              var w = Ce(t, function (S) {
                return S(p);
              });
              return { criteria: w, index: ++u, value: p };
            });
            return pp(f, function (p, m) {
              return ev(p, m, a);
            });
          }
          function $g(e, t) {
            return nc(e, t, function (a, u) {
              return zs(e, u);
            });
          }
          function nc(e, t, a) {
            for (var u = -1, f = t.length, p = {}; ++u < f; ) {
              var m = t[u],
                y = Mn(e, m);
              a(y, m) && Fr(p, bn(m, e), y);
            }
            return p;
          }
          function Hg(e) {
            return function (t) {
              return Mn(t, e);
            };
          }
          function ys(e, t, a, u) {
            var f = u ? hp : Jn,
              p = -1,
              m = t.length,
              y = e;
            for (e === t && (t = at(t)), a && (y = Ce(e, ht(a))); ++p < m; )
              for (
                var w = 0, S = t[p], T = a ? a(S) : S;
                (w = f(y, T, w, u)) > -1;

              )
                y !== e && Ci.call(y, w, 1), Ci.call(e, w, 1);
            return e;
          }
          function rc(e, t) {
            for (var a = e ? t.length : 0, u = a - 1; a--; ) {
              var f = t[a];
              if (a == u || f !== p) {
                var p = f;
                tn(f) ? Ci.call(e, f, 1) : bs(e, f);
              }
            }
            return e;
          }
          function _s(e, t) {
            return e + Ri(Mu() * (t - e + 1));
          }
          function Vg(e, t, a, u) {
            for (var f = -1, p = Fe(Oi((t - e) / (a || 1)), 0), m = b(p); p--; )
              (m[u ? p : ++f] = e), (e += a);
            return m;
          }
          function ws(e, t) {
            var a = "";
            if (!e || t < 1 || t > lt) return a;
            do t % 2 && (a += e), (t = Ri(t / 2)), t && (e += e);
            while (t);
            return a;
          }
          function le(e, t) {
            return Ms(Dc(e, t, ut), e + "");
          }
          function zg(e) {
            return Bu(ur(e));
          }
          function qg(e, t) {
            var a = ur(e);
            return Ki(a, Un(t, 0, a.length));
          }
          function Fr(e, t, a, u) {
            if (!Oe(e)) return e;
            t = bn(t, e);
            for (
              var f = -1, p = t.length, m = p - 1, y = e;
              y != null && ++f < p;

            ) {
              var w = Vt(t[f]),
                S = a;
              if (w === "__proto__" || w === "constructor" || w === "prototype")
                return e;
              if (f != m) {
                var T = y[w];
                (S = u ? u(T, w, y) : r),
                  S === r && (S = Oe(T) ? T : tn(t[f + 1]) ? [] : {});
              }
              Nr(y, w, S), (y = y[w]);
            }
            return e;
          }
          var ic = Li
              ? function (e, t) {
                  return Li.set(e, t), e;
                }
              : ut,
            jg = Ai
              ? function (e, t) {
                  return Ai(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: js(t),
                    writable: !0,
                  });
                }
              : ut;
          function Kg(e) {
            return Ki(ur(e));
          }
          function Tt(e, t, a) {
            var u = -1,
              f = e.length;
            t < 0 && (t = -t > f ? 0 : f + t),
              (a = a > f ? f : a),
              a < 0 && (a += f),
              (f = t > a ? 0 : (a - t) >>> 0),
              (t >>>= 0);
            for (var p = b(f); ++u < f; ) p[u] = e[u + t];
            return p;
          }
          function Gg(e, t) {
            var a;
            return (
              wn(e, function (u, f, p) {
                return (a = t(u, f, p)), !a;
              }),
              !!a
            );
          }
          function Fi(e, t, a) {
            var u = 0,
              f = e == null ? u : e.length;
            if (typeof t == "number" && t === t && f <= Sr) {
              for (; u < f; ) {
                var p = (u + f) >>> 1,
                  m = e[p];
                m !== null && !gt(m) && (a ? m <= t : m < t)
                  ? (u = p + 1)
                  : (f = p);
              }
              return f;
            }
            return xs(e, t, ut, a);
          }
          function xs(e, t, a, u) {
            var f = 0,
              p = e == null ? 0 : e.length;
            if (p === 0) return 0;
            t = a(t);
            for (
              var m = t !== t, y = t === null, w = gt(t), S = t === r;
              f < p;

            ) {
              var T = Ri((f + p) / 2),
                A = a(e[T]),
                P = A !== r,
                B = A === null,
                K = A === A,
                ue = gt(A);
              if (m) var G = u || K;
              else
                S
                  ? (G = K && (u || P))
                  : y
                  ? (G = K && P && (u || !B))
                  : w
                  ? (G = K && P && !B && (u || !ue))
                  : B || ue
                  ? (G = !1)
                  : (G = u ? A <= t : A < t);
              G ? (f = T + 1) : (p = T);
            }
            return Je(p, hi);
          }
          function ac(e, t) {
            for (var a = -1, u = e.length, f = 0, p = []; ++a < u; ) {
              var m = e[a],
                y = t ? t(m) : m;
              if (!a || !Nt(y, w)) {
                var w = y;
                p[f++] = m === 0 ? 0 : m;
              }
            }
            return p;
          }
          function sc(e) {
            return typeof e == "number" ? e : gt(e) ? On : +e;
          }
          function pt(e) {
            if (typeof e == "string") return e;
            if (ne(e)) return Ce(e, pt) + "";
            if (gt(e)) return Zu ? Zu.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -it ? "-0" : t;
          }
          function xn(e, t, a) {
            var u = -1,
              f = yi,
              p = e.length,
              m = !0,
              y = [],
              w = y;
            if (a) (m = !1), (f = Ja);
            else if (p >= c) {
              var S = t ? null : sv(e);
              if (S) return wi(S);
              (m = !1), (f = Ar), (w = new Nn());
            } else w = t ? [] : y;
            e: for (; ++u < p; ) {
              var T = e[u],
                A = t ? t(T) : T;
              if (((T = a || T !== 0 ? T : 0), m && A === A)) {
                for (var P = w.length; P--; ) if (w[P] === A) continue e;
                t && w.push(A), y.push(T);
              } else f(w, A, a) || (w !== y && w.push(A), y.push(T));
            }
            return y;
          }
          function bs(e, t) {
            return (
              (t = bn(t, e)), (e = Pc(e, t)), e == null || delete e[Vt(It(t))]
            );
          }
          function oc(e, t, a, u) {
            return Fr(e, t, a(Mn(e, t)), u);
          }
          function Bi(e, t, a, u) {
            for (
              var f = e.length, p = u ? f : -1;
              (u ? p-- : ++p < f) && t(e[p], p, e);

            );
            return a
              ? Tt(e, u ? 0 : p, u ? p + 1 : f)
              : Tt(e, u ? p + 1 : 0, u ? f : p);
          }
          function uc(e, t) {
            var a = e;
            return (
              a instanceof de && (a = a.value()),
              Ya(
                t,
                function (u, f) {
                  return f.func.apply(f.thisArg, mn([u], f.args));
                },
                a
              )
            );
          }
          function Es(e, t, a) {
            var u = e.length;
            if (u < 2) return u ? xn(e[0]) : [];
            for (var f = -1, p = b(u); ++f < u; )
              for (var m = e[f], y = -1; ++y < u; )
                y != f && (p[f] = Ur(p[f] || m, e[y], t, a));
            return xn(Ve(p, 1), t, a);
          }
          function cc(e, t, a) {
            for (var u = -1, f = e.length, p = t.length, m = {}; ++u < f; ) {
              var y = u < p ? t[u] : r;
              a(m, e[u], y);
            }
            return m;
          }
          function ks(e) {
            return De(e) ? e : [];
          }
          function Ss(e) {
            return typeof e == "function" ? e : ut;
          }
          function bn(e, t) {
            return ne(e) ? e : Ps(e, t) ? [e] : Zc(_e(e));
          }
          var Jg = le;
          function En(e, t, a) {
            var u = e.length;
            return (a = a === r ? u : a), !t && a >= u ? e : Tt(e, t, a);
          }
          var lc =
            Mp ||
            function (e) {
              return He.clearTimeout(e);
            };
          function fc(e, t) {
            if (t) return e.slice();
            var a = e.length,
              u = Lu ? Lu(a) : new e.constructor(a);
            return e.copy(u), u;
          }
          function Ts(e) {
            var t = new e.constructor(e.byteLength);
            return new Ti(t).set(new Ti(e)), t;
          }
          function Yg(e, t) {
            var a = t ? Ts(e.buffer) : e.buffer;
            return new e.constructor(a, e.byteOffset, e.byteLength);
          }
          function Xg(e) {
            var t = new e.constructor(e.source, Ko.exec(e));
            return (t.lastIndex = e.lastIndex), t;
          }
          function Qg(e) {
            return Pr ? Se(Pr.call(e)) : {};
          }
          function dc(e, t) {
            var a = t ? Ts(e.buffer) : e.buffer;
            return new e.constructor(a, e.byteOffset, e.length);
          }
          function hc(e, t) {
            if (e !== t) {
              var a = e !== r,
                u = e === null,
                f = e === e,
                p = gt(e),
                m = t !== r,
                y = t === null,
                w = t === t,
                S = gt(t);
              if (
                (!y && !S && !p && e > t) ||
                (p && m && w && !y && !S) ||
                (u && m && w) ||
                (!a && w) ||
                !f
              )
                return 1;
              if (
                (!u && !p && !S && e < t) ||
                (S && a && f && !u && !p) ||
                (y && a && f) ||
                (!m && f) ||
                !w
              )
                return -1;
            }
            return 0;
          }
          function ev(e, t, a) {
            for (
              var u = -1,
                f = e.criteria,
                p = t.criteria,
                m = f.length,
                y = a.length;
              ++u < m;

            ) {
              var w = hc(f[u], p[u]);
              if (w) {
                if (u >= y) return w;
                var S = a[u];
                return w * (S == "desc" ? -1 : 1);
              }
            }
            return e.index - t.index;
          }
          function pc(e, t, a, u) {
            for (
              var f = -1,
                p = e.length,
                m = a.length,
                y = -1,
                w = t.length,
                S = Fe(p - m, 0),
                T = b(w + S),
                A = !u;
              ++y < w;

            )
              T[y] = t[y];
            for (; ++f < m; ) (A || f < p) && (T[a[f]] = e[f]);
            for (; S--; ) T[y++] = e[f++];
            return T;
          }
          function gc(e, t, a, u) {
            for (
              var f = -1,
                p = e.length,
                m = -1,
                y = a.length,
                w = -1,
                S = t.length,
                T = Fe(p - y, 0),
                A = b(T + S),
                P = !u;
              ++f < T;

            )
              A[f] = e[f];
            for (var B = f; ++w < S; ) A[B + w] = t[w];
            for (; ++m < y; ) (P || f < p) && (A[B + a[m]] = e[f++]);
            return A;
          }
          function at(e, t) {
            var a = -1,
              u = e.length;
            for (t || (t = b(u)); ++a < u; ) t[a] = e[a];
            return t;
          }
          function Ht(e, t, a, u) {
            var f = !a;
            a || (a = {});
            for (var p = -1, m = t.length; ++p < m; ) {
              var y = t[p],
                w = u ? u(a[y], e[y], y, a, e) : r;
              w === r && (w = e[y]), f ? Xt(a, y, w) : Nr(a, y, w);
            }
            return a;
          }
          function tv(e, t) {
            return Ht(e, Ds(e), t);
          }
          function nv(e, t) {
            return Ht(e, Cc(e), t);
          }
          function Wi(e, t) {
            return function (a, u) {
              var f = ne(a) ? op : kg,
                p = t ? t() : {};
              return f(a, e, j(u, 2), p);
            };
          }
          function ir(e) {
            return le(function (t, a) {
              var u = -1,
                f = a.length,
                p = f > 1 ? a[f - 1] : r,
                m = f > 2 ? a[2] : r;
              for (
                p = e.length > 3 && typeof p == "function" ? (f--, p) : r,
                  m && tt(a[0], a[1], m) && ((p = f < 3 ? r : p), (f = 1)),
                  t = Se(t);
                ++u < f;

              ) {
                var y = a[u];
                y && e(t, y, u, p);
              }
              return t;
            });
          }
          function vc(e, t) {
            return function (a, u) {
              if (a == null) return a;
              if (!st(a)) return e(a, u);
              for (
                var f = a.length, p = t ? f : -1, m = Se(a);
                (t ? p-- : ++p < f) && u(m[p], p, m) !== !1;

              );
              return a;
            };
          }
          function mc(e) {
            return function (t, a, u) {
              for (var f = -1, p = Se(t), m = u(t), y = m.length; y--; ) {
                var w = m[e ? y : ++f];
                if (a(p[w], w, p) === !1) break;
              }
              return t;
            };
          }
          function rv(e, t, a) {
            var u = t & z,
              f = Br(e);
            function p() {
              var m = this && this !== He && this instanceof p ? f : e;
              return m.apply(u ? a : this, arguments);
            }
            return p;
          }
          function yc(e) {
            return function (t) {
              t = _e(t);
              var a = Yn(t) ? Dt(t) : r,
                u = a ? a[0] : t.charAt(0),
                f = a ? En(a, 1).join("") : t.slice(1);
              return u[e]() + f;
            };
          }
          function ar(e) {
            return function (t) {
              return Ya(vl(gl(t).replace(jh, "")), e, "");
            };
          }
          function Br(e) {
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
                case 5:
                  return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var a = rr(e.prototype),
                u = e.apply(a, t);
              return Oe(u) ? u : a;
            };
          }
          function iv(e, t, a) {
            var u = Br(e);
            function f() {
              for (var p = arguments.length, m = b(p), y = p, w = sr(f); y--; )
                m[y] = arguments[y];
              var S = p < 3 && m[0] !== w && m[p - 1] !== w ? [] : yn(m, w);
              if (((p -= S.length), p < a))
                return Ec(e, t, $i, f.placeholder, r, m, S, r, r, a - p);
              var T = this && this !== He && this instanceof f ? u : e;
              return dt(T, this, m);
            }
            return f;
          }
          function _c(e) {
            return function (t, a, u) {
              var f = Se(t);
              if (!st(t)) {
                var p = j(a, 3);
                (t = Be(t)),
                  (a = function (y) {
                    return p(f[y], y, f);
                  });
              }
              var m = e(t, a, u);
              return m > -1 ? f[p ? t[m] : m] : r;
            };
          }
          function wc(e) {
            return en(function (t) {
              var a = t.length,
                u = a,
                f = kt.prototype.thru;
              for (e && t.reverse(); u--; ) {
                var p = t[u];
                if (typeof p != "function") throw new Et(l);
                if (f && !m && qi(p) == "wrapper") var m = new kt([], !0);
              }
              for (u = m ? u : a; ++u < a; ) {
                p = t[u];
                var y = qi(p),
                  w = y == "wrapper" ? Rs(p) : r;
                w &&
                Ns(w[0]) &&
                w[1] == (q | se | X | xe) &&
                !w[4].length &&
                w[9] == 1
                  ? (m = m[qi(w[0])].apply(m, w[3]))
                  : (m = p.length == 1 && Ns(p) ? m[y]() : m.thru(p));
              }
              return function () {
                var S = arguments,
                  T = S[0];
                if (m && S.length == 1 && ne(T)) return m.plant(T).value();
                for (var A = 0, P = a ? t[A].apply(this, S) : T; ++A < a; )
                  P = t[A].call(this, P);
                return P;
              };
            });
          }
          function $i(e, t, a, u, f, p, m, y, w, S) {
            var T = t & q,
              A = t & z,
              P = t & U,
              B = t & (se | pe),
              K = t & V,
              ue = P ? r : Br(e);
            function G() {
              for (var fe = arguments.length, he = b(fe), vt = fe; vt--; )
                he[vt] = arguments[vt];
              if (B)
                var nt = sr(G),
                  mt = vp(he, nt);
              if (
                (u && (he = pc(he, u, f, B)),
                p && (he = gc(he, p, m, B)),
                (fe -= mt),
                B && fe < S)
              ) {
                var Pe = yn(he, nt);
                return Ec(e, t, $i, G.placeholder, a, he, Pe, y, w, S - fe);
              }
              var Ut = A ? a : this,
                an = P ? Ut[e] : e;
              return (
                (fe = he.length),
                y ? (he = kv(he, y)) : K && fe > 1 && he.reverse(),
                T && w < fe && (he.length = w),
                this && this !== He && this instanceof G && (an = ue || Br(an)),
                an.apply(Ut, he)
              );
            }
            return G;
          }
          function xc(e, t) {
            return function (a, u) {
              return Lg(a, e, t(u), {});
            };
          }
          function Hi(e, t) {
            return function (a, u) {
              var f;
              if (a === r && u === r) return t;
              if ((a !== r && (f = a), u !== r)) {
                if (f === r) return u;
                typeof a == "string" || typeof u == "string"
                  ? ((a = pt(a)), (u = pt(u)))
                  : ((a = sc(a)), (u = sc(u))),
                  (f = e(a, u));
              }
              return f;
            };
          }
          function Is(e) {
            return en(function (t) {
              return (
                (t = Ce(t, ht(j()))),
                le(function (a) {
                  var u = this;
                  return e(t, function (f) {
                    return dt(f, u, a);
                  });
                })
              );
            });
          }
          function Vi(e, t) {
            t = t === r ? " " : pt(t);
            var a = t.length;
            if (a < 2) return a ? ws(t, e) : t;
            var u = ws(t, Oi(e / Xn(t)));
            return Yn(t) ? En(Dt(u), 0, e).join("") : u.slice(0, e);
          }
          function av(e, t, a, u) {
            var f = t & z,
              p = Br(e);
            function m() {
              for (
                var y = -1,
                  w = arguments.length,
                  S = -1,
                  T = u.length,
                  A = b(T + w),
                  P = this && this !== He && this instanceof m ? p : e;
                ++S < T;

              )
                A[S] = u[S];
              for (; w--; ) A[S++] = arguments[++y];
              return dt(P, f ? a : this, A);
            }
            return m;
          }
          function bc(e) {
            return function (t, a, u) {
              return (
                u && typeof u != "number" && tt(t, a, u) && (a = u = r),
                (t = rn(t)),
                a === r ? ((a = t), (t = 0)) : (a = rn(a)),
                (u = u === r ? (t < a ? 1 : -1) : rn(u)),
                Vg(t, a, u, e)
              );
            };
          }
          function zi(e) {
            return function (t, a) {
              return (
                (typeof t == "string" && typeof a == "string") ||
                  ((t = Ct(t)), (a = Ct(a))),
                e(t, a)
              );
            };
          }
          function Ec(e, t, a, u, f, p, m, y, w, S) {
            var T = t & se,
              A = T ? m : r,
              P = T ? r : m,
              B = T ? p : r,
              K = T ? r : p;
            (t |= T ? X : we), (t &= ~(T ? we : X)), t & $ || (t &= ~(z | U));
            var ue = [e, t, f, B, A, K, P, y, w, S],
              G = a.apply(r, ue);
            return Ns(e) && Nc(G, ue), (G.placeholder = u), Uc(G, e, t);
          }
          function Cs(e) {
            var t = Ze[e];
            return function (a, u) {
              if (
                ((a = Ct(a)), (u = u == null ? 0 : Je(ae(u), 292)), u && Uu(a))
              ) {
                var f = (_e(a) + "e").split("e"),
                  p = t(f[0] + "e" + (+f[1] + u));
                return (
                  (f = (_e(p) + "e").split("e")), +(f[0] + "e" + (+f[1] - u))
                );
              }
              return t(a);
            };
          }
          var sv =
            tr && 1 / wi(new tr([, -0]))[1] == it
              ? function (e) {
                  return new tr(e);
                }
              : Js;
          function kc(e) {
            return function (t) {
              var a = Ye(t);
              return a == wt ? is(t) : a == oe ? Ep(t) : gp(t, e(t));
            };
          }
          function Qt(e, t, a, u, f, p, m, y) {
            var w = t & U;
            if (!w && typeof e != "function") throw new Et(l);
            var S = u ? u.length : 0;
            if (
              (S || ((t &= ~(X | we)), (u = f = r)),
              (m = m === r ? m : Fe(ae(m), 0)),
              (y = y === r ? y : ae(y)),
              (S -= f ? f.length : 0),
              t & we)
            ) {
              var T = u,
                A = f;
              u = f = r;
            }
            var P = w ? r : Rs(e),
              B = [e, t, a, u, f, T, A, p, m, y];
            if (
              (P && xv(B, P),
              (e = B[0]),
              (t = B[1]),
              (a = B[2]),
              (u = B[3]),
              (f = B[4]),
              (y = B[9] = B[9] === r ? (w ? 0 : e.length) : Fe(B[9] - S, 0)),
              !y && t & (se | pe) && (t &= ~(se | pe)),
              !t || t == z)
            )
              var K = rv(e, t, a);
            else
              t == se || t == pe
                ? (K = iv(e, t, y))
                : (t == X || t == (z | X)) && !f.length
                ? (K = av(e, t, a, u))
                : (K = $i.apply(r, B));
            var ue = P ? ic : Nc;
            return Uc(ue(K, B), e, t);
          }
          function Sc(e, t, a, u) {
            return e === r || (Nt(e, er[a]) && !Ee.call(u, a)) ? t : e;
          }
          function Tc(e, t, a, u, f, p) {
            return (
              Oe(e) && Oe(t) && (p.set(t, e), Zi(e, t, r, Tc, p), p.delete(t)),
              e
            );
          }
          function ov(e) {
            return Hr(e) ? r : e;
          }
          function Ic(e, t, a, u, f, p) {
            var m = a & Z,
              y = e.length,
              w = t.length;
            if (y != w && !(m && w > y)) return !1;
            var S = p.get(e),
              T = p.get(t);
            if (S && T) return S == t && T == e;
            var A = -1,
              P = !0,
              B = a & W ? new Nn() : r;
            for (p.set(e, t), p.set(t, e); ++A < y; ) {
              var K = e[A],
                ue = t[A];
              if (u) var G = m ? u(ue, K, A, t, e, p) : u(K, ue, A, e, t, p);
              if (G !== r) {
                if (G) continue;
                P = !1;
                break;
              }
              if (B) {
                if (
                  !Xa(t, function (fe, he) {
                    if (!Ar(B, he) && (K === fe || f(K, fe, a, u, p)))
                      return B.push(he);
                  })
                ) {
                  P = !1;
                  break;
                }
              } else if (!(K === ue || f(K, ue, a, u, p))) {
                P = !1;
                break;
              }
            }
            return p.delete(e), p.delete(t), P;
          }
          function uv(e, t, a, u, f, p, m) {
            switch (a) {
              case Kn:
                if (
                  e.byteLength != t.byteLength ||
                  e.byteOffset != t.byteOffset
                )
                  return !1;
                (e = e.buffer), (t = t.buffer);
              case Cr:
                return !(
                  e.byteLength != t.byteLength || !p(new Ti(e), new Ti(t))
                );
              case Kt:
              case Gt:
              case I:
                return Nt(+e, +t);
              case Rn:
                return e.name == t.name && e.message == t.message;
              case be:
              case Le:
                return e == t + "";
              case wt:
                var y = is;
              case oe:
                var w = u & Z;
                if ((y || (y = wi), e.size != t.size && !w)) return !1;
                var S = m.get(e);
                if (S) return S == t;
                (u |= W), m.set(e, t);
                var T = Ic(y(e), y(t), u, f, p, m);
                return m.delete(e), T;
              case pi:
                if (Pr) return Pr.call(e) == Pr.call(t);
            }
            return !1;
          }
          function cv(e, t, a, u, f, p) {
            var m = a & Z,
              y = As(e),
              w = y.length,
              S = As(t),
              T = S.length;
            if (w != T && !m) return !1;
            for (var A = w; A--; ) {
              var P = y[A];
              if (!(m ? P in t : Ee.call(t, P))) return !1;
            }
            var B = p.get(e),
              K = p.get(t);
            if (B && K) return B == t && K == e;
            var ue = !0;
            p.set(e, t), p.set(t, e);
            for (var G = m; ++A < w; ) {
              P = y[A];
              var fe = e[P],
                he = t[P];
              if (u) var vt = m ? u(he, fe, P, t, e, p) : u(fe, he, P, e, t, p);
              if (!(vt === r ? fe === he || f(fe, he, a, u, p) : vt)) {
                ue = !1;
                break;
              }
              G || (G = P == "constructor");
            }
            if (ue && !G) {
              var nt = e.constructor,
                mt = t.constructor;
              nt != mt &&
                "constructor" in e &&
                "constructor" in t &&
                !(
                  typeof nt == "function" &&
                  nt instanceof nt &&
                  typeof mt == "function" &&
                  mt instanceof mt
                ) &&
                (ue = !1);
            }
            return p.delete(e), p.delete(t), ue;
          }
          function en(e) {
            return Ms(Dc(e, r, $c), e + "");
          }
          function As(e) {
            return ju(e, Be, Ds);
          }
          function Os(e) {
            return ju(e, ot, Cc);
          }
          var Rs = Li
            ? function (e) {
                return Li.get(e);
              }
            : Js;
          function qi(e) {
            for (
              var t = e.name + "", a = nr[t], u = Ee.call(nr, t) ? a.length : 0;
              u--;

            ) {
              var f = a[u],
                p = f.func;
              if (p == null || p == e) return f.name;
            }
            return t;
          }
          function sr(e) {
            var t = Ee.call(h, "placeholder") ? h : e;
            return t.placeholder;
          }
          function j() {
            var e = h.iteratee || Ks;
            return (
              (e = e === Ks ? Ju : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }
          function ji(e, t) {
            var a = e.__data__;
            return mv(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
          }
          function Ls(e) {
            for (var t = Be(e), a = t.length; a--; ) {
              var u = t[a],
                f = e[u];
              t[a] = [u, f, Rc(f)];
            }
            return t;
          }
          function Zn(e, t) {
            var a = wp(e, t);
            return Gu(a) ? a : r;
          }
          function lv(e) {
            var t = Ee.call(e, Dn),
              a = e[Dn];
            try {
              e[Dn] = r;
              var u = !0;
            } catch {}
            var f = ki.call(e);
            return u && (t ? (e[Dn] = a) : delete e[Dn]), f;
          }
          var Ds = ss
              ? function (e) {
                  return e == null
                    ? []
                    : ((e = Se(e)),
                      vn(ss(e), function (t) {
                        return Pu.call(e, t);
                      }));
                }
              : Ys,
            Cc = ss
              ? function (e) {
                  for (var t = []; e; ) mn(t, Ds(e)), (e = Ii(e));
                  return t;
                }
              : Ys,
            Ye = et;
          ((os && Ye(new os(new ArrayBuffer(1))) != Kn) ||
            (Rr && Ye(new Rr()) != wt) ||
            (us && Ye(us.resolve()) != ge) ||
            (tr && Ye(new tr()) != oe) ||
            (Lr && Ye(new Lr()) != Ir)) &&
            (Ye = function (e) {
              var t = et(e),
                a = t == O ? e.constructor : r,
                u = a ? Fn(a) : "";
              if (u)
                switch (u) {
                  case qp:
                    return Kn;
                  case jp:
                    return wt;
                  case Kp:
                    return ge;
                  case Gp:
                    return oe;
                  case Jp:
                    return Ir;
                }
              return t;
            });
          function fv(e, t, a) {
            for (var u = -1, f = a.length; ++u < f; ) {
              var p = a[u],
                m = p.size;
              switch (p.type) {
                case "drop":
                  e += m;
                  break;
                case "dropRight":
                  t -= m;
                  break;
                case "take":
                  t = Je(t, e + m);
                  break;
                case "takeRight":
                  e = Fe(e, t - m);
                  break;
              }
            }
            return { start: e, end: t };
          }
          function dv(e) {
            var t = e.match(yh);
            return t ? t[1].split(_h) : [];
          }
          function Ac(e, t, a) {
            t = bn(t, e);
            for (var u = -1, f = t.length, p = !1; ++u < f; ) {
              var m = Vt(t[u]);
              if (!(p = e != null && a(e, m))) break;
              e = e[m];
            }
            return p || ++u != f
              ? p
              : ((f = e == null ? 0 : e.length),
                !!f && ea(f) && tn(m, f) && (ne(e) || Bn(e)));
          }
          function hv(e) {
            var t = e.length,
              a = new e.constructor(t);
            return (
              t &&
                typeof e[0] == "string" &&
                Ee.call(e, "index") &&
                ((a.index = e.index), (a.input = e.input)),
              a
            );
          }
          function Oc(e) {
            return typeof e.constructor == "function" && !Wr(e)
              ? rr(Ii(e))
              : {};
          }
          function pv(e, t, a) {
            var u = e.constructor;
            switch (t) {
              case Cr:
                return Ts(e);
              case Kt:
              case Gt:
                return new u(+e);
              case Kn:
                return Yg(e, a);
              case La:
              case Da:
              case Pa:
              case Na:
              case Ua:
              case Ma:
              case Za:
              case Fa:
              case Ba:
                return dc(e, a);
              case wt:
                return new u();
              case I:
              case Le:
                return new u(e);
              case be:
                return Xg(e);
              case oe:
                return new u();
              case pi:
                return Qg(e);
            }
          }
          function gv(e, t) {
            var a = t.length;
            if (!a) return e;
            var u = a - 1;
            return (
              (t[u] = (a > 1 ? "& " : "") + t[u]),
              (t = t.join(a > 2 ? ", " : " ")),
              e.replace(
                mh,
                `{
/* [wrapped with ` +
                  t +
                  `] */
`
              )
            );
          }
          function vv(e) {
            return ne(e) || Bn(e) || !!(Nu && e && e[Nu]);
          }
          function tn(e, t) {
            var a = typeof e;
            return (
              (t = t == null ? lt : t),
              !!t &&
                (a == "number" || (a != "symbol" && Ch.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
            );
          }
          function tt(e, t, a) {
            if (!Oe(a)) return !1;
            var u = typeof t;
            return (
              u == "number" ? st(a) && tn(t, a.length) : u == "string" && t in a
            )
              ? Nt(a[t], e)
              : !1;
          }
          function Ps(e, t) {
            if (ne(e)) return !1;
            var a = typeof e;
            return a == "number" ||
              a == "symbol" ||
              a == "boolean" ||
              e == null ||
              gt(e)
              ? !0
              : hh.test(e) || !dh.test(e) || (t != null && e in Se(t));
          }
          function mv(e) {
            var t = typeof e;
            return t == "string" ||
              t == "number" ||
              t == "symbol" ||
              t == "boolean"
              ? e !== "__proto__"
              : e === null;
          }
          function Ns(e) {
            var t = qi(e),
              a = h[t];
            if (typeof a != "function" || !(t in de.prototype)) return !1;
            if (e === a) return !0;
            var u = Rs(a);
            return !!u && e === u[0];
          }
          function yv(e) {
            return !!Ru && Ru in e;
          }
          var _v = bi ? nn : Xs;
          function Wr(e) {
            var t = e && e.constructor,
              a = (typeof t == "function" && t.prototype) || er;
            return e === a;
          }
          function Rc(e) {
            return e === e && !Oe(e);
          }
          function Lc(e, t) {
            return function (a) {
              return a == null ? !1 : a[e] === t && (t !== r || e in Se(a));
            };
          }
          function wv(e) {
            var t = Xi(e, function (u) {
                return a.size === v && a.clear(), u;
              }),
              a = t.cache;
            return t;
          }
          function xv(e, t) {
            var a = e[1],
              u = t[1],
              f = a | u,
              p = f < (z | U | q),
              m =
                (u == q && a == se) ||
                (u == q && a == xe && e[7].length <= t[8]) ||
                (u == (q | xe) && t[7].length <= t[8] && a == se);
            if (!(p || m)) return e;
            u & z && ((e[2] = t[2]), (f |= a & z ? 0 : $));
            var y = t[3];
            if (y) {
              var w = e[3];
              (e[3] = w ? pc(w, y, t[4]) : y), (e[4] = w ? yn(e[3], x) : t[4]);
            }
            return (
              (y = t[5]),
              y &&
                ((w = e[5]),
                (e[5] = w ? gc(w, y, t[6]) : y),
                (e[6] = w ? yn(e[5], x) : t[6])),
              (y = t[7]),
              y && (e[7] = y),
              u & q && (e[8] = e[8] == null ? t[8] : Je(e[8], t[8])),
              e[9] == null && (e[9] = t[9]),
              (e[0] = t[0]),
              (e[1] = f),
              e
            );
          }
          function bv(e) {
            var t = [];
            if (e != null) for (var a in Se(e)) t.push(a);
            return t;
          }
          function Ev(e) {
            return ki.call(e);
          }
          function Dc(e, t, a) {
            return (
              (t = Fe(t === r ? e.length - 1 : t, 0)),
              function () {
                for (
                  var u = arguments, f = -1, p = Fe(u.length - t, 0), m = b(p);
                  ++f < p;

                )
                  m[f] = u[t + f];
                f = -1;
                for (var y = b(t + 1); ++f < t; ) y[f] = u[f];
                return (y[t] = a(m)), dt(e, this, y);
              }
            );
          }
          function Pc(e, t) {
            return t.length < 2 ? e : Mn(e, Tt(t, 0, -1));
          }
          function kv(e, t) {
            for (var a = e.length, u = Je(t.length, a), f = at(e); u--; ) {
              var p = t[u];
              e[u] = tn(p, a) ? f[p] : r;
            }
            return e;
          }
          function Us(e, t) {
            if (
              !(t === "constructor" && typeof e[t] == "function") &&
              t != "__proto__"
            )
              return e[t];
          }
          var Nc = Mc(ic),
            $r =
              Fp ||
              function (e, t) {
                return He.setTimeout(e, t);
              },
            Ms = Mc(jg);
          function Uc(e, t, a) {
            var u = t + "";
            return Ms(e, gv(u, Sv(dv(u), a)));
          }
          function Mc(e) {
            var t = 0,
              a = 0;
            return function () {
              var u = Hp(),
                f = ct - (u - a);
              if (((a = u), f > 0)) {
                if (++t >= Ue) return arguments[0];
              } else t = 0;
              return e.apply(r, arguments);
            };
          }
          function Ki(e, t) {
            var a = -1,
              u = e.length,
              f = u - 1;
            for (t = t === r ? u : t; ++a < t; ) {
              var p = _s(a, f),
                m = e[p];
              (e[p] = e[a]), (e[a] = m);
            }
            return (e.length = t), e;
          }
          var Zc = wv(function (e) {
            var t = [];
            return (
              e.charCodeAt(0) === 46 && t.push(""),
              e.replace(ph, function (a, u, f, p) {
                t.push(f ? p.replace(bh, "$1") : u || a);
              }),
              t
            );
          });
          function Vt(e) {
            if (typeof e == "string" || gt(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -it ? "-0" : t;
          }
          function Fn(e) {
            if (e != null) {
              try {
                return Ei.call(e);
              } catch {}
              try {
                return e + "";
              } catch {}
            }
            return "";
          }
          function Sv(e, t) {
            return (
              bt(hn, function (a) {
                var u = "_." + a[0];
                t & a[1] && !yi(e, u) && e.push(u);
              }),
              e.sort()
            );
          }
          function Fc(e) {
            if (e instanceof de) return e.clone();
            var t = new kt(e.__wrapped__, e.__chain__);
            return (
              (t.__actions__ = at(e.__actions__)),
              (t.__index__ = e.__index__),
              (t.__values__ = e.__values__),
              t
            );
          }
          function Tv(e, t, a) {
            (a ? tt(e, t, a) : t === r) ? (t = 1) : (t = Fe(ae(t), 0));
            var u = e == null ? 0 : e.length;
            if (!u || t < 1) return [];
            for (var f = 0, p = 0, m = b(Oi(u / t)); f < u; )
              m[p++] = Tt(e, f, (f += t));
            return m;
          }
          function Iv(e) {
            for (
              var t = -1, a = e == null ? 0 : e.length, u = 0, f = [];
              ++t < a;

            ) {
              var p = e[t];
              p && (f[u++] = p);
            }
            return f;
          }
          function Cv() {
            var e = arguments.length;
            if (!e) return [];
            for (var t = b(e - 1), a = arguments[0], u = e; u--; )
              t[u - 1] = arguments[u];
            return mn(ne(a) ? at(a) : [a], Ve(t, 1));
          }
          var Av = le(function (e, t) {
              return De(e) ? Ur(e, Ve(t, 1, De, !0)) : [];
            }),
            Ov = le(function (e, t) {
              var a = It(t);
              return (
                De(a) && (a = r), De(e) ? Ur(e, Ve(t, 1, De, !0), j(a, 2)) : []
              );
            }),
            Rv = le(function (e, t) {
              var a = It(t);
              return (
                De(a) && (a = r), De(e) ? Ur(e, Ve(t, 1, De, !0), r, a) : []
              );
            });
          function Lv(e, t, a) {
            var u = e == null ? 0 : e.length;
            return u
              ? ((t = a || t === r ? 1 : ae(t)), Tt(e, t < 0 ? 0 : t, u))
              : [];
          }
          function Dv(e, t, a) {
            var u = e == null ? 0 : e.length;
            return u
              ? ((t = a || t === r ? 1 : ae(t)),
                (t = u - t),
                Tt(e, 0, t < 0 ? 0 : t))
              : [];
          }
          function Pv(e, t) {
            return e && e.length ? Bi(e, j(t, 3), !0, !0) : [];
          }
          function Nv(e, t) {
            return e && e.length ? Bi(e, j(t, 3), !0) : [];
          }
          function Uv(e, t, a, u) {
            var f = e == null ? 0 : e.length;
            return f
              ? (a && typeof a != "number" && tt(e, t, a) && ((a = 0), (u = f)),
                Cg(e, t, a, u))
              : [];
          }
          function Bc(e, t, a) {
            var u = e == null ? 0 : e.length;
            if (!u) return -1;
            var f = a == null ? 0 : ae(a);
            return f < 0 && (f = Fe(u + f, 0)), _i(e, j(t, 3), f);
          }
          function Wc(e, t, a) {
            var u = e == null ? 0 : e.length;
            if (!u) return -1;
            var f = u - 1;
            return (
              a !== r &&
                ((f = ae(a)), (f = a < 0 ? Fe(u + f, 0) : Je(f, u - 1))),
              _i(e, j(t, 3), f, !0)
            );
          }
          function $c(e) {
            var t = e == null ? 0 : e.length;
            return t ? Ve(e, 1) : [];
          }
          function Mv(e) {
            var t = e == null ? 0 : e.length;
            return t ? Ve(e, it) : [];
          }
          function Zv(e, t) {
            var a = e == null ? 0 : e.length;
            return a ? ((t = t === r ? 1 : ae(t)), Ve(e, t)) : [];
          }
          function Fv(e) {
            for (var t = -1, a = e == null ? 0 : e.length, u = {}; ++t < a; ) {
              var f = e[t];
              u[f[0]] = f[1];
            }
            return u;
          }
          function Hc(e) {
            return e && e.length ? e[0] : r;
          }
          function Bv(e, t, a) {
            var u = e == null ? 0 : e.length;
            if (!u) return -1;
            var f = a == null ? 0 : ae(a);
            return f < 0 && (f = Fe(u + f, 0)), Jn(e, t, f);
          }
          function Wv(e) {
            var t = e == null ? 0 : e.length;
            return t ? Tt(e, 0, -1) : [];
          }
          var $v = le(function (e) {
              var t = Ce(e, ks);
              return t.length && t[0] === e[0] ? ps(t) : [];
            }),
            Hv = le(function (e) {
              var t = It(e),
                a = Ce(e, ks);
              return (
                t === It(a) ? (t = r) : a.pop(),
                a.length && a[0] === e[0] ? ps(a, j(t, 2)) : []
              );
            }),
            Vv = le(function (e) {
              var t = It(e),
                a = Ce(e, ks);
              return (
                (t = typeof t == "function" ? t : r),
                t && a.pop(),
                a.length && a[0] === e[0] ? ps(a, r, t) : []
              );
            });
          function zv(e, t) {
            return e == null ? "" : Wp.call(e, t);
          }
          function It(e) {
            var t = e == null ? 0 : e.length;
            return t ? e[t - 1] : r;
          }
          function qv(e, t, a) {
            var u = e == null ? 0 : e.length;
            if (!u) return -1;
            var f = u;
            return (
              a !== r &&
                ((f = ae(a)), (f = f < 0 ? Fe(u + f, 0) : Je(f, u - 1))),
              t === t ? Sp(e, t, f) : _i(e, Eu, f, !0)
            );
          }
          function jv(e, t) {
            return e && e.length ? ec(e, ae(t)) : r;
          }
          var Kv = le(Vc);
          function Vc(e, t) {
            return e && e.length && t && t.length ? ys(e, t) : e;
          }
          function Gv(e, t, a) {
            return e && e.length && t && t.length ? ys(e, t, j(a, 2)) : e;
          }
          function Jv(e, t, a) {
            return e && e.length && t && t.length ? ys(e, t, r, a) : e;
          }
          var Yv = en(function (e, t) {
            var a = e == null ? 0 : e.length,
              u = ls(e, t);
            return (
              rc(
                e,
                Ce(t, function (f) {
                  return tn(f, a) ? +f : f;
                }).sort(hc)
              ),
              u
            );
          });
          function Xv(e, t) {
            var a = [];
            if (!(e && e.length)) return a;
            var u = -1,
              f = [],
              p = e.length;
            for (t = j(t, 3); ++u < p; ) {
              var m = e[u];
              t(m, u, e) && (a.push(m), f.push(u));
            }
            return rc(e, f), a;
          }
          function Zs(e) {
            return e == null ? e : zp.call(e);
          }
          function Qv(e, t, a) {
            var u = e == null ? 0 : e.length;
            return u
              ? (a && typeof a != "number" && tt(e, t, a)
                  ? ((t = 0), (a = u))
                  : ((t = t == null ? 0 : ae(t)), (a = a === r ? u : ae(a))),
                Tt(e, t, a))
              : [];
          }
          function em(e, t) {
            return Fi(e, t);
          }
          function tm(e, t, a) {
            return xs(e, t, j(a, 2));
          }
          function nm(e, t) {
            var a = e == null ? 0 : e.length;
            if (a) {
              var u = Fi(e, t);
              if (u < a && Nt(e[u], t)) return u;
            }
            return -1;
          }
          function rm(e, t) {
            return Fi(e, t, !0);
          }
          function im(e, t, a) {
            return xs(e, t, j(a, 2), !0);
          }
          function am(e, t) {
            var a = e == null ? 0 : e.length;
            if (a) {
              var u = Fi(e, t, !0) - 1;
              if (Nt(e[u], t)) return u;
            }
            return -1;
          }
          function sm(e) {
            return e && e.length ? ac(e) : [];
          }
          function om(e, t) {
            return e && e.length ? ac(e, j(t, 2)) : [];
          }
          function um(e) {
            var t = e == null ? 0 : e.length;
            return t ? Tt(e, 1, t) : [];
          }
          function cm(e, t, a) {
            return e && e.length
              ? ((t = a || t === r ? 1 : ae(t)), Tt(e, 0, t < 0 ? 0 : t))
              : [];
          }
          function lm(e, t, a) {
            var u = e == null ? 0 : e.length;
            return u
              ? ((t = a || t === r ? 1 : ae(t)),
                (t = u - t),
                Tt(e, t < 0 ? 0 : t, u))
              : [];
          }
          function fm(e, t) {
            return e && e.length ? Bi(e, j(t, 3), !1, !0) : [];
          }
          function dm(e, t) {
            return e && e.length ? Bi(e, j(t, 3)) : [];
          }
          var hm = le(function (e) {
              return xn(Ve(e, 1, De, !0));
            }),
            pm = le(function (e) {
              var t = It(e);
              return De(t) && (t = r), xn(Ve(e, 1, De, !0), j(t, 2));
            }),
            gm = le(function (e) {
              var t = It(e);
              return (
                (t = typeof t == "function" ? t : r), xn(Ve(e, 1, De, !0), r, t)
              );
            });
          function vm(e) {
            return e && e.length ? xn(e) : [];
          }
          function mm(e, t) {
            return e && e.length ? xn(e, j(t, 2)) : [];
          }
          function ym(e, t) {
            return (
              (t = typeof t == "function" ? t : r),
              e && e.length ? xn(e, r, t) : []
            );
          }
          function Fs(e) {
            if (!(e && e.length)) return [];
            var t = 0;
            return (
              (e = vn(e, function (a) {
                if (De(a)) return (t = Fe(a.length, t)), !0;
              })),
              ns(t, function (a) {
                return Ce(e, Qa(a));
              })
            );
          }
          function zc(e, t) {
            if (!(e && e.length)) return [];
            var a = Fs(e);
            return t == null
              ? a
              : Ce(a, function (u) {
                  return dt(t, r, u);
                });
          }
          var _m = le(function (e, t) {
              return De(e) ? Ur(e, t) : [];
            }),
            wm = le(function (e) {
              return Es(vn(e, De));
            }),
            xm = le(function (e) {
              var t = It(e);
              return De(t) && (t = r), Es(vn(e, De), j(t, 2));
            }),
            bm = le(function (e) {
              var t = It(e);
              return (t = typeof t == "function" ? t : r), Es(vn(e, De), r, t);
            }),
            Em = le(Fs);
          function km(e, t) {
            return cc(e || [], t || [], Nr);
          }
          function Sm(e, t) {
            return cc(e || [], t || [], Fr);
          }
          var Tm = le(function (e) {
            var t = e.length,
              a = t > 1 ? e[t - 1] : r;
            return (a = typeof a == "function" ? (e.pop(), a) : r), zc(e, a);
          });
          function qc(e) {
            var t = h(e);
            return (t.__chain__ = !0), t;
          }
          function Im(e, t) {
            return t(e), e;
          }
          function Gi(e, t) {
            return t(e);
          }
          var Cm = en(function (e) {
            var t = e.length,
              a = t ? e[0] : 0,
              u = this.__wrapped__,
              f = function (p) {
                return ls(p, e);
              };
            return t > 1 ||
              this.__actions__.length ||
              !(u instanceof de) ||
              !tn(a)
              ? this.thru(f)
              : ((u = u.slice(a, +a + (t ? 1 : 0))),
                u.__actions__.push({ func: Gi, args: [f], thisArg: r }),
                new kt(u, this.__chain__).thru(function (p) {
                  return t && !p.length && p.push(r), p;
                }));
          });
          function Am() {
            return qc(this);
          }
          function Om() {
            return new kt(this.value(), this.__chain__);
          }
          function Rm() {
            this.__values__ === r && (this.__values__ = sl(this.value()));
            var e = this.__index__ >= this.__values__.length,
              t = e ? r : this.__values__[this.__index__++];
            return { done: e, value: t };
          }
          function Lm() {
            return this;
          }
          function Dm(e) {
            for (var t, a = this; a instanceof Pi; ) {
              var u = Fc(a);
              (u.__index__ = 0),
                (u.__values__ = r),
                t ? (f.__wrapped__ = u) : (t = u);
              var f = u;
              a = a.__wrapped__;
            }
            return (f.__wrapped__ = e), t;
          }
          function Pm() {
            var e = this.__wrapped__;
            if (e instanceof de) {
              var t = e;
              return (
                this.__actions__.length && (t = new de(this)),
                (t = t.reverse()),
                t.__actions__.push({ func: Gi, args: [Zs], thisArg: r }),
                new kt(t, this.__chain__)
              );
            }
            return this.thru(Zs);
          }
          function Nm() {
            return uc(this.__wrapped__, this.__actions__);
          }
          var Um = Wi(function (e, t, a) {
            Ee.call(e, a) ? ++e[a] : Xt(e, a, 1);
          });
          function Mm(e, t, a) {
            var u = ne(e) ? xu : Ig;
            return a && tt(e, t, a) && (t = r), u(e, j(t, 3));
          }
          function Zm(e, t) {
            var a = ne(e) ? vn : zu;
            return a(e, j(t, 3));
          }
          var Fm = _c(Bc),
            Bm = _c(Wc);
          function Wm(e, t) {
            return Ve(Ji(e, t), 1);
          }
          function $m(e, t) {
            return Ve(Ji(e, t), it);
          }
          function Hm(e, t, a) {
            return (a = a === r ? 1 : ae(a)), Ve(Ji(e, t), a);
          }
          function jc(e, t) {
            var a = ne(e) ? bt : wn;
            return a(e, j(t, 3));
          }
          function Kc(e, t) {
            var a = ne(e) ? up : Vu;
            return a(e, j(t, 3));
          }
          var Vm = Wi(function (e, t, a) {
            Ee.call(e, a) ? e[a].push(t) : Xt(e, a, [t]);
          });
          function zm(e, t, a, u) {
            (e = st(e) ? e : ur(e)), (a = a && !u ? ae(a) : 0);
            var f = e.length;
            return (
              a < 0 && (a = Fe(f + a, 0)),
              ta(e) ? a <= f && e.indexOf(t, a) > -1 : !!f && Jn(e, t, a) > -1
            );
          }
          var qm = le(function (e, t, a) {
              var u = -1,
                f = typeof t == "function",
                p = st(e) ? b(e.length) : [];
              return (
                wn(e, function (m) {
                  p[++u] = f ? dt(t, m, a) : Mr(m, t, a);
                }),
                p
              );
            }),
            jm = Wi(function (e, t, a) {
              Xt(e, a, t);
            });
          function Ji(e, t) {
            var a = ne(e) ? Ce : Yu;
            return a(e, j(t, 3));
          }
          function Km(e, t, a, u) {
            return e == null
              ? []
              : (ne(t) || (t = t == null ? [] : [t]),
                (a = u ? r : a),
                ne(a) || (a = a == null ? [] : [a]),
                tc(e, t, a));
          }
          var Gm = Wi(
            function (e, t, a) {
              e[a ? 0 : 1].push(t);
            },
            function () {
              return [[], []];
            }
          );
          function Jm(e, t, a) {
            var u = ne(e) ? Ya : Su,
              f = arguments.length < 3;
            return u(e, j(t, 4), a, f, wn);
          }
          function Ym(e, t, a) {
            var u = ne(e) ? cp : Su,
              f = arguments.length < 3;
            return u(e, j(t, 4), a, f, Vu);
          }
          function Xm(e, t) {
            var a = ne(e) ? vn : zu;
            return a(e, Qi(j(t, 3)));
          }
          function Qm(e) {
            var t = ne(e) ? Bu : zg;
            return t(e);
          }
          function ey(e, t, a) {
            (a ? tt(e, t, a) : t === r) ? (t = 1) : (t = ae(t));
            var u = ne(e) ? bg : qg;
            return u(e, t);
          }
          function ty(e) {
            var t = ne(e) ? Eg : Kg;
            return t(e);
          }
          function ny(e) {
            if (e == null) return 0;
            if (st(e)) return ta(e) ? Xn(e) : e.length;
            var t = Ye(e);
            return t == wt || t == oe ? e.size : vs(e).length;
          }
          function ry(e, t, a) {
            var u = ne(e) ? Xa : Gg;
            return a && tt(e, t, a) && (t = r), u(e, j(t, 3));
          }
          var iy = le(function (e, t) {
              if (e == null) return [];
              var a = t.length;
              return (
                a > 1 && tt(e, t[0], t[1])
                  ? (t = [])
                  : a > 2 && tt(t[0], t[1], t[2]) && (t = [t[0]]),
                tc(e, Ve(t, 1), [])
              );
            }),
            Yi =
              Zp ||
              function () {
                return He.Date.now();
              };
          function ay(e, t) {
            if (typeof t != "function") throw new Et(l);
            return (
              (e = ae(e)),
              function () {
                if (--e < 1) return t.apply(this, arguments);
              }
            );
          }
          function Gc(e, t, a) {
            return (
              (t = a ? r : t),
              (t = e && t == null ? e.length : t),
              Qt(e, q, r, r, r, r, t)
            );
          }
          function Jc(e, t) {
            var a;
            if (typeof t != "function") throw new Et(l);
            return (
              (e = ae(e)),
              function () {
                return (
                  --e > 0 && (a = t.apply(this, arguments)),
                  e <= 1 && (t = r),
                  a
                );
              }
            );
          }
          var Bs = le(function (e, t, a) {
              var u = z;
              if (a.length) {
                var f = yn(a, sr(Bs));
                u |= X;
              }
              return Qt(e, u, t, a, f);
            }),
            Yc = le(function (e, t, a) {
              var u = z | U;
              if (a.length) {
                var f = yn(a, sr(Yc));
                u |= X;
              }
              return Qt(t, u, e, a, f);
            });
          function Xc(e, t, a) {
            t = a ? r : t;
            var u = Qt(e, se, r, r, r, r, r, t);
            return (u.placeholder = Xc.placeholder), u;
          }
          function Qc(e, t, a) {
            t = a ? r : t;
            var u = Qt(e, pe, r, r, r, r, r, t);
            return (u.placeholder = Qc.placeholder), u;
          }
          function el(e, t, a) {
            var u,
              f,
              p,
              m,
              y,
              w,
              S = 0,
              T = !1,
              A = !1,
              P = !0;
            if (typeof e != "function") throw new Et(l);
            (t = Ct(t) || 0),
              Oe(a) &&
                ((T = !!a.leading),
                (A = "maxWait" in a),
                (p = A ? Fe(Ct(a.maxWait) || 0, t) : p),
                (P = "trailing" in a ? !!a.trailing : P));
            function B(Pe) {
              var Ut = u,
                an = f;
              return (u = f = r), (S = Pe), (m = e.apply(an, Ut)), m;
            }
            function K(Pe) {
              return (S = Pe), (y = $r(fe, t)), T ? B(Pe) : m;
            }
            function ue(Pe) {
              var Ut = Pe - w,
                an = Pe - S,
                _l = t - Ut;
              return A ? Je(_l, p - an) : _l;
            }
            function G(Pe) {
              var Ut = Pe - w,
                an = Pe - S;
              return w === r || Ut >= t || Ut < 0 || (A && an >= p);
            }
            function fe() {
              var Pe = Yi();
              if (G(Pe)) return he(Pe);
              y = $r(fe, ue(Pe));
            }
            function he(Pe) {
              return (y = r), P && u ? B(Pe) : ((u = f = r), m);
            }
            function vt() {
              y !== r && lc(y), (S = 0), (u = w = f = y = r);
            }
            function nt() {
              return y === r ? m : he(Yi());
            }
            function mt() {
              var Pe = Yi(),
                Ut = G(Pe);
              if (((u = arguments), (f = this), (w = Pe), Ut)) {
                if (y === r) return K(w);
                if (A) return lc(y), (y = $r(fe, t)), B(w);
              }
              return y === r && (y = $r(fe, t)), m;
            }
            return (mt.cancel = vt), (mt.flush = nt), mt;
          }
          var sy = le(function (e, t) {
              return Hu(e, 1, t);
            }),
            oy = le(function (e, t, a) {
              return Hu(e, Ct(t) || 0, a);
            });
          function uy(e) {
            return Qt(e, V);
          }
          function Xi(e, t) {
            if (typeof e != "function" || (t != null && typeof t != "function"))
              throw new Et(l);
            var a = function () {
              var u = arguments,
                f = t ? t.apply(this, u) : u[0],
                p = a.cache;
              if (p.has(f)) return p.get(f);
              var m = e.apply(this, u);
              return (a.cache = p.set(f, m) || p), m;
            };
            return (a.cache = new (Xi.Cache || Yt)()), a;
          }
          Xi.Cache = Yt;
          function Qi(e) {
            if (typeof e != "function") throw new Et(l);
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return !e.call(this);
                case 1:
                  return !e.call(this, t[0]);
                case 2:
                  return !e.call(this, t[0], t[1]);
                case 3:
                  return !e.call(this, t[0], t[1], t[2]);
              }
              return !e.apply(this, t);
            };
          }
          function cy(e) {
            return Jc(2, e);
          }
          var ly = Jg(function (e, t) {
              t =
                t.length == 1 && ne(t[0])
                  ? Ce(t[0], ht(j()))
                  : Ce(Ve(t, 1), ht(j()));
              var a = t.length;
              return le(function (u) {
                for (var f = -1, p = Je(u.length, a); ++f < p; )
                  u[f] = t[f].call(this, u[f]);
                return dt(e, this, u);
              });
            }),
            Ws = le(function (e, t) {
              var a = yn(t, sr(Ws));
              return Qt(e, X, r, t, a);
            }),
            tl = le(function (e, t) {
              var a = yn(t, sr(tl));
              return Qt(e, we, r, t, a);
            }),
            fy = en(function (e, t) {
              return Qt(e, xe, r, r, r, t);
            });
          function dy(e, t) {
            if (typeof e != "function") throw new Et(l);
            return (t = t === r ? t : ae(t)), le(e, t);
          }
          function hy(e, t) {
            if (typeof e != "function") throw new Et(l);
            return (
              (t = t == null ? 0 : Fe(ae(t), 0)),
              le(function (a) {
                var u = a[t],
                  f = En(a, 0, t);
                return u && mn(f, u), dt(e, this, f);
              })
            );
          }
          function py(e, t, a) {
            var u = !0,
              f = !0;
            if (typeof e != "function") throw new Et(l);
            return (
              Oe(a) &&
                ((u = "leading" in a ? !!a.leading : u),
                (f = "trailing" in a ? !!a.trailing : f)),
              el(e, t, { leading: u, maxWait: t, trailing: f })
            );
          }
          function gy(e) {
            return Gc(e, 1);
          }
          function vy(e, t) {
            return Ws(Ss(t), e);
          }
          function my() {
            if (!arguments.length) return [];
            var e = arguments[0];
            return ne(e) ? e : [e];
          }
          function yy(e) {
            return St(e, D);
          }
          function _y(e, t) {
            return (t = typeof t == "function" ? t : r), St(e, D, t);
          }
          function wy(e) {
            return St(e, E | D);
          }
          function xy(e, t) {
            return (t = typeof t == "function" ? t : r), St(e, E | D, t);
          }
          function by(e, t) {
            return t == null || $u(e, t, Be(t));
          }
          function Nt(e, t) {
            return e === t || (e !== e && t !== t);
          }
          var Ey = zi(hs),
            ky = zi(function (e, t) {
              return e >= t;
            }),
            Bn = Ku(
              (function () {
                return arguments;
              })()
            )
              ? Ku
              : function (e) {
                  return Re(e) && Ee.call(e, "callee") && !Pu.call(e, "callee");
                },
            ne = b.isArray,
            Sy = gu ? ht(gu) : Dg;
          function st(e) {
            return e != null && ea(e.length) && !nn(e);
          }
          function De(e) {
            return Re(e) && st(e);
          }
          function Ty(e) {
            return e === !0 || e === !1 || (Re(e) && et(e) == Kt);
          }
          var kn = Bp || Xs,
            Iy = vu ? ht(vu) : Pg;
          function Cy(e) {
            return Re(e) && e.nodeType === 1 && !Hr(e);
          }
          function Ay(e) {
            if (e == null) return !0;
            if (
              st(e) &&
              (ne(e) ||
                typeof e == "string" ||
                typeof e.splice == "function" ||
                kn(e) ||
                or(e) ||
                Bn(e))
            )
              return !e.length;
            var t = Ye(e);
            if (t == wt || t == oe) return !e.size;
            if (Wr(e)) return !vs(e).length;
            for (var a in e) if (Ee.call(e, a)) return !1;
            return !0;
          }
          function Oy(e, t) {
            return Zr(e, t);
          }
          function Ry(e, t, a) {
            a = typeof a == "function" ? a : r;
            var u = a ? a(e, t) : r;
            return u === r ? Zr(e, t, r, a) : !!u;
          }
          function $s(e) {
            if (!Re(e)) return !1;
            var t = et(e);
            return (
              t == Rn ||
              t == Tr ||
              (typeof e.message == "string" &&
                typeof e.name == "string" &&
                !Hr(e))
            );
          }
          function Ly(e) {
            return typeof e == "number" && Uu(e);
          }
          function nn(e) {
            if (!Oe(e)) return !1;
            var t = et(e);
            return t == Wt || t == jn || t == gn || t == ye;
          }
          function nl(e) {
            return typeof e == "number" && e == ae(e);
          }
          function ea(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lt;
          }
          function Oe(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function");
          }
          function Re(e) {
            return e != null && typeof e == "object";
          }
          var rl = mu ? ht(mu) : Ug;
          function Dy(e, t) {
            return e === t || gs(e, t, Ls(t));
          }
          function Py(e, t, a) {
            return (a = typeof a == "function" ? a : r), gs(e, t, Ls(t), a);
          }
          function Ny(e) {
            return il(e) && e != +e;
          }
          function Uy(e) {
            if (_v(e)) throw new te(o);
            return Gu(e);
          }
          function My(e) {
            return e === null;
          }
          function Zy(e) {
            return e == null;
          }
          function il(e) {
            return typeof e == "number" || (Re(e) && et(e) == I);
          }
          function Hr(e) {
            if (!Re(e) || et(e) != O) return !1;
            var t = Ii(e);
            if (t === null) return !0;
            var a = Ee.call(t, "constructor") && t.constructor;
            return typeof a == "function" && a instanceof a && Ei.call(a) == Pp;
          }
          var Hs = yu ? ht(yu) : Mg;
          function Fy(e) {
            return nl(e) && e >= -lt && e <= lt;
          }
          var al = _u ? ht(_u) : Zg;
          function ta(e) {
            return typeof e == "string" || (!ne(e) && Re(e) && et(e) == Le);
          }
          function gt(e) {
            return typeof e == "symbol" || (Re(e) && et(e) == pi);
          }
          var or = wu ? ht(wu) : Fg;
          function By(e) {
            return e === r;
          }
          function Wy(e) {
            return Re(e) && Ye(e) == Ir;
          }
          function $y(e) {
            return Re(e) && et(e) == ih;
          }
          var Hy = zi(ms),
            Vy = zi(function (e, t) {
              return e <= t;
            });
          function sl(e) {
            if (!e) return [];
            if (st(e)) return ta(e) ? Dt(e) : at(e);
            if (Or && e[Or]) return bp(e[Or]());
            var t = Ye(e),
              a = t == wt ? is : t == oe ? wi : ur;
            return a(e);
          }
          function rn(e) {
            if (!e) return e === 0 ? e : 0;
            if (((e = Ct(e)), e === it || e === -it)) {
              var t = e < 0 ? -1 : 1;
              return t * di;
            }
            return e === e ? e : 0;
          }
          function ae(e) {
            var t = rn(e),
              a = t % 1;
            return t === t ? (a ? t - a : t) : 0;
          }
          function ol(e) {
            return e ? Un(ae(e), 0, ft) : 0;
          }
          function Ct(e) {
            if (typeof e == "number") return e;
            if (gt(e)) return On;
            if (Oe(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = Oe(t) ? t + "" : t;
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = Tu(e);
            var a = Sh.test(e);
            return a || Ih.test(e)
              ? ap(e.slice(2), a ? 2 : 8)
              : kh.test(e)
              ? On
              : +e;
          }
          function ul(e) {
            return Ht(e, ot(e));
          }
          function zy(e) {
            return e ? Un(ae(e), -lt, lt) : e === 0 ? e : 0;
          }
          function _e(e) {
            return e == null ? "" : pt(e);
          }
          var qy = ir(function (e, t) {
              if (Wr(t) || st(t)) {
                Ht(t, Be(t), e);
                return;
              }
              for (var a in t) Ee.call(t, a) && Nr(e, a, t[a]);
            }),
            cl = ir(function (e, t) {
              Ht(t, ot(t), e);
            }),
            na = ir(function (e, t, a, u) {
              Ht(t, ot(t), e, u);
            }),
            jy = ir(function (e, t, a, u) {
              Ht(t, Be(t), e, u);
            }),
            Ky = en(ls);
          function Gy(e, t) {
            var a = rr(e);
            return t == null ? a : Wu(a, t);
          }
          var Jy = le(function (e, t) {
              e = Se(e);
              var a = -1,
                u = t.length,
                f = u > 2 ? t[2] : r;
              for (f && tt(t[0], t[1], f) && (u = 1); ++a < u; )
                for (var p = t[a], m = ot(p), y = -1, w = m.length; ++y < w; ) {
                  var S = m[y],
                    T = e[S];
                  (T === r || (Nt(T, er[S]) && !Ee.call(e, S))) &&
                    (e[S] = p[S]);
                }
              return e;
            }),
            Yy = le(function (e) {
              return e.push(r, Tc), dt(ll, r, e);
            });
          function Xy(e, t) {
            return bu(e, j(t, 3), $t);
          }
          function Qy(e, t) {
            return bu(e, j(t, 3), ds);
          }
          function e0(e, t) {
            return e == null ? e : fs(e, j(t, 3), ot);
          }
          function t0(e, t) {
            return e == null ? e : qu(e, j(t, 3), ot);
          }
          function n0(e, t) {
            return e && $t(e, j(t, 3));
          }
          function r0(e, t) {
            return e && ds(e, j(t, 3));
          }
          function i0(e) {
            return e == null ? [] : Mi(e, Be(e));
          }
          function a0(e) {
            return e == null ? [] : Mi(e, ot(e));
          }
          function Vs(e, t, a) {
            var u = e == null ? r : Mn(e, t);
            return u === r ? a : u;
          }
          function s0(e, t) {
            return e != null && Ac(e, t, Ag);
          }
          function zs(e, t) {
            return e != null && Ac(e, t, Og);
          }
          var o0 = xc(function (e, t, a) {
              t != null && typeof t.toString != "function" && (t = ki.call(t)),
                (e[t] = a);
            }, js(ut)),
            u0 = xc(function (e, t, a) {
              t != null && typeof t.toString != "function" && (t = ki.call(t)),
                Ee.call(e, t) ? e[t].push(a) : (e[t] = [a]);
            }, j),
            c0 = le(Mr);
          function Be(e) {
            return st(e) ? Fu(e) : vs(e);
          }
          function ot(e) {
            return st(e) ? Fu(e, !0) : Bg(e);
          }
          function l0(e, t) {
            var a = {};
            return (
              (t = j(t, 3)),
              $t(e, function (u, f, p) {
                Xt(a, t(u, f, p), u);
              }),
              a
            );
          }
          function f0(e, t) {
            var a = {};
            return (
              (t = j(t, 3)),
              $t(e, function (u, f, p) {
                Xt(a, f, t(u, f, p));
              }),
              a
            );
          }
          var d0 = ir(function (e, t, a) {
              Zi(e, t, a);
            }),
            ll = ir(function (e, t, a, u) {
              Zi(e, t, a, u);
            }),
            h0 = en(function (e, t) {
              var a = {};
              if (e == null) return a;
              var u = !1;
              (t = Ce(t, function (p) {
                return (p = bn(p, e)), u || (u = p.length > 1), p;
              })),
                Ht(e, Os(e), a),
                u && (a = St(a, E | C | D, ov));
              for (var f = t.length; f--; ) bs(a, t[f]);
              return a;
            });
          function p0(e, t) {
            return fl(e, Qi(j(t)));
          }
          var g0 = en(function (e, t) {
            return e == null ? {} : $g(e, t);
          });
          function fl(e, t) {
            if (e == null) return {};
            var a = Ce(Os(e), function (u) {
              return [u];
            });
            return (
              (t = j(t)),
              nc(e, a, function (u, f) {
                return t(u, f[0]);
              })
            );
          }
          function v0(e, t, a) {
            t = bn(t, e);
            var u = -1,
              f = t.length;
            for (f || ((f = 1), (e = r)); ++u < f; ) {
              var p = e == null ? r : e[Vt(t[u])];
              p === r && ((u = f), (p = a)), (e = nn(p) ? p.call(e) : p);
            }
            return e;
          }
          function m0(e, t, a) {
            return e == null ? e : Fr(e, t, a);
          }
          function y0(e, t, a, u) {
            return (
              (u = typeof u == "function" ? u : r),
              e == null ? e : Fr(e, t, a, u)
            );
          }
          var dl = kc(Be),
            hl = kc(ot);
          function _0(e, t, a) {
            var u = ne(e),
              f = u || kn(e) || or(e);
            if (((t = j(t, 4)), a == null)) {
              var p = e && e.constructor;
              f
                ? (a = u ? new p() : [])
                : Oe(e)
                ? (a = nn(p) ? rr(Ii(e)) : {})
                : (a = {});
            }
            return (
              (f ? bt : $t)(e, function (m, y, w) {
                return t(a, m, y, w);
              }),
              a
            );
          }
          function w0(e, t) {
            return e == null ? !0 : bs(e, t);
          }
          function x0(e, t, a) {
            return e == null ? e : oc(e, t, Ss(a));
          }
          function b0(e, t, a, u) {
            return (
              (u = typeof u == "function" ? u : r),
              e == null ? e : oc(e, t, Ss(a), u)
            );
          }
          function ur(e) {
            return e == null ? [] : rs(e, Be(e));
          }
          function E0(e) {
            return e == null ? [] : rs(e, ot(e));
          }
          function k0(e, t, a) {
            return (
              a === r && ((a = t), (t = r)),
              a !== r && ((a = Ct(a)), (a = a === a ? a : 0)),
              t !== r && ((t = Ct(t)), (t = t === t ? t : 0)),
              Un(Ct(e), t, a)
            );
          }
          function S0(e, t, a) {
            return (
              (t = rn(t)),
              a === r ? ((a = t), (t = 0)) : (a = rn(a)),
              (e = Ct(e)),
              Rg(e, t, a)
            );
          }
          function T0(e, t, a) {
            if (
              (a && typeof a != "boolean" && tt(e, t, a) && (t = a = r),
              a === r &&
                (typeof t == "boolean"
                  ? ((a = t), (t = r))
                  : typeof e == "boolean" && ((a = e), (e = r))),
              e === r && t === r
                ? ((e = 0), (t = 1))
                : ((e = rn(e)), t === r ? ((t = e), (e = 0)) : (t = rn(t))),
              e > t)
            ) {
              var u = e;
              (e = t), (t = u);
            }
            if (a || e % 1 || t % 1) {
              var f = Mu();
              return Je(e + f * (t - e + ip("1e-" + ((f + "").length - 1))), t);
            }
            return _s(e, t);
          }
          var I0 = ar(function (e, t, a) {
            return (t = t.toLowerCase()), e + (a ? pl(t) : t);
          });
          function pl(e) {
            return qs(_e(e).toLowerCase());
          }
          function gl(e) {
            return (e = _e(e)), e && e.replace(Ah, mp).replace(Kh, "");
          }
          function C0(e, t, a) {
            (e = _e(e)), (t = pt(t));
            var u = e.length;
            a = a === r ? u : Un(ae(a), 0, u);
            var f = a;
            return (a -= t.length), a >= 0 && e.slice(a, f) == t;
          }
          function A0(e) {
            return (e = _e(e)), e && ch.test(e) ? e.replace(qo, yp) : e;
          }
          function O0(e) {
            return (e = _e(e)), e && gh.test(e) ? e.replace(Wa, "\\$&") : e;
          }
          var R0 = ar(function (e, t, a) {
              return e + (a ? "-" : "") + t.toLowerCase();
            }),
            L0 = ar(function (e, t, a) {
              return e + (a ? " " : "") + t.toLowerCase();
            }),
            D0 = yc("toLowerCase");
          function P0(e, t, a) {
            (e = _e(e)), (t = ae(t));
            var u = t ? Xn(e) : 0;
            if (!t || u >= t) return e;
            var f = (t - u) / 2;
            return Vi(Ri(f), a) + e + Vi(Oi(f), a);
          }
          function N0(e, t, a) {
            (e = _e(e)), (t = ae(t));
            var u = t ? Xn(e) : 0;
            return t && u < t ? e + Vi(t - u, a) : e;
          }
          function U0(e, t, a) {
            (e = _e(e)), (t = ae(t));
            var u = t ? Xn(e) : 0;
            return t && u < t ? Vi(t - u, a) + e : e;
          }
          function M0(e, t, a) {
            return (
              a || t == null ? (t = 0) : t && (t = +t),
              Vp(_e(e).replace($a, ""), t || 0)
            );
          }
          function Z0(e, t, a) {
            return (
              (a ? tt(e, t, a) : t === r) ? (t = 1) : (t = ae(t)), ws(_e(e), t)
            );
          }
          function F0() {
            var e = arguments,
              t = _e(e[0]);
            return e.length < 3 ? t : t.replace(e[1], e[2]);
          }
          var B0 = ar(function (e, t, a) {
            return e + (a ? "_" : "") + t.toLowerCase();
          });
          function W0(e, t, a) {
            return (
              a && typeof a != "number" && tt(e, t, a) && (t = a = r),
              (a = a === r ? ft : a >>> 0),
              a
                ? ((e = _e(e)),
                  e &&
                  (typeof t == "string" || (t != null && !Hs(t))) &&
                  ((t = pt(t)), !t && Yn(e))
                    ? En(Dt(e), 0, a)
                    : e.split(t, a))
                : []
            );
          }
          var $0 = ar(function (e, t, a) {
            return e + (a ? " " : "") + qs(t);
          });
          function H0(e, t, a) {
            return (
              (e = _e(e)),
              (a = a == null ? 0 : Un(ae(a), 0, e.length)),
              (t = pt(t)),
              e.slice(a, a + t.length) == t
            );
          }
          function V0(e, t, a) {
            var u = h.templateSettings;
            a && tt(e, t, a) && (t = r), (e = _e(e)), (t = na({}, t, u, Sc));
            var f = na({}, t.imports, u.imports, Sc),
              p = Be(f),
              m = rs(f, p),
              y,
              w,
              S = 0,
              T = t.interpolate || gi,
              A = "__p += '",
              P = as(
                (t.escape || gi).source +
                  "|" +
                  T.source +
                  "|" +
                  (T === jo ? Eh : gi).source +
                  "|" +
                  (t.evaluate || gi).source +
                  "|$",
                "g"
              ),
              B =
                "//# sourceURL=" +
                (Ee.call(t, "sourceURL")
                  ? (t.sourceURL + "").replace(/\s/g, " ")
                  : "lodash.templateSources[" + ++Qh + "]") +
                `
`;
            e.replace(P, function (G, fe, he, vt, nt, mt) {
              return (
                he || (he = vt),
                (A += e.slice(S, mt).replace(Oh, _p)),
                fe &&
                  ((y = !0),
                  (A +=
                    `' +
__e(` +
                    fe +
                    `) +
'`)),
                nt &&
                  ((w = !0),
                  (A +=
                    `';
` +
                    nt +
                    `;
__p += '`)),
                he &&
                  (A +=
                    `' +
((__t = (` +
                    he +
                    `)) == null ? '' : __t) +
'`),
                (S = mt + G.length),
                G
              );
            }),
              (A += `';
`);
            var K = Ee.call(t, "variable") && t.variable;
            if (!K)
              A =
                `with (obj) {
` +
                A +
                `
}
`;
            else if (xh.test(K)) throw new te(d);
            (A = (w ? A.replace(ah, "") : A)
              .replace(sh, "$1")
              .replace(oh, "$1;")),
              (A =
                "function(" +
                (K || "obj") +
                `) {
` +
                (K
                  ? ""
                  : `obj || (obj = {});
`) +
                "var __t, __p = ''" +
                (y ? ", __e = _.escape" : "") +
                (w
                  ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                  : `;
`) +
                A +
                `return __p
}`);
            var ue = ml(function () {
              return me(p, B + "return " + A).apply(r, m);
            });
            if (((ue.source = A), $s(ue))) throw ue;
            return ue;
          }
          function z0(e) {
            return _e(e).toLowerCase();
          }
          function q0(e) {
            return _e(e).toUpperCase();
          }
          function j0(e, t, a) {
            if (((e = _e(e)), e && (a || t === r))) return Tu(e);
            if (!e || !(t = pt(t))) return e;
            var u = Dt(e),
              f = Dt(t),
              p = Iu(u, f),
              m = Cu(u, f) + 1;
            return En(u, p, m).join("");
          }
          function K0(e, t, a) {
            if (((e = _e(e)), e && (a || t === r)))
              return e.slice(0, Ou(e) + 1);
            if (!e || !(t = pt(t))) return e;
            var u = Dt(e),
              f = Cu(u, Dt(t)) + 1;
            return En(u, 0, f).join("");
          }
          function G0(e, t, a) {
            if (((e = _e(e)), e && (a || t === r))) return e.replace($a, "");
            if (!e || !(t = pt(t))) return e;
            var u = Dt(e),
              f = Iu(u, Dt(t));
            return En(u, f).join("");
          }
          function J0(e, t) {
            var a = ie,
              u = ke;
            if (Oe(t)) {
              var f = "separator" in t ? t.separator : f;
              (a = "length" in t ? ae(t.length) : a),
                (u = "omission" in t ? pt(t.omission) : u);
            }
            e = _e(e);
            var p = e.length;
            if (Yn(e)) {
              var m = Dt(e);
              p = m.length;
            }
            if (a >= p) return e;
            var y = a - Xn(u);
            if (y < 1) return u;
            var w = m ? En(m, 0, y).join("") : e.slice(0, y);
            if (f === r) return w + u;
            if ((m && (y += w.length - y), Hs(f))) {
              if (e.slice(y).search(f)) {
                var S,
                  T = w;
                for (
                  f.global || (f = as(f.source, _e(Ko.exec(f)) + "g")),
                    f.lastIndex = 0;
                  (S = f.exec(T));

                )
                  var A = S.index;
                w = w.slice(0, A === r ? y : A);
              }
            } else if (e.indexOf(pt(f), y) != y) {
              var P = w.lastIndexOf(f);
              P > -1 && (w = w.slice(0, P));
            }
            return w + u;
          }
          function Y0(e) {
            return (e = _e(e)), e && uh.test(e) ? e.replace(zo, Tp) : e;
          }
          var X0 = ar(function (e, t, a) {
              return e + (a ? " " : "") + t.toUpperCase();
            }),
            qs = yc("toUpperCase");
          function vl(e, t, a) {
            return (
              (e = _e(e)),
              (t = a ? r : t),
              t === r ? (xp(e) ? Ap(e) : dp(e)) : e.match(t) || []
            );
          }
          var ml = le(function (e, t) {
              try {
                return dt(e, r, t);
              } catch (a) {
                return $s(a) ? a : new te(a);
              }
            }),
            Q0 = en(function (e, t) {
              return (
                bt(t, function (a) {
                  (a = Vt(a)), Xt(e, a, Bs(e[a], e));
                }),
                e
              );
            });
          function e_(e) {
            var t = e == null ? 0 : e.length,
              a = j();
            return (
              (e = t
                ? Ce(e, function (u) {
                    if (typeof u[1] != "function") throw new Et(l);
                    return [a(u[0]), u[1]];
                  })
                : []),
              le(function (u) {
                for (var f = -1; ++f < t; ) {
                  var p = e[f];
                  if (dt(p[0], this, u)) return dt(p[1], this, u);
                }
              })
            );
          }
          function t_(e) {
            return Tg(St(e, E));
          }
          function js(e) {
            return function () {
              return e;
            };
          }
          function n_(e, t) {
            return e == null || e !== e ? t : e;
          }
          var r_ = wc(),
            i_ = wc(!0);
          function ut(e) {
            return e;
          }
          function Ks(e) {
            return Ju(typeof e == "function" ? e : St(e, E));
          }
          function a_(e) {
            return Xu(St(e, E));
          }
          function s_(e, t) {
            return Qu(e, St(t, E));
          }
          var o_ = le(function (e, t) {
              return function (a) {
                return Mr(a, e, t);
              };
            }),
            u_ = le(function (e, t) {
              return function (a) {
                return Mr(e, a, t);
              };
            });
          function Gs(e, t, a) {
            var u = Be(t),
              f = Mi(t, u);
            a == null &&
              !(Oe(t) && (f.length || !u.length)) &&
              ((a = t), (t = e), (e = this), (f = Mi(t, Be(t))));
            var p = !(Oe(a) && "chain" in a) || !!a.chain,
              m = nn(e);
            return (
              bt(f, function (y) {
                var w = t[y];
                (e[y] = w),
                  m &&
                    (e.prototype[y] = function () {
                      var S = this.__chain__;
                      if (p || S) {
                        var T = e(this.__wrapped__),
                          A = (T.__actions__ = at(this.__actions__));
                        return (
                          A.push({ func: w, args: arguments, thisArg: e }),
                          (T.__chain__ = S),
                          T
                        );
                      }
                      return w.apply(e, mn([this.value()], arguments));
                    });
              }),
              e
            );
          }
          function c_() {
            return He._ === this && (He._ = Np), this;
          }
          function Js() {}
          function l_(e) {
            return (
              (e = ae(e)),
              le(function (t) {
                return ec(t, e);
              })
            );
          }
          var f_ = Is(Ce),
            d_ = Is(xu),
            h_ = Is(Xa);
          function yl(e) {
            return Ps(e) ? Qa(Vt(e)) : Hg(e);
          }
          function p_(e) {
            return function (t) {
              return e == null ? r : Mn(e, t);
            };
          }
          var g_ = bc(),
            v_ = bc(!0);
          function Ys() {
            return [];
          }
          function Xs() {
            return !1;
          }
          function m_() {
            return {};
          }
          function y_() {
            return "";
          }
          function __() {
            return !0;
          }
          function w_(e, t) {
            if (((e = ae(e)), e < 1 || e > lt)) return [];
            var a = ft,
              u = Je(e, ft);
            (t = j(t)), (e -= ft);
            for (var f = ns(u, t); ++a < e; ) t(a);
            return f;
          }
          function x_(e) {
            return ne(e) ? Ce(e, Vt) : gt(e) ? [e] : at(Zc(_e(e)));
          }
          function b_(e) {
            var t = ++Dp;
            return _e(e) + t;
          }
          var E_ = Hi(function (e, t) {
              return e + t;
            }, 0),
            k_ = Cs("ceil"),
            S_ = Hi(function (e, t) {
              return e / t;
            }, 1),
            T_ = Cs("floor");
          function I_(e) {
            return e && e.length ? Ui(e, ut, hs) : r;
          }
          function C_(e, t) {
            return e && e.length ? Ui(e, j(t, 2), hs) : r;
          }
          function A_(e) {
            return ku(e, ut);
          }
          function O_(e, t) {
            return ku(e, j(t, 2));
          }
          function R_(e) {
            return e && e.length ? Ui(e, ut, ms) : r;
          }
          function L_(e, t) {
            return e && e.length ? Ui(e, j(t, 2), ms) : r;
          }
          var D_ = Hi(function (e, t) {
              return e * t;
            }, 1),
            P_ = Cs("round"),
            N_ = Hi(function (e, t) {
              return e - t;
            }, 0);
          function U_(e) {
            return e && e.length ? ts(e, ut) : 0;
          }
          function M_(e, t) {
            return e && e.length ? ts(e, j(t, 2)) : 0;
          }
          return (
            (h.after = ay),
            (h.ary = Gc),
            (h.assign = qy),
            (h.assignIn = cl),
            (h.assignInWith = na),
            (h.assignWith = jy),
            (h.at = Ky),
            (h.before = Jc),
            (h.bind = Bs),
            (h.bindAll = Q0),
            (h.bindKey = Yc),
            (h.castArray = my),
            (h.chain = qc),
            (h.chunk = Tv),
            (h.compact = Iv),
            (h.concat = Cv),
            (h.cond = e_),
            (h.conforms = t_),
            (h.constant = js),
            (h.countBy = Um),
            (h.create = Gy),
            (h.curry = Xc),
            (h.curryRight = Qc),
            (h.debounce = el),
            (h.defaults = Jy),
            (h.defaultsDeep = Yy),
            (h.defer = sy),
            (h.delay = oy),
            (h.difference = Av),
            (h.differenceBy = Ov),
            (h.differenceWith = Rv),
            (h.drop = Lv),
            (h.dropRight = Dv),
            (h.dropRightWhile = Pv),
            (h.dropWhile = Nv),
            (h.fill = Uv),
            (h.filter = Zm),
            (h.flatMap = Wm),
            (h.flatMapDeep = $m),
            (h.flatMapDepth = Hm),
            (h.flatten = $c),
            (h.flattenDeep = Mv),
            (h.flattenDepth = Zv),
            (h.flip = uy),
            (h.flow = r_),
            (h.flowRight = i_),
            (h.fromPairs = Fv),
            (h.functions = i0),
            (h.functionsIn = a0),
            (h.groupBy = Vm),
            (h.initial = Wv),
            (h.intersection = $v),
            (h.intersectionBy = Hv),
            (h.intersectionWith = Vv),
            (h.invert = o0),
            (h.invertBy = u0),
            (h.invokeMap = qm),
            (h.iteratee = Ks),
            (h.keyBy = jm),
            (h.keys = Be),
            (h.keysIn = ot),
            (h.map = Ji),
            (h.mapKeys = l0),
            (h.mapValues = f0),
            (h.matches = a_),
            (h.matchesProperty = s_),
            (h.memoize = Xi),
            (h.merge = d0),
            (h.mergeWith = ll),
            (h.method = o_),
            (h.methodOf = u_),
            (h.mixin = Gs),
            (h.negate = Qi),
            (h.nthArg = l_),
            (h.omit = h0),
            (h.omitBy = p0),
            (h.once = cy),
            (h.orderBy = Km),
            (h.over = f_),
            (h.overArgs = ly),
            (h.overEvery = d_),
            (h.overSome = h_),
            (h.partial = Ws),
            (h.partialRight = tl),
            (h.partition = Gm),
            (h.pick = g0),
            (h.pickBy = fl),
            (h.property = yl),
            (h.propertyOf = p_),
            (h.pull = Kv),
            (h.pullAll = Vc),
            (h.pullAllBy = Gv),
            (h.pullAllWith = Jv),
            (h.pullAt = Yv),
            (h.range = g_),
            (h.rangeRight = v_),
            (h.rearg = fy),
            (h.reject = Xm),
            (h.remove = Xv),
            (h.rest = dy),
            (h.reverse = Zs),
            (h.sampleSize = ey),
            (h.set = m0),
            (h.setWith = y0),
            (h.shuffle = ty),
            (h.slice = Qv),
            (h.sortBy = iy),
            (h.sortedUniq = sm),
            (h.sortedUniqBy = om),
            (h.split = W0),
            (h.spread = hy),
            (h.tail = um),
            (h.take = cm),
            (h.takeRight = lm),
            (h.takeRightWhile = fm),
            (h.takeWhile = dm),
            (h.tap = Im),
            (h.throttle = py),
            (h.thru = Gi),
            (h.toArray = sl),
            (h.toPairs = dl),
            (h.toPairsIn = hl),
            (h.toPath = x_),
            (h.toPlainObject = ul),
            (h.transform = _0),
            (h.unary = gy),
            (h.union = hm),
            (h.unionBy = pm),
            (h.unionWith = gm),
            (h.uniq = vm),
            (h.uniqBy = mm),
            (h.uniqWith = ym),
            (h.unset = w0),
            (h.unzip = Fs),
            (h.unzipWith = zc),
            (h.update = x0),
            (h.updateWith = b0),
            (h.values = ur),
            (h.valuesIn = E0),
            (h.without = _m),
            (h.words = vl),
            (h.wrap = vy),
            (h.xor = wm),
            (h.xorBy = xm),
            (h.xorWith = bm),
            (h.zip = Em),
            (h.zipObject = km),
            (h.zipObjectDeep = Sm),
            (h.zipWith = Tm),
            (h.entries = dl),
            (h.entriesIn = hl),
            (h.extend = cl),
            (h.extendWith = na),
            Gs(h, h),
            (h.add = E_),
            (h.attempt = ml),
            (h.camelCase = I0),
            (h.capitalize = pl),
            (h.ceil = k_),
            (h.clamp = k0),
            (h.clone = yy),
            (h.cloneDeep = wy),
            (h.cloneDeepWith = xy),
            (h.cloneWith = _y),
            (h.conformsTo = by),
            (h.deburr = gl),
            (h.defaultTo = n_),
            (h.divide = S_),
            (h.endsWith = C0),
            (h.eq = Nt),
            (h.escape = A0),
            (h.escapeRegExp = O0),
            (h.every = Mm),
            (h.find = Fm),
            (h.findIndex = Bc),
            (h.findKey = Xy),
            (h.findLast = Bm),
            (h.findLastIndex = Wc),
            (h.findLastKey = Qy),
            (h.floor = T_),
            (h.forEach = jc),
            (h.forEachRight = Kc),
            (h.forIn = e0),
            (h.forInRight = t0),
            (h.forOwn = n0),
            (h.forOwnRight = r0),
            (h.get = Vs),
            (h.gt = Ey),
            (h.gte = ky),
            (h.has = s0),
            (h.hasIn = zs),
            (h.head = Hc),
            (h.identity = ut),
            (h.includes = zm),
            (h.indexOf = Bv),
            (h.inRange = S0),
            (h.invoke = c0),
            (h.isArguments = Bn),
            (h.isArray = ne),
            (h.isArrayBuffer = Sy),
            (h.isArrayLike = st),
            (h.isArrayLikeObject = De),
            (h.isBoolean = Ty),
            (h.isBuffer = kn),
            (h.isDate = Iy),
            (h.isElement = Cy),
            (h.isEmpty = Ay),
            (h.isEqual = Oy),
            (h.isEqualWith = Ry),
            (h.isError = $s),
            (h.isFinite = Ly),
            (h.isFunction = nn),
            (h.isInteger = nl),
            (h.isLength = ea),
            (h.isMap = rl),
            (h.isMatch = Dy),
            (h.isMatchWith = Py),
            (h.isNaN = Ny),
            (h.isNative = Uy),
            (h.isNil = Zy),
            (h.isNull = My),
            (h.isNumber = il),
            (h.isObject = Oe),
            (h.isObjectLike = Re),
            (h.isPlainObject = Hr),
            (h.isRegExp = Hs),
            (h.isSafeInteger = Fy),
            (h.isSet = al),
            (h.isString = ta),
            (h.isSymbol = gt),
            (h.isTypedArray = or),
            (h.isUndefined = By),
            (h.isWeakMap = Wy),
            (h.isWeakSet = $y),
            (h.join = zv),
            (h.kebabCase = R0),
            (h.last = It),
            (h.lastIndexOf = qv),
            (h.lowerCase = L0),
            (h.lowerFirst = D0),
            (h.lt = Hy),
            (h.lte = Vy),
            (h.max = I_),
            (h.maxBy = C_),
            (h.mean = A_),
            (h.meanBy = O_),
            (h.min = R_),
            (h.minBy = L_),
            (h.stubArray = Ys),
            (h.stubFalse = Xs),
            (h.stubObject = m_),
            (h.stubString = y_),
            (h.stubTrue = __),
            (h.multiply = D_),
            (h.nth = jv),
            (h.noConflict = c_),
            (h.noop = Js),
            (h.now = Yi),
            (h.pad = P0),
            (h.padEnd = N0),
            (h.padStart = U0),
            (h.parseInt = M0),
            (h.random = T0),
            (h.reduce = Jm),
            (h.reduceRight = Ym),
            (h.repeat = Z0),
            (h.replace = F0),
            (h.result = v0),
            (h.round = P_),
            (h.runInContext = _),
            (h.sample = Qm),
            (h.size = ny),
            (h.snakeCase = B0),
            (h.some = ry),
            (h.sortedIndex = em),
            (h.sortedIndexBy = tm),
            (h.sortedIndexOf = nm),
            (h.sortedLastIndex = rm),
            (h.sortedLastIndexBy = im),
            (h.sortedLastIndexOf = am),
            (h.startCase = $0),
            (h.startsWith = H0),
            (h.subtract = N_),
            (h.sum = U_),
            (h.sumBy = M_),
            (h.template = V0),
            (h.times = w_),
            (h.toFinite = rn),
            (h.toInteger = ae),
            (h.toLength = ol),
            (h.toLower = z0),
            (h.toNumber = Ct),
            (h.toSafeInteger = zy),
            (h.toString = _e),
            (h.toUpper = q0),
            (h.trim = j0),
            (h.trimEnd = K0),
            (h.trimStart = G0),
            (h.truncate = J0),
            (h.unescape = Y0),
            (h.uniqueId = b_),
            (h.upperCase = X0),
            (h.upperFirst = qs),
            (h.each = jc),
            (h.eachRight = Kc),
            (h.first = Hc),
            Gs(
              h,
              (function () {
                var e = {};
                return (
                  $t(h, function (t, a) {
                    Ee.call(h.prototype, a) || (e[a] = t);
                  }),
                  e
                );
              })(),
              { chain: !1 }
            ),
            (h.VERSION = s),
            bt(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                h[e].placeholder = h;
              }
            ),
            bt(["drop", "take"], function (e, t) {
              (de.prototype[e] = function (a) {
                a = a === r ? 1 : Fe(ae(a), 0);
                var u = this.__filtered__ && !t ? new de(this) : this.clone();
                return (
                  u.__filtered__
                    ? (u.__takeCount__ = Je(a, u.__takeCount__))
                    : u.__views__.push({
                        size: Je(a, ft),
                        type: e + (u.__dir__ < 0 ? "Right" : ""),
                      }),
                  u
                );
              }),
                (de.prototype[e + "Right"] = function (a) {
                  return this.reverse()[e](a).reverse();
                });
            }),
            bt(["filter", "map", "takeWhile"], function (e, t) {
              var a = t + 1,
                u = a == Qe || a == fi;
              de.prototype[e] = function (f) {
                var p = this.clone();
                return (
                  p.__iteratees__.push({ iteratee: j(f, 3), type: a }),
                  (p.__filtered__ = p.__filtered__ || u),
                  p
                );
              };
            }),
            bt(["head", "last"], function (e, t) {
              var a = "take" + (t ? "Right" : "");
              de.prototype[e] = function () {
                return this[a](1).value()[0];
              };
            }),
            bt(["initial", "tail"], function (e, t) {
              var a = "drop" + (t ? "" : "Right");
              de.prototype[e] = function () {
                return this.__filtered__ ? new de(this) : this[a](1);
              };
            }),
            (de.prototype.compact = function () {
              return this.filter(ut);
            }),
            (de.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (de.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (de.prototype.invokeMap = le(function (e, t) {
              return typeof e == "function"
                ? new de(this)
                : this.map(function (a) {
                    return Mr(a, e, t);
                  });
            })),
            (de.prototype.reject = function (e) {
              return this.filter(Qi(j(e)));
            }),
            (de.prototype.slice = function (e, t) {
              e = ae(e);
              var a = this;
              return a.__filtered__ && (e > 0 || t < 0)
                ? new de(a)
                : (e < 0 ? (a = a.takeRight(-e)) : e && (a = a.drop(e)),
                  t !== r &&
                    ((t = ae(t)),
                    (a = t < 0 ? a.dropRight(-t) : a.take(t - e))),
                  a);
            }),
            (de.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (de.prototype.toArray = function () {
              return this.take(ft);
            }),
            $t(de.prototype, function (e, t) {
              var a = /^(?:filter|find|map|reject)|While$/.test(t),
                u = /^(?:head|last)$/.test(t),
                f = h[u ? "take" + (t == "last" ? "Right" : "") : t],
                p = u || /^find/.test(t);
              !f ||
                (h.prototype[t] = function () {
                  var m = this.__wrapped__,
                    y = u ? [1] : arguments,
                    w = m instanceof de,
                    S = y[0],
                    T = w || ne(m),
                    A = function (fe) {
                      var he = f.apply(h, mn([fe], y));
                      return u && P ? he[0] : he;
                    };
                  T &&
                    a &&
                    typeof S == "function" &&
                    S.length != 1 &&
                    (w = T = !1);
                  var P = this.__chain__,
                    B = !!this.__actions__.length,
                    K = p && !P,
                    ue = w && !B;
                  if (!p && T) {
                    m = ue ? m : new de(this);
                    var G = e.apply(m, y);
                    return (
                      G.__actions__.push({ func: Gi, args: [A], thisArg: r }),
                      new kt(G, P)
                    );
                  }
                  return K && ue
                    ? e.apply(this, y)
                    : ((G = this.thru(A)),
                      K ? (u ? G.value()[0] : G.value()) : G);
                });
            }),
            bt(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var t = xi[e],
                  a = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  u = /^(?:pop|shift)$/.test(e);
                h.prototype[e] = function () {
                  var f = arguments;
                  if (u && !this.__chain__) {
                    var p = this.value();
                    return t.apply(ne(p) ? p : [], f);
                  }
                  return this[a](function (m) {
                    return t.apply(ne(m) ? m : [], f);
                  });
                };
              }
            ),
            $t(de.prototype, function (e, t) {
              var a = h[t];
              if (a) {
                var u = a.name + "";
                Ee.call(nr, u) || (nr[u] = []),
                  nr[u].push({ name: t, func: a });
              }
            }),
            (nr[$i(r, U).name] = [{ name: "wrapper", func: r }]),
            (de.prototype.clone = Yp),
            (de.prototype.reverse = Xp),
            (de.prototype.value = Qp),
            (h.prototype.at = Cm),
            (h.prototype.chain = Am),
            (h.prototype.commit = Om),
            (h.prototype.next = Rm),
            (h.prototype.plant = Dm),
            (h.prototype.reverse = Pm),
            (h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Nm),
            (h.prototype.first = h.prototype.head),
            Or && (h.prototype[Or] = Lm),
            h
          );
        },
        Qn = Op();
      Ln ? (((Ln.exports = Qn)._ = Qn), (Ka._ = Qn)) : (He._ = Qn);
    }).call(kr);
  })(Oa, Oa.exports);
  const Jd = (i) => {
    const n = {};
    for (const r in i)
      r.indexOf("$") !== 0 && (n[Oa.exports.camelCase(r)] = i[r]);
    return n;
  };
  async function $o(i) {
    return new Promise((n) => {
      const r = localStorage.getItem(i);
      try {
        const s = JSON.parse(r);
        n(s);
      } catch {
        n(r);
      }
    });
  }
  const Yd = yt.object({
    mentionAllUsersFromGroup: yt.boolean().optional(),
    remarketing: yt.boolean().optional(),
    keyWarningAd: yt.boolean().optional(),
    usageMonitor: yt.boolean().optional(),
    usageMonitorSettings: yt
      .object({
        max_delay: yt.number(),
        min_delay: yt.number(),
        max_hits_per_request: yt.number(),
      })
      .optional(),
  });
  async function Xd(i) {
    const n = Yd.safeParse(i);
    n.success &&
      Object.keys(n.data).length > 0 &&
      ca({ flags: JSON.stringify(n.data) });
  }
  async function Ho(i) {
    await i.waitUntilReady();
    const n = i.allFlags(),
      r = Jd(n);
    Xd(r);
  }
  async function Qd() {
    var o;
    const i = String(await $o("chave")),
      n = String(await $o("nmb")),
      r = await Tf(),
      s = {
        kind: "user",
        key: (o = i ? i.toLowerCase().trim() : String(n)) != null ? o : r,
      },
      c = Gd(bf.VITE_LAUNCHDARKLY_SDK_KEY, s, { streaming: !0 });
    await c.waitForInitialization().catch((l) => {}),
      Ho(c),
      c.on("change", () => {
        Ho(c);
      });
  }
  function z_(i) {
    const n = document.createElement("script");
    (n.src = i), (n.type = "module"), document.head.prepend(n);
  }
  async function eh() {
    const n = await (
        await fetch("https://web.whatsapp.com/serviceworker.js")
      ).text(),
      s = (n.match(/wa([\d.]+)\.canary/) || [])[1] || null,
      c = /(?:assets-manifest-)([\d.]+)\.json/g;
    let o = [];
    do if (((o = c.exec(n)), o !== null && o[1] && o[1] !== s)) return o[1];
    while (o);
  }
  const th = {
    bulk: async (i) => {
      if (i.item.type !== "bulk") return;
      const n = i.item;
      Mt({ type: n.type, item: n });
    },
    mensagens: async (i) => {
      if (i.item.type !== "mensagens") return;
      const n = i.item,
        r = await xl(n);
      Mt({ type: n.type, item: r, premium: i.premium }),
        sn({
          type: "messageSent",
          timestamp: Date.now(),
          metadata: { messageId: r.id },
        });
    },
    audios: async (i) => {
      if (i.item.type !== "audios") return;
      const n = i.item,
        r = await bl(n);
      Mt({ type: n.type, item: r, premium: i.premium }),
        sn({
          type: "audioSent",
          timestamp: Date.now(),
          metadata: { audioId: r.id },
        });
    },
    medias: async (i) => {
      if (i.item.type !== "medias") return;
      const n = i.item,
        r = await El(n);
      Mt({ type: n.type, item: r, premium: i.premium }),
        sn({
          type: "mediaSent",
          timestamp: Date.now(),
          metadata: { mediaId: r.id },
        });
    },
    docs: async (i) => {
      if (i.item.type !== "docs") return;
      const n = i.item,
        r = await kl(n);
      Mt({ type: n.type, item: r, premium: i.premium }),
        sn({
          type: "docSent",
          timestamp: Date.now(),
          metadata: { docId: r.id },
        });
    },
    funis: async (i) => {
      if (i.item.type !== "funis") return;
      const n = i.item;
      !n.data ||
        n.data.length === 0 ||
        Mt({ type: n.type, item: n, premium: i.premium });
    },
  };
  function Ra(i) {
    i && window.dispatchEvent(new CustomEvent(i));
  }
  Sl().subscribe(async (i) => {
    const n = th[i.item.type];
    n && n(i);
  });
  const nh = {
    openAdCta: async (i) => {
      i.type === "openAdCta" && (console.log(i.adId), console.log(i.ctaUrl));
    },
    markAdAsSeen: async (i) => {
      i.type === "markAdAsSeen" && console.log(i.adId);
    },
    sendFunnel: async (i) => {
      if (i.type !== "sendFunnel") return;
      const {
          funnelId: n,
          secondsBeforeSend: r,
          chatTargetId: s,
          promiseId: c,
          avoidToast: o,
          premium: l,
        } = i,
        d = await Il(n);
      d &&
        Mt({
          type: "directFunnel",
          item: d,
          delayAtStart: r ? r * 1e3 : void 0,
          chatTargetId: s,
          promiseId: c,
          avoidToast: o,
          premium: l,
        });
    },
    sendItem: async (i) => {
      if (i.type !== "sendItem") return;
      const {
          itemId: n,
          chatTargetId: r,
          promiseId: s,
          avoidToast: c,
          premium: o,
        } = i,
        l = await on(n);
      if (!l)
        return (
          ra.error("Item n\xE3o encontrado, recarregue a p\xE1gina"), Ra(s)
        );
      if (!l.data) return ra.error("Item vazio, envio cancelado"), Ra(s);
      if (!r) return ra.error("Nenhum chat aberto"), Ra(s);
      switch (
        (Mt({
          type: l.type,
          item: { ...l, data: l.data },
          chatTargetId: r,
          promiseId: s,
          avoidToast: c,
          premium: o,
        }),
        l.type)
      ) {
        case "mensagens":
          sn({
            type: "messageSent",
            timestamp: Date.now(),
            metadata: { messageId: l.id },
          });
          break;
        case "audios":
          sn({
            type: "audioSent",
            timestamp: Date.now(),
            metadata: { audioId: l.id },
          });
          break;
        case "medias":
          sn({
            type: "mediaSent",
            timestamp: Date.now(),
            metadata: { mediaId: l.id },
          });
          break;
        case "docs":
          sn({
            type: "docSent",
            timestamp: Date.now(),
            metadata: { docId: l.id },
          });
          break;
      }
    },
  };
  Tl().subscribe(async (i) => {
    const n = nh[i.type];
    n && n(i);
  });
  const Vo = Df();
  Vo.subscribe(async (i) => {
    Vo.addUsageHit(i);
  }),
    new MutationObserver(async (i, n) => {
      const r = document.querySelector("header"),
        s = document.getElementById("pane-side");
      if (r && s) {
        n.disconnect(), window.localStorage.setItem("ZVExtensionId", Qs);
        const c = await eh(),
          o = window.localStorage.getItem("last-wid"),
          l = window.localStorage.getItem("last-wid-md"),
          [d] =
            (l == null ? void 0 : l.match(/\d+/)) ||
            (o == null ? void 0 : o.match(/\d+/)) ||
            [],
          g = { type: "WPPLoaded", data: { wppVersion: c, nmb: String(d) } };
        d && d !== "undefined" && Pf({ wppVersion: String(c), nmb: String(d) }),
          chrome.runtime.sendMessage(g),
          new MutationObserver(async (x, E) => {
            document.getElementById("zv-injected") && E.disconnect();
          }).observe(document.body, { childList: !0, subtree: !0 });
      }
    }).observe(document.body, { childList: !0, subtree: !0 }),
    Qd();
})();
