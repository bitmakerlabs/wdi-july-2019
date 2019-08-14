from django.db import models
import requests
import os
import socket

class Trip(models.Model):
    location = models.CharField(max_length=255)
    weather = models.CharField(max_length=255)

    def __str__(self):
        return f"Trip to {self.location}"

    def save(self, *args, **kwargs):
        self.__fetch_weather()
        super().save(*args, **kwargs)
        self.__fetch_tracks()

    def __fetch_weather(self):
        try:
            url = f"https://api.openweathermap.org/data/2.5/weather?q={ self.location }&appid={ os.environ.get('OPENWEATHER_API_KEY') }"
            response = requests.get(url)
            self.weather = response.json()['weather'][0]['main']
        except socket.error:
            self.weather = 'Unknown'

    def __fetch_tracks(self):
        mood = self.__weather_to_mood()

        try:
            url = f"http://musicovery.com/api/V6/playlist.php?resultsnumber=20&format=json&fct=getfrommood&trackvalence={ mood['valence'] }&trackarousal={ mood['arousal'] }"
            response = requests.get(url)

            playlist = list(map(
                lambda t: Track(trip=self, artist=t['artist_display_name'], title=t['title']),
                response.json()['tracks']['track']
            ))

            self.tracks.bulk_create(playlist)

        except socket.error:
            pass

    def __weather_to_mood(self):
        if self.weather == 'Clear':
            valence = 1_000_000
            arousal = 700_000
        elif self.weather == 'Clouds':
            valence = 400_000
            arousal = 300_000
        elif self.weather == 'Rain':
            valence = 100_000
            arousal = 200_000
        else:
            valence = 500_000
            arousal = 500_000

        return { 'valence': valence, 'arousal': arousal }

class Track(models.Model):
    trip = models.ForeignKey('Trip', on_delete=models.CASCADE, related_name='tracks')
    artist = models.CharField(max_length=255)
    title = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.artist} - {self.title}"
