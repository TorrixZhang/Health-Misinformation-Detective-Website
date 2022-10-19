from django.contrib.auth.models import User
from rest_framework import serializers
from ..models import WritingsPost


# Serializers define the API representation.
class WritingsPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = WritingsPost
        fields = '__all__'
        lookup_field = 'slug'

