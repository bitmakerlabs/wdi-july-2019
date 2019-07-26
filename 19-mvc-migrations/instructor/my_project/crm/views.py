from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from crm.models import Contact

def root_path(request):
    return HttpResponseRedirect('contacts')

def contacts_index(request):
    context = { 'contacts': Contact.objects.all() }
    response = render(request, 'contacts_index.html', context)
    return HttpResponse(response)
