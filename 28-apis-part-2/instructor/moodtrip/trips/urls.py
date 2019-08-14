from django.urls import path
from trips import views

urlpatterns = [
  path('', views.index),
  path('<int:pk>', views.show)
]
