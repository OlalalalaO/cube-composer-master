/*! Sortable 1.10.1 - MIT | git://github.com/SortableJS/Sortable.git */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sortable = e() }(this, function () { "use strict"; function o(t) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function a() { return (a = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]) } return t }).apply(this, arguments) } function I(i) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}, e = Object.keys(r); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) { return Object.getOwnPropertyDescriptor(r, t).enumerable }))), e.forEach(function (t) { var e, n, o; e = i, o = r[n = t], n in e ? Object.defineProperty(e, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = o }) } return i } function l(t, e) { if (null == t) return {}; var n, o, i = function (t, e) { if (null == t) return {}; var n, o, i = {}, r = Object.keys(t); for (o = 0; o < r.length; o++)n = r[o], 0 <= e.indexOf(n) || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t); for (o = 0; o < r.length; o++)n = r[o], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i } function e(t) { return function (t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n } }(t) || function (t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } function t(t) { if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t) } var w = t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), E = t(/Edge/i), c = t(/firefox/i), s = t(/safari/i) && !t(/chrome/i) && !t(/android/i), n = t(/iP(ad|od|hone)/i), i = t(/chrome/i) && t(/android/i), r = { capture: !1, passive: !1 }; function u(t, e, n) { t.addEventListener(e, n, !w && r) } function d(t, e, n) { t.removeEventListener(e, n, !w && r) } function h(t, e) { if (e) { if (">" === e[0] && (e = e.substring(1)), t) try { if (t.matches) return t.matches(e); if (t.msMatchesSelector) return t.msMatchesSelector(e); if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e) } catch (t) { return !1 } return !1 } } function P(t, e, n, o) { if (t) { n = n || document; do { if (null != e && (">" === e[0] ? t.parentNode === n && h(t, e) : h(t, e)) || o && t === n) return t; if (t === n) break } while (t = (i = t).host && i !== document && i.host.nodeType ? i.host : i.parentNode) } var i; return null } var f, p = /\s+/g; function k(t, e, n) { if (t && e) if (t.classList) t.classList[n ? "add" : "remove"](e); else { var o = (" " + t.className + " ").replace(p, " ").replace(" " + e + " ", " "); t.className = (o + (n ? " " + e : "")).replace(p, " ") } } function R(t, e, n) { var o = t && t.style; if (o) { if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e]; e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px") } } function v(t, e) { var n = ""; if ("string" == typeof t) n = t; else do { var o = R(t, "transform"); o && "none" !== o && (n = o + " " + n) } while (!e && (t = t.parentNode)); var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix; return i && new i(n) } function g(t, e, n) { if (t) { var o = t.getElementsByTagName(e), i = 0, r = o.length; if (n) for (; i < r; i++)n(o[i], i); return o } return [] } function N() { return w ? document.documentElement : document.scrollingElement } function X(t, e, n, o, i) { if (t.getBoundingClientRect || t === window) { var r, a, l, s, c, u, d; if (d = t !== window && t !== N() ? (a = (r = t.getBoundingClientRect()).top, l = r.left, s = r.bottom, c = r.right, u = r.height, r.width) : (l = a = 0, s = window.innerHeight, c = window.innerWidth, u = window.innerHeight, window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !w)) do { if (i && i.getBoundingClientRect && ("none" !== R(i, "transform") || n && "static" !== R(i, "position"))) { var h = i.getBoundingClientRect(); a -= h.top + parseInt(R(i, "border-top-width")), l -= h.left + parseInt(R(i, "border-left-width")), s = a + r.height, c = l + r.width; break } } while (i = i.parentNode); if (o && t !== window) { var f = v(i || t), p = f && f.a, g = f && f.d; f && (s = (a /= g) + (u /= g), c = (l /= p) + (d /= p)) } return { top: a, left: l, bottom: s, right: c, width: d, height: u } } } function Y(t, e, n) { for (var o = H(t, !0), i = X(t)[e]; o;) { var r = X(o)[n]; if (!("top" === n || "left" === n ? r <= i : i <= r)) return o; if (o === N()) break; o = H(o, !1) } return !1 } function m(t, e, n) { for (var o = 0, i = 0, r = t.children; i < r.length;) { if ("none" !== r[i].style.display && r[i] !== Rt.ghost && r[i] !== Rt.dragged && P(r[i], n.draggable, t, !1)) { if (o === e) return r[i]; o++ } i++ } return null } function B(t, e) { for (var n = t.lastElementChild; n && (n === Rt.ghost || "none" === R(n, "display") || e && !h(n, e));)n = n.previousElementSibling; return n || null } function F(t, e) { var n = 0; if (!t || !t.parentNode) return -1; for (; t = t.previousElementSibling;)"TEMPLATE" === t.nodeName.toUpperCase() || t === Rt.clone || e && !h(t, e) || n++; return n } function b(t) { var e = 0, n = 0, o = N(); if (t) do { var i = v(t), r = i.a, a = i.d; e += t.scrollLeft * r, n += t.scrollTop * a } while (t !== o && (t = t.parentNode)); return [e, n] } function H(t, e) { if (!t || !t.getBoundingClientRect) return N(); var n = t, o = !1; do { if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) { var i = R(n); if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) { if (!n.getBoundingClientRect || n === document.body) return N(); if (o || e) return n; o = !0 } } } while (n = n.parentNode); return N() } function y(t, e) { return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width) } function D(e, n) { return function () { if (!f) { var t = arguments; 1 === t.length ? e.call(this, t[0]) : e.apply(this, t), f = setTimeout(function () { f = void 0 }, n) } } } function L(t, e, n) { t.scrollLeft += e, t.scrollTop += n } function _(t) { var e = window.Polymer, n = window.jQuery || window.Zepto; return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0) } function S(t, e) { R(t, "position", "absolute"), R(t, "top", e.top), R(t, "left", e.left), R(t, "width", e.width), R(t, "height", e.height) } function C(t) { R(t, "position", ""), R(t, "top", ""), R(t, "left", ""), R(t, "width", ""), R(t, "height", "") } var j = "Sortable" + (new Date).getTime(); function T() { var e, o = []; return { captureAnimationState: function () { o = [], this.options.animation && [].slice.call(this.el.children).forEach(function (t) { if ("none" !== R(t, "display") && t !== Rt.ghost) { o.push({ target: t, rect: X(t) }); var e = I({}, o[o.length - 1].rect); if (t.thisAnimationDuration) { var n = v(t, !0); n && (e.top -= n.f, e.left -= n.e) } t.fromRect = e } }) }, addAnimationState: function (t) { o.push(t) }, removeAnimationState: function (t) { o.splice(function (t, e) { for (var n in t) if (t.hasOwnProperty(n)) for (var o in e) if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n); return -1 }(o, { target: t }), 1) }, animateAll: function (t) { var c = this; if (!this.options.animation) return clearTimeout(e), void ("function" == typeof t && t()); var u = !1, d = 0; o.forEach(function (t) { var e = 0, n = t.target, o = n.fromRect, i = X(n), r = n.prevFromRect, a = n.prevToRect, l = t.rect, s = v(n, !0); s && (i.top -= s.f, i.left -= s.e), n.toRect = i, n.thisAnimationDuration && y(r, i) && !y(o, i) && (l.top - i.top) / (l.left - i.left) == (o.top - i.top) / (o.left - i.left) && (e = function (t, e, n, o) { return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation }(l, r, a, c.options)), y(i, o) || (n.prevFromRect = o, n.prevToRect = i, e || (e = c.options.animation), c.animate(n, l, i, e)), e && (u = !0, d = Math.max(d, e), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function () { n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null }, e), n.thisAnimationDuration = e) }), clearTimeout(e), u ? e = setTimeout(function () { "function" == typeof t && t() }, d) : "function" == typeof t && t(), o = [] }, animate: function (t, e, n, o) { if (o) { R(t, "transition", ""), R(t, "transform", ""); var i = v(this.el), r = i && i.a, a = i && i.d, l = (e.left - n.left) / (r || 1), s = (e.top - n.top) / (a || 1); t.animatingX = !!l, t.animatingY = !!s, R(t, "transform", "translate3d(" + l + "px," + s + "px,0)"), function (t) { t.offsetWidth }(t), R(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), R(t, "transform", "translate3d(0,0,0)"), "number" == typeof t.animated && clearTimeout(t.animated), t.animated = setTimeout(function () { R(t, "transition", ""), R(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1 }, o) } } } } var x = [], M = { initializeByDefault: !0 }, O = { mount: function (t) { for (var e in M) !M.hasOwnProperty(e) || e in t || (t[e] = M[e]); x.push(t) }, pluginEvent: function (e, n, o) { var t = this; this.eventCanceled = !1, o.cancel = function () { t.eventCanceled = !0 }; var i = e + "Global"; x.forEach(function (t) { n[t.pluginName] && (n[t.pluginName][i] && n[t.pluginName][i](I({ sortable: n }, o)), n.options[t.pluginName] && n[t.pluginName][e] && n[t.pluginName][e](I({ sortable: n }, o))) }) }, initializePlugins: function (o, i, r, t) { for (var e in x.forEach(function (t) { var e = t.pluginName; if (o.options[e] || t.initializeByDefault) { var n = new t(o, i, o.options); n.sortable = o, n.options = o.options, o[e] = n, a(r, n.defaults) } }), o.options) if (o.options.hasOwnProperty(e)) { var n = this.modifyOption(o, e, o.options[e]); void 0 !== n && (o.options[e] = n) } }, getEventProperties: function (e, n) { var o = {}; return x.forEach(function (t) { "function" == typeof t.eventProperties && a(o, t.eventProperties.call(n[t.pluginName], e)) }), o }, modifyOption: function (e, n, o) { var i; return x.forEach(function (t) { e[t.pluginName] && t.optionListeners && "function" == typeof t.optionListeners[n] && (i = t.optionListeners[n].call(e[t.pluginName], o)) }), i } }; function A(t) { var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, c = t.newIndex, u = t.oldDraggableIndex, d = t.newDraggableIndex, h = t.originalEvent, f = t.putSortable, p = t.extraEventProperties; if (e = e || n && n[j]) { var g, v = e.options, m = "on" + o.charAt(0).toUpperCase() + o.substr(1); !window.CustomEvent || w || E ? (g = document.createEvent("Event")).initEvent(o, !0, !0) : g = new CustomEvent(o, { bubbles: !0, cancelable: !0 }), g.to = a || n, g.from = l || n, g.item = i || n, g.clone = r, g.oldIndex = s, g.newIndex = c, g.oldDraggableIndex = u, g.newDraggableIndex = d, g.originalEvent = h, g.pullMode = f ? f.lastPutMode : void 0; var b = I({}, p, O.getEventProperties(o, e)); for (var y in b) g[y] = b[y]; n && n.dispatchEvent(g), v[m] && v[m].call(e, g) } } function K(t, e, n) { var o = 2 < arguments.length && void 0 !== n ? n : {}, i = o.evt, r = l(o, ["evt"]); O.pluginEvent.bind(Rt)(t, e, I({ dragEl: z, parentEl: G, ghostEl: U, rootEl: q, nextEl: V, lastDownEl: Z, cloneEl: Q, cloneHidden: $, dragStarted: dt, putSortable: it, activeSortable: Rt.active, originalEvent: i, oldIndex: J, oldDraggableIndex: et, newIndex: tt, newDraggableIndex: nt, hideGhostForTarget: Nt, unhideGhostForTarget: It, cloneNowHidden: function () { $ = !0 }, cloneNowShown: function () { $ = !1 }, dispatchSortableEvent: function (t) { W({ sortable: e, name: t, originalEvent: i }) } }, r)) } function W(t) { A(I({ putSortable: it, cloneEl: Q, targetEl: z, rootEl: q, oldIndex: J, oldDraggableIndex: et, newIndex: tt, newDraggableIndex: nt }, t)) } var z, G, U, q, V, Z, Q, $, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, vt = !1, mt = !1, bt = [], yt = !1, wt = !1, Et = [], Dt = !1, _t = [], St = "undefined" != typeof document, Ct = n, Tt = E || w ? "cssFloat" : "float", xt = St && !i && !n && "draggable" in document.createElement("div"), Mt = function () { if (St) { if (w) return !1; var t = document.createElement("x"); return t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents } }(), Ot = function (t, e) { var n = R(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), i = m(t, 0, e), r = m(t, 1, e), a = i && R(i), l = r && R(r), s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + X(i).width, c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + X(r).width; if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal"; if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal"; if (i && a.float && "none" !== a.float) { var u = "left" === a.float ? "left" : "right"; return !r || "both" !== l.clear && l.clear !== u ? "horizontal" : "vertical" } return i && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || o <= s && "none" === n[Tt] || r && "none" === n[Tt] && o < s + c) ? "vertical" : "horizontal" }, At = function (t) { function s(a, l) { return function (t, e, n, o) { var i = t.options.group.name && e.options.group.name && t.options.group.name === e.options.group.name; if (null == a && (l || i)) return !0; if (null == a || !1 === a) return !1; if (l && "clone" === a) return a; if ("function" == typeof a) return s(a(t, e, n, o), l)(t, e, n, o); var r = (l ? t : e).options.group.name; return !0 === a || "string" == typeof a && a === r || a.join && -1 < a.indexOf(r) } } var e = {}, n = t.group; n && "object" == o(n) || (n = { name: n }), e.name = n.name, e.checkPull = s(n.pull, !0), e.checkPut = s(n.put), e.revertClone = n.revertClone, t.group = e }, Nt = function () { !Mt && U && R(U, "display", "none") }, It = function () { !Mt && U && R(U, "display", "") }; St && document.addEventListener("click", function (t) { if (mt) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), mt = !1 }, !0); function Pt(t) { if (z) { var e = function (r, a) { var l; return bt.some(function (t) { if (!B(t)) { var e = X(t), n = t[j].options.emptyInsertThreshold, o = r >= e.left - n && r <= e.right + n, i = a >= e.top - n && a <= e.bottom + n; return n && o && i ? l = t : void 0 } }), l }((t = t.touches ? t.touches[0] : t).clientX, t.clientY); if (e) { var n = {}; for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]); n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[j]._onDragOver(n) } } } function kt(t) { z && z.parentNode[j]._isOutsideThisEl(t.target) } function Rt(t, e) { if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t)); this.el = t, this.options = e = a({}, e), t[j] = this; var n = { group: null, sort: !0, disabled: !1, store: null, handle: null, draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*", swapThreshold: 1, invertSwap: !1, invertedSwapThreshold: null, removeCloneOnHide: !0, direction: function () { return Ot(t, this.options) }, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: !0, animation: 0, easing: null, setData: function (t, e) { t.setData("Text", e.textContent) }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: "data-id", delay: 0, delayOnTouchOnly: !1, touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1, forceFallback: !1, fallbackClass: "sortable-fallback", fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: !1 !== Rt.supportPointer && "PointerEvent" in window, emptyInsertThreshold: 5 }; for (var o in O.initializePlugins(this, t, n), n) o in e || (e[o] = n[o]); for (var i in At(e), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this)); this.nativeDraggable = !e.forceFallback && xt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? u(t, "pointerdown", this._onTapStart) : (u(t, "mousedown", this._onTapStart), u(t, "touchstart", this._onTapStart)), this.nativeDraggable && (u(t, "dragover", this), u(t, "dragenter", this)), bt.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), a(this, T()) } function Xt(t, e, n, o, i, r, a, l) { var s, c, u = t[j], d = u.options.onMove; return !window.CustomEvent || w || E ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move", { bubbles: !0, cancelable: !0 }), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || X(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), d && (c = d.call(u, s, a)), c } function Yt(t) { t.draggable = !1 } function Bt() { Dt = !1 } function Ft(t) { for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;)o += e.charCodeAt(n); return o.toString(36) } function Ht(t) { return setTimeout(t, 0) } function Lt(t) { return clearTimeout(t) } Rt.prototype = { constructor: Rt, _isOutsideThisEl: function (t) { this.el.contains(t) || t === this.el || (ht = null) }, _getDirection: function (t, e) { return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, z) : this.options.direction }, _onTapStart: function (e) { if (e.cancelable) { var n = this, o = this.el, t = this.options, i = t.preventOnFilter, r = e.type, a = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e, l = (a || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, c = t.filter; if (function (t) { _t.length = 0; var e = t.getElementsByTagName("input"), n = e.length; for (; n--;) { var o = e[n]; o.checked && _t.push(o) } }(o), !z && !(/mousedown|pointerdown/.test(r) && 0 !== e.button || t.disabled || s.isContentEditable || (l = P(l, t.draggable, o, !1)) && l.animated || Z === l)) { if (J = F(l), et = F(l, t.draggable), "function" == typeof c) { if (c.call(this, e, l, this)) return W({ sortable: n, rootEl: s, name: "filter", targetEl: l, toEl: o, fromEl: o }), K("filter", n, { evt: e }), void (i && e.cancelable && e.preventDefault()) } else if (c && (c = c.split(",").some(function (t) { if (t = P(s, t.trim(), o, !1)) return W({ sortable: n, rootEl: t, name: "filter", targetEl: l, fromEl: o, toEl: o }), K("filter", n, { evt: e }), !0 }))) return void (i && e.cancelable && e.preventDefault()); t.handle && !P(s, t.handle, o, !1) || this._prepareDragStart(e, a, l) } } }, _prepareDragStart: function (t, e, n) { var o, i = this, r = i.el, a = i.options, l = r.ownerDocument; if (n && !z && n.parentNode === r) { var s = X(n); if (q = r, G = (z = n).parentNode, V = z.nextSibling, Z = n, ot = a.group, rt = { target: Rt.dragged = z, clientX: (e || t).clientX, clientY: (e || t).clientY }, ct = rt.clientX - s.left, ut = rt.clientY - s.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, z.style["will-change"] = "all", o = function () { K("delayEnded", i, { evt: t }), Rt.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !c && i.nativeDraggable && (z.draggable = !0), i._triggerDragStart(t, e), W({ sortable: i, name: "choose", originalEvent: t }), k(z, a.chosenClass, !0)) }, a.ignore.split(",").forEach(function (t) { g(z, t.trim(), Yt) }), u(l, "dragover", Pt), u(l, "mousemove", Pt), u(l, "touchmove", Pt), u(l, "mouseup", i._onDrop), u(l, "touchend", i._onDrop), u(l, "touchcancel", i._onDrop), c && this.nativeDraggable && (this.options.touchStartThreshold = 4, z.draggable = !0), K("delayStart", this, { evt: t }), !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (E || w)) o(); else { if (Rt.eventCanceled) return void this._onDrop(); u(l, "mouseup", i._disableDelayedDrag), u(l, "touchend", i._disableDelayedDrag), u(l, "touchcancel", i._disableDelayedDrag), u(l, "mousemove", i._delayedDragTouchMoveHandler), u(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && u(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, a.delay) } } }, _delayedDragTouchMoveHandler: function (t) { var e = t.touches ? t.touches[0] : t; Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag() }, _disableDelayedDrag: function () { z && Yt(z), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents() }, _disableDelayedDragEvents: function () { var t = this.el.ownerDocument; d(t, "mouseup", this._disableDelayedDrag), d(t, "touchend", this._disableDelayedDrag), d(t, "touchcancel", this._disableDelayedDrag), d(t, "mousemove", this._delayedDragTouchMoveHandler), d(t, "touchmove", this._delayedDragTouchMoveHandler), d(t, "pointermove", this._delayedDragTouchMoveHandler) }, _triggerDragStart: function (t, e) { e = e || "touch" == t.pointerType && t, !this.nativeDraggable || e ? this.options.supportPointer ? u(document, "pointermove", this._onTouchMove) : u(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (u(z, "dragend", this), u(q, "dragstart", this._onDragStart)); try { document.selection ? Ht(function () { document.selection.empty() }) : window.getSelection().removeAllRanges() } catch (t) { } }, _dragStarted: function (t, e) { if (vt = !1, q && z) { K("dragStarted", this, { evt: e }), this.nativeDraggable && u(document, "dragover", kt); var n = this.options; t || k(z, n.dragClass, !1), k(z, n.ghostClass, !0), Rt.active = this, t && this._appendGhost(), W({ sortable: this, name: "start", originalEvent: e }) } else this._nulling() }, _emulateDragOver: function () { if (at) { this._lastX = at.clientX, this._lastY = at.clientY, Nt(); for (var t = document.elementFromPoint(at.clientX, at.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(at.clientX, at.clientY)) !== e;)e = t; if (z.parentNode[j]._isOutsideThisEl(t), e) do { if (e[j]) { if (e[j]._onDragOver({ clientX: at.clientX, clientY: at.clientY, target: t, rootEl: e }) && !this.options.dragoverBubble) break } t = e } while (e = e.parentNode); It() } }, _onTouchMove: function (t) { if (rt) { var e = this.options, n = e.fallbackTolerance, o = e.fallbackOffset, i = t.touches ? t.touches[0] : t, r = U && v(U), a = U && r && r.a, l = U && r && r.d, s = Ct && gt && b(gt), c = (i.clientX - rt.clientX + o.x) / (a || 1) + (s ? s[0] - Et[0] : 0) / (a || 1), u = (i.clientY - rt.clientY + o.y) / (l || 1) + (s ? s[1] - Et[1] : 0) / (l || 1); if (!Rt.active && !vt) { if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return; this._onDragStart(t, !0) } if (U) { r ? (r.e += c - (lt || 0), r.f += u - (st || 0)) : r = { a: 1, b: 0, c: 0, d: 1, e: c, f: u }; var d = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")"); R(U, "webkitTransform", d), R(U, "mozTransform", d), R(U, "msTransform", d), R(U, "transform", d), lt = c, st = u, at = i } t.cancelable && t.preventDefault() } }, _appendGhost: function () { if (!U) { var t = this.options.fallbackOnBody ? document.body : q, e = X(z, !0, Ct, !0, t), n = this.options; if (Ct) { for (gt = t; "static" === R(gt, "position") && "none" === R(gt, "transform") && gt !== document;)gt = gt.parentNode; gt !== document.body && gt !== document.documentElement ? (gt === document && (gt = N()), e.top += gt.scrollTop, e.left += gt.scrollLeft) : gt = N(), Et = b(gt) } k(U = z.cloneNode(!0), n.ghostClass, !1), k(U, n.fallbackClass, !0), k(U, n.dragClass, !0), R(U, "transition", ""), R(U, "transform", ""), R(U, "box-sizing", "border-box"), R(U, "margin", 0), R(U, "top", e.top), R(U, "left", e.left), R(U, "width", e.width), R(U, "height", e.height), R(U, "opacity", "0.8"), R(U, "position", Ct ? "absolute" : "fixed"), R(U, "zIndex", "100000"), R(U, "pointerEvents", "none"), Rt.ghost = U, t.appendChild(U), R(U, "transform-origin", ct / parseInt(U.style.width) * 100 + "% " + ut / parseInt(U.style.height) * 100 + "%") } }, _onDragStart: function (t, e) { var n = this, o = t.dataTransfer, i = n.options; K("dragStart", this, { evt: t }), Rt.eventCanceled ? this._onDrop() : (K("setupClone", this), Rt.eventCanceled || ((Q = _(z)).draggable = !1, Q.style["will-change"] = "", this._hideClone(), k(Q, this.options.chosenClass, !1), Rt.clone = Q), n.cloneId = Ht(function () { K("clone", n), Rt.eventCanceled || (n.options.removeCloneOnHide || q.insertBefore(Q, z), n._hideClone(), W({ sortable: n, name: "clone" })) }), e || k(z, i.dragClass, !0), e ? (mt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (d(document, "mouseup", n._onDrop), d(document, "touchend", n._onDrop), d(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, z)), u(document, "drop", n), R(z, "transform", "translateZ(0)")), vt = !0, n._dragStartId = Ht(n._dragStarted.bind(n, e, t)), u(document, "selectstart", n), dt = !0, s && R(document.body, "user-select", "none")) }, _onDragOver: function (n) { var o, i, r, a, l = this.el, s = n.target, e = this.options, t = e.group, c = Rt.active, u = ot === t, d = e.sort, h = it || c, f = this, p = !1; if (!Dt) { if (void 0 !== n.preventDefault && n.cancelable && n.preventDefault(), s = P(s, e.draggable, l, !0), M("dragOver"), Rt.eventCanceled) return p; if (z.contains(n.target) || s.animated && s.animatingX && s.animatingY || f._ignoreWhileAnimating === s) return A(!1); if (mt = !1, c && !e.disabled && (u ? d || (r = !q.contains(z)) : it === this || (this.lastPutMode = ot.checkPull(this, c, z, n)) && t.checkPut(this, c, z, n))) { if (a = "vertical" === this._getDirection(n, s), o = X(z), M("dragOverValid"), Rt.eventCanceled) return p; if (r) return G = q, O(), this._hideClone(), M("revert"), Rt.eventCanceled || (V ? q.insertBefore(z, V) : q.appendChild(z)), A(!0); var g = B(l, e.draggable); if (!g || function (t, e, n) { var o = X(B(n.el, n.options.draggable)); return e ? t.clientX > o.right + 10 || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + 10 }(n, a, this) && !g.animated) { if (g === z) return A(!1); if (g && l === n.target && (s = g), s && (i = X(s)), !1 !== Xt(q, l, z, o, s, i, n, !!s)) return O(), l.appendChild(z), G = l, N(), A(!0) } else if (s.parentNode === l) { i = X(s); var v, m, b, y = z.parentNode !== l, w = !function (t, e, n) { var o = n ? t.left : t.top, i = n ? t.right : t.bottom, r = n ? t.width : t.height, a = n ? e.left : e.top, l = n ? e.right : e.bottom, s = n ? e.width : e.height; return o === a || i === l || o + r / 2 === a + s / 2 }(z.animated && z.toRect || o, s.animated && s.toRect || i, a), E = a ? "top" : "left", D = Y(s, "top", "top") || Y(z, "top", "top"), _ = D ? D.scrollTop : void 0; if (ht !== s && (m = i[E], yt = !1, wt = !w && e.invertSwap || y), 0 !== (v = function (t, e, n, o, i, r, a, l) { var s = o ? t.clientY : t.clientX, c = o ? n.height : n.width, u = o ? n.top : n.left, d = o ? n.bottom : n.right, h = !1; if (!a) if (l && pt < c * i) { if (!yt && (1 === ft ? u + c * r / 2 < s : s < d - c * r / 2) && (yt = !0), yt) h = !0; else if (1 === ft ? s < u + pt : d - pt < s) return -ft } else if (u + c * (1 - i) / 2 < s && s < d - c * (1 - i) / 2) return function (t) { return F(z) < F(t) ? 1 : -1 }(e); if ((h = h || a) && (s < u + c * r / 2 || d - c * r / 2 < s)) return u + c / 2 < s ? 1 : -1; return 0 }(n, s, i, a, w ? 1 : e.swapThreshold, null == e.invertedSwapThreshold ? e.swapThreshold : e.invertedSwapThreshold, wt, ht === s))) for (var S = F(z); S -= v, (b = G.children[S]) && ("none" === R(b, "display") || b === U);); if (0 === v || b === s) return A(!1); ft = v; var C = (ht = s).nextElementSibling, T = !1, x = Xt(q, l, z, o, s, i, n, T = 1 === v); if (!1 !== x) return 1 !== x && -1 !== x || (T = 1 === x), Dt = !0, setTimeout(Bt, 30), O(), T && !C ? l.appendChild(z) : s.parentNode.insertBefore(z, T ? C : s), D && L(D, 0, _ - D.scrollTop), G = z.parentNode, void 0 === m || wt || (pt = Math.abs(m - X(s)[E])), N(), A(!0) } if (l.contains(z)) return A(!1) } return !1 } function M(t, e) { K(t, f, I({ evt: n, isOwner: u, axis: a ? "vertical" : "horizontal", revert: r, dragRect: o, targetRect: i, canSort: d, fromSortable: h, target: s, completed: A, onMove: function (t, e) { return Xt(q, l, z, o, t, X(t), n, e) }, changed: N }, e)) } function O() { M("dragOverAnimationCapture"), f.captureAnimationState(), f !== h && h.captureAnimationState() } function A(t) { return M("dragOverCompleted", { insertion: t }), t && (u ? c._hideClone() : c._showClone(f), f !== h && (k(z, it ? it.options.ghostClass : c.options.ghostClass, !1), k(z, e.ghostClass, !0)), it !== f && f !== Rt.active ? it = f : f === Rt.active && it && (it = null), h === f && (f._ignoreWhileAnimating = s), f.animateAll(function () { M("dragOverAnimationComplete"), f._ignoreWhileAnimating = null }), f !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (s === z && !z.animated || s === l && !s.animated) && (ht = null), e.dragoverBubble || n.rootEl || s === document || (z.parentNode[j]._isOutsideThisEl(n.target), t || Pt(n)), !e.dragoverBubble && n.stopPropagation && n.stopPropagation(), p = !0 } function N() { tt = F(z), nt = F(z, e.draggable), W({ sortable: f, name: "change", toEl: l, newIndex: tt, newDraggableIndex: nt, originalEvent: n }) } }, _ignoreWhileAnimating: null, _offMoveEvents: function () { d(document, "mousemove", this._onTouchMove), d(document, "touchmove", this._onTouchMove), d(document, "pointermove", this._onTouchMove), d(document, "dragover", Pt), d(document, "mousemove", Pt), d(document, "touchmove", Pt) }, _offUpEvents: function () { var t = this.el.ownerDocument; d(t, "mouseup", this._onDrop), d(t, "touchend", this._onDrop), d(t, "pointerup", this._onDrop), d(t, "touchcancel", this._onDrop), d(document, "selectstart", this) }, _onDrop: function (t) { var e = this.el, n = this.options; tt = F(z), nt = F(z, n.draggable), K("drop", this, { evt: t }), G = z && z.parentNode, tt = F(z), nt = F(z, n.draggable), Rt.eventCanceled || (yt = wt = vt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Lt(this.cloneId), Lt(this._dragStartId), this.nativeDraggable && (d(document, "drop", this), d(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), s && R(document.body, "user-select", ""), t && (dt && (t.cancelable && t.preventDefault(), n.dropBubble || t.stopPropagation()), U && U.parentNode && U.parentNode.removeChild(U), (q === G || it && "clone" !== it.lastPutMode) && Q && Q.parentNode && Q.parentNode.removeChild(Q), z && (this.nativeDraggable && d(z, "dragend", this), Yt(z), z.style["will-change"] = "", dt && !vt && k(z, it ? it.options.ghostClass : this.options.ghostClass, !1), k(z, this.options.chosenClass, !1), W({ sortable: this, name: "unchoose", toEl: G, newIndex: null, newDraggableIndex: null, originalEvent: t }), q !== G ? (0 <= tt && (W({ rootEl: G, name: "add", toEl: G, fromEl: q, originalEvent: t }), W({ sortable: this, name: "remove", toEl: G, originalEvent: t }), W({ rootEl: G, name: "sort", toEl: G, fromEl: q, originalEvent: t }), W({ sortable: this, name: "sort", toEl: G, originalEvent: t })), it && it.save()) : tt !== J && 0 <= tt && (W({ sortable: this, name: "update", toEl: G, originalEvent: t }), W({ sortable: this, name: "sort", toEl: G, originalEvent: t })), Rt.active && (null != tt && -1 !== tt || (tt = J, nt = et), W({ sortable: this, name: "end", toEl: G, originalEvent: t }), this.save())))), this._nulling() }, _nulling: function () { K("nulling", this), q = z = G = U = V = Q = Z = $ = rt = at = dt = tt = nt = J = et = ht = ft = it = ot = Rt.dragged = Rt.ghost = Rt.clone = Rt.active = null, _t.forEach(function (t) { t.checked = !0 }), _t.length = lt = st = 0 }, handleEvent: function (t) { switch (t.type) { case "drop": case "dragend": this._onDrop(t); break; case "dragenter": case "dragover": z && (this._onDragOver(t), function (t) { t.dataTransfer && (t.dataTransfer.dropEffect = "move"); t.cancelable && t.preventDefault() }(t)); break; case "selectstart": t.preventDefault() } }, toArray: function () { for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++)P(t = n[o], r.draggable, this.el, !1) && e.push(t.getAttribute(r.dataIdAttr) || Ft(t)); return e }, sort: function (t) { var o = {}, i = this.el; this.toArray().forEach(function (t, e) { var n = i.children[e]; P(n, this.options.draggable, i, !1) && (o[t] = n) }, this), t.forEach(function (t) { o[t] && (i.removeChild(o[t]), i.appendChild(o[t])) }) }, save: function () { var t = this.options.store; t && t.set && t.set(this) }, closest: function (t, e) { return P(t, e || this.options.draggable, this.el, !1) }, option: function (t, e) { var n = this.options; if (void 0 === e) return n[t]; var o = O.modifyOption(this, t, e); n[t] = void 0 !== o ? o : e, "group" === t && At(n) }, destroy: function () { K("destroy", this); var t = this.el; t[j] = null, d(t, "mousedown", this._onTapStart), d(t, "touchstart", this._onTapStart), d(t, "pointerdown", this._onTapStart), this.nativeDraggable && (d(t, "dragover", this), d(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function (t) { t.removeAttribute("draggable") }), this._onDrop(), bt.splice(bt.indexOf(this.el), 1), this.el = t = null }, _hideClone: function () { if (!$) { if (K("hideClone", this), Rt.eventCanceled) return; R(Q, "display", "none"), this.options.removeCloneOnHide && Q.parentNode && Q.parentNode.removeChild(Q), $ = !0 } }, _showClone: function (t) { if ("clone" === t.lastPutMode) { if ($) { if (K("showClone", this), Rt.eventCanceled) return; q.contains(z) && !this.options.group.revertClone ? q.insertBefore(Q, z) : V ? q.insertBefore(Q, V) : q.appendChild(Q), this.options.group.revertClone && this.animate(z, Q), R(Q, "display", ""), $ = !1 } } else this._hideClone() } }, St && u(document, "touchmove", function (t) { (Rt.active || vt) && t.cancelable && t.preventDefault() }), Rt.utils = { on: u, off: d, css: R, find: g, is: function (t, e) { return !!P(t, e, t, !1) }, extend: function (t, e) { if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]); return t }, throttle: D, closest: P, toggleClass: k, clone: _, index: F, nextTick: Ht, cancelNextTick: Lt, detectDirection: Ot, getChild: m }, Rt.get = function (t) { return t[j] }, Rt.mount = function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; e[0].constructor === Array && (e = e[0]), e.forEach(function (t) { if (!t.prototype || !t.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t)); t.utils && (Rt.utils = I({}, Rt.utils, t.utils)), O.mount(t) }) }, Rt.create = function (t, e) { return new Rt(t, e) }; var jt, Kt, Wt, zt, Gt, Ut, qt = [], Vt = !(Rt.version = "1.10.1"); function Zt() { qt.forEach(function (t) { clearInterval(t.pid) }), qt = [] } function Qt() { clearInterval(Ut) } function $t(t) { var e = t.originalEvent, n = t.putSortable, o = t.dragEl, i = t.activeSortable, r = t.dispatchSortableEvent, a = t.hideGhostForTarget, l = t.unhideGhostForTarget; if (e) { var s = n || i; a(); var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, u = document.elementFromPoint(c.clientX, c.clientY); l(), s && !s.el.contains(u) && (r("spill"), this.onSpill({ dragEl: o, putSortable: n })) } } var Jt, te = D(function (n, t, e, o) { if (t.scroll) { var i, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = t.scrollSensitivity, s = t.scrollSpeed, c = N(), u = !1; Kt !== e && (Kt = e, Zt(), jt = t.scroll, i = t.scrollFn, !0 === jt && (jt = H(e, !0))); var d = 0, h = jt; do { var f = h, p = X(f), g = p.top, v = p.bottom, m = p.left, b = p.right, y = p.width, w = p.height, E = void 0, D = void 0, _ = f.scrollWidth, S = f.scrollHeight, C = R(f), T = f.scrollLeft, x = f.scrollTop; D = f === c ? (E = y < _ && ("auto" === C.overflowX || "scroll" === C.overflowX || "visible" === C.overflowX), w < S && ("auto" === C.overflowY || "scroll" === C.overflowY || "visible" === C.overflowY)) : (E = y < _ && ("auto" === C.overflowX || "scroll" === C.overflowX), w < S && ("auto" === C.overflowY || "scroll" === C.overflowY)); var M = E && (Math.abs(b - r) <= l && T + y < _) - (Math.abs(m - r) <= l && !!T), O = D && (Math.abs(v - a) <= l && x + w < S) - (Math.abs(g - a) <= l && !!x); if (!qt[d]) for (var A = 0; A <= d; A++)qt[A] || (qt[A] = {}); qt[d].vx == M && qt[d].vy == O && qt[d].el === f || (qt[d].el = f, qt[d].vx = M, qt[d].vy = O, clearInterval(qt[d].pid), 0 == M && 0 == O || (u = !0, qt[d].pid = setInterval(function () { o && 0 === this.layer && Rt.active._onTouchMove(Gt); var t = qt[this.layer].vy ? qt[this.layer].vy * s : 0, e = qt[this.layer].vx ? qt[this.layer].vx * s : 0; "function" == typeof i && "continue" !== i.call(Rt.dragged.parentNode[j], e, t, n, Gt, qt[this.layer].el) || L(qt[this.layer].el, e, t) }.bind({ layer: d }), 24))), d++ } while (t.bubbleScroll && h !== c && (h = H(h, !1))); Vt = u } }, 30); function ee() { } function ne() { } ee.prototype = { startIndex: null, dragStart: function (t) { var e = t.oldDraggableIndex; this.startIndex = e }, onSpill: function (t) { var e = t.dragEl, n = t.putSortable; this.sortable.captureAnimationState(), n && n.captureAnimationState(); var o = m(this.sortable.el, this.startIndex, this.options); o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll() }, drop: $t }, a(ee, { pluginName: "revertOnSpill" }), ne.prototype = { onSpill: function (t) { var e = t.dragEl, n = t.putSortable || this.sortable; n.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), n.animateAll() }, drop: $t }, a(ne, { pluginName: "removeOnSpill" }); var oe, ie, re, ae, le, se = [], ce = [], ue = !1, de = !1, he = !1; function fe(o, i) { ce.forEach(function (t, e) { var n = i.children[t.sortableIndex + (o ? Number(e) : 0)]; n ? i.insertBefore(t, n) : i.appendChild(t) }) } function pe() { se.forEach(function (t) { t !== re && t.parentNode && t.parentNode.removeChild(t) }) } return Rt.mount(new function () { function t() { for (var t in this.defaults = { scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: !0 }, this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this)) } return t.prototype = { dragStarted: function (t) { var e = t.originalEvent; this.sortable.nativeDraggable ? u(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? u(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? u(document, "touchmove", this._handleFallbackAutoScroll) : u(document, "mousemove", this._handleFallbackAutoScroll) }, dragOverCompleted: function (t) { var e = t.originalEvent; this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e) }, drop: function () { this.sortable.nativeDraggable ? d(document, "dragover", this._handleAutoScroll) : (d(document, "pointermove", this._handleFallbackAutoScroll), d(document, "touchmove", this._handleFallbackAutoScroll), d(document, "mousemove", this._handleFallbackAutoScroll)), Qt(), Zt(), clearTimeout(f), f = void 0 }, nulling: function () { Gt = Kt = jt = Vt = Ut = Wt = zt = null, qt.length = 0 }, _handleFallbackAutoScroll: function (t) { this._handleAutoScroll(t, !0) }, _handleAutoScroll: function (e, n) { var o = this, i = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, t = document.elementFromPoint(i, r); if (Gt = e, n || E || w || s) { te(e, this.options, t, n); var a = H(t, !0); !Vt || Ut && i === Wt && r === zt || (Ut && Qt(), Ut = setInterval(function () { var t = H(document.elementFromPoint(i, r), !0); t !== a && (a = t, Zt()), te(e, o.options, t, n) }, 10), Wt = i, zt = r) } else { if (!this.options.bubbleScroll || H(t, !0) === N()) return void Zt(); te(e, this.options, H(t, !1), !1) } } }, a(t, { pluginName: "scroll", initializeByDefault: !0 }) }), Rt.mount(ne, ee), Rt.mount(new function () { function t() { this.defaults = { swapClass: "sortable-swap-highlight" } } return t.prototype = { dragStart: function (t) { var e = t.dragEl; Jt = e }, dragOverValid: function (t) { var e = t.completed, n = t.target, o = t.onMove, i = t.activeSortable, r = t.changed, a = t.cancel; if (i.options.swap) { var l = this.sortable.el, s = this.options; if (n && n !== l) { var c = Jt; Jt = !1 !== o(n) ? (k(n, s.swapClass, !0), n) : null, c && c !== Jt && k(c, s.swapClass, !1) } r(), e(!0), a() } }, drop: function (t) { var e = t.activeSortable, n = t.putSortable, o = t.dragEl, i = n || this.sortable, r = this.options; Jt && k(Jt, r.swapClass, !1), Jt && (r.swap || n && n.options.swap) && o !== Jt && (i.captureAnimationState(), i !== e && e.captureAnimationState(), function (t, e) { var n, o, i = t.parentNode, r = e.parentNode; if (!i || !r || i.isEqualNode(e) || r.isEqualNode(t)) return; n = F(t), o = F(e), i.isEqualNode(r) && n < o && o++; i.insertBefore(e, i.children[n]), r.insertBefore(t, r.children[o]) }(o, Jt), i.animateAll(), i !== e && e.animateAll()) }, nulling: function () { Jt = null } }, a(t, { pluginName: "swap", eventProperties: function () { return { swapItem: Jt } } }) }), Rt.mount(new function () { function t(o) { for (var t in this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this)); o.options.supportPointer ? u(document, "pointerup", this._deselectMultiDrag) : (u(document, "mouseup", this._deselectMultiDrag), u(document, "touchend", this._deselectMultiDrag)), u(document, "keydown", this._checkKeyDown), u(document, "keyup", this._checkKeyUp), this.defaults = { selectedClass: "sortable-selected", multiDragKey: null, setData: function (t, e) { var n = ""; se.length && ie === o ? se.forEach(function (t, e) { n += (e ? ", " : "") + t.textContent }) : n = e.textContent, t.setData("Text", n) } } } return t.prototype = { multiDragKeyDown: !1, isMultiDrag: !1, delayStartGlobal: function (t) { var e = t.dragEl; re = e }, delayEnded: function () { this.isMultiDrag = ~se.indexOf(re) }, setupClone: function (t) { var e = t.sortable, n = t.cancel; if (this.isMultiDrag) { for (var o = 0; o < se.length; o++)ce.push(_(se[o])), ce[o].sortableIndex = se[o].sortableIndex, ce[o].draggable = !1, ce[o].style["will-change"] = "", k(ce[o], this.options.selectedClass, !1), se[o] === re && k(ce[o], this.options.chosenClass, !1); e._hideClone(), n() } }, clone: function (t) { var e = t.sortable, n = t.rootEl, o = t.dispatchSortableEvent, i = t.cancel; this.isMultiDrag && (this.options.removeCloneOnHide || se.length && ie === e && (fe(!0, n), o("clone"), i())) }, showClone: function (t) { var e = t.cloneNowShown, n = t.rootEl, o = t.cancel; this.isMultiDrag && (fe(!1, n), ce.forEach(function (t) { R(t, "display", "") }), e(), le = !1, o()) }, hideClone: function (t) { var e = this, n = (t.sortable, t.cloneNowHidden), o = t.cancel; this.isMultiDrag && (ce.forEach(function (t) { R(t, "display", "none"), e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t) }), n(), le = !0, o()) }, dragStartGlobal: function (t) { t.sortable; !this.isMultiDrag && ie && ie.multiDrag._deselectMultiDrag(), se.forEach(function (t) { t.sortableIndex = F(t) }), se = se.sort(function (t, e) { return t.sortableIndex - e.sortableIndex }), he = !0 }, dragStarted: function (t) { var e = this, n = t.sortable; if (this.isMultiDrag) { if (this.options.sort && (n.captureAnimationState(), this.options.animation)) { se.forEach(function (t) { t !== re && R(t, "position", "absolute") }); var o = X(re, !1, !0, !0); se.forEach(function (t) { t !== re && S(t, o) }), ue = de = !0 } n.animateAll(function () { ue = de = !1, e.options.animation && se.forEach(function (t) { C(t) }), e.options.sort && pe() }) } }, dragOver: function (t) { var e = t.target, n = t.completed, o = t.cancel; de && ~se.indexOf(e) && (n(!1), o()) }, revert: function (t) { var e = t.fromSortable, n = t.rootEl, o = t.sortable, i = t.dragRect; 1 < se.length && (se.forEach(function (t) { o.addAnimationState({ target: t, rect: de ? X(t) : i }), C(t), t.fromRect = i, e.removeAnimationState(t) }), de = !1, function (o, i) { se.forEach(function (t, e) { var n = i.children[t.sortableIndex + (o ? Number(e) : 0)]; n ? i.insertBefore(t, n) : i.appendChild(t) }) }(!this.options.removeCloneOnHide, n)) }, dragOverCompleted: function (t) { var e = t.sortable, n = t.isOwner, o = t.insertion, i = t.activeSortable, r = t.parentEl, a = t.putSortable, l = this.options; if (o) { if (n && i._hideClone(), ue = !1, l.animation && 1 < se.length && (de || !n && !i.options.sort && !a)) { var s = X(re, !1, !0, !0); se.forEach(function (t) { t !== re && (S(t, s), r.appendChild(t)) }), de = !0 } if (!n) if (de || pe(), 1 < se.length) { var c = le; i._showClone(e), i.options.animation && !le && c && ce.forEach(function (t) { i.addAnimationState({ target: t, rect: ae }), t.fromRect = ae, t.thisAnimationDuration = null }) } else i._showClone(e) } }, dragOverAnimationCapture: function (t) { var e = t.dragRect, n = t.isOwner, o = t.activeSortable; if (se.forEach(function (t) { t.thisAnimationDuration = null }), o.options.animation && !n && o.multiDrag.isMultiDrag) { ae = a({}, e); var i = v(re, !0); ae.top -= i.f, ae.left -= i.e } }, dragOverAnimationComplete: function () { de && (de = !1, pe()) }, drop: function (t) { var e = t.originalEvent, n = t.rootEl, o = t.parentEl, i = t.sortable, r = t.dispatchSortableEvent, a = t.oldIndex, l = t.putSortable, s = l || this.sortable; if (e) { var c = this.options, u = o.children; if (!he) if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), k(re, c.selectedClass, !~se.indexOf(re)), ~se.indexOf(re)) se.splice(se.indexOf(re), 1), oe = null, A({ sortable: i, rootEl: n, name: "deselect", targetEl: re, originalEvt: e }); else { if (se.push(re), A({ sortable: i, rootEl: n, name: "select", targetEl: re, originalEvt: e }), e.shiftKey && oe && i.el.contains(oe)) { var d, h, f = F(oe), p = F(re); if (~f && ~p && f !== p) for (d = f < p ? (h = f, p) : (h = p, f + 1); h < d; h++)~se.indexOf(u[h]) || (k(u[h], c.selectedClass, !0), se.push(u[h]), A({ sortable: i, rootEl: n, name: "select", targetEl: u[h], originalEvt: e })) } else oe = re; ie = s } if (he && this.isMultiDrag) { if ((o[j].options.sort || o !== n) && 1 < se.length) { var g = X(re), v = F(re, ":not(." + this.options.selectedClass + ")"); if (!ue && c.animation && (re.thisAnimationDuration = null), s.captureAnimationState(), !ue && (c.animation && (re.fromRect = g, se.forEach(function (t) { if (t.thisAnimationDuration = null, t !== re) { var e = de ? X(t) : g; t.fromRect = e, s.addAnimationState({ target: t, rect: e }) } })), pe(), se.forEach(function (t) { u[v] ? o.insertBefore(t, u[v]) : o.appendChild(t), v++ }), a === F(re))) { var m = !1; se.forEach(function (t) { t.sortableIndex === F(t) || (m = !0) }), m && r("update") } se.forEach(function (t) { C(t) }), s.animateAll() } ie = s } (n === o || l && "clone" !== l.lastPutMode) && ce.forEach(function (t) { t.parentNode && t.parentNode.removeChild(t) }) } }, nullingGlobal: function () { this.isMultiDrag = he = !1, ce.length = 0 }, destroyGlobal: function () { this._deselectMultiDrag(), d(document, "pointerup", this._deselectMultiDrag), d(document, "mouseup", this._deselectMultiDrag), d(document, "touchend", this._deselectMultiDrag), d(document, "keydown", this._checkKeyDown), d(document, "keyup", this._checkKeyUp) }, _deselectMultiDrag: function (t) { if (!he && ie === this.sortable && !(t && P(t.target, this.options.draggable, this.sortable.el, !1) || t && 0 !== t.button)) for (; se.length;) { var e = se[0]; k(e, this.options.selectedClass, !1), se.shift(), A({ sortable: this.sortable, rootEl: this.sortable.el, name: "deselect", targetEl: e, originalEvt: t }) } }, _checkKeyDown: function (t) { t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0) }, _checkKeyUp: function (t) { t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1) } }, a(t, { pluginName: "multiDrag", utils: { select: function (t) { var e = t.parentNode[j]; e && e.options.multiDrag && !~se.indexOf(t) && (ie && ie !== e && (ie.multiDrag._deselectMultiDrag(), ie = e), k(t, e.options.selectedClass, !0), se.push(t)) }, deselect: function (t) { var e = t.parentNode[j], n = se.indexOf(t); e && e.options.multiDrag && ~n && (k(t, e.options.selectedClass, !1), se.splice(n, 1)) } }, eventProperties: function () { var n = this, o = [], i = []; return se.forEach(function (t) { var e; o.push({ multiDragElement: t, index: t.sortableIndex }), e = de && t !== re ? -1 : de ? F(t, ":not(." + n.options.selectedClass + ")") : F(t), i.push({ multiDragElement: t, index: e }) }), { items: e(se), clones: [].concat(ce), oldIndicies: o, newIndicies: i } }, optionListeners: { multiDragKey: function (t) { return "ctrl" === (t = t.toLowerCase()) ? t = "Control" : 1 < t.length && (t = t.charAt(0).toUpperCase() + t.substr(1)), t } } }) }), Rt });
// Generated by purs bundle 0.13.0
var PS = {};
(function (exports) {
    exports.analyticsEvent = function (category) {
        return function (action) {
            return function (label) {
                return function () {
                    ga('send', 'event', category, action, label);
                    return {};
                };
            };
        };
    };
})(PS["Analytics"] = PS["Analytics"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Analytics"] = $PS["Analytics"] || {};
    var exports = $PS["Analytics"];
    var $foreign = $PS["Analytics"];
    var analyticsLevelChanged = $foreign.analyticsEvent("level")("changed");
    exports["analyticsLevelChanged"] = analyticsLevelChanged;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Boolean"] = $PS["Data.Boolean"] || {};
    var exports = $PS["Data.Boolean"];
    var otherwise = true;
    exports["otherwise"] = otherwise;
})(PS);
(function (exports) {
    "use strict";

    // module Data.Int

    exports.fromNumberImpl = function (just) {
        return function (nothing) {
            return function (n) {
                /* jshint bitwise: false */
                return (n | 0) === n ? just(n) : nothing;
            };
        };
    };

    exports.toNumber = function (n) {
        return n;
    };
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function (exports) {
    "use strict";

    exports.topInt = 2147483647;
    exports.bottomInt = -2147483648;
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});
(function (exports) {
    "use strict";

    exports.refEq = function (r1) {
        return function (r2) {
            return r1 === r2;
        };
    };
})(PS["Data.Eq"] = PS["Data.Eq"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Eq"] = $PS["Data.Eq"] || {};
    var exports = $PS["Data.Eq"];
    var $foreign = $PS["Data.Eq"];
    var Eq1 = function (eq1) {
        this.eq1 = eq1;
    };
    var Eq = function (eq) {
        this.eq = eq;
    };
    var eqString = new Eq($foreign.refEq);
    var eqNumber = new Eq($foreign.refEq);
    var eqInt = new Eq($foreign.refEq);
    var eqBoolean = new Eq($foreign.refEq);
    var eq1 = function (dict) {
        return dict.eq1;
    };
    var eq = function (dict) {
        return dict.eq;
    };
    var notEq = function (dictEq) {
        return function (x) {
            return function (y) {
                return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
            };
        };
    };
    exports["Eq"] = Eq;
    exports["eq"] = eq;
    exports["notEq"] = notEq;
    exports["Eq1"] = Eq1;
    exports["eq1"] = eq1;
    exports["eqBoolean"] = eqBoolean;
    exports["eqInt"] = eqInt;
    exports["eqNumber"] = eqNumber;
    exports["eqString"] = eqString;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Function"] = $PS["Data.Function"] || {};
    var exports = $PS["Data.Function"];
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var $$const = function (a) {
        return function (v) {
            return a;
        };
    };
    var applyFlipped = function (x) {
        return function (f) {
            return f(x);
        };
    };
    exports["flip"] = flip;
    exports["const"] = $$const;
    exports["applyFlipped"] = applyFlipped;
    exports["on"] = on;
})(PS);
(function (exports) {
    "use strict";

    exports.unsafeCompareImpl = function (lt) {
        return function (eq) {
            return function (gt) {
                return function (x) {
                    return function (y) {
                        return x < y ? lt : x === y ? eq : gt;
                    };
                };
            };
        };
    };
})(PS["Data.Ord.Unsafe"] = PS["Data.Ord.Unsafe"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Ordering"] = $PS["Data.Ordering"] || {};
    var exports = $PS["Data.Ordering"];
    var Data_Eq = $PS["Data.Eq"];
    var LT = (function () {
        function LT() {

        };
        LT.value = new LT();
        return LT;
    })();
    var GT = (function () {
        function GT() {

        };
        GT.value = new GT();
        return GT;
    })();
    var EQ = (function () {
        function EQ() {

        };
        EQ.value = new EQ();
        return EQ;
    })();
    var eqOrdering = new Data_Eq.Eq(function (v) {
        return function (v1) {
            if (v instanceof LT && v1 instanceof LT) {
                return true;
            };
            if (v instanceof GT && v1 instanceof GT) {
                return true;
            };
            if (v instanceof EQ && v1 instanceof EQ) {
                return true;
            };
            return false;
        };
    });
    exports["LT"] = LT;
    exports["GT"] = GT;
    exports["EQ"] = EQ;
    exports["eqOrdering"] = eqOrdering;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Ord.Unsafe"] = $PS["Data.Ord.Unsafe"] || {};
    var exports = $PS["Data.Ord.Unsafe"];
    var $foreign = $PS["Data.Ord.Unsafe"];
    var Data_Ordering = $PS["Data.Ordering"];
    var unsafeCompare = $foreign.unsafeCompareImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
    exports["unsafeCompare"] = unsafeCompare;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Ord"] = $PS["Data.Ord"] || {};
    var exports = $PS["Data.Ord"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Function = $PS["Data.Function"];
    var Data_Ord_Unsafe = $PS["Data.Ord.Unsafe"];
    var Data_Ordering = $PS["Data.Ordering"];
    var Ord = function (Eq0, compare) {
        this.Eq0 = Eq0;
        this.compare = compare;
    };
    var ordString = new Ord(function () {
        return Data_Eq.eqString;
    }, Data_Ord_Unsafe.unsafeCompare);
    var ordNumber = new Ord(function () {
        return Data_Eq.eqNumber;
    }, Data_Ord_Unsafe.unsafeCompare);
    var ordInt = new Ord(function () {
        return Data_Eq.eqInt;
    }, Data_Ord_Unsafe.unsafeCompare);
    var compare = function (dict) {
        return dict.compare;
    };
    var comparing = function (dictOrd) {
        return function (f) {
            return Data_Function.on(compare(dictOrd))(f);
        };
    };
    var lessThanOrEq = function (dictOrd) {
        return function (a1) {
            return function (a2) {
                var v = compare(dictOrd)(a1)(a2);
                if (v instanceof Data_Ordering.GT) {
                    return false;
                };
                return true;
            };
        };
    };
    var max = function (dictOrd) {
        return function (x) {
            return function (y) {
                var v = compare(dictOrd)(x)(y);
                if (v instanceof Data_Ordering.LT) {
                    return y;
                };
                if (v instanceof Data_Ordering.EQ) {
                    return x;
                };
                if (v instanceof Data_Ordering.GT) {
                    return x;
                };
                throw new Error("Failed pattern match at Data.Ord (line 123, column 3 - line 126, column 12): " + [v.constructor.name]);
            };
        };
    };
    var min = function (dictOrd) {
        return function (x) {
            return function (y) {
                var v = compare(dictOrd)(x)(y);
                if (v instanceof Data_Ordering.LT) {
                    return x;
                };
                if (v instanceof Data_Ordering.EQ) {
                    return x;
                };
                if (v instanceof Data_Ordering.GT) {
                    return y;
                };
                throw new Error("Failed pattern match at Data.Ord (line 114, column 3 - line 117, column 12): " + [v.constructor.name]);
            };
        };
    };
    var clamp = function (dictOrd) {
        return function (low) {
            return function (hi) {
                return function (x) {
                    return min(dictOrd)(hi)(max(dictOrd)(low)(x));
                };
            };
        };
    };
    exports["Ord"] = Ord;
    exports["compare"] = compare;
    exports["lessThanOrEq"] = lessThanOrEq;
    exports["comparing"] = comparing;
    exports["min"] = min;
    exports["max"] = max;
    exports["clamp"] = clamp;
    exports["ordInt"] = ordInt;
    exports["ordNumber"] = ordNumber;
    exports["ordString"] = ordString;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Bounded"] = $PS["Data.Bounded"] || {};
    var exports = $PS["Data.Bounded"];
    var $foreign = $PS["Data.Bounded"];
    var Data_Ord = $PS["Data.Ord"];
    var Bounded = function (Ord0, bottom, top) {
        this.Ord0 = Ord0;
        this.bottom = bottom;
        this.top = top;
    };
    var top = function (dict) {
        return dict.top;
    };
    var boundedInt = new Bounded(function () {
        return Data_Ord.ordInt;
    }, $foreign.bottomInt, $foreign.topInt);
    var bottom = function (dict) {
        return dict.bottom;
    };
    exports["Bounded"] = Bounded;
    exports["bottom"] = bottom;
    exports["top"] = top;
    exports["boundedInt"] = boundedInt;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Alt"] = $PS["Control.Alt"] || {};
    var exports = $PS["Control.Alt"];
    var Alt = function (Functor0, alt) {
        this.Functor0 = Functor0;
        this.alt = alt;
    };
    var alt = function (dict) {
        return dict.alt;
    };
    exports["Alt"] = Alt;
    exports["alt"] = alt;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Alternative"] = $PS["Control.Alternative"] || {};
    var exports = $PS["Control.Alternative"];
    var Alternative = function (Applicative0, Plus1) {
        this.Applicative0 = Applicative0;
        this.Plus1 = Plus1;
    };
    exports["Alternative"] = Alternative;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Semigroupoid"] = $PS["Control.Semigroupoid"] || {};
    var exports = $PS["Control.Semigroupoid"];
    var Semigroupoid = function (compose) {
        this.compose = compose;
    };
    var semigroupoidFn = new Semigroupoid(function (f) {
        return function (g) {
            return function (x) {
                return f(g(x));
            };
        };
    });
    var compose = function (dict) {
        return dict.compose;
    };
    exports["compose"] = compose;
    exports["Semigroupoid"] = Semigroupoid;
    exports["semigroupoidFn"] = semigroupoidFn;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Category"] = $PS["Control.Category"] || {};
    var exports = $PS["Control.Category"];
    var Control_Semigroupoid = $PS["Control.Semigroupoid"];
    var Category = function (Semigroupoid0, id) {
        this.Semigroupoid0 = Semigroupoid0;
        this.id = id;
    };
    var id = function (dict) {
        return dict.id;
    };
    var categoryFn = new Category(function () {
        return Control_Semigroupoid.semigroupoidFn;
    }, function (x) {
        return x;
    });
    exports["Category"] = Category;
    exports["id"] = id;
    exports["categoryFn"] = categoryFn;
})(PS);
(function (exports) {
    "use strict";

    exports.arrayMap = function (f) {
        return function (arr) {
            var l = arr.length;
            var result = new Array(l);
            for (var i = 0; i < l; i++) {
                result[i] = f(arr[i]);
            }
            return result;
        };
    };
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function (exports) {
    "use strict";

    exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Unit"] = $PS["Data.Unit"] || {};
    var exports = $PS["Data.Unit"];
    var $foreign = $PS["Data.Unit"];
    exports["unit"] = $foreign.unit;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Functor"] = $PS["Data.Functor"] || {};
    var exports = $PS["Data.Functor"];
    var $foreign = $PS["Data.Functor"];
    var Data_Function = $PS["Data.Function"];
    var Data_Unit = $PS["Data.Unit"];
    var Functor = function (map) {
        this.map = map;
    };
    var map = function (dict) {
        return dict.map;
    };
    var mapFlipped = function (dictFunctor) {
        return function (fa) {
            return function (f) {
                return map(dictFunctor)(f)(fa);
            };
        };
    };
    var $$void = function (dictFunctor) {
        return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
    };
    var functorArray = new Functor($foreign.arrayMap);
    exports["Functor"] = Functor;
    exports["map"] = map;
    exports["mapFlipped"] = mapFlipped;
    exports["void"] = $$void;
    exports["functorArray"] = functorArray;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Apply"] = $PS["Control.Apply"] || {};
    var exports = $PS["Control.Apply"];
    var Control_Category = $PS["Control.Category"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Apply = function (Functor0, apply) {
        this.Functor0 = Functor0;
        this.apply = apply;
    };
    var apply = function (dict) {
        return dict.apply;
    };
    var applySecond = function (dictApply) {
        return function (a) {
            return function (b) {
                return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.id(Control_Category.categoryFn)))(a))(b);
            };
        };
    };
    var lift2 = function (dictApply) {
        return function (f) {
            return function (a) {
                return function (b) {
                    return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
                };
            };
        };
    };
    exports["Apply"] = Apply;
    exports["apply"] = apply;
    exports["applySecond"] = applySecond;
    exports["lift2"] = lift2;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
    var exports = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Data_Unit = $PS["Data.Unit"];
    var Applicative = function (Apply0, pure) {
        this.Apply0 = Apply0;
        this.pure = pure;
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var when = function (dictApplicative) {
        return function (v) {
            return function (v1) {
                if (v) {
                    return v1;
                };
                if (!v) {
                    return pure(dictApplicative)(Data_Unit.unit);
                };
                throw new Error("Failed pattern match at Control.Applicative (line 57, column 1 - line 57, column 63): " + [v.constructor.name, v1.constructor.name]);
            };
        };
    };
    var liftA1 = function (dictApplicative) {
        return function (f) {
            return function (a) {
                return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
            };
        };
    };
    exports["Applicative"] = Applicative;
    exports["pure"] = pure;
    exports["liftA1"] = liftA1;
    exports["when"] = when;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Bind"] = $PS["Control.Bind"] || {};
    var exports = $PS["Control.Bind"];
    var Data_Function = $PS["Data.Function"];
    var Discard = function (discard) {
        this.discard = discard;
    };
    var Bind = function (Apply0, bind) {
        this.Apply0 = Apply0;
        this.bind = bind;
    };
    var discard = function (dict) {
        return dict.discard;
    };
    var bind = function (dict) {
        return dict.bind;
    };
    var bindFlipped = function (dictBind) {
        return Data_Function.flip(bind(dictBind));
    };
    var discardUnit = new Discard(function (dictBind) {
        return bind(dictBind);
    });
    exports["Bind"] = Bind;
    exports["bind"] = bind;
    exports["bindFlipped"] = bindFlipped;
    exports["Discard"] = Discard;
    exports["discard"] = discard;
    exports["discardUnit"] = discardUnit;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Monad"] = $PS["Control.Monad"] || {};
    var exports = $PS["Control.Monad"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Monad = function (Applicative0, Bind1) {
        this.Applicative0 = Applicative0;
        this.Bind1 = Bind1;
    };
    var ap = function (dictMonad) {
        return function (f) {
            return function (a) {
                return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                    return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                        return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                    });
                });
            };
        };
    };
    exports["Monad"] = Monad;
    exports["ap"] = ap;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Plus"] = $PS["Control.Plus"] || {};
    var exports = $PS["Control.Plus"];
    var Plus = function (Alt0, empty) {
        this.Alt0 = Alt0;
        this.empty = empty;
    };
    var empty = function (dict) {
        return dict.empty;
    };
    exports["Plus"] = Plus;
    exports["empty"] = empty;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.MonadZero"] = $PS["Control.MonadZero"] || {};
    var exports = $PS["Control.MonadZero"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Plus = $PS["Control.Plus"];
    var Data_Unit = $PS["Data.Unit"];
    var MonadZero = function (Alternative1, Monad0) {
        this.Alternative1 = Alternative1;
        this.Monad0 = Monad0;
    };
    var guard = function (dictMonadZero) {
        return function (v) {
            if (v) {
                return Control_Applicative.pure((dictMonadZero.Alternative1()).Applicative0())(Data_Unit.unit);
            };
            if (!v) {
                return Control_Plus.empty((dictMonadZero.Alternative1()).Plus1());
            };
            throw new Error("Failed pattern match at Control.MonadZero (line 54, column 1 - line 54, column 52): " + [v.constructor.name]);
        };
    };
    exports["MonadZero"] = MonadZero;
    exports["guard"] = guard;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Maybe"] = $PS["Data.Maybe"] || {};
    var exports = $PS["Data.Maybe"];
    var Control_Alt = $PS["Control.Alt"];
    var Control_Alternative = $PS["Control.Alternative"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Category = $PS["Control.Category"];
    var Control_Monad = $PS["Control.Monad"];
    var Control_MonadZero = $PS["Control.MonadZero"];
    var Control_Plus = $PS["Control.Plus"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Nothing = (function () {
        function Nothing() {

        };
        Nothing.value = new Nothing();
        return Nothing;
    })();
    var Just = (function () {
        function Just(value0) {
            this.value0 = value0;
        };
        Just.create = function (value0) {
            return new Just(value0);
        };
        return Just;
    })();
    var maybe = function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof Nothing) {
                    return v;
                };
                if (v2 instanceof Just) {
                    return v1(v2.value0);
                };
                throw new Error("Failed pattern match at Data.Maybe (line 219, column 1 - line 219, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
        };
    };
    var isJust = maybe(false)(Data_Function["const"](true));
    var functorMaybe = new Data_Functor.Functor(function (v) {
        return function (v1) {
            if (v1 instanceof Just) {
                return new Just(v(v1.value0));
            };
            return Nothing.value;
        };
    });
    var fromMaybe = function (a) {
        return maybe(a)(Control_Category.id(Control_Category.categoryFn));
    };
    var fromJust = function (dictPartial) {
        return function (v) {
            if (v instanceof Just) {
                return v.value0;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 270, column 1 - line 270, column 46): " + [v.constructor.name]);
        };
    };
    var applyMaybe = new Control_Apply.Apply(function () {
        return functorMaybe;
    }, function (v) {
        return function (v1) {
            if (v instanceof Just) {
                return Data_Functor.map(functorMaybe)(v.value0)(v1);
            };
            if (v instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 68, column 1 - line 70, column 30): " + [v.constructor.name, v1.constructor.name]);
        };
    });
    var bindMaybe = new Control_Bind.Bind(function () {
        return applyMaybe;
    }, function (v) {
        return function (v1) {
            if (v instanceof Just) {
                return v1(v.value0);
            };
            if (v instanceof Nothing) {
                return Nothing.value;
            };
            throw new Error("Failed pattern match at Data.Maybe (line 127, column 1 - line 129, column 28): " + [v.constructor.name, v1.constructor.name]);
        };
    });
    var applicativeMaybe = new Control_Applicative.Applicative(function () {
        return applyMaybe;
    }, Just.create);
    var monadMaybe = new Control_Monad.Monad(function () {
        return applicativeMaybe;
    }, function () {
        return bindMaybe;
    });
    var altMaybe = new Control_Alt.Alt(function () {
        return functorMaybe;
    }, function (v) {
        return function (v1) {
            if (v instanceof Nothing) {
                return v1;
            };
            return v;
        };
    });
    var plusMaybe = new Control_Plus.Plus(function () {
        return altMaybe;
    }, Nothing.value);
    var alternativeMaybe = new Control_Alternative.Alternative(function () {
        return applicativeMaybe;
    }, function () {
        return plusMaybe;
    });
    var monadZeroMaybe = new Control_MonadZero.MonadZero(function () {
        return alternativeMaybe;
    }, function () {
        return monadMaybe;
    });
    exports["Nothing"] = Nothing;
    exports["Just"] = Just;
    exports["maybe"] = maybe;
    exports["fromMaybe"] = fromMaybe;
    exports["isJust"] = isJust;
    exports["fromJust"] = fromJust;
    exports["functorMaybe"] = functorMaybe;
    exports["applyMaybe"] = applyMaybe;
    exports["applicativeMaybe"] = applicativeMaybe;
    exports["altMaybe"] = altMaybe;
    exports["plusMaybe"] = plusMaybe;
    exports["alternativeMaybe"] = alternativeMaybe;
    exports["bindMaybe"] = bindMaybe;
    exports["monadMaybe"] = monadMaybe;
    exports["monadZeroMaybe"] = monadZeroMaybe;
})(PS);
(function (exports) {
    /* globals exports */
    "use strict";

    exports.infinity = Infinity;
})(PS["Global"] = PS["Global"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Global"] = $PS["Global"] || {};
    var exports = $PS["Global"];
    var $foreign = $PS["Global"];
    exports["infinity"] = $foreign.infinity;
})(PS);
(function (exports) {
    "use strict";

    // module Math

    exports.abs = Math.abs;

    exports.asin = Math.asin;

    exports.cos = Math.cos;

    exports.remainder = function (n) {
        return function (m) {
            return n % m;
        };
    };

    exports.round = Math.round;

    exports.sin = Math.sin;

    exports.sqrt = Math.sqrt;

    exports.pi = Math.PI;
})(PS["Math"] = PS["Math"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Math"] = $PS["Math"] || {};
    var exports = $PS["Math"];
    var $foreign = $PS["Math"];
    exports["abs"] = $foreign.abs;
    exports["asin"] = $foreign.asin;
    exports["cos"] = $foreign.cos;
    exports["round"] = $foreign.round;
    exports["sin"] = $foreign.sin;
    exports["sqrt"] = $foreign.sqrt;
    exports["remainder"] = $foreign.remainder;
    exports["pi"] = $foreign.pi;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Int"] = $PS["Data.Int"] || {};
    var exports = $PS["Data.Int"];
    var $foreign = $PS["Data.Int"];
    var Data_Boolean = $PS["Data.Boolean"];
    var Data_Bounded = $PS["Data.Bounded"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Global = $PS["Global"];
    var $$Math = $PS["Math"];
    var fromNumber = $foreign.fromNumberImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    var unsafeClamp = function (x) {
        if (x === Global.infinity) {
            return 0;
        };
        if (x === -Global.infinity) {
            return 0;
        };
        if (x >= $foreign.toNumber(Data_Bounded.top(Data_Bounded.boundedInt))) {
            return Data_Bounded.top(Data_Bounded.boundedInt);
        };
        if (x <= $foreign.toNumber(Data_Bounded.bottom(Data_Bounded.boundedInt))) {
            return Data_Bounded.bottom(Data_Bounded.boundedInt);
        };
        if (Data_Boolean.otherwise) {
            return Data_Maybe.fromMaybe(0)(fromNumber(x));
        };
        throw new Error("Failed pattern match at Data.Int (line 62, column 1 - line 62, column 29): " + [x.constructor.name]);
    };
    var round = function ($2) {
        return unsafeClamp($$Math.round($2));
    };
    var even = function (x) {
        return (x & 1) === 0;
    };
    exports["fromNumber"] = fromNumber;
    exports["round"] = round;
    exports["even"] = even;
    exports["toNumber"] = $foreign.toNumber;
})(PS);
(function (exports) {
    "use strict";

    exports.showIntImpl = function (n) {
        return n.toString();
    };

    exports.showNumberImpl = function (n) {
        var str = n.toString();
        return isNaN(str + ".0") ? str : str + ".0";
    };

    exports.showStringImpl = function (s) {
        var l = s.length;
        return "\"" + s.replace(
            /[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
            function (c, i) {
                switch (c) {
                    case "\"":
                    case "\\":
                        return "\\" + c;
                    case "\x07": return "\\a";
                    case "\b": return "\\b";
                    case "\f": return "\\f";
                    case "\n": return "\\n";
                    case "\r": return "\\r";
                    case "\t": return "\\t";
                    case "\v": return "\\v";
                }
                var k = i + 1;
                var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
                return "\\" + c.charCodeAt(0).toString(10) + empty;
            }
        ) + "\"";
    };

    exports.showArrayImpl = function (f) {
        return function (xs) {
            var ss = [];
            for (var i = 0, l = xs.length; i < l; i++) {
                ss[i] = f(xs[i]);
            }
            return "[" + ss.join(",") + "]";
        };
    };
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Show"] = $PS["Data.Show"] || {};
    var exports = $PS["Data.Show"];
    var $foreign = $PS["Data.Show"];
    var Show = function (show) {
        this.show = show;
    };
    var showString = new Show($foreign.showStringImpl);
    var showNumber = new Show($foreign.showNumberImpl);
    var showInt = new Show($foreign.showIntImpl);
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (dictShow) {
        return new Show($foreign.showArrayImpl(show(dictShow)));
    };
    exports["Show"] = Show;
    exports["show"] = show;
    exports["showInt"] = showInt;
    exports["showNumber"] = showNumber;
    exports["showString"] = showString;
    exports["showArray"] = showArray;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Color"] = $PS["Color"] || {};
    var exports = $PS["Color"];
    var Data_Boolean = $PS["Data.Boolean"];
    var Data_Int = $PS["Data.Int"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Show = $PS["Data.Show"];
    var $$Math = $PS["Math"];
    var HSLA = (function () {
        function HSLA(value0, value1, value2, value3) {
            this.value0 = value0;
            this.value1 = value1;
            this.value2 = value2;
            this.value3 = value3;
        };
        HSLA.create = function (value0) {
            return function (value1) {
                return function (value2) {
                    return function (value3) {
                        return new HSLA(value0, value1, value2, value3);
                    };
                };
            };
        };
        return HSLA;
    })();
    var modPos = function (x) {
        return function (y) {
            return $$Math.remainder($$Math.remainder(x)(y) + y)(y);
        };
    };
    var rgba = function (red$prime) {
        return function (green$prime) {
            return function (blue$prime) {
                return function (alpha) {
                    var red = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(red$prime);
                    var r = Data_Int.toNumber(red) / 255.0;
                    var green = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(green$prime);
                    var g = Data_Int.toNumber(green) / 255.0;
                    var blue = Data_Ord.clamp(Data_Ord.ordInt)(0)(255)(blue$prime);
                    var maxChroma = Data_Ord.max(Data_Ord.ordInt)(Data_Ord.max(Data_Ord.ordInt)(red)(green))(blue);
                    var minChroma = Data_Ord.min(Data_Ord.ordInt)(Data_Ord.min(Data_Ord.ordInt)(red)(green))(blue);
                    var chroma = maxChroma - minChroma | 0;
                    var chroma$prime = Data_Int.toNumber(chroma) / 255.0;
                    var lightness = Data_Int.toNumber(maxChroma + minChroma | 0) / (255.0 * 2.0);
                    var saturation = (function () {
                        if (chroma === 0) {
                            return 0.0;
                        };
                        if (Data_Boolean.otherwise) {
                            return chroma$prime / (1.0 - $$Math.abs(2.0 * lightness - 1.0));
                        };
                        throw new Error("Failed pattern match at Color (line 145, column 5 - line 146, column 75): " + []);
                    })();
                    var b = Data_Int.toNumber(blue) / 255.0;
                    var hue$prime = function (v) {
                        if (v === 0) {
                            return 0.0;
                        };
                        if (maxChroma === red) {
                            return modPos((g - b) / chroma$prime)(6.0);
                        };
                        if (maxChroma === green) {
                            return (b - r) / chroma$prime + 2.0;
                        };
                        if (Data_Boolean.otherwise) {
                            return (r - g) / chroma$prime + 4.0;
                        };
                        throw new Error("Failed pattern match at Color (line 136, column 5 - line 136, column 17): " + [v.constructor.name]);
                    };
                    var hue = 60.0 * hue$prime(chroma);
                    return new HSLA(hue, saturation, lightness, alpha);
                };
            };
        };
    };
    var rgb = function (r) {
        return function (g) {
            return function (b) {
                return rgba(r)(g)(b)(1.0);
            };
        };
    };
    var hsla = function (h) {
        return function (s) {
            return function (l) {
                return function (a) {
                    var s$prime = Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(1.0)(s);
                    var l$prime = Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(1.0)(l);
                    var h$prime = modPos(h)(360.0);
                    var a$prime = Data_Ord.clamp(Data_Ord.ordNumber)(0.0)(1.0)(a);
                    return new HSLA(h$prime, s$prime, l$prime, a$prime);
                };
            };
        };
    };
    var lighten = function (f) {
        return function (v) {
            return hsla(v.value0)(v.value1)(v.value2 + f)(v.value3);
        };
    };
    var hsl = function (h) {
        return function (s) {
            return function (l) {
                return hsla(h)(s)(l)(1.0);
            };
        };
    };
    var graytone = function (l) {
        return hsl(0.0)(0.0)(l);
    };
    var cssStringHSLA = function (v) {
        var toString = function (n) {
            return Data_Show.show(Data_Show.showNumber)(Data_Int.toNumber(Data_Int.round(100.0 * n)) / 100.0);
        };
        var saturation = toString(v.value1 * 100.0) + "%";
        var lightness = toString(v.value2 * 100.0) + "%";
        var hue = toString(v.value0);
        var alpha = Data_Show.show(Data_Show.showNumber)(v.value3);
        var $72 = v.value3 === 1.0;
        if ($72) {
            return "hsl(" + (hue + (", " + (saturation + (", " + (lightness + ")")))));
        };
        return "hsla(" + (hue + (", " + (saturation + (", " + (lightness + (", " + (alpha + ")")))))));
    };
    exports["rgba"] = rgba;
    exports["rgb"] = rgb;
    exports["hsla"] = hsla;
    exports["hsl"] = hsl;
    exports["cssStringHSLA"] = cssStringHSLA;
    exports["graytone"] = graytone;
    exports["lighten"] = lighten;
})(PS);
(function (exports) {
    "use strict";

    exports.pureE = function (a) {
        return function () {
            return a;
        };
    };

    exports.bindE = function (a) {
        return function (f) {
            return function () {
                return f(a())();
            };
        };
    };

    exports.runPure = function (f) {
        return f();
    };
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Monad.Eff"] = $PS["Control.Monad.Eff"] || {};
    var exports = $PS["Control.Monad.Eff"];
    var $foreign = $PS["Control.Monad.Eff"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad = $PS["Control.Monad"];
    var Data_Functor = $PS["Data.Functor"];
    var monadEff = new Control_Monad.Monad(function () {
        return applicativeEff;
    }, function () {
        return bindEff;
    });
    var bindEff = new Control_Bind.Bind(function () {
        return applyEff;
    }, $foreign.bindE);
    var applyEff = new Control_Apply.Apply(function () {
        return functorEff;
    }, Control_Monad.ap(monadEff));
    var applicativeEff = new Control_Applicative.Applicative(function () {
        return applyEff;
    }, $foreign.pureE);
    var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
    exports["functorEff"] = functorEff;
    exports["applyEff"] = applyEff;
    exports["applicativeEff"] = applicativeEff;
    exports["bindEff"] = bindEff;
    exports["monadEff"] = monadEff;
    exports["runPure"] = $foreign.runPure;
})(PS);
(function (exports) {
    "use strict";

    exports.log = function (s) {
        return function () {
            console.log(s);
            return {};
        };
    };
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Monad.Eff.Console"] = $PS["Control.Monad.Eff.Console"] || {};
    var exports = $PS["Control.Monad.Eff.Console"];
    var $foreign = $PS["Control.Monad.Eff.Console"];
    var Data_Show = $PS["Data.Show"];
    var logShow = function (dictShow) {
        return function (a) {
            return $foreign.log(Data_Show.show(dictShow)(a));
        };
    };
    exports["logShow"] = logShow;
    exports["log"] = $foreign.log;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Monad.Error.Class"] = $PS["Control.Monad.Error.Class"] || {};
    var exports = $PS["Control.Monad.Error.Class"];
    var MonadThrow = function (Monad0, throwError) {
        this.Monad0 = Monad0;
        this.throwError = throwError;
    };
    var throwError = function (dict) {
        return dict.throwError;
    };
    exports["throwError"] = throwError;
    exports["MonadThrow"] = MonadThrow;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Either"] = $PS["Data.Either"] || {};
    var exports = $PS["Data.Either"];
    var Data_Functor = $PS["Data.Functor"];
    var Left = (function () {
        function Left(value0) {
            this.value0 = value0;
        };
        Left.create = function (value0) {
            return new Left(value0);
        };
        return Left;
    })();
    var Right = (function () {
        function Right(value0) {
            this.value0 = value0;
        };
        Right.create = function (value0) {
            return new Right(value0);
        };
        return Right;
    })();
    var functorEither = new Data_Functor.Functor(function (v) {
        return function (v1) {
            if (v1 instanceof Left) {
                return new Left(v1.value0);
            };
            if (v1 instanceof Right) {
                return new Right(v(v1.value0));
            };
            throw new Error("Failed pattern match at Data.Either (line 36, column 1 - line 38, column 32): " + [v.constructor.name, v1.constructor.name]);
        };
    });
    var fromRight = function (dictPartial) {
        return function (v) {
            if (v instanceof Right) {
                return v.value0;
            };
            throw new Error("Failed pattern match at Data.Either (line 252, column 1 - line 252, column 52): " + [v.constructor.name]);
        };
    };
    var either = function (v) {
        return function (v1) {
            return function (v2) {
                if (v2 instanceof Left) {
                    return v(v2.value0);
                };
                if (v2 instanceof Right) {
                    return v1(v2.value0);
                };
                throw new Error("Failed pattern match at Data.Either (line 229, column 1 - line 229, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
        };
    };
    exports["Left"] = Left;
    exports["Right"] = Right;
    exports["either"] = either;
    exports["fromRight"] = fromRight;
    exports["functorEither"] = functorEither;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Monad.Except.Trans"] = $PS["Control.Monad.Except.Trans"] || {};
    var exports = $PS["Control.Monad.Except.Trans"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad = $PS["Control.Monad"];
    var Control_Monad_Error_Class = $PS["Control.Monad.Error.Class"];
    var Data_Either = $PS["Data.Either"];
    var Data_Functor = $PS["Data.Functor"];
    var ExceptT = function (x) {
        return x;
    };
    var runExceptT = function (v) {
        return v;
    };
    var mapExceptT = function (f) {
        return function (v) {
            return f(v);
        };
    };
    var functorExceptT = function (dictFunctor) {
        return new Data_Functor.Functor(function (f) {
            return mapExceptT(Data_Functor.map(dictFunctor)(Data_Functor.map(Data_Either.functorEither)(f)));
        });
    };
    var except = function (dictApplicative) {
        var $96 = Control_Applicative.pure(dictApplicative);
        return function ($97) {
            return ExceptT($96($97));
        };
    };
    var monadExceptT = function (dictMonad) {
        return new Control_Monad.Monad(function () {
            return applicativeExceptT(dictMonad);
        }, function () {
            return bindExceptT(dictMonad);
        });
    };
    var bindExceptT = function (dictMonad) {
        return new Control_Bind.Bind(function () {
            return applyExceptT(dictMonad);
        }, function (v) {
            return function (k) {
                return Control_Bind.bind(dictMonad.Bind1())(v)(Data_Either.either((function () {
                    var $98 = Control_Applicative.pure(dictMonad.Applicative0());
                    return function ($99) {
                        return $98(Data_Either.Left.create($99));
                    };
                })())(function (a) {
                    var v1 = k(a);
                    return v1;
                }));
            };
        });
    };
    var applyExceptT = function (dictMonad) {
        return new Control_Apply.Apply(function () {
            return functorExceptT(((dictMonad.Bind1()).Apply0()).Functor0());
        }, Control_Monad.ap(monadExceptT(dictMonad)));
    };
    var applicativeExceptT = function (dictMonad) {
        return new Control_Applicative.Applicative(function () {
            return applyExceptT(dictMonad);
        }, (function () {
            var $100 = Control_Applicative.pure(dictMonad.Applicative0());
            return function ($101) {
                return ExceptT($100(Data_Either.Right.create($101)));
            };
        })());
    };
    var monadThrowExceptT = function (dictMonad) {
        return new Control_Monad_Error_Class.MonadThrow(function () {
            return monadExceptT(dictMonad);
        }, (function () {
            var $110 = Control_Applicative.pure(dictMonad.Applicative0());
            return function ($111) {
                return ExceptT($110(Data_Either.Left.create($111)));
            };
        })());
    };
    exports["ExceptT"] = ExceptT;
    exports["runExceptT"] = runExceptT;
    exports["mapExceptT"] = mapExceptT;
    exports["except"] = except;
    exports["functorExceptT"] = functorExceptT;
    exports["applyExceptT"] = applyExceptT;
    exports["applicativeExceptT"] = applicativeExceptT;
    exports["bindExceptT"] = bindExceptT;
    exports["monadExceptT"] = monadExceptT;
    exports["monadThrowExceptT"] = monadThrowExceptT;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Newtype"] = $PS["Data.Newtype"] || {};
    var exports = $PS["Data.Newtype"];
    var Newtype = function (unwrap, wrap) {
        this.unwrap = unwrap;
        this.wrap = wrap;
    };
    var wrap = function (dict) {
        return dict.wrap;
    };
    var unwrap = function (dict) {
        return dict.unwrap;
    };
    exports["unwrap"] = unwrap;
    exports["wrap"] = wrap;
    exports["Newtype"] = Newtype;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Identity"] = $PS["Data.Identity"] || {};
    var exports = $PS["Data.Identity"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad = $PS["Control.Monad"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Newtype = $PS["Data.Newtype"];
    var Identity = function (x) {
        return x;
    };
    var newtypeIdentity = new Data_Newtype.Newtype(function (n) {
        return n;
    }, Identity);
    var functorIdentity = new Data_Functor.Functor(function (f) {
        return function (v) {
            return f(v);
        };
    });
    var applyIdentity = new Control_Apply.Apply(function () {
        return functorIdentity;
    }, function (v) {
        return function (v1) {
            return v(v1);
        };
    });
    var bindIdentity = new Control_Bind.Bind(function () {
        return applyIdentity;
    }, function (v) {
        return function (f) {
            return f(v);
        };
    });
    var applicativeIdentity = new Control_Applicative.Applicative(function () {
        return applyIdentity;
    }, Identity);
    var monadIdentity = new Control_Monad.Monad(function () {
        return applicativeIdentity;
    }, function () {
        return bindIdentity;
    });
    exports["Identity"] = Identity;
    exports["newtypeIdentity"] = newtypeIdentity;
    exports["functorIdentity"] = functorIdentity;
    exports["applyIdentity"] = applyIdentity;
    exports["applicativeIdentity"] = applicativeIdentity;
    exports["bindIdentity"] = bindIdentity;
    exports["monadIdentity"] = monadIdentity;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Control.Monad.Except"] = $PS["Control.Monad.Except"] || {};
    var exports = $PS["Control.Monad.Except"];
    var Control_Monad_Except_Trans = $PS["Control.Monad.Except.Trans"];
    var Data_Identity = $PS["Data.Identity"];
    var Data_Newtype = $PS["Data.Newtype"];
    var runExcept = (function () {
        var $0 = Data_Newtype.unwrap(Data_Identity.newtypeIdentity);
        return function ($1) {
            return $0(Control_Monad_Except_Trans.runExceptT($1));
        };
    })();
    exports["runExcept"] = runExcept;
})(PS);
(function (exports) {
    "use strict";

    exports.eventListener = function (fn) {
        return function (event) {
            return fn(event)();
        };
    };

    exports.addEventListener = function (type) {
        return function (listener) {
            return function (useCapture) {
                return function (target) {
                    return function () {
                        target.addEventListener(type, listener, useCapture);
                        return {};
                    };
                };
            };
        };
    };
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Event.EventTarget"] = $PS["DOM.Event.EventTarget"] || {};
    var exports = $PS["DOM.Event.EventTarget"];
    var $foreign = $PS["DOM.Event.EventTarget"];
    exports["eventListener"] = $foreign.eventListener;
    exports["addEventListener"] = $foreign.addEventListener;
})(PS);
(function (exports) {
    "use strict";

    exports.toForeign = function (value) {
        return value;
    };

    exports.unsafeFromForeign = function (value) {
        return value;
    };

    exports.tagOf = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1);
    };
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function (exports) {
    "use strict";

    exports.foldrArray = function (f) {
        return function (init) {
            return function (xs) {
                var acc = init;
                var len = xs.length;
                for (var i = len - 1; i >= 0; i--) {
                    acc = f(xs[i])(acc);
                }
                return acc;
            };
        };
    };

    exports.foldlArray = function (f) {
        return function (init) {
            return function (xs) {
                var acc = init;
                var len = xs.length;
                for (var i = 0; i < len; i++) {
                    acc = f(acc)(xs[i]);
                }
                return acc;
            };
        };
    };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function (exports) {
    "use strict";

    exports.concatString = function (s1) {
        return function (s2) {
            return s1 + s2;
        };
    };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Semigroup"] = $PS["Data.Semigroup"] || {};
    var exports = $PS["Data.Semigroup"];
    var $foreign = $PS["Data.Semigroup"];
    var Semigroup = function (append) {
        this.append = append;
    };
    var semigroupString = new Semigroup($foreign.concatString);
    var append = function (dict) {
        return dict.append;
    };
    exports["Semigroup"] = Semigroup;
    exports["append"] = append;
    exports["semigroupString"] = semigroupString;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Monoid"] = $PS["Data.Monoid"] || {};
    var exports = $PS["Data.Monoid"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Monoid = function (Semigroup0, mempty) {
        this.Semigroup0 = Semigroup0;
        this.mempty = mempty;
    };
    var monoidString = new Monoid(function () {
        return Data_Semigroup.semigroupString;
    }, "");
    var mempty = function (dict) {
        return dict.mempty;
    };
    exports["Monoid"] = Monoid;
    exports["mempty"] = mempty;
    exports["monoidString"] = monoidString;
})(PS);
(function (exports) {
    "use strict";

    exports.intAdd = function (x) {
        return function (y) {
            /* jshint bitwise: false */
            return x + y | 0;
        };
    };

    exports.intMul = function (x) {
        return function (y) {
            /* jshint bitwise: false */
            return x * y | 0;
        };
    };

    exports.numAdd = function (n1) {
        return function (n2) {
            return n1 + n2;
        };
    };

    exports.numMul = function (n1) {
        return function (n2) {
            return n1 * n2;
        };
    };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Semiring"] = $PS["Data.Semiring"] || {};
    var exports = $PS["Data.Semiring"];
    var $foreign = $PS["Data.Semiring"];
    var Semiring = function (add, mul, one, zero) {
        this.add = add;
        this.mul = mul;
        this.one = one;
        this.zero = zero;
    };
    var zero = function (dict) {
        return dict.zero;
    };
    var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
    var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);
    var one = function (dict) {
        return dict.one;
    };
    var mul = function (dict) {
        return dict.mul;
    };
    var add = function (dict) {
        return dict.add;
    };
    exports["Semiring"] = Semiring;
    exports["add"] = add;
    exports["zero"] = zero;
    exports["mul"] = mul;
    exports["one"] = one;
    exports["semiringInt"] = semiringInt;
    exports["semiringNumber"] = semiringNumber;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Foldable"] = $PS["Data.Foldable"] || {};
    var exports = $PS["Data.Foldable"];
    var $foreign = $PS["Data.Foldable"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Category = $PS["Control.Category"];
    var Data_Function = $PS["Data.Function"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Semiring = $PS["Data.Semiring"];
    var Data_Unit = $PS["Data.Unit"];
    var Foldable = function (foldMap, foldl, foldr) {
        this.foldMap = foldMap;
        this.foldl = foldl;
        this.foldr = foldr;
    };
    var foldr = function (dict) {
        return dict.foldr;
    };
    var traverse_ = function (dictApplicative) {
        return function (dictFoldable) {
            return function (f) {
                return foldr(dictFoldable)((function () {
                    var $175 = Control_Apply.applySecond(dictApplicative.Apply0());
                    return function ($176) {
                        return $175(f($176));
                    };
                })())(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
            };
        };
    };
    var for_ = function (dictApplicative) {
        return function (dictFoldable) {
            return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
        };
    };
    var foldl = function (dict) {
        return dict.foldl;
    };
    var intercalate = function (dictFoldable) {
        return function (dictMonoid) {
            return function (sep) {
                return function (xs) {
                    var go = function (v) {
                        return function (x) {
                            if (v.init) {
                                return {
                                    init: false,
                                    acc: x
                                };
                            };
                            return {
                                init: false,
                                acc: Data_Semigroup.append(dictMonoid.Semigroup0())(v.acc)(Data_Semigroup.append(dictMonoid.Semigroup0())(sep)(x))
                            };
                        };
                    };
                    return (foldl(dictFoldable)(go)({
                        init: true,
                        acc: Data_Monoid.mempty(dictMonoid)
                    })(xs)).acc;
                };
            };
        };
    };
    var sum = function (dictFoldable) {
        return function (dictSemiring) {
            return foldl(dictFoldable)(Data_Semiring.add(dictSemiring))(Data_Semiring.zero(dictSemiring));
        };
    };
    var foldableMaybe = new Foldable(function (dictMonoid) {
        return function (f) {
            return function (v) {
                if (v instanceof Data_Maybe.Nothing) {
                    return Data_Monoid.mempty(dictMonoid);
                };
                if (v instanceof Data_Maybe.Just) {
                    return f(v.value0);
                };
                throw new Error("Failed pattern match at Data.Foldable (line 125, column 1 - line 131, column 27): " + [f.constructor.name, v.constructor.name]);
            };
        };
    }, function (v) {
        return function (z) {
            return function (v1) {
                if (v1 instanceof Data_Maybe.Nothing) {
                    return z;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    return v(z)(v1.value0);
                };
                throw new Error("Failed pattern match at Data.Foldable (line 125, column 1 - line 131, column 27): " + [v.constructor.name, z.constructor.name, v1.constructor.name]);
            };
        };
    }, function (v) {
        return function (z) {
            return function (v1) {
                if (v1 instanceof Data_Maybe.Nothing) {
                    return z;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    return v(v1.value0)(z);
                };
                throw new Error("Failed pattern match at Data.Foldable (line 125, column 1 - line 131, column 27): " + [v.constructor.name, z.constructor.name, v1.constructor.name]);
            };
        };
    });
    var foldMapDefaultR = function (dictFoldable) {
        return function (dictMonoid) {
            return function (f) {
                return foldr(dictFoldable)(function (x) {
                    return function (acc) {
                        return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                    };
                })(Data_Monoid.mempty(dictMonoid));
            };
        };
    };
    var foldableArray = new Foldable(function (dictMonoid) {
        return foldMapDefaultR(foldableArray)(dictMonoid);
    }, $foreign.foldlArray, $foreign.foldrArray);
    var foldMap = function (dict) {
        return dict.foldMap;
    };
    var fold = function (dictFoldable) {
        return function (dictMonoid) {
            return foldMap(dictFoldable)(dictMonoid)(Control_Category.id(Control_Category.categoryFn));
        };
    };
    var find = function (dictFoldable) {
        return function (p) {
            var go = function (v) {
                return function (v1) {
                    if (v instanceof Data_Maybe.Nothing && p(v1)) {
                        return new Data_Maybe.Just(v1);
                    };
                    return v;
                };
            };
            return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
        };
    };
    exports["Foldable"] = Foldable;
    exports["foldr"] = foldr;
    exports["foldl"] = foldl;
    exports["foldMap"] = foldMap;
    exports["foldMapDefaultR"] = foldMapDefaultR;
    exports["fold"] = fold;
    exports["traverse_"] = traverse_;
    exports["for_"] = for_;
    exports["intercalate"] = intercalate;
    exports["sum"] = sum;
    exports["find"] = find;
    exports["foldableArray"] = foldableArray;
    exports["foldableMaybe"] = foldableMaybe;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.NonEmpty"] = $PS["Data.NonEmpty"] || {};
    var exports = $PS["Data.NonEmpty"];
    var Control_Plus = $PS["Control.Plus"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var NonEmpty = (function () {
        function NonEmpty(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        NonEmpty.create = function (value0) {
            return function (value1) {
                return new NonEmpty(value0, value1);
            };
        };
        return NonEmpty;
    })();
    var singleton = function (dictPlus) {
        return function (a) {
            return new NonEmpty(a, Control_Plus.empty(dictPlus));
        };
    };
    var functorNonEmpty = function (dictFunctor) {
        return new Data_Functor.Functor(function (f) {
            return function (v) {
                return new NonEmpty(f(v.value0), Data_Functor.map(dictFunctor)(f)(v.value1));
            };
        });
    };
    var foldableNonEmpty = function (dictFoldable) {
        return new Data_Foldable.Foldable(function (dictMonoid) {
            return function (f) {
                return function (v) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v.value0))(Data_Foldable.foldMap(dictFoldable)(dictMonoid)(f)(v.value1));
                };
            };
        }, function (f) {
            return function (b) {
                return function (v) {
                    return Data_Foldable.foldl(dictFoldable)(f)(f(b)(v.value0))(v.value1);
                };
            };
        }, function (f) {
            return function (b) {
                return function (v) {
                    return f(v.value0)(Data_Foldable.foldr(dictFoldable)(f)(b)(v.value1));
                };
            };
        });
    };
    exports["NonEmpty"] = NonEmpty;
    exports["singleton"] = singleton;
    exports["functorNonEmpty"] = functorNonEmpty;
    exports["foldableNonEmpty"] = foldableNonEmpty;
})(PS);
(function (exports) {
    "use strict";

    // jshint maxparams: 3

    exports.traverseArrayImpl = function () {
        function Cont(fn) {
            this.fn = fn;
        }

        var emptyList = {};

        var ConsCell = function (head, tail) {
            this.head = head;
            this.tail = tail;
        };

        function consList(x) {
            return function (xs) {
                return new ConsCell(x, xs);
            };
        }

        function listToArray(list) {
            var arr = [];
            var xs = list;
            while (xs !== emptyList) {
                arr.push(xs.head);
                xs = xs.tail;
            }
            return arr;
        }

        return function (apply) {
            return function (map) {
                return function (pure) {
                    return function (f) {
                        var buildFrom = function (x, ys) {
                            return apply(map(consList)(f(x)))(ys);
                        };

                        var go = function (acc, currentLen, xs) {
                            if (currentLen === 0) {
                                return acc;
                            } else {
                                var last = xs[currentLen - 1];
                                return new Cont(function () {
                                    return go(buildFrom(last, acc), currentLen - 1, xs);
                                });
                            }
                        };

                        return function (array) {
                            var result = go(pure(emptyList), array.length, array);
                            while (result instanceof Cont) {
                                result = result.fn();
                            }

                            return map(listToArray)(result);
                        };
                    };
                };
            };
        };
    }();
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Traversable"] = $PS["Data.Traversable"] || {};
    var exports = $PS["Data.Traversable"];
    var $foreign = $PS["Data.Traversable"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Category = $PS["Control.Category"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Traversable = function (Foldable1, Functor0, sequence, traverse) {
        this.Foldable1 = Foldable1;
        this.Functor0 = Functor0;
        this.sequence = sequence;
        this.traverse = traverse;
    };
    var traverse = function (dict) {
        return dict.traverse;
    };
    var stateL = function (v) {
        return v;
    };
    var sequenceDefault = function (dictTraversable) {
        return function (dictApplicative) {
            return traverse(dictTraversable)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
        };
    };
    var traversableArray = new Traversable(function () {
        return Data_Foldable.foldableArray;
    }, function () {
        return Data_Functor.functorArray;
    }, function (dictApplicative) {
        return sequenceDefault(traversableArray)(dictApplicative);
    }, function (dictApplicative) {
        return $foreign.traverseArrayImpl(Control_Apply.apply(dictApplicative.Apply0()))(Data_Functor.map((dictApplicative.Apply0()).Functor0()))(Control_Applicative.pure(dictApplicative));
    });
    var sequence = function (dict) {
        return dict.sequence;
    };
    var functorStateL = new Data_Functor.Functor(function (f) {
        return function (k) {
            return function (s) {
                var v = stateL(k)(s);
                return {
                    accum: v.accum,
                    value: f(v.value)
                };
            };
        };
    });
    var applyStateL = new Control_Apply.Apply(function () {
        return functorStateL;
    }, function (f) {
        return function (x) {
            return function (s) {
                var v = stateL(f)(s);
                var v1 = stateL(x)(v.accum);
                return {
                    accum: v1.accum,
                    value: v.value(v1.value)
                };
            };
        };
    });
    var applicativeStateL = new Control_Applicative.Applicative(function () {
        return applyStateL;
    }, function (a) {
        return function (s) {
            return {
                accum: s,
                value: a
            };
        };
    });
    var mapAccumL = function (dictTraversable) {
        return function (f) {
            return function (s0) {
                return function (xs) {
                    return stateL(traverse(dictTraversable)(applicativeStateL)(function (a) {
                        return function (s) {
                            return f(s)(a);
                        };
                    })(xs))(s0);
                };
            };
        };
    };
    var scanl = function (dictTraversable) {
        return function (f) {
            return function (b0) {
                return function (xs) {
                    return (mapAccumL(dictTraversable)(function (b) {
                        return function (a) {
                            var b$prime = f(b)(a);
                            return {
                                accum: b$prime,
                                value: b$prime
                            };
                        };
                    })(b0)(xs)).value;
                };
            };
        };
    };
    exports["Traversable"] = Traversable;
    exports["traverse"] = traverse;
    exports["sequence"] = sequence;
    exports["sequenceDefault"] = sequenceDefault;
    exports["scanl"] = scanl;
    exports["mapAccumL"] = mapAccumL;
    exports["traversableArray"] = traversableArray;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Unfoldable"] = $PS["Data.Unfoldable"] || {};
    var exports = $PS["Data.Unfoldable"];
    var Unfoldable = function (unfoldr) {
        this.unfoldr = unfoldr;
    };
    var unfoldr = function (dict) {
        return dict.unfoldr;
    };
    exports["Unfoldable"] = Unfoldable;
    exports["unfoldr"] = unfoldr;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.List.Types"] = $PS["Data.List.Types"] || {};
    var exports = $PS["Data.List.Types"];
    var Control_Alt = $PS["Control.Alt"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Category = $PS["Control.Category"];
    var Control_Plus = $PS["Control.Plus"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_NonEmpty = $PS["Data.NonEmpty"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Traversable = $PS["Data.Traversable"];
    var Data_Unfoldable = $PS["Data.Unfoldable"];
    var Nil = (function () {
        function Nil() {

        };
        Nil.value = new Nil();
        return Nil;
    })();
    var Cons = (function () {
        function Cons(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Cons.create = function (value0) {
            return function (value1) {
                return new Cons(value0, value1);
            };
        };
        return Cons;
    })();
    var NonEmptyList = function (x) {
        return x;
    };
    var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
        return function (f) {
            return Data_Foldable.foldl(foldableList)(function (acc) {
                var $116 = Data_Semigroup.append(dictMonoid.Semigroup0())(acc);
                return function ($117) {
                    return $116(f($117));
                };
            })(Data_Monoid.mempty(dictMonoid));
        };
    }, function (f) {
        var go = function ($copy_b) {
            return function ($copy_v) {
                var $tco_var_b = $copy_b;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(b, v) {
                    if (v instanceof Nil) {
                        $tco_done = true;
                        return b;
                    };
                    if (v instanceof Cons) {
                        $tco_var_b = f(b)(v.value0);
                        $copy_v = v.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List.Types (line 76, column 12 - line 78, column 30): " + [v.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_b, $copy_v);
                };
                return $tco_result;
            };
        };
        return go;
    }, function (f) {
        return function (b) {
            var rev = function ($copy_acc) {
                return function ($copy_v) {
                    var $tco_var_acc = $copy_acc;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(acc, v) {
                        if (v instanceof Nil) {
                            $tco_done = true;
                            return acc;
                        };
                        if (v instanceof Cons) {
                            $tco_var_acc = new Cons(v.value0, acc);
                            $copy_v = v.value1;
                            return;
                        };
                        throw new Error("Failed pattern match at Data.List.Types (line 71, column 15 - line 73, column 33): " + [v.constructor.name]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_acc, $copy_v);
                    };
                    return $tco_result;
                };
            };
            var $118 = Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b);
            var $119 = rev(Nil.value);
            return function ($120) {
                return $118($119($120));
            };
        };
    });
    var functorList = new Data_Functor.Functor(function (f) {
        return Data_Foldable.foldr(foldableList)(function (x) {
            return function (acc) {
                return new Cons(f(x), acc);
            };
        })(Nil.value);
    });
    var functorNonEmptyList = Data_NonEmpty.functorNonEmpty(functorList);
    var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
        return function (ys) {
            return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
        };
    });
    var monoidList = new Data_Monoid.Monoid(function () {
        return semigroupList;
    }, Nil.value);
    var traversableList = new Data_Traversable.Traversable(function () {
        return foldableList;
    }, function () {
        return functorList;
    }, function (dictApplicative) {
        return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
    }, function (dictApplicative) {
        return function (f) {
            var $121 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value));
            var $122 = Data_Foldable.foldl(foldableList)(function (acc) {
                var $124 = Control_Apply.lift2(dictApplicative.Apply0())(Data_Function.flip(Cons.create))(acc);
                return function ($125) {
                    return $124(f($125));
                };
            })(Control_Applicative.pure(dictApplicative)(Nil.value));
            return function ($123) {
                return $121($122($123));
            };
        };
    });
    var unfoldableList = new Data_Unfoldable.Unfoldable(function (f) {
        return function (b) {
            var go = function ($copy_source) {
                return function ($copy_memo) {
                    var $tco_var_source = $copy_source;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(source, memo) {
                        var v = f(source);
                        if (v instanceof Data_Maybe.Nothing) {
                            $tco_done = true;
                            return Data_Foldable.foldl(foldableList)(Data_Function.flip(Cons.create))(Nil.value)(memo);
                        };
                        if (v instanceof Data_Maybe.Just) {
                            $tco_var_source = v.value0.value1;
                            $copy_memo = new Cons(v.value0.value0, memo);
                            return;
                        };
                        throw new Error("Failed pattern match at Data.List.Types (line 84, column 22 - line 86, column 52): " + [v.constructor.name]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(Nil.value);
        };
    });
    var eq1List = new Data_Eq.Eq1(function (dictEq) {
        return function (xs) {
            return function (ys) {
                var go = function ($copy_v) {
                    return function ($copy_v1) {
                        return function ($copy_v2) {
                            var $tco_var_v = $copy_v;
                            var $tco_var_v1 = $copy_v1;
                            var $tco_done = false;
                            var $tco_result;
                            function $tco_loop(v, v1, v2) {
                                if (!v2) {
                                    $tco_done = true;
                                    return false;
                                };
                                if (v instanceof Nil && v1 instanceof Nil) {
                                    $tco_done = true;
                                    return v2;
                                };
                                if (v instanceof Cons && v1 instanceof Cons) {
                                    $tco_var_v = v.value1;
                                    $tco_var_v1 = v1.value1;
                                    $copy_v2 = v2 && Data_Eq.eq(dictEq)(v1.value0)(v.value0);
                                    return;
                                };
                                $tco_done = true;
                                return false;
                            };
                            while (!$tco_done) {
                                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                            };
                            return $tco_result;
                        };
                    };
                };
                return go(xs)(ys)(true);
            };
        };
    });
    var eqList = function (dictEq) {
        return new Data_Eq.Eq(Data_Eq.eq1(eq1List)(dictEq));
    };
    var applyList = new Control_Apply.Apply(function () {
        return functorList;
    }, function (v) {
        return function (v1) {
            if (v instanceof Nil) {
                return Nil.value;
            };
            if (v instanceof Cons) {
                return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
            };
            throw new Error("Failed pattern match at Data.List.Types (line 92, column 1 - line 94, column 48): " + [v.constructor.name, v1.constructor.name]);
        };
    });
    var applyNonEmptyList = new Control_Apply.Apply(function () {
        return functorNonEmptyList;
    }, function (v) {
        return function (v1) {
            return new Data_NonEmpty.NonEmpty(v.value0(v1.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v.value1)(new Cons(v1.value0, Nil.value)))(Control_Apply.apply(applyList)(new Cons(v.value0, v.value1))(v1.value1)));
        };
    });
    var bindList = new Control_Bind.Bind(function () {
        return applyList;
    }, function (v) {
        return function (v1) {
            if (v instanceof Nil) {
                return Nil.value;
            };
            if (v instanceof Cons) {
                return Data_Semigroup.append(semigroupList)(v1(v.value0))(Control_Bind.bind(bindList)(v.value1)(v1));
            };
            throw new Error("Failed pattern match at Data.List.Types (line 99, column 1 - line 101, column 37): " + [v.constructor.name, v1.constructor.name]);
        };
    });
    var altList = new Control_Alt.Alt(function () {
        return functorList;
    }, Data_Semigroup.append(semigroupList));
    var plusList = new Control_Plus.Plus(function () {
        return altList;
    }, Nil.value);
    var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
        return applyNonEmptyList;
    }, (function () {
        var $127 = Data_NonEmpty.singleton(plusList);
        return function ($128) {
            return NonEmptyList($127($128));
        };
    })());
    exports["Nil"] = Nil;
    exports["Cons"] = Cons;
    exports["NonEmptyList"] = NonEmptyList;
    exports["eqList"] = eqList;
    exports["eq1List"] = eq1List;
    exports["semigroupList"] = semigroupList;
    exports["monoidList"] = monoidList;
    exports["functorList"] = functorList;
    exports["foldableList"] = foldableList;
    exports["unfoldableList"] = unfoldableList;
    exports["traversableList"] = traversableList;
    exports["applyList"] = applyList;
    exports["bindList"] = bindList;
    exports["altList"] = altList;
    exports["plusList"] = plusList;
    exports["functorNonEmptyList"] = functorNonEmptyList;
    exports["applyNonEmptyList"] = applyNonEmptyList;
    exports["applicativeNonEmptyList"] = applicativeNonEmptyList;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.List.NonEmpty"] = $PS["Data.List.NonEmpty"] || {};
    var exports = $PS["Data.List.NonEmpty"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_NonEmpty = $PS["Data.NonEmpty"];
    var singleton = (function () {
        var $43 = Data_NonEmpty.singleton(Data_List_Types.plusList);
        return function ($44) {
            return Data_List_Types.NonEmptyList($43($44));
        };
    })();
    exports["singleton"] = singleton;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Foreign"] = $PS["Data.Foreign"] || {};
    var exports = $PS["Data.Foreign"];
    var $foreign = $PS["Data.Foreign"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Monad_Error_Class = $PS["Control.Monad.Error.Class"];
    var Control_Monad_Except_Trans = $PS["Control.Monad.Except.Trans"];
    var Data_Boolean = $PS["Data.Boolean"];
    var Data_Identity = $PS["Data.Identity"];
    var Data_List_NonEmpty = $PS["Data.List.NonEmpty"];
    var TypeMismatch = (function () {
        function TypeMismatch(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        TypeMismatch.create = function (value0) {
            return function (value1) {
                return new TypeMismatch(value0, value1);
            };
        };
        return TypeMismatch;
    })();
    var fail = (function () {
        var $121 = Control_Monad_Error_Class.throwError(Control_Monad_Except_Trans.monadThrowExceptT(Data_Identity.monadIdentity));
        return function ($122) {
            return $121(Data_List_NonEmpty.singleton($122));
        };
    })();
    var unsafeReadTagged = function (tag) {
        return function (value) {
            if ($foreign.tagOf(value) === tag) {
                return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))($foreign.unsafeFromForeign(value));
            };
            if (Data_Boolean.otherwise) {
                return fail(new TypeMismatch(tag, $foreign.tagOf(value)));
            };
            throw new Error("Failed pattern match at Data.Foreign (line 104, column 1 - line 104, column 55): " + [tag.constructor.name, value.constructor.name]);
        };
    };
    exports["TypeMismatch"] = TypeMismatch;
    exports["unsafeReadTagged"] = unsafeReadTagged;
    exports["fail"] = fail;
    exports["toForeign"] = $foreign.toForeign;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Event.Types"] = $PS["DOM.Event.Types"] || {};
    var exports = $PS["DOM.Event.Types"];
    var Data_Foreign = $PS["Data.Foreign"];
    var readKeyboardEvent = Data_Foreign.unsafeReadTagged("KeyboardEvent");
    exports["readKeyboardEvent"] = readKeyboardEvent;
})(PS);
(function (exports) {
    /* global window */
    "use strict";

    exports.window = function () {
        return window;
    };
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.HTML"] = $PS["DOM.HTML"] || {};
    var exports = $PS["DOM.HTML"];
    var $foreign = $PS["DOM.HTML"];
    exports["window"] = $foreign.window;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.HTML.Event.EventTypes"] = $PS["DOM.HTML.Event.EventTypes"] || {};
    var exports = $PS["DOM.HTML.Event.EventTypes"];
    var keydown = "keydown";
    var click = "click";
    var change = "change";
    exports["change"] = change;
    exports["click"] = click;
    exports["keydown"] = keydown;
})(PS);
(function (exports) {
    "use strict";

    exports._readHTMLElement = function (failure) {
        return function (success) {
            return function (value) {
                var tag = Object.prototype.toString.call(value);
                if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
                    return success(value);
                } else {
                    return failure(tag);
                }
            };
        };
    };
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function (exports) {
    "use strict";

    // module Unsafe.Coerce

    exports.unsafeCoerce = function (x) {
        return x;
    };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Unsafe.Coerce"] = $PS["Unsafe.Coerce"] || {};
    var exports = $PS["Unsafe.Coerce"];
    var $foreign = $PS["Unsafe.Coerce"];
    exports["unsafeCoerce"] = $foreign.unsafeCoerce;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.HTML.Types"] = $PS["DOM.HTML.Types"] || {};
    var exports = $PS["DOM.HTML.Types"];
    var $foreign = $PS["DOM.HTML.Types"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Monad_Except_Trans = $PS["Control.Monad.Except.Trans"];
    var Data_Either = $PS["Data.Either"];
    var Data_Foreign = $PS["Data.Foreign"];
    var Data_Identity = $PS["Data.Identity"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var windowToEventTarget = Unsafe_Coerce.unsafeCoerce;
    var readHTMLElement = $foreign["_readHTMLElement"]((function () {
        var $0 = Control_Monad_Except_Trans.except(Data_Identity.applicativeIdentity);
        var $1 = Control_Applicative.pure(Data_List_Types.applicativeNonEmptyList);
        var $2 = Data_Foreign.TypeMismatch.create("HTMLElement");
        return function ($3) {
            return $0(Data_Either.Left.create($1($2($3))));
        };
    })())((function () {
        var $4 = Control_Monad_Except_Trans.except(Data_Identity.applicativeIdentity);
        return function ($5) {
            return $4(Data_Either.Right.create($5));
        };
    })());
    var htmlElementToEventTarget = Unsafe_Coerce.unsafeCoerce;
    var htmlElementToElement = Unsafe_Coerce.unsafeCoerce;
    var htmlDocumentToDocument = Unsafe_Coerce.unsafeCoerce;
    exports["windowToEventTarget"] = windowToEventTarget;
    exports["htmlDocumentToDocument"] = htmlDocumentToDocument;
    exports["htmlElementToElement"] = htmlElementToElement;
    exports["htmlElementToEventTarget"] = htmlElementToEventTarget;
    exports["readHTMLElement"] = readHTMLElement;
})(PS);
(function (exports) {
    "use strict";

    exports.document = function (window) {
        return function () {
            return window.document;
        };
    };
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.HTML.Window"] = $PS["DOM.HTML.Window"] || {};
    var exports = $PS["DOM.HTML.Window"];
    var $foreign = $PS["DOM.HTML.Window"];
    exports["document"] = $foreign.document;
})(PS);
(function (exports) {
    "use strict";

    exports.createElement = function (localName) {
        return function (doc) {
            return function () {
                return doc.createElement(localName);
            };
        };
    };
})(PS["DOM.Node.Document"] = PS["DOM.Node.Document"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Node.Document"] = $PS["DOM.Node.Document"] || {};
    var exports = $PS["DOM.Node.Document"];
    var $foreign = $PS["DOM.Node.Document"];
    exports["createElement"] = $foreign.createElement;
})(PS);
(function (exports) {
    "use strict";

    exports.setAttribute = function (name) {
        return function (value) {
            return function (element) {
                return function () {
                    element.setAttribute(name, value);
                    return {};
                };
            };
        };
    };

    exports._getAttribute = function (name) {
        return function (element) {
            return function () {
                return element.getAttribute(name);
            };
        };
    };
})(PS["DOM.Node.Element"] = PS["DOM.Node.Element"] || {});
(function (exports) {
    "use strict";

    exports.nullable = function (a, r, f) {
        return a == null ? r : f(a);
    };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Nullable"] = $PS["Data.Nullable"] || {};
    var exports = $PS["Data.Nullable"];
    var $foreign = $PS["Data.Nullable"];
    var Data_Maybe = $PS["Data.Maybe"];
    var toMaybe = function (n) {
        return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
    };
    exports["toMaybe"] = toMaybe;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Node.Element"] = $PS["DOM.Node.Element"] || {};
    var exports = $PS["DOM.Node.Element"];
    var $foreign = $PS["DOM.Node.Element"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Nullable = $PS["Data.Nullable"];
    var getAttribute = function (attr) {
        var $3 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe);
        var $4 = $foreign["_getAttribute"](attr);
        return function ($5) {
            return $3($4($5));
        };
    };
    exports["getAttribute"] = getAttribute;
    exports["setAttribute"] = $foreign.setAttribute;
})(PS);
(function (exports) {
    "use strict";

    var getEffProp = function (name) {
        return function (node) {
            return function () {
                return node[name];
            };
        };
    };

    exports._parentElement = getEffProp("parentElement");

    exports.textContent = getEffProp("textContent");

    exports.setTextContent = function (value) {
        return function (node) {
            return function () {
                node.textContent = value;
                return {};
            };
        };
    };

    exports.appendChild = function (node) {
        return function (parent) {
            return function () {
                return parent.appendChild(node);
            };
        };
    };
})(PS["DOM.Node.Node"] = PS["DOM.Node.Node"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Node.Node"] = $PS["DOM.Node.Node"] || {};
    var exports = $PS["DOM.Node.Node"];
    var $foreign = $PS["DOM.Node.Node"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Nullable = $PS["Data.Nullable"];
    var parentElement = (function () {
        var $5 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe);
        return function ($6) {
            return $5($foreign["_parentElement"]($6));
        };
    })();
    exports["parentElement"] = parentElement;
    exports["setTextContent"] = $foreign.setTextContent;
    exports["appendChild"] = $foreign.appendChild;
})(PS);
(function (exports) {
    "use strict";

    exports._getElementById = function (id) {
        return function (node) {
            return function () {
                return node.getElementById(id);
            };
        };
    };
})(PS["DOM.Node.NonElementParentNode"] = PS["DOM.Node.NonElementParentNode"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Node.NonElementParentNode"] = $PS["DOM.Node.NonElementParentNode"] || {};
    var exports = $PS["DOM.Node.NonElementParentNode"];
    var $foreign = $PS["DOM.Node.NonElementParentNode"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Nullable = $PS["Data.Nullable"];
    var getElementById = function (eid) {
        var $0 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe);
        var $1 = $foreign["_getElementById"](eid);
        return function ($2) {
            return $0($1($2));
        };
    };
    exports["getElementById"] = getElementById;
})(PS);
(function (exports) {
    "use strict";

    var getEffProp = function (name) {
        return function (node) {
            return function () {
                return node[name];
            };
        };
    };

    exports.children = getEffProp("children");
})(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Node.ParentNode"] = $PS["DOM.Node.ParentNode"] || {};
    var exports = $PS["DOM.Node.ParentNode"];
    var $foreign = $PS["DOM.Node.ParentNode"];
    exports["children"] = $foreign.children;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOM.Node.Types"] = $PS["DOM.Node.Types"] || {};
    var exports = $PS["DOM.Node.Types"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var elementToParentNode = Unsafe_Coerce.unsafeCoerce;
    var elementToNode = Unsafe_Coerce.unsafeCoerce;
    var elementToEventTarget = Unsafe_Coerce.unsafeCoerce;
    var documentToNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
    exports["documentToNonElementParentNode"] = documentToNonElementParentNode;
    exports["elementToParentNode"] = elementToParentNode;
    exports["elementToNode"] = elementToNode;
    exports["elementToEventTarget"] = elementToEventTarget;
})(PS);
(function (exports) {
    exports.getSelectedValue = function (src) {
        return function () {
            return src.options[src.selectedIndex].value;
        };
    };

    exports.setInnerHTML = function (value) {
        return function (element) {
            return function () {
                element.innerHTML = value;
                return {};
            };
        };
    };

    exports.htmlCollectionToArray = function (collection) {
        return Array.prototype.slice.call(collection);
    };

    exports.keyCode = function (ev) {
        return ev.keyCode;
    };

    exports.ctrlKey = function (ev) {
        return ev.ctrlKey;
    };

    exports.setStyleAttribute = function (name) {
        return function (value) {
            return function (element) {
                return function () {
                    element.style[name] = value;
                    return {};
                };
            };
        };
    };


    exports.classAdd = function (value) {
        return function (element) {
            return function () {
                element.classList.add(value);
                return {};
            };
        };
    };

    exports.classRemove = function (value) {
        return function (element) {
            return function () {
                element.classList.remove(value);
                return {};
            };
        };
    };
})(PS["DOMHelper"] = PS["DOMHelper"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["DOMHelper"] = $PS["DOMHelper"] || {};
    var exports = $PS["DOMHelper"];
    var $foreign = $PS["DOMHelper"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Control_Monad_Except = $PS["Control.Monad.Except"];
    var DOM_Event_EventTarget = $PS["DOM.Event.EventTarget"];
    var DOM_Event_Types = $PS["DOM.Event.Types"];
    var DOM_HTML = $PS["DOM.HTML"];
    var DOM_HTML_Types = $PS["DOM.HTML.Types"];
    var DOM_HTML_Window = $PS["DOM.HTML.Window"];
    var DOM_Node_Element = $PS["DOM.Node.Element"];
    var DOM_Node_NonElementParentNode = $PS["DOM.Node.NonElementParentNode"];
    var DOM_Node_ParentNode = $PS["DOM.Node.ParentNode"];
    var DOM_Node_Types = $PS["DOM.Node.Types"];
    var Data_Either = $PS["Data.Either"];
    var Data_Foreign = $PS["Data.Foreign"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Unit = $PS["Data.Unit"];
    var unsafeGetAttribute = function (key) {
        return function (el) {
            return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Maybe.fromJust())(DOM_Node_Element.getAttribute(key)(el));
        };
    };
    var unsafeEventToKeyboardEvent = (function (dictPartial) {
        var $3 = Data_Either.fromRight(dictPartial);
        return function ($4) {
            return $3(Control_Monad_Except.runExcept(DOM_Event_Types.readKeyboardEvent(Data_Foreign.toForeign($4))));
        };
    })();
    var unsafeElementToHTMLElement = (function (dictPartial) {
        var $5 = Data_Either.fromRight(dictPartial);
        return function ($6) {
            return $5(Control_Monad_Except.runExcept(DOM_HTML_Types.readHTMLElement(Data_Foreign.toForeign($6))));
        };
    })();
    var getElementById$prime = function (id) {
        return function (doc) {
            var docNode = DOM_Node_Types.documentToNonElementParentNode(doc);
            return DOM_Node_NonElementParentNode.getElementById(id)(docNode);
        };
    };
    var withElementById = function (id) {
        return function (doc) {
            return function (action) {
                return Control_Bind.bind(Control_Monad_Eff.bindEff)(getElementById$prime(id)(doc))(Data_Maybe.maybe(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))(action));
            };
        };
    };
    var getDocument = Data_Functor.mapFlipped(Control_Monad_Eff.functorEff)(Control_Bind.bind(Control_Monad_Eff.bindEff)(DOM_HTML.window)(DOM_HTML_Window.document))(DOM_HTML_Types.htmlDocumentToDocument);
    var children$prime = function (el) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)($foreign.htmlCollectionToArray)(DOM_Node_ParentNode.children(DOM_Node_Types.elementToParentNode(el)));
    };
    var addEventListener$prime = function (etype) {
        return function (listener) {
            return function (target) {
                return DOM_Event_EventTarget.addEventListener(etype)(DOM_Event_EventTarget.eventListener(listener))(true)(target);
            };
        };
    };
    exports["getDocument"] = getDocument;
    exports["getElementById'"] = getElementById$prime;
    exports["withElementById"] = withElementById;
    exports["children'"] = children$prime;
    exports["addEventListener'"] = addEventListener$prime;
    exports["unsafeElementToHTMLElement"] = unsafeElementToHTMLElement;
    exports["unsafeEventToKeyboardEvent"] = unsafeEventToKeyboardEvent;
    exports["unsafeGetAttribute"] = unsafeGetAttribute;
    exports["getSelectedValue"] = $foreign.getSelectedValue;
    exports["setInnerHTML"] = $foreign.setInnerHTML;
    exports["keyCode"] = $foreign.keyCode;
    exports["ctrlKey"] = $foreign.ctrlKey;
    exports["setStyleAttribute"] = $foreign.setStyleAttribute;
    exports["classAdd"] = $foreign.classAdd;
    exports["classRemove"] = $foreign.classRemove;
})(PS);
(function (exports) {
    "use strict";

    exports.fromFoldableImpl = (function () {
        // jshint maxparams: 2
        function Cons(head, tail) {
            this.head = head;
            this.tail = tail;
        }
        var emptyList = {};

        function curryCons(head) {
            return function (tail) {
                return new Cons(head, tail);
            };
        }

        function listToArray(list) {
            var result = [];
            var count = 0;
            var xs = list;
            while (xs !== emptyList) {
                result[count++] = xs.head;
                xs = xs.tail;
            }
            return result;
        }

        return function (foldr) {
            return function (xs) {
                return listToArray(foldr(curryCons)(emptyList)(xs));
            };
        };
    })();
})(PS["Data.Array"] = PS["Data.Array"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Array"] = $PS["Data.Array"] || {};
    var exports = $PS["Data.Array"];
    var $foreign = $PS["Data.Array"];
    var Data_Foldable = $PS["Data.Foldable"];
    var fromFoldable = function (dictFoldable) {
        return $foreign.fromFoldableImpl(Data_Foldable.foldr(dictFoldable));
    };
    exports["fromFoldable"] = fromFoldable;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Tuple"] = $PS["Data.Tuple"] || {};
    var exports = $PS["Data.Tuple"];
    var Tuple = (function () {
        function Tuple(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Tuple.create = function (value0) {
            return function (value1) {
                return new Tuple(value0, value1);
            };
        };
        return Tuple;
    })();
    exports["Tuple"] = Tuple;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Enum"] = $PS["Data.Enum"] || {};
    var exports = $PS["Data.Enum"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_MonadZero = $PS["Control.MonadZero"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Tuple = $PS["Data.Tuple"];
    var Data_Unfoldable = $PS["Data.Unfoldable"];
    var Enum = function (Ord0, pred, succ) {
        this.Ord0 = Ord0;
        this.pred = pred;
        this.succ = succ;
    };
    var BoundedEnum = function (Bounded0, Enum1, cardinality, fromEnum, toEnum) {
        this.Bounded0 = Bounded0;
        this.Enum1 = Enum1;
        this.cardinality = cardinality;
        this.fromEnum = fromEnum;
        this.toEnum = toEnum;
    };
    var toEnum = function (dict) {
        return dict.toEnum;
    };
    var succ = function (dict) {
        return dict.succ;
    };
    var pred = function (dict) {
        return dict.pred;
    };
    var fromEnum = function (dict) {
        return dict.fromEnum;
    };
    var enumFromTo = function (dictEnum) {
        return function (dictUnfoldable) {
            return function (from) {
                return function (to) {
                    var go = function (mx) {
                        return Control_Bind.bind(Data_Maybe.bindMaybe)(mx)(function (v) {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Data_Maybe.bindMaybe)(Control_MonadZero.guard(Data_Maybe.monadZeroMaybe)(Data_Ord.lessThanOrEq(dictEnum.Ord0())(v)(to)))(function () {
                                return Control_Applicative.pure(Data_Maybe.applicativeMaybe)(new Data_Tuple.Tuple(v, succ(dictEnum)(v)));
                            });
                        });
                    };
                    return Data_Unfoldable.unfoldr(dictUnfoldable)(go)(new Data_Maybe.Just(from));
                };
            };
        };
    };
    var defaultSucc = function (toEnum$prime) {
        return function (fromEnum$prime) {
            return function (a) {
                return toEnum$prime(fromEnum$prime(a) + 1 | 0);
            };
        };
    };
    var defaultPred = function (toEnum$prime) {
        return function (fromEnum$prime) {
            return function (a) {
                return toEnum$prime(fromEnum$prime(a) - 1 | 0);
            };
        };
    };
    var cardinality = function (dict) {
        return dict.cardinality;
    };
    exports["Enum"] = Enum;
    exports["succ"] = succ;
    exports["pred"] = pred;
    exports["defaultSucc"] = defaultSucc;
    exports["defaultPred"] = defaultPred;
    exports["enumFromTo"] = enumFromTo;
    exports["BoundedEnum"] = BoundedEnum;
    exports["cardinality"] = cardinality;
    exports["toEnum"] = toEnum;
    exports["fromEnum"] = fromEnum;
})(PS);
(function (exports) {
    "use strict";

    exports.runFn4 = function (fn) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return fn(a, b, c, d);
                    };
                };
            };
        };
    };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.Function.Uncurried"] = $PS["Data.Function.Uncurried"] || {};
    var exports = $PS["Data.Function.Uncurried"];
    var $foreign = $PS["Data.Function.Uncurried"];
    exports["runFn4"] = $foreign.runFn4;
})(PS);
(function (exports) {
    "use strict";

    exports.boolConj = function (b1) {
        return function (b2) {
            return b1 && b2;
        };
    };

    exports.boolDisj = function (b1) {
        return function (b2) {
            return b1 || b2;
        };
    };

    exports.boolNot = function (b) {
        return !b;
    };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.HeytingAlgebra"] = $PS["Data.HeytingAlgebra"] || {};
    var exports = $PS["Data.HeytingAlgebra"];
    var $foreign = $PS["Data.HeytingAlgebra"];
    var HeytingAlgebra = function (conj, disj, ff, implies, not, tt) {
        this.conj = conj;
        this.disj = disj;
        this.ff = ff;
        this.implies = implies;
        this.not = not;
        this.tt = tt;
    };
    var tt = function (dict) {
        return dict.tt;
    };
    var not = function (dict) {
        return dict.not;
    };
    var implies = function (dict) {
        return dict.implies;
    };
    var ff = function (dict) {
        return dict.ff;
    };
    var disj = function (dict) {
        return dict.disj;
    };
    var heytingAlgebraBoolean = new HeytingAlgebra($foreign.boolConj, $foreign.boolDisj, false, function (a) {
        return function (b) {
            return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
        };
    }, $foreign.boolNot, true);
    var conj = function (dict) {
        return dict.conj;
    };
    exports["HeytingAlgebra"] = HeytingAlgebra;
    exports["tt"] = tt;
    exports["ff"] = ff;
    exports["implies"] = implies;
    exports["conj"] = conj;
    exports["disj"] = disj;
    exports["not"] = not;
    exports["heytingAlgebraBoolean"] = heytingAlgebraBoolean;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.List"] = $PS["Data.List"] || {};
    var exports = $PS["Data.List"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Category = $PS["Control.Category"];
    var Data_Boolean = $PS["Data.Boolean"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Ordering = $PS["Data.Ordering"];
    var tail = function (v) {
        if (v instanceof Data_List_Types.Nil) {
            return Data_Maybe.Nothing.value;
        };
        if (v instanceof Data_List_Types.Cons) {
            return new Data_Maybe.Just(v.value1);
        };
        throw new Error("Failed pattern match at Data.List (line 238, column 1 - line 238, column 43): " + [v.constructor.name]);
    };
    var span = function (v) {
        return function (v1) {
            if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
                var v2 = span(v)(v1.value1);
                return {
                    init: new Data_List_Types.Cons(v1.value0, v2.init),
                    rest: v2.rest
                };
            };
            return {
                init: Data_List_Types.Nil.value,
                rest: v1
            };
        };
    };
    var singleton = function (a) {
        return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
    };
    var sortBy = function (cmp) {
        var merge = function (v) {
            return function (v1) {
                if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                    if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v1.value0))(Data_Ordering.GT.value)) {
                        return new Data_List_Types.Cons(v1.value0, merge(v)(v1.value1));
                    };
                    if (Data_Boolean.otherwise) {
                        return new Data_List_Types.Cons(v.value0, merge(v.value1)(v1));
                    };
                };
                if (v instanceof Data_List_Types.Nil) {
                    return v1;
                };
                if (v1 instanceof Data_List_Types.Nil) {
                    return v;
                };
                throw new Error("Failed pattern match at Data.List (line 467, column 3 - line 467, column 38): " + [v.constructor.name, v1.constructor.name]);
            };
        };
        var mergePairs = function (v) {
            if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
                return new Data_List_Types.Cons(merge(v.value0)(v.value1.value0), mergePairs(v.value1.value1));
            };
            return v;
        };
        var mergeAll = function ($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
                if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return v.value0;
                };
                $copy_v = mergePairs(v);
                return;
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_v);
            };
            return $tco_result;
        };
        var sequences = function (v) {
            if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Cons) {
                if (Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(v.value0)(v.value1.value0))(Data_Ordering.GT.value)) {
                    return descending(v.value1.value0)(singleton(v.value0))(v.value1.value1);
                };
                if (Data_Boolean.otherwise) {
                    return ascending(v.value1.value0)(function (v1) {
                        return new Data_List_Types.Cons(v.value0, v1);
                    })(v.value1.value1);
                };
            };
            return singleton(v);
        };
        var descending = function ($copy_a) {
            return function ($copy_as) {
                return function ($copy_v) {
                    var $tco_var_a = $copy_a;
                    var $tco_var_as = $copy_as;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(a, as, v) {
                        if (v instanceof Data_List_Types.Cons && Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                            $tco_var_a = v.value0;
                            $tco_var_as = new Data_List_Types.Cons(a, as);
                            $copy_v = v.value1;
                            return;
                        };
                        $tco_done = true;
                        return new Data_List_Types.Cons(new Data_List_Types.Cons(a, as), sequences(v));
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                    };
                    return $tco_result;
                };
            };
        };
        var ascending = function ($copy_a) {
            return function ($copy_as) {
                return function ($copy_v) {
                    var $tco_var_a = $copy_a;
                    var $tco_var_as = $copy_as;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(a, as, v) {
                        if (v instanceof Data_List_Types.Cons && Data_Eq.notEq(Data_Ordering.eqOrdering)(cmp(a)(v.value0))(Data_Ordering.GT.value)) {
                            $tco_var_a = v.value0;
                            $tco_var_as = function (ys) {
                                return as(new Data_List_Types.Cons(a, ys));
                            };
                            $copy_v = v.value1;
                            return;
                        };
                        $tco_done = true;
                        return new Data_List_Types.Cons(as(singleton(a)), sequences(v));
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
                    };
                    return $tco_result;
                };
            };
        };
        return function ($304) {
            return mergeAll(sequences($304));
        };
    };
    var sort = function (dictOrd) {
        return function (xs) {
            return sortBy(Data_Ord.compare(dictOrd))(xs);
        };
    };
    var reverse = (function () {
        var go = function ($copy_acc) {
            return function ($copy_v) {
                var $tco_var_acc = $copy_acc;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, v) {
                    if (v instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return acc;
                    };
                    if (v instanceof Data_List_Types.Cons) {
                        $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                        $copy_v = v.value1;
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List (line 361, column 3 - line 361, column 19): " + [acc.constructor.name, v.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $copy_v);
                };
                return $tco_result;
            };
        };
        return go(Data_List_Types.Nil.value);
    })();
    var snoc = function (xs) {
        return function (x) {
            return reverse(new Data_List_Types.Cons(x, reverse(xs)));
        };
    };
    var unsnoc = function (lst) {
        var go = function ($copy_v) {
            return function ($copy_acc) {
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, acc) {
                    if (v instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return Data_Maybe.Nothing.value;
                    };
                    if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return new Data_Maybe.Just({
                            revInit: acc,
                            last: v.value0
                        });
                    };
                    if (v instanceof Data_List_Types.Cons) {
                        $tco_var_v = v.value1;
                        $copy_acc = new Data_List_Types.Cons(v.value0, acc);
                        return;
                    };
                    throw new Error("Failed pattern match at Data.List (line 263, column 3 - line 263, column 23): " + [v.constructor.name, acc.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $copy_acc);
                };
                return $tco_result;
            };
        };
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (h) {
            return {
                init: reverse(h.revInit),
                last: h.last
            };
        })(go(lst)(Data_List_Types.Nil.value));
    };
    var zipWith = function (f) {
        return function (xs) {
            return function (ys) {
                var go = function ($copy_v) {
                    return function ($copy_v1) {
                        return function ($copy_acc) {
                            var $tco_var_v = $copy_v;
                            var $tco_var_v1 = $copy_v1;
                            var $tco_done = false;
                            var $tco_result;
                            function $tco_loop(v, v1, acc) {
                                if (v instanceof Data_List_Types.Nil) {
                                    $tco_done = true;
                                    return acc;
                                };
                                if (v1 instanceof Data_List_Types.Nil) {
                                    $tco_done = true;
                                    return acc;
                                };
                                if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
                                    $tco_var_v = v.value1;
                                    $tco_var_v1 = v1.value1;
                                    $copy_acc = new Data_List_Types.Cons(f(v.value0)(v1.value0), acc);
                                    return;
                                };
                                throw new Error("Failed pattern match at Data.List (line 652, column 3 - line 652, column 21): " + [v.constructor.name, v1.constructor.name, acc.constructor.name]);
                            };
                            while (!$tco_done) {
                                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_acc);
                            };
                            return $tco_result;
                        };
                    };
                };
                return reverse(go(xs)(ys)(Data_List_Types.Nil.value));
            };
        };
    };
    var $$null = function (v) {
        if (v instanceof Data_List_Types.Nil) {
            return true;
        };
        return false;
    };
    var mapMaybe = function (f) {
        var go = function ($copy_acc) {
            return function ($copy_v) {
                var $tco_var_acc = $copy_acc;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, v) {
                    if (v instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return reverse(acc);
                    };
                    if (v instanceof Data_List_Types.Cons) {
                        var v1 = f(v.value0);
                        if (v1 instanceof Data_Maybe.Nothing) {
                            $tco_var_acc = acc;
                            $copy_v = v.value1;
                            return;
                        };
                        if (v1 instanceof Data_Maybe.Just) {
                            $tco_var_acc = new Data_List_Types.Cons(v1.value0, acc);
                            $copy_v = v.value1;
                            return;
                        };
                        throw new Error("Failed pattern match at Data.List (line 412, column 5 - line 414, column 32): " + [v1.constructor.name]);
                    };
                    throw new Error("Failed pattern match at Data.List (line 410, column 3 - line 410, column 27): " + [acc.constructor.name, v.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $copy_v);
                };
                return $tco_result;
            };
        };
        return go(Data_List_Types.Nil.value);
    };
    var length = Data_Foldable.foldl(Data_List_Types.foldableList)(function (acc) {
        return function (v) {
            return acc + 1 | 0;
        };
    })(0);
    var last = function ($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
            if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return new Data_Maybe.Just(v.value0);
            };
            if (v instanceof Data_List_Types.Cons) {
                $copy_v = v.value1;
                return;
            };
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
        };
        return $tco_result;
    };
    var init = function (lst) {
        return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
            return v.init;
        })(unsnoc(lst));
    };
    var head = function (v) {
        if (v instanceof Data_List_Types.Nil) {
            return Data_Maybe.Nothing.value;
        };
        if (v instanceof Data_List_Types.Cons) {
            return new Data_Maybe.Just(v.value0);
        };
        throw new Error("Failed pattern match at Data.List (line 223, column 1 - line 223, column 22): " + [v.constructor.name]);
    };
    var fromFoldable = function (dictFoldable) {
        return Data_Foldable.foldr(dictFoldable)(Data_List_Types.Cons.create)(Data_List_Types.Nil.value);
    };
    var findIndex = function (fn) {
        var go = function ($copy_v) {
            return function ($copy_v1) {
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, v1) {
                    if (v1 instanceof Data_List_Types.Cons) {
                        if (fn(v1.value0)) {
                            $tco_done = true;
                            return new Data_Maybe.Just(v);
                        };
                        if (Data_Boolean.otherwise) {
                            $tco_var_v = v + 1 | 0;
                            $copy_v1 = v1.value1;
                            return;
                        };
                    };
                    if (v1 instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return Data_Maybe.Nothing.value;
                    };
                    throw new Error("Failed pattern match at Data.List (line 294, column 3 - line 294, column 35): " + [v.constructor.name, v1.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $copy_v1);
                };
                return $tco_result;
            };
        };
        return go(0);
    };
    var filter = function (p) {
        var go = function ($copy_acc) {
            return function ($copy_v) {
                var $tco_var_acc = $copy_acc;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, v) {
                    if (v instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return reverse(acc);
                    };
                    if (v instanceof Data_List_Types.Cons) {
                        if (p(v.value0)) {
                            $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
                            $copy_v = v.value1;
                            return;
                        };
                        if (Data_Boolean.otherwise) {
                            $tco_var_acc = acc;
                            $copy_v = v.value1;
                            return;
                        };
                    };
                    throw new Error("Failed pattern match at Data.List (line 383, column 3 - line 383, column 27): " + [acc.constructor.name, v.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $copy_v);
                };
                return $tco_result;
            };
        };
        return go(Data_List_Types.Nil.value);
    };
    var elemIndex = function (dictEq) {
        return function (x) {
            return findIndex(function (v) {
                return Data_Eq.eq(dictEq)(v)(x);
            });
        };
    };
    var dropWhile = function (p) {
        var go = function ($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
                if (v instanceof Data_List_Types.Cons && p(v.value0)) {
                    $copy_v = v.value1;
                    return;
                };
                $tco_done = true;
                return v;
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($copy_v);
            };
            return $tco_result;
        };
        return go;
    };
    var concatMap = Data_Function.flip(Control_Bind.bind(Data_List_Types.bindList));
    var concat = function (v) {
        return Control_Bind.bind(Data_List_Types.bindList)(v)(Control_Category.id(Control_Category.categoryFn));
    };
    exports["fromFoldable"] = fromFoldable;
    exports["singleton"] = singleton;
    exports["null"] = $$null;
    exports["length"] = length;
    exports["snoc"] = snoc;
    exports["head"] = head;
    exports["last"] = last;
    exports["tail"] = tail;
    exports["init"] = init;
    exports["unsnoc"] = unsnoc;
    exports["elemIndex"] = elemIndex;
    exports["findIndex"] = findIndex;
    exports["reverse"] = reverse;
    exports["concat"] = concat;
    exports["concatMap"] = concatMap;
    exports["filter"] = filter;
    exports["mapMaybe"] = mapMaybe;
    exports["sort"] = sort;
    exports["sortBy"] = sortBy;
    exports["dropWhile"] = dropWhile;
    exports["span"] = span;
    exports["zipWith"] = zipWith;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.List.ThreeOrMore"] = $PS["Data.List.ThreeOrMore"] || {};
    var exports = $PS["Data.List.ThreeOrMore"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_NonEmpty = $PS["Data.NonEmpty"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var toList = function (v) {
        return new Data_List_Types.Cons(v.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value1.value1.value0, v.value1.value1.value1)));
    };
    var reverse = function (v) {
        var v1 = Data_List.reverse(v.value1.value1.value1);
        if (v1 instanceof Data_List_Types.Nil) {
            return new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value0, new Data_NonEmpty.NonEmpty(v.value0, Data_List_Types.Nil.value)));
        };
        if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
            return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value))));
        };
        if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Cons && v1.value1.value1 instanceof Data_List_Types.Nil)) {
            return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value0, new Data_NonEmpty.NonEmpty(v.value1.value1.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value)))));
        };
        if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Cons && v1.value1.value1 instanceof Data_List_Types.Cons)) {
            return new Data_NonEmpty.NonEmpty(v1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value0, new Data_NonEmpty.NonEmpty(v1.value1.value1.value0, Data_Semigroup.append(Data_List_Types.semigroupList)(v1.value1.value1.value1)(new Data_List_Types.Cons(v.value1.value1.value0, new Data_List_Types.Cons(v.value1.value0, new Data_List_Types.Cons(v.value0, Data_List_Types.Nil.value)))))));
        };
        throw new Error("Failed pattern match at Data.List.ThreeOrMore (line 25, column 3 - line 29, column 65): " + [v1.constructor.name]);
    };
    var last = function (v) {
        return Data_Maybe.fromMaybe(v.value1.value1.value0)(Data_List.last(v.value1.value1.value1));
    };
    exports["toList"] = toList;
    exports["reverse"] = reverse;
    exports["last"] = last;
})(PS);
(function (exports) {
    "use strict";

    exports._copyEff = function (m) {
        return function () {
            var r = {};
            for (var k in m) {
                if (hasOwnProperty.call(m, k)) {
                    r[k] = m[k];
                }
            }
            return r;
        };
    };

    exports.empty = {};

    exports.runST = function (f) {
        return f;
    };

    exports._fmapStrMap = function (m0, f) {
        var m = {};
        for (var k in m0) {
            if (hasOwnProperty.call(m0, k)) {
                m[k] = f(m0[k]);
            }
        }
        return m;
    };

    exports._foldM = function (bind) {
        return function (f) {
            return function (mz) {
                return function (m) {
                    var acc = mz;
                    function g(k) {
                        return function (z) {
                            return f(z)(k)(m[k]);
                        };
                    }
                    for (var k in m) {
                        if (hasOwnProperty.call(m, k)) {
                            acc = bind(acc)(g(k));
                        }
                    }
                    return acc;
                };
            };
        };
    };

    exports._lookup = function (no, yes, k, m) {
        return k in m ? yes(m[k]) : no;
    };

    function _collect(f) {
        return function (m) {
            var r = [];
            for (var k in m) {
                if (hasOwnProperty.call(m, k)) {
                    r.push(f(k)(m[k]));
                }
            }
            return r;
        };
    }

    exports._collect = _collect;

    exports.keys = Object.keys || _collect(function (k) {
        return function () { return k; };
    });
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function (exports) {
    "use strict";

    exports["new"] = function () {
        return {};
    };

    exports.poke = function (m) {
        return function (k) {
            return function (v) {
                return function () {
                    m[k] = v;
                    return m;
                };
            };
        };
    };

    exports["delete"] = function (m) {
        return function (k) {
            return function () {
                delete m[k];
                return m;
            };
        };
    };
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.StrMap.ST"] = $PS["Data.StrMap.ST"] || {};
    var exports = $PS["Data.StrMap.ST"];
    var $foreign = $PS["Data.StrMap.ST"];
    exports["new"] = $foreign["new"];
    exports["poke"] = $foreign.poke;
    exports["delete"] = $foreign["delete"];
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.StrMap"] = $PS["Data.StrMap"] || {};
    var exports = $PS["Data.StrMap"];
    var $foreign = $PS["Data.StrMap"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Function_Uncurried = $PS["Data.Function.Uncurried"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_StrMap_ST = $PS["Data.StrMap.ST"];
    var thawST = $foreign["_copyEff"];
    var pureST = function (f) {
        return Control_Monad_Eff.runPure($foreign.runST(f));
    };
    var mutate = function (f) {
        return function (m) {
            return pureST(function __do() {
                var v = thawST(m)();
                var v1 = f(v)();
                return v;
            });
        };
    };
    var member = Data_Function_Uncurried.runFn4($foreign["_lookup"])(false)(Data_Function["const"](true));
    var lookup = Data_Function_Uncurried.runFn4($foreign["_lookup"])(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
    var insert = function (k) {
        return function (v) {
            return mutate(function (s) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST.poke(s)(k)(v));
            });
        };
    };
    var functorStrMap = new Data_Functor.Functor(function (f) {
        return function (m) {
            return $foreign["_fmapStrMap"](m, f);
        };
    });
    var fromFoldable = function (dictFoldable) {
        return function (l) {
            return pureST(function __do() {
                var v = Data_StrMap_ST["new"]();
                Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(dictFoldable)(l)(function (v1) {
                    return Data_StrMap_ST.poke(v)(v1.value0)(v1.value1);
                })();
                return v;
            });
        };
    };
    var foldM = function (dictMonad) {
        return function (f) {
            return function (z) {
                return $foreign["_foldM"](Control_Bind.bind(dictMonad.Bind1()))(f)(Control_Applicative.pure(dictMonad.Applicative0())(z));
            };
        };
    };
    var union = function (m) {
        return mutate(function (s) {
            return Data_Functor["void"](Control_Monad_Eff.functorEff)(foldM(Control_Monad_Eff.monadEff)(Data_StrMap_ST.poke)(s)(m));
        });
    };
    var unions = function (dictFoldable) {
        return Data_Foldable.foldl(dictFoldable)(union)($foreign.empty);
    };
    var fold = $foreign["_foldM"](Data_Function.applyFlipped);
    var $$delete = function (k) {
        return mutate(function (s) {
            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_StrMap_ST["delete"](s)(k));
        });
    };
    exports["insert"] = insert;
    exports["lookup"] = lookup;
    exports["fromFoldable"] = fromFoldable;
    exports["delete"] = $$delete;
    exports["member"] = member;
    exports["union"] = union;
    exports["unions"] = unions;
    exports["fold"] = fold;
    exports["foldM"] = foldM;
    exports["thawST"] = thawST;
    exports["pureST"] = pureST;
    exports["functorStrMap"] = functorStrMap;
    exports["empty"] = $foreign.empty;
    exports["keys"] = $foreign.keys;
})(PS);
(function (exports) {
    "use strict";

    exports._indexOf = function (just) {
        return function (nothing) {
            return function (x) {
                return function (s) {
                    var i = s.indexOf(x);
                    return i === -1 ? nothing : just(i);
                };
            };
        };
    };
})(PS["Data.String"] = PS["Data.String"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.String"] = $PS["Data.String"] || {};
    var exports = $PS["Data.String"];
    var $foreign = $PS["Data.String"];
    var Data_Maybe = $PS["Data.Maybe"];
    var indexOf = $foreign["_indexOf"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    var contains = function (pat) {
        var $48 = indexOf(pat);
        return function ($49) {
            return Data_Maybe.isJust($48($49));
        };
    };
    exports["contains"] = contains;
    exports["indexOf"] = indexOf;
})(PS);
(function (exports) {
    "use strict";

    exports["regex'"] = function (left) {
        return function (right) {
            return function (s1) {
                return function (s2) {
                    try {
                        return right(new RegExp(s1, s2));
                    } catch (e) {
                        return left(e.message);
                    }
                };
            };
        };
    };

    exports.replace = function (r) {
        return function (s1) {
            return function (s2) {
                return s2.replace(r, s1);
            };
        };
    };
})(PS["Data.String.Regex"] = PS["Data.String.Regex"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.String.Regex.Flags"] = $PS["Data.String.Regex.Flags"] || {};
    var exports = $PS["Data.String.Regex.Flags"];
    var RegexFlags = (function () {
        function RegexFlags(value0) {
            this.value0 = value0;
        };
        RegexFlags.create = function (value0) {
            return new RegexFlags(value0);
        };
        return RegexFlags;
    })();
    exports["RegexFlags"] = RegexFlags;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Data.String.Regex"] = $PS["Data.String.Regex"] || {};
    var exports = $PS["Data.String.Regex"];
    var $foreign = $PS["Data.String.Regex"];
    var Data_Either = $PS["Data.Either"];
    var Data_String = $PS["Data.String"];
    var Data_String_Regex_Flags = $PS["Data.String.Regex.Flags"];
    var renderFlags = function (v) {
        return (function () {
            if (v.value0.global) {
                return "g";
            };
            return "";
        })() + ((function () {
            if (v.value0.ignoreCase) {
                return "i";
            };
            return "";
        })() + ((function () {
            if (v.value0.multiline) {
                return "m";
            };
            return "";
        })() + ((function () {
            if (v.value0.sticky) {
                return "y";
            };
            return "";
        })() + (function () {
            if (v.value0.unicode) {
                return "u";
            };
            return "";
        })())));
    };
    var regex = function (s) {
        return function (f) {
            return $foreign["regex'"](Data_Either.Left.create)(Data_Either.Right.create)(s)(renderFlags(f));
        };
    };
    var parseFlags = function (s) {
        return new Data_String_Regex_Flags.RegexFlags({
            global: Data_String.contains("g")(s),
            ignoreCase: Data_String.contains("i")(s),
            multiline: Data_String.contains("m")(s),
            sticky: Data_String.contains("y")(s),
            unicode: Data_String.contains("u")(s)
        });
    };
    exports["regex"] = regex;
    exports["renderFlags"] = renderFlags;
    exports["parseFlags"] = parseFlags;
    exports["replace"] = $foreign.replace;
})(PS);
(function (exports) {
    /* global exports */
    "use strict";

    exports.getCanvasElementByIdImpl = function (id, Just, Nothing) {
        return function () {
            var el = document.getElementById(id);
            if (el && el instanceof HTMLCanvasElement) {
                return Just(el);
            } else {
                return Nothing;
            }
        };
    };

    exports.getContext2D = function (c) {
        return function () {
            return c.getContext('2d');
        };
    };

    exports.getCanvasWidth = function (canvas) {
        return function () {
            return canvas.width;
        };
    };

    exports.getCanvasHeight = function (canvas) {
        return function () {
            return canvas.height;
        };
    };

    exports.setLineWidth = function (width) {
        return function (ctx) {
            return function () {
                ctx.lineWidth = width;
                return ctx;
            };
        };
    };

    exports.setFillStyle = function (style) {
        return function (ctx) {
            return function () {
                ctx.fillStyle = style;
                return ctx;
            };
        };
    };

    exports.setStrokeStyle = function (style) {
        return function (ctx) {
            return function () {
                ctx.strokeStyle = style;
                return ctx;
            };
        };
    };

    exports.setShadowColor = function (color) {
        return function (ctx) {
            return function () {
                ctx.shadowColor = color;
                return ctx;
            };
        };
    };

    exports.setShadowBlur = function (blur) {
        return function (ctx) {
            return function () {
                ctx.shadowBlur = blur;
                return ctx;
            };
        };
    };

    exports.setShadowOffsetX = function (offsetX) {
        return function (ctx) {
            return function () {
                ctx.shadowOffsetX = offsetX;
                return ctx;
            };
        };
    };

    exports.setShadowOffsetY = function (offsetY) {
        return function (ctx) {
            return function () {
                ctx.shadowOffsetY = offsetY;
                return ctx;
            };
        };
    };

    exports.beginPath = function (ctx) {
        return function () {
            ctx.beginPath();
            return ctx;
        };
    };

    exports.stroke = function (ctx) {
        return function () {
            ctx.stroke();
            return ctx;
        };
    };

    exports.fill = function (ctx) {
        return function () {
            ctx.fill();
            return ctx;
        };
    };

    exports.clip = function (ctx) {
        return function () {
            ctx.clip();
            return ctx;
        };
    };

    exports.lineTo = function (ctx) {
        return function (x) {
            return function (y) {
                return function () {
                    ctx.lineTo(x, y);
                    return ctx;
                };
            };
        };
    };

    exports.moveTo = function (ctx) {
        return function (x) {
            return function (y) {
                return function () {
                    ctx.moveTo(x, y);
                    return ctx;
                };
            };
        };
    };

    exports.closePath = function (ctx) {
        return function () {
            ctx.closePath();
            return ctx;
        };
    };

    exports.arc = function (ctx) {
        return function (a) {
            return function () {
                ctx.arc(a.x, a.y, a.r, a.start, a.end);
                return ctx;
            };
        };
    };

    exports.rect = function (ctx) {
        return function (r) {
            return function () {
                ctx.rect(r.x, r.y, r.w, r.h);
                return ctx;
            };
        };
    };

    exports.scale = function (t) {
        return function (ctx) {
            return function () {
                ctx.scale(t.scaleX, t.scaleY);
                return ctx;
            };
        };
    };

    exports.rotate = function (angle) {
        return function (ctx) {
            return function () {
                ctx.rotate(angle);
                return ctx;
            };
        };
    };

    exports.translate = function (t) {
        return function (ctx) {
            return function () {
                ctx.translate(t.translateX, t.translateY);
                return ctx;
            };
        };
    };

    exports.clearRect = function (ctx) {
        return function (r) {
            return function () {
                ctx.clearRect(r.x, r.y, r.w, r.h);
                return ctx;
            };
        };
    };

    exports.font = function (ctx) {
        return function () {
            return ctx.font;
        };
    };

    exports.setFont = function (fontspec) {
        return function (ctx) {
            return function () {
                ctx.font = fontspec;
                return ctx;
            };
        };
    };

    exports.fillText = function (ctx) {
        return function (text) {
            return function (x) {
                return function (y) {
                    return function () {
                        ctx.fillText(text, x, y);
                        return ctx;
                    };
                };
            };
        };
    };

    exports.save = function (ctx) {
        return function () {
            ctx.save();
            return ctx;
        };
    };

    exports.restore = function (ctx) {
        return function () {
            ctx.restore();
            return ctx;
        };
    };
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Graphics.Canvas"] = $PS["Graphics.Canvas"] || {};
    var exports = $PS["Graphics.Canvas"];
    var $foreign = $PS["Graphics.Canvas"];
    var Data_Maybe = $PS["Data.Maybe"];
    var withContext = function (ctx) {
        return function (action) {
            return function __do() {
                var v = $foreign.save(ctx)();
                var v1 = action();
                var v2 = $foreign.restore(ctx)();
                return v1;
            };
        };
    };
    var strokePath = function (ctx) {
        return function (path) {
            return function __do() {
                var v = $foreign.beginPath(ctx)();
                var v1 = path();
                var v2 = $foreign.stroke(ctx)();
                return v1;
            };
        };
    };
    var getCanvasElementById = function (elId) {
        return $foreign.getCanvasElementByIdImpl(elId, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
    };
    var fillPath = function (ctx) {
        return function (path) {
            return function __do() {
                var v = $foreign.beginPath(ctx)();
                var v1 = path();
                var v2 = $foreign.fill(ctx)();
                return v1;
            };
        };
    };
    exports["getCanvasElementById"] = getCanvasElementById;
    exports["strokePath"] = strokePath;
    exports["fillPath"] = fillPath;
    exports["withContext"] = withContext;
    exports["getContext2D"] = $foreign.getContext2D;
    exports["getCanvasWidth"] = $foreign.getCanvasWidth;
    exports["getCanvasHeight"] = $foreign.getCanvasHeight;
    exports["setLineWidth"] = $foreign.setLineWidth;
    exports["setFillStyle"] = $foreign.setFillStyle;
    exports["setStrokeStyle"] = $foreign.setStrokeStyle;
    exports["setShadowBlur"] = $foreign.setShadowBlur;
    exports["setShadowOffsetX"] = $foreign.setShadowOffsetX;
    exports["setShadowOffsetY"] = $foreign.setShadowOffsetY;
    exports["setShadowColor"] = $foreign.setShadowColor;
    exports["clip"] = $foreign.clip;
    exports["lineTo"] = $foreign.lineTo;
    exports["moveTo"] = $foreign.moveTo;
    exports["closePath"] = $foreign.closePath;
    exports["arc"] = $foreign.arc;
    exports["rect"] = $foreign.rect;
    exports["clearRect"] = $foreign.clearRect;
    exports["scale"] = $foreign.scale;
    exports["rotate"] = $foreign.rotate;
    exports["translate"] = $foreign.translate;
    exports["setFont"] = $foreign.setFont;
    exports["fillText"] = $foreign.fillText;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Graphics.Drawing.Font"] = $PS["Graphics.Drawing.Font"] || {};
    var exports = $PS["Graphics.Drawing.Font"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_Show = $PS["Data.Show"];
    var optionsString = function (v) {
        return Data_Foldable.intercalate(Data_Foldable.foldableArray)(Data_Monoid.monoidString)(" ")([Data_Foldable.fold(Data_Foldable.foldableMaybe)(Data_Monoid.monoidString)(v.style), Data_Foldable.fold(Data_Foldable.foldableMaybe)(Data_Monoid.monoidString)(v.variant), Data_Foldable.fold(Data_Foldable.foldableMaybe)(Data_Monoid.monoidString)(v.weight)]);
    };
    var fontString = function (v) {
        return optionsString(v.value2) + (" " + (Data_Show.show(Data_Show.showInt)(v.value1) + ("px " + v.value0)));
    };
    exports["fontString"] = fontString;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Graphics.Drawing"] = $PS["Graphics.Drawing"] || {};
    var exports = $PS["Graphics.Drawing"];
    var Color = $PS["Color"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Unit = $PS["Data.Unit"];
    var Graphics_Canvas = $PS["Graphics.Canvas"];
    var Graphics_Drawing_Font = $PS["Graphics.Drawing.Font"];
    var Path = (function () {
        function Path(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Path.create = function (value0) {
            return function (value1) {
                return new Path(value0, value1);
            };
        };
        return Path;
    })();
    var Rectangle = (function () {
        function Rectangle(value0) {
            this.value0 = value0;
        };
        Rectangle.create = function (value0) {
            return new Rectangle(value0);
        };
        return Rectangle;
    })();
    var Arc = (function () {
        function Arc(value0) {
            this.value0 = value0;
        };
        Arc.create = function (value0) {
            return new Arc(value0);
        };
        return Arc;
    })();
    var Composite = (function () {
        function Composite(value0) {
            this.value0 = value0;
        };
        Composite.create = function (value0) {
            return new Composite(value0);
        };
        return Composite;
    })();
    var Fill = (function () {
        function Fill(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Fill.create = function (value0) {
            return function (value1) {
                return new Fill(value0, value1);
            };
        };
        return Fill;
    })();
    var Outline = (function () {
        function Outline(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Outline.create = function (value0) {
            return function (value1) {
                return new Outline(value0, value1);
            };
        };
        return Outline;
    })();
    var Text = (function () {
        function Text(value0, value1, value2, value3, value4) {
            this.value0 = value0;
            this.value1 = value1;
            this.value2 = value2;
            this.value3 = value3;
            this.value4 = value4;
        };
        Text.create = function (value0) {
            return function (value1) {
                return function (value2) {
                    return function (value3) {
                        return function (value4) {
                            return new Text(value0, value1, value2, value3, value4);
                        };
                    };
                };
            };
        };
        return Text;
    })();
    var Many = (function () {
        function Many(value0) {
            this.value0 = value0;
        };
        Many.create = function (value0) {
            return new Many(value0);
        };
        return Many;
    })();
    var Scale = (function () {
        function Scale(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Scale.create = function (value0) {
            return function (value1) {
                return new Scale(value0, value1);
            };
        };
        return Scale;
    })();
    var Translate = (function () {
        function Translate(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Translate.create = function (value0) {
            return function (value1) {
                return new Translate(value0, value1);
            };
        };
        return Translate;
    })();
    var Rotate = (function () {
        function Rotate(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Rotate.create = function (value0) {
            return function (value1) {
                return new Rotate(value0, value1);
            };
        };
        return Rotate;
    })();
    var Clipped = (function () {
        function Clipped(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Clipped.create = function (value0) {
            return function (value1) {
                return new Clipped(value0, value1);
            };
        };
        return Clipped;
    })();
    var WithShadow = (function () {
        function WithShadow(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        WithShadow.create = function (value0) {
            return function (value1) {
                return new WithShadow(value0, value1);
            };
        };
        return WithShadow;
    })();
    var translate = function (tx) {
        return function (ty) {
            return Translate.create({
                translateX: tx,
                translateY: ty
            });
        };
    };
    var semigroupDrawing = new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            if (v instanceof Many) {
                return new Many(Data_Semigroup.append(Data_List_Types.semigroupList)(v.value0)(Data_List.singleton(v1)));
            };
            if (v1 instanceof Many) {
                return new Many(new Data_List_Types.Cons(v, v1.value0));
            };
            return new Many(new Data_List_Types.Cons(v, new Data_List_Types.Cons(v1, Data_List_Types.Nil.value)));
        };
    });
    var scale = function (sx) {
        return function (sy) {
            return Scale.create({
                scaleX: sx,
                scaleY: sy
            });
        };
    };
    var rotate = Rotate.create;
    var render = function (ctx) {
        var renderShape = function (v) {
            if (v instanceof Path && v.value1 instanceof Data_List_Types.Nil) {
                return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
            };
            if (v instanceof Path && v.value1 instanceof Data_List_Types.Cons) {
                return function __do() {
                    var v1 = Graphics_Canvas.moveTo(ctx)(v.value1.value0.x)(v.value1.value0.y)();
                    Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(v.value1.value1)(function (pt) {
                        return Graphics_Canvas.lineTo(ctx)(pt.x)(pt.y);
                    })();
                    return Control_Applicative.when(Control_Monad_Eff.applicativeEff)(v.value0)(Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.closePath(ctx)))();
                };
            };
            if (v instanceof Rectangle) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.rect(ctx)(v.value0));
            };
            if (v instanceof Arc) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.arc(ctx)(v.value0));
            };
            if (v instanceof Composite) {
                return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(v.value0)(renderShape);
            };
            throw new Error("Failed pattern match at Graphics.Drawing (line 289, column 3 - line 289, column 67): " + [v.constructor.name]);
        };
        var applyShadow = function (v) {
            return function __do() {
                Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.color)(function (color) {
                    return Graphics_Canvas.setShadowColor(Color.cssStringHSLA(color))(ctx);
                })();
                Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.blur)(function (blur) {
                    return Graphics_Canvas.setShadowBlur(blur)(ctx);
                })();
                return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.offset)(function (offset) {
                    return function __do() {
                        var v1 = Graphics_Canvas.setShadowOffsetX(offset.x)(ctx)();
                        return Graphics_Canvas.setShadowOffsetY(offset.y)(ctx)();
                    };
                })();
            };
        };
        var applyOutlineStyle = function (v) {
            return function __do() {
                Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.color)(function (color) {
                    return Graphics_Canvas.setStrokeStyle(Color.cssStringHSLA(color))(ctx);
                })();
                return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.lineWidth)(function (width) {
                    return Graphics_Canvas.setLineWidth(width)(ctx);
                })();
            };
        };
        var applyFillStyle = function (v) {
            return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(v.color)(function (color) {
                return Graphics_Canvas.setFillStyle(Color.cssStringHSLA(color))(ctx);
            });
        };
        var go = function (v) {
            if (v instanceof Fill) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    applyFillStyle(v.value1)();
                    return Graphics_Canvas.fillPath(ctx)(renderShape(v.value0))();
                }));
            };
            if (v instanceof Outline) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    applyOutlineStyle(v.value1)();
                    return Graphics_Canvas.strokePath(ctx)(renderShape(v.value0))();
                }));
            };
            if (v instanceof Many) {
                return Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(v.value0)(go);
            };
            if (v instanceof Scale) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    var v1 = Graphics_Canvas.scale(v.value0)(ctx)();
                    return go(v.value1)();
                }));
            };
            if (v instanceof Translate) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    var v1 = Graphics_Canvas.translate(v.value0)(ctx)();
                    return go(v.value1)();
                }));
            };
            if (v instanceof Rotate) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    var v1 = Graphics_Canvas.rotate(v.value0)(ctx)();
                    return go(v.value1)();
                }));
            };
            if (v instanceof Clipped) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    renderShape(v.value0)();
                    var v1 = Graphics_Canvas.clip(ctx)();
                    return go(v.value1)();
                }));
            };
            if (v instanceof WithShadow) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    applyShadow(v.value0)();
                    return go(v.value1)();
                }));
            };
            if (v instanceof Text) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Graphics_Canvas.withContext(ctx)(function __do() {
                    var v1 = Graphics_Canvas.setFont(Graphics_Drawing_Font.fontString(v.value0))(ctx)();
                    applyFillStyle(v.value3)();
                    return Graphics_Canvas.fillText(ctx)(v.value4)(v.value1)(v.value2)();
                }));
            };
            throw new Error("Failed pattern match at Graphics.Drawing (line 242, column 3 - line 245, column 21): " + [v.constructor.name]);
        };
        return go;
    };
    var monoidDrawing = new Data_Monoid.Monoid(function () {
        return semigroupDrawing;
    }, new Many(Data_Monoid.mempty(Data_List_Types.monoidList)));
    var lineWidth = function (c) {
        return {
            color: Data_Maybe.Nothing.value,
            lineWidth: new Data_Maybe.Just(c)
        };
    };
    var filled = Data_Function.flip(Fill.create);
    var fillColor = function (c) {
        return {
            color: new Data_Maybe.Just(c)
        };
    };
    var closed = function (dictFoldable) {
        var $206 = Path.create(true);
        var $207 = Data_List.fromFoldable(dictFoldable);
        return function ($208) {
            return $206($207($208));
        };
    };
    var arc = function (x) {
        return function (y) {
            return function (start) {
                return function (end) {
                    return function (r) {
                        return new Arc({
                            x: x,
                            y: y,
                            start: start,
                            end: end,
                            r: r
                        });
                    };
                };
            };
        };
    };
    exports["closed"] = closed;
    exports["arc"] = arc;
    exports["fillColor"] = fillColor;
    exports["lineWidth"] = lineWidth;
    exports["filled"] = filled;
    exports["scale"] = scale;
    exports["translate"] = translate;
    exports["rotate"] = rotate;
    exports["render"] = render;
    exports["semigroupDrawing"] = semigroupDrawing;
    exports["monoidDrawing"] = monoidDrawing;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Graphics.Isometric.Point"] = $PS["Graphics.Isometric.Point"] || {};
    var exports = $PS["Graphics.Isometric.Point"];
    var $$Math = $PS["Math"];
    var vector = function (v) {
        return function (v1) {
            return {
                x: v1.x - v.x,
                y: v1.y - v.y,
                z: v1.z - v.z
            };
        };
    };
    var translateZ = function (dz) {
        return function (v) {
            return {
                x: v.x,
                y: v.y,
                z: v.z + dz
            };
        };
    };
    var translate = function (v) {
        return function (v1) {
            return {
                x: v.x + v1.x,
                y: v.y + v1.y,
                z: v.z + v1.z
            };
        };
    };
    var scale = function (f) {
        return function (v) {
            return {
                x: f * v.x,
                y: f * v.y,
                z: f * v.z
            };
        };
    };
    var rotateZ = function (phi) {
        return function (v) {
            return {
                x: $$Math.cos(phi) * v.x - $$Math.sin(phi) * v.y,
                y: $$Math.sin(phi) * v.x + $$Math.cos(phi) * v.y,
                z: v.z
            };
        };
    };
    var rotateX = function (phi) {
        return function (v) {
            return {
                x: v.x,
                y: $$Math.cos(phi) * v.y - $$Math.sin(phi) * v.z,
                z: $$Math.sin(phi) * v.y + $$Math.cos(phi) * v.z
            };
        };
    };
    var from2D = function (v) {
        return {
            x: v.x,
            y: v.y,
            z: 0.0
        };
    };
    var dot = function (v) {
        return function (v1) {
            return v.x * v1.x + v.y * v1.y + v.z * v1.z;
        };
    };
    var norm = function (p) {
        return $$Math.sqrt(dot(p)(p));
    };
    var normalize = function (p) {
        var n = norm(p);
        return {
            x: p.x / n,
            y: p.y / n,
            z: p.z / n
        };
    };
    var depth = function (p) {
        return p.x + p.y + p.z;
    };
    var cross = function (v) {
        return function (v1) {
            return {
                x: v.y * v1.z - v.z * v1.y,
                y: v.z * v1.x - v.x * v1.z,
                z: v.x * v1.y - v.y * v1.x
            };
        };
    };
    exports["from2D"] = from2D;
    exports["vector"] = vector;
    exports["translate"] = translate;
    exports["dot"] = dot;
    exports["norm"] = norm;
    exports["normalize"] = normalize;
    exports["cross"] = cross;
    exports["translateZ"] = translateZ;
    exports["rotateX"] = rotateX;
    exports["rotateZ"] = rotateZ;
    exports["scale"] = scale;
    exports["depth"] = depth;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Graphics.Isometric"] = $PS["Graphics.Isometric"] || {};
    var exports = $PS["Graphics.Isometric"];
    var Color = $PS["Color"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_ThreeOrMore = $PS["Data.List.ThreeOrMore"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_NonEmpty = $PS["Data.NonEmpty"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Semiring = $PS["Data.Semiring"];
    var Graphics_Drawing = $PS["Graphics.Drawing"];
    var Graphics_Isometric_Point = $PS["Graphics.Isometric.Point"];
    var $$Math = $PS["Math"];
    var Fill = (function () {
        function Fill(value0, value1) {
            this.value0 = value0;
            this.value1 = value1;
        };
        Fill.create = function (value0) {
            return function (value1) {
                return new Fill(value0, value1);
            };
        };
        return Fill;
    })();
    var Many = (function () {
        function Many(value0) {
            this.value0 = value0;
        };
        Many.create = function (value0) {
            return new Many(value0);
        };
        return Many;
    })();
    var transform = function (t) {
        var go = function (v) {
            if (v instanceof Fill) {
                return new Fill(v.value0, Data_Functor.map(Data_List_Types.functorList)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(t))(v.value1));
            };
            if (v instanceof Many) {
                return new Many(Data_Functor.map(Data_List_Types.functorList)(transform(t))(v.value0));
            };
            throw new Error("Failed pattern match at Graphics.Isometric (line 149, column 5 - line 149, column 57): " + [v.constructor.name]);
        };
        return go;
    };
    var translateZ = function (dz) {
        return transform(Graphics_Isometric_Point.translateZ(dz));
    };
    var semigroupScene = new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            if (v instanceof Many) {
                return new Many(Data_Semigroup.append(Data_List_Types.semigroupList)(v.value0)(Data_List.singleton(v1)));
            };
            if (v1 instanceof Many) {
                return new Many(new Data_List_Types.Cons(v, v1.value0));
            };
            return new Many(new Data_List_Types.Cons(v, new Data_List_Types.Cons(v1, Data_List_Types.Nil.value)));
        };
    });
    var scale = function (factor) {
        return transform(Graphics_Isometric_Point.scale(factor));
    };
    var rotateZ = function (angle) {
        return transform(Graphics_Isometric_Point.rotateZ(angle));
    };
    var rotateX = function (angle) {
        return transform(Graphics_Isometric_Point.rotateX(angle));
    };
    var move = function (v) {
        return Data_Functor.map(Data_List_Types.functorList)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(Graphics_Isometric_Point.translate(v)));
    };
    var monoidScene = new Data_Monoid.Monoid(function () {
        return semigroupScene;
    }, new Many(Data_Monoid.mempty(Data_List_Types.monoidList)));
    var isometricAngle = $$Math.pi / 2.0 - $$Math.asin(1.0 / $$Math.sqrt(3.0));
    var project = function (p) {
        var beta = $$Math.pi / 4.0;
        var rotated = Graphics_Isometric_Point.rotateX(isometricAngle)(Graphics_Isometric_Point.rotateZ(beta)(p));
        return {
            x: -rotated.x,
            y: rotated.y
        };
    };
    var renderFace = function (dir) {
        return function (color) {
            return function (v) {
                var path = Graphics_Drawing.closed(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_List_Types.foldableList))))(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(project)(v));
                var normal = Graphics_Isometric_Point.normalize(Graphics_Isometric_Point.cross(Graphics_Isometric_Point.vector(v.value0)(v.value1.value0))(Graphics_Isometric_Point.vector(v.value0)(v.value1.value1.value0)));
                var amount = 0.2 * Graphics_Isometric_Point.dot(dir)(normal);
                var col = Color.lighten(amount)(color);
                return Graphics_Drawing.filled(Graphics_Drawing.fillColor(col))(path);
            };
        };
    };
    var filled = Fill.create;
    var fillShape = function (dir) {
        return function (color) {
            return function (faces) {
                var totalDepth = function (face) {
                    return Data_Foldable.sum(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_NonEmpty.foldableNonEmpty(Data_List_Types.foldableList))))(Data_Semiring.semiringNumber)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(Graphics_Isometric_Point.depth)(face));
                };
                var sortedFaces = Data_List.sortBy(Data_Ord.comparing(Data_Ord.ordNumber)(totalDepth))(faces);
                return Data_Foldable.foldMap(Data_List_Types.foldableList)(Graphics_Drawing.monoidDrawing)(renderFace(dir)(color))(sortedFaces);
            };
        };
    };
    var renderScene = function (dir) {
        return function (scene) {
            var dir$prime = Graphics_Isometric_Point.normalize(dir);
            var go = function (v) {
                if (v instanceof Fill) {
                    return fillShape(dir$prime)(v.value0)(v.value1);
                };
                if (v instanceof Many) {
                    return Data_Foldable.foldMap(Data_List_Types.foldableList)(Graphics_Drawing.monoidDrawing)(go)(v.value0);
                };
                throw new Error("Failed pattern match at Graphics.Isometric (line 212, column 9 - line 212, column 59): " + [v.constructor.name]);
            };
            return go(scene);
        };
    };
    var extrude = function (path2D) {
        return function (height) {
            var raise = Graphics_Isometric_Point.translateZ(height);
            var side = function (p1) {
                return function (p2) {
                    return new Data_NonEmpty.NonEmpty(p1, new Data_NonEmpty.NonEmpty(p2, new Data_NonEmpty.NonEmpty(raise(p2), new Data_List_Types.Cons(raise(p1), Data_List_Types.Nil.value))));
                };
            };
            var path = Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(Graphics_Isometric_Point.from2D)(path2D);
            var sides = Data_List.zipWith(side)(Data_List_ThreeOrMore.toList(path))(new Data_List_Types.Cons(Data_List_ThreeOrMore.last(path), Data_List_ThreeOrMore.toList(path)));
            var top = Data_Functor.map(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_NonEmpty.functorNonEmpty(Data_List_Types.functorList))))(raise)(path);
            return new Data_List_Types.Cons(path, new Data_List_Types.Cons(Data_List_ThreeOrMore.reverse(top), sides));
        };
    };
    var prism = function (p) {
        return function (dx) {
            return function (dy) {
                return function (dz) {
                    var rectangle = new Data_NonEmpty.NonEmpty({
                        x: 0.0,
                        y: 0.0
                    }, new Data_NonEmpty.NonEmpty({
                        x: 0.0,
                        y: dy
                    }, new Data_NonEmpty.NonEmpty({
                        x: dx,
                        y: dy
                    }, new Data_List_Types.Cons({
                        x: dx,
                        y: 0.0
                    }, Data_List_Types.Nil.value))));
                    return move(p)(extrude(rectangle)(dz));
                };
            };
        };
    };
    var cube = function (p) {
        return function (dl) {
            return prism(p)(dl)(dl)(dl);
        };
    };
    exports["extrude"] = extrude;
    exports["prism"] = prism;
    exports["cube"] = cube;
    exports["Fill"] = Fill;
    exports["Many"] = Many;
    exports["translateZ"] = translateZ;
    exports["rotateX"] = rotateX;
    exports["rotateZ"] = rotateZ;
    exports["scale"] = scale;
    exports["filled"] = filled;
    exports["renderScene"] = renderScene;
    exports["semigroupScene"] = semigroupScene;
    exports["monoidScene"] = monoidScene;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Helper"] = $PS["Helper"] || {};
    var exports = $PS["Helper"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_StrMap = $PS["Data.StrMap"];
    var Data_Tuple = $PS["Data.Tuple"];
    var tuple = function (a) {
        return function (b) {
            return new Data_Tuple.Tuple(a, b);
        };
    };
    var fromArray = Data_StrMap.fromFoldable(Data_Foldable.foldableArray);
    var convert = (function () {
        var $0 = Data_List.fromFoldable(Data_Foldable.foldableArray);
        var $1 = Data_Functor.map(Data_Functor.functorArray)(Data_List.fromFoldable(Data_Foldable.foldableArray));
        return function ($2) {
            return $0($1($2));
        };
    })();
    var level = function (lid) {
        return function (entry) {
            return tuple(lid)({
                name: entry.name,
                help: entry.help,
                difficulty: entry.difficulty,
                initial: convert(entry.initial),
                target: convert(entry.target)
            });
        };
    };
    exports["fromArray"] = fromArray;
    exports["tuple"] = tuple;
    exports["convert"] = convert;
    exports["level"] = level;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Types"] = $PS["Types"] || {};
    var exports = $PS["Types"];
    var Data_Bounded = $PS["Data.Bounded"];
    var Data_Enum = $PS["Data.Enum"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Show = $PS["Data.Show"];
    var Easy = (function () {
        function Easy() {

        };
        Easy.value = new Easy();
        return Easy;
    })();
    var Medium = (function () {
        function Medium() {

        };
        Medium.value = new Medium();
        return Medium;
    })();
    var Hard = (function () {
        function Hard() {

        };
        Hard.value = new Hard();
        return Hard;
    })();
    var Cyan = (function () {
        function Cyan() {

        };
        Cyan.value = new Cyan();
        return Cyan;
    })();
    var Brown = (function () {
        function Brown() {

        };
        Brown.value = new Brown();
        return Brown;
    })();
    var Red = (function () {
        function Red() {

        };
        Red.value = new Red();
        return Red;
    })();
    var Orange = (function () {
        function Orange() {

        };
        Orange.value = new Orange();
        return Orange;
    })();
    var Yellow = (function () {
        function Yellow() {

        };
        Yellow.value = new Yellow();
        return Yellow;
    })();
    var showDifficulty = new Data_Show.Show(function (v) {
        if (v instanceof Easy) {
            return "简单";
        };
        if (v instanceof Medium) {
            return "中等";
        };
        if (v instanceof Hard) {
            return "困难";
        };
        throw new Error("Failed pattern match at Types (line 87, column 1 - line 90, column 23): " + [v.constructor.name]);
    });
    var showCube = new Data_Show.Show(function (v) {
        if (v instanceof Cyan) {
            return "Cyan";
        };
        if (v instanceof Brown) {
            return "Brown";
        };
        if (v instanceof Red) {
            return "Red";
        };
        if (v instanceof Orange) {
            return "Orange";
        };
        if (v instanceof Yellow) {
            return "Yellow";
        };
        throw new Error("Failed pattern match at Types (line 26, column 1 - line 31, column 27): " + [v.constructor.name]);
    });
    var cubeToEnum = function (v) {
        if (v === 0) {
            return new Data_Maybe.Just(Cyan.value);
        };
        if (v === 1) {
            return new Data_Maybe.Just(Brown.value);
        };
        if (v === 2) {
            return new Data_Maybe.Just(Red.value);
        };
        if (v === 3) {
            return new Data_Maybe.Just(Orange.value);
        };
        if (v === 4) {
            return new Data_Maybe.Just(Yellow.value);
        };
        return Data_Maybe.Nothing.value;
    };
    var cubeFromEnum = function (v) {
        if (v instanceof Cyan) {
            return 0;
        };
        if (v instanceof Brown) {
            return 1;
        };
        if (v instanceof Red) {
            return 2;
        };
        if (v instanceof Orange) {
            return 3;
        };
        if (v instanceof Yellow) {
            return 4;
        };
        throw new Error("Failed pattern match at Types (line 52, column 1 - line 52, column 28): " + [v.constructor.name]);
    };
    var ordCube = new Data_Ord.Ord(function () {
        return eqCube;
    }, function (a) {
        return function (b) {
            return Data_Ord.compare(Data_Ord.ordInt)(Data_Enum.fromEnum(boundedEnumCube)(a))(Data_Enum.fromEnum(boundedEnumCube)(b));
        };
    });
    var eqCube = new Data_Eq.Eq(function (a) {
        return function (b) {
            return Data_Enum.fromEnum(boundedEnumCube)(a) === Data_Enum.fromEnum(boundedEnumCube)(b);
        };
    });
    var enumCube = new Data_Enum.Enum(function () {
        return ordCube;
    }, Data_Enum.defaultPred(cubeToEnum)(cubeFromEnum), Data_Enum.defaultSucc(cubeToEnum)(cubeFromEnum));
    var boundedEnumCube = new Data_Enum.BoundedEnum(function () {
        return boundedCube;
    }, function () {
        return enumCube;
    }, 5, cubeFromEnum, cubeToEnum);
    var boundedCube = new Data_Bounded.Bounded(function () {
        return ordCube;
    }, Cyan.value, Yellow.value);
    exports["Cyan"] = Cyan;
    exports["Brown"] = Brown;
    exports["Red"] = Red;
    exports["Orange"] = Orange;
    exports["Yellow"] = Yellow;
    exports["Easy"] = Easy;
    exports["Medium"] = Medium;
    exports["Hard"] = Hard;
    exports["showCube"] = showCube;
    exports["eqCube"] = eqCube;
    exports["ordCube"] = ordCube;
    exports["boundedCube"] = boundedCube;
    exports["enumCube"] = enumCube;
    exports["boundedEnumCube"] = boundedEnumCube;
    exports["showDifficulty"] = showDifficulty;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Transformer"] = $PS["Transformer"] || {};
    var exports = $PS["Transformer"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_HeytingAlgebra = $PS["Data.HeytingAlgebra"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Traversable = $PS["Data.Traversable"];
    var Types = $PS["Types"];
    var replaceMultiple = function (a) {
        return function (bs) {
            var replace = function (x) {
                var $2 = Data_Eq.eq(Types.eqCube)(x)(a);
                if ($2) {
                    return bs;
                };
                return Data_List.singleton(x);
            };
            return Data_Functor.map(Data_List_Types.functorList)(Data_List.concatMap(replace));
        };
    };
    var reject = function (f) {
        return Data_List.filter((function () {
            var $4 = Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean);
            return function ($5) {
                return $4(f($5));
            };
        })());
    };
    var mapStack = function (c) {
        return Data_Functor.map(Data_List_Types.functorList)(function (v) {
            return Data_List.snoc(v)(c);
        });
    };
    var map2d = (function () {
        var $6 = Data_Functor.map(Data_List_Types.functorList);
        var $7 = Data_Functor.map(Data_List_Types.functorList);
        return function ($8) {
            return $6($7($8));
        };
    })();
    var replaceSingle = function (a) {
        return function (b) {
            var replace = function (x) {
                var $3 = Data_Eq.eq(Types.eqCube)(x)(a);
                if ($3) {
                    return b;
                };
                return x;
            };
            return map2d(replace);
        };
    };
    var clearEmpty = reject(Data_List["null"]);
    var mapReject = function (c) {
        var $9 = Data_Functor.map(Data_List_Types.functorList)(reject(function (v) {
            return Data_Eq.eq(Types.eqCube)(v)(c);
        }));
        return function ($10) {
            return clearEmpty($9($10));
        };
    };
    var allSteps = function (ts) {
        return function (initial) {
            return new Data_List_Types.Cons(initial, Data_Traversable.scanl(Data_List_Types.traversableList)(Data_Function.applyFlipped)(initial)(ts));
        };
    };
    exports["map2d"] = map2d;
    exports["reject"] = reject;
    exports["allSteps"] = allSteps;
    exports["clearEmpty"] = clearEmpty;
    exports["mapReject"] = mapReject;
    exports["mapStack"] = mapStack;
    exports["replaceSingle"] = replaceSingle;
    exports["replaceMultiple"] = replaceMultiple;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Levels.Chapter0"] = $PS["Levels.Chapter0"] || {};
    var exports = $PS["Levels.Chapter0"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Helper = $PS["Helper"];
    var Transformer = $PS["Transformer"];
    var Types = $PS["Types"];
    var chapter0 = {
        name: "Introduction",
        transformers: Helper.fromArray([Helper.tuple("replaceYbyR")({
            name: "map {Yellow}\u21a6{Red}",
            "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Red.value)
        }), Helper.tuple("stackY")({
            name: "map (stack {Yellow})",
            "function": Data_Functor.map(Data_List_Types.functorList)(function (v) {
                return Data_List.snoc(v)(Types.Yellow.value);
            })
        }), Helper.tuple("replaceYbyYR")({
            name: "map {Yellow}\u21a6[{Red}{Yellow}]",
            "function": Transformer.replaceMultiple(Types.Yellow.value)(new Data_List_Types.Cons(Types.Yellow.value, new Data_List_Types.Cons(Types.Red.value, Data_List_Types.Nil.value)))
        }), Helper.tuple("rejectY")({
            name: "map (reject {Yellow})",
            "function": Transformer.mapReject(Types.Yellow.value)
        })]),
        levels: Helper.fromArray([Helper.level("0.1")({
            name: "转化",
            help: new Data_Maybe.Just("在这个游戏中, 你需要构建一个函数\x0a                          使得方块可以转化为目标样式 (shown above).\x0a                          使黄色方块变为红色方块, 添加这个子函数 `replaceYbyR` 到程序中.\x0a                          你可以点击或拖动函数\x0a                          到右边的程序框中."),
            difficulty: Types.Easy.value,
            initial: [[Types.Yellow.value, Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Yellow.value, Types.Red.value]],
            target: [[Types.Red.value, Types.Red.value, Types.Red.value], [Types.Red.value, Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Red.value, Types.Red.value], [Types.Red.value, Types.Red.value, Types.Red.value]]
        }), Helper.level("0.2")({
            name: "阻挡",
            help: new Data_Maybe.Just("移除所有不需要的颜色, 使用 <code>reject</code>\x0a                          函数."),
            difficulty: Types.Easy.value,
            initial: [[Types.Yellow.value, Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Yellow.value, Types.Red.value]],
            target: [[Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Red.value]]
        }), Helper.level("0.3")({
            name: "结合",
            help: new Data_Maybe.Just("大多数关卡需要两种或两种以上的函数.\x0a                          添加下面两个函数 `stackY`, `rejectY`到你的程序. 注意\x0a                         你可以通过拖拉改变函数的顺序. 试着\x0a                          通过仔细观察方块的变换，理解函数 `stackY`的作用 ."),
            difficulty: Types.Easy.value,
            initial: [[Types.Yellow.value, Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Yellow.value, Types.Red.value]],
            target: [[Types.Red.value, Types.Yellow.value], [Types.Red.value, Types.Yellow.value], [Types.Red.value, Types.Yellow.value], [Types.Red.value, Types.Yellow.value], [Types.Red.value, Types.Yellow.value], [Types.Red.value, Types.Yellow.value]]
        }), Helper.level("0.4")({
            name: "西班牙国旗",
            help: new Data_Maybe.Just("这关自己做. 你总共需要三个函数\x0a                          来完成."),
            difficulty: Types.Medium.value,
            initial: [[Types.Yellow.value, Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Red.value], [Types.Red.value], [Types.Yellow.value, Types.Red.value], [Types.Yellow.value, Types.Yellow.value, Types.Red.value]],
            target: [[Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value]]
        })])
    };
    exports["chapter0"] = chapter0;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Levels.Chapter1"] = $PS["Levels.Chapter1"] || {};
    var exports = $PS["Levels.Chapter1"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Helper = $PS["Helper"];
    var Transformer = $PS["Transformer"];
    var Types = $PS["Types"];
    var contains = function (dictEq) {
        return function (x) {
            return function (xs) {
                return Data_Maybe.isJust(Data_List.elemIndex(dictEq)(x)(xs));
            };
        };
    };
    var chapter1 = {
        name: "Chapter 1",
        transformers: Helper.fromArray([Helper.tuple("mapYtoYR")({
            name: "map {Yellow}\u21a6[{Red}{Yellow}]",
            "function": Transformer.replaceMultiple(Types.Yellow.value)(new Data_List_Types.Cons(Types.Yellow.value, new Data_List_Types.Cons(Types.Red.value, Data_List_Types.Nil.value)))
        }), Helper.tuple("mapCtoRC")({
            name: "map {Cyan}\u21a6[{Cyan}{Red}]",
            "function": Transformer.replaceMultiple(Types.Cyan.value)(new Data_List_Types.Cons(Types.Red.value, new Data_List_Types.Cons(Types.Cyan.value, Data_List_Types.Nil.value)))
        }), Helper.tuple("rejectY")({
            name: "map (reject {Yellow})",
            "function": Transformer.mapReject(Types.Yellow.value)
        }), Helper.tuple("rejectC")({
            name: "map (reject {Cyan})",
            "function": Transformer.mapReject(Types.Cyan.value)
        }), Helper.tuple("filterContainsR")({
            name: "filter (contains {Red})",
            "function": (function () {
                var $2 = Data_List.filter(contains(Types.eqCube)(Types.Red.value));
                return function ($3) {
                    return Transformer.clearEmpty($2($3));
                };
            })()
        }), Helper.tuple("stackR")({
            name: "map (stack {Red})",
            "function": Data_Functor.map(Data_List_Types.functorList)(function (v) {
                return Data_List.snoc(v)(Types.Red.value);
            })
        }), Helper.tuple("mapReverse")({
            name: "map reverse",
            "function": Data_Functor.map(Data_List_Types.functorList)(Data_List.reverse)
        })]),
        levels: Helper.fromArray([Helper.level("1.1")({
            name: "水星",
            help: new Data_Maybe.Just("出现3种新的函数. 当你需要的时\x0a                          候我们将介绍他. 另外，你也可以\x0a                         直接跳到后面的关卡."),
            difficulty: Types.Easy.value,
            initial: [[Types.Red.value, Types.Red.value], [Types.Red.value, Types.Yellow.value], [Types.Cyan.value, Types.Yellow.value], [Types.Cyan.value, Types.Cyan.value]],
            target: [[Types.Red.value, Types.Red.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Yellow.value, Types.Red.value], [Types.Red.value, Types.Red.value, Types.Red.value]]
        }), Helper.level("1.2")({
            name: "金星",
            help: new Data_Maybe.Just("函数 `filterContainsR` 移除 没有红色方块的列."),
            difficulty: Types.Medium.value,
            initial: [[Types.Red.value, Types.Red.value], [Types.Red.value, Types.Yellow.value], [Types.Cyan.value, Types.Yellow.value], [Types.Cyan.value, Types.Cyan.value]],
            target: [[Types.Red.value, Types.Red.value], [Types.Red.value, Types.Red.value]]
        }), Helper.level("1.3")({
            name: "地球",
            help: new Data_Maybe.Just("你可以翻转每一个垂直的列通过函数 `mapReverse`."),
            difficulty: Types.Easy.value,
            initial: [[Types.Cyan.value, Types.Cyan.value, Types.Yellow.value], [Types.Cyan.value, Types.Red.value], [Types.Cyan.value, Types.Red.value], [Types.Cyan.value, Types.Cyan.value, Types.Yellow.value]],
            target: [[Types.Red.value, Types.Cyan.value, Types.Cyan.value], [Types.Red.value, Types.Cyan.value], [Types.Red.value, Types.Cyan.value], [Types.Red.value, Types.Cyan.value, Types.Cyan.value]]
        }), Helper.level("1.4")({
            name: "火星",
            help: new Data_Maybe.Just("小思考: 这一关是 <s>有更深的\x0a                          哲学意思呢？</s> 还是随机选择的？."),
            difficulty: Types.Medium.value,
            initial: [[Types.Red.value, Types.Red.value], [Types.Red.value, Types.Yellow.value], [Types.Cyan.value, Types.Yellow.value], [Types.Cyan.value, Types.Cyan.value]],
            target: [[Types.Red.value, Types.Red.value], [Types.Red.value, Types.Red.value], [Types.Red.value, Types.Red.value], [Types.Red.value, Types.Red.value]]
        })])
    };
    exports["contains"] = contains;
    exports["chapter1"] = chapter1;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Levels.Chapter2"] = $PS["Levels.Chapter2"] || {};
    var exports = $PS["Levels.Chapter2"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Helper = $PS["Helper"];
    var Transformer = $PS["Transformer"];
    var Types = $PS["Types"];
    var stackEqualColumns = function (v) {
        if (v instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v instanceof Data_List_Types.Cons) {
            var split = Data_List.span(function (v1) {
                return Data_Eq.eq(Data_List_Types.eqList(Types.eqCube))(v1)(v.value0);
            })(v.value1);
            return new Data_List_Types.Cons(Data_List.concat(new Data_List_Types.Cons(v.value0, split.init)), stackEqualColumns(split.rest));
        };
        throw new Error("Failed pattern match at Levels.Chapter2 (line 12, column 1 - line 12, column 33): " + [v.constructor.name]);
    };
    var chapter2 = {
        name: "Chapter 2",
        transformers: Helper.fromArray([Helper.tuple("replaceYbyB")({
            name: "map {Yellow}\u21a6{Brown}",
            "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Brown.value)
        }), Helper.tuple("replaceYbyBY")({
            name: "map {Yellow}\u21a6[{Yellow}{Brown}]",
            "function": Transformer.replaceMultiple(Types.Yellow.value)(new Data_List_Types.Cons(Types.Brown.value, new Data_List_Types.Cons(Types.Yellow.value, Data_List_Types.Nil.value)))
        }), Helper.tuple("replaceBbyOO")({
            name: "map {Brown}\u21a6[{Orange}{Orange}]",
            "function": Transformer.replaceMultiple(Types.Brown.value)(new Data_List_Types.Cons(Types.Orange.value, new Data_List_Types.Cons(Types.Orange.value, Data_List_Types.Nil.value)))
        }), Helper.tuple("rejectO")({
            name: "map (reject {Orange})",
            "function": Transformer.mapReject(Types.Orange.value)
        }), Helper.tuple("stackY")({
            name: "map (stack {Yellow})",
            "function": Transformer.mapStack(Types.Yellow.value)
        }), Helper.tuple("stackEqualColumns")({
            name: "stackEqualColumns",
            "function": stackEqualColumns
        })]),
        levels: Helper.fromArray([Helper.level("2.1")({
            name: "瓦匠",
            help: new Data_Maybe.Just("这一关将出现新的功能函数 `stackEqualColumns`. 它\x0a                          使用 <i>相邻的相等列</i> 并且将他们堆积到\x0a                          顶部. 快试试吧!"),
            difficulty: Types.Easy.value,
            initial: [[Types.Brown.value], [Types.Orange.value], [Types.Orange.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Orange.value], [Types.Orange.value], [Types.Brown.value]],
            target: [[Types.Brown.value], [Types.Orange.value, Types.Orange.value], [Types.Brown.value, Types.Brown.value, Types.Brown.value], [Types.Orange.value, Types.Orange.value], [Types.Brown.value]]
        }), Helper.level("2.2")({
            name: "卷烟器",
            help: new Data_Maybe.Just("靠你自己了..."),
            difficulty: Types.Medium.value,
            initial: [[Types.Brown.value], [Types.Orange.value], [Types.Orange.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Orange.value], [Types.Orange.value], [Types.Brown.value]],
            target: [[Types.Brown.value, Types.Brown.value], [Types.Orange.value, Types.Brown.value, Types.Orange.value, Types.Brown.value], [Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value], [Types.Orange.value, Types.Brown.value, Types.Orange.value, Types.Brown.value], [Types.Brown.value, Types.Brown.value]]
        }), Helper.level("2.3")({
            name: "波塞冬",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Hard.value,
            initial: [[Types.Brown.value], [Types.Orange.value], [Types.Orange.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Orange.value], [Types.Orange.value], [Types.Brown.value]],
            target: [[Types.Brown.value, Types.Brown.value], [Types.Brown.value], [Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value], [Types.Brown.value], [Types.Brown.value, Types.Brown.value]]
        }), Helper.level("2.4")({
            name: "碗",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Hard.value,
            initial: [[Types.Brown.value], [Types.Orange.value], [Types.Orange.value], [Types.Brown.value]],
            target: [[Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value]]
        }), Helper.level("2.5")({
            name: "邮票",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Hard.value,
            initial: [[Types.Brown.value], [Types.Orange.value], [Types.Orange.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Yellow.value], [Types.Orange.value], [Types.Orange.value], [Types.Brown.value]],
            target: [[Types.Yellow.value], [Types.Yellow.value], [Types.Yellow.value, Types.Yellow.value, Types.Yellow.value, Types.Yellow.value], [Types.Yellow.value], [Types.Yellow.value]]
        })])
    };
    exports["stackEqualColumns"] = stackEqualColumns;
    exports["chapter2"] = chapter2;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Levels.Chapter3"] = $PS["Levels.Chapter3"] || {};
    var exports = $PS["Levels.Chapter3"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Helper = $PS["Helper"];
    var Transformer = $PS["Transformer"];
    var Types = $PS["Types"];
    var ooToC = function (v) {
        if (v instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v instanceof Data_List_Types.Cons && (v.value0 instanceof Types.Orange && (v.value1 instanceof Data_List_Types.Cons && v.value1.value0 instanceof Types.Orange))) {
            return new Data_List_Types.Cons(Types.Cyan.value, ooToC(v.value1.value1));
        };
        if (v instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v.value0, ooToC(v.value1));
        };
        throw new Error("Failed pattern match at Levels.Chapter3 (line 16, column 1 - line 16, column 24): " + [v.constructor.name]);
    };
    var cxToX = function (v) {
        if (v instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v instanceof Data_List_Types.Cons && (v.value0 instanceof Types.Cyan && v.value1 instanceof Data_List_Types.Cons)) {
            return new Data_List_Types.Cons(v.value1.value0, cxToX(v.value1.value1));
        };
        if (v instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v.value0, cxToX(v.value1));
        };
        throw new Error("Failed pattern match at Levels.Chapter3 (line 11, column 1 - line 11, column 24): " + [v.constructor.name]);
    };
    var chapter3 = {
        name: "Chapter 3",
        transformers: Helper.fromArray([Helper.tuple("mapXtoOX")({
            name: "map {X}\u21a6[{X}{Orange}]",
            "function": Data_Functor.map(Data_List_Types.functorList)(Data_List.concatMap(function (x) {
                return new Data_List_Types.Cons(Types.Orange.value, new Data_List_Types.Cons(x, Data_List_Types.Nil.value));
            }))
        }), Helper.tuple("mapCXtoX")({
            name: "map [{X}{Cyan}]\u21a6{X}",
            "function": Data_Functor.map(Data_List_Types.functorList)(cxToX)
        }), Helper.tuple("mapOOtoC")({
            name: "map [{Orange}{Orange}]\u21a6{Cyan}",
            "function": Data_Functor.map(Data_List_Types.functorList)(ooToC)
        }), Helper.tuple("mapCtoO")({
            name: "map {Cyan}\u21a6{Orange}",
            "function": Transformer.replaceSingle(Types.Cyan.value)(Types.Orange.value)
        })]),
        levels: Helper.fromArray([Helper.level("3.1")({
            name: "砖块",
            help: new Data_Maybe.Just("这关介绍新的占位砖块 {X}."),
            difficulty: Types.Easy.value,
            initial: [[Types.Cyan.value, Types.Orange.value], [Types.Cyan.value, Types.Cyan.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value], [Types.Cyan.value, Types.Cyan.value, Types.Orange.value], [Types.Cyan.value, Types.Orange.value]],
            target: [[Types.Cyan.value], [Types.Cyan.value, Types.Orange.value], [Types.Cyan.value], [Types.Cyan.value, Types.Orange.value], [Types.Cyan.value]]
        }), Helper.level("3.2")({
            name: "堡垒",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Hard.value,
            initial: [[Types.Cyan.value, Types.Orange.value], [Types.Cyan.value, Types.Cyan.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value], [Types.Cyan.value, Types.Cyan.value, Types.Orange.value], [Types.Cyan.value, Types.Orange.value]],
            target: [[Types.Orange.value, Types.Cyan.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Cyan.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Cyan.value]]
        }), Helper.level("3.3")({
            name: "城堡",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Medium.value,
            initial: [[Types.Orange.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value]],
            target: [[Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Cyan.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Cyan.value], [Types.Orange.value, Types.Orange.value], [Types.Orange.value, Types.Cyan.value], [Types.Orange.value, Types.Orange.value]]
        })])
    };
    exports["cxToX"] = cxToX;
    exports["ooToC"] = ooToC;
    exports["chapter3"] = chapter3;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Levels.Chapter4"] = $PS["Levels.Chapter4"] || {};
    var exports = $PS["Levels.Chapter4"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Int = $PS["Data.Int"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Semiring = $PS["Data.Semiring"];
    var Helper = $PS["Helper"];
    var Types = $PS["Types"];
    var toDigit = function (v) {
        if (v instanceof Types.Orange) {
            return 0;
        };
        return 1;
    };
    var toInt = function (w) {
        return Data_Foldable.sum(Data_List_Types.foldableList)(Data_Semiring.semiringInt)(Data_List.zipWith(function (f) {
            return function (c) {
                return f * toDigit(c) | 0;
            };
        })(new Data_List_Types.Cons(1, new Data_List_Types.Cons(2, new Data_List_Types.Cons(4, Data_List_Types.Nil.value))))(w));
    };
    var toCube = function (v) {
        if (v === 0) {
            return Types.Orange.value;
        };
        return Types.Brown.value;
    };
    var digits = function (n) {
        var bit = function (m) {
            var $7 = (n & m) === m;
            if ($7) {
                return 1;
            };
            return 0;
        };
        return Data_Functor.map(Data_Functor.functorArray)(bit)([1, 2, 4]);
    };
    var toAStack = function (num) {
        return Data_Functor.map(Data_Functor.functorArray)(toCube)(digits(num));
    };
    var toStack = (function () {
        var $8 = Data_List.fromFoldable(Data_Foldable.foldableArray);
        return function ($9) {
            return $8(toAStack($9));
        };
    })();
    var mapNumbers = function (f) {
        return Data_Functor.map(Data_List_Types.functorList)(function ($10) {
            return toStack(f(toInt($10)));
        });
    };
    var chapter4 = {
        name: "Chapter 4",
        transformers: Helper.fromArray([Helper.tuple("mapAdd1")({
            name: "map (+1)",
            "function": mapNumbers(function (v) {
                return v + 1 | 0;
            })
        }), Helper.tuple("mapSub1")({
            name: "map (-1)",
            "function": mapNumbers(function (v) {
                return v - 1 | 0;
            })
        }), Helper.tuple("mapMul2")({
            name: "map (\xd72)",
            "function": mapNumbers(function (v) {
                return v * 2 | 0;
            })
        }), Helper.tuple("mapPow2")({
            name: "map (^2)",
            "function": mapNumbers(function (x) {
                return x * x | 0;
            })
        }), Helper.tuple("filterEven")({
            name: "filter even",
            "function": Data_List.filter(function ($11) {
                return Data_Int.even(toInt($11));
            })
        })]),
        levels: Helper.fromArray([Helper.level("4.1")({
            name: "0b0 .. 0b111",
            help: new Data_Maybe.Just("猜猜这一关名字是什么意思呢？<code>0b0 .. 0b111</code>?\x0a                          把它转换成八进制，好好读一遍."),
            difficulty: Types.Medium.value,
            initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([0, 1, 2, 3, 4, 5, 6, 7]),
            target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([1, 3, 5, 7, 1, 3, 5, 7])
        }), Helper.level("4.2")({
            name: "怪",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Easy.value,
            initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([0, 1, 2, 3, 4, 5, 6, 7]),
            target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([1, 3, 5, 7])
        }), Helper.level("4.3")({
            name: "零",
            help: Data_Maybe.Nothing.value,
            difficulty: Types.Hard.value,
            initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([0, 1, 2, 3, 4, 5, 6, 7]),
            target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([0, 0, 0, 0, 0, 0, 0, 0])
        }), Helper.level("4.4")({
            name: "别怕！",
            help: new Data_Maybe.Just("在目前看来，这是最后一关了 ... . 你也可以设计你自己的关卡!\x0a                          这里是 <a href=\"https://github.com/sharkdp/cube-composer\">我的仓库的</a>\x0a                          更多信息. 祝你玩得开心！."),
            difficulty: Types.Hard.value,
            initial: Data_Functor.map(Data_Functor.functorArray)(toAStack)([0, 1, 2, 3, 4, 5, 6, 7]),
            target: Data_Functor.map(Data_Functor.functorArray)(toAStack)([4, 2, 4, 2, 4, 2, 4, 2])
        })])
    };
    exports["toDigit"] = toDigit;
    exports["toCube"] = toCube;
    exports["toInt"] = toInt;
    exports["digits"] = digits;
    exports["toAStack"] = toAStack;
    exports["toStack"] = toStack;
    exports["mapNumbers"] = mapNumbers;
    exports["chapter4"] = chapter4;
})(PS);
(function (exports) {
    exports.unsafeError = function (msg) {
        // Try to recover from this error by resetting the global state.
        if (confirm(msg + ". Clear localStorage and reload?")) {
            localStorage.clear();
            location.reload();
        }

        // Abort execution
        throw new Error(msg);
    };
})(PS["Unsafe"] = PS["Unsafe"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Unsafe"] = $PS["Unsafe"] || {};
    var exports = $PS["Unsafe"];
    var $foreign = $PS["Unsafe"];
    exports["unsafeError"] = $foreign.unsafeError;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Levels"] = $PS["Levels"] || {};
    var exports = $PS["Levels"];
    var Control_Bind = $PS["Control.Bind"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Show = $PS["Data.Show"];
    var Data_StrMap = $PS["Data.StrMap"];
    var Levels_Chapter0 = $PS["Levels.Chapter0"];
    var Levels_Chapter1 = $PS["Levels.Chapter1"];
    var Levels_Chapter2 = $PS["Levels.Chapter2"];
    var Levels_Chapter3 = $PS["Levels.Chapter3"];
    var Levels_Chapter4 = $PS["Levels.Chapter4"];
    var Types = $PS["Types"];
    var Unsafe = $PS["Unsafe"];
    var levelTitle = function (lid) {
        return function (level) {
            return lid + (" - " + (level.name + (" (" + (Data_Show.show(Types.showDifficulty)(level.difficulty) + ")"))));
        };
    };
    var getTransformerRecord = function (chapter) {
        return function (tid) {
            return Data_StrMap.lookup(tid)(chapter.transformers);
        };
    };
    var getTransformer = function (ch) {
        return function (tid) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(function (v) {
                return v["function"];
            })(getTransformerRecord(ch)(tid));
        };
    };
    var allChapters = new Data_List_Types.Cons(Levels_Chapter0.chapter0, new Data_List_Types.Cons(Levels_Chapter1.chapter1, new Data_List_Types.Cons(Levels_Chapter2.chapter2, new Data_List_Types.Cons(Levels_Chapter3.chapter3, new Data_List_Types.Cons(Levels_Chapter4.chapter4, Data_List_Types.Nil.value)))));
    var allLevelIds = Control_Bind.bind(Data_List_Types.bindList)(allChapters)((function () {
        var $9 = Data_List.sort(Data_Ord.ordString);
        var $10 = Data_List.fromFoldable(Data_Foldable.foldableArray);
        return function ($11) {
            return $9($10(Data_StrMap.keys((function (v) {
                return v.levels;
            })($11))));
        };
    })());
    var firstLevel = Data_Maybe.fromMaybe("")(Data_List.head(allLevelIds));
    var allLevels = Data_StrMap.unions(Data_List_Types.foldableList)(Data_Functor.map(Data_List_Types.functorList)(function (v) {
        return v.levels;
    })(allChapters));
    var getLevel = function (lid) {
        var v = Data_StrMap.lookup(lid)(allLevels);
        if (v instanceof Data_Maybe.Just) {
            return v.value0;
        };
        if (v instanceof Data_Maybe.Nothing) {
            return Unsafe.unsafeError("Could not find level " + Data_Show.show(Data_Show.showString)(lid));
        };
        throw new Error("Failed pattern match at Levels (line 37, column 5 - line 39, column 70): " + [v.constructor.name]);
    };
    var getChapter = function (lid) {
        var hasLevel = function (ch) {
            return Data_StrMap.member(lid)(ch.levels);
        };
        var v = Data_Foldable.find(Data_List_Types.foldableList)(hasLevel)(allChapters);
        if (v instanceof Data_Maybe.Just) {
            return v.value0;
        };
        if (v instanceof Data_Maybe.Nothing) {
            return Unsafe.unsafeError("Could not find chapter " + Data_Show.show(Data_Show.showString)(lid));
        };
        throw new Error("Failed pattern match at Levels (line 48, column 5 - line 50, column 72): " + [v.constructor.name]);
    };
    exports["allChapters"] = allChapters;
    exports["allLevels"] = allLevels;
    exports["allLevelIds"] = allLevelIds;
    exports["firstLevel"] = firstLevel;
    exports["getLevel"] = getLevel;
    exports["levelTitle"] = levelTitle;
    exports["getChapter"] = getChapter;
    exports["getTransformerRecord"] = getTransformerRecord;
    exports["getTransformer"] = getTransformer;
})(PS);
(function (exports) {
    exports.installSortable = function (el) {
        return function (sortHandler) {
            return function () {
                new Sortable(el, {
                    group: 'function-lists',
                    ghostClass: 'sortable-ghost',
                    animation: 150,
                    onSort: sortHandler
                });
            };
        };
    };
})(PS["Sortable"] = PS["Sortable"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Sortable"] = $PS["Sortable"] || {};
    var exports = $PS["Sortable"];
    var $foreign = $PS["Sortable"];
    exports["installSortable"] = $foreign.installSortable;
})(PS);
(function (exports) {
    exports.unsafeLoadGameState = function (just) {
        return function (nothing) {
            return function () {
                var data = localStorage.getItem('gameState');
                if (!data) {
                    return nothing;
                }
                return just(JSON.parse(data));
            };
        };
    };

    exports.unsafeSaveGameState = function (gs) {
        return function () {
            localStorage.setItem('gameState', JSON.stringify(gs));
            return {};
        };
    };
})(PS["Storage"] = PS["Storage"] || {});
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Storage"] = $PS["Storage"] || {};
    var exports = $PS["Storage"];
    var $foreign = $PS["Storage"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Data_Array = $PS["Data.Array"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_StrMap = $PS["Data.StrMap"];
    var toSaveable = function (gs) {
        return {
            currentLevel: gs.currentLevel,
            levelState: Data_Functor.map(Data_StrMap.functorStrMap)(Data_Array.fromFoldable(Data_List_Types.foldableList))(gs.levelState)
        };
    };
    var saveGameState = function ($0) {
        return $foreign.unsafeSaveGameState(toSaveable($0));
    };
    var fromSaveable = function (sgs) {
        return {
            currentLevel: sgs.currentLevel,
            levelState: Data_Functor.map(Data_StrMap.functorStrMap)(Data_List.fromFoldable(Data_Foldable.foldableArray))(sgs.levelState)
        };
    };
    var loadGameState = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Functor.map(Data_Maybe.functorMaybe)(fromSaveable))($foreign.unsafeLoadGameState(Data_Maybe.Just.create)(Data_Maybe.Nothing.value));
    exports["toSaveable"] = toSaveable;
    exports["fromSaveable"] = fromSaveable;
    exports["loadGameState"] = loadGameState;
    exports["saveGameState"] = saveGameState;
})(PS);
(function ($PS) {
    // Generated by purs version 0.13.0
    "use strict";
    $PS["Main"] = $PS["Main"] || {};
    var exports = $PS["Main"];
    var Analytics = $PS["Analytics"];
    var Color = $PS["Color"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad_Eff = $PS["Control.Monad.Eff"];
    var Control_Monad_Eff_Console = $PS["Control.Monad.Eff.Console"];
    var DOM_HTML = $PS["DOM.HTML"];
    var DOM_HTML_Event_EventTypes = $PS["DOM.HTML.Event.EventTypes"];
    var DOM_HTML_Types = $PS["DOM.HTML.Types"];
    var DOM_Node_Document = $PS["DOM.Node.Document"];
    var DOM_Node_Element = $PS["DOM.Node.Element"];
    var DOM_Node_Node = $PS["DOM.Node.Node"];
    var DOM_Node_Types = $PS["DOM.Node.Types"];
    var DOMHelper = $PS["DOMHelper"];
    var Data_Array = $PS["Data.Array"];
    var Data_Either = $PS["Data.Either"];
    var Data_Enum = $PS["Data.Enum"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Int = $PS["Data.Int"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Show = $PS["Data.Show"];
    var Data_StrMap = $PS["Data.StrMap"];
    var Data_String_Regex = $PS["Data.String.Regex"];
    var Data_Traversable = $PS["Data.Traversable"];
    var Data_Unit = $PS["Data.Unit"];
    var Graphics_Canvas = $PS["Graphics.Canvas"];
    var Graphics_Drawing = $PS["Graphics.Drawing"];
    var Graphics_Isometric = $PS["Graphics.Isometric"];
    var Levels = $PS["Levels"];
    var Sortable = $PS["Sortable"];
    var Storage = $PS["Storage"];
    var Transformer = $PS["Transformer"];
    var Types = $PS["Types"];
    var unsafeFromJust = Data_Maybe.fromJust();
    var traverseWithKey_ = function (dictMonad) {
        return function (f) {
            return function (sm) {
                return Data_StrMap.foldM(dictMonad)(Data_Function["const"](f))(Data_Unit.unit)(sm);
            };
        };
    };
    var spacing = 5.5;
    var replaceAll = function (regexString) {
        return function (replacement) {
            var flags = Data_String_Regex.parseFlags("g");
            var pattern = Data_Either.fromRight()(Data_String_Regex.regex(regexString)(flags));
            return Data_String_Regex.replace(pattern)(replacement);
        };
    };
    var replaceColors = function (s$prime) {
        var replacement = function (c) {
            return "<div class=\"cube " + (c + "\"> </div>");
        };
        var pattern = function (c) {
            return "{" + (c + "}");
        };
        var replaceColor = function (s) {
            return function (c) {
                return replaceAll(pattern(c))(replacement(c))(s);
            };
        };
        return Data_Foldable.foldl(Data_List_Types.foldableList)(replaceColor)(s$prime)(new Data_List_Types.Cons("X", Data_Functor.map(Data_List_Types.functorList)(Data_Show.show(Types.showCube))(Data_Enum.enumFromTo(Types.enumCube)(Data_List_Types.unfoldableList)(Types.Cyan.value)(Types.Yellow.value))));
    };
    var replaceStacks = (function () {
        var $101 = replaceAll("\\[")("<div class=\"stack\">");
        var $102 = replaceAll("\\]")("</div>");
        return function ($103) {
            return $101($102($103));
        };
    })();
    var replaceTransformers = function (ch) {
        return function (initial) {
            var replacement = function (tr) {
                return "<span class=\"transformer\">" + (tr.name + "</span>");
            };
            var pattern = function (id) {
                return "`" + (id + "`");
            };
            var replaceT = function (text) {
                return function (id) {
                    return function (tr) {
                        return replaceAll(pattern(id))(replacement(tr))(text);
                    };
                };
            };
            return Data_StrMap.fold(replaceT)(initial)(ch.transformers);
        };
    };
    var nameToHTML = function ($104) {
        return replaceColors(replaceStacks($104));
    };
    var initialGS = {
        currentLevel: Levels.firstLevel,
        levelState: Data_StrMap.empty
    };
    var getCurrentIds = function (gs) {
        var v = Data_StrMap.lookup(gs.currentLevel)(gs.levelState);
        if (v instanceof Data_Maybe.Just) {
            return v.value0;
        };
        if (v instanceof Data_Maybe.Nothing) {
            return Data_List_Types.Nil.value;
        };
        throw new Error("Failed pattern match at Main (line 95, column 20 - line 97, column 38): " + [v.constructor.name]);
    };
    var foldMapIndexed = function (dictMonoid) {
        return function (f) {
            return function (xs$prime) {
                var go = function (v) {
                    return function (v1) {
                        if (v1 instanceof Data_List_Types.Nil) {
                            return Data_Monoid.mempty(dictMonoid);
                        };
                        if (v1 instanceof Data_List_Types.Cons) {
                            return Data_Semigroup.append(dictMonoid.Semigroup0())(f(v)(v1.value0))(go(v + 1 | 0)(v1.value1));
                        };
                        throw new Error("Failed pattern match at Main (line 59, column 11 - line 59, column 36): " + [v.constructor.name, v1.constructor.name]);
                    };
                };
                return go(0)(xs$prime);
            };
        };
    };
    var cubeColor = function (v) {
        if (v instanceof Types.Cyan) {
            return Color.rgb(0)(160)(176);
        };
        if (v instanceof Types.Brown) {
            return Color.rgb(106)(74)(60);
        };
        if (v instanceof Types.Red) {
            return Color.rgb(204)(51)(63);
        };
        if (v instanceof Types.Orange) {
            return Color.rgb(235)(104)(65);
        };
        if (v instanceof Types.Yellow) {
            return Color.rgb(237)(201)(81);
        };
        throw new Error("Failed pattern match at Main (line 45, column 1 - line 45, column 27): " + [v.constructor.name]);
    };
    var renderCube = function (x) {
        return function (y) {
            return function (z) {
                return function (c) {
                    var point = {
                        x: Data_Int.toNumber(-x | 0),
                        y: spacing * Data_Int.toNumber(y),
                        z: Data_Int.toNumber(z)
                    };
                    return Graphics_Isometric.filled(cubeColor(c))(Graphics_Isometric.cube(point)(0.9));
                };
            };
        };
    };
    var renderStack = function (len) {
        return function (y) {
            return function (x) {
                return function (stack) {
                    return foldMapIndexed(Graphics_Isometric.monoidScene)(renderCube(len - x | 0)(y))(stack);
                };
            };
        };
    };
    var renderWall = function (y) {
        return function (v) {
            if (v instanceof Data_List_Types.Nil) {
                var gray = Color.graytone(0.4);
                return Graphics_Isometric.filled(gray)(Graphics_Isometric.prism({
                    x: -8.0,
                    y: spacing * Data_Int.toNumber(y),
                    z: 0.0
                })(8.0)(0.9)(0.1));
            };
            var len = Data_List.length(v);
            return foldMapIndexed(Graphics_Isometric.monoidScene)(renderStack(len)(y))(Data_List.reverse(v));
        };
    };
    var renderTarget = function (target) {
        return renderWall(0)(target);
    };
    var renderWalls = function (walls) {
        return foldMapIndexed(Graphics_Isometric.monoidScene)(renderWall)(walls);
    };
    var appendTransformerElement = function (ul) {
        return function (id) {
            return function (t) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
                    var v = DOMHelper.getDocument();
                    var v1 = DOM_Node_Document.createElement("li")(v)();
                    DOM_Node_Element.setAttribute("id")(id)(v1)();
                    DOMHelper.setInnerHTML(nameToHTML(t.name))(v1)();
                    return DOM_Node_Node.appendChild(DOM_Node_Types.elementToNode(v1))(DOM_Node_Types.elementToNode(ul))();
                });
            };
        };
    };
    var appendLevelElement = function (select) {
        return function (currentId) {
            return function (lid) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)((function () {
                    var level = Levels.getLevel(lid);
                    var chapter = Levels.getChapter(lid);
                    return function __do() {
                        var v = DOMHelper.getDocument();
                        var v1 = DOM_Node_Document.createElement("option")(v)();
                        DOM_Node_Element.setAttribute("value")(lid)(v1)();
                        Control_Applicative.when(Control_Monad_Eff.applicativeEff)(currentId === lid)(DOM_Node_Element.setAttribute("selected")("selected")(v1))();
                        DOM_Node_Node.setTextContent(Levels.levelTitle(lid)(level))(DOM_Node_Types.elementToNode(v1))();
                        return DOM_Node_Node.appendChild(DOM_Node_Types.elementToNode(v1))(DOM_Node_Types.elementToNode(select))();
                    };
                })());
            };
        };
    };
    var render = function (setupUI) {
        return function (gs) {
            return function __do() {
                var v = DOMHelper.getDocument();
                var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(Graphics_Canvas.getCanvasElementById("canvas"))();
                var v2 = Graphics_Canvas.getContext2D(v1)();
                var v3 = Graphics_Canvas.getCanvasWidth(v1)();
                var v4 = Graphics_Canvas.getCanvasHeight(v1)();
                var tids = getCurrentIds(gs);
                var level = Levels.getLevel(gs.currentLevel);
                var chapter = Levels.getChapter(gs.currentLevel);
                Control_Applicative.when(Control_Monad_Eff.applicativeEff)(setupUI)(function __do() {
                    var v5 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("available")(v))();
                    var v6 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("program")(v))();
                    DOMHelper.setInnerHTML("")(v5)();
                    DOMHelper.setInnerHTML("")(v6)();
                    var unused = Data_Foldable.foldl(Data_List_Types.foldableList)(Data_Function.flip(Data_StrMap["delete"]))(chapter.transformers)(tids);
                    var insert = function (sm) {
                        return function (id) {
                            var v7 = Levels.getTransformerRecord(chapter)(id);
                            if (v7 instanceof Data_Maybe.Just) {
                                return Data_StrMap.insert(id)(v7.value0)(sm);
                            };
                            if (v7 instanceof Data_Maybe.Nothing) {
                                return sm;
                            };
                            throw new Error("Failed pattern match at Main (line 122, column 28 - line 124, column 47): " + [v7.constructor.name]);
                        };
                    };
                    var active = Data_Foldable.foldl(Data_List_Types.foldableList)(insert)(Data_StrMap.empty)(tids);
                    traverseWithKey_(Control_Monad_Eff.monadEff)(appendTransformerElement(v5))(unused)();
                    traverseWithKey_(Control_Monad_Eff.monadEff)(appendTransformerElement(v6))(active)();
                    var installClickHandler = function (li) {
                        return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.click)(clickLi(DOM_HTML_Types.htmlElementToElement(li)))(DOM_HTML_Types.htmlElementToEventTarget(li));
                    };
                    Control_Bind.bind(Control_Monad_Eff.bindEff)(DOMHelper["children'"](v5))(Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(installClickHandler))();
                    Control_Bind.bind(Control_Monad_Eff.bindEff)(DOMHelper["children'"](v6))(Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(installClickHandler))();
                    return DOMHelper.withElementById("levels")(v)(function (selectLevel) {
                        return function __do() {
                            DOMHelper.setInnerHTML("")(selectLevel)();
                            return Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)(appendLevelElement(selectLevel)(gs.currentLevel))(Levels.allLevelIds)();
                        };
                    })();
                })();
                var transformers = Data_List.mapMaybe(Levels.getTransformer(chapter))(tids);
                var steps = Transformer.allSteps(transformers)(level.initial);
                var lightPos = {
                    x: -2.0,
                    y: 1.0,
                    z: 3.0
                };
                var v5 = Graphics_Canvas.clearRect(v2)({
                    x: 0.0,
                    y: 0.0,
                    w: v3,
                    h: v4
                })();
                var renderCanvas = function (x) {
                    return function (y) {
                        return function (s) {
                            return function (scene) {
                                return Graphics_Drawing.render(v2)(Graphics_Drawing.translate(x)(y)(Graphics_Isometric.renderScene(lightPos)(Graphics_Isometric.scale(s)(scene))));
                            };
                        };
                    };
                };
                renderCanvas(2.0)(284.0)(49.0)(renderWalls(steps))();
                renderCanvas(1280.0)(380.0)(35.0)(renderTarget(level.target))();
                var solved = Data_Maybe.maybe(false)(function (v6) {
                    return Data_Eq.eq(Data_List_Types.eqList(Data_List_Types.eqList(Types.eqCube)))(v6)(level.target);
                })(Data_List.last(steps));
                var visibility = (function () {
                    if (solved) {
                        return "visible";
                    };
                    return "hidden";
                })();
                var cssAction = (function () {
                    if (solved) {
                        return DOMHelper.classAdd("flash");
                    };
                    return DOMHelper.classRemove("flash");
                })();
                DOMHelper.withElementById("message")(v)((function () {
                    var $105 = DOMHelper.setStyleAttribute("visibility")(visibility);
                    return function ($106) {
                        return $105(DOMHelper.unsafeElementToHTMLElement($106));
                    };
                })())();
                DOMHelper.withElementById("solved")(v)(cssAction)();
                var helpHTML = Data_Maybe.maybe("")((function () {
                    var $107 = replaceTransformers(chapter);
                    return function ($108) {
                        return nameToHTML($107($108));
                    };
                })())(level.help);
                DOMHelper.withElementById("help")(v)(DOMHelper.setInnerHTML(helpHTML))();
                var toArray = Data_Array.fromFoldable(Data_List_Types.foldableList);
                var toArrays = (function () {
                    var $109 = Data_Functor.map(Data_List_Types.functorList)(toArray);
                    return function ($110) {
                        return toArray($109($110));
                    };
                })();
                Control_Monad_Eff_Console.log("Program: " + Data_Show.show(Data_Show.showArray(Data_Show.showString))(toArray(tids)))();
                Control_Monad_Eff_Console.log("Target: " + Data_Show.show(Data_Show.showArray(Data_Show.showArray(Types.showCube)))(toArrays(level.target)))();
                Control_Monad_Eff_Console.log("Steps:")();
                Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_List_Types.foldableList)((function () {
                    var $111 = Control_Monad_Eff_Console.logShow(Data_Show.showArray(Data_Show.showArray(Types.showCube)));
                    return function ($112) {
                        return $111(toArrays($112));
                    };
                })())(steps)();
                return Control_Monad_Eff_Console.log("")();
            };
        };
    };
    var modifyGameStateAndRender = function (setupUI) {
        return function (modifyGS) {
            return function __do() {
                var v = Storage.loadGameState();
                var gs = Data_Maybe.fromMaybe(initialGS)(v);
                var gs$prime = modifyGS(gs);
                render(setupUI)(gs$prime)();
                return Storage.saveGameState(gs$prime)();
            };
        };
    };
    var clickLi = function (liEl) {
        return function (event) {
            var modify = function (ulId) {
                return function (clicked) {
                    return function (gs) {
                        var program = getCurrentIds(gs);
                        var program$prime = (function () {
                            var $75 = ulId === "available";
                            if ($75) {
                                return Data_List.snoc(program)(clicked);
                            };
                            return Data_List.filter(function (v) {
                                return v !== clicked;
                            })(program);
                        })();
                        return {
                            levelState: Data_StrMap.insert(gs.currentLevel)(program$prime)(gs.levelState),
                            currentLevel: gs.currentLevel
                        };
                    };
                };
            };
            return function __do() {
                var v = DOMHelper.unsafeGetAttribute("id")(liEl)();
                var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOM_Node_Node.parentElement(DOM_Node_Types.elementToNode(liEl)))();
                var v2 = DOMHelper.unsafeGetAttribute("id")(v1)();
                return modifyGameStateAndRender(true)(modify(v2)(v))();
            };
        };
    };
    var levelChangeHandler = function (selectLevel) {
        return function (v) {
            return function __do() {
                var v1 = DOMHelper.getSelectedValue(selectLevel)();
                Analytics.analyticsLevelChanged(v1)();
                return modifyGameStateAndRender(true)(function (gs) {
                    return {
                        currentLevel: v1,
                        levelState: gs.levelState
                    };
                })();
            };
        };
    };
    var nextLevel = (function () {
        var next = function (cur) {
            return Data_Maybe.fromMaybe(cur)(Control_Bind.bindFlipped(Data_Maybe.bindMaybe)(Data_List.head)(Data_List.tail(Data_List.dropWhile(function (v) {
                return v !== cur;
            })(Levels.allLevelIds))));
        };
        var mod = function (gs) {
            return {
                currentLevel: next(gs.currentLevel),
                levelState: gs.levelState
            };
        };
        return function __do() {
            var v = Storage.loadGameState();
            var gs$prime = Data_Maybe.fromMaybe(initialGS)(v);
            Analytics.analyticsLevelChanged(next(gs$prime.currentLevel))();
            return modifyGameStateAndRender(true)(mod)();
        };
    })();
    var prevLevel = (function () {
        var before = function ($copy_v) {
            return function ($copy_v1) {
                var $tco_var_v = $copy_v;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, v1) {
                    if (v1 instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return Data_Maybe.Nothing.value;
                    };
                    if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
                        $tco_done = true;
                        return Data_Maybe.Nothing.value;
                    };
                    if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Cons) {
                        var $85 = v === v1.value1.value0;
                        if ($85) {
                            $tco_done = true;
                            return new Data_Maybe.Just(v1.value0);
                        };
                        $tco_var_v = v;
                        $copy_v1 = new Data_List_Types.Cons(v1.value1.value0, v1.value1.value1);
                        return;
                    };
                    throw new Error("Failed pattern match at Main (line 213, column 11 - line 213, column 51): " + [v.constructor.name, v1.constructor.name]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $copy_v1);
                };
                return $tco_result;
            };
        };
        var prev = function (cur) {
            return Data_Maybe.fromMaybe(cur)(before(cur)(Levels.allLevelIds));
        };
        var mod = function (gs) {
            return {
                currentLevel: prev(gs.currentLevel),
                levelState: gs.levelState
            };
        };
        return modifyGameStateAndRender(true)(mod);
    })();
    var reprogramHandler = function __do() {
        var v = DOMHelper.getDocument();
        var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("program")(v))();
        var v2 = DOMHelper["children'"](v1)();
        var getId = (function () {
            var $113 = DOMHelper.unsafeGetAttribute("id");
            return function ($114) {
                return $113(DOM_HTML_Types.htmlElementToElement($114));
            };
        })();
        var v3 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_List.fromFoldable(Data_Foldable.foldableArray))(Data_Traversable.traverse(Data_Traversable.traversableArray)(Control_Monad_Eff.applicativeEff)(getId)(v2))();
        return modifyGameStateAndRender(false)(function (gs) {
            return {
                currentLevel: gs.currentLevel,
                levelState: Data_StrMap.insert(gs.currentLevel)(v3)(gs.levelState)
            };
        })();
    };
    var resetLevel = (function () {
        var mod = function (gs) {
            return {
                levelState: Data_StrMap.insert(gs.currentLevel)(Data_List_Types.Nil.value)(gs.levelState),
                currentLevel: gs.currentLevel
            };
        };
        return modifyGameStateAndRender(true)(mod);
    })();
    var keyPress = function (event) {
        return Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
            var v = DOMHelper.getDocument();
            var kev = DOMHelper.unsafeEventToKeyboardEvent(event);
            var ctrlPressed = DOMHelper.ctrlKey(kev);
            var code = DOMHelper.keyCode(kev);
            return Control_Applicative.when(Control_Monad_Eff.applicativeEff)(!ctrlPressed)((function () {
                if (code === 82) {
                    return resetLevel;
                };
                if (code === 37) {
                    return prevLevel;
                };
                if (code === 80) {
                    return prevLevel;
                };
                if (code === 39) {
                    return nextLevel;
                };
                if (code === 78) {
                    return nextLevel;
                };
                return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
            })())();
        });
    };
    var main = function __do() {
        var v = DOMHelper.getDocument();
        var v1 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("available")(v))();
        var v2 = Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeFromJust)(DOMHelper["getElementById'"]("program")(v))();
        Sortable.installSortable(v1)(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))();
        Sortable.installSortable(v2)(reprogramHandler)();
        var v3 = Data_Functor.map(Control_Monad_Eff.functorEff)(DOM_HTML_Types.windowToEventTarget)(DOM_HTML.window)();
        DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.keydown)(keyPress)(v3)();
        DOMHelper.withElementById("levels")(v)(function (selectLevel) {
            return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.change)(levelChangeHandler(selectLevel))(DOM_Node_Types.elementToEventTarget(selectLevel));
        })();
        DOMHelper.withElementById("reset")(v)(function (button) {
            return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.click)(Data_Function["const"](resetLevel))(DOM_Node_Types.elementToEventTarget(button));
        })();
        DOMHelper.withElementById("nextlevel")(v)(function (button) {
            return DOMHelper["addEventListener'"](DOM_HTML_Event_EventTypes.click)(Data_Function["const"](nextLevel))(DOM_Node_Types.elementToEventTarget(button));
        })();
        var v4 = Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Maybe.fromMaybe(initialGS))(Storage.loadGameState)();
        Storage.saveGameState(v4)();
        return render(true)(v4)();
    };
    exports["main"] = main;
})(PS);
PS["Main"].main();