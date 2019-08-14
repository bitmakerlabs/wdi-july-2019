from django.urls import path
from trips import views

urlpatterns = [
  path('', views.index),
  path('new', views.new),
  path('create', views.create),
  path('<int:pk>', views.show)
]
