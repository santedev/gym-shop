from django.shortcuts import render
from django.views.generic import TemplateView


def shop(request):
    return render(request, 'shop.html')


class Index(TemplateView): #Clase principal del index
    template_name = 'shop.html'
