from django.http import HttpResponse

def laptop_list(request):
    return HttpResponse("HP, ROG, Samsung, Apple")

def hp(request):
    return HttpResponse("HP - i5, 8GB RAM, 512GB SSD")

def rog(request):
    return HttpResponse("ROG - i7, 16GB RAM, RTX GPU")

def samsung(request):
    return HttpResponse("Samsung - i5, 8GB RAM, AMOLED screen")

def apple(request):
    return HttpResponse("Apple - M chip, 24GB RAM, long battery")
