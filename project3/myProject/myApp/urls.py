from django.urls import path
from .views import task_view

urlpatterns = [
    path('tasks/', task_view),
]

