from rest_framework import serializers
from . models import Article
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','first_name','last_name']


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields=['username','password']


class RegistrationSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    conf_password=serializers.CharField(write_only=True)    
    class Meta:
        model=User
        fields=['username','email','password','conf_password']

class ArticleSerializer(serializers.ModelSerializer):
    user=UserSerializer('user')
    class Meta:
        model=Article
        fields=['user','title','text','time']

class ArticlePublishSerializer(serializers.ModelSerializer):
    user=serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model=Article
        fields=['user','title','text','time']
