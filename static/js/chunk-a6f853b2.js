(function () {
  (async () => {
    async function e(n) {
      await import(n);
    }
    async function o(n) {
      const { detail: c } = n;
      e(c.url);
    }
    window.addEventListener("ZVImportURL", o);
    const t = document.createElement("div");
    (t.id = "ZVInjected"), document.body.appendChild(t);
  })().catch(console.error);
})();
