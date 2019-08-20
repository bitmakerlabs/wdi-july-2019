from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from moodtrip.models import Trip
from trips.models import TripForm

def index(request):
    context = { 'trips': Trip.objects.all() }
    response = render(request, 'index.html', context)
    return HttpResponse(response)

def show(request, pk):
    context = { 'trip': Trip.objects.get(pk=pk) }
    response = render(request, 'show.html', context)
    return HttpResponse(response)

def new(request):
    form = TripForm()
    context = { 'form': form, 'action': '/trips/create' }
    response = render(request, 'form.html', context)
    return HttpResponse(response)

def create(request):
    form = TripForm(request.POST)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect('/trips')
    else:
        context = { 'form': form }
        response = render(request, 'form.html', context)
        return HttpResponse(response)
