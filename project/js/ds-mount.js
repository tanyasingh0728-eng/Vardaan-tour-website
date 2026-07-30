/* Mounts bound Vardaan Tour design-system components into [data-ds] slots.
   Props come from data-p-<name> attributes (camelCased) or a data-props JSON blob.
   data-href turns a card/button into a navigation link. */
(function () {
  function camel(s) { return s.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); }

  function coerce(v) {
    if (v === "true") return true;
    if (v === "false") return false;
    if (v !== "" && !isNaN(v)) return Number(v);
    return v;
  }

  function propsFromEl(el) {
    var p = {};
    Array.prototype.forEach.call(el.attributes, function (a) {
      if (a.name.indexOf("data-p-") === 0) p[camel(a.name.slice(7))] = coerce(a.value);
    });
    if (el.getAttribute("data-props")) {
      try { Object.assign(p, JSON.parse(el.getAttribute("data-props"))); } catch (e) {}
    }
    return p;
  }

  function run() {
    var DS = window.VardaanTourDesignSystem_85d1be;
    if (!DS || !window.React || !window.ReactDOM) {
      console.error("ds-mount: design system bundle or React not loaded");
      return;
    }
    var R = window.React;
    document.querySelectorAll("[data-ds]").forEach(function (el) {
      var name = el.getAttribute("data-ds");
      var Comp = DS[name];
      if (!Comp) { console.warn("ds-mount: unknown component " + name); return; }
      var props = propsFromEl(el);
      var href = el.getAttribute("data-href");
      if (href) props.onClick = function () { window.location.href = href; };
      if (name === "SearchBar") {
        var go = el.getAttribute("data-search-href") || "packages.html";
        props.onSearch = function () { window.location.href = go; };
      }
      var kids = el.getAttribute("data-children");
      try {
        var root = window.ReactDOM.createRoot(el);
        root.render(R.createElement(Comp, props, kids || undefined));
        if (href) el.style.cursor = "pointer";
      } catch (e) { console.error("ds-mount: failed " + name, e); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
