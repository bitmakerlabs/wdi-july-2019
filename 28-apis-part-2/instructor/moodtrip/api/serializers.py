from rest_framework import serializers
from moodtrip.models import Trip, Track

class TripListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trip
        fields = ('id', 'location')

class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Track
        fields = ('artist', 'title')

class TripDetailSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Trip
        fields = ('id', 'location', 'weather', 'tracks')
