from rest_framework import serializers
from . models import Article
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','first_name','last_name']

class ArticleSerializer(serializers.ModelSerializer):
    user=UserSerializer('user')
    class Meta:
        model=Article
        fields=['user','title','text','time','image']


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields=['username','password']

