from django.shortcuts import render
from rest_framework import viewsets, permissions

from .serializer import DataUserSerializer
from .models import DataUser

class DataUserView(viewsets.ModelViewSet):
    serializer_class=DataUserSerializer
    permission_classes=[permissions.AllowAny]
    queryset=DataUser.objects.all()


def dataSignup(request):
    return render(request, 'signUp.html')