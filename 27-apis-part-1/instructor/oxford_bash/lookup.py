import requests
import os

app_id = os.environ.get('OXFORD_APP_ID')
app_key = os.environ.get('OXFORD_APP_KEY')

language = 'en-us'
word = 'Cat'

url = f"https://od-api.oxforddictionaries.com/api/v2/entries/{language}/{word.lower()}"
r = requests.get(url, headers = { 'app_id': app_id, 'app_key': app_key })

print(r.json()['results'][0]['lexicalEntries'][0]['entries'][0]['senses'][0]['definitions'][0])
