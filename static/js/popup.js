import {
  U as te,
  s as p,
  c as m,
  g as x,
  C as ne,
  W as u,
  a as pe,
  r as l,
  R as e,
  B as ae,
  F as re,
  b,
  d as f,
  e as v,
  A as he,
  f as ge,
  h as G,
  _ as be,
  i as fe,
  j as ve,
  k as ye,
  l as xe,
  G as Ee,
  M as we,
  m as Ce,
} from "./chunk-3aa3a6d5.js";
import {
  u as oe,
  a as V,
  M as Se,
  b as Z,
  c as Q,
  d as K,
  e as X,
  I as W,
  H as F,
  T as $e,
  f as Ie,
  g as J,
  h as q,
  L as N,
  i as Ne,
  O as se,
  j as ie,
  k as ke,
  l as De,
  S as Ae,
  m as Y,
  n as Pe,
  o as Me,
  p as H,
  q as Be,
  R as Fe,
  r as C,
  s as Te,
  t as Le,
  v as _e,
  P as We,
  F as Oe,
} from "./chunk-efa101b4.js";
import { g as T } from "./chunk-75e1c25d.js";
import { g as _, s as A } from "./chunk-081d0b03.js";
import { v as ze } from "./chunk-5237112f.js";
const je = te`

  to{
    max-height: 9rem;
    overflow: visible;
  }
`,
  He = p.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 1.5rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ fill: t }) => `0px 0px 15px -10px ${t}`};
  border-radius: 0.25rem;
  border: ${({ fill: t }) => `1px solid ${m(0.7, t)}`};
  background: ${({ fill: t }) =>
    `linear-gradient(to right, ${m(0.6, t)} 0% , var(--zap-background) 30%, ${m(
      0.9,
      t
    )}100%)`};
  padding: 0.5rem 0;
  margin: 0.25rem 0;
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
  .iconAndNameContainer {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    .iconContainer {
      .iconItem {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${({ fill: t }) => t};
      }
    }
    .nameContainer {
      margin-left: 0.25rem;
      width: 100%;
      overflow: auto;
      span {
        font-size: 1rem;
        font-weight: 500;
        padding-left: 0.5rem;
        text-align: center;
      }
    }
  }
  .actionsContainer {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
    button {
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem;
      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
      &.showItemBtn {
        background: ${m(0.6, x.blue)};
        svg {
          fill: var(--blue);
        }
      }
      &.sendItemBtn {
        margin-left: 0.5rem;
        background: ${m(0.6, x.green)};
        svg {
          fill: var(--green);
        }
      }
    }
  }
`,
  R = p.div`
  display: ${({ shouldDisplay: t }) => (t ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  margin-top: -0.25rem;
  border-radius: 0 0 0.25rem 0.25rem;
  width: 95%;
  height: 100%;
  max-height: 0rem;
  overflow: hidden;
  background: ${({ fill: t }) => (t ? m(0.8, t) : "none")};
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  ${({ shouldDisplay: t }) =>
    t &&
    ne`
      animation: ${je} 0.3s ease-in forwards;
    `}

  padding: ${({ shouldDisplay: t }) => (t ? "1rem" : "0")};
  padding-top: 0.5rem;
  img,
  video {
    display: inline-block;
    z-index: 1;
    height: 100%;
  }
  audio {
    filter: ${({ fill: t }) => `drop-shadow(0px 0px 5px ${t})`};
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
    resize: none;
    opacity: 1;
    cursor: auto;
  }
`,
  Ve = () => {};
async function qe(t, r = Ve) {
  const a = await T();
  if (!a) {
    u.error("N\xE3o foi poss\xEDvel encontrar a aba do Whatsapp Web", {
      theme: "colored",
    });
    return;
  }
  if (!a.id) return;
  const n = { item: t };
  chrome.tabs.sendMessage(a.id, n, r),
    u.success("Documento enviado para o Whatsapp Web", { theme: "colored" });
}
const Re = () => {};
async function Ue(t, r = Re) {
  const a = await T();
  if (!a) {
    u.error("N\xE3o foi poss\xEDvel encontrar a aba do Whatsapp Web", {
      theme: "colored",
    });
    return;
  }
  if (!a.id) return;
  const n = { item: t };
  chrome.tabs.sendMessage(a.id, n, r),
    u.success("M\xEDdia enviada para o Whatsapp Web", { theme: "colored" });
}
const Ge = () => {};
async function Ze(t, r = Ge) {
  const a = await T();
  if (!a) {
    u.error("N\xE3o foi poss\xEDvel encontrar a aba do Whatsapp Web", {
      theme: "colored",
    });
    return;
  }
  if (!a.id) return;
  const n = { item: t };
  chrome.tabs.sendMessage(a.id, n, r),
    u.success("Mensagem enviada para o Whatsapp Web", { theme: "colored" });
}
async function Qe(t) {
  return await _(t.id);
}
const Ke = () => {};
async function Xe(t, r = Ke, a) {
  const n = await T();
  if (!n) {
    u.error("N\xE3o foi poss\xEDvel encontrar a aba do Whatsapp Web", {
      theme: "colored",
    });
    return;
  }
  if (!n.id) return;
  const o = { item: t, premium: !!a };
// Removendo a verificação de usuário premium e a limitação de 60 segundos
chrome.tabs.sendMessage(n.id, o, r);
u.success("\xC1udio enviado para o Whatsapp Web", { theme: "colored" });
}
function P({ Icon: t, name: r, item: a, fill: n }) {
  const [o, i] = l.exports.useState(),
    [s, c] = l.exports.useState(!1),
    { getItemFromStorage: E } = oe(),
    { isPremium: $ } = V();
  async function O() {
    if (o) {
      c(!s);
      return;
    }
    c(!0);
    const w = await E(a.id);
    if (!w) {
      u.error("Item n\xE3o encontrado, algo deu errado.");
      return;
    }
    i(w);
  }
  async function I() {
    const w = await _(a.id);
    if (!(w != null && w.data)) {
      u.error("Item vazio, envio cancelado", { theme: "colored" });
      return;
    }
    a.type === "mensagens"
      ? Ze(a)
      : a.type === "audios"
      ? Xe(a, void 0, $)
      : a.type === "medias"
      ? Ue(a)
      : a.type === "docs" && qe(a);
  }
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      He,
      { fill: n },
      e.createElement(
        "div",
        { className: "iconAndNameContainer" },
        e.createElement(
          "div",
          { className: "iconContainer" },
          e.createElement(t, { className: "iconItem" })
        ),
        e.createElement(
          "div",
          { className: "nameContainer" },
          e.createElement("span", null, r)
        )
      ),
      e.createElement(
        "div",
        { className: "actionsContainer" },
        e.createElement(
          "button",
          { className: "showItemBtn", type: "button", onClick: O },
          e.createElement(ae, null)
        ),
        e.createElement(
          "button",
          { className: "sendItemBtn", type: "button", onClick: I },
          e.createElement(re, null)
        )
      )
    ),
    o &&
      (o.data
        ? e.createElement(
            R,
            { fill: n, shouldDisplay: s },
            o.type === "mensagens"
              ? e.createElement("textarea", {
                  defaultValue: o.data,
                  id: `msgPreview${o.id}`,
                  disabled: !0,
                })
              : e.createElement(Se, { base64: o.data })
          )
        : e.createElement(R, { fill: n, shouldDisplay: s }, "Item Vazio")),
    !o && e.createElement(R, { fill: n, shouldDisplay: s }, "Carregando...")
  );
}
const Je = p.div`
  width: 100%;
  padding-bottom: 2rem;
  .titleIndex {
    margin: 0 auto;
    text-align: center;
  }
  .inputSearch {
    margin: 0.5rem 0;
  }
`;
function Ye() {
  const { mensagensIndex: t } = Z(),
    { audiosIndex: r } = Q(),
    { mediasIndex: a } = K(),
    { docsIndex: n } = X(),
    [o, i] = l.exports.useState("");
  return e.createElement(
    Je,
    null,
    e.createElement(W, { value: o, onChange: (s) => i(s.target.value) }),
    t.length > 0 &&
      e.createElement(
        e.Fragment,
        null,
        e.createElement("h2", { className: "titleIndex" }, "Mensagens"),
        t.map(
          (s, c) =>
            b(`${c} - ${s.name}`).toLowerCase().includes(b(o).toLowerCase()) &&
            e.createElement(P, {
              key: s.id,
              fill: f(s.type),
              Icon: v(s.type),
              name: `${c} - ${s.name}`,
              item: s,
            })
        )
      ),
    r.length > 0 &&
      e.createElement(
        e.Fragment,
        null,
        e.createElement("h2", { className: "titleIndex" }, "\xC1udios"),
        r.map(
          (s, c) =>
            b(`${c} - ${s.name}`).toLowerCase().includes(b(o).toLowerCase()) &&
            e.createElement(P, {
              key: s.id,
              fill: f(s.type),
              Icon: v(s.type),
              name: `${c} - ${s.name}`,
              item: s,
            })
        )
      ),
    a.length > 0 &&
      e.createElement(
        e.Fragment,
        null,
        e.createElement("h2", { className: "titleIndex" }, "M\xEDdias"),
        a.map(
          (s, c) =>
            b(`${c} - ${s.name}`).toLowerCase().includes(b(o).toLowerCase()) &&
            e.createElement(P, {
              key: s.id,
              fill: f(s.type),
              Icon: v(s.type),
              name: `${c} - ${s.name}`,
              item: s,
            })
        )
      ),
    n.length > 0 &&
      e.createElement(
        e.Fragment,
        null,
        e.createElement("h2", { className: "titleIndex" }, "Documentos"),
        n.map(
          (s, c) =>
            b(`${c} - ${s.name}`).toLowerCase().includes(b(o).toLowerCase()) &&
            e.createElement(P, {
              key: s.id,
              fill: f(s.type),
              Icon: v(s.type),
              name: `${c} - ${s.name}`,
              item: s,
            })
        )
      ),
    t.length === 0 &&
      r.length === 0 &&
      a.length === 0 &&
      n.length === 0 &&
      e.createElement(
        "div",
        { className: "noItemContainer" },
        e.createElement(
          "h2",
          null,
          "Nenhum item cadastrado, clique no bot\xE3o para abrir o dashboard"
        ),
        e.createElement(
          "button",
          {
            type: "button",
            className: "dashboardBtn",
            onClick: () =>
              chrome != null && chrome.runtime
                ? chrome.runtime.openOptionsPage()
                : (window.location.href = "dashboard.html"),
          },
          e.createElement(F, { className: "iconHeaderButton" }),
          "Abrir o Dashboard"
        )
      )
  );
}
const et = () => {};
async function ee(t, r, a = et) {
  const n = await T();
  if (!n) {
    u.error("N\xE3o foi poss\xEDvel encontrar a aba do Whatsapp Web", {
      theme: "colored",
    });
    return;
  }
  if (!n.id || !t.data) return;
  const o = t.data.slice(r != null ? r : 0),
    [i, ...s] = o,
    c = { item: { ...t, data: [r && r > 0 ? { ...i, delay: 0 } : i, ...s] } };
  chrome.tabs.sendMessage(n.id, c, a),
    u.success("Funil enviado para o Whatsapp Web", { theme: "colored" });
}
const tt = p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background: ${({ fill: t }) =>
    `linear-gradient(to right, ${m(0.6, t)} 0% , var(--zap-background) 30%, ${m(
      0.9,
      t
    )}100%)`};
  box-shadow: ${({ fill: t }) => `0px 0px 15px -10px ${t}`};
  border: ${({ fill: t }) => `1px solid ${m(0.7, t)}`};
  padding: 0.5rem;

  &:last-of-type {
    border-radius: 0 0 0.25rem 0.25rem;
  }
  .delayAndNameContainer {
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    display: grid;
    grid-template-columns: 6.5rem 1fr;
    align-items: center;
    .delayIndicatorAndNumber {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      .delayIconContainer {
        margin-right: 0.25rem;
        .delayIcon {
          fill: ${({ fill: t }) => t};
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .iconTypeAndNameContainer {
      display: flex;
      align-items: center;
      overflow: auto;
      max-width: 100%;
      .iconTypeContainer {
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        .iconType {
          fill: ${({ fill: t }) => t};
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      span {
        font-size: 1rem;
        font-weight: 500;
        padding: 0 0.5rem;
        text-align: center;
        width: 85%;
      }
    }
  }
  .sendFromHereBtn {
    background: ${({ fill: t }) => m(0.9, t)};
    border: 1px solid ${({ fill: t }) => t};
    box-shadow: ${({ fill: t }) => `0px 0px 5px ${t}`};
    display: grid;
    place-items: center;
    padding: 0.25rem;
    border-radius: 0.25rem;
    .sendFromHereBtnIcon {
      width: 1.25rem;
      height: 1.25rem;
      fill: ${({ fill: t }) => t};
    }
  }
`;
function nt({ item: t, index: r, handleSendFromHere: a }) {
  const { isPremium: n } = V(),
    o = Math.floor(t.delay / 1e3 / 60),
    i = Math.floor((t.delay / 1e3) % 60),
    s = v(t.type);
  return e.createElement(
    tt,
    { fill: f(t.type) },
    e.createElement(
      "div",
      { className: "delayAndNameContainer" },
      e.createElement(
        "div",
        { className: "delayIndicatorAndNumber" },
        e.createElement(
          "div",
          { className: "delayIconContainer" },
          e.createElement(he, { className: "delayIcon" })
        ),
        o > 0 && `${o} min e `,
        " ",
        i,
        " segs"
      ),
      e.createElement(
        "div",
        { className: "iconTypeAndNameContainer" },
        e.createElement(
          "div",
          { className: "iconTypeContainer" },
          e.createElement(s, { className: "iconType" })
        ),
        e.createElement("span", null, t.name)
      )
    ),
    r > 0 &&
      e.createElement(
        $e,
        {
          title:
            "Enviar a partir daqui, sem enviar os itens anteriores. O item atual ser\xE1 enviado imediatamente.",
        },
        e.createElement(
          "button",
          {
            type: "button",
            className: "sendFromHereBtn",
            onClick: a,
            disabled: !n,
          },
          e.createElement(ge, { className: "sendFromHereBtnIcon" })
        )
      )
  );
}
const at = te`

  to{
    max-height: 100%;
    overflow: visible;
  }
`,
  rt = p.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 1.5rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({ fill: t }) => `0px 0px 15px -10px ${t}`};
  border-radius: 0.25rem;
  border: ${({ fill: t }) => `1px solid ${m(0.7, t)}`};
  background: ${({ fill: t }) =>
    `linear-gradient(to right, ${m(0.6, t)} 0% , var(--zap-background) 30%, ${m(
      0.9,
      t
    )}100%)`};
  padding: 0.5rem 0;
  margin: 0.25rem 0;
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
  .iconAndNameContainer {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    .iconContainer {
      .iconItem {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${({ fill: t }) => t};
      }
    }
    .nameContainer {
      margin-left: 0.25rem;
      width: 100%;
      overflow: auto;
      span {
        font-size: 1rem;
        font-weight: 500;
        padding-left: 0.5rem;
        text-align: center;
      }
    }
  }
  .actionsContainer {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
    button {
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem;
      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
      &.showItemBtn {
        background: ${m(0.6, x.blue)};
        svg {
          fill: var(--blue);
        }
      }
      &.sendItemBtn {
        margin-left: 0.5rem;
        background: ${m(0.6, x.green)};
        svg {
          fill: var(--green);
        }
      }
    }
  }
`,
  U = p.div`
  display: ${({ shouldDisplay: t }) => (t ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: -0.25rem;
  margin-bottom: 1rem;
  border-radius: 0 0 0.25rem 0.25rem;
  width: 95%;
  max-height: 0rem;
  overflow: hidden;
  background: var(--shape);
  box-shadow: 0px 2px 10px -5px black;
  transition: max-height 0.3s ease-in-out;
  ${({ shouldDisplay: t }) =>
    t &&
    ne`
      animation: ${at} 0.3s ease-in forwards;
    `}
`;
function ot({ Icon: t, name: r, item: a, fill: n }) {
  const { getNameFromIndex: o } = oe(),
    [i, s] = l.exports.useState(),
    [c, E] = l.exports.useState(0),
    [$, O] = l.exports.useState(!1),
    { isPremium: I, responseData: w } = V();
  l.exports.useEffect(() => {
    if (!a.data) return;
    const y = a.data.reduce((D, L) => D + L.delay, 0);
    E(y);
  }, [a.data]);
  async function z() {
    if ((O(!$), !i)) {
      if (!a.data || a.data.length === 0) {
        s([]);
        return;
      }
      s(
        a.data.map((y) => {
          const D = ze(),
            L = o(y.id, y.type);
          return { ...y, ...(L && { name: L }), indexId: D, isOpen: !1 };
        })
      );
    }
  }
  async function M() {
    if (!I) {
      u.error("Funis est\xE3o habilitados somente na vers\xE3o Premium!"),
        u.error(w);
      return;
    }
    ee(a, 0);
  }
  const k = Math.floor(c / 1e3 / 60),
    B = Math.floor((c / 1e3) % 60);
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      rt,
      { fill: n },
      e.createElement(
        "div",
        { className: "iconAndNameContainer" },
        e.createElement(
          "div",
          { className: "iconContainer" },
          e.createElement(t, { className: "iconItem" })
        ),
        e.createElement(
          "div",
          { className: "nameContainer" },
          e.createElement(
            "span",
            null,
            !I && "DISPONIVEL NA VERS\xC3O PREMIUM",
            " ",
            r,
            " -",
            k > 0 && `${k} min e `,
            " ",
            B,
            " seg"
          )
        )
      ),
      e.createElement(
        "div",
        { className: "actionsContainer" },
        e.createElement(
          "button",
          { className: "showItemBtn", type: "button", onClick: z },
          e.createElement(ae, null)
        ),
        e.createElement(
          "button",
          {
            className: "sendItemBtn",
            type: "button",
            onClick: M,
            disabled: !I,
          },
          e.createElement(re, null)
        )
      )
    ),
    i &&
      (i.length > 0
        ? e.createElement(
            U,
            { fill: n, shouldDisplay: $ },
            i.map((y, D) =>
              e.createElement(nt, {
                key: y.indexId,
                item: y,
                index: D,
                handleSendFromHere: () => {
                  if (!I) {
                    u.error(
                      "Funis est\xE3o habilitados somente na vers\xE3o Premium!"
                    ),
                      u.error(w);
                    return;
                  }
                  ee(a, D);
                },
              })
            )
          )
        : e.createElement(U, { fill: n, shouldDisplay: $ }, "Funil Vazio")),
    !i && e.createElement(U, { fill: n, shouldDisplay: $ }, "Carregando...")
  );
}
const st = p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* grid-area: content; */
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  background: var(--shape);
  position: relative;
  padding: 0 0.25rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
  #funnelWrapper {
    width: 100%;
    padding-bottom: 2rem;
  }
  .noFunnelContainer {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 5rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dashboardBtn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-title);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      margin-top: 1rem;

      transition: background 0.2s;

      background: ${G(0.15, x.purple)};
      box-shadow: 0px 0px 15px var(--veryperi);

      &:hover {
        background: var(--veryperi);
      }

      .iconHeaderButton {
        fill: white;
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
`;
function it() {
  const { funnelsIndex: t } = Ie(),
    [r, a] = l.exports.useState("");
  return e.createElement(
    st,
    null,
    t.filter((n) => n.data).length > 0
      ? e.createElement(
          e.Fragment,
          null,
          e.createElement(W, { value: r, onChange: (n) => a(n.target.value) }),
          e.createElement(
            "div",
            { id: "funnelWrapper" },
            t.map(
              (n, o) =>
                n.data &&
                n.data.length > 0 &&
                b(`${o} - ${n.name}`)
                  .toLowerCase()
                  .includes(b(r).toLowerCase()) &&
                e.createElement(ot, {
                  key: n.id,
                  fill: f(n.type),
                  Icon: v(n.type),
                  name: `${o} - ${n.name}`,
                  item: n,
                })
            )
          )
        )
      : e.createElement(
          "div",
          { className: "noFunnelContainer" },
          e.createElement(
            "h2",
            null,
            "Nenhum funil cadastrado, clique no bot\xE3o para abrir o dashboard"
          ),
          e.createElement(
            "button",
            {
              type: "button",
              className: "dashboardBtn",
              onClick: () =>
                chrome != null && chrome.runtime
                  ? chrome.runtime.openOptionsPage()
                  : (window.location.href = "dashboard.html"),
            },
            e.createElement(F, { className: "iconHeaderButton" }),
            "Abrir o Dashboard"
          )
        )
  );
}
const lt = p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-area: content;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  background: var(--shape);
  position: relative;
  padding: 0 0.25rem;
  #menuSection {
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--shape);
    align-items: center;
    justify-content: space-evenly;
    padding: 0.25rem 0;

    a {
      text-decoration: none;
      display: grid;
      place-items: center;
      width: 100%;

      & + a {
        padding-left: 0.25rem;
      }
    }
  }
  .noItemContainer {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 5rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dashboardBtn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-title);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      margin-top: 1rem;

      transition: background 0.2s;

      background: ${G(0.15, x.purple)};
      box-shadow: 0px 0px 15px var(--veryperi);

      &:hover {
        background: var(--veryperi);
      }

      .iconHeaderButton {
        fill: white;
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
`,
  ct = p.div`
  border: 1px solid ${({ fill: t }) => t && m(0.7, t)};
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isActive: t, fill: r }) =>
    t && !!r ? m(0.8, r) : m(0.7, x.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -10px ${({ fill: t }) => t && m(0.1, t)};
  &:hover {
    filter: brightness(0.9);
    background: ${({ fill: t }) => t && m(0.8, t)};
  }
  .insideIcon {
    width: 50%;
    height: 50%;
    fill: var(--text-title);
    fill: ${({ isActive: t, fill: r }) => t && !!r && r};
  }
`;
function j({ fill: t, isActive: r, Icon: a }) {
  return e.createElement(
    ct,
    { isActive: !!r, fill: t },
    e.createElement(a, { className: "insideIcon" })
  );
}
function dt() {
  const t = J(),
    [r, a] = l.exports.useState("all"),
    n = q();
  return (
    l.exports.useEffect(() => {
      var c;
      const o =
        (c = t == null ? void 0 : t.pathname) == null
          ? void 0
          : c.match(/^\/popup\/items\/(.*)$/);
      if (!o) return n("/popup/items/all");
      const [i, s] = o;
      return a(s || "all");
    }, [t]),
    e.createElement(
      lt,
      null,
      e.createElement(
        "section",
        { id: "menuSection" },
        e.createElement(
          N,
          { to: S.all },
          e.createElement(j, { Icon: Ne, isActive: r === "all", fill: x.red })
        ),
        e.createElement(
          N,
          { to: S.mensagens },
          e.createElement(j, {
            Icon: v("mensagens"),
            isActive: r === "mensagens",
            fill: f("mensagens"),
          })
        ),
        e.createElement(
          N,
          { to: S.audios },
          e.createElement(j, {
            Icon: v("audios"),
            isActive: r === "audios",
            fill: f("audios"),
          })
        ),
        e.createElement(
          N,
          { to: S.medias },
          e.createElement(j, {
            Icon: v("medias"),
            isActive: r === "medias",
            fill: f("medias"),
          })
        ),
        e.createElement(
          N,
          { to: S.docs },
          e.createElement(j, {
            Icon: v("docs"),
            isActive: r === "docs",
            fill: f("docs"),
          })
        )
      ),
      e.createElement(se, null)
    )
  );
}
const mt = p.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;
function ut() {
  const { docsIndex: t } = X(),
    [r, a] = l.exports.useState("");
  return e.createElement(
    mt,
    null,
    e.createElement(W, { value: r, onChange: (n) => a(n.target.value) }),
    t.length > 0
      ? t.map(
          (n, o) =>
            b(`${o} - ${n.name}`).toLowerCase().includes(b(r).toLowerCase()) &&
            e.createElement(P, {
              key: n.id,
              fill: f(n.type),
              Icon: v(n.type),
              name: `${o} - ${n.name}`,
              item: n,
            })
        )
      : e.createElement(
          "div",
          { className: "noItemContainer" },
          e.createElement(
            "h2",
            null,
            "Nenhum documento cadastrado, clique no bot\xE3o para abrir o dashboard"
          ),
          e.createElement(
            "button",
            {
              type: "button",
              className: "dashboardBtn",
              onClick: () =>
                chrome != null && chrome.runtime
                  ? chrome.runtime.openOptionsPage()
                  : (window.location.href = "dashboard.html"),
            },
            e.createElement(F, { className: "iconHeaderButton" }),
            "Abrir o Dashboard"
          )
        )
  );
}
const pt = p.div``;
function ht() {
  const t = q();
  return (
    l.exports.useEffect(() => {
      t("/popup", { replace: !0 });
    }, []),
    e.createElement(
      pt,
      null,
      e.createElement(
        N,
        { to: "/popup/funnels" },
        e.createElement("h1", null, "LoginPopup")
      )
    )
  );
}
const gt = p.div`
  width: 100%;
  height: 100%;
  background: var(--shape);
  padding: 0.25rem;
  grid-area: menus;
  #btnCategoryContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 0.25rem;
    button {
      width: 10rem;
      height: 2rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      background: var(--zap-background);

      &#itemsCategoryBtn {
        border: 1px solid var(--veryperi);
        &.activeCategory {
          background: var(--veryperi);
          color: white;
        }
      }
      &#funnelsCategoryBtn {
        border: 1px solid var(--yellow);
        &.activeCategory {
          background: var(--yellow);
          color: white;
        }
      }
      &#bulkCategoryBtn {
        border: 1px solid var(--purple);
        &.activeCategory {
          background: var(--purple);
          color: white;
        }
      }
    }
  }
`,
  bt = p.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto 1fr 2rem;
  grid-template-areas:
    "header"
    "menus"
    "content"
    "copyright";
`,
  ft = p.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  background: var(--header-background);
  /* background: var(--veryperi); */
  width: 100%;
  height: 100%;
  #logoAndUsername {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    span {
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      margin-top: 0.5rem;
    }
    img {
      width: 5rem;
      height: auto;
      filter: drop-shadow(0px 5px 15px black);
    }
  }

  button.dashboardBtn {
    padding: 0.25rem;
    border: none;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 15px -5px black;
    transition: background 0.2s;

    background: ${G(0.15, x.purple)};
    box-shadow: 0px 0px 15px var(--veryperi);

    &:hover {
      background: var(--veryperi);
    }

    .iconHeaderButton {
      fill: white;
      width: 1.75rem;
      height: 1.75rem;
    }
    span {
      color: white;
      font-weight: 800;
    }
  }
  #containerSwitchDarkMode {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    transform: translateX(-0.5rem);
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    span {
      font-weight: 700;
      font-size: 0.75rem;
      text-align: center;
      color: white;
    }
  }
`;
function vt() {
  const { isDarkTheme: t, setIsDarkTheme: r } = ie(),
    { isPremium: a, responseData: n } = V();
  return e.createElement(
    ft,
    null,
    e.createElement(
      "button",
      {
        type: "button",
        className: "dashboardBtn",
        onClick: () => {
          chrome != null && chrome.runtime
            ? chrome.runtime.openOptionsPage()
            : (window.location.href = "dashboard.html");
        },
      },
      e.createElement(F, { className: "iconHeaderButton" }),
      e.createElement("span", null, "Painel de Controle")
    ),
    e.createElement(
      "div",
      { id: "logoAndUsername" },
      e.createElement("img", {
        className: "popupLogo",
        src: t ? ke : De,
        alt: "ZapVoice Logo",
      }),
      e.createElement(
        "span",
        null,
        a
          ? `(PRO)${String(n)}`
          : n &&
              e.createElement(
                "a",
                {
                  target: "_blank",
                  href: `http://web.whatsapp.com/send?phone=5514991238006&amp;text=Estou com o Erro: ${String(
                    n
                  )}, pode me ajudar?`,
                  rel: "noreferrer",
                },
                String(n),
                e.createElement("br", null),
                "Clique Aqui para suporte"
              )
      )
    ),
    e.createElement(
      "div",
      { id: "containerSwitchDarkMode" },
      e.createElement("span", null, " MODO ", t ? "DARK" : "LIGHT"),
      e.createElement(Ae, {
        id: "switchDarkMode",
        checked: t,
        onClick: () => r(!t),
      })
    )
  );
}
const yt = p.div`
  grid-area: copyright;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--text-subtitle);
  background: var(--shape);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  span.nameAndVersion {
    font-size: 0.7rem;
    font-weight: 700;
  }
  span.copyrightWarning {
    font-size: 0.6rem;
  }
  .btnFooter {
    position: absolute;
    border-radius: 0.25rem;
    font-weight: 900;
    padding: 0 0.5rem;
    top: 0;
    bottom: 0;
    border: 1px solid var(--yellow);
    color: var(--text-title);
    background: ${m(0.4, x.yellow)};
    &.btnFooterSuporte {
      left: 1rem;
    }
    &.btnFooterSugestoes {
      right: 1rem;
    }
  }
`;
function xt() {
  const [t, r] = l.exports.useState(""),
    [a, n] = l.exports.useState("");
  return (
    l.exports.useEffect(() => {
      const o =
        chrome != null && chrome.runtime
          ? chrome.runtime.getManifest()
          : { version_name: "Local Development", version: "Local Development" };
      r(o.version_name || o.version);
    }, []),
    l.exports.useEffect(() => {
      (async () => {
        const i = await _("wppVersion"),
          s =
            chrome != null && chrome.runtime
              ? chrome.runtime.id
              : "localExtensionId",
          c = new URLSearchParams();
        c.append("version", t),
          c.append("wppVersion", i),
          c.append("extensionId", s),
          n(c.toString());
      })().catch(console.error);
    }, [t]),
    e.createElement(
      yt,
      null,
      e.createElement(
        "span",
        { className: "nameAndVersion" },
        "ZAPVOICE - v",
        t
      ),
      e.createElement(
        "span",
        { className: "copyrightWarning" },
        "Copyright \xA9 2023 ZapVoice - Todos os direitos reservados"
      ),
      e.createElement(
        "button",
        {
          type: "button",
          className: "btnFooter btnFooterSuporte",
          onClick: () => {
            const o = `https://zapvoice.com.br/suporte?${a}`;
            chrome != null && chrome.tabs
              ? chrome.tabs.create({ url: o })
              : window.open(o, "_blank");
          },
        },
        "Suporte"
      ),
      e.createElement(
        "button",
        {
          type: "button",
          className: "btnFooter btnFooterSugestoes",
          onClick: () => {
            const o = `https://zapvoice.com.br/sugestoes?${a}`;
            chrome != null && chrome.tabs
              ? chrome.tabs.create({ url: o })
              : window.open(o, "_blank");
          },
        },
        "Sugest\xF5es"
      )
    )
  );
}
function Et() {
  const t = J(),
    r = q(),
    a = Y(),
    [n, o] = l.exports.useState("items");
  return (
    l.exports.useEffect(() => {
      _("lastPathStored").then((i) => {
        if (i != null && i.includes("items")) o("items");
        else if (i != null && i.includes("funnels")) o("funnels");
        else if (i != null && i.includes("bulk")) o("bulk");
        else {
          r("/popup/items", { replace: !0 });
          return;
        }
        r(i, { replace: !0 });
      });
    }, []),
    l.exports.useEffect(() => {
      const i = t.pathname.includes("bulk")
        ? "bulk"
        : t.pathname.includes("funnels")
        ? "funnels"
        : "items";
      return o(i);
    }, [t]),
    e.createElement(
      bt,
      null,
      e.createElement(vt, null),
      e.createElement(
        gt,
        null,
        e.createElement(
          "div",
          { id: "btnCategoryContainer" },
          e.createElement(
            N,
            { to: "/popup/items" },
            e.createElement(
              "button",
              {
                type: "button",
                id: "itemsCategoryBtn",
                className: n === "items" ? "activeCategory" : "",
              },
              "Itens \xDAnicos"
            )
          ),
          e.createElement(
            N,
            { to: "/popup/funnels" },
            e.createElement(
              "button",
              {
                type: "button",
                id: "funnelsCategoryBtn",
                className: n === "funnels" ? "activeCategory" : "",
              },
              "Funis Autom\xE1ticos"
            )
          ),
          a.remarketing &&
            e.createElement(
              N,
              { to: "/popup/bulk", className: "relative" },
              e.createElement(
                "span",
                {
                  className:
                    "absolute top-0 right-0 bg-zap-veryperi font-bold px-2 rounded translate-x-2 translate-y-[-2px] z-50",
                },
                "BETA"
              ),
              e.createElement(
                "button",
                {
                  type: "button",
                  id: "bulkCategoryBtn",
                  className: n === "bulk" ? "activeCategory" : "",
                },
                "Disparo"
              )
            )
        )
      ),
      e.createElement(se, null),
      e.createElement(xt, null)
    )
  );
}
const wt = p.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;
function Ct() {
  const { mensagensIndex: t } = Z(),
    [r, a] = l.exports.useState("");
  return e.createElement(
    wt,
    null,
    e.createElement(W, { value: r, onChange: (n) => a(n.target.value) }),
    t.length > 0
      ? t.map(
          (n, o) =>
            b(`${o} - ${n.name}`).toLowerCase().includes(b(r).toLowerCase()) &&
            e.createElement(P, {
              key: n.id,
              fill: f(n.type),
              Icon: v(n.type),
              name: `${o} - ${n.name}`,
              item: n,
            })
        )
      : e.createElement(
          "div",
          { className: "noItemContainer" },
          e.createElement(
            "h2",
            null,
            "Nenhuma mensagem cadastrado, clique no bot\xE3o para abrir o dashboard"
          ),
          e.createElement(
            "button",
            {
              type: "button",
              className: "dashboardBtn",
              onClick: () =>
                chrome != null && chrome.runtime
                  ? chrome.runtime.openOptionsPage()
                  : (window.location.href = "dashboard.html"),
            },
            e.createElement(F, { className: "iconHeaderButton" }),
            "Abrir o Dashboard"
          )
        )
  );
}
const St = p.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;
function $t() {
  const { audiosIndex: t } = Q(),
    [r, a] = l.exports.useState("");
  return e.createElement(
    St,
    null,
    e.createElement(W, { value: r, onChange: (n) => a(n.target.value) }),
    t.length > 0
      ? t.map(
          (n, o) =>
            b(`${o} - ${n.name}`).toLowerCase().includes(b(r).toLowerCase()) &&
            e.createElement(P, {
              key: n.id,
              fill: f(n.type),
              Icon: v(n.type),
              name: `${o} - ${n.name}`,
              item: n,
            })
        )
      : e.createElement(
          "div",
          { className: "noItemContainer" },
          e.createElement(
            "h2",
            null,
            "Nenhum \xE1udio cadastrado, clique no bot\xE3o para abrir o dashboard"
          ),
          e.createElement(
            "button",
            {
              type: "button",
              className: "dashboardBtn",
              onClick: () =>
                chrome != null && chrome.runtime
                  ? chrome.runtime.openOptionsPage()
                  : (window.location.href = "dashboard.html"),
            },
            e.createElement(F, { className: "iconHeaderButton" }),
            "Abrir o Dashboard"
          )
        )
  );
}
const It = p.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;
function Nt() {
  const { mediasIndex: t } = K(),
    [r, a] = l.exports.useState("");
  return e.createElement(
    It,
    null,
    e.createElement(W, { value: r, onChange: (n) => a(n.target.value) }),
    t.length > 0
      ? t.map(
          (n, o) =>
            b(`${o} - ${n.name}`).toLowerCase().includes(b(r).toLowerCase()) &&
            e.createElement(P, {
              key: n.id,
              fill: f(n.type),
              Icon: v(n.type),
              name: `${o} - ${n.name}`,
              item: n,
            })
        )
      : e.createElement(
          "div",
          { className: "noItemContainer" },
          e.createElement(
            "h2",
            null,
            "Nenhuma m\xEDdia cadastrada, clique no bot\xE3o para abrir o dashboard"
          ),
          e.createElement(
            "button",
            {
              type: "button",
              className: "dashboardBtn",
              onClick: () =>
                chrome != null && chrome.runtime
                  ? chrome.runtime.openOptionsPage()
                  : (window.location.href = "dashboard.html"),
            },
            e.createElement(F, { className: "iconHeaderButton" }),
            "Abrir o Dashboard"
          )
        )
  );
}
const kt = p.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  h1 {
    font-size: 1.5rem;
  }
  #selectItemFunnelWrapper {
    width: 100%;
  }
  #fireBulk {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
    padding: 0.5rem 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 0.25rem;
    border: none;
    margin-top: 1.5rem;
  }
  .delayInput {
    background: var(--shape);
    border: 1px solid var(--gray1);
    border-radius: 0.25rem;
    text-align: center;
    width: 5rem;
    padding: 0.25rem;
    font-weight: bold;
    outline: none;
    &:hover,
    &:active {
      border: 1px solid var(--blue);
    }
  }
`;
var Dt = l.exports.forwardRef(function (t, r) {
  var a = Pe(t);
  return l.exports.createElement(Me, be({ ref: r }, a));
});
const At = Dt,
  Pt = p.div`
  width: 100%;
  max-height: 100px;
  .react-select-container {
    height: 100%;
    .react-select__control {
      height: 100%;
      overflow: auto;
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
        .react-select__clear-indicator {
          position: sticky;
          top: 0px;
          bottom: 0px;
          z-index: 2;
        }
        .react-select__dropdown-indicator {
          svg {
            fill: var(--text-title);
          }
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
          background: ${m(0.8, x.red)};
          &:hover {
            color: var(--red);
            background: ${m(0.8, x.red)};
            cursor: not-allowed;
          }
        }
        &.react-select__option--is-selected {
          color: var(--blue);
          background: ${m(0.8, x.blue)};
        }
      }
    }
  }
`;
function Mt({
  props: {
    loadedOptions: t,
    onInputChange: r,
    onChange: a,
    currentNumbers: n,
    inputValue: o,
  },
}) {
  return e.createElement(
    Pt,
    null,
    e.createElement(At, {
      placeholder: "Digite os n\xFAmeros...",
      isMulti: !0,
      name: "bulkNumbers",
      className: "react-select-container",
      classNamePrefix: "react-select",
      options: t,
      onInputChange: r,
      onChange: a,
      value: n.map((i) => ({ label: i, value: i })),
      inputValue: o,
    })
  );
}
const Bt = () => {};
async function Ft(t, r = Bt) {
  var o, i;
  const a = await T();
  if (!a) {
    u.error("N\xE3o foi poss\xEDvel encontrar a aba do Whatsapp Web", {
      theme: "colored",
    });
    return;
  }
  if (
    !a.id ||
    !(t != null && t.targetNumbers) ||
    !(t != null && t.type) ||
    !((o = t == null ? void 0 : t.item) != null && o.id) ||
    !((i = t == null ? void 0 : t.item) != null && i.type)
  )
    return;
  const n = { item: t };
  chrome.tabs.sendMessage(a.id, n, r),
    u.success("Disparo enviado para o Whatsapp Web", { theme: "colored" });
}
function Tt() {
  const [t, r] = l.exports.useState("mensagens"),
    [a, n] = l.exports.useState([]),
    [o, i] = l.exports.useState([]),
    [s, c] = l.exports.useState(),
    [E, $] = l.exports.useState([]),
    [O, I] = l.exports.useState(""),
    [w, z] = l.exports.useState(!1),
    [M, k] = l.exports.useState(1),
    [B, y] = l.exports.useState(30),
    { mensagensIndex: D } = Z(),
    { audiosIndex: L } = Q(),
    { mediasIndex: le } = K(),
    { docsIndex: ce } = X(),
    de = { mensagens: D, audios: L, medias: le, docs: ce };
  l.exports.useEffect(() => {
    _("minDelayStored").then((d) => {
      d && !Number.isNaN(Number(d)) && k(parseInt(d, 10));
    }),
      _("maxDelayStored").then((d) => {
        d && !Number.isNaN(Number(d)) && y(parseInt(d, 10));
      });
  }, []),
    l.exports.useEffect(() => {
      i([]),
        c(void 0),
        z(!0),
        i(de[t].map((d) => ({ label: d.name || `${t}-${d.id}`, value: d.id }))),
        z(!1);
    }, [t]);
  function me(d) {
    if ((I(d), d.includes(" "))) {
      const h = d
        .split(" ")
        .map((g) => g.replaceAll(/\D/g, ""))
        .filter((g) => g);
      I(""),
        $(
          Array.from(
            new Set([
              ...E,
              ...h.map((g) =>
                g.length > 11 && g.match(/^55/) ? g.replace(/^55/, "") : g
              ),
            ])
          )
        );
    } else n(d ? [{ label: d, value: d }] : []);
  }
  function ue(d) {
    $(
      Array.from(
        new Set(
          d
            .map((h) => ({
              ...h,
              value: h.value.replaceAll(/\D/g, ""),
              label: h.label.replaceAll(/\D/g, ""),
            }))
            .map((h) => h.value)
        )
      )
    ),
      n([]);
  }
  return e.createElement(
    kt,
    null,
    e.createElement("h1", null, "Disparo em Massa"),
    e.createElement(
      "label",
      { htmlFor: "numbers" },
      "N\xFAmeros ",
      (E == null ? void 0 : E.length) > 0 && `(${E.length})`
    ),
    e.createElement(Mt, {
      props: {
        loadedOptions: a,
        onInputChange: me,
        onChange: ue,
        currentNumbers: E,
        inputValue: O,
      },
    }),
    e.createElement("label", { htmlFor: "typesContainer" }, "Tipo:"),
    e.createElement(
      "div",
      {
        id: "typesContainer",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        },
      },
      e.createElement(H, {
        className: "optionType optionMensagens",
        name: "Mensagens",
        fill: f("mensagens"),
        isActive: t === "mensagens",
        Icon: v("mensagens"),
        onClick: () => r("mensagens"),
      }),
      e.createElement(H, {
        className: "optionType optionAudios",
        name: "Audios",
        fill: f("audios"),
        isActive: t === "audios",
        Icon: v("audios"),
        onClick: () => r("audios"),
      }),
      e.createElement(H, {
        className: "optionType optionMedias",
        name: "M\xEDdias",
        fill: f("medias"),
        isActive: t === "medias",
        Icon: v("medias"),
        onClick: () => r("medias"),
      }),
      e.createElement(H, {
        className: "optionType optionDocs",
        name: "Documentos",
        fill: f("docs"),
        isActive: t === "docs",
        Icon: v("docs"),
        onClick: () => r("docs"),
      })
    ),
    e.createElement(
      "label",
      { htmlFor: "selectItemToSend" },
      "Item a ser disparado"
    ),
    e.createElement(
      "div",
      { id: "selectItemFunnelWrapper" },
      e.createElement(Be, {
        props: {
          className: "selectItemToSend",
          loadedOptions: o,
          isLoading: w,
          setIsLoading: z,
          selectedItemFunnel: s,
          setSelectedItemFunnel: c,
        },
      })
    ),
    e.createElement("span", null, "Delay (segundos)"),
    e.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        },
      },
      e.createElement("span", null, "Randomizar entre"),
      e.createElement("input", {
        type: "number",
        className: "delayInput",
        min: "0",
        name: "minDelay",
        value: M,
        onChange: (d) => {
          const { value: h } = d.target;
          k(Number(h)), A({ minDelayStored: h.toString() });
        },
        onBlur: (d) => {
          const { value: h } = d.target,
            g = Number(h);
          console.log(g, h),
            g < 0
              ? (k(0), A({ minDelayStored: "0" }))
              : g > B
              ? (k(B), A({ minDelayStored: B.toString() }))
              : (k(g), A({ minDelayStored: g.toString() }));
        },
      }),
      e.createElement("span", null, "e"),
      e.createElement("input", {
        type: "number",
        className: "delayInput",
        min: "0",
        name: "maxDelay",
        value: B,
        onChange: (d) => {
          const { value: h } = d.target;
          y(Number(h)), A({ maxDelayStored: h.toString() });
        },
        onBlur: (d) => {
          const { value: h } = d.target,
            g = Number(h);
          if (g < M) {
            y(M), A({ maxDelayStored: M.toString() });
            return;
          }
          y(g), A({ maxDelayStored: g.toString() });
        },
      })
    ),
    e.createElement(
      "button",
      {
        type: "button",
        id: "fireBulk",
        disabled: !s || !E.length,
        onClick: () => {
          if (!s) {
            u.error("Nenhum item foi selecionado");
            return;
          }
          Ft({
            type: "bulk",
            targetNumbers: E,
            item: { id: s.value, type: t },
            delay: { min: M, max: B },
          });
        },
      },
      "Disparar",
      e.createElement(fe, null)
    )
  );
}
const S = {
  all: "/popup/items/all",
  mensagens: "/popup/items/mensagens",
  audios: "/popup/items/audios",
  medias: "/popup/items/medias",
  docs: "/popup/items/docs",
};
function Lt() {
  const t = J(),
    r = Y(),
    a = q();
  return (
    l.exports.useEffect(() => {
      t.pathname !== "/" &&
        t.pathname !== "/popup" &&
        A({ lastPathStored: t.pathname });
    }, [t]),
    t.pathname.includes("/bulk") &&
      !r.remarketing &&
      a("/popup/items", { replace: !0 }),
    e.createElement(
      Fe,
      null,
      e.createElement(C, { path: "/", element: e.createElement(ht, null) }),
      e.createElement(
        C,
        { path: "/popup", element: e.createElement(Et, null) },
        e.createElement(
          C,
          { path: "/popup/items", element: e.createElement(dt, null) },
          e.createElement(C, {
            path: S.all,
            element: e.createElement(Ye, null),
          }),
          e.createElement(C, {
            path: S.mensagens,
            element: e.createElement(Ct, null),
          }),
          e.createElement(C, {
            path: S.audios,
            element: e.createElement($t, null),
          }),
          e.createElement(C, {
            path: S.medias,
            element: e.createElement(Nt, null),
          }),
          e.createElement(C, {
            path: S.docs,
            element: e.createElement(ut, null),
          })
        ),
        e.createElement(C, {
          path: "/popup/funnels",
          element: e.createElement(it, null),
        }),
        r.remarketing &&
          e.createElement(C, {
            path: "/popup/bulk",
            element: e.createElement(Tt, null),
          })
      )
    )
  );
}
const _t = ve`
html{
  display: flex;
  align-items: center;
  justify-content: center;
}
body{
  width: 450px;
  height:600px;
}
#root{
  max-width: 450px;
  margin: 0 auto;
}
`;
function Wt() {
  Y();
  const { isDarkTheme: t } = ie();
  return e.createElement(
    Te,
    null,
    e.createElement(
      Le,
      null,
      e.createElement(ye, {
        theme: t ? "dark" : "light",
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
      e.createElement(xe, null),
      e.createElement(Ee, { isDarkTheme: t }),
      e.createElement(_t, null),
      e.createElement(Lt, null)
    )
  );
}
we.setAppElement("#root");
chrome != null &&
  chrome.tabs &&
  setTimeout(async () => {
    const t = await T();
    t && t.id
      ? chrome.tabs.update(t.id, { highlighted: !0, selected: !0 })
      : chrome.tabs.create({ url: "https://web.whatsapp.com", active: !0 });
  }, 500);
Ce.createRoot(document.getElementById("root")).render(
  e.createElement(
    e.StrictMode,
    null,
    e.createElement(
      _e,
      null,
      e.createElement(
        We,
        null,
        e.createElement(Oe, null, e.createElement(Wt, null))
      )
    )
  )
);
