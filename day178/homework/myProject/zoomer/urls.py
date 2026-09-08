from django.urls import path
from . import views

urlpatterns = [
    path('', views.laptop_list),
    path('lenovo/', views.lenovo),
    path('dell/', views.dell),
    path('msi/', views.msi),
    path('acer/', views.acer),
]
