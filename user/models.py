import datetime

from django.db import models


# Create your models here.


class Member(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=16, null=True, unique=True)
    password = models.CharField(max_length=16, default="123456")
    email = models.EmailField(max_length=50)
    identity = models.PositiveSmallIntegerField(default=0, choices=((0, 'Normal'), (1, 'Professional')))


