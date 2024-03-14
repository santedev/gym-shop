from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import New_Product

class ProductView(viewsets.ModelViewSet):
    serializer_class= ProductSerializer
    queryset= New_Product.objects.all()
