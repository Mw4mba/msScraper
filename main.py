from bs4 import BeautifulSoup
import requests
import json


page_html=requests.get('https://www.ourpower.co.za/areas/jhb-city-power').text

formatted=BeautifulSoup(page_html,'html.parser')
links=formatted.findAll('tr')

newJson=[]

#for link in formatted.find_all('a'):
 #   print(link.get('href'))

for item in formatted.find_all('tr'):
    if item.contents[0].text != "Time" and len(item.contents[1].text)>1:
            newJson.append(
        {
        "TIME":item.contents[0].text,
        "AREAS":item.contents[1].text.split(",")
        }
        )




print(newJson)  
print(len(newJson))
with open("sample.json", "w+") as outfile:
    json.dump(newJson, outfile)
newJson.clear()  

