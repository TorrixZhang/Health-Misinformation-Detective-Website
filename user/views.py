from django.shortcuts import render, HttpResponse, reverse, redirect
from django.http import JsonResponse
from django.views import View

from rest_framework.viewsets import ModelViewSet
from .serializers import MemberModelSerializer
from .models import Member


# Create your views here.
class MemberModelViewSet(ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberModelSerializer
