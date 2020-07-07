from django.shortcuts import render
from django.http import JsonResponse
import logging

def index(request):
    return render(request, "users/index.html")

def privacy(request):
    return render(request, "users/privacy.html")

def tos(request):
    return render(request, "users/tos.html")

def create_user(request):
    logging.info(request)
    return JsonResponse({
        'message': "hello"
    })