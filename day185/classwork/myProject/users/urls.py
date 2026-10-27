from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_users, name='main_users'),
    path('register/', views.register_user, name='add_user'),
]

