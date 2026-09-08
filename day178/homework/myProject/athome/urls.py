from django.urls import path
from . import views

urlpatterns = [
    path('', views.laptop_list),
    path('microsoft/', views.microsoft),
    path('xiaomi/', views.xiaomi),
    path('dynabook/', views.dynabook),
    path('framework/', views.framework),
]
