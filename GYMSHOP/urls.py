from django.contrib import admin
from django.urls import path
from catalogo import views
from home.views import home
"""from .views import shop"""
urlpatterns = [
    path('admin/', admin.site.urls),
    path('catalogo/', views.catalogo, name='catalogo'),
    path('', home)
]
"""path("shop/", shop),"""