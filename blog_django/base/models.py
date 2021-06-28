from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
# Create your models here.
class Article(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    text=models.CharField(max_length=1000)
    time=models.DateTimeField(auto_now_add=True)
    image=CloudinaryField()