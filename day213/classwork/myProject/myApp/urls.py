from django.urls import path
from .views import task_view, task_delete

urlpatterns = [
    path('tasks/', task_view),
    path('tasks/<int:pk>/', task_delete),
]
