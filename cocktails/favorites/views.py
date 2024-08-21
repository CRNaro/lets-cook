# from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from .models import FavoriteCocktail
from django.shortcuts import redirect

# def home(request):
#     return render(request, 'home.html')
def home(request):
    return redirect('/admin/')

def favorites_list(request):
    favorites = FavoriteCocktail.objects.all()
    favorites_json = serializers.serilize('json', favorites)
    return JsonResponse(favorites_json, safe=False)