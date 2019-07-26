from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    notes = models.TextField()

    def __str__(self):
        return f"full_name={self.full_name()}, email={self.email_address}, note={self.notes}"

    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)
