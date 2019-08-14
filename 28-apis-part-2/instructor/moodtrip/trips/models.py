from django.forms import ModelForm
from moodtrip.models import Trip

class TripForm(ModelForm):

    class Meta:
        model = Trip
        fields = ['location']
