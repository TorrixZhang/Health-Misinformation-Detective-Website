from rest_framework import permissions

from rest_framework.generics import ListAPIView
from ..models import WritingsPost
from .serializers import WritingsPostSerializer
from rest_framework.viewsets import ModelViewSet


class WritingsPostListView(ListAPIView):
    queryset = WritingsPost.objects.order_by('-date_created')
    serializer_class = WritingsPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)


class WritingsPostCreateView(ModelViewSet):
    serializer_class = WritingsPostSerializer
    queryset = WritingsPost.objects.all()
    permission_classes = (permissions.AllowAny,)
