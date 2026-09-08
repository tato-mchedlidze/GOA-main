from django.contrib.auth.models import User
from django.contrib.auth import authenticate


def create_user(data):
    user = User.objects.create_user(
        username=data.get('username'),
        email=data.get('email'),
        password=data.get('password'),
    )
    return user


def login_account(data):
    # LoginForm collects email, so look up the matching username first
    try:
        matched_user = User.objects.get(email=data.get('email'))
    except User.DoesNotExist:
        return None

    return authenticate(username=matched_user.username, password=data.get('password'))
