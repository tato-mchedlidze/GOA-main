from django.urls import path
from . import views

urlpatterns = [
    path('', views.laptop_list),
    path('asus/', views.asus),
    path('huawei/', views.huawei),
    path('lg/', views.lg),
    path('razer/', views.razer),
]
