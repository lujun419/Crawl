﻿/*! 2018-05-17_16:50:53 sem.am@ctrip.com */
!
function() {
    function e() {
        if (U = T.match(new RegExp("[/?&]c=([^&]+)"))) return 0;
        for (var e, o, i = T.match(new RegExp("[/#&]c=([^&]+)")), t = "", a = "", c = "", r = "", s = 0, m = l.length; s < m;) {
            if (o = l[s].split("|"), k.indexOf(o[1]) > -1) {
                t = o[0],
                r = o[3];
                for (var d, w = 0,
                g = o[2].split(";"), p = g.length; w < p; w++) {
                    if (d = f.match(new RegExp("[/?&]" + g[w] + "([^&]+)"))) {
                        c = d[1];
                        break
                    }
                    break
                }
            }
            s++
        }
        return t || (t = n.test(k) ? k.match(n)[2] : "") ? (i && i.length > 1 ? t = T.indexOf("c=baidumap") >= 0 ? "baidumap": i[1] : c = "google" == t && /gb2312/i.test(f) || "URLEncode" == r ? "_URL." + c: "UTF-8" == r ? "_UTF." + decodeURIComponent(c) : "_UTF." + c, c = escape(c), e = {
            si: t,
            ke: a,
            qu: c,
            ho: k,
            la: x
        },
        u.replace(/\{(\w+)\}/g,
        function(o, i) {
            return e[i]
        })) : 0
    }
    function o() {
        if (!U) return 0;
        var e, o, i = U[1],
        t = "",
        n = "",
        a = "";
        return i.indexOf("A") > -1 && (o = i.split("A"), t = o[0], n = o[1]),
        t ? (n = 1 == n ? "": n, n = escape(n), e = {
            si: t,
            ke: n,
            qu: a,
            ho: k,
            la: x
        },
        u.replace(/\{(\w+)\}/g,
        function(o, i) {
            return e[i]
        })) : 0
    }
    var i = /^\w+:\/\/([^\/]+)/,
    t = /\.ctrip\.com|\.sh\.ctriptravel\.com/,
    n = /^([\w-]+\.)?(.+)\.(in|com|net|org|info|biz|cc|tv|cn|gov\.cn|name|mobi)$/,
    a = /ctrip\.com\.hk|ctrip\.com\.cn|sh\.ctriptravel\.com/,
    c = /english\.|\.english\./,
    r = 7,
    s = new Date;
    s.setTime(s.getTime() + 24 * r * 60 * 60 * 1e3);
    var m = "Session",
    d = "720",
    u = "SmartLinkCode={si}&SmartLinkKeyWord={ke}&SmartLinkQuary={qu}&SmartLinkHost={ho}&SmartLinkLanguage={la}",
    l = ["google|google|q=|UTF-8", "baidu|baidu|wd=;word=;kw=|URLEncode", "yahoo|yahoo|p=|UTF-8", "yahoo|yisou|search:|UTF-8", "yahoo|3721|p=|URLEncode", "sohu|sogou.com|query=|URLEncode", "sohuwz|sohu.com|query=|URLEncode", "sinawz|sina.com||", "sina|iask.com|k=;_searchkey=;key=|URLEncode", "163wz|126.com|q=|URLEncode", "163wz|163.com|q=|URLEncode", "163wz|188.com|q=|URLEncode", "163wz|yeah.net|q=|URLEncode", "163|163.com|q=|URLEncode", "tom|tom.com|word=;w=|URLEncode", "hao123|hao123.com||", "265|265.com||", "21cn|21cn.com|keyword=|URLEncode", "qqwz|qq.com||", "qq|soso.com|w=|URLEncode", "online|online.sh||", "9991|9991.com||", "live|msn|q=|UTF-8", "yodao|yodao|q=|UTF-8", "lycos|lycos|query=|UTF-8", "ask|.ask.com|q=|UTF-8", "altavista|altavista|q=|UTF-8", "search|search.com|q=|UTF-8", "netscape|netscape|query=|UTF-8", "zhongsou|zhongsou|w=;word=|URLEncode", "alice|alice.it|qs=|", "teoma|teoma|q=|UTF-8", "earthlink|earthlink|q=|UTF-8", "cnn|cnn|query=|", "looksmart|looksmart|key=|UTF-8", "about|about|terms=|", "excite|excite|qkw=;q_all=|", "mamma|mamma|query=|UTF-8", "alltheweb|alltheweb|q=|UTF-8", "gigablast|gigablast|q=|UTF-8", "aol|aol|query=|UTF-8", "shtz1104|www.travelzoo.com||", "so.com|so.com||", "qunar.com|qunar.com||", "360cn|so.360.cn||"],
    w = ["www.baidu.com|4897|130026", "www.google.cn|4899|130678", "www.google.com.hk|4899|130678", "www.google.com.tw|4899|130678", "www.soso.com|4900|130701", "www.sogou.com|4901|130709", "www.yahoo.cn|4903|130761", "search.yahoo.com|4903|130761", "www.yodao.com|4904|130788", "so.360.cn|5376|130860", "www.so.com|5376|130860", "www.bing.com|4902|130727", "cn.bing.com|4902|130727", "www.lvping.com|5377|130999"],
    g = ["360oneboxf|5376|130862", "360brandz|5376|153507", "baiduzd|4897|130033", "baidumap|3052|108412"],
    p = ["baidu.com|4897|135366", "google|4899|135371", "soso.com|4900|135374", "sogou.com|4901|135376", "bing.com|4902|135379", "yahoo|4903|135383", "so.com|5376|135390", "2345.com|1119|439101"],
    h = {
        config: [{
            reg: /map.baidu.com$/i,
            aid: 108298,
            sid: 793914,
            sourceID: 55552551
        },
        {
            reg: /nuomi.com$/i,
            aid: 108298,
            sid: 793914,
            sourceID: 55552551
        },
        {
            reg: /lvyou.baidu.com$/i,
            aid: 108298,
            sid: 793916,
            sourceID: 55552551
        },
        {
            reg: /kuai.baidu.com$/i,
            aid: 108298,
            sid: 793917,
            sourceID: 55552551
        },
        {
            reg: /c3c6.com$/i,
            aid: 313278,
            sid: 792638,
            sourceID: 55552551
        },
        {
            reg: /hao568.com$/i,
            aid: 313278,
            sid: 792659,
            sourceID: 55552551
        },
        {
            reg: /1213.org$/i,
            aid: 313278,
            sid: 792660,
            sourceID: 55552551
        },
        {
            reg: /9223.com$/i,
            aid: 313278,
            sid: 792661,
            sourceID: 55552551
        },
        {
            reg: /2345.in$/i,
            aid: 313278,
            sid: 792662,
            sourceID: 55552551
        },
        {
            reg: /wzdq123.com$/i,
            aid: 313278,
            sid: 792667,
            sourceID: 55552551
        },
        {
            reg: /ole99.cn$/i,
            aid: 313278,
            sid: 792669,
            sourceID: 55552551
        },
        {
            reg: /114mo.com$/i,
            aid: 313278,
            sid: 792670,
            sourceID: 55552551
        },
        {
            reg: /wang1314.com$/i,
            aid: 313278,
            sid: 792672,
            sourceID: 55552551
        },
        {
            reg: /baimin.com$/i,
            aid: 313278,
            sid: 792673,
            sourceID: 55552551
        },
        {
            reg: /haokan123.biz$/i,
            aid: 313278,
            sid: 792674,
            sourceID: 55552551
        },
        {
            reg: /myubbs.com$/i,
            aid: 313278,
            sid: 792677,
            sourceID: 55552551
        },
        {
            reg: /3145.com$/i,
            aid: 313278,
            sid: 792678,
            sourceID: 55552551
        },
        {
            reg: /155.com$/i,
            aid: 313278,
            sid: 792679,
            sourceID: 55552551
        }],
        set_cookie: function(e, o) {
            for (var i = 0; i < o.length; i++) {
                var t = o[i].aid,
                n = o[i].sid,
                a = o[i].sourceID,
                c = e.match(o[i].reg);
                if (c) {
                    var r;
                    r = "Union=AllianceID=" + t + "&SID=" + n + "&SourceID=" + a + "&OUID=&Expires=" + s.getTime() + ";path=/;domain=" + I.domain + ";expires=" + s.toGMTString(),
                    document.cookie = r
                }
            }
        },
        init: function(e) {
            this.set_cookie(e, this.config)
        }
    },
    f = document.referrer,
    k = f.match(i),
    D = {
        getCookie: function(e) {
            var o = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            return null != o ? unescape(o[2]) : null
        }
    },
    y = {
        sendRefferTraceLogFn: function(e) {
            var o = '{"type":"pc","union":"' + e + '","referrer":"' + document.referrer + '"}';
            window.__bfi.push(["_tracklog", "mkt_seo_unionlog", o])
        },
        sendRefferTraceLog: function() {
            "undefined" == typeof window.__bfi && (window.__bfi = []);
            var e = D.getCookie("Union");
            this.sendRefferTraceLogFn(e)
        }
    };
    if (k && !t.test(k = k[1])) {
        var U, v = document.domain,
        x = c.test(v) ? "en": "zh",
        T = location.href,
        I = {},
        b = [];
        if ((I[m] = e()) || (I[m] = o())) {
            var S = (location.search || "").match(new RegExp("[\\?&]isctrip=([^&]+)", "i"));
            if ("T" == (S ? unescape(S[1]) : null)) return;
            I.expires = new Date((new Date).getTime() + 36e5 * d).toGMTString(),
            I.path = "/",
            I.domain = v.match(a) || "ctrip.com";
            for (var L in I) b.push(L + "=" + I[L]);
            var q = window.location.href.toLowerCase();
            if (q.indexOf("sid") >= 0 && q.indexOf("allianceid") >= 0);
            else if (h.init(k), f.indexOf("qq.com") >= 0) {
                var O;
                O = "Session=smartlinkcode=U1535&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=;path=/;domain=" + I.domain + ";expires=" + I.expires,
                document.cookie = O,
                O = "Union=AllianceID=1315&SID=1535&OUID=&Expires=" + s.getTime() + ";path=/;domain=" + I.domain + ";expires=" + new Date((new Date).getTime() + 6048e5).toGMTString(),
                document.cookie = O
            } else if (f.indexOf("hao123.com") >= 0) {
                var O;
                O = "Session=smartlinkcode=U1911&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=;path=/;domain=" + I.domain + ";expires=" + I.expires,
                document.cookie = O,
                O = "Union=AllianceID=1630&SID=1911&OUID=&Expires=" + s.getTime() + ";path=/;domain=" + I.domain + ";expires=" + new Date((new Date).getTime() + 6048e5).toGMTString(),
                document.cookie = O
            } else if (f.indexOf("123.sogou.com") >= 0);
            else { (f.indexOf("www.baidu.com") >= 0 || f.indexOf("www.google.cn") >= 0 || f.indexOf("www.google.com.hk") >= 0 || f.indexOf("www.soso.com") >= 0 || f.indexOf("www.bing.com") >= 0 || f.indexOf("www.yahoo.cn") >= 0 || f.indexOf("www.sogou.com") >= 0 || f.indexOf("so.360.cn") >= 0 || f.indexOf("so.com") >= 0) && (document.cookie.indexOf("Union=") >= 0 || document.URL.indexOf("#c") >= 0) && (document.cookie = "Union=;path=/;domain=" + I.domain + ";expires=" + new Date((new Date).getTime() - 864e5).toGMTString()),
                document.cookie = b.join("; ");
                var R, E, F, M, _;
                _ = !1;
                for (var z = 0; z < g.length; z++) if (M = g[z].split("|"), R = M[0], E = M[1], F = M[2], T.indexOf("#c=" + R) >= 0) {
                    var O;
                    O = "Session=smartlinkcode=U" + F + "&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=;path=/;domain=" + I.domain + ";expires=" + I.expires,
                    document.cookie = O,
                    O = "Union=AllianceID=" + E + "&SID=" + F + "&OUID=&Expires=" + s.getTime() + ";path=/;domain=" + I.domain + ";expires=" + new Date((new Date).getTime() + 6048e5).toGMTString(),
                    document.cookie = O,
                    _ = !0;
                    break
                }
                if (!_) for (var z = 0; z < w.length; z++) if (M = w[z].split("|"), R = M[0], E = M[1], F = M[2], f.indexOf(R) >= 0) {
                    var O;
                    O = "Session=smartlinkcode=U" + F + "&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=;path=/;domain=" + I.domain + ";expires=" + I.expires,
                    document.cookie = O,
                    O = "Union=AllianceID=" + E + "&SID=" + F + "&OUID=&Expires=" + s.getTime() + ";path=/;domain=" + I.domain + ";expires=" + new Date((new Date).getTime() + 6048e5).toGMTString(),
                    document.cookie = O,
                    _ = !0;
                    break
                }
                if (!_) for (var z = 0; z < p.length; z++) if (M = p[z].split("|"), R = M[0], E = M[1], F = M[2], f.indexOf(R) >= 0) {
                    var O;
                    O = "Session=smartlinkcode=U" + F + "&smartlinklanguage=zh&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=;path=/;domain=" + I.domain + ";expires=" + I.expires,
                    document.cookie = O,
                    O = "Union=AllianceID=" + E + "&SID=" + F + "&OUID=&Expires=" + s.getTime() + ";path=/;domain=" + I.domain + ";expires=" + new Date((new Date).getTime() + 6048e5).toGMTString(),
                    document.cookie = O,
                    _ = !0;
                    break
                }
            }
            y.sendRefferTraceLog();
            for (var C = ["src%5Fname", "src%5Fkeyword", "src%5FQuary", "src%5Fhost"], $ = 0, A = C.length; $ < A; $++) document.cookie = C[$] + "=; domain=" + I.domain + "; path=/; expires=" + new Date(0).toGMTString()
        }
    }
} (),
function() {
    function e(e) {
        var i = o.match(new RegExp("[\\?&]" + e + "=([^&]+)", "i"));
        return i ? unescape(i[1]) : null
    }
    try {
        var o = location.search || ""
    } catch(i) {
        var o = document.URL.match(/\?[^#]+/) || ""
    }
    for (var t, n = [], a = ["campaign", "adid"], c = 0; c < a.length; c++) t = e(a[c]),
    t && n.push(a[c] + "=" + escape(t));
    if (n.length) {
        var r = document.domain.match(/ctrip\.com\.hk|ctrip\.com\.cn|sh\.ctriptravel\.com/) || "ctrip.com";
        document.cookie = "traceExt=" + n.join("&") + "; domain=" + r + "; path=/; expires=" + new Date((new Date).getTime() + 26784e5).toGMTString()
    }
} (),
function() {
    for (var e = document.getElementsByTagName("script") || [], o = /_bfa\.min\.js/i, i = 0; i < e.length; i++) if (o.test(e[i].src)) return;
    try {
        var t = document.location.href
    } catch(n) {
        var t = document.URL
    }
    if (! (window.$_bf || window.$LAB || window.CtripJsLoader) && /^https?:\/\/[^\/]*\bpages\b/i.test(t)) {
        var a = new Date,
        c = "?v=" + a.getFullYear() + a.getMonth() + "_" + a.getDate() + ".js",
        r = document.createElement("script");
        r.type = "text/javascript",
        r.charset = "utf-8",
        r.async = !0;
        try {
            var s = "https:" == document.location.protocol
        } catch(n) {
            var s = "https:" == t.match(/[^:]+/) + ":"
        }
        r.src = s ? "https://s.c-ctrip.com/_bfa.min.js" + c: "http://webresource.c-ctrip.com/code/ubt/_bfa.min.js" + c;
        var m = document.getElementsByTagName("script")[0];
        m.parentNode.insertBefore(r, m)
    }
} (),
function() {
    function e(e) {
        var o = window.screen.width,
        i = window.screen.height,
        t = "menubar=yes,titlebar=yes,toolbar=yes,location=yes,directories=yes,status=yes,resizable=yes,scrollbars=yes";
        t += ",width=" + o,
        t += ",height=" + i;
        var n = window.open(e, "newwindow", t);
        n && n.blur()
    }
    function o() {
        var e = location.search,
        o = new Object;
        if (e.indexOf("?") != -1) for (var i = e.substr(1).toLocaleLowerCase(), t = i.split("&"), n = 0; n < t.length; n++) o[t[n].split("=")[0]] = unescape(t[n].split("=")[1]);
        return o
    }
    var i = window.location.host;
    if ("hotels.ctrip.com" == i || "hotels.testp.sh.ctriptravel.com" == i || "hotels.uat.sh.ctriptravel.com" == i || "flights.ctrip.com" == i || "flights.testp.sh.ctriptravel.com" == i || "flights.uat.sh.ctriptravel.com" == i) {
        var t = o(),
        n = t.allianceid,
        a = t.sid,
        c = window.location.toString().toLocaleLowerCase();
        if ("3052" == n && "86710" == a || "5376" == n && "176275" == a || "3052" == n && "133134" == a || c.indexOf("#c=360oneboxf") >= 0) {
            var r = "http://www.ctrip.com/home/page_360.asp";
            document.all && e(r)
        }
    }
} (),
function() {
    var e = {
        getQuery: function(e) {
            var o = location.href.match(new RegExp("[?&]" + e + "=([^&#]+)", "i"));
            return null == o || o.length < 1 ? "": o[1]
        }
    },
    o = {
        setCooki: function(e, o, i) {
            var t = i || 7,
            n = new Date,
            a = /^(\w[^#]+)/;
            n.setTime(n.getTime() + 24 * t * 60 * 60 * 1e3),
            o.AllianceID = o.AllianceID.match(a) ? o.AllianceID.match(a)[0] : o.AllianceID,
            o.SID = o.SID.match(a) ? o.SID.match(a)[0] : o.SID;
            var c = "OUID=" + o.OUID + "&AllianceID=" + o.AllianceID + "&SID=" + o.SID + "&SourceID=" + o.SourceID + "&Expires=" + n.getTime();
            document.cookie = e + "=" + c + ";path=/;expires=" + n.toUTCString() + ";domain=" + window.location.hostname.split(".").slice( - 2).join(".") || "ctrip.com"
        },
        getCooki: function(e) {
            var o = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            return null != o ? unescape(o[2]) : null
        },
        setMultiunion: function() {
            var o = e.getQuery("allianceid") || "",
            i = e.getQuery("sid") || e.getQuery("ctripsid") || "",
            t = e.getQuery("ouid") || e.getQuery("actouid") || "",
            n = e.getQuery("sourceid") || ""; (o && i || n) && (UNION = {
                AllianceID: o && i ? o: "",
                SID: o && i ? i: "",
                OUID: o && i ? t: "",
                SourceID: n
            },
            this.setCooki("Union", UNION, 7))
        },
        PostAJax: function(e) {
            if (e) {
                var o = function(e) {
                    return e.status >= 200 && e.status < 300 || 304 == e.status
                },
                i = function() {
                    var e;
                    try {
                        e = new XMLHttpRequest
                    } catch(o) {
                        try {
                            e = new ActiveXObject("Msxml2.XMLHTTP")
                        } catch(o) {
                            try {
                                e = new ActiveXObject("Microsoft.XMLHTTP")
                            } catch(o) {
                                throw "鎮ㄧ殑娴忚鍣ㄤ笉鏀寔AJAX"
                            }
                        }
                    }
                    return e
                } ();
                i.onreadystatechange = function() {
                    4 == i.readyState && (o(i) && i.responseText ? "function" == typeof e.success && e.success(i.responseText) : "function" == typeof e.error && e.error(i.responseText))
                },
                i.open(e.type, e.url, e.async || !0),
                i.setRequestHeader("Content-type", e.contentType || "text/plain; charset=UTF-8"),
                i.withCredentials = !0,
                i.cookieOrigin = window.location.origin,
                i.send(e.param)
            }
        },
        initForC_Ctrip: function(e) {
            var o = window.location,
            i = this,
            t = {
                Union: i.getCooki("Union"),
                MKtUnionTM: function() {
                    var e = 7,
                    o = 864e5 * e,
                    i = (new Date).getTime() + o;
                    return i
                } ()
            };
            if (t && t.Union) {
                var n = "https:" == o.protocol,
                a = {
                    url: o.protocol + e,
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    param: "Union=" + encodeURIComponent(t.Union) + "&MKtUnionTM=" + encodeURIComponent(t.MKtUnionTM) + "&isSec=" + n
                };
                i.PostAJax(a)
            }
        },
        init: function() {
            var e = window.location.href;
            if (/http[s]*\:\/\/pages.c-ctrip.com/i.test(e)) {
                var o = "//m.ctrip.com/mkt-pages-cookie/writecookie";
                this.setMultiunion(),
                this.initForC_Ctrip(o)
            } else {
                if (!/http[s]*\:\/\/[^\/]+?\.ctrip.com/i.test(e)) return ! 1;
                var o = "//www.trip.com/mkt-pages-cookie/writecookie";
                this.setMultiunion(),
                this.initForC_Ctrip(o)
            }
        }
    };
    o.init()
} ();