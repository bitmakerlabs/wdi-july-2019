from django.http import JsonResponse
import requests
import json
import os
import pdb

def chucks(request):
  # return JsonResponse({"message": "Hello"})
  # get chuck norris joke
  chuck = requests.get("https://api.chucknorris.io/jokes/random?category=science")
  chuck_json = json.loads(chuck.content)
  chuck_joke = chuck_json["value"]
  # get a chuck gif
  giphy_key = os.environ.get("GIPHY_KEY")
  giphy_api_url = "https://api.giphy.com/v1/gifs/random?api_key={}&tag=chuck+norris&rating=g&limit=1".format(giphy_key)
  giphy_response = requests.get(giphy_api_url)
  giphy_json = json.loads(giphy_response.content)
  giphy_url = giphy_json["data"]["url"]
  # construct our own custom reponse
  json_response = {
    "joke": chuck_joke,
    "image": giphy_url
  }

  return JsonResponse(json_response)