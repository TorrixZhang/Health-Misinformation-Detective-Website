# import json
from django.contrib.auth.models import *
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from ..models import *
from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        # fields = "__all__"
        fields = ['username', 'password', 'email', 'identity']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
    # #
    def create(self, validated_data):
        member = User.objects.create_user(**validated_data)
        Token.objects.create(user=member)
        return member


    # def create(self, validated_data):
    #     member = Member.objects.create(**validated_data)
    #     return member


