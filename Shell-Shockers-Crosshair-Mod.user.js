// ==UserScript==
// @name         Shell Shockers Crosshair Mod
// @namespace    https://github.com/Virojet/Shell-Shockers-Crosshair-Mod
// @version      1.0.0
// @description  In-game Crosshair Customizer for Shell Shockers: arms, center dot/plus/static cross, outlines, live preview, saved profiles & gallery, undo/redo, and X- / SSB- / Valorant code import & export.
// @author       Virojet
// @license      MIT
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Crosshair-Mod
// @supportURL   https://github.com/Virojet/Shell-Shockers-Crosshair-Mod/issues
// @icon         https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/icon.svg
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/Shell-Shockers-Crosshair-Mod.meta.js
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Crosshair-Mod/main/Shell-Shockers-Crosshair-Mod.user.js
// @match        *://shellshock.io/*
// @match        *://*.shellshock.io/*
// @match        *://algebra.best/*
// @match        *://*.algebra.best/*
// @match        *://algebra.vip/*
// @match        *://*.algebra.vip/*
// @match        *://biologyclass.club/*
// @match        *://*.biologyclass.club/*
// @match        *://deadlyegg.com/*
// @match        *://*.deadlyegg.com/*
// @match        *://deathegg.world/*
// @match        *://*.deathegg.world/*
// @match        *://egg.dance/*
// @match        *://*.egg.dance/*
// @match        *://eggboy.club/*
// @match        *://*.eggboy.club/*
// @match        *://eggboy.xyz/*
// @match        *://*.eggboy.xyz/*
// @match        *://eggcombat.com/*
// @match        *://*.eggcombat.com/*
// @match        *://eggfacts.fun/*
// @match        *://*.eggfacts.fun/*
// @match        *://egghead.institute/*
// @match        *://*.egghead.institute/*
// @match        *://eggisthenewblack.com/*
// @match        *://*.eggisthenewblack.com/*
// @match        *://eggsarecool.com/*
// @match        *://*.eggsarecool.com/*
// @match        *://eggshooter.best/*
// @match        *://*.eggshooter.best/*
// @match        *://geometry.best/*
// @match        *://*.geometry.best/*
// @match        *://geometry.monster/*
// @match        *://*.geometry.monster/*
// @match        *://geometry.pw/*
// @match        *://*.geometry.pw/*
// @match        *://geometry.report/*
// @match        *://*.geometry.report/*
// @match        *://hardboiled.life/*
// @match        *://*.hardboiled.life/*
// @match        *://hardshell.life/*
// @match        *://*.hardshell.life/*
// @match        *://humanorganising.org/*
// @match        *://*.humanorganising.org/*
// @match        *://mathactivity.xyz/*
// @match        *://*.mathactivity.xyz/*
// @match        *://mathActivity.club/*
// @match        *://*.mathActivity.club/*
// @match        *://mathdrills.info/*
// @match        *://*.mathdrills.info/*
// @match        *://mathdrills.life/*
// @match        *://*.mathdrills.life/*
// @match        *://mathfun.rocks/*
// @match        *://*.mathfun.rocks/*
// @match        *://mathgames.world/*
// @match        *://*.mathgames.world/*
// @match        *://math.international/*
// @match        *://*.math.international/*
// @match        *://mathlete.fun/*
// @match        *://*.mathlete.fun/*
// @match        *://mathlete.pro/*
// @match        *://*.mathlete.pro/*
// @match        *://new.shellshock.io/*
// @match        *://overeasy.club/*
// @match        *://*.overeasy.club/*
// @match        *://scrambled.best/*
// @match        *://*.scrambled.best/*
// @match        *://scrambled.tech/*
// @match        *://*.scrambled.tech/*
// @match        *://scrambled.today/*
// @match        *://*.scrambled.today/*
// @match        *://scrambled.us/*
// @match        *://*.scrambled.us/*
// @match        *://scrambled.world/*
// @match        *://*.scrambled.world/*
// @match        *://shellshockers.club/*
// @match        *://*.shellshockers.club/*
// @match        *://shellshockers.site/*
// @match        *://*.shellshockers.site/*
// @match        *://shellshockers.us/*
// @match        *://*.shellshockers.us/*
// @match        *://shellshockers.world/*
// @match        *://*.shellshockers.world/*
// @match        *://shellshockers.xyz/*
// @match        *://*.shellshockers.xyz/*
// @match        *://shellsocks.com/*
// @match        *://*.shellsocks.com/*
// @match        *://softboiled.club/*
// @match        *://*.softboiled.club/*
// @match        *://urbanegger.com/*
// @match        *://*.urbanegger.com/*
// @match        *://violentegg.club/*
// @match        *://*.violentegg.club/*
// @match        *://violentegg.fun/*
// @match        *://*.violentegg.fun/*
// @match        *://yolk.best/*
// @match        *://*.yolk.best/*
// @match        *://yolk.life/*
// @match        *://*.yolk.life/*
// @match        *://yolk.quest/*
// @match        *://*.yolk.quest/*
// @match        *://yolk.rocks/*
// @match        *://*.yolk.rocks/*
// @match        *://yolk.tech/*
// @match        *://*.yolk.tech/*
// @match        *://yolk.today/*
// @match        *://*.yolk.today/*
// @match        *://zygote.cafe/*
// @match        *://*.zygote.cafe/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

/*
 * Shell Shockers Crosshair Mod
 * ----------------------------
 * Better HUD's Crosshair Customizer as its own userscript.
 *
 * Shares the same ch2-* localStorage keys as Shell Shockers Better HUD so your active crosshair,
 * saved profiles, and profile order carry over either way. If Better HUD is running, this script
 * steps aside automatically so the two never conflict.
 */
(function () {
  "use strict";

  const VERSION = "1.0.0";
  const pageWin = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
  if (pageWin.__ssCrosshairModLoaded) return;
  pageWin.__ssCrosshairModLoaded = VERSION;

  const betterHud = () => Boolean(pageWin.SSB_VERSION || pageWin.__ssbSettings || pageWin.__ssbOpenHistory);
  if (betterHud()) return;

  window.SSB_DISCORD = window.SSB_DISCORD || "https://discord.gg/saveearth";
  window.SSB_YOUTUBE = window.SSB_YOUTUBE || "https://www.youtube.com/@subtovirojet?sub_confirmation=1";
  window.__ssbErr = window.__ssbErr || function () {};
  window.__ssbGuiScale = window.__ssbGuiScale || function () { return 1; };
  window.__ssbNativeFrame = window.__ssbNativeFrame || {
    request: window.requestAnimationFrame.bind(window),
    cancel: window.cancelAnimationFrame.bind(window)
  };

  function ef(id) {
    try {
      if (typeof window.BAWK?.play === "function") window.BAWK.play(id);
    } catch (e) {}
  }

  // ---- Shared CSS Tokens & Boolean Sanitizer ----
  ! function() {
if (document.getElementById("ssb-tokens")) return;
var s = document.createElement("style");
s.id = "ssb-tokens";
s.textContent = ":root{" +
"--ssb-ink:#0C576F;--ssb-blue:#0E7697;--ssb-blue-hi:#2db8d4;--ssb-blue-shadow:#1b7385;--ssb-panel:#8ED9E8;" +
"--ssb-orange:#FF981F;--ssb-yolk:#ff9800;--ssb-yolk-hi:#e68a00;--ssb-yolk-shadow:#d35400;" +
"--ssb-red:#d82727;--ssb-red-hi:#ec4343;--ssb-red-shadow:#901414;--ssb-red-shadow-hi:#ab1b1b;" +
"--ssb-muted:#216a80;--ssb-deep:#0d3d4f;--ssb-line:#b0d8e8;" +
"--ssb-card:#b5e8f7;--ssb-card-hi:#cbf2fc;--ssb-card-shadow:#80b8c8;--ssb-card-shadow-hi:#99cddc;" +
"--ssb-accent:#0E7697;--ssb-focus:#a34d00;--ssb-radius:8px;--ssb-gap:12px;}";
(document.head || document.documentElement).appendChild(s);
}();
! function() {
try {
["ch2-enabled", "ch2-hideCrosshair", "ch2-hideDot", "ch2-hideDotShotgun", "ch2-dotRound", "ch2-staticOutlineEnabled", "ch2-armOutlineEnabled", "ch2-dotOutlineEnabled"].forEach(function(k) {
var v = localStorage.getItem(k);
if (v !== null && v !== "true" && v !== "false") localStorage.removeItem(k);
});
} catch (e) {
window.__ssbErr("boot#1", e)
}
}();

  // ---- Menu Poll Scheduler & Dialog / Toast UI ----
  window.__ssbMenuPoll = window.__ssbMenuPoll || (function() {
var jobs = new Map(),
timer = null;
function gate() {
return document.hidden ? 0 : document.pointerLockElement ? 1 : 2;
}
function runnable(job, g) {
return g === 2 || (g === 1 && job.inMatch);
}
function stop() {
if (timer !== null) clearTimeout(timer);
timer = null;
}
function run() {
timer = null;
var now = performance.now(),
g = gate();
jobs.forEach(function(job, fn) {
if (job.due > now + 1 || !runnable(job, g)) return;
job.due = (Math.round(now / job.period) + 1) * job.period;
try {
fn();
} catch (e) {
console.warn("[Better HUD] Scheduled task failed", e);
}
});
schedule();
}
function schedule() {
stop();
var due = Infinity,
g = gate();
jobs.forEach(function(job) {
if (job.due < due && runnable(job, g)) due = job.due;
});
if (due !== Infinity) timer = setTimeout(run, Math.max(0, Math.ceil(due - performance.now())));
}
function reconcile() {
jobs.forEach(function(job) {
job.due = 0;
});
schedule();
}
document.addEventListener("visibilitychange", reconcile);
document.addEventListener("pointerlockchange", reconcile);
document.addEventListener("ssb:settings-change", reconcile);
window.addEventListener("pageshow", reconcile);
window.addEventListener("pagehide", stop);
function register(fn, period, opts) {
if (!jobs.has(fn)) jobs.set(fn, {
period: Math.max(100, period || 1400),
due: 0,
inMatch: !!(opts && opts.inMatch)
});
schedule();
return function() {
jobs.delete(fn);
schedule();
};
}
register.reconcile = reconcile;
return register;
})();
  window.__ssbUI = window.__ssbUI || (function() {
var CSS = `#ssb-dialog-overlay { position:fixed; inset:0; z-index:2147483647; display:flex; align-items:center; justify-content:center; padding:18px; box-sizing:border-box; background:rgba(7,39,52,0.55); backdrop-filter:blur(2px); font-family:"Nunito",system-ui,sans-serif; }
#ssb-dialog-panel { width:min(470px,100%); box-sizing:border-box; padding:16px 22px 20px; border:4px solid var(--ssb-ink); border-radius:10.5px; background:linear-gradient(#1192bc,#3ea2c7 30%,#5bb2d2 55%,#75c3de 78%,#8dd3ea); box-shadow:0 18px 42px rgba(0,0,0,0.36); text-align:center; animation:ssb-pop-in 0.14s ease; }
#ssb-dialog-panel * { box-sizing:border-box; font-size:inherit; letter-spacing:normal; }
#ssb-dialog-panel .ssb-dlg-title { margin:0 0 12px; font-family:"Sigmar One",sans-serif; font-weight:normal; font-size:26px; line-height:1.15; color:#fff; text-transform:uppercase; text-shadow:rgba(11,147,189,0.9) 3px 3px 0; }
#ssb-dialog-panel .ssb-dlg-text { margin:0 0 14px; font-size:16px; font-weight:800; line-height:1.35; color:#fff; text-shadow:rgba(0,0,0,0.3) 1px 1px 0; white-space:pre-line; overflow-wrap:anywhere; }
#ssb-dialog-panel .ssb-dlg-input { display:block; width:100%; height:42px; margin:0; padding:0 12px; border:3px solid var(--ssb-ink); border-radius:8px; background:#fff; color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:17px; font-weight:800; text-align:left; outline:none; }
#ssb-dialog-panel .ssb-dlg-input:focus { border-color:var(--ssb-orange); }
#ssb-dialog-panel .ssb-dlg-input[readonly] { font-family:Consolas,"Courier New",monospace; font-size:15px; font-weight:700; }
#ssb-dialog-panel .ssb-dlg-err:not(:empty) { display:inline-block; margin-top:8px; padding:4px 10px; border-radius:6px; background:#e81616; color:#fff; font-size:14px; font-weight:800; box-shadow:inset 0 -2px 0 rgba(0,0,0,0.18); }
#ssb-dialog-panel .ssb-dlg-foot { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; margin-top:18px; }
#ssb-dialog-panel .ssb-dlg-btn { min-width:120px; height:44px; margin:0; padding:0 20px; border:4px solid var(--b); border-radius:8.4px; background:var(--c); color:#fff; font-family:"Nunito",system-ui,sans-serif; font-size:18px; font-weight:800; cursor:pointer; text-shadow:rgba(0,0,0,0.3) 2px 2px 0; box-shadow:rgba(11,147,189,0.5) 3.4px 3.4px 0 0, var(--i1) -2.1px -3.2px 2.1px 0 inset, var(--i2) 0 3.2px 4.2px 0 inset; transition:filter 0.1s, transform 0.1s; }
#ssb-dialog-panel .ssb-dlg-btn:hover { filter:brightness(1.08); }
#ssb-dialog-panel .ssb-dlg-btn:active { transform:translateY(2px); }
#ssb-dialog-panel .ssb-dlg-btn:focus-visible { outline:3px solid #fff; outline-offset:2px; }
#ssb-dialog-panel .ssb-dlg-btn:disabled { opacity:0.7; cursor:default; filter:none; transform:none; }
#ssb-dialog-panel .ssb-dlg-green { --c:#13ba65; --b:#046306; --i1:#0e8c4c; --i2:#87ddbb; }
#ssb-dialog-panel .ssb-dlg-red { --c:#e81616; --b:#881a1a; --i1:#d11414; --i2:#e29092; }
#ssb-dialog-panel .ssb-dlg-yolk { --c:#f79520; --b:#924e0c; --i1:#d97611; --i2:#f1c59a; }
#ssb-dialog-panel .ssb-dlg-blue { --c:#0b93bd; --b:var(--ssb-ink); --i1:#086e8d; --i2:#00ade6; }
#ssb-dialog-panel.ssb-dlg-wide { width:min(560px,100%); }
#ssb-dialog-panel .ssb-dlg-report { max-height:min(58vh,560px); overflow-y:auto; margin:0 -4px; padding:0 4px; text-align:left; }
#ssb-dialog-panel .ssb-dlg-sub { margin:14px 0 6px; font-size:13px; font-weight:900; letter-spacing:0.6px; text-transform:uppercase; color:#fff; text-shadow:rgba(0,0,0,0.3) 1px 1px 0; }
#ssb-dialog-panel .ssb-dlg-sub:first-child { margin-top:0; }
#ssb-dialog-panel .ssb-dlg-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; }
#ssb-dialog-panel .ssb-dlg-list li { margin:0; padding:9px 12px; border-radius:8px; background:rgba(255,255,255,0.9); color:var(--ssb-ink); }
#ssb-dialog-panel .ssb-dlg-list b { display:block; font-size:15px; font-weight:900; line-height:1.25; }
#ssb-dialog-panel .ssb-dlg-list span { display:block; margin-top:3px; font-size:14px; font-weight:700; line-height:1.35; color:var(--ssb-muted); }
#ssb-dialog-panel .ssb-dlg-facts li { display:flex; align-items:baseline; justify-content:space-between; gap:14px; padding:6px 12px; }
#ssb-dialog-panel .ssb-dlg-facts b { flex:none; font-size:14px; }
#ssb-dialog-panel .ssb-dlg-facts span { margin:0; text-align:right; }
#ssb-toast-stack { position:fixed; top:14px; left:0; right:0; z-index:2147483647; display:flex; flex-direction:column; align-items:center; gap:8px; pointer-events:none; font-family:"Nunito",system-ui,sans-serif; }
#ssb-toast-stack * { font-size:inherit; letter-spacing:normal; }
#ssb-toast-stack .ssb-toast { pointer-events:auto; cursor:pointer; max-width:min(540px,92vw); box-sizing:border-box; padding:10px 16px; border:3px solid var(--ssb-blue); border-radius:10px; background:var(--ssb-panel); color:var(--ssb-ink); font-size:15px; font-weight:800; line-height:1.3; text-align:center; white-space:pre-line; box-shadow:0 8px 22px rgba(0,0,0,0.3); animation:ssb-toast-in 0.16s ease; transition:opacity 0.2s; }
#ssb-toast-stack .ssb-toast-success .ssb-toast-text::before { content:"\\2713"; display:inline-block; width:20px; height:20px; margin-right:8px; border-radius:50%; background:#13ba65; color:#fff; font-size:13px; line-height:20px; text-align:center; vertical-align:1px; }
#ssb-toast-stack .ssb-toast-error { background:#ffe1e1; border-color:var(--ssb-red); color:#8a1414; }
#ssb-toast-stack .ssb-toast-code { margin-top:6px; padding:5px 8px; border-radius:6px; background:rgba(255,255,255,0.75); font-family:Consolas,"Courier New",monospace; font-size:13px; font-weight:700; white-space:normal; overflow-wrap:anywhere; user-select:text; cursor:text; }
#ssb-toast-stack .ssb-toast-out { opacity:0; }
.ssb-new-pill { display:inline-block; margin-left:8px; padding:0; background:none; color:#e8590c; font-family:"Nunito",system-ui,sans-serif; font-size:11px; font-weight:900; font-style:italic; letter-spacing:0.6px; line-height:1; vertical-align:super; pointer-events:none; cursor:default; flex-shrink:0; }
@keyframes ssb-pop-in { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:none; } }
@keyframes ssb-toast-in { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
`;
function ensureCss() {
if (document.getElementById("ssb-ui-style")) return;
var s = document.createElement("style");
s.id = "ssb-ui-style";
s.textContent = CSS;
(document.head || document.documentElement).appendChild(s);
}
function sound(name) {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play(name);
} catch (e) {
window.__ssbErr("ui#1", e)
}
}
function node(tag, cls, text) {
var e = document.createElement(tag);
if (cls) e.className = cls;
if (text != null) e.textContent = text;
return e;
}
var stack = null;
function toast(text, o) {
o = o || {};
if (!document.body) return null;
ensureCss();
if (!stack) {
stack = node("div");
stack.id = "ssb-toast-stack";
stack.setAttribute("role", "status");
stack.setAttribute("aria-live", "polite");
stack.setAttribute("aria-relevant", "additions text");
}
document.body.appendChild(stack);
var t = node("div", "ssb-toast" + (o.type ? " ssb-toast-" + o.type : ""));
t.appendChild(node("div", "ssb-toast-text", text));
if (o.code) t.appendChild(node("div", "ssb-toast-code", o.code));
var gone = false;
function close() {
if (gone) return;
gone = true;
t.classList.add("ssb-toast-out");
setTimeout(function() {
t.remove();
}, 220);
}
t.addEventListener("click", function(e) {
if (!e.target.closest(".ssb-toast-code")) close();
});
stack.appendChild(t);
while (stack.children.length > 4) stack.firstElementChild.remove();
setTimeout(close, o.ms || (o.type === "error" ? 6500 : o.code ? 6000 : 3200));
return t;
}
window.__ssbEatKeyUp = function(key) {
var k = String(key).toLowerCase(),
tm = setTimeout(done, 1500);
function f(e) {
if (String(e.key).toLowerCase() === k) {
e.preventDefault();
e.stopImmediatePropagation();
done();
}
}
function done() {
window.removeEventListener("keyup", f, true);
clearTimeout(tm);
}
window.addEventListener("keyup", f, true);
};
var current = null;
function dialog(o) {
return new Promise(function(resolve) {
if (!document.body || document.pointerLockElement) {
resolve(o.cancel);
return;
}
if (current) current(current.cancelValue);
ensureCss();
var prevFocus = document.activeElement;
var ov = node("div");
ov.id = "ssb-dialog-overlay";
var panel = node("div");
panel.id = "ssb-dialog-panel";
if (o.wide) panel.className = "ssb-dlg-wide";
panel.setAttribute("role", "dialog");
panel.setAttribute("aria-modal", "true");
panel.setAttribute("aria-label", o.title || "Better HUD");
panel.appendChild(node("h2", "ssb-dlg-title", o.title || "Better HUD"));
if (o.text) panel.appendChild(node("p", "ssb-dlg-text", o.text));
if (o.body) panel.appendChild(o.body);
var input = null,
err = null;
if (o.input) {
input = node("input", "ssb-dlg-input");
input.type = "text";
input.setAttribute("aria-label", o.input.label || o.title || "Code");
input.setAttribute("aria-describedby", "ssb-dialog-error");
input.spellcheck = false;
input.autocomplete = "off";
input.value = o.input.value == null ? "" : String(o.input.value);
if (o.input.placeholder) input.placeholder = o.input.placeholder;
if (o.input.readOnly) input.readOnly = true;
if (o.input.maxLength) input.maxLength = o.input.maxLength;
panel.appendChild(input);
err = node("div", "ssb-dlg-err");
err.id = "ssb-dialog-error";
err.setAttribute("role", "alert");
panel.appendChild(err);
input.addEventListener("input", function() {
err.textContent = "";
input.removeAttribute("aria-invalid");
});
}
var foot = node("div", "ssb-dlg-foot"),
primary = null;
(o.buttons || []).forEach(function(b) {
var btn = node("button", "ssb-dlg-btn ssb-dlg-" + (b.kind || "blue"), b.label);
btn.type = "button";
btn.addEventListener("click", function() {
sound("ui_click");
press(b, btn);
});
if (b.primary) primary = btn;
foot.appendChild(btn);
});
panel.appendChild(foot);
ov.appendChild(panel);
var done = false;
function finish(v) {
if (done) return;
done = true;
window.removeEventListener("keydown", onKey, true);
window.removeEventListener("keyup", swallow, true);
window.removeEventListener("keypress", swallow, true);
ov.remove();
if (current === finish) current = null;
try {
if (prevFocus && prevFocus.isConnected && prevFocus.focus) prevFocus.focus({
preventScroll: true
});
} catch (e) {
window.__ssbErr("ui#2", e)
}
resolve(v);
}
finish.cancelValue = o.cancel;
current = finish;
function press(b, btn) {
if (b.run) {
b.run(input, btn, panel);
return;
}
if (b.input) {
var v = input.value,
msg = o.input.validate ? o.input.validate(v) : "";
if (msg) {
err.textContent = msg;
input.setAttribute("aria-invalid", "true");
input.focus();
return;
}
finish(v);
return;
}
finish(b.value);
}
function swallow(e) {
e.stopPropagation();
}
function onKey(e) {
e.stopPropagation();
if (e.key === "Escape") {
e.preventDefault();
window.__ssbEatKeyUp("Escape");
finish(o.cancel);
} else if (e.key === "Enter" && !e.isComposing) {
e.preventDefault();
window.__ssbEatKeyUp("Enter");
var f = document.activeElement;
if (f && f.tagName === "BUTTON" && panel.contains(f)) f.click();
else if (primary) primary.click();
} else if (e.key === "Tab") {
e.preventDefault();
var list = [].slice.call(panel.querySelectorAll(
"input:not(:disabled), button:not(:disabled)")),
i = list.indexOf(document.activeElement);
var next = list[i < 0 ? (e.shiftKey ? list.length - 1 : 0) : (i + (e.shiftKey ? -1 :
1) + list.length) % list.length];
if (next) next.focus();
}
}
window.addEventListener("keydown", onKey, true);
window.addEventListener("keyup", swallow, true);
window.addEventListener("keypress", swallow, true);
var downOnBackdrop = false;
ov.addEventListener("mousedown", function(e) {
downOnBackdrop = e.target === ov;
});
ov.addEventListener("click", function(e) {
if (e.target === ov && downOnBackdrop) finish(o.cancel);
});
document.body.appendChild(ov);
sound("ui_popupopen");
if (input) {
input.focus();
input.select();
} else if (primary) primary.focus();
});
}
function copy(text, field) {
var ok = function() {
toast("Copied to clipboard.", {
type: "success"
});
};
var legacy = function() {
try {
if (field) {
field.focus();
field.select();
}
if (field && document.execCommand("copy")) {
ok();
return;
}
} catch (e) {
window.__ssbErr("ui#3", e)
}
toast("Your browser blocked copying. Select the code and press Ctrl+C.", {
type: "error"
});
};
if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok,
legacy);
else legacy();
}
function copyText(text, note) {
var ok = function() {
toast(note || "Copied to clipboard.", {
type: "success"
});
};
var legacy = function() {
var back = document.activeElement,
ta = node("textarea"),
done = false;
ta.value = text;
ta.readOnly = true;
ta.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
document.body.appendChild(ta);
try {
ta.select();
done = document.execCommand("copy");
} catch (e) {
window.__ssbErr("ui#4", e)
}
ta.remove();
try {
if (back && back.focus) back.focus({
preventScroll: true
});
} catch (e) {
window.__ssbErr("ui#5", e)
}
if (done) ok();
else toast("Your browser blocked copying.", {
type: "error"
});
};
if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok,
legacy);
else legacy();
}
var snapLib = null,
snapFonts = null;
function snapLoad() {
if (window.htmlToImage && typeof window.htmlToImage === "object") return Promise.resolve(window
.htmlToImage);
return snapLib || (snapLib = new Promise(function(resolve, reject) {
var sc = document.createElement("script");
sc.src =
"https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js";
sc.integrity =
"sha512-7tWCgq9tTYS/QkGVyKrtLpqAoMV9XIUxoou+sPUypsaZx56cYR/qio84fPK9EvJJtKvJEwt7vkn6je5UVzGevw==";
sc.crossOrigin = "anonymous";
sc.referrerPolicy = "no-referrer";
sc.onload = function() {
if (window.htmlToImage && typeof window.htmlToImage === "object") resolve(window
.htmlToImage);
else {
snapLib = null;
reject(new Error("html-to-image didn't load"));
}
};
sc.onerror = function() {
snapLib = null;
reject(new Error("html-to-image failed to load"));
};
(document.head || document.documentElement).appendChild(sc);
}));
}
function snapFontCSS() {
return snapFonts || (snapFonts = fetch(
"https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Sigmar+One&display=swap"
).then(function(r) {
if (!r.ok) throw new Error("fonts: HTTP " + r.status);
return r.text();
}).then(function(css) {
var latin = css.split(/(?=\/\* )/).filter(function(b) {
return /^\/\* latin \*\//.test(b);
}).join("");
if (latin) css = latin;
var urls = [],
re = /url\((https:[^)]+)\)/g,
m;
while ((m = re.exec(css)))
if (urls.indexOf(m[1]) < 0) urls.push(m[1]);
return Promise.all(urls.map(function(u) {
return fetch(u).then(function(r) {
if (!r.ok) throw new Error("font: HTTP " + r.status);
return r.blob();
}).then(function(b) {
return new Promise(function(res, rej) {
var fr = new FileReader();
fr.onload = function() {
res([u, fr.result]);
};
fr.onerror = function() {
rej(fr.error);
};
fr.readAsDataURL(b);
});
});
})).then(function(pairs) {
pairs.forEach(function(p) {
css = css.split(p[0]).join(p[1]);
});
return css;
});
}).catch(function(e) {
window.__ssbErr("ui#6", e);
snapFonts = null;
return "";
}));
}
function copyImage(panel, btn, text) {
if (!navigator.clipboard || !navigator.clipboard.write || typeof window.ClipboardItem !== "function") {
copyText(text, "Your browser can't copy pictures, so the report was copied as text.");
return;
}
var label = btn ? btn.textContent : "";
if (btn) {
btn.disabled = true;
btn.textContent = "Copying…";
}
var done = function() {
if (!btn) return;
var lost = !document.activeElement || document.activeElement === document.body;
btn.disabled = false;
btn.textContent = label;
if (lost && btn.isConnected) btn.focus({
preventScroll: true
});
};
var png = Promise.all([snapLoad(), snapFontCSS()]).then(function(r) {
var lib = r[0],
host = node("div"),
c = panel.cloneNode(true),
foot, rep;
host.setAttribute("aria-hidden", "true");
host.style.cssText =
"position:fixed;left:-100000px;top:0;width:560px;font-family:\"Nunito\",system-ui,sans-serif;pointer-events:none;";
c.removeAttribute("role");
c.removeAttribute("aria-modal");
c.style.cssText =
"zoom:1 !important;animation:none !important;box-shadow:none !important;margin:0 !important;";
foot = c.querySelector(".ssb-dlg-foot");
if (foot) foot.remove();
rep = c.querySelector(".ssb-dlg-report");
if (rep) {
rep.style.maxHeight = "none";
rep.style.overflow = "visible";
}
host.appendChild(c);
document.body.appendChild(host);
return lib.toBlob(c, {
pixelRatio: 2,
width: c.offsetWidth,
height: c.offsetHeight,
fontEmbedCSS: r[1] || "",
backgroundColor: null
}).then(function(blob) {
host.remove();
if (!blob) throw new Error("no picture");
return blob;
}, function(e) {
host.remove();
throw e;
});
});
png.catch(function(e) {
window.__ssbErr("ui#8", e);
});
try {
navigator.clipboard.write([new window.ClipboardItem({
"image/png": png
})]).then(function() {
done();
toast("Picture copied to clipboard.", {
type: "success"
});
}, function(e) {
done();
window.__ssbErr("ui#7", e);
copyText(text, "Couldn't copy the picture, so the report was copied as text.");
});
} catch (e) {
done();
window.__ssbErr("ui#7", e);
copyText(text, "Couldn't copy the picture, so the report was copied as text.");
}
}
var api = {
toast: toast,
confirm: function(o) {
o = o || {};
return dialog({
title: o.title,
text: o.text,
cancel: false,
buttons: [{
label: o.cancelLabel || "Cancel",
kind: "blue",
value: false
}, {
label: o.ok || "OK",
kind: o.danger ? "red" : "green",
value: true,
primary: true
}]
});
},
prompt: function(o) {
o = o || {};
return dialog({
title: o.title,
text: o.text,
cancel: null,
input: {
value: o.value,
placeholder: o.placeholder,
validate: o.validate,
maxLength: o.maxLength
},
buttons: [{
label: "Cancel",
kind: "blue",
value: null
}, {
label: o.ok || "OK",
kind: "green",
input: true,
primary: true
}]
});
},
showCode: function(o) {
o = o || {};
return dialog({
title: o.title || "Your Code",
text: o.text,
cancel: undefined,
input: {
value: o.code,
readOnly: true
},
buttons: [{
label: "Copy",
kind: "yolk",
run: function(field) {
copy(field.value, field);
}
}, {
label: "Close",
kind: "blue",
value: undefined,
primary: true
}]
});
},
copyCode: function(code, what) {
var done = function() {
toast(what + " copied to clipboard.", {
type: "success",
code: code
});
};
var fallback = function() {
api.showCode({
title: what,
text: "Your browser blocked the clipboard. Copy the code below.",
code: code
});
};
if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard
.writeText(code).then(done, fallback);
fallback();
return Promise.resolve();
},
report: function(o) {
o = o || {};
var body = node("div", "ssb-dlg-report");
(o.sections || []).forEach(function(sec) {
if (!sec.items || !sec.items.length) return;
if (sec.title) body.appendChild(node("div", "ssb-dlg-sub", sec.title));
var list = node("ul", "ssb-dlg-list" + (sec.facts ? " ssb-dlg-facts" : ""));
sec.items.forEach(function(it) {
var li = node("li");
li.appendChild(node("b", null, it.label));
if (it.text) li.appendChild(node("span", null, it.text));
list.appendChild(li);
});
body.appendChild(list);
});
var buttons = [{
label: "Close",
kind: "blue",
value: undefined,
primary: true
}];
if (o.copy) buttons.unshift({
label: "Copy",
kind: "yolk",
run: o.image ? function(input, btn, panel) {
copyImage(panel, btn, o.copy);
} : function() {
copyText(o.copy);
}
});
return dialog({
title: o.title,
text: o.text,
body: body,
wide: true,
cancel: undefined,
buttons: buttons
});
},
copyText: copyText,
ensureCss: ensureCss
};
return api;
})();

  // ---- Viewport Box, Dot Border v2 Migration & DOM Style Helpers ----
  window.__ssbViewBox = function() { return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }; };
  if (!localStorage.getItem("ch2-dotBorderV2")) {
localStorage
.removeItem("ch2-dotBorder");
localStorage.setItem("ch2-dotBorderV2", "1");
}
  let e = {},
t = new Map;
function o(e) {
let o = t.get(e);
if (o && o.isConnected) return o;
let n = document.getElementById(e);
if (n) t.set(e, n);
else t.delete(e);
return n;
}
let n = new Map;
function i(e) {
let t = n.get(e);
if (t && t.isConnected) return t;
let o = document.querySelector(e);
if (o) n.set(e, o);
else n.delete(e);
return o;
}
function a(e, n, i) {
let a = o(e);
if (!a) {
(a = document.createElement("style")).id = e;
(i || document.head || document.documentElement)
.appendChild(a);
t.set(e, a);
}
if (undefined !== n && a.textContent !== n) a.textContent = n;
return a;
}
function r(e, n, i, r) {
if (i) a(e, n, r);
else {
let s = o(e);
if (s) {
s.remove();
t.delete(e);
}
}
}

  // ---- Crosshair State, History, Profiles & In-Game Reticle Renderer ----
  let A = {
enabled: JSON.parse(localStorage.getItem("ch2-enabled") ?? "true"),
hideCrosshair: JSON.parse(localStorage.getItem("ch2-hideCrosshair") ?? "false"),
armColor: (localStorage.getItem("ch2-armColor") ?? "#ffffff").replace(/^"|"$/g, ""),
armBorder: (localStorage.getItem("ch2-armBorder") ?? "#000000").replace(/^"|"$/g, ""),
armLength: parseFloat(localStorage.getItem("ch2-armLength") ?? "0.75"),
armWidth: parseFloat(localStorage.getItem("ch2-armWidth") ?? "0.3"),
armOpacity: parseFloat(localStorage.getItem("ch2-armOpacity") ?? "1"),
armRotation: parseInt(localStorage.getItem("ch2-armRotation") ?? "0"),
armGap: parseInt(localStorage.getItem("ch2-armGap") ?? "0"),
armScale: parseFloat(localStorage.getItem("ch2-armScale") ?? "1"),
hideDot: JSON.parse(localStorage.getItem("ch2-hideDot") ?? "false"),
hideDotShotgun: JSON.parse(localStorage.getItem("ch2-hideDotShotgun") ?? "false"),
dotShape: (localStorage.getItem("ch2-dotShape") ?? "dot").replace(/^"|"$/g, ""),
dotColor: (localStorage.getItem("ch2-dotColor") ?? "#ffffff").replace(/^"|"$/g, ""),
dotBorder: (localStorage.getItem("ch2-dotBorder") ?? localStorage.getItem("ch2-armBorder") ?? "#000000")
.replace(/^"|"$/g, ""),
dotBorderWidth: parseFloat(localStorage.getItem("ch2-dotBorderWidth") ?? "0.05"),
dotRound: JSON.parse(localStorage.getItem("ch2-dotRound") ?? "false"),
dotOpacity: parseFloat(localStorage.getItem("ch2-dotOpacity") ?? "1"),
dotPlusLen: parseInt(localStorage.getItem("ch2-dotPlusLen") ?? "8"),
dotPlusWidth: parseInt(localStorage.getItem("ch2-dotPlusWidth") ?? "2"),
dotScale: parseFloat(localStorage.getItem("ch2-dotScale") ?? "1"),
plusScale: parseFloat(localStorage.getItem("ch2-plusScale") ?? "1"),
staticColor: (localStorage.getItem("ch2-staticColor") ?? "#ffffff").replace(/^"|"$/g, ""),
staticBorder: (localStorage.getItem("ch2-staticBorder") ?? "#000000").replace(/^"|"$/g, ""),
staticOpacity: parseFloat(localStorage.getItem("ch2-staticOpacity") ?? "1"),
staticLength: parseFloat(localStorage.getItem("ch2-staticLength") ?? "0.75"),
staticWidth: parseFloat(localStorage.getItem("ch2-staticWidth") ?? "0.3"),
staticGap: parseFloat(localStorage.getItem("ch2-staticGap") ?? "3"),
staticOutlineEnabled: JSON.parse(localStorage.getItem("ch2-staticOutlineEnabled") ?? "true"),
armOutlineEnabled: JSON.parse(localStorage.getItem("ch2-armOutlineEnabled") ?? "true"),
dotOutlineEnabled: JSON.parse(localStorage.getItem("ch2-dotOutlineEnabled") ?? "true"),
stillScale: parseFloat(localStorage.getItem("ch2-stillScale") ?? "1")
},
B = {
enabled: false,
hideCrosshair: false,
armColor: "#ffffff",
armBorder: "#000000",
dotBorder: "#000000",
dotBorderWidth: .05,
armLength: .75,
armWidth: .3,
armOpacity: 1,
armRotation: 0,
armGap: 0,
armScale: 1,
hideDot: false,
hideDotShotgun: false,
dotShape: "dot",
dotColor: "#ffffff",
dotRound: false,
dotOpacity: 1,
dotPlusLen: 8,
dotPlusWidth: 2,
dotScale: 1,
plusScale: 1,
staticColor: "#ffffff",
staticBorder: "#000000",
staticOpacity: 1,
staticLength: .75,
staticWidth: .3,
staticGap: 3,
staticOutlineEnabled: true,
armOutlineEnabled: true,
dotOutlineEnabled: true,
stillScale: 1
};
function F(e, t) {
localStorage.setItem("ch2-" + e, typeof t == "string" ? t : JSON.stringify(t));
_chDirty = true;
_chTrack();
}
let _chDirty = false,
_updP = null,
_updT = 0,
_chHalf = 0,
_chIO = null,
_updPend = {};
let _chUndo = [],
_chRedo = [],
_chT = 0,
_chApplying = 0,
_chLastJ = JSON.stringify(A);
function _chTrack() {
if (!_chApplying) {
clearTimeout(_chT);
_chT = setTimeout(_chCommit, 350);
}
}
function _chCommit() {
clearTimeout(_chT);
_chT = 0;
let j = JSON.stringify(A);
if (j !== _chLastJ) {
_chUndo.push(_chLastJ);
if (_chUndo.length > 40) _chUndo.shift();
_chRedo = [];
_chLastJ = j;
if (window.__ssbChPaint) window.__ssbChPaint();
}
}
function _chFlush() {
if (_updT) {
clearTimeout(_updT);
_updT = 0;
let o = _updPend;
_updPend = {};
Object.keys(o).forEach(k => F(k, o[k]));
}
if (_chT) _chCommit();
}
function _chApply(j) {
let snap;
try {
snap = JSON.parse(j)
} catch (e) {
return
}
_chApplying = 1;
try {
let prev = Object.assign({}, A);
Object.assign(A, snap);
Object.keys(A).forEach(k => {
if (prev[k] !== A[k]) F(k, A[k]);
});
} finally {
_chApplying = 0
}
_chLastJ = JSON.stringify(A);
if (window.__ssbChRebuild) window.__ssbChRebuild();
else {
G();
Y();
}
if (window
.__ssbChPaint) window.__ssbChPaint();
}
function _chSaved() {
let n = z(),
p = n && N()[n];
return p ? Object.assign({}, A, _withDot(p), {
enabled: true
}) : null
}
window.__ssbChHist = {
undo() {
_chFlush();
if (!_chUndo.length) return false;
_chRedo.push(JSON.stringify(A));
_chApply(_chUndo.pop());
return true
},
redo() {
_chFlush();
if (!_chRedo.length) return false;
_chUndo.push(JSON.stringify(A));
_chApply(_chRedo.pop());
return true
},
revert() {
_chFlush();
let p = _chSaved();
if (!p || !window.__ssbChHist.dirty()) return false;
_chUndo.push(JSON.stringify(A));
if (_chUndo.length > 40) _chUndo.shift();
_chRedo = [];
_chApply(JSON
.stringify(p));
return true
},
canUndo: () => _chUndo.length > 0 || !!_chT,
canRedo: () => _chRedo.length > 0,
dirty() {
let p = _chSaved();
return !!p && Object.keys(B).some(k => k !== "enabled" && JSON.stringify(p[k]) !== JSON.stringify(A[k]))
}
};
document.addEventListener("keydown", ev => {
if (!(ev.ctrlKey || ev.metaKey) || ev.altKey || document.pointerLockElement) return;
let k = (ev.key || "").toLowerCase();
if (k !== "z" && k !== "y") return;
let sec = document.getElementById("mod-crosshair-section");
if (!sec || !sec.offsetParent || document.getElementById("ssb-dialog-overlay")) return;
let ae = document.activeElement;
if (ae && (/^(TEXTAREA|SELECT)$/.test(ae.tagName) || ae.isContentEditable || ae.tagName === "INPUT" &&
/^(text|number|search)$/i.test(ae.type))) return;
ev.preventDefault();
ev.stopPropagation();
let done = k === "y" || ev.shiftKey ? window.__ssbChHist.redo() : window.__ssbChHist.undo();
if (done) try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_click");
} catch (e) {
window.__ssbErr("crosshair.undo", e)
}
}, true);
function schedUpd(e, t) {
_updPend[e] = t;
if (!_updP) _updP = requestAnimationFrame(() => {
_updP = null;
G();
Y();
});
clearTimeout(_updT);
_updT = setTimeout(() => {
let o = _updPend;
_updPend = {};
Object.keys(o).forEach(e => F(e, o[e]));
}, 150);
}
function _sd(e, t) {
if (e && e.style.display !== t) e.style.display = t;
}
window.__ssbPerf = {
tick: 0,
mods: 0,
harm: 0
};
let T = "ch2-profiles",
H = "ch2-currentProfile";
function N() {
try {
return JSON.parse(localStorage.getItem(T)) || {}
} catch (e) {
return {}
}
}
function M(e) {
localStorage.setItem(T, JSON.stringify(e))
}
function z() {
return localStorage.getItem(H) || ""
}
function O(e) {
localStorage.setItem(H, e || "")
}
function PO(e) {
e = e || N();
let o;
try {
o = JSON.parse(localStorage.getItem("ch2-profileOrder"))
} catch (x) {
o = null
}
if (!Array.isArray(o)) o = [];
let k = Object.keys(e),
r = o.filter((n, i) => k.includes(n) && o.indexOf(n) === i);
k.forEach(n => r.includes(n) || r.push(n));
return r;
}
function PS(r) {
localStorage.setItem("ch2-profileOrder", JSON.stringify(r))
}
function _dbw(o) {
let w = parseFloat(o.dotBorderWidth);
return isFinite(w) ? Math.max(0, w) : .05
}
function _dsz(o) {
return +(Math.max(0, o.armWidth - .1) + 2 * _dbw(o)).toFixed(4)
}
function _dbc(o) {
return o.dotBorder || o.armBorder || "#000000"
}
function _withDot(o) {
return Object.assign({}, B, {
dotBorder: o && o.armBorder || B.dotBorder
}, o)
}
function D(e) {
if (!e) return false;
let t = N();
t[e] = Object.assign({}, A, {
enabled: true
});
M(t);
O(e);
setTimeout(() => window.__ssbChPaint && window.__ssbChPaint());
return true;
}
function R() {
let e = a("ch2-arm-style", undefined);
if (!A.enabled) {
if (e.textContent) e.textContent = "";
return
}
let t = document.getElementById("crosshairContainer");
if (t) t.style.transform = `rotate(${A.armRotation % 90 ? A.armRotation : 0}deg)`;
let o = A.armLength * A.armScale,
n = A.armWidth * A.armScale,
i = Math.min(.05 * A.armScale, .3 * n);
let fs = 40;
if (t) {
let _f = parseFloat(getComputedStyle(t).fontSize);
if (_f > 0) fs = _f;
}
let dpr = window.devicePixelRatio || 1,
us = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ch-scale")) ||
parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ui-scale")) || 1,
px = v => +(v / dpr).toFixed(5) + "px",
sz = v => px(v + .004),
Hd = Math.max(1, Math.round(o * fs * dpr)),
Wd = Math.max(1, Math.round(n * fs * dpr)),
Bd = i * fs > .25 ? Math.max(1, Math.round(i * fs * dpr)) :
0;
if (Bd && 2 * Bd > Math.min(Wd, Hd) && (A.armOutlineEnabled === false || String(A.armBorder)
.toLowerCase() ===
String(A.armColor).toLowerCase())) Bd = 0;
_chHalf = Wd % 2 / 2;
let g = A.armGap * us * dpr,
gap = `${A.armGap}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1)) + ${px(Math.round(g - _chHalf) + _chHalf - g)}`;
e.innerHTML = `
			.crosshair {
				position: absolute !important;
				transform-origin: 50% calc(-1 * (${gap})) !important;
				top: calc(50% + ${gap} + var(--ssb-ch-dy, 0px)) !important;
				box-sizing: border-box !important;
				border: solid ${Bd ? sz(Bd) : "0px"} ${A.armOutlineEnabled === false ? "transparent" : A.armBorder} !important;
				height: ${sz(Hd)} !important;
				opacity: ${A.armOpacity} !important;
			}
			.crosshair.normal {
				left: calc(50% - ${px(Wd / 2)} + var(--ssb-ch-dx, 0px)) !important;
				background: ${A.armColor} !important;
				background-clip: ${A.armOutlineEnabled === false ? "padding-box" : "border-box"} !important;
				width: ${sz(Wd)} !important;
			}
			.crosshair.powerful {
				left: calc(50% - ${px(Wd / 2)} + var(--ssb-ch-dx, 0px)) !important;
				background: red !important;
				background-clip: ${A.armOutlineEnabled === false ? "padding-box" : "border-box"} !important;
				width: ${sz(Wd)} !important;
			}
			.shotReticle.fill.normal {
				border-color: ${A.armColor} !important;
				border-left: solid transparent !important;
				border-right: solid transparent !important;
				border-width: 0.18em !important;
				padding: 0.18em !important;
			}
		`;
_chAlign(t)
}
function _chAlign(t) {
if (!t) return;
if (window.IntersectionObserver && (!_chIO || _chIO.t !== t)) {
if (_chIO) _chIO.disconnect();
_chIO = new IntersectionObserver(es => es.forEach(en => en.isIntersecting && _chAt(en.target, en
.boundingClientRect)));
_chIO.t = t;
_chIO.observe(t);
}
if (t.getClientRects().length) _chAt(t, t.getBoundingClientRect());
}
function _chAt(t, r) {
let dpr = window.devicePixelRatio || 1,
on = A.enabled && !(A.armRotation % 90),
d = v => {
v = Math.round(v * dpr * 64) / 64;
return on ? +((Math.round(v - _chHalf) + _chHalf - v) / dpr).toFixed(5) + "px" : "0px"
};
t.style.setProperty("--ssb-ch-dx", d(r.left + r.width / 2));
t.style.setProperty("--ssb-ch-dy", d(r.top + r.height / 2));
}
function q() {
let e = a("ch2-dot-style", undefined),
t = o("reticleDot");
if (!A.enabled) {
a("ch2-dot-style", "");
if (t) {
t.innerHTML = "";
t.removeAttribute("style");
}
return
}
if (!document.pointerLockElement) {
a("ch2-dot-style", "");
if (t) {
t.innerHTML = "";
t.removeAttribute("style");
}
return
}
if (A.hideDot || A.dotShape === "still") {
a("ch2-dot-style",
"#reticleDot { display: none !important; visibility: hidden !important; } #reticleDot .ch2-bar { display: none !important; }"
);
if (t) t.innerHTML = "";
return
}
if (A.dotShape === "plus") {
a("ch2-dot-style", `
				#reticleDot {
					display: block !important; visibility: visible !important;
					position: absolute !important; top: 50% !important; left: 50% !important;
					transform: translate(-50%, -50%) scale(${A.plusScale}) !important;
					width: 0 !important; height: 0 !important;
					background: none !important; border: none !important;
					opacity: ${A.dotOpacity} !important;
				}
				#reticleDot .ch2-bar {
					position: absolute !important; background-color: ${A.dotColor} !important;
				}
				#reticleDot .ch2-bar.h {
					top: 50% !important; left: 50% !important;
					width: calc(${A.dotPlusWidth}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important; height: calc(${A.dotPlusLen}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important;
					transform: translate(-50%, -50%) rotate(90deg) !important;
				}
				#reticleDot .ch2-bar.v {
					left: 50% !important; top: 50% !important;
					width: calc(${A.dotPlusWidth}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important; height: calc(${A.dotPlusLen}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important;
					transform: translate(-50%, -50%) !important;
				}
			`);
if (t && !t.querySelector(".ch2-bar")) t.innerHTML =
'<div class="ch2-bar h"></div><div class="ch2-bar v"></div>';
} else {
a("ch2-dot-style", `
				#reticleDot {
					display: block !important; visibility: visible !important;
					position: absolute !important;
					top: 50% !important; left: 50% !important;
					transform: translate(-50%, -50%) scale(${A.dotScale}) !important;
					background-color: ${A.dotColor} !important;
					box-sizing: border-box !important;
					border: solid ${_dbw(A)}em ${A.dotOutlineEnabled === false ? "transparent" : _dbc(A)} !important;
					background-clip: ${A.dotOutlineEnabled === false ? "padding-box" : "border-box"} !important;
					width: ${_dsz(A)}em !important; height: ${_dsz(A)}em !important;
					opacity: ${A.dotOpacity} !important;
					border-radius: ${A.dotRound ? "100%" : "0"} !important;
				}
			`);
if (t) t.innerHTML = "";
}
}
function j() {
let e = a("ch2-static-style", undefined),
t = document.getElementById("ch2-static-cont");
if (!A.enabled || A.dotShape !== "still" || A.hideDot) {
a("ch2-static-style", "");
if (t) t.remove();
return
}
if (!t) {
(t = document.createElement("div")).id = "ch2-static-cont";
t.innerHTML =
'<div class="ch2-sa"></div><div class="ch2-sa"></div><div class="ch2-sa"></div><div class="ch2-sa"></div>';
document.body.appendChild(t);
}
t.style.display = document.pointerLockElement ? "" : "none";
let o = document.getElementById("crosshairContainer"),
fs = o && parseFloat(getComputedStyle(o).fontSize) || 40,
dpr = window.devicePixelRatio || 1,
k = A.stillScale || 1,
us = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ch-scale")) ||
parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ui-scale")) || 1,
Wd = Math.max(1, Math.round(A.staticWidth * fs * k * dpr)),
Hd = Math.max(0, Math.round(A.staticLength * fs * k * dpr)),
Gd = Math.max(0, Math.round(A.staticGap * us * k * dpr)),
Bf = A.staticOutlineEnabled ? .05 * fs * k * dpr : 0,
Bd = Bf > .5 ? Math.max(1, Math.round(Bf)) : 0;
if (Bd * 2 >= Wd) Bd = Math.max(0, Math.floor((Wd - 1) / 2));
let vb = window.__ssbViewBox(),
x0 = Math.round(vb.width * dpr / 2 - Wd / 2),
y0 = Math.round(vb.height * dpr / 2 - Wd / 2),
cx = x0 + Wd / 2,
cy = y0 + Wd / 2,
px = v => +(v / dpr).toFixed(4) + "px",
box = (l, tp, w, h) =>
`left:${px(l)} !important; top:${px(tp)} !important; width:${px(w)} !important; height:${px(h)} !important;`,
arms = [box(x0, Math.floor(cy + Gd), Wd, Hd), box(Math.ceil(cx - Gd) - Hd, y0, Hd, Wd), box(x0, Math.ceil(
cy - Gd) - Hd, Wd, Hd), box(Math.floor(cx + Gd), y0, Hd, Wd)];
t.querySelectorAll(".ch2-sa").forEach(e => e.style.removeProperty("transform"));
a("ch2-static-style", `
			#ch2-static-cont {
				position: fixed !important; top: 0 !important; left: 0 !important;
				width: 0 !important; height: 0 !important; pointer-events: none !important;
				z-index: 99999 !important; transform: none !important;
			}
			#ch2-static-cont .ch2-sa {
				position: absolute !important; margin: 0 !important; transform: none !important;
				background: ${A.staticColor} !important;
				border: ${Bd ? `solid ${px(Bd)} ${A.staticBorder}` : "none"} !important;
				opacity: ${A.staticOpacity} !important; box-sizing: border-box !important;
			}
			${arms.map((st, idx) => `#ch2-static-cont .ch2-sa:nth-child(${idx + 1}) { ${st} }`).join("\n\t\t\t")}
		`);
}
function W() {
a("ch2-hide-style", A.hideCrosshair ? "#crosshairContainer{display:none!important}" : "")
}
function G() {
R();
q();
j();
W();
}! function _dprWatch() {
try {
let m = matchMedia("(resolution: " + (window.devicePixelRatio || 1) + "dppx)");
m.addEventListener("change", () => {
if (A.enabled) {
R();
j();
}
_dprWatch();
}, {
once: true
})
} catch (e) {
window.__ssbErr("crosshair.dpr", e)
}
}();
window.addEventListener("resize", () => {
clearTimeout(window._ssbRszT);
window._ssbRszT = setTimeout(() => {
if (A.enabled) G();
}, 150);
});
let K = null,
U = null,
_lastReticleDot = null;
function Y() {
if (!window._ssbYP) {
window._ssbYP = 1;
requestAnimationFrame(() => {
window._ssbYP = 0;
_Yimpl();
});
}
}
function _Yimpl() {
let e = document.getElementById("ch2-preview-wrap");
if (!e) return;
let t = localStorage.getItem("ch2-previewBg") || "#ffffff",
o = A.enabled ? A : {
hideCrosshair: false,
armColor: "#ffffff",
armBorder: "#000000",
armLength: .75,
armWidth: .3,
armOpacity: 1,
armRotation: 0,
armScale: 1,
hideDot: false,
hideDotShotgun: false,
dotShape: "dot",
dotColor: "#ffffff",
dotRound: false,
dotOpacity: 1,
dotPlusLen: 8,
dotPlusWidth: 2,
dotScale: 1,
plusScale: 1,
staticColor: "#ffffff",
staticBorder: "#000000",
staticOpacity: 1,
staticLength: .75,
staticWidth: .3,
staticGap: 3,
staticOutlineEnabled: true,
armOutlineEnabled: true,
dotOutlineEnabled: true,
stillScale: 1
},
n = o.armLength * o.armScale,
i = o.armWidth * o.armScale,
a = Math.min(.05 * o.armScale, .3 * i).toFixed(4),
r =
`position:absolute;transform-origin:50% ${-(o.armGap || 0)}px;top:${o.armGap || 0}px;left:calc(-${(i / 2).toFixed(4)}em);width:${i}em;height:${n}em;background:${o.armColor};background-clip:${o.armOutlineEnabled === false ? "padding-box" : "border-box"};border:solid ${a}em ${o.armOutlineEnabled === false ? "transparent" : o.armBorder};opacity:${o.armOpacity};box-sizing:border-box;`,
s = "";
if (!o.hideDot) {
if (o.dotShape === "still") {
let l = o.staticOutlineEnabled ? `solid 0.05em ${o.staticBorder}` : "none",
d =
`position:absolute;transform-origin:50% -${o.staticGap}px;top:${o.staticGap}px;left:calc(-${o.staticWidth / 2}em);width:${o.staticWidth}em;height:${o.staticLength}em;background:${o.staticColor};border:${l};opacity:${o.staticOpacity};box-sizing:border-box;`;
s = `<div style="position:absolute;top:0;left:0;width:0;height:0;transform:scale(${o.stillScale});"><div style="${d}transform:rotate(0deg);"></div><div style="${d}transform:rotate(90deg);"></div><div style="${d}transform:rotate(180deg);"></div><div style="${d}transform:rotate(270deg);"></div></div>`
} else s = o.dotShape === "plus" ?
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.plusScale});font-size: 24px;opacity:${o.dotOpacity};width:0;height:0;background:none;border:none;"><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%) rotate(90deg);"></div><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%);"></div></div>` :
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.dotScale});font-size: 24px;opacity:${o.dotOpacity};box-sizing:border-box;width:${_dsz(o)}em;height:${_dsz(o)}em;background:${o.dotColor};border:solid ${_dbw(o)}em ${o.dotOutlineEnabled === false ? "transparent" : _dbc(o)};background-clip:${o.dotOutlineEnabled === false ? "padding-box" : "border-box"};border-radius:${o.dotRound ? "100%" : "0"};"></div>`
}
let c = o.hideCrosshair ? "" : `
				<div style="${r}transform:rotate(0deg);"></div>
				<div style="${r}transform:rotate(90deg);"></div>
				<div style="${r}transform:rotate(180deg);"></div>
				<div style="${r}transform:rotate(270deg);"></div>
		`;
e.style.background = t;
document.querySelectorAll("#mod-crosshair-section .ch2-bg-swatch").forEach(b => b
.classList.toggle("on", b.dataset.hex === String(t).toLowerCase()));
e.style.position = "relative";
e
.innerHTML = `<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;overflow:hidden;">
			<div style="position:relative;width:0;height:0;font-size: 24px;zoom:calc(1 / var(--ssb-gui, 1));transform:rotate(${o.armRotation}deg);">
				${c}
				${s}
			</div>
		</div>`;
}
function V() {
R();
W();
j();
(function e() {
let t = document.getElementById("reticleDot");
if (t && (t !== _lastReticleDot)) {
_lastReticleDot = t;
if (A.enabled) q();
}
}());
if (!window._ssbVLockHook) {
window._ssbVLockHook = 1;
document.addEventListener("pointerlockchange",
() => {
if (document.pointerLockElement) j();
if (A.enabled) q();
let e = document.getElementById("ch2-static-cont");
if (e) e.style.display = document.pointerLockElement ? "" : "none";
});
}
}
window.__ssbMenuPoll(function _ssbSpectateCheck() {
if (document.hidden) return;
if (!document.pointerLockElement) {
if (U !== false && K) {
K.textContent = "";
U = false;
}
window._specCount = 0;
return
}
if (!K) K = a("ch2-spec-hide");
let confirmed, vs = function() {
try {
let a = window.vueApp?.$data || window.vueData || window.vueApp,
r = a?.ui?.game;
if (r && typeof r.spectate == "boolean") return r.spectate
} catch (s) {
window.__ssbErr("spectate.vue", s)
}
return null
}();
if (vs !== null) {
window._specCount = 0;
confirmed = vs;
} else {
let t = false;
try {
for (let o of document.querySelectorAll("div.h4.margins_sm")) {
if (!/spectat/i.test(o.textContent || "") || o.checkVisibility && !o.checkVisibility())
continue;
let n = o.getBoundingClientRect();
if (n.width > 0 && n.height > 0) {
t = true;
break
}
}
} catch (i) {
window.__ssbErr("spectate.dom", i)
}
window._specCount = t ? (window._specCount || 0) + 1 : 0;
confirmed = window._specCount >= 2;
}
if (confirmed !== U) {
U = confirmed;
K.textContent = confirmed ?
"#reticleDot, #reticleDot .ch2-bar, #ch2-static-cont { display: none !important; visibility: hidden !important; }" :
"";
}
}, 2e3, {
inMatch: true
});
(function _ssbShotgunDot() {
let on = false,
lbl = null,
obs = null;
const apply = function() {
try {
let w = lbl && lbl.isConnected ? lbl : document.getElementById("weaponName"),
want = !!(A.enabled && A.hideDotShotgun && w && /^\s*Dozen Gauge\s*$/i.test(w
.textContent || ""));
if (want !== on) {
on = want;
a("ch2-sg-hide", want ?
"#reticleDot, #reticleDot .ch2-bar, #ch2-static-cont { display: none !important; visibility: hidden !important; }" :
"");
}
} catch (e) {
window.__ssbErr("shotgundot#1", e)
}
};
window.__ssbShotgunDot = apply;
window.__ssbMenuPoll(function() {
try {
let w = document.getElementById("weaponName");
if (w && w !== lbl) {
if (obs) obs.disconnect();
lbl = w;
obs = new MutationObserver(apply);
obs.observe(w, {
childList: true,
characterData: true,
subtree: true
});
}
apply();
} catch (e) {
window.__ssbErr("shotgundot#2", e)
}
}, 2e3, {
inMatch: true
});
})
();

  // ---- Share Code Bit-Packers & Unpackers (X-, SSB-, Base64, Valorant) ----
  function _ssbPackNum(val, scale = 100, offset = 0) {
return Math.round((val + offset) * scale).toString(36);
}
function _ssbUnpackNum(valStr, scale = 100, offset = 0) {
let parsed = parseInt(valStr, 36);
return isNaN(parsed) ? 0 : (parsed / scale) - offset;
}
function _ssbPackColor(hex) {
if (!hex) return "0";
return parseInt(hex.replace("#", ""), 16).toString(36);
}
function _ssbUnpackColor(valStr) {
if (!valStr || valStr === "0") return "#ffffff";
let parsed = parseInt(valStr, 36);
return "#" + (isNaN(parsed) ? "ffffff" : parsed.toString(16).padStart(6, "0"));
}
function packCrosshair(p) {
let parts = [];
if (p.hideCrosshair) parts.push("Hc1");
if (p.armColor && p.armColor.toLowerCase() !== "#ffffff") parts.push("Ac" +
_ssbPackColor(p.armColor));
if (p.armBorder && p.armBorder.toLowerCase() !== "#000000") parts.push("Ab" +
_ssbPackColor(p.armBorder));
if (p.armLength !== 0.75) parts.push("Al" + _ssbPackNum(p.armLength));
if (p.armWidth !== 0.3) parts.push("Aw" + _ssbPackNum(p.armWidth));
if (p.armOpacity !== 1) parts.push("Ao" + _ssbPackNum(p.armOpacity));
if (p.armRotation !== 0) parts.push("Ar" + _ssbPackNum(p.armRotation, 1));
if (p.armGap !== 0) parts.push("Ag" + _ssbPackNum(p.armGap, 1, 100));
if (p.armScale !== 1) parts.push("As" + _ssbPackNum(p.armScale));
if (p.armOutlineEnabled === false) parts.push("Ae0");
if (p.hideDot) parts.push("Hd1");
if (p.dotShape && p.dotShape !== "dot") parts.push("Ds" + (p.dotShape === "plus" ?
"p" : "s"));
if (p.dotColor && p.dotColor.toLowerCase() !== "#ffffff") parts.push("Dc" +
_ssbPackColor(p.dotColor));
if (p.dotRound) parts.push("Dr1");
if (_dbc(p).toLowerCase() !== (p.armBorder || "#000000").toLowerCase()) parts.push(
"Db" + _ssbPackColor(_dbc(p)));
if (_dbw(p) !== .05) parts.push("Dw" + _ssbPackNum(_dbw(p)));
if (p.dotOutlineEnabled === false) parts.push("De0");
if (p.dotOpacity !== 1) parts.push("Do" + _ssbPackNum(p.dotOpacity));
if (p.dotPlusLen !== 8) parts.push("Pl" + _ssbPackNum(p.dotPlusLen, 1));
if (p.dotPlusWidth !== 2) parts.push("Pw" + _ssbPackNum(p.dotPlusWidth, 1));
if (p.dotScale !== 1) parts.push("Dz" + _ssbPackNum(p.dotScale));
if (p.plusScale !== 1) parts.push("Ps" + _ssbPackNum(p.plusScale));
if (p.staticColor && p.staticColor.toLowerCase() !== "#ffffff") parts.push("Sc" +
_ssbPackColor(p.staticColor));
if (p.staticBorder && p.staticBorder.toLowerCase() !== "#000000") parts.push("Sb" +
_ssbPackColor(p.staticBorder));
if (p.staticOpacity !== 1) parts.push("So" + _ssbPackNum(p.staticOpacity));
if (p.staticLength !== 0.75) parts.push("Sl" + _ssbPackNum(p.staticLength));
if (p.staticWidth !== 0.3) parts.push("Sw" + _ssbPackNum(p.staticWidth));
if (p.staticGap !== 3) parts.push("Sg" + _ssbPackNum(p.staticGap));
if (!p.staticOutlineEnabled) parts.push("Se0");
if (p.stillScale !== 1) parts.push("Ss" + _ssbPackNum(p.stillScale));
return "X-" + parts.join("");
}
function _ssbIsValorantCode(v) {
return /^\s*0\s*;/.test(String(v));
}
function _ssbValorantCrosshair(code, defaults, height) {
const bad = () => new Error("Invalid code format");
const tok = String(code).trim().replace(/;+$/, "").split(";").map(x => x.trim());
if (tok[0] !== "0") throw bad();
const secs = {
"0": {}
};
let cur = "0";
for (let i = 1; i < tok.length;) {
if (/^[A-Z]$/.test(tok[i])) {
cur = tok[i];
secs[cur] = secs[cur] || {};
i++;
continue
}
if (i + 1 >= tok.length) throw bad();
secs[cur][tok[i]] = tok[i + 1];
i += 2;
}
const P = secs.P;
if (!P) throw bad();
const num = (k, def) => {
if (!(k in P)) return def;
const v = parseFloat(P[k]);
if (!isFinite(v)) throw bad();
return v
};
const R2 = v => Math.round(v * 100) / 100,
CL = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const em = px => px / 21.06,
k = (height > 0 ? height : 1080) / 1080;
const fsH = .0195 * (height > 0 ? height : 1080),
Bt = Math.max(1, Math.round(.05 *
fsH));
const PRESET = ["#ffffff", "#00ff00", "#7fff00", "#dfff00", "#ffff00", "#00ffff",
"#ff00ff", "#ff0000"
];
const ci = Math.round(num("c", 0));
let col = PRESET[ci] || "#ffffff";
if (ci === 8 && /^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(P.u || "")) col = "#" + P.u
.slice(0, 6).toLowerCase();
const outline = num("h", 1) !== 0 && num("t", 1) > 0 && num("o", .5) >= .2;
const ob = outline ? 1.053 : 0;
const iT = num("0t", 2),
iA = num("0a", .8),
iO = num("0o", 3);
let iL = num("0l", 6);
if (iL <= 0 && "0v" in P) iL = Math.max(0, num("0v", 0));
const inner = num("0b", 1) !== 0 && iT > 0 && iL > 0 && iA > .02;
const oT = num("1t", 2),
oA = num("1a", .35),
oO = num("1o", 10);
let oL = num("1l", 2);
if (oL <= 0 && "1v" in P) oL = Math.max(0, num("1v", 0));
const outer = num("1b", 1) !== 0 && oT > 0 && oL > 0 && oA > .02;
const dZ = num("z", 2),
dA = num("a", 1);
const dot = num("d", 0) !== 0 && dZ > 0 && dA > .02;
const p = Object.assign({}, defaults),
notes = [];
p.armColor = p.dotColor = p.staticColor = col;
p.armBorder = p.dotBorder = outline ? "#000000" : col;
p.staticBorder = "#000000";
p.staticOutlineEnabled = outline;
p.hideCrosshair = !inner;
if (inner) {
p.armLength = R2(CL(em(iL + 2 * ob), 0, 3));
p.armWidth = R2(CL(em(iT + 2 * ob), .05, 2));
p.armOpacity = R2(CL(iA, 0, 1));
p.armGap = Math.round(CL((iO - ob) * k, -3, 60));
}
if (dot) {
const F = dZ / 21.06;
p.hideDot = false;
p.dotShape = "dot";
p.dotRound = false;
p.dotOpacity = R2(CL(dA, 0, 1));
p.dotScale = 1;
p.dotBorderWidth = outline ? .05 : 0;
if (!inner) p.armWidth = R2(.1 + F);
else {
const u = Math.max(0, p.armWidth - .1),
need = u > 0 ? F / u : 99;
if (outline ? need <= 1.15 : need <= 4) {
p.dotScale = R2(CL(need, outline ? .23 : .1, 5));
if (outline) p.dotBorderWidth = Math.min(.2, Math.ceil(Math.max(1, Math
.round(Bt / p.dotScale)) / fsH * 100) / 100);
} else {
const wide = R2(.1 + F),
s = R2(CL(em(iT + 2 * ob) / wide, .1, 5));
p.armLength = R2(CL(em(iL + 2 * ob) / s, 0, 3));
p.armWidth = wide;
p.armScale = s;
}
}
} else if (outer) {
p.hideDot = false;
p.dotShape = "still";
p.stillScale = 1;
p.staticOpacity = R2(CL(oA, 0, 1));
p.staticLength = R2(CL(em(oL + 2 * ob), 0, 3));
p.staticWidth = R2(CL(em(oT + 2 * ob), .05, 2));
p.staticGap = Math.round(CL((oO - ob) * k, 0, 60));
} else p.hideDot = true;
if (dot && outer) notes.push(
"The outer lines were left out, since the center dot takes their place.");
if (!inner && !dot && !outer) notes.push("This code shows no lines and no dot.");
Object.defineProperty(p, "__notes", {
value: notes
});
return p;
}
function unpackCrosshair(code) {
if (!code) throw new Error("Invalid code format");
if (_ssbIsValorantCode(code)) return _ssbValorantCrosshair(code, B, window
.innerHeight);
if (code.startsWith("X-")) {
let body = code.substring(2);
let p = Object.assign({}, B),
sawDb = false;
let regex = /([A-Z][a-z])([0-9a-z]*)/g;
let match;
while ((match = regex.exec(body)) !== null) {
let key = match[1];
let valStr = match[2];
switch (key) {
case "Hc":
p.hideCrosshair = valStr === "1";
break;
case "Ac":
p.armColor = _ssbUnpackColor(valStr);
break;
case "Ab":
p.armBorder = _ssbUnpackColor(valStr);
break;
case "Al":
p.armLength = _ssbUnpackNum(valStr);
break;
case "Aw":
p.armWidth = _ssbUnpackNum(valStr);
break;
case "Ao":
p.armOpacity = _ssbUnpackNum(valStr);
break;
case "Ar":
p.armRotation = _ssbUnpackNum(valStr, 1);
break;
case "Ag":
p.armGap = _ssbUnpackNum(valStr, 1, 100);
break;
case "As":
p.armScale = _ssbUnpackNum(valStr);
break;
case "Hd":
p.hideDot = valStr === "1";
break;
case "Ds":
p.dotShape = valStr === "p" ? "plus" : valStr === "s" ? "still" :
"dot";
break;
case "Dc":
p.dotColor = _ssbUnpackColor(valStr);
break;
case "Dr":
p.dotRound = valStr === "1";
break;
case "Db":
p.dotBorder = _ssbUnpackColor(valStr);
sawDb = true;
break;
case "Dw":
p.dotBorderWidth = _ssbUnpackNum(valStr);
break;
case "Do":
p.dotOpacity = _ssbUnpackNum(valStr);
break;
case "Pl":
p.dotPlusLen = _ssbUnpackNum(valStr, 1);
break;
case "Pw":
p.dotPlusWidth = _ssbUnpackNum(valStr, 1);
break;
case "Dz":
p.dotScale = _ssbUnpackNum(valStr);
break;
case "Ps":
p.plusScale = _ssbUnpackNum(valStr);
break;
case "Sc":
p.staticColor = _ssbUnpackColor(valStr);
break;
case "Sb":
p.staticBorder = _ssbUnpackColor(valStr);
break;
case "So":
p.staticOpacity = _ssbUnpackNum(valStr);
break;
case "Sl":
p.staticLength = _ssbUnpackNum(valStr);
break;
case "Sw":
p.staticWidth = _ssbUnpackNum(valStr);
break;
case "Sg":
p.staticGap = _ssbUnpackNum(valStr);
break;
case "Se":
p.staticOutlineEnabled = valStr !== "0";
break;
case "Ae":
p.armOutlineEnabled = valStr !== "0";
break;
case "De":
p.dotOutlineEnabled = valStr !== "0";
break;
case "Ss":
p.stillScale = _ssbUnpackNum(valStr);
break;
}
}
if (!sawDb) p.dotBorder = p.armBorder;
return p;
}
if (!code.startsWith("SSB-")) {
try {
let parsed = JSON.parse(atob(code.trim()));
if (parsed && typeof parsed === "object") {
return _withDot(parsed);
}
} catch (err) {
window.__ssbErr("crosshair#1", err)
}
throw new Error("Invalid code format");
}
let body = code.substring(4);
if (!body.includes(".")) {
try {
let parsed = JSON.parse(atob(body));
if (parsed && typeof parsed === "object") {
return _withDot(parsed);
}
} catch (err) {
window.__ssbErr("crosshair#2", err)
}
}
let p = Object.assign({}, B);
let parts = body.split(".");
parts.forEach(part => {
if (!part) return;
let key, valStr;
if (part.startsWith("ss")) {
key = "ss";
valStr = part.substring(2);
} else {
key = part.substring(0, 1);
valStr = part.substring(1);
}
switch (key) {
case "a":
p.hideCrosshair = valStr === "1";
break;
case "c":
p.armColor = "#" + valStr;
break;
case "b":
p.armBorder = "#" + valStr;
break;
case "l":
p.armLength = parseFloat(valStr);
break;
case "w":
p.armWidth = parseFloat(valStr);
break;
case "o":
p.armOpacity = parseFloat(valStr);
break;
case "r":
p.armRotation = parseInt(valStr, 10);
break;
case "g":
p.armGap = parseInt(valStr, 10);
break;
case "s":
p.armScale = parseFloat(valStr);
break;
case "h":
p.hideDot = valStr === "1";
break;
case "d":
p.dotShape = valStr === "p" ? "plus" : valStr === "s" ?
"still" : "dot";
break;
case "x":
p.dotColor = "#" + valStr;
break;
case "n":
p.dotRound = valStr === "1";
break;
case "p":
p.dotOpacity = parseFloat(valStr);
break;
case "k":
p.dotPlusLen = parseInt(valStr, 10);
break;
case "j":
p.dotPlusWidth = parseInt(valStr, 10);
break;
case "z":
p.dotScale = parseFloat(valStr);
break;
case "f":
p.plusScale = parseFloat(valStr);
break;
case "q":
p.staticColor = "#" + valStr;
break;
case "v":
p.staticOpacity = parseFloat(valStr);
break;
case "e":
p.staticLength = parseFloat(valStr);
break;
case "t":
p.staticWidth = parseFloat(valStr);
break;
case "i":
p.staticGap = parseFloat(valStr);
break;
case "m":
p.staticOutlineEnabled = valStr !== "0";
break;
case "ss":
p.stillScale = parseFloat(valStr);
break;
}
});
p.dotBorder = p.armBorder;
return p;
}

  // ---- Tooltip & Mini Crosshair Renderer ----
  let initTooltip = () => {
let tooltipEl = document.createElement("div");
tooltipEl.id = "ssb-global-tooltip";
tooltipEl.style.cssText =
"position:fixed;display:none;z-index:2147483647;background:#ffffff;color:#0C576F;padding:8px 12px;border-radius:8px;border:2px solid #2db8d4;font-family:'Nunito',system-ui,sans-serif;font-size:13px;font-weight:700;max-width:250px;box-shadow:0 4px 15px rgba(0,0,0,0.25);pointer-events:none;line-height:1.3;opacity:0;transition:opacity 0.12s cubic-bezier(0.4,0,0.2,1);";
document.body.appendChild(
tooltipEl
);
let tipFor = null,
tipMove = e => {
let t = tipFor;
if (t) {
if (!(t.contains(e.target) || t.isConnected && t.matches(":focus-visible") && t.getClientRects()
.length)) hide();
}
};
let show = target => {
let text = target.getAttribute("data-tooltip");
if (!text) return;
tipFor = target;
document.addEventListener("mousemove", tipMove, true);
if (document.body.lastElementChild !== tooltipEl) document.body.appendChild(tooltipEl);
tooltipEl.textContent = text;
tooltipEl.style.display = "block";
let rect = target.getBoundingClientRect();
let tooltipRect = tooltipEl
.getBoundingClientRect();
let vb = window.__ssbViewBox();
let left = rect.left + (rect.width - tooltipRect.width) / 2;
let top = rect.top - tooltipRect.height - 8;
if (left < vb.left + 10) left = vb.left + 10;
if (left + tooltipRect.width > vb.left + vb.width - 10) left = vb.left + vb.width - tooltipRect
.width - 10;
if (top < vb.top + 10) top = rect.bottom + 8;
top = Math.max(vb.top + 10, Math.min(top, vb.top + vb.height - tooltipRect.height -
10
));
let tz = parseFloat(getComputedStyle(tooltipEl).zoom) || 1;
tooltipEl.style.left = (left - vb.left) / tz + "px";
tooltipEl.style.top = (top - vb.top) / tz + "px";
tooltipEl.style.opacity = "1"
},
hide = () => {
tipFor = null;
document.removeEventListener("mousemove", tipMove, true);
if (tooltipEl.style.opacity === "0") return;
tooltipEl.style.opacity = "0";
let onTransitionEnd = () => {
if (tooltipEl.style.opacity === "0") tooltipEl.style.display = "none";
tooltipEl
.removeEventListener("transitionend", onTransitionEnd);
};
tooltipEl.addEventListener("transitionend", onTransitionEnd)
};
document.body.addEventListener("mouseover", e => {
let target = e.target.closest("[data-tooltip]");
if (target) show(target);
});
document.body.addEventListener("mouseout", e => {
if (e.target.closest("[data-tooltip]")) hide();
});
document.addEventListener("mousedown", hide, true);
window.addEventListener("keydown", e => {
if (e.key === "Escape") hide();
}, true);
document.addEventListener("focusin", e => {
let t = e.target;
if (t && t.matches && t.matches("[data-tooltip]:focus-visible")) show(t);
});
document.addEventListener("focusout", e => {
let t = e.target;
if (t && t.matches && t.matches("[data-tooltip]")) hide();
})
};
if (document.body) initTooltip();
else document.addEventListener("DOMContentLoaded", initTooltip);
function xhMini(o, budget) {
o = _withDot(o);
let n = o.armLength * o.armScale,
i = o.armWidth * o.armScale,
aw = Math.min(.05 * o.armScale, .3 * i).toFixed(4);
let r =
`position:absolute;transform-origin:50% ${-(o.armGap || 0)}px;top:${o.armGap || 0}px;left:calc(-${(i / 2).toFixed(4)}em);width:${i}em;height:${n}em;background:${o.armColor};background-clip:${o.armOutlineEnabled === false ? "padding-box" : "border-box"};border:solid ${aw}em ${o.armOutlineEnabled === false ? "transparent" : o.armBorder};opacity:${o.armOpacity};box-sizing:border-box;z-index:1;`;
let s = "";
if (!o.hideDot) {
if (o.dotShape === "still") {
let l = o.staticOutlineEnabled ? `solid 0.05em ${o.staticBorder}` : "none";
let d =
`position:absolute;transform-origin:50% -${o.staticGap}px;top:${o.staticGap}px;left:calc(-${o.staticWidth / 2}em);width:${o.staticWidth}em;height:${o.staticLength}em;background:${o.staticColor};border:${l};opacity:${o.staticOpacity};box-sizing:border-box;`;
s =
`<div style="position:absolute;top:0;left:0;width:0;height:0;transform:scale(${o.stillScale});z-index:2;"><div style="${d}transform:rotate(0deg);"></div><div style="${d}transform:rotate(90deg);"></div><div style="${d}transform:rotate(180deg);"></div><div style="${d}transform:rotate(270deg);"></div></div>`;
} else {
s = o.dotShape === "plus" ?
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.plusScale});font-size: 24px;opacity:${o.dotOpacity};width:0;height:0;background:none;border:none;z-index:2;"><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%) rotate(90deg);"></div><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%);"></div></div>` :
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.dotScale});font-size: 24px;opacity:${o.dotOpacity};box-sizing:border-box;width:${_dsz(o)}em;height:${_dsz(o)}em;background:${o.dotColor};border:solid ${_dbw(o)}em ${o.dotOutlineEnabled === false ? "transparent" : _dbc(o)};background-clip:${o.dotOutlineEnabled === false ? "padding-box" : "border-box"};border-radius:${o.dotRound ? "100%" : "0"};z-index:2;"></div>`;
}
}
let c = o.hideCrosshair ? "" :
`<div style="${r}transform:rotate(0deg);"></div><div style="${r}transform:rotate(90deg);"></div><div style="${r}transform:rotate(180deg);"></div><div style="${r}transform:rotate(270deg);"></div>`;
let extPx = 10;
if (!o.hideCrosshair) extPx = Math.max(extPx, 2 * (n * 24 + (o.armGap || 0)));
if (!o.hideDot) {
if (o.dotShape === "still") extPx = Math.max(extPx, 2 * ((o.staticGap + o.staticLength * 24) * o
.stillScale));
else if (o.dotShape === "plus") extPx = Math.max(extPx, 2 * o.dotPlusLen * o.plusScale);
else extPx = Math.max(extPx, o.armWidth * 24 * o.dotScale);
}
let fit = Math.min(0.85, budget / extPx);
return `<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;overflow:hidden;"><div style="position:relative;width:0;height:0;font-size: 24px;transform:rotate(${o.armRotation}deg) scale(${fit.toFixed(3)});">${c}${s}</div></div>`;
}

  // ---- Settings Tab & Crosshair Section Injection ----
  let eW = () => {
    if (betterHud()) return standDown();
    if (!active || document.hidden || document.pointerLockElement) return;
    try {
      let U = window.__ssbUI;
      let t = document.getElementById("settings_misc");
      if (!t || document.getElementById("mod-crosshair-section")) return;
      if (window.__ssbUI) window.__ssbUI.ensureCss();
      if (!document.getElementById("mod-settings-style")) {
let n = document.createElement("style");
n.id = "mod-settings-style";
n.textContent =
`#mod-settings-section { font-family: "Nunito", system-ui, sans-serif !important; }
#mod-settings-section .mod-header { font-family:"Sigmar One", sans-serif !important; font-weight:normal; font-size: 24px; text-transform:uppercase; color:var(--ssb-ink); margin: 0 0 12px 0; }
#mod-settings-section .mod-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap: 10px 40px; margin-bottom: 20px; }
#mod-settings-section .mod-item { display:flex; flex-direction:row; align-items:center; gap:20px; cursor:pointer; -webkit-user-select:none; user-select:none; margin-bottom:0; }
#mod-settings-section .mod-item input[type="checkbox"] { position:absolute; opacity:0; width:0; height:0; pointer-events:none; }
#mod-settings-section .mod-box { width: 36px; height: 36px; border-radius: 9px; background:#ffffff !important; opacity: 1 !important; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
#mod-settings-section .mod-box::after { content:''; display:none; width: 9px; height: 18px; border: 5px solid var(--ssb-blue); border-top:none; border-left:none; transform: rotate(45deg); margin-top: -4px; }
#mod-settings-section .mod-item input:checked ~ .mod-box::after { display:block; }
#mod-settings-section .mod-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight:700; color:var(--ssb-blue); line-height:1.2; }
#mod-settings-section .mod-slider-container { grid-column:1 / -1; display:flex; flex-direction:row; align-items:center; gap:24px; margin:15px 0 30px 0; }
#mod-settings-section .mod-slider-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight:700; color:var(--ssb-blue); min-width:200px; text-align:left; }
#mod-settings-section .mod-slider { -webkit-appearance:none; flex:1; height:10px; border-radius:5px; background:#ffffff !important; border: 1px solid rgba(12,87,111,0.15); outline:none; cursor:pointer; }
#mod-settings-section .mod-slider::-webkit-slider-thumb { -webkit-appearance:none; width:28px; height:28px; border-radius:50%; background:var(--ssb-yolk) !important; border:4px solid #ffffff !important; box-shadow:0 1px 4px rgba(0,0,0,0.35); cursor:pointer; }
#mod-settings-section .mod-slider::-moz-range-thumb { width:28px; height:28px; border-radius:50%; background:var(--ssb-yolk) !important; border:4px solid #ffffff !important; box-shadow:0 1px 4px rgba(0,0,0,0.35); cursor:pointer; }
#mod-settings-section .mod-num-input { width:100px; padding:8px 12px; border:none !important; border-radius:10px; background:#ffffff !important; color:var(--ssb-ink) !important; font-family:"Nunito", system-ui, sans-serif !important; font-size: 18px; font-weight: 700; text-align:center; outline:none; transition:border-color 0.15s,background 0.15s; -moz-appearance:textfield; }
#mod-settings-section .mod-num-input::-webkit-outer-spin-button, #mod-settings-section .mod-num-input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }
#mod-settings-section .mod-num-input:focus { border:none !important; }
.mod-tab-active .settings-content { display:none !important; }
.mod-tab-active #settings_keyboard, .mod-tab-active #settings_controller, .mod-tab-active #settings_misc { display:none !important; }

/* Crosshair tab */
#mod-crosshair-section { font-family: "Nunito", system-ui, sans-serif !important; }
#mod-crosshair-section .ch2-top { display: flex; gap: 30px; align-items: flex-start; }
#mod-crosshair-section .ch2-preview-col { flex: 1; min-width: 0; position: sticky; top: 0; z-index: 10; }
#mod-crosshair-section .ch2-preview-wrap { width: 100%; aspect-ratio: 1; border-radius: 16px; border: 2px solid rgba(12,87,111,0.35); overflow: hidden; background: #ffffff; margin-bottom: 16px; position: relative; }
#mod-crosshair-section .ch2-right-col { flex: 1; min-width: 0; }
#mod-crosshair-section .ch2-control-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 12px; }
#mod-crosshair-section .ch2-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 16px; font-weight: 700; color: var(--ssb-blue); white-space: nowrap; }
#mod-crosshair-section .ch2-control-right { display: flex; align-items: center; gap: 14px; }
#mod-crosshair-section .ch2-color { width: 54px; height: 44px; border:none !important; border-radius: 10px; padding: 0; cursor: pointer; flex-shrink: 0; background: none; }
#mod-crosshair-section .ch2-color::-webkit-color-swatch-wrapper { padding: 0; }
#mod-crosshair-section .ch2-color::-webkit-color-swatch { border: none; border-radius: 10px; }
#mod-crosshair-section .ch2-hex { width: 80px; padding: 4px 8px; border:none !important; border-radius: 10px; background: #ffffff !important; color: var(--ssb-ink) !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px; font-weight: 700; text-align: center; outline: none; }
#mod-crosshair-section .ch2-hex:focus { border:none !important; }
#mod-crosshair-section .ch2-slider-wrap { margin-bottom: 20px; }
#mod-crosshair-section .ch2-slider-lrow { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
#mod-crosshair-section .ch2-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 5px; background: #ffffff !important; border: 1px solid rgba(12,87,111,0.15); outline: none; cursor: pointer; }
#mod-crosshair-section .ch2-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 21px !important; height: 21px !important; border-radius: 50%; background: var(--ssb-yolk) !important; border: 4.5px solid #ffffff !important; box-shadow: 0 1px 4px rgba(0,0,0,0.3); cursor: pointer; }
#mod-crosshair-section .ch2-slider::-moz-range-thumb { width: 21px !important; height: 21px !important; border-radius: 50%; background: var(--ssb-yolk) !important; border: 4.5px solid #ffffff !important; box-shadow: 0 1px 4px rgba(0,0,0,0.3); cursor: pointer; }
#mod-crosshair-section .ch2-num { width: 60px; padding: 4px 8px; border:none !important; border-radius: 10px; background: #ffffff !important; color: var(--ssb-ink) !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px; font-weight: 700; text-align: center; outline: none; -moz-appearance: textfield; }
#mod-crosshair-section .ch2-num::-webkit-outer-spin-button, #mod-crosshair-section .ch2-num::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
#mod-crosshair-section .ch2-num:focus { border:none !important; }
#mod-crosshair-section .ch2-check-label { display: flex; align-items: center; gap: 20px; cursor: pointer; user-select: none; margin-bottom: 10px; }
#mod-crosshair-section .ch2-check-label input[type=checkbox] { position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none; }
#mod-crosshair-section .ch2-check-box { width: 36px; height: 36px; border-radius: 9px; background: #ffffff !important; opacity: 1 !important; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
#mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box::after { content: ''; display: block; width: 9px; height: 18px; border: 5px solid var(--ssb-blue); border-top: none; border-left: none; transform: rotate(45deg); margin-top: -4px; }
#mod-crosshair-section .ch2-check-text { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight: 700; color: var(--ssb-blue); line-height: 1.2; }
#mod-crosshair-section .ch2-shape-row { display: flex; gap: 16px; margin-bottom: 24px; }
#mod-crosshair-section .ch2-shape-btn { flex: 1 !important; border: none !important; border-radius: 12px !important; background: var(--ssb-card) !important; color: var(--ssb-ink) !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 16px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; cursor: pointer !important; transition: all 0.1s ease !important; box-shadow: 0 4px 0 var(--ssb-card-shadow) !important; box-sizing: border-box !important; height: 50px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(255,255,255,0.4) !important; }
#mod-crosshair-section .ch2-shape-btn:hover { background: var(--ssb-card-hi) !important; box-shadow: 0 4px 0 var(--ssb-card-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-shape-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-card-shadow-hi) !important; }
#mod-crosshair-section .ch2-shape-btn.active { background: var(--ssb-blue) !important; color: #ffffff !important; box-shadow: 0 4px 0 var(--ssb-ink) !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
#mod-crosshair-section .ch2-shape-btn.active:hover { background: var(--ssb-blue-hi) !important; box-shadow: 0 4px 0 var(--ssb-blue-shadow) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-shape-btn.active:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-blue-shadow) !important; }
#mod-settings-section .ch2-reset-btn, #mod-crosshair-section .ch2-reset-btn { width: 100% !important; padding: 12px 24px !important; background: var(--ssb-red) !important; color: #ffffff !important; border: none !important; cursor: pointer !important; font-weight: 900 !important; font-size: 14px !important; border-radius: 12px !important; margin-top: 10px !important; font-family: "Nunito", system-ui, sans-serif !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; transition: all 0.1s ease !important; box-shadow: 0 4px 0 var(--ssb-red-shadow) !important; box-sizing: border-box !important; height: 40px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
#mod-settings-section .ch2-reset-btn:hover, #mod-crosshair-section .ch2-reset-btn:hover { background: var(--ssb-red-hi) !important; box-shadow: 0 4px 0 var(--ssb-red-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-settings-section .ch2-reset-btn:active, #mod-crosshair-section .ch2-reset-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-red-shadow-hi) !important; }
#mod-crosshair-section .ch2-profile-select { background: transparent !important; border: none !important; color: var(--ssb-ink) !important; font-size: 13px !important; font-weight: 700 !important; font-family: "Nunito", system-ui, sans-serif !important; cursor: pointer !important; padding: 2px 4px !important; outline: none !important; width: 100% !important; min-width: 0 !important; text-overflow: ellipsis !important; white-space: nowrap !important; overflow: hidden !important; }
#mod-crosshair-section .ch2-icon-bar { display: flex !important; align-items: center !important; gap: 5px !important; background: rgba(255,255,255,0.18) !important; border-radius: 10px !important; padding: 5px 10px !important; margin-bottom: 8px !important; box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important; border: 1.5px solid rgba(14,118,151,0.2) !important; flex-wrap: nowrap !important; width: 100% !important; box-sizing: border-box !important; overflow: visible !important; }
#mod-crosshair-section .ch2-icon-divider { width: 1.5px !important; height: 22px !important; background: rgba(14,118,151,0.3) !important; margin: 0 3px !important; flex-shrink: 0 !important; border-radius: 1px !important; }
#mod-crosshair-section .ch2-icon-select-wrap { display: flex !important; align-items: center !important; flex: 1 !important; min-width: 60px !important; overflow: hidden !important; }
#mod-crosshair-section .ch2-icon-btn { width: 30px !important; height: 30px !important; border: none !important; background: var(--ssb-blue) !important; border-radius: 8px !important; cursor: pointer !important; color: #ffffff !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: all 0.1s ease !important; flex-shrink: 0 !important; padding: 0 !important; box-shadow: 0 2.5px 0 var(--ssb-ink) !important; overflow: visible !important; }
#mod-crosshair-section .ch2-icon-btn svg { display: block !important; pointer-events: none !important; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25)) !important; }
#mod-crosshair-section .ch2-icon-btn:hover { background: var(--ssb-blue-hi) !important; box-shadow: 0 2.5px 0 var(--ssb-blue-shadow) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-icon-btn:active { transform: translateY(2px) !important; box-shadow: 0 0.5px 0 var(--ssb-blue-shadow) !important; }
#mod-crosshair-section .ch2-icon-btn.danger { background: var(--ssb-red) !important; box-shadow: 0 2.5px 0 var(--ssb-red-shadow) !important; }
#mod-crosshair-section .ch2-icon-btn.danger:hover { background: var(--ssb-red-hi) !important; box-shadow: 0 2.5px 0 var(--ssb-red-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-icon-btn.danger:active { transform: translateY(2px) !important; box-shadow: 0 0.5px 0 var(--ssb-red-shadow-hi) !important; }
/* Frosted-Glass Card Modules */
#mod-crosshair-section .ch2-group-card {
background: rgba(255, 255, 255, 0.28) !important;
border: 1.5px solid rgba(14, 118, 151, 0.15) !important;
border-radius: 14px !important;
padding: 20px !important;
margin-bottom: 16px !important;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06) !important;
box-sizing: border-box !important;
}
#mod-crosshair-section .ch2-group-card .ch2-card-title {
font-family: "Sigmar One", sans-serif !important;
font-size: 16px !important;
color: var(--ssb-ink) !important;
text-transform: uppercase !important;
margin-top: 0 !important;
margin-bottom: 14px !important;
letter-spacing: 0.5px !important;
display: flex !important;
justify-content: space-between !important;
align-items: center !important;
}
#mod-crosshair-section .ch2-collapse-body {
overflow: hidden !important;
transition: max-height 0.35s ease, opacity 0.25s ease !important;
opacity: 1 !important;
}
#mod-crosshair-section .ch2-collapse-body.collapsed {
max-height: 0 !important;
opacity: 0 !important;
pointer-events: none !important;
}

#mod-settings-section .ch2-profile-btn, #mod-crosshair-section .ch2-profile-btn { flex: 1 !important; padding: 0 10px !important; border: none !important; border-radius: 10px !important; background: var(--ssb-blue) !important; color: #ffffff !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; cursor: pointer !important; transition: all 0.1s ease !important; box-shadow: 0 3px 0 var(--ssb-ink) !important; box-sizing: border-box !important; height: 40px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
#mod-settings-section .ch2-profile-btn:hover, #mod-crosshair-section .ch2-profile-btn:hover { background: var(--ssb-blue-hi) !important; box-shadow: 0 4px 0 var(--ssb-blue-shadow) !important; transform: translateY(-1px) !important; }
#mod-settings-section .ch2-profile-btn:active, #mod-crosshair-section .ch2-profile-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-blue-shadow) !important; }
#mod-settings-section .ch2-profile-btn.danger, #mod-crosshair-section .ch2-profile-btn.danger { background: var(--ssb-red) !important; box-shadow: 0 4px 0 var(--ssb-red-shadow) !important; }
#mod-settings-section .ch2-profile-btn.danger:hover, #mod-crosshair-section .ch2-profile-btn.danger:hover { background: var(--ssb-red-hi) !important; box-shadow: 0 4px 0 var(--ssb-red-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-settings-section .ch2-profile-btn.danger:active, #mod-crosshair-section .ch2-profile-btn.danger:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-red-shadow-hi) !important; }
#mod-settings-section input[type="file"], #mod-crosshair-section input[type="file"] { display: none !important; }
/* MODS / CROSSHAIR labels: sized like the native tab text (follows the UI scale), and capped by the tab strip's width
(cqw = 1% of the strip, which holds five tabs) so CROSSHAIR always fits its tab at any resolution or zoom.
The game gives .ss_bigtab a min-width of 8em (em follows screen height), so five tabs overflowed the dialog on
wider-than-tall screens; all five tabs share the strip equally and may shrink below it. */
.mod-tab-strip { container-type: inline-size; }
.mod-tab-strip > * { flex: 1 1 0 !important; min-width: 0 !important; }
.mod-tab-label { font-size: min(calc(16px * var(--ssb-ui-scale, 1)), 2.2cqw) !important; line-height: 1; white-space: nowrap; letter-spacing: 0.02em; }
.mod-tab-label { opacity: 0.4; transition: opacity 0.15s; }
#mod-settings-tab:hover .mod-tab-label, #mod-crosshair-tab:hover .mod-tab-label { opacity: 0.75; }
#mod-settings-tab.mod-tab-is-active .mod-tab-label, #mod-crosshair-tab.mod-tab-is-active .mod-tab-label { opacity: 1; }
.mod-native-dim { opacity: 0.45 !important; transition: opacity 0.15s; }

#popupInnards.mod-tab-active {
--pm-glass: rgba(255,255,255,0.24); --pm-glass-hi: rgba(255,255,255,0.42); --pm-edge: rgba(255,255,255,0.5);
--pm-sub: rgba(12,87,111,0.72); --pm-lift: 0 10px 26px rgba(8,62,84,0.16);
--pm-orange: linear-gradient(180deg,#ffb23f 0%,#ff961d 100%); --pm-orange-edge: #cf700c;
--pm-line: rgba(12,87,111,0.1); --pm-field: rgba(255,255,255,0.72);
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top)) { scrollbar-width:auto !important; scrollbar-color:auto !important; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar { width:6px; height:6px; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-track { background:transparent; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-thumb { border-radius:999px; background:rgba(12,87,111,0.28); }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-thumb:hover { background:rgba(12,87,111,0.5); }
@supports not selector(::-webkit-scrollbar) {
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top)) { scrollbar-width:thin !important; scrollbar-color:rgba(12,87,111,0.35) transparent !important; }
}

/* Scrolling lists fade out at an edge only while there's more to scroll that way (scroll-driven where supported;
elsewhere they don't fade). The Crosshair settings get the same rule further down. */
@property --pm-fade-t { syntax:"<length>"; inherits:false; initial-value:0px; }
@property --pm-fade-b { syntax:"<length>"; inherits:false; initial-value:0px; }
@keyframes pm-fade { 0% { --pm-fade-t:0px; --pm-fade-b:22px; } 6%, 94% { --pm-fade-t:22px; --pm-fade-b:22px; } 100% { --pm-fade-t:22px; --pm-fade-b:0px; } }
@supports (animation-timeline: scroll()) {
#popupInnards > #mod-settings-footer { display:none !important; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer {
grid-column:1 / -1; grid-row:2; zoom:var(--ssb-ui-scale, 1);
display:flex !important; flex-wrap:nowrap; align-items:center; justify-content:flex-start !important; gap:12px !important;
margin:0 !important; padding:9px 14px !important; min-width:0;
border:1px solid rgba(255,255,255,0.6) !important; border-radius:16px;
background:linear-gradient(180deg, rgba(232,249,254,0.72), rgba(210,241,251,0.82));
box-shadow:inset 0 1px 0 rgba(255,255,255,0.85), 0 8px 22px rgba(8,62,84,0.12);
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-version {
display:inline-flex; align-items:center; gap:8px; min-width:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;
font-size:14px !important; font-weight:900; color:var(--ssb-ink); text-decoration:none;
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-version::before {
content:""; flex:none; width:18px; height:18px; border-radius:50%;
background:radial-gradient(circle at 50% 50%, #ffb000 0 36%, #ff9800 37% 40%, #fff 42% 100%);
box-shadow:0 0 0 1.5px rgba(12,87,111,0.22), 0 1px 3px rgba(8,62,84,0.25);
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-version:hover { color:var(--ssb-blue); text-decoration:underline; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-mid { margin-left:auto; flex-wrap:nowrap; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-btn { height:30px; border-width:2px; border-radius:9px; background:rgba(255,255,255,0.7); font-size:13px !important; box-shadow:0 1px 0 rgba(255,255,255,0.8) inset, 0 2px 5px rgba(8,62,84,0.1); }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-btn:hover { background:#fff; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer #ssb-update-status, :is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer #ssb-update-status .ssb-upd-go { font-size:13px !important; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer > a { flex:none; font-size:13px !important; font-weight:900; white-space:nowrap; }
/* ---- CROSSHAIR tab: preview + profiles in a frosted panel, settings laid out like a MODS page ---- */
#popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"])) { display:grid !important; grid-template-columns:minmax(0, 1fr); grid-template-rows:minmax(0, 1fr) auto; gap:12px; }
/* Like the MODS list, the tab reaches 14px past the footer on the right, where the settings' scrollbar sits. */
#popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"])) > #mod-crosshair-section { grid-column:1; grid-row:1; min-height:0; height:100%; max-height:none !important; margin-right:-14px; overflow:visible !important; padding:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-top { display:flex !important; flex-direction:row !important; align-items:stretch !important; gap:18px !important; height:100% !important; min-height:0; }
#popupInnards > #mod-crosshair-section.pm-enter .ch2-preview-col, #popupInnards > #mod-crosshair-section.pm-enter .ch2-right-col { animation:pm-in 0.22s ease-out both; }
#popupInnards > #mod-crosshair-section.pm-enter .ch2-right-col { animation-delay:0.04s; }

/* Left: one frosted panel like the MODS sidebar. It doesn't scroll: the preview takes the height that's left. */
#popupInnards > #mod-crosshair-section .ch2-preview-col {
flex:0 0 38% !important; min-width:0; position:static !important; display:flex !important; flex-direction:column;
overflow-x:hidden !important; overflow-y:auto !important; scrollbar-width:none !important; box-sizing:border-box; padding:14px !important;
border:1px solid var(--pm-edge); border-radius:18px; background:linear-gradient(180deg, rgba(255,255,255,0.32), rgba(255,255,255,0.14));
box-shadow:inset 0 1px 0 rgba(255,255,255,0.65), var(--pm-lift);
}
#popupInnards > #mod-crosshair-section .ch2-preview-col::-webkit-scrollbar { display:none; }
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-group-card { margin:0 !important; padding:0 !important; border:0 !important; border-radius:0 !important; background:none !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-card-preview { flex:1 1 auto; min-height:0; display:flex; flex-direction:column; }
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-card-profiles { flex:none; margin-top:14px !important; padding-top:14px !important; border-top:1px solid var(--pm-line) !important; }
/* Group labels: small caps that name the groups without competing with the settings */
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-card-title {
display:block !important; flex:none; min-height:0; margin:0 0 8px !important; padding:0 !important; border:0 !important;
font-family:"Nunito",system-ui,sans-serif !important; font-size:12px !important; font-weight:900 !important; letter-spacing:1px !important; line-height:1.2 !important;
text-transform:uppercase !important; color:var(--ssb-ink) !important;
}
#popupInnards > #mod-crosshair-section .ch2-preview-wrap {
flex:1 1 auto; min-height:110px; height:auto !important; max-height:280px; aspect-ratio:auto !important; margin:0 !important; box-sizing:border-box;
border:1px solid rgba(12,87,111,0.16) !important; border-radius:14px !important; box-shadow:inset 0 0 0 1px rgba(255,255,255,0.45), 0 6px 16px rgba(8,62,84,0.12);
}
/* Background: the presets and the custom color share one white field (one setting, one place) */
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-control-row { flex:none; flex-wrap:wrap; container-type:inline-size; margin:10px 0 0 !important; padding:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-control-right { margin-left:auto; }
/* too narrow for one line: the field goes under the label at full width, so both edges line up with the preview */
@container (max-width:316px) {
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-control-right { flex:1 1 100%; margin-left:0; }
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-hex { flex:1 1 auto; min-width:0; padding-left:8px !important; text-align:left !important; }
}
#popupInnards > #mod-crosshair-section .ch2-bg-swatches { flex:none; gap:5px; margin:0 4px 0 2px; padding-right:8px; border-right:1px solid rgba(12,87,111,0.14); }
#popupInnards > #mod-crosshair-section .ch2-bg-swatch { width:18px !important; height:18px !important; border:2px solid #fff !important; box-shadow:0 0 0 1px rgba(12,87,111,0.32) !important; }
#popupInnards > #mod-crosshair-section .ch2-bg-swatch.on { box-shadow:0 0 0 2px #ff981f !important; }

/* Profiles: label with a Gallery button beside it (a secondary button, like the footer's), quick picker, toolbar */
#popupInnards > #mod-crosshair-section .ch2-card-profiles { display:grid !important; grid-template-columns:minmax(0, 1fr) auto; grid-template-areas:"title gal" "mini mini" "bar bar"; align-items:center; }
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-card-title { grid-area:title; margin:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-mini-row { grid-area:mini; }
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-icon-bar { grid-area:bar; }
/* Profile tools: the toolbar and Undo / Redo / Revert share one white panel, split by an inset hairline. The second
row uses the toolbar's own button look (transparent, blue glyph, tinted on hover), so both rows line up. */
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-prof-tools { grid-area:bar; min-width:0; margin:10px 0 0; border:1px solid rgba(255,255,255,0.78); border-radius:14px; background:linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.52) 100%); box-shadow:inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(14,118,151,0.14), 0 1px 2px rgba(8,62,84,0.12), 0 8px 18px rgba(8,62,84,0.16); }
#popupInnards > #mod-crosshair-section .ch2-prof-tools > .ch2-icon-bar { margin:0 !important; border-radius:13px 13px 0 0 !important; background:transparent !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-row { position:relative; display:flex; align-items:center; gap:2px; height:40px; padding:0 4px; box-sizing:border-box; container-type:inline-size; }
#popupInnards > #mod-crosshair-section .ch2-hist-row::before { content:""; position:absolute; top:0; left:10px; right:10px; height:1px; background:linear-gradient(90deg, rgba(14,118,151,0), rgba(14,118,151,0.24) 16%, rgba(14,118,151,0.24) 84%, rgba(14,118,151,0)); box-shadow:0 1px 0 rgba(255,255,255,0.75); }
#popupInnards > #mod-crosshair-section .ch2-hist-btn { position:relative; flex:1 1 0 !important; min-width:0 !important; width:auto !important; height:30px !important; margin:0 !important; padding:0 6px !important; box-sizing:border-box !important;
display:inline-flex !important; align-items:center !important; justify-content:center !important; gap:6px !important; border:0 !important; border-radius:9px !important; background:transparent !important; box-shadow:none !important;
color:var(--ssb-blue) !important; font-family:"Nunito", system-ui, sans-serif !important; font-size:13px !important; font-weight:800 !important; letter-spacing:0.1px !important; line-height:1 !important; text-transform:none !important; text-shadow:none !important;
white-space:nowrap !important; cursor:pointer !important; transform:none !important; transition:background-color 0.12s, color 0.12s; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn > svg { flex:none; display:block; pointer-events:none; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn > span { min-width:0; overflow:hidden; text-overflow:ellipsis; font-size:inherit !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn + .ch2-hist-btn::before { content:""; position:absolute; left:-1.5px; top:8px; bottom:8px; width:1px; background:rgba(14,118,151,0.18); transition:opacity 0.12s; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled) { background:rgba(14,118,151,0.12) !important; color:var(--ssb-ink) !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:active:not(:disabled) { background:rgba(14,118,151,0.2) !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled)::before, #popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled) + .ch2-hist-btn::before { opacity:0; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:disabled { color:rgba(14,118,151,0.36) !important; cursor:default !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:focus-visible { outline:2px solid var(--ssb-focus) !important; outline-offset:-2px !important; }
/* too narrow for the words: icons only (the tooltips still name them) */
@container (max-width:220px) { #popupInnards > #mod-crosshair-section .ch2-hist-btn > span { display:none; } }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn {
grid-area:gal; flex-direction:row !important; justify-content:center !important; width:auto !important; height:30px !important; margin:0 !important; padding:0 5px 0 9px !important; gap:6px !important;
border:0 !important; border-radius:9px !important; background:var(--ssb-yolk) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 0 var(--ssb-yolk-shadow), 0 4px 8px rgba(211,84,0,0.25) !important; color:#fff !important; transform:none !important;
font-size:13px !important; font-weight:900 !important; letter-spacing:0.1px !important; text-transform:none !important; text-shadow:0 1px 2px rgba(0,0,0,0.3) !important; transition:background-color 0.12s, box-shadow 0.12s;
}
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn::before { content:""; flex:none; width:14px; height:14px; background:#fff; -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='3' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3C/svg%3E") center / contain no-repeat; mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='3' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3C/svg%3E") center / contain no-repeat; }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn::after { content:attr(data-count); min-width:18px; height:18px; padding:0 5px; box-sizing:border-box; border-radius:999px; background:rgba(255,255,255,0.3); color:#fff; font-size:11px; font-weight:900; line-height:18px; text-align:center; }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn:hover { background:var(--ssb-yolk-hi) !important; }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn:active { transform:translateY(1px) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 0 var(--ssb-yolk-shadow) !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-row { margin:10px 0 0 !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-tile { border:2px solid #fff !important; border-radius:10px !important; box-shadow:0 2px 6px rgba(8,62,84,0.16) !important; transition:transform 0.12s, box-shadow 0.12s; }
#popupInnards > #mod-crosshair-section .ch2-mini-tile.selected { box-shadow:0 0 0 2.5px #ff981f, 0 4px 10px rgba(247,147,30,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-more { border:2px solid #fff !important; border-radius:10px !important; background:rgba(255,255,255,0.55) !important; box-shadow:0 2px 6px rgba(8,62,84,0.16) !important; color:var(--ssb-ink) !important; text-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-more:hover { background:#fff !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-bar {
height:42px; margin:10px 0 0 !important; padding:0 6px 0 4px !important; gap:2px !important; box-sizing:border-box !important; border:0 !important; border-radius:12px !important;
background:linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.52) 100%) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(14,118,151,0.14), 0 1px 2px rgba(8,62,84,0.12), 0 8px 18px rgba(8,62,84,0.16) !important;
}
#popupInnards > #mod-crosshair-section .ch2-profile-select { height:34px; padding:0 4px 0 8px !important; font-size:14px !important; font-weight:800 !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-divider { height:20px !important; margin:0 4px !important; background:rgba(14,118,151,0.18) !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn { width:30px !important; height:30px !important; border-radius:9px !important; background:transparent !important; box-shadow:none !important; color:var(--ssb-blue) !important; transform:none !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn svg { filter:none !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn:hover { background:rgba(14,118,151,0.12) !important; color:var(--ssb-ink) !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn.danger, #popupInnards > #mod-crosshair-section .ch2-icon-btn.danger:hover { color:var(--ssb-red) !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn.danger:hover { background:rgba(216,39,39,0.1) !important; }

/* Right: the settings in a scrolling column, laid out like a MODS page: a heading with a subtitle, then a glass list */
/* (6px of bottom padding for the Reset button's shadow reaches into the gap above the footer, so the button's
bottom edge still lines up with the panel on the left; 6px on the left, pulled back the same way, keeps the
Reset button's focus ring whole) */
#popupInnards > #mod-crosshair-section .ch2-right-col {
flex:1 1 0 !important; min-width:0; display:flex !important; flex-direction:column !important; gap:12px !important;
overflow-y:auto !important; box-sizing:border-box; margin-bottom:-6px; margin-left:-6px; padding:0 8px 6px 6px !important; scrollbar-gutter:stable;
}
#popupInnards > #mod-crosshair-section .ch2-right-col > * { flex-shrink:0; }
@supports (animation-timeline: scroll()) {
#popupInnards > #mod-crosshair-section .ch2-right-col {
-webkit-mask-image:linear-gradient(to bottom, transparent, #000 var(--pm-fade-t), #000 calc(100% - var(--pm-fade-b)), transparent);
mask-image:linear-gradient(to bottom, transparent, #000 var(--pm-fade-t), #000 calc(100% - var(--pm-fade-b)), transparent);
animation:pm-fade linear both; animation-timeline:scroll(self);
}
}
/* the cards hold a heading and a list; only the list (and the Enable card) is glass, like a MODS card */
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-group-card { margin:0 !important; padding:0 !important; border:0 !important; border-radius:0 !important; background:none !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-right-col :is(.ch2-card-enable, .ch2-card-list) {
border:1px solid var(--pm-edge) !important; border-radius:14px !important; background:var(--pm-glass) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06) !important;
}
#popupInnards > #mod-crosshair-section .ch2-card-list { padding:0 14px; }
#popupInnards > #mod-crosshair-section .ch2-controls-container { margin-top:10px !important; }
#popupInnards > #mod-crosshair-section .ch2-controls-container > .ch2-group-card + .ch2-group-card { margin-top:22px !important; }

/* Headings: the MODS page heading (Sigmar One, a subtitle underneath, a hairline), no icons */
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-title {
display:block !important; margin:0 0 14px !important; padding:0 0 12px !important; border-bottom:1px solid rgba(12,87,111,0.14) !important;
font-family:"Sigmar One",sans-serif !important; font-size:22px !important; font-weight:normal !important; letter-spacing:0.5px !important; line-height:1.1 !important;
text-transform:uppercase !important; color:var(--ssb-ink) !important;
}
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-title::after, #popupInnards > #mod-crosshair-section .ch2-gallery-hint {
display:block; margin:5px 0 0 !important; font-family:"Nunito",system-ui,sans-serif !important; font-size:13.5px !important; font-weight:700 !important;
letter-spacing:0 !important; line-height:1.3; text-transform:none !important; color:var(--pm-sub) !important;
}
#popupInnards > #mod-crosshair-section .ch2-card-arms > .ch2-card-title::after { content:"Color, size and angle of the four arms."; }
#popupInnards > #mod-crosshair-section .ch2-card-dot > .ch2-card-title::after { content:"The dot, plus or still cross in the middle."; }

/* Rows: one line each, a hairline between them, every control ending on the same right edge */
#popupInnards > #mod-crosshair-section .ch2-right-col :is(.ch2-check-label, .ch2-control-row, .ch2-slider-wrap) { box-sizing:border-box; min-height:52px; margin:0 !important; padding:8px 0 !important; border-top:1px solid var(--pm-line) !important; }
#popupInnards > #mod-crosshair-section .ch2-card-list > :first-child { border-top:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-card-dot .ch2-collapse-body { border-top:1px solid var(--pm-line); }
/* An open row group doesn't clip, so the focus ring of a box, color field or switch at a row's right end stays
whole. It still clips while it folds (the inline max-height) and while it's folded. flow-root keeps the layout. */
#popupInnards > #mod-crosshair-section .ch2-collapse-body:not(.collapsed):not([style*="max-height"]) { overflow:visible !important; display:flow-root; }
#popupInnards > #mod-crosshair-section :is(.ch2-label, .ch2-check-text) { font-size:15px !important; font-weight:800 !important; line-height:1.25; color:var(--ssb-ink) !important; }

/* Checkboxes: the MODS toggle switch, on the right */
#popupInnards > #mod-crosshair-section .ch2-check-label { gap:14px !important; justify-content:space-between; }
#popupInnards > #mod-crosshair-section .ch2-check-text { order:0; flex:1 1 auto; min-width:0; }
#popupInnards > #mod-crosshair-section .ch2-check-box {
order:1; position:relative; width:46px !important; height:26px !important; border-radius:999px !important;
background:rgba(12,87,111,0.22) !important; box-shadow:inset 0 2px 4px rgba(8,62,84,0.28); transition:background 0.18s, box-shadow 0.18s;
}
#popupInnards > #mod-crosshair-section .ch2-check-box::after {
content:"" !important; display:block !important; position:absolute; top:3px; left:3px; width:20px !important; height:20px !important; margin:0 !important;
border:0 !important; border-radius:50%; background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.25); transform:none !important; transition:transform 0.2s cubic-bezier(0.3,1.4,0.6,1);
}
#popupInnards > #mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box { background:var(--pm-orange) !important; box-shadow:inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 1px var(--pm-orange-edge); }
#popupInnards > #mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box::after { transform:translateX(20px) !important; }

/* Colors: swatch and hex share one white field, like the MODS number boxes */
#popupInnards > #mod-crosshair-section .ch2-control-right { flex-wrap:nowrap !important; gap:2px !important; height:36px; box-sizing:border-box; padding:0 4px; border-radius:10px; background:#fff; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16); }
#popupInnards > #mod-crosshair-section .ch2-color { flex:none; width:30px !important; height:26px !important; border-radius:7px !important; }
#popupInnards > #mod-crosshair-section .ch2-color::-webkit-color-swatch { border:1px solid rgba(0,0,0,0.12); border-radius:7px; }
#popupInnards > #mod-crosshair-section .ch2-hex { width:68px !important; height:28px !important; padding:0 4px !important; border:0 !important; border-radius:6px !important; background:transparent !important; font-size:14px !important; font-weight:700 !important; }

/* Sliders: one line like the MODS FOV slider (name, range, track, value), with the same track, thumb and value box */
#popupInnards > #mod-crosshair-section .ch2-slider-wrap { display:grid; grid-template-columns:110px 28px minmax(0, 1fr) 28px auto; column-gap:8px; align-items:center; }
#popupInnards > #mod-crosshair-section .ch2-slider-lrow { display:contents !important; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap .ch2-label { grid-area:1 / 1; min-width:0; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap::before, #popupInnards > #mod-crosshair-section .ch2-slider-wrap::after { font-size:11px; font-weight:700; line-height:1; color:#216a80; opacity:0.75; white-space:nowrap; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap::before { content:attr(data-min); grid-area:1 / 2; text-align:right; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap::after { content:attr(data-max); grid-area:1 / 4; text-align:left; }
#popupInnards > #mod-crosshair-section .ch2-slider { grid-area:1 / 3; width:100% !important; height:10px !important; margin:0; border:1px solid rgba(12,87,111,0.15) !important; border-radius:5px !important; background:#fff !important; }
#popupInnards > #mod-crosshair-section .ch2-slider::-webkit-slider-thumb { width:21px !important; height:21px !important; margin-top:-7px !important; box-sizing:border-box !important; border:4.5px solid #fff !important; border-radius:50% !important; background:var(--ssb-yolk) !important; box-shadow:0 1px 4px rgba(0,0,0,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-slider::-moz-range-thumb { width:21px !important; height:21px !important; box-sizing:border-box !important; border:4.5px solid #fff !important; border-radius:50% !important; background:var(--ssb-yolk) !important; box-shadow:0 1px 4px rgba(0,0,0,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap .ch2-num { grid-area:1 / 5; }
#popupInnards > #mod-crosshair-section .ch2-num { width:64px !important; height:36px !important; box-sizing:border-box; padding:0 6px !important; border:0 !important; border-radius:10px !important; background:#fff !important; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16); font-size:15px !important; font-weight:700 !important; }

/* Dot / Plus / Still: a segmented control, with a hairline above and below like the rows */
#popupInnards > #mod-crosshair-section .ch2-shape-row { gap:4px !important; margin:10px 0 !important; padding:4px; border-radius:13px; background:rgba(12,87,111,0.1); box-shadow:inset 0 1px 3px rgba(8,62,84,0.14); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn {
flex:1 1 0 !important; gap:7px; height:36px !important; padding:0 10px !important; border:1px solid transparent !important; border-radius:10px !important;
background:transparent !important; box-shadow:none !important; color:var(--ssb-ink) !important; transform:none !important;
font-size:14px !important; font-weight:800 !important; letter-spacing:0.2px !important; text-transform:none !important; text-shadow:none !important;
}
#popupInnards > #mod-crosshair-section .ch2-shape-btn::before { content:""; flex:none; width:16px; height:16px; background:currentColor; -webkit-mask:var(--pm-ico) center / contain no-repeat; mask:var(--pm-ico) center / contain no-repeat; }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:nth-child(1) { --pm-ico:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='5.5' fill='black' stroke='none'/%3E%3C/svg%3E"); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:nth-child(2) { --pm-ico:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v16M4 12h16'/%3E%3C/svg%3E"); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:nth-child(3) { --pm-ico:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v6M12 15v6M3 12h6M15 12h6'/%3E%3C/svg%3E"); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:hover:not(.active) { background:var(--pm-glass-hi) !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-shape-btn.active {
border-color:var(--pm-orange-edge) !important; background:var(--pm-orange) !important; color:#fff !important; text-shadow:0 1px 0 rgba(0,0,0,0.22) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.12), 0 4px 10px rgba(247,147,30,0.3) !important;
}

/* Enable: a MODS card (name, description underneath, switch) with the MODS orange edge while it's on.
The label fills the card, so the whole card is the click target. */
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable { transition:background 0.15s, border-color 0.15s, box-shadow 0.15s; }
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable:hover { background:var(--pm-glass-hi) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12) !important; }
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable:has(input:checked) { border-color:rgba(255,152,31,0.6) !important; background:rgba(255,255,255,0.4) !important; }
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-label {
display:grid !important; grid-template-columns:minmax(0, 1fr) auto; grid-template-areas:"name box" "desc box";
align-items:center; column-gap:14px !important; row-gap:3px !important; min-height:64px; padding:12px 14px !important; border:0 !important; cursor:pointer;
}
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-text { grid-area:name; align-self:end; font-size:16.5px !important; }
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-label::after { content:"Replace the game's crosshair with your own design."; grid-area:desc; align-self:start; font-size:12.5px; font-weight:600; line-height:1.35; color:var(--pm-sub); }
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-box { grid-area:box; }

/* Customizer off: a dashed glass box with an orange button (the one thing to do here) */
#popupInnards > #mod-crosshair-section .ch2-disabled-msg { gap:12px; margin:0 !important; padding:24px 18px !important; border:2px dashed rgba(14,118,151,0.35) !important; border-radius:14px !important; background:var(--pm-glass) !important; color:var(--pm-sub) !important; font-weight:800; }
#popupInnards > #mod-crosshair-section .ch2-disabled-msg > span { max-width:30em; font-size:14.5px; line-height:1.4; }
#popupInnards > #mod-crosshair-section .ch2-disabled-msg .ch2-profile-btn {
flex:none !important; width:auto !important; padding:0 20px !important; border:2px solid var(--pm-orange-edge) !important; border-radius:12px !important; background:var(--pm-orange) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.14), 0 6px 14px rgba(247,147,30,0.3) !important; text-transform:none !important; letter-spacing:0.2px !important;
}

/* Reset Crosshair: a quiet glass row with red text, set apart from the Center Dot list (it asks before resetting) */
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair {
width:100% !important; height:44px !important; margin:10px 0 0 !important; padding:0 16px !important; gap:8px; border:1px solid var(--pm-edge) !important; border-radius:14px !important;
background:var(--pm-glass) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06) !important; color:#b42318 !important; transform:none !important;
font-size:14.5px !important; font-weight:800 !important; text-transform:none !important; letter-spacing:0.2px !important; text-shadow:none !important;
}
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair::before { content:""; flex:none; width:16px; height:16px; background:currentColor; -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E") center / contain no-repeat; mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E") center / contain no-repeat; }
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair:hover { border-color:rgba(216,39,39,0.35) !important; background:rgba(255,255,255,0.55) !important; }
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair:active { transform:translateY(1px) !important; }

/* Gallery: a page like the others: heading and hint with the Back button beside them, then the cards */
#popupInnards > #mod-crosshair-section .ch2-gallery-header { gap:12px; margin:0 !important; padding:0 0 12px !important; border-bottom:1px solid rgba(12,87,111,0.14) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-header .ch2-card-title { flex:1 1 auto; min-width:0; margin:0 !important; padding:0 !important; border:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-back-btn {
flex:none; height:30px; padding:0 12px !important; border:0 !important; border-radius:9px !important; background:var(--ssb-yolk) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 0 var(--ssb-yolk-shadow), 0 4px 8px rgba(211,84,0,0.25) !important; color:#fff !important; font-size:13px !important; font-weight:900 !important; text-shadow:0 1px 2px rgba(0,0,0,0.3) !important; white-space:nowrap; transition:background-color 0.12s, box-shadow 0.12s;
}
#popupInnards > #mod-crosshair-section .ch2-gallery-back-btn:hover { background:var(--ssb-yolk-hi) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-back-btn:active { transform:translateY(1px) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 0 var(--ssb-yolk-shadow) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-grid { grid-template-columns:repeat(auto-fill, minmax(136px, 1fr)) !important; gap:14px !important; padding:14px 0 2px !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card {
gap:9px !important; padding:10px !important; border:1px solid var(--pm-edge) !important; border-radius:14px !important;
background:var(--pm-glass) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.08) !important;
}
#popupInnards > #mod-crosshair-section .ch2-gallery-card:hover { background:var(--pm-glass-hi) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.14) !important; transform:translateY(-2px) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card:active { transform:none !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.selected { border-color:rgba(255,152,31,0.9) !important; background:rgba(255,255,255,0.45) !important; box-shadow:0 0 0 2px #ff981f, 0 8px 18px rgba(247,147,30,0.22) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.selected .ch2-gallery-title { color:#c46a00 !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-mini-preview { height:104px !important; border-radius:10px !important; box-shadow:inset 0 0 0 1px rgba(12,87,111,0.12); }
#popupInnards > #mod-crosshair-section .ch2-gallery-title { font-size:13px !important; text-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-badge { top:-8px !important; right:-8px !important; background:var(--pm-orange) !important; box-shadow:0 0 0 2px #fff, 0 3px 8px rgba(247,147,30,0.4) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-badge svg { stroke:#fff; }
#popupInnards > #mod-crosshair-section .ch2-gallery-actions { top:14px !important; right:14px !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-abtn { width:26px !important; height:26px !important; border:1px solid var(--pm-edge) !important; border-radius:8px !important; background:rgba(255,255,255,0.88) !important; box-shadow:0 2px 6px rgba(8,62,84,0.18) !important; color:var(--ssb-blue) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-abtn:hover { background:#fff !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-abtn.danger { color:var(--ssb-red) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-card { min-height:150px !important; border:2px dashed rgba(14,118,151,0.38) !important; border-radius:14px !important; background:rgba(255,255,255,0.14) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-card:hover { border-color:var(--ssb-orange) !important; background:var(--pm-glass) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-plus { background:var(--pm-orange) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), 0 4px 10px rgba(247,147,30,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-label { font-size:12px !important; letter-spacing:0.2px !important; text-transform:none !important; }
/* drag-to-reorder markers (after the card rules above, which would hide them) */
#popupInnards > #mod-crosshair-section .ch2-gallery-card.ch2-dragging { opacity:0.45 !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.ch2-drop-before { box-shadow:-5px 0 0 var(--ssb-orange), 0 2px 6px rgba(8,62,84,0.08) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.ch2-drop-after { box-shadow:5px 0 0 var(--ssb-orange), 0 2px 6px rgba(8,62,84,0.08) !important; }

/* Narrow window: the panel and the settings stack and scroll together */
@container (max-width:700px) {
#popupInnards > #mod-crosshair-section .ch2-top { flex-direction:column !important; gap:12px !important; overflow-y:auto !important; margin-left:-6px; padding-left:6px; padding-right:8px; scrollbar-gutter:stable; }
#popupInnards > #mod-crosshair-section .ch2-preview-col, #popupInnards > #mod-crosshair-section .ch2-right-col { flex:none !important; width:100%; overflow:visible !important; margin-bottom:0; scrollbar-gutter:auto; }
/* the scrolling column above holds the room for focus rings now; the panel keeps its padding on both sides */
#popupInnards > #mod-crosshair-section .ch2-right-col { margin-left:0; padding-left:0 !important; padding-right:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-preview-wrap { flex:none; height:160px !important; }
}
#mod-settings-section .mod-search-empty { padding:30px 10px 10px; text-align:center; font-size:17px; font-weight:800; color:var(--ssb-ink); }
#mod-settings-section .mod-item .ssb-new-pill { margin-left:-8px; }
#mod-settings-footer { flex-wrap:wrap; gap:10px 14px; }
#mod-settings-footer .mod-footer-mid { display:inline-flex; align-items:center; flex-wrap:wrap; justify-content:center; gap:8px; }
/* Update status beside "Check for updates": a quiet pill when current, the orange game button when there's an update. */
#ssb-update-status:empty { display:none; }
#ssb-update-status { display:inline-flex; align-items:center; gap:6px; height:30px; padding:0 12px; box-sizing:border-box; border-radius:999px; font-size:13px; font-weight:800; line-height:1; white-space:nowrap; }
#ssb-update-status::before { content:""; flex:none; width:8px; height:8px; border-radius:50%; background:currentColor; }
#ssb-update-status.is-latest { background:rgba(40,150,80,0.15); color:#17703b; }
#ssb-update-status.is-checking, #ssb-update-status.is-error, #ssb-update-status.is-reload { background:rgba(12,87,111,0.1); color:var(--ssb-ink); }
#ssb-update-status.is-checking::before { animation:ssb-upd-pulse 0.9s ease-in-out infinite alternate; }
@keyframes ssb-upd-pulse { from { opacity:0.25; } to { opacity:1; } }
#ssb-update-status.is-available { padding:0; background:none; }
#ssb-update-status.is-available::before { display:none; }
#ssb-update-status .ssb-upd-go { display:inline-flex; align-items:center; gap:6px; height:30px; padding:0 12px; box-sizing:border-box; border:2px solid #924e0c; border-radius:8px; background:#f79520; color:#fff; font-size:13px; font-weight:900; text-decoration:none; text-shadow:rgba(0,0,0,0.25) 1px 1px 0; box-shadow:inset 0 -3px 0 rgba(0,0,0,0.16); transition:filter 0.12s; }
#ssb-update-status .ssb-upd-go:hover { filter:brightness(1.07); }
#ssb-update-status .ssb-upd-go::before { content:"↑"; font-size:14px; }
#mod-settings-footer .mod-footer-btn { height:30px; margin:0; padding:0 12px; border:2px solid var(--ssb-blue); border-radius:8px; background:rgba(255,255,255,0.35); color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:13px; font-weight:800; cursor:pointer; transition:background 0.12s; }
#mod-settings-footer .mod-footer-btn:hover { background:rgba(255,255,255,0.65); }
#mod-settings-footer a.mod-footer-btn { display:inline-flex; align-items:center; box-sizing:border-box; text-decoration:none; white-space:nowrap; }
#mod-settings-footer a.mod-footer-discord { width:30px; padding:0; justify-content:center; }
#mod-settings-footer .mod-footer-discord svg { width:18px; height:18px; font-size:inherit; display:block; transition:color 0.12s; }
#mod-settings-footer .mod-footer-discord:hover { color:#5865F2; }
#mod-settings-footer a.mod-footer-youtube { width:30px; padding:0; justify-content:center; }
#mod-settings-footer .mod-footer-youtube svg { width:19px; height:19px; font-size:inherit; display:block; transition:color 0.12s; }
#mod-settings-footer .mod-footer-youtube:hover { color:#FF0000; }
#mod-settings-footer a.mod-footer-github { width:30px; padding:0; justify-content:center; }
#mod-settings-footer .mod-footer-github svg { width:18px; height:18px; font-size:inherit; display:block; transition:color 0.12s; }
#mod-settings-footer .mod-footer-github:hover { color:#ffffff; }
#mod-settings-footer .mod-footer-update { width:30px; padding:0; display:inline-flex; align-items:center; justify-content:center; box-sizing:border-box; }
#mod-settings-footer .mod-footer-update svg { width:17px; height:17px; font-size:inherit; display:block; transition:transform 0.35s ease; }
#mod-settings-footer .mod-footer-update:hover:not(:disabled) svg { transform:rotate(180deg); }
#mod-settings-footer .mod-footer-update:disabled { cursor:default; }
#mod-settings-footer .mod-footer-update:disabled svg { animation:ssb-upd-spin 0.8s linear infinite; }
@keyframes ssb-upd-spin { to { transform:rotate(360deg); } }
/* NEW-items dot on the MODS / CROSSHAIR tab, until the tab is opened */
#mod-crosshair-section .ch2-disabled-msg { display:flex; flex-direction:column; align-items:center; gap:var(--ssb-gap); margin-top:15px; padding:22px 18px; border:2px dashed rgba(33,106,128,0.45); border-radius:10px; background:rgba(33,106,128,0.06); color:var(--ssb-muted); font-size:14px; font-weight:700; text-align:center; letter-spacing:0.2px; }
/* While searching, each match shows its description under its name */
#mod-settings-section .mod-search-tip { display:none; margin-top:3px; font-size:14px; font-weight:600; line-height:1.3; color:var(--ssb-muted); }
#mod-settings-section.mod-searching .mod-search-tip { display:block; }

/* Tooltips styling */
#mod-settings-section [data-tooltip], #mod-settings-section .mod-slider-label[data-tooltip] {
cursor: default;
}
`;
(document.head || document.documentElement).appendChild(n);
}
if (!document.getElementById("mod-crosshair-compact")) {
let cs = document.createElement("style");
cs.id = "mod-crosshair-compact";
cs.textContent =
`#mod-crosshair-section .ch2-preview-col{flex:1!important}#mod-crosshair-section .ch2-preview-wrap{margin-bottom:12px!important;border-radius:12px!important}#mod-crosshair-section .ch2-label{font-size:14px!important}#mod-crosshair-section .ch2-check-text{font-size:18px!important}#mod-crosshair-section .ch2-check-label{gap:14px!important;margin-bottom:8px!important}#mod-crosshair-section .ch2-check-box{width:30px!important;height:30px!important;border-radius:7px!important}#mod-crosshair-section .ch2-color{width:48px!important;height:28px!important;border-radius:7px!important}#mod-crosshair-section .ch2-hex{width:76px!important;padding:4px 8px!important;font-size:14px!important;border-radius:8px!important}#mod-crosshair-section .ch2-num{width:56px!important;padding:4px 8px!important;font-size:14px!important;border-radius:8px!important}#mod-crosshair-section .ch2-control-row{gap:13px!important;margin-bottom:9px!important}#mod-crosshair-section .ch2-slider{height:5px!important;border-radius:4px!important}#mod-crosshair-section .ch2-slider::-webkit-slider-thumb{-webkit-appearance:none!important;appearance:none!important;width:21px!important;height:21px!important;border:4.5px solid #ffffff!important;margin-top:-8px!important;box-sizing:border-box!important}#mod-crosshair-section .ch2-slider::-moz-range-thumb{width:21px!important;height:21px!important;border-width:4.5px!important;box-sizing:border-box!important}#mod-crosshair-section .ch2-slider-wrap{margin-bottom:14px!important}#mod-crosshair-section .ch2-slider-lrow{margin-bottom:6px!important}#mod-crosshair-section .ch2-shape-row{gap:5px!important;margin-bottom:10px!important}#mod-crosshair-section .ch2-shape-btn{font-size:15px!important;padding:0 8px!important;height:36px!important;border-radius:10px!important;letter-spacing:0.4px!important;box-shadow:0 3px 0 var(--ssb-card-shadow-hi)!important}#mod-crosshair-section .ch2-shape-btn:hover{box-shadow:0 3px 0 var(--ssb-card-shadow-hi)!important}#mod-crosshair-section .ch2-shape-btn:active{box-shadow:0 1px 0 var(--ssb-card-shadow-hi)!important}#mod-crosshair-section .ch2-shape-btn.active{box-shadow:0 3px 0 var(--ssb-ink)!important}#mod-crosshair-section .ch2-reset-btn{padding:0 18px!important;font-size:15px!important;height:36px!important;border-radius:10px!important;margin-top:10px!important;letter-spacing:0.4px!important;box-shadow:0 3px 0 var(--ssb-red-shadow)!important}#mod-crosshair-section .ch2-reset-btn:hover{box-shadow:0 3px 0 var(--ssb-red-shadow-hi)!important}#mod-crosshair-section .ch2-reset-btn:active{box-shadow:0 1px 0 var(--ssb-red-shadow-hi)!important}#mod-crosshair-section .ch2-profile-btn{font-size: 14px !important;height:34px!important;padding:0 10px!important;border-radius:9px!important;letter-spacing:0.3px!important;white-space:nowrap!important;box-shadow:0 3px 0 #123d4b!important}#mod-crosshair-section .ch2-profile-btn:hover{box-shadow:0 3px 0 var(--ssb-blue-shadow)!important}#mod-crosshair-section .ch2-profile-btn:active{box-shadow:0 1px 0 var(--ssb-blue-shadow)!important}#mod-crosshair-section .ch2-profile-btn.danger{box-shadow:0 3px 0 var(--ssb-red-shadow)!important}`;
(document.head || document.documentElement).appendChild(cs)
}

      let el = document.createElement("div");
      el.id = "mod-settings-footer";
      el.style.cssText = "margin-top: 30px; padding-top: 15px; border-top: 2px solid rgba(33,106,128,0.15); display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 700; color: #216a80; font-family: 'Nunito', system-ui, sans-serif;";
      let ed = document.createElement("span");
      ed.className = "mod-footer-version";
      ed.textContent = "Crosshair Mod v" + VERSION;
      let fm = document.createElement("span");
      fm.className = "mod-footer-mid";
      let gh = document.createElement("a");
      gh.className = "mod-footer-btn mod-footer-github";
      gh.href = "https://github.com/Virojet/Shell-Shockers-Crosshair-Mod";
      gh.target = "_blank";
      gh.rel = "noopener";
      gh.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
      gh.setAttribute("aria-label", "Crosshair Mod on GitHub");
      gh.setAttribute("data-tooltip", "View the Crosshair Mod source code and releases on GitHub.");
      gh.addEventListener("click", () => ef("ui_click"));
      fm.appendChild(gh);
      let ec = document.createElement("a");
      ec.href = "https://www.youtube.com/@subtovirojet?sub_confirmation=1";
      ec.target = "_blank";
      ec.textContent = "Created by Virojet";
      ec.style.cssText = "color: #ff9800; text-decoration: none; transition: color 0.15s; font-family: 'Nunito', system-ui, sans-serif;";
      ec.addEventListener("mouseover", () => ec.style.color = "#e68a00");
      ec.addEventListener("mouseout", () => ec.style.color = "#ff9800");
      el.appendChild(ed);
      el.appendChild(fm);
      el.appendChild(ec);

      let ep = document.createElement("div");
      ep.id = "mod-crosshair-section";
      ep.style.cssText = "display:none;overflow-y:auto;box-sizing:border-box;padding:0 14px 30px;";
      let em = t.parentElement;
      em.appendChild(ep);
      em.appendChild(el);

      (function e() {
let t = document.getElementById("mod-crosshair-section");
if (!t) return;
let o = (e, ...t) => {
let o = document.createElement("div");
if (o.className = "ch2-control-row", e) {
let n = document.createElement("span");
n.className = "ch2-label";
n.textContent = e;
o.appendChild(n);
}
let i = document.createElement("div");
i.className = "ch2-control-right";
t.forEach(e => i.appendChild(e));
o
.appendChild(i);
return o;
},
n = (e, t, n) => {
let i = document.createElement("input");
i.type = "color";
i.value = n[t];
i.className = "ch2-color";
let a = document.createElement("input");
a.type = "text";
a.value = n[t];
a.className = "ch2-hex";
let r = () => {
n[t] = i.value;
a.value = i.value;
schedUpd(t, n[t]);
};
i.addEventListener("input", r);
i.addEventListener("change", () => ef(
"ui_onchange"));
a.addEventListener("input", () => {
if (/^#[0-9a-f]{6}$/i.test(a.value)) {
i.value = a.value;
n[t] = a
.value;
F(t, n[t]);
G();
Y();
ef("ui_onchange");
}
});
return o(e, i, a);
},
i = (e, t, o, n, i, a) => {
let r = document.createElement("input");
r.type = "range";
r.min = n;
r.max = i;
r.step = a;
r.value = o[t];
r
.className = "ch2-slider";
let s = document.createElement("input");
s.type = "number";
s.min = n;
s.max = i;
s.step = a;
s.value = o[t];
s
.className = "ch2-num";
r.addEventListener("input", () => {
o[t] = parseFloat(r.value);
s.value = o[t];
schedUpd(t, o[t]);
});
r.addEventListener("change", () => ef("ui_onchange"));
let l = () => {
let e = parseFloat(s.value);
if (!isNaN(e)) {
e = Math.max(parseFloat(n), Math.min(parseFloat(i), e));
s
.value = e;
r.value = e;
o[t] = e;
F(t, o[t]);
G();
Y();
ef(
"ui_onchange");
}
};
s.addEventListener("change", l);
s.addEventListener("keydown", e => {
if (e.key === "Enter") {
l();
s.blur();
}
});
let d = document.createElement("div");
d.className = "ch2-slider-wrap";
d.dataset.min = n;
d.dataset.max = i;
let c = document.createElement("div");
c.className = "ch2-slider-lrow";
let p = document.createElement("span");
p.className = "ch2-label";
p.textContent = e;
c.appendChild(p);
c
.appendChild(s);
d.appendChild(c);
d.appendChild(r);
return d;
},
a = (e, t, o, n) => {
let i = document.createElement("label");
i.className = "ch2-check-label";
let a = document.createElement("input");
a.type = "checkbox";
a.checked = o[t];
let r = document.createElement("span");
r.className = "ch2-check-box";
let s = document.createElement("span");
s.className = "ch2-check-text";
s.textContent = e;
i.appendChild(a);
i
.appendChild(r);
i.appendChild(s);
a.addEventListener("change", () => {
o[t] = a.checked;
F(t, o[t]);
G();
Y();
ef("ui_onchange");
if (n) n();
});
return i;
};
t.innerHTML = "";
let l = document.createElement("div");
l.className = "ch2-top";
let d = document.createElement("div");
d.className = "ch2-preview-col";
let previewCard = document.createElement("div");
previewCard.className = "ch2-group-card ch2-card-preview";
let previewTitle = document.createElement("div");
previewTitle.className = "ch2-card-title";
previewTitle.textContent = "Preview";
previewCard.appendChild(previewTitle);
let previewWrap = document.createElement("div");
previewWrap.className = "ch2-preview-wrap";
previewWrap.id = "ch2-preview-wrap";
previewCard.appendChild(previewWrap);
let c = document.createElement("input");
c.type = "color";
c.value = localStorage.getItem("ch2-previewBg") || "#ffffff";
c
.className = "ch2-color";
let p = document.createElement("input");
p.type = "text";
p.value = localStorage.getItem("ch2-previewBg") || "#ffffff";
p
.className = "ch2-hex";
let m = () => {
localStorage.setItem("ch2-previewBg", c.value);
p.value = c.value;
Y();
};
c.addEventListener("input", m);
p.addEventListener("input", () => {
if (/^#[0-9a-f]{6}$/i.test(p.value)) {
c.value = p.value;
localStorage.setItem(
"ch2-previewBg", p.value);
Y();
}
});
let h = o("Background", c, p);
h.style.marginTop = "6px";
previewCard.appendChild(h);
d.appendChild(previewCard);
let bgSw = document.createElement("div");
bgSw.className = "ch2-bg-swatches";
if (window.__ssbSettings?.NEW_SINCE === "5.1") bgSw.appendChild(window.__ssbSettings
.newPill());
[
["#87ceeb", "Sky"],
["#808080", "Grey"],
["#1b1b1b", "Dark"],
["#ffffff", "White"]
].forEach(([hex, nm]) => {
let b = document.createElement("button");
b.type = "button";
b.className = "ch2-bg-swatch";
b.dataset.hex = hex;
b
.style.background = hex;
b.setAttribute("data-tooltip", nm +
" background");
b.setAttribute("aria-label", nm + " background");
b.addEventListener("click", () => {
c.value = hex;
p.value = hex;
localStorage.setItem(
"ch2-previewBg", hex);
Y();
ef("ui_click");
});
bgSw.appendChild(b);
});
h.lastChild.prepend(bgSw);
let profilesCard = document.createElement("div");
profilesCard.className = "ch2-group-card ch2-card-profiles";
let profilesTitle = document.createElement("div");
profilesTitle.className = "ch2-card-title";
profilesTitle.textContent = "Profiles";
profilesCard.appendChild(profilesTitle);
let y = document.createElement("select");
y.className = "ch2-profile-select";
let x = document.createElement("button");
x.className = "ch2-gallery-btn";
x.id = "ch2-open-gallery-btn";
x.addEventListener("click", () => {
if (typeof ef === "function") ef("ui_click");
if (window._ssbToggleGallery) window._ssbToggleGallery(true);
});
let mini = document.createElement("div");
mini.className = "ch2-mini-row";
mini.setAttribute("role", "group");
mini.setAttribute("aria-label", "Quick profile picker");
function renderMini() {
let all = N(),
names = PO(all),
cur = z();
mini.hidden = !names.length;
mini.innerHTML = "";
let w = mini.clientWidth;
if (!w || !names.length) return;
let TILE = 44,
GAP = 6,
cap = Math.max(1, Math.floor((w + GAP) / (TILE + GAP)));
let shown = names.length > cap ? names.slice(0, cap - 1) : names;
shown.forEach(nm => {
let b = document.createElement("button");
b.type = "button";
b.className = "ch2-mini-tile" + (nm === cur ?
" selected" : "");
b.setAttribute("data-tooltip", nm);
b.setAttribute("aria-label",
"Use profile " + nm + (nm === cur ? " (current)" : ""));
b.innerHTML = xhMini(all[nm], 30);
b.addEventListener("click", () => {
if (nm !== z()) {
y.value = nm;
y.dispatchEvent(new Event(
"change"));
}
});
mini.appendChild(b);
});
if (names.length > shown.length) {
let more = document.createElement("button"),
left = names.length - shown.length;
more.type = "button";
more.className = "ch2-mini-more";
more.textContent = "+" +
left;
more.setAttribute("data-tooltip", "Open the gallery to see all " + names
.length + " profiles");
more.setAttribute("aria-label", left +
" more profiles. Open the gallery");
more.addEventListener("click", () => {
if (typeof ef == "function") ef("ui_click");
if (window
._ssbToggleGallery) window._ssbToggleGallery(true);
});
mini.appendChild(more);
}
}
if (localStorage.getItem("ch2-starterSeeded") !== "2") {
try {
let all = N(),
mine = PO(all),
starters = [
["Default", "X-"],
["Techno", "X-AwpDssSc1ekbSb1ejySwpSggoSe0Ss19"],
["Green Dot", "X-Dc1eei"],
["No Hair", "X-Hc1"],
["No Center Dot", "X-Hd1"]
],
names = starters.map(x => x[0]);
starters.forEach(([nm, code]) => {
if (!all[nm]) all[nm] = unpackCrosshair(code);
});
Object.keys(all).forEach(k => {
if (all[k] && typeof all[k] == "object") all[k].enabled = true;
});
M(all);
PS(names.concat(mine.filter(n => !names.includes(n))));
if (!z()) {
let def = _withDot(all.Default);
if (Object.keys(B).every(k => k === "enabled" || A[k] === def[k])) O(
"Default");
}
} catch (err) {
window.__ssbErr("crosshair.seed", err)
}
localStorage.setItem("ch2-starterSeeded", "2");
}
function E() {
y.innerHTML = "";
let e = N(),
t = PO(e),
o = document.createElement("option");
o.value = "";
o.textContent = t.length ? "--  select a profile -- " :
"--  no profiles saved -- ";
y.appendChild(o);
t.forEach(e => {
let t = document.createElement("option");
t.value = e;
t.textContent = e;
y.appendChild(t);
});
y.value = z() || "";
if (x) {
x.textContent = "Gallery";
x.setAttribute("data-count", t.length);
}
renderMini();
if (window._ssbUpdateGallery) {
if (window._ssbGalleryActive) window._ssbUpdateGallery(e, t, y.value);
else window
._ssbGalleryDirty = true;
}
}
E();
y.addEventListener("change", () => {
let o = y.value;
if (o && function e(t) {
let o = N();
if (!o[t]) return false;
let n = Object.assign(_withDot(o[t]), {
enabled: true
}),
i = Object.assign({}, A);
Object.assign(A, n);
Object.keys(A).forEach(e => {
if (i[e] !== A[e]) F(e, A[e]);
});
O(t);
return true;
}(o)) {
G();
Y();
t.innerHTML = "";
e();
ef("ui_click");
}
});
profilesCard.appendChild(x);
profilesCard.appendChild(mini);
let iconBar = document.createElement("div");
iconBar.className = "ch2-icon-bar";
let selectWrap = document.createElement("div");
selectWrap.className = "ch2-icon-select-wrap";
selectWrap.appendChild(y);
iconBar.appendChild(selectWrap);
let ibDiv2 = document.createElement("div");
ibDiv2.className = "ch2-icon-divider";
iconBar.appendChild(ibDiv2);
let ibIcons = {
save: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" fill-rule="evenodd"><path d="M6 2h10l5 5v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm2 2.5v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zm-1 10v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z"/></svg>',
dup: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="2" y="2" width="14" height="14" rx="3.5" opacity=".45"/><rect x="8" y="8" width="14" height="14" rx="3.5"/></svg>',
exp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1l6.2 6.8a.6.6 0 0 1-.44 1H14.5V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8.8H6.24a.6.6 0 0 1-.44-1L12 1z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>',
imp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 16l-6.2-6.8a.6.6 0 0 1 .44-1H9.5V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6.2h3.26a.6.6 0 0 1 .44 1L12 16z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>',
del: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" fill-rule="evenodd"><path d="M9.3 1.5h5.4a1 1 0 0 1 .9.55L16.4 3.5H20a1.2 1.2 0 0 1 0 2.4H4a1.2 1.2 0 0 1 0-2.4h3.6l.8-1.45a1 1 0 0 1 .9-.55z"/><path d="M5 7.5h14l-1.1 12.4a2.5 2.5 0 0 1-2.5 2.3H8.6a2.5 2.5 0 0 1-2.5-2.3L5 7.5zm4.4 3a.95.95 0 0 0-.95 1l.35 6a.95.95 0 0 0 1.9-.1l-.35-6a.95.95 0 0 0-.95-.9zm5.2 0a.95.95 0 0 0-.95.9l-.35 6a.95.95 0 0 0 1.9.1l.35-6a.95.95 0 0 0-.95-1z"/></svg>'
};
function mkIB(ico, tip, cls) {
let b = document.createElement("button");
b.className = "ch2-icon-btn" + (cls ? " " + cls : "");
b.setAttribute("data-tooltip", tip);
b.innerHTML = ibIcons[ico];
return b
}
let UI = window.__ssbUI,
nameDlg = (title, value, keep) => UI.prompt({
title: title,
text: "Give this crosshair profile a name.",
value: value || "",
placeholder: "Profile name",
ok: "Save",
maxLength: 40,
validate: v => v.trim() ? "" : "Type a name first."
}).then(v => {
if (v == null) return null;
v = v.trim();
return N()[v] && v !== keep ? UI.confirm({
title: "Replace Profile",
text: "A profile named \"" + v +
"\" already exists. Replace it?",
ok: "Replace",
danger: true
}).then(ok => ok ? v : null) : v
});
let btnSave = mkIB("save", "Save profile");
btnSave.addEventListener("click", async () => {
let t = z() || await nameDlg("Save Profile", "");
if (t) {
D(t);
E();
y.value = t;
ef("ui_click");
UI.toast(
"Saved profile \"" + t + "\".", {
type: "success"
});
}
});
let btnSaveAs = mkIB("dup", "Duplicate / Save As");
btnSaveAs.addEventListener("click", async () => {
let e = await nameDlg("Save As", z() ? z() + " copy" : "");
if (e) {
D(e);
E();
y.value = e;
ef("ui_click");
UI.toast(
"Saved profile \"" + e + "\".", {
type: "success"
});
}
});
let btnCopy = mkIB("exp", "Export code to clipboard");
btnCopy.addEventListener("click", () => {
let e = y.value;
if (!e) {
UI.toast("Select a profile first.", {
type: "error"
});
return
}
let t = N();
if (!t[e]) {
UI.toast("That profile no longer exists.", {
type: "error"
});
return
}
if (typeof ef == "function") ef("ui_click");
UI.copyCode(packCrosshair(t[e]),
"Crosshair code");
});
let btnImport = mkIB("imp", "Import code");
btnImport.addEventListener("click", async () => {
let e = await UI.prompt({
title: "Import Crosshair",
text: "Paste a crosshair code. It starts with X- or SSB-. A crosshair code from Valorant works too (it starts with 0;).",
placeholder: "X-…",
ok: "Next",
validate: v => {
if (!(v = v.trim())) return "Paste a code first.";
if (!v.startsWith("X-") && !v.startsWith("SSB-") &&
!_ssbIsValorantCode(v))
return "That isn't a crosshair code. It should start with X-, SSB- or 0;.";
try {
unpackCrosshair(v)
} catch (i) {
return "That crosshair code is damaged."
}
return ""
}
});
if (e == null) return;
let t;
try {
t = unpackCrosshair(e.trim())
} catch (i) {
UI.toast("Import failed: " + i.message, {
type: "error"
});
return
}
let o = await nameDlg("Name Profile", (_ssbIsValorantCode(e) ?
"Valorant_" : "Imported_") + Math.floor(1e3 * Math
.random()));
if (!o) return;
let n = N();
n[o] = Object.assign(t, {
enabled: true
});
M(n);
E();
if (typeof ef == "function") ef("ui_click");
UI.toast(
"Imported profile \"" + o + "\"." + (t.__notes && t.__notes
.length ? "\n" + t.__notes.join("\n") : ""), {
type: "success",
ms: t.__notes && t.__notes.length ? 7000 : 0
});
});
let btnDel = mkIB("del", "Delete profile", "danger");
btnDel.addEventListener("click", async () => {
let e = y.value;
if (!e) {
UI.toast("Select a profile first.", {
type: "error"
});
return
}
if ((await UI.confirm({
title: "Delete Profile",
text: "Delete the crosshair profile \"" + e + "\"?",
ok: "Delete",
danger: true
}))) {
function e(t) {
let o = N();
return !!o[t] && (delete o[t], M(o), z() === t && O(""), true)
}(e);
E();
ef("ui_click");
}
});
[btnSave, btnSaveAs, btnCopy, btnImport, btnDel].forEach(b => iconBar.appendChild(b));
profilesCard.appendChild(iconBar);
d.appendChild(profilesCard);
l.appendChild(d);
let u = document.createElement("div");
u.className = "ch2-right-col";
let f = document.createElement("div");
f.className = "ch2-controls-container";
let g = document.createElement("div");
g.className = "ch2-disabled-msg";
let gt = document.createElement("span");
gt.textContent = "The Crosshair Customizer is off, so these settings are hidden.";
let gb = document.createElement("button");
gb.type = "button";
gb.className = "ch2-profile-btn";
gb.textContent = "Turn it on";
gb
.addEventListener("click", () => {
let cb = b.querySelector("input");
cb.checked = true;
cb.dispatchEvent(new Event("change"));
cb.focus();
});
g.appendChild(gt);
g.appendChild(gb);
let enableCard = document.createElement("div");
enableCard.className = "ch2-group-card ch2-card-enable";
let $ = () => {
if (window._ssbGalleryActive) return;
(rb => {
if (A.enabled) {
f.style.display = "";
g.style.display = "none";
if (rb) rb
.style.removeProperty("display");
} else {
f.style.display = "none";
g
.style.display = "";
if (rb) rb.style.setProperty("display",
"none", "important");
}
})(document.getElementById("ch2-reset-crosshair"))
};
let b = a("Enable Crosshair Customizer", "enabled", A, $);
b.style.marginBottom = "0px";
enableCard.appendChild(b);
let galWrap = document.createElement("div");
galWrap.style.display = "none";
galWrap.className = "ch2-group-card ch2-card-gallery";
let galHeader = document.createElement("div");
galHeader.className = "ch2-gallery-header";
let galTitle = document.createElement("div");
galTitle.className = "ch2-card-title";
galTitle.style.marginBottom = "0";
galTitle.textContent = "Saved Profiles";
let galHint = document.createElement("span");
galHint.className = "ch2-gallery-hint";
galHint.textContent = "Drag to reorder";
galTitle.appendChild(galHint);
let galBack = document.createElement("button");
galBack.className = "ch2-gallery-back-btn";
galBack.innerHTML = "&larr; Back to Settings";
galBack.addEventListener("click", () => {
if (typeof ef === "function") ef("ui_click");
window._ssbToggleGallery(false);
});
galHeader.appendChild(galTitle);
galHeader.appendChild(galBack);
let galGrid = document.createElement("div");
galGrid.className = "ch2-gallery-grid";
function moveProfile(name, target, after) {
let r = PO(),
from = r.indexOf(name);
if (from < 0 || name === target) return;
r.splice(from, 1);
let to = target == null ? r.length : r.indexOf(target) + (after ? 1 : 0);
r.splice(Math.max(0, Math.min(r.length, to)), 0, name);
PS(r);
if (typeof ef == "function") ef("ui_click");
E();
}
let dragName = null,
clearDrop = () => galGrid.querySelectorAll(
".ch2-drop-before,.ch2-drop-after,.ch2-dragging").forEach(c => c.classList
.remove("ch2-drop-before", "ch2-drop-after", "ch2-dragging")),
dropSide = (c, ev) => {
let r = c.getBoundingClientRect();
return ev.clientX > r.left + r.width / 2
};
galGrid.addEventListener("dragstart", ev => {
let c = ev.target.closest && ev.target.closest(".ch2-gallery-card");
if (!c) return;
dragName = c.getAttribute("data-name");
c.classList.add("ch2-dragging");
ev
.dataTransfer.effectAllowed = "move";
try {
ev.dataTransfer.setData("text/plain", dragName)
} catch (err) {
window.__ssbErr("crosshair.drag", err)
}
});
galGrid.addEventListener("dragover", ev => {
if (dragName == null) return;
let c = ev.target.closest && ev.target.closest(".ch2-gallery-card");
if (!c || c.getAttribute("data-name") === dragName) return;
ev.preventDefault();
ev.dataTransfer.dropEffect = "move";
let after = dropSide(c, ev);
if (!c.classList.contains(after ? "ch2-drop-after" : "ch2-drop-before")) {
clearDrop();
galGrid.querySelector(
".ch2-gallery-card[data-name=\"" + CSS.escape(dragName) + "\"]")
?.classList.add("ch2-dragging");
c.classList.add(after ?
"ch2-drop-after" : "ch2-drop-before");
}
});
galGrid.addEventListener("drop", ev => {
if (dragName == null) return;
let c = ev.target.closest && ev.target.closest(".ch2-gallery-card");
ev.preventDefault();
let n = dragName;
dragName = null;
clearDrop();
if (c && c.getAttribute("data-name") !== n) moveProfile(n, c.getAttribute(
"data-name"), dropSide(c, ev));
else {
if (!c && ev.target.closest && ev
.target.closest(".ch2-gallery-new-card")) moveProfile(n, null,
true);
}
});
galGrid.addEventListener("dragend", () => {
dragName = null;
clearDrop();
});
galWrap.appendChild(galHeader);
galWrap.appendChild(galGrid);
window._ssbGalleryActive = false;
window._ssbToggleGallery = (show) => {
window._ssbGalleryActive = show;
let resetBtn = document.querySelector("#mod-crosshair-section .ch2-reset-btn");
let rightCol = document.querySelector("#mod-crosshair-section .ch2-right-col");
let leftCol = document.querySelector("#mod-crosshair-section .ch2-preview-col");
if (show) {
if (window._ssbGalleryDirty) {
window._ssbGalleryDirty = false;
let _p = N();
window._ssbUpdateGallery(_p, PO(_p), z() || "")
}
enableCard.style.display = "none";
f.style.display = "none";
g.style.display = "none";
galWrap.style.display = "flex";
galWrap.style.flexDirection = "column";
galWrap.style.flex = "1";
if (rightCol) {
rightCol.style.display = "flex";
rightCol.style.flexDirection = "column";
rightCol.style.setProperty("flex", "1", "important");
rightCol.style.setProperty("max-width", "100%", "important");
}
if (leftCol) leftCol.style.setProperty("display", "none", "important");
if (resetBtn) resetBtn.style.setProperty("display", "none", "important");
} else {
enableCard.style.display = "";
galWrap.style.display = "none";
galWrap.style.flex = "";
if (rightCol) {
rightCol.style.removeProperty("flex");
rightCol.style.removeProperty("max-width");
}
if (leftCol) leftCol.style.removeProperty("display");
if (resetBtn) resetBtn.style.removeProperty("display");
$();
renderMini();
}
};
window._ssbUpdateGallery = (savedProfiles, keys, activeVal) => {
galGrid.innerHTML = "";
keys.forEach(name => {
let card = document.createElement("div");
card.className = "ch2-gallery-card";
if (name === activeVal) card.classList.add("selected");
let o = savedProfiles[name];
let miniWrap = document.createElement("div");
miniWrap.className = "ch2-gallery-mini-preview";
miniWrap.innerHTML = xhMini(o, 92);
let title = document.createElement("div");
title.className = "ch2-gallery-title";
title.textContent = name;
card.appendChild(miniWrap);
card.appendChild(title);
card.setAttribute("data-tooltip", name);
if (name === activeVal) {
let badge = document.createElement("div");
badge.className = "ch2-gallery-badge";
badge.innerHTML =
'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0C576F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 13 9 18 20 6"/></svg>';
card.appendChild(badge);
}
let actions = document.createElement("div");
actions.className = "ch2-gallery-actions";
let aExp = document.createElement("button");
aExp.className = "ch2-gallery-abtn";
aExp.setAttribute("data-tooltip", "Copy this profile's code");
aExp
.setAttribute("aria-label", "Copy the code for " + name);
aExp.innerHTML =
'<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 1l6.2 6.8a.6.6 0 0 1-.44 1H14.5V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8.8H6.24a.6.6 0 0 1-.44-1L12 1z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>';
aExp.addEventListener("click", ev => {
ev.stopPropagation();
let prof = N()[name];
if (!prof) {
UI.toast("That profile no longer exists.", {
type: "error"
});
return
}
if (typeof ef == "function") ef("ui_click");
UI.copyCode(packCrosshair(prof), "Crosshair code");
});
let aDel = document.createElement("button");
aDel.className = "ch2-gallery-abtn danger";
aDel.setAttribute("data-tooltip", "Delete profile");
aDel
.setAttribute("aria-label", "Delete " + name);
aDel.innerHTML =
'<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M9.3 1.5h5.4a1 1 0 0 1 .9.55L16.4 3.5H20a1.2 1.2 0 0 1 0 2.4H4a1.2 1.2 0 0 1 0-2.4h3.6l.8-1.45a1 1 0 0 1 .9-.55z"/><path d="M5 7.5h14l-1.1 12.4a2.5 2.5 0 0 1-2.5 2.3H8.6a2.5 2.5 0 0 1-2.5-2.3L5 7.5z"/></svg>';
aDel.addEventListener("click", async ev => {
ev.stopPropagation();
if (!(await UI.confirm({
title: "Delete Profile",
text: "Delete the crosshair profile \"" +
name + "\"?",
ok: "Delete",
danger: true
}))) return;
let all = N();
if (all[name]) {
delete all[name];
M(all);
if (z() === name) O("");
}
E();
if (typeof ef == "function") ef("ui_click");
});
actions.appendChild(aExp);
actions.appendChild(aDel);
card.appendChild(actions);
card.draggable = true;
card.setAttribute("data-name", name);
card.addEventListener("keydown", ev => {
if (!ev.altKey || ev.target !== card) return;
let d = ev.key === "ArrowLeft" || ev.key === "ArrowUp" ?
-1 : ev.key === "ArrowRight" || ev
.key === "ArrowDown" ? 1 : 0;
if (!d) return;
ev.preventDefault();
let r = PO(),
i = r.indexOf(name),
j = i + d;
if (j < 0 || j >= r.length) return;
moveProfile(name, r[j], d > 0);
let again = galGrid.querySelector(
".ch2-gallery-card[data-name=\"" + CSS.escape(
name) + "\"]");
if (again) again.focus();
});
card.addEventListener("click", () => {
y.value = name;
y.dispatchEvent(new Event("change"));
});
card.tabIndex = 0;
card.setAttribute("role", "button");
card
.setAttribute("aria-label", "Use profile " + name + (name ===
activeVal ? " (current)" : "") +
". Alt plus arrow keys move it.");
card.addEventListener(
"keydown", ev => {
if (ev.target === card && (ev.key === "Enter" || ev
.key === " ")) {
ev.preventDefault();
card.click();
}
});
galGrid.appendChild(card);
});
let newCard = document.createElement("div");
newCard.className = "ch2-gallery-new-card";
newCard.innerHTML =
'<div class="ch2-gallery-new-plus"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg></div><div class="ch2-gallery-new-label">Create new</div>';
newCard.setAttribute("data-tooltip",
"Create a new profile with default crosshair settings");
newCard
.tabIndex = 0;
newCard.setAttribute("role", "button");
newCard.setAttribute(
"aria-label", "Create a new profile");
newCard.addEventListener(
"keydown", ev => {
if (ev.target === newCard && (ev.key === "Enter" || ev.key ===
" ")) {
ev.preventDefault();
newCard.click();
}
});
newCard.addEventListener("click", async () => {
let nm = await nameDlg("New Profile", "");
if (!nm) return;
let all = N();
all[nm] = Object.assign({}, B, {
enabled: true
});
M(all);
E();
y.value = nm;
y.dispatchEvent(new Event("change"));
if (typeof ef == "function") ef("ui_click");
});
galGrid.appendChild(newCard);
};
if (typeof N === "function") {
window._ssbUpdateGallery(N(), PO(), typeof z === "function" ? z() || "" : "");
}
u.appendChild(galWrap);
u.appendChild(enableCard);
u.appendChild(g);
u.appendChild(f);
$();
let armsCard = document.createElement("div");
armsCard.className = "ch2-group-card ch2-card-arms";
let armsTitle = document.createElement("div");
armsTitle.className = "ch2-card-title";
armsTitle.textContent = "Arms";
armsCard.appendChild(armsTitle);
let armsList = document.createElement("div");
armsList.className = "ch2-card-list";
armsCard.appendChild(armsList);
let armsBody = document.createElement("div");
armsBody.className = "ch2-collapse-body";
let _fold = (body, hide) => {
body.style.maxHeight = body.scrollHeight + "px";
void body.offsetHeight;
body
.classList.toggle("collapsed", hide);
clearTimeout(body.__ssbFold);
if (!hide) body.__ssbFold = setTimeout(() => {
if (!body.classList.contains("collapsed")) body.style.maxHeight =
"";
}, 400);
};
let j = a("Hide Arms", "hideCrosshair", A, () => _fold(armsBody, A.hideCrosshair));
j.style.marginBottom = "10px";
armsList.appendChild(j);
armsBody.appendChild(n("Color", "armColor", A));
let abRow = n("Outline Color", "armBorder", A);
abRow.style.display = A.armOutlineEnabled ? "" : "none";
armsBody.appendChild(a(
"Outline", "armOutlineEnabled", A, () => {
abRow.style.display = A.armOutlineEnabled ? "" : "none"
}));
armsBody.appendChild(abRow);
armsBody.appendChild(i("Length", "armLength", A, 0, 3, .05));
armsBody.appendChild(i("Width", "armWidth", A, .05, 2, .05));
armsBody.appendChild(i("Opacity", "armOpacity", A, 0, 1, .01));
armsBody.appendChild(i("Rotation", "armRotation", A, 0, 360, 1));
armsBody.appendChild(i("Scale", "armScale", A, .1, 5, .05));
if (A.hideCrosshair) {
armsBody.classList.add("collapsed");
}
armsList.appendChild(armsBody);
f.appendChild(armsCard);
let dotCard = document.createElement("div");
dotCard.className = "ch2-group-card ch2-card-dot";
let dotTitle = document.createElement("div");
dotTitle.className = "ch2-card-title";
dotTitle.textContent = "Center Dot";
dotCard.appendChild(dotTitle);
let dotList = document.createElement("div");
dotList.className = "ch2-card-list";
dotCard.appendChild(dotList);
let dotBody = document.createElement("div");
dotBody.className = "ch2-collapse-body";
let W = a("Hide Center Dot", "hideDot", A, () => _fold(dotBody, A.hideDot));
W.style.marginBottom = "10px";
dotList.appendChild(W);
let SG = a("Hide Center Dot With Shotgun", "hideDotShotgun", A, () => {
if (window.__ssbShotgunDot) window.__ssbShotgunDot();
});
SG.style.marginBottom = "10px";
dotList.appendChild(SG);
let K = document.createElement("div");
K.className = "ch2-shape-row";
let U = {};
["dot", "plus", "still"].forEach(e => {
let t = document.createElement("button");
t.className = "ch2-shape-btn" + (A.dotShape === e ? " active" : "");
t
.textContent = e.charAt(0).toUpperCase() + e.slice(1);
t
.addEventListener("click", () => {
A.dotShape = e;
F("dotShape", e);
Object.values(U).forEach(e =>
e.classList.remove("active"));
t.classList.add(
"active");
X.style.display = e === "dot" ? "" : "none";
J
.style.display = e === "plus" ? "" : "none";
Q.style
.display = e === "still" ? "" : "none";
V.style.display =
e === "still" ? "none" : "";
Z.style.display = e === "still" ? "none" : "";
G();
Y();
ef("ui_click");
});
U[e] = t;
K.appendChild(t);
});
dotBody.appendChild(K);
let V = n("Color", "dotColor", A);
V.style.display = A.dotShape === "still" ? "none" : "";
dotBody.appendChild(V);
let Z = i("Opacity", "dotOpacity", A, 0, 1, .01);
Z.style.display = A.dotShape === "still" ? "none" : "";
dotBody.appendChild(Z);
let X = document.createElement("div");
X.style.display = A.dotShape === "dot" ? "" : "none";
let dbC = n("Outline Color", "dotBorder", A),
dbW = i("Outline Width", "dotBorderWidth", A, 0, .2, .01),
dbShow = () => {
dbC.style.display = dbW.style.display = A.dotOutlineEnabled ? "" : "none"
};
dbShow();
X.appendChild(a("Round (circle)", "dotRound", A));
X.appendChild(i("Scale",
"dotScale", A, .1, 5, .05));
X.appendChild(a("Outline", "dotOutlineEnabled", A,
dbShow));
X.appendChild(dbC);
X.appendChild(dbW);
dotBody.appendChild(X);
let J = document.createElement("div");
J.style.display = A.dotShape === "plus" ? "" : "none";
J.appendChild(i("Length",
"dotPlusLen", A, 1, 40, 1));
J.appendChild(i("Width", "dotPlusWidth", A, 1, 10,
1));
J.appendChild(i("Scale", "plusScale", A, .1, 5, .05));
dotBody.appendChild(
J);
let Q = document.createElement("div");
Q.style.display = A.dotShape === "still" ? "" : "none";
Q.appendChild(n("Color",
"staticColor", A));
Q.appendChild(i("Opacity", "staticOpacity", A, 0, 1, .01));
Q.appendChild(i("Length", "staticLength", A, 0, 3, .05));
Q.appendChild(i("Width",
"staticWidth", A, .05, 2, .05));
Q.appendChild(i("Center Gap", "staticGap", A,
0, 20, 1));
Q.appendChild(i("Scale", "stillScale", A, .1, 5, .05));
let ee = n("Outline Color", "staticBorder", A);
ee.style.display = A.staticOutlineEnabled ? "" : "none";
Q.appendChild(a("Outline",
"staticOutlineEnabled", A, () => {
ee.style.display = A.staticOutlineEnabled ? "" : "none";
G();
Y();
}));
Q.appendChild(ee);
dotBody.appendChild(Q);
if (A.hideDot) {
dotBody.classList.add("collapsed");
}
dotList.appendChild(dotBody);
f.appendChild(dotCard);
window.__ssbChRebuild = () => {
let scrollers = () => [t, t.querySelector(".ch2-right-col"), t.querySelector(
".ch2-preview-col")],
keep = scrollers().map(el => el ? el.scrollTop : 0),
ae = document.activeElement,
act = ae && t.contains(ae) && ae.getAttribute("data-ch-act");
G();
Y();
t.innerHTML = "";
e();
scrollers().forEach((el, i) => {
if (el) el.scrollTop = keep[i];
});
let back = act && t.querySelector('[data-ch-act="' + act + '"]');
if (back && back.disabled) back = t.querySelector(
".ch2-hist-btn:not(:disabled)");
if (back) back.focus({
preventScroll: true
});
};
let chH = window.__ssbChHist,
chBar = profilesCard.querySelector(".ch2-icon-bar"),
chTools = document.createElement("div"),
chRow = document.createElement("div");
chTools.className = "ch2-prof-tools";
chRow.className = "ch2-hist-row";
chBar
.replaceWith(chTools);
chTools.appendChild(chBar);
chTools.appendChild(chRow);
let chSvg = p =>
'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">' +
p + "</svg>",
chIcons = {
undo: chSvg(
'<path d="M8.5 4.5L4 9l4.5 4.5"/><path d="M4.5 9H15a5 5 0 0 1 0 10h-4"/>'
),
redo: chSvg(
'<path d="M15.5 4.5L20 9l-4.5 4.5"/><path d="M19.5 9H9a5 5 0 0 0 0 10h4"/>'
),
revert: chSvg(
'<path d="M4 12A8 8 0 1 0 6.34 6.34L4.3 8.4"/><path d="M4.3 3.9v4.5h4.5"/>'
)
};
let chBtn = (act, label, name, tip, run) => {
let b = document.createElement("button");
b.type = "button";
b.className = "ch2-hist-btn";
b.setAttribute("data-ch-act",
act);
b.setAttribute("aria-label", name);
b.setAttribute("data-tooltip",
tip);
b.innerHTML = chIcons[act] + "<span>" + label + "</span>";
b
.addEventListener("click", () => {
if (run()) ef("ui_click");
});
chRow.appendChild(b);
return b
};
let chU = chBtn("undo", "Undo", "Undo", "Undo your last crosshair change (Ctrl+Z).",
() => chH.undo()),
chR = chBtn("redo", "Redo", "Redo", "Redo the change you undid (Ctrl+Y).", () => chH
.redo()),
chV = chBtn("revert", "Revert", "Revert to Saved",
"Revert to Saved: put this profile back the way you last saved it.", () => chH
.revert());
let chPaint = () => {
chU.disabled = !chH.canUndo();
chR.disabled = !chH.canRedo();
chV.disabled = !
chH.dirty();
};
window.__ssbChPaint = chPaint;
chPaint();
let et = document.createElement("button");
et.className = "ch2-reset-btn";
et.id = "ch2-reset-crosshair";
et.textContent =
"Reset Crosshair";
et.style.display = A.enabled ? "" : "none";
et.addEventListener(
"click", async () => {
if ((await UI.confirm({
title: "Reset Crosshair",
text: "Reset all crosshair settings to their defaults?",
ok: "Reset",
danger: true
}))) {
Object.keys(B).forEach(e => {
if (e !== "enabled" && e !== "hideCrosshair") A[e] = B[
e];
});
Object.keys(A).forEach(e => F(e, A[e]));
t.innerHTML = "";
e();
G();
}
});
if (!A.enabled) et.style.setProperty("display", "none", "important");
u
.appendChild(et);
l.appendChild(u);
t.appendChild(l);
$();
Y();
if (t.__ssbPreviewDispose) t.__ssbPreviewDispose();
const previewNode = document.getElementById("ch2-preview-wrap");
const previewIntersection = window.IntersectionObserver ? new IntersectionObserver(
entries => {
if (entries[0].isIntersecting) Y();
}, {
threshold: .01
}) : null;
if (previewNode && previewIntersection) previewIntersection.observe(previewNode);
const miniRO = window.ResizeObserver ? new ResizeObserver(() => {
let w = mini.clientWidth;
if (w !== mini.__ssbW) {
mini.__ssbW = w;
renderMini();
}
}) : null;
if (miniRO) miniRO.observe(mini);
window.__ssbRenderMini = renderMini;
renderMini();
t.__ssbPreviewDispose = () => {
if (previewIntersection) previewIntersection.disconnect();
if (miniRO) miniRO.disconnect();
};
}());
setTimeout(V, 500);

      let eh = em.previousElementSibling;
      if (ep.style.maxHeight = "500px", eh && eh.children.length >= 3) {
        let eu = eh.firstElementChild.className.replace(/\b([a-zA-Z0-9_\-]*active|selected)\b/gi, "").trim(),
          e$ = null;
        function eb(e, t) {
          let o = document.createElement("div");
          o.id = e;
          o.className = eu;
          o.tabIndex = 0;
          o.setAttribute("role", "button");
          o.setAttribute("aria-pressed", "false");
          o.addEventListener("keydown", ev => {
            if (ev.key === "Enter" || ev.key === " ") {
              ev.preventDefault();
              ev.stopPropagation();
              o.click();
            }
          });
          o.innerHTML = `<div class="mod-tab-label" style="font-family:inherit;font-weight:900;color:white;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-shadow:0 2px 4px rgba(0,0,0,0.3)">${t}</div>`;
          return o;
        }
        Array.from(eh.children).forEach(e => {
          let t = Array.from(e.classList).find(e => /active|selected/i.test(e));
          if (t) e$ = t;
        });
        let ex = eb("mod-crosshair-tab", "CROSSHAIR");
        function ev() {
          em.classList.remove("mod-tab-active");
          ep.style.display = "none";
          ex.className = eu;
          if (e$) ex.classList.remove(e$);
          ex.classList.remove("mod-tab-is-active");
          ex.setAttribute("aria-pressed", "false");
          Array.from(eh.children).forEach(e => e.classList.remove("mod-native-dim"));
        }
        function e_(e, t, o, n) {
          e.addEventListener("click", () => {
            ev();
            (function () {
              let s = em.nextElementSibling;
              for (; s && s.offsetHeight < 30;) s = s.nextElementSibling;
              let o = em.getBoundingClientRect().top,
                vb = window.__ssbViewBox(),
                n = s ? s.getBoundingClientRect().top : vb.top + vb.height - 90,
                a = Math.max(150, n - o - 12) + "px";
              ep.style.maxHeight = a;
            }());
            t.style.display = "block";
            em.classList.add("mod-tab-active");
            Array.from(eh.children).forEach(c => {
              if (c !== ex) c.classList.add("mod-native-dim");
            });
            e.classList.add(e$ || "active");
            e.classList.add("mod-tab-is-active");
            e.setAttribute("aria-pressed", "true");
            if (window.__ssbRequestLayout) window.__ssbRequestLayout();
            if (n) n();
            localStorage.setItem("ch2-lastTab", o);
            ef("ui_toggletab");
          });
        }
        eh.style.display = "flex";
        eh.classList.add("mod-tab-strip");
        Array.from(eh.children).forEach(e => {
          e.style.flex = "1";
          if (e.__ssbNativeTabClick) e.removeEventListener("click", e.__ssbNativeTabClick);
          e.__ssbNativeTabClick = () => {
            ev();
            localStorage.setItem("ch2-lastTab", "native");
          };
          e.addEventListener("click", e.__ssbNativeTabClick);
        });
        e_(ex, ep, "crosshair", () => {
          ep.classList.remove("pm-enter");
          void ep.offsetWidth;
          ep.classList.add("pm-enter");
          clearTimeout(ep.__pmEnter);
          ep.__pmEnter = setTimeout(() => ep.classList.remove("pm-enter"), 400);
          Y();
          if (window.__ssbRenderMini) window.__ssbRenderMini();
        });
        eh.appendChild(ex);
        let e0 = false;
        function ew() {
          let e = localStorage.getItem("ch2-lastTab");
          if (e === "crosshair") ex.click();
          e0 = true;
        }
        let tabIntersection = window.IntersectionObserver ? new IntersectionObserver(e => {
          if (e[0].isIntersecting && !e0) ew();
          else if (!e[0].isIntersecting) e0 = false;
        }, { threshold: 0.01 }) : null;
        if (tabIntersection) tabIntersection.observe(eh);
        let ek = new MutationObserver(() => {
          let e = eh.offsetWidth > 0 || eh.offsetHeight > 0;
          if (e && !e0) ew();
          else if (!e) e0 = false;
        });
        [em, em.parentElement, em.parentElement && em.parentElement.parentElement].filter(Boolean)
          .forEach(e => ek.observe(e, { attributes: true, attributeFilter: ["style", "class"] }));
        ep.__ssbTabsDispose = () => {
          ek.disconnect();
          if (tabIntersection) tabIntersection.disconnect();
        };
      } else {
        t.appendChild(ep);
        ep.style.display = "block";
      }
    } catch (e) {
      console.error("[Crosshair Mod] injectSettings error:", e);
    }
  };

  let _ssbOwnSel = '#mod-crosshair-section,#mod-settings-footer,[id^="mod-"],[id^="ssb-"],[id^="ch2-"],style,script,link';
  function _ssbOwnRec(r) {
    let t = r.target.nodeType === 1 ? r.target : r.target.parentElement;
    if (t && t.closest(_ssbOwnSel)) return true;
    for (let n of r.addedNodes)
      if (n.nodeType === 1 && !n.matches(_ssbOwnSel)) return false;
    for (let n of r.removedNodes)
      if (n.nodeType === 1 && !n.matches(_ssbOwnSel)) return false;
    return true;
  }

  if (!document.getElementById('harmonized-ui-overrides')) {
const style = document.createElement('style');
style.id = 'harmonized-ui-overrides';
style.textContent = `/* Remove canvas focus outline (white ring on play) */
#canvas, #canvas:focus, #canvas:focus-visible { outline: none !important; -webkit-tap-highlight-color: transparent !important; }
/* Fix Manage-section button heights */
/* Force the blue (ch2-profile-btn) and red (ch2-reset-btn) buttons to match */
#mod-settings-section .ch2-profile-btn,
#mod-settings-section .ch2-reset-btn,
.ch2-profile-btn, .ch2-reset-btn {
height: 40px !important;
font-size: 14px !important;
box-sizing: border-box !important;
display: inline-flex !important;
align-items: center !important;
justify-content: center !important;
}

#mod-crosshair-section .ch2-preview-col {
gap: 0px !important;
overflow-y: auto !important;
scrollbar-width: none !important; /* Hide scrollbar for a clean look */
flex: 0 0 calc(40% - 15px) !important;
}
#mod-crosshair-section .ch2-right-col {
overflow-y: auto !important;
padding-bottom: 40px !important;
flex: 0 0 calc(60% - 15px) !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-group-card {
padding: 6px 10px !important;
margin-bottom: 6px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-card-title {
font-size: 13px !important;
margin-bottom: 4px !important;
}
#mod-crosshair-section .ch2-preview-wrap {
height: 160px !important;
margin-bottom: 4px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-control-row {
margin-bottom: 0px !important;
gap: 8px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-color {
width: 38px !important;
height: 24px !important;
border-radius: 5px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-hex {
width: 68px !important;
height: 24px !important;
font-size: 12px !important;
padding: 0 4px !important;
border-width: 1.5px !important;
border-radius: 5px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-icon-bar {
margin-top: 6px !important;
margin-bottom: 0px !important;
}

/* GALLERY button in the crosshair Profiles card */
#ch2-open-gallery-btn { height:51px !important; width:100% !important; margin:0 !important; padding:0 10px !important; border:none !important; border-radius:6px !important; outline:none !important; background:var(--ssb-yolk) !important; box-shadow:0 3px 0 var(--ssb-yolk-shadow) !important; color:#fff !important; font-family:"Nunito",system-ui,sans-serif !important; font-size:14px !important; font-weight:800 !important; letter-spacing:0.3px !important; text-transform:uppercase !important; white-space:nowrap !important; text-shadow:0 1px 2px rgba(0,0,0,0.3) !important; cursor:pointer !important; transition:all 0.1s !important; display:flex !important; align-items:center !important; justify-content:center !important; flex-direction:column !important; gap:2px !important; box-sizing:border-box !important; }
#ch2-open-gallery-btn:hover { background:var(--ssb-yolk-hi) !important; box-shadow:0 3px 0 #b33e00 !important; }
#ch2-open-gallery-btn:active { transform:translateY(2px) !important; box-shadow:0 1px 0 #b33e00 !important; }

/* Preview background swatches (Preview card title row) */
#mod-crosshair-section .ch2-bg-swatches { display:flex; align-items:center; gap:5px; }
#mod-crosshair-section .ch2-bg-swatches .ssb-new-pill { margin:0 3px 0 0; font-size:10px; vertical-align:baseline; }
#mod-crosshair-section .ch2-bg-swatch { width:18px; height:18px; margin:0; padding:0; border:2px solid #fff; border-radius:50%; box-shadow:0 0 0 1.5px rgba(12,87,111,0.45); cursor:pointer; transition:transform 0.1s; }
#mod-crosshair-section .ch2-bg-swatch:hover { transform:scale(1.15); }

/* Crosshair previews (live preview, gallery cards, mini selector) are drawn in em from a 24px wrapper. The game's
"* { font-size: 1.95vh }" would otherwise give every arm its own screen-height-based size, so arms looked twice as
big at 1440p/100% as at 720p or 200% scaling. Only elements without their own font-size inherit. */
:is(#ch2-preview-wrap, .ch2-gallery-mini-preview, .ch2-mini-tile) div:not([style*="font-size"]) { font-size: inherit !important; }
/* Mini profile selector (Profiles card) */
#mod-crosshair-section .ch2-mini-row { display:flex; gap:6px; margin:8px 0 0; min-width:0; }
#mod-crosshair-section .ch2-mini-row[hidden] { display:none; }
#mod-crosshair-section .ch2-mini-tile, #mod-crosshair-section .ch2-mini-more { flex:0 0 44px; width:44px; height:44px; margin:0; padding:0; border:2px solid transparent; border-radius:8px; box-sizing:border-box; cursor:pointer; }
#mod-crosshair-section .ch2-mini-tile { position:relative; overflow:hidden; background:#87ceeb; box-shadow:0 2px 0 var(--ssb-card-shadow); }
#mod-crosshair-section .ch2-mini-tile:hover { transform:translateY(-1px); }
#mod-crosshair-section .ch2-mini-tile.selected { border-color:#ffc900; box-shadow:0 2px 0 #d3a000; }
#mod-crosshair-section .ch2-mini-more { background:var(--ssb-yolk); box-shadow:0 2px 0 var(--ssb-yolk-shadow); color:#fff; font-family:"Nunito",system-ui,sans-serif; font-size:14px; font-weight:900; text-shadow:0 1px 2px rgba(0,0,0,0.3); }
#mod-crosshair-section .ch2-mini-more:hover { background:var(--ssb-yolk-hi); }
#mod-crosshair-section .ch2-mini-tile:focus-visible, #mod-crosshair-section .ch2-mini-more:focus-visible { outline:3px solid var(--ssb-focus); outline-offset:2px; }
.ch2-gallery-hint { margin-left:10px; font-family:"Nunito",system-ui,sans-serif; font-size:12px; font-weight:700; text-transform:none; color:var(--ssb-muted); }
.ch2-gallery-card.ch2-dragging { opacity:0.45 !important; }
.ch2-gallery-card.ch2-drop-before { box-shadow:-5px 0 0 var(--ssb-yolk), 0 4px 0 var(--ssb-card-shadow) !important; }
.ch2-gallery-card.ch2-drop-after { box-shadow:5px 0 0 var(--ssb-yolk), 0 4px 0 var(--ssb-card-shadow) !important; }

/* Gallery Styles */
.ch2-gallery-grid {
display: grid !important;
grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
gap: 16px !important;
padding: 12px 0 !important;
}
.ch2-gallery-card {
background: var(--ssb-card) !important;
border: 2px solid transparent !important;
border-radius: 10px !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow) !important;
padding: 12px !important;
cursor: pointer !important;
transition: all 0.15s ease-in-out !important;
display: flex !important;
flex-direction: column !important;
align-items: center !important;
gap: 10px !important;
}
.ch2-gallery-card:hover {
background: var(--ssb-card-hi) !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow-hi) !important;
transform: translateY(-2px) !important;
}
.ch2-gallery-card:active {
transform: translateY(2px) !important;
box-shadow: 0 1px 0 var(--ssb-card-shadow) !important;
}
.ch2-gallery-card {
position: relative !important;
overflow: visible !important;
}
.ch2-gallery-card.selected {
background: var(--ssb-card) !important;
border: 2.5px solid #ffc900 !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow) !important;
}
.ch2-gallery-card.selected:hover {
background: var(--ssb-card-hi) !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow-hi) !important;
transform: translateY(-2px) !important;
}
.ch2-gallery-card.selected:active {
transform: translateY(2px) !important;
box-shadow: 0 1px 0 var(--ssb-card-shadow) !important;
}
.ch2-gallery-card.selected .ch2-gallery-title {
color: #cf9700 !important;
}
.ch2-gallery-badge {
position: absolute !important;
top: -9px !important;
right: -9px !important;
width: 24px !important;
height: 24px !important;
border-radius: 50% !important;
background: #ffc900 !important;
box-shadow: 0 2px 0 #d3a000 !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
z-index: 6 !important;
pointer-events: none !important;
}
.ch2-gallery-actions {
position: absolute !important;
top: 16px !important;
right: 16px !important;
display: flex !important;
gap: 4px !important;
opacity: 0 !important;
transition: opacity 0.12s ease !important;
z-index: 5 !important;
}
.ch2-gallery-card:hover .ch2-gallery-actions,
.ch2-gallery-card:focus-within .ch2-gallery-actions {
opacity: 1 !important;
}
@media (hover: none) {
.ch2-gallery-actions { opacity: 1 !important; }
}
.ch2-gallery-card:focus-visible, .ch2-gallery-new-card:focus-visible {
outline: 3px solid var(--ssb-focus) !important;
outline-offset: 2px !important;
}
.ch2-gallery-abtn {
width: 24px !important;
height: 24px !important;
border: none !important;
border-radius: 6px !important;
background: var(--ssb-blue) !important;
box-shadow: 0 2px 0 var(--ssb-ink) !important;
color: #ffffff !important;
cursor: pointer !important;
display: inline-flex !important;
align-items: center !important;
justify-content: center !important;
padding: 0 !important;
transition: all 0.1s ease !important;
}
.ch2-gallery-abtn:hover {
background: var(--ssb-blue-hi) !important;
transform: translateY(-1px) !important;
}
.ch2-gallery-abtn.danger {
background: var(--ssb-red) !important;
box-shadow: 0 2px 0 var(--ssb-red-shadow) !important;
}
.ch2-gallery-abtn.danger:hover {
background: var(--ssb-red-hi) !important;
}
.ch2-gallery-abtn svg { pointer-events: none !important; }
.ch2-gallery-new-card {
background: rgba(255,255,255,0.18) !important;
border: 2.5px dashed var(--ssb-blue) !important;
border-radius: 10px !important;
cursor: pointer !important;
display: flex !important;
flex-direction: column !important;
align-items: center !important;
justify-content: center !important;
gap: 10px !important;
min-height: 150px !important;
transition: all 0.15s ease !important;
box-sizing: border-box !important;
}
.ch2-gallery-new-card:hover {
background: rgba(255,255,255,0.32) !important;
transform: translateY(-2px) !important;
}
.ch2-gallery-new-plus {
width: 42px !important;
height: 42px !important;
border-radius: 50% !important;
background: var(--ssb-yolk) !important;
box-shadow: 0 3px 0 var(--ssb-yolk-shadow) !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
}
.ch2-gallery-new-label {
color: var(--ssb-ink) !important;
font-size: 11px !important;
font-weight: 900 !important;
text-transform: uppercase !important;
text-align: center !important;
letter-spacing: 0.5px !important;
}
.ch2-gallery-mini-preview {
width: 100% !important;
height: 110px !important;
background: #87ceeb !important;
border-radius: 6px !important;
border: none !important;
position: relative !important;
overflow: hidden !important;
box-sizing: border-box !important;
}
.ch2-gallery-title {
color: var(--ssb-ink) !important;
font-size: 13.5px !important;
font-weight: 900 !important;
text-transform: uppercase !important;
text-align: center !important;
letter-spacing: 0.5px !important;
text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5) !important;
width: 100% !important;
white-space: nowrap !important;
overflow: hidden !important;
text-overflow: ellipsis !important;
}
.ch2-gallery-header {
display: flex !important;
align-items: center !important;
justify-content: space-between !important;
margin-bottom: 15px !important;
padding-bottom: 10px !important;
border-bottom: 2px solid rgba(33,106,128,0.15) !important;
}
.ch2-gallery-back-btn {
background: var(--ssb-blue) !important;
border: none !important;
outline: none !important;
box-shadow: 0 3.5px 0 var(--ssb-ink) !important;
color: #ffffff !important;
border-radius: 8px !important;
padding: 6px 14px !important;
font-size: 13px !important;
font-weight: 800 !important;
cursor: pointer !important;
transition: all 0.1s !important;
}
.ch2-gallery-back-btn:hover {
background: var(--ssb-blue-hi) !important;
box-shadow: 0 3.5px 0 var(--ssb-blue-shadow) !important;
}
.ch2-gallery-back-btn:active {
transform: translateY(2px) !important;
box-shadow: 0 1px 0 var(--ssb-ink) !important;
}

/* Force volume slider display and sizes */
#mod-volDisplay {
font-size: 16px !important;
font-weight: bold !important;
}
.mod-vol-slider {
height: 6px !important;
background: #ffffff !important;
}
.mod-vol-slider::-webkit-slider-thumb {
width: 21px !important;
height: 21px !important;
margin-top: -8px !important;
background: var(--ssb-yolk) !important;
border: 4.5px solid #fff !important;
box-sizing: border-box !important;
}
.mod-vol-slider::-moz-range-thumb {
width: 21px !important;
height: 21px !important;
background: var(--ssb-yolk) !important;
border: 4.5px solid #fff !important;
box-sizing: border-box !important;
}

/* Make the slider dot bigger */
.mod-slider::-webkit-slider-thumb, .ch2-slider::-webkit-slider-thumb {
width: 21px !important;
height: 21px !important;
border: 4.5px solid #ffffff !important;
margin-top: -7px !important; /* Center the larger dot */
}
.mod-slider::-moz-range-thumb, .ch2-slider::-moz-range-thumb {
width: 21px !important;
height: 21px !important;
border: 4.5px solid #ffffff !important;
}

/* Keep track height thin */
.ch2-slider {
height: 6px !important;
}

.ch2-label { font-size: 14px !important; }
.ch2-num, .ch2-hex {
height: 30px !important;
font-size: 14px !important;
padding: 0 8px !important;
border: 2px solid var(--ssb-blue) !important;
border-radius: 6px !important;
}
.ch2-num { width: 60px !important; }
.ch2-hex { width: 80px !important; }
`;
(document.head || document.documentElement).appendChild(style);
}
  (function() {
"use strict";
const REF_BASE_PX = 21.06;
const VAR_NAME = "--ssb-ui-scale";
const STYLE_ID = "ssb-ui-scale-style";
const GUI_STYLE_ID = "ssb-gui-scale-style";
const GUI_VAR = "--ssb-gui";
const CH_VAR = "--ssb-ch-scale";
let _guiNow = null;
function guiValue() {
let g = 1;
try {
g = +window.__ssbGuiScale();
} catch (e) {
window.__ssbErr("uiscale#5", e)
}
return g >= 0.4 && g <= 1.2 ? g : 1;
}
function applyGui() {
const g = guiValue();
if (g === _guiNow) return g;
_guNowSet(g);
return g;
}
function _guNowSet(g) {
_guiNow = g;
let el = document.getElementById(GUI_STYLE_ID);
const root = document.documentElement;
if (g === 1) {
if (el) el.remove();
if (root) root.style.removeProperty(GUI_VAR);
return;
}
if (!el) {
el = document.createElement("style");
el.id = GUI_STYLE_ID;
(document.head || root).appendChild(el);
}
el.textContent =
"html, html *:where(:not(#reticleContainer):not(#reticleContainer *):not(#reticleDot):not(#reticleDot *)) { font-size: calc(1.95 * var(--ssb-vh, 1vh) * var(" +
GUI_VAR + ", 1)); }\n" +
"html .teamLetter.red, html .teamLetter.blue { font-size: calc(3 * var(--ssb-vh, 1vh) * var(" +
GUI_VAR + ", 1)); }";
if (root) root.style.setProperty(GUI_VAR, String(g));
}
applyGui();
const ROOTS = [
"#mod-settings-section",
"#mod-crosshair-section",
"#ssb-stats-panel",
"#ssb-pinned-stats",
".vol-wrap",
"#ssb-changelog-panel",
"#ssb-intro-panel",
".ssb-star",
"#ssb-dialog-panel",
"#ssb-toast-stack",
"#ssb-update-toast",
"#mod-top-bar",
"#ssb-global-tooltip",
];
function ensureStyle() {
let el = document.getElementById(STYLE_ID);
if (!el) {
el = document.createElement("style");
el.id = STYLE_ID;
(document.head || document.documentElement).appendChild(el);
el.textContent = ROOTS.join(", ") + " { zoom: var(" + VAR_NAME + ", 1); }\n" +
".vol-wrap, #ssb-pinned-stats { zoom: calc(var(" + VAR_NAME + ", 1) * 0.85); }\n" +
"#ssb-stats-panel { min-width: min(640px, calc(96vw / var(" + VAR_NAME +
", 1))) !important; max-width: min(1160px, calc(96vw / var(" + VAR_NAME +
", 1))) !important; max-height: calc(92vh / var(" + VAR_NAME +
", 1)) !important; overflow: auto !important; }\n" +
"#ssb-changelog-panel { max-height: min(760px, calc((100vh - 36px) / var(" + VAR_NAME +
", 1))); }\n" +
"#mod-settings-section, #mod-crosshair-section { max-height: calc(min(48vh, 100vh - 330px) / var(" +
VAR_NAME + ", 1)) !important; }\n" +
"#popupInnards.mod-tab-active { height: min(calc(25em + var(--ss-space-xl) - var(--ss-space-md)), calc(100vh - 330px)); min-height: 0; margin-bottom: var(--ss-space-md) !important; }\n" +
"#popupInnards.mod-tab-active > #mod-settings-section { flex: 1 1 0; min-height: 0; max-height: none !important; }\n" +
"#popupInnards.mod-tab-active { width: min(43.5em, calc(100vw - 6em)) !important; }";
el.textContent += `
                #mod-settings-section, #mod-crosshair-section { min-width:0; container-type:inline-size; }
                #mod-settings-section .mod-item { min-width:0; gap:var(--ssb-gap); position:relative; }
                #mod-settings-section .mod-label { overflow-wrap:anywhere; min-width:0; }
                #mod-settings-section .mod-grid { column-gap:24px; }
                #mod-settings-section .mod-slider-container { flex-wrap:wrap; gap:var(--ssb-gap); }
                #mod-settings-section .mod-slider-label { min-width:0; }
                #mod-settings-section .mod-slider-inner-wrap { min-width:120px; }
                #mod-settings-section input[type=checkbox], #mod-crosshair-section .ch2-check-label input[type=checkbox] { width:1px; height:1px; }
                #mod-settings-section input:focus-visible ~ .mod-box, #mod-crosshair-section input:focus-visible ~ .ch2-check-box {
                    outline:3px solid var(--ssb-focus); outline-offset:3px;
                }
                :is(#mod-top-bar,#mod-settings-section,#mod-crosshair-section,#ssb-dialog-panel) :is(button,input,select):focus-visible,
                :is(#mod-settings-tab,#mod-crosshair-tab,.ssb-star):focus-visible { outline:3px solid var(--ssb-focus)!important; outline-offset:2px; }
                #mod-top-bar { min-width:0; }
                .ssb-settings-feedback:not(:has(> :not(:empty))) { display:none; }
                .ssb-settings-feedback { flex-basis:100%; display:flex; flex-wrap:wrap; justify-content:space-between; gap:6px; font-size:12px; font-weight:700; color:var(--ssb-ink); }
                .ssb-reload-notice { margin-left:auto; }
                .ssb-reload-pending { background:#fff1c2; color:#653c00; padding:2px 6px; border-radius:4px; }
                #mod-crosshair-section .ch2-control-row, #mod-crosshair-section .ch2-control-right { flex-wrap:wrap; }
                #mod-crosshair-section .ch2-label { white-space:normal; }
                #mod-crosshair-section .ch2-check-label { position:relative; }
                #ssb-global-tooltip { max-width:min(250px,calc((100vw - 24px) / var(${VAR_NAME}, 1)))!important; box-sizing:border-box; overflow-wrap:anywhere; }
                @container (max-width:520px) {
                    #mod-settings-section .mod-grid { grid-template-columns:minmax(0,1fr); }
                    #mod-crosshair-section .ch2-top { flex-direction:column; gap:16px; }
                    #mod-crosshair-section .ch2-preview-col { position:static; width:min(100%,300px); align-self:center; flex:none!important; }
                    #mod-crosshair-section .ch2-right-col { width:100%; }
                }
                @media (max-height:800px) {
                    #mod-top-bar .mod-jump-bar { flex-wrap:nowrap; overflow-x:auto; width:100%; padding-bottom:3px; }
                    #mod-top-bar .mod-jump-chip { flex-shrink:0; }
                    #mod-top-bar { gap:6px; padding-block:6px; }
                }
                @media (prefers-reduced-motion:reduce) {
                    :is(#mod-top-bar,#mod-settings-section,#mod-crosshair-section,#ssb-dialog-overlay,#ssb-toast-stack,#ssb-update-toast) *,
                    #ssb-global-tooltip,.ssb-star { animation:none!important; transition:none!important; scroll-behavior:auto!important; }
                }
            `;
}
return el;
}
const FIT_ROOTS = ["#mod-settings-section", "#mod-crosshair-section"];
function fitPass(globalScale) {
const vw = document.documentElement.clientWidth || window.innerWidth;
const vh = document.documentElement.clientHeight || window.innerHeight;
const MARGIN = 8;
for (const sel of FIT_ROOTS) {
const el = document.querySelector(sel);
if (!el || !el.offsetParent) continue;
const parentW = el.parentElement ? el.parentElement.clientWidth : 0;
const key = globalScale + "|" + vw + "x" + vh + "|" + parentW + "|" + el.scrollHeight + "|" + el
.childElementCount;
if (el.__ssbFitKey === key) continue;
el.__ssbFitKey = key;
let z = globalScale;
el.style.zoom = "";
for (let i = 0; i < 5; i++) {
const cw = el.clientWidth,
sw = el.scrollWidth;
const rect = el.getBoundingClientRect();
let shrink = 1;
if (cw && sw > cw) shrink = Math.min(shrink, cw / sw);
if (rect.width && rect.right > vw - MARGIN) shrink = Math.min(shrink, (vw - MARGIN - rect.left) /
rect.width);
if (shrink >= 0.999) break;
z = Math.max(0.5, Math.round(z * shrink * 0.995 * 1000) / 1000);
el.style.zoom = String(z);
}
if (z >= globalScale - 0.001 && el.style.zoom) el.style.zoom = "";
const tb = sel === "#mod-settings-section" && document.getElementById("mod-top-bar");
if (tb) tb.style.zoom = el.style.zoom;
}
}
let _last = 0,
_lastCh = 0;
function applyScale() {
if (document.hidden || document.pointerLockElement) return;
const gui = applyGui();
let base = NaN;
try {
base = parseFloat(getComputedStyle(document.documentElement).fontSize);
} catch (e) {
window.__ssbErr("uiscale#1", e)
}
let scale = base > 0 ? base / REF_BASE_PX : (window.innerHeight || 1080) / 1080;
if (!Number.isFinite(scale) || scale <= 0) scale = 1;
if (Math.abs(scale - 1) < 0.02) scale = 1;
scale = Math.round(scale * 1000) / 1000;
if (scale !== _last) {
_last = scale;
try {
document.documentElement.style.setProperty(VAR_NAME, String(scale));
} catch (e) {
window.__ssbErr("uiscale#2", e)
}
}
let ch = Math.round(scale / gui * 1000) / 1000;
if (Math.abs(ch - 1) < 0.02) ch = 1;
if (ch !== _lastCh) {
_lastCh = ch;
try {
document.documentElement.style.setProperty(CH_VAR, String(ch));
} catch (e) {
window.__ssbErr("uiscale#6", e)
}
}
try {
fitPass(scale);
} catch (e) {
window.__ssbErr("uiscale#3", e)
}
try {
if (window.__ssbPaintModTop) window.__ssbPaintModTop();
} catch (e) {
window.__ssbErr("uiscale#4", e)
}
}
let frame = null,
retry = null,
observed = [],
ro = null,
mo = null;
const nativeFrame = window.__ssbNativeFrame;
function requestLayout() {
if (document.hidden || document.pointerLockElement || frame !== null) return;
frame = nativeFrame.request(() => {
frame = null;
applyScale();
});
}
window.__ssbRequestLayout = requestLayout;
function cancelLayout() {
if (frame !== null) nativeFrame.cancel(frame);
frame = null;
clearTimeout(retry);
retry = null;
}
function bindRoots() {
const roots = FIT_ROOTS.map(sel => document.querySelector(sel)).filter(Boolean);
const targets = [...new Set(roots.concat(roots.map(el => el.parentElement)).filter(Boolean))];
if (targets.length === observed.length && targets.every((el, n) => el === observed[n])) return;
if (ro) ro.disconnect();
if (mo) mo.disconnect();
observed = targets;
if (window.ResizeObserver) {
ro = new ResizeObserver(requestLayout);
targets.forEach(el => ro.observe(el));
}
mo = new MutationObserver(records => {
if (records.some(r => !r.target.closest?.("#ch2-preview-wrap") &&
(r.type === "childList" || r.attributeName === "class" || r.attributeName === "hidden")
)) requestLayout();
});
roots.forEach(el => mo.observe(el, {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ["class", "hidden"]
}));
requestLayout();
}
function boot() {
ensureStyle();
requestLayout();
bindRoots();
window.addEventListener("resize", requestLayout);
document.addEventListener("fullscreenchange", requestLayout);
if (document.fonts) document.fonts.ready.then(requestLayout);
document.addEventListener("ssb:settings-change", requestLayout);
document.addEventListener("click", e => {
if (!e.target.closest?.(
"#mod-settings-section,#mod-crosshair-section,#mod-top-bar,#mod-settings-tab,#mod-crosshair-tab"
)) return;
requestLayout();
clearTimeout(retry);
retry = setTimeout(requestLayout, 180);
}, true);
function reconcile() {
cancelLayout();
if (document.hidden || document.pointerLockElement) {
if (ro) ro.disconnect();
if (mo) mo.disconnect();
observed = [];
} else {
bindRoots();
requestLayout();
}
}
document.addEventListener("visibilitychange", reconcile);
document.addEventListener("pointerlockchange", reconcile);
window.addEventListener("pagehide", cancelLayout);
if (document.readyState !== "complete") window.addEventListener("load", requestLayout, {
once: true
});
window.__ssbMenuPoll(() => {
bindRoots();
if (_last && !document.documentElement.style.getPropertyValue(VAR_NAME)) {
_last = 0;
requestLayout();
}
}, 2000);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();

  // ---- Lifecycle, Better HUD Coexistence & Mod Menu Integration ----
  let active = false;
  function start() {
    if (active || betterHud()) return;
    active = true;
    V();
    eW();
    if (!window._modObs) {
      window._modObs = new MutationObserver(e => {
        for (let t of e) {
          if (!_ssbOwnRec(t)) {
            clearTimeout(window._modObsT);
            window._modObsT = setTimeout(eW, 100);
            return;
          }
        }
      });
    }
    if (document.body || document.documentElement) {
      window._modObs.observe(document.body || document.documentElement, { childList: true, subtree: true });
    }
  }

  function stop() {
    if (!active) return;
    active = false;
    clearTimeout(window._modObsT);
    if (window._modObs) window._modObs.disconnect();
    const ep = document.getElementById("mod-crosshair-section");
    if (ep) {
      if (ep.__ssbPreviewDispose) ep.__ssbPreviewDispose();
      if (ep.__ssbTabsDispose) ep.__ssbTabsDispose();
      ep.remove();
    }
    document.getElementById("mod-crosshair-tab")?.remove();
    document.getElementById("mod-settings-footer")?.remove();
    document.getElementById("popupInnards")?.classList.remove("mod-tab-active");
    ["ch2-arm-style", "ch2-dot-style", "ch2-static-style", "ch2-hide-style", "ch2-spec-hide", "ch2-sg-hide"].forEach(id => {
      document.getElementById(id)?.remove();
    });
    document.getElementById("ch2-static-cont")?.remove();
  }

  function standDown() {
    if (!betterHud()) return false;
    stop();
    return true;
  }

  function openSettings() {
    if (betterHud()) return;
    const settings = document.getElementById("settings");
    if (!settings || !settings.getClientRects().length) {
      const btn = document.querySelector(".main-nav-item-bg.Pause-Settings, #Pause-Settings, [onclick*='onOptionsPopup']");
      if (btn) btn.click();
      else if (typeof pageWin.vueApp?.onOptionsPopup === "function") pageWin.vueApp.onOptionsPopup();
    }
    setTimeout(() => {
      eW();
      document.getElementById("mod-crosshair-tab")?.click();
    }, 60);
  }

  document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement) {
      window._modObs?.disconnect();
    } else if (active && !document.hidden && document.body) {
      window._modObs?.observe(document.body, { childList: true, subtree: true });
      eW();
    }
  });

  document.addEventListener("visibilitychange", () => {
    clearTimeout(window._modObsT);
    if (document.hidden) window._modObs?.disconnect();
    else if (active && !document.pointerLockElement && document.body) {
      window._modObs?.observe(document.body, { childList: true, subtree: true });
      eW();
    }
  });

  const boot = () => {
    if (standDown()) return;
    if (document.body) {
      initTooltip();
      start();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        if (!standDown()) {
          initTooltip();
          start();
        }
      }, { once: true });
    }
  };
  boot();

  let bhChecks = 0;
  const bhTimer = setInterval(() => {
    if (standDown() || ++bhChecks >= 20) clearInterval(bhTimer);
  }, 500);

  (pageWin.ssModMenuQueue = pageWin.ssModMenuQueue || []).push({
    id: "crosshair-mod",
    name: "Crosshair Mod",
    version: VERSION,
    group: "mod",
    description: "In-game Crosshair Customizer (Settings ▸ CROSSHAIR): arms, center dot/plus/static cross, outlines, live preview, saved profiles & gallery, undo/redo, and X- / SSB- / Valorant codes.",
    enable() { start(); },
    disable() { stop(); },
    openSettings
  });

  pageWin.ssCrosshairMod = {
    open: openSettings,
    enable: () => { A.enabled = true; F("enabled", true); G(); Y(); },
    disable: () => { A.enabled = false; F("enabled", false); G(); Y(); },
    isEnabled: () => Boolean(A.enabled),
    exportCode: () => packCrosshair(A),
    importCode: code => {
      const p = unpackCrosshair(String(code || "").trim());
      _chTrack();
      Object.assign(A, p, { enabled: true });
      Object.keys(B).forEach(k => F(k, A[k]));
      O("");
      _chCommit();
      G();
      Y();
      return p;
    },
    version: VERSION
  };
})();
