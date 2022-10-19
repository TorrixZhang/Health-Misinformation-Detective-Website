from ..api import views
from django.urls import path
from django.conf.urls import include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'', views.MemberViewSet, basename="user")
# router.register('member', views.MemberViewSet, basename="member")


# urlpatterns = [] + router.urls
urlpatterns = [
    path('', include(router.urls))
]
