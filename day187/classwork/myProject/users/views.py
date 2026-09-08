from django.shortcuts import render, redirect
from .models import User

def register_user(request):
    if request.method == 'POST':
        username = request.POST.get('user_name')
        email = request.POST.get('user_email')
        age = request.POST.get('user_age')
        password = request.POST.get('password')

        new_user = User(username=username, email=email, age=age, password=password)
        new_user.save()

        return redirect('login')
    return render(request, 'users_registration.html')

def login_user(request):
    context = {'errors': []}
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            User.objects.get(email=email, password=password)
        except:
            context['errors'] = ['invalid email or password']

    return render(request, 'users_login.html', context)

    