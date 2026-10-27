from django.db import models

class Product(models.Model):
    title = models.CharField()
    price = models.IntegerField()
    category = models.CharField()

    