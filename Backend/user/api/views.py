from rest_framework.viewsets import ModelViewSet
from ..api.serializers import UserSerializer
# from ..models import Member
# from django.contrib.auth.models import User

from django.contrib.auth import get_user_model
User = get_user_model()

class MemberViewSet(ModelViewSet):
    queryset = User.objects.all()
    # queryset = Member.objects.all()
    serializer_class = UserSerializer


