from django.http import HttpResponse
from django.shortcuts import render
from moodtrip.models import Trip

def index(request):
    context = { 'trips': Trip.objects.all() }
    response = render(request, 'index.html', context)
    return HttpResponse(response)

def show(request, pk):
    context = { 'trip': Trip.objects.get(pk=pk) }
    response = render(request, 'show.html', context)
    return HttpResponse(response)
