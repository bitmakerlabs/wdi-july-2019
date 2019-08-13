import requests
import time

limit = 60
offset = 0
total = 334
representatives = []

while(offset < total):
    print(f"Making a request from: {offset} to {offset+limit}")
    url = "https://represent.opennorth.ca/representatives/house-of-commons"
    response = requests.get(url + f"?offset={offset}&limit={limit}")
    representatives += response.json()['objects']
    offset += limit
    time.sleep(1)
    
emails = map(lambda r: r['email'], representatives)
print(list(emails))
