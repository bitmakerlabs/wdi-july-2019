from django.db import models

class Airplane(models.Model):

  make = models.CharField(max_length=255)
  model = models.CharField(max_length=255, null=True)

  def __str__(self):
    return f"{self.make} {self.model}"
