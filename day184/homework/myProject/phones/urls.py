from django.urls import path
from . import views

urlpatterns = [
    path('', views.phone_list, name='phone_list'),
    path('<int:id>/', views.phone_detail, name='phone_detail'),
    path('delete/<int:id>/', views.phone_delete, name='phone_delete'),
]
