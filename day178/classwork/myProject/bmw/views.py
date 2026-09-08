from django.shortcuts import render
from django.http import HttpResponse


def bmw_home (request):
    return HttpResponse('<p> bmw models: e39, m3, m8 <p>')

def e39 (request):
    return HttpResponse('<p> bmw e39 <p>')

def m3 (request):
    return HttpResponse('<p> bmw m3 <p>')

def m8 (request):
    return HttpResponse('<p> bmw m8 <p>')
