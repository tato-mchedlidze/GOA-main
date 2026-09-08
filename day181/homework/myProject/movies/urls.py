from django.urls import path
from . import views

urlpatterns = [
    path('', views.movie_list),
    path('year/<int:movie_id>/', views.movie_year),
    path('<int:movie_id>/', views.movie_detail),
]
