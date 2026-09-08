from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='user_register'),
    path('login/', views.login_user, name='user_login'),
]
