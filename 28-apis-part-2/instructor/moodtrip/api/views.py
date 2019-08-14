from django.shortcuts import render
from django.http import JsonResponse
from moodtrip.models import Trip

def index(request):
    trips = Trip.objects.all()
    data = list(trips.values())
    return JsonResponse(data, safe=False)
