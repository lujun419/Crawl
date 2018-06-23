#coding=utf-8

import requests
from bs4 import BeautifulSoup
import ast
import json
import urllib

cookies = """_RGUID=8d2bdda5-3210-4f2a-9bdc-390a95cfed2b; _RDG=28e26b6870c6d5250f0ba0d9bd8c28230c; _abtest_userid=77323a4b-c06b-45ed-83fb-ff74fdebf345; _ga=GA1.2.443479521.1527081494; _gid=GA1.2.471561200.1527081494; MKT_Pagesource=PC; _RSG=gy44oKQthq8hq.pLgGESl9; FlightIntl=Search=%5B%22Shanghai%7C%E4%B8%8A%E6%B5%B7(SHA)%7C2%7CSHA%7C480%22%2C%22Seoul%7C%E9%A6%96%E5%B0%94(SEL)%7C274%7CSEL%7C540%22%2C%222018-05-31%22%5D; _RF1=223.85.218.88; Union=SID=155952&AllianceID=4897&OUID=baidu81|index|||; Session=SmartLinkCode=U155952&SmartLinkKeyWord=&SmartLinkQuary=&SmartLinkHost=&SmartLinkLanguage=zh; adscityen=Chengdu; traceExt=campaign=CHNbaidu81&adid=index; _gat=1; _bfa=1.1527081491172.qwxdb.1.1527165694723.1527200265610.3.4; _bfs=1.2; ASP.NET_SessionSvc=MTAuMTQuMy4xNzl8OTA5MHxvdXlhbmd8ZGVmYXVsdHwxNTI1ODMyNTYxMjA0; Mkt_UnionRecord=%5B%7B%22aid%22%3A%224897%22%2C%22timestamp%22%3A1527200273569%7D%5D; _jzqco=%7C%7C%7C%7C1527165697688%7C1.1534998538.1527081493776.1527200268474.1527200273604.1527200268474.1527200273604.undefined.0.0.4.4; __zpspc=9.3.1527200268.1527200273.2%231%7Cbaidu%7Ccpc%7Cbaidu81%7C%25E6%2590%25BA%25E7%25A8%258B%7C%23; appFloatCnt=2; _bfi=p1%3D104001%26p2%3D100101991%26v1%3D4%26v2%3D3"""

class XieChenInter:
    def __init__(self,url):
        self.url = url
        self.cook1 = {}
        self.cook2 = {}
        self.ParseCooktoDict(cookies,self.cook1)
        self.ParseCooktoDict(cookies, self.cook2)
        self.GetHeader()
        response = requests.post(self.url,headers=self.headers,cookies=self.cook1)
        print(response.text)
        self.GetConditionFromResponse(response)

    def GetConditionFromResponse(self,response):
        soup = BeautifulSoup(response.text,"lxml")
        scriptlist = soup.find_all('script',{'type':"text/javascript"})
        if len(scriptlist) >= 2:
            script = scriptlist[2].text.strip()
            acondtion = script.split('=',1)[1]
            acondtion = acondtion.split(';')[0].replace("'","")
            acondtion = acondtion.strip()
            try:
                adict = json.loads(acondtion)
            except:
                pass
            else:
                print('no errors')
            # url = """%7B%22FlightWay%22%3A%22S%22%2C%22SegmentList%22%3A%5B%7B%22DCityCode%22%3A%22SHA%22%2C%22ACityCode%22%3A%22SEL%22%2C%22DCity%22%3A%22Shanghai%7C%E4%B8%8A%E6%B5%B7(SHA)%7C2%7CSHA%7C480%22%2C%22ACity%22%3A%22Seoul%7C%E9%A6%96%E5%B0%94(SEL)%7C274%7CSEL%7C540%22%2C%22DepartDate%22%3A%222018-5-31%22%2C%22DCityName%22%3A%22%E4%B8%8A%E6%B5%B7%22%2C%22ACityName%22%3A%22%E9%A6%96%E5%B0%94%22%7D%5D%2C%22TransferCityID%22%3A0%2C%22Quantity%22%3A1%2C%22ClassGrade%22%3A%22Y_S%22%2C%22TransNo%22%3A%22752d72ef9fe24aabbbab45adcdfdc1f7%22%2C%22SearchRandomKey%22%3A%22%22%2C%22AirportCityBusSwitch%22%3Afalse%2C%22RecommendedFlightSwitch%22%3A1%2C%22EngineFlightSwitch%22%3A1%2C%22SearchKey%22%3A%226CF4A4346CC838EA6C0944EFADF8B3BCA921D5D617B7813DA221E16A2EB22B52773FF7BE45D03D98%22%2C%22MultiPriceUnitSwitch%22%3A1%2C%22TransferCitySwitch%22%3Afalse%2C%22EngineScoreABTest%22%3A%22B%22%2C%22SearchStrategySwitch%22%3A1%2C%22MaxSearchCount%22%3A3%2C%22TicketRemarkSwitch%22%3A1%2C%22RowNum%22%3A%221500%22%2C%22TicketRemarkChannels%22%3A%5B%22GDS-WS%22%2C%22ZY-WS%22%5D%2C%22AddSearchLogOneByOne%22%3Atrue%2C%22TFAirlineQTE%22%3A%22AA%22%2C%22IsWifiPackage%22%3A0%2C%22SegmentVerifySwitch%22%3Afalse%2C%22ComparePriceByAttributeSwitch%22%3Atrue%2C%22IsOpenCFNoDirectRecommendYS%22%3Afalse%2C%22IsDomesticIntlPUVersionSwitch%22%3Atrue%2C%22DisplayBaggageSizeSwitch%22%3Atrue%2C%22IsOpen24Refund%22%3Atrue%2C%22IsOpenTransPU%22%3Atrue%2C%22IsOpenVirtualFlight%22%3Atrue%2C%22IsOpenNew3X%22%3Afalse%2C%22NewAirlineLogoSwitch%22%3Afalse%2C%22NewAirlineLogoSortTopSwitch%22%3Afalse%2C%22IsNewImpower%22%3Afalse%2C%22FromJavaVersion%22%3Afalse%2C%22IsLowPrice%22%3Afalse%2C%22OpenJawCitySequence%22%3A0%7D"""
            maxsearchcount = adict.get("MaxSearchCount")
            acondtion = '{"FlightWay":"S","SegmentList":[{"DCityCode":"SHA","ACityCode":"SEL","DCity":"Shanghai|上海(SHA)|2|SHA|480","ACity":"Seoul|首尔(SEL)|274|SEL|540","DepartDate":"2018-5-31","DCityName":"上海","ACityName":"首尔"}],"TransferCityID":0,"Quantity":1,"ClassGrade":"Y_S","TransNo":"0846926ee6a946d0a4ba8511556a07f1","SearchRandomKey":"","AirportCityBusSwitch":false,"RecommendedFlightSwitch":1,"EngineFlightSwitch":1,"SearchKey":"6F4AC4346CC838EA6C0944EFADF8B3BCA921D5D617B7813D92FB136A07E93FB9E09280C82435C5E6","MultiPriceUnitSwitch":1,"TransferCitySwitch":false,"EngineScoreABTest":"B","SearchStrategySwitch":1,"MaxSearchCount":3,"TicketRemarkSwitch":1,"RowNum":"1500","TicketRemarkChannels":["GDS-WS","ZY-WS"],"AddSearchLogOneByOne":true,"TFAirlineQTE":"AA","IsWifiPackage":0,"SegmentVerifySwitch":false,"ComparePriceByAttributeSwitch":true,"IsOpenCFNoDirectRecommendYS":false,"IsDomesticIntlPUVersionSwitch":true,"DisplayBaggageSizeSwitch":true,"IsOpen24Refund":true,"IsOpenTransPU":true,"IsOpenVirtualFlight":true,"IsOpenNew3X":false,"NewAirlineLogoSwitch":false,"NewAirlineLogoSortTopSwitch":false,"IsNewImpower":false,"FromJavaVersion":false,"IsLowPrice":false,"OpenJawCitySequence":0}'
            # acondtion = '{"FlightWay":"S","SegmentList":[{"DCityCode":"SHA","ACityCode":"SEL","DCity":"Shanghai|上海(SHA)|2|SHA|480","ACity":"Seoul|首尔(SEL)|274|SEL|540","DepartDate":"2018-5-31","DCityName":"上海","ACityName":"首尔"}],"TransferCityID":0,"Quantity":1,"ClassGrade":"Y_S","TransNo":"f5948ffba34343c6b52efc880800e14b","SearchRandomKey":"","AirportCityBusSwitch":false,"RecommendedFlightSwitch":1,"EngineFlightSwitch":1,"SearchKey":"6CFC4A4346C838EA6C0944EFADF8B3BCA921D5D617B7813DFA8292895C0F5FA9AD79855ACA320D68","MultiPriceUnitSwitch":1,"TransferCitySwitch":false,"EngineScoreABTest":"B","SearchStrategySwitch":1,"MaxSearchCount":3,"TicketRemarkSwitch":1,"RowNum":"1500","TicketRemarkChannels":["GDS-WS","ZY-WS"],"AddSearchLogOneByOne":true,"TFAirlineQTE":"AA","IsWifiPackage":0,"SegmentVerifySwitch":false,"ComparePriceByAttributeSwitch":true,"IsOpenCFNoDirectRecommendYS":false,"IsDomesticIntlPUVersionSwitch":true,"DisplayBaggageSizeSwitch":true,"IsOpen24Refund":true,"IsOpenTransPU":true,"IsOpenVirtualFlight":true,"IsOpenNew3X":false,"NewAirlineLogoSwitch":false,"NewAirlineLogoSortTopSwitch":false,"IsNewImpower":false,"FromJavaVersion":false,"IsLowPrice":false,"OpenJawCitySequence":0}'
            searchkey = adict.get("SearchKey","")
            # if searchkey != "":
            #     atmp = searchkey[0:3] + searchkey[4:10] + searchkey[3] + searchkey[10:len(searchkey)]
            #     adict["SearchKey"] = "6CF4A4346CC838EA6C0944EFADF8B3BCA921D5D617B7813D92FB136A07E93FB9E09280C82435C5E6"
            for i in range(1,maxsearchcount):
                astr = "condition=" +acondtion
                # print(astr.encode('utf-8'))
                # str = urllib.parse.quote(acondtion,safe='( )')
                # urllib.parse.quote(str, safe=')')
                acondtionA = "SearchMode=Search&condition=" + urllib.parse.quote(acondtion,safe='( )') + "&SearchToken=" + str(i)
                # acondtion = "SearchMode=Search&condition=" + url + "&SearchToken=" + str(i)
                # acondtion = acondtion.encode('utf-8')
                r = requests.post("http://flights.ctrip.com/international/AjaxRequest/SearchFlights/AsyncSearchHandlerSOAII.ashx",
                              headers=self.headers2,cookies = self.cook2,
                              data=acondtionA)
                print(r.text)
                print('sdf')

    def ParseCooktoDict(self,cook,retcook):
        cooklist = cook.split(';')
        for cookvk in cooklist:
            retcook[cookvk.split('=',1)[0].strip()] = cookvk.split('=',1)[1].strip()
    def GetHeader(self):
        self.headers = {
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding":"gzip, deflate",
            "Accept-Language":"zh-CN,zh;q=0.9",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
            "Content-Type":"application/x-www-form-urlencoded",
            "Referer":"http://flights.ctrip.com/international/",
            "Connection":"keep-alive",
            "Host":"flights.ctrip.com",

        }
        self.headers2 = {
            "Accept":"*/*",
            "Accept-Encoding":"gzip, deflate",
            "Accept-Language":"zh-CN,zh;q=0.9",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
            "Referer":"http://flights.ctrip.com/international/shanghai-seoul-sha-sel?2018-05-31&y_s",
            "Connection":"keep-alive",
            "Host":"flights.ctrip.com",
            "Content-Length": "1731",
        }



if __name__ == "__main__":
    XieChenInter("http://flights.ctrip.com/international/shanghai-seoul-sha-sel?2018-05-31&y_s")
    # r = requests.get("https://www.baidu.com/")
    # print(r.text)