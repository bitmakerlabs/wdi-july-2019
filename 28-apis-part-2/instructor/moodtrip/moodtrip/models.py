from django.db import models

class Trip(models.Model):
    location = models.CharField(max_length=255)
    weather = models.CharField(max_length=255)

    def __str__(self):
        return f"Trip to {self.location}"

class Track(models.Model):
    trip = models.ForeignKey('Trip', on_delete=models.CASCADE, related_name='tracks')
    artist = models.CharField(max_length=255)
    title = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.artist} - {self.title}"
