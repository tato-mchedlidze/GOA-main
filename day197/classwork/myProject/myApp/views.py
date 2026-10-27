from django.shortcuts import render, redirect
from .utils import create_user, login_account
from .forms import RegisterForm, LoginForm


def register_user(request):
    if request.method == 'POST':
        create_user(request.POST)
        return redirect('user_login')

    context = {
        'register_form' : RegisterForm()
    }
    return render(request, 'users_registration.html', context)


def login_user(request):
    if request.method == 'POST':
        login_account(request.POST)
        return redirect('home')

    context = {
        'login_form' : LoginForm()
    }
    return render(request, 'users_login.html', context)
