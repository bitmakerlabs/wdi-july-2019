from rest_framework import serializers
from moodtrip.models import Trip, Track

class TripListSerializer(serializers.ModelSerializer):
    tracks_count = serializers.SerializerMethodField()

    class Meta:
        model = Trip
        fields = ('id', 'url', 'location', 'tracks_count')

    def get_tracks_count(self, obj):
        return obj.tracks.count()

class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Track
        fields = ('artist', 'title')

class TripDetailSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Trip
        fields = ('id', 'location', 'weather', 'tracks')
