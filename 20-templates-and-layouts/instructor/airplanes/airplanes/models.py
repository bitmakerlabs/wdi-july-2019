from django.db import models
from django.forms import ModelForm
from django.core.validators import URLValidator, MinValueValidator
from django.core.exceptions import ValidationError


class Airplane(models.Model):

  make = models.CharField(max_length=255)
  model = models.CharField(max_length=255)
  description = models.TextField(null=True)
  wingspan = models.IntegerField(null=True, validators=[MinValueValidator(5)])
  url = models.CharField(max_length=255, null=True, validators=[URLValidator()])

  def __str__(self):
    return f"{self.make} {self.model}"

class AirplaneForm(ModelForm):

  class Meta:
    model = Airplane
    fields = ["make", "model", "description", "wingspan", "url"]
  
  # def clean(self):
  #   url_validator = URLValidator()
  #   url_validator(self.cleaned_data["url"])
  #   wingspan_validator = MinValueValidator(5)
  #   wingspan_validator(self.cleaned_data["wingspan"]) 