!
function(a, b) {
    Date.prototype.toISOString || !
    function() {
        function a(a) {
            return 10 > a ? "0" + a: a
        }
        Date.prototype.toISOString = function() {
            return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        }
    } ();
    var c = 0;
    a.extend(a.tmpl, {
        render: function(b, d, e) {
            b += "",
            this._init();
            var f = this._getCache(b);
            f.fn || (f.fn = this._makeFn(f.tmpl));
            try {
                var g = f.fn(d || {},
                e || {})
            } catch(h) {
                return 5 > c && (c++, a.ajax(online.getBaseUrl("AjaxTempUserRegister.ashx"), {
                    method: "POST",
                    context: {
                        Tmpl: b.substr(0, 200),
                        PriceInfo: d
                    }
                })),
                ""
            }
            return g
        }
    }),
    "undefined" == typeof window.__bfi && (window.__bfi = []),
    "undefined" == typeof online && (online = {}),
    online.msg || (online.msg = b.MSG || {}),
    b.pageGlobal && (b.pageGlobal.NewUbt ? b.pageGlobal.NewUbt.special || (b.pageGlobal.NewUbt.special = {}) : b.pageGlobal.NewUbt = {
        special: {}
    },
    online.setNewUbtSpecial = function(a, c) {
        a && (b.pageGlobal.NewUbt.special[a] = "undefined" == typeof c ? (b.pageGlobal.NewUbt.special[a] || 0) + 1 : c)
    },
    online.getNewUbtSpecial = function(a) {
        return b.pageGlobal.NewUbt.special[a]
    }),
    online.extend = function() {
        var a = arguments,
        b = 1 == a.length ? online: a[0],
        c = a.length > 1 ? a[1] : a[0];
        if (null == c) return b;
        try {
            for (var d in c) ! b.hasOwnProperty(c[d]) && ("object" == typeof b && (b[d] = c[d]) || "function" == typeof b && (b.prototype[d] = c[d]));
            return b
        } catch(e) {}
    };
    var d = {},
    e = location.host,
    f = "https://accounts.ctrip.com";
    null !== e.match(/\.dev\.|localhost/i) ? f = "http://accounts.dev.sh.ctriptravel.com": null !== e.match(/\.fat\d*\./i) && (f = "http://accounts.fat49.qa.nt.ctripcorp.com"),
    online.ssoDomain = f,
    online.extend({
        InitSuggestionSource: {
            "\u56fd\u5185\u70ed\u95e8": [{
                display: "\u4e0a\u6d77",
                data: "Shanghai|\u4e0a\u6d77(SHA)|2|480"
            },
            {
                display: "\u5317\u4eac",
                data: "Beijing|\u5317\u4eac(BJS)|1|480"
            },
            {
                display: "\u9999\u6e2f",
                data: "Hong Kong|\u9999\u6e2f(HKG)|58|480"
            },
            {
                display: "\u5e7f\u5dde",
                data: "Guangzhou|\u5e7f\u5dde(CAN)|32|480"
            },
            {
                display: "\u676d\u5dde",
                data: "Hangzhou|\u676d\u5dde(HGH)|17|480"
            },
            {
                display: "\u53a6\u95e8",
                data: "Xiamen|\u53a6\u95e8(XMN)|25|480"
            },
            {
                display: "\u5357\u4eac",
                data: "Nanjing|\u5357\u4eac(NKG)|12|480"
            },
            {
                display: "\u6fb3\u95e8",
                data: "MACAU|\u6fb3\u95e8(MFM)|59|480"
            },
            {
                display: "\u6210\u90fd",
                data: "Chengdu|\u6210\u90fd(CTU)|28|480"
            },
            {
                display: "\u9752\u5c9b",
                data: "Qingdao|\u9752\u5c9b(TAO)|7|480"
            },
            {
                display: "\u53f0\u5317",
                data: "Taipei|\u53f0\u5317(TPE)|617|480"
            },
            {
                display: "\u798f\u5dde",
                data: "Fuzhou|\u798f\u5dde(FOC)|258|480"
            },
            {
                display: "\u5929\u6d25",
                data: "Tianjin|\u5929\u6d25(TSN)|3|480"
            },
            {
                display: "\u6df1\u5733",
                data: "Shenzhen|\u6df1\u5733(SZX)|30|480"
            },
            {
                display: "\u5927\u8fde",
                data: "Dalian|\u5927\u8fde(DLC)|6|480"
            },
            {
                display: "\u6c88\u9633",
                data: "Shenyang|\u6c88\u9633(SHE)|451|480"
            },
            {
                display: "\u6606\u660e",
                data: "Kunming|\u6606\u660e(KMG)|34|480"
            },
            {
                display: "\u6b66\u6c49",
                data: "Wuhan|\u6b66\u6c49(WUH)|477|480"
            },
            {
                display: "\u5b81\u6ce2",
                data: "Ningbo|\u5b81\u6ce2(NGB)|375|480"
            },
            {
                display: "\u65e0\u9521",
                data: "Wuxi|\u65e0\u9521(WUX)|13|480"
            },
            {
                display: "\u664b\u6c5f",
                data: "Jinjiang|\u664b\u6c5f(JJN)|1803|480"
            },
            {
                display: "\u91cd\u5e86",
                data: "Chongqing|\u91cd\u5e86(CKG)|4|480"
            },
            {
                display: "\u4e09\u4e9a",
                data: "Sanya|\u4e09\u4e9a(SYX)|43|480"
            },
            {
                display: "\u897f\u5b89",
                data: "Xian|\u897f\u5b89(SIA)|10|480"
            }],
            "\u56fd\u9645\u70ed\u95e8": [{
                display: "\u9999\u6e2f",
                data: "Hong Kong|\u9999\u6e2f(HKG)|58|480"
            },
            {
                display: "\u9996\u5c14",
                data: "Seoul|\u9996\u5c14(SEL)|274|540"
            },
            {
                display: "\u53f0\u5317",
                data: "Taipei|\u53f0\u5317(TPE)|617|480"
            },
            {
                display: "\u4e1c\u4eac",
                data: "Tokyo|\u4e1c\u4eac(TYO)|228|540"
            },
            {
                display: "\u65b0\u52a0\u5761",
                data: "Singapore|\u65b0\u52a0\u5761(SIN)|73|480"
            },
            {
                display: "\u6fb3\u95e8",
                data: "MACAU|\u6fb3\u95e8(MFM)|59|480"
            },
            {
                display: "\u66fc\u8c37",
                data: "Bangkok|\u66fc\u8c37(BKK)|359|420"
            },
            {
                display: "\u5927\u962a",
                data: "Osaka|\u5927\u962a(OSA)|219|540"
            },
            {
                display: "\u80e1\u5fd7\u660e\u5e02",
                data: "Ho Chi Minh City|\u80e1\u5fd7\u660e\u5e02(SGN)|301|420"
            },
            {
                display: "\u9a6c\u5c3c\u62c9",
                data: "Manila|\u9a6c\u5c3c\u62c9(MNL)|364|480"
            },
            {
                display: "\u540d\u53e4\u5c4b",
                data: "Nagoya|\u540d\u53e4\u5c4b(NGO)|360|540"
            },
            {
                display: "\u4f26\u6566(\u82f1\u56fd)",
                data: "London|\u4f26\u6566(\u82f1\u56fd)(LON)|338|0"
            },
            {
                display: "\u5409\u9686\u5761",
                data: "Kuala Lumpur|\u5409\u9686\u5761(KUL)|315|480"
            },
            {
                display: "\u91dc\u5c71",
                data: "Pusan|\u91dc\u5c71(PUS)|253|540"
            },
            {
                display: "\u6089\u5c3c(\u6fb3\u5927\u5229\u4e9a)",
                data: "Sydney|\u6089\u5c3c(\u6fb3\u5927\u5229\u4e9a)(SYD)|501|660"
            },
            {
                display: "\u6cd5\u5170\u514b\u798f",
                data: "Frankfurt|\u6cd5\u5170\u514b\u798f(FRA)|250|60"
            },
            {
                display: "\u6e29\u54e5\u534e",
                data: "Vancouver|\u6e29\u54e5\u534e(YVR)|476|-480"
            },
            {
                display: "\u5df4\u9ece",
                data: "Paris|\u5df4\u9ece(PAR)|192|60"
            },
            {
                display: "\u7ebd\u7ea6",
                data: "New York|\u7ebd\u7ea6(NYC)|633|-300"
            },
            {
                display: "\u6d1b\u6749\u77f6",
                data: "Los Angeles|\u6d1b\u6749\u77f6(LAX)|347|-480"
            },
            {
                display: "\u590f\u5a01\u5937",
                data: "Honolulu|\u590f\u5a01\u5937(HNL)|757|-600"
            }],
            "\u4e9a\u6d32": [{
                display: "\u9999\u6e2f",
                data: "Hong Kong|\u9999\u6e2f(HKG)|58|480"
            },
            {
                display: "\u4e1c\u4eac",
                data: "Tokyo|\u4e1c\u4eac(TYO)|228|540"
            },
            {
                display: "\u53f0\u5317",
                data: "Taipei|\u53f0\u5317(TPE)|617|480"
            },
            {
                display: "\u9996\u5c14",
                data: "Seoul|\u9996\u5c14(SEL)|274|540"
            },
            {
                display: "\u65b0\u52a0\u5761",
                data: "Singapore|\u65b0\u52a0\u5761(SIN)|73|480"
            },
            {
                display: "\u66fc\u8c37",
                data: "Bangkok|\u66fc\u8c37(BKK)|359|420"
            },
            {
                display: "\u5409\u9686\u5761",
                data: "Kuala Lumpur|\u5409\u9686\u5761(KUL)|315|480"
            },
            {
                display: "\u5927\u962a",
                data: "Osaka|\u5927\u962a(OSA)|219|540"
            },
            {
                display: "\u6fb3\u95e8",
                data: "MACAU|\u6fb3\u95e8(MFM)|59|480"
            },
            {
                display: "\u96c5\u52a0\u8fbe",
                data: "Jakarta|\u96c5\u52a0\u8fbe(JKT)|524|420"
            },
            {
                display: "\u80e1\u5fd7\u660e\u5e02",
                data: "Ho Chi Minh City|\u80e1\u5fd7\u660e\u5e02(SGN)|301|420"
            },
            {
                display: "\u9a6c\u5c3c\u62c9",
                data: "Manila|\u9a6c\u5c3c\u62c9(MNL)|364|480"
            },
            {
                display: "\u5df4\u5398\u5c9b",
                data: "Bali|\u5df4\u5398\u5c9b(DPS)|723|480"
            },
            {
                display: "\u540d\u53e4\u5c4b",
                data: "Nagoya|\u540d\u53e4\u5c4b(NGO)|360|540"
            },
            {
                display: "\u666e\u5409\u5c9b",
                data: "Phuket|\u666e\u5409\u5c9b(HKT)|725|420"
            },
            {
                display: "\u6cb3\u5185",
                data: "Hanoi|\u6cb3\u5185(HAN)|286|420"
            },
            {
                display: "\u9a6c\u7d2f",
                data: "MALDIVES|\u9a6c\u7d2f(MLE)|1207|300"
            },
            {
                display: "\u8fea\u62dc",
                data: "DUBAI|\u8fea\u62dc(DXB)|220|240"
            },
            {
                display: "\u91dc\u5c71",
                data: "Pusan|\u91dc\u5c71(PUS)|253|540"
            },
            {
                display: "\u52a0\u5fb7\u6ee1\u90fd",
                data: "Kathmandu|\u52a0\u5fb7\u6ee1\u90fd(KTM)|304|345"
            },
            {
                display: "\u9ad8\u96c4",
                data: "Kaohsiung|\u9ad8\u96c4(KHH)|720|480"
            },
            {
                display: "\u798f\u5188",
                data: "Fukuoka|\u798f\u5188(FUK)|248|540"
            },
            {
                display: "\u91d1\u8fb9",
                data: "PHNOM PENH|\u91d1\u8fb9(PNH)|303|420"
            },
            {
                display: "\u5fb7\u91cc",
                data: "Delhi|\u5fb7\u91cc(DEL)|230|330"
            },
            {
                display: "\u6d4e\u5dde\u5c9b",
                data: "JEJU|\u6d4e\u5dde\u5c9b(CJU)|737|540"
            },
            {
                display: "\u672d\u5e4c",
                data: "Hokkaido|\u672d\u5e4c(SPK)|641|540"
            },
            {
                display: "\u4f0a\u65af\u5766\u5e03\u5c14",
                data: "Istanbul|\u4f0a\u65af\u5766\u5e03\u5c14(IST)|532|120"
            },
            {
                display: "\u4e4c\u5170\u5df4\u6258",
                data: "ULAANBAATAR|\u4e4c\u5170\u5df4\u6258(ULN)|483|480"
            },
            {
                display: "\u5b5f\u4e70",
                data: "Mumbai|\u5b5f\u4e70(BOM)|724|330"
            },
            {
                display: "\u8328\u57ce",
                data: "IBARAKI|\u8328\u57ce(IBR)|20748|540"
            }],
            "\u6b27\u6d32": [{
                display: "\u4f26\u6566(\u82f1\u56fd)",
                data: "London|\u4f26\u6566(\u82f1\u56fd)(LON)|338|0"
            },
            {
                display: "\u5df4\u9ece",
                data: "Paris|\u5df4\u9ece(PAR)|192|60"
            },
            {
                display: "\u6cd5\u5170\u514b\u798f",
                data: "Frankfurt|\u6cd5\u5170\u514b\u798f(FRA)|250|60"
            },
            {
                display: "\u83ab\u65af\u79d1",
                data: "Moscow|\u83ab\u65af\u79d1(MOW)|366|180"
            },
            {
                display: "\u7f57\u9a6c",
                data: "Rome|\u7f57\u9a6c(ROM)|343|60"
            },
            {
                display: "\u963f\u59c6\u65af\u7279\u4e39",
                data: "Amsterdam|\u963f\u59c6\u65af\u7279\u4e39(AMS)|176|60"
            },
            {
                display: "\u7c73\u5170",
                data: "Milan|\u7c73\u5170(MIL)|361|60"
            },
            {
                display: "\u6155\u5c3c\u9ed1",
                data: "Munich|\u6155\u5c3c\u9ed1(MUC)|363|60"
            },
            {
                display: "\u65af\u5fb7\u54e5\u5c14\u6469",
                data: "Stockholm|\u65af\u5fb7\u54e5\u5c14\u6469(STO)|420|60"
            },
            {
                display: "\u67cf\u6797",
                data: "Berlin|\u67cf\u6797(BER)|193|60"
            },
            {
                display: "\u66fc\u5f7b\u65af\u7279(\u82f1\u56fd)",
                data: "Manchester|\u66fc\u5f7b\u65af\u7279(\u82f1\u56fd)(MAN)|722|0"
            },
            {
                display: "\u9a6c\u5fb7\u91cc",
                data: "Madrid|\u9a6c\u5fb7\u91cc(MAD)|357|60"
            },
            {
                display: "\u82cf\u9ece\u4e16",
                data: "Zurich|\u82cf\u9ece\u4e16(ZRH)|434|60"
            },
            {
                display: "\u5e03\u9c81\u585e\u5c14",
                data: "Brussels|\u5e03\u9c81\u585e\u5c14(BRU)|196|60"
            },
            {
                display: "\u54e5\u672c\u54c8\u6839",
                data: "Copenhagen|\u54e5\u672c\u54c8\u6839(CPH)|260|60"
            },
            {
                display: "\u8d6b\u5c14\u8f9b\u57fa",
                data: "Helsinki|\u8d6b\u5c14\u8f9b\u57fa(HEL)|277|120"
            },
            {
                display: "\u7ef4\u4e5f\u7eb3",
                data: "Vienna|\u7ef4\u4e5f\u7eb3(VIE)|651|60"
            },
            {
                display: "\u5df4\u585e\u7f57\u90a3",
                data: "Barcelona|\u5df4\u585e\u7f57\u90a3(BCN)|707|60"
            },
            {
                display: "\u96c5\u5178",
                data: "Athens|\u96c5\u5178(ATH)|710|120"
            },
            {
                display: "\u7231\u4e01\u5821",
                data: "Edinburgh|\u7231\u4e01\u5821(EDI)|706|0"
            },
            {
                display: "\u4f2f\u660e\u7ff0(\u82f1\u56fd)",
                data: "Birmingham|\u4f2f\u660e\u7ff0(\u82f1\u56fd)(BHX)|1270|0"
            },
            {
                display: "\u7ebd\u5361\u65af\u5c14(\u82f1\u56fd)",
                data: "Newcastle|\u7ebd\u5361\u65af\u5c14(\u82f1\u56fd)(NCL)|1289|0"
            },
            {
                display: "\u65e5\u5185\u74e6",
                data: "Geneva|\u65e5\u5185\u74e6(GVA)|666|60"
            },
            {
                display: "\u5723\u5f7c\u5f97\u5821",
                data: "SAINT PETERSBURG|\u5723\u5f7c\u5f97\u5821(LED)|798|180"
            },
            {
                display: "\u683c\u62c9\u65af\u54e5",
                data: "Glasgow|\u683c\u62c9\u65af\u54e5(GLA)|780|0"
            },
            {
                display: "\u57fa\u8f85",
                data: "Kiev|\u57fa\u8f85(IEV)|306|120"
            },
            {
                display: "\u5e03\u8fbe\u4f69\u65af",
                data: "Budapest|\u5e03\u8fbe\u4f69\u65af(BUD)|637|60"
            },
            {
                display: "\u6c49\u5821",
                data: "Hamburg|\u6c49\u5821(HAM)|763|60"
            },
            {
                display: "\u5e03\u62c9\u683c",
                data: "Prague|\u5e03\u62c9\u683c(PRG)|1288|60"
            },
            {
                display: "\u675c\u585e\u5c14\u591a\u592b",
                data: "Dusseldorf|\u675c\u585e\u5c14\u591a\u592b(DUS)|762|60"
            }],
            "\u7f8e\u6d32": [{
                display: "\u7ebd\u7ea6",
                data: "New York|\u7ebd\u7ea6(NYC)|633|-300"
            },
            {
                display: "\u6d1b\u6749\u77f6",
                data: "Los Angeles|\u6d1b\u6749\u77f6(LAX)|347|-480"
            },
            {
                display: "\u65e7\u91d1\u5c71",
                data: "San Francisco|\u65e7\u91d1\u5c71(SFO)|313|-480"
            },
            {
                display: "\u6e29\u54e5\u534e",
                data: "Vancouver|\u6e29\u54e5\u534e(YVR)|476|-480"
            },
            {
                display: "\u829d\u52a0\u54e5",
                data: "Chicago|\u829d\u52a0\u54e5(CHI)|549|-360"
            },
            {
                display: "\u591a\u4f26\u591a",
                data: "Toronto|\u591a\u4f26\u591a(YTO)|461|-300"
            },
            {
                display: "\u897f\u96c5\u56fe",
                data: "Seattle|\u897f\u96c5\u56fe(SEA)|511|-480"
            },
            {
                display: "\u534e\u76db\u987f",
                data: "Washington|\u534e\u76db\u987f(WAS)|676|-300"
            },
            {
                display: "\u6ce2\u58eb\u987f",
                data: "Boston|\u6ce2\u58eb\u987f(BOS)|703|-300"
            },
            {
                display: "\u5e95\u7279\u5f8b",
                data: "Detroit|\u5e95\u7279\u5f8b(DTT)|233|-300"
            },
            {
                display: "\u4e9a\u7279\u5170\u5927",
                data: "Atlanta|\u4e9a\u7279\u5170\u5927(ATL)|704|-300"
            },
            {
                display: "\u4f11\u65af\u6566",
                data: "Houston|\u4f11\u65af\u6566(HOU)|701|-360"
            },
            {
                display: "\u8499\u7279\u5229\u5c14",
                data: "Montreal|\u8499\u7279\u5229\u5c14(YMQ)|759|-300"
            },
            {
                display: "\u590f\u5a01\u5937",
                data: "Honolulu|\u590f\u5a01\u5937(HNL)|757|-600"
            },
            {
                display: "\u585e\u73ed",
                data: "Saipan|\u585e\u73ed(SPN)|1237|600"
            },
            {
                display: "\u8fbe\u62c9\u65af",
                data: "Dallas|\u8fbe\u62c9\u65af(DFW)|705|-360"
            },
            {
                display: "\u660e\u5c3c\u963f\u6ce2\u5229\u65af",
                data: "Minneapolis|\u660e\u5c3c\u963f\u6ce2\u5229\u65af(MSP)|1238|-360"
            },
            {
                display: "\u8d39\u57ce",
                data: "Philadelphia|\u8d39\u57ce(PHL)|1189|-300"
            },
            {
                display: "\u5723\u4fdd\u7f57(\u5df4\u897f)",
                data: "Sao Paulo|\u5723\u4fdd\u7f57(\u5df4\u897f)(SAO)|415|-120"
            },
            {
                display: "\u6e25\u592a\u534e",
                data: "Ottawa|\u6e25\u592a\u534e(YOW)|760|-300"
            },
            {
                display: "\u58a8\u897f\u54e5\u57ce",
                data: "Mexico City|\u58a8\u897f\u54e5\u57ce(MEX)|691|-360"
            },
            {
                display: "\u62c9\u65af\u7ef4\u52a0\u65af",
                data: "Las Vegas|\u62c9\u65af\u7ef4\u52a0\u65af(LAS)|675|-480"
            },
            {
                display: "\u5361\u5c14\u52a0\u91cc",
                data: "Calgary|\u5361\u5c14\u52a0\u91cc(YYC)|761|-420"
            },
            {
                display: "\u8fc8\u963f\u5bc6",
                data: "Miami|\u8fc8\u963f\u5bc6(MIA)|702|-300"
            },
            {
                display: "\u4e39\u4f5b",
                data: "Denver|\u4e39\u4f5b(DEN)|699|-420"
            },
            {
                display: "\u5965\u5170\u591a",
                data: "Orlando|\u5965\u5170\u591a(ORL)|1187|-300"
            },
            {
                display: "\u6ce2\u7279\u5170(\u7f8e\u56fd)",
                data: "Portland|\u6ce2\u7279\u5170(\u7f8e\u56fd)(PDX)|694|-480"
            },
            {
                display: "\u66fc\u5f7b\u65af\u7279(\u7f8e\u56fd)",
                data: "Manchester|\u66fc\u5f7b\u65af\u7279(\u7f8e\u56fd)(MHT)|1877|-300"
            },
            {
                display: "\u57c3\u5fb7\u8499\u987f",
                data: "Edmonton|\u57c3\u5fb7\u8499\u987f(YEA)|1245|-420"
            },
            {
                display: "\u5e03\u5b9c\u8bfa\u65af\u827e\u5229\u65af",
                data: "Buenosaires|\u5e03\u5b9c\u8bfa\u65af\u827e\u5229\u65af(BUE)|807|-180"
            }],
            "\u975e\u6d32": [{
                display: "\u5f00\u7f57",
                data: "Cairo|\u5f00\u7f57(CAI)|332|120"
            },
            {
                display: "\u7ea6\u7ff0\u5185\u65af\u5821",
                data: "Johannesburg|\u7ea6\u7ff0\u5185\u65af\u5821(JNB)|684|120"
            },
            {
                display: "\u5f00\u666e\u6566",
                data: "Cape Town|\u5f00\u666e\u6566(CPT)|683|120"
            },
            {
                display: "\u5185\u7f57\u6bd5",
                data: "Nairobi|\u5185\u7f57\u6bd5(NBO)|825|180"
            },
            {
                display: "\u62c9\u5404\u65af",
                data: "Lagos|\u62c9\u5404\u65af(LOS)|783|60"
            },
            {
                display: "\u7f57\u5b89\u8fbe",
                data: "Luanda|\u7f57\u5b89\u8fbe(LAD)|842|60"
            },
            {
                display: "\u6bdb\u91cc\u6c42\u65af",
                data: "Mauritius|\u6bdb\u91cc\u6c42\u65af(MRU)|785|240"
            },
            {
                display: "\u8fbe\u7d2f\u65af\u8428\u62c9\u59c6",
                data: "Dar es salaam|\u8fbe\u7d2f\u65af\u8428\u62c9\u59c6(DAR)|814|180"
            },
            {
                display: "\u4e9a\u7684\u65af\u4e9a\u8d1d\u5df4",
                data: "Addis ababa|\u4e9a\u7684\u65af\u4e9a\u8d1d\u5df4(ADD)|635|180"
            },
            {
                display: "\u5580\u571f\u7a46",
                data: "Khartoum|\u5580\u571f\u7a46(KRT)|1279|180"
            },
            {
                display: "\u963f\u514b\u62c9",
                data: "Accra|\u963f\u514b\u62c9(ACC)|1274|0"
            },
            {
                display: "\u963f\u5c14\u53ca\u5c14",
                data: "Algiers|\u963f\u5c14\u53ca\u5c14(ALG)|1271|60"
            },
            {
                display: "\u5361\u8428\u5e03\u5170\u5361",
                data: "Casablanca|\u5361\u8428\u5e03\u5170\u5361(CAS)|809|0"
            },
            {
                display: "\u5fb7\u73ed",
                data: "durban|\u5fb7\u73ed(DUR)|1278|120"
            },
            {
                display: "\u7a81\u5c3c\u65af",
                data: "Tunis|\u7a81\u5c3c\u65af(TUN)|1280|60"
            },
            {
                display: "\u5362\u8428\u5361",
                data: "Lusaka|\u5362\u8428\u5361(LUN)|816|120"
            },
            {
                display: "\u54c8\u62c9\u96f7",
                data: "Harare|\u54c8\u62c9\u96f7(HRE)|849|120"
            },
            {
                display: "\u96c5\u6e29\u5f97",
                data: "Yaounde|\u96c5\u6e29\u5f97(YAO)|4206|60"
            },
            {
                display: "\u54c8\u535a\u7f57\u5185",
                data: "Gaborone|\u54c8\u535a\u7f57\u5185(GBE)|857|120"
            },
            {
                display: "\u91d1\u6c99\u8428",
                data: "Kinshasa|\u91d1\u6c99\u8428(FIH)|845|60"
            },
            {
                display: "\u9a6c\u666e\u6258",
                data: "Maputo|\u9a6c\u666e\u6258(MPM)|863|120"
            },
            {
                display: "\u675c\u963f\u62c9",
                data: "Douala|\u675c\u963f\u62c9(DLA)|1272|60"
            },
            {
                display: "\u8d39\u91cc\u6566",
                data: "Freetown|\u8d39\u91cc\u6566(FNA)|4210|0"
            },
            {
                display: "\u963f\u6bd4\u8ba9",
                data: "Abidjan|\u963f\u6bd4\u8ba9(ABJ)|3265|0"
            },
            {
                display: "\u5362\u514b\u7d22",
                data: "Luxor|\u5362\u514b\u7d22(LXR)|730|120"
            }],
            "\u5927\u6d0b\u6d32": [{
                display: "\u6089\u5c3c(\u6fb3\u5927\u5229\u4e9a)",
                data: "Sydney|\u6089\u5c3c(\u6fb3\u5927\u5229\u4e9a)(SYD)|501|660"
            },
            {
                display: "\u58a8\u5c14\u672c(\u6fb3\u5927\u5229\u4e9a)",
                data: "Melbourne|\u58a8\u5c14\u672c(\u6fb3\u5927\u5229\u4e9a)(MEL)|358|660"
            },
            {
                display: "\u5965\u514b\u5170(\u65b0\u897f\u5170)",
                data: "Auckland|\u5965\u514b\u5170(\u65b0\u897f\u5170)(AKL)|678|780"
            },
            {
                display: "\u5e03\u91cc\u65af\u73ed",
                data: "Brisbane|\u5e03\u91cc\u65af\u73ed(BNE)|680|600"
            },
            {
                display: "\u963f\u5fb7\u83b1\u5fb7",
                data: "Adelaide|\u963f\u5fb7\u83b1\u5fb7(ADL)|1243|630"
            },
            {
                display: "\u73c0\u65af",
                data: "Perth|\u73c0\u65af(PER)|681|480"
            },
            {
                display: "\u60e0\u7075\u987f",
                data: "Wellington|\u60e0\u7075\u987f(WLG)|843|780"
            },
            {
                display: "\u582a\u57f9\u62c9",
                data: "Canberra|\u582a\u57f9\u62c9(CBR)|679|660"
            },
            {
                display: "\u51ef\u6069\u65af",
                data: "Cairns|\u51ef\u6069\u65af(CNS)|728|600"
            },
            {
                display: "\u6960\u8fea",
                data: "Nadi|\u6960\u8fea(NAN)|791|780"
            },
            {
                display: "\u9ec4\u91d1\u6d77\u5cb8",
                data: "Gold coast|\u9ec4\u91d1\u6d77\u5cb8(OOL)|1210|600"
            },
            {
                display: "\u5e15\u76ae\u5824",
                data: "PAPEETE|\u5e15\u76ae\u5824(PPT)|5646|-600"
            },
            {
                display: "\u970d\u5df4\u7279",
                data: "Hobart|\u970d\u5df4\u7279(HBA)|1446|660"
            },
            {
                display: "\u8fbe\u5c14\u6587",
                data: "Darwin|\u8fbe\u5c14\u6587(DRW)|682|570"
            },
            {
                display: "\u8fbe\u5c3c\u4e01",
                data: "DUNEDIN|\u8fbe\u5c3c\u4e01(DUD)|1297|780"
            }]
        },
        getInitSuggestion: function(a) {
            var b = {};
            /start/i.test(a) ? (b["\u56fd\u9645\u70ed\u95e8"] = this.InitSuggestionSource["\u56fd\u9645\u70ed\u95e8"], b["\u56fd\u5185\u70ed\u95e8"] = this.InitSuggestionSource["\u56fd\u5185\u70ed\u95e8"]) : (b["\u56fd\u5185\u70ed\u95e8"] = this.InitSuggestionSource["\u56fd\u5185\u70ed\u95e8"], b["\u56fd\u9645\u70ed\u95e8"] = this.InitSuggestionSource["\u56fd\u9645\u70ed\u95e8"]);
            for (var c in this.InitSuggestionSource) this.InitSuggestionSource.hasOwnProperty(c) && (b[c] = this.InitSuggestionSource[c]);
            return {
                suggestion: b
            }
        },
        __name: "online",
        __BaseURL: null,
        charset: a.config("charset").toLowerCase(),
        siteName: "/",
        getBaseUrl: function(a) {
            return (online.__BaseURL || (online.__BaseURL = ("/" + (location.href.split("/")[3] || "") + "/").replace("//", "/"))) + (a || "")
        },
        log: function(a, c, d) {
            if (online.debug && b.console) try {
                var e = "" != c && "info" != c && "warn" != c && "log" != c;
                switch (d = d || "log", arguments.length) {
                case 1:
                    c = a,
                    a = (new Date).toLocaleString();
                    break;
                case 2:
                    e || (d = c, c = a, a = (new Date).toLocaleString())
                }
                b.console[d] && b.console[d]("[ " + a + " ] " + c)
            } catch(f) {}
        },
        getLocalTime: function(a, b) {
            if (isNaN(1 * a)) return (new Date).toDate();
            var c = b || window.ServerTime || new Date;
            return new Date(c.getTime() + 6e4 * c.getTimezoneOffset() + 6e4 * a).toStdDateString().toDate() || (new Date).toDate()
        },
        checkLogin: function(b) {
            if ("undefined" == typeof online._lastId) {
                var c = a.cookie.get("ticket_ctrip") || a.cookie.get("ticket%5Fctrip");
                if (null === c) return a.warning("checkLogin", "cookie check false"),
                online.checkLoginCallback({
                    code: "F"
                });
                online._lastId = b,
                $LAB.script(f + "/member/ajax/AjaxCheckLoginStatus.aspx?jsonp=online.checkLoginCallback&ticketStr=" + encodeURIComponent(c)),
                clearTimeout(online.__timer),
                online.__timer = setTimeout(function() {
                    a.warning("checkLoginTimeout", "call AjaxCheckLoginStatus.aspx timeout"),
                    online.checkLoginCallback({
                        code: "F"
                    })
                },
                5678)
            }
        },
        checkLoginCallback: function(b) {
            var c = online._lastId;
            return delete online._lastId,
            clearTimeout(online.__timer),
            b && "T" === b.code ? (a.warning("checkLoginCallback", "islogin"), void(window.__SSO_submit ? window.__SSO_submit(c) : a.warning("checkLoginCallback", "__SSO_submit undefined"))) : (a.warning("checkLoginCallback", "\u8df3\u767b\u9646\u9875!"), void(location.href = f + "/member/login.aspx?responsemethod=get&BackUrl=" + encodeURIComponent(location.href)))
        },
        namespace: function(a) {
            var b = -1 != a.indexOf(".") ? a.split(".") : a,
            c = arguments[1],
            d = online;
            if (b instanceof Array) for (var e = b[0] == online.__name ? 1 : 0, f = b.length; f > e && (!c || e != f - 1); e++) d[b[e]] = d[b[e]] || {},
            d = d[b[e]];
            else {
                if (c) return a;
                d[a] = d[a] || {},
                d = d[a]
            }
            return d
        },
        namespaces: function(a, b) {
            var c = online.namespace(a);
            for (var d in b) c[d] = b[d];
            return c
        },
        version: function() {
            return navigator.userAgent.toLowerCase().match(/msie (\d+)/)[1]
        },
        domain: function() {
            var a = location.host.match(/testp|test|uat/),
            b = /.hk/.test(location.host) ? ".hk": "";
            return null != a ? "ctriptravel.com" + b: "ctrip.com" + b
        } (),
        getSiteName: function(a) {
            return location.protocol + "//" + location.host + "/"
        },
        isNull: function(a) {
            return a ? "" == a.value.trim() || a.getAttribute("mod_notice_tip") == a.value || a.getAttribute("_cqnotice") == a.value: !0
        },
        create: function(a, b) {
            try {
                var c = b.methods,
                d = b.options,
                e = a;
                online.log("create Class[" + e + "] start...");
                var f = -1 != a.indexOf(".") ? online.namespace(a, !0) : online;
                return a = -1 != a.indexOf(".") ? a.substring(1 * a.lastIndexOf(".") + 1) : a,
                f[a] = function() {
                    d && this.extend(this, d),
                    this.initialize && !this.isInit && this.initialize.apply(this, arguments),
                    this.isInit = !0
                },
                online.extend(f[a], c),
                online.extend(f[a], {
                    extend: online.extend,
                    info: function() {
                        online.log("[" + this.getClassName() + "] constructor init...")
                    },
                    getClassName: function() {
                        return e
                    }
                }),
                online.__clazz[e] = !0,
                online.log("create Class[" + e + "] is OK"),
                f[a]
            } catch(g) {
                online.log("ClassException", "(Create a class failed!) " + g, "warn")
            }
            return null
        },
        $c: function(b, c) {
            var d = b.split("."),
            e = online;
            try {
                for (var f = d[0] == online.__name ? 1 : 0, g = d.length; g > f; f++) e = e[d[f]];
                return "undefined" != typeof e ? new e(c || {}) : null
            } catch(h) {
                return a.error("$c:" + b, h),
                null
            }
        },
        $get: function() {
            var a = arguments[1] || !1;
            return document.getElementById("ctl00_MainContentPlaceHolder_" + (a ? "": "QuickSearchControl_") + arguments[0])
        },
        hasClass: function() {
            return arguments[0].className.match(new RegExp("(\\s|^)" + arguments[1] + "(\\s|$)"))
        },
        addClass: function() {
            online.hasClass(arguments[0], arguments[1]) || (arguments[0].className = (arguments[0].className + " " + arguments[1]).replace(/\s{2,}/g, " "))
        },
        removeClass: function() {
            if (online.hasClass(arguments[0], arguments[1])) {
                var a = new RegExp("(\\s|^)" + arguments[1] + "(\\s|$)");
                arguments[0].className = arguments[0].className.replace(a, " ").split(" ").join(" ")
            }
        },
        replaceWith: function(a, b) {
            return a.replace(/\{\$(\w+)\}/g,
            function(a, c) {
                return c in b ? b[c] : a
            })
        },
        clearNotice: function(b) {
            b = b && b.length > 0 ? b: a("form input[mod]"),
            b.each(function(a) {
                if (null != a.attr("_cqnotice")) try {
                    a.getMod("notice", "1.1").method("checkValue")
                } catch(b) {}
            })
        },
        toJson: function(a) {
            try {
                return new Function("return (" + a + ")")()
            } catch(b) {
                return null
            }
        },
        __clazz: {},
        __loadJsCache: {},
        loadJs: function(a) {
            return online.__clazz[a.name || ""] || online.__loadJsCache[a.url] ? (online.log("Run directly"), void a.callback()) : void $LAB.script(getUrl(a.url, a.charset || online.charset)).wait(function() {
                online.__loadJsCache[a.url] = !0,
                a.callback()
            })
        },
        getAjaxUrl: function(a, b) {
            b = b ? b: [];
            var c = online.baseAjaxUrl && "" != online.baseAjaxUrl ? online.baseAjaxUrl: "/" + pageGlobal.FlightIntlRootName + "/AjaxRequest/UI2_0/GetOrderEachPartInfoesHandler.ashx?",
            d = ["Type=" + a, pageGlobal && pageGlobal.OrderId ? "OrderId=" + pageGlobal.OrderId: ""].concat(b).join("&");
            return c + d
        },
        param: function(a) {
            if ("object" !== Object.prototype.toString.call(a).slice(8, -1).toLowerCase()) return "";
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push([c, a[c]].join("="));
            return b.join("&")
        },
        disBackspace: function() {
            function a(a) {
                return a = a || window.event,
                b = a.keyCode || a.which,
                c = a.srcElement || a.target,
                8 !== b || "text" !== c.type && "textarea" !== c.type && "password" !== c.type || c.readOnly !== !0 ? void 0 : (b = 0, a.returnValue = !1, !1)
            }
            var b, c;
            document.onkeydown = a
        },
        getParentsByClass: function(a, b) {
            var c;
            try {
                if (!a) return [];
                for (c = a.parentNode; c && -1 == (" " + c.className + " ").indexOf(" " + b + " ");) c = c.parentNode;
                return c ? [c] : []
            } catch(d) {
                return []
            }
        },
        fixSpecChar: function(a) {
            return (a || "").replace(/'/g, "\\'").replace(/"/g, "&quot;")
        },
        showTime: function(a, b) {
            try {
                return new Date(a.replace(/-/g, "/")).toFormatString(b)
            } catch(c) {}
            return ""
        },
        validateInvoiceTitle: function(b, c) {
            b = a(b);
            var d = b.value().trim();
            if ("" == d) return b.showTips({
                newline: !0,
                data: "\u8bf7\u586b\u5199\u53d1\u7968\u62ac\u5934"
            }),
            !1;
            if (d.length > 37) return b.showTips({
                newline: !0,
                data: "\u53d1\u7968\u62ac\u5934\u6700\u591a\u4e3a37\u4e2a\u4e2d\u6587\u5b57\u7b26"
            }),
            !1;
            if ("" == d.replace(/[~.@#\uffe5%^&*\/0-9]/g, "")) return b.showTips({
                newline: !0,
                data: "\u53d1\u7968\u62ac\u5934\u4e0d\u80fd\u5168\u90e8\u4e3a\u7279\u6b8a\u5b57\u7b26\uff0c\u8bf7\u91cd\u65b0\u586b\u5199"
            }),
            !1;
            if ("" == d.replace(/[a-zA-Z]/g, "")) return b.showTips({
                newline: !0,
                data: "\u53d1\u7968\u62ac\u5934\u4e0d\u80fd\u4e3a\u5168\u82f1\u6587\uff0c\u8bf7\u91cd\u65b0\u586b\u5199"
            }),
            !1;
            for (var e = ["\u5355\u4f4d", "\u4e2a\u4eba", "\u516c\u53f8", "\u673a\u7968\u6b3e", "\u53d1\u7968", "\u643a\u7a0b\u5ba2\u6237", "\u4e0a\u6d77\u534e\u7a0b\u897f\u5357\u56fd\u9645\u65c5\u884c\u793e\u6709\u9650\u516c\u53f8"], f = d.replace(/\s/g, ""), g = e.length; g--;) if (f == e[g]) {
                if ("P" == c) b.showTips({
                    newline: !0,
                    data: "\u8bf7\u586b\u5199\u771f\u5b9e\u59d3\u540d"
                });
                else if ("C" == c) {
                    var h = "\u8bf7\u586b\u5199\u5b8c\u6574\u771f\u5b9e\u7684\u516c\u53f8\u540d\u79f0";
                    "\u4e0a\u6d77\u534e\u7a0b\u897f\u5357\u56fd\u9645\u65c5\u884c\u793e\u6709\u9650\u516c\u53f8" == f && (h = "\u5f00\u53d1\u7968\u5546\u662f\u4e0a\u6d77\u534e\u7a0b\u897f\u5357\u56fd\u9645\u65c5\u884c\u793e\u6709\u9650\u516c\u53f8\uff0c\u62a5\u9500\u65b9\u4e0d\u53ef\u4ee5\u662f\u4e0a\u6d77\u534e\u7a0b\u897f\u5357\u56fd\u9645\u65c5\u884c\u793e\u6709\u9650\u516c\u53f8\uff0c\u5177\u4f53\u8bf7\u54a8\u8be2\u8d35\u516c\u53f8\u8d22\u52a1"),
                    b.showTips({
                        newline: !0,
                        data: h
                    })
                } else b.showTips({
                    newline: !0,
                    data: "\u8bf7\u586b\u5199\u6b63\u786e\u7684\u53d1\u7968\u62ac\u5934\uff0c\u5185\u5bb9\u4e0d\u53ef\u4e3a\u201c" + d + "\u201d"
                });
                return ! 1
            }
            return ! 0
        },
        getScrollTop: function() {
            if ("undefined" != typeof window.pageYOffset) return window.pageYOffset;
            var a = document.body,
            b = document.documentElement;
            return b = b.clientHeight ? b: a,
            b.scrollTop
        },
        getViewHeight: function() {
            var a = document;
            return ("BackCompat" == a.compatMode ? a.body: a.documentElement).clientHeight
        },
        on: function(a, b) {
            "undefined" == typeof d[a] && (d[a] = []),
            d[a].push(b)
        },
        emit: function(b) {
            for (var c = d[b] || [], e = Array.prototype.slice.call(arguments, 1), f = 0, g = c.length; g > f; f++) try {
                c[f].apply(null, e)
            } catch(h) {
                a.error("emit", h)
            }
        }
    }),
    a.extend(a.fn, {
        hide: function() {
            return a(this).css("display", "none"),
            this
        },
        show: function() {
            return a(this).css("display", ""),
            this
        },
        parents: function(a) {
            try {
                for (var b = this[0].parentNode; b && b.tagName != arguments[0].toUpperCase();) b = b.parentNode;
                return [b]
            } catch(c) {
                return []
            }
        }
    }),
    online._tmpl = {},
    online.config = {},
    online.debug = /localhost|ctripcorp|ctriptravel/.test(location.host),
    online.siteName = online.getSiteName(!0),
    "object" != typeof pageGlobal && (window.pageGlobal = {}),
    a(document.body).bind("mousedown",
    function(b) {
        try {
            var c = b.target;
            if (c = "a" === c.nodeName.toLowerCase() ? c: a(c).parents("a")[0], c && c.getAttribute && c.getAttribute("href") && /^#+$/i.test(c.getAttribute("href").trim())) {
                c.setAttribute("href", "javascript:void(0);");
                try {
                    b.preventDefault()
                } catch(b) {}
            }
        } catch(b) {}
    });
    try {
        a.cookie.del("flightintl_searchBoxVals_gb2312"),
        a.cookie.del("flightintl_searchBoxVals_gb2312", 0, {
            path: "/",
            domain: online.domain
        }),
        a.cookie.del("flightintl_searchBoxVals_big5"),
        a.cookie.del("flightintl_searchBoxVals_big5", 0, {
            path: "/",
            domain: online.domain
        })
    } catch(g) {}
    FakeCTMId = function() {
        var a = window.open,
        b = window.crossAdCallback;
        crossAdCallback = function(a) {
            if (a.EventHTML) {
                var c = 1;
                a.EventHTML = a.EventHTML.replace(/data-pos-id="\d+"/g,
                function() {
                    return ['data-pos-id="', c++, '"'].join("")
                })
            }
            b(a)
        },
        window.open = function(b, c, d, e, f) {
            b && -1 != b.indexOf("#ctm_ref=intply_") && (b = b.replace(/#ctm_ref=intply_(.+?)_ad_def_i_(\d+)/, "#ctm_ref=fli_$1_rec_hlt_i_$2"), b = b.replace("bkd", "od")),
            a(b, c, d, e, f)
        }
    },
    function(a) {
        if ("undefined" != typeof a) {
            var b = {},
            c = a("#commonKeyForUbt");
            if (0 !== c.length) {
                if (a(document).bind("mousedown",
                function(c) {
                    if (a(c.target).length && a(c.target)[0].getAttribute) {
                        var d = a(c.target).attr("data-ubt-key");
                        d || (d = a(c.target).attr("data-ubt")),
                        d && (b[d] = 1 + (b[d] || 0))
                    }
                }), "flt_oversea_detail_click" == c.value()) {
                    var d = a("#J_tabOrdInfo .extra-tip");
                    d.length > 0 && (b.ScreenRolling = 0, a(window).bind("scroll",
                    function() {
                        1 != b.ScreenRolling && d.offset().bottom - online.getScrollTop() < (window.innerHeight || document.documentElement.clientHeight) && (b.ScreenRolling = 1)
                    }))
                }
                a(window).bind("beforeunload",
                function() {
                    var d = a.storage.get("SelecedFlightComfort") || [];
                    if (d.length > 0) {
                        var e = b.MoreFlight;
                        b.MoreFlight = {
                            num: e,
                            info: d
                        }
                    }
                    window.__bfi.push(["_tracklog", c.value(), a.stringifyJSON(b)]),
                    d = [],
                    a.storage.set("SelecedFlightComfort", d)
                })
            }
        }
    } (window.cQuery),
    online.extend(String, {
        replaceWith: function(a) {
            return online.replaceWith(this, a)
        },
        isEmail: function() {
            var a = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
            return a.test(this)
        },
        toReString: function() {
            return this.replace(/([\.\\\/\+\*\?\[\]\{\}\(\)\^\$\|])/g, "\\$1")
        },
        isChinaIDCard: function() {
            var a = this.toLowerCase().match(/\w/g);
            if (this.match(/^\d{17}[\dx]$/i)) {
                for (var b = 0,
                c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], d = 0; 17 > d; d++) b += parseInt(a[d], 10) * c[d];
                return "10x98765432".charAt(b % 11) != a[17] ? !1 : !!this.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3").isDate()
            }
            return this.match(/^\d{15}$/) ? !!this.replace(/^\d{6}(\d{2})(\d{2})(\d{2}).+$/, "19$1-$2-$3").isDate() : !1
        },
        parseStdDate: function(a) {
            var b = "January|1@February|2@March|3@April|4@May|5@June|6@July|7@August|8@September|9@October|10@November|11@December|12",
            c = this.replace(/[ \-,\.\/]+/g, "-").replace(/(^|-)0+(?=\d+)/g, "$1");
            return "en" == $$.status.version && (c = c.replace(/[a-z]{3,}/i,
            function(a) {
                return (_t_re = b.match(new RegExp("(^|@)" + a + "[^\\|]*\\|(\\d+)", "i"))) ? _t_re[2] : a
            })),
            c = c.replace(/^([^-]{1,2}-[^-]{1,2})-([^-]{4})$/, "$2-$1"),
            a === !1 || c.isDateTime(!1) ? c: null
        }
    }),
    online.extend({
        checkHover: function(a, b) {
            return "mouseover" == a.type ? !(online.contains(b, a.relatedTarget || a.fromElement) || (a.relatedTarget || a.fromElement) === b) : !(online.contains(b, a.relatedTarget || a.toElement) || (a.relatedTarget || a.toElement) === b)
        },
        trigger: function(b, c) {
            if (b && c) if (document.createEvent) {
                var d = document.createEvent("MouseEvents");
                d.initEvent(c, !0, !0),
                b.dispatchEvent(d)
            } else(a.browser.isIE6 || a.browser.isIE7 || a.browser.isIE8) && b.tagName && "INPUT" === (b.tagName + "").toUpperCase() && "checkbox" === b.type && !b.disabled && (b.checked = !b.checked),
            b.fireEvent("on" + c)
        },
        getClient: function(a) {
            return a.pageX && a.pageY ? {
                x: a.pageX,
                y: a.pageY
            }: {
                x: a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft,
                y: a.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop
            }
        },
        stopEvent: function(a, b) {
            b = b || 0,
            b >= 0 && (a.preventDefault ? a.stopPropagation() : a.cancelBubble = !0),
            0 != b && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }
    }),
    online.extend({
        exchangeCity: function(a, b) {
            var c = [a.attr("mod_change_value") || "", b.attr("mod_change_value") || ""];
            a.getMod("address_poi", "2.0").method("select", c[1]),
            b.getMod("address_poi", "2.0").method("select", c[0]),
            online.clearNotice(a),
            online.clearNotice(b)
        }
    });
    var h = {
        setColor: function(a, b) {
            if (/color/i.test(a) && -1 != b.indexOf("rgb(")) {
                var c = b.split(",");
                b = "#";
                for (var d, e = 0; d = c[e]; e++) d = parseInt(d.replace(/[^\d]/gi, ""), 10).toString(16),
                b += 1 == d.length ? "0" + d: d;
                b = b.toUpperCase()
            }
            return b
        },
        setCssPx: function(b, c) {
            return "number" != a.type(c) || /zIndex|opacity|lineHeight|zoom|fontWeight/i.test(b) || (c += "px"),
            c
        },
        setDisplay: function(b, c) {
            b = b.style,
            a.browser.isIE && online.version() < 8 && "inline-block" == c ? (b.display = "inline", b.zoom = 1) : b.display = c
        },
        getFloat: function() {
            return a.browser.isIE ? "styleFloat": "cssFloat"
        },
        getComputedStyle: function(a) {
            return a.currentStyle ? a.currentStyle: window.getComputedStyle(a, null)
        },
        opacity: {
            set: function(b, c) {
                var d = b.style;
                a.browser.isIE && online.version() < 10 && (d.filter = (d.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (1 == c ? "": "alpha(opacity=" + 100 * c + ")"), d.zoom = 1),
                "number" == a.type(c) ? d.opacity = c: d.opacity = 0
            },
            get: function(a) {
                var b = h.getComputedStyle(a),
                c = 1;
                if (Min.Browser.isIE) {
                    var d = b.filter;
                    c = d && d.indexOf("opacity=") >= 0 ? parseFloat(d.match(/opacity=([^)]*)/)[1]) / 100 : 1
                } else c = b.opacity;
                return c *= 1
            }
        },
        setStyle: function(a, b) {
            for (var c in b) switch (c) {
            case "float":
                a[h.getFloat()] = b[c];
                break;
            case "display":
                h.setDisplay(a, b[c]);
                break;
            case "opacity":
                h.opacity.set(a, b[c]);
                break;
            case "color":
                a.style.color = h.setColor(c, b[c]);
                break;
            default:
                a.style[c] = h.setCssPx(c, b[c])
            }
        }
    },
    i = function(a, b, c) {
        for (var d = a[c]; d; d = d[b]) if (1 == d.nodeType) return d;
        return null
    };
    online.extend({
        insertCss: function(b, c) {
            if (a("#" + b).length > 0) return ! 1;
            var d = document.createElement("style");
            return d.id = b || "online_modStyle",
            a.browser.isIE && (d.type = "text/css", d.media = "screen"),
            (document.getElementsByTagName("head")[0] || document.body).appendChild(d),
            d.styleSheet ? d.styleSheet.cssText = c: d.appendChild(document.createTextNode(c)),
            !0
        },
        css: function(b, c) {
            try {
                if (c && ("object" == a.type(c) || 3 == arguments.length)) {
                    if (3 == arguments.length) {
                        var d = c;
                        c = {},
                        c[d] = arguments[2]
                    }
                    return a(b).each(function(a) {
                        h.setStyle(a[0], c)
                    }),
                    b
                }
                if (2 == arguments.length && "string" == a.type(c)) {
                    var e = h.getComputedStyle(b[0]);
                    return "opacity" === c ? h.opacity.get(b[0]) : e[c]
                }
            } catch(f) {
                return ""
            }
        },
        insertHtml: function(a, b, c) {
            if (a = a.toLowerCase(), b.insertAdjacentHTML) switch (a) {
            case "beforebegin":
                return b.insertAdjacentHTML("BeforeBegin", c),
                b.previousSibling;
            case "afterbegin":
                return b.insertAdjacentHTML("AfterBegin", c),
                b.firstChild;
            case "beforeend":
                return b.insertAdjacentHTML("BeforeEnd", c),
                b.lastChild;
            case "afterend":
                return b.insertAdjacentHTML("AfterEnd", c),
                b.nextSibling
            } else {
                var d, e = b.ownerDocument.createRange();
                switch (a) {
                case "beforebegin":
                    return e.setStartBefore(b),
                    d = e.createContextualFragment(c),
                    b.parentNode.insertBefore(d, b),
                    b.previousSibling;
                case "afterbegin":
                    return b.firstChild ? (e.setStartBefore(b.firstChild), d = e.createContextualFragment(c), b.insertBefore(d, b.firstChild), b.firstChild) : (b.innerHTML = c, b.firstChild);
                case "beforeend":
                    return b.lastChild ? (e.setStartAfter(b.lastChild), d = e.createContextualFragment(c), b.appendChild(d), b.lastChild) : (b.innerHTML = c, b.lastChild);
                case "afterend":
                    return e.setStartAfter(b),
                    d = e.createContextualFragment(c),
                    b.parentNode.insertBefore(d, b.nextSibling),
                    b.nextSibling
                }
            }
        },
        contains: function(a, b) {
            return a.contains ? a != b && a.contains(b) : !!(16 & a.compareDocumentPosition(b))
        },
        next: function() {
            return i(arguments[0], "nextSibling", "nextSibling")
        },
        prev: function() {
            return i(arguments[0], "previousSibling", "previousSibling")
        },
        first: function() {
            return i(arguments[0], "nextSibling", "firstChild")
        },
        last: function() {
            return i(arguments[0], "previousSibling", "lastChild")
        },
        parent: function() {
            return i(arguments[0], "parentNode", "parentNode")
        },
        children: function(a) {
            for (var b = [], c = a.firstChild; c; c = c.nextSibling) 1 == c.nodeType && b.push(c);
            return b
        }
    })
} (window.cQuery, window);