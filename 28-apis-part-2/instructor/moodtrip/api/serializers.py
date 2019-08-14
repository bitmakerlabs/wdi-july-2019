from rest_framework import serializers
from moodtrip.models import Trip, Track

class TripListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = ('id', 'location')

class TripDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = ('id', 'location', 'weather', 'tracks')
