from django.db import models

# Create your models here.
class Product(models.Model):
    title= models.CharField(max_length=20)
    descrip= models.CharField(max_length=250)
    fecha= models.DateTimeField(auto_now_add= True)

    def __str__(self) -> str:
        return self.title


class New(models.Model):
    name= models.CharField(max_length=50)
    username= models.CharField(max_length=50)
    time= models.DateTimeField(auto_now_add= True)

    def __str__(self) -> str:
        return self.username