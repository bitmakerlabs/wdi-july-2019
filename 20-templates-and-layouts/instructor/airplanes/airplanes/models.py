from django.db import models
from django.forms import ModelForm

class Airplane(models.Model):
  make = models.CharField(max_length=255)
  model = models.CharField(max_length=255)
  description = models.TextField(null=True)
  wingspan = models.IntegerField(null=True)
  url = models.CharField(max_length=255, null=True)

  def __str__(self):
    return f"{self.make} {self.model}"

class AirplaneForm(ModelForm):
  class Meta:
    model = Airplane
    fields = ["make", "model", "description", "wingspan", "url"]