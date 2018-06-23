#coding=utf-8

import execjs
import  ast
import  json
import js2py
"""2018 - 6- 3 
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!0(a){a||($=n=i=h=e)}(0(a,b,c){f g[6.7(2*a+b,2*a+c,2*a-1,2*a-3,2*a+9,2*a+5,2*a+c,2*a+c-1)][6.7(2*a+4,a+m,l,j)]}(k,8,d,9,5));',24,24,'function||||||String|fromCharCode||16||||11|null|return|this|simpleLoader|window|102|50|101|64|module'.split('|'),0,{}))
"""


def CalcSerachKey(sKey,SearchKey):
    substr = r"""eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!0(a){a||($=n=i=h=e)}(0(a,b,c){f g[6.7(2*a+b,2*a+c,2*a-1,2*a-3,2*a+9,2*a+5,2*a+c,2*a+c-1)][6.7(2*a+4,a+m,l,j)]}(k,8,d,9,5));',24,24,'function||||||String|fromCharCode||16||||11|null|return|this|simpleLoader|window|102|50|101|64|module'.split('|'),0,{}))"""
    print(sKey.find(substr))
    sKey = sKey.replace(substr,"true")
    print(sKey)
    liststr = list(sKey)
    liststr.insert(0,'var window = "";\nvar Result = "";\n')
    liststr.append(';function  GetJson(){return Result;};')
    sKey = "".join(liststr)
    print(sKey)
    liststr = list(sKey)
    asubstr = r"""(function(r, w, y, zz, x) {eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);"""
    try:
        aindex = sKey.find(asubstr)
        if aindex > 0:
            liststr.insert(aindex + len(asubstr),
                           """Result = '{"calc":"' + p + '","x":' + x + ',"y":' + y + '}';""")
    except:
      pass
    sKey = "".join(liststr)
    print(sKey)

    # try:
    #     aindex = liststr.index(asubstr)
    #     if aindex > 0:
    #         liststr.insert(aindex + len(asubstr),
    #                        """Result = '{"calc":' + p + ',"x":' + x + ',"y":' + y + '}';""")
    # except:
    #   pass
    # sKey = sKey.replace('return p;',"""Result = '{"calc":' + p + ',"x":' + x + ',"y":' + y + ',}';return p;""")
    sKey = sKey.encode().decode()
    print(sKey)
    htmlstr = ''
    with open('test.js','r',encoding='utf-8') as f:
        str = f.readline()
        while str:
            htmlstr = htmlstr + str
            str = f.readline()

    ctx = execjs.compile(sKey)
    res = ctx.call("GetJson",'')
    res = ast.literal_eval(res)
    x = res.get("x")
    y = res.get("y")
    atst = r"r='{0}';l = r.split('');c = l.splice({1}, 0x1);l.splice({2}, 0x0, c);".format(SearchKey,y,x)
    ctx = execjs.compile(r"function getkey(){" + atst + r"return l}")
    alist = ctx.call("getkey",'')
    print("".join(alist))
    # r = "28349DBC87B39ABCFE37DA6678CD30BC4A8DCC4D7804F86E6B1B838D12C9E0AE81E5B04015A14A9D";
    # l = r.split('');
    # c = l.splice(8, 0x1);
    # l.splice(12, 0x0, c);
    # return l;
    print(res)

# def test():
#     """
#     for test js
#     :return:
#     """
#     htmlstr = ''
#     with open('test.js','r',encoding='utf-8') as f:
#         str = f.readline()
#         while str:
#             htmlstr = htmlstr + str
#             str = f.readline()
#         return htmlstr
#
#     ctx = execjs.compile(htmlstr)
#     res = ctx.call("GetJson")
#     print(res)

if __name__  == "__main__":
    astr = r"""condition = '{"FlightWay":"S","SegmentList":[{"DCityCode":"SHA","ACityCode":"FRA","DCity":"Shanghai|上海(SHA)|2|SHA|480","ACity":"Frankfurt|法兰克福(FRA)|250|FRA|120","DepartDate":"2018-7-25","DCityName":"上海","ACityName":"法兰克福"}],"TransferCityID":0,"Quantity":1,"ClassGrade":"Y_S","TransNo":"273ebcc5a82c4abc8295545b741f106f","SearchRandomKey":"","AirportCityBusSwitch":false,"RecommendedFlightSwitch":1,"EngineFlightSwitch":1,"SearchKey":"28349DBC87B39ABCFE37DA6678CD30BC4A8DCC4D7804F86E6B1B838D12C9E0AE81E5B04015A14A9D","MultiPriceUnitSwitch":1,"TransferCitySwitch":false,"EngineScoreABTest":"B","SearchStrategySwitch":1,"MaxSearchCount":3,"TicketRemarkSwitch":1,"RowNum":"1500","TicketRemarkChannels":["GDS-WS","ZY-WS"],"AddSearchLogOneByOne":true,"TFAirlineQTE":"AA","IsWifiPackage":0,"SegmentVerifySwitch":false,"ComparePriceByAttributeSwitch":true,"IsOpenCFNoDirectRecommendYS":false,"IsDomesticIntlPUVersionSwitch":true,"DisplayBaggageSizeSwitch":true,"IsOpen24Refund":true,"IsOpenTransPU":true,"IsOpenVirtualFlight":true,"IsOpenNew3X":false,"NewAirlineLogoSwitch":false,"NewAirlineLogoSortTopSwitch":false,"IsNewImpower":false,"FromJavaVersion":false,"IsLowPrice":false,"OpenJawCitySequence":0}';
        (function(u,r,k,t){var M22=1,N22M=1;M22=M22*=eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1(0.2(4)*3)',5,5,'Math|parseInt|log|0xa|2'.split('|'),0,{}));M22=M22+=eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1(0.2(4)*3)',5,5,'Math|parseInt|log|0xa|2'.split('|'),0,{}));if(M22<0)M22=-M22; while(M22>30)M22=M22%10;N22M=N22M-=eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1(0.2(4)*3)',5,5,'Math|parseInt|exp|0xa|8'.split('|'),0,{}));if(N22M<0)N22M=-N22M; while(N22M>30)N22M=N22M%10;(function(r, w, y, zz, x) {eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('m 5$=[\'\',\'b\',\'f\',\'e\',\'h\'],l,7;g(6[5$[1]]){l=7.9(5$[0]);c=l.8(d,a);l.8(i,j,c);6[5$[4]]=6[5$[1]](6[5$[2]]=6[5$[2]][5$[3]](7,l.k(5$[0])))}',23,23,'|||||_|w|r|splice|split|0x1|simpleLoader||y|replace|condition|if|flightLoader|x|0x0|join||var'.split('|'),0,{}))})(eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1.0(/"3":"(.+?)"/)||[\'\']).2();',4,4,'match|condition|pop|SearchKey'.split('|'),0,{})), window, N22M, eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!0(a){a||($=n=i=h=e)}(0(a,b,c){f g[6.7(2*a+b,2*a+c,2*a-1,2*a-3,2*a+9,2*a+5,2*a+c,2*a+c-1)][6.7(2*a+4,a+m,l,j)]}(k,8,d,9,5));',24,24,'function||||||String|fromCharCode||16||||11|null|return|this|simpleLoader|window|102|50|101|64|module'.split('|'),0,{})), M22)})()"""
    CalcSerachKey(astr,'28349DBC87B39ABCFE37DA6678CD30BC4A8DCC4D7804F86E6B1B838D12C9E0AE81E5B04015A14A9D')
