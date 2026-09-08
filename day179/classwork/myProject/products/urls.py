from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_products),
    path('<int:id>/', views.single_product)
]

