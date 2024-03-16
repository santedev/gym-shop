from django.urls import path, include
from rest_framework import routers

from login import views

router=routers.DefaultRouter()
router.register(r'signup', views.DataUserView)

urlpatterns = [
    path('', include(router.urls))
]
