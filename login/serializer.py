from rest_framework import serializers

from .models import DataUser

class DataUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=DataUser
        fields='__all__'
        read_only_fields=('id', 'created_at')