from django.shortcuts import render

def intro(request):
    return render(request, 'intro.html')

def hobbies(request):
    return render(request, 'hobbies.html')

def favourites(request):
    return render(request, 'favourites.html')
