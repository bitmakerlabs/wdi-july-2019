from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from robots.models import Robot
from django.core.exceptions import ValidationError
import pdb
import json

def robots_index(request):
  context = { 'robots' : Robot.objects.all() }
  response = render(request, 'robots.html', context)
  return HttpResponse(response)

def robots_show(request, id):
  if request.is_ajax():
    robot = Robot.objects.get(pk=id)
    data = {
      "name" : robot.name,
      "address" : robot.address,
      "model_number" : robot.model_number,
      "lasers" : robot.lasers,
      "japanese" : robot.japanese
    }
    return JsonResponse(data)
  else:
    context = { 'robot': Robot.objects.get(pk=id) }
    response = render(request, 'robot.html', context)
    return HttpResponse(response)

def robots_edit(request, id):
  robot = Robot.objects.get(pk=id)
  context = { 'robot': robot, 'action': 'update' }
  response = render(request, 'form_wrapper.html', context)
  return HttpResponse(response)

def robots_update(request, id):
  robot = Robot.objects.get(pk=id)
  robot.name = request.POST["name"]
  robot.model_number = request.POST["model_number"]
  robot.address = request.POST["address"]
  try:
    robot.full_clean()
  except ValidationError as err:
    context = {'robot': robot, 'action': 'update', 'error': err }
    response = render(request, 'form_wrapper.html', context)
    return HttpResponse(response)
  robot.save()
  return redirect('/')

def robots_new(request):
  if request.is_ajax():
    robot = Robot()
    context = { 'robot': robot, 'action': 'create' }
    response = render(request, 'form.html', context)
    return HttpResponse(response)
  else:
    robot = Robot()
    context = { 'robot': robot, 'action': 'create' }
    response = render(request, 'form_wrapper.html', context)
    return HttpResponse(response)

def robots_create(request):
  robot = Robot()
  print(request.POST)
  if request.is_ajax():
    parsed_json = json.loads(request.body)
    robot.name = parsed_json["name"]
    robot.model_number = parsed_json["model_number"]
    robot.address = parsed_json["address"]
  else:
    robot.name = request.POST["name"]
    robot.model_number = request.POST["model_number"]
    robot.address = request.POST["address"]

  try:
    robot.full_clean()
  except ValidationError as err:
    context = {'robot': robot, 'action': 'create', 'error': err }
    response = render(request, 'form_wrapper.html', context)
    return HttpResponse(response)
  robot.save()

  if request.is_ajax():
    pass

    # send back a JSON response with the new robot
  else:
    return redirect('/')

def robots_delete(request, id):
  robot = Robot.objects.get(pk=id)
  robot.delete()
  return redirect('/')
