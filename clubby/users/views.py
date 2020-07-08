from django.shortcuts import render
from django.http import JsonResponse
import json
import logging

def index(request):
    logging.info(request)
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

def webhook(request):
    jsondata = request.body
    logging.warning(jsondata)
    data = json.loads(jsondata)
    logging.warning(data)

    return JsonResponse({
        'message': "hello"
    })
