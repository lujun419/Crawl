!
function($, w) {
    validateQuery = function() {
        return ! 1
    },
    simpleLoader = function(cond) {
        function trigger(a, b, c, d) {
            var e = config[a];
            if ("undefined" != typeof e) {
                var f = e.callback.length,
                g = [MaxSearchCount, b, loaded, c, d];
                if (f > 0) for (; f--;) e.callback[f].apply(this, g);
                else e.data.push(g);
                loaded++
            }
        }
        cond += "";
        var config = {
            ready: {
                callback: [],
                data: []
            },
            error: {
                callback: [],
                data: []
            }
        },
        tokens = [],
        createXHR,
        TransNo,
        MaxSearchCount,
        url = "/international/" + ( - 1 !== cond.indexOf('"IsAsync"') ? "AjaxRequest/SearchFlights/AsyncSearchResultHandler.ashx": "AjaxRequest/SearchFlights/AsyncSearchHandlerSOAII.ashx");
        if (MaxSearchCount = cond.match(/"MaxSearchCount":(\d+)/), null === MaxSearchCount) MaxSearchCount = 0,
        tokens.push("first");
        else {
            MaxSearchCount = 1 * MaxSearchCount.pop() || 1;
            for (var i = MaxSearchCount; i; i--) tokens.unshift(i)
        }
        TransNo = cond.match(/"TransNo":"(.*?)"/),
        TransNo = null !== TransNo ? TransNo.pop() : 0;
        var loaded = 0,
        index = 0,
        condition = "SearchMode=Search&condition=" + encodeURIComponent(cond); - 1 != cond.indexOf('"FlightWay":"D"') && (condition += "&DisplayMode=RoundTripGroup"),
        createXHR = function() {
            var a;
            return window.ActiveXObject ?
            function() {
                var b, c;
                if (a) return new ActiveXObject(a);
                for (b = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"], c = b.length; c--;) {
                    a = b[c];
                    try {
                        return new ActiveXObject(a)
                    } catch(d) {}
                }
            }: function() {
                return new XMLHttpRequest
            }
        } ();
        var getUserProfile = function(xhr, url) {
            xhr && (xhr.onreadystatechange = function() {
                try {
                    if (4 == xhr.readyState && 200 == xhr.status && xhr.responseText) {
                        var userProfile = eval("(" + xhr.responseText + ")");
                        userProfile && (window.IsSortByDepartTimeDefault = userProfile.IsHighQualityUser && userProfile.IsHighQualityUserSortRuleEnabled)
                    }
                } catch(e) {}
            },
            xhr.open("POST", url, !0), xhr.send())
        };
        for (getUserProfile(createXHR(), "/international/AjaxRequest/SearchFlights/GetUserProfileHandler.ashx"); token = tokens.shift();) !
        function(a, b, c, d, e) {
            if (a) {
                e > 0 && (d = d.replace("SearchMode=Search", "SearchMode=TokenSearch"));
                var f = [[ - 2, TransNo]],
                g = (new Date).getTime();
                f.push([ - 1, g]),
                a.onreadystatechange = function() {
                    try {
                        switch (3 !== a.readyState && f.push([a.readyState, (new Date).getTime() - g]), a.readyState) {
                        case 0:
                            throw new Error(a);
                        case 4:
                            if (200 == a.status || 304 == a.status) {
                                trigger("ready", e, f, a.responseText);
                                break
                            }
                            throw new Error(a)
                        }
                    } catch(b) {
                        trigger("ready", e, f)
                    }
                },
                a.open("POST", c, !0),
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"),
                a.send(d + "&SearchToken=" + b)
            }
        } (createXHR(), token, url, condition, index++);
        return {
            on: function(a, b) {
                var c = config[a];
                if ("undefined" == typeof c) return b();
                for (var d = c.data.length; d--;) b.apply(this, c.data.shift());
                c.callback.push(b)
            }
        }
    }
} (window.cQuery, window);