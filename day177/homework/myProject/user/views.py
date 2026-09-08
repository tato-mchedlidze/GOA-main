from django.http import HttpResponse

def user_list(request):
    return HttpResponse("all User info")

def user_delete(request):
    return HttpResponse("User delete")

def user_add(request):
    return HttpResponse("User add")

def user_edit(request):
    return HttpResponse("User edit")