from rest_framework import serializers
from . models import Article
from django.contrib.auth.models import User

class ArticleSerializer(serializers.ModelSerializer):
    user=serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model=Article
        fields=['user','title','text','time','image']


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model =User
        fields=['username','password']


