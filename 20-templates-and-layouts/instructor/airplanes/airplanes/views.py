from django.shortcuts import render
from airplanes.models import *

def index(request):
  airplanes = Airplane.objects.all()
  context = {"airplanes": airplanes}
  return render(request, 'index.html', context)

def show(request, id):
  airplane = Airplane.objects.get(pk=id)
  context = {"airplane": airplane}
  return render(request, 'show.html', context)