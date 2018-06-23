#coding=utf-8
"""
获取所有地区展示码
"""

import  requests
import  re

def getallcode():
    url = r'http://webresource.c-ctrip.com/ResFltIntlOnline/R7/Booking/online/home/start_poi_timezone_gb2312.js?releaseno=PRO_201805165';
    r = requests.get(url);
    code = []
    prelist = str(r.content).split('[')
    # prelist = re.split('\[{',r.content)
    print(prelist)
    for i in range(len(prelist)):
        rightlist = prelist[i].split(']')
        if len(rightlist) > 2:
            print(rightlist)
            for j in range(len(rightlist)):
                enumstr = rightlist[j]
                code.append(enumstr)

if __name__ == '__main__':
    getallcode()
