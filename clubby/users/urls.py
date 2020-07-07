from django.urls import path
from django.views.decorators.csrf import csrf_exempt


from . import views

app_name = 'users'
urlpatterns = [
    path('', csrf_exempt(views.index), name='index'),
    path('privacy/', views.privacy, name='privacy'),
    path('tos/', views.tos, name='tos'),
    path('create_user/', csrf_exempt(views.create_user), name='create_user'),
]