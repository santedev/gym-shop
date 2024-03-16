from django.urls import path, include
from rest_framework import routers

from login import views

router=routers.DefaultRouter()
router.register(r'submit', views.DataUserView)

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', views.dataSignup)
]
