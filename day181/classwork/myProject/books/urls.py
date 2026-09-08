from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_books),
    path('<int:id>/', views.single_book),
    path('title/<int:id>/', views.book.title)
]
