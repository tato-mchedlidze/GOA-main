from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(null=True, blank=True)

# Create your models here.
# class User(models.Model):
#     username = models.CharField()
#     email = models.EmailField()
#     password = models.CharField()
#     is_active = models.BooleanField(default=True)
#     avatar = models.ImageField(upload_to='avatar/', null=True, blank=True)

#     def __str__(self):
#         return self.username
        
