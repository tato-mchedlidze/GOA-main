from django.db import models

# migration: django ის ფაილი, რომელიც თარგმნის models.py ში დაწერილ python კოდს
# (მაგ. ეს Product კლასი) sql ბრძანებებში, რომელიც რეალურად ქმნის/ცვლის
# ცხრილს მონაცემთა ბაზაში
# migrate: უშვებს migration ფაილს და რეალურად ქმნის/ცვლის ცხრილს ბაზაში

class Product(models.Model):
    title = models.CharField()
    price = models.IntegerField()
    category = models.CharField()
