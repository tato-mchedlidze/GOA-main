from django import forms
from .models import User

class login(forms.Form):
    username = forms.CharField()
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)


class register(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def clean_username(self):
        username = self.cleaned_data.get('username')
        forbidden_chars = ['@', '#', '$']
        
        if any(char.isdigit() for char in username):
            raise forms.ValidationError("Username არ უნდა შეიცავდეს რიცხვს!")
            
        if any(char in forbidden_chars for char in username):
            raise forms.ValidationError("Username არ უნდა შეიცავდეს შემდეგ სიმბოლოებს: @, #, $")
            
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        
        if not email.endswith('@gmail.com'):
            raise forms.ValidationError("Email აუცილებლად უნდა მთავრდებოდეს @gmail.com-ით!")
            
        return email

    def clean_password(self):
        password = self.cleaned_data.get('password')
        
        if len(password) < 8:
            raise forms.ValidationError("პაროლი აუცილებლად უნდა იყოს მინიმუმ 8 სიმბოლოსგან შემდგარი!")
            
        if not any(char.isdigit() for char in password):
            raise forms.ValidationError("პაროლი უნდა შეიცავდეს მინიმუმ 1 რიცხვს!")
            
        return password

class ProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        widgets = {
            'password': forms.PasswordInput()
        }