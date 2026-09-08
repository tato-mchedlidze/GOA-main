from django.urls import path
from . import views

urlpatterns = [
    path('', views.bmw_home),
    path('e39/', views.e39),
    path('m3/', views.m3),
    path('m8/', views.m8)
]
