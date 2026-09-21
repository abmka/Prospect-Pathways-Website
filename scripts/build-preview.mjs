/**
 * Builds a single-file, clickable preview of the whole site from the SAME
 * React components Next.js uses — so the preview can never drift from the code.
 *
 *   npm run preview   ->   preview/index.html
 *
 * Navigation uses #/about-us style hashes so it works from a single file.
 */
import { build } from "esbuild";
import { mkdir, readFile, writeFile, copyFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const tmp = resolve(root, ".preview-build");
const outDir = resolve(root, "preview");

await rm(tmp, { recursive: true, force: true });
await mkdir(tmp, { recursive: true });
await mkdir(outDir, { recursive: true });

await build({
  entryPoints: [resolve(here, "preview-entry.tsx")],
  outfile: resolve(tmp, "entry.mjs"),
  bundle: true,
  format: "esm",
  platform: "node",
  jsx: "automatic",
  target: "node20",
  packages: "external",
  alias: {
    "next/link": resolve(here, "shims/next-link.tsx"),
    "next/navigation": resolve(here, "shims/next-navigation.ts"),
  },
  loader: { ".css": "empty" },
  logLevel: "warning",
});

const { renderAll } = await import(resolve(tmp, "entry.mjs"));
const pages = await renderAll();

const css = await readFile(resolve(root, "app/globals.css"), "utf8");

const previewCss = `
[hidden] { display: none !important; }
.pp-toolbar {
  position: fixed; left: 50%; bottom: 20px; transform: translateX(-50%);
  z-index: 200; display: flex; gap: 8px; align-items: center;
  background: rgba(11,75,85,0.96); color: #fff;
  padding: 8px 10px 8px 16px; border-radius: 999px;
  box-shadow: 0 10px 30px rgba(11,75,85,0.35);
  font-family: var(--font); font-size: 13px; max-width: calc(100vw - 32px);
}
.pp-toolbar span { white-space: nowrap; letter-spacing: 0.06em; text-transform: uppercase; font-size: 11px; color: #9ccdd3; }
.pp-toolbar select {
  font-family: inherit; font-size: 14px; color: #0b4b55; background: #fff;
  border: none; border-radius: 999px; padding: 9px 14px; min-height: 40px; max-width: 46vw;
}
@media print { .pp-toolbar { display: none; } }
`;

const options = pages
  .map((p) => `<option value="${p.path}">${p.title}</option>`)
  .join("");

const body = pages
  .map(
    (p) =>
      `<div class="pp-page" data-pp-page="${p.path}" hidden>${p.html
        .replace(/(src|href)="\/(logo|logo-white)\.png"/g, '$1="$2.png"')
        .replace(/action="javascript:[^"]*"/g, 'action="#"')}</div>`
  )
  .join("\n");

const script = `
(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll('[data-pp-page]'));
  var picker = document.getElementById('pp-picker');

  function currentPath() {
    var h = location.hash.replace(/^#/, '');
    var i = h.indexOf('#');
    return (i >= 0 ? h.slice(0, i) : h) || '/';
  }
  function currentAnchor() {
    var h = location.hash.replace(/^#/, '');
    var i = h.indexOf('#');
    return i >= 0 ? h.slice(i + 1) : '';
  }

  function show() {
    var path = currentPath();
    var matched = false;
    pages.forEach(function (el) {
      var on = el.getAttribute('data-pp-page') === path;
      el.hidden = !on;
      if (on) matched = true;
    });
    if (!matched) {
      pages.forEach(function (el, i) { el.hidden = i !== 0; });
      path = '/';
    }
    if (picker) picker.value = path;
    document.querySelectorAll('[data-mobile-menu]').forEach(function (m) {
      m.setAttribute('data-open', 'false');
    });
    var anchor = currentAnchor();
    if (anchor) {
      var page = pages.filter(function (el) { return !el.hidden; })[0];
      var target = page && page.querySelector('#' + CSS.escape(anchor));
      if (target) { target.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  // Text size + contrast (mirrors AccessibilityBar.tsx; remembered per browser)
  function applyA11y() {
    try {
      var s = localStorage.getItem('pp-text-size');
      if (s === 'large' || s === 'larger') document.documentElement.setAttribute('data-text-size', s);
      else document.documentElement.removeAttribute('data-text-size');
      if (localStorage.getItem('pp-contrast') === 'high') document.documentElement.setAttribute('data-contrast', 'high');
      else document.documentElement.removeAttribute('data-contrast');
      var size = s || 'normal', hc = localStorage.getItem('pp-contrast') === 'high';
      document.querySelectorAll('.a11y-group').forEach(function (g) {
        var b = g.querySelectorAll('button');
        b[0] && b[0].setAttribute('aria-pressed', String(size === 'normal'));
        b[1] && b[1].setAttribute('aria-pressed', String(size === 'large'));
        b[2] && b[2].setAttribute('aria-pressed', String(size === 'larger'));
      });
      document.querySelectorAll('.a11y-btn[aria-label="High contrast"]').forEach(function (b) { b.setAttribute('aria-pressed', String(hc)); });
    } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var g = e.target.closest ? e.target.closest('.a11y-group button') : null;
    if (g) {
      var idx = Array.prototype.indexOf.call(g.parentNode.children, g);
      try { localStorage.setItem('pp-text-size', ['normal', 'large', 'larger'][idx] || 'normal'); } catch (err) {}
      applyA11y(); return;
    }
    var c = e.target.closest ? e.target.closest('.a11y-btn[aria-label="High contrast"]') : null;
    if (c) {
      try { localStorage.setItem('pp-contrast', c.getAttribute('aria-pressed') === 'true' ? 'normal' : 'high'); } catch (err) {}
      applyA11y();
    }
  });
  applyA11y();

  window.addEventListener('hashchange', show);

  document.addEventListener('click', function (e) {
    var toggle = e.target.closest ? e.target.closest('[data-menu-toggle]') : null;
    if (!toggle) return;
    var page = toggle.closest('[data-pp-page]');
    var menu = page ? page.querySelector('[data-mobile-menu]') : null;
    if (!menu) return;
    var open = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', open ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
  });

  document.addEventListener('submit', function (e) {
    e.preventDefault();
    var form = e.target;
    var note = form.querySelector('.form-status');
    if (!note) { note = document.createElement('div'); note.className = 'form-status form-status--ok'; form.insertBefore(note, form.firstChild); }
    note.textContent = 'Preview only: on the live site this sends to your inbox (see DEPLOY.md, step 3).';
    note.scrollIntoView({ block: 'center' });
  });

  if (picker) {
    picker.addEventListener('change', function () { location.hash = picker.value; });
  }

  show();
})();
`;

const html = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
<style>
${css}
${previewCss}
</style>
${body}
<div class="pp-toolbar">
  <span>Preview</span>
  <select id="pp-picker" aria-label="Jump to a page">${options}</select>
</div>
<script>${script}</script>
`;

await writeFile(resolve(outDir, "index.html"), html, "utf8");
await copyFile(resolve(root, "public/logo.png"), resolve(outDir, "logo.png"));
await copyFile(resolve(root, "public/logo-white.png"), resolve(outDir, "logo-white.png"));
await rm(tmp, { recursive: true, force: true });

console.log(`preview/index.html written — ${pages.length} pages, ${(html.length / 1024).toFixed(0)} KB`);
