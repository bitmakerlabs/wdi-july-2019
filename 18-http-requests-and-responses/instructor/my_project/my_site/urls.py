"""my_site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from datetime import datetime
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import path

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

# Route
urlpatterns = [
    path('hello/', hello),
    path('goodbye/', goodbye),
    path('bonjour/', bonjour),
    path('todo_list/', todo_list),
]
