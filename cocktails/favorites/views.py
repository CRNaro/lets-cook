# from django.shortcuts import render
import json
import logging
from django.http import JsonResponse
from django.core import serializers
from .models import FavoriteCocktail
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_protect

# def home(request):
#     return render(request, 'home.html')
@csrf_protect
def favorites(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print('Received data:', data,) 

        favorite = FavoriteCocktail.objects.create(
            name=data['strDrink'],
            description=data.get('strInstructions',''),
            ingredients=', '.join([data.get(f'strIngredient{i}', '') for i in range(1, 16) if data.get(f'strIngredient{i}')]),
            instructions=data.get('strInstructions', '')
        )
        print('Favorite created:', favorite)
        return JsonResponse({'message': 'success'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    


# def favorites(request):
#     if request.method == 'POST':
#         csrf_token = request.META.get('HTTP_X_CSRFTOKEN')
#         print('CSRF token:', csrf_token)
#         data = json.loads(request.body)
#         favorite = FavoriteCocktail.objects.create(
#             name=data['name'],
#             description=data['description'],
#             ingredients=data['ingredients'],
#             instructions=data['instructions']
#         )
#         return JsonResponse({'message': 'success'})
#     else:
#         return JsonResponse({'error': 'Invalid request method'}, status=405)

# Debugging why data is not being sent to the server
logger = logging.getLogger(__name__)

def favorites(request):
    print("check to see if print statement is working")
    if request.method == 'POST':
        data = json.loads(request.body)
        logger.info('Received data: %s', data)
        favorite = FavoriteCocktail.objects.create(
            name=data['name'],
            description=data['description'],
            ingredients=data['ingredients'],
            instructions=data['instructions']
        )
        logger.info('Favorite created: %s', favorite)
        return JsonResponse({'message': 'success'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def home(request):
    return redirect('/admin/')

def favorites_list(request):
    favorites = FavoriteCocktail.objects.all()
    favorites_json = serializers.serialize('json', favorites)
    favorites_list = json.loads(favorites_json)
    return JsonResponse(favorites_list, safe=False)

