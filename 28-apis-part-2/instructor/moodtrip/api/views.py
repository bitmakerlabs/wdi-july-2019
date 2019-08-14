from rest_framework import generics
from moodtrip.models import Trip
from api.serializers import TripListSerializer, TripDetailSerializer

class TripList(generics.ListAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripListSerializer

class TripDetail(generics.RetrieveAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripDetailSerializer
