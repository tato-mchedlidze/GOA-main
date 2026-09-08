from django.urls import path
from . import views

urlpatterns = [
    path('', views.car_list),
    path('<str:car_title>/', views.car_detail),
]
