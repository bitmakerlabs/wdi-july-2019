from django.shortcuts import render
from django.http import HttpResponseRedirect
from airplanes.models import Airplane, AirplaneForm, Comment, CommentForm
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
  airplane = Airplane()
  form = AirplaneForm(instance=airplane)
  context = {"form": form}
  return render(request, 'new.html', context)

def create(request):
  form = AirplaneForm(request.POST)
  form.save()
  return HttpResponseRedirect('/airplanes')

def edit(request, id):
  airplane = Airplane.objects.get(pk=id)
  form = AirplaneForm(instance=airplane)
  context = {"form": form, "airplane": airplane}
  return render(request, 'edit.html', context)

def update(request, id):
  airplane = Airplane.objects.get(pk=id)
  form = AirplaneForm(request.POST, instance=airplane)
  if form.is_valid():
    form.save()
    return HttpResponseRedirect("/airplanes")
  else:
    context = {"form": form, "airplane": airplane}
    return render(request, 'edit.html', context)
  
def comment_create(request, airplane_id):
  airplane = Airplane.objects.get(pk=airplane_id)
  comment = Comment()
  comment.airplane = airplane
  form = CommentForm(request.POST, instance=comment)
  form.save()
  return HttpResponseRedirect(f'/airplanes/{airplane.id}')