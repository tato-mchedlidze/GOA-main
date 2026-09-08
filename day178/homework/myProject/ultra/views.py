from django.http import HttpResponse

def laptop_list(request):
    return HttpResponse("Asus, Huawei, LG, Razer")

def asus(request):
    return HttpResponse("Asus - i7, OLED screen, thin and light")

def huawei(request):
    return HttpResponse("Huawei - i5, touchscreen, metal body")

def lg(request):
    return HttpResponse("LG - i7, under 1kg, long battery")

def razer(request):
    return HttpResponse("Razer - i7, RTX GPU, gaming laptop")

