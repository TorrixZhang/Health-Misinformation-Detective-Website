from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
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

class WritingsPostDetailView(RetrieveAPIView):
    queryset = WritingsPost.objects.order_by('-date_created')
    serializer_class = WritingsPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)


class WritingsPostCategoryView(APIView):
    serializer_class = WritingsPostSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = WritingsPost.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = WritingsPostSerializer(queryset, many=True)

        return Response(serializer.data)
