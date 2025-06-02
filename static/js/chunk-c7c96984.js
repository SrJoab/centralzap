import {
  g as u,
  s as _,
  b as T,
  d as x,
  f as M,
  e as N,
  h as I,
  c as y,
  i as C,
} from "./chunk-081d0b03.js";
import { u as v, g as P } from "./chunk-61361a5e.js";
import { v as F } from "./chunk-5237112f.js";
import { g as E } from "./chunk-75e1c25d.js";
async function D() {
  const e = "deviceId",
    t = await u(e);
  if (!t) {
    const r = F();
    return await _({ [e]: r }), r;
  }
  return t;
}
const U = "/static/js/chunk-a6f853b2.js",
  V = `#main{position:relative!important;height:calc(100% - 48px)}:not(.zvWithShortcuts)>#main{height:100%!important}
`,
  b = ["contains", "not_contains", "starts", "equals"];
function H({ keywordRules: e, message: t, ignoreCaseSensitive: r = !1 }) {
  if (
    !t ||
    typeof t != "string" ||
    Array.isArray(e) === !1 ||
    !e ||
    e.length === 0
  )
    return !1;
  if (e.some(({ type: s }) => Object.values(b).includes(s) === !1))
    return console.error("Alguma keywordRule tem um type inv\xE1lido", e), !1;
  if (
    e.some(
      ({ keywords: s }) =>
        Array.isArray(s) === !1 ||
        !s ||
        s.length === 0 ||
        s.some((a) => typeof a != "string")
    )
  )
    return (
      console.error(
        "Alguma keywordRule tem um array de keywords inv\xE1lido",
        e
      ),
      !1
    );
  const n = r ? String(t).toLowerCase() : t;
  return e.every(({ keywords: s, type: a }) => {
    const i = s.map((o) => (r ? String(o).toLowerCase() : o));
    return O({ type: a, keywords: i, message: n });
  });
}
function O({ type: e, keywords: t, message: r }) {
  switch (e) {
    case "equals":
      return t && t.some((n) => n.trim() === r.trim());
    case "contains":
      return t && t.some((n) => r.trim().includes(n.trim()));
    case "not_contains":
      return t && t.every((n) => !r.trim().includes(n.trim()));
    case "starts":
      return (
        t && t.some((n) => r.trim().substring(0, n.trim().length) === n.trim())
      );
    default:
      return !1;
  }
}
async function w() {
  return await u("flags");
}
async function W() {
  var e;
  return (e = await u(v.storedName)) != null ? e : [];
}
async function Y(e) {
  try {
    await _({ [v.storedName]: JSON.stringify(e) });
  } catch (t) {
    console.error("Error setting item on storage:", t);
  }
}
const K = 3e4,
  R = 6e4,
  j = 100;
function B(e, t) {
  const r = e
      .filter((a) => !a.synced)
      .sort((a, i) => a.timestamp - i.timestamp),
    n = r.slice(0, t),
    s = r.length - n.length;
  return { hitsToSync: n, remainingHitsAmount: s };
}
async function X(e, t) {
  const r = await T(),
    n = await x(),
    s = await M(),
    a = String(r).toLowerCase().trim(),
    i = await D();
  if (
    (
      await fetch(N.VITE_KAFKA_USAGE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hitsToSync: e,
          remainingHitsAmount: t,
          deviceId: i,
          formattedKey: a,
          whatsappVersion: n,
          phoneNumber: String(s),
          extensionId:
            chrome != null && chrome.runtime
              ? chrome.runtime.id
              : "localExtensionId",
        }),
      })
    ).status >= 400
  )
    throw new Error("Error syncing usage hits");
}
function q({ hitsToSync: e, savedHits: t }) {
  const r = e.map((n) => n.id);
  return t.map((n) => (r.includes(n.id) ? { ...n, synced: !0 } : n));
}
async function S() {
  var n, s;
  const e = await w(),
    t =
      ((n = e == null ? void 0 : e.usageMonitorSettings) == null
        ? void 0
        : n.min_delay) || K,
    r =
      ((s = e == null ? void 0 : e.usageMonitorSettings) == null
        ? void 0
        : s.max_delay) || R;
  setTimeout(A, P(t, r));
}
async function A() {
  var a;
  const e = await w();
  if ((e == null ? void 0 : e.usageMonitor) !== !0) {
    S();
    return;
  }
  const t = await W();
  if (t.length === 0) {
    S();
    return;
  }
  const r =
      ((a = e.usageMonitorSettings) == null
        ? void 0
        : a.max_hits_per_request) || j,
    { hitsToSync: n, remainingHitsAmount: s } = B(t, r);
  if (n.length === 0) {
    S();
    return;
  }
  try {
    await X(n, s);
    const i = q({ savedHits: t, hitsToSync: n });
    await Y(i);
  } catch (i) {
    console.error("Error syncing usage hits:", i);
  }
  S();
}
function G() {
  A();
}
function z() {
  var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)./);
  return e ? parseInt(e[2], 10) : 1 / 0;
}
chrome.runtime.onInstalled.addListener((e) => {
  (e.reason === "install" || e.reason === "update") &&
    E().then((t) => {
      t != null && t.id
        ? chrome.tabs.reload(t.id)
        : chrome.tabs.create({ url: "https://web.whatsapp.com", active: !0 });
    });
});
chrome.runtime.onMessage.addListener(({ type: e, data: t }, r, n) => {
  var s, a;
  if (e === "WPPInit") {
    let i = function (o) {
      z() >= 102 &&
        chrome.scripting.executeScript({
          files: [U],
          target: { tabId: o, allFrames: !0 },
          world: "MAIN",
        }),
        chrome.scripting.insertCSS({
          css: V,
          target: { tabId: o, allFrames: !0 },
        });
    };
    (s = r.tab) != null && s.id
      ? i(r.tab.id)
      : E(!0).then((o) => {
          o != null && o.id && i(o.id);
        });
  } else if (
    e === "WPPLoaded" &&
    ((a = r.origin) == null ? void 0 : a.includes("https://web.whatsapp.com"))
  ) {
    const { nmb: i, wppVersion: o } = t;
    o && _({ wppVersion: o }), i && _({ nmb: i }), n({ ZVExtensionId: I });
    const f =
        chrome != null && chrome.runtime
          ? chrome.runtime.getManifest()
          : { version_name: "Local Development", version: "Local Development" },
      g = f.version_name || f.version,
      d = new URLSearchParams();
    g && d.append("version", g),
      i && d.append("nmb", i),
      o && d.append("wppVersion", o),
      d.append("extensionId", I),
      chrome.runtime.setUninstallURL(
        `https://zapvoice.com.br/uninstall-page?${d.toString()}`
      );
  }
});
const L = async ({ type: e, data: t }, r, n) => {
  var s, a, i, o, f, g, d;
  if (
    !(
      !((s = r.url) != null && s.includes("web.whatsapp.com")) ||
      (e !== "checkTriggersShouldFireByMessage" &&
        e !== "getIndexesFromStorage" &&
        e !== "getSmallItemFromStorage" &&
        e !== "checkPremium" &&
        e !== "getFlags" &&
        e !== "saveValidOnStorage" &&
        e !== "openOptionsPage")
    )
  )
  if (e === "checkPremium")
  try {
    // Aqui você pode substituir a chamada original para sempre retornar um status premium verdadeiro
    n({ type: e, response: { premium: true, data: null, number_warning: false } });
  } catch (m) {
    // Mesmo em caso de erro, você ainda retorna um status premium verdadeiro
    n({
      type: e,
      response: { premium: true, data: m.toString(), number_warning: false },
    });
  }
    else if (e === "saveValidOnStorage") await C();
    else if (e === "getIndexesFromStorage") {
      const m = (a = await u("audiosIndex")) != null ? a : [],
        l = (i = await u("mensagensIndex")) != null ? i : [],
        h = (o = await u("mediasIndex")) != null ? o : [],
        p = (f = await u("docsIndex")) != null ? f : [],
        c = (g = await u("funis")) != null ? g : [];
      n({
        type: e,
        response: {
          mensagensIndex: l,
          audiosIndex: m,
          mediasIndex: h,
          docsIndex: p,
          funis: c,
        },
      });
    } else if (e === "getSmallItemFromStorage") {
      const { id: m } = t,
        l = await u(m);
      n({ type: e, response: { item: l } });
    } else if (e === "checkTriggersShouldFireByMessage") {
      const m = (d = await u("triggers")) != null ? d : [],
        { message: l } = t,
        h = m.reduce(
          (p, c) => (
            !!c.funnelId &&
              !!c.enabled &&
              !!c.keywordRules &&
              c.keywordRules.length > 0 &&
              H({
                message: l,
                keywordRules: c.keywordRules,
                ignoreCaseSensitive: !!c.ignoreCaseSensitive,
              }) &&
              p.push({
                triggerId: c.id,
                funnelId: c.funnelId,
                secondsBeforeSend: c.secondsBeforeSend,
                name: c.name,
                dontSendToContact: !!c.dontSendToContact,
                dontSendToGroups: !!c.dontSendToGroups,
              }),
            p
          ),
          []
        );
      n({ type: e, response: h });
    } else if (e === "getFlags") {
      const m = await w();
      n({ type: e, response: m });
    } else
      e === "openOptionsPage" &&
        (chrome.runtime.openOptionsPage(), n({ type: e, Response: {} }));
};
chrome.runtime.onMessage.addListener(L);
chrome.runtime.onMessageExternal.addListener(L);
chrome.runtime.onUpdateAvailable.addListener(() => {
  chrome.runtime.reload();
});
G();
