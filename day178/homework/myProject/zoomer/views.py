from django.http import HttpResponse

def laptop_list(request):
    return HttpResponse("Lenovo, Dell, MSI, Acer")

def lenovo(request):
    return HttpResponse("Lenovo - Core Ultra, 16GB RAM, business laptop")

def dell(request):
    return HttpResponse("Dell - i7, 16GB RAM, premium build")

def msi(request):
    return HttpResponse("MSI - i7, RTX GPU, gaming laptop")

def acer(request):
    return HttpResponse("Acer - i7, RTX GPU, RGB keyboard")
