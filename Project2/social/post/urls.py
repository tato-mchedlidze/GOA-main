from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('add/', views.post_add, name='post_add'),
    path('delete/<int:id>/', views.post_delete, name ='post_delete'),
    path('like/<int:id>/', views.post_like, name='post_like'),
    path('comment/<int:id>/', views.post_comment, name = 'post_comment')
]