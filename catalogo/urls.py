from django.urls import path, include
from rest_framework import routers

from catalogo import views

router= routers.DefaultRouter()
router.register(r'v1',views.ProductView, 'tastk')

urlpatterns = [
    path('api/', include(router.urls)),
    path("shop/", views.shop,)
]


#/product/api/v1/