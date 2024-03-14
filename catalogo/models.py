from django.db import models


class New_Product(models.Model):
    image= models.ImageField(upload_to="catalogo/images/")
    name= models.CharField(max_length=30)
    description= models.CharField(max_length=50)
    price=  models.IntegerField()
    public_date= models.DateTimeField(auto_now_add= True)

    def __str__(self):
        return self.name
    
