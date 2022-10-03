from rest_framework import serializers
from . models import *


class MemberModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = "__all__"
