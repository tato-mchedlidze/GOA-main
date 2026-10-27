from django.shortcuts import render
from .models import Product

def add_product(request):
    if request.method == 'POST':
        Product.objects.create(name=request.POST['name'], price=request.POST['price'])
    return render(request, 'products/form.html')
