from rest_framework import serializers

from .models import New_Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= New_Product
        fields= '__all__'