from django.urls import path, re_path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("member", views.MemberModelViewSet, basename="member")

urlpatterns = [

] + router.urls
