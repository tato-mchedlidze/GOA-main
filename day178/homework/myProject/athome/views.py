from django.http import HttpResponse

def laptop_list(request):
    return HttpResponse("Microsoft, Xiaomi, Dynabook, Framework")

def microsoft(request):
    return HttpResponse("Microsoft - touchscreen, minimal design")

def xiaomi(request):
    return HttpResponse("Xiaomi - i5, budget-friendly")

def dynabook(request):
    return HttpResponse("Dynabook - i5, business laptop")

def framework(request):
    return HttpResponse("Framework - i7, modular and repairable")
