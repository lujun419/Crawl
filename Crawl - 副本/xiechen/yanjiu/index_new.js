!
function($, w) {
    function bindHotCountryEvent(a, b) {
        "true" == $("#destCity").attr("mod_hot_country") && a && ($("#destCity").getMod("address_poi", "2.0").method("bind", "change",
        function(c, d) {
            b(d && d.isCountry),
            d.data && a.hideTips()
        }), $("#destCity").getMod("address_poi", "2.0").method("bind", "userinput",
        function(b, c) {
            c && c.isCountry && (a.updateCountrySource(c.eventType), a.uploadUbt())
        }), $("#homeCity").getMod("address_poi", "2.0").method("bind", "change",
        function(c, d) {
            if (a.showed) {
                if (!a.checkIsMappingHotCountryPair()) return $("#destCity").getMod("address_poi", "2.0").method("select", ""),
                void b(!1);
                a.uploadUbt()
            }
            a.hideTips()
        }), window.dateTimeChangeEventListener = function() {
            a.uploadUbt()
        })
    } !
    function(a, b) {
        function c(a) {
            var b = oa[a] = {};
            return $.each(a.split(ba),
            function(a, c) {
                b[c] = !0
            }),
            b
        }
        function d(a, c, d) {
            if (d === b && 1 === a.nodeType) {
                var e = "data-" + c.replace(qa, "-$1").toLowerCase();
                if (d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: +d + "" === d ? +d: pa.test(d) ? $.parseJSON(d) : d
                    } catch(f) {}
                    $.data(a, c, d)
                } else d = b
            }
            return d
        }
        function e(a) {
            var b;
            for (b in a) if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
            return ! 0
        }
        function f() {
            return ! 1
        }
        function g() {
            return ! 0
        }
        function h(a) {
            return ! a || !a.parentNode || 11 === a.parentNode.nodeType
        }
        function i(a, b) {
            do a = a[b];
            while (a && 1 !== a.nodeType);
            return a
        }
        function j(a, b, c) {
            if (b = b || 0, $.isFunction(b)) return $.grep(a,
            function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
            if (b.nodeType) return $.grep(a,
            function(a, d) {
                return a === b === c
            });
            if ("string" == typeof b) {
                var d = $.grep(a,
                function(a) {
                    return 1 === a.nodeType
                });
                if (Ka.test(b)) return $.filter(b, d, !c);
                b = $.filter(b, d)
            }
            return $.grep(a,
            function(a, d) {
                return $.inArray(a, b) >= 0 === c
            })
        }
        function k(a) {
            var b = Na.split("|"),
            c = a.createDocumentFragment();
            if (c.createElement) for (; b.length;) c.createElement(b.pop());
            return c
        }
        function l(a, b) {
            return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
        }
        function m(a, b) {
            if (1 === b.nodeType && $.hasData(a)) {
                var c, d, e, f = $._data(a),
                g = $._data(b, f),
                h = f.events;
                if (h) {
                    delete g.handle,
                    g.events = {};
                    for (c in h) for (d = 0, e = h[c].length; e > d; d++) $.event.add(b, c, h[c][d])
                }
                g.data && (g.data = $.extend({},
                g.data))
            }
        }
        function n(a, b) {
            var c;
            1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected: "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue: "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando))
        }
        function o(a) {
            return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
        }
        function p(a) {
            Xa.test(a.type) && (a.defaultChecked = a.checked)
        }
        function q(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rb.length; e--;) if (b = rb[e] + c, b in a) return b;
            return d
        }
        function r(a, b) {
            return a = b || a,
            "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
        }
        function s(a, b) {
            for (var c, d, e = [], f = 0, g = a.length; g > f; f++) c = a[f],
            c.style && (e[f] = $._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cb(c, "display"), !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
            for (f = 0; g > f; f++) c = a[f],
            c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "": "none"));
            return a
        }
        function t(a, b, c) {
            var d = kb.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }
        function u(a, b, c, d) {
            for (var e = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2)"margin" === c && (f += $.css(a, c + qb[e], !0)),
            d ? ("content" === c && (f -= parseFloat(cb(a, "padding" + qb[e])) || 0), "margin" !== c && (f -= parseFloat(cb(a, "border" + qb[e] + "Width")) || 0)) : (f += parseFloat(cb(a, "padding" + qb[e])) || 0, "padding" !== c && (f += parseFloat(cb(a, "border" + qb[e] + "Width")) || 0));
            return f
        }
        function v(a, b, c) {
            var d = "width" === b ? a.offsetWidth: a.offsetHeight,
            e = !0,
            f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
            if (0 >= d || null == d) {
                if (d = cb(a, b), (0 > d || null == d) && (d = a.style[b]), lb.test(d)) return d;
                e = f && ($.support.boxSizingReliable || d === a.style[b]),
                d = parseFloat(d) || 0
            }
            return d + u(a, b, c || (f ? "border": "content"), e) + "px"
        }
        function w(a) {
            if (nb[a]) return nb[a];
            var b = $("<" + a + ">").appendTo(P.body),
            c = b.css("display");
            return b.remove(),
            ("none" === c || "" === c) && (db = P.body.appendChild(db || $.extend(P.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), eb && db.createElement || (eb = (db.contentWindow || db.contentDocument).document, eb.write("<!doctype html><html><body>"), eb.close()), b = eb.body.appendChild(eb.createElement(a)), c = cb(b, "display"), P.body.removeChild(db)),
            nb[a] = c,
            c
        }
        function x(a, b, c, d) {
            var e;
            if ($.isArray(b)) $.each(b,
            function(b, e) {
                c || ub.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
            });
            else if (c || "object" !== $.type(b)) d(a, b);
            else for (e in b) x(a + "[" + e + "]", b[e], c, d)
        }
        function y(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e, f, g = b.toLowerCase().split(ba),
                h = 0,
                i = g.length;
                if ($.isFunction(c)) for (; i > h; h++) d = g[h],
                f = /^\+/.test(d),
                f && (d = d.substr(1) || "*"),
                e = a[d] = a[d] || [],
                e[f ? "unshift": "push"](c)
            }
        }
        function z(a, c, d, e, f, g) {
            f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
            for (var h, i = a[f], j = 0, k = i ? i.length: 0, l = a === Kb; k > j && (l || !h); j++) h = i[j](c, d, e),
            "string" == typeof h && (!l || g[h] ? h = b: (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
            return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)),
            h
        }
        function A(a, c) {
            var d, e, f = $.ajaxSettings.flatOptions || {};
            for (d in c) c[d] !== b && ((f[d] ? a: e || (e = {}))[d] = c[d]);
            e && $.extend(!0, a, e)
        }
        function B(a, c, d) {
            var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
            for (f in k) f in d && (c[k[f]] = d[f]);
            for (;
            "*" === j[0];) j.shift(),
            e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
            if (e) for (f in i) if (i[f] && i[f].test(e)) {
                j.unshift(f);
                break
            }
            if (j[0] in d) g = j[0];
            else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) {
                        g = f;
                        break
                    }
                    h || (h = f)
                }
                g = g || h
            }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
        }
        function C(a, b) {
            var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
            if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
            for (; e = g[++j];) if ("*" !== e) {
                if ("*" !== h && h !== e) {
                    if (c = i[h + " " + e] || i["* " + e], !c) for (d in i) if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                        c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                        break
                    }
                    if (c !== !0) if (c && a["throws"]) b = c(b);
                    else try {
                        b = c(b)
                    } catch(k) {
                        return {
                            state: "parsererror",
                            error: c ? k: "No conversion from " + h + " to " + e
                        }
                    }
                }
                h = e
            }
            return {
                state: "success",
                data: b
            }
        }
        function D() {
            try {
                return new a.XMLHttpRequest
            } catch(b) {}
        }
        function E() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch(b) {}
        }
        function F() {
            return setTimeout(function() {
                Vb = b
            },
            0),
            Vb = $.now()
        }
        function G(a, b) {
            $.each(b,
            function(b, c) {
                for (var d = (_b[b] || []).concat(_b["*"]), e = 0, f = d.length; f > e; e++) if (d[e].call(a, b, c)) return
            })
        }
        function H(a, b, c) {
            var d, e = 0,
            f = $b.length,
            g = $.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                for (var b = Vb || F(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; h > f; f++) i.tweens[f].run(e);
                return g.notifyWith(a, [i, e, c]),
                1 > e && h ? c: (g.resolveWith(a, [i]), !1)
            },
            i = g.promise({
                elem: a,
                props: $.extend({},
                b),
                opts: $.extend(!0, {
                    specialEasing: {}
                },
                c),
                originalProperties: b,
                originalOptions: c,
                startTime: Vb || F(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c, d) {
                    var e = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                    return i.tweens.push(e),
                    e
                },
                stop: function(b) {
                    for (var c = 0,
                    d = b ? i.tweens.length: 0; d > c; c++) i.tweens[c].run(1);
                    return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]),
                    this
                }
            }),
            j = i.props;
            for (I(j, i.opts.specialEasing); f > e; e++) if (d = $b[e].call(i, a, j, i.opts)) return d;
            return G(i, j),
            $.isFunction(i.opts.start) && i.opts.start.call(a, i),
            $.fx.timer($.extend(h, {
                anim: i,
                queue: i.opts.queue,
                elem: a
            })),
            i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
        }
        function I(a, b) {
            var c, d, e, f, g;
            for (c in a) if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d], g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }
        function J(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m = this,
            n = a.style,
            o = {},
            p = [],
            q = a.nodeType && r(a);
            c.queue || (k = $._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
                k.unqueued || l()
            }), k.unqueued++, m.always(function() {
                m.always(function() {
                    k.unqueued--,
                    $.queue(a, "fx").length || k.empty.fire()
                })
            })),
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
            c.overflow && (n.overflow = "hidden", $.support.shrinkWrapBlocks || m.done(function() {
                n.overflow = c.overflow[0],
                n.overflowX = c.overflow[1],
                n.overflowY = c.overflow[2]
            }));
            for (d in b) if (f = b[d], Xb.exec(f)) {
                if (delete b[d], i = i || "toggle" === f, f === (q ? "hide": "show")) continue;
                p.push(d)
            }
            if (g = p.length) {
                h = $._data(a, "fxshow") || $._data(a, "fxshow", {}),
                "hidden" in h && (q = h.hidden),
                i && (h.hidden = !q),
                q ? $(a).show() : m.done(function() {
                    $(a).hide()
                }),
                m.done(function() {
                    var b;
                    $.removeData(a, "fxshow", !0);
                    for (b in o) $.style(a, b, o[b])
                });
                for (d = 0; g > d; d++) e = p[d],
                j = m.createTween(e, q ? h[e] : 0),
                o[e] = h[e] || $.style(a, e),
                e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0))
            }
        }
        function K(a, b, c, d, e) {
            return new K.prototype.init(a, b, c, d, e)
        }
        function L(a, b) {
            var c, d = {
                height: a
            },
            e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = qb[e],
            d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a),
            d
        }
        function M(a) {
            return $.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
        }
        var N, O, P = a.document,
        Q = a.location,
        R = a.navigator,
        S = a.jQuery,
        T = a.$,
        U = Array.prototype.push,
        V = Array.prototype.slice,
        W = Array.prototype.indexOf,
        X = Object.prototype.toString,
        Y = Object.prototype.hasOwnProperty,
        Z = String.prototype.trim,
        $ = function(a, b) {
            return new $.fn.init(a, b, N)
        },
        _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        aa = /\S/,
        ba = /\s+/,
        ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fa = /^[\],:{}\s]*$/,
        ga = /(?:^|:|,)(?:\s*\[)+/g,
        ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ja = /^-ms-/,
        ka = /-([\da-z])/gi,
        la = function(a, b) {
            return (b + "").toUpperCase()
        },
        ma = function() {
            P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ma, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ma), $.ready())
        },
        na = {};
        $.fn = $.prototype = {
            constructor: $,
            init: function(a, c, d) {
                var e, f, g;
                if (!a) return this;
                if (a.nodeType) return this.context = this[0] = a,
                this.length = 1,
                this;
                if ("string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : da.exec(a), e && (e[1] || !c)) {
                        if (e[1]) return c = c instanceof $ ? c[0] : c,
                        g = c && c.nodeType ? c.ownerDocument || c: P,
                        a = $.parseHTML(e[1], g, !0),
                        ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0),
                        $.merge(this, a);
                        if (f = P.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1,
                            this[0] = f
                        }
                        return this.context = P,
                        this.selector = a,
                        this
                    }
                    return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                }
                return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
            },
            selector: "",
            jquery: "1.8.3",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return V.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = $.merge(this.constructor(), a);
                return d.prevObject = this,
                d.context = this.context,
                "find" === b ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                d
            },
            each: function(a, b) {
                return $.each(this, a, b)
            },
            ready: function(a) {
                return $.ready.promise().done(a),
                this
            },
            eq: function(a) {
                return a = +a,
                -1 === a ? this.slice(a) : this.slice(a, a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack($.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: [].sort,
            splice: [].splice
        },
        $.fn.init.prototype = $.fn,
        $.extend = $.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
            i = 2), "object" != typeof h && !$.isFunction(h) && (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c],
            e = a[c],
            h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d: []) : g = d && $.isPlainObject(d) ? d: {},
            h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
            return h
        },
        $.extend({
            noConflict: function(b) {
                return a.$ === $ && (a.$ = T),
                b && a.jQuery === $ && (a.jQuery = S),
                $
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? $.readyWait++:$.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--$.readyWait: !$.isReady) {
                    if (!P.body) return setTimeout($.ready, 1);
                    $.isReady = !0,
                    a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"))
                }
            },
            isFunction: function(a) {
                return "function" === $.type(a)
            },
            isArray: Array.isArray ||
            function(a) {
                return "array" === $.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return ! isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? String(a) : na[X.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                var d;
                for (d in a);
                return d === b || Y.call(a, d)
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw new Error(a)
            },
            parseHTML: function(a, b, c) {
                var d;
                return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = ea.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null: []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
            },
            parseJSON: function(b) {
                return b && "string" == typeof b ? (b = $.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null
            },
            parseXML: function(c) {
                var d, e;
                if (!c || "string" != typeof c) return null;
                try {
                    a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch(f) {
                    d = b
                }
                return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c),
                d
            },
            noop: function() {},
            globalEval: function(b) {
                b && aa.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(ja, "ms-").replace(ka, la)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, c, d) {
                var e, f = 0,
                g = a.length,
                h = g === b || $.isFunction(a);
                if (d) if (h) {
                    for (e in a) if (c.apply(a[e], d) === !1) break
                } else for (; g > f && c.apply(a[f++], d) !== !1;);
                else if (h) {
                    for (e in a) if (c.call(a[e], e, a[e]) === !1) break
                } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                return a
            },
            trim: Z && !Z.call("\ufeff\xa0") ?
            function(a) {
                return null == a ? "": Z.call(a)
            }: function(a) {
                return null == a ? "": (a + "").replace(ca, "")
            },
            makeArray: function(a, b) {
                var c, d = b || [];
                return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)),
                d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (W) return W.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, c) {
                var d = c.length,
                e = a.length,
                f = 0;
                if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
                else for (; c[f] !== b;) a[e++] = c[f++];
                return a.length = e,
                a
            },
            grep: function(a, b, c) {
                var d, e = [],
                f = 0,
                g = a.length;
                for (c = !!c; g > f; f++) d = !!b(a[f], f),
                c !== d && e.push(a[f]);
                return e
            },
            map: function(a, c, d) {
                var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
                if (j) for (; i > h; h++) e = c(a[h], h, d),
                null != e && (g[g.length] = e);
                else for (f in a) e = c(a[f], f, d),
                null != e && (g[g.length] = e);
                return g.concat.apply([], g)
            },
            guid: 1,
            proxy: function(a, c) {
                var d, e, f;
                return "string" == typeof c && (d = a[c], c = a, a = d),
                $.isFunction(a) ? (e = V.call(arguments, 2), f = function() {
                    return a.apply(c, e.concat(V.call(arguments)))
                },
                f.guid = a.guid = a.guid || $.guid++, f) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i, j = null == d,
                k = 0,
                l = a.length;
                if (d && "object" == typeof d) {
                    for (k in d) $.access(a, c, k, d[k], 1, g, e);
                    f = 1
                } else if (e !== b) {
                    if (i = h === b && $.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                        return i.call($(a), c)
                    }) : (c.call(a, e), c = null)), c) for (; l > k; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                    f = 1
                }
                return f ? a: j ? c.call(a) : l ? c(a[0], d) : g
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        $.ready.promise = function(b) {
            if (!O) if (O = $.Deferred(), "complete" === P.readyState) setTimeout($.ready, 1);
            else if (P.addEventListener) P.addEventListener("DOMContentLoaded", ma, !1),
            a.addEventListener("load", $.ready, !1);
            else {
                P.attachEvent("onreadystatechange", ma),
                a.attachEvent("onload", $.ready);
                var c = !1;
                try {
                    c = null == a.frameElement && P.documentElement
                } catch(d) {}
                c && c.doScroll &&
                function e() {
                    if (!$.isReady) {
                        try {
                            c.doScroll("left")
                        } catch(a) {
                            return setTimeout(e, 50)
                        }
                        $.ready()
                    }
                } ()
            }
            return O.promise(b)
        },
        $.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            na["[object " + b + "]"] = b.toLowerCase()
        }),
        N = $(P);
        var oa = {};
        $.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || c(a) : $.extend({},
            a);
            var d, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    d = !1;
                    break
                }
                f = !1,
                j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
            },
            m = {
                add: function() {
                    if (j) {
                        var b = j.length; !
                        function c(b) {
                            $.each(b,
                            function(b, d) {
                                var e = $.type(d);
                                "function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && c(d)
                            })
                        } (arguments),
                        f ? h = j.length: d && (g = b, l(d))
                    }
                    return this
                },
                remove: function() {
                    return j && $.each(arguments,
                    function(a, b) {
                        for (var c; (c = $.inArray(b, j, c)) > -1;) j.splice(c, 1),
                        f && (h >= c && h--, i >= c && i--)
                    }),
                    this
                },
                has: function(a) {
                    return $.inArray(a, j) > -1
                },
                empty: function() {
                    return j = [],
                    this
                },
                disable: function() {
                    return j = k = d = b,
                    this
                },
                disabled: function() {
                    return ! j
                },
                lock: function() {
                    return k = b,
                    d || m.disable(),
                    this
                },
                locked: function() {
                    return ! k
                },
                fireWith: function(a, b) {
                    return b = b || [],
                    b = [a, b.slice ? b.slice() : b],
                    j && (!e || k) && (f ? k.push(b) : l(b)),
                    this
                },
                fire: function() {
                    return m.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! e
                }
            };
            return m
        },
        $.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var a = arguments;
                        return $.Deferred(function(c) {
                            $.each(b,
                            function(b, d) {
                                var f = d[0],
                                g = a[b];
                                e[d[1]]($.isFunction(g) ?
                                function() {
                                    var a = g.apply(this, arguments);
                                    a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c: this, [a])
                                }: c[f])
                            }),
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? $.extend(a, d) : d
                    }
                },
                e = {};
                return d.pipe = d.then,
                $.each(b,
                function(a, f) {
                    var g = f[2],
                    h = f[3];
                    d[f[1]] = g.add,
                    h && g.add(function() {
                        c = h
                    },
                    b[1 ^ a][2].disable, b[2][2].lock),
                    e[f[0]] = g.fire,
                    e[f[0] + "With"] = g.fireWith
                }),
                d.promise(e),
                a && a.call(e, e),
                e
            },
            when: function(a) {
                var b, c, d, e = 0,
                f = V.call(arguments),
                g = f.length,
                h = 1 !== g || a && $.isFunction(a.promise) ? g: 0,
                i = 1 === h ? a: $.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this,
                        d[a] = arguments.length > 1 ? V.call(arguments) : e,
                        d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
                if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f),
                i.promise()
            }
        }),
        $.support = function() {
            var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
            if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
            e = P.createElement("select"),
            f = e.appendChild(P.createElement("option")),
            g = m.getElementsByTagName("input")[0],
            d.style.cssText = "top:1px;float:left;opacity:.5",
            b = {
                leadingWhitespace: 3 === m.firstChild.nodeType,
                tbody: !m.getElementsByTagName("tbody").length,
                htmlSerialize: !!m.getElementsByTagName("link").length,
                style: /top/.test(d.getAttribute("style")),
                hrefNormalized: "/a" === d.getAttribute("href"),
                opacity: /^0.5/.test(d.style.opacity),
                cssFloat: !!d.style.cssFloat,
                checkOn: "on" === g.value,
                optSelected: f.selected,
                getSetAttribute: "t" !== m.className,
                enctype: !!P.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === P.compatMode,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            },
            g.checked = !0,
            b.noCloneChecked = g.cloneNode(!0).checked,
            e.disabled = !0,
            b.optDisabled = !f.disabled;
            try {
                delete m.test
            } catch(n) {
                b.deleteExpando = !1
            }
            if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
                b.noCloneEvent = !1
            }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent) for (j in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + j,
            k = i in m,
            k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]),
            b[j + "Bubbles"] = k;
            return $(function() {
                var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                h = P.getElementsByTagName("body")[0];
                h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
            }),
            h.removeChild(m),
            c = d = e = f = g = h = m = null,
            b
        } ();
        var pa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        qa = /([A-Z])/g;
        $.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando],
                !!a && !e(a)
            },
            data: function(a, c, d, e) {
                if ($.acceptData(a)) {
                    var f, g, h = $.expando,
                    i = "string" == typeof c,
                    j = a.nodeType,
                    k = j ? $.cache: a,
                    l = j ? a[h] : a[h] && h;
                    if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++:l = h),
                    k[l] || (k[l] = {},
                    j || (k[l].toJSON = $.noop)),
                    ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)),
                    f = k[l],
                    e || (f.data || (f.data = {}), f = f.data),
                    d !== b && (f[$.camelCase(c)] = d),
                    i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f,
                    g
                }
            },
            removeData: function(a, b, c) {
                if ($.acceptData(a)) {
                    var d, f, g, h = a.nodeType,
                    i = h ? $.cache: a,
                    j = h ? a[$.expando] : $.expando;
                    if (i[j]) {
                        if (b && (d = c ? i[j] : i[j].data)) {
                            $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
                            for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
                            if (! (c ? e: $.isEmptyObject)(d)) return
                        } (c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                    }
                }
            },
            _data: function(a, b, c) {
                return $.data(a, b, c, !0)
            },
            acceptData: function(a) {
                var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
                return ! b || b !== !0 && a.getAttribute("classid") === b
            }
        }),
        $.fn.extend({
            data: function(a, c) {
                var e, f, g, h, i, j = this[0],
                k = 0,
                l = null;
                if (a === b) {
                    if (this.length && (l = $.data(j), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
                        for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name,
                        h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
                        $._data(j, "parsedAttrs", !0)
                    }
                    return l
                }
                return "object" == typeof a ? this.each(function() {
                    $.data(this, a)
                }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this,
                function(c) {
                    return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function() {
                        var b = $(this);
                        b.triggerHandler("setData" + f, e),
                        $.data(this, a, c),
                        b.triggerHandler("changeData" + f, e)
                    }))
                },
                null, c, arguments.length > 1, null, !1))
            },
            removeData: function(a) {
                return this.each(function() {
                    $.removeData(this, a)
                })
            }
        }),
        $.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = $.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = $._queueHooks(a, b),
                g = function() {
                    $.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(), d--),
                e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return $._data(a, c) || $._data(a, c, {
                    empty: $.Callbacks("once memory").add(function() {
                        $.removeData(a, b + "queue", !0),
                        $.removeData(a, c, !0)
                    })
                })
            }
        }),
        $.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--),
                arguments.length < d ? $.queue(this[0], a) : c === b ? this: this.each(function() {
                    var b = $.queue(this, a, c);
                    $._queueHooks(this, a),
                    "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    $.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = $.fx ? $.fx.speeds[a] || a: a,
                b = b || "fx",
                this.queue(b,
                function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1,
                f = $.Deferred(),
                g = this,
                h = this.length,
                i = function() {--e || f.resolveWith(g, [g])
                };
                for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = $._data(g[h], a + "queueHooks"),
                d && d.empty && (e++, d.empty.add(i));
                return i(),
                f.promise(c)
            }
        });
        var ra, sa, ta, ua = /[\t\r\n]/g,
        va = /\r/g,
        wa = /^(?:button|input)$/i,
        xa = /^(?:button|input|object|select|textarea)$/i,
        ya = /^a(?:rea|)$/i,
        za = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Aa = $.support.getSetAttribute;
        $.fn.extend({
            attr: function(a, b) {
                return $.access(this, $.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    $.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return $.access(this, $.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = $.propFix[a] || a,
                this.each(function() {
                    try {
                        this[a] = b,
                        delete this[a]
                    } catch(c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, f, g, h;
                if ($.isFunction(a)) return this.each(function(b) {
                    $(this).addClass(a.call(this, b, this.className))
                });
                if (a && "string" == typeof a) for (b = a.split(ba), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className || 1 !== b.length) {
                    for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                    e.className = $.trim(f)
                } else e.className = a;
                return this
            },
            removeClass: function(a) {
                var c, d, e, f, g, h, i;
                if ($.isFunction(a)) return this.each(function(b) {
                    $(this).removeClass(a.call(this, b, this.className))
                });
                if (a && "string" == typeof a || a === b) for (c = (a || "").split(ba), h = 0, i = this.length; i > h; h++) if (e = this[h], 1 === e.nodeType && e.className) {
                    for (d = (" " + e.className + " ").replace(ua, " "), f = 0, g = c.length; g > f; f++) for (; d.indexOf(" " + c[f] + " ") >= 0;) d = d.replace(" " + c[f] + " ", " ");
                    e.className = a ? $.trim(d) : ""
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                d = "boolean" == typeof b;
                return $.isFunction(a) ? this.each(function(c) {
                    $(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c) for (var e, f = 0,
                    g = $(this), h = b, i = a.split(ba); e = i[f++];) h = d ? h: !g.hasClass(e),
                    g[h ? "addClass": "removeClass"](e);
                    else("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": $._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ",
                c = 0,
                d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ua, " ").indexOf(b) >= 0) return ! 0;
                return ! 1
            },
            val: function(a) {
                var c, d, e, f = this[0]; {
                    if (arguments.length) return e = $.isFunction(a),
                    this.each(function(d) {
                        var f, g = $(this);
                        1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "": "number" == typeof f ? f += "": $.isArray(f) && (f = $.map(f,
                        function(a) {
                            return null == a ? "": a + ""
                        })), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                    });
                    if (f) return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()],
                    c && "get" in c && (d = c.get(f, "value")) !== b ? d: (d = f.value, "string" == typeof d ? d.replace(va, "") : null == d ? "": d)
                }
            }
        }),
        $.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return ! b || b.specified ? a.value: a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options,
                        e = a.selectedIndex,
                        f = "select-one" === a.type || 0 > e,
                        g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], (c.selected || i === e) && ($.support.optDisabled ? !c.disabled: null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !$.nodeName(c.parentNode, "optgroup"))) {
                            if (b = $(c).val(), f) return b;
                            g.push(b)
                        }
                        return g
                    },
                    set: function(a, b) {
                        var c = $.makeArray(b);
                        return $(a).find("option").each(function() {
                            this.selected = $.inArray($(this).val(), c) >= 0
                        }),
                        c.length || (a.selectedIndex = -1),
                        c
                    }
                }
            },
            attrFn: {},
            attr: function(a, c, d, e) {
                var f, g, h, i = a.nodeType;
                if (a && 3 !== i && 8 !== i && 2 !== i) return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (za.test(c) ? sa: ra)), d !== b ? null === d ? void $.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f: (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f: (f = a.getAttribute(c), null === f ? b: f))
            },
            removeAttr: function(a, b) {
                var c, d, e, f, g = 0;
                if (b && 1 === a.nodeType) for (d = b.split(ba); g < d.length; g++) e = d[g],
                e && (c = $.propFix[e] || e, f = za.test(e), f || $.attr(a, e, ""), a.removeAttribute(Aa ? e: c), f && c in a && (a[c] = !1))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (wa.test(a.nodeName) && a.parentNode) $.error("type property can't be changed");
                        else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                            b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return ra && $.nodeName(a, "button") ? ra.get(a, b) : b in a ? a.value: null
                    },
                    set: function(a, b, c) {
                        return ra && $.nodeName(a, "button") ? ra.set(a, b, c) : void(a.value = b)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !$.isXMLDoc(a),
                g && (c = $.propFix[c] || c, f = $.propHooks[c]),
                d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : xa.test(a.nodeName) || ya.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }),
        sa = {
            get: function(a, c) {
                var d, e = $.prop(a, c);
                return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
                c
            }
        },
        Aa || (ta = {
            name: !0,
            id: !0,
            coords: !0
        },
        ra = $.valHooks.button = {
            get: function(a, c) {
                var d;
                return d = a.getAttributeNode(c),
                d && (ta[c] ? "" !== d.value: d.specified) ? d.value: b
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || (d = P.createAttribute(c), a.setAttributeNode(d)),
                d.value = b + ""
            }
        },
        $.each(["width", "height"],
        function(a, b) {
            $.attrHooks[b] = $.extend($.attrHooks[b], {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            })
        }), $.attrHooks.contenteditable = {
            get: ra.get,
            set: function(a, b, c) {
                "" === b && (b = "false"),
                ra.set(a, b, c)
            }
        }),
        $.support.hrefNormalized || $.each(["href", "src", "width", "height"],
        function(a, c) {
            $.attrHooks[c] = $.extend($.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return null === d ? b: d
                }
            })
        }),
        $.support.style || ($.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        }),
        $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
                null
            }
        })),
        $.support.enctype || ($.propFix.enctype = "encoding"),
        $.support.checkOn || $.each(["radio", "checkbox"],
        function() {
            $.valHooks[this] = {
                get: function(a) {
                    return null === a.getAttribute("value") ? "on": a.value
                }
            }
        }),
        $.each(["radio", "checkbox"],
        function() {
            $.valHooks[this] = $.extend($.valHooks[this], {
                set: function(a, b) {
                    return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
                }
            })
        });
        var Ba = /^(?:textarea|input|select)$/i,
        Ca = /^([^\.]*|)(?:\.(.+)|)$/,
        Da = /(?:^|\s)hover(\.\S+|)\b/,
        Ea = /^key/,
        Fa = /^(?:mouse|contextmenu)|click/,
        Ga = /^(?:focusinfocus|focusoutblur)$/,
        Ha = function(a) {
            return $.event.special.hover ? a: a.replace(Da, "mouseenter$1 mouseleave$1")
        };
        $.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q;
                if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                    for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                        return "undefined" == typeof $ || a && $.event.triggered === a.type ? b: $.event.dispatch.apply(h.elem, arguments)
                    },
                    h.elem = a), c = $.trim(Ha(c)).split(" "), j = 0; j < c.length; j++) k = Ca.exec(c[j]) || [],
                    l = k[1],
                    m = (k[2] || "").split(".").sort(),
                    q = $.event.special[l] || {},
                    l = (f ? q.delegateType: q.bindType) || l,
                    q = $.event.special[l] || {},
                    n = $.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && $.expr.match.needsContext.test(f),
                        namespace: m.join(".")
                    },
                    o),
                    p = i[l],
                    p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                    q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
                    f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
                    $.event.global[l] = !0;
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
                if (q && (m = q.events)) {
                    for (b = $.trim(Ha(b || "")).split(" "), f = 0; f < b.length; f++) if (g = Ca.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                        for (n = $.event.special[h] || {},
                        h = (d ? n.delegateType: n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++) p = o[l],
                        (e || i === p.origType) && (!c || c.guid === p.guid) && (!j || j.test(p.namespace)) && (!d || d === p.selector || "**" === d && p.selector) && (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
                        0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h])
                    } else for (h in m) $.event.remove(a, h + b[f], c, d, !0);
                    $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                    r = [];
                    if (Ga.test(q + $.event.triggered)) return;
                    if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || $.event.customEvent[q]) && !$.event.global[q]) return;
                    if (c = "object" == typeof c ? c[$.expando] ? c: new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q: "", !e) {
                        g = $.cache;
                        for (i in g) g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
                        return
                    }
                    if (c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {},
                    m.trigger && m.trigger.apply(e, d) === !1) return;
                    if (o = [[e, m.bindType || q]], !f && !m.noBubble && !$.isWindow(e)) {
                        for (p = m.delegateType || q, j = Ga.test(p + q) ? e: e.parentNode, k = e; j; j = j.parentNode) o.push([j, p]),
                        k = j;
                        k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                    }
                    for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0],
                    c.type = o[i][1],
                    n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"),
                    n && n.apply(j, d),
                    n = l && j[l],
                    n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                    return c.type = q,
                    !f && !c.isDefaultPrevented() && (!m._default || m._default.apply(e.ownerDocument, d) === !1) && ("click" !== q || !$.nodeName(e, "a")) && $.acceptData(e) && l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !$.isWindow(e) && (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, k && (e[l] = k)),
                    c.result
                }
            },
            dispatch: function(c) {
                c = $.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [],
                n = m.delegateCount,
                o = V.call(arguments),
                p = !c.exclusive && !c.namespace,
                q = $.event.special[c.type] || {},
                r = [];
                if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                    if (n && (!c.button || "click" !== c.type)) for (f = c.target; f != this; f = f.parentNode || this) if (f.disabled !== !0 || "click" !== c.type) {
                        for (h = {},
                        j = [], d = 0; n > d; d++) k = m[d],
                        l = k.selector,
                        h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length),
                        h[l] && j.push(k);
                        j.length && r.push({
                            elem: f,
                            matches: j
                        })
                    }
                    for (m.length > n && r.push({
                        elem: this,
                        matches: m.slice(n)
                    }), d = 0; d < r.length && !c.isPropagationStopped(); d++) for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) k = i.matches[e],
                    (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
                    return q.postDispatch && q.postDispatch.call(this, c),
                    c.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                    a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                    h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                    !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement: h),
                    !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                    a
                }
            },
            fix: function(a) {
                if (a[$.expando]) return a;
                var b, c, d = a,
                e = $.event.fixHooks[a.type] || {},
                f = e.props ? this.props.concat(e.props) : this.props;
                for (a = $.Event(d), b = f.length; b;) c = f[--b],
                a[c] = d[c];
                return a.target || (a.target = d.srcElement || P),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                e.filter ? e.filter(a, d) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        $.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = $.extend(new $.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
        $.event.handle = $.event.dispatch,
        $.removeEvent = P.removeEventListener ?
        function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }: function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
        },
        $.Event = function(a, b) {
            return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g: f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0, void 0) : new $.Event(a, b)
        },
        $.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = g;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = g;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = g,
                this.stopPropagation()
            },
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f
        },
        $.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        function(a, b) {
            $.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                    f.selector;
                    return (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                    c
                }
            }
        }),
        $.support.submitBubbles || ($.event.special.submit = {
            setup: function() {
                return $.nodeName(this, "form") ? !1 : void $.event.add(this, "click._submit keypress._submit",
                function(a) {
                    var c = a.target,
                    d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form: b;
                    d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit",
                    function(a) {
                        a._submit_bubble = !0
                    }), $._data(d, "_submit_attached", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return $.nodeName(this, "form") ? !1 : void $.event.remove(this, "._submit")
            }
        }),
        $.support.changeBubbles || ($.event.special.change = {
            setup: function() {
                return Ba.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change",
                function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), $.event.add(this, "click._change",
                function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1),
                    $.event.simulate("change", this, a, !0)
                })), !1) : void $.event.add(this, "beforeactivate._change",
                function(a) {
                    var b = a.target;
                    Ba.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change",
                    function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
                    }), $._data(b, "_change_attached", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return $.event.remove(this, "._change"),
                !Ba.test(this.nodeName)
            }
        }),
        $.support.focusinBubbles || $.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(a, b) {
            var c = 0,
            d = function(a) {
                $.event.simulate(b, a.target, $.event.fix(a), !0)
            };
            $.event.special[b] = {
                setup: function() {
                    0 === c++&&P.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && P.removeEventListener(a, d, !0)
                }
            }
        }),
        $.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = f;
                else if (!e) return this;
                return 1 === g && (h = e, e = function(a) {
                    return $().off(a),
                    h.apply(this, arguments)
                },
                e.guid = h.guid || (h.guid = $.guid++)),
                this.each(function() {
                    $.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, g;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
                $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
                this;
                if ("object" == typeof a) {
                    for (g in a) this.off(g, c, a[g]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b),
                d === !1 && (d = f),
                this.each(function() {
                    $.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                return $(this.context).on(a, this.selector, b, c),
                this
            },
            die: function(a, b) {
                return $(this.context).off(a, this.selector || "**", b),
                this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    $.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
            },
            toggle: function(a) {
                var b = arguments,
                c = a.guid || $.guid++,
                d = 0,
                e = function(c) {
                    var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                    return $._data(this, "lastToggle" + a.guid, e + 1),
                    c.preventDefault(),
                    b[e].apply(this, arguments) || !1
                };
                for (e.guid = c; d < b.length;) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(a, b) {
            $.fn[b] = function(a, c) {
                return null == c && (c = a, a = null),
                arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            },
            Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks),
            Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
        }),
        function(a, b) {
            function c(a, b, c, d) {
                c = c || [],
                b = b || F;
                var e, f, g, h, i = b.nodeType;
                if (!a || "string" != typeof a) return c;
                if (1 !== i && 9 !== i) return [];
                if (g = v(b), !g && !d && (e = ca.exec(a))) if (h = e[1]) {
                    if (9 === i) {
                        if (f = b.getElementById(h), !f || !f.parentNode) return c;
                        if (f.id === h) return c.push(f),
                        c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h) return c.push(f),
                    c
                } else {
                    if (e[2]) return K.apply(c, L.call(b.getElementsByTagName(a), 0)),
                    c;
                    if ((h = e[3]) && ma && b.getElementsByClassName) return K.apply(c, L.call(b.getElementsByClassName(h), 0)),
                    c
                }
                return p(a.replace(Z, "$1"), b, c, d, g)
            }
            function d(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function e(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function f(a) {
                return N(function(b) {
                    return b = +b,
                    N(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }
            function g(a, b, c) {
                if (a === b) return c;
                for (var d = a.nextSibling; d;) {
                    if (d === b) return - 1;
                    d = d.nextSibling
                }
                return 1
            }
            function h(a, b) {
                var d, e, f, g, h, i, j, k = Q[D][a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = t.preFilter; h;) { (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                    d = !1,
                    (e = aa.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
                    for (g in t.filter)(e = ha[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
                    if (!d) break
                }
                return b ? h.length: h ? c.error(a) : Q(a, i).slice(0)
            }
            function i(a, b, c) {
                var d = b.dir,
                e = c && "parentNode" === b.dir,
                f = I++;
                return b.first ?
                function(b, c, f) {
                    for (; b = b[d];) if (e || 1 === b.nodeType) return a(b, c, f)
                }: function(b, c, g) {
                    if (g) {
                        for (; b = b[d];) if ((e || 1 === b.nodeType) && a(b, c, g)) return b
                    } else for (var h, i = H + " " + f + " ",
                    j = i + r; b = b[d];) if (e || 1 === b.nodeType) {
                        if ((h = b[D]) === j) return b.sizset;
                        if ("string" == typeof h && 0 === h.indexOf(i)) {
                            if (b.sizset) return b
                        } else {
                            if (b[D] = j, a(b, c, g)) return b.sizset = !0,
                            b;
                            b.sizset = !1
                        }
                    }
                }
            }
            function j(a) {
                return a.length > 1 ?
                function(b, c, d) {
                    for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
                    return ! 0
                }: a[0]
            }
            function k(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }
            function l(a, b, c, d, e, f) {
                return d && !d[D] && (d = l(d)),
                e && !e[D] && (e = l(e, f)),
                N(function(f, g, h, i) {
                    var j, l, m, n = [],
                    p = [],
                    q = g.length,
                    r = f || o(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !f && b ? r: k(r, n, a, h, i),
                    t = c ? e || (f ? a: q || d) ? [] : g: s;
                    if (c && c(s, t, h, i), d) for (j = k(t, p), d(j, [], h, i), l = j.length; l--;)(m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
                    if (f) {
                        if (e || a) {
                            if (e) {
                                for (j = [], l = t.length; l--;)(m = t[l]) && j.push(s[l] = m);
                                e(null, t = [], j, i)
                            }
                            for (l = t.length; l--;)(m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
                        }
                    } else t = k(t === g ? t.splice(q, t.length) : t),
                    e ? e(null, g, t, i) : K.apply(g, t)
                })
            }
            function m(a) {
                for (var b, c, d, e = a.length,
                f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function(a) {
                    return a === b
                },
                g, !0), n = i(function(a) {
                    return M.call(b, a) > -1
                },
                g, !0), o = [function(a, c, d) {
                    return ! f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
                }]; e > h; h++) if (c = t.relative[a[h].type]) o = [i(j(o), c)];
                else {
                    if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
                        for (d = ++h; e > d && !t.relative[a[d].type]; d++);
                        return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
                    }
                    o.push(c)
                }
                return j(o)
            }
            function n(a, b) {
                var d = b.length > 0,
                e = a.length > 0,
                f = function(g, h, i, j, l) {
                    var m, n, o, p = [],
                    q = 0,
                    s = "0",
                    u = g && [],
                    v = null != l,
                    w = A,
                    x = g || e && t.find.TAG("*", l && h.parentNode || h),
                    y = H += null == w ? 1 : Math.E;
                    for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
                        if (e && m) {
                            for (n = 0; o = a[n]; n++) if (o(m, h, i)) {
                                j.push(m);
                                break
                            }
                            v && (H = y, r = ++f.el)
                        }
                        d && ((m = !o && m) && q--, g && u.push(m))
                    }
                    if (q += s, d && s !== q) {
                        for (n = 0; o = b[n]; n++) o(u, p, h, i);
                        if (g) {
                            if (q > 0) for (; s--;) ! u[s] && !p[s] && (p[s] = J.call(j));
                            p = k(p)
                        }
                        K.apply(j, p),
                        v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                    }
                    return v && (H = y, A = w),
                    u
                };
                return f.el = 0,
                d ? N(f) : f
            }
            function o(a, b, d) {
                for (var e = 0,
                f = b.length; f > e; e++) c(a, b[e], d);
                return d
            }
            function p(a, b, c, d, e) {
                var f, g, i, j, k, l = h(a);
                l.length;
                if (!d && 1 === l.length) {
                    if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                        if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0], !b) return c;
                        a = a.slice(g.shift().length)
                    }
                    for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--) if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                        if (g.splice(f, 1), a = d.length && g.join(""), !a) return K.apply(c, L.call(d, 0)),
                        c;
                        break
                    }
                }
                return x(a, l)(d, b, e, c, da.test(a)),
                c
            }
            function q() {}
            var r, s, t, u, v, w, x, y, z, A, B = !0,
            C = "undefined",
            D = ("sizcache" + Math.random()).replace(".", ""),
            E = String,
            F = a.document,
            G = F.documentElement,
            H = 0,
            I = 0,
            J = [].pop,
            K = [].push,
            L = [].slice,
            M = [].indexOf ||
            function(a) {
                for (var b = 0,
                c = this.length; c > b; b++) if (this[b] === a) return b;
                return - 1
            },
            N = function(a, b) {
                return a[D] = null == b || b,
                a
            },
            O = function() {
                var a = {},
                b = [];
                return N(function(c, d) {
                    return b.push(c) > t.cacheLength && delete a[b.shift()],
                    a[c + " "] = d
                },
                a)
            },
            P = O(),
            Q = O(),
            R = O(),
            S = "[\\x20\\t\\r\\n\\f]",
            T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            U = T.replace("w", "w#"),
            V = "([*^$|!~]?=)",
            W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
            X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
            Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
            Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
            _ = new RegExp("^" + S + "*," + S + "*"),
            aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"),
            ba = new RegExp(X),
            ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            da = /[\x20\t\r\n\f]*[+~]/,
            ea = /h\d/i,
            fa = /input|select|textarea|button/i,
            ga = /\\(?!\\)/g,
            ha = {
                ID: new RegExp("^#(" + T + ")"),
                CLASS: new RegExp("^\\.(" + T + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
                TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + X),
                POS: new RegExp(Y, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
                needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
            },
            ia = function(a) {
                var b = F.createElement("div");
                try {
                    return a(b)
                } catch(c) {
                    return ! 1
                } finally {
                    b = null
                }
            },
            ja = ia(function(a) {
                return a.appendChild(F.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            ka = ia(function(a) {
                return a.innerHTML = "<a href='#'></a>",
                a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
            }),
            la = ia(function(a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b
            }),
            ma = ia(function(a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
            }),
            na = ia(function(a) {
                a.id = D + 0,
                a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>",
                G.insertBefore(a, G.firstChild);
                var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
                return s = !F.getElementById(D),
                G.removeChild(a),
                b
            });
            try {
                L.call(G.childNodes, 0)[0].nodeType
            } catch(oa) {
                L = function(a) {
                    for (var b, c = []; b = this[a]; a++) c.push(b);
                    return c
                }
            }
            c.matches = function(a, b) {
                return c(a, null, null, b)
            },
            c.matchesSelector = function(a, b) {
                return c(b, null, null, [a]).length > 0
            },
            u = c.getText = function(a) {
                var b, c = "",
                d = 0,
                e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += u(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else for (; b = a[d]; d++) c += u(b);
                return c
            },
            v = c.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName: !1
            },
            w = c.contains = G.contains ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
            }: G.compareDocumentPosition ?
            function(a, b) {
                return b && !!(16 & a.compareDocumentPosition(b))
            }: function(a, b) {
                for (; b = b.parentNode;) if (b === a) return ! 0;
                return ! 1
            },
            c.attr = function(a, b) {
                var c, d = v(a);
                return d || (b = b.toLowerCase()),
                (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b: null: c.specified ? c.value: null: null)
            },
            t = c.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: ha,
                attrHandle: ka ? {}: {
                    href: function(a) {
                        return a.getAttribute("href", 2)
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                find: {
                    ID: s ?
                    function(a, b, c) {
                        if (typeof b.getElementById !== C && !c) {
                            var d = b.getElementById(a);
                            return d && d.parentNode ? [d] : []
                        }
                    }: function(a, c, d) {
                        if (typeof c.getElementById !== C && !d) {
                            var e = c.getElementById(a);
                            return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b: []
                        }
                    },
                    TAG: ja ?
                    function(a, b) {
                        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                    }: function(a, b) {
                        var c = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (var d, e = [], f = 0; d = c[f]; f++) 1 === d.nodeType && e.push(d);
                            return e
                        }
                        return c
                    },
                    NAME: na &&
                    function(a, b) {
                        return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
                    },
                    CLASS: ma &&
                    function(a, b, c) {
                        return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ga, ""),
                        a[3] = (a[4] || a[5] || "").replace(ga, ""),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                        a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                        "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]),
                        a
                    },
                    PSEUDO: function(a) {
                        var b, c;
                        return ha.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
                    }
                },
                filter: {
                    ID: s ?
                    function(a) {
                        return a = a.replace(ga, ""),
                        function(b) {
                            return b.getAttribute("id") === a
                        }
                    }: function(a) {
                        return a = a.replace(ga, ""),
                        function(b) {
                            var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                            return c && c.value === a
                        }
                    },
                    TAG: function(a) {
                        return "*" === a ?
                        function() {
                            return ! 0
                        }: (a = a.replace(ga, "").toLowerCase(),
                        function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a
                        })
                    },
                    CLASS: function(a) {
                        var b = P[D][a + " "];
                        return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a,
                        function(a) {
                            return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, d) {
                        return function(e, f) {
                            var g = c.attr(e, a);
                            return null == g ? "!=" === b: b ? (g += "", "=" === b ? g === d: "!=" === b ? g !== d: "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d: "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b ? g === d || g.substr(0, d.length + 1) === d + "-": !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d) {
                        return "nth" === a ?
                        function(a) {
                            var b, e, f = a.parentNode;
                            if (1 === c && 0 === d) return ! 0;
                            if (f) for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                            return e -= d,
                            e === c || e % c === 0 && e / c >= 0
                        }: function(b) {
                            var c = b;
                            switch (a) {
                            case "only":
                            case "first":
                                for (; c = c.previousSibling;) if (1 === c.nodeType) return ! 1;
                                if ("first" === a) return ! 0;
                                c = b;
                            case "last":
                                for (; c = c.nextSibling;) if (1 === c.nodeType) return ! 1;
                                return ! 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
                            for (var d, f = e(a, b), g = f.length; g--;) d = M.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, d)
                        }) : e
                    }
                },
                pseudos: {
                    not: N(function(a) {
                        var b = [],
                        c = [],
                        d = x(a.replace(Z, "$1"));
                        return d[D] ? N(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a,
                            d(b, null, f, c),
                            !c.pop()
                        }
                    }),
                    has: N(function(a) {
                        return function(b) {
                            return c(a, b).length > 0
                        }
                    }),
                    contains: N(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                        }
                    }),
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    parent: function(a) {
                        return ! t.pseudos.empty(a)
                    },
                    empty: function(a) {
                        var b;
                        for (a = a.firstChild; a;) {
                            if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b) return ! 1;
                            a = a.nextSibling
                        }
                        return ! 0
                    },
                    header: function(a) {
                        return ea.test(a.nodeName)
                    },
                    text: function(a) {
                        var b, c;
                        return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                    },
                    radio: d("radio"),
                    checkbox: d("checkbox"),
                    file: d("file"),
                    password: d("password"),
                    image: d("image"),
                    submit: e("submit"),
                    reset: e("reset"),
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    input: function(a) {
                        return fa.test(a.nodeName)
                    },
                    focus: function(a) {
                        var b = a.ownerDocument;
                        return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    active: function(a) {
                        return a === a.ownerDocument.activeElement
                    },
                    first: f(function() {
                        return [0]
                    }),
                    last: f(function(a, b) {
                        return [b - 1]
                    }),
                    eq: f(function(a, b, c) {
                        return [0 > c ? c + b: c]
                    }),
                    even: f(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: f(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: f(function(a, b, c) {
                        for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: f(function(a, b, c) {
                        for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
                        return a
                    })
                }
            },
            y = G.compareDocumentPosition ?
            function(a, b) {
                return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
            }: function(a, b) {
                if (a === b) return z = !0,
                0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                f = [],
                h = a.parentNode,
                i = b.parentNode,
                j = h;
                if (h === i) return g(a, b);
                if (!h) return - 1;
                if (!i) return 1;
                for (; j;) e.unshift(j),
                j = j.parentNode;
                for (j = i; j;) f.unshift(j),
                j = j.parentNode;
                c = e.length,
                d = f.length;
                for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return g(e[k], f[k]);
                return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
            },
            [0, 0].sort(y),
            B = !z,
            c.uniqueSort = function(a) {
                var b, c = [],
                d = 1,
                e = 0;
                if (z = B, a.sort(y), z) {
                    for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                    for (; e--;) a.splice(c[e], 1)
                }
                return a
            },
            c.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            },
            x = c.compile = function(a, b) {
                var c, d = [],
                e = [],
                f = R[D][a + " "];
                if (!f) {
                    for (b || (b = h(a)), c = b.length; c--;) f = m(b[c]),
                    f[D] ? d.push(f) : e.push(f);
                    f = R(a, n(e, d))
                }
                return f
            },
            F.querySelectorAll &&
            function() {
                var a, b = p,
                d = /'|\\/g,
                e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                f = [":focus"],
                g = [":active"],
                i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
                ia(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>",
                    a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                    a.querySelectorAll(":checked").length || f.push(":checked")
                }),
                ia(function(a) {
                    a.innerHTML = "<p test=''></p>",
                    a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"),
                    a.innerHTML = "<input type='hidden'/>",
                    a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
                }),
                f = new RegExp(f.join("|")),
                p = function(a, c, e, g, i) {
                    if (!g && !i && !f.test(a)) {
                        var j, k, l = !0,
                        m = D,
                        n = c,
                        o = 9 === c.nodeType && a;
                        if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                            for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;) j[k] = m + j[k].join("");
                            n = da.test(a) && c.parentNode || c,
                            o = j.join(",")
                        }
                        if (o) try {
                            return K.apply(e, L.call(n.querySelectorAll(o), 0)),
                            e
                        } catch(p) {} finally {
                            l || c.removeAttribute("id")
                        }
                    }
                    return b(a, c, e, g, i)
                },
                i && (ia(function(b) {
                    a = i.call(b, "div");
                    try {
                        i.call(b, "[test!='']:sizzle"),
                        g.push("!=", X)
                    } catch(c) {}
                }), g = new RegExp(g.join("|")), c.matchesSelector = function(b, d) {
                    if (d = d.replace(e, "='$1']"), !v(b) && !g.test(d) && !f.test(d)) try {
                        var h = i.call(b, d);
                        if (h || a || b.document && 11 !== b.document.nodeType) return h
                    } catch(j) {}
                    return c(d, null, null, [b]).length > 0
                })
            } (),
            t.pseudos.nth = t.pseudos.eq,
            t.filters = q.prototype = t.pseudos,
            t.setFilters = new q,
            c.attr = $.attr,
            $.find = c,
            $.expr = c.selectors,
            $.expr[":"] = $.expr.pseudos,
            $.unique = c.uniqueSort,
            $.text = c.getText,
            $.isXMLDoc = c.isXML,
            $.contains = c.contains
        } (a);
        var Ia = /Until$/,
        Ja = /^(?:parents|prev(?:Until|All))/,
        Ka = /^.[^:#\[\.,]*$/,
        La = $.expr.match.needsContext,
        Ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        $.fn.extend({
            find: function(a) {
                var b, c, d, e, f, g, h = this;
                if ("string" != typeof a) return $(a).filter(function() {
                    for (b = 0, c = h.length; c > b; b++) if ($.contains(h[b], this)) return ! 0
                });
                for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++) if (d = g.length, $.find(a, this[b], g), b > 0) for (e = d; e < g.length; e++) for (f = 0; d > f; f++) if (g[f] === g[e]) {
                    g.splice(e--, 1);
                    break
                }
                return g
            },
            has: function(a) {
                var b, c = $(a, this),
                d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++) if ($.contains(this, c[b])) return ! 0
                })
            },
            not: function(a) {
                return this.pushStack(j(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(j(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !! a && ("string" == typeof a ? La.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                for (var c, d = 0,
                e = this.length,
                f = [], g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
                return f = f.length > 1 ? $.unique(f) : f,
                this.pushStack(f, "closest", a)
            },
            index: function(a) {
                return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a),
                d = $.merge(this.get(), c);
                return this.pushStack(h(c[0]) || h(d[0]) ? d: $.unique(d))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
            }
        }),
        $.fn.andSelf = $.fn.addBack,
        $.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b: null
            },
            parents: function(a) {
                return $.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return $.dir(a, "parentNode", c)
            },
            next: function(a) {
                return i(a, "nextSibling")
            },
            prev: function(a) {
                return i(a, "previousSibling")
            },
            nextAll: function(a) {
                return $.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return $.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return $.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return $.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return $.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return $.sibling(a.firstChild)
            },
            contents: function(a) {
                return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: $.merge([], a.childNodes)
            }
        },
        function(a, b) {
            $.fn[a] = function(c, d) {
                var e = $.map(this, b, c);
                return Ia.test(a) || (d = c),
                d && "string" == typeof d && (e = $.filter(d, e)),
                e = this.length > 1 && !Ma[a] ? $.unique(e) : e,
                this.length > 1 && Ja.test(a) && (e = e.reverse()),
                this.pushStack(e, a, V.call(arguments).join(","))
            }
        }),
        $.extend({
            filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"),
                1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
            },
            dir: function(a, c, d) {
                for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));) 1 === f.nodeType && e.push(f),
                f = f[c];
                return e
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oa = / jQuery\d+="(?:null|\d+)"/g,
        Pa = /^\s+/,
        Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ra = /<([\w:]+)/,
        Sa = /<tbody/i,
        Ta = /<|&#?\w+;/,
        Ua = /<(?:script|style|link)/i,
        Va = /<(?:script|object|embed|option|style)/i,
        Wa = new RegExp("<(?:" + Na + ")[\\s/>]", "i"),
        Xa = /^(?:checkbox|radio)$/,
        Ya = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Za = /\/(java|ecma)script/i,
        $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        _a = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        ab = k(P),
        bb = ab.appendChild(P.createElement("div"));
        _a.optgroup = _a.option,
        _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead,
        _a.th = _a.td,
        $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]),
        $.fn.extend({
            text: function(a) {
                return $.access(this,
                function(a) {
                    return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
                },
                null, a, arguments.length)
            },
            wrapAll: function(a) {
                if ($.isFunction(a)) return this.each(function(b) {
                    $(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return $.isFunction(a) ? this.each(function(b) {
                    $(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = $(this),
                    c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = $.isFunction(a);
                return this.each(function(c) {
                    $(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0,
                function(a) { (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0,
                function(a) { (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (!h(this[0])) return this.domManip(arguments, !1,
                function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = $.clean(arguments);
                    return this.pushStack($.merge(a, this), "before", this.selector)
                }
            },
            after: function() {
                if (!h(this[0])) return this.domManip(arguments, !1,
                function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = $.clean(arguments);
                    return this.pushStack($.merge(this, a), "after", this.selector)
                }
            },
            remove: function(a, b) {
                for (var c, d = 0; null != (c = this[d]); d++)(!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a,
                b = null == b ? a: b,
                this.map(function() {
                    return $.clone(this, a, b)
                })
            },
            html: function(a) {
                return $.access(this,
                function(a) {
                    var c = this[0] || {},
                    d = 0,
                    e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
                    if ("string" == typeof a && !Ua.test(a) && ($.support.htmlSerialize || !Wa.test(a)) && ($.support.leadingWhitespace || !Pa.test(a)) && !_a[(Ra.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Qa, "<$1></$2>");
                        try {
                            for (; e > d; d++) c = this[d] || {},
                            1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0
                        } catch(f) {}
                    }
                    c && this.empty().append(a)
                },
                null, a, arguments.length)
            },
            replaceWith: function(a) {
                return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this: $.isFunction(a) ? this.each(function(b) {
                    var c = $(this),
                    d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : ("string" != typeof a && (a = $(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                    c = this.parentNode;
                    $(this).remove(),
                    b ? $(b).before(a) : $(c).append(a)
                }))
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                a = [].concat.apply([], a);
                var e, f, g, h, i = 0,
                j = a[0],
                k = [],
                m = this.length;
                if (!$.support.checkClone && m > 1 && "string" == typeof j && Ya.test(j)) return this.each(function() {
                    $(this).domManip(a, c, d)
                });
                if ($.isFunction(j)) return this.each(function(e) {
                    var f = $(this);
                    a[0] = j.call(this, e, c ? f.html() : b),
                    f.domManip(a, c, d)
                });
                if (this[0]) {
                    if (e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f) for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; m > i; i++) d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g: $.clone(g, !0, !0));
                    g = f = null,
                    k.length && $.each(k,
                    function(a, b) {
                        b.src ? $.ajax ? $.ajax({
                            url: b.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($a, "")),
                        b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }),
        $.buildFragment = function(a, c, d) {
            var e, f, g, h = a[0];
            return c = c || P,
            c = !c.nodeType && c[0] || c,
            c = c.ownerDocument || c,
            1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Va.test(h) && ($.support.checkClone || !Ya.test(h)) && ($.support.html5Clone || !Wa.test(h)) && (f = !0, e = $.fragments[h], g = e !== b),
            e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)),
            {
                fragment: e,
                cacheable: f
            }
        },
        $.fragments = {},
        $.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(a, b) {
            $.fn[a] = function(c) {
                var d, e = 0,
                f = [],
                g = $(c),
                h = g.length,
                i = 1 === this.length && this[0].parentNode;
                if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h) return g[b](this[0]),
                this;
                for (; h > e; e++) d = (e > 0 ? this.clone(!0) : this).get(),
                $(g[e])[b](d),
                f = f.concat(d);
                return this.pushStack(f, a, g.selector)
            }
        }),
        $.extend({
            clone: function(a, b, c) {
                var d, e, f, g;
                if ($.support.html5Clone || $.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bb.innerHTML = a.outerHTML, bb.removeChild(g = bb.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a))) for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
                if (b && (m(a, g), c)) for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
                return d = e = null,
                g
            },
            clean: function(a, b, c, d) {
                var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ab,
                s = [];
                for (b && "undefined" != typeof b.createDocumentFragment || (b = P), e = 0; null != (g = a[e]); e++) if ("number" == typeof g && (g += ""), g) {
                    if ("string" == typeof g) if (Ta.test(g)) {
                        for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qa, "<$1></$2>"), h = (Ra.exec(g) || ["", ""])[1].toLowerCase(), i = _a[h] || _a._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--;) l = l.lastChild;
                        if (!$.support.tbody) for (m = Sa.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes: l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f) $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]); ! $.support.leadingWhitespace && Pa.test(g) && l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild),
                        g = l.childNodes,
                        l.parentNode.removeChild(l)
                    } else g = b.createTextNode(g);
                    g.nodeType ? s.push(g) : $.merge(s, g)
                }
                if (l && (g = l = r = null), !$.support.appendChecked) for (e = 0; null != (g = s[e]); e++) $.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
                if (c) for (o = function(a) {
                    return ! a.type || Za.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
                },
                e = 0; null != (g = s[e]); e++) $.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
                return s
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0,
                h = $.expando,
                i = $.cache,
                j = $.support.deleteExpando,
                k = $.event.special; null != (e = a[g]); g++) if ((b || $.acceptData(e)) && (d = e[h], c = d && i[d])) {
                    if (c.events) for (f in c.events) k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                    i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
                }
            }
        }),
        function() {
            var a, b;
            $.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            a = $.uaMatch(R.userAgent),
            b = {},
            a.browser && (b[a.browser] = !0, b.version = a.version),
            b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0),
            $.browser = b,
            $.sub = function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                $.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(c, d) {
                    return d && d instanceof $ && !(d instanceof a) && (d = a(d)),
                    $.fn.init.call(this, c, d, b)
                },
                a.fn.init.prototype = a.fn;
                var b = a(P);
                return a
            }
        } ();
        var cb, db, eb, fb = /alpha\([^)]*\)/i,
        gb = /opacity=([^)]*)/,
        hb = /^(top|right|bottom|left)$/,
        ib = /^(none|table(?!-c[ea]).+)/,
        jb = /^margin/,
        kb = new RegExp("^(" + _ + ")(.*)$", "i"),
        lb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        mb = new RegExp("^([-+])=(" + _ + ")", "i"),
        nb = {
            BODY: "block"
        },
        ob = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        qb = ["Top", "Right", "Bottom", "Left"],
        rb = ["Webkit", "O", "Moz", "ms"],
        sb = $.fn.toggle;
        $.fn.extend({
            css: function(a, c) {
                return $.access(this,
                function(a, c, d) {
                    return d !== b ? $.style(a, c, d) : $.css(a, c)
                },
                a, c, arguments.length > 1)
            },
            show: function() {
                return s(this, !0)
            },
            hide: function() {
                return s(this)
            },
            toggle: function(a, b) {
                var c = "boolean" == typeof a;
                return $.isFunction(a) && $.isFunction(b) ? sb.apply(this, arguments) : this.each(function() { (c ? a: r(this)) ? $(this).show() : $(this).hide()
                })
            }
        }),
        $.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = cb(a, "opacity");
                            return "" === c ? "1": c
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": $.support.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h, i = $.camelCase(c),
                    j = a.style;
                    if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f: j[c];
                    if (g = typeof d, "string" === g && (f = mb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                        j[c] = d
                    } catch(k) {}
                }
            },
            css: function(a, c, d, e) {
                var f, g, h, i = $.camelCase(c);
                return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)),
                h = $.cssHooks[c] || $.cssHooks[i],
                h && "get" in h && (f = h.get(a, !0, e)),
                f === b && (f = cb(a, c)),
                "normal" === f && c in pb && (f = pb[c]),
                d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
            },
            swap: function(a, b, c) {
                var d, e, f = {};
                for (e in b) f[e] = a.style[e],
                a.style[e] = b[e];
                d = c.call(a);
                for (e in b) a.style[e] = f[e];
                return d
            }
        }),
        a.getComputedStyle ? cb = function(b, c) {
            var d, e, f, g, h = a.getComputedStyle(b, null),
            i = b.style;
            return h && (d = h.getPropertyValue(c) || h[c], "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lb.test(d) && jb.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)),
            d
        }: P.documentElement.currentStyle && (cb = function(a, b) {
            var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
            return null == e && f && f[b] && (e = f[b]),
            lb.test(e) && !hb.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em": e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)),
            "" === e ? "auto": e
        }),
        $.each(["height", "width"],
        function(a, b) {
            $.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? 0 === a.offsetWidth && ib.test(cb(a, "display")) ? $.swap(a, ob,
                    function() {
                        return v(a, b, d)
                    }) : v(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
                }
            }
        }),
        $.support.opacity || ($.cssHooks.opacity = {
            get: function(a, b) {
                return gb.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
            },
            set: function(a, b) {
                var c = a.style,
                d = a.currentStyle,
                e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
                f = d && d.filter || c.filter || "";
                c.zoom = 1,
                b >= 1 && "" === $.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
            }
        }),
        $(function() {
            $.support.reliableMarginRight || ($.cssHooks.marginRight = {
                get: function(a, b) {
                    return $.swap(a, {
                        display: "inline-block"
                    },
                    function() {
                        return b ? cb(a, "marginRight") : void 0
                    })
                }
            }),
            !$.support.pixelPosition && $.fn.position && $.each(["top", "left"],
            function(a, b) {
                $.cssHooks[b] = {
                    get: function(a, c) {
                        if (c) {
                            var d = cb(a, b);
                            return lb.test(d) ? $(a).position()[b] + "px": d
                        }
                    }
                }
            })
        }),
        $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
            return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cb(a, "display"))
        },
        $.expr.filters.visible = function(a) {
            return ! $.expr.filters.hidden(a)
        }),
        $.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(a, b) {
            $.cssHooks[a + b] = {
                expand: function(c) {
                    var d, e = "string" == typeof c ? c.split(" ") : [c],
                    f = {};
                    for (d = 0; 4 > d; d++) f[a + qb[d] + b] = e[d] || e[d - 2] || e[0];
                    return f
                }
            },
            jb.test(a) || ($.cssHooks[a + b].set = t)
        });
        var tb = /%20/g,
        ub = /\[\]$/,
        vb = /\r?\n/g,
        wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        xb = /^(?:select|textarea)/i;
        $.fn.extend({
            serialize: function() {
                return $.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? $.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
                }).map(function(a, b) {
                    var c = $(this).val();
                    return null == c ? null: $.isArray(c) ? $.map(c,
                    function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(vb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(vb, "\r\n")
                    }
                }).get()
            }
        }),
        $.param = function(a, c) {
            var d, e = [],
            f = function(a, b) {
                b = $.isFunction(b) ? b() : null == b ? "": b,
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a,
            function() {
                f(this.name, this.value)
            });
            else for (d in a) x(d, a[d], c, f);
            return e.join("&").replace(tb, "+")
        };
        var yb, zb, Ab = /#.*$/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = /\?/,
        Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hb = /([?&])_=[^&]*/,
        Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Jb = $.fn.load,
        Kb = {},
        Lb = {},
        Mb = ["*/"] + ["*"];
        try {
            zb = Q.href
        } catch(Nb) {
            zb = P.createElement("a"),
            zb.href = "",
            zb = zb.href
        }
        yb = Ib.exec(zb.toLowerCase()) || [],
        $.fn.load = function(a, c, d) {
            if ("string" != typeof a && Jb) return Jb.apply(this, arguments);
            if (!this.length) return this;
            var e, f, g, h = this,
            i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
            $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"),
            $.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: c,
                complete: function(a, b) {
                    d && h.each(d, g || [a.responseText, b, a])
                }
            }).done(function(a) {
                g = arguments,
                h.html(e ? $("<div>").append(a.replace(Gb, "")).find(e) : a)
            }),
            this
        },
        $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
        function(a, b) {
            $.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        $.each(["get", "post"],
        function(a, c) {
            $[c] = function(a, d, e, f) {
                return $.isFunction(d) && (f = f || e, e = d, d = b),
                $.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: f
                })
            }
        }),
        $.extend({
            getScript: function(a, c) {
                return $.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return $.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings),
                A(a, b),
                a
            },
            ajaxSettings: {
                url: zb,
                isLocal: Cb.test(yb[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Mb
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": $.parseJSON,
                    "text xml": $.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: y(Kb),
            ajaxTransport: y(Lb),
            ajax: function(a, c) {
                function d(a, c, d, g) {
                    var j, l, s, t, v, x = c;
                    2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success": "Error"), [w, m, j ? l: s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (c = a, a = b),
                c = c || {};
                var e, f, g, h, i, j, k, l, m = $.ajaxSetup({},
                c),
                n = m.context || m,
                o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
                p = $.Deferred(),
                q = $.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!u) {
                            var c = a.toLowerCase();
                            a = t[c] = t[c] || a,
                            s[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? f: null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === u) {
                            if (!g) for (g = {}; c = Bb.exec(f);) g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null: c
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a),
                        this
                    },
                    abort: function(a) {
                        return a = a || v,
                        h && h.abort(a),
                        d(0, a),
                        this
                    }
                };
                if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                        else b = a[w.status],
                        w.always(b)
                    }
                    return this
                },
                m.url = ((a || m.url) + "").replace(Ab, "").replace(Eb, yb[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(ba), null == m.crossDomain && (j = Ib.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === yb[1] && j[2] === yb[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yb[3] || ("http:" === yb[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kb, m, c, w), 2 === u) return w;
                if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Db.test(m.type), k && 0 === $.active++&&$.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Fb.test(m.url) ? "&": "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                    var x = $.now(),
                    y = m.url.replace(Hb, "$1_=" + x);
                    m.url = y + (y === m.url ? (Fb.test(m.url) ? "&": "?") + "_=" + x: "")
                } (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
                m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])),
                w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mb + "; q=0.01": "") : m.accepts["*"]);
                for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
                if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
                    v = "abort";
                    for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[l](m[l]);
                    if (h = z(Lb, m, c, w)) {
                        w.readyState = 1,
                        k && o.trigger("ajaxSend", [w, m]),
                        m.async && m.timeout > 0 && (i = setTimeout(function() {
                            w.abort("timeout")
                        },
                        m.timeout));
                        try {
                            u = 1,
                            h.send(s, d)
                        } catch(A) {
                            if (! (2 > u)) throw A;
                            d( - 1, A)
                        }
                    } else d( - 1, "No Transport");
                    return w
                }
                return w.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var Ob = [],
        Pb = /\?/,
        Qb = /(=)\?(?=&|$)|\?\?/,
        Rb = $.now();
        $.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Ob.pop() || $.expando + "_" + Rb++;
                return this[a] = !0,
                a
            }
        }),
        $.ajaxPrefilter("json jsonp",
        function(c, d, e) {
            var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && Qb.test(j),
            m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qb.test(i);
            return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qb, "$1" + f) : m ? c.data = i.replace(Qb, "$1" + f) : k && (c.url += (Pb.test(j) ? "&": "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
                return h || $.error(f + " was not called"),
                h[0]
            },
            c.dataTypes[0] = "json", a[f] = function() {
                h = arguments
            },
            e.always(function() {
                a[f] = g,
                c[f] && (c.jsonpCallback = d.jsonpCallback, Ob.push(f)),
                h && $.isFunction(g) && g(h[0]),
                h = g = b
            }), "script") : void 0
        }),
        $.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    return $.globalEval(a),
                    a
                }
            }
        }),
        $.ajaxPrefilter("script",
        function(a) {
            a.cache === b && (a.cache = !1),
            a.crossDomain && (a.type = "GET", a.global = !1)
        }),
        $.ajaxTransport("script",
        function(a) {
            if (a.crossDomain) {
                var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
                return {
                    send: function(e, f) {
                        c = P.createElement("script"),
                        c.async = "async",
                        a.scriptCharset && (c.charset = a.scriptCharset),
                        c.src = a.url,
                        c.onload = c.onreadystatechange = function(a, e) { (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                        },
                        d.insertBefore(c, d.firstChild)
                    },
                    abort: function() {
                        c && c.onload(0, 1)
                    }
                }
            }
        });
        var Sb, Tb = a.ActiveXObject ?
        function() {
            for (var a in Sb) Sb[a](0, 1)
        }: !1,
        Ub = 0;
        $.ajaxSettings.xhr = a.ActiveXObject ?
        function() {
            return ! this.isLocal && D() || E()
        }: D,
        function(a) {
            $.extend($.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        } ($.ajaxSettings.xhr()),
        $.support.ajax && $.ajaxTransport(function(c) {
            if (!c.crossDomain || $.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                        !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch(j) {}
                        i.send(c.hasContent && c.data || null),
                        d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = $.noop, Tb && delete Sb[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    h = i.status,
                                    k = i.getAllResponseHeaders(),
                                    l = {},
                                    m = i.responseXML,
                                    m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch(n) {}
                                    try {
                                        j = i.statusText
                                    } catch(n) {
                                        j = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                            } catch(o) {
                                e || f( - 1, o)
                            }
                            l && f(h, j, l, k)
                        },
                        c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Ub, Tb && (Sb || (Sb = {},
                        $(a).unload(Tb)), Sb[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
        var Vb, Wb, Xb = /^(?:toggle|show|hide)$/,
        Yb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
        Zb = /queueHooks$/,
        $b = [J],
        _b = {
            "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                f = Yb.exec(b),
                g = e.cur(),
                h = +g || 0,
                i = 1,
                j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || ($.cssNumber[a] ? "": "px"), "px" !== d && h) {
                        h = $.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5",
                        h /= i,
                        $.style(e.elem, a, h + d);
                        while (i !== (i = e.cur() / g) && 1 !== i && --j)
                    }
                    e.unit = d,
                    e.start = h,
                    e.end = f[1] ? h + (f[1] + 1) * c: c
                }
                return e
            }]
        };
        $.Animation = $.extend(H, {
            tweener: function(a, b) {
                $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0,
                e = a.length; e > d; d++) c = a[d],
                _b[c] = _b[c] || [],
                _b[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? $b.unshift(a) : $b.push(a)
            }
        }),
        $.Tween = K,
        K.prototype = {
            constructor: K,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                this.prop = c,
                this.easing = e || "swing",
                this.options = b,
                this.start = this.now = this.cur(),
                this.end = d,
                this.unit = f || ($.cssNumber[c] ? "": "px")
            },
            cur: function() {
                var a = K.propHooks[this.prop];
                return a && a.get ? a.get(this) : K.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = K.propHooks[this.prop];
                return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                c && c.set ? c.set(this) : K.propHooks._default.set(this),
                this
            }
        },
        K.prototype.init.prototype = K.prototype,
        K.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
                },
                set: function(a) {
                    $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        K.propHooks.scrollTop = K.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        $.each(["toggle", "show", "hide"],
        function(a, b) {
            var c = $.fn[b];
            $.fn[b] = function(d, e, f) {
                return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
            }
        }),
        $.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(r).css("opacity", 0).show().end().animate({
                    opacity: b
                },
                a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = $.isEmptyObject(a),
                f = $.speed(b, c, d),
                g = function() {
                    var b = H(this, $.extend({},
                    a), f);
                    e && b.stop(!0)
                };
                return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop,
                    b(d)
                };
                return "string" != typeof a && (d = c, c = a, a = b),
                c && a !== !1 && this.queue(a || "fx", []),
                this.each(function() {
                    var b = !0,
                    c = null != a && a + "queueHooks",
                    f = $.timers,
                    g = $._data(this);
                    if (c) g[c] && g[c].stop && e(g[c]);
                    else for (c in g) g[c] && g[c].stop && Zb.test(c) && e(g[c]);
                    for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1)); (b || !d) && $.dequeue(this, a)
                })
            }
        }),
        $.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(a, b) {
            $.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        $.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? $.extend({},
            a) : {
                complete: c || !c && b || $.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !$.isFunction(b) && b
            };
            return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default,
            (null == d.queue || d.queue === !0) && (d.queue = "fx"),
            d.old = d.complete,
            d.complete = function() {
                $.isFunction(d.old) && d.old.call(this),
                d.queue && $.dequeue(this, d.queue)
            },
            d
        },
        $.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return.5 - Math.cos(a * Math.PI) / 2
            }
        },
        $.timers = [],
        $.fx = K.prototype.init,
        $.fx.tick = function() {
            var a, c = $.timers,
            d = 0;
            for (Vb = $.now(); d < c.length; d++) a = c[d],
            !a() && c[d] === a && c.splice(d--, 1);
            c.length || $.fx.stop(),
            Vb = b
        },
        $.fx.timer = function(a) {
            a() && $.timers.push(a) && !Wb && (Wb = setInterval($.fx.tick, $.fx.interval))
        },
        $.fx.interval = 13,
        $.fx.stop = function() {
            clearInterval(Wb),
            Wb = null
        },
        $.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        $.fx.step = {},
        $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
            return $.grep($.timers,
            function(b) {
                return a === b.elem
            }).length
        });
        var ac = /^(?:body|html)$/i;
        $.fn.offset = function(a) {
            if (arguments.length) return a === b ? this: this.each(function(b) {
                $.offset.setOffset(this, a, b)
            });
            var c, d, e, f, g, h, i, j = {
                top: 0,
                left: 0
            },
            k = this[0],
            l = k && k.ownerDocument;
            if (l) return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
                top: j.top + h - f,
                left: j.left + i - g
            }) : j)
        },
        $.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop,
                c = a.offsetLeft;
                return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0),
                {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = $.css(a, "position");
                "static" === d && (a.style.position = "relative");
                var e, f, g = $(a),
                h = g.offset(),
                i = $.css(a, "top"),
                j = $.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
                k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0),
                $.isFunction(b) && (b = b.call(a, c, h)),
                null != b.top && (l.top = b.top - h.top + e),
                null != b.left && (l.left = b.left - h.left + f),
                "using" in b ? b.using.call(a, l) : g.css(l)
            }
        },
        $.fn.extend({
            position: function() {
                if (this[0]) {
                    var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = ac.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    }: b.offset();
                    return c.top -= parseFloat($.css(a, "marginTop")) || 0,
                    c.left -= parseFloat($.css(a, "marginLeft")) || 0,
                    d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0,
                    d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0,
                    {
                        top: c.top - d.top,
                        left: c.left - d.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || P.body; a && !ac.test(a.nodeName) && "static" === $.css(a, "position");) a = a.offsetParent;
                    return a || P.body
                })
            }
        }),
        $.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(a, c) {
            var d = /Y/.test(c);
            $.fn[a] = function(e) {
                return $.access(this,
                function(a, e, f) {
                    var g = M(a);
                    return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f: $(g).scrollTop()) : a[e] = f)
                },
                a, e, arguments.length, null)
            }
        }),
        $.each({
            Height: "height",
            Width: "width"
        },
        function(a, c) {
            $.each({
                padding: "inner" + a,
                content: c,
                "": "outer" + a
            },
            function(d, e) {
                $.fn[e] = function(e, f) {
                    var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin": "border");
                    return $.access(this,
                    function(c, d, e) {
                        var f;
                        return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                    },
                    c, g ? e: b, g, null)
                }
            })
        }),
        a.jQuery = a.$ = $,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
        function() {
            return $
        })
    } (window),
    function(a) {
        if (a.support.cors || !a.ajaxTransport || !window.XDomainRequest) return a;
        var b = /^(https?:)?\/\//i,
        c = /^get|post$/i,
        d = new RegExp("^(//|" + location.protocol + ")", "i");
        return a.ajaxTransport("* text html xml json",
        function(e, f, g) {
            if (e.crossDomain && e.async && c.test(e.type) && b.test(e.url) && d.test(e.url)) {
                var h = null;
                return {
                    send: function(b, c) {
                        var d = "",
                        g = (f.dataType || "").toLowerCase();
                        h = new XDomainRequest,
                        /^\d+$/.test(f.timeout) && (h.timeout = f.timeout),
                        h.ontimeout = function() {
                            c(500, "timeout")
                        },
                        h.onload = function() {
                            var b = "Content-Length: " + h.responseText.length + "\r\nContent-Type: " + h.contentType,
                            d = {
                                code: 200,
                                message: "success"
                            },
                            e = {
                                text: h.responseText
                            };
                            try {
                                if ("html" === g || /text\/html/i.test(h.contentType)) e.html = h.responseText;
                                else if ("json" === g || "text" !== g && /\/json/i.test(h.contentType)) try {
                                    e.json = a.parseJSON(h.responseText)
                                } catch(f) {
                                    d.code = 500,
                                    d.message = "parseerror"
                                } else if ("xml" === g || "text" !== g && /\/xml/i.test(h.contentType)) {
                                    var i = new ActiveXObject("Microsoft.XMLDOM");
                                    i.async = !1;
                                    try {
                                        i.loadXML(h.responseText)
                                    } catch(f) {
                                        i = void 0
                                    }
                                    if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) throw d.code = 500,
                                    d.message = "parseerror",
                                    "Invalid XML: " + h.responseText;
                                    e.xml = i
                                }
                            } catch(j) {
                                throw j
                            } finally {
                                c(d.code, d.message, e, b)
                            }
                        },
                        h.onprogress = function() {},
                        h.onerror = function() {
                            c(500, "error", {
                                text: h.responseText
                            })
                        },
                        f.data && (d = "string" === a.type(f.data) ? f.data: a.param(f.data)),
                        h.open(e.type, e.url),
                        h.send(d)
                    },
                    abort: function() {
                        h && h.abort()
                    }
                }
            }
        }),
        a
    } (jQuery),
    jQuery.noConflict(),
    function(a, b) {
        function c(b) {
            for (var c, d, e, f, g = "",
            h = new Date,
            i = h.getMonth(); b--;) {
                h.getMonth() !== i && h.setDate(1),
                c = y(h, "yyyy/mm/dd"),
                h.setMonth(h.getMonth() + 1, 1),
                h.setDate(0),
                d = y(h, "yyyy/mm/dd"),
                e = c + "-" + d,
                f = a.fn.datePicker.months.cn[h.getMonth()],
                g += '<span class="tag" data-range="' + e + '">' + f + "</span> ";
                var j = new Date(c).getMonth() === (new Date).getMonth() ? new Date: new Date(c);
                e = [];
                for (var k = "",
                i = j.getMonth(); j.getMonth() === i;) if (0 === j.getDay()) k = y(j, "yyyy/mm/dd") + "-" + y(j, "yyyy/mm/dd"),
                e.push(k),
                j.setDate(j.getDate() + 6);
                else {
                    for (; 6 !== j.getDay();) j.setDate(j.getDate() + 1);
                    for (; j.getMonth() === i;) {
                        if (k = y(j, "yyyy/mm/dd"), j.setDate(j.getDate() + 1), j.getMonth() !== i) {
                            k += "-" + k,
                            e.push(k);
                            break
                        }
                        k += "-" + y(j, "yyyy/mm/dd"),
                        e.push(k),
                        j.setDate(j.getDate() + 6)
                    }
                }
                e = e.join(","),
                f = a.fn.datePicker.months.cn[h.getMonth()] + "\u7684\u5468\u672b",
                h.setMonth(h.getMonth() + 1, 1),
                g += e ? '<span class="sm_tag" data-range="' + e + '">' + f + "</span> ": '<span class="sm_tag disabled" data-range="' + e + '">' + f + "</span> "
            }
            return h = new Date,
            c = y(h, "yyyy/mm/dd"),
            h.setDate(h.getDate() + 6),
            d = y(h, "yyyy/mm/dd"),
            e = c + "-" + d,
            f = "\u4e00\u5468\u5185",
            g += '<span class="sm_tag" data-range="' + e + '">' + f + "</span> "
        }
        function d(b, c) {
            var d = this;
            if (this.$input = a(b), !this.$input.length) throw new Error("no input element.");
            a.extend(this, B, c),
            this.displayed instanceof Date || (this.displayed = new Date, this.displayed.setDate(15)),
            this.dateUpdater === z && (this.dateUpdater = function(a) {
                if ("cn" !== d.language) return a.getDate();
                var b, c = a.getDate();
                if (d.enableSolarFestival) {
                    var e = a.getMonth() + 1;
                    if (b = "" + (10 > e ? "0": "") + e + (10 > c ? "0": "") + c, b in w) return w[b]
                }
                if (d.enableLunarFestival) {
                    var f = u(a),
                    g = 0 | f.day,
                    h = f.month;
                    if (b = "" + (10 > h ? "0": "") + h + (10 > g ? "0": "") + g, b in v) return v[b]
                }
                if (d.enableSolarTerm) {
                    var i = t.getMonthSolarTerms(a.getFullYear(), a.getMonth());
                    if (c in i) return i[c]
                }
                return c
            }),
            this.init()
        }
        var e = /^(yy|yyyy)([^ym]*)(m{1,2})([^md]*)(d{1,2})$/i,
        f = /^(?:(\d{4})\/)?(\d{1,2})(?:\/(\d{1,2}))?/,
        g = /^(y|m)(\d+)$/,
        h = '<div class="poi_calendar"></div>',
        i = '<div class="calendar_tag"><span class="lg_tag selected">\u4efb\u4f55\u65f6\u95f4</span></div>',
        j = '<div class="cus_checkbox"><label><i class="icon ico_checkbox"></i>\u81ea\u5b9a\u4e49\u51fa\u884c\u65f6\u95f4</label><div class="date_selected">\u53ef\u524d\u540e\u6d6e\u52a8\u5929\u6570 <i class="icon ico_minus disabled"></i><span class="date_txt">0</span><i class="icon ico_plus"></i></div></div>',
        k = i + j,
        l = '<div class="calendar_tit"><span class="month_switch">Month Year</span><span class="month_prev"><i class="ico_arrow"></i></span><span class="month_next"><i class="ico_arrow"></i></span></div>',
        m = '<div class="calendar_box"></div>',
        n = '<ul class="items"></ul>',
        o = '<li class="item">?</li>',
        p = '<div class="cus_days"><p>\u51fa\u6e38\u5929\u6570</p><span class="tag selected">\u4e0d\u9650</span><span class="tag" data-range="[3,5]">3-5\u5929</span><span class="tag" data-range="[6,8]">6-8\u5929</span><span class="tag" data-range="[9,11]">9-11\u5929</span><span class="tag" data-range="[12,15]">12-15\u5929</span></div>',
        q = '<div class="calendar_bottom"><a href="javascript:;" class="btn btn_confirm">\u786e\u5b9a</a></div>',
        r = p + q,
        s = a(b.body),
        t = function() {
            var a = {},
            b = [],
            c = ["\u5c0f\u5bd2", "\u5927\u5bd2", "\u7acb\u6625", "\u96e8\u6c34", "\u60ca\u86f0", "\u6625\u5206", "\u6e05\u660e", "\u8c37\u96e8", "\u7acb\u590f", "\u5c0f\u6ee1", "\u8292\u79cd", "\u590f\u81f3", "\u5c0f\u6691", "\u5927\u6691", "\u7acb\u79cb", "\u5904\u6691", "\u767d\u9732", "\u79cb\u5206", "\u5bd2\u9732", "\u971c\u964d", "\u7acb\u51ac", "\u5c0f\u96ea", "\u5927\u96ea", "\u51ac\u81f3"],
            d = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758],
            e = function(a, b) {
                var c = new Date(31556925974.7 * (a - 1900) + 6e4 * d[b] + Date.UTC(1900, 0, 6, 2, 5));
                return c.getUTCDate()
            };
            return {
                getMonthSolarTerms: function(d, f) {
                    d instanceof Date && (f = d.getMonth(), d = d.getFullYear());
                    var g = "" + d + f;
                    if (g in a) return a[g];
                    var h, i = a[g] = {};
                    return h = e(d - 1900, 2 * f),
                    i[h - 1] = c[2 * f],
                    h = e(d - 1900, 2 * f + 1),
                    i[h - 1] = c[2 * f + 1],
                    b.push(g),
                    b.length > 12 && delete a[b.shift()],
                    i
                }
            }
        } (),
        u = function() {
            function a(a) {
                var c, d = 348;
                for (c = 32768; c > 8; c >>= 1) d += f[a - 1900] & c ? 1 : 0;
                return d + b(a)
            }
            function b(a) {
                return c(a) ? 65536 & f[a - 1900] ? 30 : 29 : 0
            }
            function c(a) {
                return 15 & f[a - 1900]
            }
            function d(a, b) {
                return f[a - 1900] & 65536 >> b ? 30 : 29
            }
            function e(e) {
                var f, g = 0,
                h = 0,
                i = new Date(1900, 0, 31),
                j = (e - i) / 864e5,
                k = {};
                for (k.dayCyl = j + 40, k.monCyl = 14, f = 1900; 2050 > f && j > 0; f++) h = a(f),
                j -= h,
                k.monCyl += 12;
                for (0 > j && (j += h, f--, k.monCyl -= 12), k.year = f, k.yearCyl = f - 1864, g = c(f), k.isLeap = !1, f = 1; 13 > f && j > 0; f++) g > 0 && f == g + 1 && 0 == k.isLeap ? (--f, k.isLeap = !0, h = b(k.year)) : h = d(k.year, f),
                1 == k.isLeap && f == g + 1 && (k.isLeap = !1),
                j -= h,
                0 == k.isLeap && k.monCyl++;
                return 0 == j && g > 0 && f == g + 1 && (k.isLeap ? k.isLeap = !1 : (k.isLeap = !0, --f, --k.monCyl)),
                0 > j && (j += h, --f, --k.monCyl),
                k.month = f,
                k.day = j + 1,
                k
            }
            var f = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448];
            return e
        } (),
        v = {
            "0101": "\u6625\u8282",
            "0115": "\u5143\u5bb5",
            "0505": "\u7aef\u5348",
            "0707": "\u4e03\u5915",
            "0715": "\u4e2d\u5143",
            "0815": "\u4e2d\u79cb",
            "0909": "\u91cd\u9633",
            1208 : "\u814a\u516b",
            1224 : "\u5c0f\u5e74"
        },
        w = {
            "0101": "\u5143\u65e6",
            "0214": "\u60c5\u4eba\u8282",
            "0308": "\u5987\u5973\u8282",
            "0312": "\u690d\u6811\u8282",
            "0401": "\u611a\u4eba\u8282",
            "0501": "\u52b3\u52a8\u8282",
            "0504": "\u9752\u5e74\u8282",
            "0601": "\u513f\u7ae5\u8282",
            "0701": "\u5efa\u515a\u8282",
            "0801": "\u5efa\u519b\u8282",
            "0910": "\u6559\u5e08\u8282",
            1001 : "\u56fd\u5e86\u8282",
            1224 : "\u5e73\u5b89\u591c",
            1225 : "\u5723\u8bde"
        },
        x = function(a, b) {
            return a instanceof Date ? a: a instanceof d ? a.get(b) : void 0
        },
        y = function(a, b) {
            if (!a) return "";
            if (!b) return a.toString();
            var c = a.getFullYear(),
            d = a.getMonth() + 1,
            f = a.getDate();
            return b.replace(e,
            function(a, b, e, g, h, i) {
                return "" + (b && 2 === b.length ? c.substr(2) : c) + e + (g && 2 === g.length && 10 > d ? "0" + d: d) + h + (i && 2 === i.length && 10 > f ? "0" + f: f)
            })
        },
        z = function(a) {
            return a.getDate()
        },
        A = function(a, b) {
            return a.getFullYear() + " " + b[a.getMonth()]
        },
        B = {
            language: "cn",
            currentPanel: "day",
            enableSolarTerm: !0,
            enableLunarFestival: !0,
            enableSolarFestival: !0,
            start: null,
            end: null,
            selected: null,
            readonly: !0,
            displayRange: null,
            radius: 0,
            mode: "range_length_acc",
            rangeLen: null,
            dateUpdater: z,
            titleUpdater: A,
            templates: {
                container: h,
                header: k,
                controller: l,
                panel: m,
                itemWrap: n,
                item: o,
                footer: r
            }
        },
        C = function(a) {
            function b(a, b) {
                var c = f.exec(a);
                if (c) return c[1] || c[3] ? new Date(c[1] || b.getFullYear(), c[2] ? +c[2] - 1 : b.getMonth(), c[3] || b.getDate()) : new Date(b.getFullYear(), b.getMonth(), c[2])
            }
            if (!a) return null;
            a += "";
            var c = new Date,
            d = a.split("-"),
            e = d[0],
            g = d[1];
            return {
                from: e ? b(e, c) : null,
                to: g ? b(g, c) : null
            }
        },
        D = function(b, c, d, e, f) {
            for (var g, h = ""; b--;) h += c;
            return g = a(d).append(h),
            f && g.addClass(f),
            e && g.children().addClass(e),
            g
        },
        E = function(a, b) {
            var c, d, e, f, g, h = new Date,
            i = (new Date).setHours(0, 0, 0, 0),
            j = "";
            h.setDate(h.getDate() + 89),
            h = h.setHours(23, 59, 59, 999);
            for (var k in a) b > 0 && (e = a[k].range, c = new Date(e.split("-")[0]).setHours(0, 0, 0, 0), d = new Date(e.split("-")[1]).setHours(23, 59, 59, 999), (d > i && h >= d || c >= i && h > c) && (i > c && (c = i), d > h && (d = h), f = y(new Date(c), "yyyy/mm/dd") + "-" + y(new Date(d), "yyyy/mm/dd"), g = a[k].text, j += '<span class="sm_tag" data-range="' + f + '">' + g + "</span> ", b--));
            return j
        },
        F = function(b) {
            var d, e = b.templates,
            f = a(e.container);
            f.append(e.header).append(e.controller);
            var g = c(3);
            if (window.festivals) {
                var h = E(window.festivals, 3);
                f.find(".calendar_tag").append(g + h)
            } else a.ajax({
                url: "//m.ctrip.com/restapi/soa2/11823/getHolidays",
                crossDomain: !0,
                success: function(a) {
                    f.find(".calendar_tag").append(g + E(a.holidays, 3))
                }
            });
            return d = a(e.panel).addClass("day_panel").append(D(42, e.item, e.itemWrap, "day", "days")),
            d.prepend(D(7, e.item, e.itemWrap, "week", "weeks")),
            f.append(d),
            f.append(e.footer),
            f
        },
        G = function(b, c, d, e, f, g, h, i, j, k) {
            var l = new Date(d.getTime()),
            m = j && j[0] && j[0].from.setHours(0, 0, 0, 0),
            n = j && j[0] && j[0].to.setHours(23, 59, 59, 999),
            o = e && e.getTime(),
            p = f && f.getTime(),
            q = !0,
            r = b.find(".day");
            l.setDate(1),
            l.setDate(l.getDate() - l.getDay()),
            b.find(".month_switch").text(i(d, g)),
            r.each(function(b) {
                var e = a(this),
                g = l.getTime(),
                i = l.getDate();
                if (e.removeClass("disabled visibility old new selected selected_center selected_start selected_end"), e.data("zDay", i), e.text(h(l)), l.getMonth() !== d.getMonth()) {
                    if (35 === b) return q = !1,
                    !1;
                    e.addClass("disabled visibility")
                } else m && n && g > m && n > g && (e.addClass("selected"), "range_center" !== k && "range_center_acc" !== k || !c || c.getDate() !== l.getDate() || e.addClass("selected_center")); (o && o > g || f && g > p) && e.removeClass("selected").addClass("disabled"),
                l.setDate(i + 1)
            }),
            r.slice(35)[q ? "show": "hide"]()
        };
        d.prototype = {
            constructor: d,
            reflect: function(b) {
                if (function() {
                    var a = new Date("2011-06-02T09:34:29+02:00");
                    a && 1307000069e3 === +a ? Date.fromISO = function(a) {
                        return new Date(a)
                    }: Date.fromISO = function(a) {
                        var b, c, d = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
                        e = d.exec(a) || [];
                        if (e[1]) {
                            b = e[1].split(/\D/);
                            for (var f = 0,
                            g = b.length; g > f; f++) b[f] = parseInt(b[f], 10) || 0;
                            return b[1] -= 1,
                            b = new Date(Date.UTC.apply(Date, b)),
                            b.getDate() ? (e[5] && (c = 60 * parseInt(e[5], 10), e[6] && (c += parseInt(e[6], 10)), "+" == e[4] && (c *= -1), c && b.setUTCMinutes(b.getUTCMinutes() + c)), b) : NaN
                        }
                        return NaN
                    }
                } (), b) {
                    if (!b.mode) return;
                    var c = this,
                    d = x(this.start, "start"),
                    e = x(this.end, "end"),
                    f = this.$dom,
                    g = H.months[this.language] || H.months._default,
                    h = (H.weeks[this.language] || H.weeks._default, []);
                    b.departDateRanges && b.departDateRanges.length > 0 && (this.range = [], a.each(b.departDateRanges,
                    function() {
                        c.range.push({
                            from: Date.fromISO(this.startDate),
                            to: Date.fromISO(this.endDate)
                        }),
                        h.push(y(Date.fromISO(this.startDate), "yyyy/mm/dd") + "-" + y(Date.fromISO(this.endDate), "yyyy/mm/dd"))
                    })),
                    "range_length_acc" === b.mode && (this.switchMode("range_length_acc"), b.departDateRanges && b.departDateRanges.length > 0 && (f.find(".calendar_tag").find("span").eq(0).removeClass("selected"), f.find(".calendar_tag").find("span:gt(0)").each(function() {
                        var b = !0;
                        a.each(a(this).data("range").split(","),
                        function(a, c) { - 1 === h.indexOf(c) && (b = !1)
                        }),
                        b ? a(this).addClass("selected") : a(this).removeClass("selected")
                    }))),
                    "range_center_acc" === b.mode && (this.switchMode("range_center_acc"), this.radius = b.radius, f.find(".date_txt").text(this.radius), b.radius > 1 && f.find(".ico_minus ").removeClass("disabled"), this.selected = b.selected ? Date.fromISO(b.selected) : new Date, this.displayed = new Date(this.displayed.setFullYear(this.selected.getFullYear(), this.selected.getMonth(), 15)), this.displayRange = this.range, d && d.setHours(0, 0, 0, 0), e && e.setHours(23, 59, 59, 999), G(f, this.selected, this.displayed, d, e, g, this.dateUpdater, this.titleUpdater, this.displayRange, this.mode)),
                    b.minDays && b.maxDays && (this.rangeLen = [b.minDays, b.maxDays], f.find(".cus_days").find(".tag").eq(0).removeClass("selected"), f.find(".cus_days").find(".tag:gt(0)").each(function() {
                        a(this).data("range").join(",") === c.rangeLen.join(",") ? a(this).addClass("selected") : a(this).removeClass("selected")
                    })),
                    this.$input.trigger("confirm", this)
                }
            },
            init: function() {
                var a = this.$input,
                b = F(this);
                s.append(b.hide()),
                this.$dom = b,
                this.readonly && !a.attr("readonly") && (this.needRemoveReadonly = !0, a.attr("readonly", !0)),
                this.switchMode(this.mode),
                this.reset(),
                this.bindEvents(),
                a.trigger("init", [this, b]),
                this.reflectData && this.reflect(this.reflectData)
            },
            updatePicker: function(a) {
                var b = this;
                this.selectRangeByCenterDate(this.selected && +this.selected >= +this.start ? this.selected: null, this.radius),
                setTimeout(function() {
                    b.reflect(a)
                },
                200)
            },
            reset: function() {
                var b = x(this.start, "start"),
                c = x(this.end, "end"),
                d = this.$dom,
                e = H.months[this.language] || H.months._default,
                f = H.weeks[this.language] || H.weeks._default;
                this.radius = 0,
                d.find(".date_txt").text(this.radius),
                this.rangeLen = null,
                d.find(".cus_days").find(".tag").eq(0).addClass("selected").siblings().removeClass("selected"),
                this.range = void 0,
                d.find(".calendar_tag").find("span").eq(0).addClass("selected").siblings().removeClass("selected"),
                d.find(".week").each(function(b) {
                    a(this).html(f[b])
                }),
                "range_center_acc" === this.mode ? this.switchMode("range_length_acc") : "range_center" === this.mode && this.switchMode("range_length"),
                this.selected = void 0,
                this.displayRange = null,
                b && b.setHours(0, 0, 0, 0),
                c && c.setHours(23, 59, 59, 999),
                G(d, this.selected, this.displayed, b, c, e, this.dateUpdater, this.titleUpdater, this.displayRange, this.mode)
            },
            bindEvents: function() {
                function c() {
                    g.find(".date_txt").text(f.radius),
                    h.trigger("radiuschange", f),
                    f.selected || (f.selected = (new Date).addDays(1)),
                    f.selectRangeByCenterDate(f.selected, f.radius),
                    f.showval()
                }
                function d(a) {
                    f.displayed.setMonth(f.displayed.getMonth() + a),
                    G(g, f.selected, f.displayed, x(f.start, "start"), x(f.end, "end"), i, f.dateUpdater, f.titleUpdater, f.displayRange, f.mode),
                    h.trigger("monthswitch", f)
                }
                function e() {
                    k && clearTimeout(k),
                    k = setTimeout(function() {
                        var a = h.offset();
                        a.top += h.outerHeight() + 8,
                        g.css(a)
                    },
                    200)
                }
                var f = this,
                g = this.$dom,
                h = this.$input,
                i = H.months[this.language] || H.months._default,
                j = a(b);
                h.on("click",
                function(a) {
                    a.stopPropagation();
                    var b = h.offset();
                    g.css({
                        top: b.top + h.outerHeight() + 8,
                        left: b.left
                    }),
                    g.toggle()
                }),
                j.on("click",
                function(a) {
                    try {
                        "none" != g.css("display") && window.dateTimeChangeEventListener && window.dateTimeChangeEventListener()
                    } catch(b) {}
                    g.hide()
                }),
                g.on("click",
                function(a) {
                    a.stopPropagation()
                }),
                g.on("click", ".cus_checkbox label",
                function(b) {
                    b.stopPropagation();
                    var c = a(this).find("i");
                    if (c.hasClass("ico_checkbox"))"range_length" === f.mode ? f.switchMode("range_center") : f.switchMode("range_center_acc"),
                    g.find(".day.selected_center").trigger("click");
                    else if (c.hasClass("ico_checkbox_active")) {
                        "range_center" === f.mode ? f.switchMode("range_length") : f.switchMode("range_length_acc");
                        var d = g.find(".calendar_tag .selected:first");
                        d.trigger("click"),
                        d.trigger("click")
                    }
                    f.selectRangeByCenterDate(this.selected && +this.selected >= +this.start ? this.selected: null, this.radius),
                    f.showval()
                }),
                g.find(".calendar_tag").on("click", ".tag,.sm_tag,.lg_tag",
                function(b) {
                    b.preventDefault();
                    var c = a(this);
                    if (!c.hasClass("disabled")) {
                        c.hasClass("lg_tag") ? (c.hasClass("selected") || c.addClass("selected").siblings().removeClass("selected"), f.displayRange = null) : c.siblings(".lg_tag").hasClass("selected") ? (c.siblings(".lg_tag").removeClass("selected"), c.addClass("selected")) : c.hasClass("selected") ? (c.removeClass("selected"), c.siblings(".selected").length || (c.siblings(".lg_tag").addClass("selected"), f.displayRange = null)) : c.addClass("selected");
                        var d = f.$dom.find(".calendar_tag").children(".selected"),
                        e = [];
                        d.each(function() {
                            e.push(a(this).data("range"))
                        }),
                        void 0 !== e[0] && f.selectRange(e.join(",")),
                        f.showval()
                    }
                }),
                g.on("click", ".day",
                function(b) {
                    var c = a(this);
                    if (!c.hasClass("disabled")) {
                        var d = new Date("1970/01/01"),
                        e = f.displayed;
                        d.setFullYear(e.getFullYear()),
                        d.setMonth(e.getMonth()),
                        d.setDate(c.data("zDay")),
                        f.radius = parseInt(g.find(".date_selected .date_txt").text()),
                        f.selectRangeByCenterDate(d, f.radius),
                        f.showval()
                    }
                }),
                g.on("click", ".ico_minus",
                function(b) {
                    0 !== f.radius && (f.radius--, 0 === f.radius && a(this).addClass("disabled"), 9 === f.radius && g.find(".ico_plus").removeClass("disabled"), c())
                }).on("click", ".ico_plus",
                function(b) {
                    10 !== f.radius && (f.radius++, 1 === f.radius && g.find(".ico_minus").removeClass("disabled"), 10 === f.radius && a(this).addClass("disabled"), c())
                }).on("click", ".cus_days .tag",
                function(b) {
                    b.stopPropagation(),
                    f.selected || (f.selected = new Date);
                    var c = a(this);
                    f.rangeLen = c.data("range"),
                    c.addClass("selected").siblings().removeClass("selected"),
                    f.showval()
                }),
                g.on("click", ".month_prev",
                function(a) {
                    var b = new Date(f.displayed.getFullYear(), f.displayed.getMonth(), 1);
                    f.start && b <= f.start || d( - 1)
                }).on("click", ".month_next",
                function(a) {
                    var b = new Date(f.displayed.getFullYear(), f.displayed.getMonth() + 1, 0);
                    f.end && b >= f.end || d(1)
                }),
                g.on("click", ".btn_confirm",
                function(a) {
                    f.close(!0);
                    try {
                        window.dateTimeChangeEventListener && window.dateTimeChangeEventListener()
                    } catch(b) {}
                }),
                a(window).on("resize", e);
                var k
            }, get: function(a) {
                return a ? this[a] : this
            },
            set: function(b, c) {
                var d = this;
                "string" == typeof b ? this[b] = c: a.isPlainObject(b) && a.each(b,
                function(a, b) {
                    d[a] = b
                })
            },
            switchMode: function(a) {
                this.mode = a;
                var b = this.$dom.find(".cus_checkbox i"),
                c = this.$dom.find(".calendar_tag"),
                d = this.$dom.find(".cus_checkbox .date_selected"),
                e = this.$dom.find(".calendar_tit"),
                f = this.$dom.find(".calendar_box"),
                g = this.$dom.find(".cus_days"); - 1 !== a.indexOf("center") && (c.slideUp(), d.show(), e.show(), f.show(), b.hasClass("ico_checkbox") && b.removeClass("ico_checkbox").addClass("ico_checkbox_active")),
                -1 !== a.indexOf("length") && (c.slideDown(), d.hide(), e.hide(), f.hide(), b.hasClass("ico_checkbox_active") && b.removeClass("ico_checkbox_active").addClass("ico_checkbox")),
                -1 === a.indexOf("acc") ? g.hide() : g.show()
            },
            selectRange: function(b, c, d) {
                var e, f = this.selected,
                h = this.displayed,
                i = x(this.start, "start"),
                j = x(this.end, "end"),
                k = this.$dom,
                l = this.$input,
                m = H.months[this.language] || H.months._default,
                n = [];
                if (i && i.setHours(0, 0, 0, 0), j && j.setHours(23, 59, 59, 999), "string" == typeof b && b && void 0 === c && void 0 === d) {
                    if (e = g.exec(b)) return "m" === e[1].toLowerCase() ? this.selectMonth(e[2]) : this.selectYear(e[2]);
                    for (var o = b.split(","), p = 0; p < o.length; p++) e = C(o[p]),
                    b = new Date(e.from),
                    c = new Date(e.to),
                    n.push({
                        from: new Date(b.setHours(0, 0, 0, 0)),
                        to: new Date(c.setHours(23, 59, 59, 999))
                    })
                } else {
                    if (b = b || i, c = c || j, !b && !c) return;
                    if (b instanceof Date || (b = new Date(b)), c instanceof Date || (c = new Date(c)), i && b.getTime() < i.getTime() && (b = i), j && c.getTime() > j.getTime() && (c = j), b.getTime() > c.getTime()) return;
                    n.push({
                        from: b,
                        to: c
                    })
                }
                var q = a.Event("beforeselect");
                l.trigger(q, this),
                q.result !== !1 && (this.displayRange = n, ("range_center" === this.mode || "range_center_acc" === this.mode) && (b.getFullYear() !== h.getFullYear() && h.setFullYear(b.getFullYear()), h.setMonth(b.getMonth()), G(k, f, h, i, j, m, this.dateUpdater, this.titleUpdater, this.displayRange, this.mode)), l.trigger("afterselect", this))
            },
            selectRangeByCenterDate: function(a, b) {
                b = b || this.radius,
                this.selected = a || new Date;
                var c = this.selected.getDate();
                this.selectRange(new Date(this.selected).setDate(c - b), new Date(this.selected).setDate(c + b), !0)
            },
            selectRangeByLen: function(a, b) {
                b = b || this.radius,
                this.selected = a || new Date;
                var c = this.selected.getDate();
                this.$dom.find("input:checkbox").eq(1).is(":checked") ? this.selectRange(new Date(this.selected).setDate(c - 2), new Date(this.selected).setDate(c + 2), !0) : this.selectRange(new Date(this.selected).setDate(c), new Date(this.selected).setDate(c), !0)
            },
            selectMonth: function(a, b) {
                var c, d = new Date;
                b && d.setFullYear(b),
                d.setMonth( + a - 1, 1, 0),
                c = new Date(d),
                c.setMonth(a, 0),
                this.selectRange(d, c)
            },
            selectYear: function(a) {
                var b, c = new Date;
                c.setFullYear(a, 0, 1, 0),
                b = new Date(c),
                b.setMonth(12, 0, 0),
                this.selectRange(c, b)
            },
            unselect: function() {
                this.range = [],
                this.selected = void 0,
                this.reset()
            },
            hide: function() {
                this.$dom.hide()
            },
            close: function(b) {
                if (b) {
                    if ("range_length" === this.mode || "range_length_acc" === this.mode) {
                        var c = [],
                        d = this.$dom.find(".calendar_tag").children(".selected");
                        d.each(function() {
                            c.push(a(this).data("range"))
                        }),
                        void 0 !== c[0] && this.selectRange(c.join(","))
                    } else this.radius = parseInt(this.$dom.find(".date_selected .date_txt").text()),
                    this.selectRangeByCenterDate(this.selected, this.radius);
                    this.showval()
                } else this.$input.trigger("cancel", this);
                this.$dom.hide()
            },
            showval: function() {
                this.range = this.displayRange;
                var b = "";
                if (this.range) {
                    if ("range_length" === this.mode || "range_length_acc" === this.mode) {
                        var c = this.$dom.find(".calendar_tag").children(".selected"),
                        d = [];
                        c.each(function() {
                            d.push(a(this).text())
                        }),
                        b = d && d.length ? d[0] : "",
                        b += d && d.length > 1 ? "...": ""
                    } else {
                        var e = parseInt(this.$dom.find(".date_txt").text());
                        b = y(this.selected, "yyyy-mm-dd"),
                        b += e ? "\u524d\u540e": ""
                    }
                    b += "range_length" === this.mode || "range_center" === this.mode ? " \u51fa\u53d1": this.valLen()
                } else b = "\u4efb\u4f55\u65f6\u95f4",
                "range_length_acc" === this.mode && this.valLen() && (b = this.valLen());
                this.$input.val(b),
                this.$input.trigger("confirm", this)
            },
            val: function(a) {
                return a = a || "yyyy-mm-dd",
                this.range ? y(this.range[0], a) + "~" + y(this.range[1], a) : ""
            },
            valLen: function(a, b) {
                return this.rangeLen ? " \u51fa\u6e38" + this.rangeLen[0] + "~" + this.rangeLen[1] + "\u5929": ""
            },
            destroy: function() {
                this.$dom.remove(),
                this.$input.data("datePicker", null),
                this.$input.off("init beforeselect afterselect"),
                this.needRemoveReadonly && this.$input.removeAttr("readonly"),
                this.$input = null
            }
        };
        var H = a.fn.datePicker = function(b) {
            return this.each(function() {
                var c = a(this),
                e = c.data("datePicker");
                e || c.data("datePicker", new d(c, b))
            })
        },
        I = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        J = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        H.months = {
            en: I,
            _default: I,
            cn: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"]
        },
        H.weeks = {
            en: J,
            _default: J,
            cn: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"]
        },
        H.defaults = B,
        a.DatePicker = d,
        d.getFestivalInfo = function(a) {
            var b, c = a.getDate(),
            d = a.getMonth() + 1;
            if (b = "" + (10 > d ? "0": "") + d + (10 > c ? "0": "") + c, b in w) return {
                date: a,
                type: "solar",
                key: b,
                value: w[b]
            };
            var e = u(a),
            f = 0 | e.day,
            g = e.month;
            return b = "" + (10 > g ? "0": "") + g + (10 > f ? "0": "") + f,
            b in v ? {
                date: a,
                type: "lunar",
                key: b,
                value: v[b]
            }: !1
        },
        d.formatDate = y
    } (jQuery, document),
    function(a) {
        a.createRangeDatePicker = function(b, c) {
            if ("string" == typeof b) {
                var d = function(a, b) {
                    var c = b || new Date;
                    return new Date( + c + 60 * (c.getTimezoneOffset() + a) * 1e3)
                },
                e = {
                    destCityName: "\u5168\u4e16\u754c",
                    travelType: "",
                    inputDepartureCityName: "",
                    inputDepartureCity: "",
                    departDateRanges: [],
                    departStringDate: "\u4efb\u4f55\u65f6\u95f4",
                    minDays: null,
                    maxDays: null,
                    inputArrivalCities: {
                        themes: [],
                        cities: [],
                        areas: []
                    },
                    inputArrivalCitiesMap: {
                        themes: [],
                        cities: [],
                        areas: []
                    },
                    city_offset: 480
                },
                f = a(b),
                g = d(480),
                h = (f.data("datePicker"),
                function() {
                    var a = f.val("\u4efb\u4f55\u65f6\u95f4").data("datePicker");
                    a.hide(),
                    a.reset(),
                    a.range = "\u4efb\u4f55\u65f6\u95f4",
                    a.radius = 0,
                    a.selected = null,
                    a.rangeLen = null;
                    var b = e;
                    b.radius = a.radius,
                    b.selected = a.selected,
                    b.mode = "range_length_acc",
                    b.departDateRanges = [],
                    b.departStringDate = "\u4efb\u4f55\u65f6\u95f4",
                    b.minDays = null,
                    b.maxDays = null
                });
                return f.on("init",
                function(a, b, c) {}).on("confirm",
                function(b, d) {
                    var g = e,
                    h = [];
                    d.range && d.range.length && a.each(d.range,
                    function(a, b) {
                        h.push({
                            startDate: b.from.toISOString(),
                            endDate: b.to.toISOString()
                        })
                    }),
                    g.departDateRanges = h,
                    g.departStringDate = f.val(),
                    g.minDays = d.rangeLen && d.rangeLen[0],
                    g.maxDays = d.rangeLen && d.rangeLen[1],
                    g.radius = d.radius,
                    g.mode = d.mode,
                    g.selected = d.selected,
                    c && c()
                }).on("keydown",
                function(a) {
                    a.preventDefault(),
                    h()
                }).datePicker({
                    start: g,
                    end: g.addDays(89),
                    readonly: !1,
                    radius: 0,
                    mode: "range_length_acc"
                }),
                f.data("datePicker").switchMode("range_length_acc"),
                {
                    $picker: f,
                    data: e
                }
            }
        }
    } (jQuery),
    online.create("service.index.AjaxTabService", {
        methods: {
            initialize: function(a) {
                this.info(),
                this.MaxTryTimes = 0,
                this.IntervalTime = 3e3,
                this.extend(this, a),
                this.bindEvent(),
                this.init()
            },
            bindEvent: function() {
                var a = this;
                this.tmpl = this.box.find([a.content, "first"].join(":")),
                this.box.find(this.item).bind("click",
                function(b) {
                    b.preventDefault(),
                    a.show($(this))
                }),
                this.box.find(".airline_busy a").bind("click",
                function(b) {
                    b.preventDefault(),
                    a.init()
                })
            },
            init: function() {
                var a = this.box.find([this.item, this.style].join("."));
                0 === a.length && (a = this.box.find([this.item, "first"].join(":"))),
                a.length > 0 && this.show(a)
            },
            show: function(a) {
                this.box.find([this.item, this.style].join(".")).removeClass(this.style),
                a.addClass(this.style);
                var b = this.getName(a),
                c = $([this.content, b].join("."));
                0 === c.length && (c = this.tmpl.clone(!0).appendTo(this.box), c.addClass(b), c.attr("url", this.getUrl(a)), this.loadData(c)),
                this.box.find(this.content).css("display", "none"),
                c.css("display", "")
            },
            loadData: function(a) {
                var b = this,
                c = a.attr("url");
                $.ajax(c, {
                    onsuccess: function(c, d) {
                        b.ajaxCallBack(a, d)
                    },
                    onerror: function() {
                        b.ajaxCallBack(a)
                    }
                })
            },
            checkTryLimit: function(a) {
                var b = a.attr("times") || 0;
                if (b >= this.MaxTryTimes) return a.removeAttr("times"),
                !1;
                a.attr("times", ++b);
                var c = this;
                return setTimeout(function() {
                    c.loadData(a)
                },
                this.IntervalTime),
                !0
            }
        }
    }),
    online.validateMultiQuantity = function(a) {
        a = a || {};
        var b = $("#Quantity"),
        c = $("#ChildQuantity"),
        d = $("#InfantQuantity"),
        e = $("#InfantTip"),
        f = +b.value(),
        g = +c.value(),
        h = +d.value(),
        i = !0,
        j = "";
        return $("#noAdultTip").hide(),
        e.hide(),
        a.isResult && $("#popTips").remove(),
        0 === f && 0 === h && g > 0 && $("#noAdultTip").show(),
        0 === f && 0 === g && 0 === h && (j = "\u8bf7\u9009\u62e9\u5b9e\u9645\u51fa\u884c\u4eba\u6570\u3002", i = !1),
        0 === f && 0 === g && h > 0 && (j = "\u5982\u9700\u5355\u72ec\u9884\u8ba2\u5a74\u513f\u7968\uff0c\u8bf7\u81f4\u7535\u643a\u7a0b" + (window.intlBookTelInfo || {}).Normal + "\u3002", i = !1),
        0 === f && g > 0 && h > 0 && (j = pageGlobal.MultiPassengerTypeSwitch ? "\u513f\u7ae5\u5a74\u513f\u987b\u6709\u6210\u4eba\u966a\u4f34\u4e58\u673a\u3002": "\u9884\u8ba2\u65b9\u5f0f\u4ec5\u652f\u6301\u201c\u6210\u4eba+\u513f\u7ae5\u201d\u3001\u201c\u6210\u4eba+\u5a74\u513f\u201d\u3002", i = !1),
        pageGlobal.MultiPassengerTypeSwitch ? (f > 0 && (h > f || g > 2 * f) && (j = '\u6bcf\u540d\u6210\u4eba\u6700\u591a\u53ef\u643a\u5e262\u540d\u513f\u7ae5\u548c1\u540d\u5a74\u513f\u4e58\u673a\uff0c\u5982\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8bf7\u81f3<a href="FlightQuery.aspx" target="_blank">\u673a\u7968\u9700\u6c42\u5355</a>\u63d0\u4ea4\u7533\u8bf7\u3002', i = !1), f > 0 && h > 4 && f >= h && (j = '\u540c\u884c\u6210\u4eba\u603b\u5171\u53ef\u643a\u5e26\u4e0d\u8d85\u8fc74\u540d\u5a74\u513f\uff0c\u5982\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8bf7\u81f3<a href="FlightQuery.aspx" target="_blank">\u673a\u7968\u9700\u6c42\u5355</a>\u63d0\u4ea4\u7533\u8bf7\u3002', i = !1), f + g > 9 && (j = '\u4e58\u5ba2\u603b\u6570\uff08\u4e0d\u542b\u5a74\u513f\uff09\u591a\u4e8e9\u4eba\uff0c\u8bf7\u586b\u5199<a href="FlightQuery.aspx" target="_blank">\u673a\u7968\u9700\u6c42\u5355</a>\u8fdb\u884c\u9884\u8ba2\u3002', i = !1)) : (f > 0 && g > 0 && h > 0 && (j = "\u9884\u8ba2\u65b9\u5f0f\u4ec5\u652f\u6301\u201c\u6210\u4eba+\u513f\u7ae5\u201d\u3001\u201c\u6210\u4eba+\u5a74\u513f\u201d\u3002", i = !1), f > 0 && g > 0 && g - 2 * f > 0 && 0 === h && (j = '\u76ee\u524d\u4ec5\u652f\u6301 1 \u4f4d\u6210\u4eba\u6700\u591a\u643a\u5e26 2 \u540d\u513f\u7ae5\uff0c\u5982\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8bf7\u81f3<a href="FlightQuery.aspx" target="_blank">\u673a\u7968\u9700\u6c42\u5355</a>\u63d0\u4ea4\u7533\u8bf7\u3002', i = !1), f > 0 && h > 0 && h - f > 0 && 0 === g && (j = '\u76ee\u524d\u4ec5\u652f\u6301 1 \u4f4d\u6210\u4eba\u6700\u591a\u643a\u5e26 1 \u540d\u5a74\u513f\uff0c\u5982\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8bf7\u81f3<a href="FlightQuery.aspx" target="_blank">\u673a\u7968\u9700\u6c42\u5355</a>\u63d0\u4ea4\u7533\u8bf7\u3002', i = !1), f + g + h > 9 && (j = '\u4e58\u5ba2\u603b\u6570\u591a\u4e8e 9 \u4eba\uff0c\u8bf7\u586b\u5199<a href="FlightQuery.aspx" target="_blank">\u673a\u7968\u9700\u6c42\u5355</a>\u9884\u8ba2\u3002', i = !1)),
        a.isResult && (j = '<span class="alert-box alert-termalert-box search-alert-box"><i class="icon-warn-12"></i>' + j + "</span>"),
        i === !1 && e.html('<i class="ico_warn"></i>' + j).show().find("a").bind("click",
        function(a) {
            try {
                a.stop()
            } catch(a) {}
            var b = $(this).parents("form")[0],
            c = b.action;
            return b.action = this.href,
            b.target = "_blank",
            b.submit(),
            b.target = "",
            b.action = c,
            !1
        }),
        i
    },
    online.emsTipContent = function(a, b, c) {
        var d = [];
        if (a && a.nl) {
            for (var e = a.nl.length,
            f = 0; e > f; f++) {
                var g = "",
                h = a.nl[f];
                if (h.co) {
                    if (h.f && b < new Date(h.f).getTime()) continue;
                    if (h.t && b > new Date(h.t).getTime()) continue;
                    if (h.la && h.la.length > 0) for (var i = 0,
                    j = h.la.length; j > i; i++) {
                        var k = h.la[i]; (k.p || k.c || k.d) && (k.d ? -1 !== c.indexOf(k.d) && (g = h.co) : k.c ? -1 !== c.indexOf(k.c) && (g = h.co) : k.p && -1 !== c.indexOf(k.p) && (g = h.co))
                    } else g = h.co;
                    "" != g && d.push(g)
                }
            }
            var l = d.length;
            if (l > 1) for (var m = 0; l > m; m++) d[m] = m + 1 + "." + d[m]
        }
        return d.join("<br/>")
    },
    online.bulletinBoardTips = function(a) {
        var b = [];
        if (a && a.NoticeDetailList) for (var c = a.NoticeDetailList.length,
        d = 0; c > d; d++) {
            var e = "",
            f = a.NoticeDetailList[d];
            e = f.Content,
            "" != e && b.push(e)
        }
        var g = b.length;
        if (g > 1) for (var h = 0; g > h; h++) b[h] = h + 1 + "." + b[h];
        return b.join("<br/>")
    },
    online.create("service.IndexNewService", {
        options: {
            msg: online.msg,
            searchWait: null,
            searchBox: $("#search_box"),
            defaultClass: "search_box",
            advSearchBtn: $("#advSearchBtn"),
            advClass: "do_advsearch",
            searchBtn: $("#searchBtn"),
            multipleBox: $("#flight_multiple"),
            syncConfig: {},
            searchTypeChanged: function() {
                var a = $("#ADate");
                switch (this.last) {
                case "S":
                    "" != a.value() && (this.lastValue = a.value(), a.value(""), online.clearNotice(a)),
                    $("#DDate").attr("mod_calendar_focusnext", "ADate");
                    break;
                case "D":
                    this.lastValue && "" == a.value() && (a.value(this.lastValue), online.clearNotice(a)),
                    $("#DDate").attr("mod_calendar_focusnext", "ADate~ADate");
                    break;
                case "M":
                    $(".transfer_city").hide(),
                    $(".transfer_time").hide()
                }
                var b = $("#DDate");
                b.value().isDate() && a.value().toDate() < b.value().toDate() && (a.value(""), online.clearNotice(a)),
                "M" != this.last ? (this.advSearchBtn.show(), $("#SubClass").removeClass("item-last").prependTo($("#search_advform")), $(".transfer_city").show(), $(".transfer_time").show(), online.registerMod.searchBoxVals.multipleRound = this.last, $(".search-traveler-types").appendTo($("#search_traveler_types"))) : ($(".search-traveler-types").appendTo($("#flight_multiple_traveler_types")), this.advSearchBtn.hide(), $("#SubClass").addClass("item-last").appendTo($("#flight_multiple_traveler_types .clearfix")))
            },
            style: {
                S: "search_single",
                D: "search_goback",
                M: "search_multiple"
            },
            exchangeBtn: $("#exchangeCity"),
            drpFlightWay: $("#search_type input[name=FlightWay]"),
            Quantity: {
                obj: $("#Quantity"),
                max: 9
            },
            ChildQuantity: {
                obj: $("#ChildQuantity"),
                max: 9
            },
            InfantQuantity: {
                obj: $("#InfantQuantity"),
                max: 4
            },
            DrpSubClass: {
                obj: $("#drpSubClass"),
                data: {
                    "\u7ecf\u6d4e\u8231": "Y",
                    "\u8d85\u7ea7\u7ecf\u6d4e\u8231": "S",
                    "\u516c\u52a1\u8231": "C",
                    "\u5934\u7b49\u8231": "F"
                }
            }
        },
        methods: {
            initialize: function(a) {
                this.info(),
                this.last = "",
                this.advIsShow = !1,
                this.extend(this, a),
                this.drpFlightWay["S" === online.registerMod.searchBoxVals.multipleRound ? 0 : 1].checked = !0,
                this.searchBox.hasClass("fuzzysearch-box") && (this.defaultClass += " fuzzysearch-box"),
                this.renderPoptips(),
                this.leftSide = $(".base_side"),
                this.hasHotelAd = $("div.send-hotel-banner").length > 0,
                this.bindEvent(),
                this.searchTypeChange()
            },
            getSearchType: function() {
                return this.drpFlightWay.filter(":checked").value().toUpperCase()
            },
            fixPopInfoPosition: function() {
                if (null == $.storage.get("popTips")) {
                    var a = $("#InfantQuantity").parentNode();
                    $("#pop-inform").css({
                        left: a.offset().left + "px",
                        top: a.offset().top + 36 + "px"
                    })
                }
            },
            dingyue: function() {
                var a = $("#mailSubscribe"),
                b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/,
                c = a.value().trim(); ! online.isNull(a[0]) && b.test(c) ? ($("#dingyue_panel div.help_inline").hide(), $.ajax("AjaxSubscribe.ashx?email=" + c, {
                    onsuccess: function(a) {
                        a = a.responseText,
                        $("#dingyue_panel div.subscribe_panel").hide(),
                        $("#dingyue_panel div.subscribe_stats." + a).show()
                    }
                })) : ($("#dingyue_panel div.help_inline").show(), a[0].select())
            },
            inteFlightSF: function() {
                try {
                    var a = "homeCity" + ("M" == this.last ? "_1": ""),
                    b = this;
                    setTimeout(function() {
                        try {
                            online.registerMod.inits.address[a].method("focus", {
                                isHidden: !0,
                                isSelected: !0
                            })
                        } catch(c) {
                            setTimeout(b.inteFlightSF.bind(b), 200)
                        }
                    },
                    "M" == this.last ? 500 : 25)
                } catch(c) {}
            },
            getCityNameFromCode: function(a) {
                return this.msg.cityCode[a] ? this.msg.cityCode[a] : this.msg.cityCode.OTHER
            },
            keydownByCityInput: function(a) {
                var b = a.target,
                c = a.keyCode || a.charCode;
                if (13 !== c) return ! 0;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                var d, e = (b.id || "").split("_");
                switch (e[0]) {
                case "homeCity":
                    d = "destCity";
                    break;
                case "destCity":
                    d = "DDate";
                    break;
                case "DDate":
                    d = 1 == e.length ? "ADate": "homeCity",
                    "homeCity" == d && (e[1] = 1 * e[1] + 1),
                    $(1 == e.length ? "#ADate": "#DDate_" + e[1]).data("minDate", b.value),
                    "S" === this.last && (d = "abcdefg")
                }
                if (d) {
                    if (2 == e.length && (d += "_" + e[1]), d = $("#" + d), d.length > 0) return setTimeout(function() {
                        d[0].focus(),
                        d[0].select(),
                        d = null
                    },
                    10),
                    !1;
                    var f = this;
                    setTimeout(function() {
                        b.blur(),
                        f.searchBtn.click(),
                        f = b = null
                    },
                    1)
                } else this.searchBtn.click()
            },
            searchTypeChange: function(a) {
                a = (a || this.getSearchType()).toUpperCase(),
                a != this.last && (this.last = a, this.resetStyle(), this.searchBox[0].className = [this.defaultClass, this.style[a], this.advIsShow ? this.advClass: ""].join(" ").trim(), this.inteFlightSF(), this.searchTypeChanged(), this.hotCountryService && this.hotCountryService.searchTypeChanged(a))
            },
            getOffset: function(a) {
                return a.offset()
            },
            resetStyle: function(a) {
                var b, c, d = 380;
                switch (a || this.last) {
                case "M":
                    d = 768,
                    this.syncValue(this.syncConfig || {})
                }
                var e = {
                    width: d + "px"
                };
                try {
                    $.mod._mods.animate ? this.searchBox.animate(e, 78) : this.searchBox.css(e)
                } catch(f) {
                    this.searchBox.css(e)
                }
                setTimeout(function() {
                    b = this.getOffset(this.searchBox).height,
                    $.browser.isIE && (b += 2),
                    this.leftSide.removeAttr("style"),
                    c = b + parseInt(this.searchBox.css("marginTop")) - ($(".base_top").offset().height - $("#adpic").offset().height),
                    c > 0 ? this.leftSide.css("marginTop", c + "px") : this.leftSide.removeAttr("style"),
                    this.fixPopInfoPosition()
                }.bind(this), 50)
            },
            toggleAdvSearch: function() {
                this.advIsShow = !this.advIsShow,
                this.resetStyle(),
                this.searchBox[this.advIsShow ? "addClass": "removeClass"](this.advClass),
                this.searchBox.find("div.search_advform select, div.search_advform input").each(function(a) {
                    "drpSubClass" !== a.attr("id") && a[0][this.advIsShow ? "removeAttribute": "setAttribute"]("disabled", "disabled")
                }.bind(this))
            },
            syncValue: function(a) {
                var b, c, d, e, f;
                for (b = a.length; b--;) if (c = a[b], d = $(c[0]), e = $(c[1]), !(d.length < 1 || e.length < 1) && "" == e.value() && "" != d.value()) {
                    if (f = d.attr("mod_change_value")) {
                        if (f += "", -1 == f.indexOf("(") && -1 == f.indexOf("|")) continue;
                        var g; - 1 != f.indexOf("\u53ca\u5468\u8fb9\u57ce\u5e02") && (g = f.split("|"), g[3] = g[3].substring(0, 3), g[1] = g[1].replace(/\u53ca\u5468\u8fb9\u57ce\u5e02/g, "") + "(" + g[3] + ")", f = g.join("|")),
                        e.getMod("address_poi", "2.0").method("select", f)
                    } else {
                        f = d.value() + "",
                        -1 != f.indexOf("\u53ca\u5468\u8fb9\u57ce\u5e02") && (f = f.replace(/\u53ca\u5468\u8fb9\u57ce\u5e02/g, "")),
                        e.value(f);
                        var h = e.attr("mod_address_reference"),
                        i = d.attr("mod_address_reference");
                        h && i && $("#" + h).value($("#" + i).value())
                    }
                    online.clearNotice(e),
                    null != e.attr("mod_calendar_focusnext") && $("#" + e.attr("mod_calendar_focusnext")).data("minDate", e.value())
                }
            },
            renderPoptips: function() {
                null === $.storage.get("popTips") && setTimeout(function() {
                    var a = $("#InfantQuantity").parentNode(),
                    b = document.createElement("div");
                    b.className = "pop-inform",
                    b.id = "pop-inform",
                    b.innerHTML = '<span class="ico arrow-up"></span>\u51c6\u786e\u9009\u62e9\u4e58\u5ba2\u4eba\u6570\uff0c\u53ef\u4eab\u76f8\u5e94\u4f18\u60e0\u3002<a href="javascript:void(0);" id = "hide-pop-inform"><b>\u77e5\u9053\u4e86</b></a>',
                    b.style.position = "absolute",
                    b.style.left = a.offset().left + "px",
                    b.style.top = a.offset().top + 36 + "px",
                    b.style.width = "255px",
                    b = $(b),
                    b.appendTo($(document.body)),
                    $("#hide-pop-inform").bind("click",
                    function() {
                        try {
                            a.stop()
                        } catch(a) {}
                        b.remove(),
                        $.storage.set("popTips", 1)
                    })
                },
                150)
            },
            bindEvent: function() {
                function a(a) {
                    return "" == a || null == a.match(/\(([a-z]+)\)/i) ? "": RegExp.$1
                }
                var b = this;
                $.browser.isIE && $(window).bind("resize",
                function() {
                    $("body")[document.documentElement.clientWidth <= 1250 ? "addClass": "removeClass"]("width_change")
                }),
                this.searchWait && this.searchBtn.bind("mousedown",
                function(a) {
                    b.searchWait.afterClick()
                }),
                this.drpFlightWay.bind("click",
                function() {
                    b.searchTypeChange(this.value)
                }),
                this.advSearchBtn.bind("click",
                function(a) {
                    a.stop(),
                    b.toggleAdvSearch()
                });
                var c = function(a, b) {
                    if (a.obj.length > 0) for (var c = 0; c <= a.max; c++) a.obj[0].options.add(new Option(b + c, c))
                };
                c(this.Quantity, "\u6210\u4eba "),
                c(this.ChildQuantity, "\u513f\u7ae5 "),
                c(this.InfantQuantity, "\u5a74\u513f "),
                this.Quantity.obj.value(1),
                this.Quantity.obj.trigger("change"),
                $("#Quantity,#ChildQuantity,#InfantQuantity").bind("change",
                function() {
                    $("#InfantTip").hide(),
                    online.validateMultiQuantity(),
                    b.resetStyle()
                });
                var d = !0;
                $("#dingyue").bind("click",
                function(a) {
                    a.stop(),
                    $("#dingyue_panel").animate({
                        width: d ? "378px": "76px"
                    },
                    function() {
                        $("#dingyue_panel").css("overflow", d ? "hidden": "visible")
                    }),
                    d = !d
                }),
                $("#mailSubscribeBtn").bind("click",
                function(a) {
                    a.stop(),
                    b.dingyue()
                }),
                $("#mailSubscribe").bind("blur",
                function() {
                    $("#dingyue_panel div.help_inline").hide()
                }),
                $("#dingyue_panel a.close").bind("click",
                function(a) {
                    a.stop(),
                    $("#dingyue_panel div.subscribe_stats").hide(),
                    $("#dingyue_panel div.subscribe_panel").show()
                }),
                $("#dynamic_type input").bind("change",
                function() {
                    $("div.tool_panel").toggle()
                }),
                $("#search_by_fltno").bind("click",
                function(a) {
                    a.stop(),
                    $("#invalid_fltno").hide();
                    var b = $("#fltno"),
                    c = b.value();
                    return null == c || "" == c ? void window.open("/actualtime/", "_blank") : /^([a-zA-Z]|\d){2}\d{1,4}$/.test(c) ? void window.open("/actualtime/fno-" + c.toLowerCase() + "/", "_blank") : ($("#invalid_fltno").show(), void b[0].select())
                }),
                $("#search_by_addr").bind("click",
                function() {
                    var b, c = a($("#departCity").value()),
                    d = a($("#arriveCity").value());
                    b = "" == c && "" == d ? "": "" == d ? "depart-" + c + "/": "" == c ? "arrive-" + d + "/": [c, d].join("-") + "/",
                    window.open("/actualtime/" + b.toLowerCase(), "_blank")
                }),
                this.searchBox.find(".search-filter:eq(0) input[type=text]").bind("keydown",
                function(a) {
                    return b.keydownByCityInput(a)
                }),
                this.exchangeBtn.bind("click",
                function() {
                    online.exchangeCity($("#homeCity"), $("#destCity"))
                })
            }
        }
    }),
    online.create("service.public.ValidateService", {
        options: {
            submitBtn: online.$get("btnSearchFlight", !0) || $("#btnSearch")[0],
            scheduleBtn: $("#btnFlightSchedule")[0],
            msg: null,
            drpFlightWay: null,
            showWait: !0,
            mult: null,
            single: null,
            flight_multiple: $("#flight_multiple"),
            validateDomesticCity: [],
            callback: function() {}
        },
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a),
                this.errorNumber = 0,
                this.nowTime = window.NSTime || new Date,
                this.nextYearTime = function(a) {
                    return 1 === a.getMonth() && 29 === a.getDate() && a.setDate(28),
                    a.addYears(1).toDate()
                } (this.nowTime),
                this.submitBtn && (this.submitBtn.disabled = !1, this.submitBtn.style.display = ""),
                this.scheduleBtn && (this.scheduleBtn.disabled = !1, this.scheduleBtn.style.display = ""),
                this.errorObj = null,
                this.index = 0,
                this.second = 0,
                this.bindEvent()
            },
            isDomesticCity: function(a) {
                var b = new RegExp("\\|" + a.replace(/\(.+$/g, "") + "\\(");
                return flightintl_dest_cn ? b.test(flightintl_dest_cn) : !0
            },
            getFlightWay: function() {
                var a = this.drpFlightWay;
                return null != a ? "SELECT" == a[0].nodeName ? a.value().toLowerCase() : a.filter(":checked").value().toLowerCase() : "s"
            },
            addDomesticCity: function(a) { ! this.isDomesticCity(a) && this.validateDomesticCity.push("T")
            },
            dateValue: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate())
            },
            validateSingle: function(a, b) {
                var c = null,
                d = null,
                e = null,
                f = "",
                g = this.single;
                if (this.errorNumber = 0, this.errorObj = null, d = g.txtDCity, online.isNull(d)) return this.errorNumber = 9,
                this.errorObj = d,
                !1;
                if (e = g.dest_city_1, f = e.value, online.isNull(e)) return this.errorNumber = 11,
                this.errorObj = e,
                !1;
                if (d = $("#" + $(d).attr("mod_address_reference")).value(), e = $("#" + $(e).attr("mod_address_reference")).value(), d == e) return this.errorNumber = 12,
                this.errorObj = g.dest_city_1,
                !1;
                if (c = g.txtDDatePeriod1, online.isNull(c)) return this.errorNumber = 10,
                this.errorObj = c,
                !1;
                if (!c.value.isDate()) return this.errorNumber = 4,
                this.errorObj = c,
                !1;
                f = c.value.toDate();
                var h = $(c).data("MinDate");
                if (h = h ? h.toDate() : this.dateValue(this.nowTime), h > f) return this.errorNumber = 14,
                this.errorObj = c,
                !1;
                if (f > this.dateValue(this.nextYearTime)) return this.errorNumber = 6,
                this.errorObj = c,
                !1;
                var i = online.registerMod.searchBoxVals;
                if (i.flightintl_startdate_single = c.value, c = g.txtADatePeriod1, "d" == a) {
                    if (online.isNull(c) && null != this.drpFlightWay) b !== !0 && ("SELECT" == this.drpFlightWay[0].nodeName ? (this.drpFlightWay.value("S"), this.drpFlightWay[0].selectedIndex = 0) : this.drpFlightWay[0].checked = !0);
                    else {
                        if (!c.value.isDate()) return this.errorNumber = 4,
                        this.errorObj = c,
                        !1;
                        if (f = c.value.toDate(), f < g.txtDDatePeriod1.value.toDate()) return this.errorNumber = 13,
                        this.errorObj = c,
                        !1;
                        if (f > this.dateValue(this.nextYearTime)) return this.errorNumber = 6,
                        this.errorObj = c,
                        !1
                    }
                    i.flightintl_backdate_single = c.value
                }
                return this.flight_multiple.find("li:gt(0) input").attr("disabled", "disabled"),
                !0
            },
            validateMore: function() {
                var a = (this.getFlightWay(), null),
                b = null,
                c = null,
                d = "",
                e = this.mult;
                success = !1,
                prevDateVal = null,
                len = online.children(this.flight_multiple[0]).length,
                this.errorNumber = 0,
                this.errorObj = null,
                this.validateDomesticCity.length = 0;
                for (var f = 1; f <= len && (a = $("#" + $(e[0] + f).value())[0], b = $("#" + $(e[1] + f).value())[0], c = $("#" + $(e[2] + f).value())[0], this.index = f, d = b.value, !(f > 2 && online.isNull(b))); f++) {
                    if (online.isNull(b)) {
                        this.errorNumber = 0,
                        this.errorObj = b;
                        break
                    }
                    if (this.addDomesticCity(d), d = c.value, online.isNull(c)) {
                        this.errorNumber = 1,
                        this.errorObj = c;
                        break
                    }
                    if (d == b.value) {
                        this.errorNumber = 2,
                        this.errorObj = c;
                        break
                    }
                    if (this.addDomesticCity(d), online.isNull(a)) {
                        this.errorNumber = 3,
                        this.errorObj = a;
                        break
                    }
                    if (!a.value.isDate()) {
                        this.errorNumber = 4,
                        this.errorObj = a;
                        break
                    }
                    if (d = a.value.toDate(), 1 == f) {
                        var g = $(a).data("MinDate");
                        if (g = g ? g.toDate() : this.dateValue(this.nowTime), g > d) {
                            this.errorNumber = 5,
                            this.errorObj = a;
                            break
                        }
                    }
                    if (prevDateVal && d < prevDateVal) {
                        this.errorNumber = 7,
                        this.errorObj = a,
                        this.second = f - 1;
                        break
                    }
                    if (d > this.dateValue(this.nextYearTime)) {
                        this.errorNumber = 6,
                        this.errorObj = a;
                        break
                    }
                    prevDateVal = d,
                    this.errorObj = null
                }
                return ! this.errorObj && 0 == this.validateDomesticCity.length && (this.errorNumber = 8, this.errorObj = $("#" + $(e[2] + 1).value())[0]),
                this.errorObj || (success = !0),
                success
            },
            getValidate: function(a) {
                var b = this.getFlightWay(),
                c = this.msg;
                if (! ("m" == b ? this.validateMore() : this.validateSingle(b, a)) && this.errorObj) return online.registerMod.validate(this.errorObj, c.ERROR_FLIGHT[this.errorNumber].replace(/{number}/, c.numberList[this.index - 1]).replace(/{second}/, c.numberList[this.second - 1])),
                !1;
                if (a) return ! 0;
                var d = this;
                if (this.submitBtn && (setTimeout(function() {
                    d.submitBtn.disabled = !0
                },
                25), setTimeout(function() {
                    d.submitBtn.disabled = !1
                },
                2e3)), this.scheduleBtn && (setTimeout(function() {
                    d.scheduleBtn.disabled = !0
                },
                25), setTimeout(function() {
                    d.scheduleBtn.disabled = !1
                },
                2e3)), this.callback.call(this), "m" == b) for (var e = this.flight_multiple.find("li"), f = "", g = 1; g < e.length; g++) $(e[g]).find("input").each(function(a) {
                    f = a.attr("mod_save_id"),
                    f && online.registerMod.clearSearchBoxVals(f)
                });
                return $("#hdIsRequery").value("T"),
                this.showWait && setTimeout(function() {
                    this.pageShowWindow()
                }.bind(this), 1),
                !0
            },
            pageShowWindow: function() {
                if (0 != $("#maskshowdiv").length) {
                    var a = null,
                    b = "",
                    c = this.mult,
                    d = this.msg,
                    e = this.single,
                    f = this.getFlightWay();
                    d.MASK = d.MASK ? d.MASK: ["\u51fa\u53d1\u7684", "\u591a\u7a0b(\u542b\u7f3a\u53e3\u7a0b)", " \u822a\u73ed", "\u7684", " \u5f80\u8fd4 ", " \u5355\u7a0b ", " \u822a\u73ed ", "\u4ece", "\u5230", "\u51fa\u53d1\u65e5\u671f", "\u8ba2\u7968\u6570\u91cf", "\u8fd4\u56de\u65e5\u671f"],
                    "m" == f ? (a = $("#" + $(c[0] + "1").value()).value(), b = d.MASK[7] + " <strong style='color:#E56700'>" + $("#" + $(c[1] + "1").value()).value() + "</strong> " + d.MASK[0] + " <strong style='color:#E56700'>" + d.MASK[1] + "</strong> " + d.MASK[2]) : (a = e.txtDDatePeriod1.value, b = d.MASK[7] + " <strong style='color:#E56700'>" + e.txtDCity.value + "</strong> " + d.MASK[8] + " <strong style='color:#E56700'>" + e.dest_city_1.value + "</strong> " + d.MASK[3] + " <strong style='color:#E56700'>" + ("d" == f ? d.MASK[4] : d.MASK[5]) + "</strong> " + d.MASK[6]);
                    var g = online.$get("txtADatePeriod1", !0) || online.$get("txtADatePeriod1") || $("#ADate")[0],
                    h = $("#ctl00_MainContentPlaceHolder_drpQuantity").value() || $("#ctl00_MainContentPlaceHolder_QuickSearchControl_drpQuantity").value() || $("#Quantity").value();
                    $("#alterContent").html(b),
                    $("#DTimeContent").html(d.MASK[9] + ":<strong style='color:#E56700'>" + a.toDate().toFormatString("yyyy-MM-dd") + "</strong>"),
                    $("#tictekQuantity").html(d.MASK[10] + ":<strong style='color:#E56700'>" + h + "</strong>"),
                    "d" == f && g && $("#ATimeContent").html(d.MASK[11] + ":<strong style='color:#E56700'>" + g.value.toDate().toFormatString("yyyy-MM-dd") + "</strong>"),
                    online.maskShow($("#maskshowdiv"), !0, {
                        color: "#FFF",
                        opacity: 1
                    })
                }
            },
            bindEvent: function() {}
        }
    }),
    online.create("service.public.SearchWaitService", {
        options: {
            WAIT_TIME: 10,
            TIPS_MESSAGER: "",
            WAIT_STATUS: "waitStatus"
        },
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a),
                this.waitStatus = $.storage.get(this.WAIT_STATUS) || 0
            },
            beforeClick: function() {
                if (null != this.waitStatus) {
                    var a = 1 * this.waitStatus || 0,
                    b = (new Date).getTime(),
                    c = Math.abs((b - a) / 1e3);
                    if (c < this.WAIT_TIME) return alert(this.TIPS_MESSAGER),
                    !1
                }
            },
            afterClick: function() {
                $.storage.set(this.WAIT_STATUS, (new Date).getTime())
            }
        }
    }),
    online.create("util.Multipass", {
        options: {
            template: '            <div class="s_item_cont" online_multipass_index="${index-1}">                <div class="s_item_voyage online_number">${index}</div>                <div class="s_item online_label">                    ${i18n.startCity}                    <input name="txtBeginAddress${index}" mod_address_date="fl_txtDatePeriod${index}" type="text" id="fl_txtBeginAddress${index}" mod_change_id="fl_txtEndAddress${index-1}" {{if index ==1}} mod_save_id="flightintl_startcity_single" mod_save_value="true"{{/if}} mod_address_source="{{if index==1}}start{{else}}dest{{/if}}" class="input_text" mod_address_focusnext="true" mod_notice_tip="\u4e2d\u6587/\u82f1\u6587/\u62fc\u97f3" mod_address_reference="fl_txtBeginCityCode${index}" mod="address|notice" mod_address_tpl="address" autocomplete="off" />                </div>                <div class="s_item2 online_label">                    ${i18n.startDate}                    <input name="txtDatePeriod${index}" type="text" id="fl_txtDatePeriod${index}" class="input_text" mod="calendar|notice"  {{if index ==1}}mod_save_value="true" mod_save_id="flightintl_startdate_single"{{/if}} mod_notice_tip="yyyy-mm-dd" mod_calendar_reference="fl_txtDatePeriod${index-1}" mod_calendar_focusnext="fl_txtDatePeriod${index+1}~fl_txtEndAddress${index}" autocomplete="off" />                </div>                <div class="s_item2 online_label">                    ${i18n.endCity}                    <input name="txtEndAddress${index}" mod_address_focusnext="true" type="text" id="fl_txtEndAddress${index}" class="input_text" {{if index ==1}} mod_save_value="true" mod_save_id="flightintl_arrivalcity_single"{{/if}} mod_notice_tip="\u4e2d\u6587/\u82f1\u6587/\u62fc\u97f3" mod_address_source="dest" mod_address_reference="fl_txtEndCityCode${index}" mod="address|notice" mod_address_tpl="address" mod_next_value="fl_txtBeginAddress${index+1}" autocomplete="off" />                </div>                <a class="s_item_del del_line" href="javascript:void(0);" style="{{if index<=2}}display:none{{/if}}" data-ubt-key="DeleteSequence"></a>                <input name="txtBeginCityCode${index}" type="hidden" id="fl_txtBeginCityCode${index}" value="">                <input name="txtEndCityCode${index}" type="hidden" id="fl_txtEndCityCode${index}" value="">            </div>',
            i18n: {
                big5: {
                    startCity: "\u51fa\u767c\u57ce\u5e02",
                    endCity: "\u5230\u9054\u57ce\u5e02",
                    startDate: "\u51fa\u767c\u65e5\u671f"
                },
                gb2312: {
                    startCity: "\u51fa\u53d1\u57ce\u5e02",
                    endCity: "\u5230\u8fbe\u57ce\u5e02",
                    startDate: "\u51fa\u53d1\u65e5\u671f"
                }
            },
            target: $("#fl_flight_multiple"),
            container: $("#fl_multiple_div"),
            addTarget: $("#fl_add_new_line"),
            vals: online.registerMod ? online.registerMod.searchBoxVals: "",
            needEffect: !0,
            max: 6,
            min: 3,
            defaultValue: {},
            removeCallback: function() {},
            addCallback: function() {}
        },
        methods: {
            initialize: function(a) {
                if (this.info(), this.extend(this, a), this.target && !(this.target.length <= 0)) {
                    this.i18n = this.i18n[online.charset],
                    this.currentIndex = 0,
                    online.extend(this.vals, this.defaultValue);
                    var b = online.children(this.target[0]).length;
                    if (this.index = b, b < this.min) {
                        for (var c = this.min - b,
                        d = "",
                        e = 0; c > e; e++) d += this.render();
                        online.insertHtml("beforeend", this.target[0], d),
                        online.registerMod.registerAll(this.target.find("[mod]"))
                    }
                    this.index >= this.max && (this.addTarget[0].style.display = "none"),
                    this.vals.moreflightMin = this.index,
                    this.bindEvent()
                }
            },
            opacity: {
                set: function(a, b) {
                    var c = a.style;
                    $.browser.isIE ? (c.filter = (c.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (1 == b ? "": "alpha(opacity=" + 100 * b + ")"), c.zoom = 1) : "number" == $.type(b) ? c.opacity = b: c.opacity = 0
                },
                get: function(a) {
                    var b = a.currentStyle ? a.currentStyle: window.getComputedStyle(a, null),
                    c = 1;
                    if ($.browser.isIE) {
                        var d = b.filter;
                        c = d && d.indexOf("opacity=") >= 0 ? parseFloat(d.match(/opacity=([^)]*)/)[1]) / 100 : 1
                    } else c = b.opacity;
                    return c *= 1
                }
            },
            render: function() {
                var a = {
                    index: ++this.index,
                    i18n: this.i18n
                };
                return this.index >= this.max && (this.addTarget[0].style.display = "none"),
                $.tmpl.render(this.template, a)
            },
            add: function() {
                if (! (this.index >= this.max)) {
                    online.insertHtml("beforeend", this.target[0], this.render());
                    var a = online.last(this.target[0]);
                    if (a) {
                        if (a.style.display = "", this.needEffect) {
                            a.style.background = "#E8F4FF";
                            var b = 0,
                            c = this;
                            this.opacity.set(a, b),
                            function() {
                                b += .1,
                                1 > b ? (c.opacity.set(a, b), setTimeout(arguments.callee, 20)) : (a.style.background = "none", online.registerMod.registerAll($(a).find("[mod]")), c.vals.moreflightMin = c.index)
                            } ()
                        } else online.registerMod.registerAll($(a).find("[mod]")),
                        this.vals.moreflightMin = this.index;
                        this.addCallback.call(this, $(a))
                    }
                }
            },
            remove: function(a) {
                var b = online.parent(a);
                if (b.style.background = "#E8F4FF", this.currentIndex = 0 | b.getAttribute("online_multipass_index"), this.removeCallback.call(this, $(b)), this.needEffect === !1) return $(b).remove(),
                void this.update();
                var c = 1,
                d = this; !
                function() {
                    if (c -= .1, c > .1) d.opacity.set(b, c),
                    setTimeout(arguments.callee, 10);
                    else {
                        var a = "";
                        $(b).find("input").each(function(b) {
                            a = b.attr("mod_save_id"),
                            a && online.registerMod.clearSearchBoxVals(a)
                        }),
                        $(b).remove(),
                        d.update()
                    }
                } ()
            },
            update: function() {--this.index,
                this.vals.moreflightMin = this.index,
                this.index <= this.max && this.addTarget.show();
                for (var a = online.children(this.target[0]), b = "", c = "", d = this, e = "", f = this.currentIndex, g = a.length; g > f; f++) $(a[f]).find(".line_num em:eq(0)").html(f + 1),
                $(a[f]).find(".online_number:eq(0)").html(f + 1),
                $(a[f]).attr("online_multipass_index", f),
                $(a[f]).find("input").each(function(a) {
                    a[0].id = a[0].id.replace(/\d+$/, f + 1),
                    a[0].name = a[0].name.replace(/\d+$/, f + 1),
                    b = a.attr("mod_address_reference"),
                    b && a.attr("mod_address_reference", b.replace(/\d+$/g, f + 1)),
                    b = a.attr("mod_calendar_reference"),
                    b && a.attr("mod_calendar_reference", b.replace(/\d+$/, f)),
                    (a.attr("mod") && null != a.attr("mod").match("calendar") || null != a.getMod("calendar")) && (b && (c = $("#" + a.attr("mod_calendar_reference")).value().trim(), c.isDate() && a.data("minDate", c)), b = a.attr("mod_calendar_focusnext"), b && (b = b.split("~"), b[0] = b[0].replace(/\d+$/, f + 2), b.length > 1 && "1" != b[1] && (b[1] = b[1].replace(/\d+$/, f + 1)), a.attr("mod_calendar_focusnext", b.join("~")))),
                    b = a.attr("mod_next_value"),
                    b && a.attr("mod_next_value", b.replace(/\d+$/, f + 2)),
                    b = a.attr("mod_change_id"),
                    b && a.attr("mod_change_id", b.replace(/\d+$/, f)),
                    b = a.attr("mod_save_id"),
                    b && (e = d.vals[b], online.registerMod.clearSearchBoxVals(b), b = b.replace(/\d+$/, f + 1), d.vals[b] = e, a.attr("mod_save_id", b))
                })
            },
            bindEvent: function() {
                var a = this;
                this.target.bind("mousedown",
                function(b) {
                    var c = b.target;
                    $(c).hasClass("del_line") && setTimeout(function() {
                        a.remove(c)
                    },
                    10)
                }),
                this.addTarget.bind("click",
                function(b) {
                    b.stop(),
                    a.add()
                })
            }
        }
    }),
    online.config.airline = function(a, b) {
        var c = {
            message: {
                filterResult: "\u652f\u6301\u2191\u2193\u9009\u62e9\uff0c\u6309\u82f1\u6587\u6392\u5e8f"
            },
            template: {
                suggestionInit: function(a) {
                    var c = a.find("a[data]");
                    c.bind("mouseover",
                    function() {
                        $(this).addClass("hover")
                    }).bind("mouseout",
                    function() {
                        $(this).removeClass("hover")
                    }),
                    $(b.modElement).bind("blur",
                    function() {
                        a.hide()
                    }).bind("focus",
                    function() {
                        a.show()
                    }).bind("keyup",
                    function(a) {
                        var b = a.target,
                        c = online.$get("btnSearchFlight"),
                        d = isNaN(a.keyCode) ? a.charCode: a.keyCode;
                        13 == d && "txtAirline" == b.id && c.focus()
                    })
                },
                suggestionIpad: '<a href="javascript:void(0)" class="ico_key" id="mini_c_address_keyboard">Keyboard</a><a href="javascript:void(0)" class="address_close" id="mini_c_address_close">close</a>',
                suggestion: '<div class="c_address_select"><div class="c_address_wrap">{ipad}<div class="c_address_hd">\u652f\u6301\u4e2d\u6587|\u4ee3\u7801\u641c\u7d22</div><div style="" class="c_address_list">{{enum(key,arr) data}}{{each arr}}<a href="javascript:;" title="${display}" data="${data}"><span>${rightDisplay}</span>${display}</a>{{/each}}{{/enum}}</div></div></div>',
                suggestionStyle: '				.c_address_hd { height: 24px; border-color: #2C7ECF; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color: #fff; line-height: 24px; text-align:center }				.c_address_bd { border-color: #999999; border-style: solid; border-width: 0 1px 1px; overflow: hidden; padding:10px; }				.c_address_select { width:232px; height:355px; font-family: Arial, Simsun; font-size: 12px; }				.c_address_wrap { width: 230px; height:405px; min-height: 305px; margin: 0; padding: 0 0 4px; border: 1px solid #969696; background:#fff; text-align: left; }				.c_address_hd { margin:-1px; }				.c_address_list { margin: 0; padding: 0; height:300px; }				.c_address_list span { float: right; font: 10px/22px verdana; margin: 0; overflow: hidden; padding: 0; text-align: right; white-space: nowrap; width: 110px; }				.c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: left; text-decoration: none; }				.c_address_list a.hover,.c_address_list a:hover { background: none repeat scroll 0 0 #E8F4FF; border-bottom: 1px solid #7F9DB9; border-top: 1px solid #7F9DB9; }				.address_selected { background: none repeat scroll 0 0 #FFE6A6; color: #FFFFFF; height: 22px; }				.c_address_pagebreak { line-height: 25px; margin: 0; padding: 0; text-align: center; }				.c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }				a.address_current { color: #000; text-decoration: none; }				.c_address_select .ico_key, .c_address_select .ico_unkey{position: absolute;top: 1px;left: 1px;width: 34px;height: 24px;overflow: hidden;line-height: 999em;font-size: 0;content: "";background: url(//pic.c-ctrip.com/ctripOnPad/ico_key.png) no-repeat 0 0;-webkit-transform: scale(.7);}				.c_address_select .address_close {position: absolute;top: 3px;right: 4px;width: 18px;height: 19px;overflow: hidden;line-height: 999em;font-size: 0;content: "";text-indent: 99em;background: url(//pic.c-ctrip.com/ctripOnPad/pad_address_icon.png) no-repeat -32px 0;-webkit-transform: scale(0.5);}				.c_address_select .ico_unkey {background: url(//pic.c-ctrip.com/ctripOnPad/ico_unkey.png) no-repeat 0 0;}			',
                filterStyle: "				.c_address_hd { height: 24px; border-color: #2C7ECF; border-style: solid; border-width: 1px 1px 0; background-color: #67A1E2; color: #fff; line-height: 24px; padding-left: 10px; word-break: break-all; }				.c_address_bd { border-color: #999999; border-style: solid; border-width: 0 1px 1px; overflow: hidden; padding:10px; }				.c_address_select { width:232px; height:355px; font-family: Arial, Simsun; font-size: 12px; }				.c_address_wrap { width: 230px; height:349px; min-height: 305px; margin: 0; padding: 0 0 4px; border: 1px solid #969696; background:#fff; text-align: left; }				.c_address_hd { margin:-1px; }				.c_address_list { margin: 0; padding: 0; height:300px; }				.c_address_list label { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: center; }				.c_address_list span { float: right; font: 10px/22px verdana; margin: 0; overflow: hidden; padding: 0; text-align: right; white-space: nowrap; width: 110px; }				.c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; height: 22px; line-height: 22px; min-height: 22px; overflow: hidden; padding: 1px 9px 0; text-align: left; text-decoration: none; }				.c_address_list a.hover { background: none repeat scroll 0 0 #E8F4FF; border-bottom: 1px solid #7F9DB9; border-top: 1px solid #7F9DB9; }				.address_selected { background: none repeat scroll 0 0 #FFE6A6; color: #FFFFFF; height: 22px; }				.c_address_pagebreak { line-height: 25px; margin: 0; padding: 0; text-align: center; }				.c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }				a.address_current { color: #000; text-decoration: none; }			"
            }
        };
        return online.extend(c.template, {
            suggestionInitIpad: c.template.suggestionInit,
            suggestionIpad: c.template.suggestion.replace("{ipad}", c.template.suggestionIpad),
            suggestionStyleIpad: c.template.suggestionStyle,
            suggestion: c.template.suggestion.replace("{ipad}", "")
        }),
        c
    },
    online.config.address = function(a) {
        var b = {
            message: {
                filterResult: "${val}\uff0c\u6309\u5b57\u7b26\u987a\u5e8f\u6392\u5e8f",
                noFilterResult: " \u5bf9\u4e0d\u8d77\uff0c\u65e0\u5339\u914d\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u3002 "
            },
            template: {
                suggestion: '                <div class="c_address_box">                    <div class="c_address_hd"><a class="close" href="javascript:;" onmousedown="this.focus();">&times;</a>\u652f\u6301\u4e2d\u6587/\u62fc\u97f3/\u82f1\u6587\u8f93\u5165</div>                    <ol class="c_address_ol">                        {{enum(key) data}}                            <li><span>${key}</span></li>                        {{/enum}}                    </ol>                    {{enum(key,arr) data}}                        <ul class="c_address_ul">                            {{each arr}}                                <li><a data="${data}" href="javascript:void(0);">${display}</a></li>                            {{/each}}                        </ul>                    {{/enum}}						<ul class="c_country_ul" id="${hotCountrySuggestionId}" style="display:none;">						</ul>                </div>            ',
                suggestionStyle: "				.c_address_box { padding: 10px; width: 408px; border: 1px solid #999; background-color: #fff; }				.c_address_box .close { float: right; width: 20px; height: 20px; color: #666; text-align: center; font: bold 16px / 20px Simsun; }				.c_address_box .close:hover { color: #FFA800; text-decoration: none; }				.c_address_box .c_address_ol { margin-top: 0; margin-bottom: 6px; width: 100%; height: 22px; border-bottom: 2px solid #ccc; }				.c_address_box .c_address_ol li { position: relative; display: inline; float: left; margin-right: 2px; line-height: 22px; cursor: pointer; }				.c_address_box .c_address_ol li span { white-space: nowrap; display: block; padding: 0 8px; }				.c_address_box .c_address_ol .hot_selected { display: block; padding: 0 7px; margin-bottom: -2px; border-bottom: 2px solid #06c; color: #06c; font-weight: bold; }				.c_address_box .c_address_ul, .c_address_box .c_country_ul { display: inline-block; overflow: hidden; *zoom: 1; }				.c_address_box .c_address_ul li, .c_address_box .c_country_ul li{ float: left; height: 22px; overflow: hidden; width: 92px; }				.c_address_box .c_address_ul a, .c_address_box .c_country_ul a{ display: block; overflow: hidden; margin: 0 2px 2px 0; padding-left: 5px; height: 22px; color: #333; text-overflow: ellipsis; white-space: nowrap; line-height: 22px; }				.c_address_box .c_address_ul a:hover, .c_address_box .c_country_ul a:hover{ background-color: #2577E3; color: #fff; text-decoration: none; }				.c_address_hd, .c_address_hd_error { margin-bottom: 10px; color: #999; }				.c_address_select .c_address_hd, .c_address_select .c_address_hd_error { padding: 5px 10px; }				.c_address_box .c_country_ul{ width: 100%; border-top: 1px solid #ccc; margin-top: 5px; padding-top: 5px; }			",
                filterPageSize: 10,
                suggestionStyleIpad: '				.c_address_box {position:relative;width:435px !important;background-color:#FFFFFF;font-size:12px;}				.c_address_box a {text-decoration:none;}				.c_address_hd {padding-left:10px;padding-right:24px;height:24px;text-indent:32px;text-align:center;border-color:#2C7ECF;border-style:solid;border-width:1px 1px 0;background-color:#67A1E2;color:#CEE3FC;line-height:24px;}				.c_address_hd strong {color:#FFFFFF;}				.c_address_bd {overflow:hidden;padding:10px;border-color:#999999;border-style:solid;border-width:0 1px 1px;}				.c_address_ol {margin:0;padding:0 0 20px;border-bottom:1px solid #5DA9E2;}				.c_address_ol li {float:left;height:20px;color:#005DAA;list-style-type:none;text-align:center;line-height:20px;cursor:pointer;}				.c_address_ol li span {display:block;padding:0 8px;white-space:nowrap;}				.c_address_ol li .hot_selected {display:block;padding:0 7px;border-color:#5DA9E2;border-style:solid;border-width:1px 1px 0;background-color:#FFFFFF;color:#000000;font-weight:bold;}				.c_address_ul {margin:0;padding:4px 0 0;width:100%;}				.c_address_ul li {float:left;overflow:hidden;width:103px;height:24px;}				.c_address_ul li a {display:block;padding-left:5px;height:22px;border:1px solid #FFFFFF;color:#1148A8;line-height:22px;}				.c_address_ul li a:hover {border:1px solid #ACCCEF;background-color:#E8F4FF;text-decoration:none;}				.c_address_box .ico_key,				.c_address_box .ico_unkey {position:absolute;top:1px;left:1px;width:34px;height:24px;overflow:hidden;line-height:999em;font-size:0;content:"";background:url(//pic.c-ctrip.com/ctripOnPad/ico_key.png) no-repeat 0 0;-webkit-transform:scale(.7);}				.c_address_box .ico_unkey {background:url(//pic.c-ctrip.com/ctripOnPad/ico_unkey.png) no-repeat 0 0;}				.c_address_box .address_close  {position:absolute;top:3px;right:4px;width:18px;height:19px;overflow:hidden;line-height:999em;font-size:0;content:"";text-indent:99em;background:url(//pic.c-ctrip.com/ctripOnPad/pad_address_icon.png) no-repeat -32px 0;-webkit-transform:scale(0.5);}			',
                filter: '				<div class="c_address_select">					<div class="c_address_wrap">						<div class="{{if !hasResult}}c_address_hd_error{{else}}c_address_hd{{/if}}">{{if hasResult}}{{tmpl message.filterResult}}{{else}}{{tmpl message.noFilterResult}}{{/if}}</div>						{{if hasResult}}							<div class="c_address_list">								{{each (i,item) list}}									{{if cQuery.type(item)=="string"}}										<label>${item}</label>									{{else}}										<a href="javascript:void(0);" data="${data}" style="display: block;">{{tmpl data.split("|")[3] }}<span>${left}</span></a>									{{/if}}								{{/each}}							</div>							{{if page.max>0}}								<div class="c_address_pagebreak">									{{if page.current>0}}										<a href="javascript:void(0);" page="${page.current-1}">&lt;-</a>									{{/if}}									{{if page.current<2}}										{{loop(index) Math.min(5,page.max+1)}}											<a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>										{{/loop}}									{{else page.current>page.max-2}}										{{loop(index) Math.max(0,page.max-4),page.max+1}}											<a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>										{{/loop}}									{{else}}										{{loop(index) Math.max(0,page.current-2),Math.min(page.current+3,page.max+1)}}											<a href="javascript:void(0);"{{if page.current==index}} class="address_current"{{/if}} page="${index}">${index+1}</a>										{{/loop}}									{{/if}}									{{if page.current<page.max}}										<a href="javascript:void(0);" page="${page.current+1}">-&gt;</a>									{{/if}}								</div>							{{/if}}						{{/if}}					</div>				</div>			',
                filterStyle: "				.c_address_select { width:302px; font-family: Verdana, Arial; font-size: 12px; }				.c_address_wrap { width:300px; margin:0; padding:0 0 4px; border:1px solid #969696; background:#fff; text-align:left; }				.c_address_list { margin: 0; padding: 0; _height:370px; }				.c_address_list label { display: block; height:30px; padding:7px 9px 0; text-align: center; }				.c_address_list span { display:block; font: 10px/12px verdana; margin: 0; overflow: hidden; padding: 0; white-space: nowrap; color:#999; -webkit-text-size-adjust:none; }				.c_address_list a { border-bottom: 1px solid #FFFFFF; border-top: 1px solid #FFFFFF; color: #0055AA; cursor: pointer; display: block; height: 30px; line-height: 14px; min-height: 22px; overflow: hidden; padding:5px 9px 0; text-align: left; text-decoration: none; }				.c_address_list a.hover { background: none repeat scroll 0 0 #E8F4FF; border-bottom: 1px solid #7F9DB9; border-top: 1px solid #7F9DB9; }				.c_address_list b { color:#03459d; }				.address_selected { background: none repeat scroll 0 0 #FFE6A6; color: #FFFFFF; height: 22px; }				.c_address_pagebreak { line-height: 25px; margin: 0; padding: 0; text-align: center; }				.c_address_pagebreak a { color: #0055AA; display: inline-block; font-family: Arial, Simsun, sans-serif; font-size: 14px; margin: 0; padding: 0 4px; text-align: center; text-decoration: underline; width: 15px; }				a.address_current { color: #000; text-decoration: none; }"
            },
            jsonpFilter: (online.siteName || "/") + "international/tools/GetCities.ashx?s=${key}&a=" + ("start" == a[0].getAttribute("mod_address_source") ? "0": "1") + "&t=" + ("big5" == $.config("charset") ? "1": "0"),
            delay: 50
        };
        return online.extend(b.template, {
            filterIpad: b.template.filter,
            filterStyleIpad: b.template.filterStyle
        }),
        b
    };
    var addressFocusFlag = !0;
    online.create("util.RegisterMod", {
        options: {
            version: {
                address: "1.0",
                notice: "1.1",
                validate: "1.1",
                jmpInfo: "1.0",
                jmp: "1.0",
                calendar: "6.0",
                adFrame: "1.0",
                animate: "1.0",
                allyes: "1.0",
                tab: "1.2",
                sideBar: "2.0",
                emailPrompt: "1.0"
            },
            elements: $("[mod]"),
            charset: $.config("charset"),
            inits: {},
            jmpInfoTpl: {
                jmp_title: '<div class="jmp_hd"><h3 id="para1">${txt0}</h3></div><div id="para2" class="jmp_bd">${txt1}</div>',
                "#transit": '<div class="jmp_hd"><h3 id="txt0">${txt0}</h3></div><div class="jmp_bd"><div><span id="txt1" class="pubFlights_${txt3} airline">&nbsp;${txt1}</span> </div><div class="prindex_turn">\u8f6c<span></span></div><div><span id="txt2" class="pubFlights_${txt4} airline">&nbsp;${txt2}</span></div></div>'
            }
        },
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a);
                for (var b in this.version) this.inits[b] = {};
                this.saveStorage = "flightintl_searchBoxVals_poi_" + this.charset,
                $.storage.remove(this.saveStorage),
                this.searchBoxVals = {},
                this.lowPriceCache = {},
                this.loadData(),
                this.modElement = null
            },
            toLocalTime: function(a) {
                if (!a) return (new Date).toDate();
                var b = a.split("|");
                if (b.length < 2) return (new Date).toDate();
                var c = b[ - 1 != b[1].indexOf(")(") ? 5 : 4];
                return online.getLocalTime(c)
            },
            loadData: function() {
                this.cookies = $.parseJSON($.cookie.get("FlightIntl", "Search"));
                var a = this.cookies;
                if (a && !(a.length < 3)) {
                    var b = this.searchBoxVals;
                    b.multipleRound = 3 === a.length ? "S": "D",
                    b.flightintl_startcity_single = a[0],
                    b.flightintl_arrivalcity_single = a[1];
                    var c = a[2] || "";
                    if (c && c.isDate()) {
                        var d = a[3],
                        e = this.toLocalTime(a[0]);
                        if (c.toDate() < e && (d && d.isDate() && (a[3] = d = new Date((new Date).getTime() + (d.toDate() - c.toDate())).addDays(1).toFormatString("yyyy-MM-dd")), a[2] = c = (new Date).addDays(1).toFormatString("yyyy-MM-dd"), 5 === a.length)) for (var f = a[4].length; f--;) a[4][f][2] = "";
                        b.flightintl_startdate_single = c,
                        d && d.isDate() ? b.flightintl_backdate_single = d: (a[3] = "", delete b.flightintl_backdate_single)
                    } else a[2] = "",
                    "D" === b.multipleRound && (a[3] = ""),
                    delete b.flightintl_startdate_single,
                    delete b.flightintl_backdate_single
                }
            },
            clearNotice: function(a) {
                online.clearNotice($(a))
            },
            getFirstCityNameByIp: function(a, b) {
                if (a.length < 1 || a.value().trim().length > 0 || this.searchBoxVals.flightintl_startcity_single) return ! 1;
                var c = this;
                $.loader.jsonp(online.siteName + "international/tools/GetUserPosition.ashx?t=0", {
                    charset: online.charset,
                    onload: function(d) {
                        if ("" != d && -1 != d.indexOf("|") && d.length < 150) {
                            var e = a.attr("mod_save_id");
                            e && (c.searchBoxVals[e] = d);
                            var f = c.inits.address[a[0].id || a[0].name];
                            f && (addressFocusFlag = !1, f.method("select", d), $.cookie.set("FlightIntl", "Search", $.stringifyJSON([d]), {
                                path: "/",
                                domain: location.host.split(".").slice( - 2).join(".")
                            }), setTimeout(function() {
                                addressFocusFlag = !0,
                                f.method("focus", {
                                    isHidden: !0,
                                    isSelected: !0
                                })
                            },
                            200), b && b([d])),
                            online.clearNotice(a)
                        }
                    }
                })
            },
            saveSearchBoxVals: function() {},
            clearSearchBoxVals: function(a) {
                "undefined" != typeof this.searchBoxVals[a] && delete this.searchBoxVals[a]
            },
            getMod: function(a, b) {
                return $(a).getMod(b, this.version[b])
            },
            docRegisterJmpInfo: function() {
                if (!this.isRegisterJmp) {
                    this.isRegisterJmp = !0;
                    var a = this.version.jmp;
                    $.mod.load("jmp", a,
                    function() {
                        $(document).regMod("jmp", a, {})
                    })
                }
            },
            register: function(a) {
                var b = this,
                c = function() {
                    b.getValidate(),
                    a && a.apply(b, arguments),
                    b.registerAll()
                };
                return window.cQuery && window.cQuery.mod && window.cQuery.mod._mods && "address_poi" in window.cQuery.mod._mods ? c() : $LAB.script(jsList.mods || getUrl("mods.js")).wait(c),
                this
            },
            getResourceUrl: function(a) {
                var b, c = {
                    PRO: "//webresource.c-ctrip.com/code/cquery/resource/address/flightintl/",
                    FIL: window.resourceURL,
                    AIL: "AjaxRequest/SearchFlights/GetAirlineHandler.ashx"
                },
                d = a + "_gb2312.js",
                e = window.releaseNo || "?_=" + Math.random(),
                f = pageGlobal[a + "Abled"];
                return pageGlobal.IsOpenSearchAirlineVersionSwitch && "airline" == a ? c.AIL + e: ("nationality" != a && "airline" != a && "dest_poi_timezone" != a && "start_poi_timezone" != a && (f = !0), b = c[f ? "PRO": "FIL"] || c.PRO, b + d + e)
            },
            register_address: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    this.modElement = a;
                    var b = a.attr("focus_loader"),
                    c = this,
                    d = this.version.address,
                    e = "",
                    f = function(a) {
                        var b = a.attr("mod_address_source"),
                        f = a.attr("id") || a.attr("name"),
                        g = a.attr("mod_address_reference"),
                        h = a.attr("mod_save_id"),
                        i = a.attr("mod_address_focusnext"),
                        j = a.attr("mod_address_hide"),
                        k = a.attr("mod_save_value");
                        if ("Alliance" !== b) {
                            k = k && "true" == k.toLowerCase() ? !0 : !1;
                            var l = a.attr("mod_address_tpl") ? online.config[e = a.attr("mod_address_tpl")](a, this) : {},
                            m = "address" === e;
                            m && (b += "_poi_timezone");
                            var n = {
                                name: f,
                                jsonpSource: c.getResourceUrl(b),
                                isFocusNext: !1,
                                _isFocusNext: i && "true" == i ? !0 : "false" == i ? !1 : $("#" + i),
                                isAutoCorrect: !0,
                                offset: a.attr("mod_address_position") ? 1 * a.attr("mod_address_position") : 5,
                                sort: ["^0$", "^1$", "^3$", "^0", "^1", "^3", "0", "1", "3", "^4+$"],
                                message: {
                                    sort: ["", "", "", "", "", "", "", "", "", '"${val}" \u56fd\u5bb6\u540d\uff0c\u76f8\u5173\u57ce\u5e02']
                                }
                            },
                            o = function(a, b) {
                                var d = a.attr("mod_next_value") ? $("#" + a.attr("mod_next_value")) : [],
                                e = a.attr("mod_address_reference"),
                                f = m ? b: [a.value(), e ? $("#" + e).value() : ""].join("|");
                                a.attr("mod_change_value", f),
                                d.length > 0 && !online.isNull(a[0]) && (online.isNull(d[0]) || null == d.value().match(/\([a-zA-Z]+\)/)) && d.attr("mod_change_id", a.attr("id"));
                                var g = a.attr("mod_address_date");
                                if (null != g) {
                                    var h = $("#" + g);
                                    if (h.length > 0) if (b) {
                                        var i = c.toLocalTime(b),
                                        j = i,
                                        k = 1 * (g.match(/(\d+)$/) || [0]).pop();
                                        if (k > 1) {
                                            g = g.replace(/\d+$/, k - 1),
                                            2 === k && -1 != g.indexOf("txtDDate") && (g = g.replace("txtDDate", "txtDate"));
                                            var l = $("#" + g.replace(/\d+$/, k - 1));
                                            l.length > 0 && l.value().isDate() && j < l.value().toDate() && (j = l.value().toDate())
                                        }
                                        h.data("minDate", j.toStdDateString()),
                                        h.data("MinDate", i.toStdDateString())
                                    } else {
                                        h.removeData("MinDate"),
                                        j = (new Date).toDate();
                                        var k = 1 * (g.match(/(\d+)$/) || [0]).pop();
                                        if (k > 1) {
                                            g = g.replace(/\d+$/, k - 1),
                                            2 === k && -1 != g.indexOf("txtDDate") && (g = g.replace("txtDDate", "txtDate"));
                                            var l = $("#" + g);
                                            l.length > 0 && l.value().isDate() && (j = l.value().toDate())
                                        }
                                        h.data("minDate", j.toStdDateString())
                                    }
                                }
                            };
                            g && (n.relate = {
                                2 : "#" + g
                            }),
                            m && (n.source = online.getInitSuggestion(b), delete l.template.filter, delete l.template.filterStyle, delete l.template.filterIpad, delete l.template.filterStyleIpad, l.jsonpFilter = "/international/tools/poi.ashx?charset=utf-8&key=${key}&channel=1&mode=1&f=1&v=" + (pageGlobal.POIVersion || "1"), l.delay = 150, j && (n.hideType = {},
                            n.hideType[j] = 1)),
                            $.extend(n, l),
                            "true" === $("#hdn_IsIncludedNoBookingFlights").value().toLowerCase() && (delete n.jsonpSource, "gb2312" == online.charset ? n.source = {
                                data: "@China|\u4e2d\u56fd\u5927\u9646|CN@",
                                suggestion: {
                                    "": [{
                                        display: "\u4e2d\u56fd\u5927\u9646",
                                        data: "China|\u4e2d\u56fd\u5927\u9646|CN",
                                        rightDisplay: "China"
                                    }]
                                }
                            }: n.source = {
                                data: "@China|\u4e2d\u570b\u5927\u9678|CN@",
                                suggestion: {
                                    "": [{
                                        display: "\u4e2d\u570b\u5927\u9678",
                                        data: "China|\u4e2d\u570b\u5927\u9678|CN",
                                        rightDisplay: "China"
                                    }]
                                }
                            }),
                            $.mod.load(m ? "address_poi": "address", m ? "2.0": d,
                            function() {
                                if (c.inits.address[f] = a.regMod(m ? "address_poi": "address", m ? "2.0": d, n), c.inits.address[f].method("bind", "change",
                                function(a, b) {
                                    var d = m ? b.data: b.items;
                                    h && "undefined" != typeof d && (c.searchBoxVals[h] = d),
                                    o($(this), d),
                                    setTimeout(function() {
                                        this.blur()
                                    }.bind(this))
                                }), a.bind("focus",
                                function() {
                                    var a = $(this).attr("mod_change_id"),
                                    b = $("#" + a).attr("mod_change_value");
                                    if (online.isNull(this) && b) if (m) {
                                        addressFocusFlag = !1;
                                        var c = $(this).getMod("address_poi", "2.0");
                                        c.method("select", b),
                                        setTimeout(function() {
                                            c.method("focus", {
                                                isSelected: !0
                                            }),
                                            addressFocusFlag = !0
                                        },
                                        100)
                                    } else {
                                        b = b.split("|"),
                                        $(this).value(b[0]);
                                        var d = $(this).attr("mod_address_reference");
                                        d && $("#" + d).value(b[1])
                                    }
                                }), a.bind("blur",
                                function() {
                                    if (addressFocusFlag) {
                                        var a = null,
                                        b = n._isFocusNext;
                                        if (b || $.isCDom(b)) {
                                            if ($.isCDom(b)) a = b[0];
                                            else switch ($.type(b)) {
                                            case "string":
                                                a = $(b)[0];
                                                break;
                                            case "object":
                                                "focus" in b && (a = b);
                                                break;
                                            case "boolean":
                                                var c = this.form;
                                                if (c) for (var d = c.elements,
                                                e = 0,
                                                f = 0,
                                                g = d.length - 1; g > f; f++) {
                                                    if (e) {
                                                        var h = $(d[f]);
                                                        if ((d[f].offsetWidth || d[f].offsetHeight) && "none" !== h.css("display") && "hidden" !== h.css("visibility")) {
                                                            a = d[f];
                                                            break
                                                        }
                                                    }
                                                    d[f] == this && (e = 1)
                                                }
                                            }
                                            if (a && online.isNull(a) && !online.isNull(this)) try {
                                                a.focus()
                                            } catch(i) {} else this.blur()
                                        }
                                    }
                                }), m && c.inits.address[f].method("bind", "userinput",
                                function(a, b) {
                                    if ("keydown" === b.eventType || "blur" === b.eventType || "filterMousedown" === b.eventType) {
                                        var c = (b.target && b.target.getAttribute("log") || "|").split("|"),
                                        d = {
                                            input: b.value,
                                            use: b.autoCorrectValue,
                                            type: c[0],
                                            status: b.status,
                                            requestTime: b.requestTime,
                                            mode: "keydown" === b.eventType ? 1 : "filterMousedown" === b.eventType ? 0 : 2,
                                            menuname: c[1]
                                        };
                                        try {
                                            window.__bfi.push(["_tracklog", "fltintl.poi", $.tmpl.render("input=${input}&use=${use}&type=${type}&menuname=${menuname}&status=${status}&mode=${mode}&ServerRequestTime=${requestTime}", d)])
                                        } catch(a) {}
                                    }
                                }), k && h) {
                                    var b = c.searchBoxVals[h];
                                    if (b) {
                                        var e = ("" + b).split("|");
                                        m ? (3 === e.length && e.push((e[1].match(/\(([a-z]{3})\)/i) || ["SHA"]).pop()), $("#" + f).getMod("address_poi", "2.0").method("select", e.join("|"))) : (a.value(e[0]), g && $("#" + g).value(e[1])),
                                        online.clearNotice(a)
                                    }
                                }
                                o(a)
                            })
                        }
                    }.bind(this);
                    b ? a.bind("focus", f.bind(this, a)) : f(a)
                }
            },
            getValidate: function() {
                return this.validateObj || (this.validateObj = $(document).regMod("validate", this.version.validate))
            },
            validate: function(a, b, c) {
                a = $(a),
                a.length < 1 || this.validateObj.method("show", $.extend({
                    $obj: a,
                    data: b,
                    removeErrorClass: !0,
                    hideEvent: "blur",
                    isScroll: !1,
                    css: {
                        maxWidth: 350,
                        minWidth: 40
                    },
                    isFocus: !0
                },
                c))
            },
            registerAll: function(a) {
                for (var b, c, d, e = a || this.elements,
                f = [], g = 0, h = e.length; h > g; g++) if (b = e[g], b && (c = b.getAttribute("mod"))) {
                    f = c.split("|"),
                    d = [];
                    for (var i = 0,
                    j = f.length; j > i; i++) if ("function" == typeof this["register_" + f[i]]) try {
                        this["register_" + f[i]]($(b))
                    } catch(k) {} else d.push(f[i]);
                    0 == d.length ? b.removeAttribute("mod") : b.setAttribute("mod", d.join("|"))
                }
                this.docRegisterJmpInfo()
            },
            register_linklist2: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = a.attr("mod_linklist_id");
                    if ("undefined" != typeof window.c_linklist2 && b && (b = window.c_linklist2[b]) && b.constructor === Array) {
                        for (var c = [], d = '<a href="{$link}" rel="nofollow" title="{$text}" target="{$target}">{$text}</a>', e = 1; 6 >= e && "undefined" != typeof b[e]; e++) {
                            var f = b[e].split("|", 2);
                            b[e] = online.replaceWith(d, {
                                text: f[0],
                                link: f[1],
                                target: b[e].target || "_blank"
                            }),
                            c.push(b[e])
                        }
                        a.html(c.join(""))
                    }
                }
            },
            register_linklist: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = a.attr("mod_linklist_id");
                    if ("undefined" != typeof window.c_linklist2 && b && (b = window.c_linklist2[b]) && b.constructor === Array) {
                        for (var c = [], d = '<li><a href="{$link}" title="{$text}" target="_blank" data-ubt-key="ServicePost">&middot;{$text}</a></li>', e = 0; 7 > e && "undefined" != typeof b[e]; e++) {
                            var f = b[e].split("|", 2);
                            0 === e && (f[1] += "#ctm_ref=fli_hp_srvan_def_t_1"),
                            b[e] = online.replaceWith(d, {
                                text: f[0],
                                link: f[1]
                            }),
                            b[e] = b[e].replace("ServicePost", "ServicePost" + e),
                            0 === e && (b[e] = b[e].replace("<li>", '<li class="more">').replace("&middot;", "").replace(/\u76f8\u5173\u4fe1\u606f/g, "\u670d\u52a1\u516c\u544a").replace("ServicePost0", "MoreServicePost")),
                            c.push(b[e])
                        }
                        d = c.shift(),
                        c.push(d),
                        a.html(c.join(""))
                    }
                }
            },
            register_allyes: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = this.version.allyes;
                    $.mod.load("allyes", b,
                    function() {
                        a.regMod("allyes", b, {
                            mod_allyes_user: a.attr("mod_allyes_user")
                        })
                    })
                }
            },
            register_adFrame: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = this.version.adFrame;
                    $.mod.load("adFrame", b,
                    function() {
                        a.regMod("adFrame", b, {
                            mod_adframe_style: a.attr("mod_adframe_style"),
                            mod_adframe_src: a.attr("mod_adframe_src")
                        })
                    })
                }
            },
            register_notice: function(a) {
                if (a = $(a), !(a.length < 1 || null !== a.attr("_cqnotice"))) {
                    var b = a.attr("id") || a.attr("name") || $.uid(),
                    c = a.attr("mod_notice_tip") || online.msg && online.msg.NOTICE && online.msg.NOTICE[0] || "",
                    d = this.version.notice,
                    e = this;
                    $.mod.load("notice", d,
                    function() {
                        e.inits[b + "_notice"] = e.inits.notice[b] = a.regMod("notice", d, {
                            name: b,
                            tips: c,
                            selClass: "inputSel"
                        }).method("checkValue"),
                        e.clearNotice(a)
                    })
                }
            },
            getTableTips: function(a) {
                var b = {};
                return a = this.getAspByJmpInfo(a),
                b.txt0 = null != a ? a: {},
                b
            },
            getAspByJmpInfo: function(a) {
                if (!a) return null;
                if (a = "string" != typeof a ? a.getAttribute("mod_jmpinfo_page") : a, -1 !== a.indexOf("?") && (a = a.match(/=(\w+)/), null !== a)) {
                    a = a[1];
                    try {
                        if (a && $$.module.jmpInfo.array.CraftType) {
                            var b = {},
                            c = $$.module.jmpInfo.array.CraftType.match(new RegExp("@(" + a + "\\|[^@]*\\|[^@]*\\|\\d*\\|\\d*)@", "i"));
                            if (!c || null == c) return ! 1;
                            c = c[1].split("|");
                            for (var d = 0,
                            e = c.length; e > d; d++) b["txt" + d] = c[d];
                            return b
                        }
                    } catch(f) {}
                }
                return null
            },
            register_jmpInfo: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = this.version.jmpInfo,
                    c = this;
                    "jmp_table" == a.attr("mod_jmpinfo_type") && arguments.length <= 1 || $.mod.load("jmp", b,
                    function() {
                        var d = {},
                        e = -1 != a.attr("mod_jmpinfo_content").indexOf("|") ? a.attr("mod_jmpinfo_content").split("|") : a.attr("mod_jmpinfo_content"),
                        f = {};
                        if (e && "object" == typeof e) for (var g = 0,
                        h = e.length; h > g; g++) f["txt" + g] = e[g];
                        else f.txt0 = e || "";
                        if (a.attr("mod_jmpinfo_type")) {
                            var i = a.attr("mod_jmpinfo_type");
                            d = {
                                type: i,
                                template: "#" + i,
                                classNames: {
                                    boxType: i
                                }
                            }
                        } else d = {
                            template: "$jmp_title",
                            type: "jmp_title",
                            classNames: {
                                boxType: "jmp_title"
                            },
                            templs: {
                                tipTempl: ['<div id=${id} class=${tip} group=${group} style="visibility:hidden;display:block;z-index:99;margin:0;left:-9999px;top:-9999px;overflow:hidden;position:absolute;width:320px;"><div id="tuna_jmpinfo">', '<div class="${box} ${boxType} ${boxArrow}">', '<b class="${arrow}"></b>', '<div class="${loading}">${loadingImg}</div>', "<div class=${content}></div>", "</div>", "</div>", "</div>"].join(""),
                                jmp_title: c.jmpInfoTpl[a.attr("mod_jmpinfo_page")]
                            }
                        };
                        if (a.attr("mod_jmpinfo_ajax")) d.dataUrl = "",
                        d.css = {
                            maxWidth: "300"
                        },
                        d.url = online.ajaxUrl[a.attr("mod_jmpinfo_ajax") + "AjaxUrl"],
                        d.url += -1 != d.url.indexOf("?") ? "&" + a.attr("param") : "?" + a.attr("param");
                        else {
                            var j = c.getAspByJmpInfo(a[0]);
                            j && null != j && (f.txt0 = j, d.css = {
                                maxWidth: "490"
                            }),
                            d.content = f
                        }
                        d.boundaryShow = !1,
                        d.position = a.attr("mod_jmpinfo_position") || "leftMiddle-leftTop",
                        a.regMod("jmp", b, {
                            options: d
                        })
                    })
                }
            },
            _calendar_auto_focus: function(a, b, c, d) {
                if (c && (this.searchBoxVals[c] = b), d) try {
                    a.calendarInstance.method("setWeek")
                } catch(e) {}
                var f = next = $(a).attr("mod_calendar_focusnext");
                if (!next) return void setTimeout(function() {
                    try {
                        $(a)[0].blur()
                    } catch(b) {}
                });
                var g, h = 0;
                if ( - 1 != next.indexOf("~") ? (next = next.split("~"), h = next.length, g = document.getElementById(next[0])) : g = document.getElementById(next), $(g).length > 0) {
                    b = b && b.isDate() ? b.toDate() : (new Date).toDate();
                    var i = $(g).data("MinDate");
                    if (i) i = i.toDate(),
                    null !== i && i > b && (b = i);
                    else if (!f.match(/_\d+$/)) {
                        var j = this.toLocalTime(this.searchBoxVals.flightintl_arrivalcity_single);
                        j > b && (b = j)
                    }
                    $(g).data("minDate", b.toStdDateString())
                }
                if (h > 1) if (g = "1" != next[1] ? document.getElementById(next[1]) : g, g && online.isNull(g) && (g.offsetHeight > 0 || $(g).parents("li").length > 0 && "none" != $($(g).parents("li")[0]).css("display"))) try {
                    g.focus()
                } catch(e) {} else setTimeout(function() {
                    try {
                        $(a)[0].blur()
                    } catch(b) {}
                })
            },
            register_calendar: function(a, b) {
                if (a = $(a), !(a.length < 1)) {
                    var c = this.version.calendar,
                    d = this,
                    e = a.attr("mod_save_value"),
                    f = a.attr("mod_save_id"),
                    g = a.attr("mod_calendar_reference"),
                    h = a[0].id || "";
                    e = e && "true" === e.toLowerCase(),
                    $.mod.load("calendar", c,
                    function() {
                        var i = {
                            autoShow: !1,
                            showWeek: !0,
                            maxDate: function() {
                                var a = new Date;
                                return 1 === a.getMonth() && 29 === a.getDate() && a.setDate(28),
                                a.addYears(1).toStdDateString()
                            } ()
                        },
                        j = {
                            onChange: function(a, b) {
                                d._calendar_auto_focus(a, b, f)
                            }
                        };
                        g && (i.reference = "#" + g),
                        online.extend(i, b || {}),
                        online.extend(j, b ? b.listeners: {}),
                        a.bind("blur",
                        function() {
                            d._calendar_auto_focus(this, $(this).value(), f, !0)
                        });
                        var k = {
                            options: i,
                            listeners: j
                        };
                        if ((pageGlobal.IsNewCalendarSwitchOpen || pageGlobal.Calendar) && ("DDate" === h && (i.refType = "end", i.reference = "#ADate", k.listeners.onBerforeShow = function() {
                            delete this.lowPrice,
                            this._layout.find(".remarks").hide();
                            var a = d.searchBoxVals.flightintl_startcity_single,
                            b = d.searchBoxVals.flightintl_arrivalcity_single;
                            if ("S" === d.searchBoxVals.multipleRound && a && b && "1" === $("#Quantity").value() && "0" === $("#ChildQuantity").value() && "0" === $("#InfantQuantity").value()) {
                                var c = (a + "").split("|"),
                                e = (b + "").split("|"),
                                f = c[3] + "_" + e[3];
                                if ("undefined" != typeof d.lowPriceCache[f]) return this.lowPrice = d.lowPriceCache[f],
                                void(null !== this.lowPrice && this._layout.find(".remarks").show());
                                if (!this.isLoad) {
                                    this.isLoad = !0;
                                    var g = this;
                                    $.ajax(online.getBaseUrl("AjaxRequest/AsyncResult/GetRecommendFlight.ashx"), {
                                        context: {
                                            QueryData: {
                                                FlightWay: "S",
                                                SegmentList: [{
                                                    DCityCode: c[3],
                                                    ACityCode: e[3],
                                                    DCity: a,
                                                    ACity: b,
                                                    DepartDate: (new Date).toFormatString("yyyy-MM-dd")
                                                }],
                                                LowPrice: 1
                                            }
                                        },
                                        method: "POST",
                                        onsuccess: function(a, b) {
                                            g.isLoad = !1,
                                            d.lowPriceCache[f] = b = ($.parseJSON(b) || {}).HomeLowPrice || null,
                                            null !== b && (g.lowPrice = b, g._layout.find(".remarks").show(), g.update())
                                        },
                                        onerror: function() {
                                            g.isLoad = !1
                                        }
                                    })
                                }
                            }
                        }), i.newVersion = 1, online.extend(k, {
                            classNames: {
                                hoverRange: "date-range",
                                range: "selected-range",
                                cn: "date-cn",
                                nothismonth: "disabled",
                                select: "selected",
                                blankdate: "disabled",
                                festival_select: "selected",
                                disable: "disable"
                            },
                            string: {
                                title: "<span>yyyy</span>\u5e74<strong>m</strong>\u6708"
                            },
                            festival: {
                                "2016-12-31": ["c_xiu", ""],
                                "2017-01-01": ["c_xiu", "\u5143\u65e6", "c_yuandan"],
                                "2017-01-02": ["c_xiu", ""],
                                "2017-01-22": ["c_ban", ""],
                                "2017-01-27": ["c_xiu", "\u9664\u5915", "c_chuxi"],
                                "2017-01-28": ["c_xiu", "\u6625\u8282", "c_chunjie"],
                                "2017-01-29": ["c_xiu", ""],
                                "2017-01-30": ["c_xiu", ""],
                                "2017-01-31": ["c_xiu", ""],
                                "2017-02-01": ["c_xiu", ""],
                                "2017-02-02": ["c_xiu", ""],
                                "2017-02-04": ["c_ban", ""],
                                "2017-04-01": ["c_ban", ""],
                                "2017-04-02": ["c_xiu", ""],
                                "2017-04-03": ["c_xiu", ""],
                                "2017-04-04": ["c_xiu", "\u6e05\u660e", "c_qingming"],
                                "2017-04-29": ["c_xiu", ""],
                                "2017-04-30": ["c_xiu", ""],
                                "2017-05-01": ["c_xiu", "\u4e94\u4e00", "c_wuyi"],
                                "2017-05-27": ["c_ban", ""],
                                "2017-05-28": ["c_xiu", ""],
                                "2017-05-29": ["c_xiu", ""],
                                "2017-05-30": ["c_xiu", "\u7aef\u5348", "c_duanwu"],
                                "2017-09-30": ["c_ban", ""],
                                "2017-10-01": ["c_xiu", "\u56fd\u5e86", "c_guoqing"],
                                "2017-10-02": ["c_xiu", ""],
                                "2017-10-03": ["c_xiu", ""],
                                "2017-10-04": ["c_xiu", "\u4e2d\u79cb", "c_zhongqiu"],
                                "2017-10-05": ["c_xiu", ""],
                                "2017-10-06": ["c_xiu", ""],
                                "2017-10-07": ["c_xiu", ""],
                                "2017-10-08": ["c_xiu", ""]
                            },
                            template: {
                                styles: ".icon{overflow: hidden; background: url(//pic.c-ctrip.com/fltdomestic111027/un_index_20141201.png?20160310) no-repeat;}.new-calendar{ font-family: \"microsoft yahei\",arial,sans-serif; position: relative; background:#eaefef; border-radius: 3px; box-shadow:0 0 8px #666; width: 780px; max-height: 340px; overflow: hidden; padding: 5px 5px 10px;}.new-calendar .months-area{height: 321px; overflow: hidden;}.new-calendar .remarks{ color: #666; margin: 5px 5px 0;}.new-calendar .prev-ico{position: absolute; left:10px; top: 15px; height: 25px; width: 25px; background-position: -256px -537px;}.new-calendar .prev-ico:hover{cursor:pointer; background-position: -312px -537px;}.new-calendar .un-prev-ico,.new-calendar .prev-ico.disable{position: absolute; left:10px; top: 15px; height: 25px; width: 25px; background-position: -200px -537px;}.new-calendar .next-ico{position: absolute; right:10px; top: 15px; height: 25px; width: 25px; background-position: -285px -537px;}.new-calendar .next-ico:hover{cursor:pointer; background-position: -341px -537px;}.new-calendar .un-next-ico,.new-calendar .next-ico.disable{position: absolute; right:10px; top: 15px; height: 25px; width: 25px; background-position: -229px -537px;}.new-calendar .month{float: left; width: 380px; padding: 10px 5px 0; overflow: hidden;}.new-calendar .month .week-tit{ font-size: 14px; margin-bottom: 8px;}.new-calendar .month .week-tit span{ display: inline-block; color: #666; width: 52px; border-right: 2px solid transparent; text-align: center;}.new-calendar .month .week-tit span.last{border-right: none;}.new-calendar .month .week-tit .weekend{ color: #f90;}.new-calendar .month .short-date{ font-size: 14px; margin:5px 0 10px; text-align: center; color: #666; }.new-calendar .month .short-date span, .new-calendar .month .short-date strong{ margin: auto 3px; font-family: 'tahoma';}.new-calendar .month .short-date strong{color: black;}.new-calendar .month table{ border-collapse: separate; border-spacing: 1px;}.new-calendar .month table tr td{ background: white; border-radius: 3px; transition: all 0.1s;}.new-calendar .month table tr td .ctrl-pos{position:relative; width: 53px; height: 40px; }.new-calendar .month table tr td:hover,.new-calendar .month table tr td.hover{ background: #549fff; color: white; transition: all 0.1s; cursor: pointer;}.new-calendar .month table tr td.selected{ background: #549fff !important; color: white !important;}.new-calendar .month table tr td.selected-range{ background: #b4d5ff; color: white; transition: all 0.1s; cursor: pointer;}.new-calendar .month table tr td.selected .price,.new-calendar .month table tr td.selected .tip1,.new-calendar .month table tr td.selected .tip2,.new-calendar .month table tr td.selected-range .price,.new-calendar .month table tr td.selected-range .tip1,.new-calendar .month table tr td.selected-range .tip2,.new-calendar .month table tr td.hover .price,.new-calendar .month table tr td.hover .tip1,.new-calendar .month table tr td.hover .tip2,.new-calendar .month table tr td.lowest.hover .price{ color: white;}.new-calendar .month table tr td.lowest.selected-range .price{ color: white;}.new-calendar .month table tr td.lowest.selected .price{ color: white;}.new-calendar .month table tr td.lowest .price{ color: #bb0b00;}.new-calendar .month table tr td.disabled{ color: #bbb;}.new-calendar .month table tr td.disabled:hover, .new-calendar .month table tr td.none:hover{ cursor: default; background: white;}.new-calendar .month table .date{ position: absolute; left: 3px; top: 0; font-family: -apple-system, arial, 'simsun'; font-size: 12px;}.new-calendar .month table .date strong{ font-size: 14px; }.new-calendar .month table .tip1, .new-calendar .month table .tip2{ position: absolute; right: 2px; top: 2px; color: white; width:14px; height: 14px; text-align: center; line-height: 13px; border-radius: 2px; }.new-calendar .month table .tip1{ color: #91bbf1; font-family: -apple-system, arial, 'simsun'; }.new-calendar .month table .tip2{ color: #d6dbe1; font-family: -apple-system, arial, 'simsun'; }.new-calendar .month table .price{ position: absolute; right: 5px; bottom: 0px; color: #91aebf; }",
                                wrapper: '<div class="new-calendar"><div><div class="icon prev-ico" data-bind="prev"></div><div class="icon next-ico" data-bind="next"></div></div><div id="${uid}" class="months-area"></div><div style="clear:both;"></div><div class="remarks" style="display:none;"><span>\u5f53\u524d\u663e\u793a\u7684\u4ef7\u683c\u4e3a\u542b\u7a0e\u4ef7\u3002\u56e0\u7968\u4ef7\u53d8\u52a8\u9891\u7e41\uff0c\u8bf7\u4ee5\u5b9e\u65f6\u67e5\u8be2\u62a5\u4ef7\u4e3a\u51c6\u3002</span></div></div>',
                                calendar: '<div class="month${monthclass}"><div class="short-date">${title}</div><div class="week-tit"><span class="weekend">\u65e5</span><span>\u4e00</span><span>\u4e8c</span><span>\u4e09</span><span>\u56db</span><span>\u4e94</span><span class="weekend last">\u516d</span></div><table><tbody><tr>{{each (i,val,max) data}}<td ${classes}><div class="ctrl-pos" ${attr}><div class="date" ${attr}>{{if val.text}}${val.text}{{else}}<strong ${attr}>${day}</strong>{{/if}}</div>{{if val.tip}}<div class="${val.tip}" ${attr}>{{if val.tip === "tip1"}}\u4f11{{else}}\u73ed{{/if}}</div>{{/if}}{{if val.price !== ""}}<div class="price" ${attr}><dfn ${attr}>&yen;</dfn>${val.price}</div>{{/if}}</div></td>{{if (i+1)%7==0 && (i+1) != max}}</tr><tr>{{/if}}{{/each}}</tr></tbody></table></div>'
                            }
                        }), /^DDate_\d+/.test(h) && (k.listeners.onBerforeShow = function() {
                            var a = $("body").offset().width,
                            b = this.target.offset();
                            this.setting.options.offset.left = 0,
                            b.left + 780 > a && (a -= b.left + 800, -560 > a && (a = -560), this.setting.options.offset.left = a)
                        })), d.inits.calendar[h] = a[0].calendarInstance = a.regMod("calendar", c, k), e && f) {
                            var l = d.searchBoxVals[f],
                            m = d.searchBoxVals.flightintl_startdate_single || d.searchBoxVals.flightintl_startdate_single1,
                            n = d.toLocalTime(d.searchBoxVals.flightintl_startcity_single);
                            l && m && m.toDate() >= n && a.value(l)
                        }
                        if (i.showWeek && a.value() && a[0].calendarInstance.method("setWeek"), i.reference && "end" !== i.refType && $(i.reference).value().trim().isDate()) {
                            var o = $(i.reference).value();
                            if ("flightintl_backdate_single" === f) {
                                var p = d.toLocalTime(d.searchBoxVals.flightintl_arrivalcity_single);
                                o.toDate() < p && (o = p.toStdDateString())
                            }
                            a.data("minDate", o)
                        }
                        d.clearNotice(a)
                    })
                }
            },
            register_tab: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = this.version.tab;
                    $.mod.load("tab", b,
                    function() {
                        $(a).regMod("tab", b, {
                            options: {
                                index: a.attr("mod_tab_index") || 0,
                                tab: online.first(a[0]).tagName.toLowerCase(),
                                panel: a.attr("mod_tab_panel"),
                                save: !0
                            },
                            style: {
                                tab: a.attr("mod_tab_check_class") || "sales_current",
                                panel: a.attr("mod_tab_class") || {
                                    display: ["", "none"]
                                }
                            }
                        })
                    })
                }
            },
            register_sideBar: function() {
                var a = this;
                $.mod.load("sideBar", this.version.sideBar,
                function() {
                    var b = "http://livechat.ctrip.com/livechat/Login.aspx?",
                    c = {
                        GroupCode: "FltIntlBookLocal",
                        exInfo: "1110|kefu",
                        version: "2.0"
                    },
                    d = pageGlobal.OrderId || pageGlobal.OrderID || $("#pageOrderId").value();
                    pageGlobal.NewCustomerServiceView && pageGlobal.NewCustomerServiceView.UseNewCustomerServiceUrl && pageGlobal.NewCustomerServiceView.Origin && (c.origin = pageGlobal.NewCustomerServiceView.Origin),
                    d && (c.exInfo = "1108|" + d, c.orderid = d),
                    b += online.param(c),
                    $(document).regMod("sideBar", a.version.sideBar, {
                        url: {
                            feedBackURL: "http://my.ctrip.com/uxp/Community/CommunityAdvice.aspx?productType=2",
                            liveChatURL: b
                        },
                        title: {
                            backTop: "\u56de\u5230\u9876\u7aef",
                            feedBack: "\u5efa\u8bae\u53cd\u9988",
                            liveChat: "\u5728\u7ebf\u5ba2\u670d"
                        }
                    })
                })
            },
            register_emailPrompt: function(a) {
                if (a = $(a), !(a.length < 1)) {
                    var b = this.version.emailPrompt;
                    $.mod.load("emailPrompt", b,
                    function() {
                        a.regMod("emailPrompt", b)
                    })
                }
            }
        }
    }),
    function() {
        if ($.browser.isIPad || $.browser.isIPhone || $.browser.isIPadUCWeb || $("html").bind("mousedown",
        function(a) {
            addressFocusFlag = !1,
            setTimeout(function() {
                addressFocusFlag = !0
            },
            160)
        }), "undefined" == typeof online.registerMod) {
            if (online.registerMod = online.$c("util.RegisterMod"), window.__noRegister__) return;
            online.registerMod.register(function() {
                online.validateObj = this.validateObj
            })
        }
    } (),
    online.maskShow = function(a, b, c) {
        if (b = "undefined" == typeof b ? !0 : b, $(a)[b ? "mask": "unmask"](), b && "undefined" != typeof c) {
            var d = $(a).data("__mask__").maskDiv;
            c.color && (d.style.backgroundColor = c.color),
            c.opacity && $(d).css("opacity", c.opacity)
        }
    },
    online.create("util.SeoSearchUrl", {
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a),
                this._bindEvent()
            },
            generate: function() {
                var a, b, c = online.registerMod.searchBoxVals || {},
                d = $("#selflightType").value() || $("#search_type input[name=FlightWay]:checked").value() || $("#ctl00_MainContentPlaceHolder_QuickSearchControl_selflightType").value() || $('#search_type input[name="ctl00$MainContentPlaceHolder$drpFlightWay"]:checked').value() || c.multipleRound || "";
                if ("S" === d || "D" === d) try {
                    var e = c.flightintl_startcity_single.replace(/-/g, "").split("|"),
                    f = c.flightintl_arrivalcity_single.replace(/-/g, "").split("|");
                    return a = [e[0].replace(/[^a-zA-Z]/g, ""), f[0].replace(/[^a-zA-Z]/g, ""), e[3], f[3]],
                    b = [c.flightintl_startdate_single],
                    "D" === d && b.push(c.flightintl_backdate_single),
                    b.push($("#drpSubClass").value() || $("#ctl00_MainContentPlaceHolder_drpSubClass").value()),
                    (online.siteName + "international/" + ("D" === d ? "round-": "") + a.join("-") + "?" + b.join("&")).replace(/\s*/g, "").toLowerCase()
                } catch(g) {}
                return ""
            },
            onsubmit: function() {
                var a = this.generate();
                "" !== a && (this.form[0].action = a + (window.keepHash ? location.hash || "": ""), "submit" !== this.button[0].type.toLowerCase() && this.form[0].submit())
            },
            _bindEvent: function() {
                this.button && this.form && (this.button = $(this.button), this.form = $(this.form), this.button.bind("click", this.onsubmit.bind(this)))
            }
        }
    }),
    online.$c("util.SeoSearchUrl", window.pageGlobal && window.pageGlobal.SeoSearchUrl ? window.pageGlobal.SeoSearchUrl: {}),
    online.create("util.ReportDefaultSearchData", {
        options: {
            key: "flt_oversea_homepage_online_basic"
        },
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a)
            },
            report: function(a) {
                if (this.cookies) try {
                    window.__bfi.push(["_tracklog", this.key, this.getUbtData(a)]),
                    delete this.cookies
                } catch(b) {}
            },
            CityToJSON: function(a) {
                return a = (a + "").split("|"),
                {
                    CityID: a[2] || "",
                    CityCode: a[3] || "",
                    CityName: a[1] || ""
                }
            },
            getUbtData: function(a) {
                var b = {
                    FlightClass: "I",
                    FlightWay: "S",
                    Sequence: []
                },
                c = this.cookies;
                if (c) {
                    var d = c.length;
                    switch (d) {
                    case 1:
                        b.Sequence.push({
                            From:
                            this.CityToJSON(c[0])
                        });
                        break;
                    case 3:
                    case 4:
                    case 5:
                        var e, f = [];
                        switch (f.push(c.slice(0, 3)), "M" !== a && 5 === d && (c.pop(), d--), 4 === d && "" === c[3] && (c.pop(), d--), d) {
                        case 4:
                            b.FlightWay = "D",
                            f.push([c[1], c[0], c[3]]);
                            break;
                        case 5:
                            b.FlightWay = "M",
                            f = f.concat(c[4])
                        }
                        for (var g = 0,
                        h = f.length; h > g; g++) e = f[g],
                        b.Sequence.push({
                            From: this.CityToJSON(e[0]),
                            To: this.CityToJSON(e[1]),
                            StartTime: e[2]
                        })
                    }
                }
                return window.__POINORESULT && (b.POISearch = window.__POINORESULT, window.__POINORESULT = null),
                $.stringifyJSON(b)
            }
        }
    }),
    online.create("service.index.SearchHotelService", {
        options: {
            DDate: $("#ctl00_MainContentPlaceHolder_txtDDatePeriod1"),
            ADate: $("#ctl00_MainContentPlaceHolder_txtADatePeriod1"),
            UserType: $("#ctl00_MainContentPlaceHolder_selUserType"),
            Quantity: $("#ctl00_MainContentPlaceHolder_drpQuantity")
        },
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a);
                var b = document.createElement("div"),
                c = this;
                b.style.display = "none",
                b.id = "fl_hotelForm",
                $("body").append(b),
                $("#searchHotel").bind("click",
                function(a) {
                    if (a.stop(), online.isSearchHotel = !0, $("#ChildQuantity").length > 0) {
                        var b = $("#Quantity"),
                        d = $("#ChildQuantity"),
                        e = $("#InfantQuantity"),
                        f = +b.value(),
                        g = +d.value(),
                        h = +e.value(),
                        i = $("#InfantTip");
                        if ($("#noAdultTip").hide(), i.hide(), h > 0) return i.html('<i class="ico_warn"></i>\u6682\u4e0d\u652f\u6301\u5a74\u513f\u9884\u8ba2\u673a+\u9152\u5957\u9910\u3002').show(),
                        online.isSearchHotel = !1,
                        c.indexService.resetStyle(),
                        !1;
                        if (0 === f && g > 0) return i.html('<i class="ico_warn"></i>\u513f\u7ae5\u9884\u8ba2\u673a+\u9152\u5957\u9910\uff0c\u9700\u6709\u6210\u4eba\u966a\u4f34\u3002').show(),
                        online.isSearchHotel = !1,
                        c.indexService.resetStyle(),
                        !1;
                        if (f > 0 && g > 0 && g - 2 * f > 0 && 0 === h) return i.html('<i class="ico_warn"></i>\u6bcf\u4f4d\u6210\u4eba\u6700\u591a\u53ef\u643a\u5e261\u4f4d\u513f\u7ae5\u3002').show(),
                        online.isSearchHotel = !1,
                        c.indexService.resetStyle(),
                        !1;
                        if (f + g + h > 9) return i.html('<i class="ico_warn"></i>\u6bcf\u5f20\u673a+\u9152\u5957\u9910\u8ba2\u5355\u6700\u591a\u5305\u542b9\u4eba\uff0c\u60a8\u53ef\u5206\u5f00\u4e0b\u5355\u3002').show(),
                        online.isSearchHotel = !1,
                        c.indexService.resetStyle(),
                        !1;
                        if (0 === f && 0 === g && 0 === h) return i.html('<i class="ico_warn"></i>\u8bf7\u9009\u62e9\u5b9e\u9645\u51fa\u884c\u4eba\u6570\u3002').show(),
                        online.isSearchHotel = !1,
                        c.indexService.resetStyle(),
                        !1
                    }
                    if (window.validateQuery(!0)) {
                        var j = {},
                        k = {
                            From: "flightintl_startcity_single",
                            To: "flightintl_arrivalcity_single",
                            FromTime: "flightintl_startdate_single",
                            ToTime: "flightintl_backdate_single"
                        },
                        l = online.registerMod.searchBoxVals;
                        for (var m in k) if ( - 1 != m.indexOf("Time")) j[m] = l[k[m]] || "";
                        else {
                            var n = (l[k[m]] || "|").split("|");
                            j[m + "City"] = n[0].replace(/ /g, "").toLowerCase(),
                            j[m] = n[2]
                        }
                        var o = [l.flightintl_startcity_single, l.flightintl_arrivalcity_single, j.FromTime],
                        p = (new Date).toDate().addDays(1),
                        q = new Date(j.FromTime.replace(/-/g, "/")),
                        r = q.addDays(1),
                        s = q.addDays(28);
                        if (p > q) return online.registerMod.validate(c.DDate, online.msg.ERROR_FLIGHT[15]),
                        online.isSearchHotel = !1,
                        !1;
                        if (j.ToTime) {
                            var t = new Date(j.ToTime.replace(/-/g, "/"));
                            if (r > t) return online.registerMod.validate(c.ADate, online.msg.ERROR_FLIGHT[16]),
                            online.isSearchHotel = !1,
                            !1;
                            if (t > s) return online.registerMod.validate(c.ADate, online.msg.ERROR_FLIGHT[17]),
                            online.isSearchHotel = !1,
                            !1;
                            o.push(j.ToTime)
                        }
                        $.cookie.set("FlightIntl", "Search", $.stringifyJSON(o), {
                            path: "/",
                            expires: 365,
                            domain: location.host.split(".").slice( - 2).join(".")
                        }),
                        j.Children = 0,
                        j.Adults = 2,
                        j["CHD" === c.UserType.value() ? "Children": "Adults"] = c.Quantity.value(),
                        $("#ChildQuantity").length > 0 && (j.Children = g, j.Adults = f, online.isSearchHotel = !1);
                        var u = "fl_hotelForm_" + +new Date,
                        v = ['<form id="' + u + '" action="//' + ( - 1 !== online.siteName.indexOf("ctrip.com") ? "taocan.ctrip.com": "taocan.fat58.qa.nt.ctripcorp.com") + "/freetravel/confirm?from=" + j.FromCity + "&to=" + j.ToCity + "&h=" + j.ToCity + '" method="get" target="_blank">'];
                        for (var w in j) j.hasOwnProperty(w) && v.push('<input type="hidden" name="' + w + '" value="' + j[w] + '" />');
                        v.push("</form>"),
                        $("#fl_hotelForm").html(v.join("")),
                        $("#" + u)[0].submit(),
                        $("#fl_hotelForm").html("")
                    }
                })
            }
        }
    }),
    online.create("service.HotCountry.HotCountryService", {
        methods: {
            initialize: function(a) {
                this.info(),
                this.extend(this, a),
                this.dateTimeElementId = "#hotCountryDDate";
                try {
                    this.$DatePicker = jQuery.createRangeDatePicker(this.dateTimeElementId,
                    function() {})
                } catch(b) {}
                this.THEMES = {
                    "\u514d\u7b7e/\u843d\u5730\u7b7e": "MianQianLuoDiQian"
                },
                this.COUNTRY_FROM_FILTER = "1",
                this.COUNTRY_FROM_SUGGETION = "3";
                var c = this;
                $("#hotCountrySearchBtn").bind("click",
                function(a) {
                    a.stop(),
                    c.submit()
                }),
                this.showed = !1,
                this.$hotCountryTips = $("#hot_country_tips"),
                this.countrySource = "0"
            },
            hideTips: function() {
                this.$hotCountryTips.hide()
            },
            showTips: function() {
                this.$hotCountryTips.show()
            },
            submit: function() {
                if (this.validate()) {
                    var a = this.$DCity.value(),
                    b = this.$ACity.value(),
                    c = this.$DatePicker.data;
                    "ONEWAY" == this.tripType && (c.maxDays = -1, c.minDays = -1),
                    c.destCityName = b,
                    c.travelType = this.tripType,
                    c.inputDepartureCityName = this._parseCityName(a),
                    c.inputDepartureCity = this._parseCityCode(a),
                    this.THEMES[b] ? (c.inputArrivalCities = {
                        themes: [this.THEMES[b]],
                        cities: [],
                        areas: []
                    },
                    c.inputArrivalCitiesMap = {
                        themes: [b],
                        cities: [],
                        areas: [],
                        filter: {}
                    }) : (c.inputArrivalCities = {
                        themes: [],
                        cities: [],
                        areas: [b]
                    },
                    c.inputArrivalCitiesMap = {
                        themes: [],
                        cities: [],
                        areas: [b],
                        filter: {}
                    });
                    var d = this.$DatePicker.$picker.data("datePicker");
                    c.departStringDate = d.$input.val();
                    var e = "//flights.ctrip.com/fuzzy/";
                    this.countrySource == this.COUNTRY_FROM_FILTER ? e += "#ctm_ref=fli_hp_sb_findlprice_t": this.countrySource == this.COUNTRY_FROM_SUGGETION && (e += "#ctm_ref=fli_hp_sb_findlprice_b");
                    var f = encodeURIComponent($.stringifyJSON(c)),
                    g = "flt_hotcountry_" + +new Date,
                    h = '<form id="' + g + '" action="' + e + '" method="post">';
                    return h += '<input type="hidden" name="searchRequestModel" value="' + f + '" />',
                    h += "</form>",
                    $("#hot_country_form").html(h),
                    $("#" + g)[0].submit(),
                    !1
                }
            },
            validate: function() {
                var a = this.$DCity.value(),
                b = this.$ACity.value(),
                c = this.$DatePicker.$picker.data("datePicker"),
                d = c.$input.val();
                return a ? b ? d ? this.checkIsMappingHotCountryPair() : (online.registerMod.validate($(this.dateTimeElementId), "\u8bf7\u9009\u62e9\u51fa\u53d1\u65e5\u671f"), !1) : (online.registerMod.validate(this.$ACity, "\u8bf7\u9009\u62e9\u5230\u8fbe\u57ce\u5e02"), !1) : (online.registerMod.validate(this.$DCity, "\u8bf7\u9009\u62e9\u51fa\u53d1\u57ce\u5e02"), !1)
            },
            checkIsMappingHotCountryPair: function() {
                var a = this.$DCity.value(),
                b = this.$ACity.value(),
                c = this._parseCityCode(a),
                d = window.HotCountries.getMappingHotCountry(c);
                if (window.HotCountries._contains(d, b)) return this.$hotCountryTips.hide(),
                !0;
                var e = this._parseCityName(a);
                return $("#hot_country_tips_content").html("\u6682\u4e0d\u652f\u6301\u641c\u7d22" + e + "\u98de\u5f80" + b + "\uff0c\u8bf7\u66f4\u6362\u51fa\u53d1\u6216\u5230\u8fbe\u5730\u70b9"),
                this.$hotCountryTips.show(),
                !1
            },
            _parseCityName: function(a) {
                if (a) {
                    var b = a.lastIndexOf("(");
                    if ( - 1 != b) return a.substring(0, b)
                }
                return ""
            },
            _parseCityCode: function(a) {
                if (a) {
                    var b = a.lastIndexOf("("),
                    c = a.lastIndexOf(")");
                    if ( - 1 != b && -1 != c) return a.substring(b + 1, c)
                }
                return ""
            },
            searchTypeChanged: function(a) {
                var b = this.tripType;
                "S" == a ? (this.tripType = "ONEWAY", this._switchDateTimePickerMode()) : "D" == a ? (this.tripType = "ROUNDTRIP", this._switchDateTimePickerMode()) : this.tripType = "",
                this.onChangeFlightWay && this.onChangeFlightWay(a),
                b && this.tripType && this.showed && b != this.tripType && this.uploadUbt()
            },
            _switchDateTimePickerMode: function() {
                if (this.$DatePicker && this.$DatePicker.$picker) {
                    var a = this.$DatePicker.$picker.data("datePicker");
                    if (a) {
                        var b = a.$input.val(),
                        c = "";
                        if ("ONEWAY" === this.tripType) {
                            c = a.range ? b.split(" ")[0] + " \u51fa\u53d1": "\u4efb\u4f55\u65f6\u95f4",
                            a.$input.val(b + " \u51fa\u53d1");
                            var d = a.mode.indexOf("_acc"); - 1 != d && a.switchMode(a.mode.substring(0, d))
                        } else if ("ROUNDTRIP" === this.tripType) {
                            c = b.split(" ")[0] + a.valLen();
                            var d = a.mode.indexOf("_acc"); - 1 == d && a.switchMode(a.mode + "_acc")
                        }
                        a.$input.val(c)
                    }
                }
            },
            updateCountrySource: function(a) {
                "suggestionMousedown" == a ? this.countrySource = this.COUNTRY_FROM_SUGGETION: this.countrySource = this.COUNTRY_FROM_FILTER
            },
            uploadUbt: function() {
                try {
                    if (!this.$DatePicker || !this.$DatePicker.$picker) return;
                    var a = this.$DatePicker.$picker.data("datePicker"),
                    b = {
                        content: {
                            searchway: this.countrySource,
                            flightway: "ONEWAY" == this.tripType ? "S": "D",
                            from: this._parseCityName(this.$DCity.value()),
                            to: this.$ACity.value(),
                            searchdate: a.$input.val()
                        }
                    };
                    window.__bfi.push(["_tracklog", "c_hotsearch", $.stringifyJSON(b)])
                } catch(c) {}
            }
        }
    }),
    online.create("service.index.SearchPrefereService", {
        options: {
            url: "AjaxRequest/UI2_0/HistoryQueryRecordHandler.ashx?",
            hash: {
                "": 0
            }
        },
        methods: {
            initialize: function(a) {
                if (this.info(), this.extend(this, a), this.SearchSwitch && !(online.registerMod && online.registerMod.searchBoxVals && online.registerMod.searchBoxVals.flightintl_startcity_single && online.registerMod.searchBoxVals.flightintl_arrivalcity_single)) {
                    var b = this; !
                    function c() {
                        if (window.$_bf && window.$_bf.loaded === !0) {
                            var a = window.$_bf._getFullPV();
                            b.vid = a.split(".").slice(0, 2).join("."),
                            online.log("\u5f53\u524d\u7528\u6237\u7684VID\u4e3a:" + b.vid),
                            b.getPageID(),
                            b.getPrefere()
                        } else setTimeout(c, 50)
                    } ()
                }
            },
            getPageID: function() {
                var a = location.href.split("/")[4] || "";
                this.pageID = this.hash[a] || 0
            },
            getPrefere: function() {
                var a, b, c = {
                    Type: "GetHistoryRecord",
                    vid: this.vid,
                    pageID: this.pageID
                },
                d = this;
                a = $.ajax(online.getBaseUrl(this.url) + online.param(c), {
                    onsuccess: function(a, c) {
                        clearTimeout(b);
                        var e = $.parseJSON(c);
                        return e ? void d.fillData(e) : void online.log("\u8bf7\u6c42\u641c\u7d22\u504f\u597d\u6570\u636e\u4e3a\u7a7a")
                    },
                    onerror: function() {
                        clearTimeout(b),
                        online.log("\u8bf7\u6c42\u641c\u7d22\u504f\u597d\u8d85\u65f6\u6216\u51fa\u9519")
                    }
                }),
                b = setTimeout(function() {
                    a.abort()
                },
                200)
            },
            fixDate: function(a) {
                return a ? a.replace(/\//g, "-").toDate().toFormatString("yyyy-MM-dd") : ""
            },
            fillData: function(a) {
                if (this.indexService && ("array" === $.type(a) && a.length > 0 || "object" === $.type(a))) {
                    var b = (this.indexService, [$("#homeCity"), $("#destCity")]),
                    c = "array" === $.type(a) ? a[0] : a,
                    d = c.ExtendMap || {},
                    e = this.fixDate(c.StartTime) || "",
                    f = this.fixDate(c.EndTime) || "",
                    g = [];
                    if (d.From && d.To && (g = [d.From, d.To]), !(g.length < 1)) {
                        b.each(function(a, b) {
                            a.getMod("address_poi", "2.0").method("select", g[b]),
                            online.clearNotice(a)
                        });
                        var h = [d.From, d.To, e, f];
                        "" === h[3] && h.pop(),
                        $.cookie.set("FlightIntl", "Search", $.stringifyJSON(h), {
                            path: "/",
                            expires: 365,
                            domain: location.host.split(".").slice( - 2).join(".")
                        }),
                        this.loadCallback && this.loadCallback(h)
                    }
                }
            }
        }
    }),
    function() {
        function showOrHideElementForHotCountry(a) {
            a ? ($("#ddate_form_group_country").show(), $("#ddate_form_group_city").hide(), $("#hot_country_button_group").show(), $("#default_search_button_group").hide(), $("#exchangeCity").hide(), hotCountryService.showed = !0) : ($("#ddate_form_group_country").hide(), $("#ddate_form_group_city").show(), $("#hot_country_button_group").hide(), $("#default_search_button_group").show(), $("#exchangeCity").show(), hotCountryService.showed = !1)
        }
        online.extend({
            toMoney: function(a) {
                return (a + "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g, "$1,")
            },
            toShortDate: function(a, b) {
                if (!a) return a;
                if (b) return a.split("-").slice(1).join("-");
                a = a.toDate();
                var c = "00" + (1 * a.getMonth() + 1),
                d = "00" + a.getDate();
                return [c.substr(c.length - 2), d.substr(d.length - 2)].join(".")
            }
        });
        var isInit = !1,
        goback = online.$c("service.index.AjaxTabService", {
            box: $("#gobak_airline"),
            item: "p.airline_right a",
            content: "div.goback_content",
            style: "current",
            MaxTryTimes: 1,
            IntervalTime: 3e3,
            getName: function(a) {
                return [this.box.find("span.roundtrip_depart").attr("name"), a.attr("name")].join("__")
            },
            getUrl: function(a) {
                return isInit ? "/international/tools/HomeHandler.ashx?type=RT&DCity=" + this.box.find("span.roundtrip_depart").attr("name") + "&Region=" + a.attr("name") : "/international/tools/HomeHandler.ashx?type=RT&Region=" + a.attr("name")
            },
            ajaxCallBack: function(a, b) {
                if (b = $.parseJSON(b), null === b) {
                    if (this.checkTryLimit(a)) return;
                    return a.remove(),
                    void this.box.find(".airline_busy").css("display", "")
                }
                if (isInit === !1) {
                    isInit = !0;
                    for (var c = $("ul.airline_list a"), d = c.length; d--;) if (c[d].name === b.DepartCity) {
                        var e = $("div.airline_box:first span.roundtrip_depart");
                        e.html(c[d].innerHTML + ("gb2312" === online.charset ? "\u51fa\u53d1": "\u51fa\u767c")),
                        e.attr("name", c[d].name),
                        e.attr("rname", c[d].innerHTML);
                        break
                    }
                    a[0].className = a[0].className.replace(/(...)__(\d)/, b.DepartCity + "__$2")
                }
                a.html($.tmpl.render('<ul class="goback_list clearfix">					{{each(k,v) FlightList}}					<li data-ubt-key="Dupli_WhereGo_Detail${k+1}">						<a href="${v.SearchURL}" target="_blank" style="z-index:7;">						<span class="arrow"></span>						<h4 class="takeoff"><span class="depart">${v.DCityName}</span><b class="ico_flight"></b>{{if v.IsTransfer}}<span class="transit">\u4e2d\u8f6c</span>{{/if}}</h4>						<h4 class="arrive">${v.ACityName}</h4>						<p>${online.toShortDate(v.GoDate)}<b class="ico_goback"></b>${online.toShortDate(v.BackDate)}</p>						<p>\u5f80\u8fd4\uff1a<strong class="base_price"><dfn>&yen;</dfn>${online.toMoney(v.Price)}</strong> \u8d77</p>						<p class="flight_name">						<span class="flight_logo pubFlights_${v.AirlineCode}">${v.AirlineName}</span>						</p>{{if v.ClassTypeName != ""}}<span class="tag">${v.ClassTypeName}</span>{{/if}}						</a>					</li>					{{/each}}					</ul>', b)),
                a.find("ul.goback_list li:gt(" + (b.FlightList.length > 8 ? 8 : 5) + ")").addClass("hide_on_small"),
                a.find("li").bind("mousedown",
                function(a) {
                    $(a.target).attr("data-ubt-key", $(this).attr("data-ubt-key"))
                })
            }
        }),
        title = $("div.airline_box:first span.roundtrip_depart"),
        menu = $("ul.airline_list"),
        timer,
        hideMenu = function() {
            clearMenuTimer(),
            timer = setTimeout(function() {
                menu.hide()
            },
            200)
        },
        clearMenuTimer = function() {
            clearTimeout(timer)
        };
        try {
            var tmpl = '<div class="basic-popups commitment-popup" style="margin:0 20px;display: none;">						<a href="javascript:;" class="close closeCommitment">\xd7</a>                	<div class="popup-body">                    	<img src="http://pic.c-ctrip.com/fltcommon/index/commitment-detail.jpg" alt="">                	</div></div>';
            jQuery("body").append(tmpl),
            $(".showCommitment").bind("click",
            function(a) {
                $(".commitment-popup").mask()
            }),
            $(".closeCommitment").bind("click",
            function(a) {
                $(".commitment-popup").unmask()
            })
        } catch(e) {
            console.log(e)
        }
        title.bind("click",
        function(a) {
            menu.toggle()
        }),
        title.bind("mouseout", hideMenu),
        menu.bind("mouseout", hideMenu),
        title.bind("mouseover", clearMenuTimer),
        menu.bind("mouseover", clearMenuTimer),
        menu.find("a").bind("click",
        function(a) {
            return a.preventDefault(),
            title.html($(this).html() + ("gb2312" === online.charset ? "\u51fa\u53d1": "\u51fa\u767c")),
            title.attr("name", $(this).attr("name")),
            title.attr("rname", $(this).html()),
            menu.toggle(),
            goback.init(),
            !1
        }),
        $(".hot_theme").find("a").bind("mousedown",
        function(a) {
            $(a.target).attr("data-ubt-key", $(this).attr("data-ubt-key"))
        });
        var loadOWCity = function(a) {
            $("#single_airline div.airline_title").html($.tmpl.render('			{{each (k,v) data}}			<a href="javascript:void(0);" name="${CityCode}" data-ubt-key="Single_Arrive${k+1}">${CityName}</a><span class="separator">|</span>			{{/each}}', {
                data: a
            })).show(),
            $("#single_airline div.airline_title span.separator:last").remove(),
            online.$c("service.index.AjaxTabService", {
                box: $("#single_airline"),
                item: "div.airline_title a",
                content: "div.oneway_content",
                style: "current",
                MaxTryTimes: 1,
                IntervalTime: 6e3,
                getName: function(a) {
                    return a.attr("name")
                },
                getUrl: function(a) {
                    return "/international/tools/HomeHandler.ashx?type=OW&ACity=" + a.attr("name")
                },
                ajaxCallBack: function(a, b) {
                    if (b = $.parseJSON(b), null === b) {
                        if (this.checkTryLimit(a)) return;
                        return a.remove(),
                        void this.box.find(".airline_busy").show()
                    }
                    a.html($.tmpl.render('<ul class="oneway_list">					{{each(k,v) FlightList}}{{if k<12}}						{{ if k>0 && k%4 == 0}}</ul><ul class="oneway_list">{{/if}}						<li><a href="${SearchURL}" target="_blank" title="${DCityName} - ${ACityName}">						<span class="base_price"><dfn>&yen;</dfn>${online.toMoney(Price)}<span class="adTips">\u8d77</span></span></span><span class="title">${DCityName} - ${ACityName}</span><span class="text_low">${online.toShortDate(GoDate, 1)}</span>						</a></li>						{{/if}}					{{/each}}				</ul>', b)),
                    a.find("ul.oneway_list:gt(1)").addClass("hide_on_small")
                }
            })
        },
        tryTimes = 0,
        linklist = $("#linklist"),
        loadOWACity = function() {
            $("#single_airline .airline_busy").html('\u4f4e\u4ef7\u62a2\u624b\uff0c\u641c\u7d22\u7e41\u5fd9\uff0c\u8bf7<a href="javascript:void(0);">\u518d\u8bd5\u4e00\u6b21</a>\uff01'),
            $.ajax("/international/tools/HomeHandler.ashx?type=OWACITY", {
                onsuccess: function(a, b) {
                    return b = $.parseJSON(b),
                    null === b ? void(1 > tryTimes ? (tryTimes++, setTimeout(loadOWACity, 6e3)) : ($("#single_airline .oneway_content").css("display", "none"), $("#single_airline .airline_busy").show().find("a").bind("click",
                    function(a) {
                        a.stop(),
                        $("#single_airline .airline_busy").hide(),
                        $("#single_airline .oneway_content:first").show(),
                        $("#single_airline .oneway_title").show(),
                        loadOWACity()
                    }))) : void loadOWCity(b)
                }
            })
        },
        dtimer,
        DLoad = function() {
            clearTimeout(dtimer),
            dtimer = setTimeout(function() {
                var a = linklist.offset().top,
                b = online.getScrollTop() + online.getViewHeight();
                b > a && DelayLoad()
            },
            100)
        },
        DelayLoad = function() {
            $(window).unbind(["scroll", "resize"], DLoad),
            loadOWACity(),
            $.ajax("/international/tools/HomeHandler.ashx?type=AIRLINESPECIAL", {
                onsuccess: function(a, b) {
                    b = $.parseJSON(b);
                    var c = $("#recommend"),
                    d = c.find("ul.recommend_list");
                    return null === b ? void c.hide() : (d.html($.tmpl.render('{{each (k,v) data}}<li><a href="${unescape(LinkURL)}" target="_blank"><img src="${unescape(ImageURL)}" alt="activities_1" data-ubt-key="Bottom_Ad${k % 4 + 1}"><p class="title" data-ubt-key="Bottom_Ad${k % 4 + 1}" title="${Title}">${Title}</p><p class="content" data-ubt-key="Bottom_Ad${k % 4 + 1}"><span class="text_low">${Content}</span><span class="base_price"><dfn>&yen;</dfn>${Price}</span><span class="adTips">\u8d77</span></p></a></li>{{/each}}', {
                        data: b
                    })), void $.mod.load("animate", "1.0",
                    function() {
                        var a = c.find("a.recommend_next"),
                        b = c.find("a.recommend_prev"),
                        e = 777 === parseInt(c.css("width"), 10) ? 4 : 3,
                        f = d.find("li").length,
                        g = 0,
                        h = 197;
                        return d.css("width", f * h + "px"),
                        f -= e,
                        b.removeClass("recommend_prev"),
                        1 > f ? void c.find("a.recommend_left,a.recommend_right").hide() : (a.bind("click",
                        function(a) {
                            a.stop(),
                            g >= f || (b.hasClass("recommend_prev_disable") && b.removeClass("recommend_prev_disable").addClass("recommend_prev"), g += e, g >= f && (g = f), d.animate({
                                marginLeft: g * -h + "px"
                            }), g >= f && $(this).addClass("recommend_next_disable").removeClass("recommend_next"))
                        }), void b.bind("click",
                        function(b) {
                            b.stop(),
                            1 > g || (a.hasClass("recommend_next_disable") && a.removeClass("recommend_next_disable").addClass("recommend_next"), g -= e, 0 > g && (g = 0), d.animate({
                                marginLeft: g * -h + "px"
                            }), 1 > g && $(this).addClass("recommend_prev_disable").removeClass("recommend_prev"))
                        }))
                    }))
                }
            }),
            $.ajax("/international/AjaxRequest/UI2_0/HomeHandler.ashx?type=LATESTAIRLINE", {
                onsuccess: function(a, b) {
                    if (b = $.parseJSON(b), null !== b) {
                        $("#pDynamicShowList").html("<strong>\u6700\u65b0\u9884\u8ba2</strong>" + $.tmpl.render('					{{each (k,v) data}}						&nbsp;<span{{if k > 2}} style="display:none;"{{/if}}>${TimeString}&nbsp;<a href="${SearchURL}" data-ubt-key="newRebook1" target="_blank">${Title}</a><a href="airline-${AirlineCode}" data-ubt-key="newRebook2" target="_blank">${AirlineName}</a><a href="Schedule/${FlightNo}.html" data-ubt-key="newRebook3" target="_blank">${FlightNo}</a></span>					{{/each}}					', {
                            data: b
                        }));
                        var c = 3,
                        d = b.length - 1;
                        setInterval(function() {
                            c = c > d ? 0 : c,
                            $("#pDynamicShowList span").hide(),
                            $("#pDynamicShowList span").slice(c, c += 3).show()
                        },
                        5e3)
                    }
                }
            }),
            $LAB.script(jsList.info).wait(function() {
                online.registerMod.register_linklist(linklist)
            })
        };
        linklist.length > 0 && $(window).bind(["scroll", "resize"], DLoad).trigger("resize");
        var searchWait = online.$c("service.public.SearchWaitService", {
            TIPS_MESSAGER: online.msg.TIPS_MESSAGER
        }),
        hotCountryService = online.$c("service.HotCountry.HotCountryService", {
            $DCity: $("#homeCity"),
            $ACity: $("#destCity"),
            $DatePicker: null,
            onChangeFlightWay: function(a) {
                if (window.HotCountries && window.HotCountries.onChangeFlightWay(a), "S" == a || "D" == a) {
                    if (hotCountryService.showed && !hotCountryService.checkIsMappingHotCountryPair()) return $("#destCity").getMod("address_poi", "2.0").method("select", ""),
                    void showOrHideElementForHotCountry(!1);
                    showOrHideElementForHotCountry(hotCountryService.showed)
                } else $("#hot_country_button_group").hide(),
                $("#default_search_button_group").show();
                hotCountryService.hideTips()
            }
        }),
        indexService = online.$c("service.IndexNewService", {
            searchWait: searchWait,
            syncConfig: [["#homeCity", "#homeCity_1"], ["#destCity", "#destCity_1"], ["#DDate", "#DDate_1"]],
            hotCountryService: hotCountryService
        });
        $("#ADate").bind("change",
        function() {
            "S" == indexService.last && (indexService.drpFlightWay.filter("[value='D']")[0].checked = !0, indexService.searchTypeChange("D"))
        }),
        setTimeout(function() {
            var a = $("#homeCity"),
            b = a.attr("mod_change_value");
            b && a.getMod("address_poi", "2.0").method("select", b)
        },
        100),
        setTimeout(function() {
            var a = $("#destCity"),
            b = $("#destCity").value();
            b && -1 == b.indexOf("(") && -1 == b.indexOf("|") && a.getMod("address_poi", "2.0").method("select", "")
        },
        200);
        var dSearchData = online.registerMod.cookies,
        reportDefaultSearchData = online.$c("util.ReportDefaultSearchData", {
            cookies: dSearchData
        });
        online.$c("service.index.SearchPrefereService", {
            indexService: indexService,
            loadCallback: function(a) {
                reportDefaultSearchData.cookies = a
            },
            SearchSwitch: pageGlobal.SearchIntentionSwitch
        }),
        $("#search_box .search-title h3").length > 1 && $LAB.script(getUrl("indexFuzzy.js")).wait(function() {
            var a = online.$c("service.IndexFuzzyService", {
                indexService: indexService
            });
            w.validateFuzzy = function() {
                var b = a.validate();
                if (!b) return ! 1;
                var c = a.Recomm || a.Fuzzy;
                return $("#searchRequestModel").value(encodeURIComponent($.stringifyJSON(c))),
                $.storage.set("FuzzyIndexData", a.Fuzzy),
                !0
            }
        }),
        setTimeout(function() {
            var a = online.$c("util.Multipass", {
                target: $("#flight_multiple"),
                addTarget: $("#addTrip"),
                min: 3,
                needEffect: !1,
                template: '<div class="form_group" online_multipass_index="${index-1}">				<em class="online_number">${index}</em>				<div class="multi_city_leg">					<div class="field_block">${i18n.startCity}<input type="text" class="input_txt" id="homeCity_${index}" mod_address_hide="7" mod_address_date="DDate_${index}" mod_address_focusnext="destCity_${index}"  mod_change_id="destCity_${index-1}" name="txtBeginAddress${index}" mod="notice|address" mod_notice_tip="${online.msg.NOTICE[0]}" mod_address_tpl="address" mod_address_source="{{if index==1}}start{{else}}dest{{/if}}" mod_address_reference="homeCityID_${index}"/><input type="hidden" id="homeCityID_${index}" name="txtBeginCityCode${index}"/></div>					<div class="field_block">${i18n.endCity}<input type="text" class="input_txt" id="destCity_${index}" mod_address_hide="7" mod_address_focusnext="DDate_${index}" name="txtEndAddress${index}" mod="notice|address" mod_notice_tip="${online.msg.NOTICE[0]}" mod_address_tpl="address" mod_address_source="dest" mod_address_reference="destCityID_${index}"/><input type="hidden" id="destCityID_${index}" name="txtEndCityCode${index}"/></div>					<div class="field_block">${i18n.startDate}<input type="text" class="input_txt" id="DDate_${index}" autocomplete="off" name="txtDatePeriod${index}" mod="notice|calendar" mod_notice_tip="yyyy-mm-dd" mod_calendar_focusnext="DDate_${index+1}"/></div>					{{if index > 2}}<a class="delete del_line" href="javascript:void(0);" data-ubt-key="DeleteSequence">\xd7</a>{{/if}}				</div>			</div>',
                addCallback: function(a) {
                    $("#DDate_" + (1 * a.attr("online_multipass_index") + 1)).data("minDate", $("#DDate_" + a.attr("online_multipass_index")).value().toDate() || ""),
                    indexService.resetStyle(),
                    indexService.searchBox.find("input[type=text]").bind("keydown",
                    function(a) {
                        indexService.keydownByCityInput(a)
                    })
                },
                removeCallback: function(a) {
                    var b = $(online.parent(a[0])),
                    c = 1 * b.attr("online_multipass_index") + 1;
                    b.remove(),
                    setTimeout(function() {
                        0 != $("#DDate_" + c).length && $("#DDate_" + c).data("minDate", $("#DDate_" + (c - 1)).value().toDate() || "")
                    },
                    2),
                    indexService.resetStyle()
                }
            }); !
            function(a, b) {
                if (null != a && 5 === a.length) {
                    a[4].unshift(a.slice(0, 3));
                    for (var c = a[4], d = function(a, b, c, d, e) {
                        0 !== a.length && (b = a.getMod(b, c), b && b.method(d, e), b = a.getMod("notice", "1.1"), b && b.method("checkValue"))
                    },
                    e = function(a, b) {
                        var c = $("#DDate_" + a);
                        d($("#homeCity_" + a), "address_poi", "2.0", "select", b[0]),
                        d($("#destCity_" + a), "address_poi", "2.0", "select", b[1]),
                        c.value(b[2]),
                        d(c, "calendar", "6.0", "setWeek")
                    },
                    f = c.length; f-->3;) b.add();
                    for (f = c.length; f;) e(f--, c[f])
                }
            } (dSearchData, a),
            indexService.resetStyle()
        },
        1024),
        $("#flight_multiple input[type=text]").bind("keydown",
        function(a) {
            return indexService.keydownByCityInput(a)
        }),
        online.$c("service.index.SearchHotelService", {
            DDate: $("#DDate"),
            ADate: $("#ADate"),
            UserType: $("#childtype"),
            Quantity: $("#Quantity"),
            indexService: indexService
        }),
        window.maskShow = online.maskShow,
        function() {
            if (! (cQuery.browser.isIE7 || cQuery.browser.isIE6 || cQuery.browser.isIOS)) {
                var a, b = {
                    ChildQuantity: "\u513f\u7ae52 - 12\u5c81",
                    InfantQuantity: "\u5a74\u513f14\u5929 - 2\u5c81"
                };
                for (var c in b) a = document.createElement("div"),
                a.className = "pop",
                a.style.display = "none",
                a.innerHTML = b[c] + '<i class="pop-arrow-left"></i>',
                $("#" + c).parentNode().append(a).bind("mouseenter",
                function() {
                    $(this).find(".pop").show()
                }).bind("mouseleave",
                function() {
                    $(this).find(".pop").hide()
                })
            }
        } (),
        function(a, b) {
            var c, d = [],
            e = document.createElement("div");
            for (var f in a) if (a.hasOwnProperty(f)) for (var g = 0; b > g; g++) c = g + 1,
            d.push('<input type="hidden" id="' + f + c + '" value="' + a[f] + c + '" />');
            e.style.display = "none",
            e.innerHTML = d.join(""),
            document.body.appendChild(e)
        } ({
            hdn_showflt_ddate: "DDate_",
            hdn_showflt_dcity: "homeCity_",
            hdn_showflt_acity: "destCity_"
        },
        6);
        var validateService = online.$c("service.public.ValidateService", {
            single: {
                txtDCity: $("#homeCity")[0],
                dest_city_1: $("#destCity")[0],
                txtDDatePeriod1: $("#DDate")[0],
                txtADatePeriod1: $("#ADate")[0]
            },
            submitBtn: indexService.searchBtn[0],
            mult: ["#hdn_showflt_ddate", "#hdn_showflt_dcity", "#hdn_showflt_acity"],
            msg: online.msg,
            drpFlightWay: indexService.drpFlightWay,
            callback: function() {
                searchWait.afterClick()
            }
        });
        validateQuery = function(a) {
            if (setTimeout(function() {
                indexService.resetStyle()
            },
            10), !online.isSearchHotel && !online.validateMultiQuantity()) return online.isSearchHotel = !1,
            !1;
            var b = validateService.getValidate(a);
            if (b) {
                a !== !0 && (reportDefaultSearchData.report(indexService.last), indexService.searchTypeChange(), indexService.searchBox.find("div." + ("M" !== indexService.last ? "search_multiform": "search_baseform")).remove(), "S" === indexService.last && $("#ADate").attr("disabled", "disabled"));
                try {
                    var c = window.location.protocol + "//" + window.location.host + "/international/search/",
                    d = $("#drpSubClass").value(),
                    e = $("#AirlineID").value(),
                    f = $("#flight_direct").is(":checked"),
                    g = $(indexService.Quantity.obj).value(),
                    h = $(indexService.ChildQuantity.obj).value(),
                    i = $(indexService.InfantQuantity.obj).value(),
                    j = "",
                    k = function(a) {
                        return "airport_train_code_" + (a ? a.match(/(?:[^\|]+\|){1}([^\|]+)\|/)[1] : "")
                    },
                    l = function(a) {
                        var b = a && a.attr ? a.attr("mod_change_value") : "",
                        c = a && a.attr ? a.attr("poi-type") : "",
                        d = "";
                        if (b) {
                            try {
                                "airport" == c ? d = b.match(/(?:[^\|]+\|){4}([^\|]+)\|/)[1] + "0": "train" == c && (d = a.attr("train-code") + "1"),
                                d && $.storage.set(k(b), d, 99999999)
                            } catch(e) {
                                d = "",
                                online.log("\u83b7\u53d6\u673a\u573a/\u706b\u8f66\u7ad9\u4e09\u5b57\u7801\u51fa\u73b0\u5f02\u5e38\uff1a" + e)
                            }
                            if (!d) {
                                var f = $.storage.get(k(b));
                                d = f ? f: b.match(/(?:[^\|]+\|){3}([^\|]+)\|/)[1]
                            }
                        }
                        return d
                    };
                    if ("S" === indexService.last || "D" === indexService.last) {
                        var m = l($("#homeCity")),
                        n = l($("#destCity")),
                        o = $("#DDate").value(),
                        p = $("#ADate").value();
                        "S" === indexService.last ? "oneway": "round";
                        j = "S" === indexService.last ? "oneway-" + m + "-" + n + "?depdate=" + o + "&cabin=" + d + "&adult=" + g + "&child=" + h + "&infant=" + i: "round-" + m + "-" + n + "?depdate=" + o + "_" + p + "&cabin=" + d + "&adult=" + g + "&child=" + h + "&infant=" + i
                    } else {
                        for (var q = $("#flight_multiple .form_group"), r = [], s = "", t = "", u = 0; u < q.length; u++) {
                            var m = l($("#homeCity_" + (u + 1))),
                            n = l($("#destCity_" + (u + 1))),
                            o = $("#DDate_" + (u + 1)).value();
                            m && n && o && r.push({
                                dCityCode: m,
                                aCityCode: n,
                                dDate: o
                            })
                        }
                        for (var u = 0; u < r.length; u++) {
                            var v = r[u];
                            s += (0 === u ? "": "-") + v.dCityCode + "-" + v.aCityCode,
                            t += (0 === u ? "": "_") + v.dDate
                        }
                        j = "multi-" + s + "?depdate=" + t + "&cabin=" + d + "&adult=" + g + "&child=" + h + "&infant=" + i
                    }
                    if (e || f) {
                        e && (j += "&airline=" + e),
                        f && (j += "&directflight=1")
                    }
                    if (j && pageGlobal.IsOpenNewJavaVersrionListSwitch) return window.location.href = (c + j).toLowerCase(),
                    !1
                } catch(w) {
                    var x = "\u8df3\u8f6c\u65b0\u7248\u5217\u8868\u9875\u62a5\u9519:" + w;
                    online.log(x),
                    "object" == typeof console && "function" == typeof console.error && console.error(x)
                }
            }
            return b
        },
        online.registerMod.getFirstCityNameByIp($("#homeCity"),
        function(a) {
            reportDefaultSearchData.cookies = a
        });
        var param = {
            pageid: 1005001
        };
        $.ajax(online.getBaseUrl("AjaxRequest/Notification.ashx"), {
            method: "POST",
            context: param,
            onsuccess: function(xhr, ret) {
                if (null == ret || "" == ret || "{}" == ret) return void online.log("\u65e0\u6570\u636e");
                if (200 == xhr.status) {
                    var jsTip = eval("(" + ret + ")");
                    if (jsTip.ErrorMessage) return void online.log(jsTip.ErrorMessage);
                    var str = online.bulletinBoardTips(jsTip);
                    if (str) {
                        var div = document.createElement("div");
                        div.id = "winTips",
                        div.className = "help_block help_important",
                        div.innerHTML = '<a class="close" href="#" id="win768">\xd7</a><strong class="help_important-t">\u91cd\u8981\u516c\u544a:</strong><p>' + str + "</p>",
                        $("#cui_nav") && $(div).insertAfter($("#cui_nav")),
                        closeTips()
                    }
                }
            },
            onerror: function() {
                online.log("\u516c\u544a\u8fd4\u56de\u5931\u8d25.....")
            }
        });
        var closeTips = function() {
            $("#win768").bind("click",
            function() {
                $("#winTips").hide()
            })
        };
        try {
            bindHotCountryEvent(hotCountryService, showOrHideElementForHotCountry)
        } catch(e) {}
    } (),
    function() {
        var a = function(a) {
            var b = document.createElement("style");
            b.type = "text/css",
            b.styleSheet ? b.styleSheet.cssText = a: b.innerText = a,
            document.getElementsByTagName("head")[0].appendChild(b)
        },
        b = function(a) {
            var b = !1,
            c = !0,
            d = window.document,
            e = d.documentElement,
            f = d.addEventListener,
            g = f ? "addEventListener": "attachEvent",
            h = f ? "removeEventListener": "detachEvent",
            i = f ? "": "on",
            j = function(c) { ("readystatechange" != c.type || "complete" == d.readyState) && (("load" == c.type ? window: d)[h](i + c.type, j, !1), !b && (b = !0) && a.call(window, c.type || c))
            },
            k = function() {
                try {
                    e.doScroll("left")
                } catch(a) {
                    return void setTimeout(k, 50)
                }
                j("poll")
            };
            if ("complete" == d.readyState) a.call(window, "lazy");
            else {
                if (!f && e.doScroll) {
                    try {
                        c = !window.frameElement
                    } catch(l) {}
                    c && k()
                }
                d[g](i + "DOMContentLoaded", j, !1),
                d[g](i + "readystatechange", j, !1),
                window[g](i + "load", j, !1)
            }
        },
        c = !(!document.all || document.addEventListener),
        d = '.explorer-tips { position: relative; padding: 8px 20px 10px 48px; color: #666; font-size: 14px; background: #FFEED2; font-family: BlinkMacSystemFont, Helvetica, Arial, Tahoma, "PingFang SC","Hiragino Sans GB","Lantinghei SC","Microsoft YaHei",sans-serif; } .explorer-tips strong { color: #FF9C2D; font-size: 16px; font-weight: bold; } .explorer-tips a { color: #4394FF; border-bottom: 1px solid #4394FF; } .explorer-tips a:hover { text-decoration: none; } .icon-remind { position: absolute; left: 24px; top: 11px; width: 16px; height: 18px; background: url(//pic.c-ctrip.com/flight/index/icons/icon_remind.png) no-repeat 0 0; } /* mask */ .explorer-mask {z-index: 100; position: fixed; left: 0; top: 0; right: 0; bottom: 0; filter:progid:DXImageTransform.Microsoft.gradient(enabled="true",startColorstr="#B2000000", endColorstr="#B2000000");background:rgba(0,0,0,0.7); } /* explorer-modal */ .explorer-modal, .explorer-modal h3, .explorer-modal h4 { font-weight: normal; font-family: BlinkMacSystemFont, Helvetica, Arial, Tahoma, "PingFang SC","Hiragino Sans GB","Lantinghei SC","Microsoft YaHei",sans-serif; } .explorer-modal h2, .explorer-modal .close { overflow: hidden; line-height: 999em; } .explorer-modal { z-index: 101; position: fixed; left: 50%; top: 50%; margin: -234px 0 0 -272px; width: 543px; height: 468px; background: url(//pic.c-ctrip.com/flight/index/explorer_modal.png) no-repeat 0 0; } .explorer-modal .modal-header { height: 150px; } .explorer-modal h3 { text-align: center; color: #999; font-size: 16px; font-weight: normal; border-top: 1px solid #e7e7e7; } .explorer-modal h3 span { position: relative; top: -10px; padding: 0 20px; background: #fff; } .explorer-modal .modal-body { padding: 42px 30px 0; height: 224px; } .explorer-modal .QR-code { display: inline-block; /*_display: inline; _zoom: 1;*/ width: 132px; margin: 10px 20px 0 60px; text-align: center; color: #999; } .explorer-modal h4 { margin-top: 5px; } .explorer-modal .modal-bottom { height: 52px; line-height: 52px; color: #666; font-size: 14px; text-align: center; } .explorer-modal .link { margin-left: 15px; color: #4394FF; border-bottom: 1px solid #4394FF; } .explorer-modal .link:hover { text-decoration: none; } .explorer-modal .close { position: absolute; top: 16px; right: 16px; width: 30px; height: 30px; cursor: pointer; }',
        e = '<div class="explorer-tips"> <i class="icon-remind"></i> \u60a8\u5f53\u524d\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u53ef\u80fd\u6709<strong>\u5b89\u5168\u98ce\u9669</strong>\uff0c\u60a8\u53ef\u4ee5\u624b\u673a\u4e0b\u8f7dAPP\u6216\u5347\u7ea7\u6d4f\u89c8\u5668\uff0c<a href="javascript:;">\u67e5\u770b\u8be6\u60c5</a></div>',
        f = '<div class="explorer-mask"></div>                <div class="explorer-modal">                	<div class="modal-header"><h2>\u60a8\u5f53\u524d\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u53ef\u80fd\u6709<span>\u5b89\u5168\u98ce\u9669\uff01</span></h2></div>                	<div class="modal-body">                		<h3><span>\u60a8\u53ef\u4ee5\u624b\u673a\u626b\u7801\u641c\u7d22\u673a\u7968</span></h3>                		<div class="QR-box">                			<div class="QR-code"><img src="//pic.c-ctrip.com/flight/index/QR_h5.png" alt=""><h4>\u624b\u673a\u7f51\u9875\u7248</h4></div>                			<div class="QR-code"><img src="//pic.c-ctrip.com/flight/index/QR_app.png" alt=""><h4>\u643a\u7a0b\u65c5\u884cAPP</h4></div>                		</div>                	</div>                	<div class="modal-bottom">\u6216\u5347\u7ea7\u6d4f\u89c8\u5668<a href="https://www.google.com/chrome/browser/desktop/" class="link" target="_blank">\u8c37\u6b4c\u6d4f\u89c8\u5668</a><a href="http://www.firefox.com.cn/" class="link" target="_blank">\u706b\u72d0\u6d4f\u89c8\u5668</a></div>                	<div class="close">\xd7</div>              </div>';
        b(function() {
            if (c) {
                a(d),
                document.body.insertAdjacentHTML("afterbegin", e),
                document.body.insertAdjacentHTML("beforeend", f);
                var b = function(a) {
                    var b = a ? "show": "hide";
                    cQuery(".explorer-mask")[b](),
                    cQuery(".explorer-modal")[b]()
                };
                cQuery(".explorer-tips a").bind("click",
                function() {
                    b(1)
                }),
                cQuery(".explorer-modal .close").bind("click",
                function() {
                    b(0)
                })
            }
        })
    } ()
} (window.cQuery, window);