from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('description', 'image')

    def clean_description(self):
        description = self.cleaned_data.get('description')
        if description and len(description) > 100:
            raise forms.ValidationError("აღწერა არ უნდა აღემატებოდეს 100 სიმბოლოს!")
        return description
    