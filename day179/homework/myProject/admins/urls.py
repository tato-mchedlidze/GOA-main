from django.urls import path
from . import views

urlpatterns = [
    path('', views.admin_list),
    path('<int:admins_id>/', views.admin_detail),
]

