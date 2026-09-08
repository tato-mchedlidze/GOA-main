from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_todos, name='all_todos'),
    path('delete/<int:id>/', views.delete_todo, name='delete_todo'),
]