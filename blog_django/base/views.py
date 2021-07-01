from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from rest_framework.generics import GenericAPIView
from . models import Article
from . serializers import ArticleSerializer,LoginSerializer,ArticlePublishSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate,login,logout
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
# Create your views here.

class Login(GenericAPIView):
    def post(self,request):
        print(request.data)
        user=authenticate(username=request.data['username'],password=request.data['password'])
        login(request,user)
        print(user)
        return Response({"login status":"success"},status=status.HTTP_200_OK)

class Logout(GenericAPIView):
    def get(self,request):
        logout(request)
        return Response({"auth":"logged out"},status=status.HTTP_200_OK)

class LogoutView(GenericAPIView):
    def post(self,request):
        logout(request)
        return Response({"status":"logged out"},status=status.HTTP_200_OK)

class AllArticles(GenericAPIView):
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    # permission_classes=[IsAuthenticated]
    
    def get(self,request):   
        print(request.user)
        articleObjs=Article.objects.all().order_by('-time')
        serializer=ArticleSerializer(articleObjs,many=True)
        return Response({"data":serializer.data,"user":request.user.username},status=status.HTTP_200_OK)

class PublishArticle(GenericAPIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        serializer=ArticlePublishSerializer(data=request.data,context={'request':request})
        if(serializer.is_valid()):
            serializer.save()
            return Response({"response":"Article published"},status=status.HTTP_201_CREATED)
        return Response({"response":"Article not published"},status=status.HTTP_400_BAD_REQUEST)
