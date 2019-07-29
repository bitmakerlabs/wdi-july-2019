from django.shortcuts import render
from django.http import HttpResponseRedirect
from airplanes.models import Airplane 


def index(request):
  return HttpResponseRedirect("/airplanes")

def all(request):
  airplanes = Airplane.objects.all()
  context = {"airplanes": airplanes}
  return render(request, 'all.html', context)

def show(request, id):
  airplane = Airplane.objects.get(pk=id)
  context = {"airplane": airplane}
  return render(request, 'show.html', context)
