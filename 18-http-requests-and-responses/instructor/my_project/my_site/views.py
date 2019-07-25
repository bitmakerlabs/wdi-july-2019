from datetime import datetime
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

def hello(request):
    response = render(request, 'hello.html')
    return HttpResponse(response)

def bonjour(request):
    return HttpResponseRedirect('/hello/')

def goodbye(request):
    return HttpResponse('Goodbye Dave')

def todo_list(request):
    context = {
        'name': 'Eden',
        'current_time': datetime.now(),
        'profile_pic_url': 'https://cataas.com/cat',
        'todo_list': ['Feed cat', 'Go to gym', 'Call girlfriend', 'Eat lunch']
    }
    response = render(request, 'todo_list.html', context)
    return HttpResponse(response)
