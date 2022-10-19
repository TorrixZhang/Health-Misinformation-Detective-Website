# import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser


# from django.contrib.auth.models import User


# Create your models here.
# class Member(models.Model):
#     # id = models.AutoField(primary_key=True)
#     username = models.CharField(primary_key=True, max_length=16)
#     password = models.CharField(max_length=16, default="123456")
#     email = models.EmailField(max_length=50, unique=True)
#     identity = models.CharField(max_length=16, default='Normal',
#                                 choices=[('Normal', 'Normal'), ('Professional', 'Professional')])


class Member(AbstractUser):
    username = models.CharField(primary_key=True, max_length=16)
    password = models.CharField(max_length=200, default="123456")
    email = models.EmailField(max_length=50, unique=True)
    identity = models.CharField(max_length=16, default='Normal',
                                choices=[('Normal', 'Normal'), ('Professional', 'Professional')])
