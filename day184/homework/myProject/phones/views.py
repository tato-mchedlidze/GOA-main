from django.shortcuts import render, get_object_or_404, redirect
from .models import Phone

def phone_list(request):
    return render(request, 'phones/list.html', {'phones': Phone.objects.all()})

def phone_detail(request, id):
    return render(request, 'phones/detail.html', {'phone': get_object_or_404(Phone, id=id)})

def phone_delete(request, id):
    if request.method == 'POST':
        get_object_or_404(Phone, id=id).delete()
    return redirect('phone_list')
