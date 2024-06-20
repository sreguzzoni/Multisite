from django.contrib import admin
from django.urls import path
from . import views  # Import views from the current package

urlpatterns = [
    path('admin/', admin.site.urls),
    path('personal/intro/', views.intro, name='intro'),
    path('personal/hobbies/', views.hobbies, name='hobbies'),
    path('personal/favourites/', views.favourites, name='favourites'),
]
