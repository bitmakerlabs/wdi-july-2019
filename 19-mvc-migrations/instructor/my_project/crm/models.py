from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    note = models.TextField()

    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)
