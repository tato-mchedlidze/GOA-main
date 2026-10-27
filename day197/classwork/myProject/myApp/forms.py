from django import forms

# <input type="email" name='user_email' placeholder='email'><br><br>
# <input type="text" name='user_name' placeholder='username'><br><br>
# <input type="number" name='user_age' placeholder='age'><br><br>
# <input type="password" name='user_password' placeholder='password'><br><br>

class RegisterForm(forms.Form):
    email = forms.EmailField()
    username = forms.CharField()
    age = forms.IntegerField()
    password = forms.CharField()


# <input type="email" name='user_email' placeholder='email'><br><br>
# <input type="password" name='user_password' placeholder='password'><br><br>

class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField()