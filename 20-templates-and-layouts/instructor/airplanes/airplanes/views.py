from django.shortcuts import render
from django.http import HttpResponseRedirect
from airplanes.models import Airplane, AirplaneForm 
import pdb


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

def new(request):
  form = AirplaneForm()
  context = {"form": form, "message": "Create New Airplane", "action": "/airplanes/create"}
  return render(request, 'form.html', context)

def create(request):
  form = AirplaneForm(request.POST)
  form.save()  
  return HttpResponseRedirect('/airplanes')

def edit(request, id):
  airplane = Airplane.objects.get(pk=id)
  form = AirplaneForm(instance=airplane)
  action = f"/airplanes/{airplane.pk}/update"
  context = {"airplane": airplane, "form": form, "message": "Edit Airplane", "action": action}
  return render(request, 'form.html', context)

def update(request, id):
  airplane = Airplane.objects.get(pk=id)
  form = AirplaneForm(request.POST, instance=airplane)
  form.save()
  return HttpResponseRedirect("/airplanes")