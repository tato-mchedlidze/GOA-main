from django.db import models

class Phone(models.Model):
    name = models.CharField()
    brand = models.CharField()
    price = models.IntegerField()
    storage = models.IntegerField()
    color = models.CharField()

    def __str__(self):
        return self.name
