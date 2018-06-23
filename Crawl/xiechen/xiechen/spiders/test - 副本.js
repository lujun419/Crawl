var window = "";
var Result = "";
var condition = '{"FlightWay":"S","SegmentList":[{"DCityCode":"SHA","ACityCode":"HNL","DCity":"Shanghai|上海(SHA)|2|SHA|480","ACity":"Honolulu|夏威夷(HNL)|757|HNL|-600","DepartDate":"2018-6-30","DCityName":"上海","ACityName":"夏威夷·火奴鲁鲁"}],"TransferCityID":0,"Quantity":1,"ClassGrade":"Y_S","TransNo":"1dd6e16458ca49d3934d46b81cfcc1a1","SearchRandomKey":"","AirportCityBusSwitch":false,"RecommendedFlightSwitch":1,"EngineFlightSwitch":1,"SearchKey":"A8A618FF26241E1B7C05E9774919473C4A8DCC4D7804F86EC1928EC18B116A7A4FB7D7221093FB4E","MultiPriceUnitSwitch":1,"TransferCitySwitch":false,"EngineScoreABTest":"B","SearchStrategySwitch":1,"MaxSearchCount":3,"TicketRemarkSwitch":1,"RowNum":"1500","TicketRemarkChannels":["GDS-WS","ZY-WS"],"AddSearchLogOneByOne":true,"TFAirlineQTE":"AA","IsWifiPackage":0,"SegmentVerifySwitch":false,"ComparePriceByAttributeSwitch":true,"IsOpenCFNoDirectRecommendYS":false,"IsDomesticIntlPUVersionSwitch":true,"DisplayBaggageSizeSwitch":true,"IsOpen24Refund":true,"IsOpenTransPU":true,"IsOpenVirtualFlight":true,"IsOpenNew3X":false,"NewAirlineLogoSwitch":false,"NewAirlineLogoSortTopSwitch":false,"IsNewImpower":false,"FromJavaVersion":false,"IsLowPrice":false,"OpenJawCitySequence":0}';
(function(u, r, k, t) {
    var B56 = 1,
    C56B = 1;
    B56 = B56 *= eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? '': e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) d[e(c)] = k[c] || e(c);
            k = [function(e) {
                return d[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1;
        };
        while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p;
    } ('1(0.2(4)*3)', 5, 5, 'Math|parseInt|tan|0xa|1'.split('|'), 0, {}));
    if (B56 < 0) B56 = -B56;
    while (B56 > 30) B56 = B56 % 10;
    C56B = C56B += eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? '': e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) d[e(c)] = k[c] || e(c);
            k = [function(e) {
                return d[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1;
        };
        while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p;
    } ('1(0.2(4)*3)', 5, 5, 'Math|parseInt|atan|0xa|3'.split('|'), 0, {}));
    if (C56B < 0) C56B = -C56B;
    while (C56B > 30) C56B = C56B % 10; (function(r, w, y, zz, x) {
        eval(function(p, a, c, k, e, d) {
            e = function(c) {
                return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
            };
            if (!''.replace(/^/, String)) {
                while (c--) d[e(c)] = k[c] || e(c);
                k = [function(e) {
                    return d[e]
                }];
                e = function() {
                    return '\\w+'
                };
                c = 1;
            };
            while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
            Result = '{"calc":' + p + ',"x":' + x + ',"y":' + y + '}';
            return p;
        } ('m 5$=[\'\',\'b\',\'f\',\'e\',\'h\'],l,7;g(6[5$[1]]){l=7.9(5$[0]);c=l.8(d,a);l.8(i,j,c);6[5$[4]]=6[5$[1]](6[5$[2]]=6[5$[2]][5$[3]](7,l.k(5$[0])))}', 23, 23, '|||||_|w|r|splice|split|0x1|simpleLoader||y|replace|condition|if|flightLoader|x|0x0|join||var'.split('|'), 0, {}))
    })(eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) d[e(c)] = k[c] || e(c);
            k = [function(e) {
                return d[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1;
        };
        while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p;
    } ('(1.0(/"3":"(.+?)"/)||[\'\']).2();', 4, 4, 'match|condition|pop|SearchKey'.split('|'), 0, {})), window, C56B, true,
    B56)
})()

function  GetJson() {
    return Result;
}