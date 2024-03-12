from django.contrib import admin
from django.urls import path
from catalogo import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('catalogo/', views.catalogo, name='catalogo')
]
