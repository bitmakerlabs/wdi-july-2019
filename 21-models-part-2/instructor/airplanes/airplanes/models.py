from django.forms import ModelForm
from django.db import models
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
import pdb

class Airplane(models.Model):
  make = models.CharField(max_length=255)
  model = models.CharField(max_length=255)
  description = models.TextField(null=True)
  url = models.CharField(max_length=255, null=True, validators=[URLValidator])
  wingspan = models.IntegerField(null=True)

  def __str__(self):
    return f"{self.make} {self.model}"

class AirplaneForm(ModelForm):
  class Meta:
    model = Airplane
    fields = ["make", "model", "description", "url"]
  def clean(self):
    validator = URLValidator()
    validator(self.cleaned_data["url"])

class Comment(models.Model):
  message = models.CharField(max_length=255)
  airplane = models.ForeignKey("Airplane", on_delete=models.CASCADE, related_name="comments")

  def __str__(self):
    return f"{self.message}"

class CommentForm(ModelForm):
  class Meta:
    model = Comment
    fields = ["message"]

    
