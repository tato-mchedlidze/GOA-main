from django.db import models

class User(models.Model):
    username = models.CharField()
    email = models.CharField()
    age = models.IntegerField()
    password = models.CharField()