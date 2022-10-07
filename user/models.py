import datetime

from django.db import models


# Create your models here.


class Member(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=16, null=True)
    password = models.CharField(max_length=16, default="123456")
    email = models.EmailField(max_length=50, unique=True)
    identity = models.CharField(max_length=16, default='Normal')


