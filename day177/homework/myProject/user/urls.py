from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_list),
    path('delete/', views.user_delete),
    path('add/', views.user_add),
    path('edit/', views.user_edit),
]
