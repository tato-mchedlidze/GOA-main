import random
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.conf import settings
from .models import User
from .form import ProfileForm, register, login as LoginForm

def register_user(request):
    if request.method == 'POST':
        form = register(request.POST)
        if form.is_valid():
            alp = 'qwertyuiopasdfghjklmzxcvbnm1234567890'
            verification_code = ''.join(random.choice(alp) for _ in range(6))
            
            request.session['verification_code'] = verification_code
            request.session['user_info'] = form.cleaned_data
            
            send_mail(
                subject='Verification Code',
                message=f"Your verification code is {verification_code}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[form.cleaned_data.get('email')]
            )
            return redirect('verification')
    else:
        form = register()
        
    return render(request, 'register_form.html', {'register_form': form})

def verify_user(request):
    verification_code = request.session.get('verification_code')
    user_info = request.session.get('user_info')
    user_input = request.GET.get("verification_code")
    
    if user_input:
        if user_input == verification_code and user_info:
            new_user = User.objects.create_user(
                username=user_info.get('username'),
                email=user_info.get('email'),
                password=user_info.get('password')
            )
            del request.session['verification_code']
            del request.session['user_info']
            
            return redirect('login')
        else:
            return render(request, 'user_verification.html', {'error': 'Incorrect code'})
            
    return render(request, 'user_verification.html')

def login_user(req):
    if req.method == 'POST':
        username = req.POST.get('username')
        password = req.POST.get('password')
        
        user = authenticate(req, username=username, password=password)
        
        if user is not None:
            login(req, user)
            return redirect('profile')
        else:
            return render(req, 'login_form.html', {
                'login_form': LoginForm(),
                'error': 'Invalid username or password'
            })
            
    context = {'login_form': LoginForm()}
    return render(req, 'login_form.html', context)


def profile(req):
    current_user = req.user 
    
    if req.method == 'POST':
        img = req.FILES.get('avatar')
        if img:
            current_user.avatar = img
            current_user.save()
        return redirect('profile')
        
    return render(req, 'my-profile.html', {'current_user': current_user})


def profile_edit(req):
    current_user = req.user
    
    if req.method == 'POST':
        current_user.username = req.POST.get('username')
        current_user.email = req.POST.get('email')
        
        new_password = req.POST.get('password')
        if new_password:
            current_user.set_password(new_password)
            
        current_user.save()
        return redirect('profile')
        
    context = {'profile_form': ProfileForm()}
    return render(req, 'profile_edit.html', context)

def user_details(req, id):
    context = {
        'users': User.objects.get(id=id)
    }
    return render(req, 'user_detail.html', context)

def logout_user(request):
    logout(request)
    return redirect('login')