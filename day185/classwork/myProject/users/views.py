from django.shortcuts import render, redirect
from .models import User

def all_users(request):
    users = User.objects.all()
    return render(request, 'users_list.html', {'users': users})

def register_user(request):
    if request.method == 'POST':
        email = request.POST.get('user_email')
        username = request.POST.get('user_name')
        password = request.POST.get('password')

        new_user = User(username=username, email=email, password=password)
        new_user.save()

        return redirect('main_users')
    return render(request, 'users_registration.html')
